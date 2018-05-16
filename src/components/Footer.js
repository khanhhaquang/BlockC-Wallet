import React, { Component } from 'react';
import propTypes from 'prop-types';
import './footer.css';
import { Link } from "react-router-dom";

const FooterWrapper = (props) =>{
    return(
            <div className="footer-wrapper">
                <div className="footerCol">
                <p className="footerTitle">About Us</p>
                <p><a href="https://blog.kucoin.com/" target="_blank" rel="noopener noreferrer">Team</a></p>
                <p><a href="https://news.kucoin.com/en/category/changelog/" target="_blank" rel="noopener noreferrer">Change Log</a></p>
                </div>
                <div className="footerCol">
                <p className="footerTitle">Legal</p>
                <p><a href="https://news.kucoin.com/en/terms-of-use/" target="_blank" rel="noopener noreferrer">Terms of Use</a></p>
                <p><a href="https://news.kucoin.com/en/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                <p><a href="https://news.kucoin.com/en/anti-money-laundering-counter-the-financing-of-terrorism-aml-cft-policy/" target="_blank" rel="noopener noreferrer">AML&amp;CFT</a></p>
                </div>
                <div className="footerCol">
                <p className="footerTitle">Trading</p>
                <p><a href="http://docs.kucoinapidocs.apiary.io/" target="_blank" rel="noopener noreferrer">API Documentation</a></p>
                <p><a href="https://news.kucoin.com/en/fee/" target="_blank" rel="noopener noreferrer">Fees</a></p>
                <p><a href="http://kucoinform.mikecrm.com/tAssDWK" target="_blank" rel="noopener noreferrer">Add token for listing</a></p>
                <p><a href="https://etherscan.io/token/0x039b5649a59967e3e936d7471f9c3700100ee1ab" target="_blank" rel="noopener noreferrer">KCS Blockchain Explorer</a></p>
                </div>
                <div className="footerCol">
                <p className="footerTitle">Contact Us</p>
                <p><a href="https://support.kucoin.com/hc/en-us" target="_blank" rel="noopener noreferrer">Help Center</a></p>
                <p><a href="https://kufun-limited.breezy.hr/" target="_blank" rel="noopener noreferrer">Careers</a></p>
                </div>
                <div>
                <div>
                    <a className="socialItem" href="https://www.facebook.com/kucoinexchangepage" target="_blank" rel="noopener noreferrer"><img src="https://assets.kucoin.com/www/1.6.15/pc/static/facebook-color.1188449f.svg"/><span className="tooltiptextBottom">Facebook</span></a>
                    <a className="socialItem" href="https://www.reddit.com/r/kucoin" target="_blank" rel="noopener noreferrer"><img src="https://assets.kucoin.com/www/1.6.15/pc/static/reddit-color.c316b8bc.svg"/><span className="tooltiptextBottom">Reddit</span></a>
                    <a className="socialItem" href="https://t.me/Kucoin_Exchange" target="_blank" rel="noopener noreferrer"><img src="https://assets.kucoin.com/www/1.6.15/pc/static/telegram.894018a5.svg"/><span className="tooltiptextBottom">Telegram</span></a>
                    <a className="socialItem" href="https://t.me/joinchat/FMqUpg0PI9WjzplzfYahjw" target="_blank" rel="noopener noreferrer"><img src="https://assets.kucoin.com/www/1.6.15/pc/static/telegram.894018a5.svg"/><span className="tooltiptextBottom">Telegram</span></a>
                    <a className="socialItem" href="https://twitter.com/kucoincom" target="_blank" rel="noopener noreferrer"><img src="https://assets.kucoin.com/www/1.6.15/pc/static/twitter-color.98cf230b.svg"/><span className="tooltiptextBottom">Twitter</span></a>
                </div>
                <div className="download">
                    <p className="title">MOBILE</p>
                    <a target="_blank" href=""><img src="https://assets.kucoin.com/www/1.6.15/pc/static/android.0a385bc9.svg" className="mr-12"/></a>
                    <a target="_blank" href=""><img src="https://assets.kucoin.com/www/1.6.15/pc/static/ios.3d40cdbd.svg" className="mr-12"/></a>
                    <a className="mobile">
                    <span><img src="https://assets.kucoin.com/www/1.6.15/pc/static/phone.7626a5da.svg" className="text mr-12"/>
                        <div className="text">Mobile version</div>
                    </span>
                    </a>
                </div>
                </div>
            </div>
    )
}


export default class Footer extends Component {
    render(){
        return(
            <div className="footer-container layout-footer">
                <div className="footer">
                <FooterWrapper/>
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
        )
    }
}
