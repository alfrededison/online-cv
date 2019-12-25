const functions = require('firebase-functions');
const app = require('express')();

const cors = require('cors');
app.use(cors());

const {
  getAllResumes,
  getResume,
  postOneResume
} = require('./handlers/resumes');

app.get('/resumes', getAllResumes);
app.get('/resume/:resumeId', getResume);
app.post('/resume/:resumeId', postOneResume);

exports.api = functions.region('asia-east2').https.onRequest(app);
