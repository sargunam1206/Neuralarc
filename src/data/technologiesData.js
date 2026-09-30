// Dedicated, SEO-focused landing page for ESP32 / Arduino. Reached from the
// "Technology" list on case study / service / product detail pages — see
// getTechPagePath() below. Add more platforms here the same way when ready.
// Every "external" href points at an authoritative third-party resource by
// default — swap these for your own blog / case-study URLs when ready.

const technologiesData = [
  {
    slug: "esp32-arduino",
    name: "ESP32 / Arduino",
    category: "Microcontrollers & IoT",

    // ---- SEO -------------------------------------------------------------
    metaTitle:
      "ESP32 & Arduino Development Company | Firmware, IoT & Product Engineering | NeuralArc",
    metaDescription:
      "NeuralArc is an ESP32 and Arduino development company in Coimbatore. We build custom ESP32 firmware, Arduino prototypes, WiFi/Bluetooth/BLE IoT devices, MQTT cloud dashboards, OTA updates and low-power battery designs — from prototype to production.",
    keywords: [
      "ESP32 development company",
      "Arduino development company",
      "ESP32 firmware development",
      "Arduino firmware development",
      "ESP32 IoT development",
      "Arduino IoT project",
      "ESP32 programming",
      "Arduino programming services",
      "custom ESP32 firmware",
      "ESP32 WiFi",
      "ESP32 Bluetooth",
      "ESP32 BLE",
      "ESP32 MQTT",
      "ESP32 cloud dashboard",
      "ESP32 OTA update",
      "ESP32 deep sleep low power",
      "ESP8266 development",
      "ESP32-S3",
      "ESP32-C3",
      "ESP-IDF",
      "Arduino IDE",
      "PlatformIO",
      "ESP32 vs Arduino",
      "ESP32 sensor integration",
      "Arduino data logger",
      "ESP32 GPS tracker",
      "ESP32 LoRa",
      "ESP32 Modbus RS485",
      "ESP32 home automation",
      "ESP32 industrial automation",
      "custom ESP32 PCB design",
      "Arduino prototype to production",
      "hire ESP32 firmware engineer",
      "ESP32 development Coimbatore",
      "Arduino developers India",
      "embedded C firmware development",
      "microcontroller product development",
    ],

    // ---- Hero -----------------------------------------------------------
    eyebrow: "ESP32 & ARDUINO ENGINEERING",
    h1: "ESP32 & Arduino Development, From First Prototype to Production",
    heroSubhead:
      "We design, program and ship connected products on the ESP32 and Arduino platforms — custom firmware, WiFi, Bluetooth and BLE connectivity, cloud dashboards, OTA updates and low-power battery designs.",
    heroCtaLabel: "Talk to an ESP32 engineer",
    heroCtaTo: "/contact",

    // ---- Intro split block --------------------------------------------
    introEyebrow: "WHY ESP32 & ARDUINO",
    introTitle: "The fastest path from idea to a working connected device",
    introBody:
      "The ESP32 pairs a dual-core processor with built-in WiFi and Bluetooth, while the Arduino ecosystem gives you the widest library and shield support anywhere. Together they let us validate an IoT concept in weeks, then harden the same codebase into a manufacturable product. Our team writes production-grade embedded C/C++, designs the supporting PCB, and connects the device to the cloud with MQTT or REST.",
    introLinkLabel: "Read the ESP32 technical reference",
    introLinkHref:
      "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",

    // ---- Around-the-clock / capability block --------------------------
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Firmware, hardware and cloud under one roof",
    supportBody:
      "You get one team for ESP32 and Arduino firmware, custom PCB design, sensor and actuator integration, MQTT/HTTP cloud connectivity, OTA update infrastructure, and the dashboards your users log into — so nothing falls between hardware and software vendors.",

    // ---- Blog (external) --------------------------------------------
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the ESP32 & Arduino blog",
      body: "Practical write-ups on ESP32 WiFi provisioning, Arduino sensor calibration, deep-sleep power budgets, MQTT security and getting firmware into production.",
      linkLabel: "Read the latest ESP32 & Arduino posts",
      href: "https://blog.arduino.cc/",
    },

    // ---- Case study (external) ------------------------------------------
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "From breadboard to deployed fleet",
      body: "See how teams take ESP32 and Arduino designs into the field — asset trackers, environmental monitors, industrial gateways and connected consumer products running at scale.",
      linkLabel: "Browse ESP32 & Arduino case studies",
      href: "https://www.hackster.io/esp32",
    },

    // ---- Everything you need to know: 3 resource cards (external) ------
    resourceCards: [
      {
        icon: "📘",
        title: "ESP32 & Arduino Guide",
        body: "Board selection, GPIO limits, ADC quirks, WiFi vs BLE trade-offs and the fundamentals of a reliable firmware architecture.",
        linkLabel: "Read the guide",
        href: "https://randomnerdtutorials.com/projects-esp32/",
      },
      {
        icon: "🛠️",
        title: "Toolchains & Libraries",
        body: "Arduino IDE, PlatformIO and ESP-IDF compared, plus the libraries we reach for on almost every ESP32 and Arduino build.",
        linkLabel: "Explore the tools",
        href: "https://platformio.org/",
      },
      {
        icon: "📈",
        title: "Silicon & Roadmap",
        body: "ESP32, ESP32-S3, ESP32-C3, ESP8266 and the Arduino board family — datasheets, errata and what to pick for your product.",
        linkLabel: "View the silicon",
        href: "https://www.espressif.com/en/products/socs/esp32",
      },
    ],

    // ---- Journey accordion — each item links out (external) ---------
    journey: {
      eyebrow: "YOUR ESP32 & ARDUINO JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when scoping an ESP32 or Arduino product. Each opens the authoritative documentation.",
      items: [
        {
          label: "WiFi & network provisioning on the ESP32",
          href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/network/esp_wifi.html",
        },
        {
          label: "Bluetooth Classic & BLE with the ESP32",
          href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/ble/index.html",
        },
        {
          label: "MQTT device-to-cloud messaging",
          href: "https://mqtt.org/",
        },
        {
          label: "OTA (over-the-air) firmware updates",
          href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/ota.html",
        },
        {
          label: "Deep sleep & low-power design",
          href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/sleep_modes.html",
        },
        {
          label: "Arduino core for ESP32 reference",
          href: "https://docs.arduino.cc/",
        },
      ],
    },

    // ---- Downloadable report (email-gated, dedicated) -----------------
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the ESP32 & Arduino Product Development Playbook",
      body: "Enter your work email and we'll send you our field guide to shipping ESP32 and Arduino products — board selection, firmware architecture, power budgets, OTA, security and a prototype-to-production checklist.",
      coverLabel: "ESP32 & Arduino Product Development Playbook",
      coverSub: "2025 Edition",
      fileName: "esp32-arduino-product-development-playbook.pdf",
      downloadPath: "/reports/esp32-arduino-product-development-playbook.pdf",
    },

    // ---- FAQ — 10 questions, each with keyword tags ------------------
    faqs: [
      {
        question: "What is the difference between the ESP32 and Arduino?",
        answer:
          "Arduino is an ecosystem of boards and a beginner-friendly IDE built around simple 8-bit and 32-bit microcontrollers. The ESP32 is a more powerful dual-core chip with WiFi and Bluetooth built in, and it can be programmed with the Arduino core, PlatformIO or Espressif's ESP-IDF. We choose ESP32 when a product needs wireless connectivity or more processing headroom, and stick with classic Arduino boards for simple, offline sensing and control.",
        keywords: ["ESP32 vs Arduino", "which microcontroller to choose", "ESP32 Arduino comparison"],
      },
      {
        question: "Can you develop custom ESP32 firmware for my product?",
        answer:
          "Yes. We write production-grade ESP32 firmware in embedded C/C++ — sensor drivers, state machines, WiFi/BLE stacks, MQTT clients, OTA update logic, watchdogs and power management — structured so it can be tested, maintained and certified.",
        keywords: ["ESP32 firmware development", "custom ESP32 firmware", "embedded C ESP32", "ESP32 programming services"],
      },
      {
        question: "Do you build Arduino prototypes and take them to production?",
        answer:
          "We do both. An Arduino or ESP32 dev-board prototype proves the concept, then we migrate to a custom PCB, lock down the bill of materials, add manufacturing test firmware and support the first production run.",
        keywords: ["Arduino prototype to production", "ESP32 PCB design", "custom ESP32 board", "IoT product development"],
      },
      {
        question: "Which wireless options does the ESP32 support?",
        answer:
          "The ESP32 has WiFi (2.4 GHz), Bluetooth Classic and Bluetooth Low Energy on-chip. For long range we add a LoRa module over SPI; for cellular we add a 4G/NB-IoT modem over UART. We help you pick the right radio for your range, power and data-rate needs.",
        keywords: ["ESP32 WiFi", "ESP32 Bluetooth", "ESP32 BLE", "ESP32 LoRa", "ESP32 cellular NB-IoT"],
      },
      {
        question: "How do you connect an ESP32 or Arduino device to the cloud?",
        answer:
          "Most of our ESP32 devices publish to an MQTT broker with TLS, or call a REST API over HTTPS. From there data lands in a time-series database and feeds the dashboards and alerts your users see. We also support AWS IoT, Azure IoT Hub and self-hosted brokers.",
        keywords: ["ESP32 MQTT", "ESP32 cloud dashboard", "ESP32 REST API", "ESP32 AWS IoT", "device to cloud"],
      },
      {
        question: "Can you add OTA firmware updates to an ESP32 device?",
        answer:
          "Yes — over-the-air updates are standard on our ESP32 builds. We implement A/B partitions with rollback, signed firmware images and a staged rollout so a fleet in the field can be updated safely without a site visit.",
        keywords: ["ESP32 OTA update", "over-the-air firmware update", "remote firmware update", "ESP32 A/B partition"],
      },
      {
        question: "How do you optimise ESP32 battery life and power consumption?",
        answer:
          "We budget power at the design stage: deep sleep between readings, wake-on-timer or wake-on-interrupt, disabling unused peripherals and radios, batching cloud uploads, and choosing an efficient regulator. Battery-powered ESP32 sensors we've built run for months to years on a single charge.",
        keywords: ["ESP32 deep sleep", "ESP32 low power", "ESP32 battery life", "ESP32 power consumption"],
      },
      {
        question: "Do you work with ESP8266, ESP32-S3 and ESP32-C3 variants?",
        answer:
          "Yes. We select the right part per product — ESP8266 for the lowest-cost WiFi node, ESP32-C3 for a compact RISC-V design with BLE 5, ESP32-S3 for AI/vision and USB, and the original ESP32 where dual-core and mature support matter.",
        keywords: ["ESP8266 development", "ESP32-S3", "ESP32-C3", "ESP32 module selection", "ESP32 variant comparison"],
      },
      {
        question: "Which IDEs and toolchains do you use for ESP32 and Arduino?",
        answer:
          "For quick prototypes we use the Arduino IDE. For real projects we use PlatformIO or Espressif's ESP-IDF with FreeRTOS, unit tests, static analysis and CI builds so firmware is reproducible and reviewable.",
        keywords: ["Arduino IDE", "PlatformIO", "ESP-IDF", "ESP32 toolchain", "FreeRTOS ESP32"],
      },
      {
        question: "Where is your ESP32 and Arduino development team located?",
        answer:
          "We're based in Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. We work with clients across India and internationally, and you can hire our ESP32 and Arduino firmware engineers for a full project or a specific phase.",
        keywords: ["ESP32 development Coimbatore", "Arduino developers India", "hire ESP32 firmware engineer", "IoT company Coimbatore"],
      },
    ],

    // ---- Media cards: video (external), e-book & report (email-gated) -
    media: {
      video: {
        label: "Watch: ESP32 & Arduino in action",
        sub: "Getting started with ESP32 firmware and connectivity",
        href: "https://www.youtube.com/@EspressifSystems/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The ESP32 & Arduino Firmware Handbook",
        fileName: "esp32-arduino-firmware-handbook.pdf",
        downloadPath: "/ebooks/esp32-arduino-firmware-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "ESP32 & Arduino Product Development Playbook 2025",
        fileName: "esp32-arduino-product-development-playbook.pdf",
        downloadPath: "/reports/esp32-arduino-product-development-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // STM32 — real-time, motor control and low-power embedded firmware
  // ==================================================================
  {
    slug: "stm32",
    name: "STM32",
    category: "Microcontrollers & Real-Time",

    metaTitle:
      "STM32 Development Company | Firmware, FreeRTOS, Motor Control & Low-Power Embedded Design | NeuralArc",
    metaDescription:
      "NeuralArc is an STM32 firmware development company in Coimbatore. Bare-metal and FreeRTOS firmware, STM32CubeIDE, HAL and LL drivers, DMA-driven peripherals, custom STM32 PCB design, BLDC and PMSM motor control, CAN and RS-485, secure bootloaders, OTA and ultra-low-power designs — from prototype to production.",
    keywords: [
      "STM32 development company",
      "STM32 firmware development",
      "STM32 firmware engineer",
      "hire STM32 developer",
      "STM32 FreeRTOS development",
      "STM32 bare metal firmware",
      "STM32 Zephyr",
      "STM32CubeIDE",
      "STM32CubeMX",
      "STM32 HAL drivers",
      "STM32 LL drivers",
      "STM32 DMA",
      "STM32 low power design",
      "STM32 Stop Standby mode",
      "STM32 battery powered",
      "STM32 motor control",
      "STM32 FOC field oriented control",
      "STM32 BLDC PMSM",
      "STM32 custom PCB design",
      "STM32 schematic layout",
      "STM32 bootloader",
      "STM32 firmware OTA update",
      "STM32 dual bank flash",
      "STM32 CAN bus",
      "STM32 Modbus RS-485",
      "STM32 USB device",
      "STM32L series",
      "STM32G0 STM32G4",
      "STM32F4 STM32F7",
      "STM32H7",
      "STM32U5 ultra low power",
      "STM32 SWD ITM trace debugging",
      "STM32 IEC 60730 functional safety",
      "STM32 prototype to production",
      "STM32 development Coimbatore",
      "embedded C firmware India",
    ],

    eyebrow: "STM32 FIRMWARE ENGINEERING",
    h1: "STM32 Firmware Development for Real-Time, Motor Control and Low-Power Products",
    heroSubhead:
      "We build deterministic STM32 firmware — bare-metal or FreeRTOS — with custom PCBs, DMA-driven peripherals, BLDC/PMSM motor control, industrial buses and ultra-low-power designs, taken from prototype to certified production.",
    heroCtaLabel: "Talk to an STM32 engineer",
    heroCtaTo: "/contact",

    introEyebrow: "WHY STM32",
    introTitle: "When timing, power and unit cost all have to be right",
    introBody:
      "The STM32 family runs from ultra-low-power Cortex-M0+ parts to 480 MHz Cortex-M7s, with rich analog and timer peripherals, a mature toolchain (STM32CubeIDE, CubeMX, HAL/LL) and a decade-plus production lifecycle. We reach for STM32 when a product needs hard real-time behaviour, a tight power budget, precise ADC/PWM control or motor drive that a general-purpose module can't guarantee.",
    introLinkLabel: "Read the STM32 reference documentation",
    introLinkHref:
      "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",

    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Schematic, firmware and production test under one roof",
    supportBody:
      "One team for STM32 schematic and PCB design, bare-metal or RTOS firmware, the analog front-end and motor stage, bootloader and OTA, EMC pre-compliance and the manufacturing test fixtures that bring the first production run up.",

    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the STM32 blog",
      body: "Write-ups on DMA-driven peripheral chains, Stop/Standby power modes, safe field bootloaders, CAN and RS-485 buses, and STM32 production bring-up.",
      linkLabel: "Read the latest STM32 posts",
      href: "https://blog.st.com/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "STM32 in production",
      body: "Motor drives, battery-management systems, medical devices and industrial controllers built on STM32 and shipping at volume.",
      linkLabel: "Browse STM32 projects and case studies",
      href: "https://www.hackster.io/stm32",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "STM32 Guide",
        body: "Family selection, clock trees, DMA, power modes and the fundamentals of a robust STM32 firmware architecture.",
        linkLabel: "Read the guide",
        href: "https://www.st.com/content/st_com/en/support/learning/stm32-education.html",
      },
      {
        icon: "🛠️",
        title: "Toolchain & Drivers",
        body: "STM32CubeIDE, CubeMX, HAL vs LL drivers, and the SWD/ITM debug and trace setup we use on every project.",
        linkLabel: "Explore the tools",
        href: "https://www.st.com/en/development-tools/stm32cubeide.html",
      },
      {
        icon: "📈",
        title: "Silicon Selector",
        body: "STM32 series datasheets and the STM32Finder tool for picking the right part for your product's power, memory and peripheral mix.",
        linkLabel: "View the silicon",
        href: "https://www.st.com/en/development-tools/stm32finder.html",
      },
    ],
    journey: {
      eyebrow: "YOUR STM32 JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when scoping an STM32 product. Each opens the authoritative documentation.",
      items: [
        { label: "STM32CubeMX project setup and clock configuration", href: "https://www.st.com/en/development-tools/stm32cubemx.html" },
        { label: "HAL vs LL drivers — when to use which", href: "https://www.st.com/resource/en/user_manual/dm00105879.pdf" },
        { label: "Low-power modes: Sleep, Stop, Standby, Shutdown", href: "https://www.st.com/content/st_com/en/support/learning/stm32-education.html" },
        { label: "Custom bootloaders and the system bootloader (AN2606)", href: "https://www.st.com/resource/en/application_note/an2606.pdf" },
        { label: "FreeRTOS on STM32", href: "https://www.freertos.org/Documentation/RTOS_book.html" },
        { label: "CAN, CAN FD and RS-485 industrial buses", href: "https://www.st.com/content/st_com/en/support/learning/stm32-education.html" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the STM32 Firmware Development Playbook",
      body: "Enter your work email and we'll send you our field guide to shipping STM32 products — part selection, RTOS vs bare-metal, DMA and peripheral design, power optimisation, bootloaders and a prototype-to-production checklist.",
      coverLabel: "STM32 Firmware Development Playbook",
      coverSub: "2025 Edition",
      fileName: "stm32-firmware-development-playbook.pdf",
      downloadPath: "/reports/stm32-firmware-development-playbook.pdf",
    },
    faqs: [
      {
        question: "Do you write bare-metal or RTOS firmware for the STM32?",
        answer:
          "Both. Small, timing-critical products run bare-metal with an interrupt- and DMA-driven design; larger products use FreeRTOS or Zephyr with well-defined tasks, priorities and stack sizing. We choose during scoping based on the real-time constraints.",
        keywords: ["STM32 bare metal firmware", "STM32 FreeRTOS development", "STM32 Zephyr", "STM32 firmware architecture"],
      },
      {
        question: "Can you design a custom STM32 PCB, not just the firmware?",
        answer:
          "Yes — schematic, layout, power supply, analog front-end, connectors and crystal/clock design, with EMC pre-compliance and a design-for-manufacture review before the first build.",
        keywords: ["STM32 custom PCB design", "STM32 hardware design", "STM32 schematic layout", "STM32 EMC"],
      },
      {
        question: "Do you do STM32 motor control?",
        answer:
          "We implement BLDC and PMSM control with STM32 advanced timers and the ST Motor Control SDK / FOC, including single- and three-shunt current sensing, over-current and stall protection, and sensorless start-up.",
        keywords: ["STM32 motor control", "STM32 FOC field oriented control", "STM32 BLDC PMSM", "sensorless motor control"],
      },
      {
        question: "How do you handle STM32 firmware updates in the field?",
        answer:
          "A small, robust bootloader with dual-bank or A/B images, CRC and signature verification and safe rollback, updated over UART, USB, CAN, or a connected radio for true OTA.",
        keywords: ["STM32 bootloader", "STM32 firmware OTA update", "STM32 dual bank flash", "secure firmware update"],
      },
      {
        question: "Can you hit aggressive STM32 power budgets?",
        answer:
          "Yes. We use Stop and Standby modes, RTC and LPTIM wake sources, peripheral clock gating and a measured current profile on real hardware to reach multi-year battery life where the design allows. STM32L and STM32U5 parts are our usual starting point.",
        keywords: ["STM32 low power design", "STM32 Stop Standby mode", "STM32 battery powered", "STM32U5 ultra low power"],
      },
      {
        question: "Which STM32 series should I use for my product?",
        answer:
          "STM32L/U for ultra-low-power, STM32G0/G4 for mainstream cost-performance and motor control, STM32F4/F7 for compute and connectivity, STM32H7 for the highest performance. We help you choose using power, memory, peripheral and lifecycle needs.",
        keywords: ["STM32 series comparison", "STM32L series", "STM32G0 STM32G4", "STM32H7", "STM32 part selection"],
      },
      {
        question: "How do you use DMA and peripherals efficiently on the STM32?",
        answer:
          "We move data with DMA wherever possible — ADC scan to memory, SPI/I2S streams, UART with idle-line detection — so the CPU stays free and timing stays deterministic. Peripheral chains are configured in CubeMX and then hand-tuned.",
        keywords: ["STM32 DMA", "STM32 ADC DMA", "STM32 peripheral design", "STM32 deterministic timing"],
      },
      {
        question: "How do you debug and validate STM32 firmware?",
        answer:
          "SWD with breakpoints, SWO/ITM trace for printf-free logging, ETM instruction trace on parts that support it, plus logic-analyser and oscilloscope capture on the bus lines. We add on-target unit tests and CI builds for regression safety.",
        keywords: ["STM32 SWD ITM trace debugging", "STM32 debugging", "STM32 unit testing", "STM32 CI build"],
      },
      {
        question: "Can you support functional safety and compliance requirements?",
        answer:
          "We can build to IEC 60730 Class B self-test libraries (STL), watchdog and clock-monitoring strategies, and document the firmware for your certification path (medical, industrial, appliance).",
        keywords: ["STM32 IEC 60730 functional safety", "STM32 self-test library", "STM32 compliance", "safety-critical firmware"],
      },
      {
        question: "Where is your STM32 development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. You can hire our STM32 firmware engineers for a full product or a defined phase, working with clients across India and internationally.",
        keywords: ["STM32 development Coimbatore", "hire STM32 developer India", "embedded C firmware India"],
      },
    ],
    media: {
      video: {
        label: "Watch: STM32 firmware basics",
        sub: "Getting started with STM32CubeIDE, HAL and FreeRTOS",
        href: "https://www.youtube.com/@stmicroelectronics/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The STM32 Real-Time Firmware Handbook",
        fileName: "stm32-real-time-firmware-handbook.pdf",
        downloadPath: "/ebooks/stm32-real-time-firmware-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "STM32 Firmware Development Playbook 2025",
        fileName: "stm32-firmware-development-playbook.pdf",
        downloadPath: "/reports/stm32-firmware-development-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // LoRa & LoRaWAN — long-range, low-power wireless IoT
  // ==================================================================
  {
    slug: "lora",
    name: "LoRa & LoRaWAN",
    category: "Long-Range Wireless",

    metaTitle:
      "LoRa & LoRaWAN Development Company | Long-Range IoT Sensor Nodes, Gateways & Network Servers | NeuralArc",
    metaDescription:
      "NeuralArc builds LoRa and LoRaWAN systems in Coimbatore — custom SX1262 sensor nodes, private LoRaWAN gateways, ChirpStack and The Things Stack network servers, ADR tuning, OTAA security and end-to-end telemetry for agriculture, smart metering, cold chain and industrial monitoring.",
    keywords: [
      "LoRa development company",
      "LoRaWAN development company",
      "LoRaWAN developer",
      "hire LoRaWAN developer",
      "LoRa sensor node design",
      "custom LoRa node hardware",
      "SX1262 LoRa",
      "SX1276 LoRa",
      "LoRaWAN gateway",
      "private LoRaWAN network",
      "ChirpStack",
      "The Things Stack",
      "LoRaWAN network server",
      "LoRaWAN OTAA activation",
      "LoRaWAN AES-128 security",
      "LoRa spreading factor",
      "LoRaWAN adaptive data rate ADR",
      "LoRaWAN device class A B C",
      "LoRa duty cycle fair use",
      "LoRa link budget range test",
      "LoRa vs NB-IoT",
      "LPWAN comparison",
      "LoRa agriculture IoT",
      "LoRa smart metering",
      "LoRa cold chain monitoring",
      "LoRa industrial monitoring",
      "LoRa asset tracking",
      "LoRaWAN geolocation TDoA",
      "LoRa antenna design",
      "LoRa battery life",
      "LoRa prototype to production",
      "LoRaWAN development Coimbatore",
    ],

    eyebrow: "LORA & LORAWAN ENGINEERING",
    h1: "LoRa & LoRaWAN Development for Long-Range, Low-Power IoT",
    heroSubhead:
      "We build LoRa sensor nodes, private LoRaWAN gateways and the network and application servers behind them — kilometres of range on a small battery, from a pilot deployment to a full rollout.",
    heroCtaLabel: "Talk to a LoRaWAN engineer",
    heroCtaTo: "/contact",

    introEyebrow: "WHY LORA",
    introTitle: "Kilometres of range without a SIM card or a monthly bill",
    introBody:
      "LoRa's chirp spread-spectrum modulation trades data rate for range and battery life — exactly the trade-off that agriculture, metering and remote monitoring need. With LoRaWAN you can own the whole network: private gateways, your own network server, no per-device cellular fees, while end nodes run for years on a coin cell or a pair of AA cells.",
    introLinkLabel: "Read the LoRaWAN specification overview",
    introLinkHref: "https://lora-alliance.org/about-lorawan/",

    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Node, gateway and server designed together",
    supportBody:
      "One team for the LoRa sensor-node hardware and firmware, gateway selection and siting, the LoRaWAN network server (ChirpStack or The Things Stack), and the dashboards, alerts and integrations your users depend on.",

    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the LoRa & LoRaWAN blog",
      body: "Write-ups on link budgets, spreading factors, ADR strategy, gateway siting, downlink and Class C trade-offs, and scaling a LoRaWAN deployment.",
      linkLabel: "Read the latest LoRaWAN posts",
      href: "https://www.thethingsnetwork.org/docs/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "LoRaWAN in the field",
      body: "Soil-moisture networks, water and energy metering, cold-chain and asset tracking running on private LoRaWAN at farm and city scale.",
      linkLabel: "Browse LoRaWAN use cases and case studies",
      href: "https://lora-alliance.org/lorawan-use-cases/",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "LoRa Guide",
        body: "Spreading factor, bandwidth, coding rate, duty cycle, link budget and the fundamentals of a reliable LoRa link.",
        linkLabel: "Read the guide",
        href: "https://www.thethingsnetwork.org/docs/lorawan/",
      },
      {
        icon: "🛠️",
        title: "Network Server",
        body: "ChirpStack and The Things Stack compared, plus indoor and outdoor gateway options for a private network.",
        linkLabel: "Explore the tools",
        href: "https://www.chirpstack.io/",
      },
      {
        icon: "📈",
        title: "LoRa Silicon",
        body: "Semtech SX126x and SX130x datasheets and reference designs for sensor nodes and gateways.",
        linkLabel: "View the silicon",
        href: "https://www.semtech.com/lora/lora-transceivers",
      },
    ],
    journey: {
      eyebrow: "YOUR LORA JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we use when scoping a LoRa or LoRaWAN project. Each opens the authoritative documentation.",
      items: [
        { label: "LoRaWAN device classes A, B and C", href: "https://www.thethingsnetwork.org/docs/lorawan/classes/" },
        { label: "Spreading factors, bandwidth and data rate", href: "https://www.thethingsnetwork.org/docs/lorawan/spreading-factors/" },
        { label: "Adaptive Data Rate (ADR)", href: "https://www.thethingsnetwork.org/docs/lorawan/adaptive-data-rate/" },
        { label: "Regional parameters and duty-cycle limits", href: "https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/" },
        { label: "Running a private network server with ChirpStack", href: "https://www.chirpstack.io/docs/" },
        { label: "Gateway siting, antennas and coverage", href: "https://www.thethingsnetwork.org/docs/gateways/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the LoRaWAN Deployment Playbook",
      body: "Enter your work email and we'll send you our field guide to deploying LoRaWAN — link budgets, gateway siting, private vs public networks, ADR and payload design, security and a pilot-to-scale checklist.",
      coverLabel: "LoRaWAN Deployment Playbook",
      coverSub: "2025 Edition",
      fileName: "lorawan-deployment-playbook.pdf",
      downloadPath: "/reports/lorawan-deployment-playbook.pdf",
    },
    faqs: [
      {
        question: "What range can I actually expect from LoRa?",
        answer:
          "Typically 2–5 km in built-up areas and 10–15 km with clear line of sight, depending on spreading factor, antenna, mounting height and terrain. We run a link-budget calculation and a physical range test early in every project.",
        keywords: ["LoRa link budget range test", "LoRaWAN range", "LoRa coverage", "LoRa spreading factor"],
      },
      {
        question: "Should I use a private LoRaWAN network or a public one?",
        answer:
          "Private (your own gateways plus ChirpStack or The Things Stack) when you need coverage where operators don't reach, control over downlinks and latency, or predictable long-term cost. Public when an existing network already covers your sites.",
        keywords: ["private LoRaWAN network", "ChirpStack", "The Things Stack", "LoRaWAN network server"],
      },
      {
        question: "How long do LoRa sensor nodes last on a battery?",
        answer:
          "A well-designed Class A node sending a few short uplinks a day runs 3–10 years on a couple of AA cells or a Li-SOCl2 pack. Spreading factor, payload size and downlink usage are the main drivers, and we budget them up front.",
        keywords: ["LoRa battery life", "LoRaWAN device class A B C", "LoRa low power node"],
      },
      {
        question: "LoRa vs NB-IoT — which should I choose?",
        answer:
          "LoRa when you want to own the network and avoid recurring SIM fees, or need deep-indoor/rural coverage you control. NB-IoT when you want operator-managed coverage, higher throughput and no gateway to maintain. We help you weigh both against your sites and volumes.",
        keywords: ["LoRa vs NB-IoT", "LPWAN comparison", "LoRaWAN vs cellular IoT"],
      },
      {
        question: "Can you build custom LoRa sensor hardware?",
        answer:
          "Yes — SX1262-based nodes with your choice of sensors, enclosure, antenna and battery, from schematic through to production, plus the node firmware and the LoRaWAN MAC stack (LoRaMAC-node / LBM).",
        keywords: ["custom LoRa node hardware", "SX1262 LoRa", "LoRa sensor node design", "LoRa firmware"],
      },
      {
        question: "How is a LoRaWAN deployment secured?",
        answer:
          "LoRaWAN uses AES-128 network and application session keys with secure join over OTAA. We provision keys at manufacture, keep application keys off the gateway, and run TLS between the network server and your application backend.",
        keywords: ["LoRaWAN AES-128 security", "LoRaWAN OTAA activation", "LoRaWAN keys", "LoRaWAN security"],
      },
      {
        question: "How do you keep transmissions within duty-cycle and fair-use limits?",
        answer:
          "We size payloads, pick spreading factors with ADR, and schedule uplinks so each node stays within the regional duty cycle and any network fair-use policy — then confirm it with airtime calculations and traffic logging.",
        keywords: ["LoRa duty cycle fair use", "LoRaWAN adaptive data rate ADR", "LoRa airtime", "LoRaWAN regional parameters"],
      },
      {
        question: "Can LoRaWAN do location tracking without GPS?",
        answer:
          "Network-based geolocation (TDoA) is possible with time-synchronised gateways but is coarse. For asset tracking we usually pair a low-power GNSS receiver with the LoRa uplink and only fix position on movement.",
        keywords: ["LoRaWAN geolocation TDoA", "LoRa asset tracking", "LoRa GPS tracker"],
      },
      {
        question: "Which applications is LoRa a good fit for?",
        answer:
          "Anything with small, infrequent data over long distances on battery power — soil and crop monitoring, water and energy metering, cold-chain and warehouse sensing, tank and pump telemetry, and building/industrial condition monitoring.",
        keywords: ["LoRa agriculture IoT", "LoRa smart metering", "LoRa cold chain monitoring", "LoRa industrial monitoring"],
      },
      {
        question: "Where is your LoRa development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. We take on node design, gateway and server setup, or a full end-to-end deployment, for clients in India and internationally.",
        keywords: ["LoRaWAN development Coimbatore", "hire LoRaWAN developer", "LoRa development India"],
      },
    ],
    media: {
      video: {
        label: "Watch: LoRaWAN explained",
        sub: "How LoRa long-range, low-power IoT networks work",
        href: "https://www.youtube.com/@TheThingsNetwork/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The LoRa & LoRaWAN Field Handbook",
        fileName: "lora-lorawan-field-handbook.pdf",
        downloadPath: "/ebooks/lora-lorawan-field-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "LoRaWAN Deployment Playbook 2025",
        fileName: "lorawan-deployment-playbook.pdf",
        downloadPath: "/reports/lorawan-deployment-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // GPS & GNSS tracking — location devices and telematics platforms
  // ==================================================================
  {
    slug: "gps-tracking",
    name: "GPS & GNSS Tracking",
    category: "Location & Telematics",

    metaTitle:
      "GPS Tracking Development Company | GNSS Devices, Vehicle Telematics & Fleet Platforms | NeuralArc",
    metaDescription:
      "NeuralArc builds GPS and GNSS tracking products in Coimbatore — asset trackers, vehicle telematics, u-blox and Quectel GNSS firmware, A-GNSS fast fixes, geofencing, trip and mileage analytics, LTE-M/NB-IoT backhaul and fleet dashboards — from prototype to production.",
    keywords: [
      "GPS tracking development company",
      "GNSS device development",
      "GPS tracker firmware",
      "hire GPS firmware engineer",
      "asset tracker development",
      "vehicle telematics development",
      "fleet tracking platform",
      "real-time location tracking",
      "GPS tracker with LTE-M NB-IoT",
      "multi-constellation GNSS",
      "GPS GLONASS Galileo BeiDou",
      "u-blox GNSS module",
      "Quectel GNSS module",
      "assisted GNSS A-GNSS",
      "GNSS time to first fix",
      "RTK GPS centimetre accuracy",
      "dead reckoning GNSS",
      "geofencing software",
      "GPS geofence entry exit alerts",
      "trip and mileage analytics",
      "GPS tracker deep sleep low power",
      "battery powered GPS tracker",
      "OBD-II GPS tracker",
      "NMEA UBX protocol",
      "telematics backend ingestion",
      "GPS tracker anti-theft",
      "cold chain vehicle tracking",
      "construction equipment tracking",
      "GPS tracker prototype to production",
      "GPS tracking development Coimbatore",
    ],

    eyebrow: "GPS & GNSS ENGINEERING",
    h1: "GPS & GNSS Tracking Devices and Telematics Platforms",
    heroSubhead:
      "We build asset trackers and vehicle telematics — GNSS firmware, cellular backhaul, geofencing, trip analytics and the fleet dashboards your operators live in — from prototype to production.",
    heroCtaLabel: "Talk to a GPS engineer",
    heroCtaTo: "/contact",

    introEyebrow: "WHY GPS / GNSS",
    introTitle: "Know where every asset is, and everywhere it's been",
    introBody:
      "Modern GNSS receivers fix position in seconds using GPS, GLONASS, Galileo and BeiDou together, even in urban canyons and under tree cover. Paired with an accelerometer for motion detection and a cellular or LoRa link for backhaul, they turn any vehicle or asset into a live data source for routing, utilisation, compliance and theft protection.",
    introLinkLabel: "Read the GNSS technology fundamentals",
    introLinkHref: "https://www.u-blox.com/en/technologies/gnss",

    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Device, connectivity and platform built together",
    supportBody:
      "One team for the tracker hardware and firmware, the SIM and connectivity plan, the ingestion backend that receives every position report, and the geofencing, alerts and trip reports your customers see.",

    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the GPS & telematics blog",
      body: "Write-ups on GNSS fix strategy, power budgets for battery trackers, dead reckoning, geofence design and scaling a telematics backend.",
      linkLabel: "Read the latest positioning posts",
      href: "https://www.u-blox.com/en/blogs",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Tracking in the field",
      body: "Cold-chain vehicles, construction plant, logistics fleets and high-value assets tracked in real time on custom telematics platforms.",
      linkLabel: "Browse GNSS tracking case studies",
      href: "https://www.u-blox.com/en/case-studies",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "GNSS Guide",
        body: "Constellations, fix types, time-to-first-fix, assisted GNSS and the fundamentals of an accurate, low-power tracker.",
        linkLabel: "Read the guide",
        href: "https://www.u-blox.com/en/technologies/gnss",
      },
      {
        icon: "🛠️",
        title: "Protocols & Backend",
        body: "NMEA 0183, UBX, and the design of a telematics ingestion pipeline that scales to thousands of devices.",
        linkLabel: "Explore the stack",
        href: "https://gpsd.gitlab.io/gpsd/NMEA.html",
      },
      {
        icon: "📈",
        title: "GNSS Modules",
        body: "u-blox and Quectel GNSS module datasheets and reference designs for asset and vehicle trackers.",
        linkLabel: "View the modules",
        href: "https://www.u-blox.com/en/positioning-chips-and-modules",
      },
    ],
    journey: {
      eyebrow: "YOUR GPS TRACKING JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we use when scoping a GPS or GNSS tracking product. Each opens an authoritative resource.",
      items: [
        { label: "GNSS constellations and multi-band receivers", href: "https://www.u-blox.com/en/technologies/gnss" },
        { label: "NMEA 0183 sentence reference", href: "https://gpsd.gitlab.io/gpsd/NMEA.html" },
        { label: "Assisted GNSS (A-GNSS) for fast fixes", href: "https://www.u-blox.com/en/technologies/assistnow" },
        { label: "Low-power tracking and motion-triggered wake", href: "https://www.u-blox.com/en/technologies/gnss" },
        { label: "Geofencing and trip-detection design", href: "https://en.wikipedia.org/wiki/Geo-fence" },
        { label: "Cellular backhaul for trackers (LTE-M / NB-IoT)", href: "https://www.gsma.com/iot/mobile-iot/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the GPS Tracking & Telematics Playbook",
      body: "Enter your work email and we'll send you our field guide to shipping tracking products — GNSS module choice, power budgets, connectivity, backend design, geofencing and a prototype-to-production checklist.",
      coverLabel: "GPS Tracking & Telematics Playbook",
      coverSub: "2025 Edition",
      fileName: "gps-tracking-telematics-playbook.pdf",
      downloadPath: "/reports/gps-tracking-telematics-playbook.pdf",
    },
    faqs: [
      {
        question: "How accurate is the GPS tracking you build?",
        answer:
          "Typically 2–5 m with a standard multi-constellation GNSS module, tightening to 1–2 m with multi-band, and to centimetre level with RTK where the application and budget justify it.",
        keywords: ["multi-constellation GNSS", "RTK GPS centimetre accuracy", "GNSS accuracy", "GPS GLONASS Galileo BeiDou"],
      },
      {
        question: "How long does a battery-powered asset tracker last?",
        answer:
          "From a few weeks of frequent live tracking to several years of daily check-ins, depending on report interval, GNSS fix strategy and battery size. We model the power budget on real hardware before committing to a battery.",
        keywords: ["GPS tracker deep sleep low power", "battery powered GPS tracker", "asset tracker battery life"],
      },
      {
        question: "Which connectivity do the trackers use to send data?",
        answer:
          "LTE-M or NB-IoT for low-power wide-area coverage, 2G/4G where needed for bandwidth, or LoRa for private, fee-free backhaul on your own network. We match the radio to your coverage and data needs.",
        keywords: ["GPS tracker with LTE-M NB-IoT", "GPS tracker firmware", "telematics connectivity"],
      },
      {
        question: "Can you build the fleet dashboard as well as the device?",
        answer:
          "Yes. We build the ingestion backend, live map, geofencing, alerts, trip and mileage reports, driver behaviour scoring and role-based access for your operators and customers.",
        keywords: ["fleet tracking platform", "telematics backend ingestion", "trip and mileage analytics", "geofencing software"],
      },
      {
        question: "Do you support geofencing and theft alerts?",
        answer:
          "Circular and polygon geofences, entry/exit and dwell alerts, tow/tilt and unauthorised-movement detection, ignition and power-cut alerts, all with instant push, SMS or webhook notification.",
        keywords: ["GPS geofence entry exit alerts", "GPS tracker anti-theft", "unauthorised movement detection"],
      },
      {
        question: "How fast do the devices get a position fix?",
        answer:
          "A cold start can take 25–35 seconds; with assisted GNSS (A-GNSS) and ephemeris caching we bring hot starts down to 1–3 seconds, which is also key to saving power on battery trackers.",
        keywords: ["assisted GNSS A-GNSS", "GNSS time to first fix", "GPS cold start hot start"],
      },
      {
        question: "Can tracking keep working through tunnels and urban canyons?",
        answer:
          "We fuse GNSS with accelerometer and gyro data (dead reckoning), and on vehicle installs we can add wheel-tick/odometer input, so position holds through short GNSS outages.",
        keywords: ["dead reckoning GNSS", "sensor fusion tracking", "urban canyon GNSS", "tunnel GPS"],
      },
      {
        question: "What form factors do you build — OBD, hardwired or battery?",
        answer:
          "Plug-in OBD-II dongles for quick fleet deployment, hardwired units for permanent installs with ignition sense, and self-contained battery trackers for trailers, containers and unpowered assets.",
        keywords: ["OBD-II GPS tracker", "hardwired vehicle tracker", "battery powered GPS tracker", "asset tracker development"],
      },
      {
        question: "Who owns the tracking data and where is it hosted?",
        answer:
          "You do. We deploy the backend to your cloud account or ours as you prefer, with your data isolated, exportable and covered by a clear retention and access policy.",
        keywords: ["telematics data ownership", "GPS tracking data privacy", "self-hosted telematics"],
      },
      {
        question: "Where is your GPS tracking development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for device firmware, backend, or the complete product, with clients in India and abroad.",
        keywords: ["GPS tracking development Coimbatore", "hire GPS firmware engineer", "GNSS device development"],
      },
    ],
    media: {
      video: {
        label: "Watch: how GNSS tracking works",
        sub: "From a satellite fix to a live fleet dashboard",
        href: "https://www.youtube.com/@u-blox/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The GPS Tracking Device Handbook",
        fileName: "gps-tracking-device-handbook.pdf",
        downloadPath: "/ebooks/gps-tracking-device-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "GPS Tracking & Telematics Playbook 2025",
        fileName: "gps-tracking-telematics-playbook.pdf",
        downloadPath: "/reports/gps-tracking-telematics-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // SMS gateway & messaging — alerts, OTP and two-way SMS integration
  // ==================================================================
  {
    slug: "sms-gateway",
    name: "SMS Gateway & Messaging",
    category: "Connectivity & Alerts",

    metaTitle:
      "SMS Gateway Development Company | Alerts, OTP, Two-Way Messaging & GSM Modem Integration | NeuralArc",
    metaDescription:
      "NeuralArc builds SMS gateway and messaging integrations in Coimbatore — transactional alerts, OTP verification, bulk SMS APIs, SMPP bindings, on-device SIM800/SIM7600 GSM modem gateways, delivery-receipt tracking, provider failover and DLT compliance for IoT and business applications.",
    keywords: [
      "SMS gateway development company",
      "SMS gateway integration",
      "SMS API integration",
      "hire SMS integration developer",
      "OTP verification SMS",
      "two-factor authentication SMS",
      "transactional SMS alerts",
      "bulk SMS integration",
      "SMPP gateway binding",
      "HTTP SMS API",
      "GSM modem SMS gateway",
      "SIM800 SMS AT commands",
      "SIM7600 SMS",
      "on-device SMS for IoT",
      "offline SMS alerts",
      "SMS delivery reports DLR",
      "SMS status callback webhook",
      "SMS provider failover",
      "SMS retry queue",
      "DLT SMS compliance India",
      "SMS template registration TRAI",
      "sender ID short code long code",
      "two-way SMS workflow",
      "inbound SMS webhook",
      "SMS concatenation Unicode",
      "SMS cost optimisation",
      "IoT threshold SMS alert",
      "appointment reminder SMS",
      "SMS gateway development Coimbatore",
    ],

    eyebrow: "SMS GATEWAY ENGINEERING",
    h1: "SMS Gateway & Messaging Integration for Alerts, OTP and IoT",
    heroSubhead:
      "We build reliable SMS delivery into products — transactional alerts, OTP verification, two-way messaging and on-device GSM modem gateways — with retry queues, delivery-receipt tracking and provider failover.",
    heroCtaLabel: "Talk to a messaging engineer",
    heroCtaTo: "/contact",

    introEyebrow: "WHY SMS",
    introTitle: "The channel that reaches every phone, instantly",
    introBody:
      "SMS needs no app, no data plan and no smartphone, which is why it is still the backbone of OTP, critical alerts and field notifications. We integrate cloud SMS providers over HTTP or SMPP, and build on-device GSM modem gateways for IoT products that must send an alert even when there is no internet.",
    introLinkLabel: "Read the SMPP protocol overview",
    introLinkHref: "https://smpp.org/",

    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Provider, application queue and hardware gateway together",
    supportBody:
      "One team for SMS provider selection and integration, the queue and retry logic inside your application, DLT and consent handling, and the GSM modem gateway firmware for offline-capable devices.",

    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the SMS & messaging blog",
      body: "Write-ups on OTP best practice, delivery-receipt handling, provider failover, DLT compliance in India and cost control at scale.",
      linkLabel: "Read the latest messaging posts",
      href: "https://www.twilio.com/en-us/blog/tag/sms",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Messaging in production",
      body: "OTP flows, appointment reminders, IoT threshold alerts and two-way field workflows delivering millions of messages reliably.",
      linkLabel: "Browse messaging customer stories",
      href: "https://www.twilio.com/en-us/customers",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "SMS Integration Guide",
        body: "HTTP vs SMPP, sender IDs, message segmentation, Unicode/GSM-7 encoding and the fundamentals of reliable delivery.",
        linkLabel: "Read the guide",
        href: "https://smpp.org/",
      },
      {
        icon: "🛠️",
        title: "APIs & Modems",
        body: "Cloud SMS APIs compared, plus SIM800 and SIM7600 AT-command gateways for sending directly from a device.",
        linkLabel: "Explore the options",
        href: "https://www.twilio.com/docs/sms",
      },
      {
        icon: "📈",
        title: "Compliance & Delivery",
        body: "DLT registration in India, delivery-receipt handling and how to keep sender reputation and throughput healthy.",
        linkLabel: "View the rules",
        href: "https://trai.gov.in/",
      },
    ],
    journey: {
      eyebrow: "YOUR SMS GATEWAY JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we use when scoping an SMS or messaging integration. Each opens an authoritative resource.",
      items: [
        { label: "SMPP protocol basics", href: "https://smpp.org/" },
        { label: "SMS API integration patterns", href: "https://www.twilio.com/docs/sms" },
        { label: "OTP / verification best practice", href: "https://www.twilio.com/docs/verify/sms" },
        { label: "Delivery receipts and status callbacks", href: "https://www.twilio.com/docs/sms/api/message-resource" },
        { label: "GSM modem AT commands for SMS", href: "https://www.developershome.com/sms/atCommandsIntro.asp" },
        { label: "DLT / regulatory compliance (India)", href: "https://trai.gov.in/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the SMS Gateway Integration Playbook",
      body: "Enter your work email and we'll send you our field guide to building SMS into a product — provider choice, OTP design, retry and failover, compliance and cost control.",
      coverLabel: "SMS Gateway Integration Playbook",
      coverSub: "2025 Edition",
      fileName: "sms-gateway-integration-playbook.pdf",
      downloadPath: "/reports/sms-gateway-integration-playbook.pdf",
    },
    faqs: [
      {
        question: "Which SMS providers do you integrate with?",
        answer:
          "Most cloud SMS APIs — Twilio, MSG91, Kaleyra, Gupshup, Vonage and others — over HTTP, plus direct SMPP bindings where a carrier connection is needed. We keep the integration provider-agnostic behind one internal interface so you can switch or add providers later.",
        keywords: ["SMS API integration", "SMPP gateway binding", "SMS gateway integration", "HTTP SMS API"],
      },
      {
        question: "Can you build OTP / two-factor verification?",
        answer:
          "Yes — time-boxed codes, per-number and per-IP rate limiting, resend and lockout logic, delivery-receipt tracking, and fallback to voice or WhatsApp when SMS fails.",
        keywords: ["OTP verification SMS", "two-factor authentication SMS", "OTP rate limiting", "OTP fallback"],
      },
      {
        question: "Can an IoT device send SMS without any internet?",
        answer:
          "Yes. We add a SIM800/SIM7600-class GSM modem and firmware that sends AT-command SMS directly, so critical threshold and fault alerts still go out when the primary network link is down.",
        keywords: ["GSM modem SMS gateway", "SIM800 SMS AT commands", "SIM7600 SMS", "offline SMS alerts", "on-device SMS for IoT"],
      },
      {
        question: "How do you handle failed or delayed messages?",
        answer:
          "A persistent queue with exponential-backoff retries, delivery-receipt (DLR) reconciliation, dead-letter handling, and automatic failover to a secondary provider when the primary's delivery rate or latency degrades.",
        keywords: ["SMS retry queue", "SMS delivery reports DLR", "SMS provider failover", "SMS status callback webhook"],
      },
      {
        question: "Do you handle DLT and regulatory compliance in India?",
        answer:
          "Yes — sender ID (header) and content-template registration on the DLT platform, entity/telemarketer linkage, consent capture, and keeping message content within transactional vs promotional category rules.",
        keywords: ["DLT SMS compliance India", "SMS template registration TRAI", "sender ID short code long code"],
      },
      {
        question: "Can you support two-way SMS workflows?",
        answer:
          "Inbound webhooks, keyword parsing, per-number session state and conversational flows for field reporting, delivery confirmations, appointment rescheduling and first-line support.",
        keywords: ["two-way SMS workflow", "inbound SMS webhook", "conversational SMS", "SMS keyword handling"],
      },
      {
        question: "How do you keep SMS costs under control at scale?",
        answer:
          "Message-length and encoding checks to avoid accidental multi-part or Unicode sends, provider least-cost routing, throttling, and per-tenant budgets and reporting so spend stays visible.",
        keywords: ["SMS cost optimisation", "SMS concatenation Unicode", "least-cost routing SMS", "bulk SMS integration"],
      },
      {
        question: "How are long messages and non-English text handled?",
        answer:
          "We handle GSM-7 vs UCS-2 encoding, 160/70-character limits and concatenated (multi-part) segmentation transparently, and test rendering for the languages and emoji your users actually send.",
        keywords: ["SMS concatenation Unicode", "GSM-7 UCS-2 encoding", "multipart SMS", "regional language SMS"],
      },
      {
        question: "What are typical use cases you deliver?",
        answer:
          "OTP and login verification, transaction and delivery alerts, appointment and payment reminders, IoT sensor threshold alerts, and outage or on-call escalation notifications.",
        keywords: ["transactional SMS alerts", "appointment reminder SMS", "IoT threshold SMS alert", "escalation notifications"],
      },
      {
        question: "Where is your SMS integration team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a standalone integration or as part of a larger product, for clients in India and internationally.",
        keywords: ["SMS gateway development Coimbatore", "hire SMS integration developer", "SMS integration India"],
      },
    ],
    media: {
      video: {
        label: "Watch: SMS integration basics",
        sub: "Building reliable alerts and OTP with an SMS gateway",
        href: "https://www.youtube.com/@twilio/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The SMS Gateway Integration Handbook",
        fileName: "sms-gateway-integration-handbook.pdf",
        downloadPath: "/ebooks/sms-gateway-integration-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "SMS Gateway Integration Playbook 2025",
        fileName: "sms-gateway-integration-playbook.pdf",
        downloadPath: "/reports/sms-gateway-integration-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Node.js — REST/GraphQL APIs, real-time backends, microservices
  // ==================================================================
  {
    slug: "nodejs",
    name: "Node.js",
    category: "Backend & APIs",
    metaTitle:
      "Node.js Development Company | REST & GraphQL APIs, Real-Time Backends | NeuralArc",
    metaDescription:
      "NeuralArc is a Node.js development company in Coimbatore. We build REST and GraphQL APIs, real-time WebSocket services, Express and NestJS backends, microservices, integrations and cloud deployments — from MVP to production scale.",
    keywords: [
      "Node.js development company",
      "Node.js development services",
      "hire Node.js developer",
      "Node.js API development",
      "Express.js backend development",
      "NestJS development",
      "Node.js REST API",
      "Node.js GraphQL API",
      "Node.js microservices",
      "Node.js WebSocket real-time",
      "Node.js authentication JWT",
      "Node.js PostgreSQL",
      "Node.js MongoDB",
      "Node.js MySQL",
      "Node.js Redis caching",
      "Node.js Docker deployment",
      "Node.js AWS Lambda",
      "Node.js performance optimization",
      "Node.js worker threads",
      "Node.js background jobs",
      "Node.js payment gateway integration",
      "Node.js third-party API integration",
      "Node.js CI/CD pipeline",
      "Node.js unit testing Jest",
      "Node.js TypeScript backend",
      "Node.js prototype to production",
      "Node.js development Coimbatore",
      "backend developers India",
      "full stack JavaScript development",
    ],
    eyebrow: "NODE.JS BACKEND ENGINEERING",
    h1: "Node.js Development for Fast, Real-Time APIs and Backends",
    heroSubhead:
      "We design and build Node.js services — REST and GraphQL APIs, real-time WebSocket backends, background workers and microservices — with the testing, monitoring and deployment pipeline to run them in production.",
    heroCtaLabel: "Talk to a Node.js engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY NODE.JS",
    introTitle: "One language across the stack, built for I/O-heavy workloads",
    introBody:
      "Node.js runs JavaScript on the server with a non-blocking event loop, which makes it a strong fit for APIs, streaming, chat, notifications and anything that spends its time waiting on the network or a database. Sharing a language with the browser also means one team, shared validation logic and faster iteration. We build on Express or NestJS, add TypeScript for safety, and ship with automated tests and containerised deploys.",
    introLinkLabel: "Read the Node.js documentation",
    introLinkHref: "https://nodejs.org/en/docs",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "API design, database and deployment in one team",
    supportBody:
      "One team for API and schema design, database modelling (PostgreSQL, MySQL, MongoDB), authentication and authorization, third-party and payment integrations, background jobs, and the Docker/CI pipeline that gets it all to your cloud.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Node.js blog",
      body: "Write-ups on event-loop behaviour, streams and backpressure, API versioning, auth patterns, and taking a Node service to production.",
      linkLabel: "Read the latest Node.js posts",
      href: "https://nodejs.org/en/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Node.js in production",
      body: "APIs, real-time dashboards, integration middleware and internal tools running on Node.js at scale — and the patterns that keep them maintainable.",
      linkLabel: "Browse Node.js best-practice examples",
      href: "https://github.com/goldbergyoni/nodebestpractices",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Node.js Guide",
        body: "The event loop, streams, error handling and the fundamentals of a maintainable API architecture.",
        linkLabel: "Read the guide",
        href: "https://nodejs.org/en/learn",
      },
      {
        icon: "🛠️",
        title: "Frameworks & Tooling",
        body: "Express vs NestJS vs Fastify, plus the ORM, validation and testing libraries we use on every build.",
        linkLabel: "Explore the tools",
        href: "https://expressjs.com/",
      },
      {
        icon: "📈",
        title: "Best Practices",
        body: "The Node.js Best Practices guide — security, performance, project structure and production readiness.",
        linkLabel: "View the practices",
        href: "https://github.com/goldbergyoni/nodebestpractices",
      },
    ],
    journey: {
      eyebrow: "YOUR NODE.JS JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when scoping a Node.js backend. Each opens the authoritative documentation.",
      items: [
        { label: "The Node.js event loop and async model", href: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" },
        { label: "Building REST APIs with Express", href: "https://expressjs.com/en/guide/routing.html" },
        { label: "Structured backends with NestJS", href: "https://docs.nestjs.com/" },
        { label: "Streams and backpressure", href: "https://nodejs.org/en/learn/modules/backpressuring-in-streams" },
        { label: "Authentication with JSON Web Tokens", href: "https://jwt.io/introduction" },
        { label: "Dockerising a Node.js app", href: "https://nodejs.org/en/learn/getting-started/nodejs-docker-webapp" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Node.js API Development Playbook",
      body: "Enter your work email and we'll send you our field guide to shipping Node.js backends — API design, auth, database choice, testing, observability and a production-readiness checklist.",
      coverLabel: "Node.js API Development Playbook",
      coverSub: "2025 Edition",
      fileName: "nodejs-api-development-playbook.pdf",
      downloadPath: "/reports/nodejs-api-development-playbook.pdf",
    },
    faqs: [
      {
        question: "What kinds of backends do you build with Node.js?",
        answer:
          "REST and GraphQL APIs, real-time services (chat, notifications, live dashboards), integration middleware, background job processors and internal tools — anything that benefits from fast I/O and a shared language with the front end.",
        keywords: ["Node.js API development", "Node.js backend services", "Node.js real-time backend"],
      },
      {
        question: "Do you use Express, NestJS or something else?",
        answer:
          "Express for small, focused services; NestJS when a project needs structure, dependency injection and a larger team; Fastify where raw throughput matters. We decide during scoping.",
        keywords: ["Express.js backend development", "NestJS development", "Fastify Node.js", "Node.js framework choice"],
      },
      {
        question: "Can you build a real-time feature like live tracking or chat?",
        answer:
          "Yes — WebSockets (Socket.IO or ws) or server-sent events, with a Redis pub/sub layer so it scales across multiple instances rather than breaking the moment you add a second server.",
        keywords: ["Node.js WebSocket", "Node.js Socket.IO", "Node.js real-time", "Node.js Redis pubsub"],
      },
      {
        question: "Which databases do you use with Node.js?",
        answer:
          "PostgreSQL or MySQL for relational data, MongoDB where the shape is fluid, Redis for caching and queues. We use an ORM or query builder (Prisma, TypeORM, Knex) with proper migrations.",
        keywords: ["Node.js PostgreSQL", "Node.js MySQL", "Node.js MongoDB", "Node.js Prisma ORM"],
      },
      {
        question: "Do you write Node.js in TypeScript?",
        answer:
          "For anything beyond a throwaway script, yes — TypeScript catches a whole class of bugs before runtime and makes the codebase safe to change months later.",
        keywords: ["Node.js TypeScript backend", "TypeScript backend development"],
      },
      {
        question: "How do you handle authentication and API security?",
        answer:
          "JWT or session auth, role-based access control, input validation on every route, rate limiting, secure headers, and the OWASP API Security checklist applied to the build.",
        keywords: ["Node.js authentication JWT", "Node.js API security", "Node.js RBAC", "OWASP API security"],
      },
      {
        question: "Can you integrate payment gateways and third-party APIs?",
        answer:
          "Yes — Razorpay, Stripe, PayPal and others, plus SMS, email, maps and CRM integrations, with retries, webhook verification and idempotency handled properly.",
        keywords: ["Node.js payment gateway integration", "Node.js Stripe Razorpay", "Node.js third-party API integration"],
      },
      {
        question: "How do you test and deploy Node.js services?",
        answer:
          "Unit and integration tests with Jest or Vitest, a CI pipeline that runs them on every push, Docker images, and deploys to AWS, GCP, Azure or a VPS with health checks and structured logging.",
        keywords: ["Node.js unit testing Jest", "Node.js CI/CD pipeline", "Node.js Docker deployment", "Node.js AWS Lambda"],
      },
      {
        question: "Can you improve the performance of an existing Node.js app?",
        answer:
          "Yes — profiling the event loop, fixing blocking calls, adding caching and connection pooling, and moving CPU-heavy work to worker threads or a queue.",
        keywords: ["Node.js performance optimization", "Node.js profiling", "Node.js worker threads"],
      },
      {
        question: "Where is your Node.js development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full backend or a specific phase, with clients in India and internationally.",
        keywords: ["Node.js development Coimbatore", "hire Node.js developer India", "backend developers India"],
      },
    ],
    media: {
      video: {
        label: "Watch: Node.js backend basics",
        sub: "Building a REST API and understanding the event loop",
        href: "https://www.youtube.com/@nodejs/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Node.js Backend Handbook",
        fileName: "nodejs-backend-handbook.pdf",
        downloadPath: "/ebooks/nodejs-backend-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Node.js API Development Playbook 2025",
        fileName: "nodejs-api-development-playbook.pdf",
        downloadPath: "/reports/nodejs-api-development-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // React — single-page apps, dashboards, design-system front ends
  // ==================================================================
  {
    slug: "react",
    name: "React",
    category: "Frontend & Web Apps",
    metaTitle:
      "React Development Company | Single-Page Apps, Dashboards & Design Systems | NeuralArc",
    metaDescription:
      "NeuralArc is a React development company in Coimbatore. We build single-page applications, admin dashboards, customer portals and design systems with React, Vite, TypeScript and modern state management — from prototype to production.",
    keywords: [
      "React development company",
      "React development services",
      "hire React developer",
      "React single-page application",
      "React dashboard development",
      "React admin panel",
      "React customer portal",
      "React design system",
      "React component library",
      "React with TypeScript",
      "React Vite setup",
      "React state management Redux",
      "React Zustand React Query",
      "React Hooks development",
      "React Router SPA",
      "React performance optimization",
      "React code splitting lazy loading",
      "React SSR Next.js",
      "React REST API integration",
      "React GraphQL Apollo",
      "React form validation",
      "React accessibility WCAG",
      "React unit testing React Testing Library",
      "React Tailwind CSS UI",
      "React migration from legacy",
      "React prototype to production",
      "React development Coimbatore",
      "frontend developers India",
      "React web app development",
    ],
    eyebrow: "REACT FRONTEND ENGINEERING",
    h1: "React Development for Web Apps, Dashboards and Portals",
    heroSubhead:
      "We build fast, maintainable React front ends — single-page apps, internal dashboards, customer portals and reusable design systems — with TypeScript, sensible state management and a real testing setup.",
    heroCtaLabel: "Talk to a React engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY REACT",
    introTitle: "A component model that scales with your product",
    introBody:
      "React's component model lets a UI grow without turning into a tangle: state flows one way, components compose, and a design system keeps the look consistent across dozens of screens. We pair React with Vite for a fast dev loop, TypeScript for safety, and a state approach matched to the app — local state and React Query for most, Redux Toolkit or Zustand when genuinely needed.",
    introLinkLabel: "Read the React documentation",
    introLinkHref: "https://react.dev/learn",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "UI, state and API integration in one team",
    supportBody:
      "One team for component and design-system work, state management, API and auth integration, accessibility, performance, and the build and deploy pipeline that ships it — so the front end isn't handed off half-finished.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the React blog",
      body: "Write-ups on component design, data fetching with React Query, rendering performance, accessibility, and structuring a React codebase that stays maintainable.",
      linkLabel: "Read the latest React posts",
      href: "https://react.dev/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "React in production",
      body: "Dashboards, SaaS front ends, booking flows and internal tools built in React and running for real users.",
      linkLabel: "See who builds with React",
      href: "https://react.dev/community/conferences",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "React Guide",
        body: "Components, props and state, effects, and the mental model behind a predictable React app.",
        linkLabel: "Read the guide",
        href: "https://react.dev/learn",
      },
      {
        icon: "🛠️",
        title: "Tooling & Data",
        body: "Vite, React Router and React Query compared with the alternatives, plus the form and table libraries we reach for.",
        linkLabel: "Explore the tools",
        href: "https://tanstack.com/query/latest",
      },
      {
        icon: "📈",
        title: "Performance",
        body: "Code splitting, memoisation, list virtualisation and measuring render cost with the React Profiler.",
        linkLabel: "View the guide",
        href: "https://react.dev/learn/render-and-commit",
      },
    ],
    journey: {
      eyebrow: "YOUR REACT JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when scoping a React front end. Each opens the authoritative documentation.",
      items: [
        { label: "Thinking in React components", href: "https://react.dev/learn/thinking-in-react" },
        { label: "State and the rules of Hooks", href: "https://react.dev/reference/rules/rules-of-hooks" },
        { label: "Data fetching with React Query", href: "https://tanstack.com/query/latest/docs/framework/react/overview" },
        { label: "Routing with React Router", href: "https://reactrouter.com/en/main/start/tutorial" },
        { label: "Server rendering with Next.js", href: "https://nextjs.org/docs" },
        { label: "Testing with React Testing Library", href: "https://testing-library.com/docs/react-testing-library/intro/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the React Front-End Development Playbook",
      body: "Enter your work email and we'll send you our field guide to shipping React apps — architecture, state management, performance, accessibility, testing and a production-readiness checklist.",
      coverLabel: "React Front-End Development Playbook",
      coverSub: "2025 Edition",
      fileName: "react-frontend-development-playbook.pdf",
      downloadPath: "/reports/react-frontend-development-playbook.pdf",
    },
    faqs: [
      {
        question: "What kinds of front ends do you build with React?",
        answer:
          "Single-page apps, admin dashboards, customer and partner portals, booking and checkout flows, and reusable design systems that keep a large product visually consistent.",
        keywords: ["React single-page application", "React dashboard development", "React customer portal"],
      },
      {
        question: "Do you use TypeScript with React?",
        answer:
          "Yes, on every non-trivial project. TypeScript catches prop and data-shape mistakes at build time and makes refactoring a large UI far less risky.",
        keywords: ["React with TypeScript", "typed React components"],
      },
      {
        question: "Which state management do you use?",
        answer:
          "Local component state and React Query for server data cover most apps. We add Redux Toolkit or Zustand only when there's genuinely complex shared client state.",
        keywords: ["React state management Redux", "React Zustand React Query", "React Query data fetching"],
      },
      {
        question: "Can you build a design system or component library?",
        answer:
          "Yes — a documented set of accessible components (buttons, inputs, tables, modals, layout) with tokens for colour, spacing and type, so every screen looks and behaves consistently.",
        keywords: ["React design system", "React component library", "React UI kit"],
      },
      {
        question: "Do you do server-side rendering or use Next.js?",
        answer:
          "When SEO or first-load performance matters we build on Next.js with SSR or static generation; for internal tools and dashboards a Vite SPA is simpler and enough.",
        keywords: ["React SSR Next.js", "React static site generation", "React SEO"],
      },
      {
        question: "How do you keep a React app fast?",
        answer:
          "Route-level code splitting, lazy loading, memoisation where it measurably helps, list virtualisation for big tables, and profiling real interactions rather than guessing.",
        keywords: ["React performance optimization", "React code splitting lazy loading", "React profiler"],
      },
      {
        question: "Can you make an existing React app accessible?",
        answer:
          "Yes — semantic markup, keyboard navigation, focus management, ARIA where needed, colour-contrast fixes, and testing against the WCAG checklist.",
        keywords: ["React accessibility WCAG", "React a11y", "accessible React components"],
      },
      {
        question: "Do you test React code?",
        answer:
          "Component and interaction tests with React Testing Library, plus end-to-end tests with Playwright or Cypress for the critical user flows, all run in CI.",
        keywords: ["React unit testing React Testing Library", "React Playwright Cypress", "React CI testing"],
      },
      {
        question: "Can you take over or modernise a legacy React front end?",
        answer:
          "Yes — upgrading React and build tooling, replacing deprecated patterns, adding types and tests, and refactoring in safe increments rather than a risky rewrite.",
        keywords: ["React migration from legacy", "React upgrade", "React refactoring"],
      },
      {
        question: "Where is your React development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full front end or a specific phase, with clients in India and internationally.",
        keywords: ["React development Coimbatore", "frontend developers India", "hire React developer India"],
      },
    ],
    media: {
      video: {
        label: "Watch: React app fundamentals",
        sub: "Components, state and data fetching in a real app",
        href: "https://www.youtube.com/@reactjs/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The React Front-End Handbook",
        fileName: "react-frontend-handbook.pdf",
        downloadPath: "/ebooks/react-frontend-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "React Front-End Development Playbook 2025",
        fileName: "react-frontend-development-playbook.pdf",
        downloadPath: "/reports/react-frontend-development-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // React Native — cross-platform iOS + Android from one codebase
  // ==================================================================
  {
    slug: "react-native",
    name: "React Native",
    category: "Cross-Platform Mobile",
    metaTitle:
      "React Native Development Company | Cross-Platform iOS & Android Apps | NeuralArc",
    metaDescription:
      "NeuralArc is a React Native development company in Coimbatore. We build cross-platform iOS and Android apps from one codebase — native modules, offline support, push notifications, in-app payments and app store deployment.",
    keywords: [
      "React Native development company",
      "React Native app development",
      "hire React Native developer",
      "cross-platform mobile app development",
      "React Native iOS Android",
      "React Native Expo",
      "React Native CLI bare workflow",
      "React Native native modules",
      "React Native push notifications",
      "React Native offline first",
      "React Native in-app purchases",
      "React Native payment integration",
      "React Native REST API integration",
      "React Native navigation",
      "React Native state management",
      "React Native performance optimization",
      "React Native Hermes engine",
      "React Native OTA updates CodePush",
      "React Native app store deployment",
      "React Native Play Store submission",
      "React Native TypeScript",
      "React Native maps geolocation",
      "React Native camera",
      "React Native testing Detox",
      "React Native prototype to production",
      "React Native development Coimbatore",
      "mobile app developers India",
      "React Native migration",
    ],
    eyebrow: "REACT NATIVE MOBILE ENGINEERING",
    h1: "React Native Development for iOS and Android From One Codebase",
    heroSubhead:
      "We build and ship cross-platform mobile apps in React Native — one codebase for iOS and Android, native modules where they're needed, offline support, push notifications and app store submission handled.",
    heroCtaLabel: "Talk to a React Native engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY REACT NATIVE",
    introTitle: "Ship to both stores without maintaining two apps",
    introBody:
      "React Native lets one team build for iOS and Android from a shared JavaScript/TypeScript codebase, dropping to native Swift or Kotlin only where a feature truly needs it. That cuts build and maintenance cost roughly in half while still giving users a genuinely native feel. We use Expo where it fits and the bare workflow when a project needs custom native code.",
    introLinkLabel: "Read the React Native documentation",
    introLinkHref: "https://reactnative.dev/docs/getting-started",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "App, backend integration and store release together",
    supportBody:
      "One team for the React Native app, native module work, API and auth integration, push and analytics setup, and the App Store and Play Store submission — including the review-policy checks that trip most first-time releases.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the React Native blog",
      body: "Write-ups on the new architecture, Hermes, navigation patterns, offline sync, over-the-air updates and getting an app through store review.",
      linkLabel: "Read the latest React Native posts",
      href: "https://reactnative.dev/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "React Native in production",
      body: "Consumer apps, field-service tools, retail and logistics apps built in React Native and shipping on both stores.",
      linkLabel: "See apps built with React Native",
      href: "https://reactnative.dev/showcase",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "React Native Guide",
        body: "Core components, styling, navigation and the mental model for a maintainable cross-platform app.",
        linkLabel: "Read the guide",
        href: "https://reactnative.dev/docs/getting-started",
      },
      {
        icon: "🛠️",
        title: "Expo & Tooling",
        body: "Expo vs the bare workflow, EAS Build, and the libraries we use for navigation, storage and native features.",
        linkLabel: "Explore the tools",
        href: "https://docs.expo.dev/",
      },
      {
        icon: "📈",
        title: "Performance & Architecture",
        body: "The new architecture (Fabric, TurboModules), Hermes, list performance and reducing bridge traffic.",
        linkLabel: "View the guide",
        href: "https://reactnative.dev/architecture/overview",
      },
    ],
    journey: {
      eyebrow: "YOUR REACT NATIVE JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when scoping a React Native app. Each opens the authoritative documentation.",
      items: [
        { label: "Expo vs bare React Native workflow", href: "https://docs.expo.dev/faq/" },
        { label: "Navigation with React Navigation", href: "https://reactnavigation.org/docs/getting-started" },
        { label: "Push notifications", href: "https://reactnative.dev/docs/pushnotificationios" },
        { label: "Over-the-air updates with EAS Update", href: "https://docs.expo.dev/eas-update/introduction/" },
        { label: "Writing a native module", href: "https://reactnative.dev/docs/native-modules-intro" },
        { label: "Publishing to the App Store and Play Store", href: "https://reactnative.dev/docs/publishing-to-app-store" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the React Native App Development Playbook",
      body: "Enter your work email and we'll send you our field guide to shipping React Native apps — Expo vs bare, navigation, offline, notifications, store submission and a prototype-to-production checklist.",
      coverLabel: "React Native App Development Playbook",
      coverSub: "2025 Edition",
      fileName: "react-native-app-development-playbook.pdf",
      downloadPath: "/reports/react-native-app-development-playbook.pdf",
    },
    faqs: [
      {
        question: "Does one React Native codebase really run on both iOS and Android?",
        answer:
          "Yes — the large majority of the code is shared. We add small platform-specific branches for the places where iOS and Android genuinely differ, and native modules only when a feature needs them.",
        keywords: ["cross-platform mobile app development", "React Native iOS Android", "one codebase mobile"],
      },
      {
        question: "Should my app use Expo or the bare workflow?",
        answer:
          "Expo for most apps — faster setup, managed builds and updates. The bare workflow when you need a custom native library Expo doesn't support. We assess this early so it doesn't cost a migration later.",
        keywords: ["React Native Expo", "React Native CLI bare workflow", "Expo vs bare"],
      },
      {
        question: "Can you add a native feature Expo doesn't cover?",
        answer:
          "Yes — we write native modules in Swift/Objective-C and Kotlin/Java, or integrate an existing native SDK, and expose it to the JavaScript side cleanly.",
        keywords: ["React Native native modules", "React Native custom native code", "React Native native SDK"],
      },
      {
        question: "Does the app work offline?",
        answer:
          "We build offline-first where it matters — local storage (MMKV, SQLite, WatermelonDB), an outbox queue for writes, and background sync when connectivity returns.",
        keywords: ["React Native offline first", "React Native local storage", "React Native background sync"],
      },
      {
        question: "Can you add push notifications and in-app payments?",
        answer:
          "Yes — FCM and APNs push, and in-app purchases or Razorpay/Stripe checkout depending on whether you're selling digital or physical goods, with the store rules handled.",
        keywords: ["React Native push notifications", "React Native in-app purchases", "React Native payment integration"],
      },
      {
        question: "How do you push fixes quickly without a store review?",
        answer:
          "JavaScript-only changes go out over the air with EAS Update or CodePush; anything touching native code still needs a store build, but that's a small fraction of releases.",
        keywords: ["React Native OTA updates CodePush", "React Native EAS Update", "over-the-air mobile updates"],
      },
      {
        question: "How do you keep a React Native app performant?",
        answer:
          "Hermes enabled, FlatList tuned properly, images sized and cached, animations on the native driver, and profiling with Flipper rather than guessing.",
        keywords: ["React Native performance optimization", "React Native Hermes engine", "React Native FlatList performance"],
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "Yes — store listings, screenshots, privacy declarations, signing, and the policy checks (permissions, data use, IAP rules) that most first submissions fail on.",
        keywords: ["React Native app store deployment", "React Native Play Store submission", "app store review"],
      },
      {
        question: "Can you take over an existing React Native app?",
        answer:
          "Yes — upgrading React Native and dependencies, moving to the new architecture, adding TypeScript and tests, and fixing the crash and performance issues first.",
        keywords: ["React Native migration", "React Native upgrade", "React Native takeover"],
      },
      {
        question: "Where is your React Native development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full app or a specific phase, with clients in India and internationally.",
        keywords: ["React Native development Coimbatore", "mobile app developers India", "hire React Native developer India"],
      },
    ],
    media: {
      video: {
        label: "Watch: React Native app basics",
        sub: "Building a cross-platform screen with navigation and data",
        href: "https://www.youtube.com/@ReactNative/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The React Native Mobile Handbook",
        fileName: "react-native-mobile-handbook.pdf",
        downloadPath: "/ebooks/react-native-mobile-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "React Native App Development Playbook 2025",
        fileName: "react-native-app-development-playbook.pdf",
        downloadPath: "/reports/react-native-app-development-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // JavaScript — the language behind the whole stack
  // ==================================================================
  {
    slug: "javascript",
    name: "JavaScript",
    category: "Web Programming",
    metaTitle:
      "JavaScript Development Company | Web Apps, APIs & Interactive Front Ends | NeuralArc",
    metaDescription:
      "NeuralArc is a JavaScript development company in Coimbatore. We build interactive web front ends, Node.js APIs and full-stack apps in modern JavaScript and TypeScript — clean, tested code from prototype to production.",
    keywords: [
      "JavaScript development company",
      "JavaScript development services",
      "hire JavaScript developer",
      "modern JavaScript ES2024",
      "vanilla JavaScript development",
      "JavaScript front-end development",
      "JavaScript DOM manipulation",
      "JavaScript async await promises",
      "JavaScript fetch API",
      "JavaScript ES modules",
      "TypeScript development",
      "JavaScript to TypeScript migration",
      "JavaScript performance optimization",
      "JavaScript bundling Vite webpack",
      "JavaScript unit testing Vitest Jest",
      "JavaScript ESLint Prettier",
      "JavaScript accessibility",
      "JavaScript browser compatibility",
      "JavaScript SPA development",
      "JavaScript REST API consumption",
      "full-stack JavaScript development",
      "JavaScript code review audit",
      "JavaScript legacy modernization",
      "JavaScript Web Components",
      "JavaScript progressive enhancement",
      "JavaScript prototype to production",
      "JavaScript development Coimbatore",
      "web developers India",
      "JavaScript engineers Coimbatore",
    ],
    eyebrow: "JAVASCRIPT ENGINEERING",
    h1: "JavaScript Development for Web Apps, Front Ends and APIs",
    heroSubhead:
      "We build in modern JavaScript and TypeScript across the stack — interactive front ends, Node.js APIs and full-stack apps — with linting, tests and a build pipeline so the code stays clean as it grows.",
    heroCtaLabel: "Talk to a JavaScript engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY JAVASCRIPT",
    introTitle: "The one language that runs everywhere your product does",
    introBody:
      "JavaScript is the only language that runs natively in every browser and, via Node.js, on the server too — so a single team can own the whole stack. Modern JavaScript (ES modules, async/await, optional chaining) is a genuinely pleasant language, and TypeScript adds the type safety that keeps a large codebase honest. We write it with ESLint, Prettier and a real test suite from day one.",
    introLinkLabel: "Read the JavaScript reference (MDN)",
    introLinkHref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Front end, API and build tooling in one team",
    supportBody:
      "One team for the browser code, the Node.js side, the bundler and lint config, the test suite, and the CI pipeline — so you're not stitching together work from separate front-end and back-end vendors.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the JavaScript blog",
      body: "Write-ups on async patterns, module systems, bundler configuration, performance budgets, and migrating a JavaScript codebase to TypeScript.",
      linkLabel: "Read the latest JavaScript posts",
      href: "https://v8.dev/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "JavaScript in production",
      body: "Interactive dashboards, marketing sites, web apps and internal tools built in modern JavaScript and running for real users.",
      linkLabel: "Browse the language proposals",
      href: "https://github.com/tc39/proposals",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "JavaScript Guide",
        body: "Types and coercion, scope and closures, the event loop, and the async model behind every real app.",
        linkLabel: "Read the guide",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      },
      {
        icon: "🛠️",
        title: "Tooling",
        body: "Vite, ESLint, Prettier and Vitest — the setup we use to keep a JavaScript codebase fast to work in and safe to change.",
        linkLabel: "Explore the tools",
        href: "https://vitejs.dev/guide/",
      },
      {
        icon: "📈",
        title: "TypeScript",
        body: "When and how to move a JavaScript project to TypeScript, and the config that catches the most bugs for the least friction.",
        linkLabel: "View the guide",
        href: "https://www.typescriptlang.org/docs/",
      },
    ],
    journey: {
      eyebrow: "YOUR JAVASCRIPT JOURNEY",
      title: "Learn the language, step by step",
      body: "Six reference topics we lean on when scoping a JavaScript project. Each opens the authoritative documentation.",
      items: [
        { label: "Asynchronous JavaScript: promises and async/await", href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
        { label: "ES modules and bundling", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
        { label: "The fetch API and working with HTTP", href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
        { label: "Adding types with TypeScript", href: "https://www.typescriptlang.org/docs/handbook/intro.html" },
        { label: "Testing with Vitest", href: "https://vitest.dev/guide/" },
        { label: "Linting and formatting with ESLint and Prettier", href: "https://eslint.org/docs/latest/use/getting-started" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Modern JavaScript Development Playbook",
      body: "Enter your work email and we'll send you our field guide to writing JavaScript that lasts — project structure, async patterns, tooling, testing, TypeScript adoption and a code-health checklist.",
      coverLabel: "Modern JavaScript Development Playbook",
      coverSub: "2025 Edition",
      fileName: "javascript-development-playbook.pdf",
      downloadPath: "/reports/javascript-development-playbook.pdf",
    },
    faqs: [
      {
        question: "Do you write plain JavaScript or always use a framework?",
        answer:
          "Both. A marketing site or a small widget is often better as vanilla JavaScript with progressive enhancement; a large app benefits from React or similar. We pick based on the product, not habit.",
        keywords: ["vanilla JavaScript development", "JavaScript progressive enhancement", "JavaScript framework choice"],
      },
      {
        question: "Should my project use TypeScript?",
        answer:
          "For anything more than a few hundred lines, yes — TypeScript catches type and shape errors before they reach users and makes future changes far safer. We can also migrate an existing JavaScript codebase incrementally.",
        keywords: ["TypeScript development", "JavaScript to TypeScript migration", "typed JavaScript"],
      },
      {
        question: "Can you fix or take over a messy JavaScript codebase?",
        answer:
          "Yes — a code audit first, then linting, a test safety net, module cleanup, dependency upgrades and incremental refactoring rather than a risky rewrite.",
        keywords: ["JavaScript legacy modernization", "JavaScript code review audit", "JavaScript refactoring"],
      },
      {
        question: "How do you keep JavaScript bundles small and fast?",
        answer:
          "Code splitting, tree shaking, lazy loading, sizing dependencies before adding them, and a performance budget enforced in CI.",
        keywords: ["JavaScript performance optimization", "JavaScript bundling Vite webpack", "JavaScript bundle size"],
      },
      {
        question: "Do you handle older browser support?",
        answer:
          "We target a browser matrix you define, use Browserslist to drive transpilation and polyfills, and test the real target browsers rather than assuming.",
        keywords: ["JavaScript browser compatibility", "JavaScript polyfills", "Browserslist"],
      },
      {
        question: "Do you write tests for JavaScript?",
        answer:
          "Unit tests with Vitest or Jest, DOM tests with Testing Library, and end-to-end tests with Playwright for the flows that matter — all run in CI on every push.",
        keywords: ["JavaScript unit testing Vitest Jest", "JavaScript Playwright testing", "JavaScript CI testing"],
      },
      {
        question: "Can you build interactive features without a heavy framework?",
        answer:
          "Yes — modern DOM APIs, Web Components and a small amount of well-structured JavaScript go a long way for forms, filters, charts and interactivity on an otherwise static site.",
        keywords: ["JavaScript DOM manipulation", "JavaScript Web Components", "JavaScript interactivity"],
      },
      {
        question: "Do you do full-stack JavaScript?",
        answer:
          "Yes — a JavaScript/TypeScript front end with a Node.js API, sharing validation and types across both sides so a change on one end doesn't silently break the other.",
        keywords: ["full-stack JavaScript development", "JavaScript Node.js backend", "shared types full stack"],
      },
      {
        question: "How do you keep code quality consistent across a team?",
        answer:
          "ESLint and Prettier enforced in CI, a documented style, code review on every change, and a shared component and utility library so patterns don't drift.",
        keywords: ["JavaScript ESLint Prettier", "JavaScript code quality", "JavaScript code review"],
      },
      {
        question: "Where is your JavaScript development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full project or a specific phase, with clients in India and internationally.",
        keywords: ["JavaScript development Coimbatore", "web developers India", "hire JavaScript developer India"],
      },
    ],
    media: {
      video: {
        label: "Watch: modern JavaScript basics",
        sub: "Async, modules and the fetch API in practice",
        href: "https://www.youtube.com/@mdndev/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Modern JavaScript Handbook",
        fileName: "modern-javascript-handbook.pdf",
        downloadPath: "/ebooks/modern-javascript-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Modern JavaScript Development Playbook 2025",
        fileName: "javascript-development-playbook.pdf",
        downloadPath: "/reports/javascript-development-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // HTML5 — semantic, accessible, SEO-ready markup
  // ==================================================================
  {
    slug: "html5",
    name: "HTML5",
    category: "Web Markup & Structure",
    metaTitle:
      "HTML5 Development Company | Semantic, Accessible, SEO-Ready Markup | NeuralArc",
    metaDescription:
      "NeuralArc builds websites and web apps on clean HTML5 in Coimbatore — semantic structure, accessibility, structured data, fast-loading pages and SEO-ready markup that search engines and screen readers both understand.",
    keywords: [
      "HTML5 development company",
      "HTML5 web development services",
      "semantic HTML markup",
      "HTML5 accessibility",
      "HTML5 SEO markup",
      "HTML5 structured data schema.org",
      "HTML5 forms and validation",
      "HTML5 canvas development",
      "HTML5 audio video",
      "HTML5 responsive markup",
      "HTML5 progressive web app",
      "HTML5 web components",
      "HTML5 ARIA roles",
      "HTML5 meta tags Open Graph",
      "HTML5 performance optimization",
      "HTML5 landing page development",
      "HTML5 email templates",
      "HTML5 to WordPress conversion",
      "PSD to HTML5",
      "Figma to HTML5",
      "HTML5 cross-browser compatibility",
      "HTML5 sitemap and canonical",
      "HTML5 microdata",
      "HTML5 static site",
      "HTML5 development Coimbatore",
      "web developers India",
      "front-end markup engineers",
      "HTML CSS developers Coimbatore",
    ],
    eyebrow: "HTML5 MARKUP ENGINEERING",
    h1: "HTML5 Development for Semantic, Accessible, SEO-Ready Pages",
    heroSubhead:
      "We build the foundation right — semantic HTML5 structure, accessible markup, structured data and clean meta tags — so pages load fast and both search engines and assistive technology understand them.",
    heroCtaLabel: "Talk to a front-end engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY HTML5 DONE RIGHT",
    introTitle: "The markup layer decides your SEO and accessibility ceiling",
    introBody:
      "A page built on div soup can be styled to look fine and still fail on SEO and accessibility. Semantic HTML5 — proper headings, landmarks, lists, forms and structured data — is what lets search engines index a page correctly and screen readers navigate it. We treat the markup as the foundation, not an afterthought, on every website we build.",
    introLinkLabel: "Read the HTML reference (MDN)",
    introLinkHref: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Structure, accessibility and SEO in one pass",
    supportBody:
      "One team for semantic structure, ARIA and keyboard support, meta and Open Graph tags, schema.org structured data, sitemap and canonical setup, and the performance work that keeps the page fast.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the web fundamentals blog",
      body: "Write-ups on semantic elements, forms and validation, structured data, Core Web Vitals and accessible markup patterns.",
      linkLabel: "Read the latest web platform posts",
      href: "https://web.dev/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "HTML5 in production",
      body: "Marketing sites, documentation, landing pages and app shells built on clean HTML5 that scores well on Lighthouse and ranks.",
      linkLabel: "Read the HTML living standard",
      href: "https://html.spec.whatwg.org/multipage/",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "HTML5 Guide",
        body: "Document structure, semantic elements, landmarks, and the difference correct markup makes to SEO and accessibility.",
        linkLabel: "Read the guide",
        href: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      {
        icon: "🛠️",
        title: "Structured Data",
        body: "schema.org types, JSON-LD, and how rich results are built from markup that search engines can parse.",
        linkLabel: "Explore structured data",
        href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      },
      {
        icon: "📈",
        title: "Accessibility",
        body: "The WCAG checklist applied to markup — headings, alt text, form labels, ARIA and keyboard order.",
        linkLabel: "View the guide",
        href: "https://www.w3.org/WAI/WCAG21/quickref/",
      },
    ],
    journey: {
      eyebrow: "YOUR HTML5 JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when building a site's markup layer. Each opens the authoritative documentation.",
      items: [
        { label: "Semantic HTML and document landmarks", href: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics" },
        { label: "Accessible forms and validation", href: "https://developer.mozilla.org/en-US/docs/Learn/Forms" },
        { label: "Structured data with JSON-LD", href: "https://json-ld.org/" },
        { label: "Meta tags and the Open Graph protocol", href: "https://ogp.me/" },
        { label: "The HTML content model", href: "https://html.spec.whatwg.org/multipage/dom.html#content-models" },
        { label: "Core Web Vitals and markup", href: "https://web.dev/articles/vitals" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Semantic HTML5 & SEO Markup Playbook",
      body: "Enter your work email and we'll send you our checklist for markup that ranks and is accessible — semantic structure, structured data, meta tags, headings, alt text and a pre-launch audit list.",
      coverLabel: "Semantic HTML5 & SEO Markup Playbook",
      coverSub: "2025 Edition",
      fileName: "html5-seo-markup-playbook.pdf",
      downloadPath: "/reports/html5-seo-markup-playbook.pdf",
    },
    faqs: [
      {
        question: "Why does semantic HTML matter if the page already looks right?",
        answer:
          "Looks are CSS. Semantics are what search engines index and what screen readers announce. A visually fine page built on generic divs can still rank poorly and be unusable with a keyboard.",
        keywords: ["semantic HTML markup", "HTML5 SEO markup", "HTML5 accessibility"],
      },
      {
        question: "Can you convert a design into HTML5?",
        answer:
          "Yes — Figma, XD or PSD to hand-written, responsive HTML5 and CSS, pixel-accurate but built on semantic structure rather than exported div soup.",
        keywords: ["Figma to HTML5", "PSD to HTML5", "design to HTML conversion"],
      },
      {
        question: "Do you add structured data for rich search results?",
        answer:
          "Yes — JSON-LD for organisation, breadcrumb, article, product, FAQ and event types where they apply, validated against Google's Rich Results Test.",
        keywords: ["HTML5 structured data schema.org", "JSON-LD", "rich results markup"],
      },
      {
        question: "Can you make an existing site's markup accessible?",
        answer:
          "Yes — an audit against WCAG, then fixing heading order, landmarks, form labels, alt text, focus order and ARIA, with assistive-technology testing.",
        keywords: ["HTML5 ARIA roles", "HTML5 accessibility", "WCAG remediation"],
      },
      {
        question: "Do you build HTML email templates?",
        answer:
          "Yes — table-based, inline-styled templates tested across the major clients (Outlook included), which is a genuinely different discipline from web HTML.",
        keywords: ["HTML5 email templates", "responsive email HTML", "Outlook email compatibility"],
      },
      {
        question: "How do you keep HTML pages fast?",
        answer:
          "Minimal DOM, deferred and async scripts, responsive images with srcset, critical CSS, and measuring against Core Web Vitals rather than guessing.",
        keywords: ["HTML5 performance optimization", "Core Web Vitals", "HTML5 responsive images"],
      },
      {
        question: "Can you build a fast static site with no framework?",
        answer:
          "Yes — hand-built or static-site-generator HTML5 for marketing sites and docs, which is often the fastest, cheapest and most durable option.",
        keywords: ["HTML5 static site", "static site development", "no-framework website"],
      },
      {
        question: "Do you set up meta tags, sitemap and canonical URLs?",
        answer:
          "Yes — title and description, Open Graph and Twitter cards, a valid XML sitemap, canonical tags and robots directives are part of every build.",
        keywords: ["HTML5 meta tags Open Graph", "HTML5 sitemap and canonical", "technical SEO markup"],
      },
      {
        question: "Do you test across browsers?",
        answer:
          "Yes — a defined browser matrix, real-device and BrowserStack checks, and graceful degradation for anything a target browser doesn't support.",
        keywords: ["HTML5 cross-browser compatibility", "browser testing", "progressive enhancement"],
      },
      {
        question: "Where is your front-end team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full site or a markup and accessibility pass, with clients in India and internationally.",
        keywords: ["HTML5 development Coimbatore", "web developers India", "HTML CSS developers Coimbatore"],
      },
    ],
    media: {
      video: {
        label: "Watch: semantic HTML5 in practice",
        sub: "Structure, landmarks and accessible forms",
        href: "https://www.youtube.com/@mdndev/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Semantic HTML5 Handbook",
        fileName: "semantic-html5-handbook.pdf",
        downloadPath: "/ebooks/semantic-html5-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Semantic HTML5 & SEO Markup Playbook 2025",
        fileName: "html5-seo-markup-playbook.pdf",
        downloadPath: "/reports/html5-seo-markup-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // CSS3 — responsive layout, design systems, animation
  // ==================================================================
  {
    slug: "css3",
    name: "CSS3",
    category: "Web Styling & Layout",
    metaTitle:
      "CSS3 Development Company | Responsive Layout, Design Systems & Animation | NeuralArc",
    metaDescription:
      "NeuralArc builds responsive, maintainable CSS3 in Coimbatore — Flexbox and Grid layouts, design tokens, dark mode, animation, and cross-browser styling that stays consistent as a product grows.",
    keywords: [
      "CSS3 development company",
      "CSS3 development services",
      "responsive CSS layout",
      "CSS Flexbox Grid",
      "CSS design system tokens",
      "CSS custom properties variables",
      "CSS dark mode theming",
      "CSS animations transitions",
      "CSS keyframe animation",
      "CSS container queries",
      "CSS clamp fluid typography",
      "CSS BEM methodology",
      "CSS modules",
      "CSS-in-JS",
      "SCSS Sass development",
      "CSS cross-browser compatibility",
      "CSS performance optimization",
      "CSS critical path",
      "CSS accessibility focus states",
      "CSS print stylesheet",
      "CSS RTL support",
      "pixel-perfect CSS from Figma",
      "CSS refactor and cleanup",
      "CSS responsive breakpoints",
      "CSS3 development Coimbatore",
      "front-end developers India",
      "UI styling engineers",
      "CSS layout specialists Coimbatore",
    ],
    eyebrow: "CSS3 STYLING ENGINEERING",
    h1: "CSS3 Development for Responsive, Maintainable Interfaces",
    heroSubhead:
      "We write CSS that scales — Flexbox and Grid layouts, design tokens, dark mode, animation and cross-browser consistency — structured so the hundredth screen is as easy to style as the first.",
    heroCtaLabel: "Talk to a front-end engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY CSS ARCHITECTURE MATTERS",
    introTitle: "Most CSS problems are structure problems, not styling problems",
    introBody:
      "CSS that grows without a system becomes the file nobody wants to touch — specificity wars, magic numbers, and a change in one place breaking three others. We build on custom properties for tokens, a clear layout strategy (Grid for page structure, Flexbox for components), and a naming convention, so the stylesheet stays predictable at scale.",
    introLinkLabel: "Read the CSS reference (MDN)",
    introLinkHref: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Tokens, layout and responsiveness together",
    supportBody:
      "One team for the design-token system, responsive layout, component styling, animation, dark and high-contrast modes, and the cross-browser and performance testing that keeps it solid.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the CSS blog",
      body: "Write-ups on Grid and Flexbox patterns, container queries, fluid typography, animation performance and taming specificity.",
      linkLabel: "Read the latest CSS posts",
      href: "https://web.dev/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "CSS in production",
      body: "Design systems, marketing sites and app UIs where the styling stays consistent and maintainable across hundreds of components.",
      linkLabel: "Learn CSS from the ground up",
      href: "https://web.dev/learn/css",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "CSS3 Guide",
        body: "The box model, cascade and specificity, custom properties, and the layout tools behind a maintainable stylesheet.",
        linkLabel: "Read the guide",
        href: "https://web.dev/learn/css",
      },
      {
        icon: "🛠️",
        title: "Layout Tools",
        body: "CSS Grid, Flexbox and container queries — when to use each and how they combine for real page structure.",
        linkLabel: "Explore layout",
        href: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      },
      {
        icon: "📈",
        title: "Design Tokens",
        body: "Custom properties for colour, spacing, type and radius, and how they power theming and dark mode.",
        linkLabel: "View the guide",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
      },
    ],
    journey: {
      eyebrow: "YOUR CSS3 JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when building a styling system. Each opens the authoritative documentation.",
      items: [
        { label: "CSS Grid for page layout", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" },
        { label: "Flexbox for components", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" },
        { label: "Custom properties and theming", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
        { label: "Container queries", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries" },
        { label: "Fluid type and spacing with clamp()", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" },
        { label: "Accessible focus and motion", href: "https://web.dev/articles/prefers-reduced-motion" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Scalable CSS Architecture Playbook",
      body: "Enter your work email and we'll send you our guide to CSS that lasts — tokens, layout strategy, naming, responsive rules, dark mode, animation performance and a stylesheet-health checklist.",
      coverLabel: "Scalable CSS Architecture Playbook",
      coverSub: "2025 Edition",
      fileName: "css-architecture-playbook.pdf",
      downloadPath: "/reports/css-architecture-playbook.pdf",
    },
    faqs: [
      {
        question: "How do you keep a large CSS codebase maintainable?",
        answer:
          "Design tokens as custom properties, a single layout strategy, a naming convention (BEM or CSS Modules), low specificity, and no magic numbers — so a change is predictable rather than risky.",
        keywords: ["CSS design system tokens", "CSS BEM methodology", "CSS modules", "scalable CSS"],
      },
      {
        question: "Do you use Sass, CSS Modules or plain CSS?",
        answer:
          "Modern CSS with custom properties covers most needs now. We add Sass for build-time features or CSS Modules for scoped component styles when the project calls for it.",
        keywords: ["SCSS Sass development", "CSS modules", "CSS custom properties variables"],
      },
      {
        question: "Can you make an existing site fully responsive?",
        answer:
          "Yes — a mobile-first rebuild of the layout with Grid and Flexbox, fluid type with clamp(), and container queries so components adapt to their space, not just the viewport.",
        keywords: ["responsive CSS layout", "CSS responsive breakpoints", "CSS container queries"],
      },
      {
        question: "Do you build dark mode and theming?",
        answer:
          "Yes — a token layer with light and dark values, respecting the OS preference and offering a manual toggle, applied consistently across every component.",
        keywords: ["CSS dark mode theming", "CSS custom properties", "prefers-color-scheme"],
      },
      {
        question: "Can you add animation without hurting performance?",
        answer:
          "Yes — transitions and keyframe animation on transform and opacity only, respecting prefers-reduced-motion, and profiling to avoid layout thrash.",
        keywords: ["CSS animations transitions", "CSS keyframe animation", "CSS animation performance"],
      },
      {
        question: "How pixel-accurate is your work against a design?",
        answer:
          "Close — we build to the Figma spec with the same tokens the designer used, and review side by side. Exact spacing, type and colour come from shared variables, not eyeballing.",
        keywords: ["pixel-perfect CSS from Figma", "Figma to CSS", "design accuracy"],
      },
      {
        question: "Do you handle right-to-left languages?",
        answer:
          "Yes — logical properties (margin-inline, padding-block) and dir-aware layout so the same stylesheet works for LTR and RTL without a fork.",
        keywords: ["CSS RTL support", "CSS logical properties", "bidirectional CSS"],
      },
      {
        question: "Can you clean up a CSS codebase that's out of control?",
        answer:
          "Yes — an audit for unused rules and specificity hotspots, then a token layer, a layout refactor and incremental cleanup with visual regression tests.",
        keywords: ["CSS refactor and cleanup", "CSS audit", "CSS specificity"],
      },
      {
        question: "Do you optimise CSS delivery?",
        answer:
          "Critical CSS inlined, the rest deferred, unused rules removed at build time, and the total kept within a performance budget checked in CI.",
        keywords: ["CSS performance optimization", "CSS critical path", "CSS bundle size"],
      },
      {
        question: "Where is your CSS and front-end team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full UI build or a styling and responsiveness pass, with clients in India and internationally.",
        keywords: ["CSS3 development Coimbatore", "front-end developers India", "UI styling engineers"],
      },
    ],
    media: {
      video: {
        label: "Watch: modern CSS layout",
        sub: "Grid, Flexbox and container queries in practice",
        href: "https://www.youtube.com/@GoogleChromeDevelopers/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Scalable CSS Handbook",
        fileName: "scalable-css-handbook.pdf",
        downloadPath: "/ebooks/scalable-css-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Scalable CSS Architecture Playbook 2025",
        fileName: "css-architecture-playbook.pdf",
        downloadPath: "/reports/css-architecture-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Bootstrap — fast, consistent responsive UIs
  // ==================================================================
  {
    slug: "bootstrap",
    name: "Bootstrap",
    category: "UI Framework",
    metaTitle:
      "Bootstrap Development Company | Responsive Websites & Admin Dashboards | NeuralArc",
    metaDescription:
      "NeuralArc builds responsive websites, admin dashboards and web apps with Bootstrap 5 in Coimbatore — custom themes, reusable components, accessibility and a fast path from design to a working, consistent UI.",
    keywords: [
      "Bootstrap development company",
      "Bootstrap 5 development",
      "hire Bootstrap developer",
      "Bootstrap responsive website",
      "Bootstrap admin dashboard",
      "Bootstrap custom theme",
      "Bootstrap Sass customization",
      "Bootstrap grid system",
      "Bootstrap components",
      "Bootstrap utility classes",
      "Bootstrap form layouts",
      "Bootstrap accessibility",
      "Bootstrap RTL support",
      "Bootstrap dark mode",
      "Bootstrap to React migration",
      "Bootstrap landing page",
      "Bootstrap dashboard template customization",
      "Bootstrap cross-browser",
      "Bootstrap performance tree-shaking",
      "Bootstrap 4 to 5 upgrade",
      "PSD to Bootstrap",
      "Figma to Bootstrap",
      "Bootstrap WordPress theme",
      "Bootstrap prototype",
      "Bootstrap development Coimbatore",
      "front-end developers India",
      "responsive UI developers",
      "Bootstrap experts Coimbatore",
    ],
    eyebrow: "BOOTSTRAP UI ENGINEERING",
    h1: "Bootstrap Development for Fast, Consistent Responsive UIs",
    heroSubhead:
      "We build responsive websites, admin panels and web apps on Bootstrap 5 — customised through Sass rather than overridden with hacks, so the UI is consistent, accessible and quick to extend.",
    heroCtaLabel: "Talk to a front-end engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY BOOTSTRAP",
    introTitle: "A proven component set when speed and consistency matter",
    introBody:
      "Bootstrap gives you a battle-tested grid, an accessible component library and a utility system out of the box — which makes it a strong choice for admin dashboards, internal tools and content sites where a custom design system would be overkill. We customise it properly through Sass variables and maps, so it looks like your brand, not a default template.",
    introLinkLabel: "Read the Bootstrap documentation",
    introLinkHref: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Theme, components and integration together",
    supportBody:
      "One team for the Sass theme, custom components, form and table layouts, accessibility, dark mode and RTL, and wiring the UI into your back end or CMS.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Bootstrap blog",
      body: "Write-ups on Sass customisation, the utility API, migrating from Bootstrap 4, RTL and dark mode, and trimming unused CSS.",
      linkLabel: "Read the latest Bootstrap posts",
      href: "https://blog.getbootstrap.com/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Bootstrap in production",
      body: "Admin dashboards, booking systems, content sites and internal tools built on a customised Bootstrap and shipping to real users.",
      linkLabel: "Browse Bootstrap examples",
      href: "https://getbootstrap.com/docs/5.3/examples/",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Bootstrap Guide",
        body: "The grid, breakpoints, components and utility API — and how they fit together for a real layout.",
        linkLabel: "Read the guide",
        href: "https://getbootstrap.com/docs/5.3/layout/grid/",
      },
      {
        icon: "🛠️",
        title: "Theming with Sass",
        body: "Customising Bootstrap through variables and maps so it matches your brand without fragile overrides.",
        linkLabel: "Explore theming",
        href: "https://getbootstrap.com/docs/5.3/customize/sass/",
      },
      {
        icon: "📈",
        title: "Optimisation",
        body: "Importing only the components you use and purging unused CSS so the bundle stays lean.",
        linkLabel: "View the guide",
        href: "https://getbootstrap.com/docs/5.3/customize/optimize/",
      },
    ],
    journey: {
      eyebrow: "YOUR BOOTSTRAP JOURNEY",
      title: "Learn the framework, step by step",
      body: "Six reference topics we lean on when building on Bootstrap. Each opens the authoritative documentation.",
      items: [
        { label: "The Bootstrap grid and breakpoints", href: "https://getbootstrap.com/docs/5.3/layout/breakpoints/" },
        { label: "Customising with Sass variables", href: "https://getbootstrap.com/docs/5.3/customize/sass/" },
        { label: "The utility API", href: "https://getbootstrap.com/docs/5.3/utilities/api/" },
        { label: "Accessible components", href: "https://getbootstrap.com/docs/5.3/getting-started/accessibility/" },
        { label: "Color modes (dark mode)", href: "https://getbootstrap.com/docs/5.3/customize/color-modes/" },
        { label: "RTL support", href: "https://getbootstrap.com/docs/5.3/getting-started/rtl/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Bootstrap Customisation Playbook",
      body: "Enter your work email and we'll send you our guide to using Bootstrap well — Sass theming, the utility API, accessibility, dark mode, RTL, and trimming the bundle for production.",
      coverLabel: "Bootstrap Customisation Playbook",
      coverSub: "2025 Edition",
      fileName: "bootstrap-customisation-playbook.pdf",
      downloadPath: "/reports/bootstrap-customisation-playbook.pdf",
    },
    faqs: [
      {
        question: "Will a Bootstrap site look like a template?",
        answer:
          "Not if it's done right. We customise Bootstrap through its Sass variables and maps — colours, spacing, type, radius, shadows — so it carries your brand while keeping Bootstrap's accessible, tested internals.",
        keywords: ["Bootstrap custom theme", "Bootstrap Sass customization", "Bootstrap branding"],
      },
      {
        question: "When is Bootstrap the right choice over Tailwind or a custom system?",
        answer:
          "Bootstrap fits admin dashboards, internal tools and content sites where a ready component library saves real time. Tailwind or a custom system fits products with a distinctive design that will evolve heavily.",
        keywords: ["Bootstrap vs Tailwind", "Bootstrap admin dashboard", "UI framework choice"],
      },
      {
        question: "Can you build a custom admin dashboard on Bootstrap?",
        answer:
          "Yes — layout, navigation, data tables, forms, charts and role-based views, either from scratch or by customising a licensed admin template properly rather than fighting it.",
        keywords: ["Bootstrap admin dashboard", "Bootstrap dashboard template customization", "admin panel development"],
      },
      {
        question: "Can you upgrade a Bootstrap 4 site to 5?",
        answer:
          "Yes — replacing jQuery-dependent components, updating renamed utilities and markup, and testing each page, done incrementally rather than in one risky sweep.",
        keywords: ["Bootstrap 4 to 5 upgrade", "Bootstrap migration", "Bootstrap version upgrade"],
      },
      {
        question: "Is a Bootstrap site accessible?",
        answer:
          "Bootstrap's components ship with sensible ARIA and keyboard support; we make sure that's preserved through customisation and add what's missing for your specific content.",
        keywords: ["Bootstrap accessibility", "accessible Bootstrap components", "WCAG Bootstrap"],
      },
      {
        question: "Can you keep the CSS bundle small?",
        answer:
          "Yes — importing only the Sass partials for components you use and purging unused classes at build time, so you're not shipping the whole framework.",
        keywords: ["Bootstrap performance tree-shaking", "Bootstrap optimize CSS", "Bootstrap bundle size"],
      },
      {
        question: "Can you convert a design to a Bootstrap build?",
        answer:
          "Yes — Figma or PSD to a responsive Bootstrap layout, mapping the design's spacing and type scale onto Bootstrap's system so it stays consistent.",
        keywords: ["Figma to Bootstrap", "PSD to Bootstrap", "design to Bootstrap"],
      },
      {
        question: "Can you use Bootstrap inside a React or WordPress project?",
        answer:
          "Yes — React-Bootstrap or the plain framework with React, and a custom Bootstrap-based WordPress theme where the CMS is the right fit.",
        keywords: ["Bootstrap to React migration", "React-Bootstrap", "Bootstrap WordPress theme"],
      },
      {
        question: "Do you support dark mode and RTL?",
        answer:
          "Yes — Bootstrap 5.3's colour modes for dark mode and its RTL build for right-to-left languages, both set up and tested.",
        keywords: ["Bootstrap dark mode", "Bootstrap RTL support", "Bootstrap color modes"],
      },
      {
        question: "Where is your Bootstrap development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full build or a theming and cleanup pass, with clients in India and internationally.",
        keywords: ["Bootstrap development Coimbatore", "front-end developers India", "hire Bootstrap developer India"],
      },
    ],
    media: {
      video: {
        label: "Watch: Bootstrap 5 in practice",
        sub: "Grid, components and Sass theming",
        href: "https://www.youtube.com/results?search_query=bootstrap+5+tutorial",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Bootstrap Customisation Handbook",
        fileName: "bootstrap-customisation-handbook.pdf",
        downloadPath: "/ebooks/bootstrap-customisation-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Bootstrap Customisation Playbook 2025",
        fileName: "bootstrap-customisation-playbook.pdf",
        downloadPath: "/reports/bootstrap-customisation-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Tailwind CSS — utility-first UI, custom design systems
  // ==================================================================
  {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    category: "Utility-First CSS",
    metaTitle:
      "Tailwind CSS Development Company | Custom Design Systems & Fast UI Builds | NeuralArc",
    metaDescription:
      "NeuralArc builds product UIs with Tailwind CSS in Coimbatore — utility-first components, a tokenised design system, dark mode, responsive layouts and a fast path from Figma to a maintainable front end.",
    keywords: [
      "Tailwind CSS development company",
      "Tailwind CSS development services",
      "hire Tailwind CSS developer",
      "Tailwind design system",
      "Tailwind component library",
      "Tailwind config theme tokens",
      "Tailwind dark mode",
      "Tailwind responsive design",
      "Tailwind with React",
      "Tailwind with Next.js",
      "Tailwind with Vue",
      "Tailwind CSS custom plugin",
      "Figma to Tailwind",
      "Tailwind CSS migration",
      "Bootstrap to Tailwind migration",
      "Tailwind CSS performance purge",
      "Tailwind CSS accessibility",
      "Tailwind CSS landing page",
      "Tailwind CSS admin dashboard",
      "Tailwind CSS marketing site",
      "Tailwind CSS animations",
      "Tailwind CSS RTL",
      "Tailwind CSS v4",
      "headless UI Tailwind",
      "Tailwind CSS development Coimbatore",
      "front-end developers India",
      "UI engineers India",
      "Tailwind experts Coimbatore",
    ],
    eyebrow: "TAILWIND CSS UI ENGINEERING",
    h1: "Tailwind CSS Development for Custom, Maintainable Product UIs",
    heroSubhead:
      "We build front ends with Tailwind CSS — a tokenised theme, reusable components, dark mode and responsive layouts — so the styling lives with the markup and stays consistent without a growing stylesheet.",
    heroCtaLabel: "Talk to a front-end engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY TAILWIND CSS",
    introTitle: "A design system in your config, not a stylesheet to maintain",
    introBody:
      "Tailwind moves styling into the markup as utility classes, driven by a central config that holds your colour, spacing and type tokens. In practice that means no separate CSS file drifting out of sync, no dead styles, and a design system every developer applies the same way. We pair it with a component layer (React, Vue or plain templates) so common patterns aren't repeated by hand.",
    introLinkLabel: "Read the Tailwind CSS documentation",
    introLinkHref: "https://tailwindcss.com/docs",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Theme config, components and integration together",
    supportBody:
      "One team for the Tailwind config and token system, the component library, dark mode and responsive rules, custom plugins where needed, and integration into your React, Vue or CMS front end.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Tailwind CSS blog",
      body: "Write-ups on config-driven theming, the v4 engine, component extraction, dark mode, and migrating a project to Tailwind.",
      linkLabel: "Read the latest Tailwind posts",
      href: "https://tailwindcss.com/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Tailwind CSS in production",
      body: "SaaS UIs, marketing sites, dashboards and design systems built with Tailwind and staying consistent as they grow.",
      linkLabel: "Browse Tailwind UI patterns",
      href: "https://tailwindcss.com/showcase",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Tailwind Guide",
        body: "Utility-first thinking, responsive and state variants, and the config that turns Tailwind into your design system.",
        linkLabel: "Read the guide",
        href: "https://tailwindcss.com/docs/styling-with-utility-classes",
      },
      {
        icon: "🛠️",
        title: "Theme & Config",
        body: "Colour, spacing, type and breakpoint tokens in the config, plus custom plugins for repeated patterns.",
        linkLabel: "Explore theming",
        href: "https://tailwindcss.com/docs/theme",
      },
      {
        icon: "📈",
        title: "Components",
        body: "Extracting repeated utility groups into components with Headless UI or your own primitives.",
        linkLabel: "View the approach",
        href: "https://headlessui.com/",
      },
    ],
    journey: {
      eyebrow: "YOUR TAILWIND CSS JOURNEY",
      title: "Learn the framework, step by step",
      body: "Six reference topics we lean on when building on Tailwind. Each opens the authoritative documentation.",
      items: [
        { label: "Utility-first fundamentals", href: "https://tailwindcss.com/docs/styling-with-utility-classes" },
        { label: "Responsive design with variants", href: "https://tailwindcss.com/docs/responsive-design" },
        { label: "Theming through the config", href: "https://tailwindcss.com/docs/theme" },
        { label: "Dark mode", href: "https://tailwindcss.com/docs/dark-mode" },
        { label: "Writing a custom plugin", href: "https://tailwindcss.com/docs/plugins" },
        { label: "Accessible components with Headless UI", href: "https://headlessui.com/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Tailwind CSS Design System Playbook",
      body: "Enter your work email and we'll send you our guide to building on Tailwind well — token config, component strategy, dark mode, responsive rules, migration and a maintainability checklist.",
      coverLabel: "Tailwind CSS Design System Playbook",
      coverSub: "2025 Edition",
      fileName: "tailwind-css-design-system-playbook.pdf",
      downloadPath: "/reports/tailwind-css-design-system-playbook.pdf",
    },
    faqs: [
      {
        question: "Doesn't utility-first make the markup messy?",
        answer:
          "It looks unusual at first, but repeated patterns get extracted into components, so you write the utilities once. The payoff is no separate stylesheet drifting out of sync and no dead CSS.",
        keywords: ["Tailwind utility-first", "Tailwind component library", "Tailwind maintainability"],
      },
      {
        question: "How is Tailwind a design system?",
        answer:
          "The config file holds your colour, spacing, type and breakpoint scales. Every developer styles from those tokens, so spacing and colour stay consistent by default rather than by discipline.",
        keywords: ["Tailwind design system", "Tailwind config theme tokens", "Tailwind design tokens"],
      },
      {
        question: "Can you migrate an existing site to Tailwind?",
        answer:
          "Yes — from Bootstrap, plain CSS or Sass, done page by page with visual checks, mapping the old design values into the Tailwind config first.",
        keywords: ["Tailwind CSS migration", "Bootstrap to Tailwind migration", "CSS to Tailwind"],
      },
      {
        question: "Does Tailwind work with React, Vue and Next.js?",
        answer:
          "Yes — it's framework-agnostic and pairs especially well with component frameworks, which is where the utility repetition problem disappears.",
        keywords: ["Tailwind with React", "Tailwind with Next.js", "Tailwind with Vue"],
      },
      {
        question: "Is the CSS bundle actually small?",
        answer:
          "Yes — Tailwind only emits the classes you use, so a real project ships a few kilobytes of CSS regardless of how many utilities the framework offers.",
        keywords: ["Tailwind CSS performance purge", "Tailwind bundle size", "Tailwind CSS output size"],
      },
      {
        question: "Can you build accessible components with Tailwind?",
        answer:
          "Yes — Tailwind is styling only, so we pair it with Headless UI or Radix for the interaction and ARIA logic, and test with a keyboard and screen reader.",
        keywords: ["Tailwind CSS accessibility", "headless UI Tailwind", "accessible Tailwind components"],
      },
      {
        question: "Can you turn a Figma design into a Tailwind front end?",
        answer:
          "Yes — we map the Figma tokens into the Tailwind config, then build the components against it, so the code and the design share one source of truth.",
        keywords: ["Figma to Tailwind", "design to Tailwind", "Figma tokens Tailwind"],
      },
      {
        question: "Do you support dark mode and RTL?",
        answer:
          "Yes — the dark variant driven by OS preference or a toggle, and logical utilities plus dir handling for right-to-left languages.",
        keywords: ["Tailwind dark mode", "Tailwind CSS RTL", "Tailwind theming"],
      },
      {
        question: "Are you working with Tailwind v4?",
        answer:
          "Yes — the v4 engine with CSS-first configuration and the faster build. We also maintain v3 projects and can plan an upgrade.",
        keywords: ["Tailwind CSS v4", "Tailwind v4 upgrade", "Tailwind CSS engine"],
      },
      {
        question: "Where is your Tailwind CSS development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full front end or a design-system and migration pass, with clients in India and internationally.",
        keywords: ["Tailwind CSS development Coimbatore", "front-end developers India", "hire Tailwind developer India"],
      },
    ],
    media: {
      video: {
        label: "Watch: Tailwind CSS in practice",
        sub: "Utility-first components and config-driven theming",
        href: "https://www.youtube.com/@TailwindLabs/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Tailwind CSS Design System Handbook",
        fileName: "tailwind-css-design-system-handbook.pdf",
        downloadPath: "/ebooks/tailwind-css-design-system-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Tailwind CSS Design System Playbook 2025",
        fileName: "tailwind-css-design-system-playbook.pdf",
        downloadPath: "/reports/tailwind-css-design-system-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // WordPress — CMS sites, custom themes and plugins, WooCommerce
  // ==================================================================
  {
    slug: "wordpress",
    name: "WordPress",
    category: "CMS & Content Sites",
    metaTitle:
      "WordPress Development Company | Custom Themes, Plugins & WooCommerce | NeuralArc",
    metaDescription:
      "NeuralArc is a WordPress development company in Coimbatore. We build custom themes and plugins, WooCommerce stores, headless WordPress front ends, and fast, secure, SEO-ready sites — plus maintenance and speed optimisation.",
    keywords: [
      "WordPress development company",
      "WordPress development services",
      "hire WordPress developer",
      "custom WordPress theme development",
      "custom WordPress plugin development",
      "WooCommerce development",
      "WordPress headless CMS",
      "WordPress REST API",
      "WordPress ACF custom fields",
      "WordPress Gutenberg blocks",
      "WordPress page speed optimization",
      "WordPress security hardening",
      "WordPress malware removal",
      "WordPress migration",
      "WordPress multisite",
      "WordPress SEO setup",
      "WordPress Elementor development",
      "WordPress maintenance support",
      "WordPress performance Core Web Vitals",
      "WordPress membership site",
      "WordPress LMS LearnDash",
      "WordPress multilingual WPML",
      "PSD to WordPress",
      "Figma to WordPress",
      "WordPress development Coimbatore",
      "WordPress developers India",
      "WooCommerce experts India",
      "WordPress agency Coimbatore",
    ],
    eyebrow: "WORDPRESS ENGINEERING",
    h1: "WordPress Development for Content Sites, Stores and Headless Front Ends",
    heroSubhead:
      "We build WordPress the way it should be — custom themes and plugins, WooCommerce, clean editor experiences and headless front ends — fast, secure and SEO-ready, with maintenance to keep it that way.",
    heroCtaLabel: "Talk to a WordPress engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY WORDPRESS",
    introTitle: "The right tool when a non-technical team owns the content",
    introBody:
      "WordPress still powers a huge share of the web because it does one thing well: it lets a marketing or editorial team publish and update content without a developer. We build custom themes (or block themes) and only the plugins a site actually needs, keep the editor experience clean, and either serve WordPress directly or use it headless behind a React front end.",
    introLinkLabel: "Read the WordPress developer docs",
    introLinkHref: "https://developer.wordpress.org/",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Theme, plugins, hosting and maintenance together",
    supportBody:
      "One team for the custom theme, only the plugins you need, WooCommerce or membership setup, performance and security hardening, SEO configuration, and an ongoing maintenance plan for updates and backups.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the WordPress blog",
      body: "Write-ups on block theme development, the REST API, ACF-driven layouts, Core Web Vitals, security hardening and headless WordPress.",
      linkLabel: "Read the latest WordPress news",
      href: "https://wordpress.org/news/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "WordPress in production",
      body: "Content sites, WooCommerce stores, membership platforms and headless front ends built on WordPress and maintained long-term.",
      linkLabel: "Browse WordPress showcase sites",
      href: "https://wordpress.org/showcase/",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "WordPress Guide",
        body: "Themes vs block themes, the template hierarchy, hooks and filters, and how a custom site is actually structured.",
        linkLabel: "Read the guide",
        href: "https://developer.wordpress.org/themes/",
      },
      {
        icon: "🛠️",
        title: "Blocks & Fields",
        body: "Gutenberg block development and ACF for editor-friendly, structured content that isn't a page-builder mess.",
        linkLabel: "Explore the tools",
        href: "https://developer.wordpress.org/block-editor/",
      },
      {
        icon: "📈",
        title: "Performance & Security",
        body: "Caching, image handling, database health, and the hardening steps that keep a WordPress site out of trouble.",
        linkLabel: "View the guide",
        href: "https://developer.wordpress.org/advanced-administration/security/hardening/",
      },
    ],
    journey: {
      eyebrow: "YOUR WORDPRESS JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when building a WordPress site. Each opens the authoritative documentation.",
      items: [
        { label: "The template hierarchy", href: "https://developer.wordpress.org/themes/basics/template-hierarchy/" },
        { label: "Block (FSE) theme development", href: "https://developer.wordpress.org/block-editor/how-to-guides/themes/" },
        { label: "The WordPress REST API", href: "https://developer.wordpress.org/rest-api/" },
        { label: "Custom post types and taxonomies", href: "https://developer.wordpress.org/plugins/post-types/" },
        { label: "WooCommerce development", href: "https://developer.woocommerce.com/docs/" },
        { label: "Security hardening", href: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the WordPress Build & Maintenance Playbook",
      body: "Enter your work email and we'll send you our guide to a WordPress site that lasts — theme structure, plugin discipline, WooCommerce, performance, security, SEO and a maintenance checklist.",
      coverLabel: "WordPress Build & Maintenance Playbook",
      coverSub: "2025 Edition",
      fileName: "wordpress-build-maintenance-playbook.pdf",
      downloadPath: "/reports/wordpress-build-maintenance-playbook.pdf",
    },
    faqs: [
      {
        question: "Do you build custom themes or use page builders?",
        answer:
          "We build custom themes or block themes for anything that needs to perform and last. Page builders like Elementor are fine for simple sites, but they add weight and lock-in that we avoid on serious projects.",
        keywords: ["custom WordPress theme development", "WordPress Elementor development", "WordPress block theme"],
      },
      {
        question: "Can you build a WooCommerce store?",
        answer:
          "Yes — product setup, custom checkout, payment and shipping integration for India and abroad, subscriptions, and the performance work an online store specifically needs.",
        keywords: ["WooCommerce development", "WordPress online store", "WooCommerce payment integration"],
      },
      {
        question: "Can WordPress be used headless with a React front end?",
        answer:
          "Yes — WordPress as the editor and content store, exposed through the REST API or GraphQL, with a React or Next.js front end for speed and a custom UX.",
        keywords: ["WordPress headless CMS", "WordPress REST API", "headless WordPress React"],
      },
      {
        question: "My WordPress site is slow — can you fix it?",
        answer:
          "Yes — a performance audit, then caching, image optimisation, database cleanup, removing heavy plugins, and tuning until it passes Core Web Vitals.",
        keywords: ["WordPress page speed optimization", "WordPress performance Core Web Vitals", "slow WordPress fix"],
      },
      {
        question: "Can you clean up a hacked or malware-infected site?",
        answer:
          "Yes — malware removal, closing the entry point, restoring from a clean state, updating everything, and hardening so it doesn't recur.",
        keywords: ["WordPress malware removal", "WordPress security hardening", "hacked WordPress recovery"],
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes — core, theme and plugin updates on a schedule, off-site backups, uptime and security monitoring, and a support channel for content and small changes.",
        keywords: ["WordPress maintenance support", "WordPress care plan", "WordPress updates and backups"],
      },
      {
        question: "Can you build a membership site or an LMS?",
        answer:
          "Yes — gated content and membership tiers, or a full course platform on LearnDash or LifterLMS with progress tracking and payments.",
        keywords: ["WordPress membership site", "WordPress LMS LearnDash", "WordPress course platform"],
      },
      {
        question: "Can you make a WordPress site multilingual?",
        answer:
          "Yes — WPML or Polylang for translated content, with hreflang tags and a language switcher set up correctly for SEO.",
        keywords: ["WordPress multilingual WPML", "WordPress Polylang", "multilingual WordPress SEO"],
      },
      {
        question: "Can you migrate a site to WordPress or to new hosting?",
        answer:
          "Yes — from another CMS, static HTML or a page builder, or a host-to-host move with no downtime and URLs preserved.",
        keywords: ["WordPress migration", "CMS to WordPress migration", "WordPress hosting migration"],
      },
      {
        question: "Where is your WordPress development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full build or maintenance, with clients in India and internationally.",
        keywords: ["WordPress development Coimbatore", "WordPress developers India", "WordPress agency Coimbatore"],
      },
    ],
    media: {
      video: {
        label: "Watch: WordPress development basics",
        sub: "Themes, blocks and the template hierarchy",
        href: "https://www.youtube.com/@WordPress/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The WordPress Development Handbook",
        fileName: "wordpress-development-handbook.pdf",
        downloadPath: "/ebooks/wordpress-development-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "WordPress Build & Maintenance Playbook 2025",
        fileName: "wordpress-build-maintenance-playbook.pdf",
        downloadPath: "/reports/wordpress-build-maintenance-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Express.js — minimal, fast Node.js web framework
  // ==================================================================
  {
    slug: "express-js",
    name: "Express.js",
    category: "Node.js Web Framework",
    metaTitle:
      "Express.js Development Company | REST APIs & Node.js Backends | NeuralArc",
    metaDescription:
      "NeuralArc builds Express.js backends in Coimbatore — REST APIs, middleware pipelines, authentication, database integration, file handling and third-party integrations, with tests and a deploy pipeline for production.",
    keywords: [
      "Express.js development company",
      "Express.js development services",
      "hire Express.js developer",
      "Express REST API development",
      "Express middleware development",
      "Express JWT authentication",
      "Express with MongoDB",
      "Express with PostgreSQL",
      "Express with MySQL Sequelize",
      "Express file upload Multer",
      "Express rate limiting",
      "Express error handling",
      "Express API validation",
      "Express Swagger OpenAPI docs",
      "Express CORS setup",
      "Express session management",
      "Express WebSocket integration",
      "Express microservice",
      "Express Docker deployment",
      "Express performance tuning",
      "Express API testing Supertest",
      "Express TypeScript",
      "Express to NestJS migration",
      "Express payment gateway integration",
      "Express.js development Coimbatore",
      "Node.js backend developers India",
      "REST API developers Coimbatore",
      "Express API engineers",
    ],
    eyebrow: "EXPRESS.JS BACKEND ENGINEERING",
    h1: "Express.js Development for Clean, Well-Tested REST APIs",
    heroSubhead:
      "We build Express.js backends — routed REST APIs, a sensible middleware pipeline, authentication, database integration and third-party connections — with validation, tests and a deploy pipeline that makes them production-ready.",
    heroCtaLabel: "Talk to a backend engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY EXPRESS.JS",
    introTitle: "Minimal by design, which is exactly why it lasts",
    introBody:
      "Express does routing and middleware and gets out of the way. That minimalism is a feature: there's no framework magic to fight, the whole request lifecycle is visible, and you add only the pieces you need. We give an Express codebase the structure it doesn't enforce on its own — layered folders, centralised error handling, request validation and typed contracts — so it stays clean as it grows.",
    introLinkLabel: "Read the Express.js documentation",
    introLinkHref: "https://expressjs.com/en/starter/installing.html",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Routes, data layer and deployment together",
    supportBody:
      "One team for API and route design, the database layer, auth and middleware, request validation, API documentation, and the Docker and CI setup that ships it to your cloud.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Express.js blog",
      body: "Write-ups on middleware order, centralised error handling, validation strategy, structuring a growing Express app, and moving to NestJS when it's time.",
      linkLabel: "Read the latest Express updates",
      href: "https://expressjs.com/en/changelog/4x.html",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Express.js in production",
      body: "APIs powering web and mobile apps, integration services and internal tools, built on Express and running for real traffic.",
      linkLabel: "Browse the Express resources",
      href: "https://expressjs.com/en/resources/frameworks.html",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Express Guide",
        body: "Routing, middleware, the request/response cycle, and the structure a real Express app needs.",
        linkLabel: "Read the guide",
        href: "https://expressjs.com/en/guide/routing.html",
      },
      {
        icon: "🛠️",
        title: "Middleware & Security",
        body: "Helmet, CORS, rate limiting, body parsing and validation — the middleware layer every API needs.",
        linkLabel: "Explore middleware",
        href: "https://expressjs.com/en/advanced/best-practice-security.html",
      },
      {
        icon: "📈",
        title: "Performance",
        body: "Compression, connection pooling, async error handling and the production checklist for an Express app.",
        linkLabel: "View the guide",
        href: "https://expressjs.com/en/advanced/best-practice-performance.html",
      },
    ],
    journey: {
      eyebrow: "YOUR EXPRESS.JS JOURNEY",
      title: "Learn the framework, step by step",
      body: "Six reference topics we lean on when building on Express. Each opens the authoritative documentation.",
      items: [
        { label: "Routing and route parameters", href: "https://expressjs.com/en/guide/routing.html" },
        { label: "Writing and ordering middleware", href: "https://expressjs.com/en/guide/using-middleware.html" },
        { label: "Centralised error handling", href: "https://expressjs.com/en/guide/error-handling.html" },
        { label: "Security best practices", href: "https://expressjs.com/en/advanced/best-practice-security.html" },
        { label: "Performance best practices", href: "https://expressjs.com/en/advanced/best-practice-performance.html" },
        { label: "Serving in production behind a proxy", href: "https://expressjs.com/en/guide/behind-proxies.html" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Express.js API Playbook",
      body: "Enter your work email and we'll send you our guide to a maintainable Express API — folder structure, middleware, validation, auth, error handling, docs and a production checklist.",
      coverLabel: "Express.js API Playbook",
      coverSub: "2025 Edition",
      fileName: "express-js-api-playbook.pdf",
      downloadPath: "/reports/express-js-api-playbook.pdf",
    },
    faqs: [
      {
        question: "How do you structure an Express app so it doesn't become a mess?",
        answer:
          "Layered folders (routes, controllers, services, data), centralised error handling, request validation with Zod or Joi, and a thin route layer that delegates to services. Express gives you freedom; we add the discipline.",
        keywords: ["Express middleware development", "Express project structure", "Express API validation"],
      },
      {
        question: "Which database do you use with Express?",
        answer:
          "PostgreSQL or MySQL with an ORM/query builder (Prisma, Sequelize, Knex) for relational data, MongoDB with Mongoose where the schema is fluid, and Redis for caching and rate limiting.",
        keywords: ["Express with PostgreSQL", "Express with MongoDB", "Express with MySQL Sequelize"],
      },
      {
        question: "How do you handle authentication?",
        answer:
          "JWT or session-based auth as a middleware, role and permission checks per route, refresh-token rotation where needed, and password handling done to current standards.",
        keywords: ["Express JWT authentication", "Express session management", "Express auth middleware"],
      },
      {
        question: "Do you document the API?",
        answer:
          "Yes — an OpenAPI/Swagger spec generated from the code or kept alongside it, so front-end and mobile teams have an accurate contract to build against.",
        keywords: ["Express Swagger OpenAPI docs", "API documentation", "Express OpenAPI"],
      },
      {
        question: "Can you handle file uploads and processing?",
        answer:
          "Yes — Multer for uploads, streaming large files, validation and virus scanning, and offloading to S3 or similar rather than the app server's disk.",
        keywords: ["Express file upload Multer", "Express file handling", "Express S3 upload"],
      },
      {
        question: "Can you add real-time features to an Express app?",
        answer:
          "Yes — Socket.IO alongside Express for live updates, notifications or chat, with a Redis adapter so it scales past one instance.",
        keywords: ["Express WebSocket integration", "Express Socket.IO", "Express real-time"],
      },
      {
        question: "Do you write Express in TypeScript?",
        answer:
          "For anything beyond a small service, yes — typed request/response objects and DTOs catch a lot of API bugs before they ship.",
        keywords: ["Express TypeScript", "typed Express API", "TypeScript Node backend"],
      },
      {
        question: "How do you test and deploy an Express API?",
        answer:
          "Integration tests with Supertest against a real test database, unit tests for services, all in CI, then a Docker image deployed to AWS, GCP, Azure or a VPS with health checks.",
        keywords: ["Express API testing Supertest", "Express Docker deployment", "Express CI/CD"],
      },
      {
        question: "Should we move from Express to NestJS?",
        answer:
          "Only if the team and codebase have grown enough that NestJS's structure and DI pay off. For many services, a well-organised Express app is simpler and lighter. We'll give you a straight assessment.",
        keywords: ["Express to NestJS migration", "Express vs NestJS", "Node framework choice"],
      },
      {
        question: "Where is your Express.js development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full backend or a specific phase, with clients in India and internationally.",
        keywords: ["Express.js development Coimbatore", "Node.js backend developers India", "REST API developers Coimbatore"],
      },
    ],
    media: {
      video: {
        label: "Watch: Express.js API basics",
        sub: "Routing, middleware and error handling in practice",
        href: "https://www.youtube.com/results?search_query=express+js+rest+api+tutorial",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Express.js API Handbook",
        fileName: "express-js-api-handbook.pdf",
        downloadPath: "/ebooks/express-js-api-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Express.js API Playbook 2025",
        fileName: "express-js-api-playbook.pdf",
        downloadPath: "/reports/express-js-api-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // MySQL — schema design, performance, replication
  // ==================================================================
  {
    slug: "mysql",
    name: "MySQL",
    category: "Relational Database",
    metaTitle:
      "MySQL Development Company | Schema Design, Query Tuning & Scaling | NeuralArc",
    metaDescription:
      "NeuralArc does MySQL database work in Coimbatore — schema design, indexing and query optimisation, migrations, replication, backups and performance troubleshooting for web and mobile app back ends.",
    keywords: [
      "MySQL development company",
      "MySQL database design services",
      "hire MySQL developer",
      "MySQL schema design",
      "MySQL indexing strategy",
      "MySQL query optimization",
      "MySQL slow query tuning",
      "MySQL performance troubleshooting",
      "MySQL replication setup",
      "MySQL master-slave replication",
      "MySQL backup and recovery",
      "MySQL database migration",
      "MySQL to PostgreSQL migration",
      "MySQL partitioning",
      "MySQL stored procedures",
      "MySQL triggers",
      "MySQL normalization",
      "MySQL connection pooling",
      "MySQL InnoDB tuning",
      "MySQL EXPLAIN plan analysis",
      "MySQL 8 upgrade",
      "MySQL Aurora RDS",
      "MySQL database audit",
      "MySQL high availability",
      "MySQL development Coimbatore",
      "database engineers India",
      "MySQL DBA services India",
      "database consultants Coimbatore",
    ],
    eyebrow: "MYSQL DATABASE ENGINEERING",
    h1: "MySQL Development for Schemas That Scale and Queries That Stay Fast",
    heroSubhead:
      "We design MySQL schemas, tune the queries and indexes, set up replication and backups, and fix the performance problems that appear once real data and traffic arrive.",
    heroCtaLabel: "Talk to a database engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY THE DATABASE DECIDES YOUR CEILING",
    introTitle: "Most app performance problems are database problems",
    introBody:
      "An app is usually only as fast as its slowest query. MySQL is a proven, well-understood engine, but a schema that wasn't designed for how the data is actually read, or a missing index, will bring a product to its knees under load. We design the schema around the real access patterns, add the right indexes, and read the EXPLAIN plans instead of guessing.",
    introLinkLabel: "Read the MySQL documentation",
    introLinkHref: "https://dev.mysql.com/doc/",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Schema, queries, backups and scaling together",
    supportBody:
      "One team for schema and index design, query and slow-log tuning, migrations, replication and read replicas, backup and point-in-time recovery, and the monitoring that catches problems before users do.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the MySQL blog",
      body: "Write-ups on indexing strategy, reading EXPLAIN, InnoDB internals, replication topologies, and migrating to MySQL 8.",
      linkLabel: "Read the latest MySQL posts",
      href: "https://dev.mysql.com/blog-archive/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "MySQL in production",
      body: "App back ends, reporting databases and multi-tenant systems running on tuned MySQL with replication and reliable backups.",
      linkLabel: "Read the MySQL reference manual",
      href: "https://dev.mysql.com/doc/refman/8.0/en/",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "MySQL Guide",
        body: "Data types, normalisation, keys and constraints, and the schema-design decisions that are hard to change later.",
        linkLabel: "Read the guide",
        href: "https://dev.mysql.com/doc/refman/8.0/en/optimize-database-structure.html",
      },
      {
        icon: "🛠️",
        title: "Indexing & Query Tuning",
        body: "How indexes work, reading EXPLAIN, composite and covering indexes, and the slow query log.",
        linkLabel: "Explore optimisation",
        href: "https://dev.mysql.com/doc/refman/8.0/en/optimization.html",
      },
      {
        icon: "📈",
        title: "Replication & Backup",
        body: "Async and semi-sync replication, read replicas, and consistent backup with point-in-time recovery.",
        linkLabel: "View the guide",
        href: "https://dev.mysql.com/doc/refman/8.0/en/replication.html",
      },
    ],
    journey: {
      eyebrow: "YOUR MYSQL JOURNEY",
      title: "Learn the engine, step by step",
      body: "Six reference topics we lean on when working with MySQL. Each opens the authoritative documentation.",
      items: [
        { label: "Optimising database structure", href: "https://dev.mysql.com/doc/refman/8.0/en/optimize-database-structure.html" },
        { label: "How to use indexes and EXPLAIN", href: "https://dev.mysql.com/doc/refman/8.0/en/using-explain.html" },
        { label: "InnoDB configuration and tuning", href: "https://dev.mysql.com/doc/refman/8.0/en/innodb-configuration.html" },
        { label: "Replication setup", href: "https://dev.mysql.com/doc/refman/8.0/en/replication-configuration.html" },
        { label: "Backup and recovery", href: "https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html" },
        { label: "Partitioning large tables", href: "https://dev.mysql.com/doc/refman/8.0/en/partitioning.html" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the MySQL Performance & Scaling Playbook",
      body: "Enter your work email and we'll send you our field guide to a MySQL database that stays fast — schema design, indexing, query tuning, replication, backups and a health-check list.",
      coverLabel: "MySQL Performance & Scaling Playbook",
      coverSub: "2025 Edition",
      fileName: "mysql-performance-scaling-playbook.pdf",
      downloadPath: "/reports/mysql-performance-scaling-playbook.pdf",
    },
    faqs: [
      {
        question: "Can you design the database schema for a new app?",
        answer:
          "Yes — we model the entities and relationships around how the data will actually be read and written, pick appropriate types and keys, and set up constraints so bad data can't get in.",
        keywords: ["MySQL schema design", "MySQL normalization", "database modelling"],
      },
      {
        question: "Our queries are slow under load — can you fix that?",
        answer:
          "Yes — enable the slow query log, read the EXPLAIN plans, add composite or covering indexes, rewrite the worst queries, and tune InnoDB. Most apps see a large jump from a handful of the right indexes.",
        keywords: ["MySQL slow query tuning", "MySQL query optimization", "MySQL EXPLAIN plan analysis"],
      },
      {
        question: "Can you set up replication and read replicas?",
        answer:
          "Yes — a primary with one or more replicas to offload reads and provide failover, with replication lag monitored and a documented promotion process.",
        keywords: ["MySQL replication setup", "MySQL master-slave replication", "MySQL read replica"],
      },
      {
        question: "How do you handle backups?",
        answer:
          "Automated, tested backups (logical or physical depending on size), binlogs retained for point-in-time recovery, stored off-site, and a restore drill so you know it actually works.",
        keywords: ["MySQL backup and recovery", "MySQL point-in-time recovery", "database backup strategy"],
      },
      {
        question: "Can you migrate our database safely?",
        answer:
          "Yes — MySQL version upgrades, host-to-host moves, or on-prem to RDS/Aurora, planned with a rehearsal, a rollback path and minimal downtime.",
        keywords: ["MySQL database migration", "MySQL 8 upgrade", "MySQL Aurora RDS"],
      },
      {
        question: "Should we move from MySQL to PostgreSQL?",
        answer:
          "Sometimes — for heavy analytical queries, advanced types or strict SQL compliance PostgreSQL can be the better fit. Often a tuned MySQL is fine. We'll assess honestly rather than assume.",
        keywords: ["MySQL to PostgreSQL migration", "MySQL vs PostgreSQL", "database choice"],
      },
      {
        question: "Do you write stored procedures and triggers?",
        answer:
          "Where they genuinely belong in the database — data-integrity triggers, batch procedures — yes. We keep business logic in the application layer where it's testable, though.",
        keywords: ["MySQL stored procedures", "MySQL triggers", "database logic"],
      },
      {
        question: "Can you audit an existing MySQL database?",
        answer:
          "Yes — a review of schema, indexes, slow queries, configuration, backup setup and security, with a prioritised list of fixes.",
        keywords: ["MySQL database audit", "MySQL health check", "database review"],
      },
      {
        question: "Can you handle very large tables?",
        answer:
          "Yes — partitioning, archiving cold data, summary tables for reporting, and connection pooling so the database isn't overwhelmed by the app tier.",
        keywords: ["MySQL partitioning", "MySQL large tables", "MySQL connection pooling"],
      },
      {
        question: "Where is your MySQL team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a schema design, a performance rescue, or ongoing database support, with clients in India and internationally.",
        keywords: ["MySQL development Coimbatore", "database engineers India", "MySQL DBA services India"],
      },
    ],
    media: {
      video: {
        label: "Watch: MySQL indexing and tuning",
        sub: "Reading EXPLAIN and fixing slow queries",
        href: "https://www.youtube.com/results?search_query=mysql+indexing+explain+tutorial",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The MySQL Performance Handbook",
        fileName: "mysql-performance-handbook.pdf",
        downloadPath: "/ebooks/mysql-performance-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "MySQL Performance & Scaling Playbook 2025",
        fileName: "mysql-performance-scaling-playbook.pdf",
        downloadPath: "/reports/mysql-performance-scaling-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // SQLite — embedded, on-device and edge databases
  // ==================================================================
  {
    slug: "sqlite",
    name: "SQLite",
    category: "Embedded Database",
    metaTitle:
      "SQLite Development Company | On-Device, Offline & Edge Databases | NeuralArc",
    metaDescription:
      "NeuralArc builds with SQLite in Coimbatore — on-device storage for mobile and desktop apps, offline-first sync, embedded databases for IoT and edge devices, and local-first architectures done right.",
    keywords: [
      "SQLite development company",
      "SQLite database services",
      "SQLite mobile app storage",
      "SQLite offline first",
      "SQLite offline sync",
      "SQLite React Native",
      "SQLite Flutter",
      "SQLite Android Room",
      "SQLite iOS Core Data",
      "SQLite on IoT devices",
      "SQLite edge database",
      "SQLite WAL mode",
      "SQLite full-text search FTS5",
      "SQLite encryption SQLCipher",
      "SQLite performance tuning",
      "SQLite schema migration",
      "SQLite vs Realm",
      "SQLite local-first architecture",
      "SQLite Electron desktop app",
      "SQLite data export import",
      "SQLite backup",
      "SQLite JSON support",
      "SQLite prototype",
      "SQLite development Coimbatore",
      "embedded database engineers India",
      "offline app developers India",
      "local-first developers Coimbatore",
    ],
    eyebrow: "SQLITE EMBEDDED DATA ENGINEERING",
    h1: "SQLite Development for On-Device, Offline and Edge Storage",
    heroSubhead:
      "We build local-first data layers with SQLite — reliable on-device storage for mobile and desktop apps, offline sync back to the server, and embedded databases on IoT and edge hardware.",
    heroCtaLabel: "Talk to an engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY SQLITE",
    introTitle: "The most-deployed database in the world, for good reason",
    introBody:
      "SQLite is a full SQL engine in a single file with no server to run — which makes it the default choice for storing data on a phone, a laptop app or an edge device. It's fast, rock-solid and public-domain. We use it for offline-first apps, giving each device a real local database and syncing changes to the backend when a connection is available.",
    introLinkLabel: "Read the SQLite documentation",
    introLinkHref: "https://sqlite.org/docs.html",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Local schema, sync and the server side together",
    supportBody:
      "One team for the on-device SQLite schema and migrations, the sync protocol and conflict handling, encryption where it's needed, and the server-side API the devices talk to.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the SQLite blog",
      body: "Write-ups on WAL mode, offline sync strategies, FTS5 full-text search, SQLCipher encryption, and when SQLite is (and isn't) the right call.",
      linkLabel: "Read the latest SQLite news",
      href: "https://sqlite.org/news.html",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "SQLite in production",
      body: "Field-service apps that work with no signal, desktop tools, and edge devices that buffer data locally until they can upload.",
      linkLabel: "When to use SQLite",
      href: "https://sqlite.org/whentouse.html",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "SQLite Guide",
        body: "The single-file model, transactions, data types, and the design choices that keep an embedded DB reliable.",
        linkLabel: "Read the guide",
        href: "https://sqlite.org/quickstart.html",
      },
      {
        icon: "🛠️",
        title: "Mobile & Desktop",
        body: "SQLite through Room, Core Data, Drift, WatermelonDB and better-sqlite3 — the wrappers we use per platform.",
        linkLabel: "Explore the wrappers",
        href: "https://sqlite.org/lang.html",
      },
      {
        icon: "📈",
        title: "Performance & Sync",
        body: "WAL mode, indexing, batching writes, and a change-log approach to syncing a local DB with the server.",
        linkLabel: "View the guide",
        href: "https://sqlite.org/wal.html",
      },
    ],
    journey: {
      eyebrow: "YOUR SQLITE JOURNEY",
      title: "Learn the engine, step by step",
      body: "Six reference topics we lean on when building on SQLite. Each opens the authoritative documentation.",
      items: [
        { label: "When to use SQLite", href: "https://sqlite.org/whentouse.html" },
        { label: "Write-Ahead Logging (WAL) mode", href: "https://sqlite.org/wal.html" },
        { label: "Full-text search with FTS5", href: "https://sqlite.org/fts5.html" },
        { label: "The JSON functions", href: "https://sqlite.org/json1.html" },
        { label: "Query planning and EXPLAIN", href: "https://sqlite.org/eqp.html" },
        { label: "Backup API and safe copying", href: "https://sqlite.org/backup.html" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Offline-First SQLite Playbook",
      body: "Enter your work email and we'll send you our guide to a local-first app — SQLite schema, migrations, WAL mode, sync and conflict handling, encryption and a reliability checklist.",
      coverLabel: "Offline-First SQLite Playbook",
      coverSub: "2025 Edition",
      fileName: "offline-first-sqlite-playbook.pdf",
      downloadPath: "/reports/offline-first-sqlite-playbook.pdf",
    },
    faqs: [
      {
        question: "When is SQLite the right choice?",
        answer:
          "For data that lives on a single device — a mobile app, a desktop app, or an edge/IoT device. It's not for a shared web backend with many concurrent writers; that's what a server database is for.",
        keywords: ["when to use SQLite", "SQLite vs server database", "embedded database"],
      },
      {
        question: "Can you build an offline-first mobile app with SQLite?",
        answer:
          "Yes — each device gets a real local SQLite database, the app works fully offline, and changes sync to the backend with a change log and conflict resolution when a connection returns.",
        keywords: ["SQLite offline first", "SQLite offline sync", "offline-first mobile app"],
      },
      {
        question: "Which SQLite wrapper do you use per platform?",
        answer:
          "Room on Android, Core Data or GRDB on iOS, Drift or sqflite for Flutter, WatermelonDB or op-sqlite for React Native, and better-sqlite3 for Node and Electron.",
        keywords: ["SQLite React Native", "SQLite Flutter", "SQLite Android Room", "SQLite Electron desktop app"],
      },
      {
        question: "Can the local database be encrypted?",
        answer:
          "Yes — SQLCipher for full-database encryption at rest, with the key held in the platform keystore rather than in the app.",
        keywords: ["SQLite encryption SQLCipher", "encrypted SQLite", "SQLite data security"],
      },
      {
        question: "Does SQLite handle concurrent access on a device?",
        answer:
          "With WAL mode, readers don't block the writer and vice versa, which is plenty for a single app with a few background tasks. We configure it correctly rather than leaving the default.",
        keywords: ["SQLite WAL mode", "SQLite concurrency", "SQLite performance tuning"],
      },
      {
        question: "Can you add search to a local SQLite database?",
        answer:
          "Yes — FTS5 full-text search for fast local search over notes, messages or catalogue data, with ranking and highlighting.",
        keywords: ["SQLite full-text search FTS5", "SQLite local search", "offline search"],
      },
      {
        question: "How do you handle schema changes after release?",
        answer:
          "Versioned migrations that run on app start, tested against real old databases, so an update never leaves a user's data in a broken state.",
        keywords: ["SQLite schema migration", "SQLite database versioning", "mobile DB migration"],
      },
      {
        question: "SQLite or Realm / another mobile DB?",
        answer:
          "SQLite when you want standard SQL, portability and long-term stability. An object database can be faster to start with but harder to move off later. We pick based on the app's data shape and lifespan.",
        keywords: ["SQLite vs Realm", "mobile database choice", "SQLite local-first architecture"],
      },
      {
        question: "Can you use SQLite on an IoT or edge device?",
        answer:
          "Yes — as a local buffer that stores readings when the network is down and forwards them once it's back, plus local config and state.",
        keywords: ["SQLite on IoT devices", "SQLite edge database", "edge data buffering"],
      },
      {
        question: "Where is your team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for the local data layer, the sync backend, or the whole offline-first build, with clients in India and internationally.",
        keywords: ["SQLite development Coimbatore", "offline app developers India", "local-first developers Coimbatore"],
      },
    ],
    media: {
      video: {
        label: "Watch: SQLite for app storage",
        sub: "Local databases, WAL mode and offline sync",
        href: "https://www.youtube.com/results?search_query=sqlite+mobile+app+offline+tutorial",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Offline-First SQLite Handbook",
        fileName: "offline-first-sqlite-handbook.pdf",
        downloadPath: "/ebooks/offline-first-sqlite-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Offline-First SQLite Playbook 2025",
        fileName: "offline-first-sqlite-playbook.pdf",
        downloadPath: "/reports/offline-first-sqlite-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Firebase — app backend, auth, realtime data, push
  // ==================================================================
  {
    slug: "firebase",
    name: "Firebase",
    category: "App Backend & Realtime",
    metaTitle:
      "Firebase Development Company | Auth, Firestore, Realtime & Cloud Functions | NeuralArc",
    metaDescription:
      "NeuralArc builds on Firebase in Coimbatore — Authentication, Firestore and Realtime Database, Cloud Functions, Cloud Messaging, Storage and Hosting — for web and mobile apps that need a backend fast without running servers.",
    keywords: [
      "Firebase development company",
      "Firebase app development services",
      "hire Firebase developer",
      "Firebase Authentication setup",
      "Cloud Firestore development",
      "Firebase Realtime Database",
      "Firebase Cloud Functions",
      "Firebase Cloud Messaging FCM push",
      "Firebase Storage",
      "Firebase Hosting",
      "Firebase security rules",
      "Firestore data modelling",
      "Firebase with React",
      "Firebase with React Native",
      "Firebase with Flutter",
      "Firebase Remote Config",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Firebase App Check",
      "Firebase cost optimization",
      "Firebase to custom backend migration",
      "Firestore query optimization",
      "Firebase offline persistence",
      "Firebase Emulator Suite",
      "Firebase development Coimbatore",
      "app backend developers India",
      "serverless developers India",
      "Firebase experts Coimbatore",
    ],
    eyebrow: "FIREBASE APP ENGINEERING",
    h1: "Firebase Development for App Backends Without the Server Ops",
    heroSubhead:
      "We build on Firebase — Authentication, Firestore, Cloud Functions, push messaging and Hosting — with security rules and data models done properly, so you get a real backend fast and keep costs predictable.",
    heroCtaLabel: "Talk to a Firebase engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY FIREBASE",
    introTitle: "A backend your app talks to directly, safely",
    introBody:
      "Firebase gives a web or mobile app authentication, a realtime database, file storage, push and hosting without standing up servers. The catch is that the client talks to the database directly, so the security rules and the data model are the backend — get those right and Firebase scales beautifully; get them wrong and you have a bill or a breach. We design both carefully and test rules in the emulator.",
    introLinkLabel: "Read the Firebase documentation",
    introLinkHref: "https://firebase.google.com/docs",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Data model, rules, functions and client together",
    supportBody:
      "One team for the Firestore data model, security rules, Cloud Functions for the logic that can't live on the client, auth and messaging setup, and the React, React Native or Flutter app that uses it.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Firebase blog",
      body: "Write-ups on Firestore data modelling, security-rule patterns, keeping costs down, Cloud Functions structure, and when to move to a custom backend.",
      linkLabel: "Read the latest Firebase posts",
      href: "https://firebase.blog/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Firebase in production",
      body: "Consumer apps, MVPs and internal tools using Firebase for auth, realtime data and push, shipped fast and kept affordable.",
      linkLabel: "Browse Firebase case studies",
      href: "https://firebase.google.com/customers",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Firestore Guide",
        body: "Documents and collections, modelling for reads, denormalisation, and the query limits you design around.",
        linkLabel: "Read the guide",
        href: "https://firebase.google.com/docs/firestore/data-model",
      },
      {
        icon: "🛠️",
        title: "Security Rules",
        body: "Writing, structuring and testing rules so the client can talk to the database without exposing everything.",
        linkLabel: "Explore rules",
        href: "https://firebase.google.com/docs/rules",
      },
      {
        icon: "📈",
        title: "Cloud Functions",
        body: "Triggers, callable functions and scheduled jobs for the logic and secrets that can't live on the client.",
        linkLabel: "View the guide",
        href: "https://firebase.google.com/docs/functions",
      },
    ],
    journey: {
      eyebrow: "YOUR FIREBASE JOURNEY",
      title: "Learn the platform, step by step",
      body: "Six reference topics we lean on when building on Firebase. Each opens the authoritative documentation.",
      items: [
        { label: "Choosing Firestore vs Realtime Database", href: "https://firebase.google.com/docs/database/rtdb-vs-firestore" },
        { label: "Structuring Firestore data", href: "https://firebase.google.com/docs/firestore/manage-data/structure-data" },
        { label: "Security rules language", href: "https://firebase.google.com/docs/rules/rules-language" },
        { label: "Cloud Functions triggers", href: "https://firebase.google.com/docs/functions/firestore-events" },
        { label: "Cloud Messaging (push)", href: "https://firebase.google.com/docs/cloud-messaging" },
        { label: "Local testing with the Emulator Suite", href: "https://firebase.google.com/docs/emulator-suite" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Firebase App Backend Playbook",
      body: "Enter your work email and we'll send you our guide to building on Firebase well — data modelling, security rules, Cloud Functions, cost control, offline support and a go-live checklist.",
      coverLabel: "Firebase App Backend Playbook",
      coverSub: "2025 Edition",
      fileName: "firebase-app-backend-playbook.pdf",
      downloadPath: "/reports/firebase-app-backend-playbook.pdf",
    },
    faqs: [
      {
        question: "Is Firebase suitable for a production app or just prototypes?",
        answer:
          "Production, if the data model and security rules are designed properly. Plenty of real apps run on Firebase at scale. It's a poor fit for heavy relational reporting or complex server-side workflows.",
        keywords: ["Firebase production app", "Firebase at scale", "Firebase suitability"],
      },
      {
        question: "Firestore or Realtime Database?",
        answer:
          "Firestore for most new apps — richer queries, better scaling and structured documents. Realtime Database for simple, very low-latency state like presence or a live counter.",
        keywords: ["Cloud Firestore development", "Firebase Realtime Database", "Firestore vs Realtime Database"],
      },
      {
        question: "How do you keep Firebase costs under control?",
        answer:
          "Model data to minimise reads, cache aggressively on the client, avoid listener sprawl, use aggregation where possible, and set budget alerts. Most surprise bills come from a data model that reads too much.",
        keywords: ["Firebase cost optimization", "Firestore query optimization", "Firebase billing"],
      },
      {
        question: "How do you secure a Firebase app?",
        answer:
          "Tight security rules tested in the emulator, App Check to block abuse, sensitive logic in Cloud Functions with secrets server-side, and least-privilege service accounts.",
        keywords: ["Firebase security rules", "Firebase App Check", "Firebase security"],
      },
      {
        question: "Does a Firebase app work offline?",
        answer:
          "Yes — Firestore and Realtime Database both have offline persistence, so the app keeps working without a connection and syncs when it returns. We configure and test it rather than assuming.",
        keywords: ["Firebase offline persistence", "Firestore offline", "offline Firebase app"],
      },
      {
        question: "Can you set up auth and push notifications?",
        answer:
          "Yes — email, phone, Google, Apple and custom-token auth, plus Cloud Messaging for push on web, Android and iOS with topic and targeted sends.",
        keywords: ["Firebase Authentication setup", "Firebase Cloud Messaging FCM push", "Firebase auth providers"],
      },
      {
        question: "What logic goes in Cloud Functions vs the client?",
        answer:
          "Anything with a secret, anything that must be trusted (payments, role changes, aggregation), and anything triggered by data changes. The client handles UI state and reads it's allowed to make.",
        keywords: ["Firebase Cloud Functions", "Firebase serverless logic", "Cloud Functions triggers"],
      },
      {
        question: "Can you connect Firebase to React, React Native or Flutter?",
        answer:
          "Yes — all three have first-class SDKs. We wire in auth, data listeners, offline and push, and keep the Firebase-specific code behind a thin layer so it's not spread through the whole app.",
        keywords: ["Firebase with React", "Firebase with React Native", "Firebase with Flutter"],
      },
      {
        question: "Can you migrate off Firebase later if we outgrow it?",
        answer:
          "Yes — because we keep Firebase access behind a repository layer, moving specific pieces (say, Firestore to Postgres, or Functions to a Node service) is a contained change, not a rewrite.",
        keywords: ["Firebase to custom backend migration", "Firebase migration", "Firebase exit strategy"],
      },
      {
        question: "Where is your Firebase development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full app backend or a specific piece, with clients in India and internationally.",
        keywords: ["Firebase development Coimbatore", "app backend developers India", "serverless developers India"],
      },
    ],
    media: {
      video: {
        label: "Watch: Firebase for app backends",
        sub: "Auth, Firestore, rules and Cloud Functions",
        href: "https://www.youtube.com/@Firebase/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Firebase App Backend Handbook",
        fileName: "firebase-app-backend-handbook.pdf",
        downloadPath: "/ebooks/firebase-app-backend-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Firebase App Backend Playbook 2025",
        fileName: "firebase-app-backend-playbook.pdf",
        downloadPath: "/reports/firebase-app-backend-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // CodeIgniter — lightweight PHP framework for business apps
  // ==================================================================
  {
    slug: "codeigniter",
    name: "CodeIgniter",
    category: "PHP Framework",
    metaTitle:
      "CodeIgniter Development Company | PHP Web Apps, Admin Panels & APIs | NeuralArc",
    metaDescription:
      "NeuralArc is a CodeIgniter development company in Coimbatore. We build PHP web applications, admin panels, CRMs and REST APIs on CodeIgniter 4 — plus upgrades from CodeIgniter 3 and long-term maintenance.",
    keywords: [
      "CodeIgniter development company",
      "CodeIgniter development services",
      "hire CodeIgniter developer",
      "CodeIgniter 4 development",
      "CodeIgniter REST API",
      "CodeIgniter admin panel",
      "CodeIgniter CRM development",
      "CodeIgniter ERP module",
      "CodeIgniter 3 to 4 migration",
      "CodeIgniter MVC development",
      "CodeIgniter query builder",
      "CodeIgniter authentication Shield",
      "CodeIgniter payment gateway integration",
      "CodeIgniter MySQL",
      "CodeIgniter performance optimization",
      "CodeIgniter security hardening",
      "CodeIgniter SMS email integration",
      "CodeIgniter PDF report generation",
      "CodeIgniter role-based access",
      "CodeIgniter legacy maintenance",
      "PHP web application development",
      "CodeIgniter to Laravel migration",
      "CodeIgniter development Coimbatore",
      "PHP developers India",
      "CodeIgniter experts India",
      "PHP framework developers Coimbatore",
    ],
    eyebrow: "CODEIGNITER PHP ENGINEERING",
    h1: "CodeIgniter Development for Fast, Practical PHP Web Apps",
    heroSubhead:
      "We build business applications on CodeIgniter 4 — admin panels, CRMs, billing systems and REST APIs — lightweight, fast and easy to host, with clean MVC structure and long-term maintenance.",
    heroCtaLabel: "Talk to a PHP engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY CODEIGNITER",
    introTitle: "A small framework that ships business apps quickly",
    introBody:
      "CodeIgniter is deliberately small: a clean MVC structure, a good query builder, and very little ceremony. That makes it a strong fit for internal business apps, admin panels and APIs where speed of delivery and cheap, simple hosting matter more than a large ecosystem. CodeIgniter 4 modernised it with namespaces, a proper CLI and better testing. We build on 4 and upgrade projects still on 3.",
    introLinkLabel: "Read the CodeIgniter 4 user guide",
    introLinkHref: "https://codeigniter.com/user_guide/",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "App, database and hosting together",
    supportBody:
      "One team for the CodeIgniter application, the MySQL schema, authentication and roles, integrations (payments, SMS, email, PDF), and deployment to shared or VPS hosting with backups.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the CodeIgniter blog",
      body: "Write-ups on CI4 project structure, the migration from CI3, building REST APIs, authentication with Shield, and security hardening.",
      linkLabel: "Read the latest CodeIgniter news",
      href: "https://codeigniter.com/news",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "CodeIgniter in production",
      body: "CRMs, billing and inventory systems, booking portals and internal tools built on CodeIgniter and maintained for years.",
      linkLabel: "Read the CodeIgniter documentation",
      href: "https://codeigniter.com/user_guide/intro/index.html",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "CodeIgniter Guide",
        body: "Controllers, models and views, routing, and the structure of a maintainable CI4 application.",
        linkLabel: "Read the guide",
        href: "https://codeigniter.com/user_guide/concepts/mvc.html",
      },
      {
        icon: "🛠️",
        title: "Database & Auth",
        body: "The query builder and models, migrations, and authentication with CodeIgniter Shield.",
        linkLabel: "Explore the tools",
        href: "https://codeigniter.com/user_guide/database/query_builder.html",
      },
      {
        icon: "📈",
        title: "Security & Performance",
        body: "CSRF, XSS filtering, prepared statements, caching, and the production configuration checklist.",
        linkLabel: "View the guide",
        href: "https://codeigniter.com/user_guide/concepts/security.html",
      },
    ],
    journey: {
      eyebrow: "YOUR CODEIGNITER JOURNEY",
      title: "Learn the framework, step by step",
      body: "Six reference topics we lean on when building on CodeIgniter 4. Each opens the authoritative documentation.",
      items: [
        { label: "The MVC concept in CI4", href: "https://codeigniter.com/user_guide/concepts/mvc.html" },
        { label: "Routing", href: "https://codeigniter.com/user_guide/incoming/routing.html" },
        { label: "The query builder and models", href: "https://codeigniter.com/user_guide/models/model.html" },
        { label: "Database migrations", href: "https://codeigniter.com/user_guide/dbmgmt/migration.html" },
        { label: "Authentication with Shield", href: "https://shield.codeigniter.com/" },
        { label: "Upgrading from CodeIgniter 3", href: "https://codeigniter.com/user_guide/installation/upgrade_4xx.html" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the CodeIgniter 4 Application Playbook",
      body: "Enter your work email and we'll send you our guide to a solid CodeIgniter app — project structure, database and auth, security, performance, the CI3-to-4 path and a maintenance checklist.",
      coverLabel: "CodeIgniter 4 Application Playbook",
      coverSub: "2025 Edition",
      fileName: "codeigniter-4-application-playbook.pdf",
      downloadPath: "/reports/codeigniter-4-application-playbook.pdf",
    },
    faqs: [
      {
        question: "Do you build on CodeIgniter 3 or 4?",
        answer:
          "New work is CodeIgniter 4 — namespaces, a real CLI, better testing and modern PHP support. We maintain CI3 projects and can plan and run the upgrade to 4.",
        keywords: ["CodeIgniter 4 development", "CodeIgniter 3 to 4 migration", "CodeIgniter version"],
      },
      {
        question: "What kind of apps is CodeIgniter good for?",
        answer:
          "Internal business apps, admin panels, CRMs, billing and inventory systems, booking portals and REST APIs — anywhere quick delivery and simple, cheap hosting matter.",
        keywords: ["CodeIgniter admin panel", "CodeIgniter CRM development", "PHP web application development"],
      },
      {
        question: "Can you build a REST API with CodeIgniter?",
        answer:
          "Yes — resource controllers, JSON responses, token or JWT auth, validation and rate limiting, documented for the front-end or mobile team.",
        keywords: ["CodeIgniter REST API", "CodeIgniter API development", "CodeIgniter JWT"],
      },
      {
        question: "How do you handle authentication and roles?",
        answer:
          "CodeIgniter Shield for auth, plus role- and permission-based access control enforced in a filter so protected routes can't be reached without the right role.",
        keywords: ["CodeIgniter authentication Shield", "CodeIgniter role-based access", "CodeIgniter permissions"],
      },
      {
        question: "Can you integrate payments, SMS and PDF reports?",
        answer:
          "Yes — Razorpay, PayU, Stripe and others, SMS and email gateways, and server-side PDF generation for invoices and reports.",
        keywords: ["CodeIgniter payment gateway integration", "CodeIgniter SMS email integration", "CodeIgniter PDF report generation"],
      },
      {
        question: "Is a CodeIgniter app secure?",
        answer:
          "With the framework's CSRF protection, output escaping and the query builder's prepared statements enabled and used consistently, plus input validation and secure session config — yes. We audit for the common PHP mistakes.",
        keywords: ["CodeIgniter security hardening", "PHP application security", "CodeIgniter CSRF XSS"],
      },
      {
        question: "Can you take over a legacy CodeIgniter project?",
        answer:
          "Yes — a code review first, then getting it onto a supported PHP version, adding a test safety net, fixing security issues, and refactoring in safe steps.",
        keywords: ["CodeIgniter legacy maintenance", "CodeIgniter takeover", "legacy PHP modernization"],
      },
      {
        question: "Should we move from CodeIgniter to Laravel?",
        answer:
          "Only if the project needs Laravel's larger ecosystem (queues, broadcasting, a big package market) and the team can support it. For many business apps, CodeIgniter is lighter and cheaper to run. We'll advise honestly.",
        keywords: ["CodeIgniter to Laravel migration", "CodeIgniter vs Laravel", "PHP framework choice"],
      },
      {
        question: "How do you optimise a slow CodeIgniter app?",
        answer:
          "Query and index tuning on the MySQL side, caching, eager loading to kill N+1 queries, and profiling to find the actual slow paths.",
        keywords: ["CodeIgniter performance optimization", "CodeIgniter MySQL", "slow PHP app"],
      },
      {
        question: "Where is your CodeIgniter development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full build, an upgrade, or ongoing maintenance, with clients in India and internationally.",
        keywords: ["CodeIgniter development Coimbatore", "PHP developers India", "CodeIgniter experts India"],
      },
    ],
    media: {
      video: {
        label: "Watch: CodeIgniter 4 in practice",
        sub: "MVC structure, routing and the query builder",
        href: "https://www.youtube.com/results?search_query=codeigniter+4+tutorial",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The CodeIgniter 4 Application Handbook",
        fileName: "codeigniter-4-application-handbook.pdf",
        downloadPath: "/ebooks/codeigniter-4-application-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "CodeIgniter 4 Application Playbook 2025",
        fileName: "codeigniter-4-application-playbook.pdf",
        downloadPath: "/reports/codeigniter-4-application-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // GitHub — version control, CI/CD, code review workflow
  // ==================================================================
  {
    slug: "github",
    name: "GitHub",
    category: "Version Control & DevOps",
    metaTitle:
      "GitHub Workflow & CI/CD Setup | Version Control, Actions & Code Review | NeuralArc",
    metaDescription:
      "NeuralArc sets up GitHub properly for teams in Coimbatore — branching strategy, pull-request and code-review workflow, GitHub Actions CI/CD pipelines, protected branches, releases and repository migration.",
    keywords: [
      "GitHub workflow setup",
      "GitHub Actions CI/CD",
      "GitHub Actions pipeline development",
      "GitHub branching strategy",
      "GitHub pull request workflow",
      "GitHub code review process",
      "GitHub protected branches",
      "GitHub repository migration",
      "GitLab to GitHub migration",
      "Bitbucket to GitHub migration",
      "GitHub Actions deployment pipeline",
      "GitHub Actions Docker build",
      "GitHub Actions test automation",
      "GitHub release automation semantic versioning",
      "GitHub monorepo setup",
      "GitHub Dependabot security",
      "GitHub secret scanning",
      "GitHub Codeowners",
      "GitHub Projects issue tracking",
      "GitHub self-hosted runners",
      "GitHub Actions cost optimization",
      "GitHub Enterprise setup",
      "git training for teams",
      "GitHub workflow Coimbatore",
      "DevOps engineers India",
      "CI/CD consultants India",
      "GitHub Actions experts Coimbatore",
    ],
    eyebrow: "GITHUB WORKFLOW & CI/CD",
    h1: "GitHub Set Up Properly — Branching, Reviews and CI/CD That Work",
    heroSubhead:
      "We get a team's GitHub in order — a branching strategy people actually follow, pull-request and review rules, protected branches, and GitHub Actions pipelines that test, build and deploy on every change.",
    heroCtaLabel: "Talk to a DevOps engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY THE WORKFLOW MATTERS",
    introTitle: "The repo is where quality is enforced — or isn't",
    introBody:
      "GitHub is more than storage. The branching model, the pull-request checks, the required reviews and the CI pipeline are where a team's standards get enforced automatically instead of by nagging. We set up a workflow that fits your team size — trunk-based or GitHub Flow, protected branches, status checks, CODEOWNERS — and build the GitHub Actions pipelines that run tests, security scans and deploys.",
    introLinkLabel: "Read the GitHub documentation",
    introLinkHref: "https://docs.github.com/en",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Branching, checks, pipelines and releases together",
    supportBody:
      "One team for the branching and review policy, branch protection and CODEOWNERS, GitHub Actions CI/CD, secret and dependency scanning, release automation, and migrating repos in from GitLab or Bitbucket.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the GitHub blog",
      body: "Write-ups on Actions pipeline design, branching models, review culture, supply-chain security, and cutting Actions minutes.",
      linkLabel: "Read the latest from the GitHub blog",
      href: "https://github.blog/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD SETUPS",
      title: "GitHub workflows in the wild",
      body: "Team repos with a clean branching model, required checks and Actions pipelines that deploy on merge without drama.",
      linkLabel: "Explore GitHub Actions",
      href: "https://github.com/features/actions",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Workflow Guide",
        body: "GitHub Flow vs trunk-based, pull requests, required reviews and status checks, and CODEOWNERS.",
        linkLabel: "Read the guide",
        href: "https://docs.github.com/en/get-started/using-github/github-flow",
      },
      {
        icon: "🛠️",
        title: "GitHub Actions",
        body: "Workflow syntax, matrix builds, caching, reusable workflows and secrets — the CI/CD building blocks.",
        linkLabel: "Explore Actions",
        href: "https://docs.github.com/en/actions",
      },
      {
        icon: "📈",
        title: "Security",
        body: "Branch protection, Dependabot, secret scanning, code scanning and signed commits.",
        linkLabel: "View the guide",
        href: "https://docs.github.com/en/code-security",
      },
    ],
    journey: {
      eyebrow: "YOUR GITHUB JOURNEY",
      title: "Set up the workflow, step by step",
      body: "Six reference topics we lean on when getting a team's GitHub in order. Each opens the authoritative documentation.",
      items: [
        { label: "GitHub Flow and branching", href: "https://docs.github.com/en/get-started/using-github/github-flow" },
        { label: "Branch protection rules", href: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches" },
        { label: "Writing GitHub Actions workflows", href: "https://docs.github.com/en/actions/using-workflows/about-workflows" },
        { label: "Deploying with Actions and environments", href: "https://docs.github.com/en/actions/deployment/about-deployments/about-continuous-deployment" },
        { label: "CODEOWNERS and required reviews", href: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners" },
        { label: "Dependabot and security alerts", href: "https://docs.github.com/en/code-security/dependabot" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the GitHub Workflow & CI/CD Playbook",
      body: "Enter your work email and we'll send you our guide to a GitHub setup that scales — branching model, PR and review rules, branch protection, Actions pipelines, releases and a repo-health checklist.",
      coverLabel: "GitHub Workflow & CI/CD Playbook",
      coverSub: "2025 Edition",
      fileName: "github-workflow-cicd-playbook.pdf",
      downloadPath: "/reports/github-workflow-cicd-playbook.pdf",
    },
    faqs: [
      {
        question: "Which branching model should our team use?",
        answer:
          "For most product teams, GitHub Flow (short-lived branches, PR to main, deploy from main) or trunk-based development. Long-lived release branches only when you genuinely support multiple versions in the field.",
        keywords: ["GitHub branching strategy", "GitHub Flow", "trunk-based development"],
      },
      {
        question: "Can you build our CI/CD pipeline in GitHub Actions?",
        answer:
          "Yes — workflows that run linting and tests on every PR, build artifacts or Docker images, run security scans, and deploy to staging and production with environment approvals.",
        keywords: ["GitHub Actions CI/CD", "GitHub Actions deployment pipeline", "GitHub Actions Docker build"],
      },
      {
        question: "How do you stop bad code reaching main?",
        answer:
          "Protected branches with required status checks and reviews, CODEOWNERS for sensitive paths, linear history, and no direct pushes — so main is only ever updated by a passing, reviewed PR.",
        keywords: ["GitHub protected branches", "GitHub pull request workflow", "GitHub code review process"],
      },
      {
        question: "Can you migrate our repos from GitLab or Bitbucket?",
        answer:
          "Yes — history, branches, tags, issues and PRs where possible, plus rebuilding pipelines as GitHub Actions and updating any integrations.",
        keywords: ["GitHub repository migration", "GitLab to GitHub migration", "Bitbucket to GitHub migration"],
      },
      {
        question: "Can you automate releases and versioning?",
        answer:
          "Yes — Conventional Commits driving semantic version bumps, auto-generated changelogs, tagged GitHub Releases, and artifacts published to your registry.",
        keywords: ["GitHub release automation semantic versioning", "changelog automation", "GitHub Releases"],
      },
      {
        question: "How do you keep dependencies and secrets safe?",
        answer:
          "Dependabot for dependency updates and alerts, secret scanning and push protection, code scanning with CodeQL, and secrets stored in Actions/Environments rather than the repo.",
        keywords: ["GitHub Dependabot security", "GitHub secret scanning", "supply chain security"],
      },
      {
        question: "Our GitHub Actions bill is high — can you reduce it?",
        answer:
          "Yes — caching, only running jobs on the paths that changed, matrix trimming, concurrency cancellation, and self-hosted runners for heavy jobs.",
        keywords: ["GitHub Actions cost optimization", "GitHub self-hosted runners", "GitHub Actions minutes"],
      },
      {
        question: "Can you set up a monorepo?",
        answer:
          "Yes — path-filtered workflows, per-package versioning, shared CI, and CODEOWNERS per directory so a monorepo doesn't turn into a bottleneck.",
        keywords: ["GitHub monorepo setup", "monorepo CI", "GitHub Actions path filter"],
      },
      {
        question: "Can you train our team on the Git and GitHub workflow?",
        answer:
          "Yes — a hands-on session on branching, rebasing vs merging, resolving conflicts, writing good PRs and reviews, tailored to your actual repos.",
        keywords: ["git training for teams", "GitHub workflow training", "developer onboarding"],
      },
      {
        question: "Where is your DevOps team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a one-off workflow and pipeline setup or ongoing DevOps support, with clients in India and internationally.",
        keywords: ["GitHub workflow Coimbatore", "DevOps engineers India", "CI/CD consultants India"],
      },
    ],
    media: {
      video: {
        label: "Watch: GitHub Actions CI/CD",
        sub: "Building a pipeline that tests, builds and deploys",
        href: "https://www.youtube.com/@GitHub/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The GitHub Workflow Handbook",
        fileName: "github-workflow-handbook.pdf",
        downloadPath: "/ebooks/github-workflow-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "GitHub Workflow & CI/CD Playbook 2025",
        fileName: "github-workflow-cicd-playbook.pdf",
        downloadPath: "/reports/github-workflow-cicd-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Selenium — browser test automation and E2E suites
  // ==================================================================
  {
    slug: "selenium",
    name: "Selenium",
    category: "Test Automation",
    metaTitle:
      "Selenium Test Automation Company | E2E Suites, Cross-Browser & CI | NeuralArc",
    metaDescription:
      "NeuralArc builds Selenium test automation in Coimbatore — end-to-end suites with the Page Object Model, cross-browser and cross-device testing on Selenium Grid, CI integration and flaky-test cleanup.",
    keywords: [
      "Selenium test automation company",
      "Selenium automation services",
      "hire Selenium automation engineer",
      "Selenium WebDriver framework",
      "Selenium Page Object Model",
      "Selenium end-to-end testing",
      "Selenium cross-browser testing",
      "Selenium Grid setup",
      "Selenium with Java TestNG",
      "Selenium with Python pytest",
      "Selenium with C# NUnit",
      "Selenium CI integration Jenkins",
      "Selenium GitHub Actions",
      "Selenium Docker",
      "Selenium flaky test fixing",
      "Selenium data-driven testing",
      "Selenium BDD Cucumber",
      "Selenium regression suite",
      "Selenium reporting Allure",
      "Selenium vs Playwright",
      "Selenium test maintenance",
      "Selenium smoke test suite",
      "QA automation framework",
      "Selenium automation Coimbatore",
      "QA engineers India",
      "test automation consultants India",
      "Selenium experts Coimbatore",
    ],
    eyebrow: "SELENIUM TEST AUTOMATION",
    h1: "Selenium Test Automation That Catches Regressions, Not False Alarms",
    heroSubhead:
      "We build maintainable Selenium suites — Page Object Model, stable selectors, cross-browser runs on Selenium Grid, and CI integration — plus rescue work on suites that have become slow and flaky.",
    heroCtaLabel: "Talk to a QA automation engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY AUTOMATION DONE RIGHT",
    introTitle: "A flaky suite is worse than no suite",
    introBody:
      "A test suite that fails randomly gets ignored, and then it's just overhead. The value is in a suite people trust: stable selectors, explicit waits (never sleeps), the Page Object Model so a UI change is a one-line fix, and isolation so tests don't depend on each other. We build Selenium suites to that standard and clean up the ones that aren't.",
    introLinkLabel: "Read the Selenium documentation",
    introLinkHref: "https://www.selenium.dev/documentation/",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Framework, Grid and CI together",
    supportBody:
      "One team for the test framework and Page Objects, the Selenium Grid or cloud-grid setup for cross-browser runs, CI integration with reporting, test data management, and ongoing suite maintenance.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Selenium blog",
      body: "Write-ups on the Page Object Model, explicit waits, Grid scaling, killing flakiness, and where Selenium fits alongside Playwright and Cypress.",
      linkLabel: "Read the latest Selenium posts",
      href: "https://www.selenium.dev/blog/",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD SUITES",
      title: "Selenium in CI",
      body: "Regression and smoke suites running on every deploy across Chrome, Firefox and Edge, with clear reports and a low false-failure rate.",
      linkLabel: "Explore Selenium Grid",
      href: "https://www.selenium.dev/documentation/grid/",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Selenium Guide",
        body: "WebDriver, locators, explicit vs implicit waits, and the framework structure a real suite needs.",
        linkLabel: "Read the guide",
        href: "https://www.selenium.dev/documentation/webdriver/",
      },
      {
        icon: "🛠️",
        title: "Grid & Parallel Runs",
        body: "Selenium Grid and cloud grids for running the suite across browsers and versions in parallel.",
        linkLabel: "Explore Grid",
        href: "https://www.selenium.dev/documentation/grid/",
      },
      {
        icon: "📈",
        title: "Stability",
        body: "The Page Object Model, stable data-test attributes, retries done right, and diagnosing flaky tests.",
        linkLabel: "View the guide",
        href: "https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/",
      },
    ],
    journey: {
      eyebrow: "YOUR SELENIUM JOURNEY",
      title: "Build the suite, step by step",
      body: "Six reference topics we lean on when building a Selenium suite. Each opens the authoritative documentation.",
      items: [
        { label: "WebDriver fundamentals", href: "https://www.selenium.dev/documentation/webdriver/" },
        { label: "Locator strategies", href: "https://www.selenium.dev/documentation/webdriver/elements/locators/" },
        { label: "Explicit waits (no sleeps)", href: "https://www.selenium.dev/documentation/webdriver/waits/" },
        { label: "The Page Object Model", href: "https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/" },
        { label: "Running on Selenium Grid", href: "https://www.selenium.dev/documentation/grid/" },
        { label: "Test practices and anti-patterns", href: "https://www.selenium.dev/documentation/test_practices/" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Selenium Test Automation Playbook",
      body: "Enter your work email and we'll send you our guide to a suite you can trust — framework structure, the Page Object Model, waits, Grid, CI integration, flaky-test triage and a coverage checklist.",
      coverLabel: "Selenium Test Automation Playbook",
      coverSub: "2025 Edition",
      fileName: "selenium-test-automation-playbook.pdf",
      downloadPath: "/reports/selenium-test-automation-playbook.pdf",
    },
    faqs: [
      {
        question: "Which language and runner do you use with Selenium?",
        answer:
          "Java with TestNG, Python with pytest, or C# with NUnit — whichever matches your team's stack so they can own the suite. The framework patterns are the same across all three.",
        keywords: ["Selenium with Java TestNG", "Selenium with Python pytest", "Selenium with C# NUnit"],
      },
      {
        question: "How do you stop tests from being flaky?",
        answer:
          "Explicit waits instead of sleeps, stable data-test attributes instead of brittle XPaths, test isolation with fresh data per test, and a quarantine process for any test that does start flaking.",
        keywords: ["Selenium flaky test fixing", "Selenium explicit waits", "stable test selectors"],
      },
      {
        question: "Can you run tests across multiple browsers?",
        answer:
          "Yes — Selenium Grid or a cloud grid (BrowserStack, LambdaTest) to run the same suite on Chrome, Firefox, Edge and Safari, and on the browser versions you support, in parallel.",
        keywords: ["Selenium cross-browser testing", "Selenium Grid setup", "parallel Selenium runs"],
      },
      {
        question: "Can you integrate the suite into CI?",
        answer:
          "Yes — Jenkins, GitHub Actions, GitLab CI or Azure Pipelines, running smoke tests on every PR and the full regression on merge or nightly, with Allure or HTML reports.",
        keywords: ["Selenium CI integration Jenkins", "Selenium GitHub Actions", "Selenium reporting Allure"],
      },
      {
        question: "Can you rescue an existing suite that's slow and unreliable?",
        answer:
          "Yes — an audit, then refactoring to the Page Object Model, replacing sleeps with waits, fixing selectors, parallelising, and removing tests that don't earn their keep.",
        keywords: ["Selenium test maintenance", "Selenium suite refactor", "slow test suite"],
      },
      {
        question: "Do you support data-driven or BDD-style tests?",
        answer:
          "Yes — data-driven tests from CSV/JSON/DB for coverage across inputs, and Cucumber/Gherkin where non-technical stakeholders need to read the scenarios.",
        keywords: ["Selenium data-driven testing", "Selenium BDD Cucumber", "Gherkin scenarios"],
      },
      {
        question: "Selenium or Playwright/Cypress?",
        answer:
          "Playwright or Cypress are often faster and less flaky for a modern single-page app. Selenium wins for broad legacy-browser support, existing Java/C# QA teams, and Grid-based scale. We'll recommend based on your app and team.",
        keywords: ["Selenium vs Playwright", "Selenium vs Cypress", "test framework choice"],
      },
      {
        question: "What should Selenium actually cover?",
        answer:
          "The critical end-to-end flows — login, checkout, core workflows — as a regression and smoke layer. Unit and API tests cover the rest more cheaply; we help you balance the pyramid.",
        keywords: ["Selenium end-to-end testing", "Selenium regression suite", "Selenium smoke test suite"],
      },
      {
        question: "Can you run Selenium in Docker?",
        answer:
          "Yes — containerised browsers and a Dockerised Grid so CI runs are reproducible and don't depend on what's installed on the runner.",
        keywords: ["Selenium Docker", "containerised Selenium", "reproducible test environment"],
      },
      {
        question: "Where is your QA automation team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available to build a suite from scratch, rescue an existing one, or provide ongoing QA automation, with clients in India and internationally.",
        keywords: ["Selenium automation Coimbatore", "QA engineers India", "test automation consultants India"],
      },
    ],
    media: {
      video: {
        label: "Watch: Selenium framework basics",
        sub: "WebDriver, waits and the Page Object Model",
        href: "https://www.youtube.com/results?search_query=selenium+webdriver+page+object+model+tutorial",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Selenium Automation Handbook",
        fileName: "selenium-automation-handbook.pdf",
        downloadPath: "/ebooks/selenium-automation-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Selenium Test Automation Playbook 2025",
        fileName: "selenium-test-automation-playbook.pdf",
        downloadPath: "/reports/selenium-test-automation-playbook.pdf",
      },
    },
  },

  // ==================================================================
  // Spring — Java enterprise backends and microservices
  // ==================================================================
  {
    slug: "spring",
    name: "Spring",
    category: "Java Enterprise Framework",
    metaTitle:
      "Spring Boot Development Company | Java APIs, Microservices & Enterprise Backends | NeuralArc",
    metaDescription:
      "NeuralArc builds Java backends with Spring Boot in Coimbatore — REST APIs, microservices, Spring Security, Spring Data JPA, messaging, batch jobs and cloud deployment for enterprise-grade systems.",
    keywords: [
      "Spring Boot development company",
      "Spring Boot development services",
      "hire Spring Boot developer",
      "Java backend development",
      "Spring REST API development",
      "Spring microservices architecture",
      "Spring Security OAuth2 JWT",
      "Spring Data JPA Hibernate",
      "Spring Boot with PostgreSQL",
      "Spring Boot with MySQL",
      "Spring Cloud config discovery",
      "Spring Boot Kafka messaging",
      "Spring Batch jobs",
      "Spring Boot Docker Kubernetes",
      "Spring Boot testing JUnit Mockito",
      "Spring Boot performance tuning",
      "Spring Boot API documentation OpenAPI",
      "Spring Boot monolith to microservices",
      "Spring Boot 2 to 3 migration",
      "Spring Boot GraalVM native image",
      "Spring WebFlux reactive",
      "legacy Java Spring modernization",
      "Spring Boot development Coimbatore",
      "Java developers India",
      "enterprise backend developers India",
      "Spring experts Coimbatore",
    ],
    eyebrow: "SPRING BOOT JAVA ENGINEERING",
    h1: "Spring Boot Development for Enterprise Java APIs and Microservices",
    heroSubhead:
      "We build Java backends on Spring Boot — REST APIs, microservices, security, data access, messaging and batch jobs — with the testing, observability and deployment setup that enterprise systems require.",
    heroCtaLabel: "Talk to a Java engineer",
    heroCtaTo: "/contact",
    introEyebrow: "WHY SPRING",
    introTitle: "The default choice when the backend has to be robust and long-lived",
    introBody:
      "Spring Boot is what large organisations reach for when a backend has to be maintainable for a decade, integrate with everything, and pass a security review. Convention over configuration gets a service running quickly; Spring Security, Spring Data and Spring Cloud cover auth, persistence and distributed concerns without reinventing them. We build services that are testable, observable and deployable to Kubernetes from day one.",
    introLinkLabel: "Read the Spring Framework documentation",
    introLinkHref: "https://docs.spring.io/spring-framework/reference/",
    supportEyebrow: "END-TO-END OWNERSHIP",
    supportTitle: "Services, data, messaging and deployment together",
    supportBody:
      "One team for API and service design, Spring Data and database schema, Spring Security, messaging with Kafka or RabbitMQ, batch jobs, containerisation and the Kubernetes or cloud deployment.",
    blog: {
      eyebrow: "INSIGHTS & TUTORIALS",
      title: "Read the Spring blog",
      body: "Write-ups on Spring Boot 3, native images with GraalVM, security patterns, microservice boundaries, observability and the migration from Spring Boot 2.",
      linkLabel: "Read the latest from the Spring blog",
      href: "https://spring.io/blog",
    },
    caseStudy: {
      eyebrow: "REAL-WORLD BUILDS",
      title: "Spring Boot in production",
      body: "Enterprise APIs, payment and settlement systems, integration platforms and microservice estates built on Spring Boot.",
      linkLabel: "Browse the Spring guides",
      href: "https://spring.io/guides",
    },
    resourceCards: [
      {
        icon: "📘",
        title: "Spring Boot Guide",
        body: "Auto-configuration, starters, profiles and the anatomy of a well-structured Spring Boot service.",
        linkLabel: "Read the guide",
        href: "https://docs.spring.io/spring-boot/reference/",
      },
      {
        icon: "🛠️",
        title: "Security & Data",
        body: "Spring Security with OAuth2/JWT, Spring Data JPA, transactions, and repository patterns.",
        linkLabel: "Explore the modules",
        href: "https://docs.spring.io/spring-security/reference/",
      },
      {
        icon: "📈",
        title: "Cloud & Observability",
        body: "Spring Cloud, Actuator, Micrometer and distributed tracing for a microservice estate you can operate.",
        linkLabel: "View the guide",
        href: "https://docs.spring.io/spring-boot/reference/actuator/index.html",
      },
    ],
    journey: {
      eyebrow: "YOUR SPRING JOURNEY",
      title: "Learn the framework, step by step",
      body: "Six reference topics we lean on when building on Spring Boot. Each opens the authoritative documentation.",
      items: [
        { label: "Building a REST service with Spring Boot", href: "https://spring.io/guides/gs/rest-service" },
        { label: "Accessing data with Spring Data JPA", href: "https://spring.io/guides/gs/accessing-data-jpa" },
        { label: "Securing a service with Spring Security", href: "https://docs.spring.io/spring-security/reference/servlet/getting-started.html" },
        { label: "Messaging with Spring for Apache Kafka", href: "https://docs.spring.io/spring-kafka/reference/" },
        { label: "Production readiness with Actuator", href: "https://docs.spring.io/spring-boot/reference/actuator/index.html" },
        { label: "Spring Boot on Kubernetes", href: "https://spring.io/guides/topicals/spring-on-kubernetes" },
      ],
    },
    report: {
      eyebrow: "DOWNLOAD THE REPORT",
      title: "Get the Spring Boot Backend Playbook",
      body: "Enter your work email and we'll send you our guide to enterprise-grade Spring Boot — service structure, security, data access, messaging, testing, observability and a production-readiness checklist.",
      coverLabel: "Spring Boot Backend Playbook",
      coverSub: "2025 Edition",
      fileName: "spring-boot-backend-playbook.pdf",
      downloadPath: "/reports/spring-boot-backend-playbook.pdf",
    },
    faqs: [
      {
        question: "What do you build with Spring Boot?",
        answer:
          "REST and GraphQL APIs, microservices, integration and middleware services, batch and scheduled jobs, and event-driven services — the backend layer for enterprise web and mobile systems.",
        keywords: ["Spring REST API development", "Spring microservices architecture", "Java backend development"],
      },
      {
        question: "How do you handle authentication and authorization?",
        answer:
          "Spring Security with OAuth2 / OIDC and JWT, method- and URL-level authorization, and integration with your identity provider (Keycloak, Okta, Entra ID) rather than a bespoke auth system.",
        keywords: ["Spring Security OAuth2 JWT", "Spring Security authorization", "Java API security"],
      },
      {
        question: "Which database and ORM setup do you use?",
        answer:
          "Spring Data JPA with Hibernate over PostgreSQL or MySQL for most services, with Flyway or Liquibase migrations, and careful attention to lazy loading and the N+1 problem.",
        keywords: ["Spring Data JPA Hibernate", "Spring Boot with PostgreSQL", "Spring Boot with MySQL"],
      },
      {
        question: "Can you split a monolith into microservices?",
        answer:
          "Yes — but only where it pays off. We identify real service boundaries, extract them incrementally behind an API gateway, and keep the parts that are fine as they are.",
        keywords: ["Spring Boot monolith to microservices", "microservice decomposition", "Spring Cloud"],
      },
      {
        question: "Can you upgrade a project from Spring Boot 2 to 3?",
        answer:
          "Yes — the Jakarta EE namespace change, Java 17+ baseline, security config updates and deprecated-API replacements, done module by module with the test suite as a safety net.",
        keywords: ["Spring Boot 2 to 3 migration", "Spring Boot upgrade", "Jakarta EE migration"],
      },
      {
        question: "How do you make Spring Boot services observable?",
        answer:
          "Actuator health and metrics, Micrometer to Prometheus, structured logging, and distributed tracing (OpenTelemetry) so a slow request can be followed across services.",
        keywords: ["Spring Boot Actuator", "Spring Boot observability", "Spring Boot distributed tracing"],
      },
      {
        question: "Do you use reactive Spring (WebFlux)?",
        answer:
          "Where it's justified — very high-concurrency, streaming or backpressure-sensitive services. For typical CRUD APIs, the servlet stack is simpler and we stick with it.",
        keywords: ["Spring WebFlux reactive", "reactive Java", "Spring reactive streams"],
      },
      {
        question: "How do you test Spring Boot code?",
        answer:
          "Unit tests with JUnit 5 and Mockito, slice tests (@WebMvcTest, @DataJpaTest), and integration tests with Testcontainers against real databases and brokers, all in CI.",
        keywords: ["Spring Boot testing JUnit Mockito", "Spring Boot Testcontainers", "Spring integration testing"],
      },
      {
        question: "Can you deploy Spring Boot to Kubernetes?",
        answer:
          "Yes — layered Docker images (or GraalVM native images for fast startup), health and readiness probes, config via ConfigMaps and Secrets, and Helm charts for repeatable deploys.",
        keywords: ["Spring Boot Docker Kubernetes", "Spring Boot GraalVM native image", "Spring Boot cloud deployment"],
      },
      {
        question: "Where is your Java / Spring development team located?",
        answer:
          "Coimbatore, India, at T15, Arjun IT Park, Thamaraikulam, Chettikkapalayam, Coimbatore 642120. Available for a full backend, a migration, or a specific service, with clients in India and internationally.",
        keywords: ["Spring Boot development Coimbatore", "Java developers India", "enterprise backend developers India"],
      },
    ],
    media: {
      video: {
        label: "Watch: Spring Boot API basics",
        sub: "Building a secured REST service with Spring Data",
        href: "https://www.youtube.com/@SpringSourceDev/videos",
      },
      ebook: {
        label: "Read the E-book",
        sub: "The Spring Boot Backend Handbook",
        fileName: "spring-boot-backend-handbook.pdf",
        downloadPath: "/ebooks/spring-boot-backend-handbook.pdf",
      },
      report: {
        label: "Read the Report",
        sub: "Spring Boot Backend Playbook 2025",
        fileName: "spring-boot-backend-playbook.pdf",
        downloadPath: "/reports/spring-boot-backend-playbook.pdf",
      },
    },
  },
];

export default technologiesData;

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
