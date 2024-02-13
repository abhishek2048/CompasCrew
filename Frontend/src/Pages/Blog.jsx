import { FiClock, FiMapPin, FiCheck, FiX } from 'react-icons/fi'; // Import the necessary icons

// const DestinationDetails = () => {
//   // Define the destination data directly within the component
//   const destination = {
//     name: "Destination Name",
//     city: "City",
//     state: "State",
//     full_desc: "Description of the destination.",
//     img1: "image-url.jpg",
//     id: "destination-id",
//     days: "3",
//     nights: "2",
//     rate: "2000",
//     discount: "200",
//     attractions: "Attractions of the destination."
//   };

//   return (
//     <section className="blog trending destination-b">
//       <div className="container">
//         <div className="row flex-lg-row-reverse">
//           <div className="col-md-12 col-xs-12">
//             <div className="single-content">
//               <div className="description" id="description">
//                 <div className="single-full-title border-b mb-2 pb-2">
//                   <div className="single-title">
//                     <h3 className="mb-1" style={{ textTransform: 'uppercase' }}>{destination.name}</h3>
//                     <div className="rating-main d-sm-flex align-items-center">
//                       <p className="mb-0 mr-2"><FiMapPin /> {destination.city}, {destination.state}</p>
//                       <div className="rating mr-2">
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star checked"></span>
//                         <span className="fa fa-star checked"></span>
//                       </div>
//                       <span>(1,000+ Positive Reviews)</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="description-inner mb-2">
//                   <h4>Highlight Of The Package</h4>
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6 mb-2 pr-2" style={{ textAlign: 'justify' }}>
//                       <p style={{ textAlign: 'justify' }}>{destination.full_desc}</p>
//                     </div>
//                     <div className="col-lg-6 col-md-6 mb-2 pr-2">
//                       <img src={`admin/file-package/${destination.img1}`} style={{ maxHeight: '700px' }} alt="Package Image" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-btn">
//                   <a href={`./booking.php?pid=${destination.id}`} className="nir-btn">Book Now</a>
//                 </div>
//                 <div className="tour-includes mb-2">
//                   <table>
//                     <tbody>
//                       <tr>
//                         <td><FiClock /> {destination.days} Days</td>
//                         <td><FiClock /> {destination.nights} Nights</td>
//                       </tr>
//                       <tr>
//                         <td><FiMapPin /> Rate INR : {destination.rate}/- Only</td>
//                         <td><FiMapPin /> Discount INR : {destination.discount}/-</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="description-inner mb-2">
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6 mb-2 pr-2">
//                       <div className="desc-box">
//                         <h5 className="mb-1">Price Includes</h5>
//                         <ul>
//                           <li><FiCheck /> Trek equipments like a sleeping bag, kitchen & dining tent, utensils, mattress, tent, toilet tent, and crampon (if needed).</li>
//                           <li><FiCheck /> Microspikes and Gaitors  for safety of our trekkers</li>
//                           <li><FiCheck /> All the needed entry fees along with permits</li>
//                           <li><FiCheck /> First aid medical kits, oxygen cylinder as well as stretcher.</li>
//                           <li><FiCheck /> Meals during the trek only vegetarian.</li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 mb-2 pl-2">
//                       <div className="desc-box">
//                         <h5 className="mb-1">Price Excludes</h5>
//                         <ul>
//                           <li><FiX /> The food at the time of transit</li>
//                           <li><FiX />  All kinds of personal expenditures</li>
//                           <li><FiX /> Anything that we have not mentioned beforehand</li>
//                           <li><FiX /> Mules or porter to carry private baggage</li>
//                           <li><FiX /> Any kind of emergency evacuation charges.</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="description-inner mb-4" style={{ textAlign: 'justify' }}>
//                   <h4>Top Attractions</h4>
//                   <p>{destination.attractions}</p>
//                 </div>
//                 <div className="form-btn">
//                   <a href={`./booking.php?pid=${destination.id}`} className="nir-btn">Book Now</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DestinationDetails;

const DestinationDetails = () => {
    // Define the destination data directly within the component
    const destination = {
      name: "Destination Name",
      city: "City",
      state: "State",
      full_desc: "Description of the destination.",
      img1: "image-url.jpg",
      id: "destination-id",
      days: "3",
      nights: "2",
      rate: "2000",
      discount: "200",
      attractions: "Attractions of the destination."
    };
  
    return (
      <section className="blog trending destination-b">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col-md-12 col-xs-12">
              <div className="single-content">
                <div className="description" id="description">
                  <div className="flex justify-between">
                    <div className="destination-info">
                      <h3 className="mb-1 text-xl font-bold">{destination.name}</h3>
                      <p className="mb-2"><FiMapPin /> {destination.city}, {destination.state}</p>
                      <div className="rating-main flex items-center mb-2">
                        <div className="rating mr-2">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <span className="text-sm">(1,000+ Positive Reviews)</span>
                      </div>
                      <div className="description-inner mb-2">
                        <h4 className="text-lg font-semibold">Highlight Of The Package</h4>
                        <p className="text-sm">{destination.full_desc}</p>
                      </div>
                    </div>
                    <div className="destination-image">
                      <div className="mb-2 pr-4">
                        <img src={`admin/file-package/${destination.img1}`} style={{ maxHeight: '700px' }} alt="Package Image" />
                      </div>
                      <div className="form-btn">
                        <a href={`./booking.php?pid=${destination.id}`} className="nir-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="tour-includes mb-2">
                    <table>
                      <tbody>
                        <tr>
                          <td><FiClock /> {destination.days} Days</td>
                          <td><FiClock /> {destination.nights} Nights</td>
                        </tr>
                        <tr>
                          <td><FiMapPin /> Rate INR : {destination.rate}/- Only</td>
                          <td><FiMapPin /> Discount INR : {destination.discount}/-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="description-inner mb-2">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 mb-2 pr-2">
                        <div className="desc-box">
                          <h5 className="mb-1">Price Includes</h5>
                          <ul>
                            <li><FiCheck /> Trek equipments like a sleeping bag, kitchen & dining tent, utensils, mattress, tent, toilet tent, and crampon (if needed).</li>
                            <li><FiCheck /> Microspikes and Gaitors  for safety of our trekkers</li>
                            <li><FiCheck /> All the needed entry fees along with permits</li>
                            <li><FiCheck /> First aid medical kits, oxygen cylinder as well as stretcher.</li>
                            <li><FiCheck /> Meals during the trek only vegetarian.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-2 pl-2">
                        <div className="desc-box">
                          <h5 className="mb-1">Price Excludes</h5>
                          <ul>
                            <li><FiX /> The food at the time of transit</li>
                            <li><FiX />  All kinds of personal expenditures</li>
                            <li><FiX /> Anything that we have not mentioned beforehand</li>
                            <li><FiX /> Mules or porter to carry private baggage</li>
                            <li><FiX /> Any kind of emergency evacuation charges.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="description-inner mb-4" style={{ textAlign: 'justify' }}>
                    <h4>Top Attractions</h4>
                    <p>{destination.attractions}</p>
                  </div>
                  <div className="form-btn">
                    <a href={`./booking.php?pid=${destination.id}`} className="nir-btn">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DestinationDetails;
  