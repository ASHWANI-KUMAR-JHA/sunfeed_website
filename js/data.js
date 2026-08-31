// ==========================================================
// SUNFEED ECOSOLUTIONS - APPLICATION DATA
// ==========================================================

const COMPANY = {
  name: 'Sunfeed Ecosolutions India Pvt. Ltd.',
  established: 2016,
  cin: 'U40300HR2016PTC058410',
  gstin: '06AAWCS8301B1ZC',
  address: '527, 5th Floor, DLF Star Tower, Sector-30, Opposite 32 Mile Stone, Gurugram, Haryana – 122001, India',
  phone: '+91-124-4072847',
  mobile: '+91-124-4072847',
  email: 'info.sunfeed@gmail.com',
  website: 'www.sunfeed.in',
  tagline: 'Powering Sustainable Infrastructure Through Solar Energy',
};

const HERO_SLIDES = [
  {
    id: 1,
    image: 'images/hero-solar-4.png',
    title: 'Powering Brighter Streets',
    highlight: 'with Solar Energy',
    description: 'Smart solar lighting solutions designed for safer roads, better communities & a greener future.',
  },
  {
    id: 2,
    image: 'images/hero-solar-1.jpg',
    title: 'Harnessing the Power of the Sun',
    highlight: 'Clean Energy. Smarter Future.',
    description: 'Reliable solar solutions designed for sustainable power, greater efficiency & long-term value.',
  },
  {
    id: 3,
    image: 'images/hero-solar-2.jpg',
    title: 'Engineering Solar Solutions',
    highlight: 'From Planning to Execution',
    description: 'Expert project planning, technical design and on-site execution for reliable and efficient solar energy infrastructure.',
  },
  {
    id: 4,
    image: 'images/hero-solar-5.png',
    title: 'High Mast Solar Lighting',
    highlight: 'for Large-Scale Infrastructure',
    description: 'High-performance solar lighting solutions for highways, industrial areas, public spaces and infrastructure projects.',
  },
  {
    id: 5,
    image: 'images/hero-solar-3.jpg',
    title: 'Powering a Sustainable Future',
    highlight: 'Through Solar Energy',
    description: 'From Solar Power Projects to Solar Street Lighting, we deliver dependable clean-energy solutions built for lasting impact.',
  },
];

const SERVICES = [
  { icon: 'sun', title: 'Solar Street Lighting', desc: 'Autonomous LED luminaires with LiFePO4 battery integration, hot-dip galvanized poles, and automated dusk-to-dawn dimming.' },
  { icon: 'tower-control', title: 'Solar High Mast Lighting', desc: '9m–12m polygonal high mast towers with 4 to 8 multi-directional LED floodlights for junctions, public squares, and wide-area facilities.' },
  { icon: 'zap', title: 'Solar PV / Power Plants', desc: 'Turnkey 10 kWp to multi-MW rooftop and ground-mounted solar PV systems with Tier-1 mono PERC modules and DISCOM net-metering.' },
  { icon: 'battery-charging', title: 'Battery Storage (LiFePO4)', desc: 'Lithium Iron Phosphate energy storage packs with multi-tier Battery Management Systems (BMS) for extreme thermal stability.' },
  { icon: 'activity', title: 'Remote Monitoring (RMS)', desc: '4G LTE telemetry tracking energy generation, battery SoC, lighting schedules, and automatic dispatch notifications.' },
  { icon: 'wrench', title: 'AMC / O&M Maintenance', desc: 'Preventive and corrective maintenance programs with district-level rapid response teams, spares stocking, and uptime guarantees.' },
];

const TESTIMONIALS = [
  {
    quote: "The solar street lighting rollout across our district was completed on schedule with strong coordination and timely commissioning from the Sunfeed engineering team.",
    author: "District Project Engineer",
    role: "District Renewable Energy Cell",
    location: "Bihar (MGSSLY)",
  },
  {
    quote: "Integrated 4G Remote Monitoring (RMS) telemetry provides our state nodal dashboard complete real-time visibility into battery health and dusk-to-dawn lumen output.",
    author: "Technical Nodal Executive",
    role: "State Renewable Energy Agency Liaison",
    location: "Haryana (HAREDA Region)",
  },
  {
    quote: "Exceptional LiFePO4 battery pack reliability and robust high mast installation engineered specifically to withstand challenging high-wind hill terrains.",
    author: "Site Infrastructure Coordinator",
    role: "Public Works & Energy Wing",
    location: "Himachal Pradesh (HIMURJA)",
  },
];

const STATE_AGENCIES = [
  {
    code: 'BREDA',
    name: 'Bihar Renewable Energy Development Agency',
    state: 'Bihar',
    project: 'Mukhyamantri Gramin Solar Street Light Yojana (MGSSLY)',
    quantity: '58,000+ Solar Street Lights',
    year: '2025–2026',
    districts: ['Siwan', 'Banka', 'Khagaria', 'Muzaffarpur'],
    status: 'In Progress / Phase-wise Implementation',
    description: 'Large-scale rural electrification under MGSSLY across gram panchayats in Bihar with LiFePO4 storage and centralized RMS.',
    highlights: ['58,000+ solar street lighting scope', 'Phase-wise commissioning with live RMS', 'End-to-end supply, installation & commissioning'],
  },
  {
    code: 'HIMURJA',
    name: 'Himachal Pradesh Energy Development Agency',
    state: 'Himachal Pradesh',
    project: 'HIMURJA Solar Energy Projects',
    quantity: '1,500+ Solar Installations',
    year: '2025–2026',
    districts: ['Multiple locations across HP'],
    status: 'In Progress / Phase-wise Execution',
    description: 'Cold-climate resilient solar lighting and power systems across challenging high-altitude terrain in Himachal Pradesh.',
    highlights: ['1,500+ solar systems deployed', 'High-altitude structural engineering', 'Reliable winter operation & autonomy planning'],
  },
  {
    code: 'HAREDA',
    name: 'Haryana Renewable Energy Development Agency',
    state: 'Haryana',
    project: 'Solar Street Lighting & Renewable Energy',
    quantity: '1,000+ Solar Installations',
    year: '2025–2026',
    districts: ['Rewari', 'Panchkula', 'Ambala', 'Kurukshetra'],
    status: 'Active Execution & Commissioning',
    description: 'High-efficiency solar street lighting, high-mast illumination, and institutional solar PV infrastructure across Haryana.',
    highlights: ['1,000+ installations across key districts', 'HAREDA technical spec compliance', 'Fast-track deployment urban & rural'],
  },
];

const FAQ_DATA = [
  { q: 'What types of solar solutions does Sunfeed provide?', a: 'Sunfeed provides Solar Street Lighting Systems, Solar High Mast Lighting, Solar PV / Power Plants (10kWp to 6MW+), LiFePO4 Battery Storage, Remote Monitoring Systems (4G RMS IoT), and end-to-end Supply, Installation, Testing & Commissioning.', cat: 'General' },
  { q: 'Which states does Sunfeed operate in?', a: 'Sunfeed actively operates across Bihar (BREDA), Haryana (HAREDA), and Himachal Pradesh (HIMURJA), with project experience also in Uttarakhand (UREDA) and Tripura (TREDA).', cat: 'General' },
  { q: 'What is the battery technology used in solar street lights?', a: 'Sunfeed uses Lithium Iron Phosphate (LiFePO4) batteries offering 3,000+ deep discharge cycles, excellent thermal stability (-10°C to +60°C), zero maintenance, and integrated Battery Management Systems (BMS).', cat: 'Technical' },
  { q: 'Does Sunfeed provide Remote Monitoring Systems (RMS)?', a: 'Yes. Our 4G/GSM-based RMS provides real-time telemetry including battery SoC, charging current, GPS location, luminaire status, fault alerts, and cloud dashboard access compliant with state nodal agency requirements.', cat: 'Technical' },
  { q: 'Can Sunfeed handle government tenders and bulk orders?', a: 'Absolutely. Sunfeed specializes in government and institutional projects, having executed 58,000+ solar street lighting systems under state nodal agency tenders with full MNRE compliance.', cat: 'Business' },
  { q: 'What certifications does Sunfeed hold?', a: 'Sunfeed holds ISO 9001:2015, ISO 14001:2015, MSME registration, valid GST & PAN, and complies with MNRE benchmark specifications and BIS/IEC standards for all components.', cat: 'Business' },
  { q: 'How do I request a project consultation or DPR?', a: 'You can submit an inquiry through our Contact page, call our engineering desk at +91-124-4072847, or email info.sunfeed@gmail.com with your project requirements for a detailed feasibility assessment.', cat: 'Support' },
];

const CERTIFICATIONS = [
  { title: 'Company Registration (CIN)', detail: 'U40300HR2016PTC058410 – Incorporated March 2016' },
  { title: 'GSTIN Registration', detail: '06AAWCS8301B1ZC – Haryana' },
  { title: 'ISO 9001:2015', detail: 'Quality Management System Certification' },
  { title: 'ISO 14001:2015', detail: 'Environmental Management System Certification' },
  { title: 'MSME Registration', detail: 'Udyam / MSME Registered Enterprise' },
  { title: 'PAN & TAN Registration', detail: 'Valid Income Tax & TDS Registration' },
  { title: 'MNRE Compliance', detail: 'Ministry of New & Renewable Energy Benchmark Standards' },
  { title: 'BIS / IEC Standards', detail: 'Bureau of Indian Standards & International Electrotechnical Commission' },
  { title: 'BREDA Empanelment', detail: 'Bihar Renewable Energy Development Agency – Approved Vendor' },
  { title: 'HAREDA Empanelment', detail: 'Haryana Renewable Energy Dev Agency – Approved Contractor' },
  { title: 'HIMURJA Empanelment', detail: 'HP Energy Development Agency – Approved EPC Partner' },
  { title: 'Labour License & ESI/PF', detail: 'Valid Labour License with ESI & PF compliance for field teams' },
];

const WHY_SUNFEED = [
  { title: 'Established Enterprise (2016)', desc: '10+ years of experience in solar infrastructure and turnkey public projects.' },
  { title: 'Government Project Focus', desc: 'Experience with public tenders, compliance requirements, and multi-agency coordination.' },
  { title: 'Multi-State Footprint', desc: 'Project experience across Bihar (BREDA), Haryana (HAREDA), and Himachal Pradesh (HIMURJA).' },
  { title: 'End-to-End Execution', desc: 'Turnkey project capabilities from requirement assessment and supply to installation and support.' },
  { title: 'Technology-Driven', desc: 'LiFePO₄ batteries, high-lumen LEDs, MPPT controllers, and 4G-enabled remote monitoring.' },
  { title: 'Field Capability', desc: 'On-ground teams supporting distributed installations across urban and remote locations.' },
  { title: 'Quality at Every Stage', desc: 'Systematic inspection of materials, assemblies, foundations, installation, and electrical safety.' },
  { title: 'Long-Term Commitment', desc: 'Reliable after-sales service and maintenance focused on long-term project performance.' },
];

const CAREERS = [
  { title: 'Solar Design Engineer', type: 'Full-Time', location: 'Gurugram, Haryana', desc: 'Design and optimize solar PV systems, street lighting configurations, and high-mast layouts for government tenders.' },
  { title: 'Field Installation Supervisor', type: 'Full-Time', location: 'Bihar / Haryana / HP', desc: 'Supervise on-site civil and electrical installation of solar lighting and PV infrastructure.' },
  { title: 'IoT / RMS Engineer', type: 'Full-Time', location: 'Gurugram / Remote', desc: 'Develop and maintain 4G cloud telemetry, firmware, and dashboard systems for solar asset monitoring.' },
  { title: 'Quality Assurance Lead', type: 'Full-Time', location: 'Mandsaur, MP', desc: 'Oversee battery assembly quality, incoming material inspection, and pre-dispatch testing protocols.' },
  { title: 'Project Coordinator', type: 'Full-Time', location: 'Gurugram / Field', desc: 'Coordinate multi-state project logistics, vendor management, and government agency liaising.' },
];
