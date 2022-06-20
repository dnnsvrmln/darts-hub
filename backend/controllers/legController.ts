import getDB from "../initializeFirebase";
import {firestore} from "firebase-admin";
import {countPoints} from './countingPoints'
import FieldValue = firestore.FieldValue;

export async function createNewLeg(legId: string, scoreType: ScoreType) {
    const db = getDB()
    const ref = db.collection('Leg');
    await ref.doc(legId).set({
        scoreType: parseInt(String(scoreType.valueOf()))
    });
}

export async function addTurnToLeg(legId:string, turnId: string){
    console.log("legId: " + legId)
    console.log("turnId: " + turnId)
    const db = getDB()
    const refTurn = db.collection('Turn').doc(turnId);
    const refLeg = db.collection('Leg');


    await refLeg.doc(legId).update({
        turns: FieldValue.arrayUnion(refTurn)
    });

    countPoints(legId);
}
