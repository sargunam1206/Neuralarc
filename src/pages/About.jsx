import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaEye, FaBullseye, FaHandshake, FaUsers, FaTrophy, FaLightbulb } from "react-icons/fa";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import aboutImage from "../assets/images/about-hero.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <>
    
<Helmet>
  <title>NeuralArc | IoT, Software & AI Solutions</title>
  <meta
    name="description"
    content="NeuralArc provides IoT solutions, software development, AI & ML services, and professional training in India."
  />
  <meta name="keywords" content="IoT solutions, software development, AI ML services, NeuralArc" />
</Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#2A6EBB] text-white py-12">
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
              About <span className="text-[#fff2f2]">NeuralArc</span>
            </h1>
            <p className="text-lg md:text-xl text-justify leading-relaxed">
              At NeuralArc, we specialize in innovative technology solutions that empower
              businesses to thrive in the digital era. Our expertise spans IoT, Data
              Science, Software Development, and AI-powered solutions that drive real
              results.
            </p>
          </div>
          <div className="md:w-2/5" data-aos="fade-left">
            <img
              src={aboutImage}
              alt="About NeuralArc"
              className="rounded-xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#2A6EBB] mb-6"
            data-aos="zoom-in"
          >
            Our Story
          </h2>
          <p
            className="text-gray-600 text-lg md:text-lg max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
          >
            Founded in 2020, NeuralArc has grown into a trusted technology partner for
            businesses worldwide. From startups to enterprises, we create smart, efficient
            solutions that combine creativity, innovation, and cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md" data-aos="flip-left">
              <h3 className="text-xl font-bold text-[#E31C24] mb-2">2020</h3>
              <p className="text-gray-600">
                Founded with a mission to transform businesses through technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md" data-aos="flip-up">
              <h3 className="text-xl font-bold text-[#2A6EBB] mb-2">2022</h3>
              <p className="text-gray-600">
                Expanded globally with successful IoT & AI projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md" data-aos="flip-right">
              <h3 className="text-xl font-bold text-[#E31C24] mb-2">2024+</h3>
              <p className="text-gray-600">
                Continuing our journey to lead in digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div
            className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <FaEye className="text-[#2A6EBB] w-14 h-14 bg-blue-100 p-3 rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#2A6EBB] mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted global partner in digital transformation.
            </p>
          </div>

          <div
            className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-4">
              <FaBullseye className="text-[#E31C24] w-14 h-14 bg-red-100 p-3 rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#E31C24] mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Deliver innovative and reliable technology solutions that empower businesses
              to grow and succeed.
            </p>
          </div>

          <div
            className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-[#2A6EBB] w-14 h-14 bg-blue-100 p-3 rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#2A6EBB] mb-3">Our Values</h3>
            <p className="text-gray-600">
              Innovation, Integrity, Collaboration, Excellence, and Customer Success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#2A6EBB] mb-12"
            data-aos="zoom-in"
          >
            Why Choose NeuralArc?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <FaUsers className="w-12 h-12 text-[#E31C24] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100+ Clients</h3>
              <p className="text-gray-600">
                Trusted by businesses across industries worldwide.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaTrophy className="w-12 h-12 text-[#2A6EBB] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Award-Winning</h3>
              <p className="text-gray-600">Recognized for innovation and client success.</p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaLightbulb className="w-12 h-12 text-[#E31C24] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cutting-Edge</h3>
              <p className="text-gray-600">
                Delivering future-ready solutions with emerging tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-15 bg-gradient-to-r from-[#2A6EBB] to-[#E31C24] text-white text-center"
        data-aos="zoom-in-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg md:text-lg mb-6 max-w-2xl mx-auto">
          Be part of an innovative team shaping the future of technology. Let&apos;s build
          something amazing together.
        </p>
        <a
          href="/contact"
          className="px-4 py-2 bg-white text-[#E31C24] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
};

export default About;
