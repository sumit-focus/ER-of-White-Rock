import '../chunks/page-ssr_CmsWzWBj.mjs';
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAOamDnX.mjs';
import { s as sanityClient } from '../chunks/_sanity_client_JiifF4TX.mjs';
import { $ as $$PortableText } from '../chunks/PortableText_Dn0Yjo3m.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_B0siQolf.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: ""
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form Exception:", error);
      setStatus("error");
      setErrorMessage("Could not send message. Please try again or email us directly at info@erofwhiterock.com");
    }
  };
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-3xl p-10 text-center max-w-2xl mx-auto animate-fade-in-up", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-4xl", children: "mail" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-800 mb-4", children: "Message Sent!" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8 max-w-md mx-auto", children: "Thank you for reaching out to ER of White Rock. Our team has received your message and will respond shortly." }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-green-100 p-6 rounded-xl inline-block text-left", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2", children: "Need Immediate Help?" }),
        /* @__PURE__ */ jsxs("a", { href: "tel:4699432939", className: "flex items-center gap-3 text-2xl font-black text-green-700 hover:text-green-800 transition-colors", children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl", children: "call" }),
          "4699432939"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setStatus("idle"),
          className: "block mx-auto mt-8 text-green-600 hover:text-green-700 font-bold underline",
          children: "Send another message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-primary p-8 md:p-10 text-white text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Send Us a Message" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 max-w-xl mx-auto", children: "Have a non-emergency question? Fill out the form below and we'll get back to you as soon as possible." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-8 md:p-10 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "block text-sm font-bold text-gray-700 uppercase tracking-wider", children: [
            "Your Name ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "name",
              name: "name",
              required: true,
              value: formData.name,
              onChange: handleChange,
              className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800",
              placeholder: "John Doe"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "block text-sm font-bold text-gray-700 uppercase tracking-wider", children: [
            "Email Address ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              required: true,
              value: formData.email,
              onChange: handleChange,
              className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800",
              placeholder: "john@example.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-bold text-gray-700 uppercase tracking-wider", children: "Phone Number" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              id: "phone",
              name: "phone",
              value: formData.phone,
              onChange: handleChange,
              className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800",
              placeholder: "(469) 555-0123"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-bold text-gray-700 uppercase tracking-wider", children: "Subject" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "subject",
              name: "subject",
              value: formData.subject,
              onChange: handleChange,
              className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-gray-800",
              children: [
                /* @__PURE__ */ jsx("option", { value: "General Inquiry", children: "General Inquiry" }),
                /* @__PURE__ */ jsx("option", { value: "Billing Question", children: "Billing / Insurance" }),
                /* @__PURE__ */ jsx("option", { value: "Feedback", children: "Patient Feedback" }),
                /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "block text-sm font-bold text-gray-700 uppercase tracking-wider", children: [
          "Message ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            required: true,
            rows: 4,
            value: formData.message,
            onChange: handleChange,
            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 text-gray-800 resize-none",
            placeholder: "How can we help you?"
          }
        )
      ] }),
      status === "error" && /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-lg", children: "error" }),
        errorMessage
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: status === "submitting",
            className: `w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2
                            ${status === "submitting" ? "bg-gray-400 cursor-not-allowed text-white" : "bg-accent hover:bg-red-600 text-white hover:-translate-y-1"}`,
            children: status === "submitting" ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" }),
              "Sending..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Send Message",
              /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "send" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-text-muted mt-4", children: "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply." })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://erofwhiterock.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const contactPage = await sanityClient.fetch(`*[_type == "contactPage"][0]`);
  if (!contactPage) {
    return Astro2.redirect("/404");
  }
  const { seo, hero, contactMethods, map, whatToBring, faq, cta } = contactPage;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo?.metaTitle || hero?.title, "description": seo?.metaDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white"> <div class="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-10 mix-blend-overlay"></div> <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div> <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"> ${hero?.title} </h1> ${hero?.emergencyDisclaimer && renderTemplate`<div class="inline-flex items-center gap-3 px-6 py-3 bg-red-600/20 border border-red-500/50 rounded-full text-red-100 backdrop-blur-sm animate-pulse"> <span class="material-symbols-outlined text-red-500">
warning
</span> <span class="font-medium text-sm md:text-base"> ${hero.emergencyDisclaimer} </span> </div>`} </div> </section>  <section class="py-20 -mt-20 relative z-20 px-6 lg:px-12"> <div class="max-w-7xl mx-auto"> <div class="grid md:grid-cols-3 gap-6 lg:gap-8">  <div class="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"> <div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6"> <span class="material-symbols-outlined text-4xl">${contactMethods?.phone?.icon || "call"}</span> </div> <h3 class="text-xl font-bold text-text-main mb-2"> ${contactMethods?.phone?.title} </h3> <p class="text-2xl font-black text-accent mb-4"> ${contactMethods?.phone?.number} </p> <a${addAttribute(`tel:${contactMethods?.phone?.number}`, "href")} class="text-sm font-bold text-primary hover:text-accent uppercase tracking-wider underline decoration-2 underline-offset-4">
Call Now
</a> </div>  <div class="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"> <div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6"> <span class="material-symbols-outlined text-4xl">${contactMethods?.address?.icon || "location_on"}</span> </div> <h3 class="text-xl font-bold text-text-main mb-2"> ${contactMethods?.address?.title} </h3> <p class="text-lg text-text-muted mb-1"> ${contactMethods?.address?.line1} </p> <p class="text-lg text-text-muted mb-4"> ${contactMethods?.address?.line2} </p> <a${addAttribute(contactMethods?.address?.mapLink, "href")} target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-primary hover:text-accent uppercase tracking-wider underline decoration-2 underline-offset-4">
Get Directions
</a> </div>  <div class="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"> <div class="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6"> <span class="material-symbols-outlined text-4xl">${contactMethods?.hours?.icon || "schedule"}</span> </div> <h3 class="text-xl font-bold text-text-main mb-2"> ${contactMethods?.hours?.title} </h3> <p class="text-lg text-text-muted"> ${contactMethods?.hours?.description} </p> </div> </div> </div> </section>  <section class="py-12 lg:py-20 bg-gray-50 relative z-20"> <div class="max-w-3xl mx-auto px-6 lg:px-12"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/components/forms/ContactForm", "client:component-export": "default" })} </div> </section>  <section id="map" class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-6 lg:px-12"> <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row"> <div class="lg:w-1/2 min-h-[400px] lg:min-h-[500px] bg-gray-200">  <div class="w-full h-full">${unescapeHTML(map?.embedCode || '<div class="w-full h-full flex items-center justify-center text-gray-400 font-bold">Map Placeholder</div>')}</div> </div> <div class="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center"> <h2 class="text-3xl font-bold text-text-main mb-6"> ${map?.directionsTitle} </h2> <div class="prose prose-lg text-text-muted mb-8"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": map?.directionsContent })} </div> <a${addAttribute(contactMethods?.address?.mapLink, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-secondary transition-colors w-fit"> <span class="material-symbols-outlined">directions</span>
Open in Google Maps
</a> </div> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-4xl mx-auto px-6 lg:px-12"> <div class="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100"> <div class="text-center mb-10"> <span class="material-symbols-outlined text-5xl text-accent mb-4">medical_information</span> <h2 class="text-3xl font-bold text-text-main"> ${whatToBring?.title} </h2> </div> <ul class="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto"> ${whatToBring?.checklist?.map((item) => renderTemplate`<li class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-blue-100/50"> <span class="material-symbols-outlined text-green-500 shrink-0">
check_circle
</span> <span class="font-medium text-text-main text-lg"> ${item} </span> </li>`)} </ul> </div> </div> </section>  ${renderComponent($$result2, "FAQ", $$FAQ, { "data": { sectionTitle: "Frequently Asked Questions", faqs: faq } })}  ${cta && renderTemplate`<section class="py-20 bg-accent text-white text-center"> <div class="max-w-4xl mx-auto px-6 lg:px-12"> <h2 class="text-4xl lg:text-5xl font-black mb-6"> ${cta.title} </h2> <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto"> ${cta.description} </p> <a${addAttribute(cta.buttonLink, "href")} class="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"> <span>${cta.buttonText}</span> <span class="material-symbols-outlined">
arrow_forward
</span> </a> </div> </section>`}` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/contact.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
