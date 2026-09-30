import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import trainingData from "../data/trainingData";

// Compact preview of the training catalogue for the homepage.
const featured = trainingData.slice(0, 3);

const Training = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-2">
          Training &amp; Certification Programs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Upskill with industry-ready, project-based training
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featured.map((course) => (
            <Link
              key={course.id}
              to={`/training/${course.slug}`}
              aria-label={`View ${course.title} and enroll`}
              className="group bg-gray-50 rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={`${course.title} training course at NeuralArc`}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                {course.popular && (
                  <span className="absolute top-3 right-3 bg-white/95 text-[#E31C24] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    Popular
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {course.duration}
                  {course.certificationIncluded && " • Certification included"}
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  {course.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-green-500 mt-0.5 w-4 h-4 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#2A6EBB] group-hover:text-[#1f5aa0] transition">
                  <span>Enroll Now</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/TrainingList"
            className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
          >
            <span>View all programs</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Training;
