import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const OurPopularProducts = () => {
    return (
        <div className='font-rancho'>
            <div className='flex justify-center items-center flex-col my-10'>
                <p className='font-raleway text-xl text-[#1B1A1A]'>--- Sip & Savor ---</p>
                <h1 className='text-[#331A15] text-3xl font-bold'>Our Popular Products</h1>
                <Link to='/add-coffee' className='flex items-center gap-1 text-white bg-[#E3B577] border-4 py-2 px-4 rounded-lg my-2 border-[#331A15]'>Add Coffee <GiCoffeeCup className='text-[#331A15]' /></Link>
            </div>
        </div>
    );
};

export default OurPopularProducts;