import express, { Request, Response, NextFunction } from 'express';
import bodyParser  from 'body-parser';
import http from 'http';
import { DataBases } from './db/dataBase';
import cors from 'cors'  // Import the cors middleware
const app = express();
const apiRouter = require('./routes');
require('dotenv').config();

const port = process.env.port;
// Middleware to enable CORS
app.use(cors({
  origin: process.env.APPLICATION_URL,  // Replace with the allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// app.use((req:Request, res:Response, next:NextFunction) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Header", "*");
//     next();
// });

// Middleware to parse JSON and url-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new DataBases();
db.mongoConnection();

app.get('/', (req, res) => {
  res.send('Welcome to shopify!');
});

// app.use(require('./router'));
// Use the central router
app.use('/api', apiRouter);

app.get('/login',(req:Request,res:Response,next:NextFunction) => {
  res.status(200).json({ message: 'Login successfull' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log("Trainer is live on port " + port);
});  