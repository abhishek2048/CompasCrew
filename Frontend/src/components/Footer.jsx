import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Increased the height of the footer */}
      <div className="flex justify-evenly items-start"> {/* Added items-start */}
        {/* FooterCrad */}
        <div className="-ml-20 -mt-10 pt-5 bubbles footermain rounded-lg shadow-lg w-96 h-80"> {/* Increased height to h-80 */}
          <div className="footer-upper pb-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                  <div className="footer-about bg-white p-3 rounded text-black"> {/* Set text color to black */}
                    <img src="images/logo.png" alt="" />
                    <p className="mt-2">
                      We offer a total of 100+ tours and holidays throughout India. Combined, we have received 1500+ customer reviews with an average rating of 5 out of 5 stars.
                    </p>
                    <ul>
                      <li><strong>Call Us:</strong> +91-8179727584</li>
                      <li><strong>Location:</strong> F-6, Rajputana Tower-A, Main Khatipura Road, Jaipur, 302012</li>
                      <li><strong>Email:</strong> <a href="mailto:compasscrew.treks@gmail.com">compasscrew.treks@gmail.com</a></li>
                      <li className="mb-1"><strong>Website:</strong> www.compasscreww.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="copyright-inner d-md-flex align-items-center justify-content-between">
                <div className="copyright-text mx-1">
                  <p className="m-0">2023 CompassCrew. All rights reserved.</p> {/* Removed white class */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Footer Items */}
        <ul className="flex flex-col items-center text-white mt-10"> {/* Set text color to white */}
          <li className="font-bold underline mb-2">Company</li>
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Customer Service</li>
        </ul>
        <ul className="flex flex-col items-center text-white mt-10"> {/* Set text color to white */}
          <li className="font-bold underline mb-2">Services</li>
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Customer Service</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
