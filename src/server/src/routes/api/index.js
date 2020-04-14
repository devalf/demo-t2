const api = require('express').Router();

const v1Controller = require('./v1');

api.use('/v1', v1Controller);

module.exports = api;
