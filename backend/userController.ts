import getDB from "./initializeFirebase";
import {UserModel} from "../shared/models/user.model";


export function findUserById(userId: string){
    var user : UserModel = new UserModel();
    getDB().ref("Users").child(userId).on('value', function(snapshot) {
        var val = snapshot.val();
        user = JSON.parse(JSON.stringify(val));
    });
    return user;
}

export function createNewUser(username: string, email: string, password: string ){
    const db = getDB()
    const ref = db.ref('Users');
    ref.child(username).set({
        username: username,
        email: email,
        password: password
    });


}