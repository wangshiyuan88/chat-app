import { GET_ALL_FRIENDS, NEW_SELF_MESSAGE, BROCAST_MESSAGE, NEW_BACTH_MESSAGES } from '../constants/Constant';

export default function(state={}, action) {
    switch (action.type) {
        case GET_ALL_FRIENDS:
            return {
                ...state,
                ...action.payload
            }
        case NEW_SELF_MESSAGE:
            var messages = state.messages? state.messages : [];
            messages.push(action.payload);
            return {
                ...state,
                messages: [...messages],
                start: state.start + 1
            }
        case BROCAST_MESSAGE:
            var messages = state.messages? state.messages : [];
            messages.push(action.payload);
            return {
                ...state,
                messages: [...messages],
                start: state.start + 1
            }
        case NEW_BACTH_MESSAGES:
            var messages = state.messages? state.messages : [];
            messages.unshift(...action.payload.messages);
            return {
                ...state,
                messages: [...messages],
                start: action.payload.start
            }
        default:
            return state;
    }
}
