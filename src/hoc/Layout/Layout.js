import React, {Component} from "react";
import  { connect } from 'react-redux';
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
                <Toolbar
                    isAuth = {this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHander}/>
                <SideDrawer
                    isAuth = {this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHander} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !==null
    };
}


export default connect(mapStateToProps)  ( Layout );