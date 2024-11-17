import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import courseRouter from './routes/course';
import authRouter from './routes/user';

import { connect } from './database/mongo';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connect();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/courses', courseRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
