import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jared Erondu',
      role: 'Supervisor',
      image: 'images/testimonial/img1.jpg',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry\'s standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.'
    },
    {
      id: 2,
      name: 'Cadic Vegeta',
      role: 'Sr. Chef',
      image: 'images/testimonial/img2.jpg',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry\'s standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.'
    },
    {
      id: 3,
      name: 'Jonathan Beri',
      role: 'Manager',
      image: 'images/testimonial/img3.jpg',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry\'s standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.'
    }
  ];

  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials.slice(0, 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonials((prevTestimonials) => {
        const nextIndex = (prevTestimonials[1]?.id % testimonials.length) + 1;
        const nextTestimonial = testimonials.find((testimonial) => testimonial.id === nextIndex);
        return [prevTestimonials[1], nextTestimonial];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="testimonial py-6 w-full mx-auto my-6">
      <div className="container">
        <div className="section-title text-center mb-5 pb-2">
          <h2 className="m-0 text-3xl font-semibold">What <span className="text-red-500">People Say About Us</span></h2>
          <p className="mt-2 mb-0 text-gray-600 text-sm">Travel has helped us to understand the meaning of life and it has helped us become better people. <br/> Each time we travel, we see the world with new eyes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="item bg-white rounded-lg shadow-lg p-6 relative">
              <FaQuoteLeft className="fa-quote-left mb-2 text-pink text-3xl absolute top-0 right-0 mt-2 mr-2" />
              <div className="testimonial-item1 text-center">
                <div className="details">
                  <p className="mt-4 text-gray-600">{testimonial.content}</p>
                </div>
                <div className="author-info mt-4 flex items-center justify-center">
                  <img src={testimonial.image} alt="" className="w-12 h-12 rounded-full" />
                  <div className="author-title ml-4">
                    <h4 className="m-0 text-pink">{testimonial.name}</h4>
                    <span className="text-gray-600 text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
