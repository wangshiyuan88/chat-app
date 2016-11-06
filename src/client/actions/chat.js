import * as CONSTANTS from '../constants/Types';
import * as SOCKET_CONSTANTS from '../../common/SocketConstants';

export const joinChannel = () => {
    return dispatch => {
        return dispatch({
            type: CONSTANTS.ENTER_ROOM,
            payload: {} //No payload, but just want to keep a pattern
        });
    }
}
