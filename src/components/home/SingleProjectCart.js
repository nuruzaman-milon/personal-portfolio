import React from 'react';

const SingleProjectCart = ({data}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className='h-52'><img className='h-full' src={data?.images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}</h2>
                    <p>{data?.introduction}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent btn-sm text-white">Live</button>
                        <button className="btn btn-accent btn-sm text-white">Code</button>
                        <button className="btn btn-accent btn-sm text-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectCart;