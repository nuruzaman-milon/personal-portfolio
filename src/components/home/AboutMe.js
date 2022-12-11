import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-8'>About Me</h1>
            <div className='w-[70%] mx-auto'>
                <p>
                I’m Md.Nuruzaman Milon. I’m from Dhaka, Bangladesh. I have completed Bsc. in computer science and engineering from <a className='text-accent font-bold hover:underline underline-offset-2' href="https://iubat.edu/" target="_blank">International University of Business Agriculture and Thechnology (IUBAT)</a> , Uttara.
                </p>
                <p>
                I have learned from last two years a few web-related technologies and programming languages like HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, MaterialUI,Node Expresss.js , MongoDB, and firebase Authentication system.
                </p>
                <p>
                While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment. <a className='text-accent font-bold hover:underline underline-offset-2' href="https://github.com/nuruzaman-milon" target="_blank">My GitHub Link</a>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;