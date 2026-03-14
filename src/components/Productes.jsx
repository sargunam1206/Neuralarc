import { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



import product1 from "../assets/images/product-iot1.jpg";
import bloodbank from "../assets/images/bloodbank.jpeg";
import purchase from "../assets/images/purchase.jpeg";
import tracker from "../assets/Products/product1.png";
import billing from "../assets/images/billing.jpeg";
import inventory from "../assets/images/inventory-app.png"
import expanseTracker from "../assets/images/expanse_app.png"

const productsData = [
  {
    id: 1,
    name: "T-Remo",
    category: "IoT",
    specs: ["Designed for negative temperature operation", "Customizable Wireless Access module", "Dimension : (LxBxH) 50 x 50 x 36 mm"],
    image: product1,
    description:
      "T-Remo is a smart temperature monitoring solution for Vaccine/Medicine transport with GPS coordinates. All sensed parameters are sent through SMS or it can be uploaded directly to the web server.",
  },
  {
    id: 2,
    name: "Blood Bank Software",
    category: "Software",
    specs: ["Purchase bill management",
    "Donor information management",
    "Blood bag stock tracking"],
    image: bloodbank,
    description:
      "Blood Bank Software provides comprehensive management of blood bank operations. It includes empty bag stock monitoring, screening reports, blood request information, and branch-wise tracking of empty and available blood bags.",
  },
  {
    id: 3,
    name: "Purchase Software",
    category: "Software",
    specs: ["Purchase order management",
    "Supplier list management",
    "Product list management"],
    image: purchase,
    description:
      "This software streamlines purchase department operations, including project site tracking, invoice management, and overall procurement workflow. It helps maintain supplier records, product inventory, and purchase orders efficiently.",
  },
  {
    id: 4,
    name: "Tracker",
    category: "IoT",
     specs: [
    "Battery Operated Device",
    "Device onboarding",
    "Report generation and display"
  ],
    image: tracker,
    description:
      "Tracker provides centralized monitoring and control of IoT devices. It includes alert messages and logs, continuous temperature measurement and aggregation, secured data transfer to the cloud, optional GPS location tracking, periodic message transfer, and LED device status indication."
},
 {
  id: 5,
  name: "Inventory App",
  category: "Mobile App",
  specs: [
    "Admin dashboard & user roles",
    "Stock management & alerts",
    "Report generation & analytics"
  ],
  image: inventory, // 👉 rename to inventoryApp image if available
  description:
    "Inventory App is a centralized stock management system designed to track products, monitor inventory levels in real time, and generate detailed reports. It provides secure role-based access, low-stock alerts, and seamless data synchronization to help businesses maintain accurate and efficient inventory operations."
},
 {
    id: 6,
    name: "Billing Software",
    category: "Software",
    specs: ["Customer information management",
    "Product and stock management",
    "Invoice and quotation generation"],
    image: billing,
    description:
      "Billing Software simplifies business operations by managing customer details, product stocks, quotations, invoices, and tracking expenses efficiently.",
  },
  {
  id: 7,
  name: "Expense Tracker App",
  category: "Mobile App",
  specs: [
    "Income & expense tracking",
    "Category-wise spending insights",
    "Monthly reports & analytics"
  ],
  image: expanseTracker, // 👉 use your expense tracker image variable
  description:
    "Expense Tracker App is a smart financial management solution designed to monitor daily income and expenses in real time. It offers category-based tracking, visual spending insights, and detailed monthly reports. With a user-friendly interface and secure data handling, the app helps individuals and businesses maintain better financial control and make informed budgeting decisions."
}
];


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
  <title>NeuralArc | IoT, Software & AI Solutions</title>
  <meta
    name="description"
    content="NeuralArc provides IoT solutions, software development, AI & ML services, and professional training in India."
  />
  <meta name="keywords" content="IoT solutions, software development, AI ML services, NeuralArc" />
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
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
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
        <button
          onClick={() => setSelectedProduct(product)}
          className="mt-auto group inline-flex items-center gap-2 text-[#E31C24] font-semibold cursor-pointer
                     hover:gap-3 transition-all duration-300"
        >
          <span>View Details</span>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
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
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
  className="rounded-xl w-full h-64 md:h-80 object-cover shadow-md"
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
