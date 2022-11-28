import {
  L as r,
  j as l,
  k as e,
  l as i,
  m as n,
  p as t,
  a6 as _,
  a7 as u,
  I as a,
  a3 as c,
  S as m,
} from "./index.3262b3e1.js";
import { Q as p, a as d, b as f, _ as h } from "./logo.9c1d7646.js";
import { Q } from "./QSpace.4b59fa38.js";
import { Q as v, a as w } from "./QLayout.5a2d3252.js";
import "./QResizeObserver.73d9f52c.js";
const x = a(
    "img",
    {
      alt: "Gym Rat Logo",
      src: h,
      style: { "border-color": "white", width: "100%" },
    },
    null,
    -1
  ),
  g = { class: "text-h5 text-weight-thin" },
  C = {
    __name: "NavLayout",
    setup(y) {
      const o = r();
      return (b, N) => {
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
                  {
                    elevated: "",
                    class: "bg-primary text-white border-positive",
                  },
                  {
                    default: e(() => [
                      t(p, null, {
                        default: e(() => [
                          t(
                            d,
                            { class: "text-weight-thin" },
                            {
                              default: e(() => [
                                t(_, null, { default: e(() => [x]), _: 1 }),
                                u(" Gym Rat "),
                              ]),
                              _: 1,
                            }
                          ),
                          t(Q),
                          a("div", g, c(m(o).user.firstName), 1),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                t(w, null, { default: e(() => [t(s)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { C as default };
