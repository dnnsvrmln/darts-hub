export const typeDef = `
  type Mutation {
    createNewLeg(legId: String, scoreType: String): Leg
    addTurnToLeg(legId: String, turnId: String): Leg
    finishLeg(legId: String, winner: String): Leg
  }
`;
