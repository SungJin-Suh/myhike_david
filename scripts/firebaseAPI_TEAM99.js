//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAZ8HacoZEo_AMyRh-jrbBFaRrZNhHiviE",
    authDomain: "comp1800-202410-demo-5066b.firebaseapp.com",
    projectId: "comp1800-202410-demo-5066b",
    storageBucket: "comp1800-202410-demo-5066b.appspot.com",
    messagingSenderId: "384859608240",
    appId: "1:384859608240:web:827d89e5aae4a49d3ad775"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
