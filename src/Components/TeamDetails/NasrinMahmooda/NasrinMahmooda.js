import React from 'react';
import './NasrinMahmooda.css';

import img66 from '../../../Images/Mahmooda.png'
import { Col, Container, Row } from 'react-bootstrap';

const NasrinMahmooda= () => {
    return (
        <div>
            <>
            <Container>
                
                <Row>
            <Col xs={12} md={5}>
            <img style={{ height: "350px", padding:"10px", width:"400px" }} src={img66} alt="" />
            </Col>
            <Col xs={12} md={7} className='pt-4'>
                <div>
                    <h4><mark>Nasrin Mahmooda </mark></h4>
                </div>
                <h6 className='founder'>
                Nasrin Mahmooda is the Director of Global Capacity Building & Consultancy Ltd. She has more than
                12 years of hand on comprehensive experience, wide-ranging proficiency & professional knowledge
                in Accounting, Finance, Performance Assessment, Fiduciary & Safeguard Compliance, Taxation,
                Auditing & Compliance, Planning & Strategy, Accounts Management, Corporate Management.
                <br /> <br />
                Business Appraisal & Business Development under direct reporting to Management/Authority. She
                has also worked with World Bank, UNDP, European Union & LGSP - 1 & 2 projects, LGD division
                under Ministry of LGRD&C for last 10 years.
                </h6>
            </Col>
        </Row>
            </Container>
        </>
        </div>
    );
};

export default NasrinMahmooda;