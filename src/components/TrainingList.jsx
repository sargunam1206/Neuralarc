import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import Header from "./Header/Header";
import Footer from "./Footer";
import trainingData from "../data/trainingData";

const faqs = [
  {
    question: "Do you provide certifications?",
    answer: "Yes, all programs include a NeuralArc certificate after completion.",
  },
  {
    question: "Online or offline training?",
    answer: "We offer both online and on-site training options.",
  },
  {
    question: "Corporate training available?",
    answer: "Yes, we provide customized corporate training solutions.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback: "AI & ML training helped our team build real-world models efficiently.",
  },
  {
    name: "Anita Kumar",
    feedback: "IoT training was practical and industry-focused. Highly recommended!",
  },
];

const TrainingList = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Training & Certification Programs | NeuralArc Coimbatore</title>
        <meta
          name="description"
          content="Hands-on AI & Machine Learning, IoT, full-stack, data analytics, cloud, cybersecurity, and UI/UX training programs with certification, based in Coimbatore."
        />
        <link rel="canonical" href="https://www.neuralarc.com/TrainingList" />
      </Helmet>
      <Header />

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-4">
            Training &amp; Certification Programs
          </h1>
          <p className="text-center text-gray-600 mb-14 text-lg">
            Industry-ready programs with hands-on projects and a NeuralArc certificate
          </p>

          {/* Course cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
            {trainingData.map((course) => (
              <article
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition"
                data-aos="fade-up"
              >
                {/* Thumbnail */}
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

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h2>
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

                  <Link
                    to={`/training/${course.slug}`}
                    aria-label={`Enroll in ${course.title}`}
                    className="group mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#2A6EBB] hover:text-[#1f5aa0] transition"
                  >
                    <span>Enroll Now</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-[#2A6EBB] mb-10">
              What Our Learners Say
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  <FaQuoteLeft className="text-[#2A6EBB] w-8 h-8 mb-3" />
                  <p className="text-gray-600 mb-4">&ldquo;{t.feedback}&rdquo;</p>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-center text-[#2A6EBB] mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-4">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center text-left"
                    aria-expanded={faqOpenIndex === idx}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  >
                    <h3 className="font-semibold text-gray-900">{f.question}</h3>
                    {faqOpenIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {faqOpenIndex === idx && <p className="mt-2 text-gray-600">{f.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TrainingList;
