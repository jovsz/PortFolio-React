import React from 'react';

const Projects = () => {
    return (
        <div className='proyects padding-top col-12  d-flex flex-column align-items-center justify-content-center'>
            <div><p className='fs-3'>My Projects</p></div>
            <div className='d-flex col-12 flex-wrap'>
                <div className='col-4 p-5'>
                    <div className="card shadow bg-body tobig">                        
                    <div className='project1'></div>
                        <div className="card-body">
                            <h5 className="card-title">To Do List</h5>
                            <p className="card-text fw-light fs-5">This is a CRUD project built on the reaction frame. This project was created with the following libraries: hook from, axios, useEffect, useState.</p>
                            <a href="https://jvz-todo-list.netlify.app" target='_blank' className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project2'></div>
                        <div className="card-body">
                            <h5 className="card-title">Rick & Morty app</h5>
                            <p className="card-text fw-light fs-5">In this project an Api was used to obtain the characters according to their number of inhabitants, the libraries that were used for its operation were: Axios, useEffect, useState.</p>
                            <a href="https://jvs-rick-and-morty.netlify.app" target='_blank' className="btn btn-primary">link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project3'></div>
                        <div className="card-body">
                            <h5 className="card-title">Weather app</h5>
                            <p className="card-text"></p>
                            <a href="https://agitated-mirzakhani-55228f.netlify.app" target='_blank' className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex col-12'>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project4'></div>
                        <div className="card-body">
                            <h5 className="card-title">Quotes App</h5>
                            <p className="card-text"></p>
                            <a href="https://elastic-brown-e09436.netlify.app" target='_blank' className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project5'></div>
                        <div className="card-body">
                            <h5 className="card-title">Pokedex</h5>
                            <p className="card-text"></p>
                            <a href="https://poke-app-v2.netlify.app/" target='_blank' className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow-lg bg-body rounded tobig">
                        <div className='project6'></div>
                        <div className="card-body">
                            <h5 className="card-title">Open Trivia App</h5>
                            <p className="card-text"></p>
                            <a href="https://apiopen-trivia.netlify.app" target='_blank' className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
