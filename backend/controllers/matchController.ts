import getDB from "../initializeFirebase";

export function createNewMatch(matchId: string, date: number, totalAmount: number, matchType: string ){
    const db = getDB()
    const ref = db.collection('Match');
    ref.doc(matchId).set({
        matchId: matchId,
        date: date,
        totalAmount: totalAmount,
        matchType: matchType,
    });
}
