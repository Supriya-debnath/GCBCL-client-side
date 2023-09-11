import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start text-white bg-dark">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">
                                About US
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF9", height: "2px" }}
                            />
                            <p className="small-text footer-about">
                        
                            GCBCL believes in equality, with this prospect, we are engaged in conducting several survey, capacity building of the society specially in the rural areas. 
                            </p>
                            <div className="col-md-6 col-lg-12 pt-4 ">
                            <Link to='/'>
                                <i className="fab fa-facebook-f  me-4 fs-4"> </i>
                            </Link >
                            <Link to='/'>
                                <i className="fab fa-twitter  me-4 fs-4"> </i>
                            </Link>
                            <Link to='/'>
                                <i className="fab fa-linkedin-in me-4 fs-4"> </i>
                            </Link>
                            <Link to='/'>
                                <i className="fab fa-instagram fs-4"> </i>
                            </Link>
                        </div>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Explore</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />


                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Sectors
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Archive
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Services
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Web Design
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/" className="text-white text-decoration-none small-text">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Services
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none small-text">
                                    About Us
                                </NavLink>
                            </p>

                
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold ">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p className="small-text">
                                <i className="fas fa-home me-3"></i>
                                14/C, Road 2, Block L, Banani PO: Gulshan, Dhaka, 1212
                            </p>

                            <p className="small-text">
                                <i className="fas fa-envelope me-3"></i>
                                info@gcbclbd.com
                            </p>

                            <p className="small-text">
                                <i className="fas fa-phone me-3"></i>
                                +880 1707111437
                            </p>

                            <p className="small-text">
                                <i className="fas fa-print me-3"></i>
                                +88 02 55040694
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3 small-text"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
                <span className="me-2">© 2022 Copyright</span>
               {/* <span className='y'> Catering & Event Management</span> */}

                <NavLink to="/" className="text-white text-decoration-none">
                All Rights Reserved. Developed At GCBCL
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;