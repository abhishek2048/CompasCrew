import React from 'react';

const AboutUsSection = () => {
  return (
    <>
      <div className="container w-4/5 mx-auto mt-10">
        <div className="about-image-box flex justify-between">
          {/* Section 1 */}
          <section className="w-1/2 m-auto">
            <div className="about-image">
              <img src="images/destination/destination12.jpg" alt="" className="max-w-full h-auto" />
            </div>
          </section>

          {/* Section 2 */}
          <section className="w-1/2 m-auto px-10">
            <div className="about-content">
              <h4 className="mb-1 text-blue-500 font-weight-normal">About CompassCrew</h4>
              <h2 className="text-3xl font-bold mb-3">We're truly dedicated to making your travel experience the best</h2>
              <p className="mb-3 text-gray-700">
                Top Tour Operators and Travel Agency. We offer a total of 100+ tours and holidays throughout all India. Combined, we have received 632 customer reviews and an average rating of 5 out of 5 stars.
                <br /><br />
                Travel has helped us understand the meaning of life and has helped us become better people. Each time we travel, we see the world with new eyes.
              </p>
              <div className="about-imagelist">
                <ul className="flex justify-between">
                  <li className="mr-2">
                    <img src="images/destination/destination7.jpg" alt="" className="max-w-full h-auto" />
                  </li>
                  <li className="mr-2">
                    <img src="images/destination/destination5.jpg" alt="" className="max-w-full h-auto" />
                  </li>
                  <li className="mr-2">
                    <img src="images/destination/destination6.jpg" alt="" className="max-w-full h-auto" />
                  </li>
                  <li className="mr-2">
                    <img src="images/destination/destination3.jpg" alt="" className="max-w-full h-auto" />
                  </li>
                  <li>
                    <img src="images/destination/destination4.jpg" alt="" className="max-w-full h-auto" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
