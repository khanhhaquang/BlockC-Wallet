import React, { Component } from 'react';
import propTypes from 'prop-types';
import './header.css';
import { Link } from "react-router-dom";

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
        headroomState: "headroom--unfixed",
        selectedItem: 0
    }
  }

  selectItem = (index) =>{
    this.setState({
      selectedItem: index
    })
  }

  renderNavTabs=()=>
    tabs.map((value,index)=>{
        return (
            <li className={index === this.state.selectedItem ? "selected-item" : "unselected-item"} key={index}>
                <Link to={value === "Home" ? "/" : "/"+ value}><a onClick={() => this.selectItem(index)}><div className="item">{value}</div></a></Link>
            </li>
        )
  })

  render() {
      return(
          <div className="header-wrapper">
              <div className="header-room" style={{height: '56px'}}>
                <div className="headroom-wrapper">
                    <div className="nav-wrapper">
                      <h1 className="wallet-logo-wrapper">
                        <a href="/"><div className="logo"></div></a>
                      </h1>
                      <ul>
                        {this.renderNavTabs()}
                      </ul>
                    </div>
                    <div className="account-control-wrapper">
                      <Link to="/login"><a><button id="login-btn">Log in</button></a></Link>
                      <Link to="/signup"><a><button id="signup-btn">Sign up</button></a></Link>
                    </div>
                </div>
              </div>
          </div>
    )
  }
};
