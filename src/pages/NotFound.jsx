import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

// Shown for any URL that isn't a real page — e.g. old addresses from the
// previous website. Pre-rendered to dist/404.html, which .htaccess serves with
// a real 404 status so search engines drop dead URLs instead of indexing a
// blank page.
const links = [
  { to: "/", label: "Home" },
  { to: "/services/iot", label: "IoT Solutions" },
  { to: "/Services", label: "All Solutions" },
  { to: "/Productes", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found | NeuralArc</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <Header />

    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-6xl font-extrabold text-[#2A6EBB] mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          This page has moved or no longer exists
        </h1>
        <p className="text-gray-600 mb-10">
          Our website has been updated. You can find what you&apos;re looking for here:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-5 py-2.5 rounded-md bg-white border border-gray-200 font-semibold text-gray-800 hover:border-[#2A6EBB] hover:text-[#2A6EBB] transition"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default NotFound;
