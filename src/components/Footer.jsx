import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.jpg";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 py-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-10">
        {/* 🔹 Logo + Slogan */}
        <div>
          <img src={logo} alt="NeuralArc Logo" className="h-12 mb-3" />
          <p className="text-gray-600">Innovating Technology for a Smarter Tomorrow.</p>
        </div>

        {/* 🔹 Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2A6EBB]">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#2A6EBB]" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#2A6EBB]" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#2A6EBB]" />
              <span>info@neuralarc.com</span>
            </li>
          </ul>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2A6EBB]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-[#2A6EBB]">Services</Link></li>
            <li><Link to="/products" className="hover:text-[#2A6EBB]">Products</Link></li>
            <li><Link to="/research" className="hover:text-[#2A6EBB]">Research</Link></li>
            <li><Link to="/trainings" className="hover:text-[#2A6EBB]">Trainings</Link></li>
            <li><Link to="/about" className="hover:text-[#2A6EBB]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#2A6EBB]">Contact</Link></li>
          </ul>
        </div>

        {/* 🔹 Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2A6EBB]">Subscribe</h3>
          <p className="text-gray-600 mb-4">Get updates on new products, research, and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none border"
            />
            <button
              type="submit"
              className="bg-blue-200 px-4 py-2 rounded-r-md hover:bg-blue-400 transition text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-700 text-sm">
        <p>
          © {new Date().getFullYear()} NeuralArc. All rights reserved. |{" "}
          <Link to="/privacy" className="hover:text-[#2A6EBB]">Privacy Policy</Link> |{" "}
          <Link to="/terms" className="hover:text-[#2A6EBB]">Terms & Conditions</Link>
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
