import React, { Component } from 'react';
import './main.css';
import {ButtonList} from '../components/ButtonList.js';

class HomePage extends Component {

    render() {
        return (
        <div className="main-container">
            <h1>Điểm danh</h1>
            <div className="header-container">
                <span className="banner">
                    Điểm danh hàng tuần
                </span>
            </div>
            <div className="body-container">
                <ButtonList quantity={7}/>
            </div>
        </div>
        );
    }
}

export default HomePage;
