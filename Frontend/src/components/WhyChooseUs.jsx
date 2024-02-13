import React from 'react';
import { FaPhone, FaGlobe, FaBuilding, FaMapPin } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16"> {/* Added padding and adjusted container width */}
        <div className="max-w-screen-lg mx-auto">
          <section className="py-8 md:py-12 lg:py-16"> {/* Adjusted padding */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="px-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2> {/* Adjusted heading size */}
                  <p className="text-gray-600 text-sm md:text-base mb-6">Top Tour Operators and Travel Agency. We offer a total of 793 tours and holidays throughout the world. Combined, we have received 1532 customer reviews and an average rating of 5 out of 5 stars.</p>
                  <p className="text-gray-600 text-sm md:text-base mb-6">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                  <ul className="list-disc list-inside">
                    <li>Safety Travel System</li>
                    <li>Budget-Friendly Tour</li>
                    <li>Expert Trip Planning</li>
                    <li>Fast Communication</li>
                    <li>Right Solution & Guide</li>
                    <li>24/7 Customer Support</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Adjusted grid columns */}
                    <img src="images/new-deal/deal3.jpg" alt="" className="w-full" />
                    <img src="images/new-deal/deal5.jpg" alt="" className="w-full" style={{ marginTop: '-30px' }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-screen-lg mx-auto">
          <section className="py-8 md:py-12 lg:py-16"> {/* Adjusted padding */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="why-us-item text-center bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="why-us-icon mb-4">
                  <FaPhone className="text-red-500 text-3xl md:text-4xl mx-auto mt-2" /> {/* Adjusted icon size */}
                </div>
                <div className="why-us-content">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-300 transition-colors duration-300">Advice & Support</h4> {/* Adjusted heading size */}
                  <p className="text-gray-600 text-sm md:text-base">Travel worry-free knowing that we're here if you need us, 24 hours a day</p>
                </div>
              </div>
              
              <div className="why-us-item text-center bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="why-us-icon mb-4">
                  <FaGlobe className="text-red-500 text-3xl md:text-4xl mx-auto mt-2" />
                </div>
                <div className="why-us-content">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-300 transition-colors duration-300">Air Ticketing</h4>
                  <p className="text-gray-600 text-sm md:text-base">Travel worry-free knowing that we're here if you need us, 24 hours a day</p>
                </div>
              </div>
              <div className="why-us-item text-center bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="why-us-icon mb-4">
                  <FaBuilding className="text-red-500 text-3xl md:text-4xl mx-auto mt-2" />
                </div>
                <div className="why-us-content">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-300 transition-colors duration-300">Hotel Services</h4>
                  <p className="text-gray-600 text-sm md:text-base">Travel worry-free knowing that we're here if you need us, 24 hours a day</p>
                </div>
              </div>
              <div className="why-us-item text-center bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="why-us-icon mb-4">
                  <FaMapPin className="text-red-500 text-3xl md:text-4xl mx-auto mt-2" />
                </div>
                <div className="why-us-content">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-300 transition-colors duration-300">Tour Packages</h4>
                  <p className="text-gray-600 text-sm md:text-base">Travel worry-free knowing that we're here if you need us, 24 hours a day</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
