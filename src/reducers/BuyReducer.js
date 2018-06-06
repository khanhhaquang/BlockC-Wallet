const initState = {
    isBuying : false,
    bought : false,
    result: {}
}

const buyReducer = (state = initState, action) => {
    switch(action.type){
        case "SELL":
            return{...state, isBuying: true}
        case "SELL_SUCCESS":
            return{...state, bought: true, isBuying: false, result: action.data}
        case "SELL_FAIL":
            return{...state, bought: false, isBuying: false};
        default:
            return state;
    }
}

export default buyReducer;