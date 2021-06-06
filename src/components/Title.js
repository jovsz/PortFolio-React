import React from 'react';
import '../styles/title-style.css';

const Title = () => {
    return (
        <div>
            <div className='title col-12 padding-top wallpaper d-flex  flex-column justify-content-center align-items-center'>
            <div className='d-flex col-7 justify-content-between'>
                <div className='profile'></div>
                <div>
                    <h1 className='fs-1'>My name is Jovanny. Web Developer</h1>
                    <p className='fw-light'>Master of none</p>
                </div>
            </div>
            <div className='mt-5 col-12 d-flex justify-content-evenly p-5'>
                <div>
                    <p className='fs-4'>Specialist Web Designer</p>
                </div>
                <div>
                    <p className='fs-4'>Phone:</p>
                    <p className='fs-5 fw-light'>+52 66412783</p>
                </div>
                <div>
                    <p className='fs-4'>Email:</p>
                    <p className='fs-5 fw-light'>Jovannyfuentesm@gmail.com</p>
                </div>
            </div>
        </div>

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
        </div>
    );
}

export default Title;