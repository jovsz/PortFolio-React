import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animation/AnimatedProgressProvider";
import ChangingProgressProvider from "./animation/ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./animation/RadialSeparators";


const Skills = () => {

    const percentage = 66;

    return(
        <div className='pt-5'>
            <div className='pt-5 p-5 col-12 d-flex justify-content-center flex-column'>
                <div className='d-flex p-2 justify-content-start col-12 '>
                    <div className='col-4 p-3 about-me rounded'>
                        <p className='fs-1'>About Me</p>
                        <p className='fw-light'>I'm Jovanny Fuentes, I'm a Web Programmer and Also System Admin Engineer, I decided to change the path of my career, by now I am a student of Academlo making a bootcamp of Web full stack.</p>
                        <p>Thoses are my skills as a Web Programmer</p>
                        <p className='fw-light'>I've knowledge on the next lenguage, Frameworks, Hypertext and Technology of WEB Applications</p>
                    </div>
                    <div className='col-8 d-flex p-2 flex-nowrap'>
                        <div className='d-flex'>
                            <p className='fs-6'><i class="fab fa-html5"></i>HTML</p>
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={70}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                                repeat
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none" })}
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>
                        </div>
                        <div className='d-flex'>
                            <p className='fs-6'><i class="fab fa-css3-alt"></i> CSS</p>
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={70}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                                repeat
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none" })}
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>
                        </div>
                        <div className='d-flex'>
                            <p className='fs-6'><i class="fab fa-js-square"></i> JavaScript</p>
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={60}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                                repeat
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none" })}
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>
                        </div>
                        <div className='d-flex'>
                            <p className='fs-6'><i class="fab fa-react"></i> React</p>
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={50}
                                duration={1.4}
                                easingFunction={easeQuadInOut}
                                repeat
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none" })}
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    );        
}

export default Skills;