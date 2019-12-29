const FieldValue = require('firebase').firestore.FieldValue;
const db = require('../util/firebase').firestore();

exports.getAllResumes = (req, res) => {
  db.collection('resumes')
    .get()
    .then((data) => {
      let resumes = [];
      data.forEach((doc) => {
        resumes.push({
          resumeId: doc.id,
          ...doc.data()
        });
      });
      return res.json(resumes);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({error: err.code});
    });
};

// Fetch one resume
exports.getResume = (req, res) => {
  db.doc(`/resumes/${req.params.resumeId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({error: 'Resume not found'});
      }
      return res.json({
        resumeId: doc.id,
        ...doc.data()
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({error: err.code});
    });
};

// Create/Update one resume
exports.postOneResume = (req, res) => {
  const resumeId = req.params.resumeId;
  if (!resumeId || resumeId.trim() === '') {
    res.status(400).json({resumeId: 'ResumeId must not be empty'});
    return;
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
  };

  db.collection('resumes')
    .doc(resumeId)
    .set({
      ...resumeData,
      timestamp: FieldValue.serverTimestamp()
    })
    .then(() => {
      return res.json({
        resumeId: resumeId,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({error: 'something went wrong'});
    });
};
