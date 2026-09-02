// Centralized course configuration for the Training listing page and the
// dynamic course detail page (/training/:slug). Add, remove, or edit a course
// here — the listing cards and the detail pages update automatically.

import imgML from "../assets/images/Aemilst_Machine_Learning.png.png";
import imgIoT from "../assets/images/IoT_Development.png.png";
import imgPy from "../assets/images/Python_FullStack.png.png";
import imgMern from "../assets/images/MERNFull-Stack.png.png";
import imgData from "../assets/images/DataAnalytics.png.png";
import imgMobile from "../assets/images/MobileAppDevelopment.png.png";
import imgCloud from "../assets/images/CloudComputing.png.png";
import imgCyber from "../assets/images/Cybersecurity.png.png";
import imgUiux from "../assets/images/UIUXDesign.png.png";

// Shared placeholder visual for the detail-page "Outcomes" section until
// dedicated art is supplied. The hero uses each course's own `image`.
import careerVisual from "../assets/images/team3.jpg";

// --- Reusable defaults --------------------------------------------------
// Concise, honest sample content. Replace `whyChoose` / `learnerReviews`
// with real feedback when available — the shape stays the same.

const defaultWhyChoose = (topic) => [
  {
    name: "Sanjay R.",
    since: "Learner since 2024",
    rating: 5,
    quote: `The hands-on projects made ${topic} click for me. I finished with work I could actually show an employer.`,
  },
  {
    name: "Meera N.",
    since: "Learner since 2023",
    rating: 5,
    quote: `Clear structure, real datasets, and mentors who answer questions. The ${topic} track was worth every hour.`,
  },
  {
    name: "Arjun P.",
    since: "Learner since 2024",
    rating: 4,
    quote: `I came in with almost no background. The pacing let me keep up while still going deep on ${topic}.`,
  },
  {
    name: "Divya K.",
    since: "Learner since 2025",
    rating: 5,
    quote: `The NeuralArc certificate and portfolio pieces helped me talk confidently about ${topic} in interviews.`,
  },
];

const defaultLearnerReviews = (topic) => ({
  rating: 4.8,
  count: "120+",
  items: [
    {
      name: "Praveen S.",
      rating: 5,
      text: `Practical, project-first teaching. I could apply the ${topic} concepts at work within weeks.`,
    },
    {
      name: "Lakshmi V.",
      rating: 5,
      text: `Well-organised modules and responsive mentors. The capstone tied everything together.`,
    },
    {
      name: "Nikhil B.",
      rating: 4,
      text: `Solid fundamentals and good real-world examples. Would have liked a few more optional deep dives.`,
    },
    {
      name: "Fathima A.",
      rating: 5,
      text: `The certificate is recognised by local employers and the ${topic} portfolio work stood out.`,
    },
  ],
});

// --- Courses ----------------------------------------------------------

const trainingData = [
  {
    id: "ai-machine-learning",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    image: imgML,
    duration: "14 hours",
    certificationIncluded: true,
    popular: true,
    highlights: ["Python for AI/ML", "Model Development", "Model Deployment"],

    category: "Professional Certificate",
    h1: "AI & Machine Learning",
    tagline:
      "Build practical AI and machine learning skills with hands-on learning in Python, model development, and deployment.",
    heroPoints: [
      "Learn practical machine learning concepts using Python.",
      "Build, evaluate, and deploy real-world ML models.",
    ],
    metaTitle: "AI & Machine Learning | NeuralArc",
    metaDescription:
      "Learn practical machine learning with Python, model development, evaluation, and deployment through the AI & Machine Learning course at NeuralArc. Earn a machine learning certification.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.8,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "No prior experience required",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The AI & Machine Learning course at NeuralArc takes you from Python fundamentals to building and deploying real machine learning models. You will work with real datasets, learn how to frame a problem, choose the right algorithm, evaluate results honestly, and ship a model that others can use. The course is designed for beginners and career switchers who want practical, job-relevant skills rather than theory alone. Every module ends with hands-on work, and the track finishes with a portfolio-ready project. On completion you earn a NeuralArc certificate that reflects the practical AI and ML skills you have demonstrated.",
      whatYouLearn: [
        "Build machine learning models using Python and popular ML libraries",
        "Prepare, clean, transform, and analyze datasets for machine learning",
        "Train, evaluate, and improve supervised and unsupervised ML models",
        "Deploy machine learning models for real-world applications",
      ],
    },

    skills: [
      "Python for Machine Learning",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Preprocessing",
      "Feature Engineering",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Scikit-learn",
      "Deep Learning",
      "Model Deployment",
      "Predictive Modeling",
      "Data Analysis",
      "AI Development",
    ],
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter Notebook",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Git",
      "GitHub",
      "Flask",
      "FastAPI",
      "Docker",
    ],

    outcomes: {
      heading: "Advance your career with in-demand AI & ML skills",
      image: careerVisual,
      points: [
        "Build production-ready machine learning projects using Python.",
        "Demonstrate practical AI/ML skills through hands-on projects and a portfolio.",
        "Earn a NeuralArc certificate that demonstrates your course completion and technical skills.",
      ],
    },

    whyChoose: [
      {
        name: "Harish M.",
        since: "Learner since 2024",
        rating: 5,
        quote:
          "Learning practical AI and machine learning concepts helped me turn theory into real projects. The deployment module was the part I use most at work.",
      },
      {
        name: "Sneha R.",
        since: "Learner since 2023",
        rating: 5,
        quote:
          "I switched from a support role into a data role. The Python and model-evaluation sections gave me the confidence to apply.",
      },
      {
        name: "Vikram T.",
        since: "Learner since 2024",
        rating: 4,
        quote:
          "Good balance of fundamentals and hands-on labs. The datasets felt realistic, not toy examples.",
      },
      {
        name: "Anjali D.",
        since: "Learner since 2025",
        rating: 5,
        quote:
          "Mentors actually reviewed my code. My capstone became the project I talk about in every interview.",
      },
    ],

    learnerReviews: {
      rating: 4.8,
      count: "120+",
      items: [
        {
          name: "Ramesh K.",
          rating: 5,
          text: "Clear explanations and a strong focus on building things. I deployed my first ML model here.",
        },
        {
          name: "Priya S.",
          rating: 5,
          text: "The feature-engineering and evaluation modules changed how I approach problems at work.",
        },
        {
          name: "Aravind N.",
          rating: 4,
          text: "Solid course. A few topics move fast, but the recordings and mentor support make up for it.",
        },
        {
          name: "Keerthana J.",
          rating: 5,
          text: "Practical, well-paced, and the certificate carried weight with local employers.",
        },
      ],
    },

    finalCta: {
      heading: "Ready to start your AI & Machine Learning journey?",
      subtext:
        "Build practical skills. Create real projects. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "iot-development",
    slug: "iot-development",
    title: "IoT Development",
    image: imgIoT,
    duration: "32 hours",
    certificationIncluded: true,
    popular: false,
    highlights: ["Sensor Integration", "Cloud Connectivity", "Security Protocols"],

    category: "Professional Certificate",
    h1: "IoT Development",
    tagline:
      "Design connected devices end to end — from sensors and microcontrollers to cloud dashboards and secure data flow.",
    heroPoints: [
      "Build real IoT prototypes with ESP32, sensors, and cloud services.",
      "Connect devices securely and visualise their data in real time.",
    ],
    metaTitle: "IoT Development Course | NeuralArc",
    metaDescription:
      "Hands-on IoT development training at NeuralArc — sensor integration, ESP32 firmware, MQTT and cloud connectivity, dashboards, and device security. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.7,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "Basic electronics helpful, not required",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The IoT Development course teaches you how a connected product actually comes together: reading sensors on a microcontroller, moving that data to the cloud over MQTT or HTTP, storing it, and showing it on a dashboard — with security considered at every step. You will build working prototypes on the ESP32 platform and finish with a portfolio project that demonstrates the full sensor-to-dashboard path. It suits students, hobbyists, and developers who want to move into embedded and IoT roles. Completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Interface sensors and actuators with the ESP32 microcontroller",
        "Send device data to the cloud using MQTT and REST APIs",
        "Build real-time dashboards to monitor and control devices",
        "Apply security practices for device-to-cloud communication",
      ],
    },

    skills: [
      "IoT Development",
      "Embedded Programming",
      "ESP32",
      "Sensor Integration",
      "MQTT",
      "Cloud Connectivity",
      "Real-Time Dashboards",
      "Firmware Development",
      "Device Security",
      "Edge Computing",
      "Data Visualization",
      "Prototyping",
    ],
    tools: [
      "Arduino IDE",
      "PlatformIO",
      "ESP32",
      "C / C++",
      "MQTT",
      "Node-RED",
      "Python",
      "Grafana",
      "Git",
      "GitHub",
    ],

    outcomes: {
      heading: "Advance your career with in-demand IoT skills",
      image: careerVisual,
      points: [
        "Build working sensor-to-cloud IoT prototypes you can demo.",
        "Show practical embedded and connectivity skills through a portfolio project.",
        "Earn a NeuralArc certificate recognising your IoT development skills.",
      ],
    },

    whyChoose: defaultWhyChoose("IoT development"),
    learnerReviews: defaultLearnerReviews("IoT"),

    finalCta: {
      heading: "Ready to build connected devices?",
      subtext:
        "Prototype real IoT systems. Ship data to the cloud. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "python-full-stack",
    slug: "python-full-stack",
    title: "Python Full-Stack",
    image: imgPy,
    duration: "55 hours",
    certificationIncluded: true,
    popular: false,
    highlights: ["Django / Flask", "REST APIs", "Database Design"],

    category: "Professional Certificate",
    h1: "Python Full-Stack Development",
    tagline:
      "Build complete web applications with Python on the back end and a modern, responsive front end.",
    heroPoints: [
      "Design REST APIs and relational database schemas with Django and Flask.",
      "Connect a front end, add authentication, and deploy a working app.",
    ],
    metaTitle: "Python Full-Stack Development Course | NeuralArc",
    metaDescription:
      "Learn Python full-stack web development at NeuralArc — Django, Flask, REST APIs, database design, authentication, and deployment. Build portfolio projects with certification.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.7,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "No prior experience required",
      timeToComplete: "4 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The Python Full-Stack course covers everything needed to build and ship a real web application: Python fundamentals, the Django and Flask frameworks, designing and querying relational databases, building and documenting REST APIs, wiring up a responsive front end, handling authentication, and deploying to the cloud. You build several projects and one substantial capstone. It is aimed at beginners and developers moving into web roles, and completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Build back-end services with Django and Flask",
        "Design relational database schemas and write efficient queries",
        "Create and secure REST APIs consumed by a front end",
        "Deploy full-stack applications to the cloud",
      ],
    },

    skills: [
      "Python",
      "Django",
      "Flask",
      "REST API Development",
      "Database Design",
      "SQL",
      "Authentication",
      "Object-Oriented Programming",
      "Web Development",
      "Version Control",
      "Testing",
      "Deployment",
    ],
    tools: [
      "Python",
      "Django",
      "Flask",
      "PostgreSQL",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Docker",
      "Postman",
    ],

    outcomes: {
      heading: "Advance your career with full-stack Python skills",
      image: careerVisual,
      points: [
        "Ship complete, deployed web applications built with Python.",
        "Present a portfolio of API and full-stack projects to employers.",
        "Earn a NeuralArc certificate confirming your full-stack development skills.",
      ],
    },

    whyChoose: defaultWhyChoose("Python full-stack development"),
    learnerReviews: defaultLearnerReviews("full-stack Python"),

    finalCta: {
      heading: "Ready to become a Python full-stack developer?",
      subtext:
        "Build real apps end to end. Deploy them. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "mern-full-stack",
    slug: "mern-full-stack",
    title: "MERN Full-Stack",
    image: imgMern,
    duration: "65 hours",
    certificationIncluded: true,
    popular: true,
    highlights: ["MongoDB, Express, React, Node.js", "REST APIs", "Deployment"],

    category: "Professional Certificate",
    h1: "MERN Full-Stack Development",
    tagline:
      "Build modern single-page applications with MongoDB, Express, React, and Node.js.",
    heroPoints: [
      "Develop a React front end backed by an Express and Node.js API.",
      "Model data in MongoDB, add auth, and deploy the full stack.",
    ],
    metaTitle: "MERN Full-Stack Development Course | NeuralArc",
    metaDescription:
      "Learn MERN stack development at NeuralArc — MongoDB, Express, React, and Node.js. Build REST APIs, single-page apps, authentication, and deploy portfolio projects. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.8,
      ratingNote: "Based on learner feedback",
      level: "Intermediate Level",
      levelNote: "Basic JavaScript recommended",
      timeToComplete: "4 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The MERN Full-Stack course focuses on the JavaScript-everywhere stack: React for the interface, Node.js and Express for the server, and MongoDB for data. You learn component design and state management, build and secure REST APIs, model documents and relationships in MongoDB, add JSON web token authentication, and deploy the complete application. The course is project-heavy and ends with a portfolio capstone. It suits learners with some JavaScript who want to work as full-stack web developers, and completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Build interactive single-page applications with React",
        "Create REST APIs with Node.js and Express",
        "Model and query data in MongoDB",
        "Add authentication and deploy a full MERN application",
      ],
    },

    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API Development",
      "State Management",
      "Authentication",
      "Responsive UI",
      "Version Control",
      "Testing",
      "Deployment",
    ],
    tools: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
    ],

    outcomes: {
      heading: "Advance your career with modern MERN skills",
      image: careerVisual,
      points: [
        "Ship deployed single-page applications built on the MERN stack.",
        "Show a portfolio of React and API projects to hiring teams.",
        "Earn a NeuralArc certificate recognising your MERN development skills.",
      ],
    },

    whyChoose: defaultWhyChoose("MERN stack development"),
    learnerReviews: defaultLearnerReviews("MERN"),

    finalCta: {
      heading: "Ready to build with the MERN stack?",
      subtext:
        "Create modern web apps. Deploy them. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics",
    image: imgData,
    duration: "36 hours",
    certificationIncluded: true,
    popular: false,
    highlights: ["Statistical Analysis", "Data Visualization", "Business Intelligence"],

    category: "Professional Certificate",
    h1: "Data Analytics",
    tagline:
      "Turn raw data into clear, decision-ready insight using spreadsheets, SQL, Python, and BI tools.",
    heroPoints: [
      "Clean, analyse, and visualise real datasets end to end.",
      "Build dashboards and reports that answer business questions.",
    ],
    metaTitle: "Data Analytics Course | NeuralArc",
    metaDescription:
      "Learn data analytics at NeuralArc — statistics, SQL, Python (Pandas), data visualization, and business intelligence dashboards. Work with real datasets. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.7,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "No prior experience required",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The Data Analytics course teaches the full analysis workflow: asking the right question, pulling data with SQL, cleaning and shaping it with spreadsheets and Python, running descriptive and inferential statistics, and communicating findings through charts and dashboards. You work with real datasets throughout and finish with a capstone analysis and dashboard. It is aimed at people moving into analyst roles from any background, and completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Query and combine data using SQL",
        "Clean, transform, and analyse datasets with Python and Pandas",
        "Apply core statistics to summarise and test data",
        "Build clear dashboards and reports for stakeholders",
      ],
    },

    skills: [
      "Data Analysis",
      "SQL",
      "Statistics",
      "Data Visualization",
      "Business Intelligence",
      "Pandas",
      "Data Cleaning",
      "Dashboarding",
      "Reporting",
      "Excel / Spreadsheets",
      "Exploratory Data Analysis",
      "Storytelling with Data",
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "PostgreSQL",
      "Excel / Google Sheets",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Git",
    ],

    outcomes: {
      heading: "Advance your career with practical analytics skills",
      image: careerVisual,
      points: [
        "Deliver end-to-end analyses on real datasets.",
        "Present a portfolio of dashboards and data stories.",
        "Earn a NeuralArc certificate recognising your data analytics skills.",
      ],
    },

    whyChoose: defaultWhyChoose("data analytics"),
    learnerReviews: defaultLearnerReviews("data analytics"),

    finalCta: {
      heading: "Ready to work with data?",
      subtext:
        "Analyse real datasets. Build dashboards. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    image: imgMobile,
    duration: "45 hours",
    certificationIncluded: true,
    popular: true,
    highlights: ["Flutter / React Native", "Android & iOS Apps", "API Integration"],

    category: "Professional Certificate",
    h1: "Mobile App Development",
    tagline:
      "Build cross-platform Android and iOS apps from a single codebase with Flutter and React Native.",
    heroPoints: [
      "Design responsive mobile UIs and navigation patterns.",
      "Integrate APIs, local storage, and publish-ready builds.",
    ],
    metaTitle: "Mobile App Development Course | NeuralArc",
    metaDescription:
      "Learn cross-platform mobile app development at NeuralArc — Flutter and React Native for Android and iOS, API integration, local storage, and app store deployment. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.8,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "Basic programming helpful, not required",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The Mobile App Development course teaches you to build and ship real apps for both Android and iOS using Flutter and React Native. You cover layout and navigation, state management, calling REST APIs, storing data on the device, handling permissions, and preparing store-ready builds. The course is project-driven and ends with a published-quality portfolio app. It suits beginners and web developers moving into mobile, and completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Build cross-platform UIs with Flutter and React Native",
        "Manage app state and navigation cleanly",
        "Integrate REST APIs and on-device storage",
        "Prepare and package apps for the Play Store and App Store",
      ],
    },

    skills: [
      "Mobile App Development",
      "Flutter",
      "React Native",
      "Dart",
      "JavaScript",
      "Cross-Platform Development",
      "REST API Integration",
      "State Management",
      "Responsive UI",
      "App Deployment",
      "Local Storage",
      "Debugging",
    ],
    tools: [
      "Flutter",
      "Dart",
      "React Native",
      "JavaScript",
      "Android Studio",
      "Xcode",
      "Firebase",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    outcomes: {
      heading: "Advance your career with cross-platform mobile skills",
      image: careerVisual,
      points: [
        "Ship a store-ready mobile app for Android and iOS.",
        "Show a portfolio of cross-platform builds to employers.",
        "Earn a NeuralArc certificate recognising your mobile development skills.",
      ],
    },

    whyChoose: defaultWhyChoose("mobile app development"),
    learnerReviews: defaultLearnerReviews("mobile development"),

    finalCta: {
      heading: "Ready to build mobile apps?",
      subtext:
        "Create apps for Android and iOS. Publish them. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "cloud-computing",
    slug: "cloud-computing",
    title: "Cloud Computing",
    image: imgCloud,
    duration: "30 hours",
    certificationIncluded: true,
    popular: false,
    highlights: ["Cloud Architecture", "Deployment", "Security Practices"],

    category: "Professional Certificate",
    h1: "Cloud Computing",
    tagline:
      "Deploy, scale, and secure applications on AWS and Azure using modern cloud and DevOps practices.",
    heroPoints: [
      "Provision compute, storage, and networking on major cloud platforms.",
      "Automate deployments with containers and infrastructure as code.",
    ],
    metaTitle: "Cloud Computing Course | NeuralArc",
    metaDescription:
      "Learn cloud computing at NeuralArc — AWS and Azure fundamentals, cloud architecture, containers, CI/CD, infrastructure as code, and cloud security. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.7,
      ratingNote: "Based on learner feedback",
      level: "Intermediate Level",
      levelNote: "Basic Linux and networking helpful",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The Cloud Computing course covers the core services and patterns you need to run applications in the cloud: compute, storage, networking, identity, and monitoring on AWS and Azure, plus containers, CI/CD pipelines, and infrastructure as code. You practise deploying and scaling a real application and applying least-privilege security. It suits developers and IT professionals moving into cloud and DevOps roles, and completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Provision core services on AWS and Azure",
        "Containerise applications and run them in the cloud",
        "Automate deployments with CI/CD and infrastructure as code",
        "Apply identity, network, and data security best practices",
      ],
    },

    skills: [
      "Cloud Computing",
      "AWS",
      "Microsoft Azure",
      "Cloud Architecture",
      "Containers",
      "CI/CD",
      "Infrastructure as Code",
      "Linux",
      "Networking",
      "Cloud Security",
      "Monitoring",
      "Scalability",
    ],
    tools: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Linux",
      "Bash",
      "Git",
      "GitHub",
    ],

    outcomes: {
      heading: "Advance your career with in-demand cloud skills",
      image: careerVisual,
      points: [
        "Deploy and scale a real application on the cloud.",
        "Show hands-on cloud and DevOps work in your portfolio.",
        "Earn a NeuralArc certificate recognising your cloud computing skills.",
      ],
    },

    whyChoose: defaultWhyChoose("cloud computing"),
    learnerReviews: defaultLearnerReviews("cloud"),

    finalCta: {
      heading: "Ready to move to the cloud?",
      subtext:
        "Deploy real workloads. Automate everything. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity",
    image: imgCyber,
    duration: "38 hours",
    certificationIncluded: true,
    popular: false,
    highlights: ["Network Security", "Threat Detection", "Secure Practices"],

    category: "Professional Certificate",
    h1: "Cybersecurity",
    tagline:
      "Learn to protect systems, networks, and data — from core security concepts to hands-on defensive practice.",
    heroPoints: [
      "Understand common attacks and how to defend against them.",
      "Practise secure configuration, monitoring, and incident response.",
    ],
    metaTitle: "Cybersecurity Course | NeuralArc",
    metaDescription:
      "Learn cybersecurity fundamentals at NeuralArc — network security, threat detection, secure configuration, cryptography basics, and incident response, with hands-on labs. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.7,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "Basic IT knowledge helpful",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The Cybersecurity course builds a practical foundation in defensive security: how networks and operating systems can be attacked, how to configure them securely, how to detect suspicious activity, and how to respond to an incident. You cover access control, cryptography basics, common web vulnerabilities, logging and monitoring, and safe security-testing practice in a lab environment. It is aimed at students and IT staff moving into security roles, and completion earns a NeuralArc certificate. This course focuses on authorised, defensive practice only.",
      whatYouLearn: [
        "Identify common network, system, and web application threats",
        "Apply secure configuration and access-control practices",
        "Detect and investigate suspicious activity using logs and monitoring",
        "Follow a structured incident-response process",
      ],
    },

    skills: [
      "Cybersecurity",
      "Network Security",
      "Threat Detection",
      "Access Control",
      "Cryptography Basics",
      "Vulnerability Assessment",
      "Security Monitoring",
      "Incident Response",
      "Secure Configuration",
      "Risk Awareness",
      "Log Analysis",
      "Security Best Practices",
    ],
    tools: [
      "Linux",
      "Wireshark",
      "Nmap",
      "Burp Suite (Community)",
      "Splunk",
      "OpenVAS",
      "Bash",
      "Python",
      "Git",
      "GitHub",
    ],

    outcomes: {
      heading: "Advance your career with in-demand security skills",
      image: careerVisual,
      points: [
        "Harden systems and networks using recognised practices.",
        "Demonstrate detection and incident-response skills through lab work.",
        "Earn a NeuralArc certificate recognising your cybersecurity skills.",
      ],
    },

    whyChoose: defaultWhyChoose("cybersecurity"),
    learnerReviews: defaultLearnerReviews("cybersecurity"),

    finalCta: {
      heading: "Ready to start a career in cybersecurity?",
      subtext:
        "Learn to defend real systems. Practise in the lab. Earn your NeuralArc certificate.",
    },
  },

  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    image: imgUiux,
    duration: "34 hours",
    certificationIncluded: true,
    popular: false,
    highlights: ["User Research", "Wireframing & Prototyping", "Design Systems"],

    category: "Professional Certificate",
    h1: "UI/UX Design",
    tagline:
      "Design digital products people enjoy using — from research and wireframes to polished, tested prototypes.",
    heroPoints: [
      "Run user research and turn findings into design decisions.",
      "Build wireframes, prototypes, and a reusable design system in Figma.",
    ],
    metaTitle: "UI/UX Design Course | NeuralArc",
    metaDescription:
      "Learn UI/UX design at NeuralArc — user research, information architecture, wireframing, prototyping in Figma, visual design, design systems, and usability testing. Certification included.",

    infoBar: {
      certificateNote: "Earn a career-focused certificate",
      rating: 4.8,
      ratingNote: "Based on learner feedback",
      level: "Beginner Level",
      levelNote: "No prior experience required",
      timeToComplete: "3 months to complete",
      scheduleNote: "Flexible learning schedule",
    },

    about: {
      description:
        "The UI/UX Design course walks through the full product design process: understanding users through research, structuring content and flows, sketching and wireframing, building interactive prototypes in Figma, applying visual design and accessibility principles, creating a design system, and validating decisions with usability testing. You produce a complete case study for your portfolio. It suits beginners and people moving from graphic design or development into product design, and completion earns a NeuralArc certificate.",
      whatYouLearn: [
        "Plan and run lightweight user research",
        "Create wireframes, user flows, and interactive prototypes in Figma",
        "Apply visual hierarchy, typography, and accessibility principles",
        "Build a reusable design system and test it with users",
      ],
    },

    skills: [
      "UI Design",
      "UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Interaction Design",
      "Visual Design",
      "Design Systems",
      "Usability Testing",
      "Accessibility",
      "Figma",
    ],
    tools: [
      "Figma",
      "FigJam",
      "Adobe XD",
      "Miro",
      "Maze",
      "Notion",
      "Google Forms",
      "Unsplash",
    ],

    outcomes: {
      heading: "Advance your career with product design skills",
      image: careerVisual,
      points: [
        "Produce a full UX case study from research to tested prototype.",
        "Present a portfolio that shows your design process, not just screens.",
        "Earn a NeuralArc certificate recognising your UI/UX design skills.",
      ],
    },

    whyChoose: defaultWhyChoose("UI/UX design"),
    learnerReviews: defaultLearnerReviews("UI/UX design"),

    finalCta: {
      heading: "Ready to design products people love?",
      subtext:
        "Research, prototype, and test real designs. Earn your NeuralArc certificate.",
    },
  },
];

export const getCourseBySlug = (slug) =>
  trainingData.find((course) => course.slug === slug) || null;

export default trainingData;
