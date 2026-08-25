import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#ffffff] py-10 relative" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-10">

        {/* 🔹 Logo + Slogan */}
        <div>
          <img src={logo} alt="NeuralArc Logo" className="h-12 mb-3" />
          <p className="">Innovating Technology for a Smarter Tomorrow.</p>
          {/* Social Media */}
<div>
 

  <div className="flex gap-4 mt-3">
    <a
     href="https://www.linkedin.com/company/neuralarc-global-private-limited/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2A6EBB] text-white hover:bg-[#1f5aa0] transition"
    >
      <FaLinkedinIn />
    </a>

  
    <a
      href="https://www.instagram.com/neuralarc_global?utm_source=qr&igsh=aTVrOXRpeDR0bDlh"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white hover:opacity-90 transition"
    >
      <FaInstagram />
    </a>
  </div>
</div>

        </div>

        {/* 🔹 Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2A6EBB]">Services</h3>
          <ul className="space-y-2 ">
            <li>Training & Certification</li>
            <li>Research & Development</li>
            <li>Products & Solutions</li>
          </ul>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2A6EBB]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-[#2A6EBB]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#2A6EBB]">Contact</Link></li>
            <li><Link to="/Productes" className="hover:text-[#2A6EBB]">Products</Link></li>
            <li><Link to="/TrainingList" className="hover:text-[#2A6EBB]">Trainings</Link></li>
          </ul>
        </div>

        {/* 🔹 Contact Info */}
    <div>
  <h3 className="text-xl font-semibold mb-4 text-[#2A6EBB]">
    Contact Us
  </h3>

  <ul className="space-y-4">
    {/* Address */}
    <li className="flex items-start gap-3">
      <FaMapMarkerAlt className="text-[#2A6EBB] mt-1 shrink-0" />
      <span className="leading-relaxed">
        T15, Arjun IT Park,<br />
        Arjun College of Technology,<br/>
                Thamaraikulam,<br />

        Chettikkapalayam,<br />
        Coimbatore 642 120.
      </span>
    </li>

    {/* Phone */}
    <li className="flex items-start gap-3">
      <FaPhoneAlt className="text-[#2A6EBB] mt-1 shrink-0" />
      <span>+91 95978 42418</span>
    </li>

    {/* Email */}
    <li className="flex items-start gap-3">
  <FaEnvelope className="text-[#2A6EBB] mt-1 shrink-0" />
  <a
    href="mailto:neuralarcteam@gmail.com"
    className="no-underline hover:no-underline hover:text-[#2A6EBB]"
  >
    neuralarcteam@gmail.com
  </a>
</li>
  </ul>
</div>

      </div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-700 text-sm">
        <p>
          © {new Date().getFullYear()} NeuralArc. All rights reserved.
        </p>
      </div>

      {/* 🔹 Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#2A6EBB] text-white p-3 rounded-full shadow-lg hover:bg-[#E31C24] transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
