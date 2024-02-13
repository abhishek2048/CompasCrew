import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import BookingCard from './BookingCard';
const BookingPage = (props) => {

  const location = useLocation();
  const { cardData } = location.state || {};

  useEffect(() => {
    console.log("helloooo here is the carddata", cardData);
  }, [cardData]);

  const [formData, setFormData] = useState({
    booking_type: '',
    desc: '',
    booked_by: '',
    total_persons: '',
    mail: '',
    mobile: '',
    pkg: '',
    state:cardData.state,
    city:cardData.city,
    descr: ''
  });
  // state,city,attraction,rate,discount,days,nights
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleSubmit = async (e) => {
    {console.log("checking booking details",formData)}
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/confirm-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setBookingStatus('success');
        {console.log("Sucess")}
      } else {
        setBookingStatus('error');
        {console.log("error")}
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setBookingStatus('error');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <section className="blog trending destination-b pb-6 ">
        <div className="container w-3/5 mx-24 mt-20">
          <div className="booking-box bg-white p-6 rounded shadow-md">
            <div className="customer-information mb-4">
              <h3 className="border-b pb-2 mb-4 text-2xl font-bold">Traveller Information</h3>
              <form onSubmit={handleSubmit} className="mb-4">
                <h5 className="mb-2 text-lg font-semibold">Please Fill The Details</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">Type</label>
                      <div className="input-box">
                        <select
                          className="niceSelect p-2 border rounded w-full"
                          id="booking_type"
                          value={formData.booking_type}
                          onChange={handleInputChange}
                        >
                          <option value="">Select</option>
                          <option value="Group">Group</option>
                          <option value="Solo">Solo</option>
                          <option value="Women">Women</option>
                          <option value="Family">Family</option>
                          <option value="Friends">Friends</option>
                          {/* Add more options */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">Name</label>
                      <input
                        type="text"
                        id="booked_by"
                        value={formData.booked_by}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">No. Of Persons</label>
                      <input
                        type="text"
                        id="total_persons"
                        value={formData.total_persons}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                        placeholder="No. Of Persons"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        id="mail"
                        value={formData.mail}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">Phone</label>
                      <input
                        type="text"
                        id="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                        placeholder="Phone No."
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">Package Name</label>
                      <input
                        type="text"
                        id="pkg"
                        value={cardData.name}
                        disabled
                        className="p-2 border rounded w-full"
                        placeholder={cardData.name}
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-group">
                      <label className="block text-gray-700">Description</label>
                      <textarea
                        id="descr"
                        value={formData.descr}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                        placeholder="Enter any other requirements/message."
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="nir-btn mt-4 ">
                  CONFIRM BOOKING
                </button>
                {bookingStatus === 'success' && (
                  <p className="text-green-600 mt-2">Booking confirmed! We'll reach out to you soon.</p>
                )}
                {bookingStatus === 'error' && (
                  <p className="text-red-600 mt-2">There was an error processing your booking. Please try again later.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <BookingCard /> */}
    </>
  );
};

export default BookingPage;
