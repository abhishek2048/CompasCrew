import React from 'react';

const AboutUsHero = () => {
  return (
    <div className='h-{200px}'>
    <div className="relative h-screen"> {/* Decreased height to 20% of the screen height */}
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('path_to_your_image.jpg')`, // Replace 'path_to_your_image.jpg' with the actual path to your image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          {/* Small heading */}
          <h2 className="text-xl font-bold uppercase mb-4">Home | About Us</h2>
          
          {/* Large heading */}
          <h1 className="text-4xl md:text-4xl font-bold mb-8">About Us</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsHero;
