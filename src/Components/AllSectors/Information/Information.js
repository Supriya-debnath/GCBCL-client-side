import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './Information.css';

const Information= () => {
    return (
        <div>
            <>
            <Container>
            <Row>
                <Col>  <img style={{height: 460}}  src={'https://dailyasianage.com/library/1575310310_3.jpg'} className="img-fluid w-100" alt=""/> </Col>
            </Row>

            <Row>
                <Col className='history'>  
                <h4 className='urban'><mark>INFORMATION TECHNOLOGY</mark></h4>
                Our technical team is made up of experts from the government and well-known names in
                international IT, making for a perfect balance of youth and experience. The pool offers
                strategic supervision and consulting for the IT industry and has a solid grasp of
                government procedures in addition to exposure to best practices and processes from the
                commercial sector.
                <br />
                <br />
                <p>Our focus areas in IT sector include:</p>
                <ul>
                    <li>Smart City Solutions</li>
                    <li>Application development & implementation (web & mobile)</li>
                    <li>Dashboard & MIS solutions</li>
                    <li>Project monitoring system</li>
                    <li>ERP solutions</li>
                </ul>
                </Col>
            </Row>
            </Container>
        </>
        </div>
    );
};

export default Information;