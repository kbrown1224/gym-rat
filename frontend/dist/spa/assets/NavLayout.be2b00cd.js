import {
  c as r,
  w as a,
  r as l,
  o as i,
  a as t,
  a3 as n,
  a4 as u,
  G as e,
  a0 as c,
  O as _,
} from "./index.099d1cbc.js";
import { Q as m, a as p, b as d } from "./QHeader.1ea5aca1.js";
import { Q as f } from "./QSpace.700ea27b.js";
import { Q as h, a as v } from "./QLayout.c8972892.js";
import { u as g } from "./auth-store.52914b43.js";
import "./QResizeObserver.c1066bbb.js";
const Q = e(
    "img",
    { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" },
    null,
    -1
  ),
  w = { class: "text-h5 text-weight-thin" },
  k = {
    __name: "NavLayout",
    setup(x) {
      const o = g();
      return (y, N) => {
        const s = l("router-view");
        return (
          i(),
          r(
            h,
            { view: "hHh lpR fFf" },
            {
              default: a(() => [
                t(
                  d,
                  { elevated: "", class: "bg-primary text-white" },
                  {
                    default: a(() => [
                      t(m, null, {
                        default: a(() => [
                          t(
                            p,
                            { class: "text-weight-thin" },
                            {
                              default: a(() => [
                                t(n, null, { default: a(() => [Q]), _: 1 }),
                                u(" Gym Rat "),
                              ]),
                              _: 1,
                            }
                          ),
                          t(f),
                          e("div", w, c(_(o).userData.displayName), 1),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                t(v, null, { default: a(() => [t(s)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { k as default };
