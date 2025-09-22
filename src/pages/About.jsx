import React from "react";
import { FaEye, FaBullseye, FaHandshake } from "react-icons/fa";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";

import aboutImage from "../assets/images/about-hero.jpg";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";



const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About NeuralArc</h1>
            <p className="text-lg md:text-xl text-justify">
              At NeuralArc, we specialize in innovative technology solutions that empower businesses to thrive in the digital era. Our team of experts is passionate about IoT, Data Science, Software Development, and AI-powered solutions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="About NeuralArc"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2A6EBB] mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Founded in 2020, NeuralArc has grown into a leading technology solutions provider. Our mission is to create smart and efficient solutions for businesses across industries, combining creativity, innovation, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Vision, Mission & Values */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Vision */}
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="flex justify-center mb-4">
        <FaEye className="text-[#2A6EBB] w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold text-[#2A6EBB] mb-3">Our Vision</h3>
      <p className="text-gray-600 text-sm md:text-base">
        To be the most trusted partner in digital transformation worldwide.
      </p>
    </div>

    {/* Mission */}
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="flex justify-center mb-4">
        <FaBullseye className="text-[#E31C24] w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold text-[#E31C24] mb-3">Our Mission</h3>
      <p className="text-gray-600 text-sm md:text-base">
        Deliver innovative and reliable technology solutions that empower businesses to grow and succeed.
      </p>
    </div>

    {/* Values */}
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="flex justify-center mb-4">
        <FaHandshake className="text-[#2A6EBB] w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold text-[#2A6EBB] mb-3">Our Values</h3>
      <p className="text-gray-600 text-sm md:text-base">
        Innovation, Integrity, Collaboration, Excellence, and Customer Success.  
        We put people first and technology at its best.
      </p>
    </div>

  </div>
    </section>


      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2A6EBB] mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[team1, team2, team3].map((img, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <img src={img} alt={`Team member ${idx + 1}`} className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
                <p className="text-gray-600">Lead Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Join Us */}
      <section className="py-20 bg-[#2A6EBB] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Be part of an innovative team shaping the future of technology.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-[#E31C24] rounded-md font-semibold hover:bg-red-700 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
};

export default About;
