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
} from "react-icons/fa";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

import heroTeam from "../assets/images/image1.png.png";
import journeyTeam from "../assets/images/image2.png.png";
import missionTeam from "../assets/images/image3.png.png";

import logo1 from "../assets/images/logo1.png.jpg";
import logo2 from "../assets/images/logo2.png.jpg";
import logo3 from "../assets/images/logo3.png.jpg";
import logo4 from "../assets/images/logo4.png.jpg";
import logo5 from "../assets/images/logo5.png.jpg";
import logo6 from "../assets/images/logo6.png.jpg";
import logo7 from "../assets/images/logo7.png.jpg";
import logo8 from "../assets/images/logo8.png.jpg";

import profile1 from "../assets/images/profile_pic1.png.jpg";
import profile2 from "../assets/images/profile_pic2.png.jpg";
import profile3 from "../assets/images/profile_pic3.png.jpg";
import profile4 from "../assets/images/profile_pic4.png.jpg";

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

const testimonials = [
  {
    quote:
      "NeuralArc is a place where ideas are valued and innovation is encouraged. I love how we work together to solve complex problems and create solutions that truly make a difference.",
    name: "Aarav Menon",
    role: "Software Engineer",
    photo: profile1,
  },
  {
    quote:
      "The culture here is built on trust, collaboration, and continuous learning. I've grown so much professionally while working on meaningful projects that impact real businesses.",
    name: "Divya Raman",
    role: "Project Manager",
    photo: profile2,
  },
  {
    quote:
      "NeuralArc empowers you to take ownership, think big, and turn ideas into reality. It's inspiring to be surrounded by talented people who are passionate about what they do.",
    name: "Karthik Suresh",
    role: "Lead Developer",
    photo: profile3,
  },
  {
    quote:
      "What I love most is the supportive environment and the opportunities to learn new technologies. Every day brings a new challenge and a new opportunity to grow.",
    name: "Nisha Verma",
    role: "Data Scientist",
    photo: profile4,
  },
];

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
              At NeuralArc, we combine deep technology expertise with real-world
              understanding to build innovative solutions that make a lasting impact.
              Together, we create, collaborate, and deliver excellence every day.
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
              alt="The NeuralArc team at the Coimbatore office"
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
              alt="NeuralArc company group photo"
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

      {/* 3 — Our Partners */}
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

      {/* 4 — Our Mission */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <img
              src={missionTeam}
              alt="NeuralArc leadership team"
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
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-[#2A6EBB] mb-3">
              EMPLOYEE TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Voices of Our Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </div>
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
