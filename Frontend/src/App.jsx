import React from "react";
import LatestTourPackages from "./Pages/LatestTourPackages";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from './Pages/ContactUsPage'
import Packages from "./Pages/Pacakges";
import BookingPage from "./Pages/BookingPage";

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUsPage />} />
          <Route exact path="/contact" element={<ContactUsPage />} />
          <Route exact path="/packages" element={<Packages />} />

          <Route exact path="/" element={<LatestTourPackages />} />
          <Route exact path="/booking" element={<BookingPage />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
