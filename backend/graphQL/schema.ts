import { typeDef as User } from './models/user';
import { typeDef as Match,
    typeDefLeg as MatchLeg,
    typeDefSet as MatchSet } from './models/match'
import { typeDef as Leg } from "./models/leg";
import { typeDef as Set } from './models/set'
import { typeDef as Turn } from './models/turn'
import { typeDef as Query } from './queries/query';
import { typeDef as UserMutation} from "./mutations/UserMutation";
import { typeDef as MatchMutation} from "./mutations/MatchMutation";
import { typeDef as LegMutation } from "./mutations/LegMutation";
import { typeDef as TurnMutation } from "./mutations/TurnMutation";
import { enumDef as ScoreType} from "./enums/scoreType";
import { enumDef as MatchType} from "./enums/matchType";
import { makeExecutableSchema } from '@graphql-tools/schema'

export const schema = makeExecutableSchema({
    typeDefs: [ Query, UserMutation, MatchMutation, LegMutation, TurnMutation, Set, User, MatchLeg, MatchSet, Leg, Turn, ScoreType, MatchType, Match ]
});
