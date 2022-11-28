import {
  I as r,
  c as l,
  w as e,
  r as i,
  o as n,
  a as t,
  a2 as u,
  a3 as c,
  F as a,
  $ as _,
  O as m,
} from "./index.b5dc3681.js";
import { Q as d, a as p, b as f } from "./QHeader.1c62c0f9.js";
import { Q as h } from "./QSpace.435cf98f.js";
import { Q as v, a as g } from "./QLayout.62ad5c42.js";
import "./QResizeObserver.88a6e860.js";
const Q = a(
    "img",
    { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" },
    null,
    -1
  ),
  w = { class: "text-h5 text-weight-thin" },
  V = {
    __name: "NavLayout",
    setup(x) {
      const o = r();
      return (y, N) => {
        const s = i("router-view");
        return (
          n(),
          l(
            v,
            { view: "hHh lpR fFf" },
            {
              default: e(() => [
                t(
                  f,
                  { elevated: "", class: "bg-primary text-white" },
                  {
                    default: e(() => [
                      t(d, null, {
                        default: e(() => [
                          t(
                            p,
                            { class: "text-weight-thin" },
                            {
                              default: e(() => [
                                t(u, null, { default: e(() => [Q]), _: 1 }),
                                c(" Gym Rat "),
                              ]),
                              _: 1,
                            }
                          ),
                          t(h),
                          a("div", w, _(m(o).user.firstName), 1),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                t(g, null, { default: e(() => [t(s)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { V as default };
