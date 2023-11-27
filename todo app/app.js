

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore ,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
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
  const db = getFirestore(app);

//   sign up start 

let btn = document.getElementById('btn')
if(btn){
let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

btn.addEventListener('click',()=>{


    createUserWithEmailAndPassword(auth, email.value, password.value ,name.value)
    .then(async(userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)

  


      name.value=""
      email.value=''
      password.value = ''
      // ...

      Swal.fire({
        title: "Good job!",
        text: "Sign up successful",
        icon: "success"
      });

     
      try {
        const docRef = await addDoc(collection(db, "users"), {
          Name: name.value,
         email: email.value ,
          password: password.value ,
         
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
   

location.href="./login.html"

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)


      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter all value",
        
      });


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
     
      

      Swal.fire({
        title: "Good job!",
        text: "Sign in successful",
        icon: "success"
      });


 const user = userCredential.user;
      console.log(user)

      semail.value=''
      spassword.value = ''
      // ...







      location.href="./todo.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter correct Email and password",
        
      });


    });
})
}