import getDB from "../initializeFirebase";
import {Player} from "../models/Player";


// export function findUserById(userId: string){
//     var user : Player = new Player();
//     getDB().ref("Users").child(userId).on('value', function(snapshot) {
//         var val = snapshot.val();
//         user = JSON.parse(JSON.stringify(val));
//     });
//     return user;
// }

export function createNewPlayer(playerName: string, email: string, localId: string ){
    const db = getDB()
    const ref = db.collection('Players');
    ref.doc(playerName).set({
        email: email,
        localId: localId
    });


}