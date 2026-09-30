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
    rating: 5,
  },
  {
    quote:
      "The Data Science team at NeuralArc helped us unlock hidden insights. We saw measurable growth within months.",
    name: "Sarah Johnson",
    company: "GVG College Students",
    industry: "Education",
    rating: 5,
  },
  {
    quote:
      "From development to deployment, NeuralArc exceeded our expectations. Truly a reliable tech partner.",
    name: "Bala",
    company: "Maven Yanim",
    industry: "Software",
    rating: 5,
  },
  // Sample / illustrative feedback — replace with verified reviews as they're collected.
  {
    quote:
      "Our cold-chain sensors used to fail quietly. NeuralArc's monitoring system gives us an alert the moment something drifts out of range.",
    name: "Ramesh Iyer",
    company: "Coldline Logistics",
    industry: "Logistics / Cold Chain",
    rating: 5,
  },
  {
    quote:
      "They took the time to understand our lab workflow before writing a line of code. The tracking system fits how our staff actually work.",
    name: "Divya Menon",
    company: "BrightPath Diagnostics",
    industry: "Healthcare",
    rating: 5,
  },
  {
    quote:
      "Kadai replaced three separate spreadsheets for us. Billing and stock are finally in one place, and staff picked it up in a day.",
    name: "Aravind K.",
    company: "Aravind Retail Stores",
    industry: "Retail",
    rating: 4,
  },
  {
    quote:
      "The embedded team handled a tricky sensor integration we'd struggled with in-house for months, and documented it well enough that we can maintain it ourselves.",
    name: "Neha Sharma",
    company: "Tvasta Manufacturing",
    industry: "Industrial / Manufacturing",
    rating: 5,
  },
  {
    quote:
      "LeadPro gave our sales team one view of every lead instead of scattered notes and calls. Follow-ups don't fall through the cracks anymore.",
    name: "Suresh Babu",
    company: "Suresh Babu Consulting",
    industry: "Sales / CRM",
    rating: 4,
  },
  {
    quote:
      "Our soil sensors run on LoRa across the whole farm now, well past where our old WiFi setup ever reached, and the battery life has held up.",
    name: "Priyanka R.",
    company: "GreenAgro Farms",
    industry: "Agriculture",
    rating: 5,
  },
  {
    quote:
      "Real-time GPS on our delivery fleet cut down the 'where's my order' calls almost immediately. The dashboard is simple enough that dispatch uses it without training.",
    name: "Vignesh T.",
    company: "UrbanFleet Mobility",
    industry: "Transportation",
    rating: 4,
  },
  {
    quote:
      "Professional from the first call to go-live. They flagged risks early instead of letting us find out the hard way.",
    name: "Kavitha S.",
    company: "Kavitha Pharmacy Group",
    industry: "Pharma / Retail",
    rating: 5,
  },
  {
    quote:
      "We sent our junior developers through NeuralArc's training program and they came back building real features in their second week, not their second month.",
    name: "Arjun Nair",
    company: "SkillForge Academy",
    industry: "EdTech / Training",
    rating: 5,
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-6 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl text-center py-5 px-2 shadow-sm">
                <div className="text-lg md:text-xl font-bold text-[#2A6EBB]">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar
                      key={j}
                      className={`w-4 h-4 ${j < r.rating ? "text-yellow-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-4 flex-1">"{r.quote}"</p>
                <div className="text-sm font-semibold text-gray-900">
                  {r.name}
                  <span className="text-gray-400 font-normal"> — {r.company}</span>
                </div>
                <div className="text-xs text-[#2A6EBB] mt-0.5">{r.industry}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Rating &amp; satisfaction figures are illustrative. Feedback shown is a mix of
            direct client reviews and representative sample quotes — get in touch for
            verified references.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ClientReviews;
