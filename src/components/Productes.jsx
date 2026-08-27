import { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";

import productsData from "../data/productsData";

const categories = ["All", "IoT", "Mobile App","Software"];

const ProducteList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
  document.body.style.overflow = selectedProduct ? "hidden" : "auto";
}, [selectedProduct]);

useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") setSelectedProduct(null);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);
      

  return (
    <>

    
<Helmet>
  <title>IoT Devices & Software Products | NeuralArc</title>
  <meta
    name="description"
    content="Products built by NeuralArc: T-Remo temperature monitoring for cold-chain transport, Tracker IoT asset monitoring, plus billing, inventory, and blood bank software."
  />
  <link rel="canonical" href="https://www.neuralarc.com/Productes" />
</Helmet>
      <Header />
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-8" data-aos="fade-down">
            Our Products
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 md:gap-6 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#2A6EBB] text-white shadow-md scale-105"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-[#2A6EBB]/10 hover:text-[#2A6EBB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          {/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#2A6EBB]/10 text-[#2A6EBB]">
            <FaFlask className="w-10 h-10" />
            <span className="text-xs font-medium">Image coming soon</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-3 left-3 bg-white/90 text-[#2A6EBB] text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {product.name}
        </h3>

        <ul className="text-gray-600 text-sm space-y-2 mb-6 list-disc list-inside">
          {product.specs.slice(0, 3).map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto flex flex-col gap-2">
          <button
            onClick={() => setSelectedProduct(product)}
            className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold cursor-pointer
                       hover:gap-3 transition-all duration-300"
          >
            <span>Quick View</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          <Link
            to={`/products/${product.slug}`}
            className="group inline-flex items-center gap-2 text-[#2A6EBB] font-semibold"
          >
            <span>Full Product Page</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
    
      </section>

      {/* Modal */}
{/* Modal */}
{selectedProduct && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    onClick={() => setSelectedProduct(null)} // 👈 close on outside click
  >
    <div
      className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative animate-fadeIn"
      onClick={(e) => e.stopPropagation()} // 👈 prevent close on inside click
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        onClick={() => setSelectedProduct(null)}
      >
        ✕
      </button>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          {selectedProduct.image ? (
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="rounded-xl w-full h-64 md:h-80 object-cover shadow-md"
            />
          ) : (
            <div className="rounded-xl w-full h-64 md:h-80 flex flex-col items-center justify-center gap-3 bg-[#2A6EBB]/10 text-[#2A6EBB] shadow-md">
              <FaFlask className="w-14 h-14" />
              <span className="text-sm font-medium">Image coming soon</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <span className="inline-block bg-[#2A6EBB]/10 text-[#2A6EBB] text-sm font-medium px-3 py-1 rounded-full mb-3 w-fit">
            {selectedProduct.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {selectedProduct.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {selectedProduct.description}
          </p>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            {selectedProduct.specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  
)}



      <Footer />
    </>
  );
};

export default ProducteList;
