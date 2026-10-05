import csTRemo from "../assets/images/CS-1.png.png";
import csMicrolab from "../assets/images/CS-2.png.png";
import csLeadPro from "../assets/images/CS-3.png.png";
import csBloodBank from "../assets/images/CS-4.PNG.png";
import csPurchase from "../assets/images/CS-5.PNG.png";
import csKadai from "../assets/images/CS-6.PNG.png";
import csSmartAgri from "../assets/images/agri/smart-agri-soil-moisture-analytics.jpg";
import csEnvMonitoring from "../assets/images/agri/environmental-monitoring-system.jpg";
import csVentilator from "../assets/images/agri/smart-ambu-bag-ventilator.jpg";

const caseStudiesData = [
  {
    slug: "t-remo-cold-chain-monitoring",
    title: "Cold-Chain Monitoring for Vaccine & Medicine Transport",
    subtitle: "How we built T-Remo",
    image: csTRemo,
    relatedProduct: "t-remo",
    relatedService: "iot",
    metaTitle: "Cold-Chain Monitoring Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built T-Remo, an IoT device for temperature monitoring during vaccine and medicine transport.",
    challenge:
      "Vaccines and temperature-sensitive medicines lose potency fast outside their required range, and once a shipment leaves a facility, there's often no way to know its temperature history until it's too late — spot-checks at pickup and delivery miss what happens in between.",
    approach:
      "We designed T-Remo around that specific gap: a compact device built for negative-temperature operation, with a customizable wireless access module so it keeps reporting even in transit. Sensed parameters go out over SMS or straight to a web server, so a shipment doesn't need a stable data connection for the whole route to stay monitored.",
    technologies: ["ESP32 / Arduino", "STM32", "LoRa", "GPS", "SMS gateway"],
    outcome:
      "The result is continuous, GPS-tagged temperature visibility for the length of a shipment, instead of a single reading at pickup and another at delivery — giving logistics teams a real record to check against, not a gap they have to trust blindly.",
  },
  {
    slug: "smart-agriculture-crop-monitoring",
    title: "Crop Health Monitoring for Commercial Growers",
    subtitle: "How we built the Smart Agriculture Solution",
    image: csSmartAgri,
    relatedProduct: "smart-agri-solution",
    relatedService: "iot",
    metaTitle: "Smart Agriculture Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built a LoRa-based crop monitoring system — sensor nodes, gateway and cloud analytics — deployed in the USA, Spain and Vietnam.",
    challenge:
      "Growers need continuous, in-depth information about climate, soil and plant conditions to keep crops healthy, but working it out manually is slow, and plantations can stretch for kilometres from the nearest building with power and a network connection.",
    approach:
      "For a US agritech client, we designed two devices. Solar-charged sensor nodes (DCD) mounted on poles measure light, air temperature and humidity, soil temperature, moisture and EC, and stem diameter using dendrometers, then send readings over LoRa with around 15 km coverage. A Linux-based gateway (DAD) aggregates the data from many nodes, stores it on a local SD card and uploads it over SSL and MQTT through Ethernet, Wi-Fi or LTE. In the cloud, raw readings become soil moisture, VPD, PPFD and DLI values, plant breathing patterns, and crop-health and disease-hazard insights on live dashboards.",
    technologies: ["LoRa", "LTE / 4G", "MQTT", "Linux", "SSL"],
    outcome:
      "The system is commercially deployed on a cannabis plantation in Colorado (USA), olive plants in Spain and a pepper plantation in Vietnam. At the Vietnam trial site, one gateway serves a plantation stretching 3.2 km north and 2 km east, with 150+ plots planted at the time and 300+ sensor nodes planned for the final deployment. Growers now read crop conditions from a dashboard instead of calculating them by hand.",
  },
  {
    slug: "environmental-monitoring-system",
    title: "Multi-Sensor Air Quality Monitoring",
    subtitle: "How we built the Environmental Monitoring System",
    image: csEnvMonitoring,
    relatedService: "iot",
    metaTitle: "Environmental Monitoring Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built a multi-sensor environmental monitoring system measuring particulates, gases, temperature and humidity.",
    challenge:
      "Air quality depends on several pollutants at once — particulates as well as gases — so a single-sensor device can't give an industry, office or home a complete picture of the air, indoors or out.",
    approach:
      "We built a multi-sensor unit that measures PM2.5 and PM10 particles, CO, CO₂, SO₂, NO and NO₂, and temperature and humidity, run by a Linux computing engine with smart controls. It communicates over Ethernet, Wi-Fi, GSM and GPS on a multi-band network, secured with SSL and VPN.",
    technologies: ["Linux", "GPS", "GSM", "Wi-Fi", "SSL / VPN"],
    outcome:
      "One device covers both outdoor ambient air monitoring and air-quality control for industries, offices and homes, with secured communication back to the monitoring platform.",
  },
  {
    slug: "smart-ambu-bag-ventilator",
    title: "Automating Ambu Bag Ventilation",
    subtitle: "How we built the Smart Ambu Bag Ventilator",
    image: csVentilator,
    relatedService: "embedded-software-development",
    metaTitle: "Smart Ambu Bag Ventilator Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built a sensor-driven Ambu bag ventilator with programmable adult and infant operation and 24-hour battery backup.",
    challenge:
      "Ventilating a patient with a manual Ambu bag needs a person squeezing the bag continuously, and the breathing rate and volume depend on whoever is doing it.",
    approach:
      "We built a smart Ambu bag ventilator integrated with sensors for blood oxygen level, pressure, air temperature and humidity, and airflow rate. A clear display with a three-button interface supports manual and patient-triggered operation, timer-based operation, and programmable settings for adults and infants.",
    technologies: ["Embedded firmware", "Sensor integration", "Display UI"],
    outcome:
      "A self-contained ventilator that runs programmed breathing cycles for adult or infant settings, monitors the patient through its sensors, and keeps running for up to 24 hours on battery backup.",
  },
  {
    slug: "microlab-diagnostic-lab-tracking",
    title: "Real-Time Tracking for Diagnostic Lab Bookings",
    subtitle: "How we built Microlab",
    image: csMicrolab,
    relatedProduct: "microlab",
    relatedService: "app-development",
    metaTitle: "Diagnostic Lab Tracking Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Microlab, a diagnostic lab booking and real-time technician tracking platform.",
    challenge:
      "Diagnostic lab bookings that rely on phone calls and manual technician dispatch make it hard for a patient to know when a technician is actually coming, and hard for a lab to balance bookings against who's available and where.",
    approach:
      "Microlab handles the whole flow in one platform: patients book directly, the system assigns an available technician based on location, and both sides can track the booking status and technician's live location in real time. OTP verification and branch/pincode detection keep each booking routed to the right place and the right person.",
    technologies: ["Node.js", "Express.js", "MySQL", "Firebase"],
    outcome:
      "Patients get a live ETA instead of an estimated call-back window, and lab staff get an assignment and tracking system that replaces manual coordination with something both sides can see.",
  },
  {
    slug: "leadpro-centralizing-lead-management",
    title: "Centralizing Lead Management for a Sales Team",
    subtitle: "How we built LeadPro",
    image: csLeadPro,
    relatedProduct: "leadpro",
    relatedService: "custom-software-development",
    metaTitle: "Lead Management Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built LeadPro, a centralized lead capture, assignment, and follow-up platform for sales teams.",
    challenge:
      "Leads coming in from multiple channels, tracked in scattered notes or spreadsheets, are easy to lose track of — a follow-up gets missed, no one's sure who owns a lead, and there's no single view of where things stand.",
    approach:
      "LeadPro brings lead capture, assignment, and follow-up into one system. Every lead moves through defined stages — New, Contacted, Follow-Up, Converted, Lost — with tasks, reminders, and activity notes attached, so a sales team can see the full history of a lead in one place instead of piecing it together.",
    technologies: ["CodeIgniter", "JavaScript", "MySQL"],
    outcome:
      "The practical result is fewer leads falling through the cracks — every lead has an owner, a status, and a next action, visible on one dashboard instead of scattered across individual inboxes and notebooks.",
  },
  {
    slug: "blood-bank-software-operations-management",
    title: "Centralizing Blood Bank Stock and Donor Records",
    subtitle: "How we built Blood Bank Software",
    image: csBloodBank,
    relatedProduct: "blood-bank-software",
    relatedService: "custom-software-development",
    metaTitle: "Blood Bank Software Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Blood Bank Software to centralize donor records, blood bag stock, and branch-wise tracking.",
    challenge:
      "Blood bank operations involve tracking donor information, incoming and outgoing blood bags, screening reports, and stock across branches — when that's split across paper records and disconnected spreadsheets, it's hard to get an accurate, current picture of what's actually in stock and where.",
    approach:
      "Blood Bank Software brings these operations into one system: donor information, purchase bill management, and blood bag stock tracking are all recorded in the same place. It monitors empty bag stock alongside available stock, keeps screening reports and blood request information together, and tracks bags branch-wise so a multi-branch operation can see stock across locations rather than one at a time.",
    technologies: ["Node.js", "React"],
    outcome:
      "The practical effect is a single, current view of donor records and blood bag stock instead of records scattered across branches and paper trails — stock and screening status are something staff can check directly rather than reconcile after the fact.",
  },
  {
    slug: "purchase-software-procurement-workflow",
    title: "Streamlining Procurement and Supplier Management",
    subtitle: "How we built Purchase Software",
    image: csPurchase,
    relatedProduct: "purchase-software",
    relatedService: "custom-software-development",
    metaTitle: "Purchase Software Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Purchase Software to consolidate purchase orders, supplier records, and procurement tracking.",
    challenge:
      "Procurement workflows that span purchase orders, supplier records, project site tracking, and invoices tend to break down when they live in separate tools or manual logs — it becomes hard to know which orders are open, which suppliers are tied to which project, and where an invoice actually stands.",
    approach:
      "Purchase Software consolidates purchase order management, supplier list management, and product list management into one workflow. It tracks project sites and invoices alongside the purchase orders themselves, so procurement staff can follow a purchase from order to invoice without switching between separate records.",
    technologies: ["Node.js", "React"],
    outcome:
      "The result is one system for tracking suppliers, products, and purchase orders together, instead of maintaining them as separate lists that have to be manually cross-referenced during procurement.",
  },
  {
    slug: "kadai-shop-billing-inventory-management",
    title: "Centralizing Shop Billing and Inventory Management",
    subtitle: "How we built Kadai",
    image: csKadai,
    relatedProduct: "kadai",
    relatedService: "app-development",
    metaTitle: "Kadai Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Kadai, a centralized stock management and billing app for shops and small businesses.",
    challenge:
      "Small and mid-sized shops often track stock, billing, and supplier records across separate notebooks, spreadsheets, or disconnected apps — making it hard to know real-time stock levels or catch a low-stock item before it runs out.",
    approach:
      "Kadai brings stock tracking, billing, and reporting into a single app. Role-based access lets an owner and staff work from the same system without exposing everything to everyone, low-stock alerts flag items before they run out, and reports give a shop owner a clear read on daily performance without manual tallying.",
    technologies: ["React Native", "Firebase"],
    outcome:
      "The result is one place to see stock levels, record a sale, and check performance — replacing separate notebooks and spreadsheets with a system staff can use directly at the counter.",
  },
];

export default caseStudiesData;
