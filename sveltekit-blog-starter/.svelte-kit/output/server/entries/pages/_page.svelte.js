import { c as create_ssr_component, d as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--accent:#69647b;--background:black;--lightAccent:#A8DADC;--lighterAccent:#E6E8E4;--dark:#457B9D;--darker:#1D3557;--slate:#2F3948;--white:#fff;--black:#152030;--ink:white;--paper:var(--background);--accentFont:"Source Serif Pro", Georgia, Times, serif;--primaryFont:"Source Sans Pro", sans-serif;--codeFont:"Fira Code", monospace;font-size:1rem;line-height:1.6}@media(min-width: 768px){:root{font-size:1.125rem}}@media(min-width: 1280px){:root{font-size:1.25rem}}form.svelte-17khz7v{margin:0 auto}div.svelte-17khz7v{margin:0 0 var(--xl)}input.svelte-17khz7v,#message.svelte-17khz7v{border:1px solid #945CFF;padding:0.5rem;border-radius:var(--xs7);display:block;width:100%;font-size:var(--lg);font-family:var(--font-serif)}label.svelte-17khz7v{margin:0 0 var(--xs5) var(--xs5)}#message.svelte-17khz7v{min-height:calc(var(--lg) * 9)}input.btn.btn-primary.svelte-17khz7v{margin-bottom:2rem;font-family:var(--font-sans);background-color:#945CFF;float:right}input.btn.btn-primary.svelte-17khz7v:hover{background-color:#ea1217}img.svelte-17khz7v{width:100%}div.svelte-17khz7v,form.svelte-17khz7v{margin:100px}textarea.svelte-17khz7v{width:430px;height:160px}input.svelte-17khz7v{background:white}label.svelte-17khz7v{display:inline-block}textarea.svelte-17khz7v{display:block;font-size:inherit}',
  map: null
};
const load = async () => {
  const ReadMeFile = await import("../../chunks/README.js");
  const ReadMe = ReadMeFile.default;
  return { props: { ReadMe } };
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ReadMe } = $$props;
  let { formLocation = "" } = $$props;
  if ($$props.ReadMe === void 0 && $$bindings.ReadMe && ReadMe !== void 0)
    $$bindings.ReadMe(ReadMe);
  if ($$props.formLocation === void 0 && $$bindings.formLocation && formLocation !== void 0)
    $$bindings.formLocation(formLocation);
  $$result.css.add(css);
  return `



















${$$result.head += `<!-- HEAD_svelte-4wnmm_START -->${$$result.title = `<title>Studio LG1</title>`, ""}<!-- HEAD_svelte-4wnmm_END -->`, ""}
<img src="${"/images/studiolg1.jpg"}" class="${"svelte-17khz7v"}">





<h1>Studio LG1</h1>
<p>A bespoke communication studio based in the heart of Edinburgh</p>
<p>Audio. Visual. Digital.</p>


<form${add_attribute("name", formLocation, 0)} method="${"POST"}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}" class="${"svelte-17khz7v"}"><input type="${"hidden"}" name="${"form-name"}"${add_attribute("value", formLocation, 0)} class="${"svelte-17khz7v"}">

	<div id="${"name-section"}" class="${"svelte-17khz7v"}"><label for="${"name"}" class="${"svelte-17khz7v"}">Name</label>
		<input name="${"name"}" id="${"name"}" required placeholder="${"Name"}" type="${"text"}" class="${"svelte-17khz7v"}"></div>

	<div id="${"email-section"}" class="${"svelte-17khz7v"}"><label for="${"email"}" class="${"svelte-17khz7v"}">Email</label>
		<input name="${"email"}" id="${"email"}" required placeholder="${"Email"}" type="${"email"}" class="${"svelte-17khz7v"}"></div>

	<div class="${"svelte-17khz7v"}"><label for="${"message"}" class="${"svelte-17khz7v"}">Message</label>
		<textarea name="${"message"}" id="${"message"}" required placeholder="${"Message"}" type="${"text"}" class="${"svelte-17khz7v"}"></textarea></div>

	<div class="${"svelte-17khz7v"}"><input type="${"submit"}" class="${"btn btn-primary svelte-17khz7v"}" value="${"Send"}"></div>
</form>`;
});
export {
  Page as default,
  load
};
