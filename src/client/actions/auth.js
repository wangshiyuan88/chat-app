import axios from 'axios';
import { IS_AUTHENTICATED, USER_INFO } from '../constants/Types';
import { browserHistory } from 'react-router';
import { GET_USER_INFO } from '../constants/Urls';

function getUserInfo(){
    return (dispatch) => {
        var handleRes = function(res){
            var chain = dispatch(res);
            if(res.authenticated){
                chain = chain.then(()=>browserHistory.push('/chat'))
            }
            return chain;
        }
        return axios.get(`${GET_USER_INFO}`).then(handleRes)
    }
}

function loginSuccess(result){
    return {
        type: IS_AUTHENTICATED,
        result: result
    }
}
