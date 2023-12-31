import React, { useState } from 'react';
import'./Banner.css';
import 'animate.css';
import { Button, Card, Carousel, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img22 from '../../../Images/nusrat mam.png'
import img44 from '../../../Images/GCBCL TEAM.docx (13).png'
import img66 from '../../../Images/Mahmooda.png'
import img00 from '../../../Images/Abul Quasem.png'

const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);

  };
    return (
        <>

        <div  className="marq">
          <marquee scrollamount="15">
            <h1>ReeZaa's-Your Dr.Chef : We are Open Now</h1>
                 
          </marquee>
                    
           {/* <a href="https://www.facebook.com/people/ReeZaas-Your-Dr-Chef/61550330001567/">
           <span className='ss'> Click Me</span>
            </a>   */}
          <Link to='https://www.facebook.com/people/ReeZaas-Your-Dr-Chef/61550330001567/'>
          <button className='me'>Click Me</button>
              </Link>
        </div>


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
              <Nav.Link as={Link} to="/history">HISTORY</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/director"> INTERNATIONAL CONSULTANT</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/coreTeam"> OPERATIONAL BODY</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/csr"> ADVISORS</Nav.Link>
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
              <Nav.Link as={Link} to="/foodSafety"> FOOD SAFETY & SECURITY </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/capacity"> CAPACITY BUILDING </Nav.Link>
              </NavDropdown.Item>
              </NavDropdown>
                   </p>


                   <p>
                   <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/Infrastructure"> GCBCl CONSULTANCY SERVICES</Nav.Link> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/bankService">BANK SERVICE</Nav.Link> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/training"> TRAINING/WORKSHOP</Nav.Link> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/servey">SERVEY RELATED SERVICES</Nav.Link> 
              </NavDropdown.Item>
            </NavDropdown>
                   </p>


                   <p>
                   <NavDropdown title="Clients & Partners" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/clients">CLIENTS</Nav.Link> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Nav.Link as={Link} to="/partners">PARTNERS</Nav.Link> 
                    </NavDropdown.Item>
                    
                    </NavDropdown>
                   </p>

                   <p>
                   <NavDropdown title="Archive" id="collasible-nav-dropdown">
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/study">STUDY</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/research">RESEARCH PAPER</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/employee">EMPLOYEE</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/events">EVENTS</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/picture">PICTURE</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Nav.Link as={Link} to="/work">WORK EXPERIENCE</Nav.Link>
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

            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.worldbank.org/content/dam/photos/780x439/2018/jan-1/Kazakhstan-homes-near-an-urban-area-Shynar-Jetpissova-World-Bank-780x439....png"} alt="" />
      <Carousel.Caption>
          <div className='bannerText animate__animated animate__zoomIn banner1 '>
          <h3>Urban</h3>
          </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.ask-ehs.com/blog/wp-content/uploads/2022/09/Blog-post-img-3-1.jpg"} alt="" />
      <Carousel.Caption>
        <div className='bannerText animate__animated animate__zoomIn'>
        <h3>Transport</h3>
        </div>   
        </Carousel.Caption>
      </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.brookings.edu/wp-content/uploads/2018/09/Energy-sector_shutterstock_288559940.jpg"} alt="" />
      <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn'>
         <h3>Energy Capabilities</h3>
         </div>
          
        </Carousel.Caption>
      </div>
      </Carousel.Item>


      <Carousel.Item> 
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://wbtourismdotblog.files.wordpress.com/2020/09/tourism-properties-cover.jpg?w=870"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn bannerT'>
         <h3>Tourism</h3>
         </div>  
        </Carousel.Caption>
      </div>
      </Carousel.Item>


      <Carousel.Item>
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://magarticles.magzter.com/articles/821/259752/5a4ccd70b74fa/Environmental-Pollution-in-Bangladesh-Its-Effects-and-Control.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn bannerE'>
         <h3>Enviroment</h3>
         </div>  
        </Carousel.Caption>
      </div>
      </Carousel.Item>


      <Carousel.Item>
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://live.staticflickr.com/65535/50520663201_3c42105f64_z.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn'>
         <h3>Food Safety</h3>
         </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>


      <Carousel.Item>
      <div className='gcbclBanner'>
      <img style={{ height: "450px", padding:"20px" }}  src={"https://www.wipo.int/export/sites/www/cooperation/images/getty_494280280_500.jpg"} alt="" />
        <Carousel.Caption>
         <div className='bannerText animate__animated animate__zoomIn bannerC'>
         <h3>Capacity Building</h3>
         </div>
        </Carousel.Caption>
      </div>
      </Carousel.Item>


    </Carousel>



</Container>
            </Col>


            <Col xs={12} md={2}>
                <div>
                <ul>
                    <li><h6>Chairman & Managing Director:</h6>
                    <img style={{ height: "100px", width: "150px", paddingRight:"20px" }} src={img22} alt=""/>
                     <br /> 
                     <Link to='/nusrat'>Nusrat Zahan</Link>
                    </li>
                </ul>



                <ul>
                    <li><h6>Advisors:</h6>
                    <img style={{ height: "100px", width: "150px", paddingRight:"20px" }} src={img00} alt=""/>
                        <br /> 
                        <Link to='/abul'> Md. Abul Quasem</Link>
                    </li>
                </ul>

                

                <ul>
                    <li><h6>Director:</h6>
            
                    <img style={{ height: "100px", width: "150px", paddingRight:"20px" }}  src={img44} alt=""/>
                        <br /> <Link to='/ashiqur'>Kazi Ashiqur Rahman</Link>

                    <img style={{ height: "100px", width: "150px", paddingRight:"20px" }} src={img66} alt=""/>
f                        <br /> 
                          <Link to='/nasrin'>Nasrin Mahmooda</Link>
              
                    </li>
                </ul>
                </div>
            </Col>
        </Row>

     


        </>
    );
};

export default Banner;