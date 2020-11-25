const functions = require('firebase-functions');

var admin = require('firebase-admin');
var serviceAccount = require("./trade-app-ichi-firebase-adminsdk-5kl3n-05fe62ac12.json"); // 自分の鍵jsonファイル

var defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://trade-app-ichi.firebaseio.com'
});//DBURLは固有のもの

console.log(defaultApp.name);  // "[DEFAULT]になっている"

// Auth関連
var defaultAuth = defaultApp.auth();

// Database関連
var defaultDatabase = defaultApp.database();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
