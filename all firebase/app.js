import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  , signInWithEmailAndPassword, signOut    } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import { getFirestore ,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyD52tNswEOG9bq-xqYotmQK3vRwa2rtm2Q",
    authDomain: "restaurent-app-dc0dd.firebaseapp.com",
    databaseURL: "https://restaurent-app-dc0dd-default-rtdb.firebaseio.com",
    projectId: "restaurent-app-dc0dd",
    storageBucket: "restaurent-app-dc0dd.appspot.com",
    messagingSenderId: "486216927034",
    appId: "1:486216927034:web:3f66472dcda9f897737203",
    measurementId: "G-0L52VFQ7ZS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
//   const db = getFirestore();

//   let nam = document.getElementById('nam')
  let email= document.getElementById('email')
  let password = document.getElementById('password')
  let btn = document.getElementById('btn')
  if(btn){
btn.addEventListener('click',()=>{


    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async(userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
    //   try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         // nam : nam.value,
    //         email : email.value,
    //         password :  password.value
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
      







      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
  
  })

  }
  



  let semail= document.getElementById('semail')
  let spassword = document.getElementById('spassword')
  let sbtn = document.getElementById('sbtn')

  if(sbtn){
    sbtn.addEventListener('click',()=>{


        signInWithEmailAndPassword(auth, semail.value, spassword.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         console.log(user,'User');
         location.href = 'welcome.html'
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage,'error');
        });



    })
  }




  let out = document.getElementById('out')
  if(out){
out.addEventListener('click',()=>{

    signOut(auth).then(() => {
       console.log(auth ,'succes'
        );
        location.href = 'index.html'
      }).catch((error) => {
        console.log(error);
      });
  })

  }
  