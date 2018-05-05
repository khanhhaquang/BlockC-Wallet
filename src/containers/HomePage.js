import React, { Component } from 'react';
import './homepage.css';
import AdsBox from '../components/stateless/AdsBox.js';
import CoinBox from '../components/stateless/CoinBox.js'
import AdvantageBox from '../components/stateless/AdvantageBox.js'
import Footer from '../components/stateless/Footer.js'

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
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/BTC.png" name="Bitcoin" acronym="BTC" usdtprice={1100} />
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/ETH.png" name="Ethereum" acronym="ETH" usdtprice={809.80}/>
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/NEO.png" name="NEO" acronym="NEO" usdtprice={85.94}/>
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/BTC.png" name="Bitcoin" acronym="BTC" usdtprice={1100} />
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/ETH.png" name="Ethereum" acronym="ETH" usdtprice={809.80}/>
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/NEO.png" name="NEO" acronym="NEO" usdtprice={85.94}/>
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/BTC.png" name="Bitcoin" acronym="BTC" usdtprice={1100} />
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/ETH.png" name="Ethereum" acronym="ETH" usdtprice={809.80}/>
                    <CoinBox image="https://assets.kucoin.com/www/coin/pc/NEO.png" name="NEO" acronym="NEO" usdtprice={85.94}/>
                  </div>
                </div>
              </div>
            </div>

            <div id="advantage-container" className="flex-row">
              <div className="advantage col-11">
                <div className="advantage-wrapper">
                  <div className="flex-row" style={{marginLeft: "-16px",marginRight: "-16px"}}>
                    <AdvantageBox image="https://assets.kucoin.com/www/1.6.15/pc/static/cube-1.201e2c44.svg" title="Promotions"/>
                    <AdvantageBox image="https://assets.kucoin.com/www/1.6.15/pc/static/cube-2.8127dac8.svg" title="Announcement"/>
                    <AdvantageBox image="https://assets.kucoin.com/www/1.6.15/pc/static/cube-3.6ebd3e0e.svg" title="Change Log"/>
                  </div>
                </div>
              </div>
            </div>

            <div id="volume-container">
              <div className="flex-row" style={{marginLeft: "-16px",marginRight: "-16px"}}>
                <div className="col-lg-10 col-11 offset-lg-1 offset-halfone">
                  <div className="inner">

                    <span className="title">
                      {"Volume" + " 24h"}
                    </span>
                    <span className="num">
                    6,551.68521948
                    </span>
                    <span>BTC</span>
                    <span className="ml-12">
                      <span>≈</span>
                      {'\u00A0'}
                      <span>65,500,014.08</span>
                      {'\u00A0'}
                      <span>USD</span>
                    </span>

                  </div>
                </div>
              </div>
            </div>

            <div className="footer-container layout-footer">
              <div className="footer">
                <Footer/>
                <div className="copyright">
                  <div className="flex-row">
                    <div className="copyright-wrapper">
                      {"CopyRight © 2017 - 2018 KuCoin Co., Limited. All Rights Reserved."}
                        <div className="pull-right">
                        <span style={{marginRight: "4px"}} >Server time</span>
                        <span style={{marginRight: "4px"}}>(UTC+8)</span>
                        2018-05-05 21:19:26
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
      )
    }

}

export default HomePage;
