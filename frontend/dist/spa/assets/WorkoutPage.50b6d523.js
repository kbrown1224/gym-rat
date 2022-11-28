import { u as gt, a as yt, b as kt, Q as Ct } from "./QTabs.29a02cae.js";
import {
  q as de,
  b6 as De,
  ay as D,
  z as Ne,
  bc as ze,
  av as W,
  bd as Y,
  au as Ve,
  aQ as ge,
  aG as G,
  aw as K,
  Y as ee,
  aj as We,
  r as B,
  c as i,
  e as xt,
  ai as Qe,
  aM as wt,
  aV as _t,
  aX as ye,
  h as T,
  as as Ue,
  g as ve,
  be as St,
  bf as qt,
  w as Oe,
  n as $t,
  T as Pt,
  bg as Tt,
  t as xe,
  bh as Mt,
  bi as Et,
  bj as Vt,
  bk as At,
  d as Bt,
  _ as Lt,
  m as R,
  a0 as U,
  a3 as I,
  al as Rt,
  S as A,
  j as se,
  k as V,
  M as Ft,
  bl as It,
  N as Dt,
  I as y,
  p as w,
  a1 as re,
  a2 as oe,
  P as le,
  U as ke,
  Q as Z,
  O as Ae,
  b2 as Nt,
  f as zt,
  aR as Wt,
  R as Be,
  a7 as ie,
  b3 as Le,
} from "./index.195637e2.js";
import { c as je, b as X } from "./format.075dd778.js";
import { Q as Qt } from "./QSpace.b92ced4c.js";
import { Q as Re } from "./QPage.ae2997fd.js";
import { Q as Ut, C as Ot } from "./ClosePopup.fc0b5eb2.js";
import {
  C as jt,
  p as Xt,
  a as Yt,
  b as Kt,
  A as Gt,
  c as Ht,
  D as Jt,
} from "./index.2bce8aae.js";
import "./QResizeObserver.581b6f70.js";
import "./rtl.b51694b1.js";
var Zt = de({
  name: "QTab",
  props: gt,
  emits: yt,
  setup(t, { slots: n, emit: l }) {
    const { renderTab: r } = kt(t, n, l);
    return () => r("div");
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
  ea = Object.keys(we);
we.all = !0;
function ue(t) {
  const n = {};
  for (const l of ea) t[l] === !0 && (n[l] = !0);
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
function ce(t, n) {
  return (
    n.event === void 0 &&
    t.target !== void 0 &&
    t.target.draggable !== !0 &&
    typeof n.handler == "function" &&
    t.target.nodeName.toUpperCase() !== "INPUT" &&
    (t.qClonedBy === void 0 || t.qClonedBy.indexOf(n.uid) === -1)
  );
}
function Ce(t, n, l) {
  const r = G(t);
  let e,
    a = r.left - n.event.x,
    o = r.top - n.event.y,
    u = Math.abs(a),
    h = Math.abs(o);
  const d = n.direction;
  d.horizontal === !0 && d.vertical !== !0
    ? (e = a < 0 ? "left" : "right")
    : d.horizontal !== !0 && d.vertical === !0
    ? (e = o < 0 ? "up" : "down")
    : d.up === !0 && o < 0
    ? ((e = "up"),
      u > h &&
        (d.left === !0 && a < 0
          ? (e = "left")
          : d.right === !0 && a > 0 && (e = "right")))
    : d.down === !0 && o > 0
    ? ((e = "down"),
      u > h &&
        (d.left === !0 && a < 0
          ? (e = "left")
          : d.right === !0 && a > 0 && (e = "right")))
    : d.left === !0 && a < 0
    ? ((e = "left"),
      u < h &&
        (d.up === !0 && o < 0
          ? (e = "up")
          : d.down === !0 && o > 0 && (e = "down")))
    : d.right === !0 &&
      a > 0 &&
      ((e = "right"),
      u < h &&
        (d.up === !0 && o < 0
          ? (e = "up")
          : d.down === !0 && o > 0 && (e = "down")));
  let f = !1;
  if (e === void 0 && l === !1) {
    if (n.event.isFirst === !0 || n.event.lastDir === void 0) return {};
    (e = n.event.lastDir),
      (f = !0),
      e === "left" || e === "right"
        ? ((r.left -= a), (u = 0), (a = 0))
        : ((r.top -= o), (h = 0), (o = 0));
  }
  return {
    synthetic: f,
    payload: {
      evt: t,
      touch: n.event.mouse !== !0,
      mouse: n.event.mouse === !0,
      position: r,
      direction: e,
      isFirst: n.event.isFirst,
      isFinal: l === !0,
      duration: Date.now() - n.event.time,
      distance: { x: u, y: h },
      offset: { x: a, y: o },
      delta: { x: r.left - n.event.lastX, y: r.top - n.event.lastY },
    },
  };
}
let ta = 0;
var aa = De({
  name: "touch-pan",
  beforeMount(t, { value: n, modifiers: l }) {
    if (l.mouse !== !0 && D.has.touch !== !0) return;
    function r(a, o) {
      l.mouse === !0 && o === !0
        ? ee(a)
        : (l.stop === !0 && ge(a), l.prevent === !0 && Ve(a));
    }
    const e = {
      uid: "qvtp_" + ta++,
      handler: n,
      modifiers: l,
      direction: ue(l),
      noop: Ne,
      mouseStart(a) {
        ce(a, e) &&
          ze(a) &&
          (W(e, "temp", [
            [document, "mousemove", "move", "notPassiveCapture"],
            [document, "mouseup", "end", "passiveCapture"],
          ]),
          e.start(a, !0));
      },
      touchStart(a) {
        if (ce(a, e)) {
          const o = a.target;
          W(e, "temp", [
            [o, "touchmove", "move", "notPassiveCapture"],
            [o, "touchcancel", "end", "passiveCapture"],
            [o, "touchend", "end", "passiveCapture"],
          ]),
            e.start(a);
        }
      },
      start(a, o) {
        if (
          (D.is.firefox === !0 && Y(t, !0),
          (e.lastEvt = a),
          o === !0 || l.stop === !0)
        ) {
          if (
            e.direction.all !== !0 &&
            (o !== !0 ||
              (e.modifiers.mouseAllDir !== !0 &&
                e.modifiers.mousealldir !== !0))
          ) {
            const d =
              a.type.indexOf("mouse") > -1
                ? new MouseEvent(a.type, a)
                : new TouchEvent(a.type, a);
            a.defaultPrevented === !0 && Ve(d),
              a.cancelBubble === !0 && ge(d),
              Object.assign(d, {
                qKeyEvent: a.qKeyEvent,
                qClickOutside: a.qClickOutside,
                qAnchorHandled: a.qAnchorHandled,
                qClonedBy:
                  a.qClonedBy === void 0 ? [e.uid] : a.qClonedBy.concat(e.uid),
              }),
              (e.initialEvent = { target: a.target, event: d });
          }
          ge(a);
        }
        const { left: u, top: h } = G(a);
        e.event = {
          x: u,
          y: h,
          time: Date.now(),
          mouse: o === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: u,
          lastY: h,
        };
      },
      move(a) {
        if (e.event === void 0) return;
        const o = G(a),
          u = o.left - e.event.x,
          h = o.top - e.event.y;
        if (u === 0 && h === 0) return;
        e.lastEvt = a;
        const d = e.event.mouse === !0,
          f = () => {
            r(a, d);
            let b;
            l.preserveCursor !== !0 &&
              l.preservecursor !== !0 &&
              ((b = document.documentElement.style.cursor || ""),
              (document.documentElement.style.cursor = "grabbing")),
              d === !0 &&
                document.body.classList.add("no-pointer-events--children"),
              document.body.classList.add("non-selectable"),
              je(),
              (e.styleCleanup = (g) => {
                if (
                  ((e.styleCleanup = void 0),
                  b !== void 0 && (document.documentElement.style.cursor = b),
                  document.body.classList.remove("non-selectable"),
                  d === !0)
                ) {
                  const S = () => {
                    document.body.classList.remove(
                      "no-pointer-events--children"
                    );
                  };
                  g !== void 0
                    ? setTimeout(() => {
                        S(), g();
                      }, 50)
                    : S();
                } else g !== void 0 && g();
              });
          };
        if (e.event.detected === !0) {
          e.event.isFirst !== !0 && r(a, e.event.mouse);
          const { payload: b, synthetic: g } = Ce(a, e, !1);
          b !== void 0 &&
            (e.handler(b) === !1
              ? e.end(a)
              : (e.styleCleanup === void 0 && e.event.isFirst === !0 && f(),
                (e.event.lastX = b.position.left),
                (e.event.lastY = b.position.top),
                (e.event.lastDir = g === !0 ? void 0 : b.direction),
                (e.event.isFirst = !1)));
          return;
        }
        if (
          e.direction.all === !0 ||
          (d === !0 &&
            (e.modifiers.mouseAllDir === !0 || e.modifiers.mousealldir === !0))
        ) {
          f(), (e.event.detected = !0), e.move(a);
          return;
        }
        const _ = Math.abs(u),
          v = Math.abs(h);
        _ !== v &&
          ((e.direction.horizontal === !0 && _ > v) ||
          (e.direction.vertical === !0 && _ < v) ||
          (e.direction.up === !0 && _ < v && h < 0) ||
          (e.direction.down === !0 && _ < v && h > 0) ||
          (e.direction.left === !0 && _ > v && u < 0) ||
          (e.direction.right === !0 && _ > v && u > 0)
            ? ((e.event.detected = !0), e.move(a))
            : e.end(a, !0));
      },
      end(a, o) {
        if (e.event !== void 0) {
          if ((K(e, "temp"), D.is.firefox === !0 && Y(t, !1), o === !0))
            e.styleCleanup !== void 0 && e.styleCleanup(),
              e.event.detected !== !0 &&
                e.initialEvent !== void 0 &&
                e.initialEvent.target.dispatchEvent(e.initialEvent.event);
          else if (e.event.detected === !0) {
            e.event.isFirst === !0 &&
              e.handler(Ce(a === void 0 ? e.lastEvt : a, e).payload);
            const { payload: u } = Ce(a === void 0 ? e.lastEvt : a, e, !0),
              h = () => {
                e.handler(u);
              };
            e.styleCleanup !== void 0 ? e.styleCleanup(h) : h();
          }
          (e.event = void 0), (e.initialEvent = void 0), (e.lastEvt = void 0);
        }
      },
    };
    if (((t.__qtouchpan = e), l.mouse === !0)) {
      const a = l.mouseCapture === !0 || l.mousecapture === !0 ? "Capture" : "";
      W(e, "main", [[t, "mousedown", "mouseStart", `passive${a}`]]);
    }
    D.has.touch === !0 &&
      W(e, "main", [
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
      (l.direction = ue(n.modifiers)));
  },
  beforeUnmount(t) {
    const n = t.__qtouchpan;
    n !== void 0 &&
      (n.event !== void 0 && n.end(),
      K(n, "main"),
      K(n, "temp"),
      D.is.firefox === !0 && Y(t, !1),
      n.styleCleanup !== void 0 && n.styleCleanup(),
      delete t.__qtouchpan);
  },
});
const Fe = "q-slider__marker-labels",
  na = (t) => ({ value: t }),
  sa = ({ marker: t }) =>
    T("div", { key: t.value, style: t.style, class: t.classes }, t.label),
  Xe = [34, 37, 40, 33, 39, 38],
  ra = {
    ...Qe,
    ...wt,
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
  oa = ["pan", "update:modelValue", "change"];
function la({
  updateValue: t,
  updatePosition: n,
  getDragging: l,
  formAttrs: r,
}) {
  const {
      props: e,
      emit: a,
      slots: o,
      proxy: { $q: u },
    } = ve(),
    h = We(e, u),
    d = St(r),
    f = B(!1),
    _ = B(!1),
    v = B(!1),
    b = B(!1),
    g = i(() => (e.vertical === !0 ? "--v" : "--h")),
    S = i(() => "-" + (e.switchLabelSide === !0 ? "switched" : "standard")),
    k = i(() =>
      e.vertical === !0 ? e.reverse === !0 : e.reverse !== (u.lang.rtl === !0)
    ),
    c = i(() =>
      isNaN(e.innerMin) === !0 || e.innerMin < e.min ? e.min : e.innerMin
    ),
    P = i(() =>
      isNaN(e.innerMax) === !0 || e.innerMax > e.max ? e.max : e.innerMax
    ),
    C = i(() => e.disable !== !0 && e.readonly !== !0 && c.value < P.value),
    E = i(() => (String(e.step).trim().split(".")[1] || "").length),
    N = i(() => (e.step === 0 ? 1 : e.step)),
    te = i(() => (C.value === !0 ? e.tabindex || 0 : -1)),
    F = i(() => e.max - e.min),
    H = i(() => P.value - c.value),
    Q = i(() => me(c.value)),
    J = i(() => me(P.value)),
    O = i(() =>
      e.vertical === !0
        ? k.value === !0
          ? "bottom"
          : "top"
        : k.value === !0
        ? "right"
        : "left"
    ),
    ae = i(() => (e.vertical === !0 ? "height" : "width")),
    m = i(() => (e.vertical === !0 ? "width" : "height")),
    q = i(() => (e.vertical === !0 ? "vertical" : "horizontal")),
    L = i(() => {
      const s = {
        role: "slider",
        "aria-valuemin": c.value,
        "aria-valuemax": P.value,
        "aria-orientation": q.value,
        "data-step": e.step,
      };
      return (
        e.disable === !0
          ? (s["aria-disabled"] = "true")
          : e.readonly === !0 && (s["aria-readonly"] = "true"),
        s
      );
    }),
    j = i(
      () =>
        `q-slider q-slider${g.value} q-slider--${
          f.value === !0 ? "" : "in"
        }active inline no-wrap ` +
        (e.vertical === !0 ? "row" : "column") +
        (e.disable === !0
          ? " disabled"
          : " q-slider--enabled" +
            (C.value === !0 ? " q-slider--editable" : "")) +
        (v.value === "both" ? " q-slider--focus" : "") +
        (e.label || e.labelAlways === !0 ? " q-slider--label" : "") +
        (e.labelAlways === !0 ? " q-slider--label-always" : "") +
        (h.value === !0 ? " q-slider--dark" : "") +
        (e.dense === !0 ? " q-slider--dense q-slider--dense" + g.value : "")
    );
  function ne(s) {
    const p = "q-slider__" + s;
    return `${p} ${p}${g.value} ${p}${g.value}${S.value}`;
  }
  function _e(s) {
    const p = "q-slider__" + s;
    return `${p} ${p}${g.value}`;
  }
  const Ye = i(() => {
      const s = e.selectionColor || e.color;
      return (
        "q-slider__selection absolute" + (s !== void 0 ? ` text-${s}` : "")
      );
    }),
    Ke = i(() => _e("markers") + " absolute overflow-hidden"),
    Ge = i(() => _e("track-container")),
    He = i(() => ne("pin")),
    Je = i(() => ne("label")),
    Ze = i(() => ne("text-container")),
    et = i(
      () =>
        ne("marker-labels-container") +
        (e.markerLabelsClass !== void 0 ? ` ${e.markerLabelsClass}` : "")
    ),
    tt = i(
      () =>
        "q-slider__track relative-position no-outline" +
        (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ),
    at = i(() => {
      const s = { [m.value]: e.trackSize };
      return (
        e.trackImg !== void 0 &&
          (s.backgroundImage = `url(${e.trackImg}) !important`),
        s
      );
    }),
    nt = i(
      () =>
        "q-slider__inner absolute" +
        (e.innerTrackColor !== void 0 ? ` bg-${e.innerTrackColor}` : "")
    ),
    Se = i(() => {
      const s = {
        [O.value]: `${100 * Q.value}%`,
        [ae.value]: `${100 * (J.value - Q.value)}%`,
      };
      return (
        e.innerTrackImg !== void 0 &&
          (s.backgroundImage = `url(${e.innerTrackImg}) !important`),
        s
      );
    });
  function st(s) {
    const { min: p, max: x, step: $ } = e;
    let M = p + s * (x - p);
    if ($ > 0) {
      const z = (M - p) % $;
      M += (Math.abs(z) >= $ / 2 ? (z < 0 ? -1 : 1) * $ : 0) - z;
    }
    return (
      E.value > 0 && (M = parseFloat(M.toFixed(E.value))),
      X(M, c.value, P.value)
    );
  }
  function me(s) {
    return F.value === 0 ? 0 : (s - e.min) / F.value;
  }
  function rt(s, p) {
    const x = G(s),
      $ =
        e.vertical === !0
          ? X((x.top - p.top) / p.height, 0, 1)
          : X((x.left - p.left) / p.width, 0, 1);
    return X(k.value === !0 ? 1 - $ : $, Q.value, J.value);
  }
  const qe = i(() => (_t(e.markers) === !0 ? e.markers : N.value)),
    $e = i(() => {
      const s = [],
        p = qe.value,
        x = e.max;
      let $ = e.min;
      do s.push($), ($ += p);
      while ($ < x);
      return s.push(x), s;
    }),
    Pe = i(() => {
      const s = ` ${Fe}${g.value}-`;
      return (
        Fe +
        `${s}${e.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${s}${
          k.value === !0 ? "rtl" : "ltr"
        }`
      );
    }),
    pe = i(() =>
      e.markerLabels === !1
        ? null
        : lt(e.markerLabels).map((s, p) => ({
            index: p,
            value: s.value,
            label: s.label || s.value,
            classes: Pe.value + (s.classes !== void 0 ? " " + s.classes : ""),
            style: { ...Me(s.value), ...(s.style || {}) },
          }))
    ),
    Te = i(() => ({
      markerList: pe.value,
      markerMap: it.value,
      classes: Pe.value,
      getStyle: Me,
    })),
    ot = i(() => {
      if (H.value !== 0) {
        const s = (100 * qe.value) / H.value;
        return {
          ...Se.value,
          backgroundSize: e.vertical === !0 ? `2px ${s}%` : `${s}% 2px`,
        };
      }
      return null;
    });
  function lt(s) {
    if (s === !1) return null;
    if (s === !0) return $e.value.map(na);
    if (typeof s == "function")
      return $e.value.map((x) => {
        const $ = s(x);
        return ye($) === !0 ? { ...$, value: x } : { value: x, label: $ };
      });
    const p = ({ value: x }) => x >= e.min && x <= e.max;
    return Array.isArray(s) === !0
      ? s.map((x) => (ye(x) === !0 ? x : { value: x })).filter(p)
      : Object.keys(s)
          .map((x) => {
            const $ = s[x],
              M = Number(x);
            return ye($) === !0 ? { ...$, value: M } : { value: M, label: $ };
          })
          .filter(p);
  }
  function Me(s) {
    return { [O.value]: `${(100 * (s - e.min)) / F.value}%` };
  }
  const it = i(() => {
    if (e.markerLabels === !1) return null;
    const s = {};
    return (
      pe.value.forEach((p) => {
        s[p.value] = p;
      }),
      s
    );
  });
  function ut() {
    if (o["marker-label-group"] !== void 0)
      return o["marker-label-group"](Te.value);
    const s = o["marker-label"] || sa;
    return pe.value.map((p) => s({ marker: p, ...Te.value }));
  }
  const ct = i(() => [
    [
      aa,
      dt,
      void 0,
      { [q.value]: !0, prevent: !0, stop: !0, mouse: !0, mouseAllDir: !0 },
    ],
  ]);
  function dt(s) {
    s.isFinal === !0
      ? (b.value !== void 0 &&
          (n(s.evt),
          s.touch === !0 && t(!0),
          (b.value = void 0),
          a("pan", "end")),
        (f.value = !1),
        (v.value = !1))
      : s.isFirst === !0
      ? ((b.value = l(s.evt)), n(s.evt), t(), (f.value = !0), a("pan", "start"))
      : (n(s.evt), t());
  }
  function Ee() {
    v.value = !1;
  }
  function vt(s) {
    n(s, l(s)),
      t(),
      (_.value = !0),
      (f.value = !0),
      document.addEventListener("mouseup", fe, !0);
  }
  function fe() {
    (_.value = !1),
      (f.value = !1),
      t(!0),
      Ee(),
      document.removeEventListener("mouseup", fe, !0);
  }
  function mt(s) {
    n(s, l(s)), t(!0);
  }
  function pt(s) {
    Xe.includes(s.keyCode) && t(!0);
  }
  function ft(s) {
    if (e.vertical === !0) return null;
    const p = u.lang.rtl !== e.reverse ? 1 - s : s;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${e.thumbSize} / 2 + ${
        50 - 100 * p
      }%))`,
    };
  }
  function ht(s) {
    const p = i(() =>
        _.value === !1 && (v.value === s.focusValue || v.value === "both")
          ? " q-slider--focus"
          : ""
      ),
      x = i(
        () =>
          `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${
            g.value
          }-${k.value === !0 ? "rtl" : "ltr"} absolute non-selectable` +
          p.value +
          (s.thumbColor.value !== void 0 ? ` text-${s.thumbColor.value}` : "")
      ),
      $ = i(() => ({
        width: e.thumbSize,
        height: e.thumbSize,
        [O.value]: `${100 * s.ratio.value}%`,
        zIndex: v.value === s.focusValue ? 2 : void 0,
      })),
      M = i(() =>
        s.labelColor.value !== void 0 ? ` text-${s.labelColor.value}` : ""
      ),
      z = i(() => ft(s.ratio.value)),
      he = i(
        () =>
          "q-slider__text" +
          (s.labelTextColor.value !== void 0
            ? ` text-${s.labelTextColor.value}`
            : "")
      );
    return () => {
      const be = [
        T(
          "svg",
          {
            class: "q-slider__thumb-shape absolute-full",
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
          },
          [T("path", { d: e.thumbPath })]
        ),
        T("div", { class: "q-slider__focus-ring fit" }),
      ];
      return (
        (e.label === !0 || e.labelAlways === !0) &&
          (be.push(
            T(
              "div",
              { class: He.value + " absolute fit no-pointer-events" + M.value },
              [
                T(
                  "div",
                  { class: Je.value, style: { minWidth: e.thumbSize } },
                  [
                    T("div", { class: Ze.value, style: z.value }, [
                      T("span", { class: he.value }, s.label.value),
                    ]),
                  ]
                ),
              ]
            )
          ),
          e.name !== void 0 && e.disable !== !0 && d(be, "push")),
        T("div", { class: x.value, style: $.value, ...s.getNodeData() }, be)
      );
    };
  }
  function bt(s, p, x, $) {
    const M = [];
    e.innerTrackColor !== "transparent" &&
      M.push(T("div", { key: "inner", class: nt.value, style: Se.value })),
      e.selectionColor !== "transparent" &&
        M.push(T("div", { key: "selection", class: Ye.value, style: s.value })),
      e.markers !== !1 &&
        M.push(T("div", { key: "marker", class: Ke.value, style: ot.value })),
      $(M);
    const z = [
      Ue(
        "div",
        { key: "trackC", class: Ge.value, tabindex: p.value, ...x.value },
        [T("div", { class: tt.value, style: at.value }, M)],
        "slide",
        C.value,
        () => ct.value
      ),
    ];
    if (e.markerLabels !== !1) {
      const he = e.switchMarkerLabelsSide === !0 ? "unshift" : "push";
      z[he](T("div", { key: "markerL", class: et.value }, ut()));
    }
    return z;
  }
  return (
    xt(() => {
      document.removeEventListener("mouseup", fe, !0);
    }),
    {
      state: {
        active: f,
        focus: v,
        preventFocus: _,
        dragging: b,
        editable: C,
        classes: j,
        tabindex: te,
        attributes: L,
        step: N,
        decimals: E,
        trackLen: F,
        innerMin: c,
        innerMinRatio: Q,
        innerMax: P,
        innerMaxRatio: J,
        positionProp: O,
        sizeProp: ae,
        isReversed: k,
      },
      methods: {
        onActivate: vt,
        onMobileClick: mt,
        onBlur: Ee,
        onKeyup: pt,
        getContent: bt,
        getThumbRenderFn: ht,
        convertRatioToModel: st,
        convertModelToRatio: me,
        getDraggingRatio: rt,
      },
    }
  );
}
const ia = () => ({});
var ua = de({
  name: "QSlider",
  props: {
    ...ra,
    modelValue: {
      required: !0,
      default: null,
      validator: (t) => typeof t == "number" || t === null,
    },
    labelValue: [String, Number],
  },
  emits: oa,
  setup(t, { emit: n }) {
    const {
        proxy: { $q: l },
      } = ve(),
      { state: r, methods: e } = la({
        updateValue: g,
        updatePosition: k,
        getDragging: S,
        formAttrs: qt(t),
      }),
      a = B(null),
      o = B(0),
      u = B(0);
    function h() {
      u.value =
        t.modelValue === null
          ? r.innerMin.value
          : X(t.modelValue, r.innerMin.value, r.innerMax.value);
    }
    Oe(() => `${t.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, h), h();
    const d = i(() => e.convertModelToRatio(u.value)),
      f = i(() => (r.active.value === !0 ? o.value : d.value)),
      _ = i(() => {
        const C = {
          [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`,
          [r.sizeProp.value]: `${100 * (f.value - r.innerMinRatio.value)}%`,
        };
        return (
          t.selectionImg !== void 0 &&
            (C.backgroundImage = `url(${t.selectionImg}) !important`),
          C
        );
      }),
      v = e.getThumbRenderFn({
        focusValue: !0,
        getNodeData: ia,
        ratio: f,
        label: i(() => (t.labelValue !== void 0 ? t.labelValue : u.value)),
        thumbColor: i(() => t.thumbColor || t.color),
        labelColor: i(() => t.labelColor),
        labelTextColor: i(() => t.labelTextColor),
      }),
      b = i(() =>
        r.editable.value !== !0
          ? {}
          : l.platform.is.mobile === !0
          ? { onClick: e.onMobileClick }
          : {
              onMousedown: e.onActivate,
              onFocus: c,
              onBlur: e.onBlur,
              onKeydown: P,
              onKeyup: e.onKeyup,
            }
      );
    function g(C) {
      u.value !== t.modelValue && n("update:modelValue", u.value),
        C === !0 && n("change", u.value);
    }
    function S() {
      return a.value.getBoundingClientRect();
    }
    function k(C, E = r.dragging.value) {
      const N = e.getDraggingRatio(C, E);
      (u.value = e.convertRatioToModel(N)),
        (o.value =
          t.snap !== !0 || t.step === 0 ? N : e.convertModelToRatio(u.value));
    }
    function c() {
      r.focus.value = !0;
    }
    function P(C) {
      if (!Xe.includes(C.keyCode)) return;
      ee(C);
      const E = ([34, 33].includes(C.keyCode) ? 10 : 1) * r.step.value,
        N =
          ([34, 37, 40].includes(C.keyCode) ? -1 : 1) *
          (r.isReversed.value === !0 ? -1 : 1) *
          (t.vertical === !0 ? -1 : 1) *
          E;
      (u.value = X(
        parseFloat((u.value + N).toFixed(r.decimals.value)),
        r.innerMin.value,
        r.innerMax.value
      )),
        g();
    }
    return () => {
      const C = e.getContent(_, r.tabindex, b, (E) => {
        E.push(v());
      });
      return T(
        "div",
        {
          ref: a,
          class:
            r.classes.value +
            (t.modelValue === null ? " q-slider--no-value" : ""),
          ...r.attributes.value,
          "aria-valuenow": t.modelValue,
        },
        C
      );
    };
  },
});
function ca(t) {
  const n = [0.06, 6, 50];
  return (
    typeof t == "string" &&
      t.length &&
      t.split(":").forEach((l, r) => {
        const e = parseFloat(l);
        e && (n[r] = e);
      }),
    n
  );
}
var da = De({
  name: "touch-swipe",
  beforeMount(t, { value: n, arg: l, modifiers: r }) {
    if (r.mouse !== !0 && D.has.touch !== !0) return;
    const e = r.mouseCapture === !0 ? "Capture" : "",
      a = {
        handler: n,
        sensitivity: ca(l),
        direction: ue(r),
        noop: Ne,
        mouseStart(o) {
          ce(o, a) &&
            ze(o) &&
            (W(a, "temp", [
              [document, "mousemove", "move", `notPassive${e}`],
              [document, "mouseup", "end", "notPassiveCapture"],
            ]),
            a.start(o, !0));
        },
        touchStart(o) {
          if (ce(o, a)) {
            const u = o.target;
            W(a, "temp", [
              [u, "touchmove", "move", "notPassiveCapture"],
              [u, "touchcancel", "end", "notPassiveCapture"],
              [u, "touchend", "end", "notPassiveCapture"],
            ]),
              a.start(o);
          }
        },
        start(o, u) {
          D.is.firefox === !0 && Y(t, !0);
          const h = G(o);
          a.event = {
            x: h.left,
            y: h.top,
            time: Date.now(),
            mouse: u === !0,
            dir: !1,
          };
        },
        move(o) {
          if (a.event === void 0) return;
          if (a.event.dir !== !1) {
            ee(o);
            return;
          }
          const u = Date.now() - a.event.time;
          if (u === 0) return;
          const h = G(o),
            d = h.left - a.event.x,
            f = Math.abs(d),
            _ = h.top - a.event.y,
            v = Math.abs(_);
          if (a.event.mouse !== !0) {
            if (f < a.sensitivity[1] && v < a.sensitivity[1]) {
              a.end(o);
              return;
            }
          } else if (f < a.sensitivity[2] && v < a.sensitivity[2]) return;
          const b = f / u,
            g = v / u;
          a.direction.vertical === !0 &&
            f < v &&
            f < 100 &&
            g > a.sensitivity[0] &&
            (a.event.dir = _ < 0 ? "up" : "down"),
            a.direction.horizontal === !0 &&
              f > v &&
              v < 100 &&
              b > a.sensitivity[0] &&
              (a.event.dir = d < 0 ? "left" : "right"),
            a.direction.up === !0 &&
              f < v &&
              _ < 0 &&
              f < 100 &&
              g > a.sensitivity[0] &&
              (a.event.dir = "up"),
            a.direction.down === !0 &&
              f < v &&
              _ > 0 &&
              f < 100 &&
              g > a.sensitivity[0] &&
              (a.event.dir = "down"),
            a.direction.left === !0 &&
              f > v &&
              d < 0 &&
              v < 100 &&
              b > a.sensitivity[0] &&
              (a.event.dir = "left"),
            a.direction.right === !0 &&
              f > v &&
              d > 0 &&
              v < 100 &&
              b > a.sensitivity[0] &&
              (a.event.dir = "right"),
            a.event.dir !== !1
              ? (ee(o),
                a.event.mouse === !0 &&
                  (document.body.classList.add("no-pointer-events--children"),
                  document.body.classList.add("non-selectable"),
                  je(),
                  (a.styleCleanup = (S) => {
                    (a.styleCleanup = void 0),
                      document.body.classList.remove("non-selectable");
                    const k = () => {
                      document.body.classList.remove(
                        "no-pointer-events--children"
                      );
                    };
                    S === !0 ? setTimeout(k, 50) : k();
                  })),
                a.handler({
                  evt: o,
                  touch: a.event.mouse !== !0,
                  mouse: a.event.mouse,
                  direction: a.event.dir,
                  duration: u,
                  distance: { x: f, y: v },
                }))
              : a.end(o);
        },
        end(o) {
          a.event !== void 0 &&
            (K(a, "temp"),
            D.is.firefox === !0 && Y(t, !1),
            a.styleCleanup !== void 0 && a.styleCleanup(!0),
            o !== void 0 && a.event.dir !== !1 && ee(o),
            (a.event = void 0));
        },
      };
    if (((t.__qtouchswipe = a), r.mouse === !0)) {
      const o = r.mouseCapture === !0 || r.mousecapture === !0 ? "Capture" : "";
      W(a, "main", [[t, "mousedown", "mouseStart", `passive${o}`]]);
    }
    D.has.touch === !0 &&
      W(a, "main", [
        [
          t,
          "touchstart",
          "touchStart",
          `passive${r.capture === !0 ? "Capture" : ""}`,
        ],
        [t, "touchmove", "noop", "notPassiveCapture"],
      ]);
  },
  updated(t, n) {
    const l = t.__qtouchswipe;
    l !== void 0 &&
      (n.oldValue !== n.value &&
        (typeof n.value != "function" && l.end(), (l.handler = n.value)),
      (l.direction = ue(n.modifiers)));
  },
  beforeUnmount(t) {
    const n = t.__qtouchswipe;
    n !== void 0 &&
      (K(n, "main"),
      K(n, "temp"),
      D.is.firefox === !0 && Y(t, !1),
      n.styleCleanup !== void 0 && n.styleCleanup(),
      delete t.__qtouchswipe);
  },
});
function va() {
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
const ma = { name: { required: !0 }, disable: Boolean },
  Ie = {
    setup(t, { slots: n }) {
      return () =>
        T("div", { class: "q-panel scroll", role: "tabpanel" }, xe(n.default));
    },
  },
  pa = {
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
  fa = ["update:modelValue", "before-transition", "transition"];
function ha() {
  const { props: t, emit: n, proxy: l } = ve(),
    { getCacheWithFn: r } = va();
  let e, a;
  const o = B(null),
    u = B(null);
  function h(m) {
    const q = t.vertical === !0 ? "up" : "left";
    F((l.$q.lang.rtl === !0 ? -1 : 1) * (m.direction === q ? 1 : -1));
  }
  const d = i(() => [
      [
        da,
        h,
        void 0,
        { horizontal: t.vertical !== !0, vertical: t.vertical, mouse: !0 },
      ],
    ]),
    f = i(
      () => t.transitionPrev || `slide-${t.vertical === !0 ? "down" : "right"}`
    ),
    _ = i(
      () => t.transitionNext || `slide-${t.vertical === !0 ? "up" : "left"}`
    ),
    v = i(() => `--q-transition-duration: ${t.transitionDuration}ms`),
    b = i(() =>
      typeof t.modelValue == "string" || typeof t.modelValue == "number"
        ? t.modelValue
        : String(t.modelValue)
    ),
    g = i(() => ({
      include: t.keepAliveInclude,
      exclude: t.keepAliveExclude,
      max: t.keepAliveMax,
    })),
    S = i(() => t.keepAliveInclude !== void 0 || t.keepAliveExclude !== void 0);
  Oe(
    () => t.modelValue,
    (m, q) => {
      const L = C(m) === !0 ? E(m) : -1;
      a !== !0 && te(L === -1 ? 0 : L < E(q) ? -1 : 1),
        o.value !== L &&
          ((o.value = L),
          n("before-transition", m, q),
          $t(() => {
            n("transition", m, q);
          }));
    }
  );
  function k() {
    F(1);
  }
  function c() {
    F(-1);
  }
  function P(m) {
    n("update:modelValue", m);
  }
  function C(m) {
    return m != null && m !== "";
  }
  function E(m) {
    return e.findIndex(
      (q) =>
        q.props.name === m && q.props.disable !== "" && q.props.disable !== !0
    );
  }
  function N() {
    return e.filter((m) => m.props.disable !== "" && m.props.disable !== !0);
  }
  function te(m) {
    const q =
      m !== 0 && t.animated === !0 && o.value !== -1
        ? "q-transition--" + (m === -1 ? f.value : _.value)
        : null;
    u.value !== q && (u.value = q);
  }
  function F(m, q = o.value) {
    let L = q + m;
    for (; L > -1 && L < e.length; ) {
      const j = e[L];
      if (j !== void 0 && j.props.disable !== "" && j.props.disable !== !0) {
        te(m),
          (a = !0),
          n("update:modelValue", j.props.name),
          setTimeout(() => {
            a = !1;
          });
        return;
      }
      L += m;
    }
    t.infinite === !0 &&
      e.length > 0 &&
      q !== -1 &&
      q !== e.length &&
      F(m, m === -1 ? e.length : -1);
  }
  function H() {
    const m = E(t.modelValue);
    return o.value !== m && (o.value = m), !0;
  }
  function Q() {
    const m = C(t.modelValue) === !0 && H() && e[o.value];
    return t.keepAlive === !0
      ? [
          T(Mt, g.value, [
            T(
              S.value === !0
                ? r(b.value, () => ({ ...Ie, name: b.value }))
                : Ie,
              { key: b.value, style: v.value },
              () => m
            ),
          ]),
        ]
      : [
          T(
            "div",
            {
              class: "q-panel scroll",
              style: v.value,
              key: b.value,
              role: "tabpanel",
            },
            [m]
          ),
        ];
  }
  function J() {
    if (e.length !== 0)
      return t.animated === !0 ? [T(Pt, { name: u.value }, Q)] : Q();
  }
  function O(m) {
    return (
      (e = Tt(xe(m.default, [])).filter(
        (q) =>
          q.props !== null && q.props.slot === void 0 && C(q.props.name) === !0
      )),
      e.length
    );
  }
  function ae() {
    return e;
  }
  return (
    Object.assign(l, { next: k, previous: c, goTo: P }),
    {
      panelIndex: o,
      panelDirectives: d,
      updatePanelsList: O,
      updatePanelIndex: H,
      getPanelContent: J,
      getEnabledPanels: N,
      getPanels: ae,
      isValidPanelName: C,
      keepAliveProps: g,
      needsUniqueKeepAliveWrapper: S,
      goToPanelByOffset: F,
      goToPanel: P,
      nextPanel: k,
      previousPanel: c,
    }
  );
}
var ba = de({
    name: "QTabPanel",
    props: ma,
    setup(t, { slots: n }) {
      return () =>
        T("div", { class: "q-tab-panel", role: "tabpanel" }, xe(n.default));
    },
  }),
  ga = de({
    name: "QTabPanels",
    props: { ...pa, ...Qe },
    emits: fa,
    setup(t, { slots: n }) {
      const l = ve(),
        r = We(t, l.proxy.$q),
        { updatePanelsList: e, getPanelContent: a, panelDirectives: o } = ha(),
        u = i(
          () =>
            "q-tab-panels q-panel-parent" +
            (r.value === !0 ? " q-tab-panels--dark q-dark" : "")
        );
      return () => (
        e(n),
        Ue("div", { class: u.value }, a(), "pan", t.swipeable, () => o.value)
      );
    },
  });
const ya = Et("workout", {
    state: () => ({ workout: null, lastWorkouts: null, pastWorkouts: null }),
    getters: {
      setsCompleted(t) {
        if (t.workout) {
          let n = 0;
          return (
            t.workout.lifts.forEach(function (l) {
              l.sets.forEach(function (r) {
                r.repetitions > 0 && n++;
              });
            }),
            n
          );
        } else return 0;
      },
      repsCompleted(t) {
        if (t.workout) {
          let n = 0;
          return (
            t.workout.lifts.forEach(function (l) {
              l.sets.forEach(function (r) {
                n = n + r.repetitions;
              });
            }),
            n
          );
        } else return 0;
      },
      totalWeight(t) {
        if (t.workout) {
          let n = 0;
          return (
            t.workout.lifts.forEach(function (l) {
              l.sets.forEach(function (r) {
                n = n + r.repetitions * r.weight;
              });
            }),
            n
          );
        } else return 0;
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
      async saveWorkout() {
        await Vt(this.workout).then((t) => {
          t.status != 200 && console.log(t.data.message);
        });
      },
      async getWorkout(t) {
        this.workout = await At(t);
      },
    },
  }),
  ka = Bt({
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
        const n = e(t[0], 2),
          l = e(t[1], 2),
          r = e(t[2], 2);
        return `${n}:${l}:${r}`;
        function e(a, o) {
          let u = a.toString();
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
        const n = t - this.startTime;
        (this.times[3] += n / 10),
          this.times[3] >= 100 &&
            ((this.times[3] -= 100), (this.times[2] += 1)),
          this.times[2] >= 60 && ((this.times[2] -= 60), (this.times[1] += 1)),
          this.times[1] >= 60 && ((this.times[1] -= 60), (this.times[0] += 1));
      },
    },
  }),
  Ca = { class: "time" };
function xa(t, n, l, r, e, a) {
  return R(), U("div", Ca, I(t.time), 1);
}
var wa = Lt(ka, [["render", xa]]);
const _a = { class: "row" },
  Sa = { class: "col-9 q-pr-md" },
  qa = { class: "row" },
  $a = { class: "row" },
  Pa = { class: "col-3 q-pr-md" },
  Ta = { class: "col-9" },
  Ma = { class: "q-pt-xl" },
  Ea = { class: "q-pt-md" },
  Va = { class: "col-3" },
  Aa = { class: "text-h4 text-secondary text-weight-thin text-center" },
  Ba = { class: "text-h6 text-secondary text-weight-thin text-center" },
  La = { class: "text-h6 text-center" },
  Ra = { class: "q-px-md" },
  Fa = y(
    "span",
    { class: "text-h6 text-weight-thin" },
    "Total Sets Completed - ",
    -1
  ),
  Ia = { class: "text-bold text-h6 align-right" },
  Da = y(
    "span",
    { class: "text-h6 text-weight-thin" },
    "Total Reps Completed - ",
    -1
  ),
  Na = { class: "text-bold text-h6 align-right" },
  za = y("span", { class: "text-h6 text-weight-thin" }, "Total Weight - ", -1),
  Wa = { class: "text-bold text-h6 align-right" },
  Qa = y("div", { class: "text-h2" }, "All Done?", -1),
  Ua = y("hr", null, null, -1),
  Oa = ["name"],
  tn = {
    __name: "WorkoutPage",
    setup(t) {
      jt.register(Xt, Yt, Kt, Gt, Ht), Ft();
      const n = It(),
        l = Dt(),
        r = ya(),
        e = i(() => ({
          labels: ["Complete", "Incomplete"],
          datasets: [
            {
              backgroundColor: ["#41B883", "transparent"],
              borderColor: ["white", "transparent"],
              data: [r.setsPctComplete, 100 - r.setsPctComplete],
            },
          ],
        })),
        a = {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
        },
        o = B("one"),
        u = B(!1),
        h = B(null);
      function d() {
        const S = new Date();
        return S.getFullYear() + "-" + (S.getMonth() + 1) + "-" + S.getDate();
      }
      const f = d();
      Rt(async () => {
        await r.getWorkout(n.params.muscleGroupId),
          (o.value = r.workout.lifts[0].id);
      });
      function _() {
        r.saveWorkout(), l.push({ name: "home" });
      }
      function v(S) {
        console.log(S);
      }
      function b(S) {
        let k = 0;
        return (
          S.forEach(function (c) {
            c.repetitions > 0 && k++;
          }),
          k
        );
      }
      function g(S) {
        return S.length - b(S);
      }
      return (S, k) =>
        A(r).workout
          ? (R(),
            se(
              Re,
              { key: 0, padding: "" },
              {
                default: V(() => [
                  y("div", _a, [
                    y("div", Sa, [
                      y("div", qa, [
                        w(
                          ke,
                          {
                            class: "glowing-border",
                            style: { width: "100%", height: "585px" },
                          },
                          {
                            default: V(() => [
                              w(
                                Ct,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    k[0] || (k[0] = (c) => (o.value = c)),
                                  class: "text-secondary",
                                  align: "left",
                                },
                                {
                                  default: V(() => [
                                    (R(!0),
                                    U(
                                      oe,
                                      null,
                                      re(
                                        A(r).workout.lifts,
                                        (c) => (
                                          R(),
                                          se(
                                            Zt,
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
                              w(le),
                              w(
                                ga,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    k[1] || (k[1] = (c) => (o.value = c)),
                                  animated: "",
                                },
                                {
                                  default: V(() => [
                                    (R(!0),
                                    U(
                                      oe,
                                      null,
                                      re(
                                        A(r).workout.lifts,
                                        (c) => (
                                          R(),
                                          se(
                                            ba,
                                            { key: c.id, name: c.id },
                                            {
                                              default: V(() => [
                                                (R(!0),
                                                U(
                                                  oe,
                                                  null,
                                                  re(
                                                    c.sets,
                                                    (P) => (
                                                      R(),
                                                      U("div", { key: P.id }, [
                                                        y("div", $a, [
                                                          y("div", Pa, [
                                                            w(
                                                              Be,
                                                              {
                                                                modelValue:
                                                                  P.weight,
                                                                "onUpdate:modelValue":
                                                                  (C) =>
                                                                    (P.weight =
                                                                      C),
                                                                modelModifiers:
                                                                  {
                                                                    number: !0,
                                                                  },
                                                                step: 5,
                                                                type: "number",
                                                                filled: "",
                                                                style: {
                                                                  "max-width":
                                                                    "200px",
                                                                },
                                                              },
                                                              {
                                                                before: V(
                                                                  () => [
                                                                    ie(
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
                                                          y("div", Ta, [
                                                            w(
                                                              ua,
                                                              {
                                                                modelValue:
                                                                  P.repetitions,
                                                                "onUpdate:modelValue":
                                                                  (C) =>
                                                                    (P.repetitions =
                                                                      C),
                                                                min: 0,
                                                                max: P.repetitionsGoal,
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
                                                y("div", Ma, [
                                                  w(
                                                    Be,
                                                    {
                                                      modelValue: c.notes,
                                                      "onUpdate:modelValue": (
                                                        P
                                                      ) => (c.notes = P),
                                                      filled: "",
                                                      type: "textarea",
                                                      label: "Notes",
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                    ]
                                                  ),
                                                ]),
                                                y("div", Ea, [
                                                  w(
                                                    Z,
                                                    {
                                                      class: "q-mt-sm",
                                                      outline: "",
                                                      color: "positive",
                                                      label: "Show History",
                                                      onClick: (P) => v(c),
                                                    },
                                                    null,
                                                    8,
                                                    ["onClick"]
                                                  ),
                                                ]),
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
                    ]),
                    y("div", Va, [
                      w(
                        ke,
                        {
                          class: "glowing-border",
                          style: { width: "100%", height: "500px" },
                        },
                        {
                          default: V(() => [
                            y(
                              "div",
                              Aa,
                              I(A(r).workout.muscleGroupName) + " Workout ",
                              1
                            ),
                            y("div", Ba, I(A(f)), 1),
                            w(le, { class: "q-my-sm" }),
                            w(
                              wa,
                              {
                                ref_key: "stopWatch",
                                ref: h,
                                class: "digits text-center text-h5",
                              },
                              null,
                              512
                            ),
                            w(le, { class: "q-my-md" }),
                            y(
                              "div",
                              La,
                              I(Math.round(A(r).setsPctComplete)) +
                                "% Complete ",
                              1
                            ),
                            w(
                              A(Jt),
                              {
                                "chart-options": a,
                                "chart-data": A(e),
                                "chart-id": "chartId",
                                height: 175,
                              },
                              null,
                              8,
                              ["chart-data"]
                            ),
                            w(le, { class: "q-my-md" }),
                            y("div", Ra, [
                              y("div", null, [
                                Fa,
                                y("span", Ia, I(A(r).setsCompleted), 1),
                              ]),
                              y("div", null, [
                                Da,
                                y("span", Na, I(A(r).repsCompleted), 1),
                              ]),
                              y("div", null, [
                                za,
                                y("span", Wa, I(A(r).totalWeight), 1),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      w(Z, {
                        class: "full-width q-mt-sm",
                        color: "positive",
                        label: "Finish Workout",
                        onClick: k[2] || (k[2] = (c) => (u.value = !0)),
                      }),
                      w(Z, {
                        class: "full-width q-mt-sm",
                        color: "negative",
                        label: "Cancel Workout",
                      }),
                    ]),
                  ]),
                  w(
                    Wt,
                    {
                      modelValue: u.value,
                      "onUpdate:modelValue":
                        k[3] || (k[3] = (c) => (u.value = c)),
                      persistent: "",
                    },
                    {
                      default: V(() => [
                        w(
                          ke,
                          { class: "glassy", style: { width: "600px" } },
                          {
                            default: V(() => [
                              w(
                                Ae,
                                { class: "row items-center" },
                                { default: V(() => [Qa]), _: 1 }
                              ),
                              Ua,
                              w(Ae, null, {
                                default: V(() => [
                                  y("ul", null, [
                                    (R(!0),
                                    U(
                                      oe,
                                      null,
                                      re(
                                        A(r).workout.lifts,
                                        (c) => (
                                          R(),
                                          U(
                                            "li",
                                            { key: c.id, name: c.id },
                                            [
                                              y("div", null, [
                                                ie(
                                                  I(c.exercise.name) + " - ",
                                                  1
                                                ),
                                                y(
                                                  "span",
                                                  {
                                                    class: Le({
                                                      "text-positive":
                                                        b(c.sets) ===
                                                        c.sets.length,
                                                      "text-warning":
                                                        b(c.sets) !==
                                                        c.sets.length,
                                                    }),
                                                  },
                                                  I(b(c.sets)),
                                                  3
                                                ),
                                                ie(" Completed, "),
                                                y(
                                                  "span",
                                                  {
                                                    class: Le({
                                                      "text-warning":
                                                        g(c.sets) ===
                                                        c.sets.length,
                                                      "text-positive":
                                                        g(c.sets) !==
                                                        c.sets.length,
                                                    }),
                                                  },
                                                  I(g(c.sets)),
                                                  3
                                                ),
                                                ie(" Incomplete "),
                                              ]),
                                            ],
                                            8,
                                            Oa
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                                _: 1,
                              }),
                              w(Qt),
                              w(
                                Nt,
                                { align: "right" },
                                {
                                  default: V(() => [
                                    zt(
                                      w(
                                        Z,
                                        {
                                          label: "Cancel",
                                          outline: "",
                                          color: "white",
                                        },
                                        null,
                                        512
                                      ),
                                      [[Ot]]
                                    ),
                                    w(Z, {
                                      label: "Confirm",
                                      color: "positive",
                                      onClick: _,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
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
          : (R(),
            se(
              Re,
              {
                key: 1,
                class:
                  "window-height window-width row justify-center items-center",
              },
              {
                default: V(() => [
                  w(Ut, { color: "positive", size: "6em", thickness: 10 }),
                ]),
                _: 1,
              }
            ));
    },
  };
export { tn as default };
