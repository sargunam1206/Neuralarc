import { FaSearch, FaDraftingCompass, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Requirement & Discovery",
    description:
      "We gather your business needs and analyze the challenges to define a clear roadmap.",
  },
  {
    icon: <FaDraftingCompass className="w-10 h-10 text-[#E31C24]" />,
    title: "Design & Analysis",
    description:
      "Our team designs and plans solutions using cutting-edge technology and best practices.",
  },
  {
    icon: <FaHandsHelping className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Delivery & Support",
    description:
      "We implement the solution and provide ongoing support to ensure success.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{step.description}</p>

              {/* Optional Step Number */}
              <div className="mt-4 text-[#E31C24] font-bold text-lg">
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
