import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Footer from "../Footer";
import caseStudiesData from "../../data/caseStudiesData";
import productsData from "../../data/productsData";
import servicesData from "../../data/servicesData";
import { getTechIcon } from "../../utils/techIcons";
import { getTechPagePath } from "../../data/technologiesData";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Case study not found</h2>
      </div>
    );
  }

  const product = productsData.find((p) => p.slug === caseStudy.relatedProduct);
  const service = servicesData.find((s) => s.slug === caseStudy.relatedService);

  return (
    <>
      <Helmet>
        <title>{caseStudy.metaTitle}</title>
        <meta name="description" content={caseStudy.metaDescription} />
        <link rel="canonical" href={`https://www.neuralarc.com/case-studies/${caseStudy.slug}`} />
      </Helmet>
      <Header />

      <section
        className="relative bg-[#0A0E14] text-white py-20 bg-cover bg-center"
        style={
          caseStudy.image
            ? {
                backgroundImage: `linear-gradient(to top, rgba(10,14,20,0.92), rgba(10,14,20,0.55)), url(${caseStudy.image})`,
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-sm font-medium text-white/80 mb-2 block">
            {caseStudy.subtitle}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{caseStudy.title}</h1>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.approach}</p>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">Technology</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {caseStudy.technologies.map((tech, i) => {
              const techPath = getTechPagePath(tech);
              const body = (
                <>
                  {getTechIcon(tech, "w-8 h-8 flex-shrink-0")}
                  <span className="font-medium text-gray-800 text-sm">{tech}</span>
                </>
              );
              return (
                <li key={i} className="bg-white border rounded-xl hover:shadow-lg transition">
                  {techPath ? (
                    <Link
                      to={techPath}
                      className="flex items-center gap-3 p-4 hover:text-[#2A6EBB] transition-colors"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 p-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">Outcome</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.outcome}</p>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row gap-4">
          {product && (
            <Link
              to={`/products/${product.slug}`}
              className="text-[#E31C24] font-semibold hover:underline"
            >
              See the {product.name} product page →
            </Link>
          )}
          {service && (
            <Link
              to={`/services/${service.slug}`}
              className="text-[#2A6EBB] font-semibold hover:underline"
            >
              See our {service.title} services →
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudyDetail;
