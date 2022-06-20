export const typeDef = `
  type Mutation {
    createNewMatch(matchId: String, date: Date, totalAmount: Int, matchType: String, isSet: Boolean): Match
    addLegToMatch(matchId: String, legId: String): Match
    addSetToMatch(matchId: String, setId: String): Match
  }
`;
