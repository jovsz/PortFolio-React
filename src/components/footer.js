import React from 'react';
import { info } from './Title';
import '../styles/footer-style.css';
import ScrollArrow from './animation/ScrollArrow';

const Footer = () => {
    return (
        <div className='d-flex flex-column align-items-center p-5 justify-content-center'>
            <div className='fs-2 m-2 d-flex social-icons justify-content-between' >
                <a href='https://github.com/jovsz' target="_blank" rel="noopener noreferrer"><i class="fab fa-github tobig" ></i></a>
                <a href='https://www.linkedin.com/in/jovanny-fuentes-289650210/' target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin tobig"></i></a>
                <a href='https://github.com/jovsz' target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram tobig"></i></a>
            </div>
            <div className='d-flex flex-column align-items-center '>
                <p>{info.fullname}</p>
                <p>{info.email}</p>
                <p>Mexico, B.C</p>
            </div>
            <div className='pt-2'>
                <ScrollArrow />
            </div>
        </div>
    )
}

export default Footer;