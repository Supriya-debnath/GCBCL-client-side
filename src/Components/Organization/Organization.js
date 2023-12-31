import React from 'react';
import './Organization.css';
import { Button, Card, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Organization = () => {
   


    return (
        <div>
            <>
            <Container>
        <h5 className='pt-5 pb-3 fs-3'><mark>About Us</mark></h5>
        
       
            <Row>
                <Col xs={12} md={9} className='pb-5'>
                Global Capacity Building Consultancy Limited is a consultancy firm providing strategic
technical, legal and financial consultancy services for the development of infrastructure
through PPP, Public Policy and Governance, Planning Design, Engineering, Financial
Advisory, Legal Regulatory, Project Programme Implementation Monitoring and
Capacity Building services for the sectors of Urban, Transportation, Energy, Tourism, IT
e-governance and Social Development. <br/> <br/> Apart from PPP consultancy GCBCL provide
environmental, social and disaster risk management services to Government
agencies/projects and private agencies as well. <br/> 
<br/>
Besides consultancy services GCBCL has
professional capacity building team to develop various skills of personnel and
organizations as per need-base requirements. In addition to the consulting services, GCBCL
provides high-valued PPP training, workshop, conduct survey, seminars, exposure visit-
inside and outside Bangladesh and environmental social risk mitigation consultancy
service. The company started its journey in the year 2017 with a group of highly qualified
consultants with a vision of building a successful and strong nation. <br/> <br/>
GCBCL believes in equality, with this prospect, we are engaged in conducting several
survey, capacity building, development and training based program designed for people of
all phases and occupation of the society specially in the rural areas. We work for building
up the capacity of women, adolescents and children of both rural and urban for
establishing their rights in the family as well as in the society. <br/> <br/> Designed by a group of high
profile policy makers and trainers we offer multidisciplinary training program based on
topics related to technical know-how, financial development and employment generation
where participation of women is highly emphasized.
GCBCL has good number of international affiliations, and with the help of international
experts, they are also capable for any sort of activities like marketing research, pre post
service research, data analysis, report writing, base line survey, managing and planning
corporate events etc. <br/> <br/> The main stakeholders of GCBCL are Government agencies, Project
Sponsors Banks and Financial Institutions. GCBCL’s overall business strength is shaped by
our core strategies and values. As well as, we strive to uphold the competence and
excellence level of our services by giving equal importance to all stakeholders involved in
the chain, such as our diverse talented work team, partners, clients, and the society.
                </Col>


                <Col xs={12} md={3}>
                    <div className='pt-5'>
                    <Card className="text-center">
                        <Card.Header className='invo'>Invitaion for bussiness Association partnership</Card.Header>
                        <Card.Body>
                        
                            <Button variant="warning">Click Here</Button>
                        </Card.Body>
                    
                    </Card>
                   
                    </div>


                    <div className='pt-5'>
                    <div class="swatch">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                    </div>
                    </div>
               
                </Col>
            </Row>
        </Container>


        </>
        </div>
    );
};

export default Organization;


