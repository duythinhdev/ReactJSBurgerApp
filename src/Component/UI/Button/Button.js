import React from "react";
import classes from './Button.css';

const  button = (props) =>(

    <button className="Button" className={props.btnType}
            onClick={props.clicked}>{props.children}</button>
);

export default button;