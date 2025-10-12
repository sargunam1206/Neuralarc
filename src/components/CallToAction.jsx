const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2A6EBB] to-[#E31C24] text-white text-center">
      <div className="max-w-4xl mx-auto px-6"  data-aos="fade-up"
     data-aos-duration="5000">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Get in touch to see how we can help your business
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Let’s collaborate to build innovative, future-ready solutions tailored
          for your needs.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-[#2A6EBB] font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
