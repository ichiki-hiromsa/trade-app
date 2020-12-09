// import * as firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPmTuxn4hqevx0vlAeZx2SKnUjsEl8l-A",
  authDomain: "trade-app-ichi.firebaseapp.com",
  databaseURL: "https://trade-app-ichi.firebaseio.com",
  projectId: "trade-app-ichi",
  storageBucket: "trade-app-ichi.appspot.com",
  messagingSenderId: "252217173678",
  appId: "1:252217173678:web:2e02c94eaa334ad4686f3f",
  measurementId: "G-17EG0SXK58"
};

firebase.initializeApp(firebaseConfig);

export default function(app,inject){
  inject('firebase',firebase)
}

// //試行錯誤
// //firebase appを全部使えるようにする
// var firebase = require("firebase");
// //初期設定を追加
// //ここで読み込めない
// firebase.initializeApp({
//   apiKey: "AIzaSyDPmTuxn4hqevx0vlAeZx2SKnUjsEl8l-A",
//   authDomain: "trade-app-ichi.firebaseapp.com",
//   databaseURL: "https://trade-app-ichi.firebaseio.com",
//   projectId: "trade-app-ichi",
//   storageBucket: "trade-app-ichi.appspot.com",
//   messagingSenderId: "252217173678",
// });

// // export default firebase;