import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAHVbH3AiTbAvV3I7PIjntPqLfH4GOqaoM",
    authDomain: "rubix-hackathon-22.firebaseapp.com",
    projectId: "rubix-hackathon-22",
    storageBucket: "rubix-hackathon-22.appspot.com",
    messagingSenderId: "862131037839",
    appId: "1:862131037839:web:44003e1ffa27b49d1132fa"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function signup(e){
    e.preventDefault();
    const auth = getAuth();
    var email = document.getElementById("sign");
    var pwd = document.getElementById("pwd");
    createUserWithEmailAndPassword(auth,email.value,pwd.value)
    .then(()=>{
        alert("Signup successful");
    })
    .catch((error)=>
    {
        alert("error in signup"+error);
    });
}
signup.addEventListener('click',signup);

