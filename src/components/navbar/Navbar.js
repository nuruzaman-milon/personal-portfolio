import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <div className="navbar px-0 pt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>HOME</a></li>
                            <li><a>ABOUT ME</a></li>
                            <li><a>MY PROJECTS</a></li>
                            <li><a>CONTACT</a></li>
                        </ul>
                    </div>
                    {/* <Link to='/' className="btn btn-ghost normal-case text-xl hover:btn-accent"><p className='hover:text-white'>Md. Nuruzaman Milonnn</p></Link> */}
                    <Link to='/'><img className='w-14 rounded-md' src="assets/logo8.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal p-0 flex items-center">
                        <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><a>HOME</a></li>
                        <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><a>ABOUT ME</a></li>
                        <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><a>SKILLS</a></li>
                        <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><a>MY PROJECTS</a></li>
                        <li className='transition-all duration-500 hover:text-accent font-semibold mr-6 cursor-pointer'><a>CONTACT</a></li>
                        <li><a><button className='btn btn-accent btn-outline btn-sm'>VIEW RESUME</button></a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => setTheme(!theme)}>
                        {
                            !theme ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:text-accent hover:w-8 h-8 font-bold transition-all duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:text-accent hover:w-8 h-8 font-bold transition-all duration-500">
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