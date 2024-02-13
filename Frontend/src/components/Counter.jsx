import React from 'react';
import { FaUsers, FaPlane, FaChartBar, FaHeart } from 'react-icons/fa';

const Counter = () => {
  return (
    <section className="ml-20 counter-main pt-0 pb-6">
      <div className="container">
        <div className="counter text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
            <div className="w-60 col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
              <div className="counter-item bg-red-500 text-white p-4 rounded-lg flex flex-col items-center justify-center">
                <FaUsers className="mb-1 text-4xl" />
                <h3 className="value mb-0 text-3xl font-bold">100</h3>
                <h4 className="m-0">Happy Customers</h4>
              </div>
            </div>
            <div className="w-60 col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
              <div className="counter-item bg-red-500 text-white p-4 rounded-lg flex flex-col items-center justify-center">
                <FaPlane className="mb-1 text-4xl" />
                <h3 className="value mb-0 text-3xl font-bold">50</h3>
                <h4 className="m-0">Amazing Tours</h4>
              </div>
            </div>
            <div className="w-60 col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
              <div className="counter-item bg-red-500 text-white p-4 rounded-lg flex flex-col items-center justify-center">
                <FaChartBar className="mb-1 text-4xl" />
                <h3 className="value mb-0 text-3xl font-bold">3472</h3>
                <h4 className="m-0">In Business</h4>
              </div>
            </div>
            <div className="w-60 col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
              <div className="counter-item bg-red-500 text-white p-4 rounded-lg flex flex-col items-center justify-center">
                <FaHeart className="mb-1 text-4xl" />
                <h3 className="value mb-0 text-3xl font-bold">523</h3>
                <h4 className="m-0">Support Cases</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
