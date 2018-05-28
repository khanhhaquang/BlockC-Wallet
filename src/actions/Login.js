import axios from 'axios';
import {apiUrl} from '../apiConfig.js'

function loginStart(){
    return {type : "LOGIN"}
}
function loginSuccess(data){
    return {type : "LOGIN_SUCCESS", data: data}
}
function loginFail(message){
    return {type : "LOGIN_FAIL", message: message}
}

export function login(email,password){
    const content = {
        email: email,
        password: password,
    }
    return dispatch => {
        dispatch(signinStart())
        axios.post(apiUrl +'user/signin', {content})
        .then(response => {
        const data = response.data;
        if(response && data.user){
            console.log(data)
            sessionStorage.email = data.user.email;
            sessionStorage.address = data.user.address;
            sessionStorage.isLogged = true;
            dispatch(signinSuccess(data))
        }
        else{
            dispatch(signinFail(data.msg))
        }
        })
        .catch(error => {
        console.log(error);
        dispatch(signinFail("Something went wrong"))
        });
    }
}