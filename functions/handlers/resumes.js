const HttpStatus = require('http-status-codes');
const FieldValue = require('firebase').firestore.FieldValue;
const db = require('../util/firebase').firestore();

// Fetch one resume
exports.getResume = (req, res) => {
  db.doc(`/resumes/${req.params.resumeId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(HttpStatus.NOT_FOUND).json({error: 'Resume not found'});
      }
      return res.json(doc.data());
    })
    .catch((err) => {
      console.error(err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: err.code});
    });
};

// Create/Update one resume
exports.postOneResume = (req, res) => {
  const resumeId = req.params.resumeId;
  if (!resumeId || resumeId.trim() === '') {
    res.status(HttpStatus.BAD_REQUEST).json({resumeId: 'ResumeId must not be empty'});
    return;
  }

  if (req.body.visibility === undefined) {
    req.body.visibility = true;
  }

  const resumeData = {
    Profile: req.body.Profile,
    About: req.body.About,
    PrimaryContact: req.body.PrimaryContact,
    SecondaryContacts: req.body.SecondaryContacts,
    Skills: req.body.Skills,
    Experiences: req.body.Experiences,
    Education: req.body.Education,
    Certificates: req.body.Certificates,
    Languages: req.body.Languages,
    Interests: req.body.Interests,
    visibility: req.body.visibility
  };

  db.collection('resumes')
    .doc(resumeId)
    .set({
      ...resumeData,
      resumeId,
      timestamp: FieldValue.serverTimestamp()
    })
    .then(() => {
      return res.json({
        resumeId: resumeId,
        timestamp: new Date()
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: 'something went wrong'});
    });
};
