import React from 'react';
import { Link } from 'react-router-dom';

const SingleProjectCart = ({ data }) => {
    return (
        <div>
            <div className="card shadow-2xl">
                <figure className='h-44 mt-4'><img className='h-full w-[90%] rounded-xl grayscale hover:grayscale-0 transition-all duration-700 ease-in' src={data?.images[0]} alt="Shoes" /></figure>
                <div className="card-body py-4">
                    <h2 className="card-title">{data?.title}</h2>
                    <p>{data?.introduction}</p>
                </div>
                <div className="card-actions flex justify-center mb-4">
                    <button className="btn btn-accent btn-sm text-white btn-outline"><a href={data?.live} target='_blank'>Live</a></button>
                    <button className="btn btn-accent btn-sm text-white btn-outline"><a href={data?.clientCode} target='_blank'>Client</a></button>
                    <button className="btn btn-accent btn-sm text-white btn-outline"><a href={data?.serverCode} target='_blank'>Server</a></button>
                    <Link to={`/projects/${data.id}`}><button className="btn btn-accent btn-sm text-white btn-outline">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectCart;