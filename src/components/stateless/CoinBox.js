import React from "react";

const style1={
    lineHeight: "24px",
    display: "inline-block"
}
const style2={
    width: "24px",
    height: "24px",
    float: "left",
    marginRight: "4px"
}
const CoinBox = (props) =>{
    return(
        <div className="coin-box col-lg-4 col-6" style={{paddingLeft: "18px", paddingRight: "18px"}}>
            <div className="coin-img" style={{}}>
                <a href="" style={{color: "rgb(85, 85, 85)"}}>
                <div className="card">
                    <div className="mb-12">
                      <div style={style1}>
                        <img src={props.image} style={style2}/>
                        <span>{props.name}</span>
                        {'\u00A0'}
                        <span className="color-gray">{props.acronym}</span>
                      </div>
                    </div>
                    <p>
                        <span id="price-wrapper">
                          <span className="price">{props.usdtprice}</span>
                          {'\u00A0'}
                          <span className="color-gray">USDT</span>
                          <span className="tooltiptextTop">Last Price</span>
                        </span>
                        {'\u00A0' + '\u00A0'}
                        <span className="color-primary">
                          <span>$</span>
                          <span>{props.usdtprice}</span>
                        </span>
                        <span className="rate" style={{float: "right"}}>
                          <span className="color-high">
                          {"+" + "1.86" + "%"}
                          </span>
                        </span>
                    </p>
                    <div className="trending">
                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}

export default CoinBox;
