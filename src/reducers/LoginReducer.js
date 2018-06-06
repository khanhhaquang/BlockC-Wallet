const initState = {
    isLogging : false,
    logged : false,
    result: {}
}

const loginReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN":
            return{...state, isLogging: true}
        case "LOGIN_SUCCESS":
            return{...state, logged: true, isLogging: false, result: action.data}
        case "LOGIN_FAIL":
            return{...state, logged: false, isLogging: false};
        default:
            return state;
    }
}

export default loginReducer;