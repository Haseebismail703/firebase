
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore ,collection, addDoc , onSnapshot , doc, deleteDoc ,updateDoc, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";




// add data                           collection, addDoc
 // add data mai hai dlete data       doc, deleteDoc 
let firebaseConfig = {
  apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
  authDomain: "project-1-64704.firebaseapp.com",
  projectId: "project-1-64704",
  storageBucket: "project-1-64704.appspot.com",
  messagingSenderId: "658759651298",
  appId: "1:658759651298:web:26348013c0010a765cf3bb",
  measurementId: "G-XV94SF7FXY"
};







let app = initializeApp(firebaseConfig);
let db = getFirestore(app);
let ids = []




window.addtodo = async function () {
    let getinp = document.querySelector('#getinp')
    let docRef = await addDoc(collection(db, "todos"), {
        name: getinp.value,
        time: new Date().toLocaleString()
    });
    console.log("Document written with ID: ", docRef.id);
    getinp.value = ''




    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 900,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "ADD todo  successfull"
      });

}

function getData() {
    let ul = document.querySelector('#getul')
    onSnapshot(collection(db, 'todos'), (data) => {
        data.docChanges().forEach((newData) => {
         ids.push(newData.doc.id)


            if (newData.type == 'removed') {
              
                let del = document.getElementById(newData.doc.id)
                del.remove()
            }
            else if(newData.type == 'added') {
                // console.log(newData)
                ul.innerHTML += `
                            <li class="list"  id=${newData.doc.id}>${newData.doc.data().name}  ${newData.doc.data().time} <button class="dl" onclick="delTodo('${newData.doc.id}')">Delete</button> <button onclick="edit(this,'${newData.doc.id}')">Edit</button></li>
                            `

            }
           

        })
    })
}

getData()

async function delTodo(id) {
    await deleteDoc(doc(db, "todos", id));




    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Delete  successfull"
      });
}


async function edit(e,id) {
    let editval = prompt('Enter Edit value')
    if(editval == ''){
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please Entera value",
           
          });
        


    }
    else{

       






 e.parentNode.firstChild.nodeValue = editval



    await updateDoc(doc(db, "todos", id), {
        name: editval,
        time: new Date().toLocaleString()
    });

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 700,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Edit successfull"
      });



    }


   







    
}




  function dlall(){

 Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert todos!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        
      })
      
      
      
      .then(async(result) => {


        let getul = document.getElementsByClassName('getul')
        getul.innerHTML=" ";
        for(let i= 0; i<ids.length; i++){
            await deleteDoc(doc(db, "todos", ids[i]));
    
        }







        
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your todos has been deleted.",
            icon: "success"
          });
        }


        
      });









}


    // let li = document.getElementsByClassName('list')
    // li.innerHTML=" ";
    // for(let i= 0; i<ids.length; i++){
    //     await deleteDoc(doc(db, "todos", ids[i]));

    // }





   






window.getData = getData
window.delTodo = delTodo
window.edit = edit
window.dlall=dlall





