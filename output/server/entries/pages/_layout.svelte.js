import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const SideBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-g4nw6r{height:100vw;padding:25px;display:flex;flex-direction:column;width:250px}a.svelte-g4nw6r{padding:10px}",
  map: null
};
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div><nav class="svelte-g4nw6r"><a href="/" class="svelte-g4nw6r">Home</a>
        <a href="palindrome-checker" class="svelte-g4nw6r">Palindrome Checker</a></nav>    
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#container.svelte-pz6yet{display:flex}#slot.svelte-pz6yet{padding:10px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><h1>Ready Player Mellie&#39;s practice projects</h1>
    <div id="container" class="svelte-pz6yet">${validate_component(SideBar, "SideBar").$$render($$result, {}, {}, {})}
    
        <div id="slot" class="svelte-pz6yet">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
export {
  Layout as default
};
