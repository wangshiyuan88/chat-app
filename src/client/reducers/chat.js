import { GET_ALL_FRIENDS } from '../constants/Types';

export default function(state={}, action) {
    switch (action.type) {
        case GET_ALL_FRIENDS:
            return Object.assign({}, state,
                action.payload
            );
        default:
            return state;
    }
}
