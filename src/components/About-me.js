import { info } from './Title';
import Skills from './Skills';

const Aboutme = () =>{
    return (
        <div className='About-container pt-5 d-flex flex-wrap col-12 justify-content-center align-items-center'>
            <div className='col-12 border d-flex flex-row justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body about-me wallpaper1 about-container'>
                <div className='col-6 p-5 font'>
                    <p className='fs-2 fw-bolder'>Hello Word!</p>
                    <p className='fw-light text-md-start'>Welcome to my portfolio, I'm {info.fullname}, I'm a web developer</p>
                    <p className='fw-light text-md-start'>I am a very enthusiastic person for technology, I am currently studying full stack web development, I like to work in a team and share ideas openly with everyone.</p>
                    <p className='fw-light text-md-start'>At the moment the technologies that I have learned throughout the course have been HTML, CSS and Javascript. Mainly javascript since I have managed to complement it with the React and Node.js framework</p>
                    <p className='fw-light text-md-start'>In React I have learned to use the main frameworks for building websites, for example, react router dom for addressing between components, axios and fetch to perform GET, POST, PUT, DELETE, COPY actions.</p>
                    <p className='fw-light text-md-start'>At the moment I am learning Node.js to complement my knowledge both on the frontend and backend.</p>
                </div>
                <div className='img-about col-4 p-1 shadow bg-body rounded' />
            </div>
            <Skills />
        </div>
    )
}

export default Aboutme;