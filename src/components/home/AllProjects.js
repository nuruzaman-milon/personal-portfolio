import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleProjectCart from './SingleProjectCart';


const AllProjects = ({theme}) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['courses'],
        queryFn: () =>
            fetch('https://protfolio-server-alpha.vercel.app/projects').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className={`${!theme ? 'text-white' : '' }`}>
            <h1 className='text-center text-4xl font-bold mt-14 mb-12'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16'>
                {
                    data.map((data) => <SingleProjectCart key={data.id} data={data}></SingleProjectCart>)
                }
            </div>
        </div>
    );
};

export default AllProjects;