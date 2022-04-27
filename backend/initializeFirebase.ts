import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {database} from "firebase-admin";

const { getDatabase } = require('firebase-admin/database');
var admin = require("firebase-admin");


import Database = database.Database;


var serviceAccount = require("/Users/joep/WebstormProjects/darts-hub/backend/darts-hub-firebase-adminsdk-kx0am-b8043f45d6.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://darts-hub-default-rtdb.europe-west1.firebasedatabase.app"
});



export default function getDB() : Database{
    // Get a database reference to our blog
    return getDatabase();
}
