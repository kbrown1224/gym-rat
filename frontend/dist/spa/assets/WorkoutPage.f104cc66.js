import { u as bt, a as gt, b as yt, Q as kt } from "./QTabs.2365d860.js";
import {
  b as ee,
  b3 as Ce,
  av as R,
  q as Fe,
  b4 as Ie,
  as as z,
  b5 as Y,
  ar as Le,
  aP as me,
  aD as j,
  at as X,
  U as Z,
  ag as ze,
  x as E,
  d as l,
  n as Ct,
  af as Qe,
  aK as xt,
  aU as wt,
  aW as fe,
  h as f,
  ap as We,
  g as le,
  b6 as _t,
  b7 as St,
  k as Ue,
  aG as qt,
  b8 as Tt,
  f as xe,
  D as Pt,
  b9 as $t,
  ba as Mt,
  bb as Et,
  bc as Lt,
  bd as At,
  a8 as Bt,
  be as Vt,
  bf as Nt,
  bg as Rt,
  E as Dt,
  _ as Ft,
  o as F,
  X as J,
  $ as W,
  ai as It,
  O as V,
  c as re,
  w as M,
  J as zt,
  bh as Qt,
  K as Wt,
  F as S,
  a as _,
  Y as he,
  Z as be,
  M as se,
  P as ge,
  Q as ye,
  L as Ae,
  a3 as Be,
  bi as Ut,
  a5 as Kt,
  aQ as Ot,
  N as Yt,
} from "./index.b5dc3681.js";
import {
  c as Ke,
  h as O,
  C as Xt,
  p as jt,
  a as Gt,
  b as Ht,
  A as Jt,
  d as Zt,
  D as ea,
} from "./index.a865ef31.js";
import { Q as ta } from "./QSpace.435cf98f.js";
import { Q as Ve } from "./QPage.3f5a5cd4.js";
import "./QResizeObserver.88a6e860.js";
import "./rtl.b51694b1.js";
var aa = ee({
  name: "QTab",
  props: bt,
  emits: gt,
  setup(t, { slots: a, emit: i }) {
    const { renderTab: s } = yt(t, a, i);
    return () => s("div");
  },
});
const we = {
    left: !0,
    right: !0,
    up: !0,
    down: !0,
    horizontal: !0,
    vertical: !0,
  },
  na = Object.keys(we);
we.all = !0;
function oe(t) {
  const a = {};
  for (const i of na) t[i] === !0 && (a[i] = !0);
  return Object.keys(a).length === 0
    ? we
    : (a.horizontal === !0
        ? (a.left = a.right = !0)
        : a.left === !0 && a.right === !0 && (a.horizontal = !0),
      a.vertical === !0
        ? (a.up = a.down = !0)
        : a.up === !0 && a.down === !0 && (a.vertical = !0),
      a.horizontal === !0 && a.vertical === !0 && (a.all = !0),
      a);
}
function ie(t, a) {
  return (
    a.event === void 0 &&
    t.target !== void 0 &&
    t.target.draggable !== !0 &&
    typeof a.handler == "function" &&
    t.target.nodeName.toUpperCase() !== "INPUT" &&
    (t.qClonedBy === void 0 || t.qClonedBy.indexOf(a.uid) === -1)
  );
}
function ke(t, a, i) {
  const s = j(t);
  let e,
    n = s.left - a.event.x,
    o = s.top - a.event.y,
    u = Math.abs(n),
    g = Math.abs(o);
  const d = a.direction;
  d.horizontal === !0 && d.vertical !== !0
    ? (e = n < 0 ? "left" : "right")
    : d.horizontal !== !0 && d.vertical === !0
    ? (e = o < 0 ? "up" : "down")
    : d.up === !0 && o < 0
    ? ((e = "up"),
      u > g &&
        (d.left === !0 && n < 0
          ? (e = "left")
          : d.right === !0 && n > 0 && (e = "right")))
    : d.down === !0 && o > 0
    ? ((e = "down"),
      u > g &&
        (d.left === !0 && n < 0
          ? (e = "left")
          : d.right === !0 && n > 0 && (e = "right")))
    : d.left === !0 && n < 0
    ? ((e = "left"),
      u < g &&
        (d.up === !0 && o < 0
          ? (e = "up")
          : d.down === !0 && o > 0 && (e = "down")))
    : d.right === !0 &&
      n > 0 &&
      ((e = "right"),
      u < g &&
        (d.up === !0 && o < 0
          ? (e = "up")
          : d.down === !0 && o > 0 && (e = "down")));
  let b = !1;
  if (e === void 0 && i === !1) {
    if (a.event.isFirst === !0 || a.event.lastDir === void 0) return {};
    (e = a.event.lastDir),
      (b = !0),
      e === "left" || e === "right"
        ? ((s.left -= n), (u = 0), (n = 0))
        : ((s.top -= o), (g = 0), (o = 0));
  }
  return {
    synthetic: b,
    payload: {
      evt: t,
      touch: a.event.mouse !== !0,
      mouse: a.event.mouse === !0,
      position: s,
      direction: e,
      isFirst: a.event.isFirst,
      isFinal: i === !0,
      duration: Date.now() - a.event.time,
      distance: { x: u, y: g },
      offset: { x: n, y: o },
      delta: { x: s.left - a.event.lastX, y: s.top - a.event.lastY },
    },
  };
}
let ra = 0;
var sa = Ce({
  name: "touch-pan",
  beforeMount(t, { value: a, modifiers: i }) {
    if (i.mouse !== !0 && R.has.touch !== !0) return;
    function s(n, o) {
      i.mouse === !0 && o === !0
        ? Z(n)
        : (i.stop === !0 && me(n), i.prevent === !0 && Le(n));
    }
    const e = {
      uid: "qvtp_" + ra++,
      handler: a,
      modifiers: i,
      direction: oe(i),
      noop: Fe,
      mouseStart(n) {
        ie(n, e) &&
          Ie(n) &&
          (z(e, "temp", [
            [document, "mousemove", "move", "notPassiveCapture"],
            [document, "mouseup", "end", "passiveCapture"],
          ]),
          e.start(n, !0));
      },
      touchStart(n) {
        if (ie(n, e)) {
          const o = n.target;
          z(e, "temp", [
            [o, "touchmove", "move", "notPassiveCapture"],
            [o, "touchcancel", "end", "passiveCapture"],
            [o, "touchend", "end", "passiveCapture"],
          ]),
            e.start(n);
        }
      },
      start(n, o) {
        if (
          (R.is.firefox === !0 && Y(t, !0),
          (e.lastEvt = n),
          o === !0 || i.stop === !0)
        ) {
          if (
            e.direction.all !== !0 &&
            (o !== !0 ||
              (e.modifiers.mouseAllDir !== !0 &&
                e.modifiers.mousealldir !== !0))
          ) {
            const d =
              n.type.indexOf("mouse") > -1
                ? new MouseEvent(n.type, n)
                : new TouchEvent(n.type, n);
            n.defaultPrevented === !0 && Le(d),
              n.cancelBubble === !0 && me(d),
              Object.assign(d, {
                qKeyEvent: n.qKeyEvent,
                qClickOutside: n.qClickOutside,
                qAnchorHandled: n.qAnchorHandled,
                qClonedBy:
                  n.qClonedBy === void 0 ? [e.uid] : n.qClonedBy.concat(e.uid),
              }),
              (e.initialEvent = { target: n.target, event: d });
          }
          me(n);
        }
        const { left: u, top: g } = j(n);
        e.event = {
          x: u,
          y: g,
          time: Date.now(),
          mouse: o === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: u,
          lastY: g,
        };
      },
      move(n) {
        if (e.event === void 0) return;
        const o = j(n),
          u = o.left - e.event.x,
          g = o.top - e.event.y;
        if (u === 0 && g === 0) return;
        e.lastEvt = n;
        const d = e.event.mouse === !0,
          b = () => {
            s(n, d);
            let m;
            i.preserveCursor !== !0 &&
              i.preservecursor !== !0 &&
              ((m = document.documentElement.style.cursor || ""),
              (document.documentElement.style.cursor = "grabbing")),
              d === !0 &&
                document.body.classList.add("no-pointer-events--children"),
              document.body.classList.add("non-selectable"),
              Ke(),
              (e.styleCleanup = (c) => {
                if (
                  ((e.styleCleanup = void 0),
                  m !== void 0 && (document.documentElement.style.cursor = m),
                  document.body.classList.remove("non-selectable"),
                  d === !0)
                ) {
                  const q = () => {
                    document.body.classList.remove(
                      "no-pointer-events--children"
                    );
                  };
                  c !== void 0
                    ? setTimeout(() => {
                        q(), c();
                      }, 50)
                    : q();
                } else c !== void 0 && c();
              });
          };
        if (e.event.detected === !0) {
          e.event.isFirst !== !0 && s(n, e.event.mouse);
          const { payload: m, synthetic: c } = ke(n, e, !1);
          m !== void 0 &&
            (e.handler(m) === !1
              ? e.end(n)
              : (e.styleCleanup === void 0 && e.event.isFirst === !0 && b(),
                (e.event.lastX = m.position.left),
                (e.event.lastY = m.position.top),
                (e.event.lastDir = c === !0 ? void 0 : m.direction),
                (e.event.isFirst = !1)));
          return;
        }
        if (
          e.direction.all === !0 ||
          (d === !0 &&
            (e.modifiers.mouseAllDir === !0 || e.modifiers.mousealldir === !0))
        ) {
          b(), (e.event.detected = !0), e.move(n);
          return;
        }
        const k = Math.abs(u),
          v = Math.abs(g);
        k !== v &&
          ((e.direction.horizontal === !0 && k > v) ||
          (e.direction.vertical === !0 && k < v) ||
          (e.direction.up === !0 && k < v && g < 0) ||
          (e.direction.down === !0 && k < v && g > 0) ||
          (e.direction.left === !0 && k > v && u < 0) ||
          (e.direction.right === !0 && k > v && u > 0)
            ? ((e.event.detected = !0), e.move(n))
            : e.end(n, !0));
      },
      end(n, o) {
        if (e.event !== void 0) {
          if ((X(e, "temp"), R.is.firefox === !0 && Y(t, !1), o === !0))
            e.styleCleanup !== void 0 && e.styleCleanup(),
              e.event.detected !== !0 &&
                e.initialEvent !== void 0 &&
                e.initialEvent.target.dispatchEvent(e.initialEvent.event);
          else if (e.event.detected === !0) {
            e.event.isFirst === !0 &&
              e.handler(ke(n === void 0 ? e.lastEvt : n, e).payload);
            const { payload: u } = ke(n === void 0 ? e.lastEvt : n, e, !0),
              g = () => {
                e.handler(u);
              };
            e.styleCleanup !== void 0 ? e.styleCleanup(g) : g();
          }
          (e.event = void 0), (e.initialEvent = void 0), (e.lastEvt = void 0);
        }
      },
    };
    if (((t.__qtouchpan = e), i.mouse === !0)) {
      const n = i.mouseCapture === !0 || i.mousecapture === !0 ? "Capture" : "";
      z(e, "main", [[t, "mousedown", "mouseStart", `passive${n}`]]);
    }
    R.has.touch === !0 &&
      z(e, "main", [
        [
          t,
          "touchstart",
          "touchStart",
          `passive${i.capture === !0 ? "Capture" : ""}`,
        ],
        [t, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(t, a) {
    const i = t.__qtouchpan;
    i !== void 0 &&
      (a.oldValue !== a.value &&
        (typeof value != "function" && i.end(), (i.handler = a.value)),
      (i.direction = oe(a.modifiers)));
  },
  beforeUnmount(t) {
    const a = t.__qtouchpan;
    a !== void 0 &&
      (a.event !== void 0 && a.end(),
      X(a, "main"),
      X(a, "temp"),
      R.is.firefox === !0 && Y(t, !1),
      a.styleCleanup !== void 0 && a.styleCleanup(),
      delete t.__qtouchpan);
  },
});
const Ne = "q-slider__marker-labels",
  oa = (t) => ({ value: t }),
  ia = ({ marker: t }) =>
    f("div", { key: t.value, style: t.style, class: t.classes }, t.label),
  Oe = [34, 37, 40, 33, 39, 38],
  la = {
    ...Qe,
    ...xt,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    innerMin: Number,
    innerMax: Number,
    step: { type: Number, default: 1, validator: (t) => t >= 0 },
    snap: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    hideSelection: Boolean,
    color: String,
    markerLabelsClass: String,
    label: Boolean,
    labelColor: String,
    labelTextColor: String,
    labelAlways: Boolean,
    switchLabelSide: Boolean,
    markers: [Boolean, Number],
    markerLabels: [Boolean, Array, Object, Function],
    switchMarkerLabelsSide: Boolean,
    trackImg: String,
    trackColor: String,
    innerTrackImg: String,
    innerTrackColor: String,
    selectionColor: String,
    selectionImg: String,
    thumbSize: { type: String, default: "20px" },
    trackSize: { type: String, default: "4px" },
    disable: Boolean,
    readonly: Boolean,
    dense: Boolean,
    tabindex: [String, Number],
    thumbColor: String,
    thumbPath: {
      type: String,
      default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0",
    },
  },
  ua = ["pan", "update:modelValue", "change"];
function ca({
  updateValue: t,
  updatePosition: a,
  getDragging: i,
  formAttrs: s,
}) {
  const {
      props: e,
      emit: n,
      slots: o,
      proxy: { $q: u },
    } = le(),
    g = ze(e, u),
    d = _t(s),
    b = E(!1),
    k = E(!1),
    v = E(!1),
    m = E(!1),
    c = l(() => (e.vertical === !0 ? "--v" : "--h")),
    q = l(() => "-" + (e.switchLabelSide === !0 ? "switched" : "standard")),
    T = l(() =>
      e.vertical === !0 ? e.reverse === !0 : e.reverse !== (u.lang.rtl === !0)
    ),
    L = l(() =>
      isNaN(e.innerMin) === !0 || e.innerMin < e.min ? e.min : e.innerMin
    ),
    A = l(() =>
      isNaN(e.innerMax) === !0 || e.innerMax > e.max ? e.max : e.innerMax
    ),
    C = l(() => e.disable !== !0 && e.readonly !== !0 && L.value < A.value),
    $ = l(() => (String(e.step).trim().split(".")[1] || "").length),
    D = l(() => (e.step === 0 ? 1 : e.step)),
    te = l(() => (C.value === !0 ? e.tabindex || 0 : -1)),
    N = l(() => e.max - e.min),
    G = l(() => A.value - L.value),
    Q = l(() => ue(L.value)),
    H = l(() => ue(A.value)),
    U = l(() =>
      e.vertical === !0
        ? T.value === !0
          ? "bottom"
          : "top"
        : T.value === !0
        ? "right"
        : "left"
    ),
    ae = l(() => (e.vertical === !0 ? "height" : "width")),
    p = l(() => (e.vertical === !0 ? "width" : "height")),
    x = l(() => (e.vertical === !0 ? "vertical" : "horizontal")),
    B = l(() => {
      const r = {
        role: "slider",
        "aria-valuemin": L.value,
        "aria-valuemax": A.value,
        "aria-orientation": x.value,
        "data-step": e.step,
      };
      return (
        e.disable === !0
          ? (r["aria-disabled"] = "true")
          : e.readonly === !0 && (r["aria-readonly"] = "true"),
        r
      );
    }),
    K = l(
      () =>
        `q-slider q-slider${c.value} q-slider--${
          b.value === !0 ? "" : "in"
        }active inline no-wrap ` +
        (e.vertical === !0 ? "row" : "column") +
        (e.disable === !0
          ? " disabled"
          : " q-slider--enabled" +
            (C.value === !0 ? " q-slider--editable" : "")) +
        (v.value === "both" ? " q-slider--focus" : "") +
        (e.label || e.labelAlways === !0 ? " q-slider--label" : "") +
        (e.labelAlways === !0 ? " q-slider--label-always" : "") +
        (g.value === !0 ? " q-slider--dark" : "") +
        (e.dense === !0 ? " q-slider--dense q-slider--dense" + c.value : "")
    );
  function ne(r) {
    const h = "q-slider__" + r;
    return `${h} ${h}${c.value} ${h}${c.value}${q.value}`;
  }
  function _e(r) {
    const h = "q-slider__" + r;
    return `${h} ${h}${c.value}`;
  }
  const Ye = l(() => {
      const r = e.selectionColor || e.color;
      return (
        "q-slider__selection absolute" + (r !== void 0 ? ` text-${r}` : "")
      );
    }),
    Xe = l(() => _e("markers") + " absolute overflow-hidden"),
    je = l(() => _e("track-container")),
    Ge = l(() => ne("pin")),
    He = l(() => ne("label")),
    Je = l(() => ne("text-container")),
    Ze = l(
      () =>
        ne("marker-labels-container") +
        (e.markerLabelsClass !== void 0 ? ` ${e.markerLabelsClass}` : "")
    ),
    et = l(
      () =>
        "q-slider__track relative-position no-outline" +
        (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ),
    tt = l(() => {
      const r = { [p.value]: e.trackSize };
      return (
        e.trackImg !== void 0 &&
          (r.backgroundImage = `url(${e.trackImg}) !important`),
        r
      );
    }),
    at = l(
      () =>
        "q-slider__inner absolute" +
        (e.innerTrackColor !== void 0 ? ` bg-${e.innerTrackColor}` : "")
    ),
    Se = l(() => {
      const r = {
        [U.value]: `${100 * Q.value}%`,
        [ae.value]: `${100 * (H.value - Q.value)}%`,
      };
      return (
        e.innerTrackImg !== void 0 &&
          (r.backgroundImage = `url(${e.innerTrackImg}) !important`),
        r
      );
    });
  function nt(r) {
    const { min: h, max: y, step: w } = e;
    let P = h + r * (y - h);
    if (w > 0) {
      const I = (P - h) % w;
      P += (Math.abs(I) >= w / 2 ? (I < 0 ? -1 : 1) * w : 0) - I;
    }
    return (
      $.value > 0 && (P = parseFloat(P.toFixed($.value))),
      O(P, L.value, A.value)
    );
  }
  function ue(r) {
    return N.value === 0 ? 0 : (r - e.min) / N.value;
  }
  function rt(r, h) {
    const y = j(r),
      w =
        e.vertical === !0
          ? O((y.top - h.top) / h.height, 0, 1)
          : O((y.left - h.left) / h.width, 0, 1);
    return O(T.value === !0 ? 1 - w : w, Q.value, H.value);
  }
  const qe = l(() => (wt(e.markers) === !0 ? e.markers : D.value)),
    Te = l(() => {
      const r = [],
        h = qe.value,
        y = e.max;
      let w = e.min;
      do r.push(w), (w += h);
      while (w < y);
      return r.push(y), r;
    }),
    Pe = l(() => {
      const r = ` ${Ne}${c.value}-`;
      return (
        Ne +
        `${r}${e.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${r}${
          T.value === !0 ? "rtl" : "ltr"
        }`
      );
    }),
    ce = l(() =>
      e.markerLabels === !1
        ? null
        : ot(e.markerLabels).map((r, h) => ({
            index: h,
            value: r.value,
            label: r.label || r.value,
            classes: Pe.value + (r.classes !== void 0 ? " " + r.classes : ""),
            style: { ...Me(r.value), ...(r.style || {}) },
          }))
    ),
    $e = l(() => ({
      markerList: ce.value,
      markerMap: it.value,
      classes: Pe.value,
      getStyle: Me,
    })),
    st = l(() => {
      if (G.value !== 0) {
        const r = (100 * qe.value) / G.value;
        return {
          ...Se.value,
          backgroundSize: e.vertical === !0 ? `2px ${r}%` : `${r}% 2px`,
        };
      }
      return null;
    });
  function ot(r) {
    if (r === !1) return null;
    if (r === !0) return Te.value.map(oa);
    if (typeof r == "function")
      return Te.value.map((y) => {
        const w = r(y);
        return fe(w) === !0 ? { ...w, value: y } : { value: y, label: w };
      });
    const h = ({ value: y }) => y >= e.min && y <= e.max;
    return Array.isArray(r) === !0
      ? r.map((y) => (fe(y) === !0 ? y : { value: y })).filter(h)
      : Object.keys(r)
          .map((y) => {
            const w = r[y],
              P = Number(y);
            return fe(w) === !0 ? { ...w, value: P } : { value: P, label: w };
          })
          .filter(h);
  }
  function Me(r) {
    return { [U.value]: `${(100 * (r - e.min)) / N.value}%` };
  }
  const it = l(() => {
    if (e.markerLabels === !1) return null;
    const r = {};
    return (
      ce.value.forEach((h) => {
        r[h.value] = h;
      }),
      r
    );
  });
  function lt() {
    if (o["marker-label-group"] !== void 0)
      return o["marker-label-group"]($e.value);
    const r = o["marker-label"] || ia;
    return ce.value.map((h) => r({ marker: h, ...$e.value }));
  }
  const ut = l(() => [
    [
      sa,
      ct,
      void 0,
      { [x.value]: !0, prevent: !0, stop: !0, mouse: !0, mouseAllDir: !0 },
    ],
  ]);
  function ct(r) {
    r.isFinal === !0
      ? (m.value !== void 0 &&
          (a(r.evt),
          r.touch === !0 && t(!0),
          (m.value = void 0),
          n("pan", "end")),
        (b.value = !1),
        (v.value = !1))
      : r.isFirst === !0
      ? ((m.value = i(r.evt)), a(r.evt), t(), (b.value = !0), n("pan", "start"))
      : (a(r.evt), t());
  }
  function Ee() {
    v.value = !1;
  }
  function dt(r) {
    a(r, i(r)),
      t(),
      (k.value = !0),
      (b.value = !0),
      document.addEventListener("mouseup", de, !0);
  }
  function de() {
    (k.value = !1),
      (b.value = !1),
      t(!0),
      Ee(),
      document.removeEventListener("mouseup", de, !0);
  }
  function vt(r) {
    a(r, i(r)), t(!0);
  }
  function pt(r) {
    Oe.includes(r.keyCode) && t(!0);
  }
  function mt(r) {
    if (e.vertical === !0) return null;
    const h = u.lang.rtl !== e.reverse ? 1 - r : r;
    return {
      transform: `translateX(calc(${2 * h - 1} * ${e.thumbSize} / 2 + ${
        50 - 100 * h
      }%))`,
    };
  }
  function ft(r) {
    const h = l(() =>
        k.value === !1 && (v.value === r.focusValue || v.value === "both")
          ? " q-slider--focus"
          : ""
      ),
      y = l(
        () =>
          `q-slider__thumb q-slider__thumb${c.value} q-slider__thumb${
            c.value
          }-${T.value === !0 ? "rtl" : "ltr"} absolute non-selectable` +
          h.value +
          (r.thumbColor.value !== void 0 ? ` text-${r.thumbColor.value}` : "")
      ),
      w = l(() => ({
        width: e.thumbSize,
        height: e.thumbSize,
        [U.value]: `${100 * r.ratio.value}%`,
        zIndex: v.value === r.focusValue ? 2 : void 0,
      })),
      P = l(() =>
        r.labelColor.value !== void 0 ? ` text-${r.labelColor.value}` : ""
      ),
      I = l(() => mt(r.ratio.value)),
      ve = l(
        () =>
          "q-slider__text" +
          (r.labelTextColor.value !== void 0
            ? ` text-${r.labelTextColor.value}`
            : "")
      );
    return () => {
      const pe = [
        f(
          "svg",
          {
            class: "q-slider__thumb-shape absolute-full",
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
          },
          [f("path", { d: e.thumbPath })]
        ),
        f("div", { class: "q-slider__focus-ring fit" }),
      ];
      return (
        (e.label === !0 || e.labelAlways === !0) &&
          (pe.push(
            f(
              "div",
              { class: Ge.value + " absolute fit no-pointer-events" + P.value },
              [
                f(
                  "div",
                  { class: He.value, style: { minWidth: e.thumbSize } },
                  [
                    f("div", { class: Je.value, style: I.value }, [
                      f("span", { class: ve.value }, r.label.value),
                    ]),
                  ]
                ),
              ]
            )
          ),
          e.name !== void 0 && e.disable !== !0 && d(pe, "push")),
        f("div", { class: y.value, style: w.value, ...r.getNodeData() }, pe)
      );
    };
  }
  function ht(r, h, y, w) {
    const P = [];
    e.innerTrackColor !== "transparent" &&
      P.push(f("div", { key: "inner", class: at.value, style: Se.value })),
      e.selectionColor !== "transparent" &&
        P.push(f("div", { key: "selection", class: Ye.value, style: r.value })),
      e.markers !== !1 &&
        P.push(f("div", { key: "marker", class: Xe.value, style: st.value })),
      w(P);
    const I = [
      We(
        "div",
        { key: "trackC", class: je.value, tabindex: h.value, ...y.value },
        [f("div", { class: et.value, style: tt.value }, P)],
        "slide",
        C.value,
        () => ut.value
      ),
    ];
    if (e.markerLabels !== !1) {
      const ve = e.switchMarkerLabelsSide === !0 ? "unshift" : "push";
      I[ve](f("div", { key: "markerL", class: Ze.value }, lt()));
    }
    return I;
  }
  return (
    Ct(() => {
      document.removeEventListener("mouseup", de, !0);
    }),
    {
      state: {
        active: b,
        focus: v,
        preventFocus: k,
        dragging: m,
        editable: C,
        classes: K,
        tabindex: te,
        attributes: B,
        step: D,
        decimals: $,
        trackLen: N,
        innerMin: L,
        innerMinRatio: Q,
        innerMax: A,
        innerMaxRatio: H,
        positionProp: U,
        sizeProp: ae,
        isReversed: T,
      },
      methods: {
        onActivate: dt,
        onMobileClick: vt,
        onBlur: Ee,
        onKeyup: pt,
        getContent: ht,
        getThumbRenderFn: ft,
        convertRatioToModel: nt,
        convertModelToRatio: ue,
        getDraggingRatio: rt,
      },
    }
  );
}
const da = () => ({});
var va = ee({
  name: "QSlider",
  props: {
    ...la,
    modelValue: {
      required: !0,
      default: null,
      validator: (t) => typeof t == "number" || t === null,
    },
    labelValue: [String, Number],
  },
  emits: ua,
  setup(t, { emit: a }) {
    const {
        proxy: { $q: i },
      } = le(),
      { state: s, methods: e } = ca({
        updateValue: c,
        updatePosition: T,
        getDragging: q,
        formAttrs: St(t),
      }),
      n = E(null),
      o = E(0),
      u = E(0);
    function g() {
      u.value =
        t.modelValue === null
          ? s.innerMin.value
          : O(t.modelValue, s.innerMin.value, s.innerMax.value);
    }
    Ue(() => `${t.modelValue}|${s.innerMin.value}|${s.innerMax.value}`, g), g();
    const d = l(() => e.convertModelToRatio(u.value)),
      b = l(() => (s.active.value === !0 ? o.value : d.value)),
      k = l(() => {
        const C = {
          [s.positionProp.value]: `${100 * s.innerMinRatio.value}%`,
          [s.sizeProp.value]: `${100 * (b.value - s.innerMinRatio.value)}%`,
        };
        return (
          t.selectionImg !== void 0 &&
            (C.backgroundImage = `url(${t.selectionImg}) !important`),
          C
        );
      }),
      v = e.getThumbRenderFn({
        focusValue: !0,
        getNodeData: da,
        ratio: b,
        label: l(() => (t.labelValue !== void 0 ? t.labelValue : u.value)),
        thumbColor: l(() => t.thumbColor || t.color),
        labelColor: l(() => t.labelColor),
        labelTextColor: l(() => t.labelTextColor),
      }),
      m = l(() =>
        s.editable.value !== !0
          ? {}
          : i.platform.is.mobile === !0
          ? { onClick: e.onMobileClick }
          : {
              onMousedown: e.onActivate,
              onFocus: L,
              onBlur: e.onBlur,
              onKeydown: A,
              onKeyup: e.onKeyup,
            }
      );
    function c(C) {
      u.value !== t.modelValue && a("update:modelValue", u.value),
        C === !0 && a("change", u.value);
    }
    function q() {
      return n.value.getBoundingClientRect();
    }
    function T(C, $ = s.dragging.value) {
      const D = e.getDraggingRatio(C, $);
      (u.value = e.convertRatioToModel(D)),
        (o.value =
          t.snap !== !0 || t.step === 0 ? D : e.convertModelToRatio(u.value));
    }
    function L() {
      s.focus.value = !0;
    }
    function A(C) {
      if (!Oe.includes(C.keyCode)) return;
      Z(C);
      const $ = ([34, 33].includes(C.keyCode) ? 10 : 1) * s.step.value,
        D =
          ([34, 37, 40].includes(C.keyCode) ? -1 : 1) *
          (s.isReversed.value === !0 ? -1 : 1) *
          (t.vertical === !0 ? -1 : 1) *
          $;
      (u.value = O(
        parseFloat((u.value + D).toFixed(s.decimals.value)),
        s.innerMin.value,
        s.innerMax.value
      )),
        c();
    }
    return () => {
      const C = e.getContent(k, s.tabindex, m, ($) => {
        $.push(v());
      });
      return f(
        "div",
        {
          ref: n,
          class:
            s.classes.value +
            (t.modelValue === null ? " q-slider--no-value" : ""),
          ...s.attributes.value,
          "aria-valuenow": t.modelValue,
        },
        C
      );
    };
  },
});
function pa(t) {
  const a = [0.06, 6, 50];
  return (
    typeof t == "string" &&
      t.length &&
      t.split(":").forEach((i, s) => {
        const e = parseFloat(i);
        e && (a[s] = e);
      }),
    a
  );
}
var ma = Ce({
  name: "touch-swipe",
  beforeMount(t, { value: a, arg: i, modifiers: s }) {
    if (s.mouse !== !0 && R.has.touch !== !0) return;
    const e = s.mouseCapture === !0 ? "Capture" : "",
      n = {
        handler: a,
        sensitivity: pa(i),
        direction: oe(s),
        noop: Fe,
        mouseStart(o) {
          ie(o, n) &&
            Ie(o) &&
            (z(n, "temp", [
              [document, "mousemove", "move", `notPassive${e}`],
              [document, "mouseup", "end", "notPassiveCapture"],
            ]),
            n.start(o, !0));
        },
        touchStart(o) {
          if (ie(o, n)) {
            const u = o.target;
            z(n, "temp", [
              [u, "touchmove", "move", "notPassiveCapture"],
              [u, "touchcancel", "end", "notPassiveCapture"],
              [u, "touchend", "end", "notPassiveCapture"],
            ]),
              n.start(o);
          }
        },
        start(o, u) {
          R.is.firefox === !0 && Y(t, !0);
          const g = j(o);
          n.event = {
            x: g.left,
            y: g.top,
            time: Date.now(),
            mouse: u === !0,
            dir: !1,
          };
        },
        move(o) {
          if (n.event === void 0) return;
          if (n.event.dir !== !1) {
            Z(o);
            return;
          }
          const u = Date.now() - n.event.time;
          if (u === 0) return;
          const g = j(o),
            d = g.left - n.event.x,
            b = Math.abs(d),
            k = g.top - n.event.y,
            v = Math.abs(k);
          if (n.event.mouse !== !0) {
            if (b < n.sensitivity[1] && v < n.sensitivity[1]) {
              n.end(o);
              return;
            }
          } else if (b < n.sensitivity[2] && v < n.sensitivity[2]) return;
          const m = b / u,
            c = v / u;
          n.direction.vertical === !0 &&
            b < v &&
            b < 100 &&
            c > n.sensitivity[0] &&
            (n.event.dir = k < 0 ? "up" : "down"),
            n.direction.horizontal === !0 &&
              b > v &&
              v < 100 &&
              m > n.sensitivity[0] &&
              (n.event.dir = d < 0 ? "left" : "right"),
            n.direction.up === !0 &&
              b < v &&
              k < 0 &&
              b < 100 &&
              c > n.sensitivity[0] &&
              (n.event.dir = "up"),
            n.direction.down === !0 &&
              b < v &&
              k > 0 &&
              b < 100 &&
              c > n.sensitivity[0] &&
              (n.event.dir = "down"),
            n.direction.left === !0 &&
              b > v &&
              d < 0 &&
              v < 100 &&
              m > n.sensitivity[0] &&
              (n.event.dir = "left"),
            n.direction.right === !0 &&
              b > v &&
              d > 0 &&
              v < 100 &&
              m > n.sensitivity[0] &&
              (n.event.dir = "right"),
            n.event.dir !== !1
              ? (Z(o),
                n.event.mouse === !0 &&
                  (document.body.classList.add("no-pointer-events--children"),
                  document.body.classList.add("non-selectable"),
                  Ke(),
                  (n.styleCleanup = (q) => {
                    (n.styleCleanup = void 0),
                      document.body.classList.remove("non-selectable");
                    const T = () => {
                      document.body.classList.remove(
                        "no-pointer-events--children"
                      );
                    };
                    q === !0 ? setTimeout(T, 50) : T();
                  })),
                n.handler({
                  evt: o,
                  touch: n.event.mouse !== !0,
                  mouse: n.event.mouse,
                  direction: n.event.dir,
                  duration: u,
                  distance: { x: b, y: v },
                }))
              : n.end(o);
        },
        end(o) {
          n.event !== void 0 &&
            (X(n, "temp"),
            R.is.firefox === !0 && Y(t, !1),
            n.styleCleanup !== void 0 && n.styleCleanup(!0),
            o !== void 0 && n.event.dir !== !1 && Z(o),
            (n.event = void 0));
        },
      };
    if (((t.__qtouchswipe = n), s.mouse === !0)) {
      const o = s.mouseCapture === !0 || s.mousecapture === !0 ? "Capture" : "";
      z(n, "main", [[t, "mousedown", "mouseStart", `passive${o}`]]);
    }
    R.has.touch === !0 &&
      z(n, "main", [
        [
          t,
          "touchstart",
          "touchStart",
          `passive${s.capture === !0 ? "Capture" : ""}`,
        ],
        [t, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(t, a) {
    const i = t.__qtouchswipe;
    i !== void 0 &&
      (a.oldValue !== a.value &&
        (typeof a.value != "function" && i.end(), (i.handler = a.value)),
      (i.direction = oe(a.modifiers)));
  },
  beforeUnmount(t) {
    const a = t.__qtouchswipe;
    a !== void 0 &&
      (X(a, "main"),
      X(a, "temp"),
      R.is.firefox === !0 && Y(t, !1),
      a.styleCleanup !== void 0 && a.styleCleanup(),
      delete t.__qtouchswipe);
  },
});
function fa() {
  const t = new Map();
  return {
    getCache: function (a, i) {
      return t[a] === void 0 ? (t[a] = i) : t[a];
    },
    getCacheWithFn: function (a, i) {
      return t[a] === void 0 ? (t[a] = i()) : t[a];
    },
  };
}
const ha = { name: { required: !0 }, disable: Boolean },
  Re = {
    setup(t, { slots: a }) {
      return () =>
        f("div", { class: "q-panel scroll", role: "tabpanel" }, xe(a.default));
    },
  },
  ba = {
    modelValue: { required: !0 },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: { type: [String, Number], default: 300 },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number,
  },
  ga = ["update:modelValue", "before-transition", "transition"];
function ya() {
  const { props: t, emit: a, proxy: i } = le(),
    { getCacheWithFn: s } = fa();
  let e, n;
  const o = E(null),
    u = E(null);
  function g(p) {
    const x = t.vertical === !0 ? "up" : "left";
    N((i.$q.lang.rtl === !0 ? -1 : 1) * (p.direction === x ? 1 : -1));
  }
  const d = l(() => [
      [
        ma,
        g,
        void 0,
        { horizontal: t.vertical !== !0, vertical: t.vertical, mouse: !0 },
      ],
    ]),
    b = l(
      () => t.transitionPrev || `slide-${t.vertical === !0 ? "down" : "right"}`
    ),
    k = l(
      () => t.transitionNext || `slide-${t.vertical === !0 ? "up" : "left"}`
    ),
    v = l(() => `--q-transition-duration: ${t.transitionDuration}ms`),
    m = l(() =>
      typeof t.modelValue == "string" || typeof t.modelValue == "number"
        ? t.modelValue
        : String(t.modelValue)
    ),
    c = l(() => ({
      include: t.keepAliveInclude,
      exclude: t.keepAliveExclude,
      max: t.keepAliveMax,
    })),
    q = l(() => t.keepAliveInclude !== void 0 || t.keepAliveExclude !== void 0);
  Ue(
    () => t.modelValue,
    (p, x) => {
      const B = C(p) === !0 ? $(p) : -1;
      n !== !0 && te(B === -1 ? 0 : B < $(x) ? -1 : 1),
        o.value !== B &&
          ((o.value = B),
          a("before-transition", p, x),
          Pt(() => {
            a("transition", p, x);
          }));
    }
  );
  function T() {
    N(1);
  }
  function L() {
    N(-1);
  }
  function A(p) {
    a("update:modelValue", p);
  }
  function C(p) {
    return p != null && p !== "";
  }
  function $(p) {
    return e.findIndex(
      (x) =>
        x.props.name === p && x.props.disable !== "" && x.props.disable !== !0
    );
  }
  function D() {
    return e.filter((p) => p.props.disable !== "" && p.props.disable !== !0);
  }
  function te(p) {
    const x =
      p !== 0 && t.animated === !0 && o.value !== -1
        ? "q-transition--" + (p === -1 ? b.value : k.value)
        : null;
    u.value !== x && (u.value = x);
  }
  function N(p, x = o.value) {
    let B = x + p;
    for (; B > -1 && B < e.length; ) {
      const K = e[B];
      if (K !== void 0 && K.props.disable !== "" && K.props.disable !== !0) {
        te(p),
          (n = !0),
          a("update:modelValue", K.props.name),
          setTimeout(() => {
            n = !1;
          });
        return;
      }
      B += p;
    }
    t.infinite === !0 &&
      e.length > 0 &&
      x !== -1 &&
      x !== e.length &&
      N(p, p === -1 ? e.length : -1);
  }
  function G() {
    const p = $(t.modelValue);
    return o.value !== p && (o.value = p), !0;
  }
  function Q() {
    const p = C(t.modelValue) === !0 && G() && e[o.value];
    return t.keepAlive === !0
      ? [
          f($t, c.value, [
            f(
              q.value === !0
                ? s(m.value, () => ({ ...Re, name: m.value }))
                : Re,
              { key: m.value, style: v.value },
              () => p
            ),
          ]),
        ]
      : [
          f(
            "div",
            {
              class: "q-panel scroll",
              style: v.value,
              key: m.value,
              role: "tabpanel",
            },
            [p]
          ),
        ];
  }
  function H() {
    if (e.length !== 0)
      return t.animated === !0 ? [f(qt, { name: u.value }, Q)] : Q();
  }
  function U(p) {
    return (
      (e = Tt(xe(p.default, [])).filter(
        (x) =>
          x.props !== null && x.props.slot === void 0 && C(x.props.name) === !0
      )),
      e.length
    );
  }
  function ae() {
    return e;
  }
  return (
    Object.assign(i, { next: T, previous: L, goTo: A }),
    {
      panelIndex: o,
      panelDirectives: d,
      updatePanelsList: U,
      updatePanelIndex: G,
      getPanelContent: H,
      getEnabledPanels: D,
      getPanels: ae,
      isValidPanelName: C,
      keepAliveProps: c,
      needsUniqueKeepAliveWrapper: q,
      goToPanelByOffset: N,
      goToPanel: A,
      nextPanel: T,
      previousPanel: L,
    }
  );
}
var ka = ee({
    name: "QTabPanel",
    props: ha,
    setup(t, { slots: a }) {
      return () =>
        f("div", { class: "q-tab-panel", role: "tabpanel" }, xe(a.default));
    },
  }),
  Ca = ee({
    name: "QTabPanels",
    props: { ...ba, ...Qe },
    emits: ga,
    setup(t, { slots: a }) {
      const i = le(),
        s = ze(t, i.proxy.$q),
        { updatePanelsList: e, getPanelContent: n, panelDirectives: o } = ya(),
        u = l(
          () =>
            "q-tab-panels q-panel-parent" +
            (s.value === !0 ? " q-tab-panels--dark q-dark" : "")
        );
      return () => (
        e(a),
        We("div", { class: u.value }, n(), "pan", t.swipeable, () => o.value)
      );
    },
  });
const xa = [
  f("rect", { x: "0", y: "0", width: " 100", height: "100", fill: "none" }),
  f("g", { transform: "translate(25 25)" }, [
    f(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.9",
      },
      [
        f("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
  f("g", { transform: "translate(75 25)" }, [
    f(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.8",
      },
      [
        f("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0.1s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
  f("g", { transform: "translate(25 75)" }, [
    f(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.7",
      },
      [
        f("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0.3s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
  f("g", { transform: "translate(75 75)" }, [
    f(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.6",
      },
      [
        f("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0.2s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
];
var wa = ee({
  name: "QSpinnerCube",
  props: Mt,
  setup(t) {
    const { cSize: a, classes: i } = Et(t);
    return () =>
      f(
        "svg",
        {
          class: i.value,
          width: a.value,
          height: a.value,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
        },
        xa
      );
  },
});
function De(t) {
  if (t === !1) return 0;
  if (t === !0 || t === void 0) return 1;
  const a = parseInt(t, 10);
  return isNaN(a) ? 0 : a;
}
var _a = Ce({
  name: "close-popup",
  beforeMount(t, { value: a }) {
    const i = {
      depth: De(a),
      handler(s) {
        i.depth !== 0 &&
          setTimeout(() => {
            const e = Lt(t);
            e !== void 0 && At(e, s, i.depth);
          });
      },
      handlerKey(s) {
        Bt(s, 13) === !0 && i.handler(s);
      },
    };
    (t.__qclosepopup = i),
      t.addEventListener("click", i.handler),
      t.addEventListener("keyup", i.handlerKey);
  },
  updated(t, { value: a, oldValue: i }) {
    a !== i && (t.__qclosepopup.depth = De(a));
  },
  beforeUnmount(t) {
    const a = t.__qclosepopup;
    t.removeEventListener("click", a.handler),
      t.removeEventListener("keyup", a.handlerKey),
      delete t.__qclosepopup;
  },
});
const Sa = Vt("workout", {
    state: () => ({ workout: null }),
    getters: {
      setsCompleted(t) {
        if (t.workout) {
          let a = 0;
          return (
            t.workout.lifts.forEach(function (i) {
              i.sets.forEach(function (s) {
                s.repetitions > 0 && a++;
              });
            }),
            a
          );
        } else return 0;
      },
      repsCompleted(t) {
        if (t.workout) {
          let a = 0;
          return (
            t.workout.lifts.forEach(function (i) {
              i.sets.forEach(function (s) {
                a = a + s.repetitions;
              });
            }),
            a
          );
        } else return 0;
      },
      totalWeight(t) {
        if (t.workout) {
          let a = 0;
          return (
            t.workout.lifts.forEach(function (i) {
              i.sets.forEach(function (s) {
                a = a + s.repetitions * s.weight;
              });
            }),
            a
          );
        } else return 0;
      },
      totalSets(t) {
        if (t.workout) {
          let a = 0;
          return (
            t.workout.lifts.forEach(function (i) {
              a += i.sets.length;
            }),
            a
          );
        }
        return 0;
      },
      setsPctComplete() {
        return (this.setsCompleted / this.totalSets) * 100;
      },
    },
    actions: {
      async saveWorkout() {
        await Nt(this.workout).then((t) => {
          t.status != 200 && console.log(t.data.message);
        });
      },
      async getWorkout(t) {
        this.workout = await Rt(t);
      },
    },
  }),
  qa = Dt({
    name: "StopWatch",
    data() {
      return {
        time: null,
        isRunning: !1,
        startTime: null,
        times: [0, 0, 0, 0],
        frameId: null,
      };
    },
    expose: ["start", "stop", "pause", "time"],
    mounted() {
      this.start();
    },
    methods: {
      start() {
        if (this.isRunning) throw new Error("Stopwatch has already started.");
        (this.isRunning = !0),
          this.startTime || (this.startTime = performance.now()),
          this.$emit("start", this.startTime),
          (this.frameId = requestAnimationFrame(this.step));
      },
      stop() {
        if (!this.isRunning)
          throw new Error("Stopwatch has not been started yet.");
        (this.isRunning = !1),
          (this.startTime = null),
          (this.times = [0, 0, 0, 0]),
          this.$emit("stop", performance.now(), this.time),
          cancelAnimationFrame(this.frameId);
      },
      pause() {
        (this.isRunning = !this.isRunning),
          this.isRunning &&
            ((this.startTime = performance.now()),
            this.calculate(performance.now()),
            (this.frameId = requestAnimationFrame(this.step))),
          this.$emit("pause", this.isRunning, this.time);
      },
      formatTimes(t = this.times) {
        const a = e(t[0], 2),
          i = e(t[1], 2),
          s = e(t[2], 2);
        return `${a}:${i}:${s}`;
        function e(n, o) {
          let u = n.toString();
          for (; u.length < o; ) (u = "0" + u), --o;
          return u;
        }
      },
      step(t) {
        !this.isRunning ||
          (this.calculate(t),
          (this.startTime = t),
          (this.time = this.formatTimes()),
          (this.frameId = requestAnimationFrame(this.step)));
      },
      calculate(t) {
        const a = t - this.startTime;
        (this.times[3] += a / 10),
          this.times[3] >= 100 &&
            ((this.times[3] -= 100), (this.times[2] += 1)),
          this.times[2] >= 60 && ((this.times[2] -= 60), (this.times[1] += 1)),
          this.times[1] >= 60 && ((this.times[1] -= 60), (this.times[0] += 1));
      },
    },
  }),
  Ta = { class: "time" };
function Pa(t, a, i, s, e, n) {
  return F(), J("div", Ta, W(t.time), 1);
}
var $a = Ft(qa, [["render", Pa]]);
const Ma = { class: "row" },
  Ea = { class: "col-9 q-pr-md" },
  La = { class: "row" },
  Aa = { class: "row" },
  Ba = { class: "col-3 q-pr-md" },
  Va = { class: "col-9" },
  Na = { class: "row" },
  Ra = { class: "col-3" },
  Da = { class: "text-h4 text-secondary text-weight-thin text-center" },
  Fa = { class: "text-h6 text-secondary text-weight-thin text-center" },
  Ia = { class: "text-h6 text-center" },
  za = S(
    "span",
    { class: "text-h6 text-weight-thin" },
    "Total Sets Completed - ",
    -1
  ),
  Qa = { class: "text-bold text-h6 align-right" },
  Wa = S(
    "span",
    { class: "text-h6 text-weight-thin" },
    "Total Reps Completed - ",
    -1
  ),
  Ua = { class: "text-bold text-h6 align-right" },
  Ka = S("span", { class: "text-h6 text-weight-thin" }, "Total Weight - ", -1),
  Oa = { class: "text-bold text-h6 align-right" },
  Ya = S("span", { class: "q-ml-sm" }, "All Done?", -1),
  tn = {
    __name: "WorkoutPage",
    setup(t) {
      Xt.register(jt, Gt, Ht, Jt, Zt), zt();
      const a = Qt(),
        i = Wt(),
        s = Sa(),
        e = l(() => ({
          labels: ["Complete", "Incomplete"],
          datasets: [
            {
              backgroundColor: ["#41B883", "transparent"],
              borderColor: ["white", "transparent"],
              data: [s.setsPctComplete, 100 - s.setsPctComplete],
            },
          ],
        })),
        n = {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
        },
        o = E("one"),
        u = E(!1),
        g = E(null);
      function d() {
        const v = new Date();
        return v.getFullYear() + "-" + (v.getMonth() + 1) + "-" + v.getDate();
      }
      const b = d();
      It(async () => {
        await s.getWorkout(a.params.muscleGroupId),
          (o.value = s.workout.lifts[0].id);
      });
      function k() {
        s.saveWorkout(), i.push({ name: "home" });
      }
      return (v, m) =>
        V(s).workout
          ? (F(),
            re(
              Ve,
              { key: 0, padding: "" },
              {
                default: M(() => [
                  S("div", Ma, [
                    S("div", Ea, [
                      S("div", La, [
                        _(
                          ge,
                          { style: { width: "100%", height: "500px" } },
                          {
                            default: M(() => [
                              _(
                                kt,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    m[0] || (m[0] = (c) => (o.value = c)),
                                  class: "text-secondary",
                                  align: "left",
                                },
                                {
                                  default: M(() => [
                                    (F(!0),
                                    J(
                                      be,
                                      null,
                                      he(
                                        V(s).workout.lifts,
                                        (c) => (
                                          F(),
                                          re(
                                            aa,
                                            {
                                              key: c.id,
                                              label: c.exercise.name,
                                              name: c.id,
                                            },
                                            null,
                                            8,
                                            ["label", "name"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"]
                              ),
                              _(se),
                              _(
                                Ca,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    m[1] || (m[1] = (c) => (o.value = c)),
                                  animated: "",
                                },
                                {
                                  default: M(() => [
                                    (F(!0),
                                    J(
                                      be,
                                      null,
                                      he(
                                        V(s).workout.lifts,
                                        (c) => (
                                          F(),
                                          re(
                                            ka,
                                            { key: c.id, name: c.id },
                                            {
                                              default: M(() => [
                                                (F(!0),
                                                J(
                                                  be,
                                                  null,
                                                  he(
                                                    c.sets,
                                                    (q) => (
                                                      F(),
                                                      J("div", { key: q.id }, [
                                                        S("div", Aa, [
                                                          S("div", Ba, [
                                                            _(
                                                              Yt,
                                                              {
                                                                modelValue:
                                                                  q.weight,
                                                                "onUpdate:modelValue":
                                                                  (T) =>
                                                                    (q.weight =
                                                                      T),
                                                                modelModifiers:
                                                                  {
                                                                    number: !0,
                                                                  },
                                                                type: "number",
                                                                filled: "",
                                                                style: {
                                                                  "max-width":
                                                                    "200px",
                                                                },
                                                              },
                                                              {
                                                                before: M(
                                                                  () => [
                                                                    Be(
                                                                      " Weight: "
                                                                    ),
                                                                  ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1032,
                                                              [
                                                                "modelValue",
                                                                "onUpdate:modelValue",
                                                              ]
                                                            ),
                                                          ]),
                                                          S("div", Va, [
                                                            _(
                                                              va,
                                                              {
                                                                modelValue:
                                                                  q.repetitions,
                                                                "onUpdate:modelValue":
                                                                  (T) =>
                                                                    (q.repetitions =
                                                                      T),
                                                                min: 0,
                                                                max: q.repetitionsGoal,
                                                                step: 1,
                                                                snap: "",
                                                                "marker-labels":
                                                                  "",
                                                                "track-size":
                                                                  "10px",
                                                                "thumb-color":
                                                                  "black",
                                                                markers: "",
                                                                color:
                                                                  "positive",
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "modelValue",
                                                                "onUpdate:modelValue",
                                                                "max",
                                                              ]
                                                            ),
                                                          ]),
                                                        ]),
                                                      ])
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["name"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      S("div", Na, [
                        _(ye, {
                          class: "full-width q-mt-sm",
                          color: "primary",
                          label: "Finish Workout",
                          onClick: m[2] || (m[2] = (c) => (u.value = !0)),
                        }),
                      ]),
                    ]),
                    S("div", Ra, [
                      _(
                        ge,
                        {
                          class: "my-card",
                          style: { width: "100%", height: "500px" },
                        },
                        {
                          default: M(() => [
                            S(
                              "div",
                              Da,
                              W(V(s).workout.muscleGroupName) + " Workout ",
                              1
                            ),
                            S("div", Fa, W(V(b)), 1),
                            _(se, { class: "q-my-sm" }),
                            _(
                              $a,
                              {
                                ref_key: "stopWatch",
                                ref: g,
                                class: "digits text-center text-h5",
                              },
                              null,
                              512
                            ),
                            _(se, { class: "q-my-md" }),
                            S(
                              "div",
                              Ia,
                              W(Math.round(V(s).setsPctComplete)) +
                                "% Complete ",
                              1
                            ),
                            _(
                              V(ea),
                              {
                                "chart-options": n,
                                "chart-data": V(e),
                                "chart-id": "chartId",
                                height: 175,
                              },
                              null,
                              8,
                              ["chart-data"]
                            ),
                            _(se, { class: "q-my-md" }),
                            S("div", null, [
                              za,
                              S("span", Qa, W(V(s).setsCompleted), 1),
                            ]),
                            S("div", null, [
                              Wa,
                              S("span", Ua, W(V(s).repsCompleted), 1),
                            ]),
                            S("div", null, [
                              Ka,
                              S("span", Oa, W(V(s).totalWeight), 1),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _(
                    Ot,
                    {
                      modelValue: u.value,
                      "onUpdate:modelValue":
                        m[3] || (m[3] = (c) => (u.value = c)),
                      persistent: "",
                    },
                    {
                      default: M(() => [
                        _(ge, null, {
                          default: M(() => [
                            _(
                              Ae,
                              { class: "row items-center" },
                              { default: M(() => [Ya]), _: 1 }
                            ),
                            _(Ae, null, {
                              default: M(() => [
                                Be(" Summary of workout here "),
                              ]),
                              _: 1,
                            }),
                            _(ta),
                            _(
                              Ut,
                              { align: "right" },
                              {
                                default: M(() => [
                                  Kt(
                                    _(
                                      ye,
                                      {
                                        flat: "",
                                        label: "Cancel",
                                        color: "primary",
                                      },
                                      null,
                                      512
                                    ),
                                    [[_a]]
                                  ),
                                  _(ye, {
                                    flat: "",
                                    label: "Finish",
                                    color: "primary",
                                    onClick: k,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                ]),
                _: 1,
              }
            ))
          : (F(),
            re(
              Ve,
              {
                key: 1,
                class:
                  "window-height window-width row justify-center items-center",
              },
              {
                default: M(() => [
                  _(wa, { color: "positive", size: "6em", thickness: 10 }),
                ]),
                _: 1,
              }
            ));
    },
  };
export { tn as default };
