import React, { useState } from 'react';
import './NavBar.css';
import Navigation from './Navigation';

const NavBar = () => {

    const [state, setState] = useState(false);

    const openNav = () => {
        if (state === false) {
            setState(true)
        } else {
            setState(false);
        }
    };

    console.log("STATE", state);

    return (
        <div>
            <div onClick={openNav} className="burgerContainer">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </div>
            <div>
                { state && <Navigation />}
            </div>
        </div>
    )

}

export default NavBar;