import Header from "./Header/Header"; 
import { Link } from "react-router-dom";
import { FaDatabase, FaMicrochip, FaLaptopCode, FaGlobe, FaChalkboardTeacher, FaMobileAlt,FaUserTie  } from "react-icons/fa";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";


const services = [
  {
    icon: <FaMicrochip className="text-[#2A6EBB] w-12 h-12" />,
    title: "IoT Solutions",
    description: "Smart automation and connected devices for industries & homes.",
    link: "/services/iot",
  },
  {
    icon: <FaDatabase className="text-[#E31C24] w-12 h-12" />,
    title: "AI, ML & Data Science",
    description: "Transform your data into business-driven decisions.",
    link: "/services/AI, ML & Data Science",
  },
  {
    icon: <FaLaptopCode className="text-[#2A6EBB] w-12 h-12" />,
    title: "Software Development",
    description: "Robust and scalable web & mobile applications.",
    link: "/services/software-development",
  },
  {
    icon: <FaGlobe className="text-[#E31C24] w-12 h-12" />,
    title: "Full Stack Development",
    description: "Modern, responsive, and high-performance websites.",
    link: "/services/Full Stack Development",
  }
  ,{
   icon: <FaMobileAlt className="text-[#2A6EBB] w-12 h-12" />,
    title: "App Development",
    description: "User-friendly, scalable, and high-performance Android & iOS applications.",
    link: "/services/app-development",
  },
  {
    icon: <FaChalkboardTeacher className="text-[#E31C24] w-12 h-12" />,
    title: "Training",
    description: "Hands-on learning programs for students and professionals.",
    link: "/services/training",
  }
];

const ServiceList = () => {
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

     {/* Hero Section */}
<section className="bg-[#2A6EBB] text-white py-16" data-aos="fade-down">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-4xl font-bold mb-4">Our Services</h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto">
      Explore our range of technology solutions crafted to help businesses grow smarter and faster.
    </p>
  </div>
</section>

{/* Services Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Section Heading */}
    <h2 
      className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
      data-aos="zoom-in"
    >
      What We Offer
    </h2>

    {/* Service Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition"
          data-aos="fade-up"
          data-aos-delay={index * 200} // stagger effect
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4 text-base">{service.description}</p>
          <Link
            to={service.link}
            className="text-[#E31C24] font-semibold hover:underline text-base"
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  </div>

 
</section>

      <Footer/>
    </>
  );
};

export default ServiceList;
