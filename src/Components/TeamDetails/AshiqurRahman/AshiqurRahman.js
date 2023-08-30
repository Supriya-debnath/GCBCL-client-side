import React from 'react';
import './AshiqurRahman.css';
import { Col, Container, Row } from 'react-bootstrap';

import img44 from '../../../Images/GCBCL TEAM.docx (13).png'


const AshiqurRahman= () => {
    return (
        <div>
            <>
            <Container>
                
                <Row>
            <Col xs={12} md={5}>
            <img style={{ height: "350px", padding:"20px" }} src={img44} alt="" />
            </Col>
            <Col xs={12} md={7} className='pt-4'>
                <div>
                    <h4><mark>Kazi Ashiqur Rahman </mark></h4>
                </div>
                <h6 className='founder'>
                Kazi Ashiqur Rahman is extensively skilled in keeping excellent business relationship and
                communication with Govt. bodies, NGOs, Donor Agencies and private sector. He has been working
                in business development, Administrative, Capacity Building and HRM sector for last ten years. He
                has served in various renowned organizations in different positions. <br /> <br /> He is also capable of
                coordinating regarding different issues of the relevant company, communicating within senior
                authorities of government and private sectors. He is experienced in maintain regular
                communication with various service provider and technicians for ensure smooth running of official
                work and arranging for repairs and maintenance.
                </h6>
            </Col>
        </Row>
            </Container>
        </>
        </div>
    );
};

export default AshiqurRahman;