import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Blogs from '../Blogs/Blogs';
import OurServices from '../OurServices/OurServices';
import WorkExperience from '../WorkExperience/WorkExperience';
import Organization from '../../Organization/Organization';


const Home = () => {
    return (
        <div>
            
        <Banner></Banner>
        <Organization></Organization>
        <Subscribe></Subscribe>
        <WorkExperience></WorkExperience>

        </div>
    );
};

export default Home;