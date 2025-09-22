import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

// Sample product data
const productsData = [
  {
    id: 1,
    name: "Smart Sensor X1",
    category: "IoT",
    specs: ["Wireless connectivity", "Low power consumption", "Compact size"],
    image: "/assets/images/product-iot1.jpg",
  },
  {
    id: 2,
    name: "Data Analyzer Pro",
    category: "Data Science",
    specs: ["AI-powered", "Real-time analytics", "Cloud integration"],
    image: "/assets/images/product-ds1.jpg",
  },
  {
    id: 3,
    name: "Software Suite 2025",
    category: "Software",
    specs: ["Customizable modules", "Cross-platform", "Secure"],
    image: "/assets/images/product-software1.jpg",
  },
  {
    id: 4,
    name: "Web Builder 360",
    category: "Software",
    specs: ["Drag & Drop", "Responsive templates", "SEO ready"],
    image: "/assets/images/product-web1.jpg",
  },
  {
    id: 5,
    name: "IoT Gateway Pro",
    category: "IoT",
    specs: ["Edge processing", "Multi-protocol support", "High security"],
    image: "/assets/images/product-iot2.jpg",
  },
];

const categories = ["All", "IoT", "Data Science", "Software"];

const ProducteList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <>
    <Header/>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12">
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {product.name}
                </h3>
                <ul className="text-gray-600 list-disc list-inside mb-4 text-left">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                <a
                  href="#request-quote"
                  className="mt-auto px-4 py-2 bg-[#E31C24] text-white rounded-md font-semibold text-center hover:bg-red-700 transition"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ProducteList;
