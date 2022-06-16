import express, { Express } from 'express';
import dotenv from 'dotenv';
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphQL/schema";
import {createNewUser} from "./controllers/userController";
import {createNewMatch} from "./controllers/matchController";
import {createNewTurn} from "./controllers/turnController";
import {addTurnToLeg, createNewLeg} from "./controllers/legController";

dotenv.config();

const app: Express = express();
const port = 3000;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const resolvers = {
    // findUserById (args: any) {
    //     return findUserById(args.userId);
    // },
    createNewUser(args: any){
        return createNewUser(args.userName, args.email, args.name)
    },
    createNewMatch (args: any){
        return createNewMatch(args.matchId, args.date, args.totalAmount, args.matchType)
    },
    createNewTurn (args: any){
        return createNewTurn(args.turnId, args.points, args.multiplier, args.player)
    },
    createNewLeg (args: any){
        return createNewLeg(args.legId, args.scoreType)
    },
    addTurnToLeg(args: any){
        return addTurnToLeg(args.legId, args.turnId)
    }

}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));
console.log('Running a GraphQL API server at http://localhost:3000/graphql');