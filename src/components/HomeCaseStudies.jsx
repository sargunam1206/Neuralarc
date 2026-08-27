import { Link } from "react-router-dom";
import caseStudiesData from "../data/caseStudiesData";

const featured = caseStudiesData.slice(0, 3);

const HomeCaseStudies = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
          data-aos="fade-down"
        >
          Case Studies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <Link
              key={cs.slug}
              to={`/case-studies/${cs.slug}`}
              className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition"
              data-aos="fade-up"
            >
              <span className="text-sm font-medium text-[#E31C24] mb-2">
                {cs.subtitle}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {cs.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {cs.challenge.slice(0, 110)}…
              </p>
              <span className="text-[#2A6EBB] font-semibold text-sm">
                Read the case study →
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10" data-aos="fade-right">
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
          >
            <span>View All Case Studies</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
