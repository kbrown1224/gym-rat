import {
  b as P,
  e as T,
  d as c,
  h as u,
  f as j,
  i as A,
  p as F,
  g as L,
  l as M,
  j as K,
  k as O,
  m as N,
  n as U,
  q as V,
  s as k,
  t as D,
  u as I,
  v as _,
  x as m,
  y as G,
  z as $,
  A as x,
  B as J,
  C as X,
} from "./index.b5dc3681.js";
import { Q as H } from "./QResizeObserver.88a6e860.js";
var oe = P({
  name: "QPageContainer",
  setup(e, { slots: p }) {
    const {
        proxy: { $q: n },
      } = L(),
      o = A(M, T);
    if (o === T)
      return console.error("QPageContainer needs to be child of QLayout"), T;
    F(K, !0);
    const r = c(() => {
      const a = {};
      return (
        o.header.space === !0 && (a.paddingTop = `${o.header.size}px`),
        o.right.space === !0 &&
          (a[
            `padding${n.lang.rtl === !0 ? "Left" : "Right"}`
          ] = `${o.right.size}px`),
        o.footer.space === !0 && (a.paddingBottom = `${o.footer.size}px`),
        o.left.space === !0 &&
          (a[
            `padding${n.lang.rtl === !0 ? "Right" : "Left"}`
          ] = `${o.left.size}px`),
        a
      );
    });
    return () =>
      u("div", { class: "q-page-container", style: r.value }, j(p.default));
  },
});
const { passive: E } = D,
  Y = ["both", "horizontal", "vertical"];
var Z = P({
    name: "QScrollObserver",
    props: {
      axis: {
        type: String,
        validator: (e) => Y.includes(e),
        default: "vertical",
      },
      debounce: [String, Number],
      scrollTarget: { default: void 0 },
    },
    emits: ["scroll"],
    setup(e, { emit: p }) {
      const n = {
        position: { top: 0, left: 0 },
        direction: "down",
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let o = null,
        r,
        a;
      O(
        () => e.scrollTarget,
        () => {
          f(), y();
        }
      );
      function d() {
        o !== null && o();
        const g = Math.max(0, I(r)),
          h = _(r),
          s = { top: g - n.position.top, left: h - n.position.left };
        if (
          (e.axis === "vertical" && s.top === 0) ||
          (e.axis === "horizontal" && s.left === 0)
        )
          return;
        const z =
          Math.abs(s.top) >= Math.abs(s.left)
            ? s.top < 0
              ? "up"
              : "down"
            : s.left < 0
            ? "left"
            : "right";
        (n.position = { top: g, left: h }),
          (n.directionChanged = n.direction !== z),
          (n.delta = s),
          n.directionChanged === !0 &&
            ((n.direction = z), (n.inflectionPoint = n.position)),
          p("scroll", { ...n });
      }
      function y() {
        (r = k(a, e.scrollTarget)), r.addEventListener("scroll", l, E), l(!0);
      }
      function f() {
        r !== void 0 && (r.removeEventListener("scroll", l, E), (r = void 0));
      }
      function l(g) {
        if (g === !0 || e.debounce === 0 || e.debounce === "0") d();
        else if (o === null) {
          const [h, s] = e.debounce
            ? [setTimeout(d, e.debounce), clearTimeout]
            : [requestAnimationFrame(d), cancelAnimationFrame];
          o = () => {
            s(h), (o = null);
          };
        }
      }
      const { proxy: S } = L();
      return (
        N(() => {
          (a = S.$el.parentNode), y();
        }),
        U(() => {
          o !== null && o(), f();
        }),
        Object.assign(S, { trigger: l, getPosition: () => n }),
        V
      );
    },
  }),
  ne = P({
    name: "QLayout",
    props: {
      container: Boolean,
      view: {
        type: String,
        default: "hhh lpr fff",
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: p, emit: n }) {
      const {
          proxy: { $q: o },
        } = L(),
        r = m(null),
        a = m(o.screen.height),
        d = m(e.container === !0 ? 0 : o.screen.width),
        y = m({ position: 0, direction: "down", inflectionPoint: 0 }),
        f = m(0),
        l = m(G.value === !0 ? 0 : $()),
        S = c(
          () =>
            "q-layout q-layout--" +
            (e.container === !0 ? "containerized" : "standard")
        ),
        g = c(() =>
          e.container === !1 ? { minHeight: o.screen.height + "px" } : null
        ),
        h = c(() =>
          l.value !== 0
            ? { [o.lang.rtl === !0 ? "left" : "right"]: `${l.value}px` }
            : null
        ),
        s = c(() =>
          l.value !== 0
            ? {
                [o.lang.rtl === !0 ? "right" : "left"]: 0,
                [o.lang.rtl === !0 ? "left" : "right"]: `-${l.value}px`,
                width: `calc(100% + ${l.value}px)`,
              }
            : null
        );
      function z(t) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const i = {
            position: t.position.top,
            direction: t.direction,
            directionChanged: t.directionChanged,
            inflectionPoint: t.inflectionPoint.top,
            delta: t.delta.top,
          };
          (y.value = i), e.onScroll !== void 0 && n("scroll", i);
        }
      }
      function W(t) {
        const { height: i, width: v } = t;
        let b = !1;
        a.value !== i &&
          ((b = !0),
          (a.value = i),
          e.onScrollHeight !== void 0 && n("scroll-height", i),
          R()),
          d.value !== v && ((b = !0), (d.value = v)),
          b === !0 && e.onResize !== void 0 && n("resize", t);
      }
      function B({ height: t }) {
        f.value !== t && ((f.value = t), R());
      }
      function R() {
        if (e.container === !0) {
          const t = a.value > f.value ? $() : 0;
          l.value !== t && (l.value = t);
        }
      }
      let w;
      const q = {
        instances: {},
        view: c(() => e.view),
        isContainer: c(() => e.container),
        rootRef: r,
        height: a,
        containerHeight: f,
        scrollbarWidth: l,
        totalWidth: c(() => d.value + l.value),
        rows: c(() => {
          const t = e.view.toLowerCase().split(" ");
          return {
            top: t[0].split(""),
            middle: t[1].split(""),
            bottom: t[2].split(""),
          };
        }),
        header: x({ size: 0, offset: 0, space: !1 }),
        right: x({ size: 300, offset: 0, space: !1 }),
        footer: x({ size: 0, offset: 0, space: !1 }),
        left: x({ size: 300, offset: 0, space: !1 }),
        scroll: y,
        animate() {
          w !== void 0
            ? clearTimeout(w)
            : document.body.classList.add("q-body--layout-animate"),
            (w = setTimeout(() => {
              document.body.classList.remove("q-body--layout-animate"),
                (w = void 0);
            }, 155));
        },
        update(t, i, v) {
          q[t][i] = v;
        },
      };
      if ((F(M, q), $() > 0)) {
        let v = function () {
            (t = null), i.classList.remove("hide-scrollbar");
          },
          b = function () {
            if (t === null) {
              if (i.scrollHeight > o.screen.height) return;
              i.classList.add("hide-scrollbar");
            } else clearTimeout(t);
            t = setTimeout(v, 300);
          },
          C = function (Q) {
            t !== null && Q === "remove" && (clearTimeout(t), v()),
              window[`${Q}EventListener`]("resize", b);
          },
          t = null;
        const i = document.body;
        O(() => (e.container !== !0 ? "add" : "remove"), C),
          e.container !== !0 && C("add"),
          J(() => {
            C("remove");
          });
      }
      return () => {
        const t = X(p.default, [u(Z, { onScroll: z }), u(H, { onResize: W })]),
          i = u(
            "div",
            {
              class: S.value,
              style: g.value,
              ref: e.container === !0 ? void 0 : r,
              tabindex: -1,
            },
            t
          );
        return e.container === !0
          ? u("div", { class: "q-layout-container overflow-hidden", ref: r }, [
              u(H, { onResize: B }),
              u("div", { class: "absolute-full", style: h.value }, [
                u("div", { class: "scroll", style: s.value }, [i]),
              ]),
            ])
          : i;
      };
    },
  });
export { ne as Q, oe as a };
