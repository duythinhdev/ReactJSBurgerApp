import React from "react";

import Aux from "../../hoc/Aux1";
import style from './layout.css';

const Layout = (props) =>(
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default Layout