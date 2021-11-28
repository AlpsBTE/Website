import * as express from 'express';
import { Request, Response } from 'express';

export const base = express.Router();

base.get(`/`, async (req: Request, res: Response) => {
  return res.send('Welcome to the Alps BTE API');
});

