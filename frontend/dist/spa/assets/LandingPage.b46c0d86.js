import {
  _ as r,
  E as l,
  c,
  w as d,
  o as i,
  F as e,
  a as s,
  Q as o,
  G as n,
  H as _,
} from "./index.b5dc3681.js";
import { Q as p } from "./QPage.3f5a5cd4.js";
var g = "/assets/barbel.6079ba74.svg";
const u = l({ name: "LandigPage" }),
  t = (a) => (n("data-v-44a40e7d"), (a = a()), _(), a),
  f = t(() =>
    e(
      "div",
      { class: "row" },
      [
        e("img", {
          alt: "Barbell",
          src: g,
          style: { "border-color": "white", width: "100%" },
        }),
      ],
      -1
    )
  ),
  h = { class: "row q-mt-xl q-pt-xl" },
  m = t(() =>
    e(
      "div",
      { class: "col-6 flex flex-center" },
      [
        e(
          "p",
          null,
          " Gym Rat is an application for better workouts. Track your progress. Push through plateaus. Reach your goals. "
        ),
      ],
      -1
    )
  ),
  v = { class: "col-6 q-pr-xl flex flex-center" };
function x(a, b, w, y, B, P) {
  return (
    i(),
    c(
      p,
      { class: "gradient-bg" },
      {
        default: d(() => [
          f,
          e("div", h, [
            m,
            e("div", v, [
              s(o, {
                class: "full-width q-mb-sm",
                color: "primary",
                label: "Login",
                to: "login",
              }),
              s(o, {
                class: "full-width",
                color: "secondary",
                label: "Sign Up",
                to: "register",
              }),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var I = r(u, [
  ["render", x],
  ["__scopeId", "data-v-44a40e7d"],
]);
export { I as default };
