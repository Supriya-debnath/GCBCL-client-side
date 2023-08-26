import React from 'react';
import './Employee.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Employee= () => {
    return (
        <div>
            <>
            <Container>
                <div>
                    <h3><mark>Employee</mark></h3>
                </div>

                <Row>
                    <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'>Nusrat Zahan</Card.Header>
                        <Card.Body>
                            <Card.Title>Chairman</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'>Nasrin Mahmooda</Card.Header>
                        <Card.Body>
                            <Card.Title>Director</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'>Tamanna Tasnim</Card.Header>
                        <Card.Body>
                            <Card.Title>Manager Bussiness   </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'>Shangida Akter Sinthia</Card.Header>
                        <Card.Body>
                            <Card.Title>Junior Consultant  </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row>
                <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'> Farhar Haidar </Card.Header>
                        <Card.Body>
                            <Card.Title> Junior Consultant</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'> Mahfuzur Rahman </Card.Header>
                        <Card.Body>
                            <Card.Title>  Executive HR </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'> Hosna Ara Puthi </Card.Header>
                        <Card.Body>
                            <Card.Title> Junior Consultant  </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                <Col xs={12} md={3}>
                    <Card className='employee-card'>
                        <Card.Header as="h5" className='employee-header'> Sheuily Papiha </Card.Header>
                        <Card.Body>
                            <Card.Title>Training Facilitator   </Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        </div>
    );
};

export default Employee;
