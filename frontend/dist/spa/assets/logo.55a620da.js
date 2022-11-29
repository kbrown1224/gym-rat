import {
  q as b,
  c as o,
  h as c,
  t as Q,
  s as m,
  r as q,
  w as d,
  e as B,
  a8 as H,
  u as T,
  g as O,
  x as $,
} from "./index.929cc5a7.js";
import { Q as k } from "./QResizeObserver.4830e9d7.js";
var L = b({
    name: "QToolbarTitle",
    props: { shrink: Boolean },
    setup(t, { slots: n }) {
      const u = o(
        () =>
          "q-toolbar__title ellipsis" + (t.shrink === !0 ? " col-shrink" : "")
      );
      return () => c("div", { class: u.value }, Q(n.default));
    },
  }),
  R = b({
    name: "QToolbar",
    props: { inset: Boolean },
    setup(t, { slots: n }) {
      const u = o(
        () =>
          "q-toolbar row no-wrap items-center" +
          (t.inset === !0 ? " q-toolbar--inset" : "")
      );
      return () => c("div", { class: u.value, role: "toolbar" }, Q(n.default));
    },
  }),
  S = b({
    name: "QHeader",
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: ["reveal", "focusin"],
    setup(t, { slots: n, emit: u }) {
      const {
          proxy: { $q: v },
        } = O(),
        a = T($, m);
      if (a === m)
        return console.error("QHeader needs to be child of QLayout"), m;
      const f = q(parseInt(t.heightHint, 10)),
        s = q(!0),
        h = o(
          () =>
            t.reveal === !0 ||
            a.view.value.indexOf("H") > -1 ||
            (v.platform.is.ios && a.isContainer.value === !0)
        ),
        y = o(() => {
          if (t.modelValue !== !0) return 0;
          if (h.value === !0) return s.value === !0 ? f.value : 0;
          const e = f.value - a.scroll.value.position;
          return e > 0 ? e : 0;
        }),
        g = o(() => t.modelValue !== !0 || (h.value === !0 && s.value !== !0)),
        w = o(() => t.modelValue === !0 && g.value === !0 && t.reveal === !0),
        V = o(
          () =>
            "q-header q-layout__section--marginal " +
            (h.value === !0 ? "fixed" : "absolute") +
            "-top" +
            (t.bordered === !0 ? " q-header--bordered" : "") +
            (g.value === !0 ? " q-header--hidden" : "") +
            (t.modelValue !== !0 ? " q-layout--prevent-focus" : "")
        ),
        _ = o(() => {
          const e = a.rows.value.top,
            l = {};
          return (
            e[0] === "l" &&
              a.left.space === !0 &&
              (l[v.lang.rtl === !0 ? "right" : "left"] = `${a.left.size}px`),
            e[2] === "r" &&
              a.right.space === !0 &&
              (l[v.lang.rtl === !0 ? "left" : "right"] = `${a.right.size}px`),
            l
          );
        });
      function r(e, l) {
        a.update("header", e, l);
      }
      function i(e, l) {
        e.value !== l && (e.value = l);
      }
      function x({ height: e }) {
        i(f, e), r("size", e);
      }
      function z(e) {
        w.value === !0 && i(s, !0), u("focusin", e);
      }
      d(
        () => t.modelValue,
        (e) => {
          r("space", e), i(s, !0), a.animate();
        }
      ),
        d(y, (e) => {
          r("offset", e);
        }),
        d(
          () => t.reveal,
          (e) => {
            e === !1 && i(s, t.modelValue);
          }
        ),
        d(s, (e) => {
          a.animate(), u("reveal", e);
        }),
        d(a.scroll, (e) => {
          t.reveal === !0 &&
            i(
              s,
              e.direction === "up" ||
                e.position <= t.revealOffset ||
                e.position - e.inflectionPoint < 100
            );
        });
      const p = {};
      return (
        (a.instances.header = p),
        t.modelValue === !0 && r("size", f.value),
        r("space", t.modelValue),
        r("offset", y.value),
        B(() => {
          a.instances.header === p &&
            ((a.instances.header = void 0),
            r("size", 0),
            r("offset", 0),
            r("space", !1));
        }),
        () => {
          const e = H(n.default, []);
          return (
            t.elevated === !0 &&
              e.push(
                c("div", {
                  class:
                    "q-layout__shadow absolute-full overflow-hidden no-pointer-events",
                })
              ),
            e.push(c(k, { debounce: 0, onResize: x })),
            c("header", { class: V.value, style: _.value, onFocusin: z }, e)
          );
        }
      );
    },
  }),
  I = "/assets/logo.7f420e25.png";
export { R as Q, I as _, L as a, S as b };
