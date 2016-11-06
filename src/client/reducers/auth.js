import { IS_AUTHENTICATED, USER_INFO, SIGN_OUT } from '../constants/Types';

export default function(state={}, action) {
    switch (action.type) {
        case SIGN_OUT:
            return {
                ...state,
                ...action.payload
            };
        case USER_INFO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
