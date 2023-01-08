import React from 'react';

const SingleSkills = ({ value, name }) => {
    return (
        <div className='bg-[#1D293A] rounded-md relative'>
            <div className='flex justify-between px-7 mt-7 mb-8'>
                <h2 className='text-2xl font-bold text-white'>{name}</h2>
                <button className='btn btn-accent btn-sm'>{value}%</button>
            </div>
            <progress className="progress progress-accent w-full h-3 absolute bottom-0" value={value} max="100"></progress>
        </div>
    );
};

export default SingleSkills;