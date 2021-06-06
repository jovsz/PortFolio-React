import React, { useEffect } from 'react';
import '../styles/about-style.css'
import LoadScreen from './animation/LoadScreen'


const About = () => {

    return(
                
        <div className='about p-5 col-12 padding-top d-flex flex-column justify-content-center align-items-center'>
            <div><p className='fs-3 pt-3'>My Experties</p></div>
            <div className='pt-5 col-12 d-flex flex-row'>
                <div className='m-3 p-3 col-6 border-button rounded shadow-sm fadein'>
                    <div className='service1'></div>
                    <div>
                        <p>Strategy & Direction</p>
                        <p className='fs-6 fw-light '>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='m-3 col-6 p-3 border-button rounded shadow-sm fadein'>
                    <div className='service2'></div>
                    <div>
                        <p>Strategy & Direction</p>
                        <p className='fs-6 fw-light '>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className='pt-5 col-12 d-flex '>
                <div className='m-3 col-6 p-3 border-button rounded shadow-sm fadein'>
                <div className='service3'></div>
                    <div>
                        <p>Strategy & Direction</p>
                        <p className='fs-6 fw-light '>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='m-3 col-6 p-3 border-button rounded shadow-sm fadein'>
                    <div className='service4'></div>
                    <div>
                        <p>Strategy & Direction</p>
                        <p className='fs-6 fw-light '>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div> 
        </div>
    )
    
}

export default About;