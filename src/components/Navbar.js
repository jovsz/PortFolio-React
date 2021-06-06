import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
    useLocation,
    useRouteMatch
} from 'react-router-dom';
import '../styles/navbar-style.css'
import Proyects from './Proyects';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import ContactMe from './Contact-me'
import LoadScreen from './animation/LoadScreen'


const Navbar = () => {

    function ScrollToTop(){
        const {pathname} = useLocation();

        useEffect(() => {
            window.scrollTo(0,0)
        },[pathname]);

        return null;
    }
    

    return (
        <Router>
            <div> 
            
            <nav className='navbar shadow-sm fixed-top d-flex color p-3'>
                <div className='d-inline fs-2 fw-bolder'></div>
                <ul className='list-group list-group-flush list-group-horizontal col-12 justify-content-end'> 
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Skills'>Skills</Link>
                    </li>
                    <li>
                        <Link to='/Proyects'>Proyects</Link>
                    </li>
                    <li>
                        <Link to='/Contactme'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/About'><LoadScreen /><ScrollToTop /><About /></Route>
                <Route path='/Skills'><ScrollToTop /><Skills /></Route>
                <Route path='/Proyects'><ScrollToTop /><Proyects /></Route>
                <Route path='/Contactme'><ScrollToTop /><ContactMe /></Route>
                <Route path='/'><ScrollToTop /><Home  /></Route>  
            </Switch>
            </div>       
        </Router>
    );
}

export default Navbar;