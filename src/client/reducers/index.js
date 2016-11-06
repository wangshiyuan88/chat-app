import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import chat from './chat'

const rootReducer = combineReducers({
    auth,
    // form: formReducer
    chat
})

export default rootReducer;
