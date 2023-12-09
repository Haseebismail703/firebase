
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//  import { getAuth , createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
 import { getFirestore ,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 


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
//  const auth = getAuth(app);
 const db = getFirestore(app);



 let btn = document.getElementById('btn')
if(btn)
{
let karachi = document.getElementById('karachi')
let Select = document.getElementById('Select')
let Full = document.getElementById('Full')
let Father= document.getElementById('Father')
let email = document.getElementById('email')
let Phone = document.getElementById('Phone')
let getCNIC = document.getElementById('CNIC')
let Address= document.getElementById('Address')
let Date = document.getElementById('Date')
let gender = document.getElementById('gender')
let qualification = document.getElementById('qualification')
let Laptop = document.getElementById('Laptop')

btn.addEventListener('click',async()=>{

   //   // Full.value=""
    //   // password.value = ''
    //   // ...

      

     
      try {
        const docRef = await addDoc(collection(db, "users"), {
        karachi: 'karachi',
        Full: Full.value ,
        Select: Select.value ,
        Father: Father.value,
        email: email.value ,
        Phone: Phone.value ,
        getCNIC: getCNIC.value,
        Address: Address.value ,
        Date: Date.value ,
        gender: gender.value,
        qualification: qualification.value ,
        Laptop: Laptop.value ,
     



         
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
   

// location.href="./login.html"

    })
 

}

