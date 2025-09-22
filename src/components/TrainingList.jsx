import { useState } from "react";
import { FaBrain, FaMicrochip, FaLaptopCode, FaChartBar, FaCertificate, FaQuoteLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
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
    title: "Full-Stack Development",
    duration: "60 hours • Portfolio projects",
    bullets: ["React & Node.js", "Database Design", "API Development"],
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
//   {
//     icon: <FaBrain className="w-10 h-10 text-[#2A6EBB]" />,
//     title: "Cybersecurity Fundamentals",
//     duration: "28 hours • Hands-on labs",
//     bullets: ["Network Security", "Threat Analysis", "Penetration Testing"],
//   },
];

const faqs = [
  {
    question: "Do you provide certifications?",
    answer: "Yes! All our courses include certification upon successful completion.",
  },
  {
    question: "Are the trainings online or offline?",
    answer: "We offer both online and on-site trainings depending on client preference.",
  },
  {
    question: "Do you offer corporate packages?",
    answer: "Absolutely, corporate training packages are customizable to your team’s needs.",
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

  return (
    <>
    <Header/>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2A6EBB] mb-4">
          Training & Certification Programs
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg md:text-xl">
          Upskill your team with cutting-edge technology training and certifications.
        </p>

        {/* Training Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {trainings.slice(0, 4).map((t, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-xl shadow-lg flex flex-col transition hover:shadow-2xl border-l-4 ${
                t.highlight ? "border-[#E31C24]" : "border-[#2A6EBB]"
              }`}
            >
              <div className="mb-4">{t.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{t.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{t.duration}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 flex-1">
                {t.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a
                href="#enroll"
                className={`mt-auto px-4 py-2 rounded-md font-semibold text-center transition ${
                  t.highlight
                    ? "bg-[#E31C24] text-white hover:bg-red-700"
                    : "bg-[#2A6EBB] text-white hover:bg-blue-700"
                }`}
              >
                Enroll Now →
              </a>
            </div>
          ))}
        </div>

       

        {/* Corporate Training CTA */}
        <div className="mt-16 bg-white p-10 rounded-xl shadow-lg text-center border border-gray-200 mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Corporate Training Solutions
          </h3>
          <p className="text-gray-600 mb-4 text-lg">
            Custom training programs for your organization. On-site or remote delivery available.
          </p>
          <a
            href="#corporate-training"
            className="px-8 py-3 bg-[#E31C24] text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Request Custom Training
          </a>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#2A6EBB] mb-8 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
                <FaQuoteLeft className="text-[#2A6EBB] w-8 h-8 mb-4" />
                <p className="text-gray-600 mb-4">"{t.feedback}"</p>
                <span className="text-gray-900 font-semibold">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#2A6EBB] mb-8 text-center">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-4 cursor-pointer">
                <div
                  className="flex justify-between items-center"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                >
                  <h4 className="text-lg font-semibold text-gray-900">{f.question}</h4>
                  {faqOpenIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {faqOpenIndex === idx && <p className="mt-2 text-gray-600">{f.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default TrainingList;
