import React from "react";
import classes from "./BuildControl.css"
const buildControl = (props) =>(
    <div className="BuildControl">
        <div className="Label">
            {props.label}
        </div>
        <button className="Less" onClick={props.removed} disabled={props.disabled}>less</button>
        <button className="More" onClick={props.added}>More</button>
    </div>
);

export default buildControl;