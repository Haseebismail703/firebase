

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
    authDomain: "project-1-64704.firebaseapp.com",
    projectId: "project-1-64704",
    storageBucket: "project-1-64704.appspot.com",
    messagingSenderId: "658759651298",
    appId: "1:658759651298:web:26348013c0010a765cf3bb",
    measurementId: "G-XV94SF7FXY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 

//   sign up start 

let btn = document.getElementById('btn')
if(btn){

let email = document.getElementById('email')
let password = document.getElementById('password')

btn.addEventListener('click',()=>{


    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      email.value=''
      password.value = ''
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      // ..
    });

})

}

// sign up end 

// sign in start


let sbtn = document.getElementById('sbtn')

if(sbtn){

let semail = document.getElementById('semail')
let spassword = document.getElementById('spassword')

sbtn.addEventListener('click',()=>{


    signInWithEmailAndPassword(auth, semail.value, spassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      alert('sign in succesfuly')
      semail.value=''
      spassword.value = ''
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
})
}