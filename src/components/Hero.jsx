import React from "react";
import heroImg from "../assets/images/Hero-image.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 space-y-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Powering the Future with Smart IoT & Data Science Solutions
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-200">
          NeuralArc delivers innovative technology that connects devices,
          transforms data, and accelerates your business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#get-started"
            className="bg-[#E31C24] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Get Started
          </a>
          <a
            href="#products"
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            See Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
