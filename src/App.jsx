import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// The router itself lives in the entry files: BrowserRouter in main.jsx for
// the browser, StaticRouter in entry-server.jsx for build-time pre-rendering.

// Home is loaded up front (most visits land there); every other page is split
// into its own chunk and loaded on demand.
import Home from "./pages/Home";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyNotice = lazy(() => import("./pages/PrivacyNotice"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./components/Services"));
const Productes = lazy(() => import("./components/Productes"));
const TrainingList = lazy(() => import("./components/TrainingList"));
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

function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <>
       {/* WhatsApp Floating Icon – shows on all pages */}
      <ScrollToTop />
      <WhatsAppFloat />
      {/* Pre-rendered pages show their HTML immediately; the fallback only
          appears on client-side navigation while a page chunk downloads. */}
      <Suspense fallback={<div className="min-h-screen" />}>
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
          {/* Any other URL (e.g. old .php pages): friendly 404 instead of a blank page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
