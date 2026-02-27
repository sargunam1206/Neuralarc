import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


import product1 from "../assets/images/product-iot1.jpg";
import bloodbank from "../assets/images/bloodbank.jpeg";
import purchase from "../assets/images/purchase.jpeg";
import tracker from "../assets/images/tracker.jpg";

const productsData = [
  {
    id: 1,
    name: "T-Remo",
    category: "IoT",
    specs: [
      "Negative temperature operation",
      "Customizable wireless module",
      "Compact size: 50 × 50 × 36 mm",
    ],
    image: product1,
  },
  {
    id: 3,
    name: "Blood Bank Software",
    category: "Software",
    specs: [
      "Purchase bill management",
      "Donor information tracking",
      "Blood bag stock control",
    ],
    image: bloodbank,
  },
  {
    id: 4,
    name: "Purchase Software",
    category: "Software",
    specs: [
      "Purchase order management",
      "Supplier & product lists",
      "Inventory tracking",
    ],
    image: purchase,
  },
  {
    id: 5,
    name: "Tracker",
    category: "IoT",
    specs: [
      "Admin control panel",
      "Device onboarding",
      "Report generation",
    ],
    image: tracker,
  },
];


const Products = () => {
  const [activeCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

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
      {/* Products Section */}
      <section className="py-15 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
            data-aos="fade-down"
          >
            Products
          </h2>

          {/* Auto-moving Horizontal Scroll */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-scroll whitespace-nowrap">
              {[...filteredProducts, ...filteredProducts].map(
                (product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 w-72 flex-shrink-0 flex flex-col justify-between hover:shadow-xl transition"
                  >
                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                      {product.name}
                    </h3>

                    {/* Specs (Modern UI) */}
                    <div className="flex flex-col gap-2 mb-4">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <FaCheck className="text-[#2A6EBB] mt-1 w-3 h-3 flex-shrink-0" />
                          <span className="leading-snug line-clamp-2">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="/Productes"
                      className="mt-auto block text-sm font-semibold text-[#E31C24] text-center hover:underline"
                    >
                      Know More →
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-10" data-aos="fade-right">
  <a
    href="/ProducteList"
    className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
  >
    <span>View All Products</span>
    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
      </section>

      {/* Bottom CTA */}
     
     

    </>
  );
};

export default Products;
