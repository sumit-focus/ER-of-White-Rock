import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute } from './astro/server_D23ZCGoD.mjs';
import 'piccolore';
import 'clsx';
import { u as urlFor } from './Layout_DAOamDnX.mjs';

const $$Astro$6 = createAstro("https://erofwhiterock.com");
const $$TrustBadges = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TrustBadges;
  const { data } = Astro2.props;
  if (!data) return null;
  const { badges } = data;
  const defaultBadges = [
    {
      icon: "emergency",
      title: "Open 24/7/365",
      description: "Always here when you need us"
    },
    {
      icon: "verified_user",
      title: "Insurance Accepted",
      description: "Direct billing to major providers"
    },
    {
      icon: "medical_services",
      title: "Board-Certified",
      description: "Expert physicians on site"
    },
    {
      icon: "star",
      title: "Top Rated Care",
      description: "Based on 2,500+ patient reviews",
      rating: "4.9"
    }
  ];
  const displayBadges = badges && badges.length > 0 && badges[0].description ? badges : defaultBadges;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 lg:py-16 bg-white border-b border-gray-100"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-12"> ${displayBadges.map((badge) => renderTemplate`<div class="flex flex-col items-center text-center group"> <div class="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300"> <span class="material-symbols-outlined text-4xl"> ${badge.icon || "check_circle"} </span> </div> <h4 class="text-lg font-bold text-text-main"> ${badge.title} </h4> <p class="text-text-muted text-sm mt-1"> ${badge.rating ? `${badge.rating}/5 Rating - ${badge.description}` : badge.description} </p> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/TrustBadges.astro", void 0);

const $$Astro$5 = createAstro("https://erofwhiterock.com");
const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServicesGrid;
  const { data } = Astro2.props;
  if (!data) return null;
  const { sectionTitle, sectionSubtitle, services } = data;
  const defaultServices = [
    { icon: "ambulance", title: "Emergency Medicine", description: "Comprehensive care for life-threatening conditions. Our ER is equipped for critical situations 24/7/365." },
    { icon: "child_care", title: "Pediatric Care", description: "Specialized, gentle emergency treatment for infants, children, and teens in a comforting environment." },
    { icon: "personal_injury", title: "Trauma & Injury", description: "Advanced treatment for fractures, deep cuts, burns, and other acute physical injuries requiring immediate attention." },
    { icon: "radiology", title: "Diagnostic Imaging", description: "State-of-the-art on-site CT scans, digital X-rays, and ultrasounds for rapid and accurate diagnosis." }
  ];
  const displayServices = services || defaultServices;
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-24 bg-background-light"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"> <div class="max-w-2xl"> <h2 class="text-accent text-sm font-bold tracking-widest uppercase mb-3">Our Expertise</h2> <h3 class="text-4xl md:text-5xl font-bold text-text-main tracking-tight"> ${sectionTitle || "Comprehensive Emergency Services"} </h3> </div> <a class="group inline-flex items-center text-primary font-bold text-lg hover:text-secondary transition-colors" href="#services">
View all services
<span class="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span> </a> </div> <!-- Services Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${displayServices.map((service) => renderTemplate`<div class="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-2px_#0000000d] hover:shadow-[0_10px_40px_-10px_#00000014] hover:border-primary/20 transition-all duration-300 h-full"> <!-- Background Icon --> <div class="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0"> <span class="material-symbols-outlined text-primary/20 text-6xl">${service.icon || "medical_services"}</span> </div> <!-- Icon Box --> <div class="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300"> <span class="material-symbols-outlined text-3xl">${service.icon || "medical_services"}</span> </div> <h3 class="text-2xl font-bold text-text-main mb-3">${service.title}</h3> <p class="text-text-muted leading-relaxed">${service.description}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ServicesGrid.astro", void 0);

const $$Astro$4 = createAstro("https://erofwhiterock.com");
const $$WhenToCome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WhenToCome;
  const { data } = Astro2.props;
  if (!data) return null;
  const { title, conditions, symptoms, sectionTitle, sectionSubtitle } = data;
  const displayTitle = sectionTitle || title || "When should you visit the ER?";
  const displaySubtitle = sectionSubtitle || "If you are experiencing any of these symptoms, please visit us immediately or call 911 for life-threatening emergencies.";
  const displayItems = conditions || symptoms || [
    { icon: "cardiology", title: "Chest Pain" },
    { icon: "thermometer", title: "High Fever" },
    { icon: "orthopedics", title: "Broken Bones" },
    { icon: "sentiment_very_dissatisfied", title: "Severe Pain" }
  ];
  const isRedAlert = displayTitle.toLowerCase().includes("chest pain") || displayTitle.toLowerCase().includes("emergency") || displayTitle.toLowerCase().includes("heart attack");
  const sectionClass = isRedAlert ? "py-24 bg-red-50" : "py-24 bg-background-subtle";
  const titleClass = isRedAlert ? "text-4xl md:text-5xl font-bold text-red-700 tracking-tight mb-6" : "text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6";
  const cardClass = isRedAlert ? "flex flex-col items-center justify-center p-8 rounded-2xl bg-white text-center shadow-lg border-2 border-red-100 hover:border-red-500 transition-all hover:-translate-y-1 group cursor-default" : "flex flex-col items-center justify-center p-8 rounded-2xl bg-white text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group cursor-default";
  const iconBgClass = isRedAlert ? "w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4" : "material-symbols-outlined text-accent text-4xl mb-4 group-hover:scale-110 transition-transform";
  const iconTextClass = isRedAlert ? "text-3xl material-symbols-outlined" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionClass, "class")}> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="text-accent font-bold text-sm tracking-widest uppercase mb-3 block"> ${isRedAlert ? "Critical Symptoms" : "Symptom Checker"} </span> <h2${addAttribute(titleClass, "class")}> ${displayTitle} </h2> <p class="text-lg text-text-muted"> ${displaySubtitle} </p> </div> <!-- Symptoms Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${displayItems.map((item) => renderTemplate`<div${addAttribute(cardClass, "class")}> ${isRedAlert ? renderTemplate`<div${addAttribute(iconBgClass, "class")}> <span${addAttribute(iconTextClass, "class")}> ${item.icon || "warning"} </span> </div>` : renderTemplate`<span${addAttribute(iconBgClass, "class")}> ${item.icon || "warning"} </span>`} <span class="font-bold text-lg text-text-main"> ${item.title || item.condition} </span> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/WhenToCome.astro", void 0);

const $$Astro$3 = createAstro("https://erofwhiterock.com");
const $$WhatToExpect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhatToExpect;
  const { data } = Astro2.props;
  if (!data) return null;
  const { sectionTitle, sectionSubtitle, steps } = data;
  const defaultSteps = [
    { number: 1, title: "Immediate Triage", description: "No waiting room time. You are taken directly to a private room for assessment." },
    { number: 2, title: "Expert Consultation", description: "Rapid assessment by a board-certified physician to understand your needs." },
    { number: 3, title: "Diagnostic Testing", description: "Fast results from our on-site lab and advanced imaging technology." },
    { number: 4, title: "Care & Discharge", description: "Compassionate treatment with a clear follow-up plan or seamless transfer." }
  ];
  const displaySteps = (steps || defaultSteps).slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gray-50"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="text-center mb-16"> <span class="text-accent font-bold tracking-widest uppercase text-sm">Your Journey</span> <h2 class="text-3xl md:text-4xl font-bold text-text-main mt-2 mb-4">${sectionTitle || "What to Expect"}</h2> <p class="text-text-muted text-lg max-w-2xl mx-auto"> ${sectionSubtitle || "We've streamlined our process to ensure you receive the care you need as quickly and comfortably as possible."} </p> </div> <!-- Timeline Steps --> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative"> <!-- Connecting Line (Desktop Only) --> <div class="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10 translate-y-4"></div> ${displaySteps.map((step, index) => renderTemplate`<div class="flex flex-col items-center text-center"> <!-- Step Number --> <div class="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-xl mb-6 shadow-sm z-10"> ${step.number || index + 1} </div> <h3 class="text-xl font-bold text-text-main mb-2">${step.title}</h3> <p class="text-text-muted text-sm">${step.description}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/WhatToExpect.astro", void 0);

const $$Astro$2 = createAstro("https://erofwhiterock.com");
const $$Physicians = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Physicians;
  const { data } = Astro2.props;
  if (!data) return null;
  const { sectionTitle, sectionSubtitle, physicians } = data;
  const defaultPhysicians = [
    {
      name: "Dr. Sarah Bennett",
      role: "Medical Director",
      bio: "Board-Certified in Emergency Medicine with over 15 years of experience leading trauma teams in high-volume hospitals.",
      specialties: ["Trauma", "Critical Care"]
    },
    {
      name: "Dr. Michael Ross",
      role: "Lead Physician",
      bio: "Specializes in pediatric emergency care and acute cardiac intervention. Committed to patient-centered treatment.",
      specialties: ["Pediatrics", "Cardiology"]
    },
    {
      name: "Dr. Emily Chen",
      role: "ER Physician",
      bio: "Expert in rapid diagnostics and trauma stabilization with a strong focus on compassionate care for families.",
      specialties: ["Diagnostics", "Family Medicine"]
    }
  ];
  const displayPhysicians = physicians || defaultPhysicians;
  return renderTemplate`${maybeRenderHead()}<section id="physicians" class="py-24 bg-white"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="text-center mb-16"> <span class="text-accent font-bold tracking-widest uppercase text-sm">Medical Excellence</span> <h2 class="text-4xl font-bold mt-2 text-text-main">${sectionTitle || "Meet Our Experts"}</h2> <p class="text-text-muted mt-4 max-w-2xl mx-auto"> ${sectionSubtitle || "Our team is led by board-certified emergency physicians committed to providing the highest standard of care."} </p> </div> <!-- Physicians Grid --> <div class="grid md:grid-cols-3 gap-8"> ${displayPhysicians.map((physician) => renderTemplate`<div class="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-2px_#0000000d] hover:shadow-[0_10px_40px_-10px_#00000014] transition-all border border-gray-100"> <!-- Image --> <div class="h-80 overflow-hidden relative bg-gradient-to-br from-primary/20 to-secondary/20"> ${physician.image ? renderTemplate`<img${addAttribute(urlFor(physician.image).width(400).height(400).url(), "src")}${addAttribute(physician.name, "alt")} class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105">` : renderTemplate`<div class="w-full h-full flex items-center justify-center"> <span class="material-symbols-outlined text-8xl text-primary/30">person</span> </div>`} <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-4 left-6 text-white"> <p class="text-xs font-bold uppercase tracking-widest text-accent mb-1">${physician.role}</p> <h3 class="text-xl font-bold">${physician.name}</h3> </div> </div> <!-- Content --> <div class="p-8"> <p class="text-text-muted text-sm leading-relaxed">${physician.bio}</p> ${physician.specialties && physician.specialties.length > 0 && renderTemplate`<div class="mt-4 flex gap-2 flex-wrap"> ${physician.specialties.map((specialty) => renderTemplate`<span class="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-text-main"> ${specialty} </span>`)} </div>`} </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/Physicians.astro", void 0);

const $$Astro$1 = createAstro("https://erofwhiterock.com");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { data } = Astro2.props;
  if (!data) return null;
  const { testimonials } = data;
  const defaultTestimonial = {
    quote: "I was seen immediately. The staff was incredibly professional and caring during a stressful time. Cleanest facility I've ever been to.",
    author: "Jane Doe",
    role: "Verified Patient",
    rating: 5
  };
  const displayTestimonial = testimonials?.[0] || defaultTestimonial;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-background-subtle"> <div class="max-w-[1000px] mx-auto px-6 text-center"> <!-- Quote Icon --> <span class="material-symbols-outlined text-accent text-6xl mb-6">format_quote</span> <!-- Quote Text --> <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-8 leading-tight">
"${displayTestimonial.quote}"
</h2> <!-- Author Info --> <div class="flex flex-col items-center justify-center gap-4"> <!-- Star Rating --> <div class="flex text-yellow-400 gap-1 text-2xl"> ${Array.from({ length: displayTestimonial.rating || 5 }).map(
    () => renderTemplate`<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">
star
</span>`
  )} </div> <!-- Author --> <div class="flex items-center gap-3"> <div class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg"> ${displayTestimonial.author?.split(" ").map((n) => n[0]).join("").slice(0, 2) || "JD"} </div> <div class="text-left"> <p class="font-bold text-text-main"> ${displayTestimonial.author} </p> <p class="text-sm text-text-muted"> ${displayTestimonial.role || "Patient"} </p> </div> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/Testimonials.astro", void 0);

const $$Astro = createAstro("https://erofwhiterock.com");
const $$InsuranceBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InsuranceBar;
  const { data } = Astro2.props;
  if (!data) return null;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-gradient-to-r from-primary to-secondary"> <div class="max-w-4xl mx-auto px-6 text-center"> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"> <div class="flex items-center gap-3"> <span class="material-symbols-outlined text-3xl text-accent">verified</span> <div class="text-left"> <p class="text-white text-xl font-bold"> ${data.title || "We Accept Most Major Insurance Plans"} </p> <p class="text-blue-200 text-sm"> ${data.subtitle || "Check your coverage before your visit."} </p> </div> </div> <a href="/insurance-billing" class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-primary font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"> <span class="material-symbols-outlined text-xl">policy</span>
View Insurance Info
</a> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/InsuranceBar.astro", void 0);

export { $$TrustBadges as $, $$InsuranceBar as a, $$ServicesGrid as b, $$WhenToCome as c, $$WhatToExpect as d, $$Physicians as e, $$Testimonials as f };
