import express from 'express';

const products = express.Router();

products.get('/all', (req, res) => {
    res.json({a: 6});
});

export {
    products
};
