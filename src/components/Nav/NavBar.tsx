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

        const bar1 = document.querySelector('.bar1');

            if (bar1 != null) {
                bar1.classList.toggle('change');
            } else {
                console.error("nav error");
            }

            const bar2 = document.querySelector('.bar2');

            if (bar2 != null) {
                bar2.classList.toggle('change');
            } else {
                console.error("nav error");
            }

            const bar3 = document.querySelector('.bar3');
            if (bar3 != null) {
                bar3.classList.toggle('change');
            } else {
                console.error("nav error");
            }

            const burger = document.querySelector('.bar4');

            if (burger != null) {
                burger.classList.toggle('change');
            } else {
                console.error("nav error");
            }

    };

    console.log("STATE", state);

    const FadeInDiv = styled.div`
  animation: .5s ${keyframes`${fadeIn}`};
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
                    {state && <Navigation />}
                </FadeInDiv>
            </div>
        </div>
    )

}

export default NavBar;