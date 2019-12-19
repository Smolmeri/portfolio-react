import React, { useState } from 'react';
import './ProjectsView.css';
import img from '../imgPlaceholder.png'
import meeKouluun from '../meeKouluun.png';
import wanderdicks from '../wanderdicks.png';
import code from '../code.png';
import ProjectModal from '../components/Projects/ProjectModal';

const ProjectsView = (props) => {

    const [state, setState] = useState(props);

    console.log(state);

    const handleClick = () => {
        setState(0)
    }

    


    return (
       // <section id="projects">
            <div className="projectsSection">
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
                        <img src={code} alt="project3" />
                        <p>Foo</p>
                    </div>
                    <div className="card" onClick={() => setState(4)}>
                        <img src={code} alt="project4" />
                        <p>Foo</p>
                    </div>
                    
                </div>
                    {state === 1 &&
                        <ProjectModal onClick={handleClick} imgPath={meeKouluun} heading={"Mee Kouluun"} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis cum nesciunt impedit fugit amet laudantium voluptatum in, eius ipsa id earum vitae ab blanditiis tenetur eligendi odio eos ad.'} url={'https://github.com/Smolmeri'} urlName={'GITHUB'} />
                    }
                    {state === 2 &&
                        <ProjectModal onClick={handleClick} imgPath={wanderdicks} heading={"Wanderdicks"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis cum nesciunt impedit fugit amet laudantium voluptatum in, eius ipsa id earum vitae ab blanditiis tenetur eligendi odio eos ad."} url={'https://github.com/Smolmeri'} urlName={'GITHUB'} />
                    }
                    {state === 3 &&
                        <ProjectModal onClick={handleClick} imgPath={code} heading={"LOREM"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis cum nesciunt impedit fugit amet laudantium voluptatum in, eius ipsa id earum vitae ab blanditiis tenetur eligendi odio eos ad."} url={'https://github.com/Smolmeri'} urlName={'GITHUB'} />
                    }
                    {state === 4 &&
                        <ProjectModal onClick={handleClick} imgPath={code} heading={"LOREM"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis cum nesciunt impedit fugit amet laudantium voluptatum in, eius ipsa id earum vitae ab blanditiis tenetur eligendi odio eos ad."} url={'https://github.com/Smolmeri'} urlName={'GITLAB'}/>
                    }
                
            </div>
     //   </section>
    );
}

export default ProjectsView;