import React from 'react';
import './AbulQuasem.css';
import { Col, Container, Row } from 'react-bootstrap';

import img00 from '../../../Images/Abul Quasem pic.docx.jpg'

const AbulQuasem= () => {
    return (
        <div>
            <>
            <Container>
                
                <Row>
            <Col xs={12} md={5}>
            <img style={{ height: "350px", padding:"20px" }} src={img00} alt="" />
            </Col>
            <Col xs={12} md={7} className='pt-4'>
                <div>
                    <h4><mark>Md. Abul Quasem </mark></h4>
                </div>
                <h6 className='founder'>
                Md. Abul Quasem is appointed as the Chief advisor of Global Capacity Building &amp; Consultancy Ltd
                (GCBCL) since its inception. He was appointed as deputy governor of Bangladesh Bank on July,
                2011 for 04 years. He was reappointed in August 2015 and continued until March 2016. He has
                experiences in accounts and budgeting department, Expenditure Management Department
                Development of Currency Management, SME and Special Programs Department, Research
                Department, Statistics Department, IT Operation and Communication Department, Information
                Systems Development Department, Department of Communication and Printing, Common Services
                Department, Payments System Department, Investment Promotion and Financing Facility, Debt
                Management Department. <br /> <br /> During his long tenure (40 years) of working in Bangladesh bank , he
                attended many domestic and foreign trainings and seminars in different international organizations
                in various countries like the USA, UK, Canada, Australia, Switzerland, Germany, Denmark,
                Netherlands, Norway, Egypt, China, Indonesia, Korea, Singapore, Malaysia, etc.
                </h6>
            </Col>
        </Row>
            </Container>
        </>
        </div>
    );
};

export default AbulQuasem;