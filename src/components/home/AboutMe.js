import React from 'react';

const AboutMe = ({theme}) => {
    return (
        <div className={`w-[88%] mx-auto mt-14 ${!theme ? 'text-white' : '' }`}>
            <h1 className='text-center text-4xl font-bold mb-6'>About Me</h1>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className='w-full md:w-[60%] text-xl font-semibold'>
                    <p className='leading-relaxed pr-4 text-justify'>
                    Hello! I’m Md. Nuruzaman Milon. I have completed my B.Sc. in computer science and engineering from the <a className='text-accent font-bold hover:underline underline-offset-2' href="https://iubat.edu/" target="_blank">International University of Business Agriculture and Technology (IUBAT)</a>. My core skill is based on JavaScript and I love to do most things using <span className='text-accent font-bold'>JavaScript, React & Next JS</span>. I have learned web-related technologies like HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, Node.js, Expresss.js, Mongoose, MongoDB, and Firebase Authentication systems in the last two years. While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment. I am available for any kind of job opportunity that suits my interests.
                    </p>
                </div>

                <div className='w-full md:w-[40%] p-6 grayscale hover:grayscale-0 transition-all duration-500 ease-in hover:scale-[1.06]'>
                    <img src="assets/image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;