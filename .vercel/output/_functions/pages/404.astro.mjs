import '../chunks/page-ssr_CmsWzWBj.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAOamDnX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found | ER of White Rock" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative py-32 lg:py-48 bg-background-light overflow-hidden"> <div class="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 text-center"> <span class="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider uppercase mb-6">
Error 404
</span> <h1 class="text-5xl md:text-7xl font-black text-text-main mb-8 leading-tight">
Page Not Found
</h1> <p class="text-xl text-text-muted max-w-2xl mx-auto mb-12">
The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/" class="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1">
Back to Home
</a> <a href="/contact" class="px-8 py-4 bg-white text-text-main font-bold rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300 border border-gray-100">
Contact Support
</a> </div> </div> <!-- Decorative Background Element --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-0"></div> </section> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/404.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
