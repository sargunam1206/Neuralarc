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
  {
    question: "Do I need prior experience to join a course?",
    answer:
      "Most of our courses are built for beginners and assume no prior experience — the course page for each program lists its actual level and any recommended background under the info bar.",
  },
  {
    question: "How are the training programs delivered?",
    answer:
      "Live instructor-led sessions combined with hands-on labs and project work, delivered online or on-site depending on the program and batch.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "Real, hands-on projects tied to the skills being taught — from building and deploying a machine learning model to shipping a small full-stack or mobile app — not simplified textbook exercises.",
  },
  {
    question: "What's the difference between a training program and an internship?",
    answer:
      "A training program follows a structured curriculum toward a certificate. An internship places you on a real project alongside our engineering team, working to deadlines like any other team member.",
  },
  {
    question: "Can I switch to a different course after enrolling?",
    answer:
      "Yes, within the first week of a batch — talk to your program coordinator and we'll help you move into a better-fit course wherever possible.",
  },
  {
    question: "Is there placement or career support after completion?",
    answer:
      "Yes — resume review, mock interviews, and job referrals are part of our placement guidance, continuing past the last day of the program.",
  },
  {
    question: "What are the payment and refund options?",
    answer:
      "We offer upfront and installment payment options depending on the program. Reach out to our team for the specific terms and refund policy before you enroll.",
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
              // The whole card is clickable — tapping anywhere opens the
              // course's enroll page, not just the "Enroll Now" text.
              <Link
                key={course.id}
                to={`/training/${course.slug}`}
                aria-label={`View ${course.title} and enroll`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition"
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
            <div className="space-y-4">
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
