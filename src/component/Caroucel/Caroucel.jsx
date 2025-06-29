import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay,Navigation, Pagination } from 'swiper/modules';

const Caroucel = () => {
    return (
        <div>
            <div className='container  py-10 mx-auto mt-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
         
          <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/v67yWTMT/home-bg-1-1.jpg"
      className="w-full h-[550px]" />
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle"></a>
     
      <a href="#slide2" className="btn btn-circle"></a>
    </div> */}
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
         <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/JwCN6LXK/home-bg-4-1.jpg"
      className="w-full h-[550px]" />
   
  </div>
 
        </SwiperSlide>
        <SwiperSlide>
         
           <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/hxF24y2f/home-bg-6.jpg"
      className="w-full h-[550px]" />
   
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
           <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/RfFKnLd/home-bg-7.jpg"
      className="w-full h-[550px]" />
    
  </div>
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Caroucel;