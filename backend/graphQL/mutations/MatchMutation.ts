export const typeDef = `
  type Mutation {
    createNewMatch(matchId: String, date: Int, totalAmount: Int, matchType: MatchType, isSet: Boolean): Match
  }
`;
