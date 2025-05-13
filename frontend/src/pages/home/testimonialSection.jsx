import React from 'react';
import './testimonialCarousel.css';

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
    status: '-CEO safeguard',
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
];

const TestimonialCarousel = () => {
  // Duplicate list to enable smooth infinite loop
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        What Our Tenants Say
      </h2>

      <div className="w-full overflow-hidden">
        <div className="scroll-wrapper">
          {duplicated.map((item, idx) => (
            <div className="slide" key={idx}>
              <div className="bg-white rounded-xl shadow-md p-6 text-center w-[250px] sm:w-[280px] md:w-[300px] mx-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <p className="text-gray-700 text-base mb-4">{item.text}</p>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
