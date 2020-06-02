import React from "react";

import burgerLogo from '../../assets/images/28.1 burger-logo.png';
import classes from './Logo.css'
const  logo = (props) =>(
    <div className="Logo" >
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
)
export default logo;