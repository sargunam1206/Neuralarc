import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";
import Header from "../Header/Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";


const ServiceDetail = () => {
  const { slug } = useParams();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Service not found</h2>
      </div>
    );
  }

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

      {/* Hero */}
      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg max-w-3xl">{service.longDescription}</p>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">
            Technologies We Use
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.technologies.map((tech, i) => (
              <li
                key={i}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2A6EBB] mb-6">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {service.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetail;
