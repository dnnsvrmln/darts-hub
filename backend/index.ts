import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import writeUserData from "./initializeFirebase";

dotenv.config();

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    writeUserData(1, "Joep Laarhoven", "laarhoven.joep@gmail.com")
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});