import React from 'react';

const Proyects = () => {
    return (
        <div className='proyects padding-top col-12  d-flex flex-column align-items-center justify-content-center'>
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
    )
}

export default Proyects
