const txtemail=document.getElementById('efield');
const txtpass=document.getElementById('pfield');
const info=document.getElementById('login');
const register=document.getElementById('signup');
let ct = {};
//Signing in with email and password
info.addEventListener('click' , e =>{
  e.preventDefault();
  const email=txtemail.value;
  const pass=txtpass.value;
  const pro=firebase.auth().signInWithEmailAndPassword(email,pass);
  pro.catch(e => window.alert("Incorrect email or password"));
})

//Redirecting to signup page
register.addEventListener('click', e =>{
  e.preventDefault();
  location.replace("signup.html");
  
  })

//Checking authentication state
firebase.auth().onAuthStateChanged((User)=>{
  if(User){
    window.location.assign("mainpage.html");
  }
})
module.exports = ct;

