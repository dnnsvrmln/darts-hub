const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore/lite');

import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyC0jI1vR0Cz8wsxiEmbrNVi9tv-sY39A9A",
    authDomain: "darts-hub.firebaseapp.com",
    databaseURL: "https://darts-hub-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "darts-hub",
    storageBucket: "darts-hub.appspot.com",
    messagingSenderId: "887947030804",
    appId: "1:887947030804:web:e36e802ba42be932cf5201"

};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default function writeUserData(userId: number, name: string, email: string) {
    set(ref(database, 'users/' + userId), {
        username: name,
        email: email,
    });
}
