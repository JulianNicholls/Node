import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the database file
const db = await open({
  filename: 'chat.db',
  driver: sqlite3.Database,
});

// Create messages table
await db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_offset TEXT UNIQUE,
    content TEXT
  );`);

const PORT = process.env.PORT || 4005;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'public')));

io.on('connection', async (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', async (msg, clientOffset, callback) => {
    let result;

    try {
      result = await db.run(
        'INSERT INTO messages (content, client_offset) VALUES (?, ?)',
        msg,
        clientOffset
      );
    } catch (err) {
      if (err.errno === 19) {
        // SQLITE_CONSTRAINT
        // We already have it, so just acknowledge
        callback();
      }
      // Do nothng...
      return;
    }

    // Add the offset to the message
    io.emit('chat message', msg, result.lastID);
    // Acknowledge the event
    callback();
  });

  if (!socket.recovered) {
    console.log('Recovering messages');

    try {
      await db.each(
        'SELECT id, content FROM messages WHERE id ? ?',
        [socket.handshake.auth.serverOffset] || 0,
        (_err, row) => {
          socket.emit('chat message', row.content, row.id);
        }
      );
    } catch (err) {
      // another error, oh well
    }
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
