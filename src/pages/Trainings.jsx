import { FaBrain, FaMicrochip, FaLaptopCode, FaChartBar } from "react-icons/fa";

const programs = [
  {
    icon: <FaBrain className="w-8 h-8 text-[#2A6EBB]" />,
    title: "AI & Machine Learning",
    hours: "40 hours • Certification included",
    bullets: ["Python for AI", "Deep Learning", "Model Deployment"],
  },
  {
    icon: <FaMicrochip className="w-8 h-8 text-[#E31C24]" />,
    title: "IoT Development",
    hours: "32 hours • Hands-on projects",
    bullets: ["Sensor Integration", "Cloud Connectivity", "Security Protocols"],
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-[#2A6EBB]" />,
    title: "Full-Stack Development",
    hours: "60 hours • Portfolio projects",
    bullets: ["React & Node.js", "Database Design", "API Development"],
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-[#E31C24]" />,
    title: "Data Analytics",
    hours: "36 hours • Real datasets",
    bullets: ["Statistical Analysis", "Data Visualization", "Business Intelligence"],
  },
];

const Training = () => {
  return (
    <>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2A6EBB] mb-2">
          Training & Certification Programs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Upskill your team with cutting-edge technology training
        </p>

        {/* Training Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-[#2A6EBB] shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{p.hours}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a
                href="#enroll"
                className="text-[#2A6EBB] font-semibold hover:underline"
              >
                Enroll Now →
              </a>
            </div>
          ))}
        </div>

        {/* Corporate Training CTA */}
        <div className="mt-16 bg-gray-100 p-10 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Corporate Training Solutions
          </h3>
          <p className="text-gray-600 mb-4">
            Custom training programs designed for your organization's specific needs. On-site or remote delivery available.
          </p>
          <a
            href="#corporate-training"
            className="px-6 py-3 bg-[#E31C24] text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Request Custom Training
          </a>
        </div>
      </div>
    </section>
    <div className="flex justify-center">
  <a href="/TrainingList">
    <button className="px-8 py-3 rounded-lg border-2 border-[#E31C24] text-[#E31C24] font-semibold transition duration-300 ease-in-out hover:bg-[#E31C24] hover:text-white shadow-md hover:shadow-lg">
      Know More
    </button>
  </a>
</div>
    </>
  );
};

export default Training;
