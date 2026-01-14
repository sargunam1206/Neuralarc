import { FaUserTie, FaCogs, FaUsers, FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Optional: trigger count only when visible
const highlights = [
 {
  icon: <FaUserTie className="text-[#2A6EBB] w-10 h-10" />,
  number: 15,
  text: "Years Experience",
  suffix: "+",
description: "Decades of hands-on industry expertise."
},
  {
    icon: <FaCogs className="text-[#E31C24] w-10 h-10" />,
    number: 25,
    text: "Products",
    suffix: "+",
    description: "Innovative IoT, software, and data science products.",
  },
  {
    icon: <FaUsers className="text-[#2A6EBB] w-10 h-10" />,
    number: 100,
    text: "Clients",
    suffix: "+",
    description: "Trusted by businesses across multiple industries.",
  },
  {
    icon: <FaRocket className="text-[#E31C24] w-10 h-10" />,
    number: null, // No count for global reach
    text: "Global Reach",
    suffix: "",
    description: "Expanding our impact with technology and innovation.",
  },
];


const Highlights = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12" data-aos="fade-down">
          Why Choose Us
        </h2>

<div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
  data-aos="fade-up"
  ref={ref}
>
          {highlights.map((item, index) => (
           <div
  key={index}
  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform h-full"
>

<div className="mb-4">
  {item.icon}
</div>
             <h3 className="text-xl font-semibold text-gray-900 mb-3 min-h-[3.5rem] flex items-center justify-center">
  {item.number !== null && (
    <CountUp
      start={0}
      end={inView ? item.number : 0}
      duration={2}
      suffix={item.suffix}
    />
  )}{" "}
  {item.text}
</h3>

<p className="text-gray-600 mt-auto text-base">
  {item.description}
</p>            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;