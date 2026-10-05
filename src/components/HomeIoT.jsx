import { Link } from "react-router-dom";
import { FaMicrochip, FaWifi, FaCloud, FaChartLine, FaCheckCircle } from "react-icons/fa";
import servicesData from "../data/servicesData";
import productsData from "../data/productsData";
import blogData from "../data/blogData";
import { getTechIcon } from "../utils/techIcons";
import { getTechPagePath } from "../data/technologiesData";

// Homepage spotlight for IoT — the company's core focus. Everything here is
// pulled from the existing data files so it stays in sync with the IoT
// service page, product pages and blog.
const iot = servicesData.find((s) => s.slug === "iot");
// Two monitoring devices plus the two agriculture products — a 2×2 grid.
const iotProducts = ["t-remo", "tracker", "smart-agri-solution", "istarter"]
  .map((slug) => productsData.find((p) => p.slug === slug))
  .filter(Boolean);
const iotArticles = blogData.filter((post) => post.relatedService === "iot").slice(0, 3);

// Sensor → gateway → cloud → dashboard, as described in the IoT service
// features and the "IoT Architecture: From Sensor to Dashboard" article.
const flow = [
  {
    icon: FaMicrochip,
    title: "Sensor & Device",
    description: "Firmware and sensing on ESP32 (ESP-IDF) and STM32 hardware.",
  },
  {
    icon: FaWifi,
    title: "Gateway",
    description: "Connectivity over Wi-Fi, LoRa, cellular or SMS.",
  },
  {
    icon: FaCloud,
    title: "Cloud",
    description: "Encrypted device-to-cloud data transmission.",
  },
  {
    icon: FaChartLine,
    title: "Dashboard & Alerts",
    description: "Live dashboards, remote control and SMS, email or app alerts.",
  },
];

const HomeIoT = () => {
  return (
    // overflow-x-clip stops the side-slide animations from widening the page on mobile.
    <section className="py-15 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Intro + flow */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
          <div data-aos="fade-right">
            <p className="text-xs font-bold tracking-[0.2em] text-[#E31C24] mb-3">
              OUR CORE FOCUS
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2A6EBB] leading-tight mb-5">
              IoT Solutions, From Sensor to Dashboard
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">{iot.metaDescription}</p>
            <ul className="space-y-2 mb-8">
              {iot.heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 font-semibold text-gray-800">
                  <FaCheckCircle className="w-4 h-4 text-[#E31C24] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services/iot"
                className="bg-[#2A6EBB] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#1f5aa0] transition"
              >
                Explore IoT Solutions
              </Link>
              <Link
                to="/contact?service=iot"
                className="block bg-[#E31C24] text-white px-4 py-2 rounded-md text-center hover:bg-red-700 mt-2"
              >
                Discuss Your IoT Project
              </Link>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
            {flow.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="bg-gray-50 rounded-xl p-5 flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-[#2A6EBB]/10 text-[#2A6EBB] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Offline store-and-forward callout */}
        <div className="bg-[#2A6EBB] text-white rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 mb-14" data-aos="fade-up">
          <div className="text-4xl shrink-0">{iot.highlight.icon}</div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">{iot.highlight.title}</h3>
            <p className="text-white/90">{iot.highlight.description}</p>
          </div>
        </div>

        {/* IoT products */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">IoT Devices We&apos;ve Built</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {iotProducts.map((product) => {
            return (
              <div
                key={product.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-2xl transition"
                data-aos="fade-up"
              >
                {/* object-contain so the whole device is visible, not cropped */}
                <div className="w-full sm:w-2/5 shrink-0 bg-gray-50 flex items-center justify-center p-4 h-56 sm:h-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full sm:max-h-64 object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-[#2A6EBB] mb-1">{product.category}</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{product.description}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                    <Link to={`/products/${product.slug}`} className="text-[#E31C24] hover:underline">
                      View Product →
                    </Link>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies + articles */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{iot.technologiesHeading}</h3>
            <ul className="flex flex-wrap gap-3">
              {iot.technologies.map((tech) => {
                const path = getTechPagePath(tech);
                const icon = getTechIcon(tech, "w-7 h-7 flex-shrink-0");
                const body = (
                  <>
                    {icon}
                    <span className="font-medium text-gray-800">{tech}</span>
                  </>
                );
                // Chips without a logo get even padding instead of the icon inset.
                const chip = `flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full ${
                  icon ? "pl-2 pr-4" : "px-4"
                } py-2 min-h-[2.75rem]`;
                return (
                  <li key={tech}>
                    {path ? (
                      <Link
                        to={path}
                        className={`${chip} hover:border-[#2A6EBB]/40 hover:text-[#2A6EBB] transition`}
                      >
                        {body}
                      </Link>
                    ) : (
                      <span className={chip}>
                        {body}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">From Our IoT Engineering Notes</h3>
            <ul className="space-y-3">
              {iotArticles.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-gray-50 rounded-lg px-5 py-3 font-medium text-gray-800 hover:text-[#2A6EBB] hover:bg-[#2A6EBB]/5 transition"
                  >
                    {post.title} →
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/blog?category=iot"
              className="inline-block mt-4 text-[#E31C24] font-semibold hover:underline"
            >
              All IoT articles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIoT;
