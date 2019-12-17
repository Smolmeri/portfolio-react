import React, { useState } from 'react';
import './NavBar.css';
import Navigation from './Navigation';

import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

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

    const FadeInDiv = styled.div`
  animation: .5s ${keyframes `${fadeIn}`};
`;

    return (
        <div>
            <div onClick={openNav} className="burgerContainer">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </div>
            <div>
                <FadeInDiv>
                { state && <Navigation />}
                </FadeInDiv>
            </div>
        </div>
    )

}

export default NavBar;