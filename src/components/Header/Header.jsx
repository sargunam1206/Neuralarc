import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Handle scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow bg-white"
      }`}
    >
      {/* 🔹 Topbar - hides on scroll */}
      {!scrolled && (
        <div className="bg-[#2A6EBB] text-white text-sm py-2 px-6 flex justify-between items-center transition-all duration-300">
          <span>📞 +91 98765 43210</span>
          <button className="bg-[#E31C24] px-3 py-1 rounded-md text-sm hover:bg-red-700 transition">
            Request a Callback
          </button>
        </div>
      )}

      {/* 🔹 Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="NeuralArc Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-10" : "h-12 md:h-16"
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-[#1E1E1E] relative">
            <li>
              <Link to="/services" className="hover:text-[#E31C24]">
                Services
              </Link>
            </li>

            {/* 🔹 Dropdown Menu for Products */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="hover:text-[#E31C24]">Products ▾</button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md border">
                  <li>
                    <Link
                      to="/products/iot"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      IoT Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/datascience"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/software"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Software
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/research" className="hover:text-[#E31C24]">
                Research
              </Link>
            </li>
            <li>
              <Link to="/trainings" className="hover:text-[#E31C24]">
                Trainings
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#E31C24]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E31C24]">
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/demo"
              className="bg-[#E31C24] text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#2A6EBB]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-[#1E1E1E]">
            <Link to="/services" className="block hover:text-[#E31C24]">
              Services
            </Link>

            {/* Dropdown for Mobile */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left hover:text-[#E31C24]"
              >
                Products ▾
              </button>
              {isDropdownOpen && (
                <div className="ml-4 space-y-2">
                  <Link to="/products/iot" className="block hover:text-[#E31C24]">
                    IoT Solutions
                  </Link>
                  <Link
                    to="/products/datascience"
                    className="block hover:text-[#E31C24]"
                  >
                    Data Science
                  </Link>
                  <Link to="/products/software" className="block hover:text-[#E31C24]">
                    Software
                  </Link>
                </div>
              )}
            </div>

            <Link to="/research" className="block hover:text-[#E31C24]">
              Research
            </Link>
            <Link to="/trainings" className="block hover:text-[#E31C24]">
              Trainings
            </Link>
            <Link to="/about" className="block hover:text-[#E31C24]">
              About
            </Link>
            <Link to="/contact" className="block hover:text-[#E31C24]">
              Contact
            </Link>
            <Link
              to="/demo"
              className="block bg-[#E31C24] text-white px-4 py-2 rounded-md text-center hover:bg-red-700"
            >
              Get a Demo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
