import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './Tourism.css';

const Tourism =() => {
    return (
        <div>
            <>
        <Container>
        <Row>
                <Col>  <img style={{height: 460}}  src={'https://uzbangla.com/wp-content/uploads/2019/05/2-3.jpg'} className="img-fluid w-100" alt=""/> </Col>
            </Row>

            <Row>
                <Col className='history'>  
                <h4 className='urban'><mark>Tourism Sector</mark></h4>
                GCBCL is expert with a proven track record in tourism sector in areas ranging from policy
                to program management. <br />
                In tourism sector GCBCL covers the entire spectrum – from developing regulatory
                frameworks <br /> for the Government to project/programme management.
                <br />
                <br />
                <ul>
                    <li>Regulatory Framework – Policies, Acts, Strategies, Road Maps &amp; Tourism Master
                    Plans</li>
                    <li>Destinations, Circuits and Visitor Experience Enhancement</li>
                    <li>Business Plans</li>
                    <li>Transaction Advisory</li>
                    <li>Programme Management</li>
                </ul>
                <br ></br>

                <p>To assist combine these many duties into a cohesive, targeted program, our staff
                    collaborates closely with customers.
                    Like tourism, which is fueled by and depends on the synergistic convergence of many
                    stakeholders, including government regulations, physical infrastructure and services,
                    marketing and promotion initiatives, and travelers and their requirements.</p>
                </Col>
            </Row>
        </Container>
        </>
        </div>
    );
};

export default Tourism;