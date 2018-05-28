const initState = {
    isSelling : false,
    sold : false,
    result: {}
}

const sellReducer = (state = initState, action) => {
    switch(action.type){
        case "SELL":
            return{...state, isSelling: true}
        case "SELL_SUCCESS":
            return{...state, sold: true, isSelling: false, result: action.data}
        case "SELL_FAIL":
            return{...state, sold: false, isSelling: false};
        default:
            return state;
    }
}

export default sellReducer;