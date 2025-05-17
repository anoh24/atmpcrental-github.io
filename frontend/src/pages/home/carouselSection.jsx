import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination,Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import './carouselSection.css'

const CarouselVideo = () => {
  const swiperRef = useRef(null);
  const Videos = [
    {
      id: '1',
      src: '/assets/carouselVideoList/housetour1.mp4',
      title: 'Marawi Poblacion, Bangon Street, Marawi City',
      description: 'This is the description for Video 1.',
    },
    {
      id: '2',
      src: '/assets/carouselVideoList/housetour2.mp4',
      title: '22nd Street Nazareth, Cagayan De Oro City, Misamis Oriental',
      description: 'This is the description for Video 2.',
    },
  ];

  return (
    <div data-scroll-section className="w-screen h-screen">
      <Swiper 
       onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={100}
        autoplay={{
          delay: 15000, // 30 seconds
          disableOnInteraction: false, // keeps autoplay even after interaction
        }}
        pagination={{clickable: true}}
        className="w-full h-full"
      >
        {Videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative w-full h-full">
              {/* Background video */}
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                onEnded={() => swiperRef.current?.slideNext()}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />

              {/* Dark overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

              {/* Text content */}
              <div className="absolute left-4 sm:left-5 md:left-10 lg:left-20 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/60 p-6 rounded-lg max-w-7xl">
                <h2 className="text-3xl font-bold mb-2">{video.title}</h2>
                <p className="text-lg">{video.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselVideo;
