
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 


 const firebaseConfig = {
   apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
   authDomain: "project-1-64704.firebaseapp.com",
   databaseURL: "https://project-1-64704-default-rtdb.firebaseio.com",
   projectId: "project-1-64704",
   storageBucket: "project-1-64704.appspot.com",
   messagingSenderId: "658759651298",
   appId: "1:658759651298:web:26348013c0010a765cf3bb",
   measurementId: "G-XV94SF7FXY"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);


 