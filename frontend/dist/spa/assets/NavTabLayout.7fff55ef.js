import {
  d as c,
  a1 as m,
  a2 as d,
  f,
  m as p,
  c as h,
  w as e,
  r as _,
  o as v,
  a,
  a3 as b,
  a4 as Q,
  G as n,
  a0 as g,
  O as T,
} from "./index.099d1cbc.js";
import { Q as x, a as w, b as k } from "./QHeader.1ea5aca1.js";
import { Q as R } from "./QSpace.700ea27b.js";
import { u as y, a as L, b as C, Q as N } from "./QTabs.af02ed7a.js";
import { Q as D, a as P } from "./QLayout.c8972892.js";
import { u as S } from "./auth-store.52914b43.js";
import "./QResizeObserver.c1066bbb.js";
import "./rtl.b51694b1.js";
var u = c({
  name: "QRouteTab",
  props: { ...m, ...y },
  emits: L,
  setup(t, { slots: s, emit: l }) {
    const o = d({ useDisableForRouterLinkProps: !1 }),
      { renderTab: r, $tabs: i } = C(t, s, l, {
        exact: f(() => t.exact),
        ...o,
      });
    return (
      p(
        () => `${t.name} | ${t.exact} | ${(o.resolvedLink.value || {}).href}`,
        () => {
          i.verifyRouteModel();
        }
      ),
      () => r(o.linkTag.value, o.linkAttrs.value)
    );
  },
});
const $ = n(
    "img",
    { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" },
    null,
    -1
  ),
  A = { class: "text-h5 text-weight-thin" },
  O = {
    __name: "NavTabLayout",
    setup(t) {
      const s = S();
      return (l, o) => {
        const r = _("router-view");
        return (
          v(),
          h(
            D,
            { view: "hHh lpR fFf" },
            {
              default: e(() => [
                a(
                  k,
                  {
                    elevated: "",
                    class: "bg-primary text-white",
                    "height-hint": "98",
                  },
                  {
                    default: e(() => [
                      a(x, null, {
                        default: e(() => [
                          a(
                            w,
                            { class: "text-weight-thin" },
                            {
                              default: e(() => [
                                a(b, null, { default: e(() => [$]), _: 1 }),
                                Q(" Gym Rat "),
                              ]),
                              _: 1,
                            }
                          ),
                          a(R),
                          n("div", A, g(T(s).userData.displayName), 1),
                        ]),
                        _: 1,
                      }),
                      a(
                        N,
                        { align: "left" },
                        {
                          default: e(() => [
                            a(u, { to: "/home", label: "Home" }),
                            a(u, { to: "/calendar", label: "Calendar" }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                a(P, null, { default: e(() => [a(r)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { O as default };
