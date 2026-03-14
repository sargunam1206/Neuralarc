import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();

  // 🔥 Animated underline classes
  const baseLinkClass =
    "relative pb-1 transition-colors duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:w-full after:bg-[#E31C24] " +
    "after:scale-x-0 after:origin-left after:transition-transform after:duration-300 " +
    "hover:after:scale-x-100";

  const activeLinkClass = "text-[#E31C24] after:scale-x-100";

  // ✅ Special active check for Services
  const isServicesActive =
    location.pathname === "/Services" ||
    location.pathname.startsWith("/services");

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white shadow-md py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="NeuralArc Logo"
              className="h-10 sm:h-12 md:h-16 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-lg space-x-6 lg:space-x-10 font-medium text-[#1E1E1E] relative items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Services"
                className={`${baseLinkClass} ${
                  isServicesActive ? activeLinkClass : ""
                }`}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Productes"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/TrainingList"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Trainings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-[#E31C24] text-white px-4 py-2 rounded-md hover:bg-red-700 transition whitespace-nowrap"
            >
              Get in Touch
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#2A6EBB] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-[#1E1E1E] border-t">
            <NavLink
  to="/"
  className={({ isActive }) =>
    `block py-2 ${
      isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
    }`
  }
  onClick={() => setIsOpen(false)}
>
              Home
            </NavLink>

            <NavLink
              to="/Services"
 className={({ isActive }) =>
    `block py-2 ${
      isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
    }`
  }              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/Productes"
 className={({ isActive }) =>
    `block py-2 ${
      isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
    }`
  }              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/TrainingList"
 className={({ isActive }) =>
    `block py-2 ${
      isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
    }`
  }              onClick={() => setIsOpen(false)}
            >
              Trainings
            </NavLink>

            <NavLink
              to="/about"
 className={({ isActive }) =>
    `block py-2 ${
      isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
    }`
  }              onClick={() => setIsOpen(false)}
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