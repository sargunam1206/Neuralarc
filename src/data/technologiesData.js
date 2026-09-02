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
};

export const getTechPagePath = (techName) => {
  const slug = techPageSlugByName[normalizeTech(techName)];
  return slug ? `/technologies/${slug}` : null;
};
