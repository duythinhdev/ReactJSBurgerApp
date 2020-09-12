import React from "react";

import  classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { object } from "prop-types";

const burger = (props) =>{
    // console.log(props )
    let  tranfromedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
        return [...Array( props.ingredients[igkey] )].map(( _, i)=> {
            return <BurgerIngredient key={igkey + i } type={igkey} />;
        }); // []
    }).reduce((arr,el)=>{
        return arr.concat(el)
        }, []);
    if(tranfromedIngredients.length === 0) {
        tranfromedIngredients = <p>please start adding ingreddients!</p>;
    }
    // console.log("123123213",tranfromedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranfromedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;