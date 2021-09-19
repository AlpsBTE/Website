import * as express from 'express';
import * as path from 'path';

export const assets = express.Router();

assets.use(express.static(path.join(__dirname, '/../assets')));
