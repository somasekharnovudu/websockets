const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8082 });


wss.on('connection', (ws) => {
    console.log('====== connected!!');

    ws.on('message', (data) => {
        const message = Buffer.from(data).toString();
        console.log('==== data', message)
        ws.send(message.toUpperCase());
    })
    ws.on('close', (reason) => {
        console.log('===== Disconencted', reason);
    })
});

wss.on('error', (err) => {
    console.log('===== Error', err);
})