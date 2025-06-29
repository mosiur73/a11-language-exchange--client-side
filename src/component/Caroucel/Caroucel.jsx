import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Caroucel = () => {
  return (
    <div className="container mx-auto mt-20">
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/v67yWTMT/home-bg-1-1.jpg"
              className="w-full h-[550px] object-cover"
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/JwCN6LXK/home-bg-4-1.jpg"
              className="w-full h-[550px] object-cover"
              alt="Slide 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/hxF24y2f/home-bg-6.jpg"
              className="w-full h-[550px] object-cover"
              alt="Slide 3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src="https://i.ibb.co/RfFKnLd/home-bg-7.jpg"
              className="w-full h-[550px] object-cover"
              alt="Slide 4"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Caroucel;
