import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
   authDomain: "project-1-64704.firebaseapp.com",
   projectId: "project-1-64704",
   storageBucket: "project-1-64704.appspot.com",
   messagingSenderId: "658759651298",
   appId: "1:658759651298:web:26348013c0010a765cf3bb",
   measurementId: "G-XV94SF7FXY"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);



 let sibtn = document.getElementById('sibtn')
 

 sibtn.addEventListener('click',()=>{

    let sipassword = document.getElementById('sipass')
    let siemail = document.getElementById('siemail')



    signInWithEmailAndPassword(auth, siemail.value, sipassword.value)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)

  });

 })
