import React, { Component } from 'react';
import './markets.css';
import SidebarItem from '../components/stateless/SidebarItem.js'
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import ReactTooltip from 'react-tooltip'

// const SliderWithTooltip = createSliderWithTooltip(Slider);
// const Handle = Slider.Handle;
// const handle = (props) => {
//   const { value, dragging, index, ...restProps } = props;
//   return (
//     <Tooltip
//       prefixCls="rc-slider-tooltip"
//       overlay={value}
//       visible={dragging}
//       placement="top"
//       align={{
//         offset: [0, -5],
//       }}
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </Tooltip>
//   );
// };

const coinTabs = [
  {
    keyCoin: "BTC",
    subCoins:[
      {
        name: "KCS"
      },
      {
        name: "KCS"
      },
      {
        name: "KCS"
      },
      {
        name: "KCS"
      },
      {
        name: "KCS"
      },
      {
        name: "KCS"
      },
      {
        name: "KCS"
      },
      {
        name: "KCS"
      }
    ]
  },
  {
    keyCoin: "ETH",
    subCoins:[
      {
        name: "KCS"
      }
    ]
  },
  {
    keyCoin: "KCS",
    subCoins:[
      {
        name: "KCS"
      }
    ]
  }
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
        sliderValue: 0,
        scrollTop: 0,
        coinTab:0,
        affixStyle: {},
        divStyle: {},
        class: ""
      }
    }
    onSliderChange = (value) => {
      
    }
    
    renderCoinList = () => coinTabs[0].subCoins.map((value,index)=>{
      return(
          <tr className="table-row  table-row-level-0">
            <td className="">
              <span className="table-row-indent indent-level-0" style={{paddingLeft: "0px"}}></span>
              <div className="tdHeadBox">
                <i className="dealTop"></i>
                <div className="cursor" style={{lineHeight: "22px", display: "inline-block"}}>
                  <img src="https://assets.kucoin.com/www/coin/pc/KCS.png" style={{width: "22px", height: "22px", float: "left", marginRight: "4px"}}/>
                  <span>KCS/BTC</span>
                  {'\u00A0'}
                  <span className="color-gray"></span>
                </div>
              </div>
            </td>
            <td className="">
              <div>
                <span className="changingWrapper">
                  <span >
                    <span>
                      <span>0.00737511</span>
                      <span style={{opacity: "0.4"}}></span>
                    </span>
                  </span>
                  <span className="changingIcon left"></span>
                </span>
                <span className="ml-4 color-primary font-size-12">
                  <span>$</span>
                  <span>3.57</span>
                </span>
              </div>
            </td>
            <td className="">
              <span className="color-high">
              {"+" + "0.95" + "%"}
              </span>
            </td>
            <td className="">
              <div>
                <span>
                  <span>
                    <span>2,952.3576872</span>
                    <span style={{opacity: "0.4"}}>0</span>
                  </span>
                </span>
              </div>
            </td>
            <td className="">
              <div>
                <span>
                  <span>
                    <span>2,952.3576872</span>
                    <span style={{opacity: "0.4"}}>0</span>
                  </span>
                </span>
              </div>
            </td>
            <td className="">
              <div>
                <span>
                  <span data-tip="" id="buy-span" className="color-buy cursor" style={{marginRight: "8px"}}>Buy</span>
                  <ReactTooltip className="quickTrade" delayHide={1000} effect='solid' place="bottom" type="none">
                    {this.renderQuickExchange(index,"Buy")}
                  </ReactTooltip>
                </span>
                <span>
                  <span id="sell-span" className="color-sell cursor">Sell</span>
                </span>
              </div>
            </td>
            <td className="">
              <div className="operateIcons">
                <i className="material-icons iconEqualizer"></i>
                <span><i className="far fa-star"></i></span>
              </div>
            </td>
          </tr>
      )
    })

    renderQuickExchange = (index,type) => {
      return(
        <div className="popover overlay popover-placement-bottom">
          <div className="popover-content">
            <div className="popover-arrow">
            </div>
            <div className="popover-inner">
              <div>
                <div className="popover-inner-content">
                  <form className="form form-horizontal trade">
                    <div style={{position: "relative",marginBottom: "14px"}}>
                      <div className="itemTip">
                        <div className="color-buy font-size-14">{"Buy"}{'\u00A0'}{"KCS"}</div>
                        <div>Ask<span>{'\u00A0'}<a class="bestPrice">0.08</a>{'\u00A0'}</span></div>
                      </div>
                      <div className="flex-row form-item">
                        <div className="form-item-control-wrapper">
                          <div className="form-item-control">
                            <div className="inputNumberWithLabel">
                              <div className="input-number inputNumber">
                                <div className="input-number-handler-wrap"></div>
                                <div className="input-number-input-wrap" role="spinbutton" aria-valuemin="1e-8" aria-valuemax="9007199254740991">
                                  <input className="input-number-input"  step="0.00000001" min="1e-8" max="9007199254740991" placeholder="Price" autocomplete="off" id="price"/>
                                </div>
                              </div>
                              <div className="inputNumberLabel">BTC</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{position: "relative"}}>
                      <div className="flex-row form-item">
                        <div className="form-item-control-wrapper">
                          <div className="form-item-control">
                            <div className="inputNumberWithLabel">
                              <div className="input-number inputNumber">
                                <div className="input-number-handler-wrap"></div>
                                <div className="input-number-input-wrap" role="spinbutton" aria-valuemin="1e-7" aria-valuemax="9007199254740991">
                                  <input className="input-number-input"  step="0.00000001" min="1e-7" max="9007199254740991" placeholder="Amount" autocomplete="off" id="amount"/>
                                </div>
                              </div>
                              <div className="inputNumberLabel">KCS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="itemTip">
                        <span className="color-primary">
                          {"Max"}{'\u00A0'}
                          <a className="bestPrice">--</a>
                        </span>
                        <a className="color-primary">{"Deposit" + " " + "BTC"}</a>
                      </div>
                    </div>
                    <div className="mb-6" style={{position: "relative"}}>
                      <span className="color-gray">{"Ratio" + ": "}</span>
                      
                      <div className="sliderWrapper">
                        <Slider
                          min={0}
                          max={100}
                          step={25}
                          onChange={this.onSliderChange}
                        >
                        </Slider>
                      </div>
                    </div>
                    <div className="mb-6">
                      <span className="color-gray">{"Volume"}</span>
                      {'\u00A0'}
                      {'\u00A0'}
                      <span>{0}</span>
                      {'\u00A0'}
                      <span>{"BTC"}</span>
                    </div>
                    <div className="flex-row form-item" style={{marginBottom: "0px"}}>
                      <div className="form-item-control-wrapper">
                        <div className="form-item-control">
                          <button type="button" className="btn buyBtn btn-lg"><span>Buy</span></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
      

    renderSortHeaders = () => tableSortHeaders.map((value,index)=>{
      return(
        <th className="">
          <span>{value}
            <div className="table-column-sorter">
              <span className="table-column-sorter-up off" title="↑"><i class="fas fa-caret-up sorticon iconCaretUp"></i></span>
              <span className="table-column-sorter-down off" title="↓"><i class="fas fa-caret-down sorticon iconCaretDown"></i></span>
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
        <div onClick = {() => this.handleClickTab(index)} key={index} role="tab" aria-disabled="false" aria-selected={this.state.coinTab === index ? "true" : "false"} className={this.state.coinTab === index ?"tabs-tab-active tabs-tab" : "tabs-tab"}>{value.keyCoin}</div>
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
                                <div className="table-wrapper table_1">
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
                                              <tbody className="table-tbody">
                                                {this.renderCoinList()}
                                              </tbody>
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
