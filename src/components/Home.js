import React from 'react';
import Navbar from './Navbar';
import {CircleProgress} from 'react-gradient-progress'


const Home = () => {
    return(
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

        <div className='proyects pt-5 col-12  d-flex flex-column align-items-center justify-content-center'>
            <div><p className='fs-3'>My Proyects</p></div>
            <div className='d-flex col-12'>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">                        <div className='proyect1'></div>
                        <div className="card-body">
                            <h5 className="card-title">To Do List</h5>
                            <p className="card-text"></p>
                            <a href="https://jvz-todo-list.netlify.app" target='_blank' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='proyect2'></div>
                        <div className="card-body">
                            <h5 className="card-title">Rick & Morty app</h5>
                            <p className="card-text"></p>
                            <a href="https://jvs-rick-and-morty.netlify.app" target='_blank' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='proyect3'></div>
                        <div className="card-body">
                            <h5 className="card-title">Weather app</h5>
                            <p className="card-text"></p>
                            <a href="https://agitated-mirzakhani-55228f.netlify.app" target='_blank' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex col-12'>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='proyect4'></div>
                        <div className="card-body">
                            <h5 className="card-title">Quotes App</h5>
                            <p className="card-text"></p>
                            <a href="https://elastic-brown-e09436.netlify.app" target='_blank' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='proyect5'></div>
                        <div className="card-body">
                            <h5 className="card-title">Portfolio v1</h5>
                            <p className="card-text"></p>
                            <a href="https://jovannyfuentes.netlify.app" target='_blank' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow-lg bg-body rounded tobig">
                        <div className='proyect6'></div>
                        <div className="card-body">
                            <h5 className="card-title">Open Trivia App</h5>
                            <p className="card-text"></p>
                            <a href="https://apiopen-trivia.netlify.app" target='_blank' className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                        <CircleProgress percentage={70} strokeWidth={10} fill={'rgb(0,0,0,0.2)'} />
                    </div>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-css3-alt"></i> CSS</p>
                    <CircleProgress percentage={60} strokeWidth={10} fill={'rgb(0,0,0,0.2)'} />
                </div>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-js-square"></i> JavaScript</p>
                    <CircleProgress percentage={50} strokeWidth={10} fill={'rgb(0,0,0,0.2)'}  />
                </div>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-react"></i> React</p>
                    <CircleProgress percentage={50} strokeWidth={10} fill={'rgb(0,0,0,0.2)'} />
                </div>        
            </div>
        </div>
        <div className='d-flex justify-content-end col-12'>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-bootstrap"></i> BootStrap</p>
                    <CircleProgress percentage={50} strokeWidth={10} fill={'rgb(0,0,0,0.2)'} />
                </div>
                <div className='d-flex'>
                    <p className='fs-6'><i class="fab fa-bootstrap"></i> C#</p>
                    <CircleProgress percentage={40} strokeWidth={10} fill={'rgb(0,0,0,0.2)'} />
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;