export const typeDef = `
  type Mutation {
    createNewPlayer(playerUID: String, playerName: String, email: String): PlayerModel
  }
`;
