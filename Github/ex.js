const btn = async () => {
    let username = document.getElementById("Input").value;

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data.message == "Not Found") {
        alert(data.message);
    }
     else {
        document.getElementById("userDetails").innerHTML = `



        <div class="parent">
       
    <div class="child" >
        
       <div class="div2" >
        
     

     <img class="profile-image-icon"  style="width: 100px;" src="${data.avatar_url}" /><hr>



     <h3> User Name</h3>
      <h2>${data.name}</h2>

     <h3>Locaction</h3>
     <h2>${data.location}</h2>

     
   



     <!-- vdfvs -->
       </div>

       
    </div>

       <div class="flow1" >
      <div class="flow" >
    <h3>Following</h3>
    <p>${data.following}</p>


</div>

<div class="flow"  >
    <h3>Followers</h3>
    <p>${data.followers}</p>


</div>


<div class="flow"  >
    <div>
       <h3 >Publick repos</h3>
    <p>${data.public_repos}</p> 
    </div>
    
    

</div>  




<div class="flow"  >
    <div  class="h3">
        <h3>User Bio </h3>

</div>


<div class="p" >
     <p >${data.bio}</p> 

</div>
   





    
   
    

</div> 


    </div>
    </div> 







     `
    }
}