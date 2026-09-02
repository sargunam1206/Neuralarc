import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import caseStudiesData from "../data/caseStudiesData";
import productsData from "../data/productsData";

const slides = caseStudiesData.map((cs) => ({
  ...cs,
  image: productsData.find((p) => p.slug === cs.relatedProduct)?.image || null,
}));

const HomeCaseStudies = () => {
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
    <section className="py-15 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
          data-aos="fade-down"
        >
          Case Studies
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous case study"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg items-center justify-center text-[#2A6EBB] hover:bg-gray-50 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next case study"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg items-center justify-center text-[#2A6EBB] hover:bg-gray-50 transition"
        >
          <FaChevronRight />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-[7%] md:px-[12%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((cs, index) => {
            const distance = Math.abs(index - current);
            const isActive = index === current;
            return (
              <div
                key={cs.slug}
                className="snap-center flex-shrink-0 w-[86%] sm:w-[70%] lg:w-[62%] transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : Math.max(0.4, 1 - distance * 0.3),
                  transform: isActive ? "scale(1)" : "scale(0.92)",
                }}
              >
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="relative overflow-hidden rounded-2xl shadow-xl min-h-[320px] flex flex-col justify-end p-10 text-white bg-gray-800 bg-cover bg-center"
                  style={cs.image ? { backgroundImage: `linear-gradient(to top, rgba(10,14,20,0.92), rgba(10,14,20,0.35)), url(${cs.image})` } : undefined}
                >
                  <span className="text-sm font-medium text-white/80 mb-2">{cs.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{cs.title}</h3>
                  <p className="text-white/85 max-w-md mb-6">
                    {cs.challenge.slice(0, 130)}…
                  </p>
                  <span className="inline-block w-fit bg-white text-[#1E1E1E] font-semibold px-6 py-2.5 rounded-md hover:bg-gray-100 transition">
                    Read the case study →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((cs, index) => (
            <button
              key={cs.slug}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${cs.title}`}
              aria-current={index === current}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-7 bg-[#2A6EBB]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10" data-aos="fade-right">
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
          >
            <span>View All Case Studies</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
