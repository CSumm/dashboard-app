const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    ws.send('something');
  });

  app.get('/', (req,res) => res.send("hello world"));
  server.listen(3001, () => console.log("Listening on port :3001"));