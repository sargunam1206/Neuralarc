import { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import LegalModal from "../components/LegalModal";
import countryCodes, { flagEmoji } from "../data/countryCodes";
import { termsSections, privacySections, LEGAL_LAST_UPDATED } from "../data/legalContent";
import worldMap from "../assets/images/world-map.png";

// Aggregate client rating shown on the left. Edit these values as needed.
const RATING = { score: 4.9, outOf: 5, reviews: "120+" };

const MAP_CENTER = { lat: 10.926, lng: 77.005 };
const MAP_QUERY =
  "T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120";

const RatingStars = ({ score }) => {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-1 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <FaStar key={i} className="w-5 h-5" />;
        if (i === full && half) return <FaStarHalfAlt key={i} className="w-5 h-5" />;
        return <FaRegStar key={i} className="w-5 h-5" />;
      })}
    </span>
  );
};

const initialForm = {
  firstName: "",
  lastName: "",
  subject: "",
  email: "",
  country: "IN",
  phone: "",
  company: "",
  message: "",
};

// Shared control styling without a width, so each field can set its own.
const controlBase =
  "border border-gray-300 rounded-md p-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A6EBB] focus:border-transparent";
const fieldClass = `${controlBase} w-full`;
const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [legal, setLegal] = useState(null); // null | "terms" | "privacy"

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const dial = countryCodes.find((c) => c.iso2 === form.country)?.dial || "";

    const templateParams = {
      form_title: "📩 New Contact Enquiry",
      user_name: `${form.firstName} ${form.lastName}`.trim(),
      user_email: form.email,
      user_phone: `${dial} ${form.phone}`.trim(),
      user_message: form.company
        ? `${form.message}\n\n— Company: ${form.company}`
        : form.message,
      subject: form.subject,
      program_title: "",
      program_hours: "",
      key_topics: "",
    };

    emailjs
      .send(
        "service_ysq8lvn",
        "template_ip6o30n",
        templateParams,
        "7cHgRBfbN3nmtOlHv"
      )
      .then(() => {
        setStatus("✅ Thanks — your message has been sent. We'll be in touch soon.");
        setForm(initialForm);
      })
      .catch(() =>
        setStatus("❌ Something went wrong. Please try again or email us directly.")
      )
      .finally(() => setSending(false));
  };

  return (
    <>
      <Helmet>
        <title>Get in Touch | NeuralArc</title>
        <meta
          name="description"
          content="Contact NeuralArc for IoT, AI/ML, and software development projects. Tell us about your project and our team in Coimbatore will get back to you."
        />
        <link rel="canonical" href="https://www.neuralarc.com/contact" />
      </Helmet>

      <Header />

      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---------- LEFT ---------- */}
          <div className="relative">
            <img
              src={worldMap}
              alt=""
              aria-hidden="true"
              className="hidden lg:block absolute -bottom-16 -left-12 w-80 opacity-[0.06] pointer-events-none select-none"
            />
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 max-w-md">
                Let&apos;s Build What&apos;s Next,{" "}
                <span className="text-[#2A6EBB]">Together.</span>
              </h1>
              <p className="text-gray-600 leading-relaxed max-w-md mb-8">
                Have a question, a project in mind, or just want to explore how we can
                help? We&apos;d love to hear from you. Reach out to us and our team will
                get back to you shortly.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-gray-900">
                  {RATING.score.toFixed(1)}{" "}
                  <span className="text-base font-semibold text-gray-500">
                    out of {RATING.outOf}
                  </span>
                </span>
                <RatingStars score={RATING.score} />
              </div>
              <p className="text-sm text-gray-500 mt-1">from {RATING.reviews} reviews</p>
            </div>
          </div>

          {/* ---------- RIGHT: form ---------- */}
          <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Connect with us</h2>
            <div className="w-10 h-1 bg-[#2A6EBB] rounded-full mt-2 mb-6" />

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* First / Last name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Contact with us */}
              <div>
                <label htmlFor="subject" className={labelClass}>
                  Contact with us
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help you?"
                  value={form.subject}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              {/* Work email / Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="country"
                      aria-label="Country calling code"
                      value={form.country}
                      onChange={handleChange}
                      className={`${controlBase} w-20 shrink-0 px-1.5 text-sm`}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.iso2} value={c.iso2}>
                          {flagEmoji(c.iso2)} {c.dial} {c.name}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      inputMode="numeric"
                      placeholder="50 123 4567"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={`${controlBase} flex-1 min-w-0`}
                    />
                  </div>
                </div>
              </div>

              {/* Company name */}
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 bg-[#2A6EBB] text-white font-semibold rounded-md hover:bg-[#1f5aa0] transition disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6EBB]"
              >
                {sending ? "Sending…" : "Submit"}
              </button>

              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setLegal("terms")}
                  className="text-[#2A6EBB] font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2A6EBB] rounded"
                >
                  terms of service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() => setLegal("privacy")}
                  className="text-[#2A6EBB] font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2A6EBB] rounded"
                >
                  privacy notice
                </button>
                .
              </p>

              {status && (
                <p
                  role="status"
                  className={`text-sm text-center ${
                    status.startsWith("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-8">
            Visit Our Office
          </h2>

          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "340px" }}
                center={MAP_CENTER}
                zoom={16}
              >
                <Marker position={MAP_CENTER} />
              </GoogleMap>
            </LoadScript>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="absolute bottom-3 right-3 bg-[#2A6EBB] hover:bg-[#1f5aa0] text-white text-sm font-medium px-4 py-2 rounded-md shadow-md transition"
            >
              View on Google Maps
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6 leading-relaxed">
            T15, Arjun IT Park, Arjun College of Technology, Thamaraikulam,
            <br className="hidden sm:block" /> Chettikkapalayam, Coimbatore 642&nbsp;120.
          </p>
        </div>
      </section>

      <Footer />

      {legal && (
        <LegalModal
          title={legal === "terms" ? "Terms of Service" : "Privacy Notice"}
          lastUpdated={LEGAL_LAST_UPDATED}
          sections={legal === "terms" ? termsSections : privacySections}
          onClose={() => setLegal(null)}
        />
      )}
    </>
  );
};

export default Contact;
