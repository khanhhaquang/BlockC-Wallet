import React from "react";

const SidebarItem = (props) =>{
    return(
      <li role={props.role} className="sidebarItem">
        <a>
          <i className={"material-icons " + props.icon} style={{fontSize: "22px"}}></i>
        </a>
      </li>
    )
}

export default SidebarItem;
