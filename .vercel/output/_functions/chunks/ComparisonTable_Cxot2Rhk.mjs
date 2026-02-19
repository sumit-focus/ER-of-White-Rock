import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute } from './astro/server_D23ZCGoD.mjs';
import 'piccolore';
import 'clsx';
import { u as urlFor } from './Layout_DAOamDnX.mjs';

const $$Astro$2 = createAstro("https://erofwhiterock.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props;
  if (!data) return null;
  const {
    headline,
    headlineHighlight,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink
  } = data;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full min-h-[85vh] flex items-center bg-white overflow-hidden py-12 lg:py-0"> <!-- Background Elements --> <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"> <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl"></div> <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div> </div> <div class="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10"> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"> <!-- Left Column: Content --> <div class="flex flex-col gap-8 order-1 lg:order-1 items-center lg:items-start text-center lg:text-left"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 w-fit backdrop-blur-sm"> <span class="relative flex h-2.5 w-2.5"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span> </span> <span class="text-xs font-bold text-accent tracking-wide uppercase">
Open 24/7 - Walk-ins Welcome
</span> </div> <!-- Title --> <h1 class="text-primary text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"> ${headline}<br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600"> ${headlineHighlight} </span> </h1> <!-- Subtitle --> ${subtitle && renderTemplate`<p class="text-text-muted text-lg lg:text-xl leading-relaxed max-w-xl"> ${subtitle} </p>`} <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 mt-2"> ${ctaLink && ctaText && renderTemplate`<a${addAttribute(ctaLink, "href")} class="flex items-center justify-center h-14 px-8 rounded-full bg-accent text-white text-base font-bold shadow-lg shadow-accent/25 hover:bg-accent-hover hover:shadow-xl transition-all transform hover:-translate-y-0.5"> <span class="material-symbols-outlined mr-2 text-[1.25rem]">
directions
</span> ${ctaText} </a>`} <a href="#services" class="flex items-center justify-center h-14 px-8 rounded-full bg-white text-primary border-2 border-primary/10 text-base font-bold hover:border-primary hover:bg-primary/5 transition-all"> <span class="material-symbols-outlined mr-2 text-[1.25rem]">
medical_services
</span>
Our Services
</a> </div> <!-- Trust Indicators --> <div class="flex items-center gap-6 mt-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500 justify-center lg:justify-start"> <img src="/images/google-reviews.png" alt="Google Reviews" class="h-8 object-contain" onerror="this.style.display='none'"> <div class="h-4 w-px bg-gray-300"></div> </div> </div> <!-- Right Column: Image Box --> <div class="order-2 lg:order-2 relative"> <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white z-10 rotate-1 hover:rotate-0 transition-transform duration-500"> ${backgroundImage ? renderTemplate`<img${addAttribute(urlFor(backgroundImage).width(800).height(900).url(), "src")}${addAttribute(headline || "ER of White Rock", "alt")} width="800" height="900" class="w-full h-[400px] sm:h-[500px] lg:h-[650px] object-cover">` : renderTemplate`<div class="w-full h-[400px] sm:h-[500px] lg:h-[650px] bg-gray-100 flex items-center justify-center text-text-muted"> <span class="material-symbols-outlined text-6xl">
image
</span> </div>`} <!-- Floating Overlay Card --> <div class="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg border border-white/50"> <div class="flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0"> <span class="material-symbols-outlined text-green-600">timer_off</span> </div> <div> <h3 class="font-bold text-text-main">
No Wait Time
</h3> <p class="text-sm text-text-muted mt-1">
Unlike hospital ERs, see a doctor
                                    immediately upon arrival.
</p> </div> </div> </div> </div> <!-- Decorative Elements behind image --> <div class="absolute -top-4 -right-4 w-full h-full rounded-[2.5rem] border-2 border-primary/10 z-0 rotate-1"></div> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://erofwhiterock.com");
const $$ServingAreas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServingAreas;
  const { data } = Astro2.props;
  const neighborhoods = [
    "East Dallas",
    "Lakewood",
    "Casa Linda",
    "Little Forest Hills",
    "Forest Hills",
    "Lake Highlands",
    "White Rock Valley",
    "Old Lake Highlands",
    "Mount Auburn"
  ];
  const sectionTitle = data?.sectionTitle || "Proudly Serving White Rock & Surrounding Neighborhoods";
  const location = {
    name: "ER of White Rock",
    address: "10705 Northwest Hwy",
    city: "Dallas, TX 75238, United States"
  };
  return renderTemplate`${maybeRenderHead()}<section id="serving-areas" class="py-24 bg-background-subtle"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="max-w-3xl mx-auto text-center mb-16"> <h2 class="text-accent text-sm font-bold tracking-widest uppercase mb-3">
Community First
</h2> <h3 class="text-4xl md:text-5xl font-bold text-text-main tracking-tight"> ${sectionTitle} </h3> </div> <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"> <!-- Content Side --> <div class="lg:w-1/2"> <p class="text-text-muted text-lg mb-8 leading-relaxed">
Our facility is strategically located to provide rapid,
                    high-quality emergency medical care to the residents of East
                    Dallas and the beautiful White Rock Lake community. We are
                    honored to be your local emergency medical provider.
</p> <div class="grid grid-cols-2 gap-y-4 gap-x-8"> ${neighborhoods.map((area) => renderTemplate`<div class="flex items-center gap-3 group"> <span class="material-symbols-outlined text-accent text-2xl group-hover:scale-110 transition-transform">
check_circle
</span> <span class="text-text-main font-semibold text-lg"> ${area} </span> </div>`)} </div> <!-- CTA buttons for location context --> <div class="flex flex-col sm:flex-row gap-4 mt-10"> <a href="https://maps.app.goo.gl/kCShLM1aCLHoPFZq8" target="_blank" rel="noopener noreferrer" class="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-all text-center shadow-lg shadow-primary/10 flex items-center justify-center gap-2"> <span class="material-symbols-outlined">directions</span>
Get Directions
</a> <a href="tel:4699432939" class="flex-1 bg-white border-2 border-primary/10 text-text-main py-4 rounded-xl font-bold hover:border-primary/30 hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-2"> <span class="material-symbols-outlined">call</span>
Call Office
</a> </div> </div> <!-- Map Side --> <div class="lg:w-1/2 w-full relative group"> <!-- Decorative background elements --> <div class="absolute -inset-4 bg-primary/10 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div> <div class="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] lg:aspect-auto lg:h-[500px]"> <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"${addAttribute(`https://maps.google.com/maps?q=${encodeURIComponent(location.address + ", " + location.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`, "src")} class="grayscale-[0.2] opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"></iframe> <!-- Small overlay card --> <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center justify-between pointer-events-none transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"> <div> <p class="font-bold text-text-main"> ${location.name} </p> <p class="text-sm text-text-muted"> ${location.address} </p> </div> <div class="bg-accent/10 text-accent p-2 rounded-lg"> <span class="material-symbols-outlined">location_on</span> </div> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ServingAreas.astro", void 0);

const $$Astro = createAstro("https://erofwhiterock.com");
const $$ComparisonTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ComparisonTable;
  const { data } = Astro2.props;
  if (!data) return null;
  const { sectionTitle, sectionSubtitle, urgentCareFeatures, erFeatures } = data;
  const defaultUrgentCare = [
    {
      icon: "schedule",
      title: "Limited Hours",
      description: "Often closes at 8 PM or 9 PM."
    },
    {
      icon: "person",
      title: "Mid-Level Providers",
      description: "Often staffed by Nurse Practitioners or PAs."
    },
    {
      icon: "medical_services",
      title: "Basic Capabilities",
      description: "Simple X-rays, basic labs, minor illness only."
    }
  ];
  const defaultER = [
    {
      icon: "history_toggle_off",
      title: "Open 24/7/365",
      description: "Always open, including holidays."
    },
    {
      icon: "badge",
      title: "Board-Certified ER Physicians",
      description: "Expert doctors onsite at all times."
    },
    {
      icon: "radiology",
      title: "Advanced Imaging & Lab",
      description: "CT Scans, Ultrasounds, Digital X-ray, Comprehensive Labs."
    },
    {
      icon: "ecg_heart",
      title: "Life-Threatening Care",
      description: "Equipped for cardiac events, trauma, and severe conditions."
    }
  ];
  const displayUrgentCare = urgentCareFeatures && urgentCareFeatures[0] && typeof urgentCareFeatures[0] === "object" ? urgentCareFeatures : defaultUrgentCare;
  const displayER = erFeatures && erFeatures[0] && typeof erFeatures[0] === "object" ? erFeatures : defaultER;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white border-t border-gray-100"> <div class="max-w-[1440px] mx-auto px-6 lg:px-12"> <!-- Section Header --> <div class="text-center mb-16"> <span class="text-accent font-bold tracking-widest uppercase text-sm">Know Where to Go</span> <h2 class="text-4xl font-bold mt-2 text-text-main"> ${sectionTitle || "ER of White Rock vs. Urgent Care"} </h2> <p class="text-text-muted text-lg mt-4 max-w-2xl mx-auto"> ${sectionSubtitle || "Understanding when to choose a freestanding emergency room can save your life."} </p> </div> <!-- Comparison Cards --> <div class="grid md:grid-cols-2 gap-8 items-stretch"> <!-- Urgent Care Card --> <div class="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 opacity-80"> <h3 class="text-2xl font-bold text-text-muted mb-6">
Standard Urgent Care
</h3> <ul class="space-y-6"> ${displayUrgentCare.map((feature) => renderTemplate`<li class="flex items-start gap-4"> <span class="material-symbols-outlined text-gray-400 shrink-0"> ${feature.icon} </span> <div> <strong class="block text-text-main"> ${feature.title} </strong> <span class="text-sm text-text-muted"> ${feature.description} </span> </div> </li>`)} </ul> </div> <!-- ER Card (Highlighted) --> <div class="p-8 lg:p-12 rounded-3xl bg-white border-2 border-primary shadow-xl relative overflow-hidden"> <!-- Badge --> <div class="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
Best for Emergencies
</div> <h3 class="text-2xl font-bold text-primary mb-6">
ER of White Rock
</h3> <ul class="space-y-6"> ${displayER.map((feature) => renderTemplate`<li class="flex items-start gap-4"> <span class="material-symbols-outlined text-accent shrink-0"> ${feature.icon} </span> <div> <strong class="block text-text-main"> ${feature.title} </strong> <span class="text-sm text-text-muted"> ${feature.description} </span> </div> </li>`)} </ul> </div> </div> </div> </section>`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/sections/ComparisonTable.astro", void 0);

export { $$Hero as $, $$ServingAreas as a, $$ComparisonTable as b };
