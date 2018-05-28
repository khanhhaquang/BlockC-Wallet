import React from "react";

const HeaderCoin = (props) =>{
    return(
        <div className="headerCoin">
            <div className="headerCoinTop">
                {props.name + "/USD"}
            </div>
            <div className="headerCoinMain">
                {props.price}
            </div>
        </div>
    )
}

export default HeaderCoin;
