import '../../chunks/page-ssr_BG6rDwkd.mjs';
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DK4fnEpZ.mjs';
import { c as client, u as urlFor } from '../../chunks/sanity_Cpxq_s79.mjs';
import { $ as $$PortableText } from '../../chunks/PortableText_Dn0Yjo3m.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://erofwhiterock.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const physician = await client.fetch(
    `*[_type == "physician" && slug.current == $slug][0] {
    name,
    title,
    credentials,
    bio,
    headshot,
    "reviewedPosts": *[_type == "post" && references(^._id)] {
      title,
      slug,
      publishedAt
    }
  }`,
    { slug }
  );
  if (!physician) {
    return Astro2.redirect("/404");
  }
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: physician.name,
    medicalSpecialty: "Emergency Medicine",
    image: physician.headshot ? urlFor(physician.headshot).url() : void 0,
    jobTitle: physician.title,
    description: `Board-certified physician at ER of White Rock.`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${physician.name} - ${physician.title} | ER of White Rock` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<div class="bg-gray-50 min-h-screen py-24"> <div class="max-w-4xl mx-auto px-6 lg:px-8"> <div class="bg-white rounded-3xl shadow-xl overflow-hidden"> <div class="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">  <div class="shrink-0 w-full md:w-1/3"> ', ' </div>  <div class="flex-grow"> <h1 class="text-4xl font-bold text-gray-900 mb-2"> ', ' </h1> <p class="text-xl text-primary font-bold mb-6"> ', ' <span class="text-gray-300">|</span> ', ' </p> <div class="prose prose-blue max-w-none mb-10 text-gray-600 leading-relaxed"> ', " </div>  ", " </div> </div> </div> </div> </div> "])), unescapeHTML(JSON.stringify(schema)), maybeRenderHead(), physician.headshot ? renderTemplate`<img${addAttribute(urlFor(physician.headshot).width(600).height(800).url(), "src")}${addAttribute(physician.name, "alt")} class="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]">` : renderTemplate`<div class="w-full rounded-2xl bg-gray-200 aspect-[3/4] flex items-center justify-center text-gray-400"> <span class="material-symbols-outlined text-6xl">
person
</span> </div>`, physician.name, physician.title, physician.credentials, renderComponent($$result2, "PortableText", $$PortableText, { "value": physician.bio }), physician.reviewedPosts && physician.reviewedPosts.length > 0 && renderTemplate`<div class="border-t border-gray-100 pt-8"> <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"> <span class="material-symbols-outlined text-primary">
verified_user
</span>
Medically Reviewed by${" "} ${physician.name.split(" ")[0]} </h3> <ul class="space-y-3"> ${physician.reviewedPosts.map(
    (post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></span> ${post.title} </a> </li>`
  )} </ul> </div>`) })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/physicians/[slug].astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/physicians/[slug].astro";
const $$url = "/physicians/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
