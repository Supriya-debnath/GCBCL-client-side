import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Partners.css';

const Partners = () => {
    return (
        <div>
            <>
        <Container>
        <h5 className='partners1'>GCBCL has entered into Memorandum of Understanding with various premier institutions.</h5>
        <hr />
        <Row>
            <Col xs={12} md={2}>
            <img style={{ height: "150px", padding:"20px" }} src="https://media.licdn.com/dms/image/C510BAQFfeyFviHltvA/company-logo_200_200/0/1567422078310?e=2147483647&v=beta&t=09MvXVr9lOgfTbeQJW8PejBxFoi93w0loPSHbiFjNWA" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Bongs Prayukti International Pvt. Ltd.</li>
                    <li>India</li>
                    <li>4th Floor, 323A, Motilal Gupta Rd, Kumor Para, Purba
                        Barisha, Kolkata, West Bengal 700008, India</li>
                    <li>https://prayukti group.com/</li>
                </ul>
            </Col>
        </Row>
        <hr />



        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "150px", padding:"20px" }} src="https://www.developmentaid.org/files/organizationLogos/ideck-infrastructure-development-corporation-karnataka-41878.jpg" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Infrastructure
                        Development
                        Corporation
                        (Karnataka)
                        Limited</li>
                    <li>India</li>
                    <li>9/7, K.C.N. Bhavan,
                        Madhavanagar
                        Extension, Yamuna
                        Bai Rd, Madhava
                        Nagar, Bengaluru,
                        Karnataka 560001,
                        India</li>
                    <li>https://ideck.in/</li>
                </ul>
            </Col>
        </Row>
        <hr />

        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "150px", padding:"20px" }} src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/duta4xmwu4dfq39n0itd" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Mercados Aries
                        International
                        S.A.</li>
                    <li>Spain</li>
                    <li>Av. de Burgos, 12,
                        28036 Madrid, Spain</li>
                    <li>https://www.me
                        rcadosaries.com
                        /</li>
                </ul>
            </Col>
        </Row>
        <hr />


        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "120px", padding:"20px" }} src="https://i1.rgstatic.net/ii/lab.file/AS%3A787671966298112%401564807039174_xl" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Ludin
                        Consulting,
                        LLC</li>
                    <li>USA</li>
                    <li>205 Detroit St.
                        Denver, CO 80206</li>
                    <li>https://ludinconsulting.com/abo ut/</li>
                </ul>
            </Col>
        </Row>
        <hr />


        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "160px", padding:"20px" }} src="https://85699.cdn.cke-cs.com/Gds38riE5yXosjjC6V0v/images/480a5b66bb40d557880cb03075ebc5753eb3446ba0b37b23.png" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>EDIPTA
                        GLOBAL
                        YONETIM
                        DANISMANLI
                        GI LTD. STI</li>
                    <li>Turkey</li>
                    <li>Maslak Mah Maslak
                        1453, C7/66,
                        Istanbul, Sarıyer
                        34398, TR</li>
                    <li>http://www.ebit
                        daglb.com/</li>
                </ul>
            </Col>
        </Row>
        <hr />


        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "90px", padding:"20px" }} src="data:image/png;base64,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" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>TARU Leading
                        Edge Private
                        Limited</li>
                    <li>India</li>
                    <li>221, Ground Floor,
                        Okhla Industrial Area,
                        Phase III,
                        New Delhi-110020,
                        India</li>
                        <li>http://www.taru.co.in/index.php</li>
                </ul>
            </Col>
        </Row>
        <hr />


        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "150px", padding:"20px" }} src="https://media.licdn.com/dms/image/C4D0BAQGFOjZuayOjxA/company-logo_200_200/0/1519860978531?e=2147483647&v=beta&t=CVd1n4RXIRpJ0YwDwdeBv88pRvHIKkIdS1LwFXBFwds" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Xplorer
                        Consultancy
                        Services (P)
                        Limited</li>
                    <li>India</li>
                    <li>Plot-3, First Floor,
                        Sarhaul, Opp. HIPA,
                        Sector-18, Gurgaon,
                        Haryana- 122001</li>
                    <li>https://www.xplorer.in/</li>
                </ul>
            </Col>
        </Row>
        <hr />


        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "150px", padding:"20px" }} src="data:image/png;base64,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" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Young
                        Development
                        Research &
                        Consulting Co.
                        Ltd</li>
                    <li>Cambodia</li>
                    <li>Room 104, KT tower
                        Building (23), Street
                        112,
                        Sangkat PhsaDepo 3,
                        Khan Toul Kork,
                        Phnom Penh,
                        Cambodia</li>
                    <li>http://youngconsult.asia/</li>
                </ul>
            </Col>
        </Row>
        <hr />

        <Row>
        <Col xs={12} md={2}>
            <img style={{ height: "150px", padding:"20px" }} src="https://www.surekhatech.com/surekhatech-one-page-scroll-theme/images/st-logo-social-share.jpg" alt="" />
            </Col>
            <Col xs={12} md={10} className='pt-4'>
                <ul>
                    <li>Surekha
                        Technologies
                        Pvt. Ltd.</li>
                    <li>India</li>
                    <li>201, 3rd Eye II, Nr.
                        Panchvati Circle, CG
                        Road, Ahmedabad,
                        Gujarat 380006</li>
                    <li>https://www.surekhatech.com/</li>
                </ul>
            </Col>
        </Row>
        <hr />



        </Container>
        </>
        </div>
    );
};

export default Partners;