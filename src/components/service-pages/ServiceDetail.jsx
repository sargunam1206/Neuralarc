import { useParams, Link } from "react-router-dom";
import servicesData from "../../data/servicesData";
import productsData from "../../data/productsData";
import blogData from "../../data/blogData";
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

      {/* Technologies */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">
            Technologies We Use
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.technologies.map((tech, i) => (
              <li
                key={i}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-[#2A6EBB] mb-10 text-center">
      Key Features
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {service.features.map((feature, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition"
        >
          {/* Icon circle (optional but recommended) */}
         <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#2A6EBB]/10 flex items-center justify-center text-3xl">
  {feature.icon}
</div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Based in Coimbatore */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">
            Based in Coimbatore
          </h2>
          <p className="text-gray-600 max-w-3xl mb-4">
            Our team works out of Coimbatore, so you can meet us in person, visit our office, or get local support throughout your project.
          </p>
          <p className="text-gray-700">
            T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120<br />
            <a href="tel:+919597842418" className="text-[#2A6EBB] hover:underline">+91 95978 42418</a>
            {" "}/{" "}
            <a href="tel:+919876543210" className="text-[#2A6EBB] hover:underline">+91 98765 43210</a>
          </p>
        </div>
      </section>

      {/* Products built on this service */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
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
          </div>
        </section>
      )}

      {/* Related engineering notes */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">
              How We Build {service.title}
            </h2>
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
          </div>
        </section>
      )}

      {/* Training programs cross-link */}
      {slug === "training" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-4">
              Explore Our Training Programs
            </h2>
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
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default ServiceDetail;
