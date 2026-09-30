import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { privacySections, LEGAL_LAST_UPDATED } from "../data/legalContent";

const PrivacyNotice = () => (
  <>
    <Helmet>
      <title>Privacy Notice | NeuralArc</title>
      <meta
        name="description"
        content="How NeuralArc collects, uses, and protects the personal information you share with us."
      />
      <link rel="canonical" href="https://www.neuralarc.com/privacy-notice" />
    </Helmet>

    <Header />

    <section className="bg-gray-50 py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Privacy Notice
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>

        <div className="space-y-8">
          {privacySections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{s.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default PrivacyNotice;
