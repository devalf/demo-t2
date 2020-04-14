const v1Controller = require('express').Router();

v1Controller.get('/test', (req, res) => {
    res.json({a: 5});
});

module.exports = v1Controller;
