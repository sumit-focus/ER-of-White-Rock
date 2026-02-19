import '../chunks/page-ssr_CmsWzWBj.mjs';
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAOamDnX.mjs';
import { s as sanityClient } from '../chunks/_sanity_client_JiifF4TX.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_Dn0Yjo3m.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://erofwhiterock.com");
const $$InsuranceBilling = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InsuranceBilling;
  const insurancePage = await sanityClient.fetch(
    `*[_type == "insurancePage"][0]{
        ...,
        "feeMasterPdfUrl": feeMasterPdf.asset->url
    }`
  );
  if (!insurancePage) {
    return Astro2.redirect("/404");
  }
  const {
    title,
    seo,
    hero,
    facilityNotice,
    acceptedInsurance,
    governmentInsurance,
    exclusiveDiscounts,
    balanceBilling,
    contactInfo,
    feeMasterPdfUrl
  } = insurancePage;
  const filteredFacilityNotice = facilityNotice?.filter((block) => {
    if (!block.children) return true;
    const text = block.children.map((c) => c.text).join(" ");
    return !text.includes("Advanced CT and Ultrasound scanner") && !text.includes("Open Professional Fee Master");
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo?.metaTitle || title, "description": seo?.metaDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden"> <div class="absolute inset-0 bg-primary"> <div class="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-10 mix-blend-overlay"></div> <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div> <!-- Animated shapes --> <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent opacity-20 blur-3xl rounded-full"></div> <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 opacity-10 blur-3xl rounded-full"></div> </div> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/20 mb-8 mx-auto"> <span class="material-symbols-outlined text-sm">verified_user</span> <span class="text-xs font-bold uppercase tracking-wider">Transparent Billing</span> </div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight"> ${hero?.title || title} </h1> <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed"> ${hero?.subtitle} </p> </div> </section>  <section class="relative z-20 -mt-24 lg:-mt-32 px-6 lg:px-12 pb-20"> <div class="max-w-5xl mx-auto"> <div class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-12 relative overflow-hidden"> <!-- Decorative accent --> <div class="absolute top-0 left-0 w-2 h-full bg-accent"></div> <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center"> <div class="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent"> <span class="material-symbols-outlined text-4xl lg:text-5xl">emergency_home</span> </div> <div class="flex-1"> <h2 class="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
Facility Notice
<span class="px-3 py-1 bg-gray-100 text-text-muted text-xs font-bold uppercase tracking-wider rounded-lg">HB 2041</span> </h2> <div class="prose prose-lg text-text-muted max-w-none mb-8"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": filteredFacilityNotice })} </div> ${feeMasterPdfUrl && renderTemplate`<a${addAttribute(feeMasterPdfUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-secondary hover:-translate-y-1 transition-all duration-300"> <span class="material-symbols-outlined">
description
</span>
Open Professional Fee Master
</a>`} </div> </div> </div> </div> </section>  <div class="py-16 bg-white"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-4"> ${acceptedInsurance?.title} </h2> <p class="text-text-muted">
We accept most major insurance plans.
</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> ${acceptedInsurance?.providers?.map((provider) => renderTemplate`<div class="bg-gray-50 px-6 py-4 rounded-xl shadow-sm text-center font-bold text-text-muted flex items-center justify-center min-h-[80px] hover:text-primary transition-colors cursor-default border border-gray-100"> ${provider} </div>`)} </div> <p class="text-center text-text-muted mt-8 text-sm italic">
Please check with us or your insurer to confirm coverage, as
                plans may vary.
</p> </div> </div>  <section class="py-20 bg-gray-50"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch"> <!-- Government Insurance --> <div class="bg-white p-8 lg:p-12 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col items-start gap-6"> <div class="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-accent"> <span class="material-symbols-outlined text-3xl">policy</span> </div> <div> <h3 class="text-2xl font-bold text-text-main mb-4"> ${governmentInsurance?.title} </h3> <div class="prose text-text-muted leading-relaxed"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": governmentInsurance?.content })} </div> </div> </div> <!-- Exclusive Discounts --> <div class="bg-primary text-white p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col items-start gap-6 relative overflow-hidden"> <div class="absolute -right-12 -top-12 opacity-10"> <span class="material-symbols-outlined text-9xl">local_police</span> </div> <div class="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white relative z-10"> <span class="material-symbols-outlined text-3xl">verified</span> </div> <div class="relative z-10 w-full"> <h3 class="text-2xl font-bold mb-6"> ${exclusiveDiscounts?.title} </h3> <ul class="space-y-4 mb-8"> ${exclusiveDiscounts?.discounts?.map(
    (discount) => renderTemplate`<li class="flex items-center gap-3 text-lg font-medium"> <span class="material-symbols-outlined text-green-400">
check_circle
</span> ${discount} </li>`
  )} </ul> <p class="text-blue-200 text-sm border-t border-white/20 pt-4 flex items-center gap-2"> <span class="material-symbols-outlined text-lg">info</span> ${exclusiveDiscounts?.note} </p> </div> </div> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-8"> ${balanceBilling?.title} </h2> <div class="prose prose-lg mx-auto text-text-muted"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": balanceBilling?.content })} </div> </div> </section>  <section class="py-20 bg-accent text-white text-center"> <div class="max-w-4xl mx-auto px-6 lg:px-12"> <h2 class="text-3xl md:text-4xl font-black mb-6"> ${contactInfo?.title} </h2> <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto"> ${contactInfo?.description} </p> <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"> ${contactInfo?.phone && renderTemplate`<a${addAttribute(`tel:${contactInfo.phone}`, "href")} class="flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"> <span class="material-symbols-outlined">call</span> ${contactInfo.phone} </a>`} ${contactInfo?.email && renderTemplate`<a${addAttribute(`mailto:${contactInfo.email}`, "href")} class="flex items-center gap-3 bg-accent-dark border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"> <span class="material-symbols-outlined">mail</span> ${contactInfo.email} </a>`} </div> <p class="text-white/80 text-sm max-w-xl mx-auto"> ${contactInfo?.footerText} </p> </div> </section> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/insurance-billing.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/insurance-billing.astro";
const $$url = "/insurance-billing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$InsuranceBilling,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
