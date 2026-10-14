import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

// Every route is its own chunk — loaded on demand instead of one large
// bundle. Home stays eager since it's the most common landing page.
import Home from "./pages/Home";

const Services = lazy(() => import("./components/Services"));
const Productes = lazy(() => import("./components/Productes"));
const TrainingList = lazy(() => import("./components/TrainingList"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyNotice = lazy(() => import("./pages/PrivacyNotice"));
const Gallery = lazy(() => import("./components/Gallery"));
const ServiceDetail = lazy(() => import("./components/service-pages/ServiceDetail"));
const ProductDetail = lazy(() => import("./components/product-pages/ProductDetail"));
const TechnologyDetail = lazy(() => import("./components/technology-pages/TechnologyDetail"));
const CourseDetail = lazy(() => import("./components/training-pages/CourseDetail"));
const Blog = lazy(() => import("./components/blog/Blog"));
const BlogPost = lazy(() => import("./components/blog/BlogPost"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./components/case-study-pages/CaseStudyDetail"));
const IndustryLeadingSolutions = lazy(() => import("./components/why-choose-us/IndustryLeadingSolutions"));
const OurJourney = lazy(() => import("./components/why-choose-us/OurJourney"));
const ClientReviews = lazy(() => import("./components/why-choose-us/ClientReviews"));
const GlobalReachPage = lazy(() => import("./components/why-choose-us/GlobalReachPage"));

// Minimal, brand-coloured loading state for the brief gap while a route
// chunk downloads. Prerendered pages ship with full markup already in the
// HTML, so real visitors on a first load essentially never see this —
// it only appears on a lazy client-side navigation before the chunk is cached.
const RouteFallback = () => (
  <div
    className="flex items-center justify-center min-h-[60vh]"
    role="status"
    aria-label="Loading"
  >
    <div className="w-10 h-10 border-4 border-[#2A6EBB]/20 border-t-[#2A6EBB] rounded-full animate-spin" />
  </div>
);

function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <Router>
       {/* WhatsApp Floating Icon – shows on all pages */}
      <ScrollToTop />
      <WhatsAppFloat />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/Productes" element={<Productes/>} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/technologies/:slug" element={<TechnologyDetail />} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/TrainingList" element={<TrainingList />} />
          <Route path="/training/:slug" element={<CourseDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/why-choose-us/industry-leading-solutions" element={<IndustryLeadingSolutions />} />
          <Route path="/why-choose-us/products" element={<OurJourney />} />
          <Route path="/why-choose-us/clients" element={<ClientReviews />} />
          <Route path="/why-choose-us/global-reach" element={<GlobalReachPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
