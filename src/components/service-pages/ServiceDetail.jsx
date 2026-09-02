import { useParams, Link } from "react-router-dom";
import servicesData from "../../data/servicesData";
import productsData from "../../data/productsData";
import blogData from "../../data/blogData";
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
  const productCategoryByService = {
    iot: "IoT",
    "app-development": "Mobile App",
    "embedded-software-development": "Software",
  };
  const relatedProducts = productCategoryByService[slug]
    ? productsData.filter((p) => p.category === productCategoryByService[slug])
    : [];
  const relatedArticles = blogData.filter((post) => post.relatedService === slug);

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
    {
      key: "technologies",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">Technologies We Use</h2>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    {
      key: "coimbatore",
      maxWidth: "max-w-7xl",
      content: (
        <>
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">Based in Coimbatore</h2>
          <p className="text-gray-600 max-w-3xl mb-4">
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
            {service.title} Products Built by NeuralArc
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
        maxWidth: "max-w-4xl",
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
          <p className="text-lg max-w-3xl">{service.longDescription}</p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={s.key} className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className={`${s.maxWidth} mx-auto px-6`}>{s.content}</div>
        </section>
      ))}

      <Footer />
    </>
  );
};

export default ServiceDetail;
