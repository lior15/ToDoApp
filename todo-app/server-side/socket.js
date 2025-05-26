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
            socket.broadcast.emit('taskUpdated', task); 
        });
        socket.on('taskCreated', (task) => {
            socket.broadcast.emit('taskCreated', task); 
        });

        socket.on('taskDeleted', (taskId) => {
            socket.broadcast.emit('taskDeleted', taskId); 
        });
        socket.on('lockTask', (taskId) => {
            socket.broadcast.emit('lockTask', taskId); 
        }
        );
        socket.on('unlockTask', (taskId) => {
            socket.broadcast.emit('unlockTask', taskId); 
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