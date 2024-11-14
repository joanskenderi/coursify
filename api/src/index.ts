import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/course';
import { connect } from './database/mongo';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connect();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/courses', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
