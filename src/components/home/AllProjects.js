import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleProjectCart from './SingleProjectCart';


const AllProjects = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['courses'],
        queryFn: () =>
            fetch('http://localhost:5000/projects').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-16'>
            {
                data.map((data)=><SingleProjectCart key={data.id} data={data}></SingleProjectCart>)
            }
        </div>
    );
};

export default AllProjects;