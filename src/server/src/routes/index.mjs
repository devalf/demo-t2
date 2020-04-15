import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
    res.send('Demo t2 - API');
});

export {
    indexRouter
};
