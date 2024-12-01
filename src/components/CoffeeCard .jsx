import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, price, photo } = coffee;
    return (
        <div className="flex items-center bg-gray-100 rounded-lg shadow-md p-6">

            <div className="flex-shrink-0">
                <img
                    src={photo}
                    alt="Coffee Cup"
                    className="h-40 w-32 rounded-lg object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="flex-grow ml-6">
                <h2 className="text-lg font-semibold text-gray-800">
                    Name: <span className="font-normal">{name}</span>
                </h2>
                <p className="mt-2 text-gray-600">
                    Chef: <span className="font-medium">{chef}</span>
                </p>
                <p className="mt-2 text-gray-600">
                    Price: <span className="font-medium">{price} tk</span>
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center space-y-4 ml-6">
                <button className="text-gray-700 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                    {/* <FaEye /> */}
                </button>
                <button className="text-gray-700 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                    {/* <FaPen /> */}
                </button>
                <button className="text-red-700 bg-red-200 p-2 rounded-full hover:bg-red-300">
                    {/* <FaTrash /> */}
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;