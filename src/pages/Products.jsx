import { useState } from "react";

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

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <>
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12">
          Products
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-[#2A6EBB] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-[#2A6EBB]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Auto-moving Horizontal Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...filteredProducts, ...filteredProducts].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 w-72 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <ul className="text-gray-600 text-sm list-disc list-inside mb-3">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                <a
                  href="#request-quote"
                  className="mt-auto block px-4 py-2 bg-[#E31C24] text-white rounded-md font-semibold text-center hover:bg-red-700 transition"
                >
                  Know More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
          <div className="flex justify-center">
  <a href="/ProducteList">
    <button className="px-8 py-3 rounded-lg border-2 border-[#E31C24] text-[#E31C24] font-semibold transition duration-300 ease-in-out hover:bg-[#E31C24] hover:text-white shadow-md hover:shadow-lg">
      Know More
    </button>
  </a>
</div>
    </>
  );
};

export default Products;
