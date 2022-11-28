import {
  b as d,
  a0 as f,
  a1 as h,
  d as i,
  k as p,
  I as _,
  c as b,
  w as a,
  K as v,
  r as g,
  o as Q,
  a as e,
  a2 as T,
  a3 as x,
  Q as k,
  F as c,
  $ as w,
  O as R,
} from "./index.b5dc3681.js";
import { Q as L, a as y, b as N } from "./QHeader.1c62c0f9.js";
import { Q as C } from "./QSpace.435cf98f.js";
import { u as $, a as B, b as P, Q as S } from "./QTabs.2365d860.js";
import { Q as A, a as D } from "./QLayout.62ad5c42.js";
import "./QResizeObserver.88a6e860.js";
import "./rtl.b51694b1.js";
var n = d({
  name: "QRouteTab",
  props: { ...f, ...$ },
  emits: B,
  setup(s, { slots: t, emit: r }) {
    const o = h({ useDisableForRouterLinkProps: !1 }),
      { renderTab: u, $tabs: l } = P(s, t, r, {
        exact: i(() => s.exact),
        ...o,
      });
    return (
      p(
        () => `${s.name} | ${s.exact} | ${(o.resolvedLink.value || {}).href}`,
        () => {
          l.verifyRouteModel();
        }
      ),
      () => u(o.linkTag.value, o.linkAttrs.value)
    );
  },
});
const F = c(
    "img",
    { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" },
    null,
    -1
  ),
  H = { class: "text-h5 text-weight-thin" },
  j = {
    __name: "NavTabLayout",
    setup(s) {
      const t = _(),
        r = v(),
        o = i(() => (t.user ? t.user.lastName + ", " + t.user.firstName : ""));
      function u() {
        t.logout(), r.push("/login");
      }
      return (l, V) => {
        const m = g("router-view");
        return (
          Q(),
          b(
            A,
            { view: "hHh lpR fFf" },
            {
              default: a(() => [
                e(
                  N,
                  {
                    elevated: "",
                    class: "bg-primary text-white",
                    "height-hint": "98",
                  },
                  {
                    default: a(() => [
                      e(L, null, {
                        default: a(() => [
                          e(
                            y,
                            { class: "text-weight-thin" },
                            {
                              default: a(() => [
                                e(T, null, { default: a(() => [F]), _: 1 }),
                                x(" Gym Rat "),
                              ]),
                              _: 1,
                            }
                          ),
                          e(C),
                          e(k, { onClick: u, label: "Logout", flat: "" }),
                          c("div", H, w(R(o)), 1),
                        ]),
                        _: 1,
                      }),
                      e(
                        S,
                        { align: "left" },
                        {
                          default: a(() => [
                            e(n, { to: "/home", label: "Home" }),
                            e(n, { to: "/calendar", label: "Calendar" }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                e(D, null, { default: a(() => [e(m)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  };
export { j as default };
