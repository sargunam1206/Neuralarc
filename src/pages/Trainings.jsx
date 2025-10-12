import { useState } from "react";
import { FaBrain, FaMicrochip, FaLaptopCode, FaChartBar, FaTimes, FaCheckCircle } from "react-icons/fa";

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-2" data-aos="fade-down">
            Training & Certification Programs
          </h2>
          <p className="text-center text-gray-600 mb-12" data-aos="fade-down">
            Upskill your team with cutting-edge technology training
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-[#2A6EBB] shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
              data-aos="fade-up"
              >
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{p.hours}</p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(p)}
                  className="text-[#2A6EBB] font-semibold hover:underline"
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
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-10 transform transition-all scale-95 animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-bold text-[#2A6EBB]">
                Enroll in {selectedProgram.title}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-red-600">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Program Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {selectedProgram.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {selectedProgram.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{selectedProgram.hours}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">Key Topics:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  {selectedProgram.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      {b}
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
    </>
  );
};

export default Training;
