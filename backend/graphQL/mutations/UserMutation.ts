export const typeDef = `
  type Mutation {
    createNewPlayer(playerName: String, email: String, localId: String): Player
  }
`;
