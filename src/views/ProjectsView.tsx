import React, { useState } from 'react';
import './ProjectsView.css';
import img from '../imgPlaceholder.png'
import meeKouluun from '../meeKouluun.png';
import wanderdicks from '../wanderdicks.png';
import wastic from '../wastic.jpeg';
import code from '../code.png';
import portfolio from '../portfolio.png';
import ProjectModal from '../components/Projects/ProjectModal';

const ProjectsView = (props) => {

    const [state, setState] = useState(props);

    console.log(state);

    const handleClick = () => {
        setState(0)
    }

    const closeModal = () => {
        if (state != 0) {
            setState(0)
        }
    }
    

    


    return (
       // <section id="projects">
            <div className="projectsSection" onClick={closeModal}>
                <h1>Projects</h1>
                <div className="cardsSection">
                    <div className="card" onClick={() => setState(1)}>
                        <img src={meeKouluun} alt="project1" />
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(2)}>
                        <img src={wanderdicks} alt="project2" />
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(3)}>
                        <img src={wastic} alt="project3" />
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(4)}>
                        <img src={portfolio} alt="project4" />
                        <p>Foo</p>
                    </div>
                    
                </div>
                    {state === 1 &&
                        <ProjectModal onClick={handleClick} imgPath={meeKouluun} heading={"Mee Kouluun"} desc={'An iOS app for users that are looking to re-educate themselfs. The app suggests possible study paths based on users questionaire asnwers. Agile working methods with daily scrums and weekly sprint reviews were used.'} url={'https://gitlab.com/oskarits/mee-kouluun/'} urlName={'GitLab'} />
                    }
                    {state === 2 &&
                        <ProjectModal onClick={handleClick} imgPath={wanderdicks} heading={"Wanderdicks"} desc={"Webiste project created for Wanderdicks Ry, an outdoor and adventure group. Static page was converted to a dynamic one using PHP and Wordpress as a Content Management System."} url={'https://github.com/Smolmeri/wanderdicks-dynamic'} urlName={'GitHub'} />
                    }
                    {state === 3 &&
                        <ProjectModal onClick={handleClick} imgPath={wastic} heading={"Wastic"} desc={"A peer-to-peer application that allows users to upload images of food products in their kitchens to reduce food waste. Other users can find products and reserve them."} url={'https://github.com/Smolmeri/Wastic'} urlName={'GitHub'} />
                    }
                    {state === 4 &&
                        <ProjectModal onClick={handleClick} imgPath={portfolio} heading={"Portfolio"} desc={"This website was created to show case my projects. The site is created with React and is an ongoing project."} url={'https://github.com/Smolmeri/portfolio-react'} urlName={'GitHub'}/>
                    }
            </div>
    );
}

export default ProjectsView;