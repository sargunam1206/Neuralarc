// Technology icon lookup. Every entry here renders the technology's real
// brand mark — either an uploaded logo file or the official Simple Icons mark
// (react-icons/si) in its brand colour — never a generic substitute icon.
// A technology without a mark simply isn't listed anywhere on the site
// (see servicesData/productsData/caseStudiesData).

import { SiEspressif, SiKicad } from "react-icons/si";
import eagleLogo from "../assets/images/fwdlogos/eagle-logo.png";
import prusaSlicerLogo from "../assets/images/fwdlogos/prusa-slicer-logo.png";
import arduinoLogo from "../assets/images/arduino.png";
import stm32Logo from "../assets/images/stm32.png";
import loraLogo from "../assets/images/lora.png";
import gpsLogo from "../assets/images/gps.jpg";
import smsLogo from "../assets/images/sms.png";
import tailwindLogo from "../assets/images/tailwind-icon.svg";

import htmlLogo from "../assets/images/fwd/html-5.svg";
import cssLogo from "../assets/images/fwd/css-3.svg";
import bootstrapLogo from "../assets/images/fwd/bootstrap.svg";
import wordpressLogo from "../assets/images/fwd/wordpress.svg";
import javascriptLogo from "../assets/images/fwd/javascript.svg";
import nodejsLogo from "../assets/images/fwd/nodejs-icon.svg";
import reactLogo from "../assets/images/fwd/react.svg";
import sqliteLogo from "../assets/images/fwd/sqlite.svg";

import codeigniterLogo from "../assets/images/fwdlogos/Codeigniter--Streamline-Svg-Logos.svg";
import expressLogo from "../assets/images/fwdlogos/Express--Streamline-Simple-Icons.svg";
import firebaseLogo from "../assets/images/fwdlogos/Firebase-Logo--Streamline-Logos.svg";
import githubLogo from "../assets/images/fwdlogos/Logo-Github--Streamline-Outlined-Streamline-Material-Free (1).svg";
import mysqlLogo from "../assets/images/fwdlogos/Mysql--Streamline-Svg-Logos.svg";
import seleniumLogo from "../assets/images/fwdlogos/Selenium--Streamline-Simple-Icons.svg";
import springLogo from "../assets/images/fwdlogos/Spring--Streamline-Simple-Icons.svg";

const logoImg = (src, alt) => (c) => (
  <img src={src} alt={alt} className={`${c} object-contain rounded-full`} />
);

// Brand mark from Simple Icons, drawn in the brand's own colour.
const brandIcon = (Icon, color, label) => (c) => (
  <Icon className={c} style={{ color }} role="img" aria-label={label} />
);

// Normalize so "Node.js", "NodeJS", "node js" etc. all hit the same key.
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

// Only technologies with an uploaded logo file get an entry. React Native
// reuses the React mark — same brand, same logo.
const iconMap = {
  esp32arduino: logoImg(arduinoLogo, "ESP32 / Arduino"),
  esp32espidf: brandIcon(SiEspressif, "#E7352C", "Espressif ESP32 / ESP-IDF"),
  kicad: brandIcon(SiKicad, "#314CB0", "KiCad"),
  eagle: logoImg(eagleLogo, "Autodesk Eagle"),
  prusaslicer: logoImg(prusaSlicerLogo, "PrusaSlicer"),
  stm32: logoImg(stm32Logo, "STM32"),
  lora: logoImg(loraLogo, "LoRa"),
  gps: logoImg(gpsLogo, "GPS"),
  smsgateway: logoImg(smsLogo, "SMS Gateway"),
  html5: logoImg(htmlLogo, "HTML5"),
  css3: logoImg(cssLogo, "CSS3"),
  bootstrap: logoImg(bootstrapLogo, "Bootstrap"),
  wordpress: logoImg(wordpressLogo, "WordPress"),
  javascript: logoImg(javascriptLogo, "JavaScript"),
  nodejs: logoImg(nodejsLogo, "Node.js"),
  react: logoImg(reactLogo, "React"),
  reactnative: logoImg(reactLogo, "React Native"),
  sqlite: logoImg(sqliteLogo, "SQLite"),
  tailwindcss: logoImg(tailwindLogo, "Tailwind CSS"),
  codeigniter: logoImg(codeigniterLogo, "CodeIgniter"),
  expressjs: logoImg(expressLogo, "Express.js"),
  firebase: logoImg(firebaseLogo, "Firebase"),
  github: logoImg(githubLogo, "GitHub"),
  mysql: logoImg(mysqlLogo, "MySQL"),
  selenium: logoImg(seleniumLogo, "Selenium"),
  spring: logoImg(springLogo, "Spring"),
};

/**
 * Returns a logo image element for a technology name, or null if there's no
 * uploaded icon for it. Callers should skip rendering the technology entirely
 * when this returns null rather than falling back to a generic icon.
 */
export const getTechIcon = (techName, className = "w-6 h-6") => {
  const render = iconMap[normalize(techName)];
  return render ? render(className) : null;
};

/** Whether a technology name has an uploaded icon available. */
export const hasTechIcon = (techName) => Boolean(iconMap[normalize(techName)]);
