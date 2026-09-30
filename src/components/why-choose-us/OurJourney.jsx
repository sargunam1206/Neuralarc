import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer";
import productsData from "../../data/productsData";

const journeyProducts = productsData.filter((p) => p.slug !== "expense-tracker-app").slice(0, 8);

const OurJourney = () => {
  return (
    <>
      <Helmet>
        <title>25+ Products | NeuralArc</title>
        <meta
          name="description"
          content="Products and solutions built by NeuralArc across IoT, mobile, and software."
        />
        <link rel="canonical" href="https://www.neuralarc.com/why-choose-us/products" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">25+ Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Innovative IoT, software, and data science products.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Over the years we&apos;ve built more than 25 products across IoT
            hardware, mobile apps, and business software — each one solving a
            real operational problem for the team that uses it every day, rather
            than sitting on a shelf as a proof of concept. Some, like T-Remo and
            Tracker, are physical devices that report from the field over LoRa,
            cellular, or Wi-Fi; others, like Kadai and LeadPro, are software our
            clients' staff open every morning to run billing, stock, or their
            sales pipeline. The thread running through all of them is the same:
            we design for the workflow the product actually has to fit into, not
            a generic template. Here&apos;s a closer look at eight of them, from
            cold-chain monitoring devices to billing and lead-management
            platforms — the rest are in the full product catalog below.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="flex items-center gap-4 bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#2A6EBB]/10 flex items-center justify-center">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <FaFlask className="text-[#2A6EBB] w-6 h-6" />
                  )}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.category}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/Productes" className="text-[#E31C24] font-semibold hover:underline">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurJourney;
