import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDJsdLOyhXDEnHGdhra5uiPEMGOOQajI9k",
    authDomain: "payingcustomer-ec7f4.firebaseapp.com",
    projectId: "payingcustomer-ec7f4",
    storageBucket: "payingcustomer-ec7f4.appspot.com",
    messagingSenderId: "682230642496",
    appId: "1:682230642496:web:92cb7643408bdcbe89aca5",
    measurementId: "G-7L9ZV9L5TF"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { 
    firebase
};