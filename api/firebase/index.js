const fireBaseVar = require('firebase');
const config = require('./config/firebaseConfig'); //Firebase Config file
fireBaseVar.initializeApp(config);

const authFile = require('./auth/auth'); //Module written to use Firebase Auth

module.exports = {
    "auth": authFile,
    "firebaseConfigured": fireBaseVar
};