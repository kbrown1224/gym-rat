import {
  _ as t,
  d as o,
  a0 as s,
  I as e,
  p as a,
  m as n,
  Q as r,
} from "./index.3262b3e1.js";
const c = o({ name: "ErrorNotFound" }),
  l = {
    class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
  },
  d = e("div", { style: { "font-size": "30vh" } }, "404", -1),
  i = e(
    "div",
    { class: "text-h2", style: { opacity: "0.4" } },
    "Oops. Nothing here...",
    -1
  );
function _(p, f, u, h, m, x) {
  return (
    n(),
    s("div", l, [
      e("div", null, [
        d,
        i,
        a(r, {
          class: "q-mt-xl",
          color: "white",
          "text-color": "blue",
          unelevated: "",
          to: "/",
          label: "Go Home",
          "no-caps": "",
        }),
      ]),
    ])
  );
}
var N = t(c, [["render", _]]);
export { N as default };
