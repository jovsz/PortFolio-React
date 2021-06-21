import React from 'react';
import '../styles/title-style.css';

export const info =  {
    name: 'Jovanny',
    fullame: 'Jovanny Fuentes',
    email: 'Jovannyfuentesm@gmail.com',
    phone: '+52 664 678 2739'
}

const Title = () => {
    return (
        <div className='title col-12 padding-top wallpaper d-flex  flex-column justify-content-center align-items-center'>
            <div className='d-flex col-8 justify-content-between align-items-center'>
                <div className='profile col-4'></div>
                <div className='col-8'>
                    <h1 className='fs-1'>My name is {info.name}. Web Developer</h1>
                    <p className='fw-light'>Web Developer</p>
                </div>
            </div>
            <div className='mt-5 col-12 d-flex justify-content-evenly p-5'>
                <div>
                    <p className='fs-4'>Specialist Web Designer</p>
                </div>
                <div>
                    <p className='fs-4'>Phone:</p>
                    <p className='fs-5 fw-light'>{info.phone}</p>
                </div>
                <div>
                    <p className='fs-4'>Email:</p>
                    <p className='fs-5 fw-light'>{info.email}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Title;