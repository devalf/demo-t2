const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// app.use(express.static(path.join(__dirname + '../../../client' + '/public')));
//
// app.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '../../../client' + '/dist/index.html'));
// });

app.use('/', (req, res) => {
    res.send('response');
});

http.listen('8081', function() {
    // eslint-disable-next-line no-console
    console.log('listening on *:8081');
});
