import React from "react";

const AdsBox = (props) =>{
    return(
        <div className="ads-box col-3" style={{paddingLeft: "12px", paddingRight: "12px"}}>
            <div className="ads-img" style={{backgroundImage: "url("+ props.image +")"}}>
                <div className="title">
                    <span>KuCoin Referral Bonus Program</span>
                </div>
            </div>
        </div>
    )
}

export default AdsBox;