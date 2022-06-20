export const typeDef = `
  scalar Date

  type MatchModel {
    matchId: String
    date: Date
    matchType: String
    totalAmount: Int
    winner: Player,
    isSet: Boolean
  }
`;

export const typeDefLeg = `
  extend type MatchModel {
    leg: [Leg]
  }
`;

export const typeDefSet = `
  extend type MatchModel {
    set: [Set]
  }
`;