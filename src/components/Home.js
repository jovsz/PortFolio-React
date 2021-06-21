import React from 'react';
import Proyects from './Projects';
import Title from './Title';
import ContactMe from './Contact-me';
import Footer from './Footer';
import Aboutme from './About-me';


const Home = () => {
    return(
        <div>
            <Title />
            <Aboutme />
            <Proyects />
            <ContactMe />
            <Footer />
        </div>
        
    )
}

export default Home;