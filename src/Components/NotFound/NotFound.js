import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img style={{ height: "600px" }} className="img-fluid w-100" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
            <Link to="/"><button className='btn1 btn-success text-white w-25 rounded-0  notF '>Go Back</button></Link>
        </div>
    );
};

export default NotFound;