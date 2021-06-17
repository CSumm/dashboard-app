const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
var CronJob = require('cron').CronJob;

const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });  

    var job = new CronJob('*/30 * * * * *', function() {
      let min = 25;
      let max = 28;
      let waterLevel = Math.random() * (max-min)+min;
      let warning = '';

      if(waterLevel > 28){
        warning = Date.now() + ` water level is too high for this time of year. Take immediate flooding prevention measures`;
      }
      
      if(waterLevel < 26){
        warning = Date.now() + ` water level is too low. Avoid boating on the river at this time`;
      }

      let obj = {waterLevel:waterLevel,warning:warning}
      ws.send(JSON.stringify(obj));
    

}, null, true, 'America/New_York');
job.start();
  });

  app.get('/', (req,res) => res.send("hello world"));
  server.listen(3001, () => console.log("Listening on port :3001"));