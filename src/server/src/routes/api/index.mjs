import express from 'express';

export const apiRouter = express.Router();

import {v1Controller} from './v1/index.mjs';

apiRouter.use('/v1', v1Controller);
