export const typeDef = `
  type Mutation {
    createNewLeg(legId: String, scoreType: ScoreType): Leg
    addTurnToLeg(legId: String, turnId: String): Leg
  }
`;
