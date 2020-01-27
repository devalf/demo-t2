const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/', apiRouter);

http.listen('8081', function() {
    // eslint-disable-next-line no-console
    console.log('listening on *:8081');
});
