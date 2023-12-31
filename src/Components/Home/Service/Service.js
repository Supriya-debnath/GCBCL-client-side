import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { Row } from 'react-bootstrap';

const Service = ({service}) => {
    const {_id, name, img, description} =service;

   

    return (
  
       
        <div className="col product">
           
            
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body">
                        {/* <h4 className="card-title cursive-text text-center">
                            {name}
                        </h4> */}

                        <p className="card-text more-small-text text-muted text-justify">
                            {description.slice(0, 200)}
                        </p>

                    </div>

                    <Link to={'/details'}>
                    <button className="btn1 btn-success text-white px-4 w-75 rounded-0 order-btn ">Read More</button>
                    </Link>

                </div>
               
        </div>
    
    );
};

export default Service;