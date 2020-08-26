import React  from "react" ;
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrrop from '../../UI/Backdrop/Backdrop'
import Aux from "../../../hoc/Aux1/Aux1";
const sidedrawer = (props) =>{

    let attachedClasses = [classes.SideDrawer,classes.Close];
    console.log(attachedClasses)
    if(props.open)
    {
        attachedClasses = [ classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
        <Backdrrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join('')} onClick={props.closed}>
        <div className="SideDrawer ">
            <div className="Logo">
                <Logo />
            </div>
            <nav>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </div>
        </div>
        </Aux>
    );
};
export default sidedrawer;