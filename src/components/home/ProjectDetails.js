import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>product details here</h1>
            <h1>title is: {data.title}</h1>
        </div>
    );
};

export default ProjectDetails;