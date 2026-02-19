import '../chunks/page-ssr_CmsWzWBj.mjs';
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout, u as urlFor } from '../chunks/Layout_DAOamDnX.mjs';
import { s as sanityClient } from '../chunks/_sanity_client_JiifF4TX.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_Dn0Yjo3m.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://erofwhiterock.com");
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  const aboutPage = await sanityClient.fetch(
    `*[_type == "aboutPage"][0]{
        ...,
        facility {
            ...,
            photos[] { asset-> }
        },
        accreditations {
            ...,
            logos[] { asset-> }
        }
    }`
  );
  if (!aboutPage) {
    return Astro2.redirect("/404");
  }
  const { seo, hero, ourStory, whyChooseUs, facility, accreditations, cta } = aboutPage;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo?.metaTitle || hero?.title, "description": seo?.metaDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white"> <div class="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-10 mix-blend-overlay"></div> <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div> <div class="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"> ${hero?.title} </h1> <p class="text-xl md:text-2xl text-blue-100 font-light leading-relaxed"> ${hero?.missionStatement} </p> </div> </section>  <section class="py-24 bg-white"> <div class="max-w-3xl mx-auto px-6 lg:px-12"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-6"> ${ourStory?.title} </h2> <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div> </div> <div class="prose prose-lg text-text-muted mx-auto"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": ourStory?.content })} </div> </div> </section>  <section class="py-24 bg-gray-50"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="text-center mb-16"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-bold uppercase tracking-wider mb-6"> <span class="material-symbols-outlined text-lg">star</span>
Why Choose Us
</div> <h2 class="text-3xl md:text-4xl font-bold text-text-main"> ${whyChooseUs?.title} </h2> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${whyChooseUs?.differentiators?.map((item) => renderTemplate`<div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"> <div class="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6"> <span class="material-symbols-outlined text-3xl"> ${item.icon || "verified"} </span> </div> <h3 class="text-xl font-bold text-text-main mb-3"> ${item.title} </h3> <p class="text-text-muted leading-relaxed"> ${item.description} </p> </div>`)} </div> </div> </section>  <section class="py-24 bg-white overflow-hidden"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16"> <div class="lg:w-1/2"> <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-6"> ${facility?.title} </h2> <p class="text-lg text-text-muted leading-relaxed mb-8"> ${facility?.description} </p> <a href="/contact" class="text-primary font-bold hover:text-accent flex items-center gap-2 group">
Take a Virtual Tour
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span> </a> </div> <div class="lg:w-1/2 relative">  <div class="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>  ${!facility?.photos || facility.photos.length === 0 ? renderTemplate`<div class="grid grid-cols-2 gap-4"> <div class="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300">
Photo 1
</div> <div class="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300 translate-y-8">
Photo 2
</div> </div>` : renderTemplate`<div class="grid grid-cols-2 gap-4"> ${facility.photos.slice(0, 4).map((photo, index) => renderTemplate`<div${addAttribute(`rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? "translate-y-8" : ""}`, "class")}> <img${addAttribute(urlFor(photo).width(600).height(600).url(), "src")} alt="Facility layout" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div>`)} </div>`} </div> </div> </div> </section>  ${accreditations && renderTemplate`<section class="py-20 border-t border-gray-100"> <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center"> <h2 class="text-2xl font-bold text-gray-400 mb-12 uppercase tracking-widest"> ${accreditations.title} </h2> <div class="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"> ${!accreditations.logos || accreditations.logos.length === 0 ? (
    // Placeholders
    [1, 2, 3, 4].map((i) => renderTemplate`<div class="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>`)
  ) : accreditations.logos.map((logo) => renderTemplate`<img${addAttribute(urlFor(logo).height(80).url(), "src")} alt="Accreditation Logo" class="h-12 md:h-16 w-auto object-contain">`)} </div> </div> </section>`} ${cta && renderTemplate`<section class="py-24 bg-primary text-white text-center relative overflow-hidden"> <div class="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-5"></div> <div class="max-w-4xl mx-auto px-6 lg:px-12 relative z-10"> <h2 class="text-4xl lg:text-5xl font-black mb-6"> ${cta.title} </h2> <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"> ${cta.description} </p> <a${addAttribute(cta.buttonLink, "href")} class="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-dark hover:scale-105 transition-all shadow-xl shadow-accent/30"> <span>${cta.buttonText}</span> <span class="material-symbols-outlined">
arrow_forward
</span> </a> </div> </section>`}` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/about-us.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AboutUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
