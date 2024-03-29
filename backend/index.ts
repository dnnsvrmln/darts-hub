import express, { Express } from 'express';
import dotenv from 'dotenv';
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphQL/schema";
import {PlayerModel} from "./models/player/player.model";
import {MatchModel} from "./models/match/match.model";
import {addLegToMatch, addSetToMatch, createNewMatch} from "./controllers/match/match.controller";
import {createNewTurn} from "./controllers/match/turn.controller";
import {addTurnToLeg, createNewLeg, finishLeg} from "./controllers/match/leg.controller";
import {createNewPlayer} from "./controllers/player/player.controller";

var cors = require('cors')
dotenv.config();

const app: Express = express();
const port = 3000;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.use(cors())

const resolvers = {
    createNewPlayer(args: any){
        let player: PlayerModel = new PlayerModel();
        player.createPlayer(args.playerUID, args.playerName, args.email)
        return createNewPlayer(player)
    },
    createNewMatch (args: any){
        let match: MatchModel = new MatchModel();
        match.createNewMatch(args.matchId, args.date, args.totalAmount, args.matchType, args.isSet)
        return createNewMatch(match)
    },
    createNewTurn (args: any){
        return createNewTurn(args.turnId, args.points, args.multiplier, args.player)
    },
    createNewLeg (args: any){
        return createNewLeg(args.legId, args.scoreType)
    },
    addTurnToLeg(args: any){
        return addTurnToLeg(args.legId, args.turnId)
    },
    addSetToMatch(args: any){
        return addSetToMatch(args.matchId, args.setId)
    },
    addLegToMatch(args: any){
        return addLegToMatch(args.matchId, args.legId)
    },
    finishLeg(args: any){
        return finishLeg(args.legId, args.winner)
    }

}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

console.log('Running a GraphQL API server at http://localhost:3000/graphql');