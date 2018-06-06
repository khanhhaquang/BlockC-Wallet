import axios from 'axios';

function sellStart(){
    return {type : "SELL"}
}
function sellSuccess(data){
    return {type : "SELL_SUCCESS", data: data}
}
function sellFail(message){
    return {type : "SELL_FAIL", message: message}
}

export function sell(typecoin,coinvalue){
    const sendData = {
        user_id: 10,
        type_coin: typecoin,
        xu_value: coinvalue
    }

    console.log(sendData)

    return dispatch => {
        dispatch(sellStart())
        axios.post(API_URL +'xu-to-coin', sendData)
        .then(response => {
            const data = response.data;
            console.log(data)

            if(data.status !== "200")
                dispatch(sellFail("Something went wrong"))
            else
                dispatch(sellSuccess(data))

        })
        .catch(error => {
            console.log(error);
            dispatch(sellFail("Something went wrong"))
        });
    }
}