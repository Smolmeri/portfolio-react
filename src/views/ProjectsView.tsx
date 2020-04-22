import React, { useState } from 'react';
import './ProjectsView.css';
import meeKouluun from '../meeKouluun.png';
import wanderdicks from '../wanderdicks.png';
import wastic from '../wastic.jpeg';
import zalando from '../zlaando.jpg';
import ProjectModal from '../components/Projects/ProjectModal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';



const ProjectsView = (props) => {



    const [state, setState] = useState(0);

    console.log(state);

    const stopScroll = () => {
        const root: HTMLElement = document.getElementById('root')!;
        disableBodyScroll(root);
        root.style.overflow = 'hidden';
    }

    const handleClick = () => {
        setState(0)
    }

    const closeModal = () => {
        if (state !== 0) {
            const root: HTMLElement = document.getElementById('root')!;
            enableBodyScroll(root);

            setState(0)
        }
    }

    return (
        <div id="project" className="projectsSection" onClick={closeModal}>
            <h1>Projects</h1>
            <div className="cardsSection">
                <div className="card" onClick={() => { setState(1); stopScroll(); }}>
                    <img src={meeKouluun} alt="project1" />
                    <p>Foo</p>
                </div>
                <div className="card" onClick={() => { setState(2); stopScroll(); }}>
                    <img src={wanderdicks} alt="project2" />
                    <p>Foo</p>
                </div>
                <div className="card" onClick={() => { setState(3); stopScroll(); }}>
                    <img src={wastic} alt="project3" />
                    <p>Foo</p>
                </div>
                <div className="card" onClick={() => { setState(4); stopScroll(); }}>
                    <img src={zalando} alt="project4" />
                    <p>Foo</p>
                </div>

            </div>
            {state === 1 &&
                <ProjectModal onClick={handleClick} imgPath={meeKouluun} heading={"Mee Kouluun"} desc={'An iOS app for users that are looking to re-educate themselves. The app suggests possible study paths based on users questionaire answers. Agile working methods with daily scrums and weekly sprint reviews were used.'} url={'https://gitlab.com/oskarits/mee-kouluun/'} urlName={'GitLab'} />
            }
            {state === 2 &&
                <ProjectModal onClick={handleClick} imgPath={wanderdicks} heading={"Wanderdicks"} desc={"Website project created for Wanderdicks Ry, an outdoor and adventure group. Static page was converted to a dynamic one using PHP and Wordpress as a Content Management System."} url={'https://github.com/Smolmeri/wanderdicks-dynamic'} urlName={'GitHub'} />
            }
            {state === 3 &&
                <ProjectModal onClick={handleClick} imgPath={wastic} heading={"Wastic"} desc={"A peer-to-peer application that allows users to upload images of food products in their kitchens to reduce food waste. Other users can find products and reserve them."} url={'https://github.com/Smolmeri/Wastic'} urlName={'GitHub'} />
            }
            {state === 4 &&
                <ProjectModal onClick={handleClick} imgPath={zalando} heading={"Zalando"} desc={"A in-store companion application for Zalando's offline stores called Zircle. The application was created using SwiftUI and there was weekly collaboration with the client."} url={'https://github.com/oskarits/zeitgeist'} urlName={'GitHub'} />
            }

            <div className="flickr">

                <p>Now and then I enjoy some photography 📷. Checkout my <a className="flickrLink" href="https://www.flickr.com/photos/186507729@N08/">Flickr account</a> for some snaps.</p>

                <div className="flickr-img-container">
                    <a data-flickr-embed="true" data-footer="true" href="https://www.flickr.com/photos/186507729@N08/49805984708/in/dateposted-public/" title="Log in."><img src="https://live.staticflickr.com/65535/49805984708_f364a0db8a_h.jpg" width="375" height="300" alt="Log in." /></a>
                    <a data-flickr-embed="true" data-footer="true" href="https://www.flickr.com/photos/186507729@N08/49486803032/in/dateposted-public/" title="Row row row"><img src="https://live.staticflickr.com/65535/49486803032_b170d2382d_k.jpg" width="375" height="300" alt="Row row row" /></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;