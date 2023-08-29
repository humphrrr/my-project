const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(cors());

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    
    socket.on('command', (data) => {
      console.log(data);
      switch(String(data.command).toLowerCase()) {
        case 'hello': {
          socket.emit('message', {message: 'Right back at you!'});
        }
  
      }
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