const caseStudiesData = [
  {
    slug: "t-remo-cold-chain-monitoring",
    title: "Cold-Chain Monitoring for Vaccine & Medicine Transport",
    subtitle: "How we built T-Remo",
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
    slug: "microlab-diagnostic-lab-tracking",
    title: "Real-Time Tracking for Diagnostic Lab Bookings",
    subtitle: "How we built Microlab",
    relatedProduct: "microlab",
    relatedService: "app-development",
    metaTitle: "Diagnostic Lab Tracking Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Microlab, a diagnostic lab booking and real-time technician tracking platform.",
    challenge:
      "Diagnostic lab bookings that rely on phone calls and manual technician dispatch make it hard for a patient to know when a technician is actually coming, and hard for a lab to balance bookings against who's available and where.",
    approach:
      "Microlab handles the whole flow in one platform: patients book directly, the system assigns an available technician based on location, and both sides can track the booking status and technician's live location in real time. OTP verification and branch/pincode detection keep each booking routed to the right place and the right person.",
    technologies: ["Flutter", "Node.js", "Express.js", "MySQL", "Firebase", "Google Maps"],
    outcome:
      "Patients get a live ETA instead of an estimated call-back window, and lab staff get an assignment and tracking system that replaces manual coordination with something both sides can see.",
  },
  {
    slug: "leadpro-centralizing-lead-management",
    title: "Centralizing Lead Management for a Sales Team",
    subtitle: "How we built LeadPro",
    relatedProduct: "leadpro",
    relatedService: "embedded-software-development",
    metaTitle: "Lead Management Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built LeadPro, a centralized lead capture, assignment, and follow-up platform for sales teams.",
    challenge:
      "Leads coming in from multiple channels, tracked in scattered notes or spreadsheets, are easy to lose track of — a follow-up gets missed, no one's sure who owns a lead, and there's no single view of where things stand.",
    approach:
      "LeadPro brings lead capture, assignment, and follow-up into one system. Every lead moves through defined stages — New, Contacted, Follow-Up, Converted, Lost — with tasks, reminders, and activity notes attached, so a sales team can see the full history of a lead in one place instead of piecing it together.",
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL"],
    outcome:
      "The practical result is fewer leads falling through the cracks — every lead has an owner, a status, and a next action, visible on one dashboard instead of scattered across individual inboxes and notebooks.",
  },
  {
    slug: "blood-bank-software-operations-management",
    title: "Centralizing Blood Bank Stock and Donor Records",
    subtitle: "How we built Blood Bank Software",
    relatedProduct: "blood-bank-software",
    relatedService: "embedded-software-development",
    metaTitle: "Blood Bank Software Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Blood Bank Software to centralize donor records, blood bag stock, and branch-wise tracking.",
    challenge:
      "Blood bank operations involve tracking donor information, incoming and outgoing blood bags, screening reports, and stock across branches — when that's split across paper records and disconnected spreadsheets, it's hard to get an accurate, current picture of what's actually in stock and where.",
    approach:
      "Blood Bank Software brings these operations into one system: donor information, purchase bill management, and blood bag stock tracking are all recorded in the same place. It monitors empty bag stock alongside available stock, keeps screening reports and blood request information together, and tracks bags branch-wise so a multi-branch operation can see stock across locations rather than one at a time.",
    technologies: ["PHP", "Flask", "Node.js", "React", "SQL"],
    outcome:
      "The practical effect is a single, current view of donor records and blood bag stock instead of records scattered across branches and paper trails — stock and screening status are something staff can check directly rather than reconcile after the fact.",
  },
  {
    slug: "purchase-software-procurement-workflow",
    title: "Streamlining Procurement and Supplier Management",
    subtitle: "How we built Purchase Software",
    relatedProduct: "purchase-software",
    relatedService: "embedded-software-development",
    metaTitle: "Purchase Software Case Study | NeuralArc",
    metaDescription:
      "How NeuralArc built Purchase Software to consolidate purchase orders, supplier records, and procurement tracking.",
    challenge:
      "Procurement workflows that span purchase orders, supplier records, project site tracking, and invoices tend to break down when they live in separate tools or manual logs — it becomes hard to know which orders are open, which suppliers are tied to which project, and where an invoice actually stands.",
    approach:
      "Purchase Software consolidates purchase order management, supplier list management, and product list management into one workflow. It tracks project sites and invoices alongside the purchase orders themselves, so procurement staff can follow a purchase from order to invoice without switching between separate records.",
    technologies: ["PHP", "Flask", "Node.js", "React", "SQL"],
    outcome:
      "The result is one system for tracking suppliers, products, and purchase orders together, instead of maintaining them as separate lists that have to be manually cross-referenced during procurement.",
  },
];

export default caseStudiesData;
