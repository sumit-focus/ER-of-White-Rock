import '../chunks/page-ssr_BG6rDwkd.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DK4fnEpZ.mjs';
import { $ as $$Hero, a as $$ServingAreas, b as $$ComparisonTable } from '../chunks/ComparisonTable_CjjUG8p3.mjs';
import { $ as $$TrustBadges, a as $$InsuranceBar, b as $$ServicesGrid, c as $$WhenToCome, d as $$WhatToExpect, e as $$Physicians, f as $$Testimonials } from '../chunks/InsuranceBar_CVqKRrns.mjs';
import { $ as $$WhyChoose, a as $$CTA } from '../chunks/CTA_CpAe_erJ.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_B0siQolf.mjs';
import { a as getLandingPage } from '../chunks/sanity_Cpxq_s79.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const landingPage = await getLandingPage().catch(() => null);
  const { content } = landingPage || {};
  const getSection = (type) => content?.find((s) => s._type === type);
  const fetchedHero = getSection("hero");
  const fetchedTrust = getSection("trustBadges");
  const fetchedServing = getSection("communitySection");
  const fetchedServices = getSection("servicesSection");
  const fetchedComparison = getSection("comparisonTable");
  const fetchedSymptom = getSection("whenToCome");
  const fetchedProcess = getSection("processSection");
  const fetchedWhyChoose = getSection("whyChooseSection");
  const fetchedPhysicians = getSection("physiciansSection");
  const fetchedTestimonials = getSection("testimonialsSection");
  const fetchedInsurance = getSection("insuranceBar");
  const fetchedFaq = getSection("faqSection");
  const fetchedCta = getSection("ctaSection");
  const defaultHeroData = {
    headline: "24/7 Emergency Room in",
    headlineHighlight: "White Rock, Dallas",
    subtitle: "Fast, expert emergency care near White Rock Lake. Board-certified ER physicians, full diagnostic services, and minimal wait times. Serving Lakewood, Casa Linda, Lake Highlands, and surrounding communities\u2014open 24/7/365.",
    ctaText: "Get Directions",
    ctaLink: "https://maps.google.com",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "#services"
  };
  const defaultTrustData = {
    badges: [
      {
        title: "Open 24/7/365",
        icon: "emergency",
        description: "Always here when you need us"
      },
      {
        title: "Insurance Accepted",
        icon: "verified_user",
        description: "Direct billing to major providers"
      },
      {
        title: "Board-Certified",
        icon: "medical_services",
        description: "Expert physicians on site"
      },
      {
        title: "Top Rated Care",
        icon: "star",
        description: "Based on 2,500+ patient reviews",
        rating: "4.9"
      }
    ]
  };
  const defaultServicesData = {
    sectionTitle: "Comprehensive Emergency Services",
    services: [
      {
        icon: "ambulance",
        title: "Emergency Medicine",
        description: "Comprehensive care for life-threatening conditions. Our ER is equipped for critical situations 24/7/365."
      },
      {
        icon: "child_care",
        title: "Pediatric Care",
        description: "Specialized, gentle emergency treatment for infants, children, and teens in a comforting environment."
      },
      {
        icon: "personal_injury",
        title: "Trauma & Injury",
        description: "Advanced treatment for fractures, deep cuts, burns, and other acute physical injuries requiring immediate attention."
      },
      {
        icon: "radiology",
        title: "Diagnostic Imaging",
        description: "State-of-the-art on-site CT scans, digital X-rays, and ultrasounds for rapid and accurate diagnosis."
      }
    ]
  };
  const defaultComparisonData = {
    sectionTitle: "ER of White Rock vs. Urgent Care",
    sectionSubtitle: "Understanding when to choose a freestanding emergency room can save your life.",
    erFeatures: [
      "Open 24/7/365",
      "Board-Certified ER Physicians",
      "Advanced Imaging & Lab",
      "Life-Threatening Care"
    ],
    urgentCareFeatures: [
      "Limited Hours",
      "Mid-Level Providers",
      "Basic Capabilities"
    ]
  };
  const defaultSymptomData = {
    sectionTitle: "When should you visit the ER?",
    sectionSubtitle: "If you are experiencing any of these symptoms, please visit us immediately or call 911 for life-threatening emergencies.",
    symptoms: [
      { title: "Chest Pain", icon: "cardiology" },
      { title: "High Fever", icon: "thermometer" },
      { title: "Broken Bones", icon: "orthopedics" },
      { title: "Severe Pain", icon: "sentiment_very_dissatisfied" },
      { title: "Deep Cuts", icon: "healing" },
      { title: "Breathing Issues", icon: "pulmonology" },
      { title: "Head Injury", icon: "sick" },
      { title: "Severe Flu", icon: "coronavirus" }
    ]
  };
  const defaultProcessData = {
    sectionTitle: "What to Expect",
    sectionSubtitle: "We've streamlined our process to ensure you receive the care you need as quickly and comfortably as possible.",
    steps: [
      {
        number: 1,
        title: "Immediate Triage",
        description: "No waiting room time. You are taken directly to a private room for assessment."
      },
      {
        number: 2,
        title: "Expert Consultation",
        description: "Rapid assessment by a board-certified physician to understand your needs."
      },
      {
        number: 3,
        title: "Diagnostic Testing",
        description: "Fast results from our on-site lab and advanced imaging technology."
      },
      {
        number: 4,
        title: "Care & Discharge",
        description: "Compassionate treatment with a clear follow-up plan or seamless transfer."
      }
    ]
  };
  const defaultWhyChooseData = {
    title: "Why Choose ER of White Rock?",
    subtitle: "We redefine emergency care by putting the patient first, combining speed, expertise, and advanced technology.",
    features: [
      {
        title: "No Wait Times",
        description: "Experience immediate triage and bedside care. We prioritize getting you seen by a doctor the moment you arrive.",
        icon: "timer_off"
      },
      {
        title: "Board-Certified Care",
        description: "Our facility is staffed exclusively by ER-trained physicians and nurses who are experts in emergency medicine and trauma care.",
        icon: "medical_information"
      },
      {
        title: "Advanced Technology",
        description: "Equipped with on-site CT scans, digital X-rays, ultrasounds, and a full-service laboratory for rapid and accurate diagnosis.",
        icon: "biotech"
      }
    ]
  };
  const defaultPhysiciansData = {
    title: "Meet Our Experts",
    subtitle: "Our team is led by board-certified emergency physicians committed to providing the highest standard of care.",
    physicians: [
      {
        name: "Dr. Sarah Bennett",
        title: "Medical Director",
        bio: "Board-Certified in Emergency Medicine with over 15 years of experience leading trauma teams in high-volume hospitals.",
        credentials: "MD, FACEP"
      },
      {
        name: "Dr. Michael Ross",
        title: "Lead Physician",
        bio: "Specializes in pediatric emergency care and acute cardiac intervention. Committed to patient-centered treatment.",
        credentials: "DO, FACEP"
      },
      {
        name: "Dr. Emily Chen",
        title: "ER Physician",
        bio: "Expert in rapid diagnostics and trauma stabilization with a strong focus on compassionate care for families.",
        credentials: "MD"
      }
    ]
  };
  const defaultInsuranceData = {
    sectionTitle: "Insurance Plans We Accept",
    sectionSubtitle: "We strive to make billing transparent and simple."
    // Default providers list handled inside component if empty array passed
  };
  const defaultFAQData = {
    title: "Patient Questions",
    faqs: [
      {
        question: "Do I need an appointment?",
        answer: "No, you never need an appointment at ER of White Rock. We are a 24/7/365 emergency room tailored for walk-ins. Just come in, and you will be seen immediately.",
        isLocal: true
      },
      {
        question: "Do you accept insurance?",
        answer: "Yes, we accept most major private insurance plans, including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and Humana. We honor your in-network benefits.",
        isLocal: false
      },
      {
        question: "What is the difference between you and Urgent Care?",
        answer: "Unlike urgent care, we are a fully licensed Emergency Room capable of treating life-threatening conditions. We have on-site CT scans, ultrasounds, and board-certified ER physicians, just like a hospital ER, but without the wait.",
        isLocal: false
      },
      {
        question: "How long is the wait time?",
        answer: "Our average wait time is less than 10 minutes. In most cases, patients are taken to a room immediately upon arrival.",
        isLocal: true
      }
    ]
  };
  const defaultCtaData = {
    title: "Visit ER of White Rock Today",
    text: "We are open 24/7/365 to serve you with immediate, expert care.",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  };
  const defaultTestimonialsData = {
    title: "Patient Reviews",
    testimonials: [
      {
        quote: "I was seen immediately. The staff was incredibly professional and caring during a stressful time. Cleanest facility I've ever been to.",
        author: "Jane Doe",
        location: "White Rock Area",
        rating: 5
      }
    ]
  };
  const defaultServingAreasData = {
    sectionTitle: "Proudly Serving White Rock & Surrounding Neighborhoods"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ER of White Rock - 24/7 Emergency Care" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Use fetched data only if it has key content, otherwise default --> ${renderComponent($$result2, "Hero", $$Hero, { "data": fetchedHero?.headline ? fetchedHero : defaultHeroData })} ${renderComponent($$result2, "TrustBadges", $$TrustBadges, { "data": fetchedTrust?.badges ? fetchedTrust : defaultTrustData })} ${renderComponent($$result2, "ServingAreas", $$ServingAreas, { "data": fetchedServing?.neighborhoods ? fetchedServing : defaultServingAreasData })} ${renderComponent($$result2, "InsuranceBar", $$InsuranceBar, { "data": fetchedInsurance || defaultInsuranceData })} ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, { "data": fetchedServices?.services ? fetchedServices : defaultServicesData })} ${renderComponent($$result2, "ComparisonTable", $$ComparisonTable, { "data": fetchedComparison?.erFeatures ? fetchedComparison : defaultComparisonData })} ${renderComponent($$result2, "WhenToCome", $$WhenToCome, { "data": fetchedSymptom?.symptoms ? fetchedSymptom : defaultSymptomData })} ${renderComponent($$result2, "WhatToExpect", $$WhatToExpect, { "data": fetchedProcess?.steps ? fetchedProcess : defaultProcessData })} ${renderComponent($$result2, "WhyChoose", $$WhyChoose, { "data": fetchedWhyChoose?.features ? fetchedWhyChoose : defaultWhyChooseData })} ${renderComponent($$result2, "Physicians", $$Physicians, { "data": fetchedPhysicians?.physicians ? fetchedPhysicians : defaultPhysiciansData })} ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data": fetchedTestimonials?.testimonials ? fetchedTestimonials : defaultTestimonialsData })} ${renderComponent($$result2, "FAQ", $$FAQ, { "data": fetchedFaq?.faqs ? fetchedFaq : defaultFAQData })} ${renderComponent($$result2, "CTA", $$CTA, { "data": fetchedCta?.buttonText ? fetchedCta : defaultCtaData })} </main> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/index.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
