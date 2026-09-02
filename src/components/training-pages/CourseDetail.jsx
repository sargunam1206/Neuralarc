import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCheck,
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCertificate,
  FaSignal,
  FaRegClock,
  FaArrowRight,
} from "react-icons/fa";

import Header from "../Header/Header";
import Footer from "../Footer";
import TrainingEnrollModal from "../TrainingEnrollModal";
import { getCourseBySlug } from "../../data/trainingData";

const SITE = "https://www.neuralarc.com";
const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reviews", label: "Reviews" },
];

const Stars = ({ value = 5, className = "text-amber-400" }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <FaStar key={i} className="w-4 h-4" />;
        if (i === full && half) return <FaStarHalfAlt key={i} className="w-4 h-4" />;
        return <FaRegStar key={i} className="w-4 h-4" />;
      })}
    </span>
  );
};

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Avatar = ({ name }) => (
  <span
    className="flex-shrink-0 w-11 h-11 rounded-full bg-[#2A6EBB]/10 text-[#2A6EBB] font-bold flex items-center justify-center text-sm"
    aria-hidden="true"
  >
    {initials(name)}
  </span>
);

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  const [activeSection, setActiveSection] = useState("about");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);

  // Scroll-spy for the sticky course navigation.
  useEffect(() => {
    if (!course) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [course]);

  if (!course) {
    return (
      <>
        <Header />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Course not found</h1>
          <Link to="/TrainingList" className="text-[#2A6EBB] font-semibold">
            Browse all training programs →
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const canonical = `${SITE}/training/${course.slug}`;
  const enrollProgram = {
    title: course.title,
    duration: `${course.duration} • Certification included`,
    bullets: course.highlights,
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const visibleSkills = showAllSkills ? course.skills : course.skills.slice(0, 8);
  const hasHiddenSkills = course.skills.length > 8;

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    provider: {
      "@type": "Organization",
      name: "NeuralArc",
      sameAs: SITE,
    },
    url: canonical,
    educationalCredentialAwarded: "NeuralArc Professional Certificate",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.learnerReviews.rating,
      reviewCount: parseInt(course.learnerReviews.count, 10) || 100,
      bestRating: 5,
    },
  };

  return (
    <>
      <Helmet>
        <title>{course.metaTitle}</title>
        <meta name="description" content={course.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={course.metaTitle} />
        <meta property="og:description" content={course.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(courseJsonLd)}</script>
      </Helmet>

      <Header />

      {/* ---------- HERO ---------- */}
      <section className="bg-[#0B1B2B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.18em] text-[#5AA9E6] uppercase mb-4">
              {course.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {course.h1}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
              {course.tagline}
            </p>

            <ul className="space-y-2.5 mb-8">
              {course.heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/90">
                  <FaCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setEnrollOpen(true)}
              className="inline-flex items-center gap-2 bg-[#E31C24] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enroll Now <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <img
              src={course.image}
              alt={`${course.title} course at NeuralArc`}
              className="w-full aspect-video object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ---------- INFO BAR ---------- */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <FaCertificate className="w-6 h-6 text-[#2A6EBB] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-900 text-sm">{course.category}</p>
              <p className="text-sm text-gray-500">{course.infoBar.certificateNote}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaStar className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-900 text-sm">
                {course.infoBar.rating.toFixed(1)} <span className="text-amber-400">★</span>
              </p>
              <p className="text-sm text-gray-500">{course.infoBar.ratingNote}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaSignal className="w-6 h-6 text-[#2A6EBB] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-900 text-sm">{course.infoBar.level}</p>
              <p className="text-sm text-gray-500">{course.infoBar.levelNote}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaRegClock className="w-6 h-6 text-[#2A6EBB] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-900 text-sm">{course.infoBar.timeToComplete}</p>
              <p className="text-sm text-gray-500">{course.infoBar.scheduleNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STICKY COURSE NAV ---------- */}
      <nav
        aria-label="Course sections"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-2">
          {NAV_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              aria-current={activeSection === id ? "true" : undefined}
              className={`px-4 py-4 text-sm font-semibold border-b-2 transition ${
                activeSection === id
                  ? "border-[#2A6EBB] text-[#2A6EBB]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="scroll-mt-40 bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
            About this course
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">{course.about.description}</p>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            What you&apos;ll learn
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {course.about.whatYouLearn.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4"
              >
                <FaCheck className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Skills you&apos;ll gain
          </h3>
          <div id="skills-list" className="flex flex-wrap gap-2.5 mb-4">
            {visibleSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-[#2A6EBB]/10 text-[#2A6EBB] text-sm font-medium px-3.5 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
          {hasHiddenSkills && (
            <button
              type="button"
              onClick={() => setShowAllSkills((v) => !v)}
              aria-expanded={showAllSkills}
              aria-controls="skills-list"
              className="text-sm font-semibold text-[#2A6EBB] hover:text-[#1f5aa0] mb-14 inline-flex items-center gap-1"
            >
              {showAllSkills ? "Show less" : `Show all ${course.skills.length} skills`}
              <FaArrowRight
                className={`w-3 h-3 transition-transform ${showAllSkills ? "-rotate-90" : "rotate-90"}`}
              />
            </button>
          )}

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 mt-2">
            Tools you&apos;ll learn
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {course.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border border-gray-300 text-gray-700 text-sm font-medium px-3.5 py-1.5"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OUTCOMES ---------- */}
      <section id="outcomes" className="scroll-mt-40 bg-gray-50 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
              {course.outcomes.heading}
            </h2>
            <ul className="space-y-5">
              {course.outcomes.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-[#2A6EBB] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={course.outcomes.image}
              alt={`Career outcomes for the ${course.title} course`}
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ---------- REVIEWS: WHY NEURALARC ---------- */}
      <section id="reviews" className="scroll-mt-40 bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Why people choose NeuralArc for their career
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {course.whyChoose.map((r) => (
              <div
                key={r.name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col"
              >
                <Stars value={r.rating} />
                <p className="text-sm text-gray-700 leading-relaxed my-4 flex-1">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                  <Avatar name={r.name} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                    {r.since && <p className="text-xs text-gray-500">{r.since}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- LEARNER REVIEWS ---------- */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Learner reviews
          </h2>
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-gray-900">
                {course.learnerReviews.rating.toFixed(1)}
              </span>
              <Stars value={course.learnerReviews.rating} className="text-amber-400 text-xl" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Based on {course.learnerReviews.count} learner reviews
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.learnerReviews.items.map((rev) => (
              <div key={rev.name} className="border border-gray-200 rounded-2xl p-6">
                <Stars value={rev.rating} />
                <p className="font-semibold text-gray-900 text-sm mt-3">{rev.name}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{rev.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-[#0B1B2B] text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            {course.finalCta.heading}
          </h2>
          <p className="text-white/80 mb-8">{course.finalCta.subtext}</p>
          <button
            type="button"
            onClick={() => setEnrollOpen(true)}
            className="inline-flex items-center gap-2 bg-[#E31C24] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Enroll Now <FaArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-6 text-sm text-white/60">
            Explore more{" "}
            <Link to="/TrainingList" className="underline hover:text-white">
              NeuralArc training programs
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />

      {enrollOpen && (
        <TrainingEnrollModal
          program={enrollProgram}
          onClose={() => setEnrollOpen(false)}
        />
      )}
    </>
  );
};

export default CourseDetail;
