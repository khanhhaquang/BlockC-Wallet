import React from "react";

const announcements = [
  "KuCoin Referral Bonus Program",
  "Decentraland(MANA) gets listed on KuCoin!",
  "Trade Cryptocurrency on the Go",
  "How to Create your KuCoin Account for Free?",
  "dock.io(DOCK) gets listed on KuCoin! World premiere!",
  "Wanchain(WAN) gets listed on KuCoin! ",
  "Ontology (ONT) gets listed on KuCoin! ",
  "Lympo(LYM) gets listed on KuCoin",
  "OriginTrail(TRAC) gets listed on KuCoin!"
]

const renderList = () => announcements.map((value,index) =>{
    return(
      <li key={index}>
        <a href="https://news.kucoin.com/en/dock-iodock-gets-listed-on-kucoin-world-premiere/"  target="_blank">{value}</a>
      </li>
    )
})

const AdvantageBox = (props) =>{
    return(
        <div className="col-4" style={{paddingLeft: "16px", paddingRight: "16px"}}>
            <div className="advantageTitle">
              <img src={props.image}/>
              {props.title}
            </div>
            <ul className="list" style={{paddingLeft: "40px"}}>
              {renderList()}
            </ul>
        </div>
    )
}

export default AdvantageBox;
