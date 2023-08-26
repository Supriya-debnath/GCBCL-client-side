import React from 'react';
import { Container } from 'react-bootstrap';
import './Study.css';

const Study= () => {
    return (
        <div>
            <>
       <Container>
        <div>
            <div>
                <h4 className='study'><mark>Study Paper</mark></h4>
            </div>
           <div>
           <ul>
                <li>
                <p className='studyTitle'>Garbage Disposal System-Current Scenario and Way to Go</p>
                </li>
                <a href="https://drive.google.com/file/d/1SEAuCiBLoCv6d6PegpeE6cUEqipjNvSp/view?usp=drive_link">Garbage Disposal System</a>
            </ul>
           </div>

           <div>
           <ul>
                <li>
                <p className='studyTitle'>Kitchen Waste Management</p>
                </li>
                <a href="https://drive.google.com/file/d/1r3qdXLZYEFwbQ_SX-Xu4N38N3CnxbGy4/view?usp=drive_link">Kitchen Waste Management </a>
            </ul>
           </div>

           <div>
           <ul>
                <li>
                <p className='studyTitle'>Alternative Way to Create Modern Food-truck and Caravan  </p>
                </li>
                <a href="https://drive.google.com/file/d/1UcW60hBV9I3rgJSHIeRvxhk7hb96K6dW/view?usp=drive_link"> Modern Food-truck and Caravan </a>
            </ul>
           </div>

           <div>
           <ul>
                <li>
                <p className='studyTitle'> Establishment of Modern Filling Station under PPP Modalities </p>
                </li>
                <a href="https://drive.google.com/file/d/1UcW60hBV9I3rgJSHIeRvxhk7hb96K6dW/view?usp=drive_link">Filling Station under PPP Modalities </a>
            </ul>
           </div>
            
        </div>
       </Container>
        </>
        </div>
    );
};

export default Study;