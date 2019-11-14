import React from 'react';
import logo from '../portfolioLetterT.png'
import './MainView.css'

const MainView = () => {
    return (
        <section id="main">
            <div className="heroSection">
                <h1>Tom Paavolainen</h1>
                <div className="animationContainer">
                    <img src={logo} alt="main logo"/>
                </div>
            </div>
        </section>
    );
}

export default MainView;