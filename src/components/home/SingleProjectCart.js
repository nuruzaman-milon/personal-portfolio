import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';

const SingleProjectCart = ({ data }) => {
    const { theme } = useContext(ThemeContext);

    return (
            <div className={`card rounded-xl shadow-2xl h-[400px] ${!theme ? 'bg-[#1D293A]' : ''}`}>
                <figure className='h-48 rounded-md mx-auto w-[90%] mt-4'><img className='h-full grayscale rounded-md hover:grayscale-0 transition-all duration-700 ease-in hover:scale-[1.2]' src={data?.images[0]} alt="Shoes" /></figure>
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
    );
};

export default SingleProjectCart;