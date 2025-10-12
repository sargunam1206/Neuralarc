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
} from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header/Header";

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
    icon: <FaCertificate className="w-10 h-10 text-[#2A6EBB]" />,
    title: "Cloud Computing",
    duration: "30 hours • AWS & Azure",
    bullets: ["Cloud Architecture", "Deployment & Management", "Security Practices"],
  },
];


const faqs = [
  {
    question: "Do you provide certifications?",
    answer: "✅ Yes! All our courses include certification upon successful completion.",
  },
  {
    question: "Are the trainings online or offline?",
    answer: "💻 We offer both online and on-site trainings depending on client preference.",
  },
  {
    question: "Do you offer corporate packages?",
    answer: "📦 Absolutely, corporate training packages are customizable to your team’s needs.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback: "The AI & ML training helped our team implement machine learning models efficiently.",
  },
  {
    name: "Anita Kumar",
    feedback: "IoT Development program was very hands-on and practical. Highly recommended!",
  },
];

const TrainingList = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center text-[#2A6EBB] mb-4"
            data-aos="fade-down"
          >
            Training & Certification Programs
          </h2>
          <p
            className="text-center text-gray-600 mb-12 text-lg md:text-xl"
            data-aos="fade-up"
          >
            Upskill your team with cutting-edge technology training and certifications.
          </p>

          {/* Training Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
            {trainings.map((t, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-6 rounded-xl shadow-lg flex flex-col transition transform hover:-translate-y-2 hover:shadow-2xl border-l-4 ${
                  t.highlight ? "border-[#E31C24]" : "border-[#2A6EBB]"
                }`}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                {t.highlight && (
                  <span className="absolute top-3 right-3 bg-red-100 text-[#E31C24] text-xs font-semibold px-2 py-1 rounded">
                    Most Popular
                  </span>
                )}
                <div className="mb-4">{t.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{t.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{t.duration}</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 flex-1">
                  {t.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(t)}
                  className={`mt-auto px-4 py-2 rounded-md font-semibold text-center transition ${
                    t.highlight
                      ? "bg-[#E31C24] text-white hover:bg-red-700"
                      : "bg-[#2A6EBB] text-white hover:bg-blue-700"
                  }`}
                >
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>

          {/* Corporate Training CTA */}
          <div
            className="mt-16 bg-gradient-to-r from-blue-50 to-red-50 p-10 rounded-xl shadow-lg text-center border border-gray-200 mb-16"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Corporate Training Solutions
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Custom training programs for your organization. On-site or remote delivery available.
            </p>
            <ul className="flex justify-center gap-6 mb-6 text-gray-700 font-medium">
              <li>✓ Flexible Scheduling</li>
              <li>✓ Expert Trainers</li>
              <li>✓ Hands-on Projects</li>
            </ul>
            <a
              href="#corporate-training"
              className="px-8 py-3 bg-[#E31C24] text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
              Request Custom Training
            </a>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3
              className="text-3xl font-bold text-[#2A6EBB] mb-8 text-center"
              data-aos="fade-down"
            >
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition"
                  data-aos="fade-up"
                  data-aos-delay={idx * 200}
                >
                  <FaQuoteLeft className="text-[#2A6EBB] w-8 h-8 mb-4" />
                  <p className="text-gray-600 mb-4">"{t.feedback}"</p>
                  <span className="text-gray-900 font-semibold">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-[#2A6EBB] mb-8 text-center">
              Frequently Asked Questions
            </h3>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition hover:shadow-lg"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-gray-900">{f.question}</h4>
                    {faqOpenIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {faqOpenIndex === idx && (
                    <p className="mt-2 text-gray-600 animate-fadeIn">{f.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {isModalOpen && selectedProgram && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          data-aos="zoom-in"
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-10 transform transition-all scale-95 animate-fadeIn">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-bold text-[#2A6EBB]">
                Enroll in {selectedProgram.title}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-red-600">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {selectedProgram.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {selectedProgram.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{selectedProgram.duration}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">Key Topics:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  {selectedProgram.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border-l-4 border-[#2A6EBB] p-3 rounded-md text-sm text-gray-700">
                  ✅ Certification included • 📚 Access to study materials • 💻 Real projects
                </div>
              </div>

              {/* Enrollment Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB] outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB] outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB] outline-none"
                  required
                />
                <textarea
                  placeholder="Message (Optional)"
                  rows="3"
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB] outline-none"
                ></textarea>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#2A6EBB] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Submit Enrollment
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default TrainingList;
