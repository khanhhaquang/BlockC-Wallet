import React, { Component } from 'react';
import propTypes from 'prop-types';
import './header.css';
import { Link } from "react-router-dom";
import HeaderCoin from './stateless/HeaderCoin.js'

const tabs = [
  "Home",
  "Markets",
  "Assets",
  "Account",
  "Discover",
  "News",
  "Support"
]
export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
        headbackground: "#0e75ee",
        headRoomState: "headroom-unfixed",
        scrollTop: 0,
        selectedItem: 0
    }
  }

  selectItem = (index) =>{
    this.setState({
      selectedItem: index
    })
  }

  renderNavTabs = () =>
    tabs.map((value,index)=>{
        return (
            <li className={index === this.state.selectedItem ? "selected-item" : "unselected-item"} key={index}>
                <Link to={value === "Home" ? "/" : "/"+ value}><div className="item" onClick={() => this.selectItem(index)}>{value}</div></Link>
            </li>
        )
  })

  handleScroll = () => {
      let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      const currentscrollTop = this.state.scrollTop;
      if(scrollTop > currentscrollTop && scrollTop > 56)
        this.setState({
          scrollTop: scrollTop,
          headbackground: "#35425b",
          headRoomState: "headroom-unpinned",
        });

      if(scrollTop < currentscrollTop)
          this.setState({
            scrollTop: scrollTop,
            headbackground: "#0e75ee",
            headRoomState: "headroom-pinned",
          });

      if(scrollTop === 0)
          this.setState({
            scrollTop: 0,
            headRoomState: "headroom-unfixed"
          })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
      return(
          <div className="header-wrapper">
              <div className="header-room">
                <div className={"headroom-wrapper " + this.state.headRoomState}  style={{backgroundColor: this.state.headbackground}}>

                  <div className="headerRow flex-row">
                    <div className="headerInner">
                      <div className="headerStart">

                        <div className="header-nav">
                          <h1 className="logo-wrapper">
                            <Link to="/"><img src="https://assets.kucoin.com/www/1.6.16/pc/static/logo_v.1.0.a0267de6.svg" alt="kucoin.com"/></Link>
                          </h1>
                          <ul>
                            {this.renderNavTabs()}
                          </ul>
                        </div>

                        <div className="header-coins">
                          <HeaderCoin name="BTC" price={9610.5} />
                          <HeaderCoin name="ETH" price={781.23} />
                          <HeaderCoin name="NEO" price={82.25} />
                          <HeaderCoin name="USDT" price={1} />
                        </div>

                      </div>

                      <div className="account-control-wrapper">
                        <div>
                          <Link to="/login"><button id="login-btn">Log in</button></Link>
                          <Link to="/signup"><button id="signup-btn">Sign up</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
    )
  }
};
