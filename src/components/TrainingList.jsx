import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBrain,
  FaMicrochip,
  FaLaptopCode,
  FaChartBar,
  FaCertificate,
  FaQuoteLeft,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaCheckCircle,
  FaMobileAlt,
} from "react-icons/fa";

import Header from "./Header/Header";
import Footer from "./Footer";

const trainings = [
  {
    icon: <FaBrain className="w-10 h-10 text-[#2A6EBB]" />,
    title: "AI & Machine Learning",
    duration: "40 hours • Certification included",
    bullets: ["Python for AI", "Deep Learning", "Model Deployment"],
    highlight: true,
  },
  {
    icon: <FaMicrochip className="w-10 h-10 text-[#E31C24]" />,
    title: "IoT Development",
    duration: "32 hours • Hands-on projects",
    bullets: ["Sensor Integration", "Cloud Connectivity", "Security Protocols"],
  },
  {
    icon: <FaLaptopCode className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Python Full-Stack",
    duration: "55 hours • Certification included",
    bullets: ["Django / Flask", "REST APIs", "Database Design"],
  },
  {
    icon: <FaLaptopCode className="w-10 h-10 text-[#2A6EBB]" />,
    title: "MERN Full-Stack",
    duration: "65 hours • Portfolio projects",
    bullets: ["MongoDB, Express, React, Node.js", "REST APIs", "Deployment"],
    highlight: true,
  },
  {
    icon: <FaChartBar className="w-10 h-10 text-[#E31C24]" />,
    title: "Data Analytics",
    duration: "36 hours • Real datasets",
    bullets: ["Statistical Analysis", "Data Visualization", "Business Intelligence"],
  },
  {
    icon: <FaMobileAlt className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Mobile App Development",
    duration: "45 hours • Live projects",
    bullets: ["Flutter / React Native", "Android & iOS Apps", "API Integration"],
    highlight: true,
  },
  {
    icon: <FaCertificate className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Cloud Computing",
    duration: "30 hours • AWS & Azure",
    bullets: ["Cloud Architecture", "Deployment", "Security Practices"],
  },
];

const faqs = [
  {
    question: "Do you provide certifications?",
    answer: "Yes, all programs include certification after completion.",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <Header />

      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <h2 className="text-4xl font-extrabold text-center text-[#2A6EBB] mb-4">
            Training & Certification Programs
          </h2>
          <p className="text-center text-gray-600 mb-14 text-lg">
            Industry-ready programs with hands-on experience
          </p>

          {/* Training Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {trainings.map((t, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-xl shadow-lg p-6 flex flex-col border-l-4 ${
                  t.highlight ? "border-[#E31C24]" : "border-[#2A6EBB]"
                } hover:-translate-y-1 hover:shadow-2xl transition`}
                data-aos="fade-up"
              >
                {t.highlight && (
                  <span className="absolute top-3 right-3 bg-red-100 text-[#E31C24] text-xs font-semibold px-2 py-1 rounded">
                    Popular
                  </span>
                )}

                <div className="mb-4">{t.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {t.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{t.duration}</p>

                {/* Bullet points (aligned like Products) */}
                <div className="flex flex-col gap-2 mb-6">
                  {t.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500 mt-1 w-4 h-4" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedProgram(t);
                    setIsModalOpen(true);
                  }}
                  className={`mt-auto py-2 rounded-md font-semibold text-white transition ${
                    t.highlight
                      ? "bg-[#E31C24] hover:bg-red-700"
                      : "bg-[#2A6EBB] hover:bg-blue-700"
                  }`}
                >
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-[#2A6EBB] mb-10">
              What Our Learners Say
            </h3>

            <div className="grid sm:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  <FaQuoteLeft className="text-[#2A6EBB] w-8 h-8 mb-3" />
                  <p className="text-gray-600 mb-4">"{t.feedback}"</p>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-3xl font-bold text-center text-[#2A6EBB] mb-10">
              Frequently Asked Questions
            </h3>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-4 cursor-pointer"
                  onClick={() =>
                    setFaqOpenIndex(faqOpenIndex === idx ? null : idx)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">{f.question}</h4>
                    {faqOpenIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {faqOpenIndex === idx && (
                    <p className="mt-2 text-gray-600">{f.answer}</p>
                  )}
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
