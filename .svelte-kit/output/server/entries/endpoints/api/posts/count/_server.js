import { j as json } from "../../../../../chunks/index2.js";
const prerender = true;
const GET = () => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/posts/heading-links-example.md": () => import("../../../../../chunks/heading-links-example.js"), "/src/lib/posts/mdsvex-component-example.md": () => import("../../../../../chunks/mdsvex-component-example.js"), "/src/lib/posts/syntax-highlighting-example.md": () => import("../../../../../chunks/syntax-highlighting-example.js") });
  return json(Object.keys(posts).length);
};
export {
  GET,
  prerender
};
