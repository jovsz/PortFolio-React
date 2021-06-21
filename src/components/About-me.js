import { info } from './Title';
import Skills from './Skills';

const Aboutme = () =>{
    return (
        <div className='About-container pt-5 d-flex flex-wrap col-12 justify-content-center align-items-center'>
            <div className='col-6 p-4 justify-content-center align-items-center'>
                <p>Hello Word!</p>
                <p>Welcome to my portfolio, I'm {info.fullname}, I'm a web developer</p>
                <p>I am a very enthusiastic person for technology, I am currently studying full stack web development, I like to work in a team and share ideas openly with everyone.</p>
                <p>At the moment the technologies that I have learned throughout the course have been HTML, CSS and Javascript. Mainly javascript since I have managed to complement it with the React and Node.js framework</p>
                <p>In React I have learned to use the main frameworks for building websites, for example, react router dom for addressing between components, axios and fetch to perform GET, POST, PUT, DELETE, COPY actions.</p>
                <p>At the moment I am learning Node.js to complement my knowledge both on the frontend and backend.</p>
            </div>
            <div className='img-about shadow bg-body rounded'>
            </div>
            <Skills />
        </div>
    )
}

export default Aboutme;