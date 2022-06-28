import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const { getFirestore } = require('firebase-admin/firestore');

var admin = require("firebase-admin");
var serviceAccount = require("/Users/dennisvermeulenprivate/Projects/darts-hub-firebase-admin/darts-hub-firebase-adminsdk-8vd6h-e2cdbdac4e.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://darts-hub-default-rtdb.europe-west1.firebasedatabase.app"
});

export default function getDB() : FirebaseFirestore.Firestore{
    // Get a database reference to our blog
    return getFirestore();
}
