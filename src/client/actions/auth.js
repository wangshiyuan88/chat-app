import axios from 'axios';
import { IS_AUTHENTICATED } from '../constants/Types';
import { browserHistory } from 'react-router';
import { LOGIN } from '../constants/Urls';

function login({username, passpord}){
    return (dispatch) => {
        var handleRes = function(res){
            var loginSuccess = res.status === 200;
            if(loginSuccess){
                alert('Oh yeah');
                //browserHistory.push('/chat');
            }else {
                alert('No No');
            }
            dispatch(loginSuccess);
        }
        axios.post(`${LOGIN}`, {username, passpord}).then(handleRes)
    }
}


function loginResult(result){
    return {
        type: IS_AUTHENTICATED,
        result: result
    }
}
