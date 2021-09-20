import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
/*eslint-disable-next-line */
import { nameOf } from '@alpsbte/shared/util';

export const assets = express.Router();

assets.get('/', (req: Request, res: Response) => {
  return res.send(nameOf({ assets }));
});

assets.use(express.static(path.join(__dirname, '/assets')));
