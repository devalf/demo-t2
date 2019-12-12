const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.use(express.static(path.join(__dirname + '../../../' + 'public')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../' + '/dist/index.html'));
});

http.listen('8081', function() {
    // eslint-disable-next-line no-console
    console.log('listening on *:8081');
});
