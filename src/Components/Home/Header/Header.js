import React from 'react';
import './Header.css';
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
            <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <spam className="text-white fs-6"> <i className="fas fa-phone me-2"></i>
                               +88 02 55040694</spam>
          <spam className="text-white fs-6 ps-4"> <i className="fas fa-envelope me-2"></i>
                                info@gcbclbd.com</spam>
        </Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <div className="col-md-6 col-lg-12 ">
                        
                            {/* <a href="https://www.facebook.com/people/ReeZaas-Your-Dr-Chef/61550330001567/"> */}

                            <a href="https://www.facebook.com/GCBCL">
                            <i className="fab fa-facebook-f  me-4 fs-6 text-white"> </i>
                            </a>    
                           
                            <Link to='/'>
                                <i className="fab fa-twitter  me-4 fs-6 text-white"> </i>
                            </Link>
                            <Link to='/'>
                                <i className="fab fa-linkedin-in me-4 fs-6 text-white"> </i>
                            </Link>
                            <Link to='/'>
                                <i className="fab fa-instagram fs-6 text-white"> </i>
                            </Link>
                        </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


<Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_nbZv7P8_J1MhT5AZwvZFwHwFEgzr7Jk4yF2Nt1STQ&s"  alt="" 
            width="80"
            height="50"
           className="d-inline-block align-top"
            />
            <br/>
            <em className='build'>Building Future Bangladesh</em>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          {/* <Nav.Link as={Link} to="/about">About Us</Nav.Link> */}


          <NavDropdown title="About" id="collasible-nav-dropdown">
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
            

            <NavDropdown title="Clients & Partners" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Nav.Link as={Link} to="/clients">CLIENTS</Nav.Link> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/partners">PARTNERS</Nav.Link> 
              </NavDropdown.Item>
            
            </NavDropdown>




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



          <Nav.Link as={Link} to="/contact">Contact </Nav.Link>

          <h3 className='pt-2 ps-4'>  <i class="fa-solid fa-magnifying-glass"></i></h3>
          </Nav>
          <button className='btn1'>Get a quote</button>
         
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <hr className='hr1' />


        </>
        </div>
    );
};

export default Header;