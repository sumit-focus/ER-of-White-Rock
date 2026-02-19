import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Z3cQSRFs.mjs';
import { manifest } from './manifest_DXfEYUbk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/hipaa-notice.astro.mjs');
const _page8 = () => import('./pages/insurance-billing.astro.mjs');
const _page9 = () => import('./pages/locations/_slug_.astro.mjs');
const _page10 = () => import('./pages/physicians/_slug_.astro.mjs');
const _page11 = () => import('./pages/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/robots.txt.astro.mjs');
const _page13 = () => import('./pages/services/_slug_.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/sitemap.xml.astro.mjs');
const _page16 = () => import('./pages/studio/_---params_.astro.mjs');
const _page17 = () => import('./pages/terms-of-service.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/hipaa-notice.astro", _page7],
    ["src/pages/insurance-billing.astro", _page8],
    ["src/pages/locations/[slug].astro", _page9],
    ["src/pages/physicians/[slug].astro", _page10],
    ["src/pages/privacy-policy.astro", _page11],
    ["src/pages/robots.txt.ts", _page12],
    ["src/pages/services/[slug].astro", _page13],
    ["src/pages/services/index.astro", _page14],
    ["src/pages/sitemap.xml.ts", _page15],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page16],
    ["src/pages/terms-of-service.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cbbaab6d-b58a-4bcf-8825-f6af0124ca8f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
