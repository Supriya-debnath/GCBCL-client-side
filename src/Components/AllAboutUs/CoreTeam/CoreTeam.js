import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import img11 from '../../../Images/GCBCL TEAM.docx (10).png'
import img22 from '../../../Images/GCBCL TEAM.docx (11).png'
import img33 from '../../../Images/GCBCL TEAM.docx (12).png'
import img44 from '../../../Images/GCBCL TEAM.docx (13).png'
import img55 from '../../../Images/GCBCL TEAM.docx (14).png'
import img66 from '../../../Images/GCBCL TEAM.docx (15).png'

import './CoreTeam.css';

const CoreTeam = () => {

   


    return (
        <div>
            <>
            <div className='blogs'>
            <Container>
             <h2 className='board-title'>OPERATIONAL BODY</h2>  
        
                <Row >
                <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img22} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Nusrat Zahan <br />
                        chairman

                        </div>
                        </div>
                        </div>
                    </Col>
                    
                <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img44} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Kazi Ashiqur Rahman <br />
                        Director

                        </div>
                        </div>
                        </div>
                    </Col>
                    
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img66} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Nasrin Mahmooda <br />
                        Director

                        </div>
                        </div>
                        </div>
                    </Col>
                  
                    
                </Row>
                


                {/* <Row >
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img44} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Kazi Ashiqur Rahman <br />
                        Director

                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img55} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Arthur  Smith <br />
                        Capacity Building Specialist <br />
                        PPP Experts, UK

                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={img66} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Nasrin Mahmooda <br />
                        Director

                        </div>
                        </div>
                        </div>
                    </Col>
                  
                    
                </Row> */}




                
                

            </Container>
            
        </div>
        </>
        </div>
    );
};

export default CoreTeam;