import React from 'react'
import { useNavigate } from 'react-router-dom';

const BookingCard = ({cardData}) => {

  const navigate = useNavigate();


  const handleSubmit = () => {
    navigate('/booking', { state: { cardData } });
  };
    return (
      <div className='group relative mx-auto my-auto  w-full border border-teal-500 hover:border-2 h-[390px] overflow-hidden rounded-lg sm:w-[300px] transition-all'>
        <div className="relative">
          <img
            // src={cardData.img1}
            src = "https://i.pinimg.com/564x/ad/ea/21/adea2119d266dc783c056378ece2807b.jpg"
            alt="ui/ux review check"
            className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
          />
          {/* {console.log(" here",cardData.img1)} */}
         
        </div>
        <div className='p-3 flex flex-col gap-2'>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-blue-gray text-xl font-semibold">{cardData.name}</h2>
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
              5.0
            </div>
          </div>
          <p className="'text-4xl font-semibold line-clamp-2">
          {/* <div dangerouslySetInnerHTML={{ __html: cardData.attractions }} /> */}
          for {cardData.days} days and {cardData.nights} night
          </p>
        </div>
        
        <div className="pt-3 pb-0">
          {/* <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"> */}
          <button className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2' onClick={handleSubmit}>
            Book @ {cardData.rate} <br/>
            {/* for {cardData.days} days and {cardData.night} nights */}
          </button>
        </div>
      </div>
    );
  }

  export default BookingCard;