import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaPlaneDeparture, FaStickyNote } from "react-icons/fa";


const ProjectDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className="carousel w-full rounded-lg mt-5 mb-9">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={data?.images[0]} className="w-full h-80" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-accent btn-sm">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-accent btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={data?.images[1]} className="w-full h-80" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-accent btn-sm">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-accent btn-sm">❯</a>
                    </div>
                </div>
            </div>

            <div className='flex gap-x-4'>
                <div className='w-[50%]'>
                    <h1 className='font-bold text-3xl mb-2'>{data?.title}</h1>
                    <h3 className='font-semibold text-xl mb-2'>{data?.introduction}</h3>
                    <div>

                        <button className='btn btn-accent btn-sm mr-2'><a href={data?.live} target="_blank">Live Website</a></button>
                        <button className='btn btn-accent btn-sm mr-2'><a href={data?.clientCode} target="_blank">Client-Site Code</a></button>
                        <button className='btn btn-accent btn-sm'><a href={data?.serverCode} target="_blank">Server-Site Code</a></button>
                    </div>
                </div>

                <div className='w-[50%]'>
                    <h1 className='flex items-center mb-2'><FaPlaneDeparture className='text-accent text-2xl mr-2'/> <p className='font-bold text-xl'>Technology</p></h1>
                    {
                        data?.technology.map((tech) => <div className="badge badge-accent badge-outline mr-2 mb-4">{tech}</div>)
                    }
                    <h1 className='flex items-center mb-2'><FaStickyNote className='text-accent text-2xl mr-2'/> <p className='font-bold text-xl'>Top Features</p></h1>
                    {
                         data?.features.map((feature) => 
                         <label className='flex mb-1'>
                            <input type="checkbox" checked className="checkbox checkbox-sm checkbox-accent mr-2 mt-[2px]" />
                            <p className="">{feature}</p>
                        </label>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;