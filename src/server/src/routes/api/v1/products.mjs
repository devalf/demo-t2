import express from 'express';

import {allProductsList, singleProduct} from '../../../controllers/ProductsController.mjs';

const products = express.Router();

products.get('/all', allProductsList);

products.get('/:id', singleProduct);

export {
    products
};
