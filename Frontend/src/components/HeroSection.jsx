import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/564x/2e/ac/4e/2eac4ea0bd5605b75149a9cb0fc14f86.jpg')", // Replace 'https://example.com/your-background-image.jpg' with the actual image URL
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Explore Your Life<br />
          Travel Where You Want
        </h1>
        <p className="text-sm md:text-base lg:text-xl">Discover new adventures with us</p>
      </div>
    </div>
  );
};

export default HeroSection;
