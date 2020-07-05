import React from "react";
import BuiildControl from'./BuildControl/BuildControl';
import classes from "./BuildControls.css"
const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];
const buildControls = (props) =>(
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2 )}</strong></p>
        {controls.map(ctrl=>(
            <BuiildControl key={ctrl.label} label={ctrl.label} type={ctrl.type}
            added={()=>props.ingredientAdded(ctrl.type)}
                           removed={()=>props.ingredientRemoved(ctrl.type)}
                           disabled = {props.disabled[ctrl.type]} />
        ))}
        <button className="OrderButton" disabled={
            !props.purchasable
        }
        onClick={props.ordered}
        >{props.isAuth ? 'ORDER NOW': 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;