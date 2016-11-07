import * as CONSTANTS from '../constants/Constant';

export const joinChannel = () => {
    return dispatch => {
        dispatch({
            type: CONSTANTS.ENTER_ROOM,
            payload: {} //No payload, but just want to keep a pattern
        });
    }
}


export const postMessage = (body) => {
    return dispatch => {
        //Update Self Message Panel
        dispatch({
            type: CONSTANTS.NEW_SELF_MESSAGE,
            payload: body //No payload, but just want to keep a pattern
        });
        dispatch({
            type: CONSTANTS.NEW_MESSAGE,
            payload: body
        });
    }
}

export const pullMoreMessage = (start) => {
    return dispatch => {
        dispatch({
            type: CONSTANTS.PULL_MORE,
            payload: start
        })
    }
}
