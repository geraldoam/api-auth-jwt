import express from 'express';
import 'reflect-metadata';

import './database/connect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  console.log('+ Server started at 5000.');
});
