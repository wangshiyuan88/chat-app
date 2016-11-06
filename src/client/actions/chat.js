import * as CONSTANTS from '../constants/Types';

export const joinChannel = () => {
    return dispatch => {
        return dispatch({
            type: CONSTANTS.ENTER_ROOM,
            payload: {} //No payload, but just want to keep a pattern
        });
    }
}


export const postMessage = (body) => {
    return dispatch => {
        //Update Self Message Panel
        console.log('From Action');
        console.log(body);
        dispatch({
            type: CONSTANTS.NEW_SELF_MESSAGE,
            payload: body //No payload, but just want to keep a pattern
        });
        dispatch({
            type: CONSTANTS.NEW_MESSAGE,
            payload: body
        })
    }
}
