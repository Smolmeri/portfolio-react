import React from 'react';
import './ProjectModal.css'

import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";


const ProjectModal = (props) => {

    const handleChange = () => {
        props.onClick(0)
    }

    const FadeInDiv = styled.div`
    animation: .5s ${keyframes`${fadeIn}`};
  `;

    return (

        <FadeInDiv className='modal'>
            <div className='closeBtn' onClick={handleChange}>
                <div className="btn1"></div>
                <div className="btn2"></div>
            </div>
            <img className='modalImg' src={props.imgPath} alt="project1-large" />
            <div className='modalInfo'>
                <h1>{props.heading}</h1>
                <p>{props.desc}</p>
                <a target='_blank' href={props.url}>{props.urlName}</a>
            </div>
        </FadeInDiv>

    )
}

export default ProjectModal;