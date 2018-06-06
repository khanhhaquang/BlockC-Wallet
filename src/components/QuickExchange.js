import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import {buy} from '../actions/Buy.js'
import {sell} from '../actions/Sell.js'
import {connect} from 'react-redux';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Tooltip from 'rc-tooltip';


class QuickExchange extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            outputValue: "",
        }
    }
    handleSell = () =>{
        if(this.state.outputValue > 0)
            this.props.dispatch(sell("BTC",this.state.outputValue));
    }

    handleBuy = () =>{
        if(this.state.inputValue > 0)
            this.props.dispatch(buy("BTC",this.state.inputValue));
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
            outputValue: e.target.value*10000
        })
    }

    handleOutputChange = (e) => {
        this.setState({
            outputValue: e.target.value,
            inputValue: e.target.value / 10000
        })
    }

    render() {

        const {type,index} = this.props

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
                                <div className= { type === "Buy" ? "color-buy":"color-sell" + " font-size-14"} >{type}{'\u00A0'}{"KCS"}</div>
                                <div>Ask<span>{'\u00A0'}<a className="bestPrice">0.08</a>{'\u00A0'}</span></div>
                            </div>
                            <div className="flex-row form-item">
                                <div className="form-item-control-wrapper">
                                <div className="form-item-control">
                                    <div className="inputNumberWithLabel">
                                    <div className="input-number inputNumber">
                                        <div className="input-number-handler-wrap"></div>
                                        <div className="input-number-input-wrap" role="spinbutton" aria-valuemin="1e-8" aria-valuemax="9007199254740991">
                                        <input className="input-number-input" type="number" value={this.state.inputValue} onChange={this.handleInputChange}  step="0.00000001" min="0" max="9007199254740991" placeholder="Price" autoComplete="off" id="price" ref/>
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
                                        <input className="input-number-input" type="number" value={this.state.outputValue} onChange={this.handleOutputChange}  step="0.00000001" min="0" max="9007199254740991" placeholder="Amount" autoComplete="off" id="amount"/>
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
                                    {type === "Buy" ? <button type="button" className="btn buyBtn btn-lg" onClick={this.handleBuy}><span>Buy</span></button> : <button type="button" className="btn sellBtn btn-lg" onClick={this.handleSell}><span>Sell</span></button>}
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
};

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(QuickExchange);
