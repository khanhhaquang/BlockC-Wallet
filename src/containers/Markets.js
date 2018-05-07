import React, { Component } from 'react';
import './markets.css';
import SidebarItem from '../components/stateless/SidebarItem.js'

const coinTabs = [
  "BTC",
  "ETH",
  "USDT"
]

const tableSortHeaders = [
  "Last Price",
  "Change",
  "Amount(24H)",
  "Volume(24H)",
]


var affixStyle = {
  position: "fixed",
  top: "56px",
  width: "50px",
  left: window.innerWidth > 1140 ? (1 + (window.innerWidth-1140)/2) + "px" : 1 + "px"
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
        coinTab:0,
        affixStyle: {},
        divStyle: {},
        class: ""
      }
    }

    renderSortHeaders = () => tableSortHeaders.map((value,index)=>{
      return(
        <th className="">
          <span>{value}
            <div className="table-column-sorter">
              <span className="table-column-sorter-up off" title="↑"><i class="material-icons iconCaretUp"></i></span>
              <span className="table-column-sorter-down off" title="↓"><i class="material-icons iconCaretDown"></i></span>
            </div>
          </span>
        </th>
      )
    })

    handleClickTab = (index) => {
      this.setState({
        coinTab: index
      })
    }
    renderCoinTabs = () => coinTabs.map((value,index)=>{
      return(
        <div onClick = {() => this.handleClickTab(index)} key={index} role="tab" aria-disabled="false" aria-selected={this.state.coinTab === index ? "true" : "false"} className={this.state.coinTab === index ?"tabs-tab-active tabs-tab" : "tabs-tab"}>{value}</div>
      )
    })

    handleResize = () => {
      if(this.state.scrollTop > 116){
        const windowInnerWidth = window.innerWidth;
        affixStyle.left = windowInnerWidth > 1140 ? (1 + (windowInnerWidth-1140)/2) + "px" : 1 + "px";
        console.log(affixStyle)

        this.setState({
          affixStyle: Object.assign({}, affixStyle)
        })

      }
    }

    handleScroll = () => {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        if(scrollTop > 116)
          this.setState({
            scrollTop: scrollTop,
            affixStyle: Object.assign({}, affixStyle),
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
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
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
                          <div className="tabs tabs-top tabs-card tabs-no-animation">

                            <div className="tabs-bar">
                              <div className="tabs-extra-content" style={{float:"right"}} >
                                <div className="searchControl">
                                  <input type="search" placeholder="Search Coin"/>
                                  <i className="material-icons iconSearch"></i>
                                </div>
                              </div>

                              <div className="tabs-nav-container">

                                <div className="tabs-nav-wrap">
                                  <div className="tabs-nav-scroll">
                                    <div className="tabs-nav tabs-nav-animated">
                                      <div className="tabs-ink-bar tabs-ink-bar-animated" style={{display: "block",transform: "translate3d(0px, 0px, 0px)",width: "62px"}}></div>
                                      {this.renderCoinTabs()}
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>

                            <div className="tabs-content tabs-content-no-animated">
                              <div role="tabpanel" aria-hidden="false" className="tabs-tabpane tabs-tabpane-active">
                                <div className="table-wrapper table">
                                  <div className="spin-nested-loading">
                                    <div className="spin-container">
                                      <div className="table table-middle table-scroll-position-left">
                                        <div className="table-content">
                                          <div className="table-body">
                                            <table className="">
                                              <thead className="table-thead">
                                                <tr>
                                                  <th className="">
                                                    <span>Coin</span>
                                                  </th>
                                                  
                                                  {this.renderSortHeaders()}

                                                  <th className="">
                                                    <span>Fast trading</span>
                                                  </th>
                                                  <th className="">
                                                    <span>Operation</span>
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody className="table-tbody"></tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
