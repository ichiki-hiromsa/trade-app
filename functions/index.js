const functions = require('firebase-functions');

const admin = require('firebase-admin');
const db =admin.firestore();
admin.initializeApp();//

var serviceAccount = require("./trade-app-ichi-firebase-adminsdk-5kl3n-05fe62ac12.json"); // 自分の鍵jsonファイル

//外部から呼び出すときはこっち？\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// var defaultApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://trade-app-ichi.firebaseio.com'
// });//DBURLは固有のもの

// Auth関連
var defaultAuth = defaultApp.auth();

// Database関連
// var defaultDatabase = defaultApp.database();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.testfunction = functions.https.onRequest((request, response) => {
  db.doc("/users/oYljL6ibEQRk3AKnNks0").get()
  ,then(doc=>{
    const data = doc.data()
    response.send(data);
  })
})
