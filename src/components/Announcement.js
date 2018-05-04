import React, { Component } from 'react';
import propTypes from 'prop-types';
import './announcement.css';
import { Link } from "react-router-dom";

const announcement = [
    "fasfasdhfkasdfk",
    "shfkadflsjhasfsdf",
    "ádfhadklshfdjsh"
]
export default class Announcement extends Component{
    constructor(props){
        super(props);
        this.state = {
            headroomState: "headroom--unfixed",
            selectedItem: 0
        }
    }

    renderAnnouncementTags  = () =>
        announcement.map((value,index)=>{
            return(
                <div key={index} className="item col-4" style={{paddingLeft: "12px",paddingRight: "12px"}}>
                    <div className="item-wrapper">
                        <div className="itemStart">
                            {value}
                        </div>
                        <div className="itemEnd">
                            (05-03)
                        </div>
                    </div>
                </div>
            )
        })

    render() {
        return(
            <div className="announcement-wrapper">
                <div className="announcement">
                    <div className="row-flex" style={{marginLeft: "-12px", marginRight: "-12px"}}>
                        {this.renderAnnouncementTags()}
                    </div>
                    <div className="triangleButton">
                    </div>
                </div>
            </div>
        )
    }
};
