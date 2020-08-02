import express from 'express';

const v1Controller = express.Router();

import {products} from './products.mjs';
import {order} from './order.mjs';

v1Controller.use('/products', products);
v1Controller.use('/order', order);

export {
    v1Controller
};
