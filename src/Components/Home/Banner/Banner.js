import React from 'react';
import'./Banner.css';
import 'animate.css';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <>

<div className="banner-img">
        <div className="banner-text">
        <p className='animate__animated animate__fadeInDown'>
                
            </p>
            {/* <div className='animate__animated animate__zoomIn'>
                <h1>Observing The Beauty </h1>
                <h1>Of Rural Bangal</h1>
            </div> */}



            <div className="wrapper">
                <div className="static-text">Building Future Bangladesh</div>
                <ul className="dynamic-text">
                    <li> <span>GCBCL Consultancy</span> </li>
                    <li> <span>GCBCL Consultancy</span> </li>
                    <li> <span>GCBCL Consultancy</span> </li>
                    <li> <span>GCBCL Consultancy</span> </li>
                </ul>
            </div>

            {/* <button className="btn animate__animated animate__fadeInUp">Learn More</button> */}

            {/* <div className='google-btn'>
                <button className="btn1 animate__animated animate__fadeInUp">Learn More</button>
            </div> */}

        </div>
    </div>   



















           
        {/* <div >
            <div className="banner-img">
                <Row>
                <Col xs={12} md={8} className='pt-5'>
            <div className="banner-text banner-text2">

            <h1 className='animate__backInLeft animate__animated animate__zoomIn'>A Website that  <br/> <spam className="bannerh1">leads to Customers</spam></h1>
            <p className='animate__animated animate__fadeInUp'>
                Our Web desgin company specializes and professional <br/> creation of unique sites that convert.
            </p>
            <button className="btn1 animate__animated animate__fadeInUp">Read More</button>
        </div>
        </Col>

       
        <Col xs={12} md={4} className='pt-5'>

        <img className="img-fluid animate__backInRight" src="https://demo26.atiframe.com/wp-content/uploads/revslider/slider-940px-11/Frame1.png" alt="" />


                
        </Col>
    </Row>
    </div>
    </div> */}
               


        </>
    );
};

export default Banner;