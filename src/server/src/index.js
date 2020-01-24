const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World - server-side!');
});

http.listen('8081', function() {
    // eslint-disable-next-line no-console
    console.log('listening on *:8081');
});
