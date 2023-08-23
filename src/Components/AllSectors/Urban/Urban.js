import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Urban.css';

const Urban = () => {
    return (
        <div>
            <>
            <Container>
            <Row>
                <Col>  <img style={{height: 460}}  src={'https://www.adb.org/sites/default/files/page/649646/images/urban-transport.jpg'} className="img-fluid w-100" alt=""/> </Col>
            </Row>

            <Row>
                <Col className='history'>  
                <h4 className='urban'><mark>Urban Sector</mark></h4>
                We have demonstrated competence in advising and engineering services related to a
                variety of aspects of urban infrastructure, including water and waste water management,
                solid waste management, sanitation, lake development, and urban planning. We also have a
                lot of expertise doing feasibility studies, structuring PPP projects, creating bid documents,
                managing the bid process, and overseeing contracts for various infrastructure project
                specialties. <br />  <br /> Our areas of competence include the creation of sector-specific laws and
                regulations, PPP guides that serve as a manual for project implementation on the PPP
                framework, and PPP compendiums. The compilation traces the development of PPPs in
                numerous infrastructure spheres. We are among the most sought-after consultants in the
                urban sector, particularly in water and waste water management, sanitation, and solid
                waste management. <br /> <br />  Our urban experience also covers real estate development, housing
                infrastructure, health infrastructure, and urban planning and management projects.
                </Col>
            </Row>

        </Container>
        </>
        </div>
    );
};

export default Urban;