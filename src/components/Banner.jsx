import React from 'react';

const Banner = () => {
    return (
        <div id='banner' className='min-h-[600px] flex justify-center items-center '>
            <div className='w-1/2'></div>
            <div className='pr-14'>
                <h1 className='text-white font-rancho text-4xl my-2'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-[hsl(0,0%,56%)] font-raleway text-base py-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='font-rancho text-2xl text-[#242222] bg-[#E3B577] my-2 py-2 px-4'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;