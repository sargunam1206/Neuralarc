import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer";

const stats = [
  { value: "4.8/5", label: "Average Rating" },
  { value: "100+", label: "Happy Clients" },
  { value: "Illustrative", label: "Client Satisfaction" },
];

const clientReviews = [
  {
    quote:
      "NeuralArc delivered outstanding IoT solutions that transformed our operations. Their expertise and support were top-notch.",
    name: "Gowri",
    company: "MicroLab Team",
    industry: "Healthcare / Diagnostics",
  },
  {
    quote:
      "The Data Science team at NeuralArc helped us unlock hidden insights. We saw measurable growth within months.",
    name: "Sarah Johnson",
    company: "GVG College Students",
    industry: "Education",
  },
  {
    quote:
      "From development to deployment, NeuralArc exceeded our expectations. Truly a reliable tech partner.",
    name: "Bala",
    company: "Maven Yanim",
    industry: "Software",
  },
];

const ClientReviews = () => {
  return (
    <>
      <Helmet>
        <title>100+ Clients | NeuralArc</title>
        <meta
          name="description"
          content="What NeuralArc's clients say about working with us across IoT, software, and data science projects."
        />
        <link rel="canonical" href="https://www.neuralarc.com/why-choose-us/clients" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">What Our Clients Say</h1>
          <p className="text-lg max-w-xl mx-auto">
            Trusted by businesses across multiple industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl text-center py-5 px-2 shadow-sm">
                <div className="text-lg md:text-xl font-bold text-[#2A6EBB]">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Stacked testimonials */}
          <div className="flex flex-col gap-5">
            {clientReviews.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-sm p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-4">"{r.quote}"</p>
                <div className="text-sm font-semibold text-gray-900">
                  {r.name}
                  <span className="text-gray-400 font-normal"> — {r.company}</span>
                </div>
                <div className="text-xs text-[#2A6EBB] mt-0.5">{r.industry}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Rating &amp; satisfaction figures are illustrative; the reviews above are genuine.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ClientReviews;
