export const typeDef = `
  type Mutation {
    createNewMatch(matchId: String, date: Int, totalAmount: Int, matchType: MatchType, setBool: Boolean): Match
  }
`;
