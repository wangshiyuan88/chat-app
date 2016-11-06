import SocketIo from 'socket.io';

import { CONNECTION, ENTER_ROOM, LEAVE_ROOM, CHANNEL_NAME, NEW_MESSAGE, PULL_MORE_MESSAGE, CHAT_PATH, SERVER_ACTION } from '../../common/SocketConstants';
import * as SOCKET_CONSTANTS from '../../common/SocketConstants';
import * as utils from '../utils';
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
                    enterRoom(socket);
                    break;
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

function enterRoom(socket){
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
