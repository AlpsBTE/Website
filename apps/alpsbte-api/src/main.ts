import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import { config } from './config';

import { base, assets } from './app/routes';

const port = config.port ?? 3333;

const app = express();
app.use(cors('*'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.redirect(`/${config.base}`);
});

app.use(`/${config.base}`, base);
app.use(`/${config.base}/assets`, assets);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/${config.base}`);
});

server.on('error', console.error);
