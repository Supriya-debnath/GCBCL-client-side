import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        
        <>
        <Container>
             
        <div>
                <Row>
                <Col xs={12} md={4}>
                <img className="img-fluid about-img" src="https://media.licdn.com/dms/image/C5622AQHGtLms_18Q9A/feedshare-shrink_800/0/1599555274864?e=2147483647&v=beta&t=wbVleoINQQGcrA2m5NTcouCPcxFkcPniTIJUhInFrJ8" alt="" />
        
        </Col>

       
        <Col xs={12} md={8}>

        <p>
        Global Capacity Building &amp; Consultancy Limited is a consultancy firm providing strategic
technical, legal and financial consultancy services for the development of infrastructure
through PPP, Public Policy and Governance, Planning &amp; Design, Engineering, Financial
Advisory, Legal &amp; Regulatory, Project &amp; Programme Implementation Monitoring and
Capacity Building services for the sectors of Urban, Transportation, Energy, Tourism, IT &amp;
e-governance and Social Development. Apart from PPP consultancy GCBCL provide
environmental, social and disaster risk management services to Government
agencies/projects and private agencies as well. <br/> 
<br/>
Besides consultancy services GCBCL has
professional capacity building team to develop various skills of personnel and
organizations as per need-base requirements. In addition to the consulting services, GCBCL
provides high-valued PPP training, workshop, conduct survey, seminars, exposure visit-
inside and outside Bangladesh and environmental &amp; social risk mitigation consultancy
service. The company started its journey in the year 2017 with a group of highly qualified
consultants with a vision of building a successful and strong nation.
GCBCL believes in equality, with this prospect, we are engaged in conducting several
survey, capacity building, development and training based program designed for people of
all phases and occupation of the society specially in the rural areas. We work for building
up the capacity of women, adolescents and children of both rural and urban for
establishing their rights in the family as well as in the society. <br/> <br/> Designed by a group of high
profile policy makers and trainers we offer multidisciplinary training program based on
topics related to technical know-how, financial development and employment generation
where participation of women is highly emphasized.
GCBCL has good number of international affiliations, and with the help of international
experts, they are also capable for any sort of activities like marketing research, pre &amp; post
service research, data analysis, report writing, base line survey, managing and planning
corporate events etc. The main stakeholders of GCBCL are Government agencies, Project
Sponsors &amp;Banks and Financial Institutions. GCBCL’s overall business strength is shaped by
our core strategies and values. As well as, we strive to uphold the competence and
excellence level of our services by giving equal importance to all stakeholders involved in
the chain, such as our diverse talented work team, partners, clients, and the society.
        </p>
        <button className='button1'>Read More</button>


                
        </Col>
    </Row>

    </div>
    </Container>
        
        </>



    );
};

export default About;