import product1 from "../assets/images/product-iot1.jpg";
import bloodbank from "../assets/images/bloodbank.jpeg";
import purchase from "../assets/images/purchase.jpeg";
import tracker from "../assets/Products/product1.png";
import billing from "../assets/images/billing.jpeg";
import expanseTracker from "../assets/images/expanse_app.png";
import kadaiImg from "../assets/images/Kadai.png";
import microlabImg from "../assets/images/Microlab.png";
import leadproImg from "../assets/images/LeadPro.png";
import agriSensorNodeImg from "../assets/images/agri/smart-agri-sensor-node.jpg";
import istarterImg from "../assets/images/agri/istarter-mobile-app.jpg";

// Web-portal features shared by T-Remo and Tracker (from the product brochure).
const portalFeatures = [
  { title: "Admin Control", description: "Manage devices and users from the web portal." },
  { title: "Device Onboarding", description: "Register and set up new devices from the portal." },
  { title: "Report Generation & Display", description: "Generate and view temperature reports and graphs." },
  { title: "Alert Messages & Logs", description: "Receive alerts and review a full log of events." },
];

// `industry` is optional; the Products page uses it for the Agriculture tab.
const productsData = [
  {
    id: 1,
    slug: "t-remo",
    name: "T-Remo",
    category: "IoT",
    specs: [
      "Designed for negative temperature operation",
      "Customizable Wireless Access module",
      "Dimension : (LxBxH) 50 x 50 x 36 mm",
    ],
    image: product1,
    description:
      "T-Remo is a smart temperature monitoring solution for vaccine and medicine transport, ice cream stalls, and cooking and mess kitchens, with GPS coordinates. All sensed parameters are sent through SMS or uploaded directly to the web server — and when power or internet is unavailable, readings are stored on the device and sent later.",
    features: [
      ...portalFeatures,
      { title: "Continuous Temperature Measurement", description: "Temperature is measured continuously throughout transport or storage." },
      { title: "Secured Cloud Transfer", description: "Readings are sent securely to the cloud server." },
      { title: "LED Status Indication", description: "An LED shows the device status at a glance." },
    ],
  },
  {
    id: 2,
    slug: "blood-bank-software",
    name: "Blood Bank Software",
    category: "Software",
    specs: [
      "Purchase bill management",
      "Donor information management",
      "Blood bag stock tracking",
    ],
    image: bloodbank,
    description:
      "Blood Bank Software provides comprehensive management of blood bank operations. It includes empty bag stock monitoring, screening reports, blood request information, and branch-wise tracking of empty and available blood bags.",
  },
  {
    id: 3,
    slug: "purchase-software",
    name: "Purchase Software",
    category: "Software",
    specs: [
      "Purchase order management",
      "Supplier list management",
      "Product list management",
    ],
    image: purchase,
    description:
      "This software streamlines purchase department operations, including project site tracking, invoice management, and overall procurement workflow. It helps maintain supplier records, product inventory, and purchase orders efficiently.",
  },
  {
    id: 4,
    slug: "tracker",
    name: "Tracker",
    category: "IoT",
    specs: [
      "Battery Operated Device",
      "Device onboarding",
      "Report generation and display",
    ],
    image: tracker,
    description:
      "Tracker provides centralized monitoring and control of IoT devices. It includes alert messages and logs, continuous temperature measurement and aggregation, secured data transfer to the cloud, optional GPS location tracking, periodic message transfer, and LED device status indication.",
    features: [
      ...portalFeatures,
      { title: "Temperature Measurement & Aggregation", description: "Continuous temperature measurement, aggregated on the device." },
      { title: "GPS Location Tracking", description: "Optional GPS tracking of the device's location." },
      { title: "Periodic Message Transfer", description: "Optional periodic status messages to the cloud." },
      { title: "LED Status Indication", description: "An LED shows the device status at a glance." },
    ],
  },
  {
    id: 10,
    slug: "smart-agri-solution",
    name: "Smart Agriculture Solution",
    tagline: "LoRa sensor network for climate, soil and plant monitoring",
    category: "IoT",
    industry: "Agriculture",
    specs: [
      "Solar-charged LoRa sensor nodes with ~15 km coverage",
      "Gateway with Ethernet, Wi-Fi and LTE uplink",
      "Live dashboards and crop-health insights",
    ],
    image: agriSensorNodeImg,
    description:
      "A complete crop-monitoring system. Solar-charged sensor nodes (DCD) measure light, air temperature and humidity, soil temperature, moisture and EC, and plant stem diameter, and send readings over LoRa to a gateway (DAD). The gateway stores the data locally and uploads it securely to the cloud, where growers see live dashboards and crop-health insights instead of calculating them by hand.",
    features: [
      {
        title: "Data Collection Device (DCD)",
        description:
          "Sensor node for light, air temperature and humidity, soil temperature, moisture and EC — up to 2 soil sensors and 2 dendrometers per node, on plug-and-play SPI, RS485 and I2C interfaces.",
      },
      {
        title: "Solar-Powered, Low-Power Design",
        description:
          "Solar charging and power management that shuts off power in sleep mode to maximise battery life.",
      },
      {
        title: "Long-Range LoRa Network",
        description:
          "Around 15 km LoRa coverage between sensor nodes and the gateway, with a message error rate below 1%.",
      },
      {
        title: "Data Aggregation Device (DAD) Gateway",
        description:
          "Collects data from many sensor nodes over LoRa, stores it on a local SD card and sends it to the cloud over Ethernet, Wi-Fi or LTE.",
      },
      {
        title: "Secure, Low-Maintenance Gateway",
        description:
          "SSL and password-protected MQTT, over-the-air firmware upgrades, Power over Ethernet, battery backup of over 24 hours, LED status and UL/CE approval.",
      },
      {
        title: "Measurement Accuracy",
        description:
          "Temperature and humidity ±2%, light/PPFD ±10%, soil temperature ±2°C, soil moisture (VWC) and EC ±5% with soil calibration, and stem diameter ±0.05 mm.",
      },
      {
        title: "Agronomy Calculations",
        description:
          "VWC from permittivity, pore-water EC from bulk soil EC, PPFD from lux, VPD, PAR hours and DLI, plus high, low, average and standard deviation.",
      },
      {
        title: "Dashboards & Analytics",
        description:
          "Live dashboards, 14-day summary graphs, graphing and download of live and summary data, and a view of sensors laid out as they are on the farm.",
      },
      {
        title: "Crop Health & Hazard Insights",
        description:
          "Crop-health status and disease hazard status — specifically Phytophthora — derived from light, climate and soil data.",
      },
      {
        title: "Secure User Access",
        description:
          "Admin and standard user roles, configurable preferences, and setup of facilities, locations, devices, soil types and event definitions.",
      },
      {
        title: "Handheld DCD",
        description:
          "A portable sensor unit with a display that measures NPK, soil temperature and moisture, ambient temperature and humidity, and light, and sends readings over LTE.",
      },
    ],
    benefits: [
      "Crop, soil and climate data in one simple platform",
      "No more manual calculation of crop data",
      "Insights to keep crops in optimal growing conditions",
      "Groundwork to automate the whole operation",
    ],
  },
  {
    id: 11,
    slug: "istarter",
    name: "iStarter Smart Irrigation",
    tagline: "Digital starter for 3-phase motors with mobile app control",
    category: "IoT",
    industry: "Agriculture",
    specs: [
      "For 3-phase motors from 0.5 to 5 HP",
      "Input supply 415 V AC, full-load current 10 A",
      "Mobile app for remote operation",
    ],
    image: istarterImg,
    description:
      "iStarter is a digital starter for 3-phase irrigation motors. It protects the motor, shows live voltage, current and phase status, and lets farmers run the motor remotely from a mobile app — with timers, schedules, solenoid valve control and automatic irrigation based on soil moisture.",
    features: [
      {
        title: "Motor Protection",
        description:
          "High voltage, low voltage, overload and dry-run protection, plus a single-phase failure preventer.",
      },
      {
        title: "Live Display",
        description:
          "Voltage and current per phase, cumulative current use, R/Y/B phase status, power and motor status, and manual/auto mode.",
      },
      {
        title: "Remote Start & Stop",
        description: "Start and stop the motor from the mobile app.",
      },
      {
        title: "Cyclic Timer",
        description:
          "Runs the motor for a set duration, then restarts it automatically after a set interval.",
      },
      {
        title: "Timer",
        description: "Starts the motor now, runs it for a set duration and stops automatically.",
      },
      {
        title: "Scheduled Timer",
        description: "Starts and stops the motor at set times on a daily or weekly schedule.",
      },
      {
        title: "Auto Start",
        description: "Starts whenever power is available and stops on dry run.",
      },
      {
        title: "Valve & Tank Control",
        description:
          "Solenoid-valve water feeder control and automatic water tank level control.",
      },
      {
        title: "Soil-Moisture Irrigation",
        description:
          "Paired with our LoRa sensor nodes and gateway, irrigation starts automatically based on soil moisture.",
      },
      {
        title: "Cloud & Analytics",
        description:
          "Motor data is sent to a cloud server for analytics, with the mobile app and web portal connected through APIs.",
      },
    ],
  },
  {
    id: 5,
    slug: "kadai",
    name: "Kadai",
    category: "Mobile App",
    specs: [
      "Admin dashboard & user roles",
      "Stock management & alerts",
      "Report generation & analytics",
    ],
    image: kadaiImg,
    description:
      "Kadai is a centralized stock management system designed to track products, monitor inventory levels in real time, and generate detailed reports. It provides secure role-based access, low-stock alerts, and seamless data synchronization to help businesses maintain accurate and efficient inventory operations.",
  },
  {
    id: 6,
    slug: "billing-software",
    name: "Billing Software",
    category: "Software",
    specs: [
      "Customer information management",
      "Product and stock management",
      "Invoice and quotation generation",
    ],
    image: billing,
    description:
      "Billing Software simplifies business operations by managing customer details, product stocks, quotations, invoices, and tracking expenses efficiently.",
  },
  {
    id: 7,
    slug: "expense-tracker-app",
    name: "Expense Tracker App",
    category: "Mobile App",
    specs: [
      "Income & expense tracking",
      "Category-wise spending insights",
      "Monthly reports & analytics",
    ],
    image: expanseTracker,
    description:
      "Expense Tracker App is a smart financial management solution designed to monitor daily income and expenses in real time. It offers category-based tracking, visual spending insights, and detailed monthly reports. With a user-friendly interface and secure data handling, the app helps individuals and businesses maintain better financial control and make informed budgeting decisions.",
  },
  {
    id: 8,
    slug: "microlab",
    name: "Microlab",
    tagline: "Smart Diagnostic Lab Management & Tracking Platform",
    category: "Mobile App",
    specs: [
      "Smart technician assignment",
      "Real-time tracking & live location",
      "Secure OTP-verified bookings",
    ],
    image: microlabImg,
    description:
      "Microlab is a smart laboratory management platform that connects patients, laboratories, and technicians to simplify test booking, technician assignment, sample collection, payment, and real-time tracking.",
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Firebase",
    ],
    features: [
      {
        title: "Test Booking",
        description: "Patients can easily book laboratory tests.",
      },
      {
        title: "Smart Technician Assignment",
        description:
          "Automatically assigns available technicians based on location and availability.",
      },
      {
        title: "Real-Time Tracking",
        description: "Track technician movement and booking status.",
      },
      {
        title: "Live Location",
        description: "View technician location and estimated arrival time.",
      },
      {
        title: "Online Payments",
        description: "Integrated payment flow for laboratory services.",
      },
      {
        title: "OTP Verification",
        description:
          "Secure verification for patient and technician workflows.",
      },
      {
        title: "Branch & Pincode Detection",
        description: "Automatically identifies the appropriate laboratory branch.",
      },
      {
        title: "Booking Management",
        description:
          "Manage pre-bookings, same-day bookings, and scheduled appointments.",
      },
      {
        title: "Push Notifications",
        description: "Keep patients and technicians updated about booking status.",
      },
      {
        title: "Role-Based Access",
        description:
          "Separate workflows for customers, technicians, and administrators.",
      },
    ],
  },
  {
    id: 9,
    slug: "leadpro",
    name: "LeadPro",
    tagline: "Smart Lead Management & Sales Tracking System",
    category: "Software",
    specs: [
      "Lead capture from multiple sources",
      "Automated follow-ups & status tracking",
      "Sales dashboard & reporting",
    ],
    image: leadproImg,
    description:
      "A centralized lead management platform designed to help businesses capture, organize, track, and convert leads efficiently—from initial enquiry to successful follow-up and closure.",
    technologies: ["CodeIgniter", "JavaScript", "MySQL"],
    features: [
      {
        title: "Lead Capture",
        description:
          "Collect and manage leads from multiple sources in one centralized system.",
      },
      {
        title: "Lead Assignment",
        description:
          "Assign leads to sales executives or team members for faster action.",
      },
      {
        title: "Lead Tracking",
        description: "Monitor every lead through its complete sales journey.",
      },
      {
        title: "Follow-Up Management",
        description:
          "Schedule and manage follow-ups to ensure no opportunity is missed.",
      },
      {
        title: "Enquiry Management",
        description:
          "Record and organize customer enquiries with complete lead details.",
      },
      {
        title: "Lead Status Tracking",
        description:
          "Track leads through stages such as New, Contacted, Follow-Up, Converted, and Lost.",
      },
      {
        title: "Sales Activity Management",
        description:
          "Maintain follow-up activities, notes, remarks, and customer interactions.",
      },
      {
        title: "Dashboard & Reports",
        description:
          "Get a clear overview of leads, conversions, follow-ups, and sales performance.",
      },
      {
        title: "User & Role Management",
        description: "Manage access and responsibilities based on user roles.",
      },
      {
        title: "Search & Filtering",
        description:
          "Quickly find and filter leads based on status, source, assigned user, and other criteria.",
      },
      {
        title: "Customer Management",
        description: "Maintain organized customer and prospect information.",
      },
      {
        title: "Lead Conversion",
        description:
          "Easily move qualified leads from enquiry to successful conversion.",
      },
    ],
    benefits: [
      "Centralized lead management",
      "Faster response and follow-ups",
      "Reduced lead leakage",
      "Better sales team coordination",
      "Improved visibility into sales activities",
      "Easy monitoring of lead conversion",
      "Organized customer information",
      "Data-driven sales reporting",
    ],
  },
];

export default productsData;
