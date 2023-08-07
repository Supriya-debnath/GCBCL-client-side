import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './WorkExperience.css';
import { Col, Container, Row } from 'react-bootstrap';

const WorkExperience = () => {
    return (
       <Container>
         <div>
            <>
        <h4 className="text-center pt-5 display-6 cursive-text service-title animate__animated animate__zoomIn">
            Work Experience
            <br/>
            (2017-2023)
            </h4>

            <Row>
                <Col md={6} xs={12} className="my-4"> 
                <Card className="text-center bg-experience">
                    <Card.Header><spam className="Project-title">Project Name</spam>
                        <br/>
                        Project Appraisal and Due
                            Diligence of Bangladesh
                            Infrastructure Finance
                            Fund Limited (BIFFL)
                            Funded Projects.
                        </Card.Header>
                    <Card.Body>
                        <Card.Title><spam className="Project-title">Client: </spam>Investment Promotion
                            Financing Facility
                            (IPFF) II Project
                            </Card.Title>
                        <Card.Text>
                        <spam className="Project-title">Funding Source: </spam>The World Bank
                        <br/>
                        <spam className="Project-title">Tenure Duration:</spam> Started from the year 2021, now continuing
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"><spam className="Project-title">Main Features Scope of Work</spam> <br/>
                    Bangladesh Infrastructure Finance Fund Limited (BIFFL)
                    is a state owned financial institution basically for long-
                    term lending under PPP modalities. It’s a TA project that
                    is funded by the world bank and implemented by the
                    IPFF II project of Bangladesh Bank and the project owner
                    is MoF (Ministry of Finance Bangladesh). We are
                    performing this project with Indian Govt. owned
                    consultancy firm iDeCk. The main role/scope of GCBCL of
                    this project are;
                    {/* <br/>
                    a) Due Diligence of 09 Sub-Project funded by BIFFL
                    Under this category GCBCL is doing mid-line feasibility
                    study, risk analysis on various aspects, like; Financial,
                    Structural (Architect/Civil works), Environmental and
                    Social, Legal and operational. Most of the projects are
                    Power Generation Project and some of them are solar
                    power plant.
                    <br/>
                    b) Review and development of BIFFL two major
                    guidelines/ policy, environmental &amp; Social, Credit Policy.
                    c) Capacity Building of BIFFL and or BIFFL stakeholders
                    on various aspects, basically Public-Private
                    Partnerships(PPPs).
                    Total Consultancy Fee is BDT 2.79 Crore */}
                    </Card.Footer>
                    </Card>
                </Col>


                <Col md={6} xs={12} className="my-4"> 
                <Card className="text-center bg-experience">
                    <Card.Header><spam className="Project-title">Project Name</spam>
                        <br/>
                        Strengthening Poverty
                            and Social Analysis
                            (SAER)(Baseline Survey 
                            Feasibility Study)
                        </Card.Header>
                    <Card.Body>
                        <Card.Title><spam className="Project-title">Client: </spam>Asian Development Bank
                            </Card.Title>
                        <Card.Text>
                        <spam className="Project-title">Funding Source: </spam>Asian Development Bank
                        <br/>
                        <spam className="Project-title">Tenure Duration:</spam> 2021-2022 (09 Month)
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"><spam className="Project-title">Main Features Scope of Work</spam> <br/>
                    The overall water resources &amp; facilities of Chittagong Hill
                    Tracts area are quite different from other area of
                    Bangladesh. Due to geographical difficulties the ethnic
                    people suffers a lot for pure drinking and cooking water
                    and unable to afford of installation water pump by
                    themselves. To improvise this ethnic and hill track people
                    conditions, Bangladesh Government with the TA support
                    of ADB implementing a project named “CHT water supply
                    improvement project”. This project is still continuing. To
                    startup this project ADB and GOB Bangladesh needs a
                    proper survey 
                    {/* (economical &amp; technical) and a feasibility
                    study of this project.
                     It was basically the sub project
                    under the main project “CHT water supply improvement
                    project”. As a lead consultancy firms (there was 03 NGOs
                    with us) the scope of work of our project are;
                    a) Conduct a Base-Line survey to find-out the actual
                    situation of CHT people as per 44 indicators/variables.
                    b) Conduct a feasibility-Study whether the project is
                    financially, economically ad technically feasible.
                    c) Building awareness that’s why the people could accept
                    this project positively.
                    The cost of our consultancy was USD 17,785.00 */}
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>


        </>
        </div>
       </Container>
    );
};

export default WorkExperience;