import React from 'react';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animation/AnimatedProgressProvider";



const Skills = () => {
    return(
        <div className='pt-5 d-flex justify-content-center align-center'>
            <div className='pt-5 p-5 col-12 d-flex justify-content-center flex-column'>
                <div className='d-flex p-2 justify-content-start col-12 '>
                    <div className='col-12 d-flex p-2 flex-nowrap'>
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