export const typeDef = `
  type Match {
    matchId: String
    date: Int
    matchType: MatchType
    totalAmount: Int
    winner: User,
    isSet: Boolean
  }
`;

export const typeDefLeg = `
  extend type Match {
    leg: [Leg]
  }
`;

export const typeDefSet = `
  extend type Match {
    set: [Set]
  }
`;