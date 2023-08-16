import React, { useEffect, useState } from 'react';
import './OurServices.css';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const OurServices = () => {
    const [ services, setServices]= useState([]);


    useEffect(() => {
        fetch("/servicesDB.json")
            .then(res => res.json())
            .then(data => {setServices(data)
                // const reverseData = data.slice().reverse();
                // setServices(reverseData.slice(0, 8));
            });
    }, []);

    return (
        <div className="mb-4">
        <div className="service-banner text-center">
            <h4 className=" pb-4 display-6 cursive-text service-title animate__animated animate__zoomIn">
            Our Projects
            </h4>
            {/* <div>
                <div>
                    <small className="text-muted small-text">
                    Bangladesh Infrastructure Finance Fund Limited (BIFFL) <br/>
                    is a state owned financial institution basically for long-
                    term lending under PPP modalities.
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                    part of booking procedures.
                    </small>
                </div>
            </div> */}

        </div>

        <Container>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {services.map(service => <Service key={service._id} service={service}/>)}
            </div>
        </Container>
    </div>
    );
};

export default OurServices;