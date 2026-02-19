import '../chunks/page-ssr_CmsWzWBj.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D23ZCGoD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAOamDnX.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  const title = "Privacy Policy | ER of White Rock";
  const description = "Privacy Policy for ER of White Rock. Learn how we collect, use, and protect your personal information.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-gray-50"> <div class="max-w-4xl mx-auto px-6 lg:px-12"> <h1 class="text-4xl md:text-5xl font-black text-primary mb-8">
Privacy Policy
</h1> <p class="text-text-muted mb-12">
Last Updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()} </p> <div class="prose prose-lg text-text-muted max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"> <h2>1. Introduction</h2> <p>
ER of White Rock ("we," "us," or "our") respects your
                    privacy and is committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after
                    your personal data when you visit our website (regardless of
                    where you visit it from) and tell you about your privacy
                    rights and how the law protects you.
</p> <h2>2. Information We Collect</h2> <p>
We may collect, use, store, and transfer different kinds of
                    personal data about you which we have grouped together
                    follows:
</p> <ul> <li> <strong>Identity Data:</strong> includes first name, last
                        name, username or similar identifier.
</li> <li> <strong>Contact Data:</strong> includes billing address, delivery
                        address, email address, and telephone numbers.
</li> <li> <strong>Technical Data:</strong> includes internet protocol
                        (IP) address, your login data, browser type and version, time
                        zone setting and location, browser plug-in types and versions,
                        operating system and platform, and other technology on the
                        devices you use to access this website.
</li> <li> <strong>Usage Data:</strong> includes information about how
                        you use our website, products, and services.
</li> </ul> <h2>3. How We Use Your Information</h2> <p>
We will only use your personal data when the law allows us
                    to. Most commonly, we will use your personal data in the
                    following circumstances:
</p> <ul> <li>To provide and maintain our service.</li> <li>To notify you about changes to our service.</li> <li>
To allow you to participate in interactive features of
                        our service when you choose to do so.
</li> <li>To provide customer care and support.</li> <li>
To provide analysis or valuable information so that we
                        can improve the service.
</li> <li>To monitor the usage of the service.</li> <li>To detect, prevent and address technical issues.</li> </ul> <h2>4. Cookies and Tracking Technologies</h2> <p>
We use cookies and similar tracking technologies to track
                    the activity on our Service and hold certain information.
                    Cookies are files with small amount of data which may
                    include an anonymous unique identifier. You can instruct
                    your browser to refuse all cookies or to indicate when a
                    cookie is being sent.
</p> <h2>5. Third-Party Links</h2> <p>
This website may include links to third-party websites,
                    plug-ins, and applications. Clicking on those links or
                    enabling those connections may allow third parties to
                    collect or share data about you. We do not control these
                    third-party websites and are not responsible for their
                    privacy statements.
</p> <h2>6. Data Security</h2> <p>
We have put in place appropriate security measures to
                    prevent your personal data from being accidentally lost,
                    used or accessed in an unauthorized way, altered, or
                    disclosed. In addition, we limit access to your personal
                    data to those employees, agents, contractors, and other
                    third parties who have a business need to know.
</p> <h2>7. Contact Us</h2> <p>
If you have any questions about this Privacy Policy, please
                    contact us:
</p> <ul> <li>By phone: 4699432939</li> <li>By mail: 10705 Northwest Hwy, Dallas, TX 75238</li> </ul> </div> </div> </section> ` })}`;
}, "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/privacy-policy.astro", void 0);

const $$file = "C:/Users/sumit/OneDrive/Desktop/ER of White Rock/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PrivacyPolicy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
