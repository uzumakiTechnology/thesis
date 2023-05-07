// Create endpoint to initialize the WebSocket connection
// handle the WebSocket connection by ensuring that there is only one instance of the WebSocket
// which will be access by making a request to /api/socket on the client

import {Server} from 'socket.io'

const SocketHandle = (req,res) =>{

    if(res.socket.server.io){
        console.log('Socket is already running');
    }
    else{
        console.log('Socket is initializing');
        const io = new Server(res.socket.server);
        res.socket.server.io = io

    }
    res.end();
}

export default SocketHandle