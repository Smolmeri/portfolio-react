import React from 'react';
import './Navigation.css';

const Navigation = () => {

    return (
        <div className='navContainer'>
            <ul className='navList'>
                <a href="/"><li>Home</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Projects</li></a>
                <a href="/"><li>Contacts</li></a>
                <a href="www.github.com/Smolmeri"><li>Github</li></a>
            </ul>
        </div>
    )
}

export default Navigation;