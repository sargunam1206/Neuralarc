const servicesData = [
{
  slug: "iot",
  title: "IoT Solutions",
  h1: "IoT Development Company in Coimbatore",
  metaTitle: "IoT Development Company in Coimbatore | NeuralArc",
  metaDescription:
    "NeuralArc designs and deploys IoT hardware and cloud systems from Coimbatore — sensor to gateway to dashboard, built on ESP32, STM32, LoRa, and Raspberry Pi.",
  shortDescription:
    "Smart automation and connected devices for industries & homes.",
  // Short selling points shown at the top of the IoT page and the homepage IoT section.
  heroPoints: [
    "We custom-tailor products to your needs",
    "We do R&D for your niche requirements",
  ],
longDescription:
  "Our IoT solutions empower businesses with intelligent device connectivity and real-time automation, designed and deployed by our team in Coimbatore. We design and deploy scalable systems that collect, analyze, and act on sensor data instantly. From smart homes to industrial monitoring, we ensure seamless integration between hardware and cloud platforms. Our solutions improve operational efficiency, reduce downtime, and enable predictive maintenance. With strong security and reliable architecture, we help you build future-ready connected ecosystems.",
  faqs: [
    {
      question: "What hardware platforms does NeuralArc work with?",
      answer:
        "We build on ESP32 (with ESP-IDF), Raspberry Pi, STM32, LoRa, and NRF32 — choosing the platform based on power, range, and processing needs for each project — and design our PCBs in KiCad and Eagle.",
    },
    {
      question: "Where is NeuralArc based?",
      answer:
        "We're based in Coimbatore, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120.",
    },
    {
      question: "What IoT devices has NeuralArc built?",
      answer:
        "Two examples are T-Remo, a temperature monitoring device for vaccine and medicine transport, ice cream stalls, and cooking and mess kitchens, and Tracker, a battery-operated asset monitoring device with GPS and cloud reporting.",
    },
    {
      question: "Does NeuralArc build IoT solutions for agriculture?",
      answer:
        "Yes. Our Smart Agriculture Solution uses solar-charged LoRa sensor nodes and a gateway to monitor climate, soil and plant conditions, and has been deployed in the USA, Spain and Vietnam. Our iStarter digital starter controls irrigation motors from a mobile app and can irrigate automatically based on soil moisture.",
    },
  ],

  technologiesHeading: "Hardware & Connectivity",
  technologies: [
    "ESP32 / ESP-IDF",
    "STM32",
    "LoRa",
    "GPS",
    "SMS Gateway",
    "KiCad",
    "Eagle",
    "PrusaSlicer",
  ],

  // Store-and-forward behaviour, shown as a callout on the service page and
  // the homepage IoT section.
  highlight: {
    icon: "🔌",
    title: "Works Offline — Store Now, Send Later",
    description:
      "Our devices keep recording through power cuts and internet outages. Readings are stored on the device and sent automatically once power and connectivity return, so no data is lost.",
  },

  // Only industries named by the company or shown in real products and
  // case studies — nothing speculative.
  industries: [
    {
      title: "Agriculture & Smart Farming",
      description:
        "Crop, soil and climate monitoring over LoRa, and smart irrigation motor control — as in our Smart Agriculture Solution and iStarter.",
      icon: "🌱",
    },
    {
      title: "Healthcare & Cold Chain",
      description:
        "Temperature monitoring for vaccine and medicine transport, with GPS coordinates and SMS or web reporting — as in T-Remo.",
      icon: "💉",
    },
    {
      title: "Food & Hospitality",
      description:
        "Temperature monitoring for ice cream stalls and cooking and mess kitchens — also with T-Remo.",
      icon: "🍦",
    },
    {
      title: "Logistics & Asset Tracking",
      description:
        "Battery-operated asset monitoring with optional GPS location tracking and secured cloud reporting — as in Tracker.",
      icon: "🚚",
    },
    {
      title: "Environmental Monitoring",
      description:
        "Particulate, gas, temperature and humidity monitoring for outdoor air and for industries, offices and homes.",
      icon: "🌫️",
    },
    {
      title: "Medical Devices",
      description:
        "Sensor-driven medical equipment such as our Smart Ambu Bag Ventilator.",
      icon: "🩺",
    },
    {
      title: "Industrial Monitoring",
      description:
        "Sensor data collection, real-time alerts and predictive maintenance to reduce downtime in industrial operations.",
      icon: "🏭",
    },
    {
      title: "Smart Homes",
      description:
        "Smart automation and connected devices that integrate home hardware with cloud platforms.",
      icon: "🏠",
    },
  ],

  features: [
    {
      title: "Real-Time Device Monitoring",
      description:
        "Continuously track device status, sensor data, and system health with live dashboards and instant visibility.",
      icon: "📡",
    },
    {
      title: "Cloud-Based Dashboards",
      description:
        "Access powerful cloud dashboards to visualize data trends, generate reports, and manage devices from anywhere.",
      icon: "☁️",
    },
    {
      title: "Remote Control & Smart Alerts",
      description:
        "Control devices remotely and receive instant alerts via SMS, email, or app notifications for critical events.",
      icon: "🔔",
    },
    {
      title: "Secure Data Transmission",
      description:
        "Ensure end-to-end encrypted communication between devices and cloud using industry-standard security protocols.",
      icon: "🔐",
    },
    {
      title: "Reliable Solutions",
      description:
        "Devices validated under real field conditions — temperature extremes, motion and connectivity dropouts — so they keep running dependably.",
      icon: "✅",
    },
  ],
},
{
  slug: "embedded-software-development",
  title: "Embedded Software Development",
  h1: "Embedded & Firmware Development in Coimbatore",
  metaTitle: "Embedded & Firmware Development Services | NeuralArc",
  metaDescription:
    "NeuralArc writes embedded firmware for ESP32 (ESP-IDF) and STM32 devices — sensor integration, wireless connectivity, low-power battery designs, offline store-and-forward and secure device-to-cloud data transfer.",
  shortDescription: "Firmware for connected, low-power embedded devices.",
  longDescription:
    "Our embedded team writes the firmware that runs inside our connected devices — the same work behind T-Remo and Tracker. We develop embedded C/C++ firmware for ESP32 (using ESP-IDF) and STM32 microcontrollers, integrate sensors, and connect devices over Wi-Fi, Bluetooth, LoRa, GPS and SMS. We design for battery-operated operation, offline store-and-forward and secured data transfer to the cloud — when power or internet drops, readings are stored on the device and sent once the connection returns. Because firmware is built alongside our IoT cloud and dashboard work, the device and the platform are designed together.",
  faqs: [
    {
      question: "Which microcontrollers does NeuralArc write firmware for?",
      answer:
        "ESP32 (with ESP-IDF), STM32, and LoRa-based designs — choosing the platform based on power, range, and processing needs for each project.",
    },
    {
      question: "What devices run NeuralArc's embedded firmware?",
      answer:
        "Two examples are T-Remo, a temperature monitoring device for vaccine and medicine transport, ice cream stalls, and cooking and mess kitchens, and Tracker, a battery-operated asset monitoring device with GPS and cloud reporting.",
    },
    {
      question: "How is embedded development different from your IoT Solutions service?",
      answer:
        "Embedded development covers the device itself — firmware, sensors and connectivity. Our IoT Solutions service covers the complete system, including cloud dashboards, remote control and alerts.",
    },
    {
      question: "Do you work beyond microcontrollers?",
      answer:
        "Yes. We also build on Linux and Android platforms — board support packages and integration, bootloaders, device drivers, middleware and protocol stacks, and RTOS-based applications. Our Smart Agriculture gateway and Environmental Monitoring System both run on a Linux computing engine.",
    },
  ],

  technologiesHeading: "Microcontrollers & Connectivity",
  technologies: [
    "ESP32 / ESP-IDF",
    "STM32",
    "LoRa",
    "GPS",
    "SMS Gateway",
  ],

  features: [
    {
      title: "Microcontroller Firmware",
      description:
        "Embedded C/C++ firmware for ESP32 (ESP-IDF) and STM32, with the platform chosen for each project's power, range and processing needs.",
      icon: "🔧",
    },
    {
      title: "Sensor Integration",
      description:
        "On-device sensor reading and processing — such as the continuous temperature measurement in T-Remo and Tracker.",
      icon: "🌡️",
    },
    {
      title: "Battery-Operated Design",
      description:
        "Firmware for battery-operated devices like Tracker, with periodic message transfer and LED device status indication.",
      icon: "🔋",
    },
    {
      title: "Connectivity & Secure Transfer",
      description:
        "Wi-Fi, Bluetooth, LoRa, GPS and SMS connectivity, with secured data transfer from the device to the cloud.",
      icon: "📶",
    },
  ],
},
{
  slug: "hardware-design-manufacturing",
  title: "Hardware Design & Manufacturing",
  h1: "Hardware Design & Low-Volume Manufacturing in Coimbatore",
  metaTitle: "Hardware Design, PCB & Low-Volume Manufacturing | NeuralArc",
  metaDescription:
    "NeuralArc designs electronics hardware — schematics, multi-layer and high-speed PCBs, component selection and BOM optimisation — and takes boards through validation, testing and low-volume manufacturing with EMS partners.",
  shortDescription: "PCB design, prototyping and low-volume manufacturing.",
  longDescription:
    "We take products from requirements analysis through mechanical, electrical and software design, to implementation, testing and final integration. Our hardware team prepares schematics, selects components, optimises the bill of materials and lays out multi-layer and high-speed PCBs with delay and impedance matching, then releases Gerbers and BOMs for fabrication and assembly. Boards are validated with power-up and sanity testing, test code, and purpose-built jigs and fixtures, and we support prototyping and low-volume manufacturing through our EMS partners.",
  faqs: [
    {
      question: "Who manufactures the boards NeuralArc designs?",
      answer:
        "We work with multiple EMS companies — MightyNet (Taiwan), 3D Technologies Pvt. Ltd. (Bangalore) and Vasantha Advanced Systems (Coimbatore) — for prototyping and low-volume manufacturing.",
    },
    {
      question: "Can you improve or rework an existing product?",
      answer:
        "Yes — feature addition, value engineering, BOM cost reduction, obsolescence management, design recovery of legacy products and performance enhancement.",
    },
    {
      question: "What testing and compliance support do you provide?",
      answer:
        "Verification and validation, system testing, safety testing, pre-compliance testing and standards compliance, along with test applications, test automation and test reports.",
    },
  ],

  technologiesHeading: "Design Tools",
  technologies: ["KiCad", "Eagle", "PrusaSlicer"],

  features: [
    {
      title: "Schematic & PCB Layout",
      description:
        "Microprocessor-based, multi-layer and high-speed PCB design with delay and impedance matching.",
      icon: "📐",
    },
    {
      title: "Components & BOM",
      description:
        "Component selection and BOM optimisation, with Gerber and BOM release for fabrication and assembly.",
      icon: "🧾",
    },
    {
      title: "Board Validation & Testing",
      description:
        "Power-up and sanity testing, test code development, and jigs and fixtures for custom board manufacturing.",
      icon: "🧪",
    },
    {
      title: "Prototyping & Low-Volume Manufacturing",
      description:
        "Prototypes and small production runs through our EMS partners in India and Taiwan.",
      icon: "🏭",
    },
  ],
},
 {
  slug: "ai-ml-data-science",
  title: "AI, ML & Data Science",
  metaTitle: "AI, ML & Data Science Services | NeuralArc",
  metaDescription:
    "NeuralArc builds predictive models, BI dashboards, and data pipelines using Python, TensorFlow, and Power BI — turning raw data into business decisions.",
  shortDescription: "Transform your data into business-driven decisions.",
  faqs: [
    {
      question: "What tools does NeuralArc use for AI and data science projects?",
      answer:
        "We work with Python, Pandas, and NumPy for data processing, TensorFlow for machine learning models, and Power BI and Tableau for business intelligence dashboards.",
    },
    {
      question: "What kind of AI/ML deliverables does NeuralArc build?",
      answer:
        "Predictive analytics models, business intelligence dashboards, data visualization, and model optimization — covering the pipeline from raw data to a decision-ready dashboard.",
    },
    {
      question: "Where is NeuralArc's data science team based?",
      answer:
        "We're based in Coimbatore, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120.",
    },
  ],
longDescription:
  "We transform raw data into meaningful insights that drive smarter business decisions. Our data science services combine advanced analytics, machine learning, and interactive visualization to uncover hidden patterns. We build predictive models that help forecast trends and optimize performance. From data cleaning to model deployment, we handle the complete analytics pipeline. Our solutions enable organizations to become truly data-driven and competitive.",

  technologies: [],

  features: [
    {
      title: "Predictive Analytics",
      description:
        "Leverage machine learning models to forecast trends, detect patterns, and support proactive business decisions.",
      icon: "📈",
    },
    {
      title: "Business Intelligence Dashboards",
      description:
        "Interactive BI dashboards that convert raw data into actionable insights for leadership teams.",
      icon: "📊",
    },
    {
      title: "Advanced Data Visualization",
      description:
        "Transform complex datasets into clear visual stories using modern visualization techniques.",
      icon: "📉",
    },
    {
      title: "Model Optimization",
      description:
        "Improve model accuracy and performance through tuning, validation, and continuous monitoring.",
      icon: "⚙️",
    },
  ],
},
{
  slug: "custom-software-development",
  title: "Custom Software Development",
  metaTitle: "Custom Software Development Services | NeuralArc",
  metaDescription:
    "NeuralArc builds secure, scalable custom software — from enterprise systems to API-driven platforms — using PHP, Flask, Node.js, and React.",
  shortDescription: "Robust and scalable custom software solutions.",
  faqs: [
    {
      question: "What technologies does NeuralArc use for custom software?",
      answer:
        "PHP, Flask, Node.js, React, and SQL, chosen based on the project's requirements.",
    },
    {
      question: "Does NeuralArc integrate with third-party systems?",
      answer:
        "Yes — we build API integrations with third-party services, payment gateways, and enterprise systems as part of our custom software work.",
    },
    {
      question: "What security practices are built into NeuralArc's software?",
      answer:
        "Authentication, authorization, and data protection are built in from the start, not added later.",
    },
  ],
longDescription:
  "We design and develop robust, scalable, and secure software tailored to your business goals. Our team follows modern development practices to build high-performance applications that grow with your needs. From custom enterprise systems to API-driven platforms, we ensure clean architecture and maintainability. We prioritize security, reliability, and seamless user experience in every solution. Our software helps businesses streamline operations and accelerate digital transformation.",

  technologies: [
    "Node.js",
    "React",
  ],

  features: [
    {
      title: "Custom Software Development",
      description:
        "End-to-end development of tailored software solutions aligned with your unique business workflows.",
      icon: "💻",
    },
    {
      title: "API Integrations",
      description:
        "Seamless integration with third-party services, payment gateways, and enterprise systems.",
      icon: "🔗",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Built-in security best practices including authentication, authorization, and data protection.",
      icon: "🔒",
    },
    {
      title: "Scalable Architecture",
      description:
        "Future-ready system design that supports growth, high traffic, and evolving business needs.",
      icon: "🏗️",
    },
  ],
},

  {
  slug: "full-stack-development",
  title: "Full Stack Development",
  metaTitle: "Full Stack Web Development Company | NeuralArc",
  metaDescription:
    "NeuralArc builds fast, responsive, SEO-friendly websites and web apps using React, Node.js, and Tailwind CSS.",
  shortDescription: "Modern, responsive, and high-performance websites.",
  faqs: [
    {
      question: "What technologies does NeuralArc use to build websites?",
      answer:
        "HTML5, CSS3, Bootstrap, WordPress, JavaScript, React, Node.js, and Tailwind CSS, chosen based on the project.",
    },
    {
      question: "Are NeuralArc's websites mobile-friendly?",
      answer:
        "Yes — every site we build uses a mobile-first responsive design that adapts across desktop, tablet, and smartphone.",
    },
    {
      question: "Does NeuralArc build custom web apps or only websites?",
      answer:
        "Both — from corporate websites to dynamic web applications, depending on what the business needs.",
    },
  ],
longDescription:
  "We create modern, responsive, and high-performing websites that elevate your digital presence. Our web solutions are built with the latest technologies to ensure speed, scalability, and SEO friendliness. We focus on intuitive UI/UX design that enhances user engagement across all devices. From corporate websites to dynamic web apps, we deliver fully optimized solutions. Our goal is to help your brand stand out and convert visitors into customers.",
  technologies: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Wordpress",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
  ],

  features: [
    {
      title: "Responsive Design",
      description:
        "Mobile-first websites that adapt perfectly across desktops, tablets, and smartphones.",
      icon: "📱",
    },
    {
      title: "SEO Optimization",
      description:
        "Search-engine-friendly architecture to improve visibility and organic traffic growth.",
      icon: "🔍",
    },
    {
      title: "High Performance",
      description:
        "Optimized loading speed and performance for better user experience and ranking.",
      icon: "⚡",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Consistent behavior across Chrome, Safari, Firefox, and Edge browsers.",
      icon: "🌐",
    },
  ],
},
{
  slug: "app-development",
  title: "Mobile App Development",
  metaTitle: "Mobile App Development | NeuralArc",
  metaDescription:
    "NeuralArc builds cross-platform and native Android & iOS apps using Flutter, React Native, and Firebase.",
  shortDescription: "Scalable Android & iOS applications.",
  faqs: [
    {
      question: "Does NeuralArc build for both Android and iOS?",
      answer:
        "Yes — using Flutter and React Native for cross-platform apps, or native Android (Kotlin) and iOS (Swift) development when needed.",
    },
    {
      question: "What apps has NeuralArc built?",
      answer:
        "Examples include Kadai, a stock management app, and Microlab, a diagnostic lab booking and tracking platform.",
    },
    {
      question: "Does NeuralArc handle app store publishing?",
      answer:
        "Yes — we support the full process of publishing apps on the Google Play Store and Apple App Store.",
    },
  ],
longDescription:
  "We build powerful and user-friendly mobile applications for Android and iOS platforms. Our apps are designed for smooth performance, scalability, and excellent user experience. Using cross-platform and native technologies, we ensure faster development and reliable functionality. We integrate secure APIs, real-time features, and cloud services seamlessly. Our mobile solutions help businesses reach customers anytime, anywhere.",

  technologies: [
    "React Native",
    "Firebase",
  ],

  features: [
    {
      title: "Cross-Platform Apps",
      description:
        "Build once and deploy on both Android and iOS with consistent performance.",
      icon: "📲",
    },
    {
      title: "UI/UX Focused Design",
      description:
        "Intuitive and engaging user interfaces designed for maximum user retention.",
      icon: "🎨",
    },
    {
      title: "API Integration",
      description:
        "Secure integration with backend services, payment systems, and third-party APIs.",
      icon: "🔌",
    },
    {
      title: "App Store Deployment",
      description:
        "Complete support for publishing apps on Google Play Store and Apple App Store.",
      icon: "🚀",
    },
  ],
},
{
  slug: "training",
  title: "Training & Internship Programs",
  metaTitle: "Training & Internship Programs | NeuralArc",
  metaDescription:
    "Hands-on IoT, AI/ML, and software training and internship programs for students and professionals, based in Coimbatore.",
  shortDescription: "Hands-on training for students & professionals.",
  faqs: [
    {
      question: "What training programs does NeuralArc offer?",
      answer:
        "Programs covering AI & Machine Learning, IoT Development, Python and MERN full-stack, Data Analytics, Mobile App Development, and Cloud Computing — see the full list on our Training page.",
    },
    {
      question: "Do NeuralArc's training programs include real projects?",
      answer:
        "Yes — every program includes hands-on, real-world projects rather than only theory.",
    },
    {
      question: "Does NeuralArc offer placement support?",
      answer:
        "Yes — placement guidance including resume building, mock interviews, and job referrals is part of our training programs.",
    },
  ],
longDescription:
  "Our training and internship programs are designed to bridge the gap between academic learning and industry demands. We provide hands-on experience through real-time projects guided by experienced mentors. The curriculum focuses on practical skills, problem-solving, and modern technologies. Participants gain confidence through continuous assessment and career preparation support. Our mission is to make students industry-ready and highly employable.",

  technologies: [],

  features: [
    {
      title: "Live Projects",
      description:
        "Work on real-world industry projects to gain practical hands-on experience.",
      icon: "🧪",
    },
    {
      title: "Industry Mentors",
      description:
        "Learn directly from experienced professionals working in the industry.",
      icon: "👨‍🏫",
    },
    {
      title: "Certification",
      description:
        "Receive recognized certification upon successful program completion.",
      icon: "🎓",
    },
    {
      title: "Placement Guidance",
      description:
        "Career support including resume building, mock interviews, and job referrals.",
      icon: "💼",
    },
  ],
},

];

export default servicesData;
