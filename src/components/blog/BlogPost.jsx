import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Footer from "../Footer";
import blogData from "../../data/blogData";
import productsData from "../../data/productsData";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Article not found</h2>
      </div>
    );
  }

  const relatedProducts = productsData.filter((p) =>
    (post.relatedProducts || []).includes(p.slug)
  );

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.neuralarc.com/blog/${post.slug}`} />
      </Helmet>
      <Header />

      <section className="bg-[#2A6EBB] text-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
          <p className="text-white/90">{post.excerpt}</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {post.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-[#2A6EBB] mb-3">
                {section.heading}
              </h2>
              {section.body.map((para, j) => (
                <p key={j} className="text-gray-700 leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </div>
          ))}

          <div className="pt-6 border-t">
            <Link to="/services/iot" className="text-[#E31C24] font-semibold hover:underline">
              See how this fits into NeuralArc's IoT development services →
            </Link>
          </div>

          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related products
              </h3>
              <div className="flex flex-wrap gap-4">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="bg-gray-50 border rounded-lg px-4 py-3 hover:shadow transition"
                  >
                    <span className="font-medium text-gray-900">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </>
  );
};

export default BlogPost;
