import '../../chunks/page-ssr_BG6rDwkd.mjs';
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DK4fnEpZ.mjs';
import { $ as $$Hero, a as $$ServingAreas, b as $$ComparisonTable } from '../../chunks/ComparisonTable_CjjUG8p3.mjs';
import { $ as $$TrustBadges, a as $$InsuranceBar, b as $$ServicesGrid, c as $$WhenToCome, d as $$WhatToExpect, e as $$Physicians, f as $$Testimonials } from '../../chunks/InsuranceBar_CVqKRrns.mjs';
import { $ as $$WhyChoose, a as $$CTA } from '../../chunks/CTA_CpAe_erJ.mjs';
import { $ as $$FAQ } from '../../chunks/FAQ_B0siQolf.mjs';
import { g as getLandingPageBySlug } from '../../chunks/sanity_Cpxq_s79.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://erofwhiterock.com");
async function getStaticPaths() {
  return [];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const landingPage = await getLandingPageBySlug(slug).catch(
    () => null
  );
  if (!landingPage) {
    return Astro2.redirect("/404");
  }
  const { content, title: pageTitle, seo } = landingPage || {};
  const getSection = (type) => content?.find((s) => s._type === type);
  const fetchedHero = getSection("hero");
  const fetchedTrust = getSection("trustBadges");
  const fetchedServing = getSection("communitySection");
  const fetchedServices = getSection("servicesSection");
  const fetchedComparison = getSection("comparisonTable");
  const fetchedSymptom = getSection("whenToCome");
  const fetchedProcess = getSection("processSection");
  const fetchedWhyChoose = getSection("whyChooseSection");
  const fetchedPhysicians = getSection("physiciansSection");
  const fetchedTestimonials = getSection("testimonialsSection");
  const fetchedInsurance = getSection("insuranceBar");
  const fetchedFaq = getSection("faqSection");
  const fetchedCta = getSection("ctaSection");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo?.metaTitle || pageTitle || `ER of White Rock - ${slug}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${fetchedHero && renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "data": fetchedHero })}`} ${fetchedTrust && renderTemplate`${renderComponent($$result2, "TrustBadges", $$TrustBadges, { "data": fetchedTrust })}`} ${fetchedServing && renderTemplate`${renderComponent($$result2, "ServingAreas", $$ServingAreas, { "data": fetchedServing })}`} ${fetchedInsurance && renderTemplate`${renderComponent($$result2, "InsuranceBar", $$InsuranceBar, { "data": fetchedInsurance })}`} ${fetchedServices && renderTemplate`${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, { "data": fetchedServices })}`} ${fetchedComparison && renderTemplate`${renderComponent($$result2, "ComparisonTable", $$ComparisonTable, { "data": fetchedComparison })}`} ${fetchedSymptom && renderTemplate`${renderComponent($$result2, "WhenToCome", $$WhenToCome, { "data": fetchedSymptom })}`} ${fetchedProcess && renderTemplate`${renderComponent($$result2, "WhatToExpect", $$WhatToExpect, { "data": fetchedProcess })}`} ${fetchedWhyChoose && renderTemplate`${renderComponent($$result2, "WhyChoose", $$WhyChoose, { "data": fetchedWhyChoose })}`} ${fetchedPhysicians && renderTemplate`${renderComponent($$result2, "Physicians", $$Physicians, { "data": fetchedPhysicians })}`} ${fetchedTestimonials && renderTemplate`${renderComponent($$result2, "Testimonials", $$Testimonials, { "data": fetchedTestimonials })}`} ${fetchedFaq && renderTemplate`${renderComponent($$result2, "FAQ", $$FAQ, { "data": fetchedFaq })}`} ${fetchedCta && renderTemplate`${renderComponent($$result2, "CTA", $$CTA, { "data": fetchedCta })}`} </main> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/locations/[slug].astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
