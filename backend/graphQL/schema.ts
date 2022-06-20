// Models
import {
    typeDef as MatchModel,
    typeDefLeg as MatchLegModel,
    typeDefSet as MatchSetModel
} from './models/match/match.model';
import { typeDef as LegModel } from "./models/match/leg.model";
import { typeDef as SetModel } from './models/match/set.model';
import { typeDef as TurnModel } from './models/match/turn.model';

import { typeDef as PlayerModel} from "./models/player/player.model";

// Mutations
import { typeDef as UserMutation} from "./mutations/player/player.mutation";
import { typeDef as MatchMutation} from "./mutations/match/match.mutation";
import { typeDef as LegMutation } from "./mutations/match/leg.mutation";
import { typeDef as TurnMutation } from "./mutations/match/turn.mutation";

// Enums
import { enumDef as ScoreTypeEnum} from "./enums/scoreType.enum";
import { enumDef as MatchTypeEnum} from "./enums/matchType.enum";

// Query
import { typeDef as Query } from './queries/query';

// Schema
import { makeExecutableSchema } from '@graphql-tools/schema'

export const schema = makeExecutableSchema({
    typeDefs: [ Query, UserMutation, MatchMutation, LegMutation, TurnMutation, SetModel, PlayerModel, MatchLegModel, MatchSetModel, LegModel, TurnModel, ScoreTypeEnum, MatchTypeEnum, MatchModel ]
});
