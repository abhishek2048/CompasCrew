import React from 'react';

const DiscountActionSection = () => {
  return (
    <section className="discount-action pt-0">
      <div className="container">
        <div className="call-banner">
          <div className="row items-center">
            <div className="col-lg-6 col-md-6 p-0">
              <div className="call-banner-inner text-center bg-navy p-8">
                <h4 className="text-white">SPECIAL OFFERS UPTO 25% OFF</h4>
                <h2 className="text-white text-2xl mb-4">SPEND THE BEST VACATION WITH US <br/>The nights of Unknown Destinations</h2>
                <a href="./cc-packages.php" className="bg-white text-navy py-2 px-4 rounded-full inline-block hover:bg-navy hover:text-white transition duration-300 ease-in-out">View Details <i className="fa fa-arrow-right white pl-1"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-main pt-0 pb-6">
      <div className="container">
        <div className="counter text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-pink rounded-lg p-4">
              <i className="fa fa-users text-white mb-1"></i>
              <h3 className="text-white text-3xl mb-0">100</h3>
              <h4 className="text-white">Happy Customers</h4>
            </div>
            <div className="bg-pink rounded-lg p-4">
              <i className="fa fa-plane text-white mb-1"></i>
              <h3 className="text-white text-3xl mb-0">50</h3>
              <h4 className="text-white">Amazing Tours</h4>
            </div>
            <div className="bg-pink rounded-lg p-4">
              <i className="fa fa-chart-bar text-white mb-1"></i>
              <h3 className="text-white text-3xl mb-0">3472</h3>
              <h4 className="text-white">In Business</h4>
            </div>
            <div className="bg-pink rounded-lg p-4">
              <i className="fa fa-support text-white mb-1"></i>
              <h3 className="text-white text-3xl mb-0">523</h3>
              <h4 className="text-white">Support Cases</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DiscountActionSection, CounterSection };
