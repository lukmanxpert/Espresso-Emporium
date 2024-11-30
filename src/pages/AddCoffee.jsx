import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    return (
        <div className='w-10/12 my-10 mx-auto font-rancho'>
            <Link className='flex items-center gap-1 my-6 text-[#374151] text-2xl font-bold' to='/'><IoArrowBackOutline /> Back To Home</Link>
            <div className='bg-[#F4F3F0] p-10'>
                <div className='text-center'>
                    <h1 className='text-[#374151] text-3xl font-bold py-4'>Add New Coffee</h1>
                    <p className='px-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 my-4'>
                            <label>
                                <p className='py-2 font-raleway'>Name</p>
                                <input
                                    type="text"
                                    placeholder="Enter Coffee Name"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Chef</p>
                                <input
                                    type="text"
                                    placeholder="Enter Coffee Chef"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Supplier</p>
                                <input
                                    type="text"
                                    placeholder="Enter Coffee Supplier"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Taste</p>
                                <input
                                    type="text"
                                    placeholder="Enter Coffee Taste"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Category</p>
                                <input
                                    type="text"
                                    placeholder="Enter Coffee Category"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Details</p>
                                <input
                                    type="text"
                                    placeholder="Enter Coffee Details"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Price</p>
                                <input
                                    type="number"
                                    placeholder="Enter Coffee Price"
                                    className="input input-bordered input-md w-full" />
                            </label>
                            <label>
                                <p className='py-2 font-raleway'>Photo</p>
                                <input
                                    type="text"
                                    placeholder="Enter Photo URL"
                                    className="input input-bordered input-md w-full" />
                            </label>
                        </div>
                        <button type="submit" className='border-2 rounded-md font-bold text-xl border-[#331A15] bg-[#D2B48C] w-full p-4'>Add Coffee</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;