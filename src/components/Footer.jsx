import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10">
        
        {/* 🔹 Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E31C24]">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#E31C24]" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#E31C24]" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#E31C24]" />
              <span>info@neuralarc.com</span>
            </li>
          </ul>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E31C24]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-[#E31C24]">Services</Link></li>
            <li><Link to="/products" className="hover:text-[#E31C24]">Products</Link></li>
            <li><Link to="/research" className="hover:text-[#E31C24]">Research</Link></li>
            <li><Link to="/trainings" className="hover:text-[#E31C24]">Trainings</Link></li>
            <li><Link to="/about" className="hover:text-[#E31C24]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#E31C24]">Contact</Link></li>
          </ul>
        </div>

        {/* 🔹 Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E31C24]">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get updates on new products, research, and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#E31C24] px-4 py-2 rounded-r-md hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} NeuralArc. All rights reserved. |{" "}
          <Link to="/privacy" className="hover:text-[#E31C24]">Privacy Policy</Link> |{" "}
          <Link to="/terms" className="hover:text-[#E31C24]">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
