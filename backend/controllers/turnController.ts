import getDB from "../initializeFirebase";

export async function createNewTurn(turnId: string, points: number, multiplier: number, player: string) {
    console.log(turnId)
    const db = getDB()
    const playerRef = db.collection('Player').doc(player);
    const ref = db.collection('Turn');
    await ref.doc(turnId).set({
        score: points,
        multiplier: multiplier,
        player: playerRef
    });
}
