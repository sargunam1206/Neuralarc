import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Footer from "../Footer";
import blogData from "../../data/blogData";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>IoT Engineering Notes | NeuralArc Blog</title>
        <meta
          name="description"
          content="Technical notes from NeuralArc's IoT team in Coimbatore — architecture, sensors, connectivity, analytics, and security, drawn from real projects."
        />
        <link rel="canonical" href="https://www.neuralarc.com/blog" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">IoT Engineering Notes</h1>
          <p className="text-lg max-w-2xl mx-auto">
            How our team in Coimbatore designs, connects, and secures IoT systems — written from real projects, not generalities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-[#E31C24] font-semibold text-sm">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
