import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Footer from "../Footer";
import caseStudiesData from "../../data/caseStudiesData";
import productsData from "../../data/productsData";
import servicesData from "../../data/servicesData";

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

      <section className="bg-[#2A6EBB] text-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-sm font-medium text-white/80 mb-2 block">
            {caseStudy.subtitle}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{caseStudy.title}</h1>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.approach}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">Technology</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {caseStudy.technologies.map((tech, i) => (
                <li key={i} className="bg-gray-50 border rounded-lg px-4 py-2 text-center text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">Outcome</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.outcome}</p>
          </div>

          <div className="pt-6 border-t flex flex-col sm:flex-row gap-4">
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
        </div>
      </article>

      <Footer />
    </>
  );
};

export default CaseStudyDetail;
