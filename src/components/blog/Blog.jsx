import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Footer from "../Footer";
import blogData from "../../data/blogData";
import servicesData from "../../data/servicesData";

// One filter per service that actually has articles, in service order —
// so IoT is always the first category.
const categories = servicesData.filter((s) =>
  blogData.some((post) => post.relatedService === s.slug)
);

const Blog = () => {
  // The active category lives in the URL (?category=iot) so it can be linked to.
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const active = categories.some((c) => c.slug === requested) ? requested : "all";

  const posts =
    active === "all" ? blogData : blogData.filter((post) => post.relatedService === active);

  const selectCategory = (slug) =>
    setSearchParams(slug === "all" ? {} : { category: slug }, { replace: true });

  const chipClass = (isActive) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition ${
      isActive
        ? "bg-[#2A6EBB] text-white shadow-md"
        : "bg-white border border-gray-300 text-gray-700 hover:bg-[#2A6EBB]/10 hover:text-[#2A6EBB]"
    }`;

  return (
    <>
      <Helmet>
        <title>IoT & Engineering Notes | NeuralArc Blog</title>
        <meta
          name="description"
          content="Technical notes from NeuralArc's team in Coimbatore — IoT architecture, sensors, connectivity and security first, plus AI, software, app development and training."
        />
        <link rel="canonical" href="https://www.neuralarc.com/blog" />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">IoT & Engineering Notes</h1>
          <p className="text-lg max-w-2xl mx-auto">
            How our team in Coimbatore designs, connects, and secures IoT systems — plus notes on AI, software, and app development, written from real projects.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter articles by topic">
            <button
              type="button"
              aria-pressed={active === "all"}
              onClick={() => selectCategory("all")}
              className={chipClass(active === "all")}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                aria-pressed={active === c.slug}
                onClick={() => selectCategory(c.slug)}
                className={chipClass(active === c.slug)}
              >
                {c.title}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
