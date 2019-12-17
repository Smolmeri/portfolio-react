import React, { useState } from 'react';
import './ProjectsView.css';
import img from '../imgPlaceholder.png'
import ProjectModal from '../components/Projects/ProjectModal';

const ProjectsView = (props) => {

    const [state, setState] = useState(props);

    console.log(state);

    const handleClick = () => {
        setState(0)
    }


    return (
        <section id="projects">
            <div className="projectsSection">
                <h1>Projects</h1>
                <div className="cardsSection">
                    <div className="card" onClick={() => setState(1)}>
                        <img src={img} alt="project1"/>
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(2)}>
                        <img src={img} alt="project2"/>
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(3)}>
                        <img src={img} alt="project3"/>
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(4)}>
                        <img src={img} alt="project4"/>
                        <p>Foo</p>
                    </div>
                </div>
                {state === 1 &&
                <ProjectModal onClick={handleClick} />
                }
                {state === 2 &&
                <ProjectModal onClick={handleClick}  />
                }
                {state === 3 &&
                <ProjectModal onClick={handleClick}  />
                }
                {state === 4 &&
                <ProjectModal onClick={handleClick}  />
                }
            </div>
        </section>
    );
}

export default ProjectsView;