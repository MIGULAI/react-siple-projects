import React from "react";
import classes from "./Header.module.css"

const Header = ({header}) =>{
    return ( 
        <div className={classes.header}>
            <div className={classes.icon}><ion-icon name="menu-outline"></ion-icon></div> 
            <span>{header}</span>
        </div>
    )
}

export default Header