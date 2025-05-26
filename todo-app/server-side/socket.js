let io;

function initSocket(server) {
    const socketIo = require('socket.io');
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });
    io.on('connection', (socket) => {
        socket.on('taskUpdated', (task) => {
            socket.broadcast.emit('taskUpdated', task); // Broadcast to all other clients
        });
        socket.on('taskCreated', (task) => {
            socket.broadcast.emit('taskCreated', task); // Broadcast to all other clients
        });

        socket.on('taskDeleted', (taskId) => {
            socket.broadcast.emit('taskDeleted', taskId); // Broadcast to all other clients
        });
        socket.on('lockTask', (taskId) => {
            socket.broadcast.emit('lockTask', taskId); // Broadcast to all other clients
        }
        );
        socket.on('unlockTask', (taskId) => {
            socket.broadcast.emit('unlockTask', taskId); // Broadcast to all other clients
        });
    });
}

function emitUpdate(event, data) {
    if (io) {
        io.emit(event, data);
    }
}

module.exports = {
    initSocket,
    emitUpdate
};