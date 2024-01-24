import React from 'react';

const HouseList = () => {
    return (
        <div className='container mx-auto p-24'>
            <div className="card  md:card-side bg-base-100 shadow-2xl  max-w-full backdrop-blur-xl ">
                <div className='max-w-full  md:w-2/6 bg-[#3f37c9] text-white p-4 rounded-l-xl relative x '>
                    <p>COURSE</p>
                    <h1 className=' text-2xl md:text-5xl py-5   font-bold'>name</h1>
                    <p className='flex items-center gap-1 lg:absolute bottom-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        House </p>
                </div>
                <div className="card-body w-full md:w-4/6 bg-white text-[#3f37c9] rounded-r-xl">
                    <div>
                        <h2 className="card-title">Name</h2>
                        <p className='pb-2'>description</p>
                        <div className="badge badge-accent "> <span className='pr-2  '>Rent </span> </div>

                    </div>

                    <div className="card-actions justify-end ">

                        <button className="btn btn-ghost " >Apply now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseList;