import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import product1 from "../assets/Products/product1.png";
import product2 from "../assets/Products/product2.png";
import agriSensorNodeImg from "../assets/images/agri/smart-agri-sensor-node.jpg";
import istarterImg from "../assets/images/agri/istarter-mobile-app.jpg";

import leadproImg from "../assets/images/LeadPro.png";
import bloodbank from "../assets/images/bloodbank.jpeg";
import billing from "../assets/images/billing.jpeg";

const Gallery = () => {
  const iotProducts = [
    { image: product1, name: "Tracker" },
    { image: product2, name: "T-Remo" },
    { image: agriSensorNodeImg, name: "Smart Agriculture Solution" },
    { image: istarterImg, name: "iStarter Smart Irrigation" },
  ];
  const softwareProducts = [
    { image: leadproImg, name: "LeadPro" },
    { image: bloodbank, name: "Blood Bank Software" },
    { image: billing, name: "Billing Software" },
  ];

  // Brochures live in /public/brochures so they're served as-is in production.
  // `size` is shown on the card so visitors know before downloading.
  const brochures = [
    { name: "Company Profile", file: "/brochures/neuralarc-company-profile.pdf", size: "115 KB" },
    { name: "Company Portfolio", file: "/brochures/neuralarc-portfolio.pdf", size: "18.7 MB" },
    { name: "Smart Agriculture Solution", file: "/brochures/neuralarc-smart-agriculture-solution.pdf", size: "5.7 MB" },
    { name: "Blood Bank Software Brochure", file: "/brochures/blood-bank-software-brochure.pdf", size: "870 KB" },
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | NeuralArc</title>
        <meta
          name="description"
          content="A look at NeuralArc's IoT and software products and downloadable brochures."
        />
        <link rel="canonical" href="https://www.neuralarc.com/Gallery" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#2A6EBB] text-white text-center py-20">
        <h1 className="text-4xl md:text-4xl font-bold">Our Gallery</h1>
        <p className="mt-4 text-lg md:text-xl">
          Explore our IoT innovations, software solutions, and resources
        </p>
      </section>

      {/* IoT Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2A6EBB] mb-12">
            IoT Product Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {iotProducts.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden"
              >
                <div className="h-56 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="py-4 px-4 text-center">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#E31C24] mb-12">
            Software Product Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softwareProducts.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden"
              >
                <div className="h-56 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="py-4 px-4 text-center">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">
            Download Our Brochures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {brochures.map((doc, index) => (
              <a
                key={index}
                href={doc.file}
                download
                className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:shadow-lg transition bg-white hover:bg-gray-100"
              >
                <FaFilePdf className="text-red-600 text-4xl mb-3" />
                <span className="font-semibold text-gray-700">{doc.name}</span>
                <span className="text-xs text-gray-500 mt-1">PDF · {doc.size}</span>
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
