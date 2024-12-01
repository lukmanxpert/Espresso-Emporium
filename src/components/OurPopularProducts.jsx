import React, { useEffect, useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import CoffeeCard from './CoffeeCard ';


const OurPopularProducts = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(coffees => setCoffees(coffees))
            .catch(err => console.log("ERROR", err))
    }, [])
    return (
        <div className='font-rancho'>
            <div className='flex justify-center items-center flex-col my-10'>
                <p className='font-raleway text-xl text-[#1B1A1A]'>--- Sip & Savor ---</p>
                <h1 className='text-[#331A15] text-3xl font-bold'>Our Popular Products</h1>
                <Link to='/add-coffee' className='flex items-center gap-1 text-white bg-[#E3B577] border-4 py-2 px-4 rounded-lg my-2 border-[#331A15]'>Add Coffee <GiCoffeeCup className='text-[#331A15]' /></Link>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mb-10'>
                {coffees ? coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>) : <div>No Coffee's Currently Available</div>}
            </div>
        </div>
    );
};

export default OurPopularProducts;