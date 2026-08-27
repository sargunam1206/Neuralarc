import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheck, FaFlask } from "react-icons/fa";
import productsData from "../../data/productsData";
import servicesData from "../../data/servicesData";
import caseStudiesData from "../../data/caseStudiesData";
import Header from "../Header/Header";
import Footer from "../Footer";

// Same mapping used on the service pages, in reverse — only categories with
// a real, evidenced matching service get a cross-link.
const serviceSlugByCategory = {
  IoT: "iot",
  "Mobile App": "app-development",
  Software: "embedded-software-development",
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  const relatedService = servicesData.find(
    (s) => s.slug === serviceSlugByCategory[product.category]
  );
  const caseStudy = caseStudiesData.find((cs) => cs.relatedProduct === product.slug);

  return (
    <>
      <Helmet>
        <title>{product.name} | {product.category} Product by NeuralArc</title>
        <meta
          name="description"
          content={`${product.description.slice(0, 140)}${product.description.length > 140 ? "…" : ""}`}
        />
        <link rel="canonical" href={`https://www.neuralarc.com/products/${product.slug}`} />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <span className="inline-block bg-white/15 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            {product.tagline && (
              <p className="text-xl text-white/90 mb-4">{product.tagline}</p>
            )}
            <p className="text-lg max-w-xl">{product.description}</p>
          </div>
          <div className="md:w-2/5">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl shadow-xl border-4 border-white w-full h-64 object-cover"
              />
            ) : (
              <div className="rounded-xl shadow-xl border-4 border-white w-full h-64 flex flex-col items-center justify-center gap-3 bg-white/10 text-white">
                <FaFlask className="w-14 h-14" />
                <span className="text-sm font-medium">Image coming soon</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">
            Key Specifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.specs.map((spec, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 flex items-start gap-3"
              >
                <FaCheck className="text-[#2A6EBB] mt-1 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full feature workflow */}
      {product.features && product.features.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-10 text-center">
              How {product.name} Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Business benefits */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-8">
              Business Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-4 flex items-start gap-3"
                >
                  <FaCheck className="text-[#E31C24] mt-1 w-4 h-4 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology stack */}
      {product.technologies && product.technologies.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">
              Technology Stack
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-lg shadow text-center border"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Built by NeuralArc's team for this service */}
      {relatedService && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-4">
              Built by NeuralArc's {relatedService.title} Team
            </h2>
            <p className="text-gray-600 max-w-3xl mb-6">
              {product.name} was designed and developed by our team in Coimbatore, using the same stack and process we use across our {relatedService.title} projects.
            </p>
            <Link
              to={`/services/${relatedService.slug}`}
              className="text-[#E31C24] font-semibold hover:underline"
            >
              See our {relatedService.title} services →
            </Link>
          </div>
        </section>
      )}

      {/* Case study */}
      {caseStudy && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2A6EBB] mb-4">
              Case Study: {caseStudy.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mb-6">{caseStudy.challenge}</p>
            <Link
              to={`/case-studies/${caseStudy.slug}`}
              className="text-[#E31C24] font-semibold hover:underline"
            >
              Read the full case study →
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2A6EBB] to-[#E31C24] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Interested in {product.name}?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-white text-[#E31C24] rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Talk to Our Team
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
