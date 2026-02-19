import '../chunks/page-ssr_BG6rDwkd.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DK4fnEpZ.mjs';
export { renderers } from '../renderers.mjs';

const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  const title = "Terms of Service | ER of White Rock";
  const description = "Terms of Service and Conditions of Use for ER of White Rock.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-gray-50"> <div class="max-w-4xl mx-auto px-6 lg:px-12"> <h1 class="text-4xl md:text-5xl font-black text-primary mb-8">
Terms of Service
</h1> <p class="text-text-muted mb-12">
Last Updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()} </p> <div class="prose prose-lg text-text-muted max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"> <h2>1. Acceptance of Terms</h2> <p>
By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement. In
                    addition, when using this website's particular services, you
                    shall be subject to any posted guidelines or rules
                    applicable to such services.
</p> <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg"> <h3 class="text-red-700 font-bold text-xl mt-0 mb-2">
Medical Disclaimer
</h3> <p class="text-red-600 mb-0">
IF YOU THINK YOU MAY HAVE A MEDICAL EMERGENCY, CALL 911
                        OR GO TO THE NEAREST EMERGENCY ROOM IMMEDIATELY.
</p> <p class="text-red-600 mt-2 mb-0">
The content on this website is for informational
                        purposes only and is not intended to be a substitute for
                        professional medical advice, diagnosis, or treatment.
                        Always seek the advice of your physician or other
                        qualified health provider with any questions you may
                        have regarding a medical condition.
</p> </div> <h2>2. Use License</h2> <p>
Permission is granted to temporarily download one copy of
                    the materials (information or software) on ER of White
                    Rock's website for personal, non-commercial transitory
                    viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
</p> <ul> <li>modify or copy the materials;</li> <li>
use the materials for any commercial purpose, or for any
                        public display (commercial or non-commercial);
</li> <li>
attempt to decompile or reverse engineer any software
                        contained on ER of White Rock's website;
</li> <li>
remove any copyright or other proprietary notations from
                        the materials; or
</li> <li>
transfer the materials to another person or "mirror" the
                        materials on any other server.
</li> </ul> <h2>3. Disclaimer</h2> <p>
The materials on ER of White Rock's website are provided on
                    an 'as is' basis. ER of White Rock makes no warranties,
                    expressed or implied, and hereby disclaims and negates all
                    other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
</p> <h2>4. Limitations</h2> <p>
In no event shall ER of White Rock or its suppliers be
                    liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business
                    interruption) arising out of the use or inability to use the
                    materials on ER of White Rock's website, even if ER of White
                    Rock or a ER of White Rock authorized representative has
                    been notified orally or in writing of the possibility of
                    such damage.
</p> <h2>5. Governing Law</h2> <p>
These terms and conditions are governed by and construed in
                    accordance with the laws of the State of Texas and you
                    irrevocably submit to the exclusive jurisdiction of the
                    courts in that State or location.
</p> </div> </div> </section> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/terms-of-service.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/terms-of-service.astro";
const $$url = "/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TermsOfService,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
