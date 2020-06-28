import express from 'express';

const v1Controller = express.Router();

import {products} from './products.mjs';

v1Controller.use('/products', products);

export {
    v1Controller
};
