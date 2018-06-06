import axios from 'axios';

function buyStart(){
    return {type : "BUY"}
}
function buySuccess(data){
    return {type : "BUY_SUCCESS", data: data}
}
function buyFail(message){
    return {type : "BUY_FAIL", message: message}
}

export function buy(typecoin,coinvalue){
    const sendData = {
        user_id: 10,
        type_coin: typecoin,
        coin_value: coinvalue
    }

    console.log(sendData)

    return dispatch => {
        dispatch(buyStart())
        axios.post(API_URL +'coin-to-xu', sendData)
        .then(response => {
            const data = response.data;
            console.log(data)

            if(data.status !== "200")
                dispatch(buyFail("Something went wrong"))
            else
                dispatch(buySuccess(data))
        })
        .catch(error => {
            console.log(error);
            dispatch(buyFail("Something went wrong"))
        });
    }
}