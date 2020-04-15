import express from 'express';

const v1Controller = express.Router();

import {products} from './products.mjs';

v1Controller.use('/products', products);

v1Controller.get('/test', (req, res) => {
    res.json({a: 5});
});

export {
    v1Controller
};
