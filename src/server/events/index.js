import SocketIo from 'socket.io';
import * as SOCKET_CONSTANTS from '../../common/SocketConstants';
import * as utils from '../utils';
import Message from '../models/Message';
//Only support one channel now
export default (server) => {
    const io = new SocketIo(server);
    io.on(SOCKET_CONSTANTS.CONNECTION, function(socket){
        console.log('Get Connected!');
        // socket.join(SOCKET_CONSTANTS.CHANNEL_NAME);
        socket.on(SOCKET_CONSTANTS.SERVER_ACTION, function(action){
            //Broadcast update friend list event
            //Pull history message, emit to target user
            switch (action.type) {
                case SOCKET_CONSTANTS.ENTER_ROOM:
                    getFriends(socket);
                    break;
                case SOCKET_CONSTANTS.NEW_MESSAGE:
                    broastCastMessage(socket, action.payload);
                    saveMessage(action.payload);
                default:
                    break;
            }
        });
        // socket.on(LEAVE_ROOM, function(){
        //     //Broadcast update friend list event
        // });
        // socket.on(NEW_MESSAGE, function(){
        //     //Save new message to DB
        //     //Broadcast update message list event
        // });
        // socket.on(PULL_MORE_MESSAGE, function(){
        //     //Pull more message from DB and send back to target user
        // });
    })
}

function broastCastMessage(socket, message){
    //Broadcast message
    var body = {
        type: SOCKET_CONSTANTS.BROCAST_MESSAGE,
        payload: message
    }
    socket.broadcast.emit(SOCKET_CONSTANTS.SERVER_ACTION, body)
}

function saveMessage(message){
    new Message(message).save(function(err, message){
        if(err){
            console.log(err);
        }else{
            console.log('Message got saved!');
            console.log(message);
        }
    });
}

function getFriends(socket){
    var reply = (data) => {
        var body = {
            type: SOCKET_CONSTANTS.GET_ALL_FRIENDS,
            payload: {
                friends: data
            }
        }
        socket.emit(SOCKET_CONSTANTS.SERVER_ACTION, body);
    }
    utils.getUsers().then(reply);
}
