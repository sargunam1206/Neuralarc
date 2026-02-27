import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./components/Services";
import Productes from "./components/Productes";
import TrainingList from "./components/TrainingList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./components/Gallery";

import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import ServiceDetail from "./components/service-pages/ServiceDetail";




function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <Router>
       {/* WhatsApp Floating Icon – shows on all pages */}
      <ScrollToTop />
      <WhatsAppFloat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/Productes" element={<Productes/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/TrainingList" element={<TrainingList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
