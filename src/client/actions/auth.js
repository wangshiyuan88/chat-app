import axios from 'axios';
import { IS_AUTHENTICATED, USER_INFO, SIGN_OUT } from '../constants/Types';
import { hashHistory } from 'react-router';
import { GET_USER_INFO, SIGN_OUT as SIGN_OUT_URL } from '../constants/Urls';

export const getUserInfo = () => {
    return (dispatch) => {
        var handleRes = function(res){
            var chain = Promise.resolve(dispatch({
                type: USER_INFO,
                payload: res.data
            }));
            if(res.data.authenticated){
                chain = chain.then(()=>{
                    if(window.location.hash!=='#/chat'){
                        hashHistory.push('/chat');
                    }
                })
            }
            return chain;
        }
        return axios.get(`${GET_USER_INFO}`).then(handleRes)
    }
}

export function signOut(){
    return (dispatch) => {
        var handleRes = function(res){
            var chain = Promise.resolve(dispatch({
                type: SIGN_OUT,
                payload: res.data
            }));
            if(!res.data.authenticated){
                chain = chain.then(()=>{
                    if(window.location.hash){
                        hashHistory.push('/');
                    }
                })
            }
            return chain;
        }
        return axios.get(`${SIGN_OUT_URL}`).then(handleRes);
    }
}

function loginSuccess(result){
    return {
        type: IS_AUTHENTICATED,
        result: result
    }
}
