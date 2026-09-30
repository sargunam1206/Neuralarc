import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUser,
  FaMicrochip,
  FaRobot,
  FaChartLine,
  FaLayerGroup,
  FaQuoteLeft,
} from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer";

const team = [
  { name: "A. Kumar", role: "Founder & CEO", color: "#2A6EBB" },
  { name: "S. Raj", role: "Lead Engineer", color: "#E31C24" },
  { name: "P. Iyer", role: "Product Designer", color: "#1E6B45" },
  { name: "V. Menon", role: "Data Scientist", color: "#92600C" },
  { name: "R. Nair", role: "QA Engineer", color: "#5B3A9E" },
];

const deliverables = [
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "AI-Powered Automation",
    description: "Automated workflows that cut manual work and speed up day-to-day operations.",
    caseStudy: { slug: "microlab-diagnostic-lab-tracking", label: "Read Case Study" },
  },
  {
    icon: <FaMicrochip className="w-8 h-8" />,
    title: "IoT Device Management",
    description: "Real-time monitoring and control of connected devices, wherever they are.",
    caseStudy: { slug: "t-remo-cold-chain-monitoring", label: "Read Case Study" },
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Data-Driven Insights",
    description: "Turning raw data into dashboards and decisions your team can act on.",
    serviceLink: { slug: "ai-ml-data-science", label: "Explore AI & Data Science" },
  },
  {
    icon: <FaLayerGroup className="w-8 h-8" />,
    title: "Scalable Software",
    description: "Custom platforms built to grow with your business, not against it.",
    caseStudy: { slug: "leadpro-centralizing-lead-management", label: "Read Case Study" },
  },
];

const IndustryLeadingSolutions = () => {
  return (
    <>
      <Helmet>
        <title>Industry-Leading Solutions | NeuralArc</title>
        <meta
          name="description"
          content="NeuralArc's core expertise across IoT, AI/ML, data science, and software development, and the team behind it."
        />
        <link rel="canonical" href="https://www.neuralarc.com/why-choose-us/industry-leading-solutions" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Industry-Leading Solutions</h1>
          <p className="text-lg max-w-xl mx-auto">
            Innovative IoT, AI, and software solutions tailored to real-world business challenges.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Core expertise — intro copy with inline links to each service */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[#2A6EBB] mb-4">Our Core Expertise</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From connected hardware to intelligent software, NeuralArc's core
              expertise spans six disciplines that work together on every project:{" "}
              <Link
                to="/services/iot"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                IoT Solutions
              </Link>
              ,{" "}
              <Link
                to="/services/ai-ml-data-science"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                AI, ML &amp; Data Science
              </Link>
              ,{" "}
              <Link
                to="/services/embedded-software-development"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                Embedded Software Development
              </Link>
              ,{" "}
              <Link
                to="/services/full-stack-development"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                Full Stack Development
              </Link>
              ,{" "}
              <Link
                to="/services/app-development"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                Mobile App Development
              </Link>
              , and{" "}
              <Link
                to="/services/training"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                Training &amp; Internship Programs
              </Link>
              . Most engagements draw on more than one of these at once — a connected
              device needs firmware and a dashboard, a dashboard needs data science
              behind it — which is how we deliver solutions end to end instead of
              handing off between teams.
            </p>
          </div>

          {/* Solutions we deliver — enlarged cards with case study links */}
          <h2 className="text-2xl font-bold text-[#2A6EBB] mb-8">Solutions We Deliver</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {deliverables.map((d, i) => (
              <div
                key={d.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-7 flex flex-col text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#2A6EBB]/10 text-[#2A6EBB] flex items-center justify-center mx-auto mb-5">
                  {d.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">{d.description}</p>
                {d.caseStudy ? (
                  <Link
                    to={`/case-studies/${d.caseStudy.slug}`}
                    className="text-[#E31C24] font-semibold text-sm hover:underline"
                  >
                    {d.caseStudy.label} →
                  </Link>
                ) : (
                  <Link
                    to={`/services/${d.serviceLink.slug}`}
                    className="text-[#E31C24] font-semibold text-sm hover:underline"
                  >
                    {d.serviceLink.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Team — enlarged cards */}
          <h2 className="text-2xl font-bold text-[#2A6EBB] mb-8">People Behind Our Success</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-6 text-center relative"
              >
                <FaQuoteLeft className="text-[#2A6EBB]/10 w-8 h-8 mx-auto mb-2" />
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: member.color }}
                >
                  <FaUser className="w-10 h-10" />
                </div>
                <div className="font-semibold text-gray-900">{member.name}</div>
                <div className="text-sm text-gray-500">{member.role}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-xs text-gray-400 border-t pt-4 mt-8">
            <FaCheckCircle className="inline text-[#2A6EBB] w-3 h-3 mr-1" />
            Innovation. Expertise. Impact.
            <div className="mt-1">Placeholder team profiles — swap in real photos and names anytime.</div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#2A6EBB] to-[#E31C24] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to work with our team?</h2>
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

export default IndustryLeadingSolutions;
