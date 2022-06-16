import firebase from 'firebase/app'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyBvspGu_wNDcnqPigeDou45SCZBDsanRsA",
    authDomain: "spirit-within.firebaseapp.com",
    projectId: "spirit-within",
    storageBucket: "spirit-within.appspot.com",
    messagingSenderId: "465827549667",
    appId: "1:465827549667:web:7483493d6a4ffe40bf10d6"
  };
  
firebase.initializeApp(config); 

const auth = firebase.auth(); 
// authentication config object ^
const provider = new firebase.auth.GithubAuthProvider(); 

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut()
}

export { auth, login, logout }; 