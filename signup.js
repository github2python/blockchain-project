const submit_cred=document.getElementById('signup1');
const txtemail=document.getElementById('efield');
const txtpass=document.getElementById('pfield');
const back1=document.getElementById('back');
// const user_name=document.getElementById('name');
// const user_addr=document.getElementById('address');

submit_cred.addEventListener('click', e=>{
    e.preventDefault();
    const email=txtemail.value;
    const pass=txtpass.value;
    const sig=firebase.auth().createUserWithEmailAndPassword(email,pass);
    sig.catch(e => window.alert("Please enter required the fields"));
    firebase.auth().onAuthStateChanged((User) =>{
        if(User){
            //const uid1=User.uid;
            firebase.database().ref('User_info/' + User.uid).set({
                "email" :txtemail.value
            })
            // console.log(User.email)
        }
    })
})
back1.addEventListener('click',e=>{
    e.preventDefault();
    location.replace("index.html");
})
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        window.location.assign("mainpage.html")
    }
})


