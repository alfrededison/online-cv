const firebase = require('firebase');

const firebaseConfig = require('../keys/firebase');

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
