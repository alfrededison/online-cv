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
    res.status(400).json(errors);
    return;
  }

  let token, userId;
  db.doc(`/users/${newUser.resume}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({resume: 'This resume is already taken'});
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
        userId,
        resume: newUser.resume,
        email: newUser.email,
        createdAt: FieldValue.serverTimestamp()
      };
      return db.doc(`/users/${newUser.resume}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({token});
    })
    .catch((err) => {
      console.error(err);
      switch (err.code) {
        case 'auth/email-already-in-use':
          return res.status(400).json({email: err.message});
        case 'auth/weak-password':
          return res.status(400).json({password: err.message});
        default:
          return res.status(500).json({general: 'Something went wrong, please try again or contact support'});
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
    res.status(400).json(errors);
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
        .status(403)
        .json({general: 'Wrong credentials, please try again'});
    });
};
