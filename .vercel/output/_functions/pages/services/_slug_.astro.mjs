import '../../chunks/page-ssr_CmsWzWBj.mjs';
import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DAOamDnX.mjs';
import { $ as $$ServiceHero } from '../../chunks/ServiceHero_DQMHWf5j.mjs';
import { e as $$Physicians, b as $$ServicesGrid, f as $$Testimonials, $ as $$TrustBadges, a as $$InsuranceBar, d as $$WhatToExpect, c as $$WhenToCome } from '../../chunks/InsuranceBar_Dh7sav5e.mjs';
import { a as $$CTA, $ as $$WhyChoose } from '../../chunks/CTA_CpAe_erJ.mjs';
import { $ as $$FAQ } from '../../chunks/FAQ_B0siQolf.mjs';
import { $ as $$PortableText } from '../../chunks/PortableText_Dn0Yjo3m.mjs';
/* empty css                                     */
import 'clsx';
import { s as sanityClient } from '../../chunks/_sanity_client_JiifF4TX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$9 = createAstro("https://erofwhiterock.com");
const $$RichTextSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$RichTextSection;
  const { data } = Astro2.props;
  if (!data) return null;
  const { title, content } = data;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24 bg-white" data-astro-cid-nlp3a6n7> <div class="max-w-[800px] mx-auto px-6" data-astro-cid-nlp3a6n7> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl font-bold text-text-main mb-10 text-center" data-astro-cid-nlp3a6n7> ${title} </h2>`} <div class="rich-text-content" data-astro-cid-nlp3a6n7> ${renderComponent($$result, "PortableText", $$PortableText, { "value": content, "data-astro-cid-nlp3a6n7": true })} </div> </div> </section> `;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/RichTextSection.astro", void 0);

const $$Astro$8 = createAstro("https://erofwhiterock.com");
const $$StickyCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StickyCTA;
  const { callNowText, callNowNumber, directionsText, directionsLink } = Astro2.props;
  if (!callNowNumber && !directionsLink) return null;
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg md:hidden"> <div class="grid grid-cols-2 gap-0"> ${callNowNumber && renderTemplate`<a${addAttribute(`tel:${callNowNumber}`, "href")} class="flex items-center justify-center p-4 bg-primary text-white font-bold text-center hover:bg-primary-dark transition-colors"> <span class="material-symbols-outlined mr-2">call</span> ${callNowText || "Call Now"} </a>`} ${directionsLink && renderTemplate`<a${addAttribute(directionsLink, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-4 bg-accent text-white font-bold text-center hover:bg-accent-dark transition-colors"> <span class="material-symbols-outlined mr-2">
location_on
</span> ${directionsText || "Get Directions"} </a>`} </div> </div> <!-- Desktop/Tablet Floating Version (Optional - keeps it accessible but not full width) --> <div class="hidden md:flex fixed bottom-8 right-8 z-50 gap-4"> ${callNowNumber && renderTemplate`<a${addAttribute(`tel:${callNowNumber}`, "href")} class="flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full shadow-xl hover:scale-105 transition-transform"> <span class="material-symbols-outlined mr-2">call</span> ${callNowText || "Call Now"} </a>`} </div>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/StickyCTA.astro", void 0);

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white md:py-32"> <div class="container mx-auto px-4"> <div class="flex flex-col lg:flex-row items-center gap-16"> <div class="w-full lg:w-1/2 order-2 lg:order-1"> <div class="rounded-lg overflow-hidden border border-gray-200"> <img src="/images/map-placeholder.jpg" alt="Map of White Rock Area" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"> </div> </div> <div class="w-full lg:w-1/2 order-1 lg:order-2"> <h2 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-primary">
Serving Our Neighbors
</h2> <p class="text-gray-600 mb-8 leading-relaxed">
We are proud to be the emergency room of choice for the
                    White Rock Lake community and surrounding neighborhoods.
</p>
href="#contact" class="btn-primary inline-flex items-center gap-2
                shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                > Get Directions
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"></path> </svg> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/Community.astro", void 0);

const $$Astro$7 = createAstro("https://erofwhiterock.com");
const $$MapSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MapSection;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-white"> <div class="max-w-[1280px] mx-auto px-6 lg:px-12"> <div class="bg-primary/5 p-4 rounded-3xl border border-primary/10"> <div class="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm relative group"> <iframe width="100%" height="100%" frameborder="0" style="border:0"${addAttribute(data?.embedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.551787869688!2d-96.72145392358896!3d32.870233678519965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea1a7f051608d%3A0x8e82a628864d4d6e!2s10705%20Northwest%20Hwy%2C%20Dallas%2C%20TX%2075238!5e0!3m2!1sen!2sus!4v1707680000000!5m2!1sen!2sus", "src")} allowfullscreen loading="lazy" class="grayscale-[0.5] hover:grayscale-0 transition-all duration-500"></iframe> <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 max-w-sm transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"> <h3 class="font-bold text-lg text-primary mb-1">
ER of White Rock
</h3> <p class="text-text-secondary text-sm mb-3">
10705 Northwest Hwy, Dallas, TX 75238
</p> <a href="https://maps.google.com" target="_blank" class="text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover flex items-center gap-1">
Get Directions <span class="material-symbols-outlined text-sm">arrow_forward</span> </a> </div> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/MapSection.astro", void 0);

const $$Astro$6 = createAstro("https://erofwhiterock.com");
const $$ComparisonSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ComparisonSection;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24 bg-white"> <div class="max-w-[1280px] mx-auto px-6 lg:px-12"> <div class="text-center max-w-3xl mx-auto mb-16"> <h2 class="text-accent text-sm font-bold tracking-widest uppercase mb-3">
Make the Right Choice
</h2> <h3 class="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
ER vs. Urgent Care for This Condition
</h3> <p class="mt-4 text-text-muted text-lg">
Knowing where to go can save your life. For severe symptoms,
                always choose the ER.
</p> </div> <div class="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"> <!-- Urgent Care Column --> <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col"> <div class="flex items-center gap-4 mb-6"> <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"> <span class="material-symbols-outlined text-2xl">local_clinic</span> </div> <h4 class="text-xl font-bold text-gray-700">Urgent Care</h4> </div> <ul class="space-y-4 flex-1"> <li class="flex items-start gap-3 text-gray-600"> <span class="material-symbols-outlined text-red-400 mt-1">close</span> <span>Limited diagnostic tools (basic X-ray only)</span> </li> <li class="flex items-start gap-3 text-gray-600"> <span class="material-symbols-outlined text-red-400 mt-1">close</span> <span>No CT Scan or Ultrasound</span> </li> <li class="flex items-start gap-3 text-gray-600"> <span class="material-symbols-outlined text-red-400 mt-1">close</span> <span>Mid-level providers (Nurse Practitioners) usually
                            on staff</span> </li> <li class="flex items-start gap-3 text-gray-600"> <span class="material-symbols-outlined text-red-400 mt-1">close</span> <span>Cannot treat life-threatening conditions</span> </li> </ul> <div class="mt-8 pt-6 border-t border-gray-200 text-center"> <p class="text-sm font-bold text-gray-400 uppercase tracking-wider">
Best for
</p> <p class="text-gray-600 mt-1">
Minor colds, flu, small cuts
</p> </div> </div> <!-- ER Column --> <div class="bg-primary text-white rounded-3xl p-8 shadow-xl shadow-primary/20 flex flex-col transform md:-translate-y-4 relative overflow-hidden"> <div class="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
RECOMMENDED
</div> <div class="absolute top-0 right-0 p-8 opacity-10"> <span class="material-symbols-outlined text-9xl">emergency</span> </div> <div class="relative z-10 flex items-center gap-4 mb-6"> <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white"> <span class="material-symbols-outlined text-2xl">emergency</span> </div> <h4 class="text-xl font-bold">ER of White Rock</h4> </div> <ul class="space-y-4 flex-1 relative z-10"> <li class="flex items-start gap-3"> <span class="material-symbols-outlined text-accent mt-1">check_circle</span> <span>Full on-site Laboratory (Results in mins)</span> </li> <li class="flex items-start gap-3"> <span class="material-symbols-outlined text-accent mt-1">check_circle</span> <span>CT Scan, Ultrasound, & Digital X-Ray</span> </li> <li class="flex items-start gap-3"> <span class="material-symbols-outlined text-accent mt-1">check_circle</span> <span>Board-Certified ER Physicians 24/7</span> </li> <li class="flex items-start gap-3"> <span class="material-symbols-outlined text-accent mt-1">check_circle</span> <span>Equipped for Heart Attack, Stroke, & Trauma</span> </li> </ul> <div class="mt-8 pt-6 border-t border-white/20 text-center relative z-10"> <p class="text-sm font-bold text-white/60 uppercase tracking-wider">
Best for
</p> <p class="text-white mt-1 font-bold text-lg">
Severe Pain, Chest Pain, Breathing Issues, Trauma
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ComparisonSection.astro", void 0);

const $$Astro$5 = createAstro("https://erofwhiterock.com");
const $$SymptomChecker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SymptomChecker;
  const { data } = Astro2.props;
  if (!data) return null;
  const severityConfig = {
    critical: {
      label: "Call 911",
      color: "text-red-700",
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "emergency"
    },
    urgent: {
      label: "Visit ER Now",
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: "warning"
    },
    monitor: {
      label: "Watch Closely",
      color: "text-green-700",
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "visibility"
    }
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-16 lg:py-20 bg-white"> <div class="max-w-5xl mx-auto px-6 lg:px-12"> ${data.title && renderTemplate`<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center"> ${data.title} </h2>`} ${data.description && renderTemplate`<p class="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto"> ${data.description} </p>`} <div class="space-y-4"> ${data.symptoms?.map((s) => {
    const cfg = severityConfig[s.severity] || severityConfig.monitor;
    return renderTemplate`<div${addAttribute(`flex items-start gap-4 p-5 rounded-xl border ${cfg.border} ${cfg.bg}`, "class")}> <span${addAttribute(`material-symbols-outlined text-2xl mt-0.5 ${cfg.color}`, "class")}> ${cfg.icon} </span> <div> <p class="font-semibold text-gray-900 text-lg"> ${s.symptom} </p> ${s.detail && renderTemplate`<p class="text-gray-600 text-sm mt-1"> ${s.detail} </p>`} </div> </div>`;
  })} </div> <!-- CTA --> <div class="mt-10 text-center"> <a href="tel:4699432939" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"> <span class="material-symbols-outlined">call</span>
Call ER Now — 4699432939
</a> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/SymptomChecker.astro", void 0);

const $$Astro$4 = createAstro("https://erofwhiterock.com");
const $$ConditionsTreated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ConditionsTreated;
  const { data } = Astro2.props;
  if (!data) return null;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 lg:py-20 bg-gray-50"> <div class="max-w-6xl mx-auto px-6 lg:px-12"> ${data.title && renderTemplate`<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center"> ${data.title} </h2>`} ${data.description && renderTemplate`<p class="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto"> ${data.description} </p>`} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${data.conditions?.map((c) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> ${c.icon && renderTemplate`<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"> <span class="material-symbols-outlined text-2xl text-primary"> ${c.icon} </span> </div>`} <h3 class="font-bold text-gray-900 text-lg mb-2"> ${c.name} </h3> ${c.description && renderTemplate`<p class="text-gray-600 text-sm leading-relaxed"> ${c.description} </p>`} </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ConditionsTreated.astro", void 0);

const $$Astro$3 = createAstro("https://erofwhiterock.com");
const $$DiagnosticServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DiagnosticServices;
  const { data } = Astro2.props;
  if (!data) return null;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 lg:py-20 bg-white"> <div class="max-w-6xl mx-auto px-6 lg:px-12"> ${data.title && renderTemplate`<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center"> ${data.title} </h2>`} ${data.description && renderTemplate`<p class="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto"> ${data.description} </p>`} <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${data.diagnostics?.map((d, i) => renderTemplate`<div class="flex gap-5 items-start p-6 rounded-xl bg-blue-50/50 border border-blue-100"> <div class="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center"> ${d.icon ? renderTemplate`<span class="material-symbols-outlined text-2xl text-white"> ${d.icon} </span>` : renderTemplate`<span class="text-white font-bold text-lg"> ${i + 1} </span>`} </div> <div> <h3 class="font-bold text-gray-900 text-lg mb-1"> ${d.name} </h3> ${d.description && renderTemplate`<p class="text-gray-600 text-sm leading-relaxed"> ${d.description} </p>`} </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/DiagnosticServices.astro", void 0);

const $$Astro$2 = createAstro("https://erofwhiterock.com");
const $$TreatmentApproach = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TreatmentApproach;
  const { data } = Astro2.props;
  if (!data) return null;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 lg:py-20 bg-gray-50"> <div class="max-w-5xl mx-auto px-6 lg:px-12"> ${data.title && renderTemplate`<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center"> ${data.title} </h2>`} ${data.description && renderTemplate`<p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"> ${data.description} </p>`} <div class="relative">  <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div> <div class="space-y-8"> ${data.approaches?.map((a, i) => {
    const isEven = i % 2 === 0;
    return renderTemplate`<div${addAttribute(`flex flex-col md:flex-row items-center gap-6 ${!isEven ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`, "class")}> <div${addAttribute(`bg-white rounded-xl p-6 shadow-sm border border-gray-100 inline-block text-left`, "class")}> <h3 class="font-bold text-gray-900 text-lg mb-2"> ${a.title} </h3> ${a.description && renderTemplate`<p class="text-gray-600 text-sm leading-relaxed"> ${a.description} </p>`} </div> </div>  <div class="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg"> ${a.icon ? renderTemplate`<span class="material-symbols-outlined text-2xl text-white"> ${a.icon} </span>` : renderTemplate`<span class="text-white font-bold text-lg"> ${i + 1} </span>`} </div> <div class="flex-1 hidden md:block"></div> </div>`;
  })} </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/TreatmentApproach.astro", void 0);

const $$Astro$1 = createAstro("https://erofwhiterock.com");
const $$RelatedServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedServices;
  const { data } = Astro2.props;
  if (!data) return null;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 lg:py-20 bg-white"> <div class="max-w-6xl mx-auto px-6 lg:px-12"> ${data.title && renderTemplate`<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center"> ${data.title} </h2>`} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${data.services?.map((s) => {
    const href = s.slug?.current ? `/services/${s.slug.current}` : "#";
    return renderTemplate`<a${addAttribute(href, "href")} class="group block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"> ${s.icon && renderTemplate`<div class="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors"> <span class="material-symbols-outlined text-2xl text-primary"> ${s.icon} </span> </div>`} <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors"> ${s.title || "Related Service"} </h3> ${s.description && renderTemplate`<p class="text-gray-600 text-sm leading-relaxed line-clamp-3"> ${s.description} </p>`} <span class="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3">
Learn more
<span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
arrow_forward
</span> </span> </a>`;
  })} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/RelatedServices.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://erofwhiterock.com");
async function getStaticPaths() {
  const services = await sanityClient.fetch(`*[_type == "service" && defined(slug.current)] {
    "params": { "slug": slug.current }
  }`);
  return services;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const query = `*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  metaDescription,
  "medicalReviewer": medicalReviewer->{name, "title": jobTitle},
  hero,
  content[] {
    ...,
    _type,
    "testimonials": testimonials[]->,
    "faqs": faqs[]->,
    "services": services[]->{title, "slug": slug, description, icon},
    "physicians": physicians[]->
  }
}`;
  const service = await sanityClient.fetch(query, { slug });
  if (!service) return Astro2.redirect("/404");
  const { title, metaDescription, medicalReviewer, hero, content } = service;
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: metaDescription || `Emergency treatment for ${title} in Dallas/White Rock.`,
    medicalAudience: "Patient",
    healthCondition: title,
    reviewedBy: medicalReviewer ? {
      "@type": "Person",
      name: medicalReviewer.name,
      jobTitle: medicalReviewer.title
    } : void 0,
    publisher: {
      "@type": "MedicalOrganization",
      name: "ER of White Rock",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dallas",
          addressRegion: "TX"
        }
      }
    }
  };
  const faqBlock = content?.find((b) => b._type === "faqSection");
  const faqSchema = faqBlock?.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqBlock.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  } : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | Emergency Room in White Rock, Dallas`, "description": metaDescription, "hideStickyCTA": content?.some((b) => b._type === "stickyCTA") }, { "default": async ($$result2) => renderTemplate(_b || (_b = __template(['  <script type="application/ld+json">', "<\/script> ", " ", " ", " ", ""])), unescapeHTML(JSON.stringify(schema)), faqSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(faqSchema))), hero && renderTemplate`${renderComponent($$result2, "ServiceHero", $$ServiceHero, { "data": { ...hero, headlineSuffix: "in White Rock, TX" }, "title": title, "medicalReviewer": medicalReviewer })}`, content && content.map((block) => {
    switch (block._type) {
      case "whenToCome":
        return renderTemplate`${renderComponent($$result2, "WhenToCome", $$WhenToCome, { "data": block })}`;
      case "whyChooseSection":
        return renderTemplate`${renderComponent($$result2, "WhyChoose", $$WhyChoose, { "data": block })}`;
      case "processSection":
        return renderTemplate`${renderComponent($$result2, "Process", $$WhatToExpect, { "data": block })}`;
      case "faqSection":
        return renderTemplate`${renderComponent($$result2, "FAQ", $$FAQ, { "data": block })}`;
      case "richTextSection":
        return renderTemplate`${renderComponent($$result2, "RichTextSection", $$RichTextSection, { "data": block })}`;
      case "stickyCTA":
        return renderTemplate`${renderComponent($$result2, "StickyCTA", $$StickyCTA, { ...block })}`;
      case "insuranceBar":
        return renderTemplate`${renderComponent($$result2, "InsuranceBar", $$InsuranceBar, { "data": block })}`;
      case "trustBadges":
        return renderTemplate`${renderComponent($$result2, "TrustBadges", $$TrustBadges, { "data": block })}`;
      case "comparisonTable":
        return renderTemplate`${renderComponent($$result2, "ComparisonSection", $$ComparisonSection, { "data": block })}`;
      case "testimonialsSection":
        return renderTemplate`${renderComponent($$result2, "Testimonials", $$Testimonials, { "data": block })}`;
      case "ctaSection":
        return renderTemplate`${renderComponent($$result2, "CTA", $$CTA, { "data": block })}`;
      case "servicesSection":
        return renderTemplate`${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, { "data": block })}`;
      case "physiciansSection":
        return renderTemplate`${renderComponent($$result2, "Physicians", $$Physicians, { "data": block })}`;
      case "communitySection":
        return renderTemplate`${renderComponent($$result2, "Community", $$Community, { "data": block })}`;
      case "mapSection":
        return renderTemplate`${renderComponent($$result2, "MapSection", $$MapSection, { "data": block })}`;
      // SEO Overhaul sections
      case "symptomCheckerSection":
        return renderTemplate`${renderComponent($$result2, "SymptomChecker", $$SymptomChecker, { "data": block })}`;
      case "conditionsTreatedSection":
        return renderTemplate`${renderComponent($$result2, "ConditionsTreated", $$ConditionsTreated, { "data": block })}`;
      case "diagnosticSection":
        return renderTemplate`${renderComponent($$result2, "DiagnosticServices", $$DiagnosticServices, { "data": block })}`;
      case "treatmentApproachSection":
        return renderTemplate`${renderComponent($$result2, "TreatmentApproach", $$TreatmentApproach, { "data": block })}`;
      case "relatedServicesSection":
        return renderTemplate`${renderComponent($$result2, "RelatedServices", $$RelatedServices, { "data": block })}`;
      default:
        return null;
    }
  }), !content?.some((b) => b._type === "ctaSection") && renderTemplate`${renderComponent($$result2, "CTA", $$CTA, {})}`) })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/services/[slug].astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
