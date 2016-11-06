import { GET_ALL_FRIENDS, NEW_SELF_MESSAGE, BROCAST_MESSAGE } from '../constants/Types';

export default function(state={}, action) {
    switch (action.type) {
        case GET_ALL_FRIENDS:
            return {
                ...state,
                ...action.payload
            }
        case NEW_SELF_MESSAGE:
            console.log('From NEW_SELF_MESSAGE');
            console.log(action.payload);
            var messages = state.messages? state.messages : [];
            messages.push(action.payload);
            return {
                ...state,
                messages: [...messages]
            }
        case BROCAST_MESSAGE:
            console.log('From BROCAST_MESSAGE');
            var messages = state.messages? state.messages : [];
            messages.push(action.payload);
            return {
                ...state,
                messages: [...messages]
            }
        default:
            return state;
    }
}
