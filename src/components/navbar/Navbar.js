import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    //hide navbar on scroll down
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navBar").style.top = "0";
        } else {
            document.getElementById("navBar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    let currentScrollPos1 = 0;

    window.addEventListener('scroll', function () {
        currentScrollPos1 = window.pageYOffset;
        // console.log(currentScrollPos1);
    });

    // You can use the currentScrollPos variable later in your code
    console.log(currentScrollPos1);


    return (
        // <div id='navBar' className='bg-gray-800 sticky top-0 z-50 py-2 transition-all duration-[400ms] ease-out'>
        <div id='navBar' className={`sticky top-0 z-50 py-2 transition-all duration-[400ms] ease-out ${currentScrollPos1 === 0 ? 'bg-gray-800' : ''}`}>
            <div className="navbar px-0 w-[88%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72">
                            <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/'>HOME</NavLink></li>

                            <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/about-me'>ABOUT ME</NavLink></li>

                            <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-skills'>SKILLS</NavLink></li>
                            <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-projects'>PROJECTS</NavLink></li>
                            <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-contacts'>CONTACT</NavLink></li>
                            <Link to='/view-resume'><button className='btn btn-accent btn-sm w-full'>VIEW RESUME</button></Link>
                        </ul>
                    </div>
                    <Link to='/'><img className='w-14 rounded-md' src="assets/logo8.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu-horizontal p-0 flex items-center text-white"> */}
                    <ul className={`menu-horizontal p-0 flex items-center ${!theme ? 'text-white' : ''}`}>
                        <li className='transition-all duration-[400ms] ease-in hover:scale-[1.2] hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/' style={({ isActive }) => ({
                            color: isActive ? '#198F85' : '',
                            // textDecoration: isActive ? 'underline' : '',
                            textUnderlineOffset: '3px'
                        })}>HOME</NavLink></li>

                        <li className='transition-all duration-[400ms] ease-in hover:scale-[1.2] hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/about-me' style={({ isActive }) => ({
                            color: isActive ? '#198F85' : '',
                            // textDecoration: isActive ? 'underline' : '',
                            textUnderlineOffset: '3px'
                        })}>ABOUT ME</NavLink></li>

                        <li className='transition-all duration-[400ms] ease-in hover:scale-[1.2] hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-skills' style={({ isActive }) => ({
                            color: isActive ? '#198F85' : '',
                            // textDecoration: isActive ? 'underline' : '',
                            textUnderlineOffset: '3px'
                        })}>SKILLS</NavLink></li>
                        <li className='transition-all duration-[400ms] ease-in hover:scale-[1.2] hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-projects' style={({ isActive }) => ({
                            color: isActive ? '#198F85' : '',
                            // textDecoration: isActive ? 'underline' : '',
                            textUnderlineOffset: '3px'
                        })}>PROJECTS</NavLink></li>
                        <li className='transition-all duration-[400ms] ease-in hover:scale-[1.2] hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-contacts' style={({ isActive }) => ({
                            color: isActive ? '#198F85' : '',
                            // textDecoration: isActive ? 'underline' : '',
                            textUnderlineOffset: '3px'
                        })}>CONTACT</NavLink></li>
                        <li className='transition-all duration-[400ms] ease-in hover:scale-[1.2] hover:text-accent font-semibold mr-6 cursor-pointer'><NavLink to='/my-blogs' style={({ isActive }) => ({
                            color: isActive ? '#198F85' : '',
                            // textDecoration: isActive ? 'underline' : '',
                            textUnderlineOffset: '3px'
                        })}>BLOGS</NavLink></li>
                        <Link to='/view-resume'><button className='btn btn-accent btn-outline btn-sm transition-all duration-[400ms] ease-in'>VIEW RESUME</button></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => setTheme(!theme)}>
                        {
                            !theme ?

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-7 h-7 hover:text-accent font-bold transition-all duration-[400ms] ease-in hover:scale-[1.3]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>

                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:text-accent font-bold transition-all duration-[400ms] ease-in hover:scale-[1.3]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                        }
                    </button>




                </div>
            </div>
        </div>
    );
};

export default Navbar;