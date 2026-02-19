import '../../chunks/page-ssr_CmsWzWBj.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, u as unescapeHTML, m as maybeRenderHead, k as renderComponent } from '../../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { u as urlFor, $ as $$Layout } from '../../chunks/Layout_DAOamDnX.mjs';
import { s as sanityClient } from '../../chunks/_sanity_client_JiifF4TX.mjs';
import { $ as $$PortableText } from '../../chunks/PortableText_Dn0Yjo3m.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://erofwhiterock.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, Astro2.site).href
    }))
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav aria-label="Breadcrumb" class="mb-6"> <script type="application/ld+json">', '<\/script> <ol class="flex items-center space-x-2 text-sm text-gray-500"> <li> <a href="/" class="hover:text-primary transition-colors flex items-center"> <span class="material-symbols-outlined text-lg">home</span> </a> </li> ', " </ol> </nav>"])), maybeRenderHead(), unescapeHTML(JSON.stringify(schema)), items.map((item, index) => renderTemplate`<li class="flex items-center space-x-2"> <span class="material-symbols-outlined text-base">
chevron_right
</span> <a${addAttribute(item.href, "href")}${addAttribute(`hover:text-primary transition-colors ${index === items.length - 1 ? "font-bold text-gray-900 pointer-events-none" : ""}`, "class")}${addAttribute(
    index === items.length - 1 ? "page" : void 0,
    "aria-current"
  )}> ${item.label} </a> </li>`));
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/seo/Breadcrumbs.astro", void 0);

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
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
    ...,
    "author": author->,
    "reviewer": reviewer->,
    "categories": categories[]->,
    "relatedPosts": relatedPosts[]->{
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt,
      "categories": categories[]->title
    }
  }`,
    { slug }
  );
  if (!post) {
    return Astro2.redirect("/404");
  }
  function getHeadings(blocks) {
    if (!blocks) return [];
    return blocks.filter(
      (block) => block._type === "block" && block.style.startsWith("h")
    ).map((block) => ({
      text: block.children.map((child) => child.text).join(""),
      slug: block.children.map((child) => child.text).join("").toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
      style: block.style
    }));
  }
  function getReadingTime(blocks) {
    if (!blocks) return 0;
    const text = blocks.filter((block) => block._type === "block").map((block) => block.children.map((child) => child.text).join("")).join(" ");
    const words = text.split(/\s+/).length;
    return Math.ceil(words / 200);
  }
  const headings = getHeadings(post.body);
  const readingTime = getReadingTime(post.body);
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: Astro2.url.href }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seo?.metaTitle || post.title,
    image: post.mainImage ? urlFor(post.mainImage).url() : void 0,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: post.author ? {
      "@type": "Person",
      name: post.author.name,
      url: `/physicians/${post.author.slug?.current}`
      // Assuming author page or bio link
    } : void 0,
    publisher: {
      "@type": "Organization",
      name: "ER of White Rock",
      logo: {
        "@type": "ImageObject",
        url: "https://erofwhiterock.com/logo.png"
        // Replace with actual logo URL
      }
    },
    description: post.seo?.metaDescription || post.excerpt
  };
  const components = {
    block: {
      h2: ({ node, children }) => {
        const slug2 = node.children[0].text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        return `<h2 id="${slug2}" class="text-3xl font-bold mt-12 mb-6 text-gray-900 scroll-mt-32">${children}</h2>`;
      },
      h3: ({ node, children }) => {
        const slug2 = node.children[0].text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        return `<h3 id="${slug2}" class="text-2xl font-bold mt-8 mb-4 text-gray-800 scroll-mt-32">${children}</h3>`;
      },
      normal: ({ children }) => `<p class="mb-6 text-lg leading-relaxed text-gray-700">${children}</p>`,
      blockquote: ({ children }) => `<blockquote class="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-gray-800 bg-gray-50 rounded-r-lg">${children}</blockquote>`
    },
    marks: {
      link: ({ value, children }) => {
        const { href, blank, rel } = value;
        return `<a href="${href}" ${blank ? 'target="_blank" rel="noopener"' : ""} ${rel ? `rel="${rel}"` : ""} class="text-primary font-bold hover:underline transition-colors">${children}</a>`;
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.seo?.metaTitle || post.title, "description": post.seo?.metaDescription || post.excerpt, "ogImage": post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : void 0, "ogType": "article" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<article class="py-20 bg-white">  <header class="max-w-4xl mx-auto px-6 lg:px-8 mb-16 text-center"> ', " ", ' <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"> ', ' </h1> <div class="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-medium text-lg"> ', ' <span class="hidden md:inline">\u2022</span> <span> ', ' </span> <span class="hidden md:inline">\u2022</span> <div class="flex items-center gap-1"> <span class="material-symbols-outlined text-lg">schedule</span> ', " min read\n</div> </div> </header>  ", ' <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16">  <aside class="hidden lg:block w-80 flex-shrink-0"> <div class="sticky top-32"> <h4 class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b pb-2">\nIn this article\n</h4> <nav class="space-y-3"> ', " </nav>  ", ' </div> </aside>  <div class="flex-grow prose prose-lg prose-blue max-w-none">  ', " ", " </div> </div>  ", " </article> "])), unescapeHTML(JSON.stringify(schema)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems }), post.categories && post.categories.length > 0 && renderTemplate`<div class="flex justify-center gap-2 mb-6"> ${post.categories.map((cat) => renderTemplate`<span class="bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider"> ${cat.title} </span>`)} </div>`, post.title, post.author && renderTemplate`<div class="flex items-center gap-2"> ${post.author.image && renderTemplate`<img${addAttribute(urlFor(post.author.image).width(40).height(40).fit("crop").url(), "src")}${addAttribute(post.author.name, "alt")} class="w-10 h-10 rounded-full border border-gray-100">`} <span>By ${post.author.name}</span> </div>`, new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), readingTime, post.mainImage && renderTemplate`<div class="max-w-6xl mx-auto px-6 lg:px-8 mb-16"> <div class="aspect-[21/9] rounded-3xl overflow-hidden shadow-xl"> <img${addAttribute(urlFor(post.mainImage).width(1200).height(600).url(), "src")}${addAttribute(post.mainImage.alt || post.title, "alt")} class="w-full h-full object-cover"> </div> </div>`, headings.map((heading) => renderTemplate`<a${addAttribute(`#${heading.slug}`, "href")}${addAttribute(`block text-gray-600 hover:text-primary transition-colors text-sm leading-relaxed ${heading.style === "h3" ? "pl-4 border-l-2 border-gray-100" : ""}`, "class")}> ${heading.text} </a>`), post.reviewer && renderTemplate`<div class="mt-12 bg-blue-50 p-6 rounded-2xl border border-blue-100"> <p class="text-xs text-blue-400 font-bold uppercase tracking-wider mb-3">
Medically Reviewed By
</p> <div class="flex items-center gap-3"> ${post.reviewer.headshot && renderTemplate`<img${addAttribute(urlFor(post.reviewer.headshot).width(50).height(50).fit("crop").url(), "src")} class="w-12 h-12 rounded-full"${addAttribute(post.reviewer.name, "alt")}>`} <div> <p class="font-bold text-gray-900 leading-tight"> ${post.reviewer.name} </p> <p class="text-xs text-gray-500"> ${post.reviewer.title} </p> </div> </div> </div>`, post.reviewer && renderTemplate`<div class="lg:hidden mb-10 bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center gap-4"> <div class="bg-blue-100 p-2 rounded-full text-blue-600"> <span class="material-symbols-outlined">
verified_user
</span> </div> <div> <p class="text-xs text-blue-500 font-bold uppercase">
Medically Reviewed
</p> <p class="font-bold text-gray-900"> ${post.reviewer.name},${" "} ${post.reviewer.credentials} </p> </div> </div>`, renderComponent($$result2, "PortableText", $$PortableText, { "value": post.body, "components": components }), post.relatedPosts && post.relatedPosts.length > 0 && renderTemplate`<section class="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-16 border-t border-gray-100"> <h3 class="text-3xl font-bold text-gray-900 mb-10">
Related Articles
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${post.relatedPosts.map((related) => renderTemplate`<a${addAttribute(`/blog/${related.slug.current}`, "href")} class="group"> <div class="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-4"> ${related.mainImage ? renderTemplate`<img${addAttribute(urlFor(related.mainImage).width(400).height(250).url(), "src")}${addAttribute(related.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-gray-300"> <span class="material-symbols-outlined text-4xl">
image
</span> </div>`} </div> <p class="text-sm text-primary font-bold mb-2"> ${related.categories?.[0]} </p> <h4 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug"> ${related.title} </h4> </a>`)} </div> </section>`) })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
