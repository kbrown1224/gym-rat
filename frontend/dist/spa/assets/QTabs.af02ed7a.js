import {
  e as Z,
  y as T,
  f,
  q as de,
  n as xe,
  i as Me,
  a6 as $e,
  a7 as Ee,
  h,
  a8 as be,
  V as ce,
  a9 as De,
  aa as Fe,
  ab as z,
  D as We,
  j as he,
  ac as Qe,
  ad as je,
  d as Ve,
  ae as p,
  af as ve,
  s as fe,
  m as D,
  S as Ke,
  T as Oe,
  g as ze,
  p as He,
} from "./index.099d1cbc.js";
import { Q as Ne } from "./QResizeObserver.c1066bbb.js";
import { r as Ue } from "./rtl.b51694b1.js";
let Ge = 0;
const et = ["click", "keydown"],
  tt = {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: { type: [Number, String], default: () => `t_${Ge++}` },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    contentClass: String,
    ripple: { type: [Boolean, Object], default: !0 },
  };
function at(t, x, _, v) {
  const l = Me(be, Z);
  if (l === Z)
    return (
      console.error("QTab/QRouteTab component needs to be child of QTabs"), Z
    );
  const { proxy: H } = he(),
    M = T(null),
    F = T(null),
    W = T(null),
    N = f(() =>
      t.disable === !0 || t.ripple === !1
        ? !1
        : Object.assign(
            { keyCodes: [13, 32], early: !0 },
            t.ripple === !0 ? {} : t.ripple
          )
    ),
    I = f(() => l.currentModel.value === t.name),
    U = f(
      () =>
        "q-tab relative-position self-stretch flex flex-center text-center" +
        (I.value === !0
          ? " q-tab--active" +
            (l.tabProps.value.activeClass
              ? " " + l.tabProps.value.activeClass
              : "") +
            (l.tabProps.value.activeColor
              ? ` text-${l.tabProps.value.activeColor}`
              : "") +
            (l.tabProps.value.activeBgColor
              ? ` bg-${l.tabProps.value.activeBgColor}`
              : "")
          : " q-tab--inactive") +
        (t.icon && t.label && l.tabProps.value.inlineLabel === !1
          ? " q-tab--full"
          : "") +
        (t.noCaps === !0 || l.tabProps.value.noCaps === !0
          ? " q-tab--no-caps"
          : "") +
        (t.disable === !0
          ? " disabled"
          : " q-focusable q-hoverable cursor-pointer") +
        (v !== void 0 ? v.linkClass.value : "")
    ),
    L = f(
      () =>
        "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " +
        (l.tabProps.value.inlineLabel === !0
          ? "row no-wrap q-tab__content--inline"
          : "column") +
        (t.contentClass !== void 0 ? ` ${t.contentClass}` : "")
    ),
    g = f(() =>
      t.disable === !0 ||
      l.hasFocus.value === !0 ||
      (I.value === !1 && l.hasActiveTab.value === !0)
        ? -1
        : t.tabindex || 0
    );
  function C(r, c) {
    if ((c !== !0 && M.value !== null && M.value.focus(), t.disable === !0)) {
      v !== void 0 && v.hasRouterLink.value === !0 && ce(r);
      return;
    }
    if (v === void 0) {
      l.updateModel({ name: t.name }), _("click", r);
      return;
    }
    if (v.hasRouterLink.value === !0) {
      const w = (m = {}) => {
        let S;
        const j =
          m.to === void 0 || Qe(m.to, t.to) === !0
            ? (l.avoidRouteWatcher = je())
            : null;
        return v
          .navigateToRouterLink(r, { ...m, returnRouterError: !0 })
          .catch((b) => {
            S = b;
          })
          .then((b) => {
            if (
              (j === l.avoidRouteWatcher &&
                ((l.avoidRouteWatcher = !1),
                S === void 0 &&
                  (b === void 0 ||
                    b.message.startsWith("Avoided redundant navigation") ===
                      !0) &&
                  l.updateModel({ name: t.name })),
              m.returnRouterError === !0)
            )
              return S !== void 0 ? Promise.reject(S) : b;
          });
      };
      _("click", r, w), r.defaultPrevented !== !0 && w();
      return;
    }
    _("click", r);
  }
  function R(r) {
    De(r, [13, 32])
      ? C(r, !0)
      : Fe(r) !== !0 &&
        r.keyCode >= 35 &&
        r.keyCode <= 40 &&
        r.altKey !== !0 &&
        r.metaKey !== !0 &&
        l.onKbdNavigate(r.keyCode, H.$el) === !0 &&
        ce(r),
      _("keydown", r);
  }
  function $() {
    const r = l.tabProps.value.narrowIndicator,
      c = [],
      w = h("div", {
        ref: W,
        class: ["q-tab__indicator", l.tabProps.value.indicatorClass],
      });
    t.icon !== void 0 && c.push(h(z, { class: "q-tab__icon", name: t.icon })),
      t.label !== void 0 &&
        c.push(h("div", { class: "q-tab__label" }, t.label)),
      t.alert !== !1 &&
        c.push(
          t.alertIcon !== void 0
            ? h(z, {
                class: "q-tab__alert-icon",
                color: t.alert !== !0 ? t.alert : void 0,
                name: t.alertIcon,
              })
            : h("div", {
                class:
                  "q-tab__alert" + (t.alert !== !0 ? ` text-${t.alert}` : ""),
              })
        ),
      r === !0 && c.push(w);
    const m = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: M }),
      h("div", { class: L.value }, We(x.default, c)),
    ];
    return r === !1 && m.push(w), m;
  }
  const A = {
    name: f(() => t.name),
    rootRef: F,
    tabIndicatorRef: W,
    routeData: v,
  };
  de(() => {
    l.unregisterTab(A);
  }),
    xe(() => {
      l.registerTab(A);
    });
  function Q(r, c) {
    const w = {
      ref: F,
      class: U.value,
      tabindex: g.value,
      role: "tab",
      "aria-selected": I.value === !0 ? "true" : "false",
      "aria-disabled": t.disable === !0 ? "true" : void 0,
      onClick: C,
      onKeydown: R,
      ...c,
    };
    return $e(h(r, w, $()), [[Ee, N.value]]);
  }
  return { renderTab: Q, $tabs: l };
}
function Xe(t, x, _) {
  const v = _ === !0 ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${x === !0 ? v[0] : v[1]}${t ? ` text-${t}` : ""}`;
}
const Je = ["left", "center", "right", "justify"];
var nt = Ve({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (t) => Je.includes(t),
    },
    breakpoint: { type: [String, Number], default: 600 },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array],
  },
  setup(t, { slots: x, emit: _ }) {
    const { proxy: v } = he(),
      { $q: l } = v,
      { registerTick: H } = p(),
      { registerTick: M } = p(),
      { registerTick: F } = p(),
      { registerTimeout: W, removeTimeout: N } = ve(),
      { registerTimeout: I, removeTimeout: U } = ve(),
      L = T(null),
      g = T(null),
      C = T(t.modelValue),
      R = T(!1),
      $ = T(!0),
      A = T(!1),
      Q = T(!1),
      r = f(() => l.platform.is.desktop === !0 || t.mobileArrows === !0),
      c = [],
      w = T(0),
      m = T(!1);
    let S,
      j,
      b,
      P = r.value === !0 ? te : fe;
    const ge = f(() => ({
        activeClass: t.activeClass,
        activeColor: t.activeColor,
        activeBgColor: t.activeBgColor,
        indicatorClass: Xe(t.indicatorColor, t.switchIndicator, t.vertical),
        narrowIndicator: t.narrowIndicator,
        inlineLabel: t.inlineLabel,
        noCaps: t.noCaps,
      })),
      me = f(() => {
        const e = w.value,
          a = C.value;
        for (let n = 0; n < e; n++) if (c[n].name.value === a) return !0;
        return !1;
      }),
      Te = f(
        () =>
          `q-tabs__content--align-${
            R.value === !0 ? "left" : Q.value === !0 ? "justify" : t.align
          }`
      ),
      we = f(
        () =>
          `q-tabs row no-wrap items-center q-tabs--${
            R.value === !0 ? "" : "not-"
          }scrollable q-tabs--${
            t.vertical === !0 ? "vertical" : "horizontal"
          } q-tabs__arrows--${
            r.value === !0 && t.outsideArrows === !0 ? "outside" : "inside"
          }` +
          (t.dense === !0 ? " q-tabs--dense" : "") +
          (t.shrink === !0 ? " col-shrink" : "") +
          (t.stretch === !0 ? " self-stretch" : "")
      ),
      Ce = f(
        () =>
          "q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position " +
          Te.value +
          (t.contentClass !== void 0 ? ` ${t.contentClass}` : "") +
          (l.platform.is.mobile === !0 ? " scroll" : "")
      ),
      V = f(() =>
        t.vertical === !0
          ? {
              container: "height",
              content: "offsetHeight",
              scroll: "scrollHeight",
            }
          : {
              container: "width",
              content: "offsetWidth",
              scroll: "scrollWidth",
            }
      ),
      K = f(() => t.vertical !== !0 && l.lang.rtl === !0),
      G = f(() => Ue === !1 && K.value === !0);
    D(K, P),
      D(
        () => t.modelValue,
        (e) => {
          X({ name: e, setCurrent: !0, skipEmit: !0 });
        }
      ),
      D(
        () => t.outsideArrows,
        () => {
          E();
        }
      ),
      D(r, (e) => {
        (P = e === !0 ? te : fe), E();
      });
    function X({ name: e, setCurrent: a, skipEmit: n, fromRoute: u }) {
      C.value !== e &&
        (n !== !0 &&
          t["onUpdate:modelValue"] !== void 0 &&
          _("update:modelValue", e),
        (a === !0 || t["onUpdate:modelValue"] === void 0) &&
          (ye(C.value, e), (C.value = e)));
    }
    function E() {
      H(() => {
        ee({ width: L.value.offsetWidth, height: L.value.offsetHeight });
      });
    }
    function ee(e) {
      if (V.value === void 0 || g.value === null) return;
      const a = e[V.value.container],
        n = Math.min(
          g.value[V.value.scroll],
          Array.prototype.reduce.call(
            g.value.children,
            (s, i) => s + (i[V.value.content] || 0),
            0
          )
        ),
        u = a > 0 && n > a;
      (R.value = u),
        u === !0 && M(P),
        (Q.value = a < parseInt(t.breakpoint, 10));
    }
    function ye(e, a) {
      const n =
          e != null && e !== "" ? c.find((s) => s.name.value === e) : null,
        u = a != null && a !== "" ? c.find((s) => s.name.value === a) : null;
      if (n && u) {
        const s = n.tabIndicatorRef.value,
          i = u.tabIndicatorRef.value;
        clearTimeout(S),
          (s.style.transition = "none"),
          (s.style.transform = "none"),
          (i.style.transition = "none"),
          (i.style.transform = "none");
        const o = s.getBoundingClientRect(),
          d = i.getBoundingClientRect();
        (i.style.transform =
          t.vertical === !0
            ? `translate3d(0,${o.top - d.top}px,0) scale3d(1,${
                d.height ? o.height / d.height : 1
              },1)`
            : `translate3d(${o.left - d.left}px,0,0) scale3d(${
                d.width ? o.width / d.width : 1
              },1,1)`),
          F(() => {
            S = setTimeout(() => {
              (i.style.transition =
                "transform .25s cubic-bezier(.4, 0, .2, 1)"),
                (i.style.transform = "none");
            }, 70);
          });
      }
      u && R.value === !0 && B(u.rootRef.value);
    }
    function B(e) {
      const {
          left: a,
          width: n,
          top: u,
          height: s,
        } = g.value.getBoundingClientRect(),
        i = e.getBoundingClientRect();
      let o = t.vertical === !0 ? i.top - u : i.left - a;
      if (o < 0) {
        (g.value[t.vertical === !0 ? "scrollTop" : "scrollLeft"] +=
          Math.floor(o)),
          P();
        return;
      }
      (o += t.vertical === !0 ? i.height - s : i.width - n),
        o > 0 &&
          ((g.value[t.vertical === !0 ? "scrollTop" : "scrollLeft"] +=
            Math.ceil(o)),
          P());
    }
    function te() {
      const e = g.value;
      if (e !== null) {
        const a = e.getBoundingClientRect(),
          n = t.vertical === !0 ? e.scrollTop : Math.abs(e.scrollLeft);
        K.value === !0
          ? (($.value = Math.ceil(n + a.width) < e.scrollWidth - 1),
            (A.value = n > 0))
          : (($.value = n > 0),
            (A.value =
              t.vertical === !0
                ? Math.ceil(n + a.height) < e.scrollHeight
                : Math.ceil(n + a.width) < e.scrollWidth));
      }
    }
    function ae(e) {
      y(),
        (j = setInterval(() => {
          Re(e) === !0 && y();
        }, 5));
    }
    function ne() {
      ae(G.value === !0 ? Number.MAX_SAFE_INTEGER : 0);
    }
    function oe() {
      ae(G.value === !0 ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function y() {
      clearInterval(j);
    }
    function qe(e, a) {
      const n = Array.prototype.filter.call(
          g.value.children,
          (d) =>
            d === a || (d.matches && d.matches(".q-tab.q-focusable") === !0)
        ),
        u = n.length;
      if (u === 0) return;
      if (e === 36) return B(n[0]), n[0].focus(), !0;
      if (e === 35) return B(n[u - 1]), n[u - 1].focus(), !0;
      const s = e === (t.vertical === !0 ? 38 : 37),
        i = e === (t.vertical === !0 ? 40 : 39),
        o = s === !0 ? -1 : i === !0 ? 1 : void 0;
      if (o !== void 0) {
        const d = K.value === !0 ? -1 : 1,
          q = n.indexOf(a) + o * d;
        return (
          q >= 0 && q < u && (B(n[q]), n[q].focus({ preventScroll: !0 })), !0
        );
      }
    }
    const _e = f(() =>
      G.value === !0
        ? {
            get: (e) => Math.abs(e.scrollLeft),
            set: (e, a) => {
              e.scrollLeft = -a;
            },
          }
        : t.vertical === !0
        ? {
            get: (e) => e.scrollTop,
            set: (e, a) => {
              e.scrollTop = a;
            },
          }
        : {
            get: (e) => e.scrollLeft,
            set: (e, a) => {
              e.scrollLeft = a;
            },
          }
    );
    function Re(e) {
      const a = g.value,
        { get: n, set: u } = _e.value;
      let s = !1,
        i = n(a);
      const o = e < i ? -1 : 1;
      return (
        (i += o * 5),
        i < 0
          ? ((s = !0), (i = 0))
          : ((o === -1 && i <= e) || (o === 1 && i >= e)) &&
            ((s = !0), (i = e)),
        u(a, i),
        P(),
        s
      );
    }
    function le(e, a) {
      for (const n in e) if (e[n] !== a[n]) return !1;
      return !0;
    }
    function Se() {
      let e = null,
        a = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const n = c.filter(
          (o) =>
            o.routeData !== void 0 && o.routeData.hasRouterLink.value === !0
        ),
        { hash: u, query: s } = v.$route,
        i = Object.keys(s).length;
      for (const o of n) {
        const d = o.routeData.exact.value === !0;
        if (
          o.routeData[d === !0 ? "linkIsExactActive" : "linkIsActive"].value !==
          !0
        )
          continue;
        const {
            hash: q,
            query: J,
            matched: Ae,
            href: Be,
          } = o.routeData.resolvedLink.value,
          Y = Object.keys(J).length;
        if (d === !0) {
          if (q !== u || Y !== i || le(s, J) === !1) continue;
          e = o.name.value;
          break;
        }
        if ((q !== "" && q !== u) || (Y !== 0 && le(J, s) === !1)) continue;
        const k = {
          matchedLen: Ae.length,
          queryDiff: i - Y,
          hrefLen: Be.length - q.length,
        };
        if (k.matchedLen > a.matchedLen) {
          (e = o.name.value), (a = k);
          continue;
        } else if (k.matchedLen !== a.matchedLen) continue;
        if (k.queryDiff < a.queryDiff) (e = o.name.value), (a = k);
        else if (k.queryDiff !== a.queryDiff) continue;
        k.hrefLen > a.hrefLen && ((e = o.name.value), (a = k));
      }
      (e === null &&
        c.some((o) => o.routeData === void 0 && o.name.value === C.value) ===
          !0) ||
        X({ name: e, setCurrent: !0 });
    }
    function ke(e) {
      if (
        (N(),
        m.value !== !0 &&
          L.value !== null &&
          e.target &&
          typeof e.target.closest == "function")
      ) {
        const a = e.target.closest(".q-tab");
        a &&
          L.value.contains(a) === !0 &&
          ((m.value = !0), R.value === !0 && B(a));
      }
    }
    function Le() {
      W(() => {
        m.value = !1;
      }, 30);
    }
    function O() {
      ie.avoidRouteWatcher === !1 ? I(Se) : U();
    }
    function re() {
      if (b === void 0) {
        const e = D(() => v.$route.fullPath, O);
        b = () => {
          e(), (b = void 0);
        };
      }
    }
    function Pe(e) {
      c.push(e),
        w.value++,
        E(),
        e.routeData === void 0 || v.$route === void 0
          ? I(() => {
              if (R.value === !0) {
                const a = C.value,
                  n =
                    a != null && a !== ""
                      ? c.find((u) => u.name.value === a)
                      : null;
                n && B(n.rootRef.value);
              }
            })
          : (re(), e.routeData.hasRouterLink.value === !0 && O());
    }
    function Ie(e) {
      c.splice(c.indexOf(e), 1),
        w.value--,
        E(),
        b !== void 0 &&
          e.routeData !== void 0 &&
          (c.every((a) => a.routeData === void 0) === !0 && b(), O());
    }
    const ie = {
      currentModel: C,
      tabProps: ge,
      hasFocus: m,
      hasActiveTab: me,
      registerTab: Pe,
      unregisterTab: Ie,
      verifyRouteModel: O,
      updateModel: X,
      onKbdNavigate: qe,
      avoidRouteWatcher: !1,
    };
    He(be, ie);
    function ue() {
      clearTimeout(S), y(), b !== void 0 && b();
    }
    let se;
    return (
      de(ue),
      Ke(() => {
        (se = b !== void 0), ue();
      }),
      Oe(() => {
        se === !0 && re(), E();
      }),
      () => {
        const e = [
          h(Ne, { onResize: ee }),
          h("div", { ref: g, class: Ce.value, onScroll: P }, ze(x.default)),
        ];
        return (
          r.value === !0 &&
            e.push(
              h(z, {
                class:
                  "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" +
                  ($.value === !0 ? "" : " q-tabs__arrow--faded"),
                name:
                  t.leftIcon ||
                  l.iconSet.tabs[t.vertical === !0 ? "up" : "left"],
                onMousedownPassive: ne,
                onTouchstartPassive: ne,
                onMouseupPassive: y,
                onMouseleavePassive: y,
                onTouchendPassive: y,
              }),
              h(z, {
                class:
                  "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" +
                  (A.value === !0 ? "" : " q-tabs__arrow--faded"),
                name:
                  t.rightIcon ||
                  l.iconSet.tabs[t.vertical === !0 ? "down" : "right"],
                onMousedownPassive: oe,
                onTouchstartPassive: oe,
                onMouseupPassive: y,
                onMouseleavePassive: y,
                onTouchendPassive: y,
              })
            ),
          h(
            "div",
            {
              ref: L,
              class: we.value,
              role: "tablist",
              onFocusin: ke,
              onFocusout: Le,
            },
            e
          )
        );
      }
    );
  },
});
export { nt as Q, et as a, at as b, tt as u };
