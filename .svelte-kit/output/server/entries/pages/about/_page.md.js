import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ine71f_START -->${$$result.title = `<title>About</title>`, ""}<!-- HEAD_svelte-1ine71f_END -->`, ""}


<h1 id="${"about"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#about"}"><span class="${"icon icon-link"}"></span></a>About</h1>
<p>This is an example of how you can have <em>markdown</em> in page content!</p>
<ul><li>How</li>
<li><strong>Cool</strong></li>
<li>Is <em>that</em>!?</li></ul>
<p>If you like, you can also import markdown into any Svelte page.</p>
<p>Anyway, you can find this file here:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">src/routes/about/+page.md</code>`}<!-- HTML_TAG_END --></pre>
<p>Here’s the <a href="${"/"}">home link</a> if you wanna go back.</p>`;
});
export {
  Page as default
};
