export const typeDef = `
  type Mutation {
    createNewMatch(matchId: String, date: Date, totalAmount: Int, matchType: String, isSet: Boolean): MatchModel
    addLegToMatch(matchId: String, legId: String): MatchModel
    addSetToMatch(matchId: String, setId: String): MatchModel
  }
`;
