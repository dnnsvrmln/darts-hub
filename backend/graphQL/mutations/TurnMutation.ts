export const typeDef = `
  type Mutation {
    createNewTurn(turnId: String, points: Int, multiplier: Int, player: String): Turn
  }
`;
