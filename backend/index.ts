import express, { Express } from 'express';
import dotenv from 'dotenv';
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphQL/schema";
import {createNewUser, findUserById} from "./userController";

dotenv.config();

const app: Express = express();
const port = 3000;



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const resolvers = {
    findUserById (args: any) {
        return findUserById(args.name);
    },
    createNewUser(args: any){
        return createNewUser(args.userName, args.email, args.name)
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));
console.log('Running a GraphQL API server at http://localhost:3000/graphql');