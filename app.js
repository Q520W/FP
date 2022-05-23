 const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io')
const io = socketio(server);

app.use( express.static('group') );
io.on('connection', onConnection);
server.listen(3000, () => console.log('listening on *:3000') );


function onConnection(socket){
    console.log('a user connected');
    socket.on('disconnect', onDisconnect);
    socket.on('chat message', onChatMessage);
   }

function onDisconnect(){
    console.log('user disconnected');
}
function onChatMessage(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
}