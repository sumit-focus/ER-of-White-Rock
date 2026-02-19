import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, e as createAstro, k as renderComponent, n as renderSlot, o as renderHead, u as unescapeHTML, l as Fragment, p as defineScriptVars } from './astro/server_D23ZCGoD.mjs';
import 'piccolore';
/* empty css                            */
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import 'clsx';
import { s as sanityClient } from './_sanity_client_JiifF4TX.mjs';

const client = createClient({
  projectId: "hdx7hgqq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-02-03"
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).auto("format").fit("max");
}
const LANDING_PAGE_PROJECTION = `{
    ...,
    content[] {
        ...,
        _type == 'servicesSection' => {
            ...,
            services[]->
        },
        _type == 'physiciansSection' => {
            ...,
            physicians[]->
        },
        _type == 'testimonialsSection' => {
            ...,
            testimonials[]->
        },
        _type == 'faqSection' => {
            ...,
            faqs[]->
        }
    }
}`;
const LANDING_PAGE_QUERY = `*[_type == "landingPage" && (slug.current == "home" || !defined(slug.current))][0] ${LANDING_PAGE_PROJECTION}`;
const LANDING_PAGE_BY_SLUG_QUERY = `*[_type == "landingPage" && slug.current == $slug][0] ${LANDING_PAGE_PROJECTION}`;
const SETTINGS_QUERY = `*[_type == "settings"][0] {
    siteName,
    tagline,
    logo,
    footerLogo,
    contactPhone,
    address,
    email,
    googleMapsUrl,
    socialLinks,
    headerLinks[] { label, url, isActive },
    footerDescription,
    footerDisclaimer,
    googleAnalyticsId,
    footerColumns[] { title, links[] { label, url, isActive } },
    showStickyCTA,
    stickyCallText,
    stickyDirectionsText,
    globalSchema
}`;
async function getLandingPage() {
  return await client.fetch(LANDING_PAGE_QUERY);
}
async function getLandingPageBySlug(slug) {
  return await client.fetch(LANDING_PAGE_BY_SLUG_QUERY, { slug });
}
async function getSettings() {
  return await client.fetch(SETTINGS_QUERY);
}

const $$ServicesMenu = createComponent(async ($$result, $$props, $$slots) => {
  const services = await sanityClient.fetch(`*[_type == "service" && defined(slug.current) && !(_id in path("drafts.**"))] | order(title asc) {
  title,
  "slug": slug.current,
  icon
}`);
  return renderTemplate`${maybeRenderHead()}<div class="group relative"> <a href="/services" class="flex items-center gap-1 text-[15px] font-semibold text-text-main hover:text-primary transition-colors py-4">
ER Services
<span class="material-symbols-outlined text-sm">expand_more</span> </a> <!-- Mega Menu Dropdown --> <div class="absolute left-1/2 -translate-x-1/2 top-full w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 z-50 pt-4"> <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8"> ${services.map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="flex items-center gap-3 group/item hover:bg-gray-50 p-2 rounded-lg -mx-2 transition-colors"> <span class="material-symbols-outlined text-primary group-hover/item:text-accent transition-colors"> ${service.icon || "medical_services"} </span> <span class="text-sm font-medium text-text-secondary group-hover/item:text-primary transition-colors"> ${service.title} </span> </a>`)} </div> <!-- Decorative arrow --> <div class="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div> </div> </div>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/layout/ServicesMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c, _d;
const $$Astro = createAstro("https://erofwhiterock.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    pageSchema,
    hideStickyCTA = false,
    ogImage,
    ogType = "website"
  } = Astro2.props;
  const settings = await getSettings().catch(() => null);
  const defaultSettings = {
    siteName: "ER of White Rock",
    tagline: "Emergency Care",
    contactPhone: "4699432939",
    address: "10705 Northwest Hwy, Dallas, TX 75238, United States",
    email: "info@erwhiterock.com",
    googleMapsUrl: "https://maps.app.goo.gl/kCShLM1aCLHoPFZq8",
    logo: null,
    footerLogo: null,
    headerLinks: [
      { label: "Our Physicians", url: "#physicians", isActive: true },
      {
        label: "Ins. & Billing Info",
        url: "/insurance-billing",
        isActive: true
      },
      { label: "About Us", url: "/about-us", isActive: true },
      { label: "Contact Us", url: "/contact", isActive: true }
    ],
    footerDescription: "Board-certified emergency medical care available 24/7. We prioritize accuracy, speed, and patient comfort in every visit.",
    footerColumns: [],
    showStickyCTA: true,
    stickyCallText: "Call Now",
    stickyDirectionsText: "Get Directions",
    globalSchema: null,
    googleAnalyticsId: null,
    socialLinks: [],
    footerDisclaimer: "The information on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. In case of a medical emergency, call 911 immediately."
  };
  const cleanSettings = settings ? Object.fromEntries(Object.entries(settings).filter(([_, v]) => v != null)) : {};
  const siteSettings = { ...defaultSettings, ...cleanSettings };
  const {
    siteName,
    tagline,
    contactPhone,
    address,
    email,
    googleMapsUrl,
    logo,
    footerLogo,
    headerLinks,
    footerColumns,
    showStickyCTA,
    stickyCallText,
    stickyDirectionsText,
    globalSchema,
    googleAnalyticsId
  } = siteSettings;
  const activeHeaderLinks = (headerLinks || []).filter(
    (link) => link.isActive !== false
  );
  const addressParts = address?.split(",") || [
    "10705 Northwest Hwy",
    "Dallas",
    "TX 75238",
    "United States"
  ];
  const phoneDigits = contactPhone?.replace(/[^0-9]/g, "");
  const sameAsUrls = siteSettings.socialLinks?.map((link) => link.url) || [];
  const autoSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EmergencyRoom",
    "@id": `${Astro2.url.origin}/#org`,
    name: siteName,
    url: Astro2.url.origin,
    logo: logo ? urlFor(logo).width(512).height(512).url() : void 0,
    image: logo ? urlFor(logo).width(1200).height(630).url() : void 0,
    description: tagline || "24/7 Emergency Care in White Rock, Dallas.",
    sameAs: sameAsUrls.length > 0 ? sameAsUrls : void 0,
    telephone: contactPhone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts[0] || "10705 Northwest Hwy",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75238",
      addressCountry: "US"
    },
    // Google Map / Directions
    hasMap: googleMapsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.86470362258898,
      longitude: -96.69999270956976
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    medicalSpecialty: "EmergencyMedicine",
    isAcceptingNewPatients: true,
    priceRange: "$$"
  });
  return renderTemplate(_d || (_d = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', ">", '<meta property="og:site_name"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', ">", '<!-- Canonical URL --><link rel="canonical"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Google Fonts - Public Sans --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"><!-- Material Symbols --><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"><!-- Global JSON-LD Schema --><script type="application/ld+json">', "<\/script>", "<!-- Page-specific JSON-LD Schema -->", "<!-- Partytown / Google Analytics -->", "", '</head> <body class="bg-background-light text-text-main font-display antialiased overflow-x-hidden selection:bg-primary selection:text-white"> <!-- Header --> <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300"> <div class="max-w-[1280px] mx-auto px-6 lg:px-12"> <div class="flex items-center justify-between h-20 md:h-24"> <!-- Logo --> <a class="flex items-center gap-4 group" href="/"> ', ' <div class="flex flex-col"> <h1 class="text-2xl font-black tracking-tight text-primary leading-none"> ', ' </h1> <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted mt-1"> ', ' </p> </div> </a> <!-- Navigation (desktop only) --> <nav class="hidden lg:flex items-center gap-6 xl:gap-8"> ', " ", ' </nav> <!-- Right side: CTA + Hamburger --> <div class="flex items-center gap-3"> <!-- CTA Button (hidden on mobile) --> <a', ' class="hidden md:flex items-center justify-center h-12 px-6 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-secondary hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"> <span class="material-symbols-outlined text-[20px] mr-2">call</span> <span class="whitespace-nowrap">Call Now</span> </a> <!-- Hamburger Button (mobile/tablet only) --> <button id="hamburger-btn" class="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-100 transition-colors" aria-label="Open navigation menu" aria-expanded="false"> <span class="material-symbols-outlined text-3xl text-text-main">menu</span> </button> </div> </div> </div> </header> <div id="mobile-nav-overlay" class="fixed inset-0 bg-black/50 z-[55] opacity-0 pointer-events-none transition-opacity duration-300"></div> <nav id="mobile-nav-drawer" class="fixed top-0 right-0 w-[300px] max-w-[85vw] h-full z-[60] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-out flex flex-col"> <!-- Drawer Header --> <div class="flex items-center justify-between px-6 h-20 border-b border-gray-100"> <span class="text-lg font-bold text-primary">Menu</span> <button id="close-drawer-btn" class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Close navigation menu"> <span class="material-symbols-outlined text-2xl text-text-main">close</span> </button> </div> <!-- Nav Links --> <div class="flex-1 overflow-y-auto py-4"> <a href="/" class="flex items-center gap-3 px-6 py-4 text-base font-semibold text-text-main hover:bg-primary/5 hover:text-primary transition-colors"> <span class="material-symbols-outlined text-xl">home</span>\nHome\n</a> <a href="/services" class="flex items-center gap-3 px-6 py-4 text-base font-semibold text-text-main hover:bg-primary/5 hover:text-primary transition-colors"> <span class="material-symbols-outlined text-xl">medical_services</span>\nServices\n</a> ', ' </div> <!-- Drawer Footer CTA --> <div class="p-6 border-t border-gray-100"> <a', ' class="flex items-center justify-center w-full py-4 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-secondary transition-colors"> <span class="material-symbols-outlined mr-2">call</span>\nCall ', " </a> <a", ' target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full py-4 mt-3 rounded-full bg-accent text-white font-bold shadow-lg hover:bg-accent-hover transition-colors"> <span class="material-symbols-outlined mr-2">location_on</span>\nGet Directions\n</a> </div> </nav> <!-- Main Content --> <div class="pt-20 md:pt-24"> ', ' </div> <!-- Footer --> <footer id="site-footer" class="bg-primary text-white py-12 md:py-16"> <div class="max-w-[1280px] mx-auto px-6 lg:px-12"> <div class="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 mb-12"> <!-- Brand --> <div class="shrink-0"> <a class="flex items-center gap-4 group" href="/"> ', ' <div class="flex flex-col"> <h1 class="text-2xl md:text-3xl font-black tracking-tight text-white leading-none"> ', ' </h1> <p class="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-blue-200 mt-1 md:mt-2"> ', ' </p> </div> </a> </div> <!-- Footer Link Columns (dynamic) --> <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full lg:w-auto"> ', ' </div> </div> <!-- Disclaimer --> <div class="border-t border-white/10 pt-8 mt-12 mb-8"> <p class="text-xs text-blue-200/50 leading-relaxed text-justify"> ', ' </p> </div> <!-- Copyright --> <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-blue-200/60"> <p>\n&copy; ', " ", '. All rights reserved.\n</p> <div class="flex gap-6 mt-4 md:mt-0"> <a class="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a> <a class="hover:text-white transition-colors" href="/terms-of-service">Terms of Service</a> <a class="hover:text-white transition-colors" href="/hipaa-notice">HIPAA Notice</a> </div> </div> </div> </footer> <!-- Global Sticky CTA (Mobile Only) \u2014 from Site Settings --> ', ' <!-- Mobile Nav & Sticky CTA Scripts --> <script>\n        // Hamburger menu toggle\n        var hamburgerBtn = document.getElementById("hamburger-btn");\n        var closeDrawerBtn = document.getElementById("close-drawer-btn");\n        var overlay = document.getElementById("mobile-nav-overlay");\n        var drawer = document.getElementById("mobile-nav-drawer");\n\n        function openDrawer() {\n            if (!drawer || !overlay) return;\n            drawer.style.transform = "translateX(0)";\n            overlay.style.opacity = "1";\n            overlay.style.pointerEvents = "auto";\n            document.body.style.overflow = "hidden";\n        }\n\n        function closeDrawer() {\n            if (!drawer || !overlay) return;\n            drawer.style.transform = "translateX(100%)";\n            overlay.style.opacity = "0";\n            overlay.style.pointerEvents = "none";\n            document.body.style.overflow = "";\n        }\n\n        if (hamburgerBtn) hamburgerBtn.addEventListener("click", openDrawer);\n        if (closeDrawerBtn)\n            closeDrawerBtn.addEventListener("click", closeDrawer);\n        if (overlay) overlay.addEventListener("click", closeDrawer);\n\n        // Close drawer on link click\n        if (drawer) {\n            var links = drawer.querySelectorAll("a");\n            for (var i = 0; i < links.length; i++) {\n                links[i].addEventListener("click", closeDrawer);\n            }\n        }\n\n        // Close on Escape key\n        document.addEventListener("keydown", function (e) {\n            if (e.key === "Escape") closeDrawer();\n        });\n\n        // Sticky CTA: hide when footer is visible\n        var stickyCTA = document.getElementById("global-sticky-cta");\n        var siteFooter = document.getElementById("site-footer");\n\n        if (stickyCTA && siteFooter) {\n            var observer = new IntersectionObserver(\n                function (entries) {\n                    for (var j = 0; j < entries.length; j++) {\n                        if (entries[j].isIntersecting) {\n                            stickyCTA.style.transform = "translateY(100%)";\n                        } else {\n                            stickyCTA.style.transform = "translateY(0)";\n                        }\n                    }\n                },\n                { threshold: 0, rootMargin: "0px" },\n            );\n            observer.observe(siteFooter);\n        }\n    <\/script> </body><!-- Mobile Nav Drawer --></html>'])), addAttribute(description || `${siteName} - 24/7 Emergency Care`, "content"), addAttribute(ogType, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description || `${siteName} - 24/7 Emergency Care`, "content"), ogImage ? renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>` : logo ? renderTemplate`<meta property="og:image"${addAttribute(urlFor(logo).width(1200).height(630).url(), "content")}>` : null, addAttribute(siteName, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description || `${siteName} - 24/7 Emergency Care`, "content"), ogImage ? renderTemplate`<meta property="twitter:image"${addAttribute(ogImage, "content")}>` : logo ? renderTemplate`<meta property="twitter:image"${addAttribute(urlFor(logo).width(1200).height(630).url(), "content")}>` : null, addAttribute(Astro2.url.href, "href"), addAttribute(Astro2.generator, "content"), title, unescapeHTML(autoSchema), globalSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(globalSchema)), pageSchema && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(pageSchema)), googleAnalyticsId && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate(_c || (_c = __template(['<script type="text/partytown"', '><\/script><script type="text/partytown">(function(){', '\n                        window.dataLayer = window.dataLayer || [];\n                        window.gtag = function() {\n                            dataLayer.push(arguments);\n                        }\n                        window.gtag("js", new Date());\n                        window.gtag("config", googleAnalyticsId);\n                    })();<\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`, "src"), defineScriptVars({ googleAnalyticsId })) })}`, renderHead(), logo ? renderTemplate`<img${addAttribute(urlFor(logo).width(200).url(), "src")}${addAttribute(`${siteName} Logo`, "alt")} class="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300">` : renderTemplate`<img src="/logo.png"${addAttribute(`${siteName} Logo`, "alt")} class="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300">`, siteName, tagline, renderComponent($$result, "ServicesMenu", $$ServicesMenu, {}), activeHeaderLinks.map((link) => renderTemplate`<a class="text-[15px] font-semibold text-text-main hover:text-primary transition-colors whitespace-nowrap"${addAttribute(link.url, "href")}> ${link.label} </a>`), addAttribute(`tel:${phoneDigits}`, "href"), activeHeaderLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="flex items-center gap-3 px-6 py-4 text-base font-semibold text-text-main hover:bg-primary/5 hover:text-primary transition-colors"> <span class="material-symbols-outlined text-xl"> ${link.label === "About Us" ? "info" : link.label === "Contact Us" ? "contact_mail" : link.url?.includes("insurance") ? "policy" : link.url?.includes("physician") ? "groups" : "arrow_forward"} </span> ${link.label} </a>`), addAttribute(`tel:${phoneDigits}`, "href"), contactPhone, addAttribute(googleMapsUrl, "href"), renderSlot($$result, $$slots["default"]), footerLogo ? renderTemplate`<img${addAttribute(urlFor(footerLogo).width(200).url(), "src")}${addAttribute(`${siteName} Logo`, "alt")} class="w-16 h-16 object-contain">` : renderTemplate`<img src="/logo.png"${addAttribute(`${siteName} Logo`, "alt")} class="w-16 h-16 object-contain brightness-0 invert">`, siteName, tagline, footerColumns && footerColumns.length > 0 ? footerColumns.map((col) => renderTemplate`<div> <h4 class="font-bold text-lg mb-4 md:mb-6 text-white"> ${col.title} </h4> <ul class="space-y-3 md:space-y-4 text-blue-200"> ${(col.links || []).filter(
    (link) => link.isActive !== false
  ).map((link) => renderTemplate`<li> <a class="hover:text-white transition-colors text-sm md:text-base"${addAttribute(link.url, "href")}> ${link.label} </a> </li>`)} </ul> </div>`) : (
    /* Fallback: hardcoded footer columns if nothing set in CMS yet */
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <div> <h4 class="font-bold text-lg mb-4 md:mb-6 text-white">
Services
</h4> <ul class="space-y-3 md:space-y-4 text-blue-200"> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="#services">
Emergency Care
</a> </li> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="#services">
Pediatrics
</a> </li> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="#services">
Trauma
</a> </li> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="#services">
Diagnostics
</a> </li> </ul> </div> <div> <h4 class="font-bold text-lg mb-4 md:mb-6 text-white">
Patient Info
</h4> <ul class="space-y-3 md:space-y-4 text-blue-200"> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="/about-us">
About Us
</a> </li> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="/contact">
Contact Us
</a> </li> <li> <a class="hover:text-white transition-colors text-sm md:text-base" href="/insurance-billing">
Billing & Insurance
</a> </li> </ul> </div> <div> <h4 class="font-bold text-lg mb-4 md:mb-6 text-white text-left">
Contact
</h4> <ul class="space-y-3 md:space-y-4 text-blue-200 text-left list-none p-0 text-sm md:text-base"> <li>10705 Northwest Hwy</li> <li>Dallas, TX 75238</li> <li>United States</li> <li>${email}</li> </ul> </div> ` })}`
  ), siteSettings.footerDisclaimer || "The information on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. In case of a medical emergency, call 911 immediately.", (/* @__PURE__ */ new Date()).getFullYear(), siteName, showStickyCTA && !hideStickyCTA && renderTemplate`<div id="global-sticky-cta" class="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg md:hidden transition-transform duration-300"> <div class="grid grid-cols-2 gap-0"> <a${addAttribute(`tel:${phoneDigits}`, "href")} class="flex items-center justify-center p-4 bg-primary text-white font-bold text-center hover:bg-primary-dark transition-colors"> <span class="material-symbols-outlined mr-2">call</span> ${stickyCallText || "Call Now"} </a> <a${addAttribute(googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-4 bg-accent text-white font-bold text-center hover:bg-accent-dark transition-colors"> <span class="material-symbols-outlined mr-2">
location_on
</span> ${stickyDirectionsText || "Get Directions"} </a> </div> </div>`);
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getLandingPage as a, getLandingPageBySlug as g, urlFor as u };
