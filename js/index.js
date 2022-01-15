import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
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

function signup(e) {
    e.preventDefault();
    const auth = getAuth();
    var email = document.getElementById("InputEmail1");
    var pwd = document.getElementById("InputPassword1");
    createUserWithEmailAndPassword(auth, email.value, pwd.value)
        .then(() => {
            confirm("Signup successful");
        })
        .catch((error) => {
            confirm("Error in signup" + error);
        });
}
Signup.addEventListener('click', signup);


function googleSignup(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            confirm("Signup successful");
        }).catch((error) => {
            confirm("Error in signup" + error);
        });
}
GoogleSignup.addEventListener('click', googleSignup);