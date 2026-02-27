import {
  FaDatabase,
  FaMicrochip,
  FaPhoneAlt,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: <FaDatabase className="text-[#2A6EBB] w-12 h-12" />,
    title: "Data Science",
    description: "Analyze and transform your data to actionable insights.",
    link: "/services/data-science",
  },
  {
    icon: <FaMicrochip className="text-[#E31C24] w-12 h-12" />,
    title: "IoT Products development",
    description: "Connect devices seamlessly and optimize operations.",
    link: "/services/iot",
  },
  {
    icon: <FaLaptopCode className="text-[#E31C24] w-12 h-12" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    link: "/services/software-development",
  },
  {
    icon: <FaGlobe className="text-[#2A6EBB] w-12 h-12" />,
    title: "Web Development",
    description: "Responsive and high-performance web applications.",
    link: "/services/web-development",
  },
];

const Services = () => {
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
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12" data-aos="fade-down">
            Our Services
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
                data-aos="fade-up"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {/* <a
                  href={service.link}
                  className="text-[#E31C24] font-semibold hover:underline"
                >
                  Learn More
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>
  <div className="flex justify-center mb-15" data-aos="fade-right">
  <a
    href="/serviceList"
    className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
  >
    <span>Know More</span>
    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</div>



    </>
  );
};

export default Services;
