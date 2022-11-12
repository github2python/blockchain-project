firebase.auth().onAuthStateChanged((User)=>{
    if(!User){
      //location.replace("login.html")
      window.location.assign("index.html");
    }
    else{
      const uid=User.uid;
      const temp1=firebase.database().ref('Feedback/'+uid+'/name').on("value",(snapshot)=>{
        if(!snapshot.val()){
          document.getElementById("name_display").innerHTML="Name: Not Provided yet";
        }
        else
        document.getElementById("name_display").innerHTML="Name: "+snapshot.val()
      })
      firebase.database().ref('Feedback/'+uid+'/email').on("value",(snapshot)=>{
        document.getElementById("email_display").innerHTML="Email: "+snapshot.val()
      })
      firebase.database().ref('Feedback/'+uid+'/message').on("value",(snapshot)=>{
        if(!snapshot.val()){
          document.getElementById("message_display").innerHTML="Message: Not provided yet";
        }
        else
        document.getElementById("message_display").innerHTML="Message: "+snapshot.val()
      })
      //temp1.catch(error=> window.alert("No Feedback is provided by you"))
  
      //console.log(User.name);
    }
  })
  
  const search1=document.getElementById("search");
  search1.addEventListener('click',e=>{
    window.location.assign("search.html")
  })