import React from 'react';

const Contact = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-center text-4xl font-bold my-12'>Contact With Me</h1>
            <div className='flex flex-col-reverse md:flex-row md:gap-x-14 md:items-center'>
                <div className='w-full md:w-[50%]'>
                    <form className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" placeholder="name@gmail.com" className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
                        <button type='submit' className='btn btn-accent btn-outline mt-4'>Submit</button>
                    </form>
                </div>
                <div className='w-full md:w-[50%] mb-6 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2 text-accent'>My Information</h3>
                    <hr />
                    <p className='my-2 text-lg'><span className='font-bold text-accent text-xl'>Name : </span>Md. Nuruzaman Milon</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Permanent Address : </span>Barisal, Bangladesh</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Current Address : </span>Dhaka, Bangladesh</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Primary Gmail : </span>nuruzaman.milon@gmail.com</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Secondary Gmail : </span>njmilon1@gmail.com</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Phone Number : </span>+880 1303746940, +880 1861017127</p>
                    <p className='text-lg'><span className='font-bold text-accent text-xl'>WhatsApp : </span>+880 1303746940</p>
                    {/* <p><span></span></p> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;