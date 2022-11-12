const upload=document.getElementById("upload_image");
let ct={};
var image_url=undefined;
upload.addEventListener('click', e=>{
    firebase.auth().onAuthStateChanged((User)=>{
        if(User){
            e.preventDefault();
            const ref=firebase.storage().ref("uploaded_images/"+User.uid);
            const file=document.querySelector('#photo').files[0]
            const name=new Date() + '-' + file.name
            const metadata ={
                contentType:file.type
            }
            const task=ref.child(name).put(file,metadata)
            task
            .then(snapshot=> snapshot.ref.getDownloadURL())
            .then(url =>{
                window.alert("image upload is successful");
        
            })
            const uid=User.uid;
            task
            .then(snapshot=> snapshot.ref.getDownloadURL())
            .then(url =>{
                let temp = Math.floor(Math.random()*500)+1;
                // ct.push(temp);
                firebase.database().ref('uploaded_images/' + uid+ `/${temp}`).set({
                    "URL":url
                })
                
                // firebase.database().ref('Likes/' + uid).set({
                //     "URL":url
                // })
            })
            
        }
      })
})

firebase.auth().onAuthStateChanged((User)=>{
    if(!User){
        window.location.assign("index.html")
    }
})
const search=document.getElementById("search");
search.addEventListener('click',e=>{
  e.preventDefault();
  window.location.assign("search.html");
})

module.exports = ct; 