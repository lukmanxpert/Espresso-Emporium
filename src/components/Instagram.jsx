import React from 'react';
import img1 from '../assets//cups/Rectangle 10.png'
import img2 from '../assets//cups/Rectangle 11.png'
import img3 from '../assets//cups/Rectangle 12.png'
import img4 from '../assets//cups/Rectangle 13.png'
import img5 from '../assets//cups/Rectangle 14.png'
import img6 from '../assets//cups/Rectangle 15.png'
import img7 from '../assets//cups/Rectangle 16.png'
import img8 from '../assets//cups/Rectangle 9.png'
const Instagram = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='font-raleway text-xs text-[#1B1A1A]'>Follow Us Now</p>
                <h1 className='font-rancho my-2 font-bold text-3xl'>Follow On Instagram</h1>
            </div>
            <div className='grid gap-4 my-6 px-4 mb-16 grid-cols-2 md:grid-cols-4'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>
        </div>
    );
};

export default Instagram;