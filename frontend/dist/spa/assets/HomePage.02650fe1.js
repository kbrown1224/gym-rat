import {
  q as ue,
  c as m,
  h as f,
  t as Be,
  g as ve,
  a8 as fl,
  ad as tt,
  ai as De,
  aj as Ne,
  z as Ml,
  r as z,
  w as G,
  n as ye,
  ak as Fl,
  al as Dt,
  V as ml,
  W as gl,
  e as We,
  b as bt,
  A as hl,
  B as ht,
  H as Nt,
  am as Wt,
  an as bl,
  ao as Sl,
  ap as yl,
  aq as wl,
  ar as _l,
  as as Al,
  at as El,
  a9 as Ll,
  Y as pe,
  a4 as zl,
  a5 as Hl,
  ab as jt,
  au as gt,
  av as Xt,
  aw as Il,
  ax as Yt,
  ay as $l,
  F as Dl,
  az as Nl,
  aA as Wl,
  aB as jl,
  ag as Ql,
  ah as Kl,
  aC as Ul,
  aD as Gl,
  aE as Xl,
  aF as Yl,
  aG as Zl,
  aH as Jl,
  aI as Zt,
  T as ea,
  aJ as ta,
  Z as la,
  aK as aa,
  aL as na,
  aM as oa,
  aN as ia,
  o as ua,
  aO as ra,
  aP as Jt,
  ae as ct,
  aQ as Je,
  ac as sa,
  aR as ca,
  aS as da,
  aT as va,
  aU as el,
  aV as zt,
  aW as tl,
  aX as fa,
  aY as ma,
  aZ as Ft,
  a_ as dt,
  Q as mt,
  P as qt,
  N as ga,
  a$ as Ht,
  m as kl,
  j as ql,
  k as ae,
  p as ee,
  a7 as At,
  a3 as lt,
  b0 as ha,
  I as he,
  O as et,
  U as Et,
} from "./index.195637e2.js";
import { Q as ba } from "./QPage.ae2997fd.js";
import { r as It } from "./rtl.b51694b1.js";
import { c as Sa, n as ll } from "./format.075dd778.js";
var _t = ue({
    name: "QTd",
    props: { props: Object, autoWidth: Boolean, noHover: Boolean },
    setup(e, { slots: l }) {
      const a = ve(),
        o = m(
          () =>
            "q-td" +
            (e.autoWidth === !0 ? " q-table--col-auto-width" : "") +
            (e.noHover === !0 ? " q-td--no-hover" : "") +
            " "
        );
      return () => {
        if (e.props === void 0)
          return f("td", { class: o.value }, Be(l.default));
        const i = a.vnode.key,
          u =
            (e.props.colsMap !== void 0 ? e.props.colsMap[i] : null) ||
            e.props.col;
        if (u === void 0) return;
        const { row: r } = e.props;
        return f(
          "td",
          { class: o.value + u.__tdClass(r), style: u.__tdStyle(r) },
          Be(l.default)
        );
      };
    },
  }),
  ya = ue({
    name: "QTr",
    props: { props: Object, noHover: Boolean },
    setup(e, { slots: l }) {
      const a = m(
        () =>
          "q-tr" +
          (e.props === void 0 || e.props.header === !0
            ? ""
            : " " + e.props.__trClass) +
          (e.noHover === !0 ? " q-tr--no-hover" : "")
      );
      return () => f("tr", { class: a.value }, Be(l.default));
    },
  }),
  wa = ue({
    name: "QTh",
    props: { props: Object, autoWidth: Boolean },
    emits: ["click"],
    setup(e, { slots: l, emit: a }) {
      const o = ve(),
        {
          proxy: { $q: i },
        } = o,
        u = (r) => {
          a("click", r);
        };
      return () => {
        if (e.props === void 0)
          return f(
            "th",
            {
              class: e.autoWidth === !0 ? "q-table--col-auto-width" : "",
              onClick: u,
            },
            Be(l.default)
          );
        let r, d;
        const c = o.vnode.key;
        if (c) {
          if (((r = e.props.colsMap[c]), r === void 0)) return;
        } else r = e.props.col;
        if (r.sortable === !0) {
          const n = r.align === "right" ? "unshift" : "push";
          (d = fl(l.default, [])),
            d[n](
              f(tt, { class: r.__iconClass, name: i.iconSet.table.arrowUp })
            );
        } else d = Be(l.default);
        const g = {
          class:
            r.__thClass +
            (e.autoWidth === !0 ? " q-table--col-auto-width" : ""),
          style: r.headerStyle,
          onClick: (n) => {
            r.sortable === !0 && e.props.sort(r), u(n);
          },
        };
        return f("th", g, d);
      };
    },
  }),
  _a = ue({
    name: "QList",
    props: {
      ...De,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
    },
    setup(e, { slots: l }) {
      const a = ve(),
        o = Ne(e, a.proxy.$q),
        i = m(
          () =>
            "q-list" +
            (e.bordered === !0 ? " q-list--bordered" : "") +
            (e.dense === !0 ? " q-list--dense" : "") +
            (e.separator === !0 ? " q-list--separator" : "") +
            (o.value === !0 ? " q-list--dark" : "") +
            (e.padding === !0 ? " q-list--padding" : "")
        );
      return () => f("div", { class: i.value, role: "list" }, Be(l.default));
    },
  });
const ka = ["horizontal", "vertical", "cell", "none"];
var qa = ue({
  name: "QMarkupTable",
  props: {
    ...De,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (e) => ka.includes(e),
    },
  },
  setup(e, { slots: l }) {
    const a = ve(),
      o = Ne(e, a.proxy.$q),
      i = m(
        () =>
          `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` +
          (o.value === !0 ? " q-table--dark q-table__card--dark q-dark" : "") +
          (e.dense === !0 ? " q-table--dense" : "") +
          (e.flat === !0 ? " q-table--flat" : "") +
          (e.bordered === !0 ? " q-table--bordered" : "") +
          (e.square === !0 ? " q-table--square" : "") +
          (e.wrapCells === !1 ? " q-table--no-wrap" : "")
      );
    return () =>
      f("div", { class: i.value }, [
        f("table", { class: "q-table" }, Be(l.default)),
      ]);
  },
});
function Cl(e, l) {
  return f("div", e, [f("table", { class: "q-table" }, l)]);
}
const we = 1e3,
  Ca = ["start", "center", "end", "start-force", "center-force", "end-force"],
  xl = Array.prototype.filter,
  xa =
    window.getComputedStyle(document.body).overflowAnchor === void 0
      ? Ml
      : function (e, l) {
          e !== null &&
            (cancelAnimationFrame(e._qOverflowAnimationFrame),
            (e._qOverflowAnimationFrame = requestAnimationFrame(() => {
              if (e === null) return;
              const a = e.children || [];
              xl.call(
                a,
                (i) => i.dataset && i.dataset.qVsAnchor !== void 0
              ).forEach((i) => {
                delete i.dataset.qVsAnchor;
              });
              const o = a[l];
              o && o.dataset && (o.dataset.qVsAnchor = "");
            })));
        };
function at(e, l) {
  return e + l;
}
function Lt(e, l, a, o, i, u, r, d) {
  const c =
      e === window ? document.scrollingElement || document.documentElement : e,
    g = i === !0 ? "offsetWidth" : "offsetHeight",
    n = {
      scrollStart: 0,
      scrollViewSize: -r - d,
      scrollMaxSize: 0,
      offsetStart: -r,
      offsetEnd: -d,
    };
  if (
    (i === !0
      ? (e === window
          ? ((n.scrollStart =
              window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0),
            (n.scrollViewSize += document.documentElement.clientWidth))
          : ((n.scrollStart = c.scrollLeft),
            (n.scrollViewSize += c.clientWidth)),
        (n.scrollMaxSize = c.scrollWidth),
        u === !0 &&
          (n.scrollStart =
            (It === !0 ? n.scrollMaxSize - n.scrollViewSize : 0) -
            n.scrollStart))
      : (e === window
          ? ((n.scrollStart =
              window.pageYOffset ||
              window.scrollY ||
              document.body.scrollTop ||
              0),
            (n.scrollViewSize += document.documentElement.clientHeight))
          : ((n.scrollStart = c.scrollTop),
            (n.scrollViewSize += c.clientHeight)),
        (n.scrollMaxSize = c.scrollHeight)),
    a !== null)
  )
    for (
      let h = a.previousElementSibling;
      h !== null;
      h = h.previousElementSibling
    )
      h.classList.contains("q-virtual-scroll--skip") === !1 &&
        (n.offsetStart += h[g]);
  if (o !== null)
    for (let h = o.nextElementSibling; h !== null; h = h.nextElementSibling)
      h.classList.contains("q-virtual-scroll--skip") === !1 &&
        (n.offsetEnd += h[g]);
  if (l !== e) {
    const h = c.getBoundingClientRect(),
      C = l.getBoundingClientRect();
    i === !0
      ? ((n.offsetStart += C.left - h.left), (n.offsetEnd -= C.width))
      : ((n.offsetStart += C.top - h.top), (n.offsetEnd -= C.height)),
      e !== window && (n.offsetStart += n.scrollStart),
      (n.offsetEnd += n.scrollMaxSize - n.offsetStart);
  }
  return n;
}
function al(e, l, a, o) {
  l === "end" &&
    (l = (e === window ? document.body : e)[
      a === !0 ? "scrollWidth" : "scrollHeight"
    ]),
    e === window
      ? a === !0
        ? (o === !0 &&
            (l =
              (It === !0
                ? document.body.scrollWidth -
                  document.documentElement.clientWidth
                : 0) - l),
          window.scrollTo(
            l,
            window.pageYOffset || window.scrollY || document.body.scrollTop || 0
          ))
        : window.scrollTo(
            window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0,
            l
          )
      : a === !0
      ? (o === !0 && (l = (It === !0 ? e.scrollWidth - e.offsetWidth : 0) - l),
        (e.scrollLeft = l))
      : (e.scrollTop = l);
}
function vt(e, l, a, o) {
  if (a >= o) return 0;
  const i = l.length,
    u = Math.floor(a / we),
    r = Math.floor((o - 1) / we) + 1;
  let d = e.slice(u, r).reduce(at, 0);
  return (
    a % we !== 0 && (d -= l.slice(u * we, a).reduce(at, 0)),
    o % we !== 0 && o !== i && (d -= l.slice(o, r * we).reduce(at, 0)),
    d
  );
}
const Pl = {
    virtualScrollSliceSize: { type: [Number, String], default: null },
    virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 },
    virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 },
    virtualScrollItemSize: { type: [Number, String], default: 24 },
    virtualScrollStickySizeStart: { type: [Number, String], default: 0 },
    virtualScrollStickySizeEnd: { type: [Number, String], default: 0 },
    tableColspan: [Number, String],
  },
  Vl = Object.keys(Pl),
  Bl = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Pl };
function Tl({
  virtualScrollLength: e,
  getVirtualScrollTarget: l,
  getVirtualScrollEl: a,
  virtualScrollItemSizeComputed: o,
}) {
  const i = ve(),
    { props: u, emit: r, proxy: d } = i,
    { $q: c } = d;
  let g,
    n,
    h,
    C = [],
    v;
  const V = z(0),
    x = z(0),
    w = z({}),
    I = z(null),
    H = z(null),
    M = z(null),
    R = z({ from: 0, to: 0 }),
    E = m(() => (u.tableColspan !== void 0 ? u.tableColspan : 100));
  o === void 0 && (o = m(() => u.virtualScrollItemSize));
  const te = m(() => o.value + ";" + u.virtualScrollHorizontal),
    re = m(
      () =>
        te.value +
        ";" +
        u.virtualScrollSliceRatioBefore +
        ";" +
        u.virtualScrollSliceRatioAfter
    );
  G(re, () => {
    se();
  }),
    G(te, fe);
  function fe() {
    ge(n, !0);
  }
  function be(b) {
    ge(b === void 0 ? n : b);
  }
  function Z(b, P) {
    const p = l();
    if (p == null || p.nodeType === 8) return;
    const D = Lt(
      p,
      a(),
      I.value,
      H.value,
      u.virtualScrollHorizontal,
      c.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    h !== D.scrollViewSize && se(D.scrollViewSize),
      _e(
        p,
        D,
        Math.min(e.value - 1, Math.max(0, parseInt(b, 10) || 0)),
        0,
        Ca.indexOf(P) > -1 ? P : n > -1 && b > n ? "end" : "start"
      );
  }
  function X() {
    const b = l();
    if (b == null || b.nodeType === 8) return;
    const P = Lt(
        b,
        a(),
        I.value,
        H.value,
        u.virtualScrollHorizontal,
        c.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ),
      p = e.value - 1,
      D = P.scrollMaxSize - P.offsetStart - P.offsetEnd - x.value;
    if (g === P.scrollStart) return;
    if (P.scrollMaxSize <= 0) {
      _e(b, P, 0, 0);
      return;
    }
    h !== P.scrollViewSize && se(P.scrollViewSize), me(R.value.from);
    const K = Math.floor(
      P.scrollMaxSize -
        Math.max(P.scrollViewSize, P.offsetEnd) -
        Math.min(v[p], P.scrollViewSize / 2)
    );
    if (K > 0 && Math.ceil(P.scrollStart) >= K) {
      _e(b, P, p, P.scrollMaxSize - P.offsetEnd - C.reduce(at, 0));
      return;
    }
    let A = 0,
      T = P.scrollStart - P.offsetStart,
      j = T;
    if (T <= D && T + P.scrollViewSize >= V.value)
      (T -= V.value), (A = R.value.from), (j = T);
    else for (let S = 0; T >= C[S] && A < p; S++) (T -= C[S]), (A += we);
    for (; T > 0 && A < p; )
      (T -= v[A]), T > -P.scrollViewSize ? (A++, (j = T)) : (j = v[A] + T);
    _e(b, P, A, j);
  }
  function _e(b, P, p, D, K) {
    const A = typeof K == "string" && K.indexOf("-force") > -1,
      T = A === !0 ? K.replace("-force", "") : K,
      j = T !== void 0 ? T : "start";
    let S = Math.max(0, p - w.value[j]),
      Y = S + w.value.total;
    Y > e.value && ((Y = e.value), (S = Math.max(0, Y - w.value.total))),
      (g = P.scrollStart);
    const ce = S !== R.value.from || Y !== R.value.to;
    if (ce === !1 && T === void 0) {
      Ce(p);
      return;
    }
    const { activeElement: Te } = document,
      oe = M.value;
    ce === !0 &&
      oe !== null &&
      oe !== Te &&
      oe.contains(Te) === !0 &&
      (oe.addEventListener("focusout", ke),
      setTimeout(() => {
        oe !== null && oe.removeEventListener("focusout", ke);
      })),
      xa(oe, p - S);
    const Oe = T !== void 0 ? v.slice(S, p).reduce(at, 0) : 0;
    if (ce === !0) {
      const xe = Y >= R.value.from && S <= R.value.to ? R.value.to : Y;
      (R.value = { from: S, to: xe }),
        (V.value = vt(C, v, 0, S)),
        (x.value = vt(C, v, Y, e.value)),
        requestAnimationFrame(() => {
          R.value.to !== Y &&
            g === P.scrollStart &&
            ((R.value = { from: R.value.from, to: Y }),
            (x.value = vt(C, v, Y, e.value)));
        });
    }
    requestAnimationFrame(() => {
      if (g !== P.scrollStart) return;
      ce === !0 && me(S);
      const xe = v.slice(S, p).reduce(at, 0),
        Pe = xe + P.offsetStart + V.value,
        Me = Pe + v[p];
      let ze = Pe + D;
      if (T !== void 0) {
        const de = xe - Oe,
          J = P.scrollStart + de;
        ze =
          A !== !0 && J < Pe && Me < J + P.scrollViewSize
            ? J
            : T === "end"
            ? Me - P.scrollViewSize
            : Pe -
              (T === "start" ? 0 : Math.round((P.scrollViewSize - v[p]) / 2));
      }
      (g = ze), al(b, ze, u.virtualScrollHorizontal, c.lang.rtl), Ce(p);
    });
  }
  function me(b) {
    const P = M.value;
    if (P) {
      const p = xl.call(
          P.children,
          (S) =>
            S.classList && S.classList.contains("q-virtual-scroll--skip") === !1
        ),
        D = p.length,
        K =
          u.virtualScrollHorizontal === !0
            ? (S) => S.getBoundingClientRect().width
            : (S) => S.offsetHeight;
      let A = b,
        T,
        j;
      for (let S = 0; S < D; ) {
        for (
          T = K(p[S]), S++;
          S < D &&
          p[S].classList.contains("q-virtual-scroll--with-prev") === !0;

        )
          (T += K(p[S])), S++;
        (j = T - v[A]),
          j !== 0 && ((v[A] += j), (C[Math.floor(A / we)] += j)),
          A++;
      }
    }
  }
  function ke() {
    M.value !== null && M.value !== void 0 && M.value.focus();
  }
  function ge(b, P) {
    const p = 1 * o.value;
    (P === !0 || Array.isArray(v) === !1) && (v = []);
    const D = v.length;
    v.length = e.value;
    for (let A = e.value - 1; A >= D; A--) v[A] = p;
    const K = Math.floor((e.value - 1) / we);
    C = [];
    for (let A = 0; A <= K; A++) {
      let T = 0;
      const j = Math.min((A + 1) * we, e.value);
      for (let S = A * we; S < j; S++) T += v[S];
      C.push(T);
    }
    (n = -1),
      (g = void 0),
      (V.value = vt(C, v, 0, R.value.from)),
      (x.value = vt(C, v, R.value.to, e.value)),
      b >= 0
        ? (me(R.value.from),
          ye(() => {
            Z(b);
          }))
        : ne();
  }
  function se(b) {
    if (b === void 0 && typeof window != "undefined") {
      const T = l();
      T != null &&
        T.nodeType !== 8 &&
        (b = Lt(
          T,
          a(),
          I.value,
          H.value,
          u.virtualScrollHorizontal,
          c.lang.rtl,
          u.virtualScrollStickySizeStart,
          u.virtualScrollStickySizeEnd
        ).scrollViewSize);
    }
    h = b;
    const P = parseFloat(u.virtualScrollSliceRatioBefore) || 0,
      p = parseFloat(u.virtualScrollSliceRatioAfter) || 0,
      D = 1 + P + p,
      K = b === void 0 || b <= 0 ? 1 : Math.ceil(b / o.value),
      A = Math.max(
        1,
        K,
        Math.ceil(
          (u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / D
        )
      );
    w.value = {
      total: Math.ceil(A * D),
      start: Math.ceil(A * P),
      center: Math.ceil(A * (0.5 + P)),
      end: Math.ceil(A * (1 + P)),
      view: K,
    };
  }
  function qe(b, P) {
    const p = u.virtualScrollHorizontal === !0 ? "width" : "height",
      D = { ["--q-virtual-scroll-item-" + p]: o.value + "px" };
    return [
      b === "tbody"
        ? f(b, { class: "q-virtual-scroll__padding", key: "before", ref: I }, [
            f("tr", [
              f("td", {
                style: { [p]: `${V.value}px`, ...D },
                colspan: E.value,
              }),
            ]),
          ])
        : f(b, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: I,
            style: { [p]: `${V.value}px`, ...D },
          }),
      f(
        b,
        {
          class: "q-virtual-scroll__content",
          key: "content",
          ref: M,
          tabindex: -1,
        },
        P.flat()
      ),
      b === "tbody"
        ? f(b, { class: "q-virtual-scroll__padding", key: "after", ref: H }, [
            f("tr", [
              f("td", {
                style: { [p]: `${x.value}px`, ...D },
                colspan: E.value,
              }),
            ]),
          ])
        : f(b, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: H,
            style: { [p]: `${x.value}px`, ...D },
          }),
    ];
  }
  function Ce(b) {
    n !== b &&
      (u.onVirtualScroll !== void 0 &&
        r("virtual-scroll", {
          index: b,
          from: R.value.from,
          to: R.value.to - 1,
          direction: b < n ? "decrease" : "increase",
          ref: d,
        }),
      (n = b));
  }
  se();
  const ne = Fl(X, c.platform.is.ios === !0 ? 120 : 35);
  Dt(() => {
    se();
  });
  let q = !1;
  return (
    ml(() => {
      q = !0;
    }),
    gl(() => {
      if (q !== !0) return;
      const b = l();
      g !== void 0 && b !== void 0 && b !== null && b.nodeType !== 8
        ? al(b, g, u.virtualScrollHorizontal, c.lang.rtl)
        : Z(n);
    }),
    We(() => {
      ne.cancel();
    }),
    Object.assign(d, { scrollTo: Z, reset: fe, refresh: be }),
    {
      virtualScrollSliceRange: R,
      virtualScrollSliceSizeComputed: w,
      setVirtualScrollSize: se,
      onVirtualScrollEvt: ne,
      localResetVirtualScroll: ge,
      padVirtualScroll: qe,
      scrollTo: Z,
      reset: fe,
      refresh: be,
    }
  );
}
const Pa = { list: _a, table: qa },
  Va = ["list", "table", "__qtable"];
var Ba = ue({
    name: "QVirtualScroll",
    props: {
      ...Bl,
      type: { type: String, default: "list", validator: (e) => Va.includes(e) },
      items: { type: Array, default: () => [] },
      itemsFn: Function,
      itemsSize: Number,
      scrollTarget: { default: void 0 },
    },
    setup(e, { slots: l, attrs: a }) {
      let o;
      const i = z(null),
        u = m(() =>
          e.itemsSize >= 0 && e.itemsFn !== void 0
            ? parseInt(e.itemsSize, 10)
            : Array.isArray(e.items)
            ? e.items.length
            : 0
        ),
        {
          virtualScrollSliceRange: r,
          localResetVirtualScroll: d,
          padVirtualScroll: c,
          onVirtualScrollEvt: g,
        } = Tl({
          virtualScrollLength: u,
          getVirtualScrollTarget: V,
          getVirtualScrollEl: v,
        }),
        n = m(() => {
          if (u.value === 0) return [];
          const H = (M, R) => ({ index: r.value.from + R, item: M });
          return e.itemsFn === void 0
            ? e.items.slice(r.value.from, r.value.to).map(H)
            : e.itemsFn(r.value.from, r.value.to - r.value.from).map(H);
        }),
        h = m(
          () =>
            "q-virtual-scroll q-virtual-scroll" +
            (e.virtualScrollHorizontal === !0 ? "--horizontal" : "--vertical") +
            (e.scrollTarget !== void 0 ? "" : " scroll")
        ),
        C = m(() => (e.scrollTarget !== void 0 ? {} : { tabindex: 0 }));
      G(u, () => {
        d();
      }),
        G(
          () => e.scrollTarget,
          () => {
            w(), x();
          }
        );
      function v() {
        return i.value.$el || i.value;
      }
      function V() {
        return o;
      }
      function x() {
        (o = hl(v(), e.scrollTarget)),
          o.addEventListener("scroll", g, ht.passive);
      }
      function w() {
        o !== void 0 &&
          (o.removeEventListener("scroll", g, ht.passive), (o = void 0));
      }
      function I() {
        let H = c(e.type === "list" ? "div" : "tbody", n.value.map(l.default));
        return (
          l.before !== void 0 && (H = l.before().concat(H)), Nt(l.after, H)
        );
      }
      return (
        Dt(() => {
          d();
        }),
        bt(() => {
          x();
        }),
        gl(() => {
          x();
        }),
        ml(() => {
          w();
        }),
        We(() => {
          w();
        }),
        () => {
          if (l.default === void 0) {
            console.error(
              "QVirtualScroll: default scoped slot is required for rendering"
            );
            return;
          }
          return e.type === "__qtable"
            ? Cl({ ref: i, class: "q-table__middle " + h.value }, I())
            : f(
                Pa[e.type],
                { ...a, ref: i, class: [a.class, h.value], ...C.value },
                I
              );
        }
      );
    },
  }),
  Ta = ue({
    name: "QField",
    inheritAttrs: !1,
    props: Wt,
    emits: bl,
    setup() {
      return Sl(yl());
    },
  });
const Ra = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var pa = ue({
    name: "QChip",
    props: {
      ...De,
      ...wl,
      dense: Boolean,
      icon: String,
      iconRight: String,
      iconRemove: String,
      iconSelected: String,
      label: [String, Number],
      color: String,
      textColor: String,
      modelValue: { type: Boolean, default: !0 },
      selected: { type: Boolean, default: null },
      square: Boolean,
      outline: Boolean,
      clickable: Boolean,
      removable: Boolean,
      removeAriaLabel: String,
      tabindex: [String, Number],
      disable: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
    },
    emits: ["update:modelValue", "update:selected", "remove", "click"],
    setup(e, { slots: l, emit: a }) {
      const {
          proxy: { $q: o },
        } = ve(),
        i = Ne(e, o),
        u = _l(e, Ra),
        r = m(() => e.selected === !0 || e.icon !== void 0),
        d = m(() =>
          e.selected === !0 ? e.iconSelected || o.iconSet.chip.selected : e.icon
        ),
        c = m(() => e.iconRemove || o.iconSet.chip.remove),
        g = m(
          () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
        ),
        n = m(() => {
          const w = (e.outline === !0 && e.color) || e.textColor;
          return (
            "q-chip row inline no-wrap items-center" +
            (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") +
            (w ? ` text-${w} q-chip--colored` : "") +
            (e.disable === !0 ? " disabled" : "") +
            (e.dense === !0 ? " q-chip--dense" : "") +
            (e.outline === !0 ? " q-chip--outline" : "") +
            (e.selected === !0 ? " q-chip--selected" : "") +
            (g.value === !0
              ? " q-chip--clickable cursor-pointer non-selectable q-hoverable"
              : "") +
            (e.square === !0 ? " q-chip--square" : "") +
            (i.value === !0 ? " q-chip--dark q-dark" : "")
          );
        }),
        h = m(() => {
          const w =
              e.disable === !0
                ? { tabindex: -1, "aria-disabled": "true" }
                : { tabindex: e.tabindex || 0 },
            I = {
              ...w,
              role: "button",
              "aria-hidden": "false",
              "aria-label": e.removeAriaLabel || o.lang.label.remove,
            };
          return { chip: w, remove: I };
        });
      function C(w) {
        w.keyCode === 13 && v(w);
      }
      function v(w) {
        e.disable || (a("update:selected", !e.selected), a("click", w));
      }
      function V(w) {
        (w.keyCode === void 0 || w.keyCode === 13) &&
          (pe(w),
          e.disable === !1 && (a("update:modelValue", !1), a("remove")));
      }
      function x() {
        const w = [];
        g.value === !0 && w.push(f("div", { class: "q-focus-helper" })),
          r.value === !0 &&
            w.push(
              f(tt, { class: "q-chip__icon q-chip__icon--left", name: d.value })
            );
        const I =
          e.label !== void 0
            ? [f("div", { class: "ellipsis" }, [e.label])]
            : void 0;
        return (
          w.push(
            f(
              "div",
              {
                class:
                  "q-chip__content col row no-wrap items-center q-anchor--skip",
              },
              El(l.default, I)
            )
          ),
          e.iconRight &&
            w.push(
              f(tt, {
                class: "q-chip__icon q-chip__icon--right",
                name: e.iconRight,
              })
            ),
          e.removable === !0 &&
            w.push(
              f(tt, {
                class: "q-chip__icon q-chip__icon--remove cursor-pointer",
                name: c.value,
                ...h.value.remove,
                onClick: V,
                onKeyup: V,
              })
            ),
          w
        );
      }
      return () => {
        if (e.modelValue === !1) return;
        const w = { class: n.value, style: u.value };
        return (
          g.value === !0 &&
            Object.assign(w, h.value.chip, { onClick: v, onKeyup: C }),
          Al(
            "div",
            w,
            x(),
            "ripple",
            e.ripple !== !1 && e.disable !== !0,
            () => [[Ll, e.ripple]]
          )
        );
      };
    },
  }),
  Oa = ue({
    name: "QItem",
    props: {
      ...De,
      ...zl,
      tag: { type: String, default: "div" },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: ["click", "keyup"],
    setup(e, { slots: l, emit: a }) {
      const {
          proxy: { $q: o },
        } = ve(),
        i = Ne(e, o),
        {
          hasLink: u,
          linkAttrs: r,
          linkClass: d,
          linkTag: c,
          navigateOnClick: g,
        } = Hl(),
        n = z(null),
        h = z(null),
        C = m(() => e.clickable === !0 || u.value === !0 || e.tag === "label"),
        v = m(() => e.disable !== !0 && C.value === !0),
        V = m(
          () =>
            "q-item q-item-type row no-wrap" +
            (e.dense === !0 ? " q-item--dense" : "") +
            (i.value === !0 ? " q-item--dark" : "") +
            (u.value === !0 && e.active === null
              ? d.value
              : e.active === !0
              ? ` q-item--active${
                  e.activeClass !== void 0 ? ` ${e.activeClass}` : ""
                }`
              : "") +
            (e.disable === !0 ? " disabled" : "") +
            (v.value === !0
              ? " q-item--clickable q-link cursor-pointer " +
                (e.manualFocus === !0
                  ? "q-manual-focusable"
                  : "q-focusable q-hoverable") +
                (e.focused === !0 ? " q-manual-focusable--focused" : "")
              : "")
        ),
        x = m(() => {
          if (e.insetLevel === void 0) return null;
          const M = o.lang.rtl === !0 ? "Right" : "Left";
          return { ["padding" + M]: 16 + e.insetLevel * 56 + "px" };
        });
      function w(M) {
        v.value === !0 &&
          (h.value !== null &&
            (M.qKeyEvent !== !0 && document.activeElement === n.value
              ? h.value.focus()
              : document.activeElement === h.value && n.value.focus()),
          g(M));
      }
      function I(M) {
        if (v.value === !0 && jt(M, 13) === !0) {
          pe(M), (M.qKeyEvent = !0);
          const R = new MouseEvent("click", M);
          (R.qKeyEvent = !0), n.value.dispatchEvent(R);
        }
        a("keyup", M);
      }
      function H() {
        const M = fl(l.default, []);
        return (
          v.value === !0 &&
            M.unshift(
              f("div", { class: "q-focus-helper", tabindex: -1, ref: h })
            ),
          M
        );
      }
      return () => {
        const M = {
          ref: n,
          class: V.value,
          style: x.value,
          role: "listitem",
          onClick: w,
          onKeyup: I,
        };
        return (
          v.value === !0
            ? ((M.tabindex = e.tabindex || "0"), Object.assign(M, r.value))
            : C.value === !0 && (M["aria-disabled"] = "true"),
          f(c.value, M, H())
        );
      };
    },
  }),
  Ma = ue({
    name: "QItemSection",
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean,
    },
    setup(e, { slots: l }) {
      const a = m(
        () =>
          `q-item__section column q-item__section--${
            e.avatar === !0 || e.side === !0 || e.thumbnail === !0
              ? "side"
              : "main"
          }` +
          (e.top === !0
            ? " q-item__section--top justify-start"
            : " justify-center") +
          (e.avatar === !0 ? " q-item__section--avatar" : "") +
          (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") +
          (e.noWrap === !0 ? " q-item__section--nowrap" : "")
      );
      return () => f("div", { class: a.value }, Be(l.default));
    },
  }),
  Fa = ue({
    name: "QItemLabel",
    props: {
      overline: Boolean,
      caption: Boolean,
      header: Boolean,
      lines: [Number, String],
    },
    setup(e, { slots: l }) {
      const a = m(() => parseInt(e.lines, 10)),
        o = m(
          () =>
            "q-item__label" +
            (e.overline === !0
              ? " q-item__label--overline text-overline"
              : "") +
            (e.caption === !0 ? " q-item__label--caption text-caption" : "") +
            (e.header === !0 ? " q-item__label--header" : "") +
            (a.value === 1 ? " ellipsis" : "")
        ),
        i = m(() =>
          e.lines !== void 0 && a.value > 1
            ? {
                overflow: "hidden",
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": a.value,
              }
            : null
        );
      return () => f("div", { style: i.value, class: o.value }, Be(l.default));
    },
  });
const Aa = {
  target: { default: !0 },
  noParentEvent: Boolean,
  contextMenu: Boolean,
};
function Ea({ showing: e, avoidEmit: l, configureAnchorEl: a }) {
  const { props: o, proxy: i, emit: u } = ve(),
    r = z(null);
  let d;
  function c(v) {
    return r.value === null
      ? !1
      : v === void 0 || v.touches === void 0 || v.touches.length <= 1;
  }
  const g = {};
  a === void 0 &&
    (Object.assign(g, {
      hide(v) {
        i.hide(v);
      },
      toggle(v) {
        i.toggle(v), (v.qAnchorHandled = !0);
      },
      toggleKey(v) {
        jt(v, 13) === !0 && g.toggle(v);
      },
      contextClick(v) {
        i.hide(v),
          gt(v),
          ye(() => {
            i.show(v), (v.qAnchorHandled = !0);
          });
      },
      prevent: gt,
      mobileTouch(v) {
        if ((g.mobileCleanup(v), c(v) !== !0)) return;
        i.hide(v), r.value.classList.add("non-selectable");
        const V = v.target;
        Xt(g, "anchor", [
          [V, "touchmove", "mobileCleanup", "passive"],
          [V, "touchend", "mobileCleanup", "passive"],
          [V, "touchcancel", "mobileCleanup", "passive"],
          [r.value, "contextmenu", "prevent", "notPassive"],
        ]),
          (d = setTimeout(() => {
            i.show(v), (v.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(v) {
        r.value.classList.remove("non-selectable"),
          clearTimeout(d),
          e.value === !0 && v !== void 0 && Sa();
      },
    }),
    (a = function (v = o.contextMenu) {
      if (o.noParentEvent === !0 || r.value === null) return;
      let V;
      v === !0
        ? i.$q.platform.is.mobile === !0
          ? (V = [[r.value, "touchstart", "mobileTouch", "passive"]])
          : (V = [
              [r.value, "mousedown", "hide", "passive"],
              [r.value, "contextmenu", "contextClick", "notPassive"],
            ])
        : (V = [
            [r.value, "click", "toggle", "passive"],
            [r.value, "keyup", "toggleKey", "passive"],
          ]),
        Xt(g, "anchor", V);
    }));
  function n() {
    Il(g, "anchor");
  }
  function h(v) {
    for (r.value = v; r.value.classList.contains("q-anchor--skip"); )
      r.value = r.value.parentNode;
    a();
  }
  function C() {
    if (o.target === !1 || o.target === "" || i.$el.parentNode === null)
      r.value = null;
    else if (o.target === !0) h(i.$el.parentNode);
    else {
      let v = o.target;
      if (typeof o.target == "string")
        try {
          v = document.querySelector(o.target);
        } catch {
          v = void 0;
        }
      v != null
        ? ((r.value = v.$el || v), a())
        : ((r.value = null),
          console.error(`Anchor: target "${o.target}" not found`));
    }
  }
  return (
    G(
      () => o.contextMenu,
      (v) => {
        r.value !== null && (n(), a(v));
      }
    ),
    G(
      () => o.target,
      () => {
        r.value !== null && n(), C();
      }
    ),
    G(
      () => o.noParentEvent,
      (v) => {
        r.value !== null && (v === !0 ? n() : a());
      }
    ),
    bt(() => {
      C(),
        l !== !0 &&
          o.modelValue === !0 &&
          r.value === null &&
          u("update:modelValue", !1);
    }),
    We(() => {
      clearTimeout(d), n();
    }),
    { anchorEl: r, canShow: c, anchorEvents: g }
  );
}
function La(e, l) {
  const a = z(null);
  let o;
  function i(d, c) {
    const g = `${c !== void 0 ? "add" : "remove"}EventListener`,
      n = c !== void 0 ? c : o;
    d !== window && d[g]("scroll", n, ht.passive),
      window[g]("scroll", n, ht.passive),
      (o = c);
  }
  function u() {
    a.value !== null && (i(a.value), (a.value = null));
  }
  const r = G(
    () => e.noParentEvent,
    () => {
      a.value !== null && (u(), l());
    }
  );
  return (
    We(r),
    { localScrollTarget: a, unconfigureScrollTarget: u, changeScrollEvent: i }
  );
}
let Rl;
const { notPassiveCapture: Ct } = ht,
  $e = [];
function xt(e) {
  clearTimeout(Rl);
  const l = e.target;
  if (
    l === void 0 ||
    l.nodeType === 8 ||
    l.classList.contains("no-pointer-events") === !0
  )
    return;
  let a = Yt.length - 1;
  for (; a >= 0; ) {
    const o = Yt[a].$;
    if (o.type.name !== "QDialog") break;
    if (o.props.seamless !== !0) return;
    a--;
  }
  for (let o = $e.length - 1; o >= 0; o--) {
    const i = $e[o];
    if (
      (i.anchorEl.value === null || i.anchorEl.value.contains(l) === !1) &&
      (l === document.body ||
        (i.innerRef.value !== null && i.innerRef.value.contains(l) === !1))
    )
      (e.qClickOutside = !0), i.onClickOutside(e);
    else return;
  }
}
function za(e) {
  $e.push(e),
    $e.length === 1 &&
      (document.addEventListener("mousedown", xt, Ct),
      document.addEventListener("touchstart", xt, Ct));
}
function nl(e) {
  const l = $e.findIndex((a) => a === e);
  l > -1 &&
    ($e.splice(l, 1),
    $e.length === 0 &&
      (clearTimeout(Rl),
      document.removeEventListener("mousedown", xt, Ct),
      document.removeEventListener("touchstart", xt, Ct)));
}
let ol, il;
function ul(e) {
  const l = e.split(" ");
  return l.length !== 2
    ? !1
    : ["top", "center", "bottom"].includes(l[0]) !== !0
    ? (console.error(
        "Anchor/Self position must start with one of top/center/bottom"
      ),
      !1)
    : ["left", "middle", "right", "start", "end"].includes(l[1]) !== !0
    ? (console.error(
        "Anchor/Self position must end with one of left/middle/right/start/end"
      ),
      !1)
    : !0;
}
function Ha(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number")
    : !0;
}
const $t = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left",
};
["left", "middle", "right"].forEach((e) => {
  ($t[`${e}#ltr`] = e), ($t[`${e}#rtl`] = e);
});
function rl(e, l) {
  const a = e.split(" ");
  return {
    vertical: a[0],
    horizontal: $t[`${a[1]}#${l === !0 ? "rtl" : "ltr"}`],
  };
}
function Ia(e, l) {
  let {
    top: a,
    left: o,
    right: i,
    bottom: u,
    width: r,
    height: d,
  } = e.getBoundingClientRect();
  return (
    l !== void 0 &&
      ((a -= l[1]),
      (o -= l[0]),
      (u += l[1]),
      (i += l[0]),
      (r += l[0]),
      (d += l[1])),
    {
      top: a,
      left: o,
      right: i,
      bottom: u,
      width: r,
      height: d,
      middle: o + (i - o) / 2,
      center: a + (u - a) / 2,
    }
  );
}
function $a(e) {
  return {
    top: 0,
    center: e.offsetHeight / 2,
    bottom: e.offsetHeight,
    left: 0,
    middle: e.offsetWidth / 2,
    right: e.offsetWidth,
  };
}
function Da(e) {
  if ($l.is.ios === !0 && window.visualViewport !== void 0) {
    const d = document.body.style,
      { offsetLeft: c, offsetTop: g } = window.visualViewport;
    c !== ol && (d.setProperty("--q-pe-left", c + "px"), (ol = c)),
      g !== il && (d.setProperty("--q-pe-top", g + "px"), (il = g));
  }
  let l;
  const { scrollLeft: a, scrollTop: o } = e.el;
  if (e.absoluteOffset === void 0)
    l = Ia(e.anchorEl, e.cover === !0 ? [0, 0] : e.offset);
  else {
    const { top: d, left: c } = e.anchorEl.getBoundingClientRect(),
      g = d + e.absoluteOffset.top,
      n = c + e.absoluteOffset.left;
    l = {
      top: g,
      left: n,
      width: 1,
      height: 1,
      right: n + 1,
      center: g,
      middle: n,
      bottom: g + 1,
    };
  }
  let i = {
    maxHeight: e.maxHeight,
    maxWidth: e.maxWidth,
    visibility: "visible",
  };
  (e.fit === !0 || e.cover === !0) &&
    ((i.minWidth = l.width + "px"),
    e.cover === !0 && (i.minHeight = l.height + "px")),
    Object.assign(e.el.style, i);
  const u = $a(e.el),
    r = {
      top: l[e.anchorOrigin.vertical] - u[e.selfOrigin.vertical],
      left: l[e.anchorOrigin.horizontal] - u[e.selfOrigin.horizontal],
    };
  Na(r, l, u, e.anchorOrigin, e.selfOrigin),
    (i = { top: r.top + "px", left: r.left + "px" }),
    r.maxHeight !== void 0 &&
      ((i.maxHeight = r.maxHeight + "px"),
      l.height > r.maxHeight && (i.minHeight = i.maxHeight)),
    r.maxWidth !== void 0 &&
      ((i.maxWidth = r.maxWidth + "px"),
      l.width > r.maxWidth && (i.minWidth = i.maxWidth)),
    Object.assign(e.el.style, i),
    e.el.scrollTop !== o && (e.el.scrollTop = o),
    e.el.scrollLeft !== a && (e.el.scrollLeft = a);
}
function Na(e, l, a, o, i) {
  const u = a.bottom,
    r = a.right,
    d = Dl(),
    c = window.innerHeight - d,
    g = document.body.clientWidth;
  if (e.top < 0 || e.top + u > c)
    if (i.vertical === "center")
      (e.top = l[o.vertical] > c / 2 ? Math.max(0, c - u) : 0),
        (e.maxHeight = Math.min(u, c));
    else if (l[o.vertical] > c / 2) {
      const n = Math.min(
        c,
        o.vertical === "center"
          ? l.center
          : o.vertical === i.vertical
          ? l.bottom
          : l.top
      );
      (e.maxHeight = Math.min(u, n)), (e.top = Math.max(0, n - u));
    } else
      (e.top = Math.max(
        0,
        o.vertical === "center"
          ? l.center
          : o.vertical === i.vertical
          ? l.top
          : l.bottom
      )),
        (e.maxHeight = Math.min(u, c - e.top));
  if (e.left < 0 || e.left + r > g)
    if (((e.maxWidth = Math.min(r, g)), i.horizontal === "middle"))
      e.left = l[o.horizontal] > g / 2 ? Math.max(0, g - r) : 0;
    else if (l[o.horizontal] > g / 2) {
      const n = Math.min(
        g,
        o.horizontal === "middle"
          ? l.middle
          : o.horizontal === i.horizontal
          ? l.right
          : l.left
      );
      (e.maxWidth = Math.min(r, n)), (e.left = Math.max(0, n - e.maxWidth));
    } else
      (e.left = Math.max(
        0,
        o.horizontal === "middle"
          ? l.middle
          : o.horizontal === i.horizontal
          ? l.left
          : l.right
      )),
        (e.maxWidth = Math.min(r, g - e.left));
}
var Wa = ue({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Aa,
    ...Nl,
    ...De,
    ...Wl,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: { type: String, validator: ul },
    self: { type: String, validator: ul },
    offset: { type: Array, validator: Ha },
    scrollTarget: { default: void 0 },
    touchPosition: Boolean,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
  },
  emits: [...jl, "click", "escape-key"],
  setup(e, { slots: l, emit: a, attrs: o }) {
    let i = null,
      u,
      r,
      d;
    const c = ve(),
      { proxy: g } = c,
      { $q: n } = g,
      h = z(null),
      C = z(!1),
      v = m(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
      V = Ne(e, n),
      { registerTick: x, removeTick: w } = Ql(),
      { registerTimeout: I } = Kl(),
      { transition: H, transitionStyle: M } = Ul(e, C),
      {
        localScrollTarget: R,
        changeScrollEvent: E,
        unconfigureScrollTarget: te,
      } = La(e, p),
      { anchorEl: re, canShow: fe } = Ea({ showing: C }),
      { hide: be } = Gl({
        showing: C,
        canShow: fe,
        handleShow: q,
        handleHide: b,
        hideOnRouteChange: v,
        processOnMount: !0,
      }),
      { showPortal: Z, hidePortal: X, renderPortal: _e } = Xl(c, h, j),
      me = {
        anchorEl: re,
        innerRef: h,
        onClickOutside(S) {
          if (e.persistent !== !0 && C.value === !0)
            return (
              be(S),
              (S.type === "touchstart" ||
                S.target.classList.contains("q-dialog__backdrop")) &&
                pe(S),
              !0
            );
        },
      },
      ke = m(() =>
        rl(
          e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
          n.lang.rtl
        )
      ),
      ge = m(() =>
        e.cover === !0 ? ke.value : rl(e.self || "top start", n.lang.rtl)
      ),
      se = m(
        () =>
          (e.square === !0 ? " q-menu--square" : "") +
          (V.value === !0 ? " q-menu--dark q-dark" : "")
      ),
      qe = m(() => (e.autoClose === !0 ? { onClick: D } : {})),
      Ce = m(() => C.value === !0 && e.persistent !== !0);
    G(Ce, (S) => {
      S === !0 ? (ta(A), za(me)) : (Zt(A), nl(me));
    });
    function ne() {
      la(() => {
        let S = h.value;
        S &&
          S.contains(document.activeElement) !== !0 &&
          ((S = S.querySelector("[autofocus], [data-autofocus]") || S),
          S.focus({ preventScroll: !0 }));
      });
    }
    function q(S) {
      if (
        ((i = e.noRefocus === !1 ? document.activeElement : null),
        Yl(K),
        Z(),
        p(),
        (u = void 0),
        S !== void 0 && (e.touchPosition || e.contextMenu))
      ) {
        const Y = Zl(S);
        if (Y.left !== void 0) {
          const { top: ce, left: Te } = re.value.getBoundingClientRect();
          u = { left: Y.left - Te, top: Y.top - ce };
        }
      }
      r === void 0 &&
        (r = G(
          () =>
            n.screen.width +
            "|" +
            n.screen.height +
            "|" +
            e.self +
            "|" +
            e.anchor +
            "|" +
            n.lang.rtl,
          T
        )),
        e.noFocus !== !0 && document.activeElement.blur(),
        x(() => {
          T(), e.noFocus !== !0 && ne();
        }),
        I(() => {
          n.platform.is.ios === !0 && ((d = e.autoClose), h.value.click()),
            T(),
            Z(!0),
            a("show", S);
        }, e.transitionDuration);
    }
    function b(S) {
      w(),
        X(),
        P(!0),
        i !== null &&
          (S === void 0 || S.qClickOutside !== !0) &&
          (i.focus(), (i = null)),
        I(() => {
          X(!0), a("hide", S);
        }, e.transitionDuration);
    }
    function P(S) {
      (u = void 0),
        r !== void 0 && (r(), (r = void 0)),
        (S === !0 || C.value === !0) && (Jl(K), te(), nl(me), Zt(A)),
        S !== !0 && (i = null);
    }
    function p() {
      (re.value !== null || e.scrollTarget !== void 0) &&
        ((R.value = hl(re.value, e.scrollTarget)), E(R.value, T));
    }
    function D(S) {
      d !== !0 ? (aa(g, S), a("click", S)) : (d = !1);
    }
    function K(S) {
      Ce.value === !0 &&
        e.noFocus !== !0 &&
        na(h.value, S.target) !== !0 &&
        ne();
    }
    function A(S) {
      a("escape-key"), be(S);
    }
    function T() {
      const S = h.value;
      S === null ||
        re.value === null ||
        Da({
          el: S,
          offset: e.offset,
          anchorEl: re.value,
          anchorOrigin: ke.value,
          selfOrigin: ge.value,
          absoluteOffset: u,
          fit: e.fit,
          cover: e.cover,
          maxHeight: e.maxHeight,
          maxWidth: e.maxWidth,
        });
    }
    function j() {
      return f(ea, { name: H.value, appear: !0 }, () =>
        C.value === !0
          ? f(
              "div",
              {
                role: "menu",
                ...o,
                ref: h,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + se.value, o.class],
                style: [o.style, M.value],
                ...qe.value,
              },
              Be(l.default)
            )
          : null
      );
    }
    return We(P), Object.assign(g, { focus: ne, updatePosition: T }), _e;
  },
});
const sl = (e) => ["add", "add-unique", "toggle"].includes(e),
  ja = ".*+?^${}()|[]\\",
  Qa = Object.keys(Wt);
var Ka = ue({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...Bl,
    ...oa,
    ...Wt,
    modelValue: { required: !0 },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: { type: Array, default: () => [] },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: { type: Boolean, default: null },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: { type: String, validator: sl },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: { type: [Number, String], default: 500 },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: { type: [String, Number], default: 0 },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (e) => ["default", "menu", "dialog"].includes(e),
      default: "default",
    },
    virtualScrollItemSize: { type: [Number, String], default: void 0 },
    onNewValue: Function,
    onFilter: Function,
  },
  emits: [
    ...bl,
    "add",
    "remove",
    "input-value",
    "new-value",
    "keyup",
    "keypress",
    "keydown",
    "filter-abort",
  ],
  setup(e, { slots: l, emit: a }) {
    const { proxy: o } = ve(),
      { $q: i } = o,
      u = z(!1),
      r = z(!1),
      d = z(-1),
      c = z(""),
      g = z(!1),
      n = z(!1);
    let h, C, v, V, x, w, I, H, M;
    const R = z(null),
      E = z(null),
      te = z(null),
      re = z(null),
      fe = z(null),
      be = ia(e),
      Z = da(wt),
      X = m(() => (Array.isArray(e.options) ? e.options.length : 0)),
      _e = m(() =>
        e.virtualScrollItemSize === void 0
          ? e.optionsDense === !0
            ? 24
            : 48
          : e.virtualScrollItemSize
      ),
      {
        virtualScrollSliceRange: me,
        virtualScrollSliceSizeComputed: ke,
        localResetVirtualScroll: ge,
        padVirtualScroll: se,
        onVirtualScrollEvt: qe,
        scrollTo: Ce,
        setVirtualScrollSize: ne,
      } = Tl({
        virtualScrollLength: X,
        getVirtualScrollTarget: Bt,
        getVirtualScrollEl: He,
        virtualScrollItemSizeComputed: _e,
      }),
      q = yl(),
      b = m(() => {
        const t = e.mapOptions === !0 && e.multiple !== !0,
          k =
            e.modelValue !== void 0 && (e.modelValue !== null || t === !0)
              ? e.multiple === !0 && Array.isArray(e.modelValue)
                ? e.modelValue
                : [e.modelValue]
              : [];
        if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
          const y = e.mapOptions === !0 && C !== void 0 ? C : [],
            O = k.map((N) => Le(N, y));
          return e.modelValue === null && t === !0
            ? O.filter((N) => N !== null)
            : O;
        }
        return k;
      }),
      P = m(() => {
        const t = {};
        return (
          Qa.forEach((k) => {
            const y = e[k];
            y !== void 0 && (t[k] = y);
          }),
          t
        );
      }),
      p = m(() => (e.optionsDark === null ? q.isDark.value : e.optionsDark)),
      D = m(() => Jt(b.value)),
      K = m(() => {
        let t = "q-field__input q-placeholder col";
        return e.hideSelected === !0 || b.value.length === 0
          ? [t, e.inputClass]
          : ((t += " q-field__input--padding"),
            e.inputClass === void 0 ? t : [t, e.inputClass]);
      }),
      A = m(
        () =>
          (e.virtualScrollHorizontal === !0
            ? "q-virtual-scroll--horizontal"
            : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
      ),
      T = m(() => X.value === 0),
      j = m(() => b.value.map((t) => J.value(t)).join(", ")),
      S = m(() =>
        e.optionsHtml === !0 ? () => !0 : (t) => t != null && t.html === !0
      ),
      Y = m(
        () =>
          e.displayValueHtml === !0 ||
          (e.displayValue === void 0 &&
            (e.optionsHtml === !0 || b.value.some(S.value)))
      ),
      ce = m(() => (q.focused.value === !0 ? e.tabindex : -1)),
      Te = m(() => ({
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": u.value === !0 ? "true" : "false",
        "aria-owns": `${q.targetUid.value}_lb`,
        "aria-controls": `${q.targetUid.value}_lb`,
      })),
      oe = m(() => {
        const t = {
          id: `${q.targetUid.value}_lb`,
          role: "listbox",
          "aria-multiselectable": e.multiple === !0 ? "true" : "false",
        };
        return (
          d.value >= 0 &&
            (t["aria-activedescendant"] = `${q.targetUid.value}_${d.value}`),
          t
        );
      }),
      Oe = m(() =>
        b.value.map((t, k) => ({
          index: k,
          opt: t,
          html: S.value(t),
          selected: !0,
          removeAtIndex: Vt,
          toggleOption: Re,
          tabindex: ce.value,
        }))
      ),
      xe = m(() => {
        if (X.value === 0) return [];
        const { from: t, to: k } = me.value;
        return e.options.slice(t, k).map((y, O) => {
          const N = Fe.value(y) === !0,
            $ = t + O,
            U = {
              clickable: !0,
              active: !1,
              activeClass: ze.value,
              manualFocus: !0,
              focused: !1,
              disable: N,
              tabindex: -1,
              dense: e.optionsDense,
              dark: p.value,
              role: "option",
              id: `${q.targetUid.value}_${$}`,
              onClick: () => {
                Re(y);
              },
            };
          return (
            N !== !0 &&
              (it(y) === !0 && (U.active = !0),
              d.value === $ && (U.focused = !0),
              (U["aria-selected"] = U.active === !0 ? "true" : "false"),
              i.platform.is.desktop === !0 &&
                (U.onMousemove = () => {
                  u.value === !0 && Ae($);
                })),
            {
              index: $,
              opt: y,
              html: S.value(y),
              label: J.value(y),
              selected: U.active,
              focused: U.focused,
              toggleOption: Re,
              setOptionIndex: Ae,
              itemProps: U,
            }
          );
        });
      }),
      Pe = m(() =>
        e.dropdownIcon !== void 0 ? e.dropdownIcon : i.iconSet.arrow.dropdown
      ),
      Me = m(
        () =>
          e.optionsCover === !1 &&
          e.outlined !== !0 &&
          e.standout !== !0 &&
          e.borderless !== !0 &&
          e.rounded !== !0
      ),
      ze = m(() =>
        e.optionsSelectedClass !== void 0
          ? e.optionsSelectedClass
          : e.color !== void 0
          ? `text-${e.color}`
          : ""
      ),
      de = m(() => Ve(e.optionValue, "value")),
      J = m(() => Ve(e.optionLabel, "label")),
      Fe = m(() => Ve(e.optionDisable, "disable")),
      je = m(() => b.value.map((t) => de.value(t))),
      Pt = m(() => {
        const t = {
          onInput: wt,
          onChange: Z,
          onKeydown: st,
          onKeyup: St,
          onKeypress: Ke,
          onFocus: ut,
          onClick(k) {
            v === !0 && Je(k);
          },
        };
        return (
          (t.onCompositionstart =
            t.onCompositionupdate =
            t.onCompositionend =
              Z),
          t
        );
      });
    G(
      b,
      (t) => {
        (C = t),
          e.useInput === !0 &&
            e.fillInput === !0 &&
            e.multiple !== !0 &&
            q.innerLoading.value !== !0 &&
            ((r.value !== !0 && u.value !== !0) || D.value !== !0) &&
            (V !== !0 && Ze(), (r.value === !0 || u.value === !0) && B(""));
      },
      { immediate: !0 }
    ),
      G(() => e.fillInput, Ze),
      G(u, Ot),
      G(X, Ol);
    function nt(t) {
      return e.emitValue === !0 ? de.value(t) : t;
    }
    function Qe(t) {
      if (t > -1 && t < b.value.length)
        if (e.multiple === !0) {
          const k = e.modelValue.slice();
          a("remove", { index: t, value: k.splice(t, 1)[0] }),
            a("update:modelValue", k);
        } else a("update:modelValue", null);
    }
    function Vt(t) {
      Qe(t), q.focus();
    }
    function ot(t, k) {
      const y = nt(t);
      if (e.multiple !== !0) {
        e.fillInput === !0 && _(J.value(t), !0, !0), a("update:modelValue", y);
        return;
      }
      if (b.value.length === 0) {
        a("add", { index: 0, value: y }),
          a("update:modelValue", e.multiple === !0 ? [y] : y);
        return;
      }
      if (
        (k === !0 && it(t) === !0) ||
        (e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
      )
        return;
      const O = e.modelValue.slice();
      a("add", { index: O.length, value: y }),
        O.push(y),
        a("update:modelValue", O);
    }
    function Re(t, k) {
      if (q.editable.value !== !0 || t === void 0 || Fe.value(t) === !0) return;
      const y = de.value(t);
      if (e.multiple !== !0) {
        k !== !0 && (_(e.fillInput === !0 ? J.value(t) : "", !0, !0), Ie()),
          E.value !== null && E.value.focus(),
          (b.value.length === 0 || ct(de.value(b.value[0]), y) !== !0) &&
            a("update:modelValue", e.emitValue === !0 ? y : t);
        return;
      }
      if (
        ((v !== !0 || g.value === !0) && q.focus(), ut(), b.value.length === 0)
      ) {
        const $ = e.emitValue === !0 ? y : t;
        a("add", { index: 0, value: $ }),
          a("update:modelValue", e.multiple === !0 ? [$] : $);
        return;
      }
      const O = e.modelValue.slice(),
        N = je.value.findIndex(($) => ct($, y));
      if (N > -1) a("remove", { index: N, value: O.splice(N, 1)[0] });
      else {
        if (e.maxValues !== void 0 && O.length >= e.maxValues) return;
        const $ = e.emitValue === !0 ? y : t;
        a("add", { index: O.length, value: $ }), O.push($);
      }
      a("update:modelValue", O);
    }
    function Ae(t) {
      if (i.platform.is.desktop !== !0) return;
      const k = t > -1 && t < X.value ? t : -1;
      d.value !== k && (d.value = k);
    }
    function Ee(t = 1, k) {
      if (u.value === !0) {
        let y = d.value;
        do y = ll(y + t, -1, X.value - 1);
        while (y !== -1 && y !== d.value && Fe.value(e.options[y]) === !0);
        d.value !== y &&
          (Ae(y),
          Ce(y),
          k !== !0 &&
            e.useInput === !0 &&
            e.fillInput === !0 &&
            s(y >= 0 ? J.value(e.options[y]) : w));
      }
    }
    function Le(t, k) {
      const y = (O) => ct(de.value(O), t);
      return e.options.find(y) || k.find(y) || t;
    }
    function Ve(t, k) {
      const y = t !== void 0 ? t : k;
      return typeof y == "function"
        ? y
        : (O) => (O !== null && typeof O == "object" && y in O ? O[y] : O);
    }
    function it(t) {
      const k = de.value(t);
      return je.value.find((y) => ct(y, k)) !== void 0;
    }
    function ut(t) {
      e.useInput === !0 &&
        E.value !== null &&
        (t === void 0 ||
          (E.value === t.target && t.target.value === j.value)) &&
        E.value.select();
    }
    function rt(t) {
      jt(t, 27) === !0 && u.value === !0 && (Je(t), Ie(), Ze()), a("keyup", t);
    }
    function St(t) {
      const { value: k } = t.target;
      if (t.keyCode !== void 0) {
        rt(t);
        return;
      }
      if (
        ((t.target.value = ""),
        clearTimeout(h),
        Ze(),
        typeof k == "string" && k.length > 0)
      ) {
        const y = k.toLocaleLowerCase(),
          O = ($) => {
            const U = e.options.find(
              (ie) => $.value(ie).toLocaleLowerCase() === y
            );
            return U === void 0
              ? !1
              : (b.value.indexOf(U) === -1 ? Re(U) : Ie(), !0);
          },
          N = ($) => {
            O(de) !== !0 && (O(J) === !0 || $ === !0 || B(k, !0, () => N(!0)));
          };
        N();
      } else q.clearValue(t);
    }
    function Ke(t) {
      a("keypress", t);
    }
    function st(t) {
      if ((a("keydown", t), sa(t) === !0)) return;
      const k =
          c.value.length > 0 &&
          (e.newValueMode !== void 0 || e.onNewValue !== void 0),
        y =
          t.shiftKey !== !0 && e.multiple !== !0 && (d.value > -1 || k === !0);
      if (t.keyCode === 27) {
        gt(t);
        return;
      }
      if (t.keyCode === 9 && y === !1) {
        Xe();
        return;
      }
      if (t.target === void 0 || t.target.id !== q.targetUid.value) return;
      if (t.keyCode === 40 && q.innerLoading.value !== !0 && u.value === !1) {
        pe(t), Ye();
        return;
      }
      if (t.keyCode === 8 && e.hideSelected !== !0 && c.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0
          ? Qe(e.modelValue.length - 1)
          : e.multiple !== !0 &&
            e.modelValue !== null &&
            a("update:modelValue", null);
        return;
      }
      (t.keyCode === 35 || t.keyCode === 36) &&
        (typeof c.value != "string" || c.value.length === 0) &&
        (pe(t), (d.value = -1), Ee(t.keyCode === 36 ? 1 : -1, e.multiple)),
        (t.keyCode === 33 || t.keyCode === 34) &&
          ke.value !== void 0 &&
          (pe(t),
          (d.value = Math.max(
            -1,
            Math.min(
              X.value,
              d.value + (t.keyCode === 33 ? -1 : 1) * ke.value.view
            )
          )),
          Ee(t.keyCode === 33 ? 1 : -1, e.multiple)),
        (t.keyCode === 38 || t.keyCode === 40) &&
          (pe(t), Ee(t.keyCode === 38 ? -1 : 1, e.multiple));
      const O = X.value;
      if (
        ((H === void 0 || M < Date.now()) && (H = ""),
        O > 0 &&
          e.useInput !== !0 &&
          t.key !== void 0 &&
          t.key.length === 1 &&
          t.altKey === t.ctrlKey &&
          (t.keyCode !== 32 || H.length > 0))
      ) {
        u.value !== !0 && Ye(t);
        const N = t.key.toLocaleLowerCase(),
          $ = H.length === 1 && H[0] === N;
        (M = Date.now() + 1500), $ === !1 && (pe(t), (H += N));
        const U = new RegExp(
          "^" +
            H.split("")
              .map((Mt) => (ja.indexOf(Mt) > -1 ? "\\" + Mt : Mt))
              .join(".*"),
          "i"
        );
        let ie = d.value;
        if ($ === !0 || ie < 0 || U.test(J.value(e.options[ie])) !== !0)
          do ie = ll(ie + 1, -1, O - 1);
          while (
            ie !== d.value &&
            (Fe.value(e.options[ie]) === !0 ||
              U.test(J.value(e.options[ie])) !== !0)
          );
        d.value !== ie &&
          ye(() => {
            Ae(ie),
              Ce(ie),
              ie >= 0 &&
                e.useInput === !0 &&
                e.fillInput === !0 &&
                s(J.value(e.options[ie]));
          });
        return;
      }
      if (
        !(
          t.keyCode !== 13 &&
          (t.keyCode !== 32 || e.useInput === !0 || H !== "") &&
          (t.keyCode !== 9 || y === !1)
        )
      ) {
        if ((t.keyCode !== 9 && pe(t), d.value > -1 && d.value < O)) {
          Re(e.options[d.value]);
          return;
        }
        if (k === !0) {
          const N = ($, U) => {
            if (U) {
              if (sl(U) !== !0) return;
            } else U = e.newValueMode;
            if ($ == null) return;
            _("", e.multiple !== !0, !0),
              (U === "toggle" ? Re : ot)($, U === "add-unique"),
              e.multiple !== !0 && (E.value !== null && E.value.focus(), Ie());
          };
          if (
            (e.onNewValue !== void 0 ? a("new-value", c.value, N) : N(c.value),
            e.multiple !== !0)
          )
            return;
        }
        u.value === !0 ? Xe() : q.innerLoading.value !== !0 && Ye();
      }
    }
    function He() {
      return v === !0
        ? fe.value
        : te.value !== null && te.value.__qPortalInnerRef.value !== null
        ? te.value.__qPortalInnerRef.value
        : void 0;
    }
    function Bt() {
      return He();
    }
    function Tt() {
      return e.hideSelected === !0
        ? []
        : l["selected-item"] !== void 0
        ? Oe.value.map((t) => l["selected-item"](t)).slice()
        : l.selected !== void 0
        ? [].concat(l.selected())
        : e.useChips === !0
        ? Oe.value.map((t, k) =>
            f(
              pa,
              {
                key: "option-" + k,
                removable: q.editable.value === !0 && Fe.value(t.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: ce.value,
                onRemove() {
                  t.removeAtIndex(k);
                },
              },
              () =>
                f("span", {
                  class: "ellipsis",
                  [t.html === !0 ? "innerHTML" : "textContent"]: J.value(t.opt),
                })
            )
          )
        : [
            f("span", {
              [Y.value === !0 ? "innerHTML" : "textContent"]:
                e.displayValue !== void 0 ? e.displayValue : j.value,
            }),
          ];
    }
    function yt() {
      if (T.value === !0)
        return l["no-option"] !== void 0
          ? l["no-option"]({ inputValue: c.value })
          : void 0;
      const t =
        l.option !== void 0
          ? l.option
          : (y) =>
              f(Oa, { key: y.index, ...y.itemProps }, () =>
                f(Ma, () =>
                  f(Fa, () =>
                    f("span", {
                      [y.html === !0 ? "innerHTML" : "textContent"]: y.label,
                    })
                  )
                )
              );
      let k = se("div", xe.value.map(t));
      return (
        l["before-options"] !== void 0 && (k = l["before-options"]().concat(k)),
        Nt(l["after-options"], k)
      );
    }
    function Rt(t, k) {
      const y =
          k === !0 ? { ...Te.value, ...q.splitAttrs.attributes.value } : void 0,
        O = {
          ref: k === !0 ? E : void 0,
          key: "i_t",
          class: K.value,
          style: e.inputStyle,
          value: c.value !== void 0 ? c.value : "",
          type: "search",
          ...y,
          id: k === !0 ? q.targetUid.value : void 0,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          "data-autofocus": (t !== !0 && e.autofocus === !0) || void 0,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
          ...Pt.value,
        };
      return (
        t !== !0 &&
          v === !0 &&
          (Array.isArray(O.class) === !0
            ? (O.class = [...O.class, "no-pointer-events"])
            : (O.class += " no-pointer-events")),
        f("input", O)
      );
    }
    function wt(t) {
      clearTimeout(h),
        !(t && t.target && t.target.qComposing === !0) &&
          (s(t.target.value || ""),
          (V = !0),
          (w = c.value),
          q.focused.value !== !0 && (v !== !0 || g.value === !0) && q.focus(),
          e.onFilter !== void 0 &&
            (h = setTimeout(() => {
              B(c.value);
            }, e.inputDebounce)));
    }
    function s(t) {
      c.value !== t && ((c.value = t), a("input-value", t));
    }
    function _(t, k, y) {
      (V = y !== !0),
        e.useInput === !0 &&
          (s(t), (k === !0 || y !== !0) && (w = t), k !== !0 && B(t));
    }
    function B(t, k, y) {
      if (e.onFilter === void 0 || (k !== !0 && q.focused.value !== !0)) return;
      q.innerLoading.value === !0
        ? a("filter-abort")
        : ((q.innerLoading.value = !0), (n.value = !0)),
        t !== "" &&
          e.multiple !== !0 &&
          b.value.length > 0 &&
          V !== !0 &&
          t === J.value(b.value[0]) &&
          (t = "");
      const O = setTimeout(() => {
        u.value === !0 && (u.value = !1);
      }, 10);
      clearTimeout(x),
        (x = O),
        a(
          "filter",
          t,
          (N, $) => {
            (k === !0 || q.focused.value === !0) &&
              x === O &&
              (clearTimeout(x),
              typeof N == "function" && N(),
              (n.value = !1),
              ye(() => {
                (q.innerLoading.value = !1),
                  q.editable.value === !0 &&
                    (k === !0
                      ? u.value === !0 && Ie()
                      : u.value === !0
                      ? Ot(!0)
                      : (u.value = !0)),
                  typeof $ == "function" &&
                    ye(() => {
                      $(o);
                    }),
                  typeof y == "function" &&
                    ye(() => {
                      y(o);
                    });
              }));
          },
          () => {
            q.focused.value === !0 &&
              x === O &&
              (clearTimeout(x), (q.innerLoading.value = !1), (n.value = !1)),
              u.value === !0 && (u.value = !1);
          }
        );
    }
    function F() {
      return f(
        Wa,
        {
          ref: te,
          class: A.value,
          style: e.popupContentStyle,
          modelValue: u.value,
          fit: e.menuShrink !== !0,
          cover: e.optionsCover === !0 && T.value !== !0 && e.useInput !== !0,
          anchor: e.menuAnchor,
          self: e.menuSelf,
          offset: e.menuOffset,
          dark: p.value,
          noParentEvent: !0,
          noRefocus: !0,
          noFocus: !0,
          square: Me.value,
          transitionShow: e.transitionShow,
          transitionHide: e.transitionHide,
          transitionDuration: e.transitionDuration,
          separateClosePopup: !0,
          ...oe.value,
          onScrollPassive: qe,
          onBeforeShow: Kt,
          onBeforeHide: L,
          onShow: Q,
        },
        yt
      );
    }
    function L(t) {
      Ut(t), Xe();
    }
    function Q() {
      ne();
    }
    function W(t) {
      Je(t),
        E.value !== null && E.value.focus(),
        (g.value = !0),
        window.scrollTo(
          window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
          0
        );
    }
    function Se(t) {
      Je(t),
        ye(() => {
          g.value = !1;
        });
    }
    function le() {
      const t = [
        f(
          Ta,
          {
            class: `col-auto ${q.fieldClass.value}`,
            ...P.value,
            for: q.targetUid.value,
            dark: p.value,
            square: !0,
            loading: n.value,
            itemAligned: !1,
            filled: !0,
            stackLabel: c.value.length > 0,
            ...q.splitAttrs.listeners.value,
            onFocus: W,
            onBlur: Se,
          },
          {
            ...l,
            rawControl: () => q.getControl(!0),
            before: void 0,
            after: void 0,
          }
        ),
      ];
      return (
        u.value === !0 &&
          t.push(
            f(
              "div",
              {
                ref: fe,
                class: A.value + " scroll",
                style: e.popupContentStyle,
                ...oe.value,
                onClick: gt,
                onScrollPassive: qe,
              },
              yt()
            )
          ),
        f(
          ca,
          {
            ref: re,
            modelValue: r.value,
            position: e.useInput === !0 ? "top" : void 0,
            transitionShow: I,
            transitionHide: e.transitionHide,
            transitionDuration: e.transitionDuration,
            onBeforeShow: Kt,
            onBeforeHide: Ue,
            onHide: Ge,
            onShow: pt,
          },
          () =>
            f(
              "div",
              {
                class:
                  "q-select__dialog" +
                  (p.value === !0 ? " q-select__dialog--dark q-dark" : "") +
                  (g.value === !0 ? " q-select__dialog--focused" : ""),
              },
              t
            )
        )
      );
    }
    function Ue(t) {
      Ut(t),
        re.value !== null &&
          re.value.__updateRefocusTarget(
            q.rootRef.value.querySelector(
              ".q-field__native > [tabindex]:last-child"
            )
          ),
        (q.focused.value = !1);
    }
    function Ge(t) {
      Ie(), q.focused.value === !1 && a("blur", t), Ze();
    }
    function pt() {
      const t = document.activeElement;
      (t === null || t.id !== q.targetUid.value) &&
        E.value !== null &&
        E.value !== t &&
        E.value.focus(),
        ne();
    }
    function Xe() {
      r.value !== !0 &&
        ((d.value = -1),
        u.value === !0 && (u.value = !1),
        q.focused.value === !1 &&
          (clearTimeout(x),
          (x = void 0),
          q.innerLoading.value === !0 &&
            (a("filter-abort"), (q.innerLoading.value = !1), (n.value = !1))));
    }
    function Ye(t) {
      q.editable.value === !0 &&
        (v === !0
          ? (q.onControlFocusin(t),
            (r.value = !0),
            ye(() => {
              q.focus();
            }))
          : q.focus(),
        e.onFilter !== void 0
          ? B(c.value)
          : (T.value !== !0 || l["no-option"] !== void 0) && (u.value = !0));
    }
    function Ie() {
      (r.value = !1), Xe();
    }
    function Ze() {
      e.useInput === !0 &&
        _(
          (e.multiple !== !0 &&
            e.fillInput === !0 &&
            b.value.length > 0 &&
            J.value(b.value[0])) ||
            "",
          !0,
          !0
        );
    }
    function Ot(t) {
      let k = -1;
      if (t === !0) {
        if (b.value.length > 0) {
          const y = de.value(b.value[0]);
          k = e.options.findIndex((O) => ct(de.value(O), y));
        }
        ge(k);
      }
      Ae(k);
    }
    function Ol(t, k) {
      u.value === !0 &&
        q.innerLoading.value === !1 &&
        (ge(-1, !0),
        ye(() => {
          u.value === !0 &&
            q.innerLoading.value === !1 &&
            (t > k ? ge() : Ot(!0));
        }));
    }
    function Qt() {
      r.value === !1 && te.value !== null && te.value.updatePosition();
    }
    function Kt(t) {
      t !== void 0 && Je(t),
        a("popup-show", t),
        (q.hasPopupOpen = !0),
        q.onControlFocusin(t);
    }
    function Ut(t) {
      t !== void 0 && Je(t),
        a("popup-hide", t),
        (q.hasPopupOpen = !1),
        q.onControlFocusout(t);
    }
    function Gt() {
      (v =
        i.platform.is.mobile !== !0 && e.behavior !== "dialog"
          ? !1
          : e.behavior !== "menu" &&
            (e.useInput === !0
              ? l["no-option"] !== void 0 ||
                e.onFilter !== void 0 ||
                T.value === !1
              : !0)),
        (I =
          i.platform.is.ios === !0 && v === !0 && e.useInput === !0
            ? "fade"
            : e.transitionShow);
    }
    return (
      ua(Gt),
      ra(Qt),
      Gt(),
      We(() => {
        clearTimeout(h);
      }),
      Object.assign(o, {
        showPopup: Ye,
        hidePopup: Ie,
        removeAtIndex: Qe,
        add: ot,
        toggleOption: Re,
        getOptionIndex: () => d.value,
        setOptionIndex: Ae,
        moveOptionSelection: Ee,
        filter: B,
        updateMenuPosition: Qt,
        updateInputValue: _,
        isOptionSelected: it,
        getEmittingOptionValue: nt,
        isOptionDisabled: (...t) => Fe.value.apply(null, t) === !0,
        getOptionValue: (...t) => de.value.apply(null, t),
        getOptionLabel: (...t) => J.value.apply(null, t),
      }),
      Object.assign(q, {
        innerValue: b,
        fieldClass: m(
          () =>
            `q-select q-field--auto-height q-select--with${
              e.useInput !== !0 ? "out" : ""
            }-input q-select--with${
              e.useChips !== !0 ? "out" : ""
            }-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
        ),
        inputRef: R,
        targetRef: E,
        hasValue: D,
        showPopup: Ye,
        floatingLabel: m(
          () =>
            (e.hideSelected !== !0 && D.value === !0) ||
            typeof c.value == "number" ||
            c.value.length > 0 ||
            Jt(e.displayValue)
        ),
        getControlChild: () => {
          if (
            q.editable.value !== !1 &&
            (r.value === !0 || T.value !== !0 || l["no-option"] !== void 0)
          )
            return v === !0 ? le() : F();
          q.hasPopupOpen === !0 && (q.hasPopupOpen = !1);
        },
        controlEvents: {
          onFocusin(t) {
            q.onControlFocusin(t);
          },
          onFocusout(t) {
            q.onControlFocusout(t, () => {
              Ze(), Xe();
            });
          },
          onClick(t) {
            if ((gt(t), v !== !0 && u.value === !0)) {
              Xe(), E.value !== null && E.value.focus();
              return;
            }
            Ye(t);
          },
        },
        getControl: (t) => {
          const k = Tt(),
            y = t === !0 || r.value !== !0 || v !== !0;
          if (e.useInput === !0) k.push(Rt(t, y));
          else if (q.editable.value === !0) {
            const N = y === !0 ? Te.value : void 0;
            k.push(
              f("input", {
                ref: y === !0 ? E : void 0,
                key: "d_t",
                class: "q-select__focus-target",
                id: y === !0 ? q.targetUid.value : void 0,
                readonly: !0,
                "data-autofocus": (t !== !0 && e.autofocus === !0) || void 0,
                ...N,
                onKeydown: st,
                onKeyup: rt,
                onKeypress: Ke,
              })
            ),
              y === !0 &&
                typeof e.autocomplete == "string" &&
                e.autocomplete.length > 0 &&
                k.push(
                  f("input", {
                    class: "q-select__autocomplete-input",
                    autocomplete: e.autocomplete,
                    tabindex: -1,
                    onKeyup: St,
                  })
                );
          }
          if (be.value !== void 0 && e.disable !== !0 && je.value.length > 0) {
            const N = je.value.map(($) =>
              f("option", { value: $, selected: !0 })
            );
            k.push(
              f(
                "select",
                { class: "hidden", name: be.value, multiple: e.multiple },
                N
              )
            );
          }
          const O =
            e.useInput === !0 || y !== !0
              ? void 0
              : q.splitAttrs.attributes.value;
          return f(
            "div",
            { class: "q-field__native row items-center", ...O },
            k
          );
        },
        getInnerAppend: () =>
          e.loading !== !0 && n.value !== !0 && e.hideDropdownIcon !== !0
            ? [
                f(tt, {
                  class:
                    "q-select__dropdown-icon" +
                    (u.value === !0 ? " rotate-180" : ""),
                  name: Pe.value,
                }),
              ]
            : null,
      }),
      Sl(q)
    );
  },
});
const Ua = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function cl(e, l, a) {
  return {
    transform:
      l === !0
        ? `translateX(${a.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)`
        : `scale3d(${e},1,1)`,
  };
}
var Ga = ue({
  name: "QLinearProgress",
  props: {
    ...De,
    ...wl,
    value: { type: Number, default: 0 },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: { type: [String, Number], default: 2100 },
    instantFeedback: Boolean,
  },
  setup(e, { slots: l }) {
    const { proxy: a } = ve(),
      o = Ne(e, a.$q),
      i = _l(e, Ua),
      u = m(() => e.indeterminate === !0 || e.query === !0),
      r = m(() => e.reverse !== e.query),
      d = m(() => ({
        ...(i.value !== null ? i.value : {}),
        "--q-linear-progress-speed": `${e.animationSpeed}ms`,
      })),
      c = m(
        () =>
          "q-linear-progress" +
          (e.color !== void 0 ? ` text-${e.color}` : "") +
          (e.reverse === !0 || e.query === !0
            ? " q-linear-progress--reverse"
            : "") +
          (e.rounded === !0 ? " rounded-borders" : "")
      ),
      g = m(() => cl(e.buffer !== void 0 ? e.buffer : 1, r.value, a.$q)),
      n = m(
        () =>
          `q-linear-progress__track absolute-full q-linear-progress__track--with${
            e.instantFeedback === !0 ? "out" : ""
          }-transition q-linear-progress__track--${
            o.value === !0 ? "dark" : "light"
          }` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
      ),
      h = m(() => cl(u.value === !0 ? 1 : e.value, r.value, a.$q)),
      C = m(
        () =>
          `q-linear-progress__model absolute-full q-linear-progress__model--with${
            e.instantFeedback === !0 ? "out" : ""
          }-transition q-linear-progress__model--${
            u.value === !0 ? "in" : ""
          }determinate`
      ),
      v = m(() => ({ width: `${e.value * 100}%` })),
      V = m(
        () =>
          `q-linear-progress__stripe absolute-${
            e.reverse === !0 ? "right" : "left"
          }`
      );
    return () => {
      const x = [
        f("div", { class: n.value, style: g.value }),
        f("div", { class: C.value, style: h.value }),
      ];
      return (
        e.stripe === !0 &&
          u.value === !1 &&
          x.push(f("div", { class: V.value, style: v.value })),
        f(
          "div",
          {
            class: c.value,
            style: d.value,
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 1,
            "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value,
          },
          Nt(l.default, x)
        )
      );
    };
  },
});
let ft = 0;
const Xa = { fullscreen: Boolean, noRouteFullscreenExit: Boolean },
  Ya = ["update:fullscreen", "fullscreen"];
function Za() {
  const e = ve(),
    { props: l, emit: a, proxy: o } = e;
  let i, u, r;
  const d = z(!1);
  va(e) === !0 &&
    G(
      () => o.$route.fullPath,
      () => {
        l.noRouteFullscreenExit !== !0 && n();
      }
    ),
    G(
      () => l.fullscreen,
      (h) => {
        d.value !== h && c();
      }
    ),
    G(d, (h) => {
      a("update:fullscreen", h), a("fullscreen", h);
    });
  function c() {
    d.value === !0 ? n() : g();
  }
  function g() {
    d.value !== !0 &&
      ((d.value = !0),
      (r = o.$el.parentNode),
      r.replaceChild(u, o.$el),
      document.body.appendChild(o.$el),
      ft++,
      ft === 1 && document.body.classList.add("q-body--fullscreen-mixin"),
      (i = { handler: n }),
      el.add(i));
  }
  function n() {
    d.value === !0 &&
      (i !== void 0 && (el.remove(i), (i = void 0)),
      r.replaceChild(o.$el, u),
      (d.value = !1),
      (ft = Math.max(0, ft - 1)),
      ft === 0 &&
        (document.body.classList.remove("q-body--fullscreen-mixin"),
        o.$el.scrollIntoView !== void 0 &&
          setTimeout(() => {
            o.$el.scrollIntoView();
          })));
  }
  return (
    Dt(() => {
      u = document.createElement("span");
    }),
    bt(() => {
      l.fullscreen === !0 && g();
    }),
    We(n),
    Object.assign(o, {
      toggleFullscreen: c,
      setFullscreen: g,
      exitFullscreen: n,
    }),
    { inFullscreen: d, toggleFullscreen: c }
  );
}
function Ja(e, l) {
  return new Date(e) - new Date(l);
}
const en = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (e) => e === "ad" || e === "da",
    default: "ad",
  },
};
function tn(e, l, a, o) {
  const i = m(() => {
      const { sortBy: d } = l.value;
      return (d && a.value.find((c) => c.name === d)) || null;
    }),
    u = m(() =>
      e.sortMethod !== void 0
        ? e.sortMethod
        : (d, c, g) => {
            const n = a.value.find((v) => v.name === c);
            if (n === void 0 || n.field === void 0) return d;
            const h = g === !0 ? -1 : 1,
              C =
                typeof n.field == "function"
                  ? (v) => n.field(v)
                  : (v) => v[n.field];
            return d.sort((v, V) => {
              let x = C(v),
                w = C(V);
              return x == null
                ? -1 * h
                : w == null
                ? 1 * h
                : n.sort !== void 0
                ? n.sort(x, w, v, V) * h
                : zt(x) === !0 && zt(w) === !0
                ? (x - w) * h
                : tl(x) === !0 && tl(w) === !0
                ? Ja(x, w) * h
                : typeof x == "boolean" && typeof w == "boolean"
                ? (x - w) * h
                : (([x, w] = [x, w].map((I) =>
                    (I + "").toLocaleString().toLowerCase()
                  )),
                  x < w ? -1 * h : x === w ? 0 : h);
            });
          }
    );
  function r(d) {
    let c = e.columnSortOrder;
    if (fa(d) === !0) d.sortOrder && (c = d.sortOrder), (d = d.name);
    else {
      const h = a.value.find((C) => C.name === d);
      h !== void 0 && h.sortOrder && (c = h.sortOrder);
    }
    let { sortBy: g, descending: n } = l.value;
    g !== d
      ? ((g = d), (n = c === "da"))
      : e.binaryStateSort === !0
      ? (n = !n)
      : n === !0
      ? c === "ad"
        ? (g = null)
        : (n = !1)
      : c === "ad"
      ? (n = !0)
      : (g = null),
      o({ sortBy: g, descending: n, page: 1 });
  }
  return { columnToSort: i, computedSortMethod: u, sort: r };
}
const ln = { filter: [String, Object], filterMethod: Function };
function an(e, l) {
  const a = m(() =>
    e.filterMethod !== void 0
      ? e.filterMethod
      : (o, i, u, r) => {
          const d = i ? i.toLowerCase() : "";
          return o.filter((c) =>
            u.some((g) => {
              const n = r(g, c) + "";
              return (
                (n === "undefined" || n === "null"
                  ? ""
                  : n.toLowerCase()
                ).indexOf(d) !== -1
              );
            })
          );
        }
  );
  return (
    G(
      () => e.filter,
      () => {
        ye(() => {
          l({ page: 1 }, !0);
        });
      },
      { deep: !0 }
    ),
    { computedFilterMethod: a }
  );
}
function nn(e, l) {
  for (const a in l) if (l[a] !== e[a]) return !1;
  return !0;
}
function dl(e) {
  return (
    e.page < 1 && (e.page = 1),
    e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0),
    e
  );
}
const on = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0],
  },
  "onUpdate:pagination": [Function, Array],
};
function un(e, l) {
  const { props: a, emit: o } = e,
    i = z(
      Object.assign(
        {
          sortBy: null,
          descending: !1,
          page: 1,
          rowsPerPage:
            a.rowsPerPageOptions.length > 0 ? a.rowsPerPageOptions[0] : 5,
        },
        a.pagination
      )
    ),
    u = m(() => {
      const n =
        a["onUpdate:pagination"] !== void 0
          ? { ...i.value, ...a.pagination }
          : i.value;
      return dl(n);
    }),
    r = m(() => u.value.rowsNumber !== void 0);
  function d(n) {
    c({ pagination: n, filter: a.filter });
  }
  function c(n = {}) {
    ye(() => {
      o("request", {
        pagination: n.pagination || u.value,
        filter: n.filter || a.filter,
        getCellValue: l,
      });
    });
  }
  function g(n, h) {
    const C = dl({ ...u.value, ...n });
    if (nn(u.value, C) === !0) {
      r.value === !0 && h === !0 && d(C);
      return;
    }
    if (r.value === !0) {
      d(C);
      return;
    }
    a.pagination !== void 0 && a["onUpdate:pagination"] !== void 0
      ? o("update:pagination", C)
      : (i.value = C);
  }
  return {
    innerPagination: i,
    computedPagination: u,
    isServerSide: r,
    requestServerInteraction: c,
    setPagination: g,
  };
}
function rn(e, l, a, o, i, u) {
  const {
      props: r,
      emit: d,
      proxy: { $q: c },
    } = e,
    g = m(() => (o.value === !0 ? a.value.rowsNumber || 0 : u.value)),
    n = m(() => {
      const { page: R, rowsPerPage: E } = a.value;
      return (R - 1) * E;
    }),
    h = m(() => {
      const { page: R, rowsPerPage: E } = a.value;
      return R * E;
    }),
    C = m(() => a.value.page === 1),
    v = m(() =>
      a.value.rowsPerPage === 0
        ? 1
        : Math.max(1, Math.ceil(g.value / a.value.rowsPerPage))
    ),
    V = m(() => (h.value === 0 ? !0 : a.value.page >= v.value)),
    x = m(() =>
      (r.rowsPerPageOptions.includes(l.value.rowsPerPage)
        ? r.rowsPerPageOptions
        : [l.value.rowsPerPage].concat(r.rowsPerPageOptions)
      ).map((E) => ({
        label: E === 0 ? c.lang.table.allRows : "" + E,
        value: E,
      }))
    );
  G(v, (R, E) => {
    if (R === E) return;
    const te = a.value.page;
    R && !te ? i({ page: 1 }) : R < te && i({ page: R });
  });
  function w() {
    i({ page: 1 });
  }
  function I() {
    const { page: R } = a.value;
    R > 1 && i({ page: R - 1 });
  }
  function H() {
    const { page: R, rowsPerPage: E } = a.value;
    h.value > 0 && R * E < g.value && i({ page: R + 1 });
  }
  function M() {
    i({ page: v.value });
  }
  return (
    r["onUpdate:pagination"] !== void 0 &&
      d("update:pagination", { ...a.value }),
    {
      firstRowIndex: n,
      lastRowIndex: h,
      isFirstPage: C,
      isLastPage: V,
      pagesNumber: v,
      computedRowsPerPageOptions: x,
      computedRowsNumber: g,
      firstPage: w,
      prevPage: I,
      nextPage: H,
      lastPage: M,
    }
  );
}
const sn = {
    selection: {
      type: String,
      default: "none",
      validator: (e) => ["single", "multiple", "none"].includes(e),
    },
    selected: { type: Array, default: () => [] },
  },
  cn = ["update:selected", "selection"];
function dn(e, l, a, o) {
  const i = m(() => {
      const V = {};
      return (
        e.selected.map(o.value).forEach((x) => {
          V[x] = !0;
        }),
        V
      );
    }),
    u = m(() => e.selection !== "none"),
    r = m(() => e.selection === "single"),
    d = m(() => e.selection === "multiple"),
    c = m(
      () =>
        a.value.length > 0 && a.value.every((V) => i.value[o.value(V)] === !0)
    ),
    g = m(
      () => c.value !== !0 && a.value.some((V) => i.value[o.value(V)] === !0)
    ),
    n = m(() => e.selected.length);
  function h(V) {
    return i.value[V] === !0;
  }
  function C() {
    l("update:selected", []);
  }
  function v(V, x, w, I) {
    l("selection", { rows: x, added: w, keys: V, evt: I });
    const H =
      r.value === !0
        ? w === !0
          ? x
          : []
        : w === !0
        ? e.selected.concat(x)
        : e.selected.filter((M) => V.includes(o.value(M)) === !1);
    l("update:selected", H);
  }
  return {
    hasSelectionMode: u,
    singleSelection: r,
    multipleSelection: d,
    allRowsSelected: c,
    someRowsSelected: g,
    rowsSelectedNumber: n,
    isRowSelected: h,
    clearSelection: C,
    updateSelection: v,
  };
}
function vl(e) {
  return Array.isArray(e) ? e.slice() : [];
}
const vn = { expanded: Array },
  fn = ["update:expanded"];
function mn(e, l) {
  const a = z(vl(e.expanded));
  G(
    () => e.expanded,
    (r) => {
      a.value = vl(r);
    }
  );
  function o(r) {
    return a.value.includes(r);
  }
  function i(r) {
    e.expanded !== void 0 ? l("update:expanded", r) : (a.value = r);
  }
  function u(r, d) {
    const c = a.value.slice(),
      g = c.indexOf(r);
    d === !0
      ? g === -1 && (c.push(r), i(c))
      : g !== -1 && (c.splice(g, 1), i(c));
  }
  return { isRowExpanded: o, setExpanded: i, updateExpanded: u };
}
const gn = { visibleColumns: Array };
function hn(e, l, a) {
  const o = m(() => {
      if (e.columns !== void 0) return e.columns;
      const d = e.rows[0];
      return d !== void 0
        ? Object.keys(d).map((c) => ({
            name: c,
            label: c.toUpperCase(),
            field: c,
            align: zt(d[c]) ? "right" : "left",
            sortable: !0,
          }))
        : [];
    }),
    i = m(() => {
      const { sortBy: d, descending: c } = l.value;
      return (
        e.visibleColumns !== void 0
          ? o.value.filter(
              (n) =>
                n.required === !0 || e.visibleColumns.includes(n.name) === !0
            )
          : o.value
      ).map((n) => {
        const h = n.align || "right",
          C = `text-${h}`;
        return {
          ...n,
          align: h,
          __iconClass: `q-table__sort-icon q-table__sort-icon--${h}`,
          __thClass:
            C +
            (n.headerClasses !== void 0 ? " " + n.headerClasses : "") +
            (n.sortable === !0 ? " sortable" : "") +
            (n.name === d ? ` sorted ${c === !0 ? "sort-desc" : ""}` : ""),
          __tdStyle:
            n.style !== void 0
              ? typeof n.style != "function"
                ? () => n.style
                : n.style
              : () => null,
          __tdClass:
            n.classes !== void 0
              ? typeof n.classes != "function"
                ? () => C + " " + n.classes
                : (v) => C + " " + n.classes(v)
              : () => C,
        };
      });
    }),
    u = m(() => {
      const d = {};
      return (
        i.value.forEach((c) => {
          d[c.name] = c;
        }),
        d
      );
    }),
    r = m(() =>
      e.tableColspan !== void 0
        ? e.tableColspan
        : i.value.length + (a.value === !0 ? 1 : 0)
    );
  return {
    colList: o,
    computedCols: i,
    computedColsMap: u,
    computedColspan: r,
  };
}
const kt = "q-table__bottom row items-center",
  pl = {};
Vl.forEach((e) => {
  pl[e] = {};
});
var bn = ue({
  name: "QTable",
  props: {
    rows: { type: Array, default: () => [] },
    rowKey: { type: [String, Function], default: "id" },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e),
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: { default: void 0 },
    ...pl,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: { type: String, default: "grey-8" },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...De,
    ...Xa,
    ...gn,
    ...ln,
    ...on,
    ...vn,
    ...sn,
    ...en,
  },
  emits: ["request", "virtual-scroll", ...Ya, ...fn, ...cn],
  setup(e, { slots: l, emit: a }) {
    const o = ve(),
      {
        proxy: { $q: i },
      } = o,
      u = Ne(e, i),
      { inFullscreen: r, toggleFullscreen: d } = Za(),
      c = m(() =>
        typeof e.rowKey == "function" ? e.rowKey : (s) => s[e.rowKey]
      ),
      g = z(null),
      n = z(null),
      h = m(() => e.grid !== !0 && e.virtualScroll === !0),
      C = m(
        () =>
          " q-table__card" +
          (u.value === !0 ? " q-table__card--dark q-dark" : "") +
          (e.square === !0 ? " q-table--square" : "") +
          (e.flat === !0 ? " q-table--flat" : "") +
          (e.bordered === !0 ? " q-table--bordered" : "")
      ),
      v = m(
        () =>
          `q-table__container q-table--${e.separator}-separator column no-wrap` +
          (e.grid === !0 ? " q-table--grid" : C.value) +
          (u.value === !0 ? " q-table--dark" : "") +
          (e.dense === !0 ? " q-table--dense" : "") +
          (e.wrapCells === !1 ? " q-table--no-wrap" : "") +
          (r.value === !0 ? " fullscreen scroll" : "")
      ),
      V = m(() => v.value + (e.loading === !0 ? " q-table--loading" : ""));
    G(
      () =>
        e.tableStyle +
        e.tableClass +
        e.tableHeaderStyle +
        e.tableHeaderClass +
        v.value,
      () => {
        h.value === !0 && n.value !== null && n.value.reset();
      }
    );
    const {
        innerPagination: x,
        computedPagination: w,
        isServerSide: I,
        requestServerInteraction: H,
        setPagination: M,
      } = un(o, Le),
      { computedFilterMethod: R } = an(e, M),
      { isRowExpanded: E, setExpanded: te, updateExpanded: re } = mn(e, a),
      fe = m(() => {
        let s = e.rows;
        if (I.value === !0 || s.length === 0) return s;
        const { sortBy: _, descending: B } = w.value;
        return (
          e.filter && (s = R.value(s, e.filter, b.value, Le)),
          D.value !== null && (s = K.value(e.rows === s ? s.slice() : s, _, B)),
          s
        );
      }),
      be = m(() => fe.value.length),
      Z = m(() => {
        let s = fe.value;
        if (I.value === !0) return s;
        const { rowsPerPage: _ } = w.value;
        return (
          _ !== 0 &&
            (T.value === 0 && e.rows !== s
              ? s.length > j.value && (s = s.slice(0, j.value))
              : (s = s.slice(T.value, j.value))),
          s
        );
      }),
      {
        hasSelectionMode: X,
        singleSelection: _e,
        multipleSelection: me,
        allRowsSelected: ke,
        someRowsSelected: ge,
        rowsSelectedNumber: se,
        isRowSelected: qe,
        clearSelection: Ce,
        updateSelection: ne,
      } = dn(e, a, Z, c),
      {
        colList: q,
        computedCols: b,
        computedColsMap: P,
        computedColspan: p,
      } = hn(e, w, X),
      { columnToSort: D, computedSortMethod: K, sort: A } = tn(e, w, q, M),
      {
        firstRowIndex: T,
        lastRowIndex: j,
        isFirstPage: S,
        isLastPage: Y,
        pagesNumber: ce,
        computedRowsPerPageOptions: Te,
        computedRowsNumber: oe,
        firstPage: Oe,
        prevPage: xe,
        nextPage: Pe,
        lastPage: Me,
      } = rn(o, x, w, I, M, be),
      ze = m(() => Z.value.length === 0),
      de = m(() => {
        const s = {};
        return (
          Vl.forEach((_) => {
            s[_] = e[_];
          }),
          s.virtualScrollItemSize === void 0 &&
            (s.virtualScrollItemSize = e.dense === !0 ? 28 : 48),
          s
        );
      });
    function J() {
      h.value === !0 && n.value.reset();
    }
    function Fe() {
      if (e.grid === !0) return wt();
      const s = e.hideHeader !== !0 ? rt : null;
      if (h.value === !0) {
        const B = l["top-row"],
          F = l["bottom-row"],
          L = { default: (Q) => Qe(Q.item, l.body, Q.index) };
        if (B !== void 0) {
          const Q = f("tbody", B({ cols: b.value }));
          L.before = s === null ? () => Q : () => [s()].concat(Q);
        } else s !== null && (L.before = s);
        return (
          F !== void 0 && (L.after = () => f("tbody", F({ cols: b.value }))),
          f(
            Ba,
            {
              ref: n,
              class: e.tableClass,
              style: e.tableStyle,
              ...de.value,
              scrollTarget: e.virtualScrollTarget,
              items: Z.value,
              type: "__qtable",
              tableColspan: p.value,
              onVirtualScroll: Pt,
            },
            L
          )
        );
      }
      const _ = [Vt()];
      return (
        s !== null && _.unshift(s()),
        Cl(
          {
            class: ["q-table__middle scroll", e.tableClass],
            style: e.tableStyle,
          },
          _
        )
      );
    }
    function je(s, _) {
      if (n.value !== null) {
        n.value.scrollTo(s, _);
        return;
      }
      s = parseInt(s, 10);
      const B = g.value.querySelector(`tbody tr:nth-of-type(${s + 1})`);
      if (B !== null) {
        const F = g.value.querySelector(".q-table__middle.scroll"),
          L = B.offsetTop - e.virtualScrollStickySizeStart,
          Q = L < F.scrollTop ? "decrease" : "increase";
        (F.scrollTop = L),
          a("virtual-scroll", {
            index: s,
            from: 0,
            to: x.value.rowsPerPage - 1,
            direction: Q,
          });
      }
    }
    function Pt(s) {
      a("virtual-scroll", s);
    }
    function nt() {
      return [
        f(Ga, {
          class: "q-table__linear-progress",
          color: e.color,
          dark: u.value,
          indeterminate: !0,
          trackColor: "transparent",
        }),
      ];
    }
    function Qe(s, _, B) {
      const F = c.value(s),
        L = qe(F);
      if (_ !== void 0)
        return _(
          ot({ key: F, row: s, pageIndex: B, __trClass: L ? "selected" : "" })
        );
      const Q = l["body-cell"],
        W = b.value.map((le) => {
          const Ue = l[`body-cell-${le.name}`],
            Ge = Ue !== void 0 ? Ue : Q;
          return Ge !== void 0
            ? Ge(Re({ key: F, row: s, pageIndex: B, col: le }))
            : f(
                "td",
                { class: le.__tdClass(s), style: le.__tdStyle(s) },
                Le(le, s)
              );
        });
      if (X.value === !0) {
        const le = l["body-selection"],
          Ue =
            le !== void 0
              ? le(Ae({ key: F, row: s, pageIndex: B }))
              : [
                  f(Ft, {
                    modelValue: L,
                    color: e.color,
                    dark: u.value,
                    dense: e.dense,
                    "onUpdate:modelValue": (Ge, pt) => {
                      ne([F], [s], Ge, pt);
                    },
                  }),
                ];
        W.unshift(f("td", { class: "q-table--col-auto-width" }, Ue));
      }
      const Se = { key: F, class: { selected: L } };
      return (
        e.onRowClick !== void 0 &&
          ((Se.class["cursor-pointer"] = !0),
          (Se.onClick = (le) => {
            a("RowClick", le, s, B);
          })),
        e.onRowDblclick !== void 0 &&
          ((Se.class["cursor-pointer"] = !0),
          (Se.onDblclick = (le) => {
            a("RowDblclick", le, s, B);
          })),
        e.onRowContextmenu !== void 0 &&
          ((Se.class["cursor-pointer"] = !0),
          (Se.onContextmenu = (le) => {
            a("RowContextmenu", le, s, B);
          })),
        f("tr", Se, W)
      );
    }
    function Vt() {
      const s = l.body,
        _ = l["top-row"],
        B = l["bottom-row"];
      let F = Z.value.map((L, Q) => Qe(L, s, Q));
      return (
        _ !== void 0 && (F = _({ cols: b.value }).concat(F)),
        B !== void 0 && (F = F.concat(B({ cols: b.value }))),
        f("tbody", F)
      );
    }
    function ot(s) {
      return (
        Ee(s),
        (s.cols = s.cols.map((_) => dt({ ..._ }, "value", () => Le(_, s.row)))),
        s
      );
    }
    function Re(s) {
      return Ee(s), dt(s, "value", () => Le(s.col, s.row)), s;
    }
    function Ae(s) {
      return Ee(s), s;
    }
    function Ee(s) {
      Object.assign(s, {
        cols: b.value,
        colsMap: P.value,
        sort: A,
        rowIndex: T.value + s.pageIndex,
        color: e.color,
        dark: u.value,
        dense: e.dense,
      }),
        X.value === !0 &&
          dt(
            s,
            "selected",
            () => qe(s.key),
            (_, B) => {
              ne([s.key], [s.row], _, B);
            }
          ),
        dt(
          s,
          "expand",
          () => E(s.key),
          (_) => {
            re(s.key, _);
          }
        );
    }
    function Le(s, _) {
      const B = typeof s.field == "function" ? s.field(_) : _[s.field];
      return s.format !== void 0 ? s.format(B, _) : B;
    }
    const Ve = m(() => ({
      pagination: w.value,
      pagesNumber: ce.value,
      isFirstPage: S.value,
      isLastPage: Y.value,
      firstPage: Oe,
      prevPage: xe,
      nextPage: Pe,
      lastPage: Me,
      inFullscreen: r.value,
      toggleFullscreen: d,
    }));
    function it() {
      const s = l.top,
        _ = l["top-left"],
        B = l["top-right"],
        F = l["top-selection"],
        L = X.value === !0 && F !== void 0 && se.value > 0,
        Q = "q-table__top relative-position row items-center";
      if (s !== void 0) return f("div", { class: Q }, [s(Ve.value)]);
      let W;
      if (
        (L === !0
          ? (W = F(Ve.value).slice())
          : ((W = []),
            _ !== void 0
              ? W.push(f("div", { class: "q-table-control" }, [_(Ve.value)]))
              : e.title &&
                W.push(
                  f("div", { class: "q-table__control" }, [
                    f(
                      "div",
                      { class: ["q-table__title", e.titleClass] },
                      e.title
                    ),
                  ])
                )),
        B !== void 0 &&
          (W.push(f("div", { class: "q-table__separator col" })),
          W.push(f("div", { class: "q-table__control" }, [B(Ve.value)]))),
        W.length !== 0)
      )
        return f("div", { class: Q }, W);
    }
    const ut = m(() => (ge.value === !0 ? null : ke.value));
    function rt() {
      const s = St();
      return (
        e.loading === !0 &&
          l.loading === void 0 &&
          s.push(
            f("tr", { class: "q-table__progress" }, [
              f("th", { class: "relative-position", colspan: p.value }, nt()),
            ])
          ),
        f("thead", s)
      );
    }
    function St() {
      const s = l.header,
        _ = l["header-cell"];
      if (s !== void 0) return s(Ke({ header: !0 })).slice();
      const B = b.value.map((F) => {
        const L = l[`header-cell-${F.name}`],
          Q = L !== void 0 ? L : _,
          W = Ke({ col: F });
        return Q !== void 0
          ? Q(W)
          : f(wa, { key: F.name, props: W }, () => F.label);
      });
      if (_e.value === !0 && e.grid !== !0)
        B.unshift(f("th", { class: "q-table--col-auto-width" }, " "));
      else if (me.value === !0) {
        const F = l["header-selection"],
          L =
            F !== void 0
              ? F(Ke({}))
              : [
                  f(Ft, {
                    color: e.color,
                    modelValue: ut.value,
                    dark: u.value,
                    dense: e.dense,
                    "onUpdate:modelValue": st,
                  }),
                ];
        B.unshift(f("th", { class: "q-table--col-auto-width" }, L));
      }
      return [
        f("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, B),
      ];
    }
    function Ke(s) {
      return (
        Object.assign(s, {
          cols: b.value,
          sort: A,
          colsMap: P.value,
          color: e.color,
          dark: u.value,
          dense: e.dense,
        }),
        me.value === !0 && dt(s, "selected", () => ut.value, st),
        s
      );
    }
    function st(s) {
      ge.value === !0 && (s = !1), ne(Z.value.map(c.value), Z.value, s);
    }
    const He = m(() => {
      const s = [
        e.iconFirstPage || i.iconSet.table.firstPage,
        e.iconPrevPage || i.iconSet.table.prevPage,
        e.iconNextPage || i.iconSet.table.nextPage,
        e.iconLastPage || i.iconSet.table.lastPage,
      ];
      return i.lang.rtl === !0 ? s.reverse() : s;
    });
    function Bt() {
      if (e.hideBottom === !0) return;
      if (ze.value === !0) {
        if (e.hideNoData === !0) return;
        const B =
            e.loading === !0
              ? e.loadingLabel || i.lang.table.loading
              : e.filter
              ? e.noResultsLabel || i.lang.table.noResults
              : e.noDataLabel || i.lang.table.noData,
          F = l["no-data"],
          L =
            F !== void 0
              ? [
                  F({
                    message: B,
                    icon: i.iconSet.table.warning,
                    filter: e.filter,
                  }),
                ]
              : [
                  f(tt, {
                    class: "q-table__bottom-nodata-icon",
                    name: i.iconSet.table.warning,
                  }),
                  B,
                ];
        return f("div", { class: kt + " q-table__bottom--nodata" }, L);
      }
      const s = l.bottom;
      if (s !== void 0) return f("div", { class: kt }, [s(Ve.value)]);
      const _ =
        e.hideSelectedBanner !== !0 && X.value === !0 && se.value > 0
          ? [
              f("div", { class: "q-table__control" }, [
                f("div", [
                  (e.selectedRowsLabel || i.lang.table.selectedRecords)(
                    se.value
                  ),
                ]),
              ]),
            ]
          : [];
      if (e.hidePagination !== !0)
        return f("div", { class: kt + " justify-end" }, yt(_));
      if (_.length > 0) return f("div", { class: kt }, _);
    }
    function Tt(s) {
      M({ page: 1, rowsPerPage: s.value });
    }
    function yt(s) {
      let _;
      const { rowsPerPage: B } = w.value,
        F = e.paginationLabel || i.lang.table.pagination,
        L = l.pagination,
        Q = e.rowsPerPageOptions.length > 1;
      if (
        (s.push(f("div", { class: "q-table__separator col" })),
        Q === !0 &&
          s.push(
            f("div", { class: "q-table__control" }, [
              f("span", { class: "q-table__bottom-item" }, [
                e.rowsPerPageLabel || i.lang.table.recordsPerPage,
              ]),
              f(Ka, {
                class: "q-table__select inline q-table__bottom-item",
                color: e.color,
                modelValue: B,
                options: Te.value,
                displayValue: B === 0 ? i.lang.table.allRows : B,
                dark: u.value,
                borderless: !0,
                dense: !0,
                optionsDense: !0,
                optionsCover: !0,
                "onUpdate:modelValue": Tt,
              }),
            ])
          ),
        L !== void 0)
      )
        _ = L(Ve.value);
      else if (
        ((_ = [
          f("span", B !== 0 ? { class: "q-table__bottom-item" } : {}, [
            B
              ? F(T.value + 1, Math.min(j.value, oe.value), oe.value)
              : F(1, be.value, oe.value),
          ]),
        ]),
        B !== 0 && ce.value > 1)
      ) {
        const W = { color: e.color, round: !0, dense: !0, flat: !0 };
        e.dense === !0 && (W.size = "sm"),
          ce.value > 2 &&
            _.push(
              f(mt, {
                key: "pgFirst",
                ...W,
                icon: He.value[0],
                disable: S.value,
                onClick: Oe,
              })
            ),
          _.push(
            f(mt, {
              key: "pgPrev",
              ...W,
              icon: He.value[1],
              disable: S.value,
              onClick: xe,
            }),
            f(mt, {
              key: "pgNext",
              ...W,
              icon: He.value[2],
              disable: Y.value,
              onClick: Pe,
            })
          ),
          ce.value > 2 &&
            _.push(
              f(mt, {
                key: "pgLast",
                ...W,
                icon: He.value[3],
                disable: Y.value,
                onClick: Me,
              })
            );
      }
      return s.push(f("div", { class: "q-table__control" }, _)), s;
    }
    function Rt() {
      const s =
        e.gridHeader === !0
          ? [f("table", { class: "q-table" }, [rt()])]
          : e.loading === !0 && l.loading === void 0
          ? nt()
          : void 0;
      return f("div", { class: "q-table__middle" }, s);
    }
    function wt() {
      const s =
        l.item !== void 0
          ? l.item
          : (_) => {
              const B = _.cols.map((L) =>
                f("div", { class: "q-table__grid-item-row" }, [
                  f("div", { class: "q-table__grid-item-title" }, [L.label]),
                  f("div", { class: "q-table__grid-item-value" }, [L.value]),
                ])
              );
              if (X.value === !0) {
                const L = l["body-selection"],
                  Q =
                    L !== void 0
                      ? L(_)
                      : [
                          f(Ft, {
                            modelValue: _.selected,
                            color: e.color,
                            dark: u.value,
                            dense: e.dense,
                            "onUpdate:modelValue": (W, Se) => {
                              ne([_.key], [_.row], W, Se);
                            },
                          }),
                        ];
                B.unshift(
                  f("div", { class: "q-table__grid-item-row" }, Q),
                  f(qt, { dark: u.value })
                );
              }
              const F = {
                class: ["q-table__grid-item-card" + C.value, e.cardClass],
                style: e.cardStyle,
              };
              return (
                (e.onRowClick !== void 0 || e.onRowDblclick !== void 0) &&
                  ((F.class[0] += " cursor-pointer"),
                  e.onRowClick !== void 0 &&
                    (F.onClick = (L) => {
                      a("RowClick", L, _.row, _.pageIndex);
                    }),
                  e.onRowDblclick !== void 0 &&
                    (F.onDblclick = (L) => {
                      a("RowDblclick", L, _.row, _.pageIndex);
                    })),
                f(
                  "div",
                  {
                    class:
                      "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" +
                      (_.selected === !0
                        ? " q-table__grid-item--selected"
                        : ""),
                  },
                  [f("div", F, B)]
                )
              );
            };
      return f(
        "div",
        {
          class: ["q-table__grid-content row", e.cardContainerClass],
          style: e.cardContainerStyle,
        },
        Z.value.map((_, B) => s(ot({ key: c.value(_), row: _, pageIndex: B })))
      );
    }
    return (
      Object.assign(o.proxy, {
        requestServerInteraction: H,
        setPagination: M,
        firstPage: Oe,
        prevPage: xe,
        nextPage: Pe,
        lastPage: Me,
        isRowSelected: qe,
        clearSelection: Ce,
        isRowExpanded: E,
        setExpanded: te,
        sort: A,
        resetVirtualScroll: J,
        scrollTo: je,
        getCellValue: Le,
      }),
      ma(o.proxy, {
        filteredSortedRows: () => fe.value,
        computedRows: () => Z.value,
        computedRowsNumber: () => oe.value,
      }),
      () => {
        const s = [it()],
          _ = { ref: g, class: V.value };
        return (
          e.grid === !0
            ? s.push(Rt())
            : Object.assign(_, {
                class: [_.class, e.cardClass],
                style: e.cardStyle,
              }),
          s.push(Fe(), Bt()),
          e.loading === !0 && l.loading !== void 0 && s.push(l.loading()),
          f("div", _, s)
        );
      }
    );
  },
});
const Sn = {
  __name: "LastWorkouts",
  setup(e) {
    const l = ga();
    function a(r) {
      l.push({ name: "workout", params: { muscleGroupId: r } });
    }
    const o = z([]),
      i = z(!1);
    bt(async () => {
      const r = await Ht.get("/api/workout/last-workouts");
      (o.value = r.data), (i.value = !0);
    });
    const u = [
      {
        label: "Workout",
        name: "workoutGroupName",
        field: "workoutGroupName",
        align: "left",
      },
      {
        label: "Last Workout",
        name: "lastDate",
        field: "lastDate",
        align: "center",
      },
      { label: "Days Ago", name: "daysAgo", field: "daysAgo", align: "center" },
      {
        label: "Start Workout",
        name: "startWorkout",
        field: "startWorkout",
        align: "center",
      },
    ];
    return (r, d) => (
      kl(),
      ql(
        bn,
        {
          class: "glassy",
          title: "Last Workouts",
          rows: o.value,
          columns: u,
          "hide-bottom": "",
        },
        {
          body: ae((c) => [
            ee(
              ya,
              { props: c },
              {
                default: ae(() => [
                  ee(
                    _t,
                    { key: "workoutGroupName", props: c },
                    {
                      default: ae(() => [At(lt(c.row.workoutGroupName), 1)]),
                      _: 2,
                    },
                    1032,
                    ["props"]
                  ),
                  ee(
                    _t,
                    { key: "lastDate", props: c },
                    { default: ae(() => [At(lt(c.row.lastDate), 1)]), _: 2 },
                    1032,
                    ["props"]
                  ),
                  ee(
                    _t,
                    { key: "daysAgo", props: c },
                    { default: ae(() => [At(lt(c.row.daysAgo), 1)]), _: 2 },
                    1032,
                    ["props"]
                  ),
                  ee(
                    _t,
                    { key: "startWorkout", props: c },
                    {
                      default: ae(() => [
                        ee(
                          mt,
                          {
                            push: "",
                            class: "text-black",
                            color: "positive",
                            label: "start",
                            onClick: (g) => a(c.row.workoutGroupId),
                          },
                          null,
                          8,
                          ["onClick"]
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["props"]
                  ),
                ]),
                _: 2,
              },
              1032,
              ["props"]
            ),
          ]),
          _: 1,
        },
        8,
        ["rows"]
      )
    );
  },
};
const yn = { class: "row q-my-md" },
  wn = { class: "col-12" },
  _n = { class: "row justify-between q-pt-md" },
  kn = { class: "col-4 q-pr-lg" },
  qn = he("div", { class: "text-h3 text-center text-accent" }, "This Year", -1),
  Cn = { class: "text-h1 text-center" },
  xn = { class: "col-4 q-px-lg" },
  Pn = he(
    "div",
    { class: "text-h3 text-center text-accent" },
    "This Month",
    -1
  ),
  Vn = { class: "text-h1 text-center" },
  Bn = { class: "col-4 q-pl-lg" },
  Tn = he("div", { class: "text-h3 text-center text-accent" }, "This Week", -1),
  Rn = { class: "text-h1 text-center" },
  An = {
    __name: "HomePage",
    setup(e) {
      const l = z([]),
        a = z({}),
        o = z(!1);
      return (
        bt(async () => {
          const i = await Ht.get("/api/workout/last-workouts"),
            u = await Ht.get("/api/workout/statistics");
          (l.value = i.data), (a.value = u.data), (o.value = !0);
        }),
        (i, u) =>
          o.value
            ? (kl(),
              ql(
                ba,
                { key: 0, class: "q-py-md q-px-xl" },
                {
                  default: ae(() => [
                    he("div", yn, [
                      he("div", wn, [ee(Sn, { class: "glowing-border" })]),
                    ]),
                    he("div", _n, [
                      he("div", kn, [
                        ee(
                          Et,
                          { class: "glassy glowing-border" },
                          {
                            default: ae(() => [
                              ee(et, null, { default: ae(() => [qn]), _: 1 }),
                              ee(qt),
                              ee(et, null, {
                                default: ae(() => [
                                  he("div", Cn, lt(a.value.counts.year), 1),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      he("div", xn, [
                        ee(
                          Et,
                          { class: "glassy glowing-border" },
                          {
                            default: ae(() => [
                              ee(et, null, { default: ae(() => [Pn]), _: 1 }),
                              ee(qt),
                              ee(et, null, {
                                default: ae(() => [
                                  he("div", Vn, lt(a.value.counts.month), 1),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      he("div", Bn, [
                        ee(
                          Et,
                          { class: "glassy glowing-border" },
                          {
                            default: ae(() => [
                              ee(et, null, { default: ae(() => [Tn]), _: 1 }),
                              ee(qt),
                              ee(et, null, {
                                default: ae(() => [
                                  he("div", Rn, lt(a.value.counts.week), 1),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ))
            : ha("", !0)
      );
    },
  };
export { An as default };
