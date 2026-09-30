import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import Footer from "./Footer";
import caseStudiesData from "../data/caseStudiesData";

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | NeuralArc</title>
        <meta
          name="description"
          content="How NeuralArc built T-Remo, Microlab, LeadPro, and other real IoT, mobile, and software products from Coimbatore."
        />
        <link rel="canonical" href="https://www.neuralarc.com/case-studies" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg max-w-2xl mx-auto">
            How we approached real problems while building our own IoT, mobile, and software products.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
              >
                <img
                  src={cs.image}
                  alt={`${cs.title} — ${cs.subtitle}`}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-sm font-medium text-[#E31C24] mb-2">
                    {cs.subtitle}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {cs.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {cs.challenge.slice(0, 120)}…
                  </p>
                  <span className="text-[#2A6EBB] font-semibold text-sm">
                    Read the case study →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            More case studies are added as new projects are completed.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudies;
