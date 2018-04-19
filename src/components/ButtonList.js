import React, { Component } from 'react';
import propTypes from 'prop-types';
import './buttonlist.css';
import {Button} from './Button.js'

export const ButtonList = (props) => {
    var quantity = new Array(props.quantity).fill(0);
    
    return(
        <div className="buttons-container">
            {
                quantity.map((value,index)=>(
                    <Button day={index + 1}/>
                ))
            }
        </div>
    )
};

ButtonList.propTypes = {
    quantity: propTypes.number.isRequired,
}