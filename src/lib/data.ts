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
  /* ––––– EXISTING ITEMS ––––– */
  {
    id: 1,
    service: "E-commerce Shop",
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
    service: "Booking Platform",
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
