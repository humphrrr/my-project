const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');
const cp = require('./command_processor');
const world = new cp.MyObject('The big wide world');
const area_start = new cp.MyObject('area where you start');
const area_north = new cp.MyObject('area to the north');

area_start.container = world;
area_north.container = world;

area_start.exit_north = area_north;

const objects = new Set();

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(cors());

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    
    socket.object = new cp.MyObject(String(socket.id));
    socket.object.container = area_start;

    socket.on('command', (data) => {
      console.log(data);
      resp = cp.getResponse(data.command, socket.object);

      socket.emit('message', {message:`${resp.self}`});
    });

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});
  
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});