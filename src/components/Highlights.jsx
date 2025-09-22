import { FaRegLightbulb, FaCogs, FaUsers, FaRocket } from "react-icons/fa";

const highlights = [
  {
    icon: <FaRegLightbulb className="text-[#2A6EBB] w-10 h-10" />,
    title: "25+ Years Experience",
    description: "Delivering cutting-edge solutions to clients worldwide.",
  },
  {
    icon: <FaCogs className="text-[#E31C24] w-10 h-10" />,
    title: "50+ Products",
    description: "Innovative IoT, software, and data science products.",
  },
  {
    icon: <FaUsers className="text-[#2A6EBB] w-10 h-10" />,
    title: "100+ Clients",
    description: "Trusted by businesses across multiple industries.",
  },
  {
    icon: <FaRocket className="text-[#E31C24] w-10 h-10" />,
    title: "Global Reach",
    description: "Expanding our impact with technology and innovation.",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12">
          Why Choose Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
