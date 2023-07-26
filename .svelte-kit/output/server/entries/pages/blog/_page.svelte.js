import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { P as PostsList, a as Pagination } from "../../../chunks/Pagination.js";
import { a as siteDescription } from "../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-a95988_START -->${$$result.title = `<title>Blog</title>`, ""}<meta data-key="${"description"}" name="${"description"}"${add_attribute("content", siteDescription, 0)}><!-- HEAD_svelte-a95988_END -->`, ""}

<h1>Blog</h1>

${validate_component(PostsList, "PostsList").$$render($$result, { posts: data.posts }, {}, {})}

${validate_component(Pagination, "Pagination").$$render($$result, { currentPage: 1, totalPosts: data.total }, {}, {})}`;
});
export {
  Page as default
};
