import product1 from "../assets/images/product-iot1.jpg";
import bloodbank from "../assets/images/bloodbank.jpeg";
import purchase from "../assets/images/purchase.jpeg";
import tracker from "../assets/Products/product1.png";
import billing from "../assets/images/billing.jpeg";
import expanseTracker from "../assets/images/expanse_app.png";
import kadaiImg from "../assets/images/Kadai.png";
import microlabImg from "../assets/images/Microlab.png";
import leadproImg from "../assets/images/LeadPro.png";

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
      "T-Remo is a smart temperature monitoring solution for Vaccine/Medicine transport with GPS coordinates. All sensed parameters are sent through SMS or it can be uploaded directly to the web server.",
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
      "Flutter",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Firebase",
      "Google Maps",
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
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL"],
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
