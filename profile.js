function logout(){
    firebase.auth().signOut()
}

firebase.auth().onAuthStateChanged((User)=>{
  if(!User){
    window.location.assign("index.html");
  }
  else{
    const uid=User.uid;
    firebase.database().ref('User_info/'+uid+'/name').on("value",(snapshot)=>{
      if(!snapshot.val()){
        document.getElementById("name_display").innerHTML="Name: Not Provided yet";
      }
      else
      document.getElementById("name_display").innerHTML="Name: "+snapshot.val()
    })
    firebase.database().ref('User_info/'+uid+'/address').on("value",(snapshot)=>{
      if(!snapshot.val()){
        document.getElementById("address_display").innerHTML="Address: Not provided yet"
      }
      else
      document.getElementById("address_display").innerHTML="Address: "+snapshot.val()
    })
    firebase.database().ref('User_info/'+uid+'/email').on("value",(snapshot)=>{
      document.getElementById("email_display").innerHTML="Email: "+snapshot.val()
    })

    const change_name=document.getElementById("change_name")
    const change_address=document.getElementById("change_address")
    change_name.addEventListener('click',e=>{
      e.preventDefault();
      var temp_name=prompt("Enter the new name: ");
      firebase.database().ref("User_info/"+uid).update({
        "name":temp_name
      })
    })
    change_address.addEventListener('click',e=>{
      e.preventDefault();
      var temp_address=prompt("Enter the new address: ");
      firebase.database().ref("User_info/"+uid).update({
        "address":temp_address
      })
    })
  }
})
var image_url=undefined;
const upload_profile=document.getElementById("upload_profile")
upload_profile.addEventListener('click',e=>{
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      const ref=firebase.storage().ref("profile_image/"+user.uid);
      const file=document.querySelector("#profile").files[0];
      const name= new Date() + '-' + file.name;
      const metadata={
        contentType:file.type
      }
      const task=ref.child(name).put(file,metadata);
      task.catch(error=> window.alert("Error: Try Again"))
      task
      .then(snapshot=> snapshot.ref.getDownloadURL())
      .then(url=>{
        const upload=firebase.database().ref("profile_image/"+user.uid).set({
          "URL":url
        })
        window.alert("Profile image successfull")
        upload.catch(error=>window.alert("Error"))
      })
    }
  })

})

const search=document.getElementById("search");
search.addEventListener('click',e=>{
  e.preventDefault();
  window.location.assign("search.html");
})


  
  
  