const initState = {
    isLoggingin : false,
    loggedin : false,
    result: {}
}

const loginReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN":
            return{...state, isLoggingin: true}
        case "LOGIN_SUCCESS":
            return{...state, loggedin: true, isLoggingin: false, result: action.data}
        case "LOGIN_FAIL":
            return{...state, loggedin: false, isLoggingin: false};
        default:
            return state;
    }
}

export default loginReducer;