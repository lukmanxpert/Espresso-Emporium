import React from 'react';
import img1 from '../assets/icons/1.png'
import img2 from '../assets/icons/2.png'
import img3 from '../assets/icons/3.png'
import img4 from '../assets/icons/4.png'
const SubBanner = () => {
    return (
        <div id='subBanner' className='grid  gap-6 md:grid-cols-2 lg:grid-cols-4 py-10 bg-[#ECEAE3] px-32 font-rancho'>
            <div>
                <img src={img1} alt="" />
                <h1>Awesome Aroma</h1>
                <p className='font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <h1>High Quality</h1>
                <p className='font-raleway'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={img3} alt="" />
                <h1>Pure Grades</h1>
                <p className='font-raleway'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={img4} alt="" />
                <h1>Proper Roasting</h1>
                <p className='font-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default SubBanner;