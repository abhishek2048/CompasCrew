import React,{useState,useEffect} from 'react';
import Cardsbottom from '../Pages/Cardsbottom';

const OurPackages = () => {

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/packages') // Assuming your backend is running on localhost:5000
      .then(response => response.json())
      .then(data => {
        console.log('Data from backend:', data);
        setPackages(data); // Update the state with the received data
      })
      .catch(error => console.error('Error fetching data from backend:', error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="section-title text-center mt-10 mb-3 pb-2 w-50 mx-auto flex flex-col items-center">
          <h2 className="m-0 text-4xl ">Our <span className='text-red-500'>Top Packages</span></h2>
          <p className="mb-0 mt-2">Travel has helped us to understand the meaning of life and it has helped us become better people. <br /> Each time we travel, we see the world with new eyes.</p>
        </div>
      </div>
      <div className='mx-auto mt-3'>
        <Cardsbottom data={packages}/>
      </div>
    </>
  );
}

export default OurPackages;



