import { c as create_ssr_component, b as subscribe } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index3.js";
const global = "";
const currentPage = writable("");
const isMenuOpen = writable(false);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  let { data } = $$props;
  const prerender = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  {
    currentPage.set(data.path);
  }
  $$unsubscribe_isMenuOpen();
  return `




<div class="${["layout", $isMenuOpen ? "open" : ""].join(" ").trim()}">
	<main id="${"main"}" tabindex="${"-1"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
