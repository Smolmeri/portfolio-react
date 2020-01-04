import React from 'react';
import './MainView.css'
import LogoAnimation from '../components/Logo/LogoAnimation';

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