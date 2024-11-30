import React from 'react';
import Banner from '../components/Banner';
import SubBanner from '../components/SubBanner';
import OurPopularProducts from '../components/OurPopularProducts';
import Instagram from '../components/Instagram';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <OurPopularProducts></OurPopularProducts>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;