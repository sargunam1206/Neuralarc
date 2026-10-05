import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaQuoteLeft,
  FaBriefcase,
  FaBoxOpen,
  FaHeart,
  FaUsers,
  FaLinkedin,
} from "react-icons/fa";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

import heroTeam from "../assets/images/illustrations/about-team.svg";
import journeyTeam from "../assets/images/illustrations/about-journey.svg";
import missionTeam from "../assets/images/illustrations/about-mission.svg";

// "Our Partners" logo strip is hidden until the client confirms the partner
// list. Set to true to show it again — the logos and code are all kept below.
const SHOW_PARTNERS = false;

import logo1 from "../assets/images/logo1.png.jpg";
import logo2 from "../assets/images/logo2.png.jpg";
import logo3 from "../assets/images/logo3.png.jpg";
import logo4 from "../assets/images/logo4.png.jpg";
import logo5 from "../assets/images/logo5.png.jpg";
import logo6 from "../assets/images/logo6.png.jpg";
import logo7 from "../assets/images/logo7.png.jpg";
import logo8 from "../assets/images/logo8.png.jpg";


const stats = [
  { icon: FaBriefcase, value: "8+", label: "Years in Business" },
  { icon: FaBoxOpen, value: "25+", label: "Products Delivered" },
  { icon: FaHeart, value: "100+", label: "Happy Clients" },
  { icon: FaUsers, value: "50+", label: "Team Members" },
];

const partners = [
  { src: logo1, name: "Nippon Paint" },
  { src: logo2, name: "Gold Winner" },
  { src: logo3, name: "Finolex Cables" },
  { src: logo4, name: "TVS" },
  { src: logo5, name: "Parry's" },
  { src: logo6, name: "Milma" },
  { src: logo7, name: "Rane" },
  { src: logo8, name: "Polycab" },
];

// Employee cards for "Voices of Our Team".
// photo: save the person's own photo (e.g. downloaded from their LinkedIn
//   profile, with their permission) to src/assets/images/team/, import it
//   above — `import raja from "../assets/images/team/raja.jpg";` — and set
//   `photo: raja`. Leave it null to show the person's initials instead.
//   LinkedIn photos can't be loaded from the profile URL automatically.
// linkedin: full profile URL; shows a LinkedIn button. "" hides it.
const testimonials = [
  {
    quote:
      "At NeuralArc, our goal is to build connected products end to end — from the circuit board to the cloud dashboard. Seeing our devices work in the field for real customers is what keeps us going.",
    name: "Raja Duraisamy",
    role: "CEO",
    photo: null,
    linkedin: "https://www.linkedin.com/in/raja-duraisamy-b586962/",
  },
  {
    quote:
      "Keeping our systems, tools and teams running smoothly means our engineers can focus on building. I enjoy solving problems before anyone else notices them.",
    name: "Pushpa Ganesan",
    role: "IT Manager",
    photo: null,
    linkedin: "https://www.linkedin.com/in/pushpa-ganesan/",
  },
  {
    quote:
      "I get to design how the pieces fit together — sensors, gateways, cloud and apps. Turning a customer's problem into an architecture that works reliably in the field is the most rewarding part of my job.",
    name: "Selvin Jehovah Jireh",
    role: "Solution Architect",
    photo: null,
    linkedin: "https://www.linkedin.com/in/selvin-jehovah-jireh/",
  },
  {
    quote:
      "Every feature I build ends up in the hands of real users. I like that we own our work from the first line of code to the final release.",
    name: "B Jayamala",
    role: "Software Developer",
    photo: null,
    linkedin: "https://www.linkedin.com/in/b-jayamala-81274b237/",
  },
  {
    quote:
      "Sensor data only matters when people can act on it. I enjoy turning raw readings into clear dashboards and insights our clients actually use.",
    name: "Sargunam T",
    role: "Data Analyst",
    photo: null,
    linkedin: "https://www.linkedin.com/in/sargunam-t/",
  },
   {
    quote:
      "Working across IoT, web and mobile projects keeps me learning every day. The team is always ready to help, and there is always a new challenge to take on.",
    name: "NiroshKumar K",
    role: "Full stack Developer",
    photo: null,
    linkedin: "https://www.linkedin.com/in/nirosh-kumark2003",
  },
];

// "Raja Duraisamy" → "RD", "Sargunam T" → "ST"
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const About = () => {
  const marqueeRef = useRef(null);
  // Set by hovering an individual brand tile — pauses the auto-scroll only
  // while the cursor is on a logo, not anywhere in the strip.
  const marqueePausedRef = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Continuous horizontal auto-scroll for the partners strip. The logo list is
  // rendered twice; when we pass the halfway point we jump back by half the
  // width for a seamless loop. Disabled when the user prefers reduced motion.
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    const tick = () => {
      if (!marqueePausedRef.current) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  const pauseMarquee = () => {
    marqueePausedRef.current = true;
  };
  const resumeMarquee = () => {
    marqueePausedRef.current = false;
  };

  const scrollToJourney = () => {
    const target = document.getElementById("our-journey");
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>About NeuralArc | IoT, AI & Software Team in Coimbatore</title>
        <meta
          name="description"
          content="Meet the NeuralArc team — innovators, problem solvers and dreamers building IoT, AI/ML and software solutions from Coimbatore for over 8 years."
        />
        <link rel="canonical" href="https://www.neuralarc.com/about" />
      </Helmet>

      <Header />

      {/* 1 — Hero */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <p className="text-xs font-bold tracking-[0.2em] text-[#2A6EBB] mb-4">
              WELCOME TO OUR TEAM
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              We&apos;re a team of innovators, problem solvers, and dreamers.
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              NeuralArc is an R&amp;D firm from Coimbatore, India. Our electrical and
              electronics engineers and data analysts design and develop products from
              requirements analysis through mechanical, electrical and software design,
              all the way to implementation, testing and final integration — offering
              embedded and IoT product development, data analytics, prototyping and
              low-volume manufacturing.
            </p>
            <button
              type="button"
              onClick={scrollToJourney}
              className="inline-flex items-center gap-2 bg-[#2A6EBB] hover:bg-[#1f5aa0] text-white font-semibold px-7 py-3.5 rounded-md transition"
            >
              Learn More About Us <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div data-aos="fade-left">
            <img
              src={heroTeam}
              alt="Illustration of the NeuralArc team collaborating around a connected device and dashboard"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 2 — Our Journey */}
      <section id="our-journey" className="bg-white py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right" className="order-2 md:order-1">
            <img
              src={journeyTeam}
              alt="Illustration of NeuralArc's journey from an idea to connected products and the cloud"
              className="w-full aspect-[3/2] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-[0.2em] text-[#2A6EBB] mb-4">
              OUR JOURNEY
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              8 Years of Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              For over 8 years, NeuralArc has been at the forefront of digital
              transformation — delivering smart, scalable, and impactful solutions for
              businesses across industries. Our journey is built on innovation, trust,
              and a passion for technology.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const StatIcon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <StatIcon className="w-7 h-7 mx-auto mb-2 text-[#2A6EBB]" />
                    <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Our Partners (hidden while SHOW_PARTNERS is false) */}
      {SHOW_PARTNERS && (
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[#2A6EBB] mb-3">
            OUR PARTNERS
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
            Trusted by Leading Brands
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

          <div
            ref={marqueeRef}
            className="flex gap-8 overflow-x-auto py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                onMouseEnter={pauseMarquee}
                onMouseLeave={resumeMarquee}
                onTouchStart={pauseMarquee}
                onTouchEnd={resumeMarquee}
                className="flex-shrink-0 w-44 h-28 sm:w-52 sm:h-32 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-7 grayscale opacity-70 transition duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl hover:border-[#2A6EBB]/30"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          And many more amazing partners…
        </p>
      </section>
      )}

      {/* 4 — Our Mission — backgrounds swap so sections keep alternating
          white/gray whether or not the partners strip is shown. */}
      <section className={`${SHOW_PARTNERS ? "bg-white" : "bg-gray-50"} py-16 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <img
              src={missionTeam}
              alt="Illustration of connected devices around the globe and a rocket launching"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div data-aos="fade-left">
            <p className="text-xs font-bold tracking-[0.2em] text-[#2A6EBB] mb-4">
              OUR MISSION
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              The Revolution We&apos;re Building
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              We&apos;re not just building products — we&apos;re building a better future
              through technology. At NeuralArc, we challenge the status quo, embrace
              innovation, and engineer solutions that empower businesses and communities
              worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#2A6EBB] hover:bg-[#1f5aa0] text-white font-semibold px-7 py-3.5 rounded-md transition"
            >
              Join Our Team <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — Employee Testimonials */}
      <section className={`${SHOW_PARTNERS ? "bg-gray-50" : "bg-white"} py-16 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-[#2A6EBB] mb-3">
              EMPLOYEE TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Voices of Our Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-xl transition"
                data-aos="fade-up"
              >
                <FaQuoteLeft className="text-[#2A6EBB]/30 text-2xl mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 rounded-full bg-[#2A6EBB] text-white font-bold flex items-center justify-center flex-shrink-0"
                    >
                      {initials(t.name)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.name} on LinkedIn`}
                      className="text-[#0A66C2] hover:text-[#004182] transition shrink-0"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
