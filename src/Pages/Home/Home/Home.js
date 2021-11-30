import React from 'react';
import Header from '../../Share/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;