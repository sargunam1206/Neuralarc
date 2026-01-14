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
                <button
                  onClick={() => openModal(p)}
                  className="mt-auto text-sm font-semibold text-[#2A6EBB] hover:underline text-center"
                >
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {isModalOpen && selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-10">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-bold text-[#2A6EBB]">
                Enroll in {selectedProgram.title}
              </h2>
              <button onClick={closeModal}>
                <FaTimes className="w-6 h-6 text-gray-500 hover:text-red-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Program Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {selectedProgram.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {selectedProgram.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedProgram.hours}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-600 mb-4">
                  {selectedProgram.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border-l-4 border-[#2A6EBB] p-3 rounded-md text-sm">
                  ✅ Certification • 📚 Study materials • 💻 Real projects
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB]"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#2A6EBB]"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#2A6EBB] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Enrollment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Flash Message */}
      {status && !isModalOpen && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg">
          {status}
        </div>
      )}
    </>
  );
};

export default Training;
