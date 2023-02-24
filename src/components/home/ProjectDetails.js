import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaPlaneDeparture, FaStickyNote } from "react-icons/fa";


const ProjectDetails = () => {
    const data = useLoaderData();
    return (
        <div className='w-[88%] mx-auto'>
            <div className="w-full rounded-lg mt-5 mb-9">
                <img alt='' src={data?.images[0]} className="w-full h-[390px] rounded-xl" />
            </div>

            <div className='flex gap-x-6'>
                <div className='w-[45%]'>
                    <h1 className='font-bold text-3xl mb-2'>{data?.title}</h1>
                    <h3 className='font-semibold text-md mb-2'>{data?.introduction}</h3>
                    <div>

                        <button className='btn btn-accent btn-sm mr-2'><a href={data?.live} target="_blank">Live Website</a></button>
                        <button className='btn btn-accent btn-sm mr-2'><a href={data?.clientCode} target="_blank">Client-Site Code</a></button>
                        <button className='btn btn-accent btn-sm'><a href={data?.serverCode} target="_blank">Server-Site Code</a></button>
                    </div>
                </div>

                <div className='w-[55%]'>
                    <h1 className='flex items-center mb-2'><FaPlaneDeparture className='text-accent text-2xl mr-2' /> <p className='font-bold text-xl'>Technology</p></h1>
                    {
                        data?.technology.map((tech) => <div className="badge badge-accent badge-outline mr-2 mb-4">{tech}</div>)
                    }
                    <h1 className='flex items-center mb-2 mt-4'><FaStickyNote className='text-accent text-2xl mr-2' /> <p className='font-bold text-xl'>Top Features</p></h1>
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