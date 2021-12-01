import React from 'react';
import Header from '../../Share/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Myprojects from '../Myprojects/Myprojects';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Myprojects></Myprojects>
        </div>
    );
};

export default Home;