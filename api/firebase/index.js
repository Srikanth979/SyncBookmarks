const fireBaseVar = require('firebase');

// Initialize Firebase
const config = require('./firebaseConfig');

fireBaseVar.initializeApp(config);
const signUpPage = require('./signUp');
module.exports = signUpPage;