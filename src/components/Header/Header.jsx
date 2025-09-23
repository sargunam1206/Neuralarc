import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const activeClass = "text-[#E31C24] border-b-2 border-[#E31C24] pb-1 transition";
  const inactiveClass = "hover:text-[#E31C24] transition";

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu when switching to desktop view
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const products = [
    { name: "IoT Solutions", path: "/products/iot" },
    { name: "Data Science", path: "/products/datascience" },
    { name: "Software Development", path: "/products/software" },
    { name: "Training", path: "/products/training" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner - Hidden on mobile */}
      <div className="hidden sm:flex bg-[#2A6EBB] text-white text-sm py-2 px-4 sm:px-6 justify-between items-center">
        <span className="truncate">📞 +91 98765 43210</span>
        <button className="bg-[#E31C24] px-3 py-1 rounded-md text-sm hover:bg-red-700 transition whitespace-nowrap">
          Request a Callback
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo - Smaller on mobile */}
          <Link to="/">
            <img 
              src={logo} 
              alt="NeuralArc Logo" 
              className="h-10 sm:h-12 md:h-16 transition-all duration-300" 
            />
          </Link>

          {/* Desktop & Tablet Menu - Hidden on mobile */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 font-medium text-[#1E1E1E] relative items-center">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ServiceList" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Services
              </NavLink>
            </li>

            {/* Enhanced Dropdown for Products */}
            {/* <li className="relative dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-[#E31C24] flex items-center gap-1"
              >
                Products ▾
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50 py-2">
                  {products.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 text-[#E31C24] font-medium bg-gray-100"
                            : "block px-4 py-2 hover:bg-gray-100"
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li> */}
             <li>
              <NavLink to="/ProducteList" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Product
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/TrainingList" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                Trainings
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                About
              </NavLink>
            </li>
          </ul>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-[#E31C24] text-white px-4 py-2 rounded-md hover:bg-red-700 transition whitespace-nowrap"
            >
              Get in Touch
            </NavLink>
          </div>

          {/* Mobile Hamburger - Visible only on mobile */}
          <button 
            className="md:hidden text-[#2A6EBB] text-2xl" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu - Appears when hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-[#1E1E1E] border-t">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block py-2 ${isActive ? activeClass : inactiveClass}`} 
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/ServiceList" 
              className={({ isActive }) => `block py-2 ${isActive ? activeClass : inactiveClass}`} 
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left py-2 hover:text-[#E31C24] flex items-center justify-between"
              >
                <span>Products</span>
                <span>{isDropdownOpen ? "▴" : "▾"}</span>
              </button>
              {isDropdownOpen && (
                <div className="ml-4 space-y-2 mt-2 border-l-2 border-gray-200 pl-4">
                  {products.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className={({ isActive }) => 
                        `block py-2 ${isActive ? "text-[#E31C24] font-medium" : "hover:text-[#E31C24]"}`
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `block py-2 ${isActive ? activeClass : inactiveClass}`} 
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
            
            <NavLink 
              to="/TrainingList" 
              className={({ isActive }) => `block py-2 ${isActive ? activeClass : inactiveClass}`} 
              onClick={() => setIsOpen(false)}
            >
              Trainings
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => `block py-2 ${isActive ? activeClass : inactiveClass}`} 
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className="block bg-[#E31C24] text-white px-4 py-2 rounded-md text-center hover:bg-red-700 mt-2" 
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;