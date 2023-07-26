import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { C as Callout } from "../../../chunks/Callout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-rg684o_START -->${$$result.title = `<title>Contact</title>`, ""}<!-- HEAD_svelte-rg684o_END -->`, ""}


<h1>Contact</h1>

This starter was made by Josh Collinsworth. You can <a rel="${"external"}" href="${"https://joshcollinsworth.com/contact"}">get in touch with Josh here</a>.

If you&#39;re using this starter for your own site, feel free to delete this page, or replace it with a contact page of your own. (I&#39;m a big fan of <a href="${"https://docs.netlify.com/forms/setup/"}">Netlify forms</a>, personally.)

${validate_component(Callout, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `This form does nothing! It&#39;s just here to show default styling.`;
    }
  })}

<form><div class="${"form-section"}"><label for="${"name"}">Name</label>
		<input type="${"text"}" id="${"name"}" placeholder="${"First name"}"></div>
	
	<div class="${"form-section"}"><label for="${"email"}">Email</label>
		<input type="${"email"}" id="${"email"}" placeholder="${"Email address"}"></div>

	<fieldset><legend>Which option?
		</legend>

		<div><input type="${"radio"}" name="${"s"}" id="${"s1"}" value="${"s1"}">
			<label for="${"s1"}">Option 1</label></div>
		<div><input type="${"radio"}" name="${"s"}" id="${"s2"}" value="${"s2"}">
			<label for="${"s2"}">Option 2</label></div>
		<div><input type="${"radio"}" name="${"s"}" id="${"s3"}" value="${"s3"}">
			<label for="${"s3"}">Option 3</label></div></fieldset>

	<div class="${"form-section"}"><input type="${"checkbox"}" id="${"c1"}">
		<label for="${"c1"}">Sign me up for something!</label></div>

	<input type="${"submit"}" value="${"Do nothing!"}"></form>`;
});
export {
  Page as default
};
