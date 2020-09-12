import React from "react";

import Burger from  '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from  './CheckoutSummary.css';
import button from "../../UI/Button/Button.css";

const checkoutSummary = (props) =>{

    return (
        <div className="CheckoutSummary">
            <h1>We hope it tasttes well</h1>
            <div style={{width: '100%', height:'550px', margin: 'auto'}} >
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                 className={button.Button} btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                className={button.Button} btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}
export default checkoutSummary;