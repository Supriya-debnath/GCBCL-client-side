import React from 'react';
import './Picture.css';

// import {Swiper, SwiperSlide} from 'swiper/react';

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import {EffectCoverflow, Pagination, Navigation} from 'swiper';

// import img_slide1 from '../../../Images/Abul Quasem pic.docx.jpg'
// import img_slide2 from '../../../Images/GCBCL TEAM.docx (7).png'
// import img_slide3 from '../../../Images/GCBCL TEAM.docx (8).png'
// import img_slide4 from '../../../Images/GCBCL TEAM.docx (9).png'


const Picture= () => {
    return (
        <div>
            <>
        <div className='container'>
            <h2 className='heading'>Gallery World</h2>
            {/* <Swiper
                effect={'coverflow'}
                grabCursor= {true}
                centeredSlides= {true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier:2.5
                    }
                }
                pagination={{el:'.swiper-pagination', clickable:true}}
                navigation={{
                    nextEl:'swiper-button-next',
                    prevEl:'swiper-button-prev',
                    clickable:true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}

                className='swiper_container'
            >
                <SwiperSlide>
                <img  style={{ height: "450px", padding:"20px" }} src={img_slide1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={img_slide2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={img_slide3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={img_slide4} alt=""/>
                </SwiperSlide>

                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'>
                        <ion-icon name='arrow-back-outline'></ion-icon>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon name='arrow-forword-outline'></ion-icon>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>


            </Swiper> */}
        </div>
        </>
        </div>
    );
};

export default Picture;