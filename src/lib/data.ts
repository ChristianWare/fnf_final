import CherylC from "../../public/images/CherylC.jpg";
import JimConnie from "../../public/images/Jim&Connie.jpg";
import Adam from "../../public/images/Adam.jpg";
import Lynn from "../../public/images/lynn.jpg";
import Lady from "../../public/images/lady.jpg";
import Linda from "../../public/images/linda.jpg";
import Sheryl from "../../public/images/sheryl.jpg";
import Jeff from "../../public/images/jeff.jpg";
import Project1 from "../../public/images/howItWorks.jpg";
import Project2 from "../../public/images/speed.jpg";
import Project3 from "../../public/images/faqii.jpg";

export const projects = [
  {
    src: Project3,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    category: "Online Store",
    href: "https://www.livemas.dev/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
  {
    src: Project1,
    title: "Elite Retreat Rentals",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    category: "Online Store",
    href: "https://www.eliteretreatrentals.com/",
    github: "https://github.com/ChristianWare/Case-Study-One",
  },
  {
    src: Project2,
    title: "Nier Transportaion",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    category: "Online Store",
    href: "https://www.niertransportation.com/",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
  },
] as const;

export const pricingData = [
  {
    id: 1,
    service: "E-commerce Online Store",
    headline: "Building robust, scalable online stores",
    desc: "Custom built website, with up to 25 live SKUs, single language, single currency, Stripe or Shopify Payments. Timeline: four weeks.",
    price: "$5,900",
    servicesInclude: [
      {
        id: 3.1,
        serviceName: "Custom e-commerce development",
        description:
          "We build tailored e-commerce solutions that address your unique business requirements and customer needs.",
      },
      {
        id: 3.2,
        serviceName: "Platform migration (Shopify, WooCommerce, etc.)",
        description:
          "We seamlessly transition your existing store to a new platform while preserving your data, SEO, and customer experience.",
      },
      {
        id: 3.3,
        serviceName: "Payment gateway integration",
        description:
          "We implement secure, reliable payment processing options that support your customers' preferred payment methods.",
      },
      {
        id: 3.4,
        serviceName: "Shipping and tax configuration",
        description:
          "We set up accurate shipping calculations and tax applications to prevent checkout surprises and abandoned carts.",
      },
    ],
    addonSectionData: [
      {
        id: 1,
        expansionblock: "Catelog Tier",
        details: "Every additional band of 75 SKUs (26-100, 101-175, etc.)",
        price: "$1,200",
      },
      {
        id: 2,
        expansionblock: "Channel Tier",
        details: "Each additional language or currency beyond the first",
        price: "$1,000",
      },
      {
        id: 3,
        expansionblock: "Feature Tier",
        details:
          "Any bespoke module—subscription engine, product customiser, B2B pricing",
        price: "Starting at $1,500 per module",
      },
      {
        id: 4,
        expansionblock: "Integration Tier",
        details:
          "ERP, CRM, or fulfilment API beyond the native Shopify connectors",
        price: "$2,000 per integration",
      },
    ],
  },
  {
    id: 2,
    service: "Appointment & Booking Platform",
    headline: "Fast, friction-free scheduling & reservations",
    desc: "Custom-built booking platform with real-time calendar sync, single/multiple locations, and secure Stripe deposit or full-payment checkout. Timeline: four weeks.",
    price: "$4,500",
    servicesInclude: [
      {
        id: 4.1,
        serviceName: "Custom booking-flow design",
        description:
          "We map and code a user journey that matches your service logic—single appointments, multi-step rentals, or group sessions—so guests book in under 60 seconds.",
      },
      {
        id: 4.2,
        serviceName: "Real-time calendar & resource sync",
        description:
          "Your online availability pulls live data from Google Calendar, Microsoft 365, or PMS APIs, eliminating double-bookings.",
      },
      {
        id: 4.3,
        serviceName: "Integrated payments & deposits",
        description:
          "Stripe and Square gateways handle deposits, full charges, or split payments while keeping you PCI compliant.",
      },
      {
        id: 4.4,
        serviceName: "Automated reminders & no-show protection",
        description:
          "SMS and email reminders reduce no-shows by up to 40 %. Optional card-on-file or late-cancel fees protect revenue.",
      },
    ],
    addonSectionData: [
      {
        id: 1,
        expansionblock: "Resource Tier",
        details:
          "Every additional bundle of 5 staff calendars or rental units beyond the first 3 included",
        price: "$600",
      },
      {
        id: 2,
        expansionblock: "Location Tier",
        details:
          "Each extra physical branch, villa, or property added to the same booking backend",
        price: "$800",
      },
      {
        id: 3,
        expansionblock: "Feature Tier",
        details:
          "Dynamic pricing, membership programmes, gift-card store, or upsell package builder",
        price: "Starting at $1,200 per module",
      },
      {
        id: 4,
        expansionblock: "Integration Tier",
        details:
          "External PMS, CRM, or accounting API beyond default Stripe export and Google Calendar sync",
        price: "$1,800 per integration",
      },
    ],
  },

  /* ––––– NEW ITEM 3 ––––– */
  {
    id: 3,
    service: "Marketing & Brand Website",
    headline: "Lightning-fast pages that turn visitors into leads",
    desc: "Conversion-optimised brochure site (up to 10 pages) built on a headless CMS, with on-page SEO and interactive animations. Timeline: three weeks.",
    price: "$3,900",
    servicesInclude: [
      {
        id: 5.1,
        serviceName: "Headless CMS setup (Sanity, Contentful, etc.)",
        description:
          "Edit copy, images, and landing pages on-the-fly without touching code.",
      },
      {
        id: 5.2,
        serviceName: "Performance & technical SEO hardening",
        description:
          "Core Web Vitals, schema markup, and best-practice meta structure baked in from day one.",
      },
      {
        id: 5.3,
        serviceName: "Interactive UI & micro-animations",
        description:
          "GSAP / Framer Motion effects that showcase your brand story and increase dwell time.",
      },
      {
        id: 5.4,
        serviceName: "Lead-capture & CRM automation",
        description:
          "Forms pipe directly into HubSpot, Mailchimp, or your preferred CRM for instant follow-up.",
      },
    ],
    addonSectionData: [
      {
        id: 1,
        expansionblock: "Page Tier",
        details: "Each additional bundle of 5 pages (11-15, 16-20, etc.)",
        price: "$500",
      },
      {
        id: 2,
        expansionblock: "Blog Tier",
        details:
          "Full content-hub build with categories, tags, and author roles",
        price: "$700",
      },
      {
        id: 3,
        expansionblock: "Feature Tier",
        details:
          "Custom calculators, interactive maps, or immersive 3-D hero sections",
        price: "Starting at $1,000 per module",
      },
      {
        id: 4,
        expansionblock: "Integration Tier",
        details:
          "Marketing automation or analytics platform beyond basic Google Analytics 4",
        price: "$900 per integration",
      },
    ],
  },

  /* ––––– NEW ITEM 4 ––––– */
  {
    id: 4,
    service: "Subscription & Membership Platform",
    headline: "Recurring revenue on autopilot",
    desc: "Custom subscription engine with Stripe recurring billing, self-service customer portal, and automated churn control. Timeline: four weeks.",
    price: "$5,200",
    servicesInclude: [
      {
        id: 6.1,
        serviceName: "Plan & product configuration",
        description:
          "Set up free trials, tiered pricing, discounts, and add-ons without dev tickets.",
      },
      {
        id: 6.2,
        serviceName: "Secure member portal",
        description:
          "Customers manage plans, upgrades, and billing details from any device.",
      },
      {
        id: 6.3,
        serviceName: "Automated billing & dunning",
        description:
          "Failed-payment retries, smart reminders, and re-activation flows that recover up to 15 % of at-risk MRR.",
      },
      {
        id: 6.4,
        serviceName: "Analytics & cohort dashboards",
        description:
          "Instant insights into churn, LTV, and retention so you can pivot marketing spend fast.",
      },
    ],
    addonSectionData: [
      {
        id: 1,
        expansionblock: "Tier Expansion",
        details: "Every additional 5 subscription plans beyond the first 3",
        price: "$400",
      },
      {
        id: 2,
        expansionblock: "Feature Tier",
        details:
          "Gift subscriptions, referral programme, or loyalty-points engine",
        price: "Starting at $1,100 per module",
      },
      {
        id: 3,
        expansionblock: "Integration Tier",
        details:
          "3PL fulfilment, ERP, or advanced tax/VAT service (e.g., TaxJar, Avalara)",
        price: "$1,600 per integration",
      },
      {
        id: 4,
        expansionblock: "Compliance Tier",
        details: "GDPR, SOC 2, or SCA audit package",
        price: "$900",
      },
    ],
  },
] as const;

export const reviews = [
  {
    id: 1,
    review:
      "Fonts & Footers rebuilt our California-style furniture store from the ground up. Page-load times dropped from six seconds to under one, our bounce rate fell 32 %, and revenue doubled the very next quarter. Truly transformative work.",
    reviewer: "Alicia G.",
    company: "Coastal Oak Furnishings",
    person: Lady, // import your client avatar or photo
  },
  {
    id: 2,
    review:
      "Chris delivers reliable, white-glove service in pure tech luxury. We launch one or two promotions every month and he’s always a step ahead—confirming details the day before and pushing updates at 4 a.m. if my schedule changes. It’s priceless having a partner I can trust while I sleep.",
    reviewer: "Sheryl G.",
    company: "Golden Grain Coffee, Scottsdale AZ",
    person: Sheryl,
  },
  {
    id: 3,
    review:
      "I lean on Fonts & Footers weekly for product drops and occasionally for personal side projects. They’re always on time, super friendly, and helpful—all at very reasonable rates. Couldn’t ask for a better dev team.",
    reviewer: "Jeff G.",
    company: "WildPup Gear",
    person: Jeff,
  },
  {
    id: 4,
    review:
      "We’ve hired this team four separate times in the past few months. Booking each sprint is seamless. Chris is professional, friendly, and prompt—as are the rest of his engineers. Pricing is competitive, the codebase is spotless, and the ROI keeps us coming back.",
    reviewer: "Cheryl C.",
    company: "NorthPeak Activewear",
    person: CherylC,
  },
  {
    id: 5,
    review:
      "After one project with Chris we switched to Fonts & Footers exclusively. Their pride, professionalism, and meticulous attention to detail give us total peace of mind. They monitor our Shopify traffic in real time and adjust deployments—no excuses, no surprises.",
    reviewer: "Jim & Connie A.",
    company: "Evergreen Home Décor",
    person: JimConnie,
  },
  {
    id: 6,
    review:
      "We hired Fonts & Footers to launch—and later refresh—our European campaign site. Best decision! The pages feel luxurious, fresh, and built for conversions. Extra thanks for being online at 1 : 30 a.m. the night we went live!",
    reviewer: "Lynn B.",
    company: "Sun Valley Outdoor Living, Tempe AZ",
    person: Lynn,
  },
  {
    id: 7,
    review:
      "We’ve used this service multiple times. The developers are great—always professional and prompt. You can tell they care deeply about code quality and customer experience. Highly recommend.",
    reviewer: "Illeana L.",
    company: "Mesa Organics",
    person: Linda,
  },
  {
    id: 8,
    review:
      "I’d never worked with an outside dev shop before, but Fonts & Footers made it easy. I travel almost weekly; plans change constantly and Chris still comes through—he even hopped in to upload a missing asset while I was in Hawaii. Clean code, fair pricing, top-tier people. Highly recommended.",
    reviewer: "Adam B.",
    company: "Urban Roots Apparel, Phoenix AZ",
    person: Adam,
  },
] as const;

export const specialties = [
  {
    id: 1,
    feature: "B2C storefronts",
    desc: "→ Direct-to-consumer online shops ideal for retail brands, specialty goods, and independent artisans looking to sell products directly to end consumers.",
  },
  {
    id: 2,
    feature: "B2B portals",
    desc: "→ Business-focused platforms perfect for wholesalers, manufacturers, industrial suppliers, and service providers who primarily sell to other businesses rather than consumers.",
  },
  {
    id: 3,
    feature: "Digital product delivery",
    desc: "→ Platforms for selling and distributing non-physical goods, perfect for educational content creators, software developers, digital artists, and e-book publishers.",
  },
  {
    id: 4,
    feature: "Subscription services",
    desc: "→ Recurring billing platforms ideal for software companies (SaaS), content creators, box subscription services, and membership organizations requiring regular payment processing.",
  },
  {
    id: 5,
    feature: "Service booking platforms",
    desc: "→ Appointment and reservation systems ideal for consultants, healthcare providers, beauty professionals, fitness instructors, and event venues needing to manage client scheduling.",
  },
  {
    id: 6,
    feature: "Multi-vendor marketplaces",
    desc: "→ Platforms hosting multiple sellers, perfect for community marketplaces, industry-specific exchanges, and businesses looking to create their own Amazon or Etsy-like ecosystem.",
  },
  {
    id: 7,
    feature: "Rental platforms",
    desc: "→ Temporary-use item booking systems ideal for equipment rental businesses, property managers, vehicle rentals, and peer-to-peer sharing economy ventures.",
  },
] as const;
