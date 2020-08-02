import express from 'express';

import {makeOrder} from '../../../controllers/OrderController.mjs';

const order = express.Router();

order.post('/', makeOrder);

export {
    order
};
