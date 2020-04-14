const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const apiResponse = require('./helpers/apiResponse');

const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/', apiRouter);

/**
 * 404 page
 */
app.all('*', function(req, res) {
    return apiResponse.notFoundResponse(res, 'Page not found');
});

http.listen('8081', function() {
    // eslint-disable-next-line no-console
    console.log('listening on *:8081');
});
