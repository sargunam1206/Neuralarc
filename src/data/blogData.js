const blogData = [
  {
    slug: "how-we-design-an-iot-monitoring-system",
    relatedService: "iot",
    title: "How We Design an IoT Monitoring System",
    metaTitle: "How We Design an IoT Monitoring System | NeuralArc",
    metaDescription:
      "A look at NeuralArc's process for building IoT monitoring systems in Coimbatore — from requirements and sensor selection to cloud dashboards and field testing.",
    excerpt:
      "Our process for turning a monitoring requirement into a working IoT system, from sensor selection to a cloud dashboard.",
    sections: [
      {
        heading: "Start with the constraint, not the sensor",
        body: [
          "Every IoT monitoring project we take on starts with one question: what has to be true in the field for this device to work? For T-Remo, our temperature monitoring device for vaccine and medicine transport, that constraint was operating reliably at negative temperatures inside a moving vehicle with intermittent connectivity. That single constraint shaped the sensor choice, the enclosure, the power budget, and how often the device could safely transmit.",
          "We treat the environment as the spec. A warehouse monitoring project and a cold-chain transport project can use similar sensors but need completely different power, connectivity, and enclosure decisions.",
        ],
      },
      {
        heading: "Choosing the sensor and the edge device",
        body: [
          "We build on ESP32 and Arduino, Raspberry Pi, STM32, LoRa, and NRF32, choosing the platform based on processing needs, power budget, and how much logic needs to run on the device itself versus in the cloud.",
          "For a device like Tracker, which is battery-operated and needs to run unattended for extended periods, the priority is power efficiency and onboard aggregation — the device should only transmit meaningful, aggregated data rather than a constant raw stream.",
        ],
      },
      {
        heading: "Getting data off the device reliably",
        body: [
          "Connectivity choice depends on where the device physically lives. A fixed installation with existing infrastructure can use Wi-Fi. A device that moves, like a cold-chain shipment, needs something that works without relying on a facility's network — which is where cellular (SMS/data) or LoRa come in, depending on range and power constraints.",
        ],
      },
      {
        heading: "What happens after the data arrives",
        body: [
          "Once data reaches the cloud, it needs to become something a person can act on: a live dashboard, a threshold-based alert, or a report. Our IoT products push data to cloud dashboards and can trigger remote alerts through SMS, email, or app notifications when a reading crosses a defined limit.",
        ],
      },
      {
        heading: "Testing in the real environment",
        body: [
          "A monitoring system that works on a desk and fails in a delivery van hasn't been tested properly. We validate devices under the actual conditions they'll run in — temperature extremes, motion, and connectivity dropouts — before they go into production use.",
        ],
      },
    ],
    relatedProducts: ["t-remo", "tracker"],
  },
  {
    slug: "iot-architecture-sensor-to-dashboard",
    relatedService: "iot",
    title: "IoT Architecture: From Sensor to Dashboard",
    metaTitle: "IoT Architecture: Sensor to Dashboard | NeuralArc",
    metaDescription:
      "How NeuralArc structures an IoT system in four layers — sensor, gateway/connectivity, cloud, and dashboard — and what runs on each.",
    excerpt:
      "Breaking down the IoT stack we build on: sensor layer, connectivity layer, cloud layer, and the dashboard people actually use.",
    sections: [
      {
        heading: "The sensor layer",
        body: [
          "This is the physical hardware measuring something real — temperature, location, device status. Our sensor and controller choices span ESP32/Arduino, Raspberry Pi, STM32, and NRF32, selected per project based on power draw, processing headroom, and the sensors that need to be interfaced.",
        ],
      },
      {
        heading: "The connectivity layer",
        body: [
          "This is how data leaves the device. Depending on the deployment, we use LoRa for long-range, low-power scenarios, or more conventional Wi-Fi/cellular where infrastructure already supports it. The connectivity choice is one of the most consequential architecture decisions — it constrains data frequency, latency, and device battery life all at once.",
        ],
      },
      {
        heading: "The cloud layer",
        body: [
          "Data lands in a cloud platform where it's stored, processed, and made queryable. This is also where thresholds and rules live — the logic that decides when a reading becomes an alert rather than just a data point.",
        ],
      },
      {
        heading: "The dashboard layer",
        body: [
          "The dashboard is where the system becomes useful to a person: real-time device monitoring, historical trends, and the ability to check device status and sensor data from anywhere, on a live dashboard.",
        ],
      },
    ],
    relatedProducts: ["t-remo", "tracker"],
  },
  {
    slug: "choosing-iot-sensors-cold-chain-industrial-monitoring",
    relatedService: "iot",
    title: "Choosing IoT Sensors for Cold-Chain & Industrial Monitoring",
    metaTitle: "IoT Sensors for Cold-Chain & Industrial Monitoring | NeuralArc",
    metaDescription:
      "What we consider when selecting IoT sensors for cold-chain and industrial monitoring projects — range, sampling rate, power, and durability.",
    excerpt:
      "The real considerations behind sensor selection for cold-chain and industrial monitoring, drawn from building T-Remo.",
    sections: [
      {
        heading: "Measurement range comes first",
        body: [
          "T-Remo was built specifically for negative-temperature operation, because vaccine and medicine transport often requires monitoring well below 0°C. A sensor rated for typical room-temperature ranges simply won't hold up — this is the first filter in any cold-chain sensor selection.",
        ],
      },
      {
        heading: "Sampling rate vs. power budget",
        body: [
          "More frequent readings give finer-grained visibility, but every reading and transmission costs power. For a battery-operated device meant to run unattended, we tune sampling rate against expected battery life rather than defaulting to the highest resolution available.",
        ],
      },
      {
        heading: "Durability and enclosure",
        body: [
          "Industrial and transport environments involve vibration, moisture, and physical knocks that a lab-bench sensor setup never sees. Compact, ruggedized enclosures — T-Remo, for example, is built to a 50 x 50 x 36 mm footprint — matter as much as the sensor's electrical specs.",
        ],
      },
      {
        heading: "Getting the reading out",
        body: [
          "A sensor is only useful if its readings reach someone who can act on them. Our monitoring devices send data through SMS or directly to a web server, so alerts don't depend on someone actively checking a dashboard.",
        ],
      },
    ],
    relatedProducts: ["t-remo"],
  },
  {
    slug: "iot-gateway-connectivity-lora-vs-wifi-vs-cellular",
    relatedService: "iot",
    title: "IoT Gateway & Connectivity: LoRa vs Wi-Fi vs Cellular",
    metaTitle: "IoT Connectivity: LoRa vs Wi-Fi vs Cellular | NeuralArc",
    metaDescription:
      "How NeuralArc chooses between LoRa, Wi-Fi, and cellular connectivity for IoT deployments, based on range, power, and infrastructure.",
    excerpt:
      "The tradeoffs we weigh when picking how an IoT device gets its data out — LoRa, Wi-Fi, or cellular.",
    sections: [
      {
        heading: "Wi-Fi: when infrastructure already exists",
        body: [
          "For fixed installations inside a building that already has reliable Wi-Fi, it's usually the simplest and cheapest option — no new infrastructure, high bandwidth, low added cost. The tradeoff is that the device is tied to that facility's network.",
        ],
      },
      {
        heading: "LoRa: long range, low power, no dependency on existing networks",
        body: [
          "LoRa is part of our standard connectivity stack alongside NRF32 for exactly this reason — it lets a device transmit over long distances on very little power, without depending on Wi-Fi or cellular coverage. It trades bandwidth for range and battery life, which is the right trade for a sensor sending small, infrequent readings.",
        ],
      },
      {
        heading: "Cellular: mobile and out of range of anything else",
        body: [
          "For a device that moves — like a cold-chain shipment in a vehicle — cellular connectivity (including simple SMS-based transmission) means the device isn't dependent on any fixed network along its route. This is the approach behind T-Remo's ability to report sensed parameters via SMS during transport.",
        ],
      },
      {
        heading: "How we choose",
        body: [
          "The decision comes down to three questions: does the device move, is there existing network infrastructure at the deployment site, and how much power is available. Answering those first usually narrows the connectivity choice before we even look at sensors.",
        ],
      },
    ],
    relatedProducts: ["t-remo", "tracker"],
  },
  {
    slug: "iot-data-analytics-sensor-data-to-alerts",
    relatedService: "iot",
    title: "IoT Data Analytics: From Sensor Data to Alerts",
    metaTitle: "IoT Data Analytics: Sensor Data to Alerts | NeuralArc",
    metaDescription:
      "How NeuralArc turns raw IoT sensor data into live dashboards, historical trends, and real-time alerts.",
    excerpt:
      "What happens between a sensor reading landing in the cloud and someone getting an alert on their phone.",
    sections: [
      {
        heading: "Raw readings aren't insight",
        body: [
          "A stream of temperature or status readings is only useful once it's organized into something a person can interpret at a glance — which is why every one of our IoT deployments pairs the device with a cloud-based dashboard for visualizing trends and generating reports.",
        ],
      },
      {
        heading: "Thresholds turn data into alerts",
        body: [
          "The core analytics logic in most of our monitoring systems is threshold-based: define the acceptable range for a reading, and trigger an alert the moment a device reports something outside it. Our systems support remote alerts via SMS, email, or app notifications for exactly this kind of event.",
        ],
      },
      {
        heading: "Why dashboards need history, not just live status",
        body: [
          "A live reading tells you the current state; a trend tells you whether it's getting worse. Cloud dashboards that retain historical data let a facility manager or logistics team spot a slow drift — like a fridge starting to run warm — before it becomes a threshold breach.",
        ],
      },
    ],
    relatedProducts: ["t-remo", "tracker"],
  },
  {
    slug: "securing-device-to-cloud-data-transmission",
    relatedService: "iot",
    title: "Securing Device-to-Cloud Data Transmission",
    metaTitle: "Securing IoT Device-to-Cloud Data Transmission | NeuralArc",
    metaDescription:
      "How NeuralArc secures the connection between IoT devices and the cloud — encrypted transmission and reliable, secure architecture.",
    excerpt:
      "Why every IoT device we build treats secure data transmission as a baseline requirement, not an add-on.",
    sections: [
      {
        heading: "The device-to-cloud link is the attack surface",
        body: [
          "An IoT device that reports temperature, location, or operational status is transmitting data that a business relies on — which means that link needs to be trustworthy end to end, not just functional. We build end-to-end encrypted communication between devices and the cloud using industry-standard security protocols as a default, not an optional upgrade.",
        ],
      },
      {
        heading: "Security has to fit the device's power budget",
        body: [
          "A battery-operated device like Tracker can't afford the same processing overhead as a mains-powered gateway. Choosing the right connectivity and security protocol means balancing encryption strength against the power and processing constraints of the specific hardware platform in use.",
        ],
      },
      {
        heading: "Reliability is part of security",
        body: [
          "A system that drops data silently during a connectivity gap is a data-integrity problem as much as it's a reliability one. We design for strong security and reliable architecture together, so a device recovers and resumes reporting once connectivity returns, rather than leaving a silent gap in the record.",
        ],
      },
    ],
    relatedProducts: [],
  },

  // AI, ML & Data Science
  {
    slug: "how-we-build-predictive-analytics-models",
    relatedService: "ai-ml-data-science",
    title: "How We Build Predictive Analytics Models",
    metaTitle: "How We Build Predictive Analytics Models | NeuralArc",
    metaDescription:
      "How NeuralArc's data science team builds predictive models — from data cleaning to deployment — using Python, Pandas, and TensorFlow.",
    excerpt:
      "Our process for turning raw data into a working predictive model, from cleaning to deployment.",
    sections: [
      {
        heading: "Data cleaning comes before modeling",
        body: [
          "Every predictive model starts with the data it's trained on. We use Python along with Pandas and NumPy to clean, structure, and validate a dataset before any model is built — messy input data is the most common reason a model performs well in testing and poorly in production.",
        ],
      },
      {
        heading: "Choosing the right model for the question",
        body: [
          "Not every forecasting problem needs a deep learning model. We match the model to the business question — from simpler statistical approaches to TensorFlow-based deep learning — based on the size of the dataset and how much accuracy the decision actually requires.",
        ],
      },
      {
        heading: "From model to decision",
        body: [
          "A model that only exists in a notebook doesn't help a business make decisions. We connect predictive models to dashboards and reporting tools so forecasts and detected patterns become part of a team's regular workflow.",
        ],
      },
    ],
    relatedProducts: [],
  },
  {
    slug: "from-raw-data-to-business-intelligence-dashboards",
    relatedService: "ai-ml-data-science",
    title: "From Raw Data to Business Intelligence Dashboards",
    metaTitle: "From Raw Data to BI Dashboards | NeuralArc",
    metaDescription:
      "How NeuralArc turns raw business data into interactive BI dashboards using Power BI and Tableau.",
    excerpt:
      "The steps between a raw dataset and a dashboard a leadership team actually uses.",
    sections: [
      {
        heading: "Start with the decision the dashboard needs to support",
        body: [
          "A dashboard built without a clear decision in mind tends to show a lot of numbers and answer nothing. Before building in Power BI or Tableau, we identify the specific questions the dashboard needs to answer for the people using it.",
        ],
      },
      {
        heading: "Structuring data for visualization",
        body: [
          "Raw data rarely arrives in a shape that's ready to visualize. We use Python, Pandas, and NumPy to clean and restructure data before it reaches the dashboard layer, so the visualizations are built on a reliable foundation.",
        ],
      },
      {
        heading: "Interactive, not static",
        body: [
          "Our BI dashboards are built to let users filter and drill down — converting raw data into actionable insights for leadership teams, rather than a fixed report that goes stale the day it's published.",
        ],
      },
    ],
    relatedProducts: [],
  },
  {
    slug: "choosing-the-right-data-science-tools",
    relatedService: "ai-ml-data-science",
    title: "Choosing the Right Tools for a Data Science Project",
    metaTitle: "Choosing Data Science Tools: Python, TensorFlow, Power BI | NeuralArc",
    metaDescription:
      "How NeuralArc decides between Python, TensorFlow, Power BI, and Tableau for a given data science project.",
    excerpt:
      "Why we don't use the same toolset for every data science project — and how we decide.",
    sections: [
      {
        heading: "Python and Pandas for the data work",
        body: [
          "Almost every project starts here — Python with Pandas and NumPy for data cleaning, transformation, and exploratory analysis, regardless of what comes after.",
        ],
      },
      {
        heading: "TensorFlow when the problem needs it",
        body: [
          "We reach for TensorFlow when a project genuinely needs machine learning — pattern detection or forecasting that simpler statistical methods can't handle well. It's not our default; it's a decision based on the problem.",
        ],
      },
      {
        heading: "Power BI and Tableau for the audience, not the data",
        body: [
          "The choice between Power BI and Tableau usually comes down to who's using the dashboard and what tools their organization already works in, more than a technical difference between the two.",
        ],
      },
    ],
    relatedProducts: [],
  },

  // Embedded Software Development
  {
    slug: "how-we-design-custom-enterprise-software",
    relatedService: "embedded-software-development",
    title: "How We Design Custom Enterprise Software",
    metaTitle: "How We Design Custom Enterprise Software | NeuralArc",
    metaDescription:
      "NeuralArc's approach to building custom enterprise software — from Blood Bank Software to Billing Software — using PHP, Flask, Node.js, and React.",
    excerpt:
      "Our approach to custom business software, illustrated through products like Blood Bank Software and Billing Software.",
    sections: [
      {
        heading: "Start with the workflow, not the feature list",
        body: [
          "Custom software fails when it's built around a feature list instead of how people actually work. Our Blood Bank Software, for example, was built around real blood bank operations — stock monitoring, screening reports, and branch-wise tracking — not a generic inventory template.",
        ],
      },
      {
        heading: "Choosing the stack per project",
        body: [
          "We build on PHP, Flask, Node.js, React, and SQL, choosing the combination based on the project's scale, integration needs, and the team that will maintain it afterward.",
        ],
      },
      {
        heading: "Built to be maintained, not just delivered",
        body: [
          "We prioritize clean architecture and maintainability, because enterprise software has to survive years of changing requirements after launch, not just the initial rollout.",
        ],
      },
    ],
    relatedProducts: ["blood-bank-software", "billing-software"],
  },
  {
    slug: "integrating-third-party-apis-securely",
    relatedService: "embedded-software-development",
    title: "Integrating Third-Party APIs Securely",
    metaTitle: "Integrating Third-Party APIs Securely | NeuralArc",
    metaDescription:
      "How NeuralArc integrates payment gateways and third-party services into custom software securely.",
    excerpt:
      "What we consider when connecting custom software to payment gateways and outside services.",
    sections: [
      {
        heading: "Every integration is a trust boundary",
        body: [
          "Connecting to a third-party service — a payment gateway, an external API — means data is leaving your system. We build these integrations with authentication, authorization, and data protection as defaults, not optional extras.",
        ],
      },
      {
        heading: "Designing for the third party's failure, not just success",
        body: [
          "A payment gateway or external API going down shouldn't take your whole application with it. We design integrations to fail gracefully, so a single dependency issue doesn't cascade into a full outage.",
        ],
      },
    ],
    relatedProducts: ["purchase-software"],
  },
  {
    slug: "building-for-scale-our-architecture-approach",
    relatedService: "embedded-software-development",
    title: "Building for Scale: Our Architecture Approach",
    metaTitle: "Building for Scale: Our Architecture Approach | NeuralArc",
    metaDescription:
      "How NeuralArc designs custom software architecture to support growth and increasing traffic.",
    excerpt:
      "How we design software architecture that holds up as a business — and its data — grows.",
    sections: [
      {
        heading: "Scale is a design decision, not a fix",
        body: [
          "Future-ready system design has to be part of the architecture from day one — retrofitting scalability into software that wasn't built for it is far more expensive than designing for it up front.",
        ],
      },
      {
        heading: "Structuring data to grow with the business",
        body: [
          "We design our SQL-based data layer with growth in mind — from indexing strategy to how tables relate — so performance doesn't degrade as data volume and user count increase.",
        ],
      },
    ],
    relatedProducts: [],
  },

  // Full Stack Development
  {
    slug: "how-we-build-fast-responsive-websites",
    relatedService: "full-stack-development",
    title: "How We Build Fast, Responsive Websites",
    metaTitle: "How We Build Fast, Responsive Websites | NeuralArc",
    metaDescription:
      "NeuralArc's approach to building responsive, high-performance websites using React, Node.js, and Tailwind CSS.",
    excerpt:
      "Our approach to building websites that load fast and work well on every device.",
    sections: [
      {
        heading: "Mobile-first, not mobile-adapted",
        body: [
          "We design and build mobile-first, so a site adapts perfectly across desktops, tablets, and smartphones from the start, rather than retrofitting a desktop layout down to smaller screens.",
        ],
      },
      {
        heading: "Performance is a build decision",
        body: [
          "Optimized loading speed comes from decisions made during development — using React and Tailwind CSS to keep the codebase lean, and testing across Chrome, Safari, Firefox, and Edge for consistent behavior — not something bolted on afterward.",
        ],
      },
    ],
    relatedProducts: [],
  },
  {
    slug: "seo-foundations-we-build-into-every-website",
    relatedService: "full-stack-development",
    title: "SEO Foundations We Build Into Every Website",
    metaTitle: "SEO Foundations We Build Into Every Website | NeuralArc",
    metaDescription:
      "How NeuralArc builds search-engine-friendly architecture into every website it develops.",
    excerpt:
      "The technical SEO foundations we build into a website's architecture from the start.",
    sections: [
      {
        heading: "Structure before content",
        body: [
          "A search-engine-friendly architecture — clean URLs, proper heading structure, fast page loads — has to be part of how a site is built, not something added after launch. It's a lot harder to fix a site's foundation than to build it right the first time.",
        ],
      },
      {
        heading: "Why this matters for organic traffic growth",
        body: [
          "Sites we build are structured to improve visibility and organic traffic growth from day one — the same technical foundation we apply to our own website.",
        ],
      },
    ],
    relatedProducts: [],
  },
  {
    slug: "react-vs-wordpress-how-we-choose",
    relatedService: "full-stack-development",
    title: "React vs WordPress: How We Choose the Right Stack",
    metaTitle: "React vs WordPress: How We Choose | NeuralArc",
    metaDescription:
      "How NeuralArc decides between React and WordPress for a website project.",
    excerpt:
      "Why we don't default to one platform for every website project.",
    sections: [
      {
        heading: "WordPress for content-driven sites",
        body: [
          "When a site is primarily content that a non-technical team needs to update regularly, WordPress is often the right call — it's part of our stack for exactly that reason.",
        ],
      },
      {
        heading: "React for interactive, custom-built experiences",
        body: [
          "When a site needs custom interactivity, dynamic web app behavior, or tighter performance control, we build on React and Node.js instead — the same stack we use for our own site.",
        ],
      },
    ],
    relatedProducts: [],
  },

  // Mobile App Development
  {
    slug: "flutter-vs-react-native-how-we-choose",
    relatedService: "app-development",
    title: "Flutter vs React Native: How We Choose",
    metaTitle: "Flutter vs React Native: How We Choose | NeuralArc",
    metaDescription:
      "How NeuralArc decides between Flutter and React Native for a cross-platform mobile app project.",
    excerpt:
      "How we decide between Flutter and React Native when building a cross-platform app.",
    sections: [
      {
        heading: "Both get you to Android and iOS from one codebase",
        body: [
          "Flutter and React Native are both part of our cross-platform stack, letting us build once and deploy on both Android and iOS with consistent performance — the choice between them usually comes down to the specific UI requirements and the team maintaining the app long-term.",
        ],
      },
      {
        heading: "When we go native instead",
        body: [
          "For apps with heavy platform-specific requirements, we build natively with Android (Kotlin) or iOS (Swift) instead of forcing a cross-platform framework to do something it isn't suited for.",
        ],
      },
    ],
    relatedProducts: ["kadai", "microlab"],
  },
  {
    slug: "how-we-design-mobile-apps-people-actually-use",
    relatedService: "app-development",
    title: "How We Design Mobile Apps People Actually Use",
    metaTitle: "How We Design Mobile Apps People Actually Use | NeuralArc",
    metaDescription:
      "NeuralArc's approach to mobile app UI/UX, illustrated through apps like Microlab and Expense Tracker App.",
    excerpt:
      "Our approach to mobile UI/UX, using real apps like Microlab and Expense Tracker App as examples.",
    sections: [
      {
        heading: "Retention starts with the first screen",
        body: [
          "Our UI/UX design is focused on maximum user retention — for Microlab, that meant a booking flow simple enough for a patient to complete in a few taps, with role-based screens that don't overwhelm a technician or admin with irrelevant options.",
        ],
      },
      {
        heading: "Real-time features that actually feel real-time",
        body: [
          "We integrate secure APIs and real-time features — like Microlab's live technician tracking — so the app reflects what's actually happening, not a delayed snapshot.",
        ],
      },
    ],
    relatedProducts: ["microlab", "expense-tracker-app"],
  },
  {
    slug: "getting-your-app-through-app-store-review",
    relatedService: "app-development",
    title: "Getting Your App Through App Store Review",
    metaTitle: "Getting Your App Through App Store Review | NeuralArc",
    metaDescription:
      "What NeuralArc handles when publishing an app to the Google Play Store and Apple App Store.",
    excerpt:
      "What's involved in getting an app from finished build to published on the app stores.",
    sections: [
      {
        heading: "Publishing is part of the job, not an afterthought",
        body: [
          "We provide complete support for publishing apps on the Google Play Store and Apple App Store — store listing requirements, platform-specific policy checks, and submission are part of delivery, not left for the client to figure out alone.",
        ],
      },
    ],
    relatedProducts: [],
  },

  // Training
  {
    slug: "how-our-training-programs-are-structured",
    relatedService: "training",
    title: "How Our Training Programs Are Structured",
    metaTitle: "How Our Training Programs Are Structured | NeuralArc",
    metaDescription:
      "How NeuralArc structures its AI, IoT, and software training and internship programs in Coimbatore.",
    excerpt:
      "How our training programs are put together, from curriculum to certification.",
    sections: [
      {
        heading: "Curriculum built around what's actually used on the job",
        body: [
          "Our training and internship programs are designed to bridge the gap between academic learning and industry demands, covering Python, data analytics, web development, AI & ML, and IoT — the same technologies our own project teams use.",
        ],
      },
      {
        heading: "Certification and continuous assessment",
        body: [
          "Participants gain confidence through continuous assessment and career preparation support, with recognized certification on successful completion of the program.",
        ],
      },
    ],
    relatedProducts: [],
  },
  {
    slug: "why-we-focus-on-live-projects-not-just-theory",
    relatedService: "training",
    title: "Why We Focus on Live Projects, Not Just Theory",
    metaTitle: "Why We Focus on Live Projects, Not Just Theory | NeuralArc",
    metaDescription:
      "Why NeuralArc's training programs are built around real-world, hands-on projects.",
    excerpt:
      "Why our programs are built around real projects instead of theory-only coursework.",
    sections: [
      {
        heading: "Theory alone doesn't make someone industry-ready",
        body: [
          "Our programs give participants the chance to work on real-world industry projects to gain practical hands-on experience — the same kind of problems our engineering team solves for clients, not simplified textbook exercises.",
        ],
      },
      {
        heading: "Learning directly from people doing the work",
        body: [
          "Participants learn directly from experienced professionals working in the industry, which means the guidance reflects current practice, not a fixed syllabus.",
        ],
      },
    ],
    relatedProducts: [],
  },
  {
    slug: "from-training-to-placement-how-we-support-learners",
    relatedService: "training",
    title: "From Training to Placement: How We Support Learners",
    metaTitle: "From Training to Placement | NeuralArc",
    metaDescription:
      "How NeuralArc supports trainees beyond the classroom, from certification to placement guidance.",
    excerpt:
      "What happens after the training program ends — certification, mock interviews, and placement guidance.",
    sections: [
      {
        heading: "Certification that means something",
        body: [
          "Every program includes recognized certification upon successful completion, giving participants something concrete to show for the work.",
        ],
      },
      {
        heading: "Support doesn't stop at the certificate",
        body: [
          "Our placement guidance includes resume building, mock interviews, and job referrals — support that continues past the last day of the program.",
        ],
      },
    ],
    relatedProducts: [],
  },
];

export default blogData;
