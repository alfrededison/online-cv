const functions = require('firebase-functions');
const app = require('express')();

const cors = require('cors');
app.use(cors());

const {
  getResume,
  postOneResume
} = require('./handlers/resumes');

const {
  register,
  login,
  getAuthenticatedUser
} = require('./handlers/users');

// resumes routes
app.get('/resume/:resumeId', getResume);
app.post('/resume/:resumeId', postOneResume);

// users routes
app.post('/register', register);
app.post('/login', login);
app.get('/user', getAuthenticatedUser);

exports.api = functions.region('asia-east2').https.onRequest(app);
