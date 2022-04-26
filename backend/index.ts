import express, { Express, Request, Response } from 'express';
const initializeFirebase = require("./initializeFirebase");

dotenv.config();

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    initializeFirebase.insertData();
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

