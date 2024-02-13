import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="map mb-10 w-full" style={{ height: '80vh' }}>
        {/* Google Maps iframe */}
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <iframe
            title="google-map"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://maps.google.com/maps?q=Mount%20View%20Colony%2C%20Dehradun&t=&z=14&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="contact-info mt-0 bg-gray-200 p-8 rounded-lg w-full md:w-4/5 lg:w-4/5">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">INFORMATION ABOUT US</h3>
            <p className="mb-4">
              Travel has helped us to understand the meaning of life and it has helped us become better people. Each time
              we travel, we see the world with new eyes.
            </p>
            <div className="flex items-center bg-white p-4 rounded-lg mb-4">
              <FaMapMarkerAlt className="text-2xl mr-4" />
              <div>
                <p className="m-0 font-semibold">Mount View Colony, Near IT Park, Mangoria Wali Lane, Sahastradhara Road,</p>
                <p className="m-0">Dehradun</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg mb-4">
              <FaPhoneAlt className="text-2xl mr-4" />
              <div>
                <p className="m-0">+91-8179727584</p>
                <p className="m-0">+91-8179727584</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg">
              <FaEnvelope className="text-2xl mr-4" />
              <div>
                <p className="m-0">
                  <a href="mailto:compasscrew.treks@gmail.com" className="text-blue-500">compasscrew.treks@gmail.com</a>
                </p>
                <p className="m-0">
                  <a href="mailto:contact@compasscreww.com" className="text-blue-500">contact@compasscreww.com</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div id="contact-form1" className="contact-form">
              <h3 className="text-2xl font-bold mb-4">Keep in Touch</h3>
              <p className="mb-4">
                Want to be notified when we launch a new update? Just sign up and we'll send you a notification by email.
              </p>
              <form className="mt-10" method="post" action="#" name="contactform" id="contactform">
                <div className="mb-4">
                  <input type="text" name="first_name" className="w-full bg-white px-4 py-2 rounded-lg" id="fname" placeholder="First Name" />
                </div>
                <div className="mb-4">
                  <input type="text" name="last_name" className="w-full bg-white px-4 py-2 rounded-lg" id="lname" placeholder="Last Name" />
                </div>
                <div className="mb-4">
                  <input type="email" name="email" className="w-full bg-white px-4 py-2 rounded-lg" id="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <input type="text" name="phone" className="w-full bg-white px-4 py-2 rounded-lg" id="phnumber" placeholder="Phone" />
                </div>
                <div className="mb-4">
                  <textarea name="comments" className="w-full bg-white px-4 py-2 rounded-lg" placeholder="Enter a message"></textarea>
                </div>
                <div className="text-right">
                  <input type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600" id="submit" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
