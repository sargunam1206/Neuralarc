import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import worldMap from "../../assets/images/world-map.png";
import Header from "../Header/Header";
import Footer from "../Footer";

const countries = [
  { name: "India", note: "Coimbatore — Home Base", flag: "🇮🇳" },
  { name: "Sweden", note: "", flag: "🇸🇪" },
  { name: "Estonia", note: "", flag: "🇪🇪" },
  { name: "USA", note: "", flag: "🇺🇸" },
  { name: "Singapore", note: "", flag: "🇸🇬" },
];

const stats = [
  { value: "5", label: "Countries" },
  { value: "Remote", label: "Delivery Model" },
  { value: "Global", label: "Client Support" },
  { value: "24/7", label: "Cross-Timezone Support" },
];

const GlobalReachPage = () => {
  return (
    <>
      <Helmet>
        <title>Global Reach | NeuralArc</title>
        <meta
          name="description"
          content="Where NeuralArc delivers IoT, AI, and software projects — Coimbatore-based, with reach across multiple countries."
        />
        <link rel="canonical" href="https://www.neuralarc.com/why-choose-us/global-reach" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Global Reach</h1>
          <p className="text-lg max-w-xl mx-auto">
            Our solutions are trusted by clients across the globe.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Map */}
          <div className="bg-gray-50 rounded-2xl shadow-sm p-6 mb-8">
            <img src={worldMap} alt="Map showing NeuralArc's reach across India, USA, Sweden, Estonia, and Singapore" className="w-full h-auto" />
          </div>

          {/* Stat row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl text-center py-5 px-2 shadow-sm">
                <div className="text-xl md:text-2xl font-bold text-[#2A6EBB]">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Our Presence */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Presence</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((c) => (
              <div key={c.name} className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-4">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <div className="font-semibold text-gray-900">{c.name}</div>
                  {c.note && <div className="text-xs text-gray-500">{c.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#2A6EBB] to-[#E31C24] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a project outside India?</h2>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-white text-[#E31C24] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Talk to Us
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default GlobalReachPage;
