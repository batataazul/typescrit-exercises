import http from 'http';
import path from 'path';

import express from 'express';
import { Server } from 'socket.io';

const events = {
  chatMessage: 'chat message',
  disconnection: 'disconnect',
};

export const main = () => {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);
  const pathScript = path.resolve('src/index.html');

  app.get('/', (req, res) => {
    res.sendFile(pathScript);
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on(events.disconnection, () => {
      console.log('user disconnected');
    });
    socket.on(events.chatMessage, (msg) => {
      console.log('message: ' + msg);
    });

    socket.on(events.chatMessage, (msg) => {
      io.emit('chat message', msg);
    });
  });

  server.listen(3000, () => {
    console.log('listening on *:3000');
  });
};

main();
