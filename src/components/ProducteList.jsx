import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

const productsData = [
  {
    id: 1,
    name: "Smart Sensor X1",
    category: "IoT",
    specs: ["Wireless connectivity", "Low power consumption", "Compact size"],
    image: "/assets/images/product-iot1.jpg",
    description:
      "Smart Sensor X1 is a next-gen IoT sensor designed for smart homes and industries. It features advanced wireless connectivity, ultra-low power consumption, and a compact form factor to fit anywhere seamlessly.",
  },
  {
    id: 2,
    name: "Data Analyzer Pro",
    category: "Data Science",
    specs: ["AI-powered", "Real-time analytics", "Cloud integration"],
    image: "/assets/images/product-ds1.jpg",
    description:
      "Data Analyzer Pro enables businesses to gain insights in real time. With AI-driven analytics and cloud integration, it helps organizations make data-backed decisions effortlessly.",
  },
  {
    id: 3,
    name: "Software Suite 2025",
    category: "Software",
    specs: ["Customizable modules", "Cross-platform", "Secure"],
    image: "/assets/images/product-software1.jpg",
    description:
      "Software Suite 2025 is an all-in-one enterprise software solution. It comes with customizable modules, cross-platform compatibility, and high-level security.",
  },
  {
    id: 4,
    name: "Web Builder 360",
    category: "Software",
    specs: ["Drag & Drop", "Responsive templates", "SEO ready"],
    image: "/assets/images/product-web1.jpg",
    description:
      "Web Builder 360 is a no-code website builder with drag-and-drop functionality, responsive templates, and SEO optimization for faster online presence.",
  },
  {
    id: 5,
    name: "IoT Gateway Pro",
    category: "IoT",
    specs: ["Edge processing", "Multi-protocol support", "High security"],
    image: "/assets/images/product-iot2.jpg",
    description:
      "IoT Gateway Pro acts as a central hub for IoT devices with edge processing, multi-protocol support, and enterprise-grade security.",
  },
];

const categories = ["All", "IoT", "Data Science", "Software"];

const ProducteList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
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

          {/* Product Cards */}
          <div className="space-y-10">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden`}
              >
                {/* Image */}
                <div className="md:w-1/2 w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                  <span className="inline-block bg-[#2A6EBB]/10 text-[#2A6EBB] text-sm font-medium px-3 py-1 rounded-full mb-3 w-fit">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
                    {product.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="px-6 py-3 bg-[#E31C24] text-white rounded-lg font-semibold w-fit hover:bg-red-700 transition"
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative animate-fadeIn">
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
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="rounded-lg w-full h-64 md:h-80 object-cover"
                />
              </div>
              {/* Details */}
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <span className="inline-block bg-[#2A6EBB]/10 text-[#2A6EBB] text-sm font-medium px-3 py-1 rounded-full mb-3 w-fit">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
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
