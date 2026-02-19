import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute } from './astro/server_D23ZCGoD.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro("https://erofwhiterock.com");
const $$WhyChoose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyChoose;
  const { data } = Astro2.props;
  const defaultFeatures = [
    {
      icon: "timer_off",
      title: "Immediate Care",
      description: "Experience immediate triage and bedside care. We prioritize getting you seen by a doctor the moment you arrive with our streamlined process."
    },
    {
      icon: "medical_information",
      title: "Board-Certified Care",
      description: "Our facility is staffed exclusively by ER-trained physicians and nurses who are experts in emergency medicine and trauma care."
    },
    {
      icon: "biotech",
      title: "Advanced Technology",
      description: "Equipped with on-site CT scans, digital X-rays, ultrasounds, and a full-service laboratory for rapid and accurate diagnosis."
    }
  ];
  const features = data?.features || defaultFeatures;
  const sectionTitle = data?.sectionTitle || "Why Choose ER of White Rock?";
  const sectionSubtitle = data?.sectionSubtitle || "We redefine emergency care by putting the patient first, combining speed, expertise, and advanced technology.";
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-6"> ${sectionTitle} </h2> <p class="text-text-muted text-lg max-w-2xl mx-auto"> ${sectionSubtitle} </p> </div> <!-- Features Grid --> <div class="grid md:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`<div class="flex flex-col items-center text-center p-8 bg-background-subtle rounded-3xl border border-transparent hover:border-primary/20 transition-all"> <div class="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20"> <span class="material-symbols-outlined text-4xl"> ${feature.icon || "check_circle"} </span> </div> <h3 class="text-2xl font-bold text-primary mb-3"> ${feature.title} </h3> <p class="text-text-muted">${feature.description}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/WhyChoose.astro", void 0);

const $$Astro = createAstro("https://erofwhiterock.com");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const { data } = Astro2.props;
  if (!data) return null;
  const { title, text, buttonText, buttonLink } = data;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-primary text-white text-center" id="contact"> <div class="container mx-auto px-4 max-w-4xl"> <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight"> ${title} </h2> <p class="text-xl md:text-2xl text-blue-100 mb-10 font-medium leading-relaxed"> ${text} </p> <div class="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"> ${buttonLink && buttonText && renderTemplate`<a${addAttribute(buttonLink, "href")} class="bg-white text-primary border-2 border-transparent px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md text-sm cursor-pointer"> ${buttonText} </a>`} <a href="https://maps.app.goo.gl/kCShLM1aCLHoPFZq8" target="_blank" rel="noopener noreferrer" class="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 text-sm">
Get Directions
</a> </div> <div class="grid md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-10"> <div> <h3 class="text-lg font-bold mb-2">Location</h3> <p class="text-blue-200">
10705 Northwest Hwy<br>Dallas, TX 75238
</p> </div> <div> <h3 class="text-lg font-bold mb-2">Hours</h3> <p class="text-blue-200">
Open 24/7<br>365 Days a Year
</p> </div> <div> <h3 class="text-lg font-bold mb-2">Contact</h3> <p class="text-blue-200">
4699432939<br>info@erwhiterock.com
</p> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/CTA.astro", void 0);

export { $$WhyChoose as $, $$CTA as a };
