import {
  b as re,
  d as m,
  h as f,
  f as Ve,
  g as fe,
  a4 as ml,
  aa as tt,
  af as De,
  ag as Ne,
  q as Ol,
  x as I,
  k as X,
  ah as Al,
  ai as Dt,
  R as gl,
  S as hl,
  n as We,
  D as ye,
  m as xt,
  s as bl,
  t as ht,
  C as Nt,
  aj as Wt,
  ak as Sl,
  al as yl,
  am as wl,
  an as _l,
  ao as kl,
  ap as Ml,
  aq as Ll,
  a6 as El,
  U as Re,
  a0 as Fl,
  a1 as zl,
  a8 as jt,
  ar as gt,
  as as Xt,
  at as Hl,
  au as Yt,
  av as Il,
  z as $l,
  aw as Dl,
  ax as Nl,
  ay as Wl,
  ad as jl,
  ae as Ql,
  az as Kl,
  aA as Ul,
  aB as Gl,
  aC as Xl,
  aD as Yl,
  aE as Jl,
  aF as Jt,
  aG as Zl,
  V as ea,
  aH as ta,
  aI as la,
  aJ as aa,
  aK as na,
  aL as oa,
  aM as ia,
  aN as ua,
  aO as Zt,
  ab as ct,
  aP as Ze,
  a9 as ra,
  aQ as sa,
  aR as ca,
  aS as da,
  aT as el,
  aU as Ht,
  aV as tl,
  aW as va,
  aX as fa,
  aY as Mt,
  aZ as dt,
  Q as mt,
  M as kt,
  _ as ma,
  a_ as ga,
  c as ha,
  w as ne,
  K as ba,
  o as Sa,
  F as te,
  a as G,
  a3 as Lt,
  $ as Et,
  L as et,
  P as Ft,
  O as ll,
  G as ya,
  H as wa,
} from "./index.b5dc3681.js";
import { r as It } from "./rtl.b51694b1.js";
import {
  c as _a,
  n as al,
  C as ka,
  p as Ca,
  a as qa,
  b as xa,
  B as Pa,
  L as pa,
  d as Va,
  e as Ba,
  P as Ta,
  f as Ra,
  g as Oa,
} from "./index.a865ef31.js";
import { Q as Aa } from "./QPage.3f5a5cd4.js";
var wt = re({
    name: "QTd",
    props: { props: Object, autoWidth: Boolean, noHover: Boolean },
    setup(e, { slots: l }) {
      const a = fe(),
        o = m(
          () =>
            "q-td" +
            (e.autoWidth === !0 ? " q-table--col-auto-width" : "") +
            (e.noHover === !0 ? " q-td--no-hover" : "") +
            " "
        );
      return () => {
        if (e.props === void 0)
          return f("td", { class: o.value }, Ve(l.default));
        const i = a.vnode.key,
          u =
            (e.props.colsMap !== void 0 ? e.props.colsMap[i] : null) ||
            e.props.col;
        if (u === void 0) return;
        const { row: r } = e.props;
        return f(
          "td",
          { class: o.value + u.__tdClass(r), style: u.__tdStyle(r) },
          Ve(l.default)
        );
      };
    },
  }),
  Ma = re({
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
      return () => f("tr", { class: a.value }, Ve(l.default));
    },
  }),
  La = re({
    name: "QTh",
    props: { props: Object, autoWidth: Boolean },
    emits: ["click"],
    setup(e, { slots: l, emit: a }) {
      const o = fe(),
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
            Ve(l.default)
          );
        let r, d;
        const c = o.vnode.key;
        if (c) {
          if (((r = e.props.colsMap[c]), r === void 0)) return;
        } else r = e.props.col;
        if (r.sortable === !0) {
          const n = r.align === "right" ? "unshift" : "push";
          (d = ml(l.default, [])),
            d[n](
              f(tt, { class: r.__iconClass, name: i.iconSet.table.arrowUp })
            );
        } else d = Ve(l.default);
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
  Ea = re({
    name: "QList",
    props: {
      ...De,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
    },
    setup(e, { slots: l }) {
      const a = fe(),
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
      return () => f("div", { class: i.value, role: "list" }, Ve(l.default));
    },
  });
const Fa = ["horizontal", "vertical", "cell", "none"];
var za = re({
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
      validator: (e) => Fa.includes(e),
    },
  },
  setup(e, { slots: l }) {
    const a = fe(),
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
        f("table", { class: "q-table" }, Ve(l.default)),
      ]);
  },
});
function Cl(e, l) {
  return f("div", e, [f("table", { class: "q-table" }, l)]);
}
const we = 1e3,
  Ha = ["start", "center", "end", "start-force", "center-force", "end-force"],
  ql = Array.prototype.filter,
  Ia =
    window.getComputedStyle(document.body).overflowAnchor === void 0
      ? Ol
      : function (e, l) {
          e !== null &&
            (cancelAnimationFrame(e._qOverflowAnimationFrame),
            (e._qOverflowAnimationFrame = requestAnimationFrame(() => {
              if (e === null) return;
              const a = e.children || [];
              ql.call(
                a,
                (i) => i.dataset && i.dataset.qVsAnchor !== void 0
              ).forEach((i) => {
                delete i.dataset.qVsAnchor;
              });
              const o = a[l];
              o && o.dataset && (o.dataset.qVsAnchor = "");
            })));
        };
function lt(e, l) {
  return e + l;
}
function zt(e, l, a, o, i, u, r, d) {
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
      q = l.getBoundingClientRect();
    i === !0
      ? ((n.offsetStart += q.left - h.left), (n.offsetEnd -= q.width))
      : ((n.offsetStart += q.top - h.top), (n.offsetEnd -= q.height)),
      e !== window && (n.offsetStart += n.scrollStart),
      (n.offsetEnd += n.scrollMaxSize - n.offsetStart);
  }
  return n;
}
function nl(e, l, a, o) {
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
  let d = e.slice(u, r).reduce(lt, 0);
  return (
    a % we !== 0 && (d -= l.slice(u * we, a).reduce(lt, 0)),
    o % we !== 0 && o !== i && (d -= l.slice(o, r * we).reduce(lt, 0)),
    d
  );
}
const xl = {
    virtualScrollSliceSize: { type: [Number, String], default: null },
    virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 },
    virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 },
    virtualScrollItemSize: { type: [Number, String], default: 24 },
    virtualScrollStickySizeStart: { type: [Number, String], default: 0 },
    virtualScrollStickySizeEnd: { type: [Number, String], default: 0 },
    tableColspan: [Number, String],
  },
  Pl = Object.keys(xl),
  pl = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...xl };
function Vl({
  virtualScrollLength: e,
  getVirtualScrollTarget: l,
  getVirtualScrollEl: a,
  virtualScrollItemSizeComputed: o,
}) {
  const i = fe(),
    { props: u, emit: r, proxy: d } = i,
    { $q: c } = d;
  let g,
    n,
    h,
    q = [],
    v;
  const p = I(0),
    x = I(0),
    w = I({}),
    H = I(null),
    z = I(null),
    A = I(null),
    T = I({ from: 0, to: 0 }),
    E = m(() => (u.tableColspan !== void 0 ? u.tableColspan : 100));
  o === void 0 && (o = m(() => u.virtualScrollItemSize));
  const le = m(() => o.value + ";" + u.virtualScrollHorizontal),
    se = m(
      () =>
        le.value +
        ";" +
        u.virtualScrollSliceRatioBefore +
        ";" +
        u.virtualScrollSliceRatioAfter
    );
  X(se, () => {
    ce();
  }),
    X(le, me);
  function me() {
    he(n, !0);
  }
  function be(b) {
    he(b === void 0 ? n : b);
  }
  function Z(b, P) {
    const R = l();
    if (R == null || R.nodeType === 8) return;
    const D = zt(
      R,
      a(),
      H.value,
      z.value,
      u.virtualScrollHorizontal,
      c.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    h !== D.scrollViewSize && ce(D.scrollViewSize),
      _e(
        R,
        D,
        Math.min(e.value - 1, Math.max(0, parseInt(b, 10) || 0)),
        0,
        Ha.indexOf(P) > -1 ? P : n > -1 && b > n ? "end" : "start"
      );
  }
  function Y() {
    const b = l();
    if (b == null || b.nodeType === 8) return;
    const P = zt(
        b,
        a(),
        H.value,
        z.value,
        u.virtualScrollHorizontal,
        c.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ),
      R = e.value - 1,
      D = P.scrollMaxSize - P.offsetStart - P.offsetEnd - x.value;
    if (g === P.scrollStart) return;
    if (P.scrollMaxSize <= 0) {
      _e(b, P, 0, 0);
      return;
    }
    h !== P.scrollViewSize && ce(P.scrollViewSize), ge(T.value.from);
    const K = Math.floor(
      P.scrollMaxSize -
        Math.max(P.scrollViewSize, P.offsetEnd) -
        Math.min(v[R], P.scrollViewSize / 2)
    );
    if (K > 0 && Math.ceil(P.scrollStart) >= K) {
      _e(b, P, R, P.scrollMaxSize - P.offsetEnd - q.reduce(lt, 0));
      return;
    }
    let L = 0,
      B = P.scrollStart - P.offsetStart,
      j = B;
    if (B <= D && B + P.scrollViewSize >= p.value)
      (B -= p.value), (L = T.value.from), (j = B);
    else for (let S = 0; B >= q[S] && L < R; S++) (B -= q[S]), (L += we);
    for (; B > 0 && L < R; )
      (B -= v[L]), B > -P.scrollViewSize ? (L++, (j = B)) : (j = v[L] + B);
    _e(b, P, L, j);
  }
  function _e(b, P, R, D, K) {
    const L = typeof K == "string" && K.indexOf("-force") > -1,
      B = L === !0 ? K.replace("-force", "") : K,
      j = B !== void 0 ? B : "start";
    let S = Math.max(0, R - w.value[j]),
      J = S + w.value.total;
    J > e.value && ((J = e.value), (S = Math.max(0, J - w.value.total))),
      (g = P.scrollStart);
    const de = S !== T.value.from || J !== T.value.to;
    if (de === !1 && B === void 0) {
      qe(R);
      return;
    }
    const { activeElement: Be } = document,
      ie = A.value;
    de === !0 &&
      ie !== null &&
      ie !== Be &&
      ie.contains(Be) === !0 &&
      (ie.addEventListener("focusout", ke),
      setTimeout(() => {
        ie !== null && ie.removeEventListener("focusout", ke);
      })),
      Ia(ie, R - S);
    const Oe = B !== void 0 ? v.slice(S, R).reduce(lt, 0) : 0;
    if (de === !0) {
      const xe = J >= T.value.from && S <= T.value.to ? T.value.to : J;
      (T.value = { from: S, to: xe }),
        (p.value = vt(q, v, 0, S)),
        (x.value = vt(q, v, J, e.value)),
        requestAnimationFrame(() => {
          T.value.to !== J &&
            g === P.scrollStart &&
            ((T.value = { from: T.value.from, to: J }),
            (x.value = vt(q, v, J, e.value)));
        });
    }
    requestAnimationFrame(() => {
      if (g !== P.scrollStart) return;
      de === !0 && ge(S);
      const xe = v.slice(S, R).reduce(lt, 0),
        Pe = xe + P.offsetStart + p.value,
        Ae = Pe + v[R];
      let ze = Pe + D;
      if (B !== void 0) {
        const ve = xe - Oe,
          ee = P.scrollStart + ve;
        ze =
          L !== !0 && ee < Pe && Ae < ee + P.scrollViewSize
            ? ee
            : B === "end"
            ? Ae - P.scrollViewSize
            : Pe -
              (B === "start" ? 0 : Math.round((P.scrollViewSize - v[R]) / 2));
      }
      (g = ze), nl(b, ze, u.virtualScrollHorizontal, c.lang.rtl), qe(R);
    });
  }
  function ge(b) {
    const P = A.value;
    if (P) {
      const R = ql.call(
          P.children,
          (S) =>
            S.classList && S.classList.contains("q-virtual-scroll--skip") === !1
        ),
        D = R.length,
        K =
          u.virtualScrollHorizontal === !0
            ? (S) => S.getBoundingClientRect().width
            : (S) => S.offsetHeight;
      let L = b,
        B,
        j;
      for (let S = 0; S < D; ) {
        for (
          B = K(R[S]), S++;
          S < D &&
          R[S].classList.contains("q-virtual-scroll--with-prev") === !0;

        )
          (B += K(R[S])), S++;
        (j = B - v[L]),
          j !== 0 && ((v[L] += j), (q[Math.floor(L / we)] += j)),
          L++;
      }
    }
  }
  function ke() {
    A.value !== null && A.value !== void 0 && A.value.focus();
  }
  function he(b, P) {
    const R = 1 * o.value;
    (P === !0 || Array.isArray(v) === !1) && (v = []);
    const D = v.length;
    v.length = e.value;
    for (let L = e.value - 1; L >= D; L--) v[L] = R;
    const K = Math.floor((e.value - 1) / we);
    q = [];
    for (let L = 0; L <= K; L++) {
      let B = 0;
      const j = Math.min((L + 1) * we, e.value);
      for (let S = L * we; S < j; S++) B += v[S];
      q.push(B);
    }
    (n = -1),
      (g = void 0),
      (p.value = vt(q, v, 0, T.value.from)),
      (x.value = vt(q, v, T.value.to, e.value)),
      b >= 0
        ? (ge(T.value.from),
          ye(() => {
            Z(b);
          }))
        : oe();
  }
  function ce(b) {
    if (b === void 0 && typeof window != "undefined") {
      const B = l();
      B != null &&
        B.nodeType !== 8 &&
        (b = zt(
          B,
          a(),
          H.value,
          z.value,
          u.virtualScrollHorizontal,
          c.lang.rtl,
          u.virtualScrollStickySizeStart,
          u.virtualScrollStickySizeEnd
        ).scrollViewSize);
    }
    h = b;
    const P = parseFloat(u.virtualScrollSliceRatioBefore) || 0,
      R = parseFloat(u.virtualScrollSliceRatioAfter) || 0,
      D = 1 + P + R,
      K = b === void 0 || b <= 0 ? 1 : Math.ceil(b / o.value),
      L = Math.max(
        1,
        K,
        Math.ceil(
          (u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / D
        )
      );
    w.value = {
      total: Math.ceil(L * D),
      start: Math.ceil(L * P),
      center: Math.ceil(L * (0.5 + P)),
      end: Math.ceil(L * (1 + P)),
      view: K,
    };
  }
  function Ce(b, P) {
    const R = u.virtualScrollHorizontal === !0 ? "width" : "height",
      D = { ["--q-virtual-scroll-item-" + R]: o.value + "px" };
    return [
      b === "tbody"
        ? f(b, { class: "q-virtual-scroll__padding", key: "before", ref: H }, [
            f("tr", [
              f("td", {
                style: { [R]: `${p.value}px`, ...D },
                colspan: E.value,
              }),
            ]),
          ])
        : f(b, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: H,
            style: { [R]: `${p.value}px`, ...D },
          }),
      f(
        b,
        {
          class: "q-virtual-scroll__content",
          key: "content",
          ref: A,
          tabindex: -1,
        },
        P.flat()
      ),
      b === "tbody"
        ? f(b, { class: "q-virtual-scroll__padding", key: "after", ref: z }, [
            f("tr", [
              f("td", {
                style: { [R]: `${x.value}px`, ...D },
                colspan: E.value,
              }),
            ]),
          ])
        : f(b, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: z,
            style: { [R]: `${x.value}px`, ...D },
          }),
    ];
  }
  function qe(b) {
    n !== b &&
      (u.onVirtualScroll !== void 0 &&
        r("virtual-scroll", {
          index: b,
          from: T.value.from,
          to: T.value.to - 1,
          direction: b < n ? "decrease" : "increase",
          ref: d,
        }),
      (n = b));
  }
  ce();
  const oe = Al(Y, c.platform.is.ios === !0 ? 120 : 35);
  Dt(() => {
    ce();
  });
  let C = !1;
  return (
    gl(() => {
      C = !0;
    }),
    hl(() => {
      if (C !== !0) return;
      const b = l();
      g !== void 0 && b !== void 0 && b !== null && b.nodeType !== 8
        ? nl(b, g, u.virtualScrollHorizontal, c.lang.rtl)
        : Z(n);
    }),
    We(() => {
      oe.cancel();
    }),
    Object.assign(d, { scrollTo: Z, reset: me, refresh: be }),
    {
      virtualScrollSliceRange: T,
      virtualScrollSliceSizeComputed: w,
      setVirtualScrollSize: ce,
      onVirtualScrollEvt: oe,
      localResetVirtualScroll: he,
      padVirtualScroll: Ce,
      scrollTo: Z,
      reset: me,
      refresh: be,
    }
  );
}
const $a = { list: Ea, table: za },
  Da = ["list", "table", "__qtable"];
var Na = re({
    name: "QVirtualScroll",
    props: {
      ...pl,
      type: { type: String, default: "list", validator: (e) => Da.includes(e) },
      items: { type: Array, default: () => [] },
      itemsFn: Function,
      itemsSize: Number,
      scrollTarget: { default: void 0 },
    },
    setup(e, { slots: l, attrs: a }) {
      let o;
      const i = I(null),
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
        } = Vl({
          virtualScrollLength: u,
          getVirtualScrollTarget: p,
          getVirtualScrollEl: v,
        }),
        n = m(() => {
          if (u.value === 0) return [];
          const z = (A, T) => ({ index: r.value.from + T, item: A });
          return e.itemsFn === void 0
            ? e.items.slice(r.value.from, r.value.to).map(z)
            : e.itemsFn(r.value.from, r.value.to - r.value.from).map(z);
        }),
        h = m(
          () =>
            "q-virtual-scroll q-virtual-scroll" +
            (e.virtualScrollHorizontal === !0 ? "--horizontal" : "--vertical") +
            (e.scrollTarget !== void 0 ? "" : " scroll")
        ),
        q = m(() => (e.scrollTarget !== void 0 ? {} : { tabindex: 0 }));
      X(u, () => {
        d();
      }),
        X(
          () => e.scrollTarget,
          () => {
            w(), x();
          }
        );
      function v() {
        return i.value.$el || i.value;
      }
      function p() {
        return o;
      }
      function x() {
        (o = bl(v(), e.scrollTarget)),
          o.addEventListener("scroll", g, ht.passive);
      }
      function w() {
        o !== void 0 &&
          (o.removeEventListener("scroll", g, ht.passive), (o = void 0));
      }
      function H() {
        let z = c(e.type === "list" ? "div" : "tbody", n.value.map(l.default));
        return (
          l.before !== void 0 && (z = l.before().concat(z)), Nt(l.after, z)
        );
      }
      return (
        Dt(() => {
          d();
        }),
        xt(() => {
          x();
        }),
        hl(() => {
          x();
        }),
        gl(() => {
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
            ? Cl({ ref: i, class: "q-table__middle " + h.value }, H())
            : f(
                $a[e.type],
                { ...a, ref: i, class: [a.class, h.value], ...q.value },
                H
              );
        }
      );
    },
  }),
  Wa = re({
    name: "QField",
    inheritAttrs: !1,
    props: Wt,
    emits: Sl,
    setup() {
      return yl(wl());
    },
  });
const ja = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var Qa = re({
    name: "QChip",
    props: {
      ...De,
      ..._l,
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
        } = fe(),
        i = Ne(e, o),
        u = kl(e, ja),
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
            H = {
              ...w,
              role: "button",
              "aria-hidden": "false",
              "aria-label": e.removeAriaLabel || o.lang.label.remove,
            };
          return { chip: w, remove: H };
        });
      function q(w) {
        w.keyCode === 13 && v(w);
      }
      function v(w) {
        e.disable || (a("update:selected", !e.selected), a("click", w));
      }
      function p(w) {
        (w.keyCode === void 0 || w.keyCode === 13) &&
          (Re(w),
          e.disable === !1 && (a("update:modelValue", !1), a("remove")));
      }
      function x() {
        const w = [];
        g.value === !0 && w.push(f("div", { class: "q-focus-helper" })),
          r.value === !0 &&
            w.push(
              f(tt, { class: "q-chip__icon q-chip__icon--left", name: d.value })
            );
        const H =
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
              Ll(l.default, H)
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
                onClick: p,
                onKeyup: p,
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
            Object.assign(w, h.value.chip, { onClick: v, onKeyup: q }),
          Ml(
            "div",
            w,
            x(),
            "ripple",
            e.ripple !== !1 && e.disable !== !0,
            () => [[El, e.ripple]]
          )
        );
      };
    },
  }),
  Ka = re({
    name: "QItem",
    props: {
      ...De,
      ...Fl,
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
        } = fe(),
        i = Ne(e, o),
        {
          hasLink: u,
          linkAttrs: r,
          linkClass: d,
          linkTag: c,
          navigateOnClick: g,
        } = zl(),
        n = I(null),
        h = I(null),
        q = m(() => e.clickable === !0 || u.value === !0 || e.tag === "label"),
        v = m(() => e.disable !== !0 && q.value === !0),
        p = m(
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
          const A = o.lang.rtl === !0 ? "Right" : "Left";
          return { ["padding" + A]: 16 + e.insetLevel * 56 + "px" };
        });
      function w(A) {
        v.value === !0 &&
          (h.value !== null &&
            (A.qKeyEvent !== !0 && document.activeElement === n.value
              ? h.value.focus()
              : document.activeElement === h.value && n.value.focus()),
          g(A));
      }
      function H(A) {
        if (v.value === !0 && jt(A, 13) === !0) {
          Re(A), (A.qKeyEvent = !0);
          const T = new MouseEvent("click", A);
          (T.qKeyEvent = !0), n.value.dispatchEvent(T);
        }
        a("keyup", A);
      }
      function z() {
        const A = ml(l.default, []);
        return (
          v.value === !0 &&
            A.unshift(
              f("div", { class: "q-focus-helper", tabindex: -1, ref: h })
            ),
          A
        );
      }
      return () => {
        const A = {
          ref: n,
          class: p.value,
          style: x.value,
          role: "listitem",
          onClick: w,
          onKeyup: H,
        };
        return (
          v.value === !0
            ? ((A.tabindex = e.tabindex || "0"), Object.assign(A, r.value))
            : q.value === !0 && (A["aria-disabled"] = "true"),
          f(c.value, A, z())
        );
      };
    },
  }),
  Ua = re({
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
      return () => f("div", { class: a.value }, Ve(l.default));
    },
  }),
  Ga = re({
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
      return () => f("div", { style: i.value, class: o.value }, Ve(l.default));
    },
  });
const Xa = {
  target: { default: !0 },
  noParentEvent: Boolean,
  contextMenu: Boolean,
};
function Ya({ showing: e, avoidEmit: l, configureAnchorEl: a }) {
  const { props: o, proxy: i, emit: u } = fe(),
    r = I(null);
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
        const p = v.target;
        Xt(g, "anchor", [
          [p, "touchmove", "mobileCleanup", "passive"],
          [p, "touchend", "mobileCleanup", "passive"],
          [p, "touchcancel", "mobileCleanup", "passive"],
          [r.value, "contextmenu", "prevent", "notPassive"],
        ]),
          (d = setTimeout(() => {
            i.show(v), (v.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(v) {
        r.value.classList.remove("non-selectable"),
          clearTimeout(d),
          e.value === !0 && v !== void 0 && _a();
      },
    }),
    (a = function (v = o.contextMenu) {
      if (o.noParentEvent === !0 || r.value === null) return;
      let p;
      v === !0
        ? i.$q.platform.is.mobile === !0
          ? (p = [[r.value, "touchstart", "mobileTouch", "passive"]])
          : (p = [
              [r.value, "mousedown", "hide", "passive"],
              [r.value, "contextmenu", "contextClick", "notPassive"],
            ])
        : (p = [
            [r.value, "click", "toggle", "passive"],
            [r.value, "keyup", "toggleKey", "passive"],
          ]),
        Xt(g, "anchor", p);
    }));
  function n() {
    Hl(g, "anchor");
  }
  function h(v) {
    for (r.value = v; r.value.classList.contains("q-anchor--skip"); )
      r.value = r.value.parentNode;
    a();
  }
  function q() {
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
    X(
      () => o.contextMenu,
      (v) => {
        r.value !== null && (n(), a(v));
      }
    ),
    X(
      () => o.target,
      () => {
        r.value !== null && n(), q();
      }
    ),
    X(
      () => o.noParentEvent,
      (v) => {
        r.value !== null && (v === !0 ? n() : a());
      }
    ),
    xt(() => {
      q(),
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
function Ja(e, l) {
  const a = I(null);
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
  const r = X(
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
let Bl;
const { notPassiveCapture: Ct } = ht,
  $e = [];
function qt(e) {
  clearTimeout(Bl);
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
function Za(e) {
  $e.push(e),
    $e.length === 1 &&
      (document.addEventListener("mousedown", qt, Ct),
      document.addEventListener("touchstart", qt, Ct));
}
function ol(e) {
  const l = $e.findIndex((a) => a === e);
  l > -1 &&
    ($e.splice(l, 1),
    $e.length === 0 &&
      (clearTimeout(Bl),
      document.removeEventListener("mousedown", qt, Ct),
      document.removeEventListener("touchstart", qt, Ct)));
}
let il, ul;
function rl(e) {
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
function en(e) {
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
function sl(e, l) {
  const a = e.split(" ");
  return {
    vertical: a[0],
    horizontal: $t[`${a[1]}#${l === !0 ? "rtl" : "ltr"}`],
  };
}
function tn(e, l) {
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
function ln(e) {
  return {
    top: 0,
    center: e.offsetHeight / 2,
    bottom: e.offsetHeight,
    left: 0,
    middle: e.offsetWidth / 2,
    right: e.offsetWidth,
  };
}
function an(e) {
  if (Il.is.ios === !0 && window.visualViewport !== void 0) {
    const d = document.body.style,
      { offsetLeft: c, offsetTop: g } = window.visualViewport;
    c !== il && (d.setProperty("--q-pe-left", c + "px"), (il = c)),
      g !== ul && (d.setProperty("--q-pe-top", g + "px"), (ul = g));
  }
  let l;
  const { scrollLeft: a, scrollTop: o } = e.el;
  if (e.absoluteOffset === void 0)
    l = tn(e.anchorEl, e.cover === !0 ? [0, 0] : e.offset);
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
  const u = ln(e.el),
    r = {
      top: l[e.anchorOrigin.vertical] - u[e.selfOrigin.vertical],
      left: l[e.anchorOrigin.horizontal] - u[e.selfOrigin.horizontal],
    };
  nn(r, l, u, e.anchorOrigin, e.selfOrigin),
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
function nn(e, l, a, o, i) {
  const u = a.bottom,
    r = a.right,
    d = $l(),
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
var on = re({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Xa,
    ...Dl,
    ...De,
    ...Nl,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: { type: String, validator: rl },
    self: { type: String, validator: rl },
    offset: { type: Array, validator: en },
    scrollTarget: { default: void 0 },
    touchPosition: Boolean,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
  },
  emits: [...Wl, "click", "escape-key"],
  setup(e, { slots: l, emit: a, attrs: o }) {
    let i = null,
      u,
      r,
      d;
    const c = fe(),
      { proxy: g } = c,
      { $q: n } = g,
      h = I(null),
      q = I(!1),
      v = m(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
      p = Ne(e, n),
      { registerTick: x, removeTick: w } = jl(),
      { registerTimeout: H } = Ql(),
      { transition: z, transitionStyle: A } = Kl(e, q),
      {
        localScrollTarget: T,
        changeScrollEvent: E,
        unconfigureScrollTarget: le,
      } = Ja(e, R),
      { anchorEl: se, canShow: me } = Ya({ showing: q }),
      { hide: be } = Ul({
        showing: q,
        canShow: me,
        handleShow: C,
        handleHide: b,
        hideOnRouteChange: v,
        processOnMount: !0,
      }),
      { showPortal: Z, hidePortal: Y, renderPortal: _e } = Gl(c, h, j),
      ge = {
        anchorEl: se,
        innerRef: h,
        onClickOutside(S) {
          if (e.persistent !== !0 && q.value === !0)
            return (
              be(S),
              (S.type === "touchstart" ||
                S.target.classList.contains("q-dialog__backdrop")) &&
                Re(S),
              !0
            );
        },
      },
      ke = m(() =>
        sl(
          e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
          n.lang.rtl
        )
      ),
      he = m(() =>
        e.cover === !0 ? ke.value : sl(e.self || "top start", n.lang.rtl)
      ),
      ce = m(
        () =>
          (e.square === !0 ? " q-menu--square" : "") +
          (p.value === !0 ? " q-menu--dark q-dark" : "")
      ),
      Ce = m(() => (e.autoClose === !0 ? { onClick: D } : {})),
      qe = m(() => q.value === !0 && e.persistent !== !0);
    X(qe, (S) => {
      S === !0 ? (la(L), Za(ge)) : (Jt(L), ol(ge));
    });
    function oe() {
      ea(() => {
        let S = h.value;
        S &&
          S.contains(document.activeElement) !== !0 &&
          ((S = S.querySelector("[autofocus], [data-autofocus]") || S),
          S.focus({ preventScroll: !0 }));
      });
    }
    function C(S) {
      if (
        ((i = e.noRefocus === !1 ? document.activeElement : null),
        Xl(K),
        Z(),
        R(),
        (u = void 0),
        S !== void 0 && (e.touchPosition || e.contextMenu))
      ) {
        const J = Yl(S);
        if (J.left !== void 0) {
          const { top: de, left: Be } = se.value.getBoundingClientRect();
          u = { left: J.left - Be, top: J.top - de };
        }
      }
      r === void 0 &&
        (r = X(
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
          B
        )),
        e.noFocus !== !0 && document.activeElement.blur(),
        x(() => {
          B(), e.noFocus !== !0 && oe();
        }),
        H(() => {
          n.platform.is.ios === !0 && ((d = e.autoClose), h.value.click()),
            B(),
            Z(!0),
            a("show", S);
        }, e.transitionDuration);
    }
    function b(S) {
      w(),
        Y(),
        P(!0),
        i !== null &&
          (S === void 0 || S.qClickOutside !== !0) &&
          (i.focus(), (i = null)),
        H(() => {
          Y(!0), a("hide", S);
        }, e.transitionDuration);
    }
    function P(S) {
      (u = void 0),
        r !== void 0 && (r(), (r = void 0)),
        (S === !0 || q.value === !0) && (Jl(K), le(), ol(ge), Jt(L)),
        S !== !0 && (i = null);
    }
    function R() {
      (se.value !== null || e.scrollTarget !== void 0) &&
        ((T.value = bl(se.value, e.scrollTarget)), E(T.value, B));
    }
    function D(S) {
      d !== !0 ? (ta(g, S), a("click", S)) : (d = !1);
    }
    function K(S) {
      qe.value === !0 &&
        e.noFocus !== !0 &&
        aa(h.value, S.target) !== !0 &&
        oe();
    }
    function L(S) {
      a("escape-key"), be(S);
    }
    function B() {
      const S = h.value;
      S === null ||
        se.value === null ||
        an({
          el: S,
          offset: e.offset,
          anchorEl: se.value,
          anchorOrigin: ke.value,
          selfOrigin: he.value,
          absoluteOffset: u,
          fit: e.fit,
          cover: e.cover,
          maxHeight: e.maxHeight,
          maxWidth: e.maxWidth,
        });
    }
    function j() {
      return f(Zl, { name: z.value, appear: !0 }, () =>
        q.value === !0
          ? f(
              "div",
              {
                role: "menu",
                ...o,
                ref: h,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + ce.value, o.class],
                style: [o.style, A.value],
                ...Ce.value,
              },
              Ve(l.default)
            )
          : null
      );
    }
    return We(P), Object.assign(g, { focus: oe, updatePosition: B }), _e;
  },
});
const cl = (e) => ["add", "add-unique", "toggle"].includes(e),
  un = ".*+?^${}()|[]\\",
  rn = Object.keys(Wt);
var sn = re({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...pl,
    ...na,
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
    newValueMode: { type: String, validator: cl },
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
    ...Sl,
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
    const { proxy: o } = fe(),
      { $q: i } = o,
      u = I(!1),
      r = I(!1),
      d = I(-1),
      c = I(""),
      g = I(!1),
      n = I(!1);
    let h, q, v, p, x, w, H, z, A;
    const T = I(null),
      E = I(null),
      le = I(null),
      se = I(null),
      me = I(null),
      be = oa(e),
      Z = ca(yt),
      Y = m(() => (Array.isArray(e.options) ? e.options.length : 0)),
      _e = m(() =>
        e.virtualScrollItemSize === void 0
          ? e.optionsDense === !0
            ? 24
            : 48
          : e.virtualScrollItemSize
      ),
      {
        virtualScrollSliceRange: ge,
        virtualScrollSliceSizeComputed: ke,
        localResetVirtualScroll: he,
        padVirtualScroll: ce,
        onVirtualScrollEvt: Ce,
        scrollTo: qe,
        setVirtualScrollSize: oe,
      } = Vl({
        virtualScrollLength: Y,
        getVirtualScrollTarget: Vt,
        getVirtualScrollEl: He,
        virtualScrollItemSizeComputed: _e,
      }),
      C = wl(),
      b = m(() => {
        const t = e.mapOptions === !0 && e.multiple !== !0,
          k =
            e.modelValue !== void 0 && (e.modelValue !== null || t === !0)
              ? e.multiple === !0 && Array.isArray(e.modelValue)
                ? e.modelValue
                : [e.modelValue]
              : [];
        if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
          const y = e.mapOptions === !0 && q !== void 0 ? q : [],
            O = k.map((N) => Fe(N, y));
          return e.modelValue === null && t === !0
            ? O.filter((N) => N !== null)
            : O;
        }
        return k;
      }),
      P = m(() => {
        const t = {};
        return (
          rn.forEach((k) => {
            const y = e[k];
            y !== void 0 && (t[k] = y);
          }),
          t
        );
      }),
      R = m(() => (e.optionsDark === null ? C.isDark.value : e.optionsDark)),
      D = m(() => Zt(b.value)),
      K = m(() => {
        let t = "q-field__input q-placeholder col";
        return e.hideSelected === !0 || b.value.length === 0
          ? [t, e.inputClass]
          : ((t += " q-field__input--padding"),
            e.inputClass === void 0 ? t : [t, e.inputClass]);
      }),
      L = m(
        () =>
          (e.virtualScrollHorizontal === !0
            ? "q-virtual-scroll--horizontal"
            : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
      ),
      B = m(() => Y.value === 0),
      j = m(() => b.value.map((t) => ee.value(t)).join(", ")),
      S = m(() =>
        e.optionsHtml === !0 ? () => !0 : (t) => t != null && t.html === !0
      ),
      J = m(
        () =>
          e.displayValueHtml === !0 ||
          (e.displayValue === void 0 &&
            (e.optionsHtml === !0 || b.value.some(S.value)))
      ),
      de = m(() => (C.focused.value === !0 ? e.tabindex : -1)),
      Be = m(() => ({
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": u.value === !0 ? "true" : "false",
        "aria-owns": `${C.targetUid.value}_lb`,
        "aria-controls": `${C.targetUid.value}_lb`,
      })),
      ie = m(() => {
        const t = {
          id: `${C.targetUid.value}_lb`,
          role: "listbox",
          "aria-multiselectable": e.multiple === !0 ? "true" : "false",
        };
        return (
          d.value >= 0 &&
            (t["aria-activedescendant"] = `${C.targetUid.value}_${d.value}`),
          t
        );
      }),
      Oe = m(() =>
        b.value.map((t, k) => ({
          index: k,
          opt: t,
          html: S.value(t),
          selected: !0,
          removeAtIndex: pt,
          toggleOption: Te,
          tabindex: de.value,
        }))
      ),
      xe = m(() => {
        if (Y.value === 0) return [];
        const { from: t, to: k } = ge.value;
        return e.options.slice(t, k).map((y, O) => {
          const N = Me.value(y) === !0,
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
              dark: R.value,
              role: "option",
              id: `${C.targetUid.value}_${$}`,
              onClick: () => {
                Te(y);
              },
            };
          return (
            N !== !0 &&
              (it(y) === !0 && (U.active = !0),
              d.value === $ && (U.focused = !0),
              (U["aria-selected"] = U.active === !0 ? "true" : "false"),
              i.platform.is.desktop === !0 &&
                (U.onMousemove = () => {
                  u.value === !0 && Le($);
                })),
            {
              index: $,
              opt: y,
              html: S.value(y),
              label: ee.value(y),
              selected: U.active,
              focused: U.focused,
              toggleOption: Te,
              setOptionIndex: Le,
              itemProps: U,
            }
          );
        });
      }),
      Pe = m(() =>
        e.dropdownIcon !== void 0 ? e.dropdownIcon : i.iconSet.arrow.dropdown
      ),
      Ae = m(
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
      ve = m(() => pe(e.optionValue, "value")),
      ee = m(() => pe(e.optionLabel, "label")),
      Me = m(() => pe(e.optionDisable, "disable")),
      je = m(() => b.value.map((t) => ve.value(t))),
      Pt = m(() => {
        const t = {
          onInput: yt,
          onChange: Z,
          onKeydown: st,
          onKeyup: bt,
          onKeypress: Ke,
          onFocus: ut,
          onClick(k) {
            v === !0 && Ze(k);
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
    X(
      b,
      (t) => {
        (q = t),
          e.useInput === !0 &&
            e.fillInput === !0 &&
            e.multiple !== !0 &&
            C.innerLoading.value !== !0 &&
            ((r.value !== !0 && u.value !== !0) || D.value !== !0) &&
            (p !== !0 && Je(), (r.value === !0 || u.value === !0) && V(""));
      },
      { immediate: !0 }
    ),
      X(() => e.fillInput, Je),
      X(u, Ot),
      X(Y, Rl);
    function nt(t) {
      return e.emitValue === !0 ? ve.value(t) : t;
    }
    function Qe(t) {
      if (t > -1 && t < b.value.length)
        if (e.multiple === !0) {
          const k = e.modelValue.slice();
          a("remove", { index: t, value: k.splice(t, 1)[0] }),
            a("update:modelValue", k);
        } else a("update:modelValue", null);
    }
    function pt(t) {
      Qe(t), C.focus();
    }
    function ot(t, k) {
      const y = nt(t);
      if (e.multiple !== !0) {
        e.fillInput === !0 && _(ee.value(t), !0, !0), a("update:modelValue", y);
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
    function Te(t, k) {
      if (C.editable.value !== !0 || t === void 0 || Me.value(t) === !0) return;
      const y = ve.value(t);
      if (e.multiple !== !0) {
        k !== !0 && (_(e.fillInput === !0 ? ee.value(t) : "", !0, !0), Ie()),
          E.value !== null && E.value.focus(),
          (b.value.length === 0 || ct(ve.value(b.value[0]), y) !== !0) &&
            a("update:modelValue", e.emitValue === !0 ? y : t);
        return;
      }
      if (
        ((v !== !0 || g.value === !0) && C.focus(), ut(), b.value.length === 0)
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
    function Le(t) {
      if (i.platform.is.desktop !== !0) return;
      const k = t > -1 && t < Y.value ? t : -1;
      d.value !== k && (d.value = k);
    }
    function Ee(t = 1, k) {
      if (u.value === !0) {
        let y = d.value;
        do y = al(y + t, -1, Y.value - 1);
        while (y !== -1 && y !== d.value && Me.value(e.options[y]) === !0);
        d.value !== y &&
          (Le(y),
          qe(y),
          k !== !0 &&
            e.useInput === !0 &&
            e.fillInput === !0 &&
            s(y >= 0 ? ee.value(e.options[y]) : w));
      }
    }
    function Fe(t, k) {
      const y = (O) => ct(ve.value(O), t);
      return e.options.find(y) || k.find(y) || t;
    }
    function pe(t, k) {
      const y = t !== void 0 ? t : k;
      return typeof y == "function"
        ? y
        : (O) => (O !== null && typeof O == "object" && y in O ? O[y] : O);
    }
    function it(t) {
      const k = ve.value(t);
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
      jt(t, 27) === !0 && u.value === !0 && (Ze(t), Ie(), Je()), a("keyup", t);
    }
    function bt(t) {
      const { value: k } = t.target;
      if (t.keyCode !== void 0) {
        rt(t);
        return;
      }
      if (
        ((t.target.value = ""),
        clearTimeout(h),
        Je(),
        typeof k == "string" && k.length > 0)
      ) {
        const y = k.toLocaleLowerCase(),
          O = ($) => {
            const U = e.options.find(
              (ue) => $.value(ue).toLocaleLowerCase() === y
            );
            return U === void 0
              ? !1
              : (b.value.indexOf(U) === -1 ? Te(U) : Ie(), !0);
          },
          N = ($) => {
            O(ve) !== !0 && (O(ee) === !0 || $ === !0 || V(k, !0, () => N(!0)));
          };
        N();
      } else C.clearValue(t);
    }
    function Ke(t) {
      a("keypress", t);
    }
    function st(t) {
      if ((a("keydown", t), ra(t) === !0)) return;
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
      if (t.target === void 0 || t.target.id !== C.targetUid.value) return;
      if (t.keyCode === 40 && C.innerLoading.value !== !0 && u.value === !1) {
        Re(t), Ye();
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
        (Re(t), (d.value = -1), Ee(t.keyCode === 36 ? 1 : -1, e.multiple)),
        (t.keyCode === 33 || t.keyCode === 34) &&
          ke.value !== void 0 &&
          (Re(t),
          (d.value = Math.max(
            -1,
            Math.min(
              Y.value,
              d.value + (t.keyCode === 33 ? -1 : 1) * ke.value.view
            )
          )),
          Ee(t.keyCode === 33 ? 1 : -1, e.multiple)),
        (t.keyCode === 38 || t.keyCode === 40) &&
          (Re(t), Ee(t.keyCode === 38 ? -1 : 1, e.multiple));
      const O = Y.value;
      if (
        ((z === void 0 || A < Date.now()) && (z = ""),
        O > 0 &&
          e.useInput !== !0 &&
          t.key !== void 0 &&
          t.key.length === 1 &&
          t.altKey === t.ctrlKey &&
          (t.keyCode !== 32 || z.length > 0))
      ) {
        u.value !== !0 && Ye(t);
        const N = t.key.toLocaleLowerCase(),
          $ = z.length === 1 && z[0] === N;
        (A = Date.now() + 1500), $ === !1 && (Re(t), (z += N));
        const U = new RegExp(
          "^" +
            z
              .split("")
              .map((At) => (un.indexOf(At) > -1 ? "\\" + At : At))
              .join(".*"),
          "i"
        );
        let ue = d.value;
        if ($ === !0 || ue < 0 || U.test(ee.value(e.options[ue])) !== !0)
          do ue = al(ue + 1, -1, O - 1);
          while (
            ue !== d.value &&
            (Me.value(e.options[ue]) === !0 ||
              U.test(ee.value(e.options[ue])) !== !0)
          );
        d.value !== ue &&
          ye(() => {
            Le(ue),
              qe(ue),
              ue >= 0 &&
                e.useInput === !0 &&
                e.fillInput === !0 &&
                s(ee.value(e.options[ue]));
          });
        return;
      }
      if (
        !(
          t.keyCode !== 13 &&
          (t.keyCode !== 32 || e.useInput === !0 || z !== "") &&
          (t.keyCode !== 9 || y === !1)
        )
      ) {
        if ((t.keyCode !== 9 && Re(t), d.value > -1 && d.value < O)) {
          Te(e.options[d.value]);
          return;
        }
        if (k === !0) {
          const N = ($, U) => {
            if (U) {
              if (cl(U) !== !0) return;
            } else U = e.newValueMode;
            if ($ == null) return;
            _("", e.multiple !== !0, !0),
              (U === "toggle" ? Te : ot)($, U === "add-unique"),
              e.multiple !== !0 && (E.value !== null && E.value.focus(), Ie());
          };
          if (
            (e.onNewValue !== void 0 ? a("new-value", c.value, N) : N(c.value),
            e.multiple !== !0)
          )
            return;
        }
        u.value === !0 ? Xe() : C.innerLoading.value !== !0 && Ye();
      }
    }
    function He() {
      return v === !0
        ? me.value
        : le.value !== null && le.value.__qPortalInnerRef.value !== null
        ? le.value.__qPortalInnerRef.value
        : void 0;
    }
    function Vt() {
      return He();
    }
    function Bt() {
      return e.hideSelected === !0
        ? []
        : l["selected-item"] !== void 0
        ? Oe.value.map((t) => l["selected-item"](t)).slice()
        : l.selected !== void 0
        ? [].concat(l.selected())
        : e.useChips === !0
        ? Oe.value.map((t, k) =>
            f(
              Qa,
              {
                key: "option-" + k,
                removable: C.editable.value === !0 && Me.value(t.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: de.value,
                onRemove() {
                  t.removeAtIndex(k);
                },
              },
              () =>
                f("span", {
                  class: "ellipsis",
                  [t.html === !0 ? "innerHTML" : "textContent"]: ee.value(
                    t.opt
                  ),
                })
            )
          )
        : [
            f("span", {
              [J.value === !0 ? "innerHTML" : "textContent"]:
                e.displayValue !== void 0 ? e.displayValue : j.value,
            }),
          ];
    }
    function St() {
      if (B.value === !0)
        return l["no-option"] !== void 0
          ? l["no-option"]({ inputValue: c.value })
          : void 0;
      const t =
        l.option !== void 0
          ? l.option
          : (y) =>
              f(Ka, { key: y.index, ...y.itemProps }, () =>
                f(Ua, () =>
                  f(Ga, () =>
                    f("span", {
                      [y.html === !0 ? "innerHTML" : "textContent"]: y.label,
                    })
                  )
                )
              );
      let k = ce("div", xe.value.map(t));
      return (
        l["before-options"] !== void 0 && (k = l["before-options"]().concat(k)),
        Nt(l["after-options"], k)
      );
    }
    function Tt(t, k) {
      const y =
          k === !0 ? { ...Be.value, ...C.splitAttrs.attributes.value } : void 0,
        O = {
          ref: k === !0 ? E : void 0,
          key: "i_t",
          class: K.value,
          style: e.inputStyle,
          value: c.value !== void 0 ? c.value : "",
          type: "search",
          ...y,
          id: k === !0 ? C.targetUid.value : void 0,
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
    function yt(t) {
      clearTimeout(h),
        !(t && t.target && t.target.qComposing === !0) &&
          (s(t.target.value || ""),
          (p = !0),
          (w = c.value),
          C.focused.value !== !0 && (v !== !0 || g.value === !0) && C.focus(),
          e.onFilter !== void 0 &&
            (h = setTimeout(() => {
              V(c.value);
            }, e.inputDebounce)));
    }
    function s(t) {
      c.value !== t && ((c.value = t), a("input-value", t));
    }
    function _(t, k, y) {
      (p = y !== !0),
        e.useInput === !0 &&
          (s(t), (k === !0 || y !== !0) && (w = t), k !== !0 && V(t));
    }
    function V(t, k, y) {
      if (e.onFilter === void 0 || (k !== !0 && C.focused.value !== !0)) return;
      C.innerLoading.value === !0
        ? a("filter-abort")
        : ((C.innerLoading.value = !0), (n.value = !0)),
        t !== "" &&
          e.multiple !== !0 &&
          b.value.length > 0 &&
          p !== !0 &&
          t === ee.value(b.value[0]) &&
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
            (k === !0 || C.focused.value === !0) &&
              x === O &&
              (clearTimeout(x),
              typeof N == "function" && N(),
              (n.value = !1),
              ye(() => {
                (C.innerLoading.value = !1),
                  C.editable.value === !0 &&
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
            C.focused.value === !0 &&
              x === O &&
              (clearTimeout(x), (C.innerLoading.value = !1), (n.value = !1)),
              u.value === !0 && (u.value = !1);
          }
        );
    }
    function M() {
      return f(
        on,
        {
          ref: le,
          class: L.value,
          style: e.popupContentStyle,
          modelValue: u.value,
          fit: e.menuShrink !== !0,
          cover: e.optionsCover === !0 && B.value !== !0 && e.useInput !== !0,
          anchor: e.menuAnchor,
          self: e.menuSelf,
          offset: e.menuOffset,
          dark: R.value,
          noParentEvent: !0,
          noRefocus: !0,
          noFocus: !0,
          square: Ae.value,
          transitionShow: e.transitionShow,
          transitionHide: e.transitionHide,
          transitionDuration: e.transitionDuration,
          separateClosePopup: !0,
          ...ie.value,
          onScrollPassive: Ce,
          onBeforeShow: Kt,
          onBeforeHide: F,
          onShow: Q,
        },
        St
      );
    }
    function F(t) {
      Ut(t), Xe();
    }
    function Q() {
      oe();
    }
    function W(t) {
      Ze(t),
        E.value !== null && E.value.focus(),
        (g.value = !0),
        window.scrollTo(
          window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
          0
        );
    }
    function Se(t) {
      Ze(t),
        ye(() => {
          g.value = !1;
        });
    }
    function ae() {
      const t = [
        f(
          Wa,
          {
            class: `col-auto ${C.fieldClass.value}`,
            ...P.value,
            for: C.targetUid.value,
            dark: R.value,
            square: !0,
            loading: n.value,
            itemAligned: !1,
            filled: !0,
            stackLabel: c.value.length > 0,
            ...C.splitAttrs.listeners.value,
            onFocus: W,
            onBlur: Se,
          },
          {
            ...l,
            rawControl: () => C.getControl(!0),
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
                ref: me,
                class: L.value + " scroll",
                style: e.popupContentStyle,
                ...ie.value,
                onClick: gt,
                onScrollPassive: Ce,
              },
              St()
            )
          ),
        f(
          sa,
          {
            ref: se,
            modelValue: r.value,
            position: e.useInput === !0 ? "top" : void 0,
            transitionShow: H,
            transitionHide: e.transitionHide,
            transitionDuration: e.transitionDuration,
            onBeforeShow: Kt,
            onBeforeHide: Ue,
            onHide: Ge,
            onShow: Rt,
          },
          () =>
            f(
              "div",
              {
                class:
                  "q-select__dialog" +
                  (R.value === !0 ? " q-select__dialog--dark q-dark" : "") +
                  (g.value === !0 ? " q-select__dialog--focused" : ""),
              },
              t
            )
        )
      );
    }
    function Ue(t) {
      Ut(t),
        se.value !== null &&
          se.value.__updateRefocusTarget(
            C.rootRef.value.querySelector(
              ".q-field__native > [tabindex]:last-child"
            )
          ),
        (C.focused.value = !1);
    }
    function Ge(t) {
      Ie(), C.focused.value === !1 && a("blur", t), Je();
    }
    function Rt() {
      const t = document.activeElement;
      (t === null || t.id !== C.targetUid.value) &&
        E.value !== null &&
        E.value !== t &&
        E.value.focus(),
        oe();
    }
    function Xe() {
      r.value !== !0 &&
        ((d.value = -1),
        u.value === !0 && (u.value = !1),
        C.focused.value === !1 &&
          (clearTimeout(x),
          (x = void 0),
          C.innerLoading.value === !0 &&
            (a("filter-abort"), (C.innerLoading.value = !1), (n.value = !1))));
    }
    function Ye(t) {
      C.editable.value === !0 &&
        (v === !0
          ? (C.onControlFocusin(t),
            (r.value = !0),
            ye(() => {
              C.focus();
            }))
          : C.focus(),
        e.onFilter !== void 0
          ? V(c.value)
          : (B.value !== !0 || l["no-option"] !== void 0) && (u.value = !0));
    }
    function Ie() {
      (r.value = !1), Xe();
    }
    function Je() {
      e.useInput === !0 &&
        _(
          (e.multiple !== !0 &&
            e.fillInput === !0 &&
            b.value.length > 0 &&
            ee.value(b.value[0])) ||
            "",
          !0,
          !0
        );
    }
    function Ot(t) {
      let k = -1;
      if (t === !0) {
        if (b.value.length > 0) {
          const y = ve.value(b.value[0]);
          k = e.options.findIndex((O) => ct(ve.value(O), y));
        }
        he(k);
      }
      Le(k);
    }
    function Rl(t, k) {
      u.value === !0 &&
        C.innerLoading.value === !1 &&
        (he(-1, !0),
        ye(() => {
          u.value === !0 &&
            C.innerLoading.value === !1 &&
            (t > k ? he() : Ot(!0));
        }));
    }
    function Qt() {
      r.value === !1 && le.value !== null && le.value.updatePosition();
    }
    function Kt(t) {
      t !== void 0 && Ze(t),
        a("popup-show", t),
        (C.hasPopupOpen = !0),
        C.onControlFocusin(t);
    }
    function Ut(t) {
      t !== void 0 && Ze(t),
        a("popup-hide", t),
        (C.hasPopupOpen = !1),
        C.onControlFocusout(t);
    }
    function Gt() {
      (v =
        i.platform.is.mobile !== !0 && e.behavior !== "dialog"
          ? !1
          : e.behavior !== "menu" &&
            (e.useInput === !0
              ? l["no-option"] !== void 0 ||
                e.onFilter !== void 0 ||
                B.value === !1
              : !0)),
        (H =
          i.platform.is.ios === !0 && v === !0 && e.useInput === !0
            ? "fade"
            : e.transitionShow);
    }
    return (
      ia(Gt),
      ua(Qt),
      Gt(),
      We(() => {
        clearTimeout(h);
      }),
      Object.assign(o, {
        showPopup: Ye,
        hidePopup: Ie,
        removeAtIndex: Qe,
        add: ot,
        toggleOption: Te,
        getOptionIndex: () => d.value,
        setOptionIndex: Le,
        moveOptionSelection: Ee,
        filter: V,
        updateMenuPosition: Qt,
        updateInputValue: _,
        isOptionSelected: it,
        getEmittingOptionValue: nt,
        isOptionDisabled: (...t) => Me.value.apply(null, t) === !0,
        getOptionValue: (...t) => ve.value.apply(null, t),
        getOptionLabel: (...t) => ee.value.apply(null, t),
      }),
      Object.assign(C, {
        innerValue: b,
        fieldClass: m(
          () =>
            `q-select q-field--auto-height q-select--with${
              e.useInput !== !0 ? "out" : ""
            }-input q-select--with${
              e.useChips !== !0 ? "out" : ""
            }-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
        ),
        inputRef: T,
        targetRef: E,
        hasValue: D,
        showPopup: Ye,
        floatingLabel: m(
          () =>
            (e.hideSelected !== !0 && D.value === !0) ||
            typeof c.value == "number" ||
            c.value.length > 0 ||
            Zt(e.displayValue)
        ),
        getControlChild: () => {
          if (
            C.editable.value !== !1 &&
            (r.value === !0 || B.value !== !0 || l["no-option"] !== void 0)
          )
            return v === !0 ? ae() : M();
          C.hasPopupOpen === !0 && (C.hasPopupOpen = !1);
        },
        controlEvents: {
          onFocusin(t) {
            C.onControlFocusin(t);
          },
          onFocusout(t) {
            C.onControlFocusout(t, () => {
              Je(), Xe();
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
          const k = Bt(),
            y = t === !0 || r.value !== !0 || v !== !0;
          if (e.useInput === !0) k.push(Tt(t, y));
          else if (C.editable.value === !0) {
            const N = y === !0 ? Be.value : void 0;
            k.push(
              f("input", {
                ref: y === !0 ? E : void 0,
                key: "d_t",
                class: "q-select__focus-target",
                id: y === !0 ? C.targetUid.value : void 0,
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
                    onKeyup: bt,
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
              : C.splitAttrs.attributes.value;
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
      yl(C)
    );
  },
});
const cn = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function dl(e, l, a) {
  return {
    transform:
      l === !0
        ? `translateX(${a.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)`
        : `scale3d(${e},1,1)`,
  };
}
var dn = re({
  name: "QLinearProgress",
  props: {
    ...De,
    ..._l,
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
    const { proxy: a } = fe(),
      o = Ne(e, a.$q),
      i = kl(e, cn),
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
      g = m(() => dl(e.buffer !== void 0 ? e.buffer : 1, r.value, a.$q)),
      n = m(
        () =>
          `q-linear-progress__track absolute-full q-linear-progress__track--with${
            e.instantFeedback === !0 ? "out" : ""
          }-transition q-linear-progress__track--${
            o.value === !0 ? "dark" : "light"
          }` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
      ),
      h = m(() => dl(u.value === !0 ? 1 : e.value, r.value, a.$q)),
      q = m(
        () =>
          `q-linear-progress__model absolute-full q-linear-progress__model--with${
            e.instantFeedback === !0 ? "out" : ""
          }-transition q-linear-progress__model--${
            u.value === !0 ? "in" : ""
          }determinate`
      ),
      v = m(() => ({ width: `${e.value * 100}%` })),
      p = m(
        () =>
          `q-linear-progress__stripe absolute-${
            e.reverse === !0 ? "right" : "left"
          }`
      );
    return () => {
      const x = [
        f("div", { class: n.value, style: g.value }),
        f("div", { class: q.value, style: h.value }),
      ];
      return (
        e.stripe === !0 &&
          u.value === !1 &&
          x.push(f("div", { class: p.value, style: v.value })),
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
const vn = { fullscreen: Boolean, noRouteFullscreenExit: Boolean },
  fn = ["update:fullscreen", "fullscreen"];
function mn() {
  const e = fe(),
    { props: l, emit: a, proxy: o } = e;
  let i, u, r;
  const d = I(!1);
  da(e) === !0 &&
    X(
      () => o.$route.fullPath,
      () => {
        l.noRouteFullscreenExit !== !0 && n();
      }
    ),
    X(
      () => l.fullscreen,
      (h) => {
        d.value !== h && c();
      }
    ),
    X(d, (h) => {
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
    xt(() => {
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
function gn(e, l) {
  return new Date(e) - new Date(l);
}
const hn = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (e) => e === "ad" || e === "da",
    default: "ad",
  },
};
function bn(e, l, a, o) {
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
              q =
                typeof n.field == "function"
                  ? (v) => n.field(v)
                  : (v) => v[n.field];
            return d.sort((v, p) => {
              let x = q(v),
                w = q(p);
              return x == null
                ? -1 * h
                : w == null
                ? 1 * h
                : n.sort !== void 0
                ? n.sort(x, w, v, p) * h
                : Ht(x) === !0 && Ht(w) === !0
                ? (x - w) * h
                : tl(x) === !0 && tl(w) === !0
                ? gn(x, w) * h
                : typeof x == "boolean" && typeof w == "boolean"
                ? (x - w) * h
                : (([x, w] = [x, w].map((H) =>
                    (H + "").toLocaleString().toLowerCase()
                  )),
                  x < w ? -1 * h : x === w ? 0 : h);
            });
          }
    );
  function r(d) {
    let c = e.columnSortOrder;
    if (va(d) === !0) d.sortOrder && (c = d.sortOrder), (d = d.name);
    else {
      const h = a.value.find((q) => q.name === d);
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
const Sn = { filter: [String, Object], filterMethod: Function };
function yn(e, l) {
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
    X(
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
function wn(e, l) {
  for (const a in l) if (l[a] !== e[a]) return !1;
  return !0;
}
function vl(e) {
  return (
    e.page < 1 && (e.page = 1),
    e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0),
    e
  );
}
const _n = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0],
  },
  "onUpdate:pagination": [Function, Array],
};
function kn(e, l) {
  const { props: a, emit: o } = e,
    i = I(
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
      return vl(n);
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
    const q = vl({ ...u.value, ...n });
    if (wn(u.value, q) === !0) {
      r.value === !0 && h === !0 && d(q);
      return;
    }
    if (r.value === !0) {
      d(q);
      return;
    }
    a.pagination !== void 0 && a["onUpdate:pagination"] !== void 0
      ? o("update:pagination", q)
      : (i.value = q);
  }
  return {
    innerPagination: i,
    computedPagination: u,
    isServerSide: r,
    requestServerInteraction: c,
    setPagination: g,
  };
}
function Cn(e, l, a, o, i, u) {
  const {
      props: r,
      emit: d,
      proxy: { $q: c },
    } = e,
    g = m(() => (o.value === !0 ? a.value.rowsNumber || 0 : u.value)),
    n = m(() => {
      const { page: T, rowsPerPage: E } = a.value;
      return (T - 1) * E;
    }),
    h = m(() => {
      const { page: T, rowsPerPage: E } = a.value;
      return T * E;
    }),
    q = m(() => a.value.page === 1),
    v = m(() =>
      a.value.rowsPerPage === 0
        ? 1
        : Math.max(1, Math.ceil(g.value / a.value.rowsPerPage))
    ),
    p = m(() => (h.value === 0 ? !0 : a.value.page >= v.value)),
    x = m(() =>
      (r.rowsPerPageOptions.includes(l.value.rowsPerPage)
        ? r.rowsPerPageOptions
        : [l.value.rowsPerPage].concat(r.rowsPerPageOptions)
      ).map((E) => ({
        label: E === 0 ? c.lang.table.allRows : "" + E,
        value: E,
      }))
    );
  X(v, (T, E) => {
    if (T === E) return;
    const le = a.value.page;
    T && !le ? i({ page: 1 }) : T < le && i({ page: T });
  });
  function w() {
    i({ page: 1 });
  }
  function H() {
    const { page: T } = a.value;
    T > 1 && i({ page: T - 1 });
  }
  function z() {
    const { page: T, rowsPerPage: E } = a.value;
    h.value > 0 && T * E < g.value && i({ page: T + 1 });
  }
  function A() {
    i({ page: v.value });
  }
  return (
    r["onUpdate:pagination"] !== void 0 &&
      d("update:pagination", { ...a.value }),
    {
      firstRowIndex: n,
      lastRowIndex: h,
      isFirstPage: q,
      isLastPage: p,
      pagesNumber: v,
      computedRowsPerPageOptions: x,
      computedRowsNumber: g,
      firstPage: w,
      prevPage: H,
      nextPage: z,
      lastPage: A,
    }
  );
}
const qn = {
    selection: {
      type: String,
      default: "none",
      validator: (e) => ["single", "multiple", "none"].includes(e),
    },
    selected: { type: Array, default: () => [] },
  },
  xn = ["update:selected", "selection"];
function Pn(e, l, a, o) {
  const i = m(() => {
      const p = {};
      return (
        e.selected.map(o.value).forEach((x) => {
          p[x] = !0;
        }),
        p
      );
    }),
    u = m(() => e.selection !== "none"),
    r = m(() => e.selection === "single"),
    d = m(() => e.selection === "multiple"),
    c = m(
      () =>
        a.value.length > 0 && a.value.every((p) => i.value[o.value(p)] === !0)
    ),
    g = m(
      () => c.value !== !0 && a.value.some((p) => i.value[o.value(p)] === !0)
    ),
    n = m(() => e.selected.length);
  function h(p) {
    return i.value[p] === !0;
  }
  function q() {
    l("update:selected", []);
  }
  function v(p, x, w, H) {
    l("selection", { rows: x, added: w, keys: p, evt: H });
    const z =
      r.value === !0
        ? w === !0
          ? x
          : []
        : w === !0
        ? e.selected.concat(x)
        : e.selected.filter((A) => p.includes(o.value(A)) === !1);
    l("update:selected", z);
  }
  return {
    hasSelectionMode: u,
    singleSelection: r,
    multipleSelection: d,
    allRowsSelected: c,
    someRowsSelected: g,
    rowsSelectedNumber: n,
    isRowSelected: h,
    clearSelection: q,
    updateSelection: v,
  };
}
function fl(e) {
  return Array.isArray(e) ? e.slice() : [];
}
const pn = { expanded: Array },
  Vn = ["update:expanded"];
function Bn(e, l) {
  const a = I(fl(e.expanded));
  X(
    () => e.expanded,
    (r) => {
      a.value = fl(r);
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
const Tn = { visibleColumns: Array };
function Rn(e, l, a) {
  const o = m(() => {
      if (e.columns !== void 0) return e.columns;
      const d = e.rows[0];
      return d !== void 0
        ? Object.keys(d).map((c) => ({
            name: c,
            label: c.toUpperCase(),
            field: c,
            align: Ht(d[c]) ? "right" : "left",
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
          q = `text-${h}`;
        return {
          ...n,
          align: h,
          __iconClass: `q-table__sort-icon q-table__sort-icon--${h}`,
          __thClass:
            q +
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
                ? () => q + " " + n.classes
                : (v) => q + " " + n.classes(v)
              : () => q,
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
const _t = "q-table__bottom row items-center",
  Tl = {};
Pl.forEach((e) => {
  Tl[e] = {};
});
var On = re({
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
    ...Tl,
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
    ...vn,
    ...Tn,
    ...Sn,
    ..._n,
    ...pn,
    ...qn,
    ...hn,
  },
  emits: ["request", "virtual-scroll", ...fn, ...Vn, ...xn],
  setup(e, { slots: l, emit: a }) {
    const o = fe(),
      {
        proxy: { $q: i },
      } = o,
      u = Ne(e, i),
      { inFullscreen: r, toggleFullscreen: d } = mn(),
      c = m(() =>
        typeof e.rowKey == "function" ? e.rowKey : (s) => s[e.rowKey]
      ),
      g = I(null),
      n = I(null),
      h = m(() => e.grid !== !0 && e.virtualScroll === !0),
      q = m(
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
          (e.grid === !0 ? " q-table--grid" : q.value) +
          (u.value === !0 ? " q-table--dark" : "") +
          (e.dense === !0 ? " q-table--dense" : "") +
          (e.wrapCells === !1 ? " q-table--no-wrap" : "") +
          (r.value === !0 ? " fullscreen scroll" : "")
      ),
      p = m(() => v.value + (e.loading === !0 ? " q-table--loading" : ""));
    X(
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
        isServerSide: H,
        requestServerInteraction: z,
        setPagination: A,
      } = kn(o, Fe),
      { computedFilterMethod: T } = yn(e, A),
      { isRowExpanded: E, setExpanded: le, updateExpanded: se } = Bn(e, a),
      me = m(() => {
        let s = e.rows;
        if (H.value === !0 || s.length === 0) return s;
        const { sortBy: _, descending: V } = w.value;
        return (
          e.filter && (s = T.value(s, e.filter, b.value, Fe)),
          D.value !== null && (s = K.value(e.rows === s ? s.slice() : s, _, V)),
          s
        );
      }),
      be = m(() => me.value.length),
      Z = m(() => {
        let s = me.value;
        if (H.value === !0) return s;
        const { rowsPerPage: _ } = w.value;
        return (
          _ !== 0 &&
            (B.value === 0 && e.rows !== s
              ? s.length > j.value && (s = s.slice(0, j.value))
              : (s = s.slice(B.value, j.value))),
          s
        );
      }),
      {
        hasSelectionMode: Y,
        singleSelection: _e,
        multipleSelection: ge,
        allRowsSelected: ke,
        someRowsSelected: he,
        rowsSelectedNumber: ce,
        isRowSelected: Ce,
        clearSelection: qe,
        updateSelection: oe,
      } = Pn(e, a, Z, c),
      {
        colList: C,
        computedCols: b,
        computedColsMap: P,
        computedColspan: R,
      } = Rn(e, w, Y),
      { columnToSort: D, computedSortMethod: K, sort: L } = bn(e, w, C, A),
      {
        firstRowIndex: B,
        lastRowIndex: j,
        isFirstPage: S,
        isLastPage: J,
        pagesNumber: de,
        computedRowsPerPageOptions: Be,
        computedRowsNumber: ie,
        firstPage: Oe,
        prevPage: xe,
        nextPage: Pe,
        lastPage: Ae,
      } = Cn(o, x, w, H, A, be),
      ze = m(() => Z.value.length === 0),
      ve = m(() => {
        const s = {};
        return (
          Pl.forEach((_) => {
            s[_] = e[_];
          }),
          s.virtualScrollItemSize === void 0 &&
            (s.virtualScrollItemSize = e.dense === !0 ? 28 : 48),
          s
        );
      });
    function ee() {
      h.value === !0 && n.value.reset();
    }
    function Me() {
      if (e.grid === !0) return yt();
      const s = e.hideHeader !== !0 ? rt : null;
      if (h.value === !0) {
        const V = l["top-row"],
          M = l["bottom-row"],
          F = { default: (Q) => Qe(Q.item, l.body, Q.index) };
        if (V !== void 0) {
          const Q = f("tbody", V({ cols: b.value }));
          F.before = s === null ? () => Q : () => [s()].concat(Q);
        } else s !== null && (F.before = s);
        return (
          M !== void 0 && (F.after = () => f("tbody", M({ cols: b.value }))),
          f(
            Na,
            {
              ref: n,
              class: e.tableClass,
              style: e.tableStyle,
              ...ve.value,
              scrollTarget: e.virtualScrollTarget,
              items: Z.value,
              type: "__qtable",
              tableColspan: R.value,
              onVirtualScroll: Pt,
            },
            F
          )
        );
      }
      const _ = [pt()];
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
      const V = g.value.querySelector(`tbody tr:nth-of-type(${s + 1})`);
      if (V !== null) {
        const M = g.value.querySelector(".q-table__middle.scroll"),
          F = V.offsetTop - e.virtualScrollStickySizeStart,
          Q = F < M.scrollTop ? "decrease" : "increase";
        (M.scrollTop = F),
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
        f(dn, {
          class: "q-table__linear-progress",
          color: e.color,
          dark: u.value,
          indeterminate: !0,
          trackColor: "transparent",
        }),
      ];
    }
    function Qe(s, _, V) {
      const M = c.value(s),
        F = Ce(M);
      if (_ !== void 0)
        return _(
          ot({ key: M, row: s, pageIndex: V, __trClass: F ? "selected" : "" })
        );
      const Q = l["body-cell"],
        W = b.value.map((ae) => {
          const Ue = l[`body-cell-${ae.name}`],
            Ge = Ue !== void 0 ? Ue : Q;
          return Ge !== void 0
            ? Ge(Te({ key: M, row: s, pageIndex: V, col: ae }))
            : f(
                "td",
                { class: ae.__tdClass(s), style: ae.__tdStyle(s) },
                Fe(ae, s)
              );
        });
      if (Y.value === !0) {
        const ae = l["body-selection"],
          Ue =
            ae !== void 0
              ? ae(Le({ key: M, row: s, pageIndex: V }))
              : [
                  f(Mt, {
                    modelValue: F,
                    color: e.color,
                    dark: u.value,
                    dense: e.dense,
                    "onUpdate:modelValue": (Ge, Rt) => {
                      oe([M], [s], Ge, Rt);
                    },
                  }),
                ];
        W.unshift(f("td", { class: "q-table--col-auto-width" }, Ue));
      }
      const Se = { key: M, class: { selected: F } };
      return (
        e.onRowClick !== void 0 &&
          ((Se.class["cursor-pointer"] = !0),
          (Se.onClick = (ae) => {
            a("RowClick", ae, s, V);
          })),
        e.onRowDblclick !== void 0 &&
          ((Se.class["cursor-pointer"] = !0),
          (Se.onDblclick = (ae) => {
            a("RowDblclick", ae, s, V);
          })),
        e.onRowContextmenu !== void 0 &&
          ((Se.class["cursor-pointer"] = !0),
          (Se.onContextmenu = (ae) => {
            a("RowContextmenu", ae, s, V);
          })),
        f("tr", Se, W)
      );
    }
    function pt() {
      const s = l.body,
        _ = l["top-row"],
        V = l["bottom-row"];
      let M = Z.value.map((F, Q) => Qe(F, s, Q));
      return (
        _ !== void 0 && (M = _({ cols: b.value }).concat(M)),
        V !== void 0 && (M = M.concat(V({ cols: b.value }))),
        f("tbody", M)
      );
    }
    function ot(s) {
      return (
        Ee(s),
        (s.cols = s.cols.map((_) => dt({ ..._ }, "value", () => Fe(_, s.row)))),
        s
      );
    }
    function Te(s) {
      return Ee(s), dt(s, "value", () => Fe(s.col, s.row)), s;
    }
    function Le(s) {
      return Ee(s), s;
    }
    function Ee(s) {
      Object.assign(s, {
        cols: b.value,
        colsMap: P.value,
        sort: L,
        rowIndex: B.value + s.pageIndex,
        color: e.color,
        dark: u.value,
        dense: e.dense,
      }),
        Y.value === !0 &&
          dt(
            s,
            "selected",
            () => Ce(s.key),
            (_, V) => {
              oe([s.key], [s.row], _, V);
            }
          ),
        dt(
          s,
          "expand",
          () => E(s.key),
          (_) => {
            se(s.key, _);
          }
        );
    }
    function Fe(s, _) {
      const V = typeof s.field == "function" ? s.field(_) : _[s.field];
      return s.format !== void 0 ? s.format(V, _) : V;
    }
    const pe = m(() => ({
      pagination: w.value,
      pagesNumber: de.value,
      isFirstPage: S.value,
      isLastPage: J.value,
      firstPage: Oe,
      prevPage: xe,
      nextPage: Pe,
      lastPage: Ae,
      inFullscreen: r.value,
      toggleFullscreen: d,
    }));
    function it() {
      const s = l.top,
        _ = l["top-left"],
        V = l["top-right"],
        M = l["top-selection"],
        F = Y.value === !0 && M !== void 0 && ce.value > 0,
        Q = "q-table__top relative-position row items-center";
      if (s !== void 0) return f("div", { class: Q }, [s(pe.value)]);
      let W;
      if (
        (F === !0
          ? (W = M(pe.value).slice())
          : ((W = []),
            _ !== void 0
              ? W.push(f("div", { class: "q-table-control" }, [_(pe.value)]))
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
        V !== void 0 &&
          (W.push(f("div", { class: "q-table__separator col" })),
          W.push(f("div", { class: "q-table__control" }, [V(pe.value)]))),
        W.length !== 0)
      )
        return f("div", { class: Q }, W);
    }
    const ut = m(() => (he.value === !0 ? null : ke.value));
    function rt() {
      const s = bt();
      return (
        e.loading === !0 &&
          l.loading === void 0 &&
          s.push(
            f("tr", { class: "q-table__progress" }, [
              f("th", { class: "relative-position", colspan: R.value }, nt()),
            ])
          ),
        f("thead", s)
      );
    }
    function bt() {
      const s = l.header,
        _ = l["header-cell"];
      if (s !== void 0) return s(Ke({ header: !0 })).slice();
      const V = b.value.map((M) => {
        const F = l[`header-cell-${M.name}`],
          Q = F !== void 0 ? F : _,
          W = Ke({ col: M });
        return Q !== void 0
          ? Q(W)
          : f(La, { key: M.name, props: W }, () => M.label);
      });
      if (_e.value === !0 && e.grid !== !0)
        V.unshift(f("th", { class: "q-table--col-auto-width" }, " "));
      else if (ge.value === !0) {
        const M = l["header-selection"],
          F =
            M !== void 0
              ? M(Ke({}))
              : [
                  f(Mt, {
                    color: e.color,
                    modelValue: ut.value,
                    dark: u.value,
                    dense: e.dense,
                    "onUpdate:modelValue": st,
                  }),
                ];
        V.unshift(f("th", { class: "q-table--col-auto-width" }, F));
      }
      return [
        f("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, V),
      ];
    }
    function Ke(s) {
      return (
        Object.assign(s, {
          cols: b.value,
          sort: L,
          colsMap: P.value,
          color: e.color,
          dark: u.value,
          dense: e.dense,
        }),
        ge.value === !0 && dt(s, "selected", () => ut.value, st),
        s
      );
    }
    function st(s) {
      he.value === !0 && (s = !1), oe(Z.value.map(c.value), Z.value, s);
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
    function Vt() {
      if (e.hideBottom === !0) return;
      if (ze.value === !0) {
        if (e.hideNoData === !0) return;
        const V =
            e.loading === !0
              ? e.loadingLabel || i.lang.table.loading
              : e.filter
              ? e.noResultsLabel || i.lang.table.noResults
              : e.noDataLabel || i.lang.table.noData,
          M = l["no-data"],
          F =
            M !== void 0
              ? [
                  M({
                    message: V,
                    icon: i.iconSet.table.warning,
                    filter: e.filter,
                  }),
                ]
              : [
                  f(tt, {
                    class: "q-table__bottom-nodata-icon",
                    name: i.iconSet.table.warning,
                  }),
                  V,
                ];
        return f("div", { class: _t + " q-table__bottom--nodata" }, F);
      }
      const s = l.bottom;
      if (s !== void 0) return f("div", { class: _t }, [s(pe.value)]);
      const _ =
        e.hideSelectedBanner !== !0 && Y.value === !0 && ce.value > 0
          ? [
              f("div", { class: "q-table__control" }, [
                f("div", [
                  (e.selectedRowsLabel || i.lang.table.selectedRecords)(
                    ce.value
                  ),
                ]),
              ]),
            ]
          : [];
      if (e.hidePagination !== !0)
        return f("div", { class: _t + " justify-end" }, St(_));
      if (_.length > 0) return f("div", { class: _t }, _);
    }
    function Bt(s) {
      A({ page: 1, rowsPerPage: s.value });
    }
    function St(s) {
      let _;
      const { rowsPerPage: V } = w.value,
        M = e.paginationLabel || i.lang.table.pagination,
        F = l.pagination,
        Q = e.rowsPerPageOptions.length > 1;
      if (
        (s.push(f("div", { class: "q-table__separator col" })),
        Q === !0 &&
          s.push(
            f("div", { class: "q-table__control" }, [
              f("span", { class: "q-table__bottom-item" }, [
                e.rowsPerPageLabel || i.lang.table.recordsPerPage,
              ]),
              f(sn, {
                class: "q-table__select inline q-table__bottom-item",
                color: e.color,
                modelValue: V,
                options: Be.value,
                displayValue: V === 0 ? i.lang.table.allRows : V,
                dark: u.value,
                borderless: !0,
                dense: !0,
                optionsDense: !0,
                optionsCover: !0,
                "onUpdate:modelValue": Bt,
              }),
            ])
          ),
        F !== void 0)
      )
        _ = F(pe.value);
      else if (
        ((_ = [
          f("span", V !== 0 ? { class: "q-table__bottom-item" } : {}, [
            V
              ? M(B.value + 1, Math.min(j.value, ie.value), ie.value)
              : M(1, be.value, ie.value),
          ]),
        ]),
        V !== 0 && de.value > 1)
      ) {
        const W = { color: e.color, round: !0, dense: !0, flat: !0 };
        e.dense === !0 && (W.size = "sm"),
          de.value > 2 &&
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
              disable: J.value,
              onClick: Pe,
            })
          ),
          de.value > 2 &&
            _.push(
              f(mt, {
                key: "pgLast",
                ...W,
                icon: He.value[3],
                disable: J.value,
                onClick: Ae,
              })
            );
      }
      return s.push(f("div", { class: "q-table__control" }, _)), s;
    }
    function Tt() {
      const s =
        e.gridHeader === !0
          ? [f("table", { class: "q-table" }, [rt()])]
          : e.loading === !0 && l.loading === void 0
          ? nt()
          : void 0;
      return f("div", { class: "q-table__middle" }, s);
    }
    function yt() {
      const s =
        l.item !== void 0
          ? l.item
          : (_) => {
              const V = _.cols.map((F) =>
                f("div", { class: "q-table__grid-item-row" }, [
                  f("div", { class: "q-table__grid-item-title" }, [F.label]),
                  f("div", { class: "q-table__grid-item-value" }, [F.value]),
                ])
              );
              if (Y.value === !0) {
                const F = l["body-selection"],
                  Q =
                    F !== void 0
                      ? F(_)
                      : [
                          f(Mt, {
                            modelValue: _.selected,
                            color: e.color,
                            dark: u.value,
                            dense: e.dense,
                            "onUpdate:modelValue": (W, Se) => {
                              oe([_.key], [_.row], W, Se);
                            },
                          }),
                        ];
                V.unshift(
                  f("div", { class: "q-table__grid-item-row" }, Q),
                  f(kt, { dark: u.value })
                );
              }
              const M = {
                class: ["q-table__grid-item-card" + q.value, e.cardClass],
                style: e.cardStyle,
              };
              return (
                (e.onRowClick !== void 0 || e.onRowDblclick !== void 0) &&
                  ((M.class[0] += " cursor-pointer"),
                  e.onRowClick !== void 0 &&
                    (M.onClick = (F) => {
                      a("RowClick", F, _.row, _.pageIndex);
                    }),
                  e.onRowDblclick !== void 0 &&
                    (M.onDblclick = (F) => {
                      a("RowDblclick", F, _.row, _.pageIndex);
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
                  [f("div", M, V)]
                )
              );
            };
      return f(
        "div",
        {
          class: ["q-table__grid-content row", e.cardContainerClass],
          style: e.cardContainerStyle,
        },
        Z.value.map((_, V) => s(ot({ key: c.value(_), row: _, pageIndex: V })))
      );
    }
    return (
      Object.assign(o.proxy, {
        requestServerInteraction: z,
        setPagination: A,
        firstPage: Oe,
        prevPage: xe,
        nextPage: Pe,
        lastPage: Ae,
        isRowSelected: Ce,
        clearSelection: qe,
        isRowExpanded: E,
        setExpanded: le,
        sort: L,
        resetVirtualScroll: ee,
        scrollTo: je,
        getCellValue: Fe,
      }),
      fa(o.proxy, {
        filteredSortedRows: () => me.value,
        computedRows: () => Z.value,
        computedRowsNumber: () => ie.value,
      }),
      () => {
        const s = [it()],
          _ = { ref: g, class: p.value };
        return (
          e.grid === !0
            ? s.push(Tt())
            : Object.assign(_, {
                class: [_.class, e.cardClass],
                style: e.cardStyle,
              }),
          s.push(Me(), Vt()),
          e.loading === !0 && l.loading !== void 0 && s.push(l.loading()),
          f("div", _, s)
        );
      }
    );
  },
});
const at = (e) => (ya("data-v-055cae6e"), (e = e()), wa(), e),
  An = { class: "row" },
  Mn = { class: "col-12" },
  Ln = { class: "row q-pt-md" },
  En = { class: "col-8" },
  Fn = { class: "row justify-between" },
  zn = { class: "col-4 q-pr-sm" },
  Hn = at(() => te("div", { class: "text-h4 text-center" }, "This Year", -1)),
  In = at(() => te("div", { class: "text-h5 text-center" }, "100", -1)),
  $n = { class: "col-4 q-pr-sm" },
  Dn = at(() => te("div", { class: "text-h4 text-center" }, "This Month", -1)),
  Nn = at(() => te("div", { class: "text-h5 text-center" }, "15", -1)),
  Wn = { class: "col-4 q-pr-sm" },
  jn = at(() => te("div", { class: "text-h4 text-center" }, "This Week", -1)),
  Qn = at(() => te("div", { class: "text-h5 text-center" }, "2", -1)),
  Kn = { class: "row" },
  Un = { class: "col-12" },
  Gn = { class: "col-4" },
  Xn = {
    __name: "HomePage",
    setup(e) {
      const l = ba();
      ka.register(Ca, qa, xa, Pa, pa, Va, Ba, Ta);
      const a = {
          labels: ["Chest", "Arms", "Legs", "Back & Shoulders"],
          datasets: [
            {
              data: [10, 9, 8, 7],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
              ],
            },
          ],
        },
        o = {
          responsive: !0,
          indexAxis: "y",
          plugins: { legend: { display: !1 } },
          scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" }, grid: { display: !1 } },
          },
        },
        i = {
          labels: ["8/1", "8/8", "8/15", "8/22", "8/29", "9/5", "9/12", "9/19"],
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              borderColor: "#f87979",
              data: [4, 3, 4, 4, 2, 5, 4, 4],
              tension: 0.4,
            },
          ],
        },
        u = {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
          scales: {
            x: { ticks: { color: "white" } },
            y: {
              ticks: {
                color: "white",
                callback: function (g) {
                  if (g % 1 === 0) return g;
                },
              },
              grid: { display: !1 },
            },
          },
        },
        r = [
          {
            muscleGroupName: "Chest",
            workoutGroupId: 27,
            lastWorkout: "2022-10-01",
            daysAgo: 7,
          },
          {
            muscleGroupName: "Arms",
            workoutGroupId: 28,
            lastWorkout: "2022-10-02",
            daysAgo: 6,
          },
          {
            muscleGroupName: "Legs & Shoulders",
            workoutGroupId: 29,
            lastWorkout: "2022-10-03",
            daysAgo: 5,
          },
          {
            muscleGroupName: "Shoulders & Back",
            workoutGroupId: 27,
            lastWorkout: "2022-10-04",
            daysAgo: 4,
          },
        ],
        d = [
          {
            label: "Muscle Group",
            name: "muscleGroupName",
            field: "muscleGroupName",
            align: "left",
          },
          {
            label: "Last Workout",
            name: "lastWorkout",
            field: "lastWorkout",
            align: "center",
          },
          {
            label: "Days Ago",
            name: "daysAgo",
            field: "daysAgo",
            align: "center",
          },
          {
            label: "Start Workout",
            name: "startWorkout",
            field: "startWorkout",
            align: "center",
          },
        ];
      function c(g) {
        l.push({ name: "workout", params: { muscleGroupId: g } });
      }
      return (
        xt(async () => {
          await ga();
        }),
        (g, n) => (
          Sa(),
          ha(
            Aa,
            { class: "q-py-md q-px-xl" },
            {
              default: ne(() => [
                te("div", An, [
                  te("div", Mn, [
                    G(
                      On,
                      {
                        class: "glassy",
                        title: "Last Workouts",
                        rows: r,
                        columns: d,
                        "hide-bottom": "",
                      },
                      {
                        body: ne((h) => [
                          G(
                            Ma,
                            { props: h },
                            {
                              default: ne(() => [
                                G(
                                  wt,
                                  { key: "muscleGroupName", props: h },
                                  {
                                    default: ne(() => [
                                      Lt(Et(h.row.muscleGroupName), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["props"]
                                ),
                                G(
                                  wt,
                                  { key: "lastWorkout", props: h },
                                  {
                                    default: ne(() => [
                                      Lt(Et(h.row.lastWorkout), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["props"]
                                ),
                                G(
                                  wt,
                                  { key: "daysAgo", props: h },
                                  {
                                    default: ne(() => [
                                      Lt(Et(h.row.daysAgo), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["props"]
                                ),
                                G(
                                  wt,
                                  { key: "startWorkout", props: h },
                                  {
                                    default: ne(() => [
                                      G(
                                        mt,
                                        {
                                          push: "",
                                          class: "text-black",
                                          color: "primary",
                                          label: "start",
                                          onClick: (q) =>
                                            c(h.row.workoutGroupId),
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
                      }
                    ),
                  ]),
                ]),
                te("div", Ln, [
                  te("div", En, [
                    te("div", Fn, [
                      te("div", zn, [
                        G(
                          Ft,
                          { class: "glassy" },
                          {
                            default: ne(() => [
                              G(et, null, { default: ne(() => [Hn]), _: 1 }),
                              G(kt),
                              G(et, null, { default: ne(() => [In]), _: 1 }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      te("div", $n, [
                        G(
                          Ft,
                          { class: "glassy" },
                          {
                            default: ne(() => [
                              G(et, null, { default: ne(() => [Dn]), _: 1 }),
                              G(kt),
                              G(et, null, { default: ne(() => [Nn]), _: 1 }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      te("div", Wn, [
                        G(
                          Ft,
                          { class: "glassy" },
                          {
                            default: ne(() => [
                              G(et, null, { default: ne(() => [jn]), _: 1 }),
                              G(kt),
                              G(et, null, { default: ne(() => [Qn]), _: 1 }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                    te("div", Kn, [
                      te("div", Un, [
                        G(ll(Ra), {
                          "chart-options": u,
                          "chart-data": i,
                          "chart-id": "lineChartId",
                          height: 200,
                        }),
                      ]),
                    ]),
                  ]),
                  te("div", Gn, [
                    G(ll(Oa), {
                      "chart-options": o,
                      "chart-data": a,
                      "chart-id": "chartId",
                    }),
                  ]),
                ]),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  };
var to = ma(Xn, [["__scopeId", "data-v-055cae6e"]]);
export { to as default };
