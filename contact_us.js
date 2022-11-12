const submit=document.getElementById("submit");
const name1=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");
submit.addEventListener('click',e=>{
    e.preventDefault();
    firebase.auth().onAuthStateChanged((User)=>{
        if(User){
            // const var1=firebase.database().ref("Feedback/"+User.uid).set({
            //     "name":name1.value,
            //     "email":email.value,
            //     "message":message.value
            // })
            // window.alert("Submitted Successfully")
            // var1.catch(e=> window.alert("ERROR! -- Fill all fields and verify"))
            if(email.value==User.email){
                const var1=firebase.database().ref("Feedback/"+User.uid).set({
                    "name":name1.value,
                    "email":email.value,
                    "message":message.value
                })
                window.alert("Submitted Successfully")
                var1.catch(e=> window.alert("ERROR! -- Fill all fields and verify"))
            }
            else{
                window.alert("Wrong email");
            }
        }
      })
})
firebase.auth().onAuthStateChanged((User)=>{
    if(!User){
        window.location.assign("index.html")
    }
})
const search1=document.getElementById("search");
search1.addEventListener('click',e=>{
  window.location.assign("search.html")
})


