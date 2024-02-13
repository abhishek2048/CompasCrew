import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/packages');
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="section-title text-center mb-3 pb-2 w-50 mx-auto flex flex-col items-center">
          <h2 className="m-0 text-4xl ">Find Your <span> Favourite Destination</span></h2>
          <p className="mb-0 mt-2 text-sm">Travel has helped us to understand the meaning of life and it has helped <br/>us become better people. Each time we travel, we see the world with new eyes.</p>
        </div>
      </div>
      <div className='mx-auto mt-3'>
        <div className='flex flex-wrap p-10 gap-7 w-4xl items-center overflow-hidden mx-auto'>
          {packages.map((pkg, index) => (
            <div key={index} className='group relative mx-auto my-auto w-full border border-teal-500 hover:border-2 h-[390px] overflow-hidden rounded-lg sm:w-[300px] transition-all'>
              <div className="relative">
                <img
                  src={pkg.image_url} // Assuming there's a column for image URL in your tbl_package table
                  alt={pkg.package_name}
                  className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </div>
              <div className='p-3 flex flex-col gap-2'>
                <div className="mb-3 flex items-center justify-between">
                  <h5 className="text-blue-gray font-medium">{pkg.package_name}</h5>
                  <div className="flex items-center gap-1.5 font-normal text-blue-gray">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {pkg.package_rating}
                  </div>
                </div>
                <p className="'text-lg font-semibold line-clamp-2">
                  {pkg.package_description}
                </p>
              </div>
              <div className="pt-3 pb-0">
                <button className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'>
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Packages;
