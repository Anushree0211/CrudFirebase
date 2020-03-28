import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqsLol7RoIhJSnKxqMfE-qlNS2g0d8lmE",
    authDomain: "curd-firebase.firebaseapp.com",
    databaseURL: "https://curd-firebase.firebaseio.com",
    projectId: "curd-firebase",
    storageBucket: "curd-firebase.appspot.com",
    messagingSenderId: "70418380007",
    appId: "1:70418380007:web:fd4ba9f347893770409e42",
    measurementId: "G-524YCKY6TS"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   export default firebase;