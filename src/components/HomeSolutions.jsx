import { useState, useEffect, useRef, cloneElement } from "react";
import { Link } from "react-router-dom";
import { FaMicrochip, FaMemory, FaIndustry, FaDatabase, FaLaptopCode, FaGlobe, FaMobileAlt, FaChalkboardTeacher, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import servicesData from "../data/servicesData";

const iconBySlug = {
  iot: <FaMicrochip className="w-10 h-10" />,
  "embedded-software-development": <FaMemory className="w-10 h-10" />,
  "hardware-design-manufacturing": <FaIndustry className="w-10 h-10" />,
  "ai-ml-data-science": <FaDatabase className="w-10 h-10" />,
  "custom-software-development": <FaLaptopCode className="w-10 h-10" />,
  "full-stack-development": <FaGlobe className="w-10 h-10" />,
  "app-development": <FaMobileAlt className="w-10 h-10" />,
  training: <FaChalkboardTeacher className="w-10 h-10" />,
};

// One distinct deep-toned gradient per solution — no external images, no red/blue repeat.
const gradientBySlug = {
  iot: "from-[#0F2A4A] to-[#061422]", // connectivity blue
  "embedded-software-development": "from-[#0B3B2E] to-[#041B16]", // circuit-board green
  "hardware-design-manufacturing": "from-[#3A2A12] to-[#1A1206]", // copper bronze
  "ai-ml-data-science": "from-[#2B1750] to-[#150A28]", // AI violet
  "custom-software-development": "from-[#1F2937] to-[#0B0F16]", // software slate
  "full-stack-development": "from-[#1B1F5C] to-[#0B0D2E]", // web indigo
  "app-development": "from-[#4A1030] to-[#220818]", // mobile magenta
  training: "from-[#4A2E0A] to-[#221503]", // learning amber
};

// Every card leads to its own service page; case studies are linked from there.
const slides = servicesData.map((service) => ({
  ...service,
  learnMoreTo: `/services/${service.slug}`,
  learnMoreLabel: "Learn More",
}));

const HomeSolutions = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const didMount = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Keep the active card centered by scrolling the track horizontally only —
  // never the page. Skipped on first mount so landing on the homepage does not
  // jump the viewport down to this section.
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const track = trackRef.current;
    const card = track?.children[current];
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta =
      cardRect.left - trackRect.left - (track.clientWidth - card.clientWidth) / 2;
    track.scrollBy({ left: delta, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [current, prefersReducedMotion]);

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
          data-aos="fade-down"
        >
          Solutions
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous solution"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg items-center justify-center text-[#2A6EBB] hover:bg-gray-50 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next solution"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg items-center justify-center text-[#2A6EBB] hover:bg-gray-50 transition"
        >
          <FaChevronRight />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-[7%] md:px-[12%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((service, index) => {
            const distance = Math.abs(index - current);
            const isActive = index === current;
            return (
              <div
                key={service.slug}
                className="snap-center flex-shrink-0 w-[86%] sm:w-[70%] lg:w-[62%] transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : Math.max(0.4, 1 - distance * 0.3),
                  transform: isActive ? "scale(1)" : "scale(0.92)",
                }}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${gradientBySlug[service.slug]} text-white rounded-2xl shadow-xl p-10 min-h-[280px] flex flex-col justify-center`}
                >
                  {/* Watermark icon — large, faint, themed to this solution */}
                  <div className="absolute -right-6 -bottom-8 text-white/10 pointer-events-none">
                    {cloneElement(iconBySlug[service.slug], { className: "w-48 h-48" })}
                  </div>

                  <div className="relative mb-5 text-white/90">{iconBySlug[service.slug]}</div>
                  <h3 className="relative text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="relative text-white/85 max-w-md mb-6">{service.shortDescription}</p>
                  <Link
                    to={service.learnMoreTo}
                    className="relative inline-block w-fit bg-white text-[#1E1E1E] font-semibold px-6 py-2.5 rounded-md hover:bg-gray-100 transition"
                  >
                    {service.learnMoreLabel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${service.title}`}
              aria-current={index === current}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-7 bg-[#2A6EBB]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
