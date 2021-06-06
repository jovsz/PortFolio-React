import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";


const Skills = () => {

    const percentage = 66;

    return(
        <div className='pt-5 p-5 col-12 d-flex justify-content-center flex-column'>
            <div className='d-flex p-2 justify-content-start col-12 '>
                <div className='col-4 p-3 about-me'>
                    <p className='fs-1'>About Me</p>
                    <p className='fw-light'>I'm Jovanny Fuentes, I'm a Web Programmer and Also System Admin Engineer, I decided to change the path of my career, by now I am a student of Academlo making a bootcamp of Web full stack.</p>
                    <p>Thoses are my skills as a Web Programmer</p>
                    <p className='fw-light'>I've knowledge on the next lenguage, Frameworks, Hypertext and Technology of WEB Applications</p>
                </div>
                <div className='col-4 d-flex p-2 flex-nowrap'>
                    <div className='d-flex'>
                        <p className='fs-6'><i class="fab fa-html5"></i>HTML</p>
                        <CircularProgressbar text={`${percentage}%`} />
                    </div>
                    <div className='d-flex'>
                        <p className='fs-6'><i class="fab fa-css3-alt"></i> CSS</p>
                        <CircularProgressbar text={`${percentage}%`} />
                    </div>
                    <div className='d-flex'>
                        <p className='fs-6'><i class="fab fa-js-square"></i> JavaScript</p>
                        <CircularProgressbar text={`${percentage}%`}  />
                    </div>
                    <div className='d-flex'>
                        <p className='fs-6'><i class="fab fa-react"></i> React</p>
                        <CircularProgressbar text={`${percentage}%`} />
                    </div>        
                </div>
            </div>
            <div className='d-flex justify-content-end col-12'>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-bootstrap"></i> BootStrap</p>
                    <CircularProgressbar text={`${percentage}%`} />
                </div>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-bootstrap"></i> C#</p>
                    <CircularProgressbar text={`${percentage}%`} />
                </div>
            </div>
        </div>
    );        
}

export default Skills;