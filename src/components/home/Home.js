// import { ThemeContext } from '@react-pdf-viewer/core';
import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ThemeContext } from '../contexts/ThemeProvider';
import AboutMe from './AboutMe';
import AllProjects from './AllProjects';
import Contact from './Contact';
import Skills from './Skills';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div className='flex items-center mt-10 text-center md:text-left w-[88%] mx-auto'>
                <div className='flex flex-col items-center mx-8'>
                    <div className={`flex flex-col items-center py-2 px-4 rounded-md ${!theme ? 'bg-gray-800 text-white' : 'bg-accent' }`} >
                        <p className='text-xl font-bold'>F</p>
                        <p className='text-xl font-bold'>0</p>
                        <p className='text-xl font-bold'>L</p>
                        <p className='text-xl font-bold'>L</p>
                        <p className='text-xl font-bold'>O</p>
                        <p className='text-md font-bold'>W</p>
                        <p className='text-xl font-bold my-2'></p>
                        <p className='text-md font-bold'>M</p>
                        <p className='text-xl font-bold'>E</p>
                    </div>
                    <p className='text-xl font-bold mb-4 mt-2 '>|</p>


                    <a href="https://www.facebook.com/njkmilon/" target='_blank'><img src="assets/facebook.png" className='w-8 mb-3 transition-all duration-300 ease-in hover:scale-[1.3]' alt="" /></a>
                    <a href="https://www.linkedin.com/in/nuruzaman-milon/" target='_blank'><img src="assets/linkedin.png" className='w-8 mb-3 transition-all duration-300 ease-in hover:scale-[1.3]' alt="" /></a>
                    <a href="https://github.com/nuruzaman-milon" target='_blank'><img src="assets/github.png" className='w-8 transition-all duration-300 ease-in hover:scale-[1.3]' alt="" /></a>

                </div>
                <div className='w-[90%] mx-auto md:mx-0 md:w-[80%]'>
                    <p className='text-2xl text-accent font-semibold mb-1'>Hello, I am</p>
                    {/* <h1 className='text-3xl md:text-7xl font-bold mb-7'>Md. Nuruzaman Milon</h1> */}
                    <h1 className={`text-3xl md:text-7xl font-bold mb-7 ${!theme ? 'text-white' : '' }`}>Md. Nuruzaman Milon</h1>
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
                    {/* <h3 className='flex mb-2 items-center justify-center md:justify-start'><img src="assets/house.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>Dhaka, Bangladesh</p></h3> */}
                    <h3 className={`flex mb-2 items-center justify-center md:justify-start ${!theme ? 'text-white' : '' }`}><img src="assets/house.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>Dhaka, Bangladesh</p></h3>

                    <h3 className={`flex mb-7 items-center justify-center md:justify-start ${!theme ? 'text-white' : '' }`}><img src="assets/gmail.png" className='w-6' alt="" /> <p className='ml-[6px] text-xl font-semibold'>nuruzaman.milon@gmail.com</p></h3>

                    <a href="resume.pdf" download="resume resume.pdf">
                        <button className='btn btn-accent text-white'>DOWNLOAD RESUME</button>
                    </a>

                    {/* Messenger Chat plugin Code  */}
                    <div id="fb-root"></div>

                    {/* <!-- Your Chat plugin code --> */}
                    <div id="fb-customer-chat" class="fb-customerchat">
                    </div>

                    {/* messenger chat code  */}
                    <script>
                        var chatbox = document.getElementById('fb-customer-chat');
                        chatbox.setAttribute("page_id", "115797558072759");
                        chatbox.setAttribute("attribution", "biz_inbox");
                    </script>

                </div>
            </div>
            <AboutMe theme={theme}></AboutMe>
            <Skills theme={theme}></Skills>
            <AllProjects theme={theme}></AllProjects>
            <Contact theme={theme}></Contact>

        </div>
        

    );
};

export default Home;