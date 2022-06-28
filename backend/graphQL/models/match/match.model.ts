export const typeDef = `
  scalar Date

  type MatchModel {
    matchId: String
    date: Date
    matchType: String
    totalAmount: Int
    winner: PlayerModel,
    isSet: Boolean
  }
`;

export const typeDefLeg = `
  extend type MatchModel {
    leg: [LegModel]
  }
`;

export const typeDefSet = `
  extend type MatchModel {
    set: [SetModel]
  }
`;