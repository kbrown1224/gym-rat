import { u as gt, a as bt, b as kt, Q as yt } from "./QTabs.af02ed7a.js";
import {
  d as oe,
  b3 as Ce,
  aw as V,
  s as Ne,
  b4 as Ie,
  at as z,
  b5 as Y,
  as as Ee,
  aQ as pe,
  aE as j,
  au as X,
  V as Z,
  ah as ze,
  y as R,
  f as i,
  q as Ct,
  ag as Qe,
  aL as xt,
  aV as wt,
  aX as me,
  h as S,
  aq as We,
  j as le,
  b6 as _t,
  b7 as St,
  m as Ke,
  aH as qt,
  b8 as $t,
  g as xe,
  E as Pt,
  b9 as Mt,
  ba as Tt,
  bb as Rt,
  a9 as Et,
  R as Bt,
  F as Dt,
  _ as Lt,
  o as I,
  Y as J,
  a0 as W,
  aj as At,
  n as Vt,
  O as L,
  c as fe,
  w as T,
  bc as Ft,
  J as Nt,
  bd as It,
  K as zt,
  G as _,
  a as w,
  Z as he,
  $ as ge,
  M as ne,
  P as be,
  Q as ke,
  L as Be,
  a4 as De,
  be as Qt,
  a6 as Wt,
  aR as Kt,
  N as Ot,
} from "./index.099d1cbc.js";
import {
  c as Oe,
  h as U,
  C as Ut,
  p as Yt,
  a as Xt,
  b as jt,
  A as Gt,
  d as Ht,
  D as Jt,
} from "./index.28dc5740.js";
import { Q as Zt } from "./QSpace.700ea27b.js";
import { Q as ea } from "./QPage.a405a503.js";
import "./QResizeObserver.c1066bbb.js";
import "./rtl.b51694b1.js";
var ta = oe({
  name: "QTab",
  props: gt,
  emits: bt,
  setup(t, { slots: n, emit: l }) {
    const { renderTab: s } = kt(t, n, l);
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
  aa = Object.keys(we);
we.all = !0;
function re(t) {
  const n = {};
  for (const l of aa) t[l] === !0 && (n[l] = !0);
  return Object.keys(n).length === 0
    ? we
    : (n.horizontal === !0
        ? (n.left = n.right = !0)
        : n.left === !0 && n.right === !0 && (n.horizontal = !0),
      n.vertical === !0
        ? (n.up = n.down = !0)
        : n.up === !0 && n.down === !0 && (n.vertical = !0),
      n.horizontal === !0 && n.vertical === !0 && (n.all = !0),
      n);
}
function se(t, n) {
  return (
    n.event === void 0 &&
    t.target !== void 0 &&
    t.target.draggable !== !0 &&
    typeof n.handler == "function" &&
    t.target.nodeName.toUpperCase() !== "INPUT" &&
    (t.qClonedBy === void 0 || t.qClonedBy.indexOf(n.uid) === -1)
  );
}
function ye(t, n, l) {
  const s = j(t);
  let e,
    a = s.left - n.event.x,
    o = s.top - n.event.y,
    u = Math.abs(a),
    d = Math.abs(o);
  const v = n.direction;
  v.horizontal === !0 && v.vertical !== !0
    ? (e = a < 0 ? "left" : "right")
    : v.horizontal !== !0 && v.vertical === !0
    ? (e = o < 0 ? "up" : "down")
    : v.up === !0 && o < 0
    ? ((e = "up"),
      u > d &&
        (v.left === !0 && a < 0
          ? (e = "left")
          : v.right === !0 && a > 0 && (e = "right")))
    : v.down === !0 && o > 0
    ? ((e = "down"),
      u > d &&
        (v.left === !0 && a < 0
          ? (e = "left")
          : v.right === !0 && a > 0 && (e = "right")))
    : v.left === !0 && a < 0
    ? ((e = "left"),
      u < d &&
        (v.up === !0 && o < 0
          ? (e = "up")
          : v.down === !0 && o > 0 && (e = "down")))
    : v.right === !0 &&
      a > 0 &&
      ((e = "right"),
      u < d &&
        (v.up === !0 && o < 0
          ? (e = "up")
          : v.down === !0 && o > 0 && (e = "down")));
  let g = !1;
  if (e === void 0 && l === !1) {
    if (n.event.isFirst === !0 || n.event.lastDir === void 0) return {};
    (e = n.event.lastDir),
      (g = !0),
      e === "left" || e === "right"
        ? ((s.left -= a), (u = 0), (a = 0))
        : ((s.top -= o), (d = 0), (o = 0));
  }
  return {
    synthetic: g,
    payload: {
      evt: t,
      touch: n.event.mouse !== !0,
      mouse: n.event.mouse === !0,
      position: s,
      direction: e,
      isFirst: n.event.isFirst,
      isFinal: l === !0,
      duration: Date.now() - n.event.time,
      distance: { x: u, y: d },
      offset: { x: a, y: o },
      delta: { x: s.left - n.event.lastX, y: s.top - n.event.lastY },
    },
  };
}
let na = 0;
var ra = Ce({
  name: "touch-pan",
  beforeMount(t, { value: n, modifiers: l }) {
    if (l.mouse !== !0 && V.has.touch !== !0) return;
    function s(a, o) {
      l.mouse === !0 && o === !0
        ? Z(a)
        : (l.stop === !0 && pe(a), l.prevent === !0 && Ee(a));
    }
    const e = {
      uid: "qvtp_" + na++,
      handler: n,
      modifiers: l,
      direction: re(l),
      noop: Ne,
      mouseStart(a) {
        se(a, e) &&
          Ie(a) &&
          (z(e, "temp", [
            [document, "mousemove", "move", "notPassiveCapture"],
            [document, "mouseup", "end", "passiveCapture"],
          ]),
          e.start(a, !0));
      },
      touchStart(a) {
        if (se(a, e)) {
          const o = a.target;
          z(e, "temp", [
            [o, "touchmove", "move", "notPassiveCapture"],
            [o, "touchcancel", "end", "passiveCapture"],
            [o, "touchend", "end", "passiveCapture"],
          ]),
            e.start(a);
        }
      },
      start(a, o) {
        if (
          (V.is.firefox === !0 && Y(t, !0),
          (e.lastEvt = a),
          o === !0 || l.stop === !0)
        ) {
          if (
            e.direction.all !== !0 &&
            (o !== !0 ||
              (e.modifiers.mouseAllDir !== !0 &&
                e.modifiers.mousealldir !== !0))
          ) {
            const v =
              a.type.indexOf("mouse") > -1
                ? new MouseEvent(a.type, a)
                : new TouchEvent(a.type, a);
            a.defaultPrevented === !0 && Ee(v),
              a.cancelBubble === !0 && pe(v),
              Object.assign(v, {
                qKeyEvent: a.qKeyEvent,
                qClickOutside: a.qClickOutside,
                qAnchorHandled: a.qAnchorHandled,
                qClonedBy:
                  a.qClonedBy === void 0 ? [e.uid] : a.qClonedBy.concat(e.uid),
              }),
              (e.initialEvent = { target: a.target, event: v });
          }
          pe(a);
        }
        const { left: u, top: d } = j(a);
        e.event = {
          x: u,
          y: d,
          time: Date.now(),
          mouse: o === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: u,
          lastY: d,
        };
      },
      move(a) {
        if (e.event === void 0) return;
        const o = j(a),
          u = o.left - e.event.x,
          d = o.top - e.event.y;
        if (u === 0 && d === 0) return;
        e.lastEvt = a;
        const v = e.event.mouse === !0,
          g = () => {
            s(a, v);
            let f;
            l.preserveCursor !== !0 &&
              l.preservecursor !== !0 &&
              ((f = document.documentElement.style.cursor || ""),
              (document.documentElement.style.cursor = "grabbing")),
              v === !0 &&
                document.body.classList.add("no-pointer-events--children"),
              document.body.classList.add("non-selectable"),
              Oe(),
              (e.styleCleanup = (c) => {
                if (
                  ((e.styleCleanup = void 0),
                  f !== void 0 && (document.documentElement.style.cursor = f),
                  document.body.classList.remove("non-selectable"),
                  v === !0)
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
          e.event.isFirst !== !0 && s(a, e.event.mouse);
          const { payload: f, synthetic: c } = ye(a, e, !1);
          f !== void 0 &&
            (e.handler(f) === !1
              ? e.end(a)
              : (e.styleCleanup === void 0 && e.event.isFirst === !0 && g(),
                (e.event.lastX = f.position.left),
                (e.event.lastY = f.position.top),
                (e.event.lastDir = c === !0 ? void 0 : f.direction),
                (e.event.isFirst = !1)));
          return;
        }
        if (
          e.direction.all === !0 ||
          (v === !0 &&
            (e.modifiers.mouseAllDir === !0 || e.modifiers.mousealldir === !0))
        ) {
          g(), (e.event.detected = !0), e.move(a);
          return;
        }
        const k = Math.abs(u),
          p = Math.abs(d);
        k !== p &&
          ((e.direction.horizontal === !0 && k > p) ||
          (e.direction.vertical === !0 && k < p) ||
          (e.direction.up === !0 && k < p && d < 0) ||
          (e.direction.down === !0 && k < p && d > 0) ||
          (e.direction.left === !0 && k > p && u < 0) ||
          (e.direction.right === !0 && k > p && u > 0)
            ? ((e.event.detected = !0), e.move(a))
            : e.end(a, !0));
      },
      end(a, o) {
        if (e.event !== void 0) {
          if ((X(e, "temp"), V.is.firefox === !0 && Y(t, !1), o === !0))
            e.styleCleanup !== void 0 && e.styleCleanup(),
              e.event.detected !== !0 &&
                e.initialEvent !== void 0 &&
                e.initialEvent.target.dispatchEvent(e.initialEvent.event);
          else if (e.event.detected === !0) {
            e.event.isFirst === !0 &&
              e.handler(ye(a === void 0 ? e.lastEvt : a, e).payload);
            const { payload: u } = ye(a === void 0 ? e.lastEvt : a, e, !0),
              d = () => {
                e.handler(u);
              };
            e.styleCleanup !== void 0 ? e.styleCleanup(d) : d();
          }
          (e.event = void 0), (e.initialEvent = void 0), (e.lastEvt = void 0);
        }
      },
    };
    if (((t.__qtouchpan = e), l.mouse === !0)) {
      const a = l.mouseCapture === !0 || l.mousecapture === !0 ? "Capture" : "";
      z(e, "main", [[t, "mousedown", "mouseStart", `passive${a}`]]);
    }
    V.has.touch === !0 &&
      z(e, "main", [
        [
          t,
          "touchstart",
          "touchStart",
          `passive${l.capture === !0 ? "Capture" : ""}`,
        ],
        [t, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(t, n) {
    const l = t.__qtouchpan;
    l !== void 0 &&
      (n.oldValue !== n.value &&
        (typeof value != "function" && l.end(), (l.handler = n.value)),
      (l.direction = re(n.modifiers)));
  },
  beforeUnmount(t) {
    const n = t.__qtouchpan;
    n !== void 0 &&
      (n.event !== void 0 && n.end(),
      X(n, "main"),
      X(n, "temp"),
      V.is.firefox === !0 && Y(t, !1),
      n.styleCleanup !== void 0 && n.styleCleanup(),
      delete t.__qtouchpan);
  },
});
const Le = "q-slider__marker-labels",
  sa = (t) => ({ value: t }),
  oa = ({ marker: t }) =>
    S("div", { key: t.value, style: t.style, class: t.classes }, t.label),
  Ue = [34, 37, 40, 33, 39, 38],
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
  ia = ["pan", "update:modelValue", "change"];
function ua({
  updateValue: t,
  updatePosition: n,
  getDragging: l,
  formAttrs: s,
}) {
  const {
      props: e,
      emit: a,
      slots: o,
      proxy: { $q: u },
    } = le(),
    d = ze(e, u),
    v = _t(s),
    g = R(!1),
    k = R(!1),
    p = R(!1),
    f = R(!1),
    c = i(() => (e.vertical === !0 ? "--v" : "--h")),
    q = i(() => "-" + (e.switchLabelSide === !0 ? "switched" : "standard")),
    $ = i(() =>
      e.vertical === !0 ? e.reverse === !0 : e.reverse !== (u.lang.rtl === !0)
    ),
    E = i(() =>
      isNaN(e.innerMin) === !0 || e.innerMin < e.min ? e.min : e.innerMin
    ),
    B = i(() =>
      isNaN(e.innerMax) === !0 || e.innerMax > e.max ? e.max : e.innerMax
    ),
    y = i(() => e.disable !== !0 && e.readonly !== !0 && E.value < B.value),
    M = i(() => (String(e.step).trim().split(".")[1] || "").length),
    F = i(() => (e.step === 0 ? 1 : e.step)),
    ee = i(() => (y.value === !0 ? e.tabindex || 0 : -1)),
    A = i(() => e.max - e.min),
    G = i(() => B.value - E.value),
    Q = i(() => ie(E.value)),
    H = i(() => ie(B.value)),
    K = i(() =>
      e.vertical === !0
        ? $.value === !0
          ? "bottom"
          : "top"
        : $.value === !0
        ? "right"
        : "left"
    ),
    te = i(() => (e.vertical === !0 ? "height" : "width")),
    m = i(() => (e.vertical === !0 ? "width" : "height")),
    C = i(() => (e.vertical === !0 ? "vertical" : "horizontal")),
    D = i(() => {
      const r = {
        role: "slider",
        "aria-valuemin": E.value,
        "aria-valuemax": B.value,
        "aria-orientation": C.value,
        "data-step": e.step,
      };
      return (
        e.disable === !0
          ? (r["aria-disabled"] = "true")
          : e.readonly === !0 && (r["aria-readonly"] = "true"),
        r
      );
    }),
    O = i(
      () =>
        `q-slider q-slider${c.value} q-slider--${
          g.value === !0 ? "" : "in"
        }active inline no-wrap ` +
        (e.vertical === !0 ? "row" : "column") +
        (e.disable === !0
          ? " disabled"
          : " q-slider--enabled" +
            (y.value === !0 ? " q-slider--editable" : "")) +
        (p.value === "both" ? " q-slider--focus" : "") +
        (e.label || e.labelAlways === !0 ? " q-slider--label" : "") +
        (e.labelAlways === !0 ? " q-slider--label-always" : "") +
        (d.value === !0 ? " q-slider--dark" : "") +
        (e.dense === !0 ? " q-slider--dense q-slider--dense" + c.value : "")
    );
  function ae(r) {
    const h = "q-slider__" + r;
    return `${h} ${h}${c.value} ${h}${c.value}${q.value}`;
  }
  function _e(r) {
    const h = "q-slider__" + r;
    return `${h} ${h}${c.value}`;
  }
  const Ye = i(() => {
      const r = e.selectionColor || e.color;
      return (
        "q-slider__selection absolute" + (r !== void 0 ? ` text-${r}` : "")
      );
    }),
    Xe = i(() => _e("markers") + " absolute overflow-hidden"),
    je = i(() => _e("track-container")),
    Ge = i(() => ae("pin")),
    He = i(() => ae("label")),
    Je = i(() => ae("text-container")),
    Ze = i(
      () =>
        ae("marker-labels-container") +
        (e.markerLabelsClass !== void 0 ? ` ${e.markerLabelsClass}` : "")
    ),
    et = i(
      () =>
        "q-slider__track relative-position no-outline" +
        (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ),
    tt = i(() => {
      const r = { [m.value]: e.trackSize };
      return (
        e.trackImg !== void 0 &&
          (r.backgroundImage = `url(${e.trackImg}) !important`),
        r
      );
    }),
    at = i(
      () =>
        "q-slider__inner absolute" +
        (e.innerTrackColor !== void 0 ? ` bg-${e.innerTrackColor}` : "")
    ),
    Se = i(() => {
      const r = {
        [K.value]: `${100 * Q.value}%`,
        [te.value]: `${100 * (H.value - Q.value)}%`,
      };
      return (
        e.innerTrackImg !== void 0 &&
          (r.backgroundImage = `url(${e.innerTrackImg}) !important`),
        r
      );
    });
  function nt(r) {
    const { min: h, max: b, step: x } = e;
    let P = h + r * (b - h);
    if (x > 0) {
      const N = (P - h) % x;
      P += (Math.abs(N) >= x / 2 ? (N < 0 ? -1 : 1) * x : 0) - N;
    }
    return (
      M.value > 0 && (P = parseFloat(P.toFixed(M.value))),
      U(P, E.value, B.value)
    );
  }
  function ie(r) {
    return A.value === 0 ? 0 : (r - e.min) / A.value;
  }
  function rt(r, h) {
    const b = j(r),
      x =
        e.vertical === !0
          ? U((b.top - h.top) / h.height, 0, 1)
          : U((b.left - h.left) / h.width, 0, 1);
    return U($.value === !0 ? 1 - x : x, Q.value, H.value);
  }
  const qe = i(() => (wt(e.markers) === !0 ? e.markers : F.value)),
    $e = i(() => {
      const r = [],
        h = qe.value,
        b = e.max;
      let x = e.min;
      do r.push(x), (x += h);
      while (x < b);
      return r.push(b), r;
    }),
    Pe = i(() => {
      const r = ` ${Le}${c.value}-`;
      return (
        Le +
        `${r}${e.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${r}${
          $.value === !0 ? "rtl" : "ltr"
        }`
      );
    }),
    ue = i(() =>
      e.markerLabels === !1
        ? null
        : ot(e.markerLabels).map((r, h) => ({
            index: h,
            value: r.value,
            label: r.label || r.value,
            classes: Pe.value + (r.classes !== void 0 ? " " + r.classes : ""),
            style: { ...Te(r.value), ...(r.style || {}) },
          }))
    ),
    Me = i(() => ({
      markerList: ue.value,
      markerMap: lt.value,
      classes: Pe.value,
      getStyle: Te,
    })),
    st = i(() => {
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
    if (r === !0) return $e.value.map(sa);
    if (typeof r == "function")
      return $e.value.map((b) => {
        const x = r(b);
        return me(x) === !0 ? { ...x, value: b } : { value: b, label: x };
      });
    const h = ({ value: b }) => b >= e.min && b <= e.max;
    return Array.isArray(r) === !0
      ? r.map((b) => (me(b) === !0 ? b : { value: b })).filter(h)
      : Object.keys(r)
          .map((b) => {
            const x = r[b],
              P = Number(b);
            return me(x) === !0 ? { ...x, value: P } : { value: P, label: x };
          })
          .filter(h);
  }
  function Te(r) {
    return { [K.value]: `${(100 * (r - e.min)) / A.value}%` };
  }
  const lt = i(() => {
    if (e.markerLabels === !1) return null;
    const r = {};
    return (
      ue.value.forEach((h) => {
        r[h.value] = h;
      }),
      r
    );
  });
  function it() {
    if (o["marker-label-group"] !== void 0)
      return o["marker-label-group"](Me.value);
    const r = o["marker-label"] || oa;
    return ue.value.map((h) => r({ marker: h, ...Me.value }));
  }
  const ut = i(() => [
    [
      ra,
      ct,
      void 0,
      { [C.value]: !0, prevent: !0, stop: !0, mouse: !0, mouseAllDir: !0 },
    ],
  ]);
  function ct(r) {
    r.isFinal === !0
      ? (f.value !== void 0 &&
          (n(r.evt),
          r.touch === !0 && t(!0),
          (f.value = void 0),
          a("pan", "end")),
        (g.value = !1),
        (p.value = !1))
      : r.isFirst === !0
      ? ((f.value = l(r.evt)), n(r.evt), t(), (g.value = !0), a("pan", "start"))
      : (n(r.evt), t());
  }
  function Re() {
    p.value = !1;
  }
  function dt(r) {
    n(r, l(r)),
      t(),
      (k.value = !0),
      (g.value = !0),
      document.addEventListener("mouseup", ce, !0);
  }
  function ce() {
    (k.value = !1),
      (g.value = !1),
      t(!0),
      Re(),
      document.removeEventListener("mouseup", ce, !0);
  }
  function vt(r) {
    n(r, l(r)), t(!0);
  }
  function pt(r) {
    Ue.includes(r.keyCode) && t(!0);
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
    const h = i(() =>
        k.value === !1 && (p.value === r.focusValue || p.value === "both")
          ? " q-slider--focus"
          : ""
      ),
      b = i(
        () =>
          `q-slider__thumb q-slider__thumb${c.value} q-slider__thumb${
            c.value
          }-${$.value === !0 ? "rtl" : "ltr"} absolute non-selectable` +
          h.value +
          (r.thumbColor.value !== void 0 ? ` text-${r.thumbColor.value}` : "")
      ),
      x = i(() => ({
        width: e.thumbSize,
        height: e.thumbSize,
        [K.value]: `${100 * r.ratio.value}%`,
        zIndex: p.value === r.focusValue ? 2 : void 0,
      })),
      P = i(() =>
        r.labelColor.value !== void 0 ? ` text-${r.labelColor.value}` : ""
      ),
      N = i(() => mt(r.ratio.value)),
      de = i(
        () =>
          "q-slider__text" +
          (r.labelTextColor.value !== void 0
            ? ` text-${r.labelTextColor.value}`
            : "")
      );
    return () => {
      const ve = [
        S(
          "svg",
          {
            class: "q-slider__thumb-shape absolute-full",
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
          },
          [S("path", { d: e.thumbPath })]
        ),
        S("div", { class: "q-slider__focus-ring fit" }),
      ];
      return (
        (e.label === !0 || e.labelAlways === !0) &&
          (ve.push(
            S(
              "div",
              { class: Ge.value + " absolute fit no-pointer-events" + P.value },
              [
                S(
                  "div",
                  { class: He.value, style: { minWidth: e.thumbSize } },
                  [
                    S("div", { class: Je.value, style: N.value }, [
                      S("span", { class: de.value }, r.label.value),
                    ]),
                  ]
                ),
              ]
            )
          ),
          e.name !== void 0 && e.disable !== !0 && v(ve, "push")),
        S("div", { class: b.value, style: x.value, ...r.getNodeData() }, ve)
      );
    };
  }
  function ht(r, h, b, x) {
    const P = [];
    e.innerTrackColor !== "transparent" &&
      P.push(S("div", { key: "inner", class: at.value, style: Se.value })),
      e.selectionColor !== "transparent" &&
        P.push(S("div", { key: "selection", class: Ye.value, style: r.value })),
      e.markers !== !1 &&
        P.push(S("div", { key: "marker", class: Xe.value, style: st.value })),
      x(P);
    const N = [
      We(
        "div",
        { key: "trackC", class: je.value, tabindex: h.value, ...b.value },
        [S("div", { class: et.value, style: tt.value }, P)],
        "slide",
        y.value,
        () => ut.value
      ),
    ];
    if (e.markerLabels !== !1) {
      const de = e.switchMarkerLabelsSide === !0 ? "unshift" : "push";
      N[de](S("div", { key: "markerL", class: Ze.value }, it()));
    }
    return N;
  }
  return (
    Ct(() => {
      document.removeEventListener("mouseup", ce, !0);
    }),
    {
      state: {
        active: g,
        focus: p,
        preventFocus: k,
        dragging: f,
        editable: y,
        classes: O,
        tabindex: ee,
        attributes: D,
        step: F,
        decimals: M,
        trackLen: A,
        innerMin: E,
        innerMinRatio: Q,
        innerMax: B,
        innerMaxRatio: H,
        positionProp: K,
        sizeProp: te,
        isReversed: $,
      },
      methods: {
        onActivate: dt,
        onMobileClick: vt,
        onBlur: Re,
        onKeyup: pt,
        getContent: ht,
        getThumbRenderFn: ft,
        convertRatioToModel: nt,
        convertModelToRatio: ie,
        getDraggingRatio: rt,
      },
    }
  );
}
const ca = () => ({});
var da = oe({
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
  emits: ia,
  setup(t, { emit: n }) {
    const {
        proxy: { $q: l },
      } = le(),
      { state: s, methods: e } = ua({
        updateValue: c,
        updatePosition: $,
        getDragging: q,
        formAttrs: St(t),
      }),
      a = R(null),
      o = R(0),
      u = R(0);
    function d() {
      u.value =
        t.modelValue === null
          ? s.innerMin.value
          : U(t.modelValue, s.innerMin.value, s.innerMax.value);
    }
    Ke(() => `${t.modelValue}|${s.innerMin.value}|${s.innerMax.value}`, d), d();
    const v = i(() => e.convertModelToRatio(u.value)),
      g = i(() => (s.active.value === !0 ? o.value : v.value)),
      k = i(() => {
        const y = {
          [s.positionProp.value]: `${100 * s.innerMinRatio.value}%`,
          [s.sizeProp.value]: `${100 * (g.value - s.innerMinRatio.value)}%`,
        };
        return (
          t.selectionImg !== void 0 &&
            (y.backgroundImage = `url(${t.selectionImg}) !important`),
          y
        );
      }),
      p = e.getThumbRenderFn({
        focusValue: !0,
        getNodeData: ca,
        ratio: g,
        label: i(() => (t.labelValue !== void 0 ? t.labelValue : u.value)),
        thumbColor: i(() => t.thumbColor || t.color),
        labelColor: i(() => t.labelColor),
        labelTextColor: i(() => t.labelTextColor),
      }),
      f = i(() =>
        s.editable.value !== !0
          ? {}
          : l.platform.is.mobile === !0
          ? { onClick: e.onMobileClick }
          : {
              onMousedown: e.onActivate,
              onFocus: E,
              onBlur: e.onBlur,
              onKeydown: B,
              onKeyup: e.onKeyup,
            }
      );
    function c(y) {
      u.value !== t.modelValue && n("update:modelValue", u.value),
        y === !0 && n("change", u.value);
    }
    function q() {
      return a.value.getBoundingClientRect();
    }
    function $(y, M = s.dragging.value) {
      const F = e.getDraggingRatio(y, M);
      (u.value = e.convertRatioToModel(F)),
        (o.value =
          t.snap !== !0 || t.step === 0 ? F : e.convertModelToRatio(u.value));
    }
    function E() {
      s.focus.value = !0;
    }
    function B(y) {
      if (!Ue.includes(y.keyCode)) return;
      Z(y);
      const M = ([34, 33].includes(y.keyCode) ? 10 : 1) * s.step.value,
        F =
          ([34, 37, 40].includes(y.keyCode) ? -1 : 1) *
          (s.isReversed.value === !0 ? -1 : 1) *
          (t.vertical === !0 ? -1 : 1) *
          M;
      (u.value = U(
        parseFloat((u.value + F).toFixed(s.decimals.value)),
        s.innerMin.value,
        s.innerMax.value
      )),
        c();
    }
    return () => {
      const y = e.getContent(k, s.tabindex, f, (M) => {
        M.push(p());
      });
      return S(
        "div",
        {
          ref: a,
          class:
            s.classes.value +
            (t.modelValue === null ? " q-slider--no-value" : ""),
          ...s.attributes.value,
          "aria-valuenow": t.modelValue,
        },
        y
      );
    };
  },
});
function va(t) {
  const n = [0.06, 6, 50];
  return (
    typeof t == "string" &&
      t.length &&
      t.split(":").forEach((l, s) => {
        const e = parseFloat(l);
        e && (n[s] = e);
      }),
    n
  );
}
var pa = Ce({
  name: "touch-swipe",
  beforeMount(t, { value: n, arg: l, modifiers: s }) {
    if (s.mouse !== !0 && V.has.touch !== !0) return;
    const e = s.mouseCapture === !0 ? "Capture" : "",
      a = {
        handler: n,
        sensitivity: va(l),
        direction: re(s),
        noop: Ne,
        mouseStart(o) {
          se(o, a) &&
            Ie(o) &&
            (z(a, "temp", [
              [document, "mousemove", "move", `notPassive${e}`],
              [document, "mouseup", "end", "notPassiveCapture"],
            ]),
            a.start(o, !0));
        },
        touchStart(o) {
          if (se(o, a)) {
            const u = o.target;
            z(a, "temp", [
              [u, "touchmove", "move", "notPassiveCapture"],
              [u, "touchcancel", "end", "notPassiveCapture"],
              [u, "touchend", "end", "notPassiveCapture"],
            ]),
              a.start(o);
          }
        },
        start(o, u) {
          V.is.firefox === !0 && Y(t, !0);
          const d = j(o);
          a.event = {
            x: d.left,
            y: d.top,
            time: Date.now(),
            mouse: u === !0,
            dir: !1,
          };
        },
        move(o) {
          if (a.event === void 0) return;
          if (a.event.dir !== !1) {
            Z(o);
            return;
          }
          const u = Date.now() - a.event.time;
          if (u === 0) return;
          const d = j(o),
            v = d.left - a.event.x,
            g = Math.abs(v),
            k = d.top - a.event.y,
            p = Math.abs(k);
          if (a.event.mouse !== !0) {
            if (g < a.sensitivity[1] && p < a.sensitivity[1]) {
              a.end(o);
              return;
            }
          } else if (g < a.sensitivity[2] && p < a.sensitivity[2]) return;
          const f = g / u,
            c = p / u;
          a.direction.vertical === !0 &&
            g < p &&
            g < 100 &&
            c > a.sensitivity[0] &&
            (a.event.dir = k < 0 ? "up" : "down"),
            a.direction.horizontal === !0 &&
              g > p &&
              p < 100 &&
              f > a.sensitivity[0] &&
              (a.event.dir = v < 0 ? "left" : "right"),
            a.direction.up === !0 &&
              g < p &&
              k < 0 &&
              g < 100 &&
              c > a.sensitivity[0] &&
              (a.event.dir = "up"),
            a.direction.down === !0 &&
              g < p &&
              k > 0 &&
              g < 100 &&
              c > a.sensitivity[0] &&
              (a.event.dir = "down"),
            a.direction.left === !0 &&
              g > p &&
              v < 0 &&
              p < 100 &&
              f > a.sensitivity[0] &&
              (a.event.dir = "left"),
            a.direction.right === !0 &&
              g > p &&
              v > 0 &&
              p < 100 &&
              f > a.sensitivity[0] &&
              (a.event.dir = "right"),
            a.event.dir !== !1
              ? (Z(o),
                a.event.mouse === !0 &&
                  (document.body.classList.add("no-pointer-events--children"),
                  document.body.classList.add("non-selectable"),
                  Oe(),
                  (a.styleCleanup = (q) => {
                    (a.styleCleanup = void 0),
                      document.body.classList.remove("non-selectable");
                    const $ = () => {
                      document.body.classList.remove(
                        "no-pointer-events--children"
                      );
                    };
                    q === !0 ? setTimeout($, 50) : $();
                  })),
                a.handler({
                  evt: o,
                  touch: a.event.mouse !== !0,
                  mouse: a.event.mouse,
                  direction: a.event.dir,
                  duration: u,
                  distance: { x: g, y: p },
                }))
              : a.end(o);
        },
        end(o) {
          a.event !== void 0 &&
            (X(a, "temp"),
            V.is.firefox === !0 && Y(t, !1),
            a.styleCleanup !== void 0 && a.styleCleanup(!0),
            o !== void 0 && a.event.dir !== !1 && Z(o),
            (a.event = void 0));
        },
      };
    if (((t.__qtouchswipe = a), s.mouse === !0)) {
      const o = s.mouseCapture === !0 || s.mousecapture === !0 ? "Capture" : "";
      z(a, "main", [[t, "mousedown", "mouseStart", `passive${o}`]]);
    }
    V.has.touch === !0 &&
      z(a, "main", [
        [
          t,
          "touchstart",
          "touchStart",
          `passive${s.capture === !0 ? "Capture" : ""}`,
        ],
        [t, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(t, n) {
    const l = t.__qtouchswipe;
    l !== void 0 &&
      (n.oldValue !== n.value &&
        (typeof n.value != "function" && l.end(), (l.handler = n.value)),
      (l.direction = re(n.modifiers)));
  },
  beforeUnmount(t) {
    const n = t.__qtouchswipe;
    n !== void 0 &&
      (X(n, "main"),
      X(n, "temp"),
      V.is.firefox === !0 && Y(t, !1),
      n.styleCleanup !== void 0 && n.styleCleanup(),
      delete t.__qtouchswipe);
  },
});
function ma() {
  const t = new Map();
  return {
    getCache: function (n, l) {
      return t[n] === void 0 ? (t[n] = l) : t[n];
    },
    getCacheWithFn: function (n, l) {
      return t[n] === void 0 ? (t[n] = l()) : t[n];
    },
  };
}
const fa = { name: { required: !0 }, disable: Boolean },
  Ae = {
    setup(t, { slots: n }) {
      return () =>
        S("div", { class: "q-panel scroll", role: "tabpanel" }, xe(n.default));
    },
  },
  ha = {
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
function ba() {
  const { props: t, emit: n, proxy: l } = le(),
    { getCacheWithFn: s } = ma();
  let e, a;
  const o = R(null),
    u = R(null);
  function d(m) {
    const C = t.vertical === !0 ? "up" : "left";
    A((l.$q.lang.rtl === !0 ? -1 : 1) * (m.direction === C ? 1 : -1));
  }
  const v = i(() => [
      [
        pa,
        d,
        void 0,
        { horizontal: t.vertical !== !0, vertical: t.vertical, mouse: !0 },
      ],
    ]),
    g = i(
      () => t.transitionPrev || `slide-${t.vertical === !0 ? "down" : "right"}`
    ),
    k = i(
      () => t.transitionNext || `slide-${t.vertical === !0 ? "up" : "left"}`
    ),
    p = i(() => `--q-transition-duration: ${t.transitionDuration}ms`),
    f = i(() =>
      typeof t.modelValue == "string" || typeof t.modelValue == "number"
        ? t.modelValue
        : String(t.modelValue)
    ),
    c = i(() => ({
      include: t.keepAliveInclude,
      exclude: t.keepAliveExclude,
      max: t.keepAliveMax,
    })),
    q = i(() => t.keepAliveInclude !== void 0 || t.keepAliveExclude !== void 0);
  Ke(
    () => t.modelValue,
    (m, C) => {
      const D = y(m) === !0 ? M(m) : -1;
      a !== !0 && ee(D === -1 ? 0 : D < M(C) ? -1 : 1),
        o.value !== D &&
          ((o.value = D),
          n("before-transition", m, C),
          Pt(() => {
            n("transition", m, C);
          }));
    }
  );
  function $() {
    A(1);
  }
  function E() {
    A(-1);
  }
  function B(m) {
    n("update:modelValue", m);
  }
  function y(m) {
    return m != null && m !== "";
  }
  function M(m) {
    return e.findIndex(
      (C) =>
        C.props.name === m && C.props.disable !== "" && C.props.disable !== !0
    );
  }
  function F() {
    return e.filter((m) => m.props.disable !== "" && m.props.disable !== !0);
  }
  function ee(m) {
    const C =
      m !== 0 && t.animated === !0 && o.value !== -1
        ? "q-transition--" + (m === -1 ? g.value : k.value)
        : null;
    u.value !== C && (u.value = C);
  }
  function A(m, C = o.value) {
    let D = C + m;
    for (; D > -1 && D < e.length; ) {
      const O = e[D];
      if (O !== void 0 && O.props.disable !== "" && O.props.disable !== !0) {
        ee(m),
          (a = !0),
          n("update:modelValue", O.props.name),
          setTimeout(() => {
            a = !1;
          });
        return;
      }
      D += m;
    }
    t.infinite === !0 &&
      e.length > 0 &&
      C !== -1 &&
      C !== e.length &&
      A(m, m === -1 ? e.length : -1);
  }
  function G() {
    const m = M(t.modelValue);
    return o.value !== m && (o.value = m), !0;
  }
  function Q() {
    const m = y(t.modelValue) === !0 && G() && e[o.value];
    return t.keepAlive === !0
      ? [
          S(Mt, c.value, [
            S(
              q.value === !0
                ? s(f.value, () => ({ ...Ae, name: f.value }))
                : Ae,
              { key: f.value, style: p.value },
              () => m
            ),
          ]),
        ]
      : [
          S(
            "div",
            {
              class: "q-panel scroll",
              style: p.value,
              key: f.value,
              role: "tabpanel",
            },
            [m]
          ),
        ];
  }
  function H() {
    if (e.length !== 0)
      return t.animated === !0 ? [S(qt, { name: u.value }, Q)] : Q();
  }
  function K(m) {
    return (
      (e = $t(xe(m.default, [])).filter(
        (C) =>
          C.props !== null && C.props.slot === void 0 && y(C.props.name) === !0
      )),
      e.length
    );
  }
  function te() {
    return e;
  }
  return (
    Object.assign(l, { next: $, previous: E, goTo: B }),
    {
      panelIndex: o,
      panelDirectives: v,
      updatePanelsList: K,
      updatePanelIndex: G,
      getPanelContent: H,
      getEnabledPanels: F,
      getPanels: te,
      isValidPanelName: y,
      keepAliveProps: c,
      needsUniqueKeepAliveWrapper: q,
      goToPanelByOffset: A,
      goToPanel: B,
      nextPanel: $,
      previousPanel: E,
    }
  );
}
var ka = oe({
    name: "QTabPanel",
    props: fa,
    setup(t, { slots: n }) {
      return () =>
        S("div", { class: "q-tab-panel", role: "tabpanel" }, xe(n.default));
    },
  }),
  ya = oe({
    name: "QTabPanels",
    props: { ...ha, ...Qe },
    emits: ga,
    setup(t, { slots: n }) {
      const l = le(),
        s = ze(t, l.proxy.$q),
        { updatePanelsList: e, getPanelContent: a, panelDirectives: o } = ba(),
        u = i(
          () =>
            "q-tab-panels q-panel-parent" +
            (s.value === !0 ? " q-tab-panels--dark q-dark" : "")
        );
      return () => (
        e(n),
        We("div", { class: u.value }, a(), "pan", t.swipeable, () => o.value)
      );
    },
  });
function Ve(t) {
  if (t === !1) return 0;
  if (t === !0 || t === void 0) return 1;
  const n = parseInt(t, 10);
  return isNaN(n) ? 0 : n;
}
var Ca = Ce({
  name: "close-popup",
  beforeMount(t, { value: n }) {
    const l = {
      depth: Ve(n),
      handler(s) {
        l.depth !== 0 &&
          setTimeout(() => {
            const e = Tt(t);
            e !== void 0 && Rt(e, s, l.depth);
          });
      },
      handlerKey(s) {
        Et(s, 13) === !0 && l.handler(s);
      },
    };
    (t.__qclosepopup = l),
      t.addEventListener("click", l.handler),
      t.addEventListener("keyup", l.handlerKey);
  },
  updated(t, { value: n, oldValue: l }) {
    n !== l && (t.__qclosepopup.depth = Ve(n));
  },
  beforeUnmount(t) {
    const n = t.__qclosepopup;
    t.removeEventListener("click", n.handler),
      t.removeEventListener("keyup", n.handlerKey),
      delete t.__qclosepopup;
  },
});
function Fe() {
  const t = new Date(),
    n = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate(),
    l = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
  return n + " " + l;
}
const xa = Bt("workout", {
    state: () => ({ workout: null }),
    getters: {
      setsCompleted(t) {
        if (t.workout) {
          let n = 0;
          return (
            t.workout.lifts.forEach(function (l) {
              l.sets.forEach(function (s) {
                s.actualReps > 0 && n++;
              });
            }),
            n
          );
        }
        return 0;
      },
      repsCompleted(t) {
        return 20;
      },
      totalWeight(t) {
        return 200;
      },
      totalSets(t) {
        if (t.workout) {
          let n = 0;
          return (
            t.workout.lifts.forEach(function (l) {
              n += l.sets.length;
            }),
            n
          );
        }
        return 0;
      },
      setsPctComplete() {
        return (this.setsCompleted / this.totalSets) * 100;
      },
    },
    actions: {
      setStartDttm() {
        this.workout.startDttm = Fe();
      },
      setEndDttm() {
        this.workout.endDttm = Fe();
      },
      saveWorkout() {
        console.log(this.workout);
      },
      getWorkout(t) {
        this.workout = {
          muscleGroupId: t,
          muscleGroupName: "Chest",
          startDttm: null,
          endDttm: null,
          lifts: [
            {
              name: "Barbell Bench",
              sets: [
                { rank: 1, targetReps: 5, actualReps: 0, weight: 25 },
                { rank: 2, targetReps: 5, actualReps: 0, weight: 25 },
                { rank: 3, targetReps: 5, actualReps: 0, weight: 25 },
                { rank: 4, targetReps: 5, actualReps: 0, weight: 25 },
              ],
            },
            {
              name: "Dumbell Bench",
              sets: [
                { rank: 1, targetReps: 8, actualReps: 0, weight: 25 },
                { rank: 2, targetReps: 8, actualReps: 0, weight: 25 },
                { rank: 3, targetReps: 8, actualReps: 0, weight: 25 },
              ],
            },
            {
              name: "Incline Bench",
              sets: [
                { rank: 1, targetReps: 12, actualReps: 0, weight: 25 },
                { rank: 2, targetReps: 12, actualReps: 0, weight: 25 },
              ],
            },
            {
              name: "Pushups",
              sets: [
                { rank: 1, targetReps: 15, actualReps: 0, weight: 25 },
                { rank: 2, targetReps: 15, actualReps: 0, weight: 25 },
              ],
            },
          ],
        };
      },
    },
  }),
  wa = Dt({
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
        const n = a(t[0], 2),
          l = a(t[1], 2),
          s = a(t[2], 2),
          e = a(Math.trunc(t[3] % 100), 2);
        return `${n}:${l}:${s}:${e}`;
        function a(o, u) {
          let d = o.toString();
          for (; d.length < u; ) (d = "0" + d), --u;
          return d;
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
        const n = t - this.startTime;
        (this.times[3] += n / 10),
          this.times[3] >= 100 &&
            ((this.times[3] -= 100), (this.times[2] += 1)),
          this.times[2] >= 60 && ((this.times[2] -= 60), (this.times[1] += 1)),
          this.times[1] >= 60 && ((this.times[1] -= 60), (this.times[0] += 1));
      },
    },
  }),
  _a = { class: "time" };
function Sa(t, n, l, s, e, a) {
  return I(), J("div", _a, W(t.time), 1);
}
var qa = Lt(wa, [["render", Sa]]);
const $a = { class: "row" },
  Pa = { class: "col-9 q-pr-md" },
  Ma = { class: "row" },
  Ta = { class: "row" },
  Ra = { class: "col-3 q-pr-md" },
  Ea = { class: "col-9" },
  Ba = { class: "row" },
  Da = { class: "col-3" },
  La = { class: "text-h4 text-secondary text-weight-thin text-center" },
  Aa = { class: "text-h6 text-secondary text-weight-thin text-center" },
  Va = { class: "text-h6 text-center" },
  Fa = _(
    "span",
    { class: "text-h6 text-weight-thin" },
    "Total Sets Completed - ",
    -1
  ),
  Na = { class: "text-bold text-h6 align-right" },
  Ia = _(
    "span",
    { class: "text-h6 text-weight-thin" },
    "Total Reps Completed - ",
    -1
  ),
  za = { class: "text-bold text-h6 align-right" },
  Qa = _("span", { class: "text-h6 text-weight-thin" }, "Total Weight - ", -1),
  Wa = { class: "text-bold text-h6 align-right" },
  Ka = _("span", { class: "q-ml-sm" }, "All Done?", -1),
  Ja = {
    __name: "WorkoutPage",
    setup(t) {
      Ut.register(Yt, Xt, jt, Gt, Ht), Nt();
      const n = It(),
        l = zt(),
        s = xa(),
        e = i(() => ({
          labels: ["Complete", "Incomplete"],
          datasets: [
            {
              backgroundColor: ["#41B883", "transparent"],
              borderColor: ["white", "transparent"],
              data: [s.setsPctComplete, 100 - s.setsPctComplete],
            },
          ],
        })),
        a = {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
        },
        o = R("one"),
        u = R(!1),
        d = R(null);
      function v() {
        const p = new Date();
        return p.getFullYear() + "-" + (p.getMonth() + 1) + "-" + p.getDate();
      }
      const g = v();
      At(() => {
        s.getWorkout(n.params.muscleGroupId),
          (o.value = s.workout.lifts[0].name);
      }),
        Vt(() => {
          d.value.start(),
            console.log(s.workout.startDttm),
            s.setStartDttm(),
            console.log(s.workout.startDttm);
        });
      function k() {
        d.value.stop(),
          s.setEndDttm(),
          console.log(s.workout.endDttm),
          s.saveWorkout(),
          l.push({ name: "home" });
      }
      return (p, f) =>
        L(s).workout
          ? (I(),
            fe(
              ea,
              { key: 0, padding: "" },
              {
                default: T(() => [
                  _("div", $a, [
                    _("div", Pa, [
                      _("div", Ma, [
                        w(
                          be,
                          { style: { width: "100%", height: "500px" } },
                          {
                            default: T(() => [
                              w(
                                yt,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    f[0] || (f[0] = (c) => (o.value = c)),
                                  class: "text-secondary",
                                  align: "left",
                                },
                                {
                                  default: T(() => [
                                    (I(!0),
                                    J(
                                      ge,
                                      null,
                                      he(
                                        L(s).workout.lifts,
                                        (c) => (
                                          I(),
                                          fe(
                                            ta,
                                            {
                                              key: c.name,
                                              label: c.name,
                                              name: c.name,
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
                              w(ne),
                              w(
                                ya,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    f[1] || (f[1] = (c) => (o.value = c)),
                                  animated: "",
                                },
                                {
                                  default: T(() => [
                                    (I(!0),
                                    J(
                                      ge,
                                      null,
                                      he(
                                        L(s).workout.lifts,
                                        (c) => (
                                          I(),
                                          fe(
                                            ka,
                                            { key: c.name, name: c.name },
                                            {
                                              default: T(() => [
                                                (I(!0),
                                                J(
                                                  ge,
                                                  null,
                                                  he(
                                                    c.sets,
                                                    (q) => (
                                                      I(),
                                                      J(
                                                        "div",
                                                        { key: q.rank },
                                                        [
                                                          _("div", Ta, [
                                                            _("div", Ra, [
                                                              w(
                                                                Ot,
                                                                {
                                                                  modelValue:
                                                                    q.weight,
                                                                  "onUpdate:modelValue":
                                                                    ($) =>
                                                                      (q.weight =
                                                                        $),
                                                                  modelModifiers:
                                                                    {
                                                                      number:
                                                                        !0,
                                                                    },
                                                                  type: "number",
                                                                  filled: "",
                                                                  style: {
                                                                    "max-width":
                                                                      "200px",
                                                                  },
                                                                },
                                                                {
                                                                  before: T(
                                                                    () => [
                                                                      De(
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
                                                            _("div", Ea, [
                                                              w(
                                                                da,
                                                                {
                                                                  modelValue:
                                                                    q.actualReps,
                                                                  "onUpdate:modelValue":
                                                                    ($) =>
                                                                      (q.actualReps =
                                                                        $),
                                                                  min: 0,
                                                                  max: q.targetReps,
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
                                                        ]
                                                      )
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
                      _("div", Ba, [
                        w(ke, {
                          class: "full-width q-mt-sm",
                          color: "primary",
                          label: "Finish Workout",
                          onClick: f[2] || (f[2] = (c) => (u.value = !0)),
                        }),
                      ]),
                    ]),
                    _("div", Da, [
                      w(
                        be,
                        {
                          class: "my-card",
                          style: { width: "100%", height: "500px" },
                        },
                        {
                          default: T(() => [
                            _(
                              "div",
                              La,
                              W(L(s).workout.muscleGroupName) + " Workout",
                              1
                            ),
                            _("div", Aa, W(L(g)), 1),
                            w(ne, { class: "q-my-sm" }),
                            w(
                              qa,
                              {
                                ref_key: "stopWatch",
                                ref: d,
                                class: "digits text-center text-h5",
                              },
                              null,
                              512
                            ),
                            w(ne, { class: "q-my-md" }),
                            _(
                              "div",
                              Va,
                              W(Math.round(L(s).setsPctComplete)) +
                                "% Complete",
                              1
                            ),
                            w(
                              L(Jt),
                              {
                                "chart-options": a,
                                "chart-data": L(e),
                                "chart-id": "chartId",
                                height: 175,
                              },
                              null,
                              8,
                              ["chart-data"]
                            ),
                            w(ne, { class: "q-my-md" }),
                            _("div", null, [
                              Fa,
                              _("span", Na, W(L(s).setsCompleted), 1),
                            ]),
                            _("div", null, [
                              Ia,
                              _("span", za, W(L(s).repsCompleted), 1),
                            ]),
                            _("div", null, [
                              Qa,
                              _("span", Wa, W(L(s).totalWeight), 1),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  w(
                    Kt,
                    {
                      modelValue: u.value,
                      "onUpdate:modelValue":
                        f[3] || (f[3] = (c) => (u.value = c)),
                      persistent: "",
                    },
                    {
                      default: T(() => [
                        w(be, null, {
                          default: T(() => [
                            w(
                              Be,
                              { class: "row items-center" },
                              { default: T(() => [Ka]), _: 1 }
                            ),
                            w(Be, null, {
                              default: T(() => [
                                De(" Summary of workout here "),
                              ]),
                              _: 1,
                            }),
                            w(Zt),
                            w(
                              Qt,
                              { align: "right" },
                              {
                                default: T(() => [
                                  Wt(
                                    w(
                                      ke,
                                      {
                                        flat: "",
                                        label: "Cancel",
                                        color: "primary",
                                      },
                                      null,
                                      512
                                    ),
                                    [[Ca]]
                                  ),
                                  w(ke, {
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
          : Ft("", !0);
    },
  };
export { Ja as default };
