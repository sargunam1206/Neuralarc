import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeClass =
    "text-[#E31C24] border-b-2 border-[#E31C24] pb-1 transition";
  const inactiveClass = "hover:text-[#E31C24] transition";

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner - Always visible */}
      <div className="bg-[#2A6EBB] text-white text-sm py-2 px-6 flex justify-between items-center">
        <span>📞 +91 98765 43210</span>
        <button className="bg-[#E31C24] px-3 py-1 rounded-md text-sm hover:bg-red-700 transition">
          Request a Callback
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="NeuralArc Logo" className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-[#1E1E1E] relative">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ServiceList"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Services
              </NavLink>
            </li>

            {/* Dropdown Menu for Products */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="hover:text-[#E31C24]">Products ▾</button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md border">
                  <li>
                    <NavLink
                      to="/ProducteList/iot"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#E31C24] font-medium bg-gray-100"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      IoT Solutions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/datascience"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#E31C24] font-medium bg-gray-100"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      Data Science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/software"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#E31C24] font-medium bg-gray-100"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      Software Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/training"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#E31C24] font-medium bg-gray-100"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      Training
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/TrainingList"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Trainings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-[#E31C24] text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
            >
              Get in Touch
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#2A6EBB] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-[#1E1E1E]">
            <NavLink
              to="/ServiceList"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>

            {/* Dropdown for Mobile */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left hover:text-[#E31C24] py-2"
              >
                Products ▾
              </button>
              {isDropdownOpen && (
                <div className="ml-4 space-y-2">
                  <NavLink
                    to="/products/iot"
                    className={({ isActive }) =>
                      isActive ? "text-[#E31C24]" : "hover:text-[#E31C24]"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    IoT Solutions
                  </NavLink>
                  <NavLink
                    to="/products/datascience"
                    className={({ isActive }) =>
                      isActive ? "text-[#E31C24]" : "hover:text-[#E31C24]"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Data Science
                  </NavLink>
                  <NavLink
                    to="/products/software"
                    className={({ isActive }) =>
                      isActive ? "text-[#E31C24]" : "hover:text-[#E31C24]"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Software Development
                  </NavLink>
                  <NavLink
                    to="/products/training"
                    className={({ isActive }) =>
                      isActive ? "text-[#E31C24]" : "hover:text-[#E31C24]"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Training
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/trainings"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              onClick={() => setIsOpen(false)}
            >
              Trainings
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
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
