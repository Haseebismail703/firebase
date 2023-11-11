
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import { getAuth , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
 
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






 let btn1 = document.getElementById('subtn')
 

 btn1.addEventListener('click',() =>{
  let password = document.getElementById('spass')
    let email = document.getElementById('semail')



createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    window.location ='./signin.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    console.log(errorMessage)
    alert(errorCode)
  });


 })

  

 

 

