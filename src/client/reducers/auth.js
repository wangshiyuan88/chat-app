import { IS_AUTHENTICATED } from '../constants/TYPES.js';

export default function(state=[], action) {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                IS_AUTHENTICATED
            };
        default:
            return state;
    }
}
