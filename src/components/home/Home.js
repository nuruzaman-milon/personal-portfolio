import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from './AboutMe';
import AllProjects from './AllProjects';

const Home = () => {
    return (
        <div>
            <div className='flex items-center mt-8'>
                <div className='w-[60%]'>
                    <p className='text-2xl text-accent font-bold mb-2'>Hello, I Am</p>
                    <h1 className='text-4xl font-bold mb-2'>Md. Nuruzaman Milon</h1>
                    <h1 className='text-3xl font-bold text-accent mb-2'><Typewriter
                        words={['Front-End Developer', 'Full-Stack Developer', 'MERN-Stack Developer']}
                        loop={15}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /></h1>
                    <p className='text-xl mb-2 text-slate-400'>Being interested to explore technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role.</p>
                    <h3 className='flex mb-2 items-center'><img src="assets/gmail.png" className='w-6' alt="" /> <p className='ml-2 text-xl'>nuruzaman.milon@gmail.com</p></h3>
                    <h3 className='flex mb-2 items-center'><img src="assets/house.png" className='w-6' alt="" /> <p className='ml-2 text-xl'>Dhaka, Bangladesh</p></h3>
                    <div className='flex mb-2'>
                        <img src="assets/facebook.png" className='w-9 mr-2' alt="" />
                        <img src="assets/linkedin.png" className='w-9 mr-2' alt="" />
                        <img src="assets/github.png" className='w-9' alt="" />
                    </div>
                </div>
                <div className='w-[40%] p-6'>
                    <img src="assets/image.png" alt="" />
                </div>
            </div>
            <AboutMe></AboutMe>
            <AllProjects></AllProjects>
        </div>
    );
};

export default Home;