import { FaQuoteLeft } from "react-icons/fa";
import client1 from "../assets/logos/client1.png";
import client2 from "../assets/logos/client2.png";
import client3 from "../assets/logos/client3.png";


const testimonials = [
  {
    quote:
      "NeuralArc delivered outstanding IoT solutions that transformed our operations. Their expertise and support were top-notch.",
    name: "Gowri",
    role: "MicroLab Team",
  },
  {
    quote:
      "The Data Science team at NeuralArc helped us unlock hidden insights. We saw measurable growth within months.",
    name: "Sarah Johnson",
    role: " GVG College Students",
  },
  {
    quote:
      "From development to deployment, NeuralArc exceeded our expectations. Truly a reliable tech partner.",
    name: "Bala",
    role: "Maven Yanim",
  },
];

const clientLogos = [client1, client2, client3];

const Testimonials = () => {
  return (
    <section className="py-15 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-2"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted by businesses across industries
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
              data-aos="fade-up"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#2A6EBB]/20 text-3xl mb-4" />

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                “{t.quote}”
              </p>

              {/* Author */}
              <div className="mt-auto">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <span className="text-xs text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10">
          {clientLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client Logo ${idx + 1}`}
              className="h-10 opacity-60 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
