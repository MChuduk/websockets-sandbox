const {WebSocket} = require('ws');
const {WebSocketServer} = require("ws");

const port = 3000;
const server = new WebSocketServer({port});

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        server.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(message, {binary: false});
            }
        });
    });
    ws.send('hello');
});
