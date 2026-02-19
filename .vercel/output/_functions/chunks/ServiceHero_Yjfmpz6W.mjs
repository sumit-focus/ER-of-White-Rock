import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_D23ZCGoD.mjs';
import 'piccolore';
import 'clsx';
import { u as urlFor } from './sanity_Cpxq_s79.mjs';

const $$Astro = createAstro("https://erofwhiterock.com");
const $$ServiceHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceHero;
  const { data, title, medicalReviewer } = Astro2.props;
  if (!data) return null;
  const {
    headline,
    headlineHighlight,
    headlineSuffix,
    subtitle,
    backgroundImage
  } = data;
  const displayTitle = title || headline;
  const bgUrl = backgroundImage ? urlFor(backgroundImage).width(1920).url() : null;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full py-20 lg:py-32 bg-primary overflow-hidden"> <!-- Background Image with Overlay --> ${bgUrl && renderTemplate`<div class="absolute inset-0 z-0"> <img${addAttribute(bgUrl, "src")}${addAttribute(headline || "Service Hero Background", "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div> </div>`} <!-- Fallback Background if no image --> ${!bgUrl && renderTemplate`<div class="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-dark to-primary-darker"></div>`} <!-- Decorative Patterns --> <div class="absolute inset-0 z-0 opacity-10 pointer-events-none"> <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div> <div class="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div> </div> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center"> <div class="max-w-4xl w-full flex flex-col items-center"> <!-- Breadcrumbs (Simple) --> <nav class="flex items-center justify-center gap-2 text-sm text-white/70 mb-6 font-medium tracking-wide uppercase"> <a href="/" class="hover:text-white transition-colors">Home</a> <span class="material-symbols-outlined text-sm">chevron_right</span> <a href="/services" class="hover:text-white transition-colors">Services</a> <span class="material-symbols-outlined text-sm">chevron_right</span> <span class="text-white">${displayTitle}</span> </nav> <!-- Content --> <h1 class="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight"> ${headline} ${headlineHighlight && renderTemplate`<span class="text-accent block mt-2"> ${headlineHighlight} </span>`} ${headlineSuffix && renderTemplate`<span class="text-white block mt-2"> ${headlineSuffix} </span>`} </h1> ${subtitle && renderTemplate`<p class="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"> ${subtitle} </p>`} <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row items-center gap-4 mt-8"> <a href="tel:4699432939" class="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"> <span class="material-symbols-outlined">call</span>
4699432939
</a> <a href="https://maps.app.goo.gl/kCShLM1aCLHoPFZq8" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors backdrop-blur-sm border border-white/20"> <span class="material-symbols-outlined">directions</span>
Get Directions
</a> </div> <!-- Medical Reviewer Badge --> ${medicalReviewer && renderTemplate`<div class="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20"> <span class="material-symbols-outlined text-accent text-xl">
verified
</span> <span class="text-white/90 text-sm">
Medically reviewed by${" "} <strong class="text-white"> ${medicalReviewer.name} </strong> ${medicalReviewer.title && renderTemplate`<span>, ${medicalReviewer.title}</span>`} </span> </div>`} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ServiceHero.astro", void 0);

export { $$ServiceHero as $ };
