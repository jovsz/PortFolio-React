import React from 'react';

const Projects = () => {
    return (
        <div className='proyects padding-top col-12  d-flex flex-column align-items-center justify-content-center shadow pt-5 mb-5 bg-body rounded'>
            <div><p className='fs-2 fw-bolder pt-2'>My Projects</p></div>
            <div className='d-flex col-12 flex-wrap'>
                <div className='col-4 p-5'>
                    <div className="card shadow bg-body tobig">                        
                    <div className='project1'></div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">To Do List</h5>
                            <p className="card-text fw-light fs-6">This is a CRUD project built on the reaction frame. This project was created with the following libraries: hook from, axios, useEffect, useState.</p>
                            <a href="https://jvz-todo-list.netlify.app" target='_blank' rel="noreferrer" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project2'></div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Rick & Morty app</h5>
                            <p className="card-text fw-light fs-6">In this project an Api was used to obtain the characters according to their number of inhabitants.</p>
                            <a href="https://jvs-rick-and-morty.netlify.app" target='_blank' rel="noreferrer"  className="btn btn-primary">link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project3'></div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Weather app</h5>
                            <p className="card-text fw-light fs-6">The project Weather app were built using geolocation library to get the geolocation of each user and then it could display the current wheather from that location</p>
                            <a href="https://agitated-mirzakhani-55228f.netlify.app" target='_blank' rel="noreferrer"  className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex col-12'>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project4'></div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Quotes App</h5>
                            <p className="card-text fw-light fs-6">This is a simple app, it principal function is display a random Quotes becoming from an API</p>
                            <a href="https://elastic-brown-e09436.netlify.app" target='_blank' rel="noreferrer"  className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow bg-body rounded tobig">
                        <div className='project5'></div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Pokedex</h5>
                            <p className="card-text fw-light fs-6">The pokedex App is to obtain the information of each pokemon and then display it depending on the query of user selected</p>
                            <a href="https://poke-app-v2.netlify.app/" target='_blank' rel="noreferrer"  className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 '>
                    <div className="card shadow-lg bg-body rounded tobig">
                        <div className='project6'></div>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Open Trivia App</h5>
                            <p className="card-text fw-light fs-6">This is an App built on vanilla JavaScript, it principal funcion its get the Ask, Category and answers from the API and then compare both answers and get the finnal score</p>
                            <a href="https://apiopen-trivia.netlify.app" target='_blank' rel="noreferrer"  className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
