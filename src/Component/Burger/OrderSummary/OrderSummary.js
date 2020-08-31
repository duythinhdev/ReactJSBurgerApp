import React, {Component} from "react";

import Aux from "../../../hoc/Aux1/Aux1";

import Button from  '../../UI/Button/Button';
import Button1 from "../../UI/Button/Button.css";

class  orderSummary extends Component{

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igkey=>{
            return    (
                <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}} >{igkey}</span>: {this.props.ingredients[igkey]}
                </li>
            );
        });
        // console.log("456789",ingredientSummary);
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2 ) }</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE </Button>
            </Aux>
        );
    }

}
export  default orderSummary;