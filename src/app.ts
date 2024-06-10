import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

export default app;
