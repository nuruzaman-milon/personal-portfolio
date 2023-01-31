import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleSkills from './SingleSkills';

const Skills = ({theme}) => {
    const [show, setShow] = useState('frontend');
    return (
        <div className={`w-[88%] mx-auto ${!theme ? 'text-white' : '' }`}>
            <h1 className='text-center text-4xl font-bold my-12'>SKILLS</h1>
            <div className='mb-5 grid grid-cols-2 md:flex w-full md:w-[46%] gap-4 md:gap-2'>
                <button onClick={() => setShow('frontend')} className={`${show==='frontend' ? '' : 'btn-outline'} btn btn-accent btn-sm`}>Front-End</button>
                <button onClick={() => setShow('backend')} className={`${show==='backend' ? '' : 'btn-outline'} btn btn-accent btn-sm`}>Back-End</button>
                <button onClick={() => setShow('programming')} className={`${show==='programming' ? '' : 'btn-outline'} btn btn-accent btn-sm`}>Programming</button>
                <button onClick={() => setShow('tools')} className={`${show==='tools' ? '' : 'btn-outline'} btn btn-accent btn-sm`}>Tools</button>
            </div>
            {
                show === 'frontend' &&
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <SingleSkills value='95' name='Html'></SingleSkills>
                    <SingleSkills value='92' name='CSS'></SingleSkills>
                    <SingleSkills value='90' name='Tailwind'></SingleSkills>
                    <SingleSkills value='94' name='Bootstrap'></SingleSkills>
                    <SingleSkills value='96' name='Daisy UI'></SingleSkills>
                    <SingleSkills value='80' name='FlowBite'></SingleSkills>
                    <SingleSkills value='85' name='React'></SingleSkills>
                </div>
            }

            {
                show === 'backend' &&
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <SingleSkills value='80' name='Node.js'></SingleSkills>
                    <SingleSkills value='85' name='Express.js'></SingleSkills>
                    <SingleSkills value='65' name='Laravel'></SingleSkills>
                    <SingleSkills value='90' name='Mongoose'></SingleSkills>
                    <SingleSkills value='85' name='MongoDB'></SingleSkills>
                    <SingleSkills value='75' name='MySQL'></SingleSkills>
                </div>
            }
            {
                show === 'programming' &&
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <SingleSkills value='85' name='JavaScript'></SingleSkills>
                    <SingleSkills value='70' name='C'></SingleSkills>
                    <SingleSkills value='75' name='PHP'></SingleSkills>
                </div>
            }
            {
                show === 'tools' &&
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <SingleSkills value='75' name='FireBase'></SingleSkills>
                    <SingleSkills value='70' name='Vercel'></SingleSkills>
                    <SingleSkills value='72' name='Netlify'></SingleSkills>
                    <SingleSkills value='80' name='JWT'></SingleSkills>
                    <SingleSkills value='75' name='Figma'></SingleSkills>
                    <SingleSkills value='85' name='Git'></SingleSkills>
                    <SingleSkills value='75' name='npm'></SingleSkills>
                    <SingleSkills value='80' name='Postman'></SingleSkills>
                    <SingleSkills value='75' name='Chrome Dev Tools'></SingleSkills>
                </div>
            }
        </div>
    );
};

export default Skills;