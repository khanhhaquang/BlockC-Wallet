import React, { Component } from 'react';
import propTypes from 'prop-types';
import './button.css';

export const Button = (props) => {
    return(
        <div className="rollup-button">
            <div className="button-header">
                {"Ngày " + props.day}
            </div>
            <div className="button-body">
                <div className="gift-image"/>
            </div>
        </div>
    )
};

Button.propTypes = {
    day: propTypes.number.isRequired,
}

