import React from 'react';
import './Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
            <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <spam className="text-white fs-6"> <i className="fas fa-phone me-2"></i>
                                +880 199 777 822</spam>
          <spam className="text-white fs-6 ps-4"> <i className="fas fa-envelope me-2"></i>
                                info@example.com</spam>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <div className="col-md-6 col-lg-12 ">
                            <Link to='/'>
                                <i className="fab fa-facebook-f  me-4 fs-6 text-white"> </i>
                            </Link >
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



             <NavDropdown title="Sectors" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

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
            

            <NavDropdown title="Clients & Partners" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clients</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Partners
              </NavDropdown.Item>
            
            </NavDropdown>

          {/* <Nav.Link as={Link} to="/blogs">Clients & Partners</Nav.Link> */}
          <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>

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