export const typeDef = `
  type Mutation {
    createNewUser(userName: String, email: String, name: String): User
  }
`;