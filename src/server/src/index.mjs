import express from 'express';
import HTTP from 'http';
import cors from 'cors';

const app = express();
const http = HTTP.Server(app);

import {indexRouter} from './routes/index.mjs';
import {apiRouter} from './routes/api/index.mjs';
import {notFoundResponse} from 'demossd/apiResponse';

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/', apiRouter);

/**
 * 404 page
 */
app.all('*', function(req, res) {
    return notFoundResponse(res, 'Page not found');
});

http.listen('8081', function() {
    // eslint-disable-next-line no-console
    console.log('listening on *:8081');
});
