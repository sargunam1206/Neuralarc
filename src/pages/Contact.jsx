import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    
<Helmet>
  <title>NeuralArc | IoT, Software & AI Solutions</title>
  <meta
    name="description"
    content="NeuralArc provides IoT solutions, software development, AI & ML services, and professional training in India."
  />
  <meta name="keywords" content="IoT solutions, software development, AI ML services, NeuralArc" />
</Helmet>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Reach out to us for any inquiries, projects, or collaboration opportunities. We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#2A6EBB]">Get in Touch</h2>
            <p className="text-gray-600">
              You can reach us through the following methods. We’ll get back to you as soon as possible.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#E31C24] w-6 h-6" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#E31C24] w-6 h-6" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#E31C24] w-6 h-6" />
                <span>info@neuralarc.com</span>
              </li>
            </ul>
            {/* Social Media */}
<div>
  <h3 className="text-xl font-semibold text-[#2A6EBB] mb-4">
    Follow Us
  </h3>

  <div className="flex gap-4">
    <a
      href="https://www.linkedin.com/company/neuralarc"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2A6EBB] text-white hover:bg-[#1f5aa0] transition"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://www.facebook.com/neuralarc"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-blue-700 transition"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/neuralarc"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white hover:opacity-90 transition"
    >
      <FaInstagram />
    </a>
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#E31C24] text-white font-semibold rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Optional Map */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.9150773197267!2d76.96332451466673!3d11.016844491680116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8599c0e1c2b7d%3A0xabcdef1234567890!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1695389612345!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="rounded-xl shadow-lg"
            allowFullScreen=""
            loading="lazy"
            title="NeuralArc Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
