import getDB from "../../initializeFirebase";
import {PlayerModel} from "../../models/player/player.model";

// export function findUserById(userId: string){
//     var user : PlayerModel = new PlayerModel();
//     getDB().ref("Users").child(userId).on('value', function(snapshot) {
//         var val = snapshot.val();
//         user = JSON.parse(JSON.stringify(val));
//     });
//     return user;
// }

export function createNewPlayer(player:PlayerModel ) {
    const db = getDB()
    const ref = db.collection('Players');
    ref.doc(player.playerName).set({
        email: player.email,
        localId: player.localId
    });
}