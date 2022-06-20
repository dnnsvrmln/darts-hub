import getDB from "../initializeFirebase";

// export function findUserById(userId: string){
//     var user : PlayerModel = new PlayerModel();
//     getDB().ref("Users").child(userId).on('value', function(snapshot) {
//         var val = snapshot.val();
//         user = JSON.parse(JSON.stringify(val));
//     });
//     return user;
// }

export function createNewPlayer(playerUID: string, playerName: string, email: string) {
    const db = getDB()
    const ref = db.collection('Players');
    ref.doc(playerUID).set({
        playerUID: playerUID,
        playerName: playerName,
        email: email
    });
}