import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './Energy.css';

const Energy= () => {
    return (
        <div>
            <>
        <Container>
        <Row>
                <Col>  <img style={{height: 460}}  src={'https://www.brookings.edu/wp-content/uploads/2018/09/Energy-sector_shutterstock_288559940.jpg'} className="img-fluid w-100" alt=""/> </Col>
            </Row>

            <Row>
                <Col className='history'>  
                <h4 className='urban'><mark>ENERGY SECTOR CAPABILITIES</mark></h4>
                The generating mix and structural frameworks for service delivery in the energy sector are
                both changing significantly. It is crucial for the government and several other stakeholders
                to keep up with the transition in light of these changes. <br /> <br />
                Our technical services cover cadastral mapping, land acquisition plans, comprehensive
                engineering designs, quantity &amp; cost estimation, and traffic studies for expressways, audit
                services for road safety, and traffic engineering and management. We also offer alignment
                studies and planning for greenfield expressways. <br /> <br />
                We do feasibility analysis, tolling strategy, project structuring under several frameworks,
                and policy creation in the area of business advising. Our bid advising services also include
                bid review, development of bid documentation for toll, annuity, and hybrid annuity
                frameworks, and support up until the concession agreement is signed. <br /> <br />
                We provide complete solutions for building solar, wind, and hydropower facilities as well
                as energy storage systems. We provide the following services to rooftop, ground, canal top,
                and floating solar power projects (completely or in selected portions). <br /> <br />
                Our expertise is in the areas of: <br /> <br />

                 <ul>
                    <li>Land identification, screening and acquisition support</li>
                    <li>Surveys and technical feasibility</li>
                    <li>Detailed project report</li>
                    <li>Transaction advisory services – (Project structuring, Bid process management,
                    financial modelling)</li>
                    <li>Project related approval coordination and liasoning</li>
                    <li>Project management consultancy</li>
                    <li>Technical consulting; Basic &amp; detailed engineering Quality Control (QC)</li>
                    <li>Construction management operation and maintenance solutions</li>
                    <li>Fund syndication services</li>
                 </ul>


                </Col>
            </Row>
        </Container>
        </>
        </div>
    );
};

export default Energy;