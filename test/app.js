

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore  ,collection, addDoc ,doc, setDoc, updateDoc , serverTimestamp  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
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

// let btn = document.getElementById('btn')
// if(btn){

// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let sname = document.getElementById('sname')
// let phone = document.getElementById('phone')
// btn.addEventListener('click',()=>{


//     createUserWithEmailAndPassword(auth, email.value, password.value , phone.value,sname.value)
//     .then(async(userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       console.log(user)
//       // email.value=''
//       // password.value = ''
//       // ...
//       try {
//         await setDoc(doc(db, "users", user.uid), {
//           Name : sname.value,
//           email: email.value,
//           password: password.value,
//           phone: phone.value,
//           uid : user.uid
          
//         });

//         console.log('added');
//         // console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
//       // location.href = './login.html'







//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage)

//       // ..
//     });

// })

// }

// // sign up end 

// // sign in start


// let sbtn = document.getElementById('sbtn')

// if(sbtn){

// let semail = document.getElementById('semail')
// let spassword = document.getElementById('spassword')

// sbtn.addEventListener('click',()=>{


//     signInWithEmailAndPassword(auth, semail.value, spassword.value)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log(user)
//       alert('sign in succesfuly')
//       semail.value=''
//       spassword.value = ''

//       location.href = './welcome.html'
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage)
//     });
// })
// }




// Read data 





// let getalluser = async()=>{

//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} =>` ,doc.data()); 
//   // document.write(doc.id ,doc.data())
// });
// }

// getalluser()






// Update Document eamil password


let Update = document.getElementById('Update')
if(Update){
Update.addEventListener('click',async()=>{

    const id = auth.currentUser.uid 
    const washingtonRef = doc(db, "users", id);

    let email = document.getElementById('email')
    let password = document.getElementById('password')

    try{
      await updateDoc(washingtonRef, {
      email: email.value ,
      password : password.value
      
});
console.log('update')
    }catch(err){

      console.log(err)
    }

    



})


}



let update = document.getElementById('Update')
if(update){

update.addEventListener('click', async()=>{
  const id = auth.currentUser.uid
  const washingtonRef = doc(db, "users", id);
      //  console.log(auth.currentUser);
      
      let sname = document.getElementById('sname')
      let phone = document.getElementById('phone')
      

      try{
            await updateDoc(washingtonRef, {
        name :  sname.value,
        phone :  phone.value,
        // Server Timestamp server ka time uthai ga hamara computer ka nhi 
        timestamp: serverTimestamp()



  });
  console.log('Upadte');
      }catch(err){
        console.log
        (err,'error')
      }
})
}












