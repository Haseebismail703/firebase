
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
const storage = getStorage(app);




let upload = document.getElementById('Uplode')

upload.addEventListener('click',()=>{

let file = document.getElementById('file')

  const storageRef = ref(storage, `images/${file.text[0].name}`);

// 'file' comes from the Blob or File API
    uploadBytes(storageRef, file.text[0]).then((snapshot) => {
    console.log('Uploaded a blob or file!');



  });
})