import * as express from 'express';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit'
import { config } from './config';

import { base, assets } from './app/routes';

const port = process.env.port || 3333;

const app = express();
app.use(cors('*'));
app.use(express.json());



const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 200
});
app.use(limiter);

app.get('/', (req: express.Request, res: express.Response) => {
  return res.redirect(`/${config.base}`);
});

app.use(`/${config.base}`, base);
app.use(`/${config.base}/assets`, assets);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/${config.base}`);
});

server.on('error', console.error);
