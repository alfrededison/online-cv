const JwtDecode = require('jwt-decode');
const HttpStatus = require('http-status-codes');
const FieldValue = require('firebase').firestore.FieldValue;
const firebase = require('../util/firebase');
const db = firebase.firestore();
const auth = firebase.auth();

const {
  validateSignUpData,
  validateLoginData
} = require('../util/validators');

// Sign users up
exports.register = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    resume: req.body.resume
  };

  const {valid, errors} = validateSignUpData(newUser);

  if (!valid) {
    res.status(HttpStatus.BAD_REQUEST).json(errors);
    return;
  }

  let token, userId;
  db.doc(`/users/${newUser.resume}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const err = new Error('This resume is already taken');
        err.code = 'duplicate-resume';
        throw err;
      } else {
        return auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        uid: userId,
        resume: newUser.resume,
        email: newUser.email,
        createdAt: FieldValue.serverTimestamp()
      };
      return db.doc(`/users/${newUser.resume}`).set(userCredentials);
    })
    .then(() => {
      return res.status(HttpStatus.CREATED).json({token});
    })
    .catch((err) => {
      console.error(err);
      switch (err.code) {
        case 'duplicate-resume':
          return res.status(HttpStatus.BAD_REQUEST).json({resume: err.message});
        case 'auth/invalid-email':
        case 'auth/email-already-in-use':
          return res.status(HttpStatus.BAD_REQUEST).json({email: err.message});
        case 'auth/weak-password':
          return res.status(HttpStatus.BAD_REQUEST).json({password: err.message});
        case 'permission-denied':
          return res.status(HttpStatus.BAD_REQUEST).json({general: "You don't have permission to perform this action"});
        default:
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({general: 'Something went wrong, please try again or contact support'});
      }
    });
};
// Log user in
exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const {valid, errors} = validateLoginData(user);

  if (!valid) {
    res.status(HttpStatus.BAD_REQUEST).json(errors);
    return;
  }

  auth.signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({token});
    })
    .catch((err) => {
      console.error(err);
      // auth/wrong-password
      // auth/user-not-user
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({general: 'Wrong credentials, please try again'});
    });
};

// Get own user details
exports.getAuthenticatedUser = (req, res) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    console.error('No token found');
    res.status(HttpStatus.UNAUTHORIZED).json({error: 'Unauthorized'});
    return;
  }

  const decodedToken = JwtDecode(idToken);
  if (!decodedToken.user_id) {
    console.error('Cannot find user id from token');
    res.status(HttpStatus.BAD_REQUEST).json({error: 'Bad format token'});
    return;
  }

  let userData = {};
  db.collection('users')
    .where('uid', '==', decodedToken.user_id)
    .limit(1)
    .get()
    .then((data) => {
      return res.json(data.docs[0].data());
    })
    .catch((err) => {
      console.error(err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: err.code});
    });
};