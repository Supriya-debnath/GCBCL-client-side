import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img67 from '../../../Images/GCBCL TEAM.docx (16).png'
import img68 from '../../../Images/GCBCL TEAM.docx (17).png'
import img69 from '../../../Images/GCBCL TEAM.docx (18).png'
// import './CSR.css';

const CSR = () => {
    return (
        <div>
            <>

            <Container>
                <h2 className='board-title'>ADVISORS</h2>
            <Row >
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img67} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Iftekhar Ahmed <br />
                        Civil Engineer


                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img68} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Md. Satil Munzoor -Al-Mahmud <br />
                        Civil Engineer



                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img69} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Zahid Ahmed Siddique <br />
                        Civil Engineer


                        </div>
                        </div>
                        </div>
                    </Col>
                  
                    
                </Row>
            </Container>


        </>
        </div>
    );
};

export default CSR;