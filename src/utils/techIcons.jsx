import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiTableau,
  SiPhp,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiWordpress,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiExpress,
  SiMysql,
  SiSequelize,
  SiGooglemaps,
  SiCodeigniter,
  SiRaspberrypi,
} from "react-icons/si";
import {
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaGlobe,
  FaBrain,
  FaMicrochip,
  FaCode,
} from "react-icons/fa";
import arduinoLogo from "../assets/images/arduino.png";
import stm32Logo from "../assets/images/stm32.png";
import loraLogo from "../assets/images/lora.png";
import gpsLogo from "../assets/images/gps.jpg";
import smsLogo from "../assets/images/sms.png";

const logoImg = (src, alt) => (c) => (
  <img src={src} alt={alt} className={`${c} object-contain rounded-full`} />
);

// Normalize so "Node.js", "NodeJS", "node js" etc. all hit the same key.
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

// Each entry renders itself given a className — lets a real logo image and a
// react-icon sit side by side in the same map.
const iconMap = {
  esp32arduino: logoImg(arduinoLogo, "Arduino"),
  raspberrypi: (c) => <SiRaspberrypi className={c} />,
  stm32: logoImg(stm32Logo, "STM32"),
  lora: logoImg(loraLogo, "LoRa"),
  nrf32: (c) => <FaMicrochip className={c} />,
  gps: logoImg(gpsLogo, "GPS"),
  smsgateway: logoImg(smsLogo, "SMS Gateway"),
  python: (c) => <SiPython className={c} />,
  pandas: (c) => <SiPandas className={c} />,
  numpy: (c) => <SiNumpy className={c} />,
  tensorflow: (c) => <SiTensorflow className={c} />,
  powerbi: (c) => <FaChartBar className={c} />, // no dedicated brand icon in react-icons
  tableau: (c) => <SiTableau className={c} />,
  php: (c) => <SiPhp className={c} />,
  flask: (c) => <SiFlask className={c} />,
  nodejs: (c) => <SiNodedotjs className={c} />,
  react: (c) => <SiReact className={c} />,
  sql: (c) => <FaDatabase className={c} />, // generic — "SQL" isn't a single brand
  html5: (c) => <SiHtml5 className={c} />,
  css3: (c) => <SiCss3 className={c} />,
  bootstrap: (c) => <SiBootstrap className={c} />,
  wordpress: (c) => <SiWordpress className={c} />,
  javascript: (c) => <SiJavascript className={c} />,
  tailwindcss: (c) => <SiTailwindcss className={c} />,
  flutter: (c) => <SiFlutter className={c} />,
  reactnative: (c) => <SiReact className={c} />,
  androidkotlin: (c) => <SiKotlin className={c} />,
  iosswift: (c) => <SiSwift className={c} />,
  firebase: (c) => <SiFirebase className={c} />,
  dataanalytics: (c) => <FaChartLine className={c} />,
  webdevelopment: (c) => <FaGlobe className={c} />,
  aiml: (c) => <FaBrain className={c} />,
  iot: (c) => <FaMicrochip className={c} />,
  expressjs: (c) => <SiExpress className={c} />,
  mysql: (c) => <SiMysql className={c} />,
  sequelize: (c) => <SiSequelize className={c} />,
  googlemaps: (c) => <SiGooglemaps className={c} />,
  codeigniter: (c) => <SiCodeigniter className={c} />,
};

/** Returns a React icon (or logo image) element for a technology name, falling back to a generic code icon. */
export const getTechIcon = (techName, className = "w-6 h-6") => {
  const render = iconMap[normalize(techName)] || ((c) => <FaCode className={c} />);
  return render(className);
};
