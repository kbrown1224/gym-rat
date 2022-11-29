import {
  q as d,
  a4 as f,
  a5 as p,
  c as i,
  w as _,
  L as h,
  j as b,
  k as a,
  N as Q,
  l as v,
  m as g,
  p as e,
  a6 as T,
  a7 as x,
  Q as y,
  I as c,
  a3 as k,
  S as w,
} from "./index.3262b3e1.js";
import { Q as L, a as R, b as N, _ as C } from "./logo.9c1d7646.js";
import { Q as S } from "./QSpace.4b59fa38.js";
import { u as A, a as B, b as P, Q as $ } from "./QTabs.136abc1a.js";
import { Q as D, a as H } from "./QLayout.5a2d3252.js";
import "./QResizeObserver.73d9f52c.js";
import "./rtl.b51694b1.js";
var u = d({
  name: "QRouteTab",
  props: { ...f, ...A },
  emits: B,
  setup(s, { slots: t, emit: r }) {
    const o = p({ useDisableForRouterLinkProps: !1 }),
      { renderTab: l, $tabs: n } = P(s, t, r, {
        exact: i(() => s.exact),
        ...o,
      });
    return (
      _(
        () => `${s.name} | ${s.exact} | ${(o.resolvedLink.value || {}).href}`,
        () => {
          n.verifyRouteModel();
        }
      ),
      () => l(o.linkTag.value, o.linkAttrs.value)
    );
  },
});
const V = c(
    "img",
    { alt: "Gym Rat Logo", src: C, style: { "border-color": "white" } },
    null,
    -1
  ),
  F = { class: "text-h5 text-weight-thin" },
  K = {
    __name: "NavTabLayout",
    setup(s) {
      const t = h(),
        r = Q(),
        o = i(() => (t.user ? t.user.lastName + ", " + t.user.firstName : ""));
      function l() {
        t.logout(), r.push("/login");
      }
      return (n, G) => {
        const m = v("router-view");
        return (
          g(),
          b(
            D,
            { view: "hHh lpR fFf" },
            {
              default: a(() => [
                e(
                  N,
                  {
                    elevated: "",
                    class: "bg-primary text-white border-positive",
                    "height-hint": "98",
                  },
                  {
                    default: a(() => [
                      e(L, null, {
                        default: a(() => [
                          e(
                            R,
                            { class: "text-weight-thin" },
                            {
                              default: a(() => [
                                e(T, null, { default: a(() => [V]), _: 1 }),
                                x(" Gym Rat "),
                              ]),
                              _: 1,
                            }
                          ),
                          e(S),
                          e(y, { onClick: l, label: "Logout", flat: "" }),
                          c("div", F, k(w(o)), 1),
                        ]),
                        _: 1,
                      }),
                      e(
                        $,
                        { align: "left" },
                        {
                          default: a(() => [
                            e(u, { to: "/home", label: "Home" }),
                            e(u, { to: "/calendar", label: "Calendar" }),
                            e(u, { to: "/analysis", label: "Analysis" }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                e(H, null, { default: a(() => [e(m)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { K as default };
