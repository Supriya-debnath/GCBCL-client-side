import React from 'react';
import './Nusrat.css';
import { Col, Container, Row } from 'react-bootstrap';


import img22 from '../../../Images/nusrat mam pic.JPG'



const Nusrat= () => {
    return (
        <div>
            <>
            <Container>
                
                <Row>
            <Col xs={12} md={4}>
            <img style={{ height: "350px", padding:"20px" }} src={img22} alt="" />
            </Col>
            <Col xs={12} md={8} className='pt-4'>
                <div>
                    <h4><mark>Nusrat Zahan</mark></h4>
                </div>
                <h6 className='founder'>
                Nusrat Zahan is the founder chairman of Global Capacity Building & Consultancy Ltd. With her
                valued leadership, the company has incorporated as limited company on February 2017. She is an
                environmental expert. With her 17 years of experience, she conducted various environmental
                research and capacity building program within this sector.
                </h6>
            </Col>
        </Row>
            </Container>
        </>
        </div>
    );
};

export default Nusrat;