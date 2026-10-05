import { Link } from "react-router-dom";
import { FaFlask } from "react-icons/fa";
import productsData from "../data/productsData";

const featuredSlugs = ["t-remo", "tracker", "smart-agri-solution", "istarter", "microlab", "leadpro"];
// Keep the order of featuredSlugs (IoT first) rather than the data file order.
const featuredProducts = featuredSlugs
  .map((slug) => productsData.find((p) => p.slug === slug))
  .filter(Boolean);

const HomeProducts = () => {
  return (
    <section className="py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-12"
          data-aos="fade-down"
        >
          Products Built by NeuralArc
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
              data-aos="fade-up"
            >
              <div className="h-40 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#2A6EBB]/10 text-[#2A6EBB]">
                    <FaFlask className="w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-[#2A6EBB] mb-1">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {product.specs[0]}
                </p>
                <span className="text-[#E31C24] font-semibold text-sm">Explore Product →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10" data-aos="fade-right">
          <Link
            to="/Productes"
            className="group inline-flex items-center gap-2 text-[#E31C24] font-semibold transition-all duration-300 hover:gap-3"
          >
            <span>View All Products</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
