import React from "react";

const CoinBox = (props) =>{
    return(
        <div className="coin-box col-4" style={{paddingLeft: "18px", paddingRight: "18px"}}>
            <div className="coin-img" style={{}}>
                <div className="card">  
                    <div className="name">
                    </div>
                    <p>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                    <div className="trending">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinBox;