import express from 'express';
import HTTP from 'http';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const http = HTTP.Server(app);

import {indexRouter} from './routes/index.mjs';
import {apiRouter} from './routes/api/index.mjs';
import {notFoundResponse} from 'demossd/apiResponse';

const {MONGODB_URL, MONGO_DB_USERNAME, MONGO_DB_PASSWORD, PORT_API_SERVER} = process.env;

(async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: MONGO_DB_USERNAME,
            pass: MONGO_DB_PASSWORD
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('App starting error:', err.message);
        process.exit(1);
    }
})();

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

http.listen(PORT_API_SERVER, function() {
    // eslint-disable-next-line no-console
    console.log(`listening on *: ${PORT_API_SERVER}`);
});
