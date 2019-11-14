import React from 'react';
import './ProjectsView.css';
import img from '../imgPlaceholder.png'

const ProjectsView = () => {
    return (
        <section id="projects">
            <div className="projectsSection">
                <h1>Projects</h1>
                <div className="cardsSection">
                    <div className="card">
                        <img src={img} alt="project1"/>
                        <p>Foo</p>
                    </div>
                    <div className="card">
                        <img src={img} alt="project2"/>
                        <p>Foo</p>
                    </div>
                    <div className="card">
                        <img src={img} alt="project3"/>
                        <p>Foo</p>
                    </div>
                    <div className="card">
                        <img src={img} alt="project4"/>
                        <p>Foo</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsView;