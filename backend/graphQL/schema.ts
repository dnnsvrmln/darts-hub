import { typeDef as User } from './user';
import { typeDef as Query } from './query';
import { typeDef as Mutation} from "./mutation";
import { makeExecutableSchema } from '@graphql-tools/schema'

export const schema = makeExecutableSchema({
    typeDefs: [ Query, Mutation, User ]
});
