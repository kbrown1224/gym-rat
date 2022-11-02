import {
  y as g,
  z,
  n as d,
  d as y,
  q as f,
  s as w,
  E as v,
  h as R,
  j as O,
  u as b,
} from "./index.099d1cbc.js";
function x() {
  const i = g(!z.value);
  return (
    i.value === !1 &&
      d(() => {
        i.value = !0;
      }),
    i
  );
}
const m = typeof ResizeObserver != "undefined",
  h =
    m === !0
      ? {}
      : {
          style:
            "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
          url: "about:blank",
        };
var L = y({
  name: "QResizeObserver",
  props: { debounce: { type: [String, Number], default: 100 } },
  emits: ["resize"],
  setup(i, { emit: p }) {
    let r = null,
      t,
      o = { width: -1, height: -1 };
    function s(e) {
      e === !0 || i.debounce === 0 || i.debounce === "0"
        ? u()
        : r === null && (r = setTimeout(u, i.debounce));
    }
    function u() {
      if ((clearTimeout(r), (r = null), t)) {
        const { offsetWidth: e, offsetHeight: n } = t;
        (e !== o.width || n !== o.height) &&
          ((o = { width: e, height: n }), p("resize", o));
      }
    }
    const { proxy: l } = O();
    if (m === !0) {
      let e;
      const n = (a) => {
        (t = l.$el.parentNode),
          t
            ? ((e = new ResizeObserver(s)), e.observe(t), u())
            : a !== !0 &&
              v(() => {
                n(!0);
              });
      };
      return (
        d(() => {
          n();
        }),
        f(() => {
          clearTimeout(r),
            e !== void 0 &&
              (e.disconnect !== void 0 ? e.disconnect() : t && e.unobserve(t));
        }),
        w
      );
    } else {
      let a = function () {
          clearTimeout(r),
            n !== void 0 &&
              (n.removeEventListener !== void 0 &&
                n.removeEventListener("resize", s, b.passive),
              (n = void 0));
        },
        c = function () {
          a(),
            t &&
              t.contentDocument &&
              ((n = t.contentDocument.defaultView),
              n.addEventListener("resize", s, b.passive),
              u());
        };
      const e = x();
      let n;
      return (
        d(() => {
          v(() => {
            (t = l.$el), t && c();
          });
        }),
        f(a),
        (l.trigger = s),
        () => {
          if (e.value === !0)
            return R("object", {
              style: h.style,
              tabindex: -1,
              type: "text/html",
              data: h.url,
              "aria-hidden": "true",
              onLoad: c,
            });
        }
      );
    }
  },
});
export { L as Q };
