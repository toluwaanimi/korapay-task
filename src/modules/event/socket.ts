import socket from "socket.io";
import {app} from '../../app';

// @ts-ignore
const io = socket(app);

io.on('connection', () => {
    console.log('connection made');
});

export default io;
