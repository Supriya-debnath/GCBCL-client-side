import React from 'react';
import'./Banner.css';
import 'animate.css';
import { Button, Card, Carousel, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img22 from '../../../Images/GCBCL TEAM.docx (11).png'
import img44 from '../../../Images/GCBCL TEAM.docx (13).png'
import img66 from '../../../Images/GCBCL TEAM.docx (15).png'
import img00 from '../../../Images/Abul Quasem pic.docx.jpg'

const Banner = () => {
    return (
        <>

        


        <Row>
            <Col xs={12} md={2}>
            <div>
            <div className=' ps-5 pt-5'>
                 <p>
                   <Nav.Link as={Link} to="/home">Home</Nav.Link>
                   </p>
                   <p>
                   <NavDropdown title="About Us" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                        <Nav.Link as={Link} to="/history">History</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />

                        <NavDropdown.Item>
                        <Nav.Link as={Link} to="/director"> Board of Director</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />

                        <NavDropdown.Item>
                        <Nav.Link as={Link} to="/coreTeam"> Core Team</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />

                        <NavDropdown.Item>
                        <Nav.Link as={Link} to="/csr"> CSR</Nav.Link>
                        </NavDropdown.Item>
                        </NavDropdown>
                   </p>


                   <p>
                   <NavDropdown title="Sectors" id="collasible-nav-dropdown">
             <NavDropdown.Item>
              <Nav.Link as={Link} to="/urban"> URBAN</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/transport"> TRANSPORT </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/energy"> ENERGY SECTOR CAPABILITIES </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/tourism">TOURISM  </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/information">INFORMATION TECHNOLOGY  </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/enviroment"> ENVIRONMENT </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/foodSafety"> FOOD SAFETY </Nav.Link>
              </NavDropdown.Item>
              </NavDropdown>
                   </p>


                   <p>
                   <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/Infrastructure"> GCBCl Consultancy Services</Nav.Link> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/bankService">Bank Service</Nav.Link> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/training">Training/Workshop</Nav.Link> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/servey">Servey related services</Nav.Link> 
                    </NavDropdown.Item>
                    </NavDropdown>
                   </p>


                   <p>
                   <NavDropdown title="Clients & Partners" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/clients">Clients</Nav.Link> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/partners">Partners</Nav.Link> 
                    </NavDropdown.Item>
                    
                    </NavDropdown>
                   </p>

                   <p>
                   <NavDropdown title="Archive" id="collasible-nav-dropdown">
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Study</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Research paper</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Employee</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Events</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Picture</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/">Work Experience</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
                   </p>

                   <p>
                   <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                   </p>
         
                 </div>
            </div>
            </Col>


        <Col xs={12} md={8}>
            <Container>
            <Carousel fade>
      <Carousel.Item>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.worldbank.org/content/dam/photos/780x439/2018/jan-1/Kazakhstan-homes-near-an-urban-area-Shynar-Jetpissova-World-Bank-780x439....png"} alt="" />
        <Carousel.Caption>
          <div className='bannerText animate__animated animate__zoomIn'>
            <h4>Building Future Bangladesh</h4>
          <h3>Urban Sector</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.ask-ehs.com/blog/wp-content/uploads/2022/09/Blog-post-img-3-1.jpg"} alt="" />
        <Carousel.Caption>
        <div className='bannerText animate__animated animate__zoomIn'>
        <h4>Building Future Bangladesh</h4>
        <h3>Transport</h3>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.brookings.edu/wp-content/uploads/2018/09/Energy-sector_shutterstock_288559940.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn'>
         <h4>Building Future Bangladesh</h4>
         <h3>Energy Sector Capabilities</h3>
         </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.daily-sun.com/assets/news_images/2022/09/27/1601134828.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn'>
         <h4>Building Future Bangladesh</h4>
         <h3>Tourism</h3>
         </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://magarticles.magzter.com/articles/821/259752/5a4ccd70b74fa/Environmental-Pollution-in-Bangladesh-Its-Effects-and-Control.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn'>
         <h4>Building Future Bangladesh</h4>
         <h3>Enviroment</h3>
         </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://live.staticflickr.com/65535/50520663201_3c42105f64_z.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn'>
         <h4>Building Future Bangladesh</h4>
         <h3>Food Safety</h3>
         </div>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




                {/* <div className='banner-slider'>
                <div className='wrappers'>
               
                <img  src={"https://cdn.britannica.com/47/29547-050-A326596D/village-locality-Bankura-India-West-Bengal.jpg"} alt="" />
             
            

                <img src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"} alt="" />

                <img src={"https://cdn.britannica.com/47/29547-050-A326596D/village-locality-Bankura-India-West-Bengal.jpg"} alt="" />

                <img src={"https://cdn.britannica.com/47/29547-050-A326596D/village-locality-Bankura-India-West-Bengal.jpg"} alt="" />

                </div>

                </div> */}




            {/* <div className="banner-img">
                    <div className="banner-text">
                    <p className=''>     
            </p>
           
           
                <div className="wrapper">
                <div className="static-text">Building Future Bangladesh</div>
                <ul className="dynamic-text">
                    <li> <span>Urban Sector</span> </li>
                    <li> <span>Transport</span> </li>
                    <li> <span>Energy Sector Capabilities</span> </li>
                    <li> <span>Tourism</span> </li>
                    <li> <span>Enviroment</span> </li>
                    <li> <span>Food Safety</span> </li>
                </ul>
            </div>


        </div>
    </div>    */}

</Container>
            </Col>


            <Col xs={12} md={2}>
                <div>
                <ul>
                    <li><h6>Chairman & Managing Director:</h6>
                    <ul>
                    <img style={{ height: "60px", width: "90px", paddingRight:"20px" }} src={img22} alt=""/>
                        <li>Nusrat Zahan</li>
                    </ul>
                    </li>
                </ul>

                <ul>
                    <li><h6>Advisors:</h6>
                    <ul>
                    <img style={{ height: "60px", width: "90px", paddingRight:"20px" }} src={img00} alt=""/>
                        <li>Md. Abul Quasem</li>
                    </ul>
                    </li>
                </ul>

                <ul>
                    <li><h6>Director:</h6>
                    <ul>
                    <img style={{ height: "60px", width: "90px", paddingRight:"20px" }}  src={img44} alt=""/>
                        <li>Kazi Ashiqur Rahman</li>
                    <img style={{ height: "60px", width: "90px", paddingRight:"20px" }} src={img66} alt=""/>
                        <li>Nasrin Mahmooda</li>
                    </ul>
                    </li>
                </ul>
                </div>
            </Col>
        </Row>

     


        </>
    );
};

export default Banner;