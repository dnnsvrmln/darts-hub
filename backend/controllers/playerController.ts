import getDB from "../initializeFirebase";
import {Player} from "../models/Player";


// export function findUserById(userId: string){
//     var user : UserModel = new UserModel();
//     getDB().ref("Users").child(userId).on('value', function(snapshot) {
//         var val = snapshot.val();
//         user = JSON.parse(JSON.stringify(val));
//     });
//     return user;
// }

export function createNewPlayer(player:Player ){
    const db = getDB()
    const ref = db.collection('Players');
    ref.doc(player.playerName).set({
        email: player.email,
        localId: player.localId
    });
