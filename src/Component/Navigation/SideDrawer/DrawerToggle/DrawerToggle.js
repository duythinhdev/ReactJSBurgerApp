import React from "react";

import classes from './DrawerToggle.css'

const drawgerToggle = (props) =>(

    <div className={classes.DrawerToggle}  onClick={props.clicked} >
        <div></div>
        <div></div>
        <div></div>

    </div>
)
export default drawgerToggle;