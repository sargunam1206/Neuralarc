import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaAlignLeft, FaCommentDots } from "react-icons/fa";
import emailjs from "emailjs-com";

import trustCoordination from "../../assets/images/trust-coordination.png";

const RequestQuoteSection = ({ productName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: `Quote Request - ${productName}`,
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      form_title: `📩 New Quote Request - ${productName}`,
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      user_message: formData.message,
      program_title: "",
      program_hours: "",
      key_topics: "",
      user_phone: formData.phone,
    };

    emailjs
      .send(
        "service_ysq8lvn",
        "template_ip6o30n",
        templateParams,
        "7cHgRBfbN3nmtOlHv"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: `Quote Request - ${productName}`,
          message: "",
        });
      })
      .catch(() => {
        setStatus("❌ Failed to send message");
      });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card - Contact Us / Request Quote form */}
          <div className="rounded-3xl bg-gradient-to-b from-[#5B9BD9] to-[#12335C] p-8 md:p-10 flex flex-col">
            <p className="text-white text-lg mb-1">Contact Us</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
              Request Quote
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                  className="w-full rounded-full bg-white py-3.5 pl-6 pr-12 text-[#2A6EBB] placeholder:text-[#2A6EBB]/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2A6EBB]" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email Address"
                  required
                  className="w-full rounded-full bg-white py-3.5 pl-6 pr-12 text-[#2A6EBB] placeholder:text-[#2A6EBB]/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2A6EBB]" />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                  className="w-full rounded-full bg-white py-3.5 pl-6 pr-12 text-[#2A6EBB] placeholder:text-[#2A6EBB]/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <FaPhoneAlt className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2A6EBB]" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your Subject"
                  className="w-full rounded-full bg-white py-3.5 pl-6 pr-12 text-[#2A6EBB] placeholder:text-[#2A6EBB]/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <FaAlignLeft className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2A6EBB]" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message..."
                  className="w-full rounded-full bg-white py-3.5 pl-6 pr-12 text-[#2A6EBB] placeholder:text-[#2A6EBB]/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <FaCommentDots className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2A6EBB]" />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#6FA3D8] py-3.5 text-white font-bold hover:bg-[#5B92C7] transition"
              >
                Submit
              </button>

              {status && (
                <p className="text-center text-sm text-white/90">{status}</p>
              )}
            </form>
          </div>

          {/* Right Card - Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={trustCoordination}
              alt="Trust and coordination lead to successful project delivery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
