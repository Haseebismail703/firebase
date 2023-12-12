
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytes , uploadBytesResumable, getDownloadURL , deleteObject } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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


let uploadfile = (file) => {

  return new Promise((resolve,reject,)=>{
  const storageRef = ref(storage, `images/${file.name}`);

   // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
    // console.log('Uploaded a blob or file!');



    const uploadTask = uploadBytesResumable(storageRef, file);

    
    uploadTask.on('state_changed', 
      (snapshot) => {
        
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        // console.log('Upload is 100% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      


      }, 
      (error) => {
        // Handle unsuccessful uploads
        reject(error)
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);

          resolve(downloadURL)
        });
      }
    );



  });


    
  })


}




upload.addEventListener('click',async()=>{

  try{
    let file = document.getElementById('file')
 const res =  await uploadfile(file.files[0])
 let img = document.getElementById('img')
 img.src= res
 console.log('err--->',res);
   
  }catch(err){
   console.log(err);

  }

})


let delbtn =document.getElementById('delete')

delbtn.addEventListener('click',()=>{

// Creae a reference to the file to delete
const desertRef = ref(storage, 'images/wave-haikei.png');

// Delete the file
deleteObject(desertRef).then((res) => {
  console.log(res,'File deleted successfully');
}).catch((error) => {
  console.log(error);
});




})



