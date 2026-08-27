import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Example images (replace with your real product + achievements images)
import product1 from "../assets/Products/product1.png";
import product2 from "../assets/Products/product2.png";
import product3 from "../assets/Products/product3.png";
import product4 from "../assets/Products/product4.png";

import software1 from "../assets/Products/product4.png";
import software2 from "../assets/Products/product4.png";
import software3 from "../assets/Products/product4.png";

import award1 from "../assets/images/team3.jpg";
import award2 from "../assets/images/team2.jpg";
import award3 from "../assets/images/team2.jpg";

const Gallery = () => {
  const iotProducts = [product1, product2, product3, product4];
  const softwareProducts = [software1, software2, software3];
  const achievements = [award1, award2, award3];

  // Example brochures (keep them in /public/brochures folder)
  const brochures = [
    { name: "IoT Product Brochure", file: "./src/assets/brochures/Blood Bank Software - Brochure.pdf" },
    { name: "Company Profile", file: "./src/assets/brochures/NeuralArc Overall.pdf" },
    { name: "Achievements Catalog", file: "/brochures/achievements.pdf" },
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | NeuralArc</title>
        <meta
          name="description"
          content="A look at NeuralArc's IoT and software products, achievements, and downloadable brochures."
        />
        <link rel="canonical" href="https://www.neuralarc.com/Gallery" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#2A6EBB] text-white text-center py-20">
        <h1 className="text-4xl md:text-4xl font-bold">Our Gallery</h1>
        <p className="mt-4 text-lg md:text-xl">
          Explore our IoT innovations, software solutions, achievements, and resources
        </p>
      </section>

      {/* IoT Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2A6EBB] mb-12">
            IoT Product Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {iotProducts.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`IoT Product ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#E31C24] mb-12">
            Software Product Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softwareProducts.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Software Product ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2A6EBB] mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {achievements.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochures */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">
            Download Our Brochures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brochures.map((doc, index) => (
              <a
                key={index}
                href={doc.file}
                download
                className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-lg transition bg-gray-50 hover:bg-gray-100"
              >
                <FaFilePdf className="text-red-600 text-4xl mb-3" />
                <span className="font-semibold text-gray-700">{doc.name}</span>
                <FaDownload className="text-gray-500 mt-2" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
