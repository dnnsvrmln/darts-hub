import getDB from "../../initializeFirebase";
import {firestore} from "firebase-admin";
import FieldValue = firestore.FieldValue;

export function createNewMatch(matchId: string, date: number, totalAmount: number, matchType: string, isSet: boolean ){
console.log(matchId)
    const db = getDB()
    const ref = db.collection('Match');
    ref.doc(matchId).set({
        matchId: matchId,
        date: date,
        totalAmount: totalAmount,
        matchType: matchType
    })
}

export async function addLegToMatch(legId:string, matchId: string){
    console.log("LegId: " +legId)
    console.log("MatchId: " +matchId)
    const db = getDB()
    const refLeg = db.collection('Leg').doc(legId);
    const refMatch = db.collection('Match');

    await refMatch.doc(matchId).update({
        legs: FieldValue.arrayUnion(refLeg)
    });
}

export async function addSetToMatch(matchId:string, setId: string){
    const db = getDB()
    const refSet = db.collection('Leg').doc(setId);
    const refMatch = db.collection('Match');

    await refMatch.doc(matchId).update({
        set: FieldValue.arrayUnion(refSet)
    });
}