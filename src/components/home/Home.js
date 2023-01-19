import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from './AboutMe';
import AllProjects from './AllProjects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <div className='flex items-center mt-14 text-center md:text-left'>
                <div className='w-[90%] mx-auto md:mx-0 md:w-[80%]'>
                    <p className='text-2xl text-accent font-semibold mb-1'>Hello, I am</p>
                    <h1 className='text-3xl md:text-6xl font-bold mb-7'>Md. Nuruzaman Milon</h1>
                    <h1 className='text-xl md:text-2xl font-bold mb-1 text-accent'>Full Stack Software Developer</h1>
                    <h1 className='text-xl md:text-2xl font-bold text-accent mb-7'><Typewriter
                        words={['Programmer', 'Web Developer', 'Software Engineer', 'MERN Stack Developer']}
                        loop={15}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /></h1>
                    <h3 className='flex mb-2 items-center justify-center md:justify-start'><img src="assets/house.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>Dhaka, Bangladesh</p></h3>
                    <h3 className='flex mb-7 items-center justify-center md:justify-start'><img src="assets/gmail.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>nuruzaman.milon@gmail.com</p></h3>
                    <div className='flex mb-7 items-center justify-center md:justify-start'>
                        <a href="https://www.facebook.com/njkmilon/" target='_blank'><img src="assets/facebook.png" className='w-8 mr-3' alt="" /></a>
                        <a href="https://www.linkedin.com/in/nuruzaman-milon/" target='_blank'><img src="assets/linkedin.png" className='w-8 mr-3' alt="" /></a>
                        <a href="https://github.com/nuruzaman-milon" target='_blank'><img src="assets/github.png" className='w-8' alt="" /></a>
                    </div>
                    <a href="resume.pdf" download="resume resume.pdf">
                        <button className='btn btn-accent'>DOWNLOAD RESUME</button>
                    </a>
                </div>
            </div>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <AllProjects></AllProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;