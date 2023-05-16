const http = require('http');
const fs = require('fs');

const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(3000);