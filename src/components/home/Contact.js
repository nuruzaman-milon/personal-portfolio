import React from 'react';

const Contact = ({ theme }) => {
    return (
        <div className={`w-[88%] mx-auto mb-10 ${!theme ? 'text-white' : ''}`}>
            <h1 className='text-center text-4xl font-bold my-12'>Contact With Me</h1>
            <div className='flex flex-col-reverse md:flex-row md:gap-x-14 md:items-center'>
                <div className='w-full md:w-[50%]'>
                    <form className="form-control w-full">
                        <label className="label">
                            <span className={`label-text ${!theme ? 'text-white' : ''}`}>Your Name</span>
                        </label>
                        <input type="text" placeholder="Mr. Alex" className="input input-bordered w-full" />
                        <label className="label">
                            <span className={`label-text ${!theme ? 'text-white' : ''}`}>Your Email</span>
                        </label>
                        <input type="text" placeholder="alex@gmail.com" className="input input-bordered w-full" />
                        <label className="label">
                            <span className={`label-text ${!theme ? 'text-white' : ''}`}>Your Message</span>
                        </label>
                        <textarea rows="6" className="textarea textarea-bordered" placeholder="Hi! I want to hire you for my company for the front-end developer role"></textarea>
                        <button type='submit' className='btn btn-accent btn-outline mt-4 text-white'>Submit</button>
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
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>WhatsApp : </span>+880 1303746940</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Facebook : </span>https://www.facebook.com/njkmilon/</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>Linkedin : </span>https://www.linkedin.com/in/nuruzaman-milon/</p>
                    <p className='mb-2 text-lg'><span className='font-bold text-accent text-xl'>GitHub : </span>https://github.com/nuruzaman-milon</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;