import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import router from './routes';

const app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.json());
app.use(morgan('tiny'));

console.log(`${__dirname}/public`);

app.use('/api', router);
app.use('*', (req, res) => {
  console.log('ROUTE NOT FOUND');
  res.sendStatus(400);
});
export default app;
