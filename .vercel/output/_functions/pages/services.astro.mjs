import '../chunks/page-ssr_BG6rDwkd.mjs';
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, u as unescapeHTML } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DK4fnEpZ.mjs';
import { $ as $$ServiceHero } from '../chunks/ServiceHero_Yjfmpz6W.mjs';
import 'clsx';
import { a as $$CTA, $ as $$WhyChoose } from '../chunks/CTA_CpAe_erJ.mjs';
import { c as client } from '../chunks/sanity_Cpxq_s79.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://erofwhiterock.com");
const $$ServicesGrouped = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesGrouped;
  const { groupedServices } = Astro2.props;
  const categoryOrder = [
    "Emergency Care",
    "Trauma & Injury",
    "Pediatric Care",
    "Diagnostics",
    "Other Services"
  ];
  const sortedCategories = Object.keys(groupedServices).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-background-light"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> ${sortedCategories.map((category) => renderTemplate`<div class="mb-20 last:mb-0"> <div class="flex items-end gap-4 mb-10 border-b border-gray-200 pb-4"> <h2 class="text-3xl md:text-4xl font-bold text-text-main tracking-tight"> ${category} </h2> <span class="text-accent font-bold text-lg mb-1">
• ${groupedServices[category].length} Services
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${groupedServices[category].map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"> <div class="flex items-start justify-between mb-4"> <div class="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300"> <span class="material-symbols-outlined text-2xl"> ${service.icon || "medical_services"} </span> </div> <span class="material-symbols-outlined text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all">
arrow_forward
</span> </div> <h3 class="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors"> ${service.title} </h3> <p class="text-text-muted text-sm leading-relaxed line-clamp-3"> ${service.description} </p> </a>`)} </div> </div>`)} </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ServicesGrouped.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const services = await client.fetch(`
  *[_type == "service" && !(_id in path("drafts.**"))]|order(order asc) {
    title,
    "slug": slug.current,
    description,
    icon,
    category
  }
`);
  const categoryOrder = [
    "Medical Services",
    "Emergency Care",
    "Pediatric ER",
    "Trauma & Injury",
    "Diagnostics & Imaging",
    "Laboratory Services",
    "Other Services"
  ];
  const groupedServices = services.reduce((acc, service) => {
    const category = service.category || "Other Services";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});
  const sortedGroupedServices = Object.keys(groupedServices).filter((key) => key !== "Other Services").sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  }).reduce((obj, key) => {
    obj[key] = groupedServices[key];
    return obj;
  }, {});
  const heroData = {
    headline: "Our Medical Services",
    subtitle: "Comprehensive, state-of-the-art emergency care for your entire family. Open 24/7/365."
    // You might want to add a specific background image for this index page later
  };
  const whyChooseData = {
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Medical Services at ER of White Rock",
    description: "Comprehensive list of emergency medical services offered at ER of White Rock, Dallas.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://erofwhiterock.com/services/${service.slug}`,
        name: service.title
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Services | ER of White Rock - 24/7 Emergency Care", "description": "Explore our comprehensive emergency medical services including cardiac care, trauma, pediatric ER, and advanced diagnostics." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", " ", " ", " ", " "])), unescapeHTML(JSON.stringify(schema)), renderComponent($$result2, "ServiceHero", $$ServiceHero, { "data": heroData, "title": "Our Services" }), renderComponent($$result2, "ServicesGrouped", $$ServicesGrouped, { "groupedServices": sortedGroupedServices }), renderComponent($$result2, "WhyChoose", $$WhyChoose, { "data": whyChooseData }), renderComponent($$result2, "CTA", $$CTA, {})) })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
