import React from "react";
import heroImg from "../assets/images/Hero-image.jpg";


const Hero = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[100svh] py-24 flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 space-y-6" data-aos="zoom-in">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          NeuralArc — IoT, AI & Software Development, Built in Coimbatore
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-200">
          End-to-end connected hardware, cloud, and data systems for businesses ready to go digital.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="bg-[#E31C24] text-base text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Talk to Us
          </a>
          <a
            href="/Services"
            className="border-2 border-white text-base text-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
