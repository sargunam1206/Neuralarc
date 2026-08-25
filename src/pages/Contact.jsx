import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";
import { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "256px",
};

const center = {
  lat: 10.9260,
  lng: 77.0050,
};



const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${center.lat},${center.lng}`;
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle Submit (EmailJS)
  const handleSubmit = (e) => {
    e.preventDefault();

  const templateParams = {
  form_title: "📩 New Contact Message",
  user_name: formData.name,
  user_email: formData.email,
  subject: formData.subject,
  user_message: formData.message,

  // Leave these EMPTY for contact form
  program_title: "",
  program_hours: "",
  key_topics: "",
  user_phone: "",
};

    emailjs
      .send(
        "service_ysq8lvn",      // your service ID
        "template_ip6o30n",     // your template ID
        templateParams,
        "7cHgRBfbN3nmtOlHv"     // your public key
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("❌ Failed to send message");
      });
  };
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
  {/* Address */}
  <li className="flex items-start gap-4">
    <FaMapMarkerAlt className="text-[#E31C24] w-6 h-6 mt-1 shrink-0" />
    <span className="leading-relaxed">
      T15, Arjun IT Park,<br />
      Thamaraikulam,<br />
      Chettikkapalayam,<br />
      Coimbatore 642 120.
    </span>
  </li>

  {/* Phone */}
  <li className="flex items-start gap-4">
    <FaPhoneAlt className="text-[#E31C24] w-6 h-6 mt-1 shrink-0" />
    <span>+91 98765 43210</span>
  </li>

  {/* Email */}
  <li className="flex items-start gap-4">
    <FaEnvelope className="text-[#E31C24] w-6 h-6 mt-1 shrink-0" />
 <a
    href="mailto:neuralarcteam@gmail.com"
    className="no-underline hover:no-underline hover:text-[#2A6EBB]"
  >
    neuralarcteam@gmail.com
  </a>  </li>
 
</ul>
            {/* Social Media */}
<div>
  <h3 className="text-xl font-semibold text-[#2A6EBB] mb-4">
    Follow Us
  </h3>

  <div className="flex gap-4">
    <a
      href="https://www.linkedin.com/company/neuralarc-global-private-limited/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2A6EBB] text-white hover:bg-[#1f5aa0] transition"
    >
      <FaLinkedinIn />
    </a>

   

    <a
      href="https://www.instagram.com/neuralarc_global?utm_source=qr&igsh=aTVrOXRpeDR0bDlh"
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                {/* <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                /> */}
                 <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-3 rounded-md"
                required
              />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                {/* <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                /> */}
                 <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border p-3 rounded-md"
                required
              />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                 <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border p-3 rounded-md"
                required
              />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full border p-3 rounded-md"
                required
              />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#E31C24] text-white font-semibold rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>
              {status && (
                <p className="text-center text-sm text-green-600">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </section>

      {/* Optional Map */}
   

    <section className="py-16 bg-white">
  <div className="container mx-auto px-6" data-aos="fade-down">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-heading font-bold text-maven-blue text-center mb-8">
        Visit Our Office
      </h2>

      <div className="relative rounded-lg shadow-lg overflow-hidden">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "300px" }}
            center={center}
            zoom={16}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps?q=T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120",
              "_blank"
            )
          }
          className="absolute bottom-3 right-3 bg-[#0050A0] hover:bg-[#003f7a] text-white text-sm font-medium px-4 py-2 rounded-md shadow-md transition cursor-pointer"
        >
          View on Google Maps
        </button>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default Contact;
