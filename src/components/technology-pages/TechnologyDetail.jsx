import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";
import { FaChevronDown, FaArrowRight, FaExternalLinkAlt, FaPlay, FaBook, FaFileAlt } from "react-icons/fa";

import technologiesData from "../../data/technologiesData";
import Header from "../Header/Header";
import Footer from "../Footer";

const SITE = "https://www.neuralarc.com";

// --- Small reusable bits ---------------------------------------------------

const ExternalLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 font-semibold text-[#2A6EBB] hover:text-[#1f5aa0] transition ${className}`}
  >
    {children}
    <FaExternalLinkAlt className="w-3 h-3" />
  </a>
);

const Accordion = ({ items, renderBody }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
          >
            <span className="font-semibold text-gray-900">{item.question || item.label}</span>
            <FaChevronDown
              className={`w-3.5 h-3.5 flex-shrink-0 text-[#2A6EBB] transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-0 text-gray-600 text-sm leading-relaxed">
              {renderBody(item)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Email-gated download. Captures a work email (sent to us via EmailJS, same
// service as the contact form) and then triggers the file download.
const EmailGate = ({ asset, tech, trigger, title, blurb }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [open, setOpen] = useState(false);

  const startDownload = () => {
    const a = document.createElement("a");
    a.href = asset.downloadPath;
    a.setAttribute("download", asset.fileName || "");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send(
        "service_ysq8lvn",
        "template_ip6o30n",
        {
          form_title: "📥 Resource download request",
          user_name: "",
          user_email: email,
          subject: `${tech} — ${asset.fileName}`,
          user_message: `Download requested: ${asset.fileName} (${tech} technology page)`,
          program_title: "",
          program_hours: "",
          key_topics: "",
          user_phone: "",
        },
        "7cHgRBfbN3nmtOlHv"
      )
      .then(() => {
        setStatus("done");
        startDownload();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <>
      {trigger(() => setOpen(true))}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-5">{blurb}</p>

            {status === "done" ? (
              <div className="text-sm text-gray-700">
                <p className="text-green-600 font-semibold mb-2">✅ Thanks — your download is starting.</p>
                <p>
                  If it doesn't begin automatically,{" "}
                  <a
                    href={asset.downloadPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2A6EBB] font-semibold hover:underline"
                  >
                    click here
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-5 w-full px-5 py-2.5 bg-gray-100 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email address"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A6EBB]"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-5 py-3 bg-[#E31C24] text-white font-semibold rounded-md hover:bg-red-700 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Email me the download"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or{" "}
                    <Link to="/contact" className="underline">
                      contact us
                    </Link>
                    .
                  </p>
                )}
                <p className="text-xs text-gray-400">
                  We use your email only to send this resource and occasional related updates.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// --- Page ----------------------------------------------------------------

const TechnologyDetail = () => {
  const { slug } = useParams();
  const tech = technologiesData.find((t) => t.slug === slug);

  if (!tech) {
    return (
      <>
        <Header />
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold text-gray-900">Technology not found</h1>
          <Link to="/" className="text-[#2A6EBB] font-semibold mt-4 inline-block">
            Back to home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const canonical = `${SITE}/technologies/${tech.slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tech.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{tech.metaTitle}</title>
        <meta name="description" content={tech.metaDescription} />
        <meta name="keywords" content={tech.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tech.metaTitle} />
        <meta property="og:description" content={tech.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tech.metaTitle} />
        <meta name="twitter:description" content={tech.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-[#0B1B2B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5AA9E6] mb-4">
            {tech.eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
            {tech.h1}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mt-6">{tech.heroSubhead}</p>
          <Link
            to={tech.heroCtaTo}
            className="inline-flex items-center gap-2 mt-8 bg-[#2A6EBB] hover:bg-[#1f5aa0] text-white font-semibold px-7 py-3.5 rounded-md transition"
          >
            {tech.heroCtaLabel} <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E31C24] mb-3">
              {tech.introEyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {tech.introTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">{tech.introBody}</p>
            <ExternalLink href={tech.introLinkHref}>{tech.introLinkLabel}</ExternalLink>
          </div>
          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#061422] rounded-2xl p-10 text-white shadow-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5AA9E6] mb-3">
              {tech.supportEyebrow}
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{tech.supportTitle}</h3>
            <p className="text-white/80 leading-relaxed">{tech.supportBody}</p>
          </div>
        </div>
      </section>

      {/* Blog (external) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#E31C24] mb-3">
            {tech.blog.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{tech.blog.title}</h2>
          <p className="text-gray-600 max-w-2xl mb-5">{tech.blog.body}</p>
          <ExternalLink href={tech.blog.href}>{tech.blog.linkLabel}</ExternalLink>
        </div>
      </section>

      {/* Case study (external) */}
      <section className="py-16 bg-[#0B1B2B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5AA9E6] mb-3">
            {tech.caseStudy.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{tech.caseStudy.title}</h2>
          <p className="text-white/80 max-w-2xl mb-5">{tech.caseStudy.body}</p>
          <a
            href={tech.caseStudy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#5AA9E6] hover:text-white transition"
          >
            {tech.caseStudy.linkLabel} <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Everything you need to know — 3 resource cards (external) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#E31C24] mb-3">EXPLORE MORE</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Everything you need to know
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tech.resourceCards.map((card, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition flex flex-col">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{card.body}</p>
                <ExternalLink href={card.href} className="text-sm">
                  {card.linkLabel}
                </ExternalLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey accordion — each item links out (external) */}
      <section className="py-16 bg-[#0B1B2B] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5AA9E6] mb-3">
            {tech.journey.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{tech.journey.title}</h2>
          <p className="text-white/80 mb-8">{tech.journey.body}</p>
          <div className="space-y-3">
            {tech.journey.items.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition"
              >
                <span className="font-medium">{item.label}</span>
                <FaExternalLinkAlt className="w-3.5 h-3.5 flex-shrink-0 text-[#5AA9E6]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated report — email-gated download */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E31C24] mb-3">
              {tech.report.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{tech.report.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{tech.report.body}</p>
            <EmailGate
              asset={tech.report}
              tech={tech.name}
              title={`Download: ${tech.report.coverLabel}`}
              blurb="Enter your work email and the PDF will download right away. We'll also send it to your inbox."
              trigger={(openModal) => (
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 bg-[#2A6EBB] hover:bg-[#1f5aa0] text-white font-semibold px-7 py-3.5 rounded-md transition"
                >
                  Download the report <FaArrowRight className="w-4 h-4" />
                </button>
              )}
            />
          </div>
          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#061422] rounded-2xl p-10 text-white shadow-xl text-center">
            <FaFileAlt className="w-12 h-12 mx-auto mb-5 text-[#5AA9E6]" />
            <p className="text-lg font-bold">{tech.report.coverLabel}</p>
            <p className="text-white/70 text-sm mt-1">{tech.report.coverSub}</p>
          </div>
        </div>
      </section>

      {/* FAQ — 10 keyword-tagged questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#E31C24] mb-3 text-center">FAQS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            {tech.name} — Frequently Asked Questions
          </h2>
          <Accordion
            items={tech.faqs}
            renderBody={(f) => (
              <>
                <p>{f.answer}</p>
                {f.keywords?.length > 0 && (
                  <p className="mt-3 text-xs text-gray-400">
                    <span className="font-semibold text-gray-500">Related: </span>
                    {f.keywords.join(" · ")}
                  </p>
                )}
              </>
            )}
          />
        </div>
      </section>

      {/* Media row — video (external), e-book & report (email-gated) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Watch video */}
            <a
              href={tech.media.video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition flex flex-col"
            >
              <div className="w-11 h-11 rounded-full bg-[#2A6EBB]/10 flex items-center justify-center text-[#2A6EBB] mb-4">
                <FaPlay className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{tech.media.video.label}</h3>
              <p className="text-gray-600 text-sm flex-1">{tech.media.video.sub}</p>
              <span className="text-[#2A6EBB] font-semibold text-sm mt-4 inline-flex items-center gap-2">
                Watch now <FaExternalLinkAlt className="w-3 h-3" />
              </span>
            </a>

            {/* Read the e-book */}
            <EmailGate
              asset={tech.media.ebook}
              tech={tech.name}
              title={`Download: ${tech.media.ebook.sub}`}
              blurb="Enter your work email and the e-book will download right away."
              trigger={(openModal) => (
                <button
                  type="button"
                  onClick={openModal}
                  className="text-left border border-gray-200 rounded-xl p-7 hover:shadow-lg transition flex flex-col"
                >
                  <div className="w-11 h-11 rounded-full bg-[#E31C24]/10 flex items-center justify-center text-[#E31C24] mb-4">
                    <FaBook className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{tech.media.ebook.label}</h3>
                  <p className="text-gray-600 text-sm flex-1">{tech.media.ebook.sub}</p>
                  <span className="text-[#E31C24] font-semibold text-sm mt-4 inline-flex items-center gap-2">
                    Get the e-book <FaArrowRight className="w-3 h-3" />
                  </span>
                </button>
              )}
            />

            {/* Read the report */}
            <EmailGate
              asset={tech.media.report}
              tech={tech.name}
              title={`Download: ${tech.media.report.sub}`}
              blurb="Enter your work email and the report will download right away."
              trigger={(openModal) => (
                <button
                  type="button"
                  onClick={openModal}
                  className="text-left border border-gray-200 rounded-xl p-7 hover:shadow-lg transition flex flex-col"
                >
                  <div className="w-11 h-11 rounded-full bg-[#2A6EBB]/10 flex items-center justify-center text-[#2A6EBB] mb-4">
                    <FaFileAlt className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{tech.media.report.label}</h3>
                  <p className="text-gray-600 text-sm flex-1">{tech.media.report.sub}</p>
                  <span className="text-[#2A6EBB] font-semibold text-sm mt-4 inline-flex items-center gap-2">
                    Get the report <FaArrowRight className="w-3 h-3" />
                  </span>
                </button>
              )}
            />
          </div>
        </div>
      </section>

      {/* Get in touch CTA */}
      <section className="py-16 bg-[#0B1B2B] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5AA9E6] mb-3">LET'S TALK</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a {tech.name} project in mind?
          </h2>
          <p className="text-white/80 mb-8">
            Tell us what you're building and we'll get back to you with a scoped approach and next steps.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2A6EBB] hover:bg-[#1f5aa0] text-white font-semibold px-7 py-3.5 rounded-md transition"
          >
            Get in touch <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TechnologyDetail;
