import {
  _ as r,
  F as c,
  c as l,
  w as i,
  o as n,
  G as e,
  a as s,
  Q as o,
  H as d,
  I as _,
} from "./index.099d1cbc.js";
import { Q as p } from "./QPage.a405a503.js";
var g = "/assets/barbel.54a478ca.svg";
const u = c({ name: "LandigPage" }),
  t = (a) => (d("data-v-98a53824"), (a = a()), _(), a),
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
function x(a, w, b, y, B, I) {
  return (
    n(),
    l(
      p,
      { class: "gradient-bg" },
      {
        default: i(() => [
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
var q = r(u, [
  ["render", x],
  ["__scopeId", "data-v-98a53824"],
]);
export { q as default };
