import React from 'react';
import Proyects from './Proyects';
import Skills from './Skills';
import Title from './Title';
import About from './About';
import ContactMe from './Contact-me';
import LoadScreen from './animation/LoadScreen'

const Home = () => {
    return(
        <div>
            <Title />
            <About />
            <Skills />
            <Proyects />
            <ContactMe />
        </div>
        
    )
}

export default Home;