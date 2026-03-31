
let { Server } = require('socket.io')


module.exports = {
    serverSocket: function (server) {
        let io = new Server(server);
        io.on('connection', (socket) => {
            console.log(" 1 thang vua join " +socket.id);
        });
    }
}