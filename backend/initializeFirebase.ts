import {initializeApp} from "firebase-admin/app";
const { getDatabase } = require('firebase-admin/database');
var admin = require("firebase-admin");


import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {

    apiKey: "AIzaSyC0jI1vR0Cz8wsxiEmbrNVi9tv-sY39A9A",
    authDomain: "darts-hub.firebaseapp.com",
    databaseURL: "https://darts-hub-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "darts-hub",
    storageBucket: "darts-hub.appspot.com",
    messagingSenderId: "887947030804",
    appId: "1:887947030804:web:e36e802ba42be932cf5201",
    credential: ""

};

var serviceAccount = require("/Users/joep/WebstormProjects/darts-hub/backend/darts-hub-firebase-adminsdk-kx0am-b8043f45d6.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://darts-hub-default-rtdb.europe-west1.firebasedatabase.app"
});



export default async function writeUserData() {

    // Get a database reference to our blog
    const db = getDatabase();
    const ref = db.ref('Users');

    ref.set({
        alanisawesome: {
            date_of_birth: 'June 23, 1912',
            full_name: 'Alan Turing'
        },
        gracehop: {
            date_of_birth: 'December 9, 1906',
            full_name: 'Grace Hopper'
        }
    });

}
