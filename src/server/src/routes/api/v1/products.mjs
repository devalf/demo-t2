import express from 'express';

import {allProductsList} from '../../../controllers/ProductsController.mjs';

const products = express.Router();

products.get('/all', allProductsList);

export {
    products
};
