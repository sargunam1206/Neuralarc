// Maps technology names to their /technologies/<slug> page. Kept separate from
// technologiesData.js (4,500+ lines) so pages that only need links don't pull
// the full technology page content into their bundle.

// Maps a technology name as it appears in a case study / service / product
// "Technology" list to its dedicated page path. Returns null when there is no
// page for that technology yet, so callers can render it as plain text.
const normalizeTech = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const techPageSlugByName = {
  // ESP32 / Arduino
  esp32arduino: "esp32-arduino",
  esp32andarduino: "esp32-arduino",
  arduinoesp32: "esp32-arduino",
  esp32: "esp32-arduino",
  arduino: "esp32-arduino",
  esp32espidf: "esp32-arduino",
  espidf: "esp32-arduino",
  // STM32
  stm32: "stm32",
  // LoRa / LoRaWAN
  lora: "lora",
  lorawan: "lora",
  loralorawan: "lora",
  // GPS / GNSS tracking
  gps: "gps-tracking",
  gnss: "gps-tracking",
  gpstracking: "gps-tracking",
  gpsgnss: "gps-tracking",
  gpsgnsstracking: "gps-tracking",
  // SMS gateway
  smsgateway: "sms-gateway",
  sms: "sms-gateway",
  smsgatewaymessaging: "sms-gateway",
  // Node.js
  nodejs: "nodejs",
  node: "nodejs",
  nodejsdevelopment: "nodejs",
  // React
  react: "react",
  reactjs: "react",
  // React Native
  reactnative: "react-native",
  // JavaScript
  javascript: "javascript",
  js: "javascript",
  vanillajavascript: "javascript",
  typescript: "javascript",
  // HTML5
  html5: "html5",
  html: "html5",
  // CSS3
  css3: "css3",
  css: "css3",
  // Bootstrap
  bootstrap: "bootstrap",
  bootstrap5: "bootstrap",
  // Tailwind CSS
  tailwindcss: "tailwind-css",
  tailwind: "tailwind-css",
  // WordPress
  wordpress: "wordpress",
  woocommerce: "wordpress",
  // Express.js
  expressjs: "express-js",
  express: "express-js",
  // MySQL
  mysql: "mysql",
  // SQLite
  sqlite: "sqlite",
  sqlite3: "sqlite",
  // Firebase
  firebase: "firebase",
  firestore: "firebase",
  // CodeIgniter
  codeigniter: "codeigniter",
  codeigniter4: "codeigniter",
  // GitHub
  github: "github",
  githubactions: "github",
  git: "github",
  // Selenium
  selenium: "selenium",
  seleniumwebdriver: "selenium",
  // Spring
  spring: "spring",
  springboot: "spring",
};

export const getTechPagePath = (techName) => {
  const slug = techPageSlugByName[normalizeTech(techName)];
  return slug ? `/technologies/${slug}` : null;
};
