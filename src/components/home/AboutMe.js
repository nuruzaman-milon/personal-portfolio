import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-6'>About Me</h1>
            <div className='flex justify-center items-center'>
                <div className='w-[60%] text-xl font-semibold'>
                    <p className='leading-relaxed'>
                        I’m Md.Nuruzaman Milon. I’m from Dhaka, Bangladesh. I have completed Bsc. in computer science and engineering from <a className='text-accent font-bold hover:underline underline-offset-2' href="https://iubat.edu/" target="_blank">International University of Business Agriculture and Thechnology (IUBAT)</a> university. I have learned from last two years a few web-related technologies and programming languages like HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, Node.js, Expresss.js, Mongoose, MongoDB, and Firebase Authentication system. While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment.
                    </p>
                    {/* <p>
                        I have learned from last two years a few web-related technologies and programming languages like HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, Node.js, Expresss.js, Mongoose, MongoDB, and Firebase Authentication system.
                    </p> */}
                    {/* <p>
                        While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment.
                    </p> */}
                </div>

                <div className='w-[40%] p-6'>
                    <img src="assets/image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;