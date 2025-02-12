import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay,Navigation, Pagination } from 'swiper/modules';

const Caroucel = () => {
    return (
        <div>
            <div className='container px-6 py-10 mx-auto'>
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
      src="https://i.ibb.co.com/RjbZqM1/133746373-10291989.jpg"
      className="w-full h-[500px]" />
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle"></a>
     
      <a href="#slide2" className="btn btn-circle"></a>
    </div> */}
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
         <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/Jvgbdqt/34293277-8150319.jpg"
      className="w-full h-[500px]" />
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
      <a href="#slide4" className="btn btn-circle"></a>
     <h2>International mother language</h2>
      <a href="#slide2" className="btn btn-circle"></a>
    </div> */}
  </div>
         
         

        </SwiperSlide>
        <SwiperSlide>
         
           <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/sVR2J4K/21830422-6469066.jpg"
      className="w-full h-[500px]" />
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
           <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/1zWfdBm/2564886-370427-PBG5-MV-943.jpg"
      className="w-full h-[500px]" />
    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>

      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
  </div>
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Caroucel;