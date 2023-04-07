import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#no-palindrome.svelte-1bw2l3f{color:red}#palindrome.svelte-1bw2l3f{color:green}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let palindrome = "";
  let revertedValue = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h2>${escape(data.palindromeChecker.title)}</h2>

<label for="palindrome-input">Enter a palindrome</label>
<input type="text" id="palindrome-input"${add_attribute("value", palindrome, 0)}>
<button>Submit</button>

${revertedValue.length != 0 ? `${`<p id="palindrome" class="svelte-1bw2l3f">The word ${escape(revertedValue)} is indeed a palindrome. Well done!</p>`}` : ``}`;
});
export {
  Page as default
};
