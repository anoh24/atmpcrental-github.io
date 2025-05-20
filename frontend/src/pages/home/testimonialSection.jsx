import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const testimonials = [
  {
    name: 'Anna, Melas',
    text: 'Finding a room close to campus was so easy. The place was clean, safe, and fit my student budget!',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Student',
  },
  {
    name: 'Mark, Heras',
    text: 'Affordable, secure, and convenient. Perfect for my work setup.',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Manager',
  },
  {
    name: 'Jasmine, Curtis',
    text: 'Support was fast and the place exceeded expectations!',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-CEO Safeguard',
  },
  {
    name: 'John, Cena',
    text: 'I love how easy it was to book. Great for students like me.',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Employee',
  },
  {
    name: 'Michael, Solumn',
    text: 'I love how easy it was to book. Great for students like me.',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Employee',
  },
  {
    name: 'Lisa, Ray',
    text: 'The service was great, and I felt safe. Highly recommend!',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Student',
  },
  {
    name: 'Sophia, Wells',
    text: 'Booking was quick and smooth. The house is comfortable and spacious.',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Manager',
  },
  {
    name: 'James, Brown',
    text: 'A very comfortable and quiet place to live. Perfect for work!',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Employee',
  },
  {
    name: 'Chris, Ford',
    text: 'I love the location, it’s near everything I need!',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Employee',
  },
  {
    name: 'Rachel, Green',
    text: 'I found my ideal space, and the customer service was amazing.',
    image: '/assets/renterImages/renterimage.jpg',
    status: '-Student',
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-black text-center text-black mb-10">
        What Our Tenants Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="py-20"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl shadow-md p-6 text-center w-full max-w-md mx-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 text-base mb-4">{testimonial.text}</p>
              <h3 className="font-semibold text-gray-600">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.status}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
