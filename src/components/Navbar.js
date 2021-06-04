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
                <ul className='list-group list-group-flush list-group-horizontal col-12 justify-content-end'> 
                    <li className=''>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=''>
                        <Link to='/About'>About</Link>
                    </li>
                    <li className=''>
                        <Link to='/Skills'>Skills</Link>
                    </li>
                    <li className=''>
                        <Link to='/Proyects'>Proyects</Link>
                    </li>
                    <li className=''>
                        <Link to='/Contact-me'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/About'><ScrollToTop /></Route>
                <Route path='/Skills'><ScrollToTop /></Route>
                <Route path='/Proyects'><ScrollToTop /><Proyects /></Route>
                <Route path='/Contac-me'><ScrollToTop /></Route>
                <Route path='/'><ScrollToTop /><Home  /></Route>  
            </Switch>
            </div>       
        </Router>
    );
}

export default Navbar;