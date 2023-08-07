import React from 'react';
import'./Banner.css';
import 'animate.css';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        
        
                
                <div className="banner-img">
                <Row>
                <Col xs={12} md={8}>
        <div className="banner-text banner-text2">

            <h1 className='animate__backInLeft animate__animated animate__zoomIn'>A Website that  <br/> <spam className="bannerh1">leads to Customers</spam></h1>
            <p className='animate__animated animate__fadeInUp'>
                Our Web desgin company specializes and professional <br/> creation of unique sites that convert.
            </p>
            <button className="btn1 animate__animated animate__fadeInUp">Read More</button>
        </div>
        </Col>

       
        <Col xs={12} md={4}>

        <img className="img-fluid animate__backInRight" src="https://demo26.atiframe.com/wp-content/uploads/revslider/slider-940px-11/Frame1.png" alt="" />


                
        </Col>
    </Row>

    </div>
               


        </>
    );
};

export default Banner;