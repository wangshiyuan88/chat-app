import SocketIo from 'socket.io';
import * as SOCKET_CONSTANTS from '../../common/SocketConstants';
import * as utils from '../utils';
import Message from '../models/Message';
//Only support one channel now
export default (server) => {
    const io = new SocketIo(server);
    io.on(SOCKET_CONSTANTS.CONNECTION, function(socket){
        socket.on(SOCKET_CONSTANTS.SERVER_ACTION, function(action){
            //Broadcast update friend list event
            //Pull history message, emit to target user
            switch (action.type) {
                case SOCKET_CONSTANTS.ENTER_ROOM:
                    getFriends(socket);
                    pullMessage(socket, 0);
                    break;
                case SOCKET_CONSTANTS.NEW_MESSAGE:
                    broastCastMessage(socket, action.payload);
                    saveMessage(action.payload);
                    break;
                case SOCKET_CONSTANTS.PULL_MORE:
                    pullMessage(socket, action.payload);
                    break;
                default:
                    break;
            }
        });
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

function pullMessage(socket, start){

    var query = Message.find().skip(start).limit(SOCKET_CONSTANTS.BATCH_MESSAGE_SIZE).sort('-time');
    var reply = (messages) => {
        var messages = messages.reverse();
        var body = {
            type: SOCKET_CONSTANTS.NEW_BACTH_MESSAGES,
            payload: {
                messages,
                start: start + messages.length
            }
        }
        socket.emit(SOCKET_CONSTANTS.SERVER_ACTION, body);
    }
    Promise.resolve(query).then(reply);
}
