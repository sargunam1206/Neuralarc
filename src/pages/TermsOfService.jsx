import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { termsSections, LEGAL_LAST_UPDATED } from "../data/legalContent";

const TermsOfService = () => (
  <>
    <Helmet>
      <title>Terms of Service | NeuralArc</title>
      <meta
        name="description"
        content="The terms that govern your use of the NeuralArc website and services."
      />
      <link rel="canonical" href="https://www.neuralarc.com/terms-of-service" />
    </Helmet>

    <Header />

    <section className="bg-gray-50 py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>

        <div className="space-y-8">
          {termsSections.map((s) => (
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

export default TermsOfService;
