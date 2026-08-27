import { Link } from "react-router-dom";
import { FaMicrochip, FaDatabase, FaLaptopCode, FaGlobe, FaMobileAlt, FaChalkboardTeacher } from "react-icons/fa";
import servicesData from "../data/servicesData";

const iconBySlug = {
  iot: <FaMicrochip className="text-[#2A6EBB] w-10 h-10" />,
  "ai-ml-data-science": <FaDatabase className="text-[#E31C24] w-10 h-10" />,
  "embedded-software-development": <FaLaptopCode className="text-[#2A6EBB] w-10 h-10" />,
  "full-stack-development": <FaGlobe className="text-[#E31C24] w-10 h-10" />,
  "app-development": <FaMobileAlt className="text-[#2A6EBB] w-10 h-10" />,
  training: <FaChalkboardTeacher className="text-[#E31C24] w-10 h-10" />,
};

const HomeSolutions = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
          data-aos="fade-down"
        >
          Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition"
              data-aos="fade-up"
            >
              <div className="mb-4">{iconBySlug[service.slug]}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
              <span className="text-[#E31C24] font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
