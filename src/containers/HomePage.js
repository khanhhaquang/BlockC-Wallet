import React, { Component } from 'react';
import './homepage.css';
import AdsBox from '../components/AdsBox.js';
import CoinBox from '../components/CoinBox.js'

class HomePage extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }
    render() {
        return(
          <div className="home-container">

            <div className="banner-container">
              <div className="banner-anim-element">
                <div className="banner-img">
                </div>
              </div>
            </div>

            <div id="ads-container" className="flex-row">
              <div className="ads col-11">
                <div className="ads-wrapper">
                  <div className="flex-row" style={{marginLeft: "-12px",marginRight: "-12px"}}>
                    <AdsBox image="https://news.kucoin.com/wp-content/uploads/2018/05/邀请奖励-en.png"/>
                    <AdsBox image="https://news.kucoin.com/wp-content/uploads/2018/05/邀请奖励-en.png"/>
                    <AdsBox image="https://news.kucoin.com/wp-content/uploads/2018/05/邀请奖励-en.png"/>
                    <AdsBox image="https://news.kucoin.com/wp-content/uploads/2018/05/邀请奖励-en.png"/>
                  </div>
                </div>
              </div>
            </div>

            <div id="coins-container" className="flex-row">
              <div className="coins col-11">
                <div className="coins-wrapper">
                  <div className="flex-row" style={{marginLeft: "-18px",marginRight: "-18px"}}>
                    <CoinBox />
                    <CoinBox />
                    <CoinBox />
                  </div>
                </div>
              </div>
            </div>

          </div>
      )
    }

}

export default HomePage;
