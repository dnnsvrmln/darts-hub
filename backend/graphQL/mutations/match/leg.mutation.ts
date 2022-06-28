export const typeDef = `
  type Mutation {
    createNewLeg(legId: String, scoreType: String): LegModel
    addTurnToLeg(legId: String, turnId: String): LegModel
    finishLeg(legId: String, winner: String): LegModel
  }
`;
