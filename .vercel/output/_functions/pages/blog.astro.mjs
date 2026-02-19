import '../chunks/page-ssr_CmsWzWBj.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout, u as urlFor } from '../chunks/Layout_DAOamDnX.mjs';
import { s as sanityClient } from '../chunks/_sanity_client_JiifF4TX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title
  }
`);
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Health & Wellness Blog | ER of White Rock" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen py-24"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-text-main mb-6">
Health & Wellness Blog
</h1> <p class="text-xl text-text-muted max-w-2xl mx-auto">
Expert medical advice, health tips, and community news from
                    the board-certified physicians at ER of White Rock.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${posts.length > 0 ? posts.map((post) => renderTemplate`<article class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="block relative aspect-[16/9] overflow-hidden group"> ${post.mainImage ? renderTemplate`<img${addAttribute(urlFor(post.mainImage).width(800).height(450).url(), "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">` : renderTemplate`<div class="w-full h-full bg-blue-50 flex items-center justify-center text-blue-200"> <span class="material-symbols-outlined text-6xl">
article
</span> </div>`} ${post.categories && post.categories.length > 0 && renderTemplate`<div class="absolute top-4 left-4 flex gap-2"> <span class="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"> ${post.categories[0]} </span> </div>`} </a> <div class="p-8 flex flex-col flex-grow"> <div class="flex items-center gap-2 text-sm text-gray-400 mb-4 font-medium"> <span> ${formatDate(post.publishedAt)} </span> ${post.authorName && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span>•</span> <span>${post.authorName}</span> ` })}`} </div> <h2 class="text-2xl font-bold text-text-main mb-4 leading-tight group-hover:text-primary transition-colors"> <a${addAttribute(`/blog/${post.slug.current}`, "href")}> ${post.title} </a> </h2> <p class="text-text-muted mb-6 flex-grow line-clamp-3"> ${post.excerpt} </p> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors mt-auto">
Read Article
<span class="material-symbols-outlined text-lg">
arrow_forward
</span> </a> </div> </article>`) : renderTemplate`<div class="col-span-full py-20 text-center"> <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400"> <span class="material-symbols-outlined text-4xl">
inventory_2
</span> </div> <h3 class="text-2xl font-bold text-gray-800 mb-2">
No posts found
</h3> <p class="text-gray-500">
Check back soon for our latest health articles!
</p> </div>`} </div> </div> </div> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
