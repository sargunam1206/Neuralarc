import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaBrain,
  FaMicrochip,
  FaLaptopCode,
  FaChartBar,
  FaTimes,
  FaCheck,
  FaCheckCircle,
} from "react-icons/fa";

import TrainingEnrollModal from "../components/TrainingEnrollModal";

const programs = [
  {
    icon: <FaBrain className="w-8 h-8 text-[#2A6EBB]" />,
    title: "AI & Machine Learning",
    hours: "40 hours • Certification included",
    bullets: ["Python for AI", "Deep Learning", "Model Deployment"],
  },
  {
    icon: <FaMicrochip className="w-8 h-8 text-[#E31C24]" />,
    title: "IoT Development",
    hours: "32 hours • Hands-on projects",
    bullets: ["Sensor Integration", "Cloud Connectivity", "Security Protocols"],
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-[#2A6EBB]" />,
    title: "Full-Stack Development",
    hours: "60 hours • Portfolio projects",
    bullets: ["React & Node.js", "Database Design", "API Development"],
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-[#E31C24]" />,
    title: "Data Analytics",
    hours: "36 hours • Real datasets",
    bullets: ["Statistical Analysis", "Data Visualization", "Business Intelligence"],
  },
];

const Training = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProgram) return;

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
      program_title: selectedProgram.title,
      program_hours: selectedProgram.hours,
      key_topics: selectedProgram.bullets.join(", "),
    };

    emailjs
      .send(
        "service_ysq8lvn",
        "template_ip6o30n",
        templateParams,
        "7cHgRBfbN3nmtOlHv"
      )
      .then(() => {
        setIsModalOpen(false);
        setStatus("✅ Enrollment details sent successfully!");
        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => {
        setStatus("❌ Failed to send email. Please try again.");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <>
      {/* Training Section */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-2">
            Training & Certification Programs
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Upskill your team with industry-ready training
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {programs.map((p, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col hover:shadow-xl transition h-full"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">{p.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1 min-h-[3rem]">
                  {p.title}
                </h3>

                {/* Hours */}
                <p className="text-gray-500 text-sm text-center mb-4">
                  {p.hours}
                </p>

                {/* Topics */}
                <div className="flex flex-col gap-2 mb-6">
                  {p.bullets.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FaCheck className="text-[#2A6EBB] mt-1 w-3 h-3" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mb-15" data-aos="fade-right">
  
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      \{isModalOpen && (
  <TrainingEnrollModal
    program={selectedProgram}
    onClose={() => {
      setIsModalOpen(false);
      setSelectedProgram(null);
    }}
  />
)}


      {/* Flash Message */}
      {status && !isModalOpen && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg">
          {status}
        </div>
      )}

       <div className="flex justify-center mb-10" data-aos="fade-right">
  <a
    href="/TrainingList"
    className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
  >
    <span>Know More</span>
    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
    </>
  );
};

export default Training;
