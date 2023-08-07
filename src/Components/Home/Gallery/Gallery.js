import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
// import Img1 from '../../../Images/IMG_1259';
import './Gallery.css';

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (
   
            <>

<Container>
<div>
        <div className="destination service-title text-center">
        <h1>Photo Gallary</h1>
        </div>
        <p className=' text-center'>
        Introduce the place where you traveled and the person you traveled with.  <br /> Your feelings and  
        expectations about this trip were.
        </p>
        <Row>
        <Slider {...settings}>
            <Col md={4} xs={12} className="my-2">
            <div>
            <h3 className='gallery-img'>
            <img style={{ height: "380px", padding:"20px" }} src={"https://cdn.britannica.com/47/29547-050-A326596D/village-locality-Bankura-India-West-Bengal.jpg"} alt="" />
            </h3>
          </div>
            </Col>

         <Col md={2} xs={12} className="my-2">
         <div>
            <h3>
            <img style={{ height: "380px", padding:"20px" }} src="https://bengaltourism.files.wordpress.com/2020/12/monchasha_rural_tourism_bengal_india_039.jpg?w=1024" alt="" />
            </h3>
          </div>
         </Col>
          
          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "380px", padding:"20px" }} src="https://cdn.britannica.com/47/29547-050-A326596D/village-locality-Bankura-India-West-Bengal.jpg" alt="" />
            </h3>
          </div>
          </Col>

          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "380px", padding:"20px" }} src="https://www.transindiatravels.com/wp-content/uploads/chilapata-forest.jpg" alt="" />
            </h3>
          </div>
          </Col>

          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "380px", padding:"20px" }} src="https://thumbs.dreamstime.com/b/vernon-france-march-old-mill-217067936.jpg" alt="" />
            </h3>
          </div>
          </Col>

          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "380px", padding:"20px" }} src="https://www.tripsavvy.com/thmb/v-r2FhoYWI3U9i0sKPJJTOEfkJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-122132895-5743060e3df78c6bb00fd267.jpg" alt="" />
            </h3>
          </div>
          </Col>

        </Slider>
        </Row>
      </div>

      </Container>
        
        </>
    );
};

export default Gallery;