import { c as create_ssr_component, e as escape, d as each } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2>${escape(data.aboutPage.title)}</h2>
<p>${escape(data.aboutPage.content[0])}</p>
<p>${escape(data.aboutPage.content[1])}</p>
<p>${escape(data.aboutPage.content[2])}</p>

<ul>${each(data.aboutPage.prompts, (item) => {
    return `<li>${escape(item)}</li>`;
  })}</ul>`;
});
export {
  Page as default
};
