import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/images/Logo.png";
import servicesData from "../../data/servicesData";

const resourcesItems = [
  { title: "Blog", to: "/blog" },
  { title: "Case Studies", to: "/case-studies" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'solutions' | 'resources' | null
  const [openAccordion, setOpenAccordion] = useState(null); // mobile: 'solutions' | 'resources' | null
  const navRef = useRef(null);

  const location = useLocation();

  const baseLinkClass =
    "relative pb-1 transition-colors duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:w-full after:bg-[#E31C24] " +
    "after:scale-x-0 after:origin-left after:transition-transform after:duration-300 " +
    "hover:after:scale-x-100";

  const activeLinkClass = "text-[#E31C24] after:scale-x-100";

  const isSolutionsActive =
    location.pathname === "/Services" || location.pathname.startsWith("/services");
  const isResourcesActive =
    location.pathname.startsWith("/blog") || location.pathname.startsWith("/case-studies");
  const isTrainingActive =
    location.pathname === "/TrainingList" || location.pathname.startsWith("/training/");

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
    setOpenAccordion(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setOpenAccordion(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const toggleAccordion = (name) => {
    setOpenAccordion((current) => (current === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white shadow-md py-2" ref={navRef}>
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

            {/* Solutions dropdown — opens on hover (desktop) as well as click/keyboard */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown((cur) => (cur === "solutions" ? null : cur))}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === "solutions"}
                onClick={() => toggleDropdown("solutions")}
                className={`flex items-center gap-1.5 ${baseLinkClass} ${
                  isSolutionsActive ? activeLinkClass : ""
                }`}
              >
                Solutions
                <FaChevronDown
                  className={`w-2.5 h-2.5 transition-transform ${
                    openDropdown === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "solutions" && (
                // pt-2 (not mt-2) keeps this flush against the trigger with no
                // hoverable gap, so moving the pointer down into it doesn't
                // momentarily leave the <li> and close the menu.
                <div className="absolute left-0 top-full w-72 pt-2 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-2.5 text-base text-gray-700 hover:bg-gray-50 hover:text-[#E31C24] transition"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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

            {/* Resources dropdown — opens on hover (desktop) as well as click/keyboard */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown((cur) => (cur === "resources" ? null : cur))}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === "resources"}
                onClick={() => toggleDropdown("resources")}
                className={`flex items-center gap-1.5 ${baseLinkClass} ${
                  isResourcesActive ? activeLinkClass : ""
                }`}
              >
                Resources
                <FaChevronDown
                  className={`w-2.5 h-2.5 transition-transform ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 top-full w-56 pt-2 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2.5 text-base text-gray-700 hover:bg-gray-50 hover:text-[#E31C24] transition"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/TrainingList"
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive || isTrainingActive ? activeLinkClass : ""}`
                }
              >
                Training
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
            aria-expanded={isOpen}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-1 text-[#1E1E1E] border-t">
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

            {/* Solutions accordion */}
            <div>
              <button
                type="button"
                className={`w-full flex items-center justify-between py-2 ${
                  isSolutionsActive ? "text-[#E31C24] font-semibold" : ""
                }`}
                aria-expanded={openAccordion === "solutions"}
                onClick={() => toggleAccordion("solutions")}
              >
                <span>Solutions</span>
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    openAccordion === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "solutions" && (
                <div className="pl-4 pb-2 space-y-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block py-1.5 text-sm text-gray-600 hover:text-[#E31C24]"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/Productes"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>

            {/* Resources accordion */}
            <div>
              <button
                type="button"
                className={`w-full flex items-center justify-between py-2 ${
                  isResourcesActive ? "text-[#E31C24] font-semibold" : ""
                }`}
                aria-expanded={openAccordion === "resources"}
                onClick={() => toggleAccordion("resources")}
              >
                <span>Resources</span>
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    openAccordion === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "resources" && (
                <div className="pl-4 pb-2 space-y-1">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block py-1.5 text-sm text-gray-600 hover:text-[#E31C24]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/TrainingList"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive || isTrainingActive
                    ? "text-[#E31C24] font-semibold"
                    : "hover:text-[#E31C24]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Training
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-[#E31C24] font-semibold" : "hover:text-[#E31C24]"
                }`
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
