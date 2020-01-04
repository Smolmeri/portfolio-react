import React from 'react';
import './ContactView.css';

const ContactView = () => {
    return (
        <div className="contactSection">
            <h1>Contact</h1>
            <div className="links">
                <a target="_blank" href="https://www.github.com/Smolmeri">
                    <h2>GITHUB</h2>
                </a>
                <h2>PAAVOLAINENT@GMAIL.COM</h2>
                <h2>+358 (0)40 4822490</h2>
                <a target="_blank" href="https://www.linkedin.com/in/tom-paavolainen-4a060894/">
                    <h2>LinkedIn</h2>
                </a>
                <a target="_blank" href='https://drive.google.com/file/d/14Sujj5m4swTsUNvtOYplw3KV-GUdCpbA/view?usp=sharing'>
                    <h2>CV</h2>
                </a>
            </div>
        </div>
    );
}

export default ContactView;
