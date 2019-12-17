import React from 'react';
import './ProjectModal.css'

const ProjectModal = (props) => {

   const handleChange = () => {
       props.onClick(0)
   }

    return (
        <div className='modal'>
            <div className='closeBtn' onClick={handleChange}>
                <span className="btn1"></span>
                <span className="btn2"></span>
            </div>
            <p>Hello World</p>

        </div>

    )
}

export default ProjectModal;