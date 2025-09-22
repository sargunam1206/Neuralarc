import { FaQuoteLeft } from "react-icons/fa";
// import client1 from "../assets/logos/";
import client1 from "../assets/logos/client1.png";
import client2 from "../assets/logos/client2.png";
import client3 from "../assets/logos/client3.png";



const testimonials = [
  {
    quote:
      "NeuralArc delivered outstanding IoT solutions that transformed our operations. Their expertise and support were top-notch.",
    name: "John Smith",
    role: "CTO, TechCorp",
  },
  {
    quote:
      "The Data Science team at NeuralArc helped us unlock hidden insights. We saw measurable growth within months.",
    name: "Sarah Johnson",
    role: "Head of Analytics, FinPro",
  },
  {
    quote:
      "From development to deployment, NeuralArc exceeded our expectations. Truly a reliable tech partner.",
    name: "Michael Lee",
    role: "CEO, InnovateX",
  },
];

const clientLogos = [client1, client2, client3];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted by businesses across industries
        </p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <FaQuoteLeft className="text-[#E31C24] text-2xl mb-4" />
              <p className="text-gray-700 mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
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
              className="h-12 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
