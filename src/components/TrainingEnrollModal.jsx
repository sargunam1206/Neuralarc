import { FaTimes, FaCheckCircle } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useEffect } from "react";

const TrainingEnrollModal = ({ program, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  if (!program) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
      program_title: program.title,
      program_hours: program.duration || program.hours,
      key_topics: program.bullets.join(", "),
    };

    emailjs
      .send(
        "service_ysq8lvn",
        "template_ip6o30n",
        templateParams,
        "7cHgRBfbN3nmtOlHv"
      )
      .then(() => {
        setStatus("✅ Enrollment submitted successfully!");
        setTimeout(() => onClose(), 1500);
      })
      .catch(() => {
        setStatus("❌ Failed to submit. Try again.");
      });
  };
// 🔒 Disable background scroll when modal is open
useEffect(() => {
  document.body.style.overflow = "hidden";

  // cleanup when modal closes or component unmounts
  return () => {
    document.body.style.overflow = "auto";
  };
}, []);
// Close modal on ESC key
useEffect(() => {
  const handleEsc = (e) => e.key === "Escape" && onClose();
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, [onClose]);




  return (
    <div
  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  onClick={onClose}   // 👈 click outside closes modal
>
  <div
    className="bg-white rounded-2xl w-full max-w-4xl p-6 md:p-10"
    onClick={(e) => e.stopPropagation()}  // 👈 prevents close inside
  >

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <h2 className="text-2xl font-bold text-[#2A6EBB]">
            Enroll in {program.title}
          </h2>
          <button onClick={onClose}>
            <FaTimes className="w-6 h-6 text-gray-500 hover:text-red-600" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Program Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {program.icon}
              <div>
                <p className="font-semibold">{program.title}</p>
                <p className="text-sm text-gray-500">
                  {program.duration || program.hours}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {program.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <FaCheckCircle className="text-green-500" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border-l-4 border-[#2A6EBB] p-3 rounded-md text-sm">
              ✅ Certification • 📚 Materials • 💻 Live Projects
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="3"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />

            <button className="w-full bg-[#2A6EBB] text-white py-3 rounded-lg font-semibold">
              Submit Enrollment
            </button>

            {status && (
              <p className="text-sm text-center text-green-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainingEnrollModal;
