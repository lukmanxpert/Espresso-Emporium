import React from 'react';
import logo from '../assets/more/logo1.png'
const Header = () => {
    return (
        <div id='header' className='h-16 flex justify-center items-center gap-4'>
            <img className='h-14' src={logo} alt="" srcset="" />
            <h1 className='font-rancho text-white text-3xl text-center py-2'>Espresso Emporium</h1>
        </div>
    );
};

export default Header;