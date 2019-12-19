import React from 'react';
import logo from '../portfolioLetterT.png'
import './MainView.css'
import LogoAnimation from '../components/LogoAnimation';

const MainView = () => {
    return (
      //  <section id="main">
            <div className="heroSection">
                <h1>TOM PAAVOLAINEN</h1>
                <div className="animationContainer">
                    <LogoAnimation/>
                </div>
            </div>
      //  </section>
    );
}

export default MainView;