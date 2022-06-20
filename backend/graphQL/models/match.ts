export const typeDef = `
  scalar Date

  type Match {
    matchId: String
    date: Date
    matchType: String
    totalAmount: Int
    winner: Player,
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