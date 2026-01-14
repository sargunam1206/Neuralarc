import { FaSearch, FaDraftingCompass, FaCode, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Requirement & Discovery",
    description: "We understand your needs and define a clear project roadmap.",
  },
  {
    icon: <FaDraftingCompass className="w-10 h-10 text-[#E31C24]" />,
    title: "Design & Analysis",
    description: "We plan and design scalable, efficient solutions.",
  },
  {
    icon: <FaCode className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Development & Testing",
    description: "We build and test reliable, high-quality applications.",
  },
  {
    icon: <FaHandsHelping className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Delivery & Support",
    description: "We launch the solution and provide continuous support.",
  },
];

const Process = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
          data-aos="fade-down"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition h-full"
              data-aos="fade-up"
            >
              {/* Icon (fixed height) */}
              <div className="h-14 flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Title (fixed height) */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">
                {step.title}
              </h3>

              {/* Description (flex) */}
              <p className="text-gray-600 text-sm leading-relaxed min-h-[4rem]">
                {step.description}
              </p>

              {/* Step Number (always bottom) */}
              <div className="mt-auto pt-6">
  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#2A6EBB] text-white text-sm font-bold">
    {index + 1}
  </span>
</div>




            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
