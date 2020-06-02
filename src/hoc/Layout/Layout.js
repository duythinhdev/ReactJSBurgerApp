import React, {Component} from "react";

import Aux from "../Aux1/Aux1";
import classes from './Layout.css';
import Toolbar from '../../Component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Component/Navigation/SideDrawer/SideDrawer';



class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHander = () =>{
            this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHander = () =>{
        this.setState( (prevState) =>{

            return {showSideDrawer: ! prevState.showSideDrawer };
        })
    }


    render() {
        return (
            <Aux>
                <Toolbar  drawerToggleClicked={this.sideDrawerToggleHander}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHander} />
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;