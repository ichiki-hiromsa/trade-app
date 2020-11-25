import * as firebase from 'firebase/app'
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
