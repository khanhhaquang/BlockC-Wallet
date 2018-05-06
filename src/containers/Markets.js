import React, { Component } from 'react';
import './markets.css';
import SidebarItem from '../components/stateless/SidebarItem.js'

const affixStyle = {
  position: "fixed",
  top: "56px",
  left: "94px",
  width: "50px"
}

const divStyle ={
  width: "50px",
  height: "0px"
}
class Markets extends Component {
    constructor(props){
      super(props);
      this.state = {
        scrollTop: 0,
        affixStyle: {},
        divStyle: {},
        class: ""
      }
    }
    handleScroll = () => {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        console.log(scrollTop)

        if(scrollTop > 116)
          this.setState({
            scrollTop: scrollTop,
            affixStyle: affixStyle,
            divStyle: divStyle,
            class: "affix"
          });

        if(scrollTop < 116)
            this.setState({
              scrollTop: scrollTop,
              affixStyle: {},
              divStyle: {},
              class: ""
            });
    }

    componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return(
          <div className="market-container">
            <div>
              <div className="flex-row market">
                <div className="col-md-12 offset-md-0">
                  <div className="market-wrapper">

                    <div className="marketPan">
                        <div className="sideBar">
                          {/*tool item*/}
                          <div style={this.state.divStyle}>
                            <div className={this.state.class} style={this.state.affixStyle}>
                              <ul className="sidebarStart">
                                <li className="sidebarItem">
                                  <a>
                                    <i className="material-icons iconSetLine" style={{fontSize: "18px"}}></i>
                                  </a>
                                </li>
                                <SidebarItem role="active" icon="iconPublic" />
                                <SidebarItem role="" icon="iconStar"/>
                                <SidebarItem role="" icon="iconMoney"/>
                              </ul>
                            </div>
                          </div>
                          {/*network problem item*/}
                          <div style={this.state.divStyle}>
                            <div className={this.state.class} style={this.state.affixStyle}>
                            </div>
                          </div>

                        </div>

                        <div className="mainPan">
                          <div className="tabs">

                            <div className="tabs-bar">
                              <div className="tabs-extra-content" style={{float:"right"}} >
                                <div className="searchControl">
                                  <input type="search" placeholder="Search Coin"/>
                                  <i className="material-icons iconSearch"></i>
                                </div>
                              </div>

                              <div className="tabs-nav-container">
                              </div>
                            </div>

                            <div className="tabs-content">
                            </div>
                          </div>
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

export default Markets;
