import React, { Component } from 'react';
import propTypes from 'prop-types';
import './bar.css';
import { Link } from "react-router-dom";

const tabs = [

]
export default class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            headroomState: "headroom--unfixed",
            selectedItem: 0
        }
    }

    render() {
        return(
            <div className="bar-wrapper">
                <div className="bar">
                    <div className="barStart">
                        Currency
                    </div>
                    <div className="barEnd">
                        English
                    </div>
                </div>
            </div>
        )
    }
};
