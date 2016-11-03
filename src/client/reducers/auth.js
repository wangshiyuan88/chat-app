import { IS_AUTHENTICATED } from '../constants/Types';

export default function(state=[], action) {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                IS_AUTHENTICATED : action.result
            };
        default:
            return state;
    }
}
