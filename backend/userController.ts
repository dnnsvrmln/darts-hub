import getDB from "./initializeFirebase";
import {User} from "./models/User";


export function findUserById(userId: string){
    var user : User = new User();
    getDB().ref("Users").child(userId).on('value', function(snapshot) {
        var val = snapshot.val();
        user = JSON.parse(JSON.stringify(val));
    });
    return user;
}

export function createNewUser(userName: string, email: string, name: string ){
    const db = getDB()
    const ref = db.ref('Users');
    ref.child(userName).set({
        userName: userName,
        email: email,
        name: name
    });


}