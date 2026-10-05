import { useParams, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import servicesData from "../../data/servicesData";
import productsData from "../../data/productsData";
import blogData from "../../data/blogData";
import caseStudiesData from "../../data/caseStudiesData";
import { getTechIcon } from "../../utils/techIcons";
import { getTechPagePath } from "../../data/technologiesData";
import Header from "../Header/Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";


const ServiceDetail = () => {
  const { slug } = useParams();

  const service = servicesData.find((s) => s.slug === slug);

  // Maps a service to the product category that genuinely matches it —
  // left out entirely where no real product exists, rather than guessing.
  // Embedded maps to IoT because T-Remo and Tracker run our own firmware.
  const productCategoryByService = {
    iot: "IoT",
    "embedded-software-development": "IoT",
    "hardware-design-manufacturing": "IoT",
    "app-development": "Mobile App",
    "custom-software-development": "Software",
  };
  const productsHeadingByService = {
    iot: "IoT Use Cases: Devices We've Built",
    "embedded-software-development": "Devices Running Our Firmware",
    "hardware-design-manufacturing": "Hardware We've Designed",
  };
  const relatedProducts = productCategoryByService[slug]
    ? productsData.filter((p) => p.category === productCategoryByService[slug])
    : [];
  const relatedArticles = blogData.filter((post) => post.relatedService === slug);
  const relatedCaseStudies = caseStudiesData.filter((cs) => cs.relatedService === slug);
  const contactLink = `/contact?service=${slug}`;

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Service not found</h2>
      </div>
    );
  }

  // Each real content block, in display order. Filtered to only the ones
  // that actually apply to this service, then given alternating white/gray
  // backgrounds by position — so the rhythm stays correct no matter which
  // conditional sections show up for a given service.
  const sections = [
    service.technologies &&
      service.technologies.length > 0 && {
        key: "technologies",
        maxWidth: "max-w-7xl",
        content: (
          <>
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">
              {service.technologiesHeading || "Technologies We Use"}
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {service.technologies.map((tech, i) => {
                const techPath = getTechPagePath(tech);
                const body = (
                  <>
                    {getTechIcon(tech, "w-9 h-9 flex-shrink-0")}
                    <span className="font-medium text-gray-800">{tech}</span>
                  </>
                );
                return (
                  <li key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                    {techPath ? (
                      <Link
                        to={techPath}
                        className="flex items-center gap-3 p-6 hover:text-[#2A6EBB] transition-colors"
                      >
                        {body}
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 p-6">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        ),
      },
    {
      key: "features",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-10 text-center">Key Features</h2>
          {/* Five features would leave one orphan in a 4-column grid, so use 3 then 5 columns. */}
          <div
            className={`grid sm:grid-cols-2 gap-8 ${
              service.features.length === 5 ? "lg:grid-cols-3 xl:grid-cols-5" : "lg:grid-cols-4"
            }`}
          >
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#2A6EBB]/10 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    service.highlight && {
      key: "highlight",
      maxWidth: "max-w-7xl",
      content: (
        <div className="bg-[#2A6EBB] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="text-5xl shrink-0">{service.highlight.icon}</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{service.highlight.title}</h2>
            <p className="text-white/90 leading-relaxed">{service.highlight.description}</p>
          </div>
        </div>
      ),
    },
    service.industries &&
      service.industries.length > 0 && {
        key: "industries",
        maxWidth: "max-w-7xl",
        content: (
          <>
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-10 text-center">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.industries.map((industry) => (
                <div key={industry.title} className="bg-white rounded-xl shadow p-6">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    {
      key: "coimbatore",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">Based in Coimbatore</h2>
          <p className="text-gray-600 mb-4">
            Our team works out of Coimbatore, so you can meet us in person, visit our office, or get local support throughout your project.
          </p>
          <p className="text-gray-700">
            T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120<br />
            <a href="tel:+919597842418" className="text-[#2A6EBB] hover:underline">+91 95978 42418</a>
            {" "}/{" "}
            <a href="tel:+919876543210" className="text-[#2A6EBB] hover:underline">+91 98765 43210</a>
          </p>
        </>
      ),
    },
    relatedProducts.length > 0 && {
      key: "products",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">
            {productsHeadingByService[slug] || `${service.title} Products Built by NeuralArc`}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="bg-gray-50 rounded-xl shadow p-6 flex items-center gap-4 hover:shadow-lg transition"
              >
                <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.specs[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      ),
    },
    relatedCaseStudies.length > 0 && {
      key: "case-studies",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">Case Studies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col"
              >
                <span className="text-sm text-gray-500 mb-1">{cs.subtitle}</span>
                <h3 className="font-semibold text-gray-900 mb-3">{cs.title}</h3>
                <span className="mt-auto text-[#E31C24] font-semibold text-sm">Read the case study →</span>
              </Link>
            ))}
          </div>
        </>
      ),
    },
    relatedArticles.length > 0 && {
      key: "articles",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">How We Build {service.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </>
      ),
    },
    slug === "training" && {
      key: "training-crosslink",
      maxWidth: "max-w-7xl",
      content: (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-4">Explore Our Training Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            See the full list of programs, durations, and what each one covers.
          </p>
          <Link
            to="/TrainingList"
            className="inline-block px-6 py-3 bg-[#E31C24] text-white rounded-md font-semibold hover:bg-red-700 transition"
          >
            View Training Programs
          </Link>
        </div>
      ),
    },
    service.faqs &&
      service.faqs.length > 0 && {
        key: "faqs",
        maxWidth: "max-w-7xl",
        content: (
          <>
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
  ].filter(Boolean);

  return (
    <>

<Helmet>
  <title>{service.metaTitle || `${service.title} | NeuralArc`}</title>
  <meta
    name="description"
    content={service.metaDescription || service.shortDescription}
  />
  <link rel="canonical" href={`https://www.neuralarc.com/services/${service.slug}`} />
</Helmet>
      <Header />

      {/* Hero */}
      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">{service.h1 || service.title}</h1>
          {service.heroPoints && (
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
              {service.heroPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 font-semibold w-fit"
                >
                  <FaCheckCircle className="w-4 h-4 text-white shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          )}
          <p className="text-lg">{service.longDescription}</p>
          <Link
            to={contactLink}
            className="inline-block mt-8 bg-[#E31C24] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* Alternate white/gray, counting back from the last section so it
          always lands on gray — the gradient CTA below then follows it. */}
      {sections.map((s, i) => (
        <section
          key={s.key}
          className={`py-16 ${
            (sections.length - 1 - i) % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className={`${s.maxWidth} mx-auto px-6`}>{s.content}</div>
        </section>
      ))}

      {/* CTA — same treatment as the product pages */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#2A6EBB] to-[#E31C24] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to start your {service.title} project?
        </h2>
        <Link
          to={contactLink}
          className="inline-block px-6 py-3 bg-white text-[#E31C24] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Talk to Our Team
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetail;
