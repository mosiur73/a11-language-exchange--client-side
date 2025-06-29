import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    text: `Sometimes language courses can be boring, classes here are taught through various methods that strengthen both listening and understanding skills together with a special focus on vocabulary.`,
    name: 'Eric Garcia',
    role: 'Student',
    image: 'https://i.ibb.co/CsXL53Pp/images-3.jpg',
  },
  {
    text: `The teachers are very professional and friendly. I improved my speaking skills in a very short time thanks to their unique teaching methods.`,
    name: 'Anna Smith',
    role: 'Student',
    image: 'https://i.ibb.co/n8M197Yk/images-1.jpg',
  },
  {
    text: `The teachers are very professional and friendly. I improved my speaking skills in a very short time thanks to their unique teaching methods.`,
    name: 'Anna Smith',
    role: 'Student',
    image: 'https://i.ibb.co/FqkqJNPS/images-2.jpg',
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('https://i.ibb.co/1VfSN9x/pexels-lilartsy-1925536.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            reverseDirection: true, // right-to-left slide
          }}
          modules={[Autoplay]}
        >
            
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
            
              <p className="text-green-400 mb-6 font-semibold uppercase">
                Clients Say
              </p>
              <p className="text-lg mb-6 italic max-w-xl mx-auto">
                <span className="text-4xl font-serif leading-none">“</span>
                {item.text}
              </p>
              <div className="flex justify-center mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <p className="mt-3 text-green-400 font-semibold">
                {item.name}
                <span className="text-white font-normal">, {item.role}</span>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
