// const ct = require("./login");
firebase.auth().onAuthStateChanged((User)=>{
  if(!User){
    window.location.assign("index.html");
  }
  else{
    const uid=User.uid;
    for(let i=1;i<=500;i++){
      firebase.database().ref('uploaded_images/'+uid+`/${i}`).on("value",(snapshot)=>{
        if(snapshot.val()){
          console.log(snapshot.val());
          const t=document.createElement('img');
          t.src=snapshot.val().URL;
          t.classList.add('imagegrid');
          const temp = document.getElementById("imagegrid");
          temp.appendChild(t);
          // document.getElementById('').src=snapshot.val();
        }
      })
    }
  }
})

const search=document.getElementById("search");
search.addEventListener('click',e=>{
  e.preventDefault();
  window.location.assign("search.html")
})

  