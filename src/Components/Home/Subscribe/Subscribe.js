import React from 'react';
import { Button } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <>
            <div className="Sbanner-img">
        <div className="Sbanner-text">
            <h1 className='animate__animated animate__zoomIn'>Be Up to Date With New Events</h1>
            <p className='animate__animated animate__fadeInUp'>
            Join our mailing list to receive news and announcements.
            </p>
            <div>
            <span >
                <input style={{ border: '2px solid gray' }} type="email" className="w-70 ps-3 rounded-pill py-2" placeholder="Email address" /> 
                <button className="btn1 animate__animated animate__fadeInUp">Go</button>
            </span>
            </div>
        </div>
    </div>
        </>
    );
};

export default Subscribe;