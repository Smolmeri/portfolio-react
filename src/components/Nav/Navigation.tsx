import React from 'react';
import './Navigation.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Navigation = () => {

    return (
        <div className='navContainer'>
            <Router>
            <ul className='navList'>
                <a href="/"><li>Home</li></a>
                <Link to="/about"><li>About</li></Link>>
                <a href="/"><li>Projects</li></a>
                <a href="/"><li>Contacts</li></a>
                <a href="www.github.com/Smolmeri"><li>Github</li></a>
            </ul>
            </Router>
        </div>
    )
}

export default Navigation;