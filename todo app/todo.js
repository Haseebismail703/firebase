
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore ,collection, addDoc , onSnapshot , doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// add data                           collection, addDoc
 // add data mai hai dlete data       doc, deleteDoc 
const firebaseConfig = {
  apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
  authDomain: "project-1-64704.firebaseapp.com",
  projectId: "project-1-64704",
  storageBucket: "project-1-64704.appspot.com",
  messagingSenderId: "658759651298",
  appId: "1:658759651298:web:26348013c0010a765cf3bb",
  measurementId: "G-XV94SF7FXY"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // adddata 
// const db = getFirestore(app); 



// window.addtodo = async function(){
//     // adddata 
//     let getinp = document.querySelector('#getinp')
//     const docRef = await addDoc(collection(db, "todos"), {
//         name: getinp.value,
//         time : new Date().toLocaleString()
//       });
//       console.log("Document written with ID: ", docRef.id);
      



// }


// function getdata(){

//    let getul = document.querySelector('#getul')


//    onSnapshot(collection(db,'todos'),(data)=>{
//     data.docChanges().forEach((newdata)=>{
//       // console.log(newdata.doc.id)


//       if (newdata.type == 'removed'){

//         let del = document.getElementById(newdata.doc.id)
//         del.remove()
//       }
//       else if  (newdata.type == 'added'){
     

//   getul.innerHTML += `
//       <li id=${newdata.doc.id}>
//         ${newdata.doc.data().name}
//         ${newdata.doc.data().time}
//         <button onclick="dltodo('${newdata.doc.id}')">Delete</button>
//         <button onclick="edit('${newdata.doc.id}')">Edit</button>
//       </li>
//     `;

//       }


    
    

//     })


//    })


// }

// getdata()

// async function dltodo(id){

//   await deleteDoc(doc(db, "todos", id));
// }


// async function edit(e,id) {
//   let editval = prompt('Enter Edit value')

//   e.parentNode.firstChild.nodeValue = editval

//   await updateDoc(doc(db, "todos", id), {
//       name: editval,
//       time: new Date().toLocaleString()
//   });

// }




// window.getdata = getdata
// window.dltodo = dltodo
// window.edit = edit





const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addtodo = async function () {
    let getinp = document.querySelector('#getinp')
    const docRef = await addDoc(collection(db, "todos"), {
        name: getinp.value,
        time: new Date().toLocaleString()
    });
    console.log("Document written with ID: ", docRef.id);

}

function getData() {
    let ul = document.querySelector('#getul')
    onSnapshot(collection(db, 'todos'), (data) => {
        data.docChanges().forEach((newData) => {

            if (newData.type == 'removed') {
                let del = document.getElementById(newData.doc.id)
                del.remove()
            }
            else if(newData.type == 'added') {
                // console.log(newData)
                ul.innerHTML += `
                            <li  id=${newData.doc.id}>${newData.doc.data().name}  ${newData.doc.data().time} <button onclick="delTodo('${newData.doc.id}')">Delete</button> <button onclick="edit(this,'${newData.doc.id}')">Edit</button></li>
                            `

            }
           

        })
    })
}

getData()

async function delTodo(id) {
    await deleteDoc(doc(db, "todos", id));
}


async function edit(e,id) {
    let editval = prompt('Enter Edit value')

    e.parentNode.firstChild.nodeValue = editval

    await updateDoc(doc(db, "todos", id), {
        name: editval,
        time: new Date().toLocaleString()
    });
}


window.getData = getData
window.delTodo = delTodo
window.edit = edit