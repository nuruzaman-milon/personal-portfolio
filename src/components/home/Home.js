import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AboutMe from './AboutMe';
import AllProjects from './AllProjects';

const Home = () => {
    return (
        <div>
            <div className='flex items-center my-14'>
                <div className='w-[80%]'>
                    <p className='text-2xl text-accent font-semibold mb-1'>Hello, I am</p>
                    <h1 className='text-6xl font-bold mb-7'>Md. Nuruzaman Milon</h1>
                    <h1 className='text-2xl font-bold mb-1 text-accent'>Full Stack Software Developer</h1>
                    <h1 className='text-2xl font-bold text-accent mb-7'><Typewriter
                        words={['Programmer', 'Web Developer', 'Software Engineer', 'MERN Stack Developer']}
                        loop={15}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /></h1>
                    {/* <p className='text-xl mb-2 text-slate-400'>Being interested to explore technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role.</p> */}
                    <h3 className='flex mb-2 items-center'><img src="assets/house.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>Dhaka, Bangladesh</p></h3>
                    <h3 className='flex mb-7 items-center'><img src="assets/gmail.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>nuruzaman.milon@gmail.com</p></h3>
                    <div className='flex mb-7'>
                        <a href="https://www.facebook.com/njkmilon/" target='_blank'><img src="assets/facebook.png" className='w-8 mr-3' alt="" /></a>
                        <a href="https://www.linkedin.com/in/nuruzaman-milon/" target='_blank'><img src="assets/linkedin.png" className='w-8 mr-3' alt="" /></a>
                        <a href="https://github.com/nuruzaman-milon" target='_blank'><img src="assets/github.png" className='w-8' alt="" /></a>
                    </div>
                    <button className='btn btn-accent'>DOWNLOAD RESUME</button>
                </div>
                {/* <div className='w-[40%] p-6'>
                    <img src="assets/image.png" alt="" />
                </div> */}
            </div>
            <AboutMe></AboutMe>
            <AllProjects></AllProjects>
        </div>
    );
};

export default Home;