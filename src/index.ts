import express, { Request, Response } from 'express';
import { router } from './routes/login';

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log('Listen on port 3000');
});
