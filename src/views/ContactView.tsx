import React from 'react';
import './ContactView.css';

const ContactView = () => {
    return (
        <section id="contact">
        <div className="contactSection">
            <h1>Contact</h1>
            <div className="links">
                <a href="www.github.com/Smolmeri">
                    <h2>GITHUB</h2>
                </a>
                <a href="paavolainent@gmail.com">
                    <h2>EMAIL</h2>
                </a>
                <a href="#">
                    <h2>+358 (0)40 4822490</h2>
                </a>
                <a href="#">
                    <h2>LinkedIn</h2>
                </a>
                <a href="#">
                    <h2>CV</h2>
                </a>
            </div>
        </div>
    </section>
    );
}

export default ContactView;
