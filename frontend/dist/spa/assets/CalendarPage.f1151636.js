import { Q as za } from "./QPage.ae2997fd.js";
import {
  a as St,
  r as g,
  c as E,
  f as Wt,
  h as i,
  w as ae,
  g as At,
  e as cn,
  d as Et,
  o as Vt,
  b as Ot,
  T as $t,
  n as _a,
  m as Ct,
  j as Fa,
  k as Ht,
  p as st,
  O as Ea,
  I as Dt,
  a3 as ya,
  P as Oa,
  a7 as Va,
  a0 as la,
  a2 as $a,
  a1 as Ua,
  b2 as on,
  Q as ba,
  U as sn,
  _ as fn,
  a$ as vn,
  S as La,
  b3 as yn,
  aR as hn,
} from "./index.195637e2.js";
import { C as _n, Q as gn } from "./ClosePopup.fc0b5eb2.js";
const Ya =
    /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?(.(\d{1,3}))?$/,
  mn = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,
  kn = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  wn = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  bn = 28,
  Dn = 31,
  bt = 12,
  Ca = 1,
  ga = 1,
  Bt = 7,
  da = 60,
  Da = 24,
  qn = 6048e5;
function et() {
  const e = new Date(),
    t = "" + (e.getMonth() + 1),
    n = "" + e.getDate();
  return [e.getFullYear(), dt(t, 2), dt(n, 2)].join("-");
}
function Ut(e, t, n) {
  let r = Se(e);
  if (r.day === 1 || r.weekday === 0)
    for (; !t.includes(r.weekday); ) r = wt(r);
  return (r = Za(r, t[0], Ta)), (r = ht(r)), n && (r = qt(r, n, r.hasTime)), r;
}
function xt(e, t, n) {
  let r = Se(e);
  if (kt(r.year, r.month) === r.day || r.weekday === 6)
    for (; !t.includes(r.weekday); ) r = Ta(r);
  return (
    (r = Za(r, t[t.length - 1], wt)),
    (r = ht(r)),
    n && (r = qt(r, n, r.hasTime)),
    r
  );
}
function ia(e) {
  const t = Se(e);
  return (t.day = ga), ht(t), t;
}
function zt(e) {
  const t = Se(e);
  return (t.day = kt(t.year, t.month)), ht(t), t;
}
function Ra(e) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Number]":
      return e;
    case "[object String]": {
      const n = mn.exec(e);
      return n ? parseInt(n[1], 10) * 60 + parseInt(n[3] || 0, 10) : !1;
    }
    case "[object Object]":
      return typeof e.hour != "number" || typeof e.minute != "number"
        ? !1
        : e.hour * 60 + e.minute;
  }
  return !1;
}
function Ha(e) {
  return !!Ya.exec(e);
}
function ke(e) {
  const t = Ya.exec(e);
  return t
    ? {
        date: e,
        time:
          dt(parseInt(t[6], 10) || 0, 2) + ":" + dt(parseInt(t[8], 10) || 0, 2),
        year: parseInt(t[1], 10),
        month: parseInt(t[2], 10),
        day: parseInt(t[4], 10) || 1,
        hour: isNaN(parseInt(t[6], 10)) ? 0 : parseInt(t[6], 10),
        minute: isNaN(parseInt(t[8], 10)) ? 0 : parseInt(t[8], 10),
        weekday: 0,
        doy: 0,
        workweek: 0,
        hasDay: !!t[4],
        hasTime: !0,
        past: !1,
        current: !1,
        future: !1,
        disabled: !1,
      }
    : null;
}
function Ee(e, t) {
  let n = ke(e);
  return n === null ? null : ((n = ht(n)), t && qt(n, t, n.hasTime), n);
}
function Fn(e, t = !1) {
  const n = t ? "UTC" : "";
  return ht({
    date:
      dt(e[`get${n}FullYear`](), 4) +
      "-" +
      dt(e[`get${n}Month`]() + 1, 2) +
      "-" +
      dt(e[`get${n}Date`](), 2),
    time:
      dt(e[`get${n}Hours`]() || 0, 2) + ":" + dt(e[`get${n}Minutes`]() || 0, 2),
    year: e[`get${n}FullYear`](),
    month: e[`get${n}Month`]() + 1,
    day: e[`get${n}Date`](),
    hour: e[`get${n}Hours`](),
    minute: e[`get${n}Minutes`](),
    weekday: 0,
    doy: 0,
    workweek: 0,
    hasDay: !0,
    hasTime: !0,
    past: !1,
    current: !1,
    future: !1,
    disabled: !1,
  });
}
function ne(e) {
  return e.year * 1e8 + e.month * 1e6 + e.day * 1e4;
}
function Nt(e) {
  return e.hour * 100 + e.minute;
}
function Ft(e) {
  return ne(e) + Nt(e);
}
function qt(e, t, n = !1) {
  let r = ne(t),
    f = ne(e),
    b = r === f;
  return (
    e.hasTime && n && b && ((r = Nt(t)), (f = Nt(e)), (b = r === f)),
    (e.past = f < r),
    (e.current = b),
    (e.future = f > r),
    (e.currentWeekday = e.weekday === t.weekday),
    e
  );
}
function Cn(e, t, n) {
  return (
    (e.hasTime = !0),
    (e.hour = Math.floor(t / da)),
    (e.minute = t % da),
    (e.time = Sa(e)),
    n && qt(e, n, !0),
    e
  );
}
function Ia(e) {
  return (e.weekday = Xa(e)), e;
}
function Hn(e) {
  return (e.doy = Qa(e)), e;
}
function Sn(e, t, n, r, f) {
  const b = ne(e);
  if (t !== void 0) {
    const s = ne(ke(t));
    b <= s && (e.disabled = !0);
  }
  if (e.disabled !== !0 && n !== void 0) {
    const s = ne(ke(n));
    b >= s && (e.disabled = !0);
  }
  if (e.disabled !== !0 && Array.isArray(r) && r.length > 0) {
    for (const s in r)
      if (r[s] === e.weekday) {
        e.disabled = !0;
        break;
      }
  }
  if (e.disabled !== !0 && Array.isArray(f) && f.length > 0) {
    for (const s in f)
      if (Array.isArray(f[s]) && f[s].length === 2) {
        const D = ke(f[s][0]),
          m = ke(f[s][1]);
        if (Ln(e, D, m)) {
          e.disabled = !0;
          break;
        }
      } else if (ne(Ee(f[s] + " 00:00")) === b) {
        e.disabled = !0;
        break;
      }
  }
  return e;
}
function ht(e) {
  return (
    (e.hasTime = !0),
    (e.time = Sa(e)),
    (e.date = ja(e)),
    (e.weekday = Xa(e)),
    (e.doy = Qa(e)),
    (e.workweek = Wn(e)),
    e
  );
}
function Qa(e) {
  if (e.year !== 0)
    return (
      (Date.UTC(e.year, e.month - 1, e.day) - Date.UTC(e.year, 0, 0)) /
      24 /
      60 /
      60 /
      1e3
    );
}
function Wn(e) {
  e.year === 0 && (e = Ee(et()));
  const t = En(e);
  if (isNaN(t)) return 0;
  const n = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
  const r = new Date(n.getFullYear(), 0, 4);
  r.setDate(r.getDate() - ((r.getDay() + 6) % 7) + 3);
  const f = n.getTimezoneOffset() - r.getTimezoneOffset();
  n.setHours(n.getHours() - f);
  const b = (n - r) / qn;
  return 1 + Math.floor(b);
}
function Xa(e) {
  let t = e.weekday;
  if (e.hasDay) {
    const n = Math.floor,
      r = e.day,
      f = ((e.month + 9) % bt) + 1,
      b = n(e.year / 100),
      s = (e.year % 100) - (e.month <= 2 ? 1 : 0);
    t =
      (((r + n(2.6 * f - 0.2) - 2 * b + s + n(s / 4) + n(b / 4)) % 7) + 7) % 7;
  }
  return t;
}
function Tn(e) {
  return ((e % 4 === 0) ^ (e % 100 === 0) ^ (e % 400 === 0)) === 1;
}
function kt(e, t) {
  return Tn(e) ? wn[t] : kn[t];
}
function Se(e) {
  return { ...e };
}
function dt(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function ja(e) {
  let t = `${dt(e.year, 4)}-${dt(e.month, 2)}`;
  return e.hasDay && (t += `-${dt(e.day, 2)}`), t;
}
function Sa(e) {
  return e.hasTime ? `${dt(e.hour, 2)}:${dt(e.minute, 2)}` : "";
}
function Wa(e) {
  return ja(e) + " " + (e.hasTime ? Sa(e) : "00:00");
}
function wt(e) {
  return (
    ++e.day,
    (e.weekday = (e.weekday + 1) % Bt),
    e.day > bn &&
      e.day > kt(e.year, e.month) &&
      ((e.day = ga), ++e.month, e.month > bt && ((e.month = Ca), ++e.year)),
    e
  );
}
function Ta(e) {
  return (
    e.day--,
    (e.weekday = (e.weekday + 6) % Bt),
    e.day < ga &&
      (e.month--,
      e.month < Ca && (e.year--, (e.month = bt)),
      (e.day = kt(e.year, e.month))),
    e
  );
}
function Ma(e, t = wt, n = 1, r = [0, 1, 2, 3, 4, 5, 6]) {
  return Pt(e, t, n, r);
}
function Pt(e, t = wt, n = 1, r = [0, 1, 2, 3, 4, 5, 6]) {
  for (!r.includes(e.weekday) && e.weekday === 0 && t === wt && ++n; --n >= 0; )
    (e = t(e)), r.length < 7 && !r.includes(e.weekday) && ++n;
  return e;
}
function Za(e, t, n = wt, r = 6) {
  for (; e.weekday !== t && --r >= 0; ) e = n(e);
  return e;
}
function xn(e) {
  const t = [1, 1, 1, 1, 1, 1, 1],
    n = [0, 0, 0, 0, 0, 0, 0];
  for (let r = 0; r < e.length; ++r) n[e[r]] = 1;
  for (let r = 0; r < Bt; ++r) {
    let f = 1;
    for (let b = 1; b < Bt; ++b) {
      const s = (r + b) % Bt;
      if (n[s]) break;
      ++f;
    }
    t[r] = n[r] * f;
  }
  return t;
}
function ha(e, t, n, r, f, b, s = [], D = [], m = 42, H = 0) {
  const W = ne(t),
    O = [];
  let M = Se(e),
    z = 0,
    Z = z === W;
  if (W < ne(e)) return O;
  for (
    ;
    (!Z || O.length < H) &&
    O.length < m &&
    ((z = ne(M)), (Z = Z || (z > W && O.length >= H)), !Z);

  ) {
    if (r[M.weekday] === 0) {
      M = Pt(M, wt);
      continue;
    }
    const V = Se(M);
    ht(V), qt(V, n), Sn(V, f, b, s, D), O.push(V), (M = Pt(M, wt));
  }
  return O;
}
function An(e, t, n, r, f) {
  const b = [];
  for (let s = 0; s < r; ++s) {
    const D = (t + s) * n,
      m = Se(e);
    b.push(Cn(m, D, f));
  }
  return b;
}
function Kt(e, t) {
  const n = (r, f) => "";
  return typeof Intl == "undefined" || typeof Intl.DateTimeFormat == "undefined"
    ? n
    : (r, f) => {
        try {
          return new Intl.DateTimeFormat(e || void 0, t(r, f)).format(On(r));
        } catch (b) {
          return (
            console.error(`Intl.DateTimeFormat: ${b.message} -> ${Wa(r)}`), n
          );
        }
      };
}
function En(e, t = !0) {
  return t
    ? new Date(Date.UTC(e.year, e.month - 1, e.day, 0, 0))
    : new Date(e.year, e.month - 1, e.day, 0, 0);
}
function On(e, t = !0) {
  return t
    ? new Date(Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute))
    : new Date(e.year, e.month - 1, e.day, e.hour, e.minute);
}
function Qe(e) {
  return isFinite(parseInt(e, 10));
}
function Ln(e, t, n, r) {
  const f = ne(e) + (r === !0 ? Nt(e) : 0),
    b = ne(t) + (r === !0 ? Nt(t) : 0),
    s = ne(n) + (r === !0 ? Nt(n) : 0);
  return f >= b && f <= s;
}
function Me(e, t) {
  const n = Se(e);
  let r;
  return (
    Rn(t, (f, b) => {
      if (n[b] !== void 0) {
        n[b] += parseInt(f, 10);
        const s = Ba.indexOf(b);
        s !== -1 && (r === void 0 ? (r = s) : (r = Math.min(s, r)));
      }
    }),
    r !== void 0 && Mn(n, Ba[r]),
    ht(n),
    n
  );
}
const Ba = ["minute", "hour", "day", "month"];
function Rn(e, t) {
  Object.keys(e).forEach((n) => t(e[n], n));
}
function In(e) {
  if (e.minute >= da || e.minute < 0) {
    const t = Math.floor(e.minute / da);
    (e.minute -= t * da), (e.hour += t), Ga(e);
  }
  return e;
}
function Ga(e) {
  if (e.hour >= Da || e.hour < 0) {
    const t = Math.floor(e.hour / Da);
    (e.hour -= t * Da), (e.day += t), Ja(e);
  }
  return e;
}
function Ja(e) {
  Mt(e);
  let t = kt(e.year, e.month);
  if (e.day > t) {
    ++e.month, e.month > bt && Mt(e);
    let n = e.day - t;
    t = kt(e.year, e.month);
    do
      n > t &&
        (++e.month, e.month > bt && Mt(e), (n -= t), (t = kt(e.year, e.month)));
    while (n > t);
    e.day = n;
  } else if (e.day <= 0) {
    let n = -1 * e.day;
    --e.month, e.month <= 0 && Mt(e), (t = kt(e.year, e.month));
    do
      n > t &&
        ((n -= t), --e.month, e.month <= 0 && Mt(e), (t = kt(e.year, e.month)));
    while (n > t);
    e.day = t - n;
  }
  return e;
}
function Mt(e) {
  if (e.month > bt) {
    const t = Math.floor(e.month / bt);
    (e.month = e.month % bt), (e.year += t);
  } else e.month < Ca && ((e.month += bt), --e.year);
  return e;
}
function Mn(e, t) {
  switch (t) {
    case "minute":
      return In(e);
    case "hour":
      return Ga(e);
    case "day":
      return Ja(e);
    case "month":
      return Mt(e);
  }
}
function J(e, t = "px") {
  if (!(e == null || e === ""))
    return isNaN(e) ? String(e) : e === "auto" ? e : `${Number(e)}${t}`;
}
function ca(e, t) {
  return t === 0 ? e : e.slice(0, t);
}
var _t = {
  name: "ResizeObserver",
  mounted(e, { modifiers: t, value: n }) {
    if (!n) return;
    const r = {};
    (r.callback = n),
      (r.size = { width: 0, height: 0 }),
      (r.observer = new ResizeObserver((f) => {
        const b = f[0].contentRect;
        (b.width !== r.size.width || b.height !== r.size.height) &&
          ((r.size.width = b.width),
          (r.size.height = b.height),
          r.callback(r.size));
      })),
      r.observer.observe(e),
      (e.__onResizeObserver = r);
  },
  beforeUnmount(e) {
    if (!e.__onResizeObserver) return;
    const { observer: t } = e.__onResizeObserver;
    t.unobserve(e), delete e.__onResizeObserver;
  },
};
function Yt(e, t, { scrollArea: n, pane: r }) {
  if (!t) {
    const W =
      "[error: renderCalendar] no renderFunc has been supplied to useCalendar";
    throw (console.error(W), new Error(W));
  }
  const f = St({ width: 0, height: 0 }),
    b = g(null);
  function s({ width: W, height: O }) {
    (f.width = W), (f.height = O);
  }
  const D = E(() =>
    e.noScroll !== !0 && n.value && r.value && f.height
      ? n.value.offsetWidth - r.value.offsetWidth
      : 0
  );
  function m() {}
  function H() {
    const W = {
      ref: b,
      role: "complementary",
      lang: e.locale,
      class: {
        "q-calendar--dark": e.dark === !0,
        "q-calendar": !0,
        "q-calendar__bordered": e.bordered === !0,
      },
    };
    return Wt(i("div", W, [t()]), [[_t, s]]);
  }
  return { rootRef: b, scrollWidth: D, __initCalendar: m, __renderCalendar: H };
}
const Qt = {
  modelValue: {
    type: String,
    default: et(),
    validator: (e) => e === "" || Ha(e),
  },
  weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
  dateType: {
    type: String,
    default: "round",
    validator: (e) => ["round", "rounded", "square"].includes(e),
  },
  weekdayAlign: {
    type: String,
    default: "center",
    validator: (e) => ["left", "center", "right"].includes(e),
  },
  dateAlign: {
    type: String,
    default: "center",
    validator: (e) => ["left", "center", "right"].includes(e),
  },
  bordered: Boolean,
  dark: Boolean,
  noAria: Boolean,
  noActiveDate: Boolean,
  noHeader: Boolean,
  noScroll: Boolean,
  shortWeekdayLabel: Boolean,
  noDefaultHeaderText: Boolean,
  noDefaultHeaderBtn: Boolean,
  minWeekdayLabel: { type: [Number, String], default: 1 },
  weekdayBreakpoints: {
    type: Array,
    default: () => [75, 35],
    validator: (e) => e.length === 2,
  },
  locale: { type: String, default: "en-US" },
  animated: Boolean,
  transitionPrev: { type: String, default: "slide-right" },
  transitionNext: { type: String, default: "slide-left" },
  disabledDays: Array,
  disabledBefore: String,
  disabledAfter: String,
  disabledWeekdays: { type: Array, default: () => [] },
  dragEnterFunc: { type: Function },
  dragOverFunc: { type: Function },
  dragLeaveFunc: { type: Function },
  dropFunc: { type: Function },
  selectedDates: { type: Array, default: () => [] },
  selectedStartEndDates: { type: Array, default: () => [] },
  hoverable: Boolean,
  focusable: Boolean,
  focusType: {
    type: Array,
    default: ["date"],
    validator: (e) => {
      let t = !0;
      return (
        e.forEach((n) => {
          [
            "day",
            "date",
            "weekday",
            "interval",
            "time",
            "resource",
            "task",
          ].includes(n) !== !0 && (t = !1);
        }),
        t
      );
    },
  },
};
function Xt(e, { startDate: t, endDate: n, times: r }) {
  const f = E(() => xn(e.weekdays)),
    b = E(() => Ee(t.value)),
    s = E(() => (n.value === "0000-00-00" ? Z(b.value) : Ee(n.value))),
    D = E(() => {
      const F = { timeZone: "UTC", day: "numeric" };
      return Kt(e.locale, (B, T) => F);
    }),
    m = E(() => {
      const F = { timeZone: "UTC", weekday: "long" },
        B = { timeZone: "UTC", weekday: "short" };
      return Kt(e.locale, (T, x) => (x ? B : F));
    }),
    H = E(() => {
      const F = { timeZone: "UTC", dateStyle: "full" };
      return Kt(e.locale, (B) => F);
    });
  function W(F, B) {
    return F && F.length > 0 && F.includes(B.date);
  }
  function O(F, B) {
    const T = { firstDay: !1, betweenDays: !1, lastDay: !1 };
    if (F && F.length === 2) {
      const x = ne(B),
        $ = ne(ke(F[0])),
        he = ne(ke(F[1]));
      (T.firstDay = $ === x),
        (T.lastDay = he === x),
        (T.betweenDays = $ < x && he > x);
    }
    return T;
  }
  function M(F, B = !1, T = [], x = [], $ = !1) {
    const he = W(T, F),
      { firstDay: be, lastDay: _e, betweenDays: p } = O(x, F);
    return {
      "q-past-day":
        be !== !0 && p !== !0 && _e !== !0 && he !== !0 && B !== !0 && F.past,
      "q-future-day":
        be !== !0 && p !== !0 && _e !== !0 && he !== !0 && B !== !0 && F.future,
      "q-outside": B,
      "q-current-day": F.current,
      "q-selected": he,
      "q-range-first": be === !0,
      "q-range": p === !0,
      "q-range-last": _e === !0,
      "q-range-hover": $ === !0 && (be === !0 || _e === !0 || p === !0),
      "q-disabled-day disabled": F.disabled === !0,
    };
  }
  function z(F) {
    return Ut(F, e.weekdays, r.today);
  }
  function Z(F) {
    return xt(F, e.weekdays, r.today);
  }
  function V(F) {}
  return {
    weekdaySkips: f,
    parsedStart: b,
    parsedEnd: s,
    dayFormatter: D,
    weekdayFormatter: m,
    ariaDateFormatter: H,
    arrayHasDate: W,
    checkDays: O,
    getRelativeClasses: M,
    startOfWeek: z,
    endOfWeek: Z,
    dayStyleDefault: V,
  };
}
function Na(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function Bn(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function Nn(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Pn(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function pa(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    f = Nn(e);
  if (n <= 0) {
    f !== t && Na(e, t);
    return;
  }
  requestAnimationFrame((b) => {
    const s = b - r,
      D = f + ((t - f) / Math.max(s, n)) * s;
    Na(e, D), D !== t && pa(e, t, n - s, b);
  });
}
function en(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    f = Pn(e);
  if (n <= 0) {
    f !== t && Bn(e, t);
    return;
  }
  requestAnimationFrame((b) => {
    const s = b - r,
      D = f + ((t - f) / Math.max(s, n)) * s;
    setHorizontalScroll(e, D), D !== t && en(e, t, n - s, b);
  });
}
const xa = {
    view: {
      type: String,
      validator: (e) => ["day", "week", "month", "month-interval"].includes(e),
      default: "day",
    },
    shortIntervalLabel: Boolean,
    intervalHeight: { type: [Number, String], default: 40, validator: Qe },
    intervalMinutes: { type: [Number, String], default: 60, validator: Qe },
    intervalStart: { type: [Number, String], default: 0, validator: Qe },
    intervalCount: { type: [Number, String], default: 24, validator: Qe },
    intervalStyle: { type: Function, default: null },
    intervalClass: { type: Function, default: null },
    weekdayStyle: { type: Function, default: null },
    weekdayClass: { type: Function, default: null },
    showIntervalLabel: { type: Function, default: null },
    hour24Format: Boolean,
    timeClicksClamped: Boolean,
    dateHeader: {
      type: String,
      default: "stacked",
      validator: (e) => ["stacked", "inline", "inverted"].includes(e),
    },
  },
  tn = {
    view: {
      type: String,
      validator: (e) => ["day", "week", "month", "month-interval"].includes(e),
      default: "day",
    },
    modelResources: { type: Array },
    resourceKey: { type: [String, Number], default: "id" },
    resourceLabel: { type: [String, Number], default: "label" },
    resourceHeight: { type: [Number, String], default: 0, validator: Qe },
    resourceMinHeight: { type: [Number, String], default: 70, validator: Qe },
    resourceStyle: { type: Function, default: null },
    resourceClass: { type: Function, default: null },
    weekdayStyle: { type: Function, default: null },
    weekdayClass: { type: Function, default: null },
    dayStyle: { type: Function, default: null },
    dayClass: { type: Function, default: null },
    dateHeader: {
      type: String,
      default: "stacked",
      validator: (e) => ["stacked", "inline", "inverted"].includes(e),
    },
  },
  Kn = {
    view: {
      type: String,
      validator: (e) => ["day", "week", "month", "month-interval"].includes(e),
      default: "day",
    },
    leftColumnOptions: { type: Array },
    rightColumnOptions: { type: Array },
    columnOptionsId: { type: String },
    columnOptionsLabel: { type: String },
    weekdayStyle: { type: Function, default: null },
    weekdayClass: { type: Function, default: null },
    dayStyle: { type: Function, default: null },
    dayClass: { type: Function, default: null },
    dateHeader: {
      type: String,
      default: "stacked",
      validator: (e) => ["stacked", "inline", "inverted"].includes(e),
    },
    dayHeight: { type: [Number, String], default: 0, validator: Qe },
    dayMinHeight: { type: [Number, String], default: 40, validator: Qe },
  },
  an = {
    modelResources: { type: Array },
    resourceKey: { type: [String, Number], default: "id" },
    resourceLabel: { type: [String, Number], default: "label" },
    resourceHeight: { type: [Number, String], default: 0, validator: Qe },
    resourceMinHeight: { type: [Number, String], default: 70, validator: Qe },
    resourceStyle: { type: Function, default: null },
    resourceClass: { type: Function, default: null },
    cellWidth: { type: [Number, String], default: 100 },
    intervalHeaderHeight: {
      type: [Number, String],
      default: 20,
      validator: Qe,
    },
    noSticky: Boolean,
  };
function ma(
  e,
  {
    weekdaySkips: t,
    times: n,
    scrollArea: r,
    parsedStart: f,
    parsedEnd: b,
    maxDays: s,
    size: D,
    headerColumnRef: m,
  }
) {
  const H = E(() => parseInt(e.intervalStart, 10)),
    W = E(() => parseInt(e.intervalMinutes, 10)),
    O = E(() => parseInt(e.intervalCount, 10)),
    M = E(() => parseFloat(e.intervalHeight)),
    z = E(() => {
      let h = 0;
      return (
        e.cellWidth
          ? (h = e.cellWidth)
          : D.width > 0 &&
            m.value &&
            (h =
              m.value.offsetWidth /
              (e.columnCount > 1 ? e.columnCount : s.value)),
        h
      );
    }),
    Z = E(() => H.value * W.value),
    V = E(() => O.value * M.value),
    F = E(() => O.value * z.value),
    B = E(() => he(f.value)),
    T = E(() => be(b.value)),
    x = E(() =>
      ha(
        f.value,
        b.value,
        n.today,
        t.value,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        s.value
      )
    ),
    $ = E(() => x.value.map((h) => An(h, H.value, W.value, O.value, n.now)));
  function he(h) {
    return Ut(h, e.weekdays, n.today);
  }
  function be(h) {
    return xt(h, e.weekdays, n.today);
  }
  function _e(h, X) {
    return h && h.length > 0 && h.includes(Wa(X));
  }
  function p(h, X) {
    const K = { firstDay: !1, betweenDays: !1, lastDay: !1 };
    if (h && h.length === 2) {
      const ee = Ft(X),
        oe = Ft(ke(h[0])),
        se = Ft(ke(h[1]));
      (K.firstDay = oe === ee),
        (K.lastDay = se === ee),
        (K.betweenDays = oe < ee && se > ee);
    }
    return K;
  }
  function N(h, X = [], K = []) {
    const ee = _e(X, h),
      { firstDay: oe, lastDay: se, betweenDays: ue } = p(K, h);
    return {
      "q-selected": ee,
      "q-range-first": oe === !0,
      "q-range": ue === !0,
      "q-range-last": se === !0,
      "q-disabled-interval disabled": h.disabled === !0,
    };
  }
  function j(h, X = [], K = []) {
    return [];
  }
  const Q = E(() => {
      const h = {
          timeZone: "UTC",
          hour12: !e.hour24Format,
          hour: "2-digit",
          minute: "2-digit",
        },
        X = {
          timeZone: "UTC",
          hour12: !e.hour24Format,
          hour: "numeric",
          minute: "2-digit",
        },
        K = { timeZone: "UTC", hour12: !e.hour24Format, hour: "numeric" };
      return Kt(e.locale, (ee, oe) => (oe ? (ee.minute === 0 ? K : X) : h));
    }),
    k = E(() => {
      const h = { timeZone: "UTC", dateStyle: "full", timeStyle: "short" };
      return Kt(e.locale, (X) => h);
    });
  function We(h) {
    const X = $.value[0][0];
    return !(X.hour === h.hour && X.minute === h.minute) && h.minute === 0;
  }
  function xe(h) {}
  function Ne(h) {}
  function it(h, X, K = !1, ee = void 0) {
    let oe = Se(X);
    const se = h.currentTarget.getBoundingClientRect(),
      ue = h,
      Fe = h,
      re = ue.changedTouches || ue.touches,
      Re = ((re && re[0] ? re[0].clientY : Fe.clientY) - se.top) / M.value,
      Te = Math.floor((K ? Math.floor(Re) : Re) * W.value);
    return Te !== 0 && (oe = Me(oe, { minute: Te })), ee && qt(oe, ee, !0), oe;
  }
  function tt(h, X, K = !1, ee = void 0) {
    let oe = Se(X);
    const se = h.currentTarget.getBoundingClientRect(),
      ue = h,
      Fe = h,
      re = ue.changedTouches || ue.touches,
      Re = ((re && re[0] ? re[0].clientY : Fe.clientY) - se.top) / M.value,
      Te = Math.floor((K ? Math.floor(Re) : Re) * W.value);
    return Te !== 0 && (oe = Me(oe, { minute: Te })), ee && qt(oe, ee, !0), oe;
  }
  function Xe(h, X, K = !1, ee = void 0) {
    let oe = Se(X);
    const se = h.currentTarget.getBoundingClientRect(),
      ue = h,
      Fe = h,
      re = ue.changedTouches || ue.touches,
      Re = ((re && re[0] ? re[0].clientX : Fe.clientX) - se.left) / z.value,
      Te = Math.floor((K ? Math.floor(Re) : Re) * W.value);
    return Te !== 0 && (oe = Me(oe, { minute: Te })), ee && qt(oe, ee, !0), oe;
  }
  function Ge(h, X) {
    const K = { timestamp: h };
    return (
      (K.timeStartPos = ce),
      (K.timeDurationHeight = Le),
      X !== void 0 && (K.columnIndex = X),
      K
    );
  }
  function De(h, X) {
    const K = { timestamp: Se(h) };
    return (
      (K.timeStartPosX = G),
      (K.timeDurationWidth = qe),
      X !== void 0 && (K.index = X),
      K
    );
  }
  function He(h, X = 0) {
    const K = ce(h);
    return K === !1 || !r.value ? !1 : (pa(r.value, K, X), !0);
  }
  function Oe(h, X = 0) {
    const K = G(h);
    return K === !1 || !r.value ? !1 : (en(r.value, K, X), !0);
  }
  function Le(h) {
    return (h / W.value) * M.value;
  }
  function qe(h) {
    return (h / W.value) * z.value;
  }
  function nt(h) {
    return (parseInt(h, 10) * W.value) / M.value;
  }
  function ge(h) {
    return (parseInt(h, 10) * W.value) / z.value;
  }
  function ce(h, X = !0) {
    const K = Ra(h);
    if (K === !1) return !1;
    const ee = Z.value,
      oe = O.value * W.value;
    let ue = ((K - ee) / oe) * V.value;
    return X && (ue < 0 && (ue = 0), ue > V.value && (ue = V.value)), ue;
  }
  function G(h, X = !0) {
    const K = Ra(h);
    if (K === !1) return !1;
    const ee = Z.value,
      oe = O.value * W.value;
    let ue = ((K - ee) / oe) * F.value;
    return X && (ue < 0 && (ue = 0), ue > F.value && (ue = F.value)), ue;
  }
  return {
    parsedIntervalStart: H,
    parsedIntervalMinutes: W,
    parsedIntervalCount: O,
    parsedIntervalHeight: M,
    parsedCellWidth: z,
    parsedStartMinute: Z,
    bodyHeight: V,
    bodyWidth: F,
    parsedWeekStart: B,
    parsedWeekEnd: T,
    days: x,
    intervals: $,
    intervalFormatter: Q,
    ariaDateTimeFormatter: k,
    arrayHasDateTime: _e,
    checkIntervals: p,
    getIntervalClasses: N,
    getResourceClasses: j,
    showIntervalLabelDefault: We,
    showResourceLabelDefault: xe,
    styleDefault: Ne,
    getTimestampAtEventInterval: it,
    getTimestampAtEvent: tt,
    getTimestampAtEventX: Xe,
    getScopeForSlot: Ge,
    getScopeForSlotX: De,
    scrollToTime: He,
    scrollToTimeX: Oe,
    timeDurationHeight: Le,
    timeDurationWidth: qe,
    heightToMinutes: nt,
    widthToMinutes: ge,
    timeStartPos: ce,
    timeStartPosX: G,
  };
}
const ka = {
    columnCount: { type: [Number, String], default: 0, validator: Qe },
    columnIndexStart: { type: [Number, String], default: 0, validator: Qe },
  },
  oa = { maxDays: { type: Number, default: 1 } },
  Lt = {
    now: { type: String, validator: (e) => e === "" || Ha(e), default: "" },
  };
function jt(e) {
  const t = St({ now: Ee("0000-00-00 00:00"), today: Ee("0000-00-00") }),
    n = E(() => (e.now ? Ee(e.now) : b()));
  ae(
    () => n,
    (m) => f()
  );
  function r() {
    (t.now.current = t.today.current = !0),
      (t.now.past = t.today.past = !1),
      (t.now.future = t.today.future = !1);
  }
  function f() {
    const m = n.value || b();
    s(m, t.now), D(m, t.now), s(m, t.today);
  }
  function b() {
    return Fn(new Date());
  }
  function s(m, H) {
    m.date !== H.date &&
      ((H.year = m.year),
      (H.month = m.month),
      (H.day = m.day),
      (H.weekday = m.weekday),
      (H.date = m.date));
  }
  function D(m, H) {
    m.time !== H.time &&
      ((H.hour = m.hour), (H.minute = m.minute), (H.time = m.time));
  }
  return {
    times: t,
    parsedNow: n,
    setCurrent: r,
    updateCurrent: f,
    getNow: b,
    updateDay: s,
    updateTime: D,
  };
}
function Zt(e, { parsedView: t, parsedValue: n, times: r }) {
  return {
    renderValues: E(() => {
      const b = n.value;
      let s = e.maxDays,
        D = b,
        m = b;
      switch (t.value) {
        case "month":
          (D = ia(b)), (m = zt(b)), (s = kt(D.year, D.month));
          break;
        case "week":
        case "week-agenda":
        case "week-scheduler":
          (D = Ut(b, e.weekdays, r.today)),
            (m = xt(D, e.weekdays, r.today)),
            (s = e.weekdays.length);
          break;
        case "day":
        case "scheduler":
        case "agenda":
          (m = Ma(Se(m), wt, s > 1 ? s - 1 : s, e.weekdays)), ht(m);
          break;
        case "month-interval":
        case "month-scheduler":
        case "month-agenda":
          (D = ia(b)), (m = zt(b)), ht(m), (s = kt(D.year, D.month));
          break;
        case "resource":
          (s = 1), (m = Ma(Se(m), wt, s, e.weekdays)), ht(m);
          break;
      }
      return { start: D, end: m, maxDays: s };
    }),
  };
}
const zn = (e) => e.replace(/(-\w)/g, (t) => t[1].toUpperCase());
let qa, nn;
function un(e, t) {
  const n = {};
  for (const r in e) {
    const f = e[r],
      b = zn("on-" + r);
    if (qa === void 0) {
      console.warn("$listeners has not been set up");
      return;
    }
    if (qa.value[b] === void 0) continue;
    const s = "on" + f.event.charAt(0).toUpperCase() + f.event.slice(1),
      D = (m) => {
        const H = m;
        return (
          (f.button === void 0 || (H.buttons > 0 && H.button === f.button)) &&
            (f.prevent && H.preventDefault(),
            f.stop && H.stopPropagation(),
            nn(r, t(H, r))),
          f.result
        );
      };
    s in n
      ? Array.isArray(n[s])
        ? n[s].push(D)
        : (n[s] = [n[s], D])
      : (n[s] = D);
  }
  return n;
}
function Vn(e, t) {
  return un(Aa(e), t);
}
function Aa(e) {
  return {
    ["click" + e]: { event: "click" },
    ["contextmenu" + e]: { event: "contextmenu", prevent: !0, result: !1 },
    ["mousedown" + e]: { event: "mousedown" },
    ["mousemove" + e]: { event: "mousemove" },
    ["mouseup" + e]: { event: "mouseup" },
    ["mouseenter" + e]: { event: "mouseenter" },
    ["mouseleave" + e]: { event: "mouseleave" },
    ["touchstart" + e]: { event: "touchstart" },
    ["touchmove" + e]: { event: "touchmove" },
    ["touchend" + e]: { event: "touchend" },
  };
}
function Ce(e) {
  return Object.keys(Aa(e));
}
function Gt(e, t) {
  return (
    (nn = e),
    (qa = t),
    {
      getMouseEventHandlers: un,
      getDefaultMouseEventHandlers: Vn,
      getMouseEventName: Aa,
      getRawMouseEvents: Ce,
    }
  );
}
const Jt = ["moved"];
function pt(
  e,
  {
    parsedView: t,
    parsedValue: n,
    weekdaySkips: r,
    direction: f,
    maxDays: b,
    times: s,
    emittedValue: D,
    emit: m,
  }
) {
  function H(W = 1) {
    if (W === 0) {
      D.value = et();
      return;
    }
    let O = Se(n.value);
    const M = W > 0,
      z = M ? wt : Ta,
      Z = M ? Dn : ga;
    let V = M ? W : -W;
    f.value = M ? "next" : "prev";
    const F = r.value.filter((B) => B !== 0).length;
    for (; --V >= 0; )
      switch (t.value) {
        case "month":
          for (O.day = Z, z(O), Ia(O); r.value[O.weekday] === 0; )
            O = Me(O, { day: M === !0 ? 1 : -1 });
          break;
        case "week":
        case "week-agenda":
        case "week-scheduler":
          Pt(O, z, F, e.weekdays);
          break;
        case "day":
        case "scheduler":
        case "agenda":
          Pt(O, z, b.value, e.weekdays);
          break;
        case "month-interval":
        case "month-agenda":
        case "month-scheduler":
          (O.day = Z), z(O);
          break;
        case "resource":
          Pt(O, z, b.value, e.weekdays);
          break;
      }
    Ia(O), ht(O), Hn(O), qt(O, s.now), (D.value = O.date), m("moved", O);
  }
  return { move: H };
}
const $n = /^on[A-Z]/;
function ea(e = At()) {
  return {
    emitListeners: E(() => {
      const t = {};
      return (
        e.vnode !== void 0 &&
          e.vnode !== null &&
          e.vnode.props !== null &&
          Object.keys(e.vnode.props).forEach((n) => {
            $n.test(n) === !0 && (t[n] = !0);
          }),
        t
      );
    }),
  };
}
function Ze() {
  return [i("span", { ariaHidden: "true", class: "q-calendar__focus-helper" })];
}
function sa(e, t, n) {
  const r = e.focusable === !0 && e.focusType.includes("date") === !0;
  return (
    (t.tabindex = r === !0 ? 0 : -1), i("button", t, [n, r === !0 && Ze()])
  );
}
const fa = { cellWidth: [Number, String] };
function wa(e) {
  return { isSticky: E(() => e.cellWidth !== void 0) };
}
const ta = ["change"];
function aa(e, { days: t, lastStart: n, lastEnd: r }) {
  function f() {
    if (t.value && t.value.length > 0) {
      const b = t.value[0].date,
        s = t.value[t.value.length - 1].date;
      if (
        n.value === null ||
        r.value === null ||
        b !== n.value ||
        s !== r.value
      )
        return (
          (n.value = b),
          (r.value = s),
          e("change", { start: b, end: s, days: t.value }),
          !0
        );
    }
    return !1;
  }
  return { checkChange: f };
}
function Rt() {
  function e(n, { bubbles: r = !1, cancelable: f = !1 } = {}) {
    try {
      return new CustomEvent(n, { bubbles: r, cancelable: f });
    } catch {
      const s = document.createEvent("Event");
      return s.initEvent(n, r, f), s;
    }
  }
  function t(n, r) {
    return [].concat(r).includes(n.keyCode);
  }
  return { createEvent: e, isKeyCode: t };
}
const { isKeyCode: Pa } = Rt(),
  It = { useNavigation: Boolean };
function na(
  e,
  {
    rootRef: t,
    focusRef: n,
    focusValue: r,
    datesRef: f,
    days: b,
    parsedView: s,
    parsedValue: D,
    emittedValue: m,
    weekdaySkips: H,
    direction: W,
    times: O,
  }
) {
  let M = !1;
  cn(() => {
    Z();
  }),
    ae(
      () => e.useNavigation,
      (Q) => {
        Q === !0 ? z() : Z();
      }
    ),
    e.useNavigation === !0 && z();
  function z() {
    M !== !0 &&
      document &&
      ((M = !0),
      document.addEventListener("keyup", T),
      document.addEventListener("keydown", B));
  }
  function Z() {
    document &&
      (document.removeEventListener("keyup", T),
      document.removeEventListener("keydown", B),
      (M = !1));
  }
  function V(Q) {
    if (Q === void 0) return !1;
    if (document) {
      const k = document.activeElement;
      if (k !== document.body && t.value.contains(k) === !0) return !0;
    }
    return !1;
  }
  function F() {
    let Q = 0;
    const k = setInterval(() => {
      f.value[n.value]
        ? (f.value[n.value].focus(),
          (++Q === 50 || document.activeElement === f.value[n.value]) &&
            clearInterval(k))
        : clearInterval(k);
    }, 250);
  }
  function B(Q) {
    V(Q) &&
      Pa(Q, [33, 34, 35, 36, 37, 38, 39, 40]) &&
      (Q.stopPropagation(), Q.preventDefault());
  }
  function T(Q) {
    if (V(Q) && Pa(Q, [33, 34, 35, 36, 37, 38, 39, 40]))
      switch (Q.keyCode) {
        case 33:
          _e();
          break;
        case 34:
          p();
          break;
        case 35:
          j();
          break;
        case 36:
          N();
          break;
        case 37:
          he();
          break;
        case 38:
          x();
          break;
        case 39:
          be();
          break;
        case 40:
          $();
          break;
      }
  }
  function x(Q) {
    let k = Se(r.value);
    if (s.value === "month") {
      if (((k = Me(k, { day: -7 })), r.value.month !== k.month)) {
        (W.value = "prev"), (m.value = k.date);
        return;
      }
    } else
      (s.value === "day" ||
        s.value === "week" ||
        s.value === "month-interval") &&
        (k = Me(k, { minute: parseInt(e.intervalMinutes) }));
    (W.value = "prev"), (n.value = k.date);
  }
  function $(Q) {
    let k = Se(r.value);
    if (s.value === "month") {
      if (((k = Me(k, { day: 7 })), r.value.month !== k.month)) {
        (W.value = "next"), (m.value = k.date);
        return;
      }
    } else
      (s.value === "day" ||
        s.value === "week" ||
        s.value === "month-interval") &&
        (k = Me(k, { minute: parseInt(e.intervalMinutes) }));
    (W.value = "next"), (n.value = k.date);
  }
  function he(Q) {
    let k = Se(r.value);
    W.value = "prev";
    do k = Me(k, { day: -1 });
    while (H.value[k.weekday] === 0);
    if (s.value === "month" || s.value === "month-interval") {
      if (r.value.month !== k.month) {
        m.value = k.date;
        return;
      }
    } else if (s.value === "week") {
      if (k.weekday > r.value.weekday) {
        m.value = k.date;
        return;
      }
    } else if (s.value === "day") {
      m.value = k.date;
      return;
    }
    n.value = k.date;
  }
  function be(Q) {
    let k = Se(r.value);
    W.value = "next";
    do k = Me(k, { day: 1 });
    while (H.value[k.weekday] === 0);
    if (s.value === "month" || s.value === "month-interval") {
      if (r.value.month !== k.month) {
        m.value = k.date;
        return;
      }
    } else if (s.value === "week") {
      if (k.weekday < r.value.weekday) {
        m.value = k.date;
        return;
      }
    } else if (s.value === "day") {
      m.value = k.date;
      return;
    }
    n.value = k.date;
  }
  function _e(Q) {
    let k = Se(r.value);
    if (s.value === "month" || s.value === "month-interval") {
      k = Me(k, { month: -1 });
      const We = k.day <= 15 ? 1 : -1;
      for (; H.value[k.weekday] === 0; ) k = Me(k, { day: We });
    } else
      s.value === "day"
        ? (k = Me(k, { day: -1 }))
        : s.value === "week" && (k = Me(k, { day: -7 }));
    (W.value = "prev"), (n.value = k.date);
  }
  function p(Q) {
    let k = Se(r.value);
    if (s.value === "month" || s.value === "month-interval") {
      k = Me(k, { month: 1 });
      const We = k.day <= 15 ? 1 : -1;
      for (; H.value[k.weekday] === 0; ) k = Me(k, { day: We });
    } else
      s.value === "day"
        ? (k = Me(k, { day: 1 }))
        : s.value === "week" && (k = Me(k, { day: 7 }));
    (W.value = "next"), (n.value = k.date);
  }
  function N(Q) {
    let k = Se(r.value);
    for (
      s.value === "month" || s.value === "month-interval"
        ? (k = ia(k))
        : s.value === "week" && (k = Ut(k, e.weekdays, O.today));
      H.value[k.weekday] === 0;

    )
      k = Me(k, { day: -1 });
    n.value = k.date;
  }
  function j(Q) {
    let k = Se(r.value);
    for (
      s.value === "month" || s.value === "month-interval"
        ? (k = zt(k))
        : s.value === "week" && (k = xt(k, e.weekdays, O.today));
      H.value[k.weekday] === 0;

    )
      k = Me(k, { day: -1 });
    n.value = k.date;
  }
  return { startNavigation: z, endNavigation: Z, tryFocus: F };
}
var Un = Et({
    name: "QCalendarAgenda",
    directives: [_t],
    props: { ...Qt, ...Kn, ...ka, ...oa, ...Lt, ...fa, ...It },
    emits: [
      "update:model-value",
      ...ta,
      ...Jt,
      ...Ce("-date"),
      ...Ce("-head-day"),
      ...Ce("-time"),
    ],
    setup(e, { slots: t, emit: n, expose: r }) {
      const f = g(null),
        b = g(null),
        s = g(null),
        D = g(null),
        m = g(null),
        H = g({}),
        W = g({}),
        O = g({}),
        M = g("next"),
        z = g(et()),
        Z = g("0000-00-00"),
        V = g(0),
        F = g(e.modelValue),
        B = St({ width: 0, height: 0 }),
        T = g(!1),
        x = g(null),
        $ = g(null);
      ae(
        () => e.view,
        () => {
          V.value = 0;
        }
      );
      const he = E(() => (e.view === "month" ? "month-interval" : e.view)),
        be = At();
      if (be === null) throw new Error("current instance is null");
      const { emitListeners: _e } = ea(be),
        { isSticky: p } = wa(e);
      ae(p, (c) => {});
      const { times: N, setCurrent: j, updateCurrent: Q } = jt(e);
      Q(), j();
      const {
          weekdaySkips: k,
          parsedStart: We,
          parsedEnd: xe,
          dayFormatter: Ne,
          weekdayFormatter: it,
          ariaDateFormatter: tt,
          dayStyleDefault: Xe,
          getRelativeClasses: Ge,
        } = Xt(e, { startDate: z, endDate: Z, times: N }),
        De = E(() => Ee(e.modelValue, N.now) || We.value || N.today);
      (m.value = De.value), (D.value = De.value.date);
      const { renderValues: He } = Zt(e, {
          parsedView: he,
          parsedValue: De,
          times: N,
        }),
        {
          rootRef: Oe,
          scrollWidth: Le,
          __initCalendar: qe,
          __renderCalendar: nt,
        } = Yt(e, Be, { scrollArea: f, pane: b }),
        {
          days: ge,
          parsedCellWidth: ce,
          getScopeForSlot: G,
        } = ma(e, {
          weekdaySkips: k,
          times: N,
          scrollArea: f,
          parsedStart: We,
          parsedEnd: xe,
          maxDays: V,
          size: B,
          headerColumnRef: s,
        }),
        { move: h } = pt(e, {
          parsedView: he,
          parsedValue: De,
          weekdaySkips: k,
          direction: M,
          maxDays: V,
          times: N,
          emittedValue: F,
          emit: n,
        }),
        { getDefaultMouseEventHandlers: X } = Gt(n, _e),
        { checkChange: K } = aa(n, { days: ge, lastStart: x, lastEnd: $ }),
        { isKeyCode: ee } = Rt(),
        { tryFocus: oe } = na(e, {
          rootRef: Oe,
          focusRef: D,
          focusValue: m,
          datesRef: H,
          days: ge,
          parsedView: he,
          parsedValue: De,
          emittedValue: F,
          weekdaySkips: k,
          direction: M,
          times: N,
        }),
        se = E(() =>
          ge.value.length +
            (ue.value === !0 ? e.leftColumnOptions.length : 0) +
            (Fe.value === !0 ? e.rightColumnOptions.length : 0) +
            ge.value.length ===
            1 && parseInt(e.columnCount, 10) > 0
            ? parseInt(e.columnCount, 10)
            : 0
        ),
        ue = E(
          () =>
            e.leftColumnOptions !== void 0 && Array.isArray(e.leftColumnOptions)
        ),
        Fe = E(
          () =>
            e.rightColumnOptions !== void 0 &&
            Array.isArray(e.rightColumnOptions)
        ),
        re = E(() => {
          if (Oe.value) {
            const c = B.width || Oe.value.getBoundingClientRect().width;
            if (c && se.value) return (c - Le.value) / se.value + "px";
          }
          return 100 / se.value + "%";
        });
      ae([ge], K, { deep: !0, immediate: !0 }),
        ae(
          () => e.modelValue,
          (c, C) => {
            if (F.value !== c) {
              if (e.animated === !0) {
                const l = ne(ke(c)),
                  _ = ne(ke(C));
                M.value = l >= _ ? "next" : "prev";
              }
              F.value = c;
            }
            D.value = c;
          }
        ),
        ae(F, (c, C) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const l = ne(ke(c)),
                _ = ne(ke(C));
              M.value = l >= _ ? "next" : "prev";
            }
            n("update:model-value", c);
          }
        }),
        ae(D, (c) => {
          c && (m.value = Ee(c));
        }),
        ae(m, (c) => {
          H.value[D.value] ? H.value[D.value].focus() : oe();
        }),
        ae(
          () => e.maxDays,
          (c) => {
            V.value = c;
          }
        ),
        Vt(() => {
          H.value = {};
        }),
        Ot(() => {
          qe();
        });
      function $e() {
        F.value = et();
      }
      function Re(c = 1) {
        h(c);
      }
      function Te(c = 1) {
        h(-c);
      }
      function at({ width: c, height: C }) {
        (B.width = c), (B.height = C);
      }
      function ze(c) {
        return c.date === F.value;
      }
      function Ae(c, C) {
        const l = t["head-column"],
          _ = { column: c, index: C, days: ge.value },
          u = p.value === !0 ? e.cellWidth : re.value,
          d = e.focusable === !0 && e.focusType.includes("weekday"),
          v = e.columnOptionsId !== void 0 ? c[e.columnOptionsId] : void 0,
          w = { maxWidth: u, width: u };
        return i(
          "div",
          {
            key: v,
            tabindex: d === !0 ? 0 : -1,
            class: {
              "q-calendar-agenda__head--day": !0,
              "q-column-day": !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": d === !0,
            },
            style: w,
            onDragenter: (a) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(a, "head-column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            onDragover: (a) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(a, "head-column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            onDragleave: (a) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(a, "head-column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            onDrop: (a) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(a, "head-column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            ...X("-head-column", (a, y) => ({
              scope: { column: c, index: C },
              event: a,
            })),
          },
          [e.noDefaultHeaderText !== !0 && gt(c), l && l(_), Ze()]
        );
      }
      function gt(c) {
        const C = t["head-column-label"],
          l = { column: c },
          _ =
            e.columnOptionsLabel !== void 0 ? c[e.columnOptionsLabel] : c.label,
          u = i(
            "div",
            {
              class: {
                "q-calendar-agenda__head--weekday": !0,
                ["q-calendar__" + e.weekdayAlign]: !0,
                ellipsis: !0,
              },
              style: { alignSelf: "center" },
            },
            [C && C({ scope: l }), !C && i("span", { class: "ellipsis" }, _)]
          );
        return e.dateHeader === "stacked"
          ? u
          : i(
              "div",
              {
                class: "q-calendar__header--inline",
                style: { height: "100%" },
              },
              [u]
            );
      }
      function Ve() {
        return i(
          "div",
          {
            roll: "presentation",
            class: {
              "q-calendar-agenda__head": !0,
              "q-calendar__sticky": p.value === !0,
            },
            style: { marginRight: Le.value + "px" },
          },
          [ft()]
        );
      }
      function ft() {
        return i(
          "div",
          { ref: s, class: { "q-calendar-agenda__head--days__column": !0 } },
          [ct(), ut()]
        );
      }
      function ct() {
        return i(
          "div",
          { class: { "q-calendar-agenda__head--days__weekdays": !0 } },
          [...ot()]
        );
      }
      function ut() {
        const c = t["head-days-events"];
        return (
          _a(() => {
            if (O.value && e.columnCount === 0 && window)
              try {
                const C = window.getComputedStyle(O.value);
                (W.value.parentElement.style.height = C.height),
                  (W.value.style.height = C.height);
              } catch {}
          }),
          i("div", { class: { "q-calendar-agenda__head--days__event": !0 } }, [
            c &&
              i(
                "div",
                {
                  ref: W,
                  style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    overflow: "hidden",
                    zIndex: 1,
                  },
                },
                [c({ scope: { days: ge.value, ref: O } })]
              ),
            ...vt(),
          ])
        );
      }
      function ot() {
        return ge.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? [
              ue.value === !0 && e.leftColumnOptions.map((c, C) => Ae(c, C)),
              Array.apply(null, new Array(parseInt(e.columnCount, 10)))
                .map((c, C) => C + parseInt(e.columnIndexStart, 10))
                .map((c) => yt(ge.value[0], c)),
              Fe.value === !0 && e.rightColumnOptions.map((c, C) => Ae(c, C)),
            ]
          : [
              ue.value === !0 && e.leftColumnOptions.map((c, C) => Ae(c, C)),
              ge.value.map((c) => yt(c)),
              Fe.value === !0 && e.rightColumnOptions.map((c, C) => Ae(c, C)),
            ];
      }
      function vt() {
        return ge.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? [
              Array.apply(null, new Array(parseInt(e.columnCount, 10)))
                .map((c, C) => C + parseInt(e.columnIndexStart, 10))
                .map((c) => rt(ge.value[0], c)),
            ]
          : ge.value.map((c) => rt(c));
      }
      function yt(c, C) {
        const l = t["head-day"],
          _ = t["head-date"],
          u = e.noActiveDate !== !0 && ze(c),
          d = G(c, C);
        (d.activeDate = u),
          (d.droppable = T.value === c.date),
          (d.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(c.weekday)
            : !1);
        const v = p.value === !0 ? e.cellWidth : re.value,
          w = e.weekdayStyle || Xe,
          a = { width: v, maxWidth: v, ...w({ scope: d }) };
        p.value === !0 && (a.minWidth = v);
        const y =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: d })
              : {},
          q = e.focusable === !0 && e.focusType.includes("weekday"),
          S = {
            key: c.date + (C !== void 0 ? "-" + C : ""),
            ref: (R) => {
              H.value[c.date] = R;
            },
            tabindex: q === !0 ? 0 : -1,
            class: {
              "q-calendar-agenda__head--day": !0,
              ...y,
              ...Ge(c),
              "q-active-date": u,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": q === !0,
            },
            style: a,
            onDragenter: (R) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(R, "head-day", d) === !0
                  ? (T.value = c.date)
                  : (T.value = ""));
            },
            onDragover: (R) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(R, "head-day", d) === !0
                  ? (T.value = c.date)
                  : (T.value = ""));
            },
            onDragleave: (R) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(R, "head-day", d) === !0
                  ? (T.value = c.date)
                  : (T.value = ""));
            },
            onDrop: (R) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(R, "head-day", d) === !0
                  ? (T.value = c.date)
                  : (T.value = ""));
            },
            onFocus: (R) => {
              q === !0 && (D.value = c.date);
            },
            ...X("-head-day", (R) => ({ scope: d, event: R })),
          };
        return i("div", S, [
          l !== void 0 && l({ scope: d }),
          l === void 0 && mt(c),
          l === void 0 && _ && _({ scope: d }),
          Ze(),
        ]);
      }
      function mt(c) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && Ue(c),
            e.noDefaultHeaderBtn !== !0 && Ie(c),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Ue(c),
                e.noDefaultHeaderBtn !== !0 && Ie(c),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Ue(c),
                e.noDefaultHeaderBtn !== !0 && Ie(c),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Ue(c),
                e.noDefaultHeaderBtn !== !0 && Ie(c),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && Ie(c),
                e.noDefaultHeaderText !== !0 && Ue(c),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && Ie(c),
                e.noDefaultHeaderText !== !0 && Ue(c),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && Ie(c),
                e.noDefaultHeaderText !== !0 && Ue(c),
              ]);
      }
      function rt(c, C) {
        const l = t["head-day-event"],
          _ = e.noActiveDate !== !0 && ze(c),
          u = G(c, C);
        (u.activeDate = _),
          (u.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(c.weekday)
            : !1);
        const d = p.value === !0 ? e.cellWidth : re.value,
          v = { width: d, maxWidth: d };
        return (
          p.value === !0 && (v.minWidth = d),
          i(
            "div",
            {
              key: "event-" + c.date + (C !== void 0 ? "-" + C : ""),
              class: {
                "q-calendar-agenda__head--day__event": !0,
                ...Ge(c),
                "q-active-date": _,
              },
              style: v,
            },
            [l && l({ scope: u })]
          )
        );
      }
      function Ue(c) {
        const C = t["head-weekday-label"],
          l = G(c);
        l.shortWeekdayLabel = e.shortWeekdayLabel;
        const _ = {
          class: {
            "q-calendar-agenda__head--weekday": !0,
            ["q-calendar__" + e.weekdayAlign]: !0,
            "q-calendar__ellipsis": !0,
          },
        };
        return i(
          "div",
          _,
          (C && C({ scope: l })) || Ye(c, e.shortWeekdayLabel)
        );
      }
      function Ye(c, C) {
        const l = it.value(
          c,
          C ||
            (e.weekdayBreakpoints[0] > 0 && ce.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar__ellipsis" },
          e.weekdayBreakpoints[1] > 0 && ce.value <= e.weekdayBreakpoints[1]
            ? ca(l, e.minWeekdayLabel)
            : l
        );
      }
      function Ie(c) {
        const C = {
          class: {
            "q-calendar-agenda__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", C, Je(c));
      }
      function Je(c) {
        const C = e.noActiveDate !== !0 && ze(c),
          l = Ne.value(c, !1),
          _ = t["head-day-label"],
          u = t["head-day-button"],
          d = {
            dayLabel: l,
            timestamp: c,
            activeDate: C,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(c.weekday)
              : !1,
          },
          v = {
            class: {
              "q-calendar-agenda__head--day__label": !0,
              "q-calendar__button": !0,
              "q-calendar__button--round": e.dateType === "round",
              "q-calendar__button--rounded": e.dateType === "rounded",
              "q-calendar__button--bordered": c.current === !0,
              "q-calendar__focusable": !0,
            },
            disabled: c.disabled,
            onKeydown: (w) => {
              c.disabled !== !0 &&
                ee(w, [13, 32]) &&
                (w.stopPropagation(), w.preventDefault());
            },
            onKeyup: (w) => {
              c.disabled !== !0 &&
                ee(w, [13, 32]) &&
                ((F.value = c.date),
                _e.value.onClickDate !== void 0 &&
                  n("click-date", { scope: d }));
            },
            ...X(
              "-date",
              (w, a) => (
                (a === "click-date" || a === "contextmenu-date") &&
                  ((F.value = c.date),
                  a === "click-date" && w.preventDefault()),
                { scope: d, event: w }
              )
            ),
          };
        return (
          e.noAria !== !0 && (v.ariaLabel = tt.value(c)),
          u ? u({ scope: d }) : sa(e, v, _ ? _({ scope: d }) : l)
        );
      }
      function pe() {
        return i("div", { class: "q-calendar-agenda__body" }, [A()]);
      }
      function A() {
        return p.value === !0
          ? i(
              "div",
              {
                ref: f,
                class: {
                  "q-calendar-agenda__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [ie()]
            )
          : e.noScroll === !0
          ? le()
          : i(
              "div",
              {
                ref: f,
                class: {
                  "q-calendar-agenda__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [le()]
            );
      }
      function le() {
        return i("div", { ref: b, class: "q-calendar-agenda__pane" }, [ie()]);
      }
      function ie() {
        const c = t["day-container"];
        return i("div", { class: "q-calendar-agenda__day-container" }, [
          p.value === !0 && e.noHeader !== !0 && Ve(),
          i(
            "div",
            {
              style: { display: "flex", flexDirection: "row", height: "100%" },
            },
            [...fe()]
          ),
          c && c({ scope: { days: ge.value } }),
        ]);
      }
      function fe() {
        return ge.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? [
              ue.value === !0 && e.leftColumnOptions.map((c, C) => me(c, C)),
              Array.apply(null, new Array(parseInt(e.columnCount, 10)))
                .map((c, C) => C + parseInt(e.columnIndexStart, 10))
                .map((c) => ye(ge.value[0], 0, c)),
              Fe.value === !0 && e.rightColumnOptions.map((c, C) => me(c, C)),
            ]
          : [
              ue.value === !0 && e.leftColumnOptions.map((c, C) => me(c, C)),
              ge.value.map((c, C) => ye(c)),
              Fe.value === !0 && e.rightColumnOptions.map((c, C) => me(c, C)),
            ];
      }
      function me(c, C) {
        const l = t.column,
          _ = { column: c, days: ge.value, index: C },
          u = p.value === !0 ? e.cellWidth : re.value,
          d = e.focusable === !0 && e.focusType.includes("day"),
          v = e.columnOptionsId !== void 0 ? c[e.columnOptionsId] : void 0;
        return i(
          "div",
          {
            key: v,
            tabindex: d === !0 ? 0 : -1,
            class: {
              "q-calendar-agenda__day": !0,
              "q-column-day": !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": d === !0,
            },
            style: { maxWidth: u, width: u },
            onDragenter: (w) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(w, "column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            onDragover: (w) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(w, "column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            onDragleave: (w) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(w, "column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            onDrop: (w) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(w, "column", _) === !0
                  ? (T.value = v)
                  : (T.value = ""));
            },
            ...X("-column", (w, a) => ({ scope: _, event: w })),
          },
          [l && l({ scope: _ })]
        );
      }
      function ye(c, C, l) {
        const _ = t.day,
          u = G(c, l),
          d = p.value === !0 ? e.cellWidth : re.value,
          v = { width: d, maxWidth: d };
        return (
          p.value === !0 && (v.minWidth = d),
          (v.height =
            parseInt(e.dayHeight, 10) > 0
              ? J(parseInt(e.dayHeight, 10))
              : "auto"),
          parseInt(e.dayMinHeight, 10) > 0 &&
            (v.minHeight = J(parseInt(e.dayMinHeight, 10))),
          i(
            "div",
            {
              key: c.date + (l !== void 0 ? ":" + l : ""),
              class: { "q-calendar-agenda__day": !0, ...Ge(c) },
              style: v,
            },
            [_ && _({ scope: u })]
          )
        );
      }
      function Be() {
        const { start: c, end: C, maxDays: l } = He.value;
        (z.value !== c.date || Z.value !== C.date || V.value !== l) &&
          ((z.value = c.date), (Z.value = C.date), (V.value = l));
        const _ = B.width > 0,
          u = Wt(
            i("div", { class: "q-calendar-agenda", key: z.value }, [
              _ === !0 && p.value !== !0 && e.noHeader !== !0 && Ve(),
              _ === !0 && pe(),
            ]),
            [[_t, at]]
          );
        if (e.animated === !0) {
          const d =
            "q-calendar--" +
            (M.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i($t, { name: d, appear: !0 }, () => u);
        }
        return u;
      }
      return (
        r({ prev: Te, next: Re, move: h, moveToToday: $e, updateCurrent: Q }),
        () => nt()
      );
    },
  }),
  Ka = Et({
    name: "QCalendarDay",
    directives: [_t],
    props: { ...Qt, ...xa, ...ka, ...oa, ...Lt, ...fa, ...It },
    emits: [
      "update:model-value",
      ...ta,
      ...Jt,
      ...Ce("-date"),
      ...Ce("-interval"),
      ...Ce("-head-intervals"),
      ...Ce("-head-day"),
      ...Ce("-time"),
    ],
    setup(e, { slots: t, emit: n, expose: r }) {
      const f = g(null),
        b = g(null),
        s = g(null),
        D = g(null),
        m = g(null),
        H = g({}),
        W = g({}),
        O = g({}),
        M = g("next"),
        z = g(e.modelValue || et()),
        Z = g("0000-00-00"),
        V = g(0),
        F = g(e.modelValue),
        B = St({ width: 0, height: 0 }),
        T = g(!1),
        x = g(!1),
        $ = g(null),
        he = g(null);
      ae(
        () => e.view,
        () => {
          V.value = 0;
        }
      );
      const be = E(() => (e.view === "month" ? "month-interval" : e.view)),
        _e = At();
      if (_e === null) throw new Error("current instance is null");
      const { emitListeners: p } = ea(_e),
        { isSticky: N } = wa(e),
        { times: j, setCurrent: Q, updateCurrent: k } = jt(e);
      k(), Q();
      const {
          weekdaySkips: We,
          parsedStart: xe,
          parsedEnd: Ne,
          dayFormatter: it,
          weekdayFormatter: tt,
          ariaDateFormatter: Xe,
          dayStyleDefault: Ge,
          getRelativeClasses: De,
        } = Xt(e, { startDate: z, endDate: Z, times: j }),
        He = E(() => Ee(e.modelValue, j.now) || xe.value || j.today);
      (m.value = He.value), (D.value = He.value.date);
      const { renderValues: Oe } = Zt(e, {
          parsedView: be,
          parsedValue: He,
          times: j,
        }),
        {
          rootRef: Le,
          scrollWidth: qe,
          __initCalendar: nt,
          __renderCalendar: ge,
        } = Yt(e, lt, { scrollArea: f, pane: b }),
        {
          days: ce,
          intervals: G,
          intervalFormatter: h,
          ariaDateTimeFormatter: X,
          parsedCellWidth: K,
          getIntervalClasses: ee,
          showIntervalLabelDefault: oe,
          styleDefault: se,
          getTimestampAtEventInterval: ue,
          getTimestampAtEvent: Fe,
          getScopeForSlot: re,
          scrollToTime: $e,
          heightToMinutes: Re,
          timeDurationHeight: Te,
          timeStartPos: at,
        } = ma(e, {
          weekdaySkips: We,
          times: j,
          scrollArea: f,
          parsedStart: xe,
          parsedEnd: Ne,
          maxDays: V,
          size: B,
          headerColumnRef: s,
        }),
        { move: ze } = pt(e, {
          parsedView: be,
          parsedValue: He,
          weekdaySkips: We,
          direction: M,
          maxDays: V,
          times: j,
          emittedValue: F,
          emit: n,
        }),
        { getDefaultMouseEventHandlers: Ae } = Gt(n, p),
        { checkChange: gt } = aa(n, { days: ce, lastStart: $, lastEnd: he }),
        { isKeyCode: Ve } = Rt(),
        { tryFocus: ft } = na(e, {
          rootRef: Le,
          focusRef: D,
          focusValue: m,
          datesRef: H,
          days: ce,
          parsedView: be,
          parsedValue: He,
          emittedValue: F,
          weekdaySkips: We,
          direction: M,
          times: j,
        }),
        ct = E(() =>
          be.value === "day" && parseInt(e.columnCount, 10) > 1
            ? parseInt(e.columnCount, 10)
            : be.value === "day" && e.maxDays && e.maxDays > 1
            ? e.maxDays
            : ce.value.length
        ),
        ut = E(() =>
          Le.value
            ? parseInt(
                getComputedStyle(Le.value).getPropertyValue(
                  "--calendar-intervals-width"
                ),
                10
              )
            : 0
        ),
        ot = E(() => {
          if (Le.value) {
            const o = B.width || Le.value.getBoundingClientRect().width;
            if (o && ut.value && ct.value)
              return (o - qe.value - ut.value) / ct.value + "px";
          }
          return 100 / ct.value + "%";
        });
      ae([ce], gt, { deep: !0, immediate: !0 }),
        ae(
          () => e.modelValue,
          (o, I) => {
            if (F.value !== e.modelValue) {
              if (e.animated === !0) {
                const P = ne(ke(o)),
                  U = ne(ke(I));
                M.value = P >= U ? "next" : "prev";
              }
              F.value = o;
            }
            D.value = o;
          }
        ),
        ae(F, (o, I) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const P = ne(ke(o)),
                U = ne(ke(I));
              M.value = P >= U ? "next" : "prev";
            }
            n("update:model-value", o);
          }
        }),
        ae(D, (o) => {
          o && (m.value = Ee(o));
        }),
        ae(m, (o) => {
          H.value[D.value] ? H.value[D.value].focus() : ft();
        }),
        ae(
          () => e.maxDays,
          (o) => {
            V.value = o;
          }
        ),
        Vt(() => {
          (H.value = {}), (W.value = {}), (O.value = {});
        }),
        Ot(() => {
          nt();
        });
      function vt() {
        F.value = et();
      }
      function yt(o = 1) {
        ze(o);
      }
      function mt(o = 1) {
        ze(-o);
      }
      function rt({ width: o, height: I }) {
        (B.width = o), (B.height = I);
      }
      function Ue(o) {
        return o.date === F.value;
      }
      function Ye() {
        return i(
          "div",
          {
            roll: "presentation",
            class: {
              "q-calendar-day__head": !0,
              "q-calendar__sticky": N.value === !0,
            },
            style: { marginRight: qe.value + "px" },
          },
          [Ie(), Je()]
        );
      }
      function Ie() {
        const o = t["head-intervals"],
          I = { timestamps: ce.value, days: ce.value, date: e.modelValue };
        return i(
          "div",
          {
            class: {
              "q-calendar-day__head--intervals": !0,
              "q-calendar__sticky": N.value === !0,
            },
            ...Ae("-head-intervals", (P) => ({ scope: I, event: P })),
          },
          [o && o({ scope: I })]
        );
      }
      function Je() {
        return i(
          "div",
          { ref: s, class: { "q-calendar-day__head--days__column": !0 } },
          [pe(), A()]
        );
      }
      function pe() {
        return i(
          "div",
          { class: { "q-calendar-day__head--days__weekdays": !0 } },
          [...le()]
        );
      }
      function A() {
        const o = t["head-days-events"];
        return (
          _a(() => {
            if (O.value && parseInt(e.columnCount, 10) === 0 && window)
              try {
                const I = window.getComputedStyle(O.value);
                (W.value.parentElement.style.height = I.height),
                  (W.value.style.height = I.height);
              } catch {}
          }),
          i("div", { class: { "q-calendar-day__head--days__event": !0 } }, [
            o &&
              i(
                "div",
                {
                  ref: W,
                  style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    overflow: "hidden",
                    zIndex: 1,
                  },
                },
                [o({ scope: { days: ce.value, ref: O } })]
              ),
            ...ie(),
          ])
        );
      }
      function le() {
        return ce.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((o, I) => I + parseInt(e.columnIndexStart, 10))
              .map((o) => fe(ce.value[0], o))
          : ce.value.map((o) => fe(o));
      }
      function ie() {
        return ce.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((o, I) => I + parseInt(e.columnIndexStart, 10))
              .map((o) => ye(ce.value[0], o))
          : ce.value.map((o) => ye(o));
      }
      function fe(o, I) {
        const P = t["head-day"],
          U = t["head-date"],
          te = e.noActiveDate !== !0 && Ue(o),
          de = re(o, I);
        (de.activeDate = te),
          (de.droppable = T.value === o.date),
          (de.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(o.weekday)
            : !1);
        const Pe = N.value === !0 ? e.cellWidth : ot.value,
          we = e.weekdayStyle || Ge,
          Tt = { width: Pe, maxWidth: Pe, minWidth: Pe, ...we({ scope: de }) };
        N.value === !0 && (Tt.minWidth = Pe);
        const va =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: de })
              : {},
          ua = e.focusable === !0 && e.focusType.includes("weekday"),
          Ke = o.date + (I !== void 0 ? "-" + I : ""),
          ra = {
            key: Ke,
            ref: (je) => {
              H.value[Ke] = je;
            },
            tabindex: ua === !0 ? 0 : -1,
            class: {
              "q-calendar-day__head--day": !0,
              ...va,
              ...De(o),
              "q-active-date": te,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": ua === !0,
            },
            style: Tt,
            onFocus: (je) => {
              ua === !0 && (D.value = Ke);
            },
            onKeydown: (je) => {
              o.disabled !== !0 &&
                Ve(je, [13, 32]) &&
                (je.stopPropagation(), je.preventDefault());
            },
            onKeyup: (je) => {
              o.disabled !== !0 && Ve(je, [13, 32]) && (F.value = o.date);
            },
            ...Ae("-head-day", (je) => ({ scope: de, event: je })),
            onDragenter: (je) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(je, "head-day", de) === !0
                  ? (T.value = o.date)
                  : (T.value = ""));
            },
            onDragover: (je) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(je, "head-day", de) === !0
                  ? (T.value = o.date)
                  : (T.value = ""));
            },
            onDragleave: (je) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(je, "head-day", de) === !0
                  ? (T.value = o.date)
                  : (T.value = ""));
            },
            onDrop: (je) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(je, "head-day", de) === !0
                  ? (T.value = o.date)
                  : (T.value = ""));
            },
          };
        return i("div", ra, [
          P !== void 0 && P({ scope: de }),
          P === void 0 && _(o, I),
          P === void 0 && me(o),
          P === void 0 && U && U({ scope: de }),
          P === void 0 && u(o, I),
          Ze(),
        ]);
      }
      function me(o) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && Be(o),
            e.noDefaultHeaderBtn !== !0 && C(o),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Be(o),
                e.noDefaultHeaderBtn !== !0 && C(o),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Be(o),
                e.noDefaultHeaderBtn !== !0 && C(o),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Be(o),
                e.noDefaultHeaderBtn !== !0 && C(o),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && C(o),
                e.noDefaultHeaderText !== !0 && Be(o),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && C(o),
                e.noDefaultHeaderText !== !0 && Be(o),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && C(o),
                e.noDefaultHeaderText !== !0 && Be(o),
              ]);
      }
      function ye(o, I) {
        const P = t["head-day-event"],
          U = e.noActiveDate !== !0 && Ue(o),
          te = re(o, I);
        (te.activeDate = U),
          (te.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(o.weekday)
            : !1);
        const de = N.value === !0 ? J(K.value) : ot.value,
          Pe = { width: de, maxWidth: de, minWidth: de };
        return (
          N.value === !0 && (Pe.minWidth = de),
          i(
            "div",
            {
              key: "event-" + o.date + (I !== void 0 ? "-" + I : ""),
              class: {
                "q-calendar-day__head--day__event": !0,
                ...De(o),
                "q-active-date": U,
              },
              style: Pe,
            },
            [P && P({ scope: te })]
          )
        );
      }
      function Be(o) {
        const I = t["head-weekday-label"],
          P = e.shortWeekdayLabel === !0,
          U = re(o);
        (U.shortWeekdayLabel = e.shortWeekdayLabel),
          (U.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(o.weekday)
            : !1);
        const te = {
          class: {
            "q-calendar-day__head--weekday": !0,
            ["q-calendar__" + e.weekdayAlign]: !0,
            "q-calendar__ellipsis": !0,
          },
        };
        return i("div", te, (I && I({ scope: U })) || c(o, P));
      }
      function c(o, I) {
        const P = tt.value(
          o,
          I ||
            (e.weekdayBreakpoints[0] > 0 && K.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar-day__head--weekday-label q-calendar__ellipsis" },
          e.weekdayBreakpoints[1] > 0 && K.value <= e.weekdayBreakpoints[1]
            ? ca(P, e.minWeekdayLabel)
            : P
        );
      }
      function C(o) {
        const I = {
          class: {
            "q-calendar-day__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", I, l(o));
      }
      function l(o) {
        const I = e.noActiveDate !== !0 && Ue(o),
          P = it.value(o, !1),
          U = t["head-day-label"],
          te = t["head-day-button"],
          de = {
            dayLabel: P,
            timestamp: o,
            activeDate: I,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(o.weekday)
              : !1,
          },
          Pe = {
            class: {
              "q-calendar-day__head--day__label": !0,
              "q-calendar__button": !0,
              "q-calendar__button--round": e.dateType === "round",
              "q-calendar__button--rounded": e.dateType === "rounded",
              "q-calendar__button--bordered": o.current === !0,
              "q-calendar__focusable": !0,
            },
            disabled: o.disabled,
            onKeydown: (we) => {
              o.disabled !== !0 &&
                Ve(we, [13, 32]) &&
                (we.stopPropagation(), we.preventDefault());
            },
            onKeyup: (we) => {
              o.disabled !== !0 &&
                Ve(we, [13, 32]) &&
                ((F.value = o.date),
                p.value.onClickDate !== void 0 &&
                  n("click-date", { scope: de }));
            },
            ...Ae(
              "-date",
              (we, Tt) => (
                (Tt === "click-date" || Tt === "contextmenu-date") &&
                  ((F.value = o.date),
                  Tt === "click-date" && we.preventDefault()),
                { scope: de, event: we }
              )
            ),
          };
        return (
          e.noAria !== !0 && (Pe.ariaLabel = Xe.value(o)),
          te ? te({ scope: de }) : sa(e, Pe, U ? U({ scope: de }) : P)
        );
      }
      function _(o, I) {
        const P = t["column-header-before"];
        if (P)
          return i("div", { class: "q-calendar-day__column-header--before" }, [
            P({ scope: { timestamp: o, columnIndex: I } }),
          ]);
      }
      function u(o, I) {
        const P = t["column-header-after"];
        if (P)
          return i("div", { class: "q-calendar-day__column-header--after" }, [
            P({ scope: { timestamp: o, columnIndex: I } }),
          ]);
      }
      function d() {
        return i("div", { class: "q-calendar-day__body" }, [v()]);
      }
      function v() {
        return N.value === !0
          ? i(
              "div",
              {
                ref: f,
                class: {
                  "q-calendar-day__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [N.value !== !0 && L(), a()]
            )
          : e.noScroll === !0
          ? w()
          : i(
              "div",
              {
                ref: f,
                class: {
                  "q-calendar-day__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [w()]
            );
      }
      function w() {
        return i("div", { ref: b, class: "q-calendar-day__pane" }, [L(), a()]);
      }
      function a() {
        const o = t["day-container"];
        return i("div", { class: "q-calendar-day__day-container" }, [
          N.value === !0 && e.noHeader !== !0 && Ye(),
          i("div", { style: { display: "flex", flexDirection: "row" } }, [
            N.value === !0 && L(),
            ...y(),
          ]),
          o && o({ scope: { days: ce.value } }),
        ]);
      }
      function y() {
        return ce.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((o, I) => I + parseInt(e.columnIndexStart, 10))
              .map((o) => q(ce.value[0], 0, o))
          : ce.value.map((o, I) => q(o, I));
      }
      function q(o, I, P) {
        const U = t["day-body"],
          te = re(o, P),
          de = N.value === !0 ? e.cellWidth : ot.value,
          Pe = { width: de, maxWidth: de, minWidth: de };
        return (
          N.value === !0 && (Pe.minWidth = de),
          i(
            "div",
            {
              key: o.date + (P !== void 0 ? ":" + P : ""),
              class: { "q-calendar-day__day": !0, ...De(o) },
              style: Pe,
            },
            [...S(I, P), U && U({ scope: te })]
          )
        );
      }
      function S(o, I) {
        return G.value[o].map((P) => R(P, I));
      }
      function R(o, I) {
        const P = J(e.intervalHeight),
          U = e.intervalStyle || se,
          te = t["day-interval"],
          de = re(o, I);
        de.droppable = x.value === Ft(o);
        const Pe =
            typeof e.intervalClass == "function"
              ? e.intervalClass({ scope: de })
              : {},
          we = e.focusable === !0 && e.focusType.includes("interval"),
          va = {
            key: Wa(o),
            tabindex: we === !0 ? 0 : -1,
            class: {
              "q-calendar-day__day-interval": o.minute === 0,
              "q-calendar-day__day-interval--section": o.minute !== 0,
              ...Pe,
              ...ee(o, e.selectedDates, e.selectedStartEndDates),
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": we === !0,
            },
            style: { height: P, ...U({ scope: de }) },
            onDragenter: (Ke) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(Ke, "interval", de) === !0
                  ? (x.value = Ft(o))
                  : (x.value = ""));
            },
            onDragover: (Ke) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(Ke, "interval", de) === !0
                  ? (x.value = Ft(o))
                  : (x.value = ""));
            },
            onDragleave: (Ke) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(Ke, "interval", de) === !0
                  ? (x.value = Ft(o))
                  : (x.value = ""));
            },
            onDrop: (Ke) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(Ke, "interval", de) === !0
                  ? (x.value = Ft(o))
                  : (x.value = ""));
            },
            onKeydown: (Ke) => {
              Ve(Ke, [13, 32]) && (Ke.stopPropagation(), Ke.preventDefault());
            },
            onKeyup: (Ke) => {
              if (Ve(Ke, [13, 32])) {
                const ra = re(o, I);
                (F.value = ra.timestamp.date),
                  p.value.onClickTime !== void 0 &&
                    n("click-time", { scope: ra, event: Ke });
              }
            },
            ...Ae("-time", (Ke) => ({
              scope: re(ue(Ke, o, e.timeClicksClamped, j.now), I),
              event: Ke,
            })),
          };
        e.noAria !== !0 && (va.ariaLabel = X.value(o));
        const ua = te ? te({ scope: de }) : void 0;
        return i("div", va, [ua, Ze()]);
      }
      function L() {
        const o = {
          ariaHidden: "true",
          class: {
            "q-calendar-day__intervals-column": !0,
            "q-calendar__ellipsis": !0,
            "q-calendar__sticky": N.value === !0,
          },
          ...Ae("-interval", (I) => ({
            scope: { timestamp: Fe(I, xe.value, e.timeClicksClamped, j.now) },
            event: I,
          })),
        };
        return i("div", o, ve());
      }
      function ve() {
        return G.value[0].map((o) => Y(o));
      }
      function Y(o) {
        const I = t["interval-label"],
          P = J(e.intervalHeight),
          U = e.shortIntervalLabel,
          Pe = (e.showIntervalLabel || oe)(o) ? h.value(o, U) : void 0;
        return i(
          "div",
          {
            key: o.time,
            class: {
              "q-calendar-day__interval": o.minute === 0,
              "q-calendar-day__interval--section": o.minute !== 0,
            },
            style: { height: P },
          },
          [
            i(
              "div",
              {
                class:
                  "q-calendar-day__interval--text q-calendar__overflow-wrap",
              },
              [I ? I({ scope: { timestamp: o, label: Pe } }) : Pe]
            ),
          ]
        );
      }
      function lt() {
        const { start: o, end: I, maxDays: P } = Oe.value;
        (z.value !== o.date || Z.value !== I.date || V.value !== P) &&
          ((z.value = o.date), (Z.value = I.date), (V.value = P));
        const U = B.width > 0,
          te = Wt(
            i("div", { key: z.value, class: "q-calendar-day" }, [
              U === !0 && N.value !== !0 && e.noHeader !== !0 && Ye(),
              U && d(),
            ]),
            [[_t, rt]]
          );
        if (e.animated === !0) {
          const de =
            "q-calendar--" +
            (M.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i($t, { name: de, appear: !0 }, () => te);
        }
        return te;
      }
      return (
        r({
          prev: mt,
          next: yt,
          move: ze,
          moveToToday: vt,
          updateCurrent: k,
          timeStartPos: at,
          timeDurationHeight: Te,
          heightToMinutes: Re,
          scrollToTime: $e,
        }),
        () => ge()
      );
    },
  });
const rn = {
  dayHeight: { type: [Number, String], default: 0, validator: Qe },
  dayMinHeight: { type: [Number, String], default: 0, validator: Qe },
  dayStyle: { type: Function, default: null },
  dayClass: { type: Function, default: null },
  weekdayStyle: { type: Function, default: null },
  weekdayClass: { type: Function, default: null },
  dayPadding: String,
  minWeeks: { type: [Number, String], validator: Qe, default: 1 },
  shortMonthLabel: Boolean,
  showWorkWeeks: Boolean,
  showMonthLabel: { type: Boolean, default: !0 },
  showDayOfYearLabel: Boolean,
  enableOutsideDays: Boolean,
  noOutsideDays: Boolean,
  hover: Boolean,
  miniMode: {
    type: [Boolean, String],
    validator: (e) => [!0, !1, "auto"].includes(e),
  },
  breakpoint: {
    type: [Number, String],
    default: "md",
    validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e) || Qe(e),
  },
  monthLabelSize: {
    type: String,
    default: "sm",
    validator: (e) =>
      ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) ||
      (!!e && e.length > 0),
  },
};
function Yn(
  e,
  t,
  {
    weekdaySkips: n,
    times: r,
    parsedStart: f,
    parsedEnd: b,
    size: s,
    headerColumnRef: D,
  }
) {
  const m = E(() => parseInt(e.minWeeks, 10)),
    H = E(() => m.value * e.weekdays.length),
    W = E(() => $(be(f.value))),
    O = E(() => he(_e(b.value))),
    M = E(() => {
      let N = 0;
      return (
        e.cellWidth
          ? (N = e.cellWidth)
          : s.width > 0 &&
            D.value &&
            (N = D.value.offsetWidth / e.weekdays.length),
        N
      );
    }),
    z = E(() =>
      ha(
        W.value,
        O.value,
        r.today,
        n.value,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        Number.MAX_SAFE_INTEGER,
        H.value
      )
    ),
    Z = E(() => {
      const N = r.today,
        j = $(N),
        Q = he(N);
      return ha(
        j,
        Q,
        N,
        n,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        e.weekdays.length,
        e.weekdays.length
      );
    }),
    V = E(() => {
      const N = { timeZone: "UTC", month: "long" },
        j = { timeZone: "UTC", month: "short" };
      return Kt(e.locale, (Q, k) => (k ? j : N));
    }),
    F = E(() => {
      switch (e.breakpoint) {
        case "xs":
          return 300;
        case "sm":
          return 350;
        case "md":
          return 400;
        case "lg":
          return 450;
        case "xl":
          return 500;
        default:
          return parseInt(e.breakpoint, 10);
      }
    }),
    B = E(() => {
      switch (e.monthLabelSize) {
        case "xxs":
          return ".4em";
        case "xs":
          return ".6em";
        case "sm":
          return ".8em";
        case "md":
          return "1.0em";
        case "lg":
          return "1.2em";
        case "xl":
          return "1.4em";
        case "xxl":
          return "1.6em";
        default:
          return e.monthLabelSize;
      }
    });
  let T = !0;
  const x = E(() => {
    const N =
      e.miniMode === !0 ||
      (e.miniMode === "auto" && e.breakpoint !== void 0 && s.width < F.value);
    return T === !0 && ((T = !1), t("mini-mode", N)), N;
  });
  ae(x, (N) => {
    t("mini-mode", N);
  });
  function $(N) {
    return Ut(N, e.weekdays, r.today);
  }
  function he(N) {
    return xt(N, e.weekdays, r.today);
  }
  function be(N) {
    return ia(N);
  }
  function _e(N) {
    return zt(N);
  }
  function p(N) {
    const j = ne(N);
    return j < ne(f.value) || j > ne(b.value);
  }
  return {
    parsedCellWidth: M,
    parsedMinWeeks: m,
    parsedMinDays: H,
    parsedMonthStart: W,
    parsedMonthEnd: O,
    parsedBreakpoint: F,
    parsedMonthLabelSize: B,
    days: z,
    todayWeek: Z,
    isMiniMode: x,
    monthFormatter: V,
    isOutside: p,
  };
}
var ln = Et({
    name: "QCalendarMonth",
    directives: [_t],
    props: { ...Qt, ...rn, ...Lt, ...fa, ...It },
    emits: [
      "update:model-value",
      ...ta,
      ...Jt,
      "mini-mode",
      ...Ce("-date"),
      ...Ce("-day"),
      ...Ce("-head-workweek"),
      ...Ce("-head-day"),
      ...Ce("-workweek"),
    ],
    setup(e, { slots: t, emit: n, expose: r }) {
      const f = g(null),
        b = g(null),
        s = g(null),
        D = g(null),
        m = g(null),
        H = g({}),
        W = g([]),
        O = g([]),
        M = g("next"),
        z = g(e.modelValue || et()),
        Z = g("0000-00-00"),
        V = g(0),
        F = g(e.modelValue),
        B = St({ width: 0, height: 0 }),
        T = g(!1),
        x = g(!1),
        $ = g(null),
        he = g(null),
        be = E(() => "month"),
        _e = At();
      if (_e === null) throw new Error("current instance is null");
      const { emitListeners: p } = ea(_e),
        { isSticky: N } = wa(e);
      ae(N, (l) => {});
      const { times: j, setCurrent: Q, updateCurrent: k } = jt(e);
      k(), Q();
      const {
          weekdaySkips: We,
          parsedStart: xe,
          parsedEnd: Ne,
          dayFormatter: it,
          weekdayFormatter: tt,
          ariaDateFormatter: Xe,
          dayStyleDefault: Ge,
          getRelativeClasses: De,
        } = Xt(e, { startDate: z, endDate: Z, times: j }),
        He = E(() => Ee(e.modelValue, j.now) || xe.value || j.today);
      (m.value = He.value), (D.value = He.value.date);
      const Oe = E(() => {
          const l = {};
          return (
            e.dayPadding !== void 0 && (l.padding = e.dayPadding),
            (l.minWidth = at.value),
            (l.maxWidth = at.value),
            (l.width = at.value),
            l
          );
        }),
        { renderValues: Le } = Zt(e, {
          parsedView: be,
          times: j,
          parsedValue: He,
        }),
        {
          rootRef: qe,
          __initCalendar: nt,
          __renderCalendar: ge,
        } = Yt(e, C, { scrollArea: f, pane: b }),
        {
          days: ce,
          todayWeek: G,
          isMiniMode: h,
          parsedCellWidth: X,
          parsedMonthLabelSize: K,
          isOutside: ee,
          monthFormatter: oe,
        } = Yn(e, n, {
          weekdaySkips: We,
          times: j,
          parsedStart: xe,
          parsedEnd: Ne,
          size: B,
          headerColumnRef: s,
        }),
        { move: se } = pt(e, {
          parsedView: be,
          parsedValue: He,
          weekdaySkips: We,
          direction: M,
          maxDays: V,
          times: j,
          emittedValue: F,
          emit: n,
        }),
        { getDefaultMouseEventHandlers: ue } = Gt(n, p),
        { checkChange: Fe } = aa(n, { days: ce, lastStart: $, lastEnd: he }),
        { isKeyCode: re } = Rt(),
        { tryFocus: $e } = na(e, {
          rootRef: qe,
          focusRef: D,
          focusValue: m,
          datesRef: H,
          days: ce,
          parsedView: be,
          parsedValue: He,
          emittedValue: F,
          weekdaySkips: We,
          direction: M,
          times: j,
        }),
        Re = E(() =>
          qe.value && e.showWorkWeeks === !0
            ? parseInt(
                getComputedStyle(qe.value).getPropertyValue(
                  h.value === !0
                    ? "--calendar-mini-work-week-width"
                    : "--calendar-work-week-width"
                ),
                10
              )
            : 0
        ),
        Te = E(() => e.weekdays.length),
        at = E(() => {
          if (qe.value) {
            const l = B.width || qe.value.getBoundingClientRect().width;
            if (l && Te.value) return (l - Re.value) / Te.value + "px";
          }
          return 100 / Te.value + "%";
        }),
        ze = E(
          () =>
            e.focusable === !0 && e.focusType.includes("day") && h.value !== !0
        ),
        Ae = E(
          () =>
            e.focusable === !0 &&
            e.focusType.includes("date") &&
            ze.value !== !0
        );
      ae([ce], Fe, { deep: !0, immediate: !0 }),
        ae(
          () => e.modelValue,
          (l, _) => {
            if (F.value !== l) {
              if (e.animated === !0) {
                const u = ne(ke(l)),
                  d = ne(ke(_));
                M.value = u >= d ? "next" : "prev";
              }
              F.value = l;
            }
            D.value = l;
          }
        ),
        ae(F, (l, _) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const u = ne(ke(l)),
                d = ne(ke(_));
              M.value = u >= d ? "next" : "prev";
            }
            n("update:model-value", l);
          }
        }),
        ae(D, (l) => {
          l && ((m.value = Ee(l)), F.value !== l && (F.value = l));
        }),
        ae(m, (l) => {
          H.value[D.value] ? H.value[D.value].focus() : $e();
        }),
        Vt(() => {
          (H.value = {}),
            (W.value = []),
            (O.value = []),
            _a(() => {
              vt();
            });
        }),
        Ot(() => {
          nt(), vt();
        });
      function gt() {
        F.value = et();
      }
      function Ve(l = 1) {
        se(l);
      }
      function ft(l = 1) {
        se(-l);
      }
      function ct({ width: l, height: _ }) {
        (B.width = l), (B.height = _);
      }
      function ut(l) {
        return l.date === F.value;
      }
      function ot(l) {
        for (let _ = 0; _ < l.length; ++_)
          if (l[_].current === !0) return { timestamp: l[_] };
        return { timestamp: !1 };
      }
      function vt() {
        if (
          !(h.value === !0 || e.dayHeight !== 0 || t.week === void 0) &&
          window
        )
          for (const _ in W.value) {
            const u = W.value[_];
            if (u === void 0) continue;
            const d = O.value[_];
            if (d === void 0) continue;
            const v = window.getComputedStyle(u),
              w = parseFloat(v.marginTop, 10) + parseFloat(v.marginBottom, 10);
            u.clientHeight + w > d.clientHeight &&
              (d.style.height = u.clientHeight + w + "px");
          }
      }
      function yt() {
        return i("div", { class: "q-calendar-month__body" }, [...A()]);
      }
      function mt() {
        return i(
          "div",
          { role: "presentation", class: "q-calendar-month__head" },
          [
            e.showWorkWeeks === !0 && Ue(),
            i("div", { class: "q-calendar-month__head--wrapper" }, [rt()]),
          ]
        );
      }
      function rt() {
        return i(
          "div",
          { ref: s, class: { "q-calendar-month__head--weekdays": !0 } },
          [...Ye()]
        );
      }
      function Ue() {
        const l = t["head-workweek"],
          _ = { start: xe.value, end: Ne.value, miniMode: h.value };
        return i(
          "div",
          {
            class: "q-calendar-month__head--workweek",
            ...ue("-head-workweek", (u) => ({ scope: _, event: u })),
          },
          l ? l({ scope: _ }) : "#"
        );
      }
      function Ye() {
        return G.value.map((l, _) => Ie(l, _));
      }
      function Ie(l, _) {
        const u = t["head-day"],
          d = ce.value.filter((Y) => Y.weekday === l.weekday),
          v = d[0].weekday,
          a = {
            activeDate: e.noActiveDate !== !0 && ut(l),
            weekday: v,
            timestamp: l,
            days: d,
            index: _,
            miniMode: h.value,
            droppable: T.value === l.weekday,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          y =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: a })
              : {},
          q = e.focusable === !0 && e.focusType.includes("weekday"),
          S = at.value,
          R = e.weekdayStyle || Ge,
          L = { width: S, maxWidth: S, minWidth: S, ...R({ scope: a }) },
          ve = {
            key: l.date + (_ !== void 0 ? "-" + _ : ""),
            tabindex: q === !0 ? 0 : -1,
            class: {
              "q-calendar-month__head--weekday": !0,
              ...y,
              "q-disabled-day disabled": a.disabled === !0,
              ["q-calendar__" + e.weekdayAlign]: !0,
              "q-calendar__ellipsis": !0,
              "q-calendar__focusable": q === !0,
            },
            style: L,
            onDragenter: (Y) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(Y, "head-day", a) === !0
                  ? (T.value = l.weekday)
                  : (T.value = ""));
            },
            onDragover: (Y) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(Y, "head-day", a) === !0
                  ? (T.value = l.weekday)
                  : (T.value = ""));
            },
            onDragleave: (Y) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(Y, "head-day", a) === !0
                  ? (T.value = l.weekday)
                  : (T.value = ""));
            },
            onDrop: (Y) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(Y, "head-day", a) === !0
                  ? (T.value = l.weekday)
                  : (T.value = ""));
            },
            onFocus: (Y) => {
              q === !0 && (D.value = l.date);
            },
            ...ue("-head-day", (Y) => ({ scope: a, event: Y })),
          };
        return (
          e.noAria !== !0 && (ve.ariaLabel = tt.value(l, !1)),
          i("div", ve, [
            u === void 0 && pe(l, e.shortWeekdayLabel || h.value),
            u !== void 0 && u({ scope: a }),
            Je(l, _),
            q === !0 && Ze(),
          ])
        );
      }
      function Je(l, _) {
        const u = t["head-day-event"],
          d = e.noActiveDate !== !0 && ut(l),
          v = ce.value.filter((R) => R.weekday === l.weekday),
          a = {
            weekday: v[0].weekday,
            timestamp: l,
            days: v,
            index: _,
            miniMode: h.value,
            activeDate: d,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          y = at.value,
          q = e.weekdayStyle || Ge,
          S = { width: y, maxWidth: y, minWidth: y, ...q({ scope: a }) };
        return i(
          "div",
          {
            key: "event-" + l.date + (_ !== void 0 ? "-" + _ : ""),
            class: { "q-calendar-month__head--event": !0 },
            style: S,
          },
          [u !== void 0 && u({ scope: a })]
        );
      }
      function pe(l, _) {
        const u = tt.value(
          l,
          _ ||
            (e.weekdayBreakpoints[0] > 0 && X.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar__ellipsis" },
          (h.value === !0 && e.shortWeekdayLabel === !0) ||
            (e.weekdayBreakpoints[1] > 0 && X.value <= e.weekdayBreakpoints[1])
            ? ca(u, e.minWeekdayLabel)
            : u
        );
      }
      function A() {
        const l = e.weekdays.length,
          _ = [];
        for (let u = 0; u < ce.value.length; u += l)
          _.push(le(ce.value.slice(u, u + l), u / l));
        return _;
      }
      function le(l, _) {
        const u = t.week,
          d = e.weekdays,
          v = { week: l, weekdays: d, miniMode: h.value },
          w = {};
        (w.height =
          e.dayHeight > 0 && h.value !== !0
            ? J(parseInt(e.dayHeight, 10))
            : "auto"),
          e.dayMinHeight > 0 &&
            h.value !== !0 &&
            (w.minHeight = J(parseInt(e.dayMinHeight, 10)));
        const a =
          parseInt(e.dayHeight, 10) === 0 && parseInt(e.dayMinHeight, 10) === 0;
        return i(
          "div",
          {
            key: l[0].date,
            ref: (y) => {
              O.value[_] = y;
            },
            class: {
              "q-calendar-month__week--wrapper": !0,
              "q-calendar-month__week--auto-height": a,
            },
            style: w,
          },
          [
            e.showWorkWeeks === !0 ? ie(l) : void 0,
            i("div", { class: "q-calendar-month__week" }, [
              i(
                "div",
                { class: "q-calendar-month__week--days" },
                l.map((y, q) => fe(y))
              ),
              h.value !== !0 && u !== void 0
                ? i(
                    "div",
                    {
                      ref: (y) => {
                        W.value[_] = y;
                      },
                      class: "q-calendar-month__week--events",
                    },
                    u({ scope: v })
                  )
                : void 0,
            ]),
          ]
        );
      }
      function ie(l) {
        const _ = t.workweek,
          u = l.length > 2 ? l[2] : l[0],
          { timestamp: d } = ot(l),
          v = Number(u.workweek).toLocaleString(e.locale),
          w = { workweekLabel: v, week: l, miniMode: h.value };
        return i(
          "div",
          {
            key: u.workweek,
            class: {
              "q-calendar-month__workweek": !0,
              ...De(d !== !1 ? d : u, !1),
            },
            ...ue("-workweek", (a) => ({ scope: w, event: a })),
          },
          _ ? _({ scope: w }) : v
        );
      }
      function fe(l) {
        const _ = t.day,
          u = e.dayStyle || Ge,
          d = ee(l),
          v = e.noActiveDate !== !0 && He.value.date === l.date,
          w =
            d === !1 &&
            e.showMonthLabel === !0 &&
            ce.value.find((L) => L.month === l.month).day === l.day,
          a = {
            outside: d,
            timestamp: l,
            miniMode: h.value,
            activeDate: v,
            hasMonth: w,
            droppable: x.value === l.date,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          y = Object.assign({ ...Oe.value }, u({ scope: a })),
          q = typeof e.dayClass == "function" ? e.dayClass({ scope: a }) : {},
          S = {
            key: l.date,
            ref: (L) => {
              ze.value === !0 && (H.value[l.date] = L);
            },
            tabindex: ze.value === !0 ? 0 : -1,
            class: {
              "q-calendar-month__day": !0,
              ...q,
              ...De(l, d, e.selectedDates, e.selectedStartEndDates, e.hover),
              "q-active-date": v === !0,
              disabled: e.enableOutsideDays !== !0 && d === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": ze.value === !0,
            },
            style: y,
            onFocus: (L) => {
              ze.value === !0 && (D.value = l.date);
            },
            onKeydown: (L) => {
              d !== !0 &&
                l.disabled !== !0 &&
                re(L, [13, 32]) &&
                (L.stopPropagation(), L.preventDefault());
            },
            onKeyup: (L) => {
              d !== !0 &&
                l.disabled !== !0 &&
                re(L, [13, 32]) &&
                (L.stopPropagation(),
                L.preventDefault(),
                p.value.onClickDay !== void 0 &&
                  h.value !== !0 &&
                  n("click-day", { scope: a, event: L }));
            },
            ...ue("-day", (L) => ({ scope: a, event: L })),
          };
        return (
          d !== !0 &&
            Object.assign(S, {
              onDragenter: (L) => {
                e.dragEnterFunc !== void 0 &&
                  typeof e.dragEnterFunc == "function" &&
                  (e.dragEnterFunc(L, "day", a) === !0
                    ? (x.value = l.date)
                    : (x.value = ""));
              },
              onDragover: (L) => {
                e.dragOverFunc !== void 0 &&
                  typeof e.dragOverFunc == "function" &&
                  (e.dragOverFunc(L, "day", a) === !0
                    ? (x.value = l.date)
                    : (x.value = ""));
              },
              onDragleave: (L) => {
                e.dragLeaveFunc !== void 0 &&
                  typeof e.dragLeaveFunc == "function" &&
                  (e.dragLeaveFunc(L, "day", a) === !0
                    ? (x.value = l.date)
                    : (x.value = ""));
              },
              onDrop: (L) => {
                e.dropFunc !== void 0 &&
                  typeof e.dropFunc == "function" &&
                  (e.dropFunc(L, "day", a) === !0
                    ? (x.value = l.date)
                    : (x.value = ""));
              },
            }),
          e.noAria !== !0 && (S.ariaLabel = Xe.value(l)),
          i("div", S, [
            me(l, d, w),
            i(
              "div",
              { class: { "q-calendar-month__day--content": !0 } },
              _ ? _({ scope: a }) : void 0
            ),
            ze.value === !0 && Ze(),
          ])
        );
      }
      function me(l, _, u) {
        let d, v;
        const w = [ye(l, _)];
        h.value !== !0 && u === !0 && B.width > 340 && (v = c(l, _)),
          h.value !== !0 &&
            e.showDayOfYearLabel === !0 &&
            v === void 0 &&
            B.width > 300 &&
            (d = Be(l, _)),
          e.dateAlign === "left"
            ? (d !== void 0 && w.push(d), v !== void 0 && w.push(v))
            : e.dateAlign === "right"
            ? (d !== void 0 && w.unshift(d), v !== void 0 && w.unshift(v))
            : ((d = void 0), (v = void 0));
        const a = {
          class: {
            "q-calendar-month__day--label__wrapper": !0,
            "q-calendar__ellipsis": !0,
            ["q-calendar__" + e.dateAlign]: d === void 0 && v === void 0,
            "q-calendar__justify": d !== void 0 || v !== void 0,
          },
        };
        return i("div", a, w);
      }
      function ye(l, _) {
        if (_ === !0 && e.noOutsideDays === !0) return;
        const u = it.value(l, !1),
          d = t["head-day-label"],
          v = t["head-day-button"],
          w =
            e.selectedDates &&
            e.selectedDates.length > 0 &&
            e.selectedDates.includes(l.date),
          a = e.noActiveDate !== !0 && ut(l),
          y = {
            dayLabel: u,
            timestamp: l,
            outside: _,
            activeDate: a,
            selectedDate: w,
            miniMode: h.value,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          q = {
            key: l.date,
            ref: (S) => {
              Ae.value === !0 && (H.value[l.date] = S);
            },
            tabindex: Ae.value === !0 ? 0 : -1,
            class: {
              "q-calendar-month__day--label": !0,
              "q-calendar__button": !0,
              "q-calendar__button--round": e.dateType === "round",
              "q-calendar__button--rounded": e.dateType === "rounded",
              "q-calendar__button--bordered": l.current === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Ae.value === !0,
            },
            disabled:
              l.disabled === !0 || (e.enableOutsideDays !== !0 && _ === !0),
            onFocus: (S) => {
              Ae.value === !0 && (D.value = l.date);
            },
            onKeydown: (S) => {
              _ !== !0 &&
                l.disabled !== !0 &&
                re(S, [13, 32]) &&
                (S.stopPropagation(), S.preventDefault());
            },
            onKeyup: (S) => {
              Ae.value === !0 &&
                _ !== !0 &&
                l.disabled !== !0 &&
                re(S, [13, 32]) &&
                (S.stopPropagation(),
                S.preventDefault(),
                (F.value = l.date),
                p.value.onClickDate !== void 0 &&
                  n("click-date", { scope: y, event: S }));
            },
            ...ue(
              "-date",
              (S, R) => (
                S.stopPropagation(),
                (R === "click-date" || R === "contextmenu-date") &&
                  (F.value = l.date),
                { scope: y, event: S }
              )
            ),
          };
        return (
          e.noAria !== !0 && (q.ariaLabel = Xe.value(l)),
          [
            v ? v({ scope: y }) : sa(e, q, d ? d({ scope: y }) : u),
            Ae.value === !0 && Ze(),
          ]
        );
      }
      function Be(l, _) {
        if (_ === !0 && e.noOutsideDays === !0) return;
        const u = t["day-of-year"];
        return i(
          "span",
          {
            class: {
              "q-calendar-month__day--day-of-year": !0,
              "q-calendar__ellipsis": !0,
            },
          },
          u ? u({ scope: { timestamp: l } }) : l.doy
        );
      }
      function c(l, _) {
        if (_ === !0 && e.noOutsideDays === !0) return;
        const u = t["month-label"],
          d = oe.value(l, e.shortMonthLabel || B.width < 500),
          v = { monthLabel: d, timestamp: l, miniMode: h.value },
          w = {};
        return (
          h.value !== !0 && K.value !== void 0 && (w.fontSize = K.value),
          i(
            "span",
            {
              class: "q-calendar-month__day--month q-calendar__ellipsis",
              style: w,
            },
            [u ? u({ scope: v }) : h.value !== !0 ? d : void 0]
          )
        );
      }
      function C() {
        const { start: l, end: _ } = Le.value;
        (z.value = l.date), (Z.value = _.date);
        const u = B.width > 0,
          d = Wt(
            i(
              "div",
              {
                class: {
                  "q-calendar-mini": h.value === !0,
                  "q-calendar-month": !0,
                },
                key: z.value,
              },
              [u === !0 && e.noHeader !== !0 && mt(), u === !0 && yt()]
            ),
            [[_t, ct]]
          );
        if (e.animated === !0) {
          const v =
            "q-calendar--" +
            (M.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i($t, { name: v, appear: !0 }, () => d);
        }
        return d;
      }
      return (
        r({ prev: ft, next: Ve, move: se, moveToToday: gt, updateCurrent: k }),
        () => ge()
      );
    },
  }),
  Qn = Et({
    name: "QCalendarResource",
    props: { ...Qt, ...an, ...xa, ...ka, ...oa, ...Lt, ...It },
    emits: [
      "update:model-value",
      "update:model-resources",
      "resource-expanded",
      ...ta,
      ...Jt,
      ...Ce("-date"),
      ...Ce("-interval"),
      ...Ce("-head-day"),
      ...Ce("-time"),
      ...Ce("-head-resources"),
      ...Ce("-resource"),
    ],
    setup(e, { slots: t, emit: n, expose: r }) {
      const f = g(null),
        b = g(null),
        s = g(null),
        D = g(null),
        m = g(null),
        H = g(null),
        W = g({}),
        O = g({}),
        M = g("next"),
        z = g(et()),
        Z = g("0000-00-00"),
        V = g(0),
        F = g(e.modelValue),
        B = St({ width: 0, height: 0 }),
        T = g(!1),
        x = g(!1),
        $ = g(!1),
        he = g(null),
        be = g(null);
      ae(
        () => e.view,
        () => {
          V.value = 0;
        }
      );
      const _e = E(() => (e.view === "month" ? "month-interval" : e.view)),
        p = E(() => parseInt(e.cellWidth, 10)),
        N = At();
      if (N === null) throw new Error("current instance is null");
      const { emitListeners: j } = ea(N),
        { times: Q, setCurrent: k, updateCurrent: We } = jt(e);
      We(), k();
      const {
          weekdaySkips: xe,
          parsedStart: Ne,
          parsedEnd: it,
          dayStyleDefault: tt,
        } = Xt(e, { startDate: z, endDate: Z, times: Q }),
        Xe = E(() => Ee(e.modelValue, Q.now) || Ne.value || Q.today);
      (H.value = Xe.value), (m.value = Xe.value.date);
      const { renderValues: Ge } = Zt(e, {
          parsedView: _e,
          times: Q,
          parsedValue: Xe,
        }),
        {
          rootRef: De,
          __initCalendar: He,
          __renderCalendar: Oe,
        } = Yt(e, pe, { scrollArea: f, pane: b }),
        {
          days: Le,
          intervals: qe,
          intervalFormatter: nt,
          styleDefault: ge,
          scrollToTimeX: ce,
          timeDurationWidth: G,
          timeStartPosX: h,
          widthToMinutes: X,
        } = ma(e, {
          weekdaySkips: xe,
          times: Q,
          scrollArea: f,
          parsedStart: Ne,
          parsedEnd: it,
          maxDays: V,
          size: B,
          headerColumnRef: D,
        }),
        { move: K } = pt(e, {
          parsedView: _e,
          parsedValue: Xe,
          weekdaySkips: xe,
          direction: M,
          maxDays: V,
          times: Q,
          emittedValue: F,
          emit: n,
        }),
        { getDefaultMouseEventHandlers: ee } = Gt(n, j),
        { checkChange: oe } = aa(n, { days: Le, lastStart: he, lastEnd: be }),
        { isKeyCode: se } = Rt(),
        { tryFocus: ue } = na(e, {
          rootRef: De,
          focusRef: m,
          focusValue: H,
          datesRef: W,
          days: Le,
          parsedView: _e,
          parsedValue: Xe,
          emittedValue: F,
          weekdaySkips: xe,
          direction: M,
          times: Q,
        }),
        Fe = E(() => {
          const A = parseInt(e.resourceHeight, 10);
          return A === 0 ? "auto" : A;
        }),
        re = E(() => parseInt(e.resourceMinHeight, 10)),
        $e = E(() => parseInt(e.intervalHeaderHeight, 10));
      ae([Le], oe, { deep: !0, immediate: !0 }),
        ae(
          () => e.modelValue,
          (A, le) => {
            if (F.value !== A) {
              if (e.animated === !0) {
                const ie = ne(ke(A)),
                  fe = ne(ke(le));
                M.value = ie >= fe ? "next" : "prev";
              }
              F.value = A;
            }
            m.value = A;
          }
        ),
        ae(F, (A, le) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const ie = ne(ke(A)),
                fe = ne(ke(le));
              M.value = ie >= fe ? "next" : "prev";
            }
            n("update:model-value", A);
          }
        }),
        ae(m, (A) => {
          A && (H.value = Ee(A));
        }),
        ae(H, (A) => {
          W.value[m.value] ? W.value[m.value].focus() : ue();
        }),
        Vt(() => {
          (W.value = {}), (O.value = {});
        }),
        Ot(() => {
          He();
        });
      function Re() {
        F.value = et();
      }
      function Te(A = 1) {
        K(A);
      }
      function at(A = 1) {
        K(-A);
      }
      function ze({ width: A, height: le }) {
        (B.width = A), (B.height = le);
      }
      function Ae(A) {
        return A.date === F.value;
      }
      function gt() {
        const A = { height: J($e.value) };
        return i(
          "div",
          {
            ref: s,
            roll: "presentation",
            class: {
              "q-calendar-resource__head": !0,
              "q-calendar__sticky": e.noSticky !== !0,
            },
            style: A,
          },
          [Ve(), ft()]
        );
      }
      function Ve() {
        const A = t["head-resources"],
          le = J($e.value),
          ie = {
            timestamps: qe,
            date: e.modelValue,
            resources: e.modelResources,
          };
        return i(
          "div",
          {
            class: {
              "q-calendar-resource__head--resources": !0,
              "q-calendar__sticky": e.noSticky !== !0,
            },
            style: { height: le },
            ...ee("-head-resources", (fe) => ({ scope: ie, event: fe })),
          },
          [A && A({ scope: ie })]
        );
      }
      function ft() {
        return i(
          "div",
          { ref: D, class: { "q-calendar-resource__head--intervals": !0 } },
          [qe.value.map((A) => A.map((le, ie) => ct(le, ie)))]
        );
      }
      function ct(A, le) {
        const ie = t["interval-label"],
          fe = e.noActiveDate !== !0 && Ae(A),
          me = J(p.value),
          ye = J($e.value),
          Be = e.shortIntervalLabel,
          c = nt.value(A, Be),
          C = { timestamp: A, index: le, label: c };
        C.droppable = T.value === c;
        const l = e.intervalStyle || tt,
          _ = {
            width: me,
            maxWidth: me,
            minWidth: me,
            height: ye,
            ...l({ scope: C }),
          },
          u =
            typeof e.intervalClass == "function"
              ? e.intervalClass({ scope: C })
              : {},
          d = e.focusable === !0 && e.focusType.includes("interval");
        return i(
          "div",
          {
            key: c,
            tabindex: d === !0 ? 0 : -1,
            class: {
              "q-calendar-resource__head--interval": !0,
              ...u,
              "q-active-date": fe,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": d === !0,
            },
            style: _,
            onDragenter: (v) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(v, "interval", C) === !0
                  ? (T.value = c)
                  : (T.value = ""));
            },
            onDragover: (v) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(v, "interval", C) === !0
                  ? (T.value = c)
                  : (T.value = ""));
            },
            onDragleave: (v) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(v, "interval", C) === !0
                  ? (T.value = c)
                  : (T.value = ""));
            },
            onDrop: (v) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(v, "interval", C) === !0
                  ? (T.value = c)
                  : (T.value = ""));
            },
            onFocus: (v) => {
              d === !0 && (m.value = c);
            },
            ...ee("-interval", (v) => ({ scope: C, event: v })),
          },
          [ie ? ie({ scope: C }) : c, Ze()]
        );
      }
      function ut() {
        return i("div", { class: "q-calendar-resource__body" }, [ot()]);
      }
      function ot() {
        return i(
          "div",
          {
            ref: f,
            class: {
              "q-calendar-resource__scroll-area": !0,
              "q-calendar__scroll": !0,
            },
          },
          [yt()]
        );
      }
      function vt() {
        return i("div", {}, "No resources have been defined");
      }
      function yt() {
        return i("div", { class: "q-calendar-resource__day--container" }, [
          gt(),
          e.modelResources === void 0 && vt(),
          e.modelResources !== void 0 && mt(),
        ]);
      }
      function mt() {
        return i(
          "div",
          { class: "q-calendar-resource__resources--body" },
          rt()
        );
      }
      function rt(A = void 0, le = 0, ie = !0) {
        return (
          A === void 0 && (A = e.modelResources),
          A.map((fe, me) =>
            Ue(fe, me, le, fe.children !== void 0 ? fe.expanded : ie)
          )
        );
      }
      function Ue(A, le, ie = 0, fe = !0) {
        const me = {};
        (me.height = Fe.value === "auto" ? Fe.value : J(Fe.value)),
          re.value > 0 && (me.minHeight = J(re.value));
        const ye = i(
          "div",
          {
            key: A[e.resourceKey] + "-" + le,
            class: { "q-calendar-resource__resource--row": !0 },
            style: me,
          },
          [Ye(A, le, ie, fe), Ie(A, le)]
        );
        return A.children !== void 0
          ? [
              ye,
              i(
                "div",
                {
                  class: {
                    "q-calendar__child": !0,
                    "q-calendar__child--expanded": fe === !0,
                    "q-calendar__child--collapsed": fe !== !0,
                  },
                },
                [rt(A.children, ie + 1, fe === !1 ? fe : A.expanded)]
              ),
            ]
          : [ye];
      }
      function Ye(A, le, ie = 0, fe = !0) {
        const me = t["resource-label"],
          ye = {};
        (ye.height =
          A.height !== void 0
            ? J(parseInt(A.height, 10))
            : Fe.value
            ? J(Fe.value)
            : "auto"),
          re.value > 0 && (ye.minHeight = J(re.value));
        const Be = e.resourceStyle || ge,
          c = A[e.resourceLabel],
          C =
            e.focusable === !0 && e.focusType.includes("resource") && fe === !0,
          l = {
            resource: A,
            timestamps: qe,
            resourceIndex: le,
            indentLevel: ie,
            label: c,
          },
          _ = A[e.resourceKey];
        l.droppable = x.value === _;
        const u =
          typeof e.resourceClass == "function"
            ? e.resourceClass({ scope: l })
            : {};
        return i(
          "div",
          {
            key: A[e.resourceKey] + "-" + le,
            ref: (d) => {
              O.value[A[e.resourceKey]] = d;
            },
            tabindex: C === !0 ? 0 : -1,
            class: {
              "q-calendar-resource__resource": ie === 0,
              "q-calendar-resource__resource--section": ie !== 0,
              ...u,
              "q-calendar__sticky": e.noSticky !== !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": C === !0,
            },
            style: { ...ye, ...Be({ scope: l }) },
            onDragenter: (d) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(d, "resource", l) === !0
                  ? (x.value = _)
                  : (x.value = ""));
            },
            onDragover: (d) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(d, "resource", l) === !0
                  ? (x.value = _)
                  : (x.value = ""));
            },
            onDragleave: (d) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(d, "resource", l) === !0
                  ? (x.value = _)
                  : (x.value = ""));
            },
            onDrop: (d) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(d, "resource", l) === !0
                  ? (x.value = _)
                  : (x.value = ""));
            },
            onKeydown: (d) => {
              se(d, [13, 32]) && (d.stopPropagation(), d.preventDefault());
            },
            onKeyup: (d) => {
              se(d, [13, 32]) &&
                j.value.onClickResource !== void 0 &&
                n("click-resource", { scope: l, event: d });
            },
            ...ee("-resource", (d) => ({ scope: l, event: d })),
          },
          [
            [
              i("div", {
                class: {
                  "q-calendar__parent": A.children !== void 0,
                  "q-calendar__parent--expanded":
                    A.children !== void 0 && A.expanded === !0,
                  "q-calendar__parent--collapsed":
                    A.children !== void 0 && A.expanded !== !0,
                },
                onClick: (d) => {
                  d.stopPropagation(),
                    (A.expanded = !A.expanded),
                    n("resource-expanded", { expanded: A.expanded, scope: l });
                },
              }),
              i(
                "div",
                {
                  class: {
                    "q-calendar-resource__resource--text": !0,
                    "q-calendar__ellipsis": !0,
                  },
                  style: { paddingLeft: 10 * ie + 2 + "px" },
                },
                [me ? me({ scope: l }) : c]
              ),
              Ze(),
            ],
          ]
        );
      }
      function Ie(A, le) {
        const ie = t["resource-intervals"],
          fe = {
            resource: A,
            timestamps: qe,
            resourceIndex: le,
            timeStartPosX: h,
            timeDurationWidth: G,
          };
        return i("div", { class: "q-calendar-resource__resource--intervals" }, [
          qe.value.map((me) => me.map((ye) => Je(A, ye, le))),
          ie && ie({ scope: fe }),
        ]);
      }
      function Je(A, le, ie) {
        const fe = t["resource-interval"],
          me = e.noActiveDate !== !0 && Ae(le),
          ye = {
            activeDate: me,
            resource: A,
            timestamp: le,
            resourceIndex: ie,
          },
          Be = A[e.resourceKey],
          c = le.time + "-" + Be;
        ye.droppable = $.value === c;
        const C = e.focusable === !0 && e.focusType.includes("time"),
          l = e.intervalStyle || tt,
          _ = J(p.value),
          u = { width: _, maxWidth: _, minWidth: _, ...l({ scope: ye }) };
        return (
          (u.height =
            A.height !== void 0
              ? J(parseInt(A.height, 10))
              : Fe.value > 0
              ? J(Fe.value)
              : "auto"),
          re.value > 0 && (u.minHeight = J(re.value)),
          i(
            "div",
            {
              key: c,
              ref: (d) => {
                W.value[A[e.resourceKey]] = d;
              },
              tabindex: C === !0 ? 0 : -1,
              class: {
                "q-calendar-resource__resource--interval": !0,
                "q-active-date": me,
                "q-calendar__hoverable": e.hoverable === !0,
                "q-calendar__focusable": C === !0,
              },
              style: u,
              onDragenter: (d) => {
                e.dragEnterFunc !== void 0 &&
                  typeof e.dragEnterFunc == "function" &&
                  (e.dragEnterFunc(d, "time", ye) === !0
                    ? ($.value = c)
                    : ($.value = ""));
              },
              onDragover: (d) => {
                e.dragOverFunc !== void 0 &&
                  typeof e.dragOverFunc == "function" &&
                  (e.dragOverFunc(d, "time", ye) === !0
                    ? ($.value = c)
                    : ($.value = ""));
              },
              onDragleave: (d) => {
                e.dragLeaveFunc !== void 0 &&
                  typeof e.dragLeaveFunc == "function" &&
                  (e.dragLeaveFunc(d, "time", ye) === !0
                    ? ($.value = c)
                    : ($.value = ""));
              },
              onDrop: (d) => {
                e.dropFunc !== void 0 &&
                  typeof e.dropFunc == "function" &&
                  (e.dropFunc(d, "time", ye) === !0
                    ? ($.value = c)
                    : ($.value = ""));
              },
              onFocus: (d) => {
                C === !0 && (m.value = c);
              },
              ...ee("-time", (d) => ({ scope: ye, event: d })),
            },
            [fe && fe({ scope: ye }), Ze()]
          )
        );
      }
      function pe() {
        const { start: A, end: le, maxDays: ie } = Ge.value;
        (z.value !== A.date || Z.value !== le.date || V.value !== ie) &&
          ((z.value = A.date), (Z.value = le.date), (V.value = ie));
        const fe = B.width > 0,
          me = Wt(
            i("div", { class: "q-calendar-resource", key: z.value }, [
              fe === !0 && ut(),
            ]),
            [[_t, ze]]
          );
        if (e.animated === !0) {
          const ye =
            "q-calendar--" +
            (M.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i($t, { name: ye, appear: !0 }, () => me);
        }
        return me;
      }
      return (
        r({
          prev: at,
          next: Te,
          move: K,
          moveToToday: Re,
          updateCurrent: We,
          timeStartPosX: h,
          timeDurationWidth: G,
          widthToMinutes: X,
          scrollToTimeX: ce,
        }),
        () => Oe()
      );
    },
  }),
  Xn = Et({
    name: "QCalendarScheduler",
    directives: [_t],
    props: { ...Qt, ...tn, ...ka, ...oa, ...Lt, ...fa, ...It },
    emits: [
      "update:model-value",
      "update:model-resources",
      "resource-expanded",
      ...ta,
      ...Jt,
      ...Ce("-date"),
      ...Ce("-day-resource"),
      ...Ce("-head-resources"),
      ...Ce("-head-day"),
      ...Ce("-resource"),
    ],
    setup(e, { slots: t, emit: n, expose: r }) {
      const f = g(null),
        b = g(null),
        s = g(null),
        D = g(null),
        m = g(null),
        H = g({}),
        W = g({}),
        O = g({}),
        M = g({}),
        z = g("next"),
        Z = g(e.modelValue || et()),
        V = g("0000-00-00"),
        F = g(0),
        B = g(e.modelValue),
        T = St({ width: 0, height: 0 }),
        x = g(!1),
        $ = g(!1),
        he = g(null),
        be = g(null);
      ae(
        () => e.view,
        () => {
          F.value = 0;
        }
      );
      const _e = E(() => (e.view === "month" ? "month-interval" : e.view)),
        p = At();
      if (p === null) throw new Error("current instance is null");
      const { emitListeners: N } = ea(p),
        { isSticky: j } = wa(e),
        { times: Q, setCurrent: k, updateCurrent: We } = jt(e);
      We(), k();
      const {
          weekdaySkips: xe,
          parsedStart: Ne,
          parsedEnd: it,
          dayFormatter: tt,
          weekdayFormatter: Xe,
          ariaDateFormatter: Ge,
          dayStyleDefault: De,
          getRelativeClasses: He,
        } = Xt(e, { startDate: Z, endDate: V, times: Q }),
        Oe = E(() => Ee(e.modelValue, Q.now) || Ne.value || Q.today);
      (m.value = Oe.value), (D.value = Oe.value.date);
      const { renderValues: Le } = Zt(e, {
          parsedView: _e,
          parsedValue: Oe,
          times: Q,
        }),
        {
          rootRef: qe,
          scrollWidth: nt,
          __initCalendar: ge,
          __renderCalendar: ce,
        } = Yt(e, w, { scrollArea: f, pane: b }),
        {
          days: G,
          parsedCellWidth: h,
          styleDefault: X,
        } = ma(e, {
          weekdaySkips: xe,
          times: Q,
          scrollArea: f,
          parsedStart: Ne,
          parsedEnd: it,
          maxDays: F,
          size: T,
          headerColumnRef: s,
        }),
        { move: K } = pt(e, {
          parsedView: _e,
          parsedValue: Oe,
          weekdaySkips: xe,
          direction: z,
          maxDays: F,
          times: Q,
          emittedValue: B,
          emit: n,
        }),
        { getDefaultMouseEventHandlers: ee } = Gt(n, N),
        { checkChange: oe } = aa(n, { days: G, lastStart: he, lastEnd: be }),
        { isKeyCode: se } = Rt(),
        { tryFocus: ue } = na(e, {
          rootRef: qe,
          focusRef: D,
          focusValue: m,
          datesRef: H,
          days: G,
          parsedView: _e,
          parsedValue: Oe,
          emittedValue: B,
          weekdaySkips: xe,
          direction: z,
          times: Q,
        }),
        Fe = E(() =>
          _e.value === "day" && parseInt(e.columnCount, 10) > 1
            ? parseInt(e.columnCount, 10)
            : _e.value === "day" && e.maxDays && e.maxDays > 1
            ? e.maxDays
            : G.value.length
        ),
        re = E(() =>
          qe.value
            ? parseInt(
                getComputedStyle(qe.value).getPropertyValue(
                  "--calendar-resources-width"
                ),
                10
              )
            : 0
        ),
        $e = E(() => {
          const a = parseInt(e.resourceHeight, 10);
          return a === 0 ? "auto" : a;
        }),
        Re = E(() => parseInt(e.resourceMinHeight, 10)),
        Te = E(() => {
          if (qe.value) {
            const a = T.width || qe.value.getBoundingClientRect().width;
            if (a && re.value && Fe.value)
              return (a - nt.value - re.value) / Fe.value + "px";
          }
          return 100 / Fe.value + "%";
        });
      ae([G], oe, { deep: !0, immediate: !0 }),
        ae(
          () => e.modelValue,
          (a, y) => {
            if (B.value !== e.modelValue) {
              if (e.animated === !0) {
                const q = ne(ke(a)),
                  S = ne(ke(y));
                z.value = q >= S ? "next" : "prev";
              }
              B.value = a;
            }
            D.value = a;
          }
        ),
        ae(B, (a, y) => {
          if (B.value !== e.modelValue) {
            if (e.animated === !0) {
              const q = ne(ke(a)),
                S = ne(ke(y));
              z.value = q >= S ? "next" : "prev";
            }
            n("update:model-value", a);
          }
        }),
        ae(D, (a) => {
          a && (m.value = Ee(a));
        }),
        ae(m, (a) => {
          H.value[D.value] ? H.value[D.value].focus() : ue();
        }),
        ae(
          () => e.maxDays,
          (a) => {
            F.value = a;
          }
        ),
        Vt(() => {
          (H.value = {}), (O.value = {}), (M.value = {}), (W.value = {});
        }),
        Ot(() => {
          ge();
        });
      function at() {
        B.value = et();
      }
      function ze(a = 1) {
        K(a);
      }
      function Ae(a = 1) {
        K(-a);
      }
      function gt({ width: a, height: y }) {
        (T.width = a), (T.height = y);
      }
      function Ve(a) {
        return a.date === B.value;
      }
      function ft() {
        return i(
          "div",
          {
            roll: "presentation",
            class: {
              "q-calendar-scheduler__head": !0,
              "q-calendar__sticky": j.value === !0,
            },
            style: { marginRight: nt.value + "px" },
          },
          [ct(), ut()]
        );
      }
      function ct() {
        const a = t["head-resources"],
          y = {
            days: G.value,
            timestamps: G.value,
            date: e.modelValue,
            resources: e.modelResources,
          };
        return i(
          "div",
          {
            class: {
              "q-calendar-scheduler__head--resources": !0,
              "q-calendar__sticky": j.value === !0,
            },
            ...ee("-head-resources", (q) => ({ scope: y, event: q })),
          },
          [a && a({ scope: y })]
        );
      }
      function ut() {
        return i(
          "div",
          { ref: s, class: { "q-calendar-scheduler__head--days__column": !0 } },
          [ot(), vt()]
        );
      }
      function ot() {
        return i(
          "div",
          { class: { "q-calendar-scheduler__head--days__weekdays": !0 } },
          [...yt()]
        );
      }
      function vt() {
        const a = t["head-days-events"];
        return (
          _a(() => {
            if (M.value && parseInt(e.columnCount, 10) === 0 && window)
              try {
                const y = window.getComputedStyle(M.value);
                (O.value.parentElement.style.height = y.height),
                  (O.value.style.height = y.height);
              } catch {}
          }),
          i(
            "div",
            { class: { "q-calendar-scheduler__head--days__event": !0 } },
            [
              a &&
                i(
                  "div",
                  {
                    ref: O,
                    style: {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      overflow: "hidden",
                      zIndex: 1,
                    },
                  },
                  [a({ scope: { timestamps: G.value, days: G.value, ref: M } })]
                ),
              ...mt(),
            ]
          )
        );
      }
      function yt() {
        return G.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((a, y) => y + parseInt(e.columnIndexStart, 10))
              .map((a) => rt(G.value[0], a))
          : G.value.map((a) => rt(a));
      }
      function mt() {
        return G.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((a, y) => y + parseInt(e.columnIndexStart, 10))
              .map((a) => Ye(G.value[0], a))
          : G.value.map((a) => Ye(a));
      }
      function rt(a, y) {
        const q = t["head-day"],
          S = t["head-date"],
          R = e.noActiveDate !== !0 && Ve(a),
          L = {
            timestamp: a,
            activeDate: R,
            droppable: x.value === a.date,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(a.weekday)
              : !1,
          };
        y !== void 0 && (L.columnIndex = y);
        const ve = j.value === !0 ? J(h.value) : Te.value,
          Y = e.weekdayStyle || De,
          lt = { width: ve, maxWidth: ve, minWidth: ve, ...Y({ scope: L }) };
        j.value === !0 && (lt.minWidth = ve);
        const o =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: L })
              : {},
          I = e.focusable === !0 && e.focusType.includes("weekday"),
          P = a.date + (y !== void 0 ? "-" + y : ""),
          U = {
            key: P,
            ref: (te) => {
              H.value[P] = te;
            },
            tabindex: I === !0 ? 0 : -1,
            class: {
              "q-calendar-scheduler__head--day": !0,
              ...o,
              ...He(a),
              "q-active-date": R,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": I === !0,
            },
            style: lt,
            onFocus: (te) => {
              I === !0 && (D.value = P);
            },
            onKeydown: (te) => {
              a.disabled !== !0 &&
                se(te, [13, 32]) &&
                (te.stopPropagation(), te.preventDefault());
            },
            onKeyup: (te) => {
              a.disabled !== !0 && se(te, [13, 32]) && (B.value = a.date);
            },
            ...ee("-head-day", (te) => ({ scope: L, event: te })),
            onDragenter: (te) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(te, "head-day", L) === !0
                  ? (x.value = a.date)
                  : (x.value = ""));
            },
            onDragover: (te) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(te, "head-day", L) === !0
                  ? (x.value = a.date)
                  : (x.value = ""));
            },
            onDragleave: (te) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(te, "head-day", L) === !0
                  ? (x.value = a.date)
                  : (x.value = ""));
            },
            onDrop: (te) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(te, "head-day", L) === !0
                  ? (x.value = a.date)
                  : (x.value = ""));
            },
          };
        return i("div", U, [
          q !== void 0 && q({ scope: L }),
          q === void 0 && le(a, y),
          q === void 0 && Ue(a),
          q === void 0 && S && S({ scope: L }),
          q === void 0 && ie(a, y),
          Ze(),
        ]);
      }
      function Ue(a) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && Ie(a),
            e.noDefaultHeaderBtn !== !0 && pe(a),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Ie(a),
                e.noDefaultHeaderBtn !== !0 && pe(a),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Ie(a),
                e.noDefaultHeaderBtn !== !0 && pe(a),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Ie(a),
                e.noDefaultHeaderBtn !== !0 && pe(a),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && pe(a),
                e.noDefaultHeaderText !== !0 && Ie(a),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && pe(a),
                e.noDefaultHeaderText !== !0 && Ie(a),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && pe(a),
                e.noDefaultHeaderText !== !0 && Ie(a),
              ]);
      }
      function Ye(a, y) {
        const q = t["head-day-event"],
          S = e.noActiveDate !== !0 && Ve(a),
          R = {
            timestamp: a,
            activeDate: S,
            droppable: x.value === a.date,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(a.weekday)
              : !1,
          };
        y !== void 0 && (R.columnIndex = y);
        const L = j.value === !0 ? J(h.value) : Te.value,
          ve = { width: L, maxWidth: L, minWidth: L };
        return (
          j.value === !0 && (ve.minWidth = L),
          i(
            "div",
            {
              key: "event-" + a.date + (y !== void 0 ? "-" + y : ""),
              class: {
                "q-calendar-scheduler__head--day__event": !0,
                ...He(a),
                "q-active-date": S,
              },
              style: ve,
            },
            [q && q({ scope: R })]
          )
        );
      }
      function Ie(a) {
        const y = t["head-weekday-label"],
          q = e.shortWeekdayLabel === !0,
          S = { timestamp: a, shortWeekdayLabel: q },
          R = {
            class: {
              "q-calendar-scheduler__head--weekday": !0,
              ["q-calendar__" + e.weekdayAlign]: !0,
              "q-calendar__ellipsis": !0,
            },
          };
        return i("div", R, (y && y({ scope: S })) || Je(a, q));
      }
      function Je(a, y) {
        const q = Xe.value(
          a,
          y ||
            (e.weekdayBreakpoints[0] > 0 && h.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          {
            class:
              "q-calendar-scheduler__head--weekday-label q-calendar__ellipsis",
          },
          e.weekdayBreakpoints[1] > 0 && h.value <= e.weekdayBreakpoints[1]
            ? ca(q, e.minWeekdayLabel)
            : q
        );
      }
      function pe(a) {
        const y = {
          class: {
            "q-calendar-scheduler__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", y, A(a));
      }
      function A(a) {
        const y = e.noActiveDate !== !0 && Ve(a),
          q = tt.value(a, !1),
          S = t["head-day-label"],
          R = t["head-day-button"],
          L = { dayLabel: q, timestamp: a, activeDate: y },
          ve = {
            class: {
              "q-calendar-scheduler__head--day__label": !0,
              "q-calendar__button": !0,
              "q-calendar__button--round": e.dateType === "round",
              "q-calendar__button--rounded": e.dateType === "rounded",
              "q-calendar__button--bordered": a.current === !0,
              "q-calendar__focusable": !0,
            },
            disabled: a.disabled,
            onKeydown: (Y) => {
              a.disabled !== !0 &&
                se(Y, [13, 32]) &&
                (Y.stopPropagation(), Y.preventDefault());
            },
            onKeyup: (Y) => {
              a.disabled !== !0 &&
                se(Y, [13, 32]) &&
                ((B.value = a.date),
                N.value.onClickDate !== void 0 &&
                  n("click-date", { scope: L }));
            },
            ...ee(
              "-date",
              (Y, lt) => (
                (lt === "click-date" || lt === "contextmenu-date") &&
                  ((B.value = a.date),
                  lt === "click-date" && Y.preventDefault()),
                { scope: L, event: Y }
              )
            ),
          };
        return (
          e.noAria !== !0 && (ve.ariaLabel = Ge.value(a)),
          R ? R({ scope: L }) : sa(e, ve, S ? S({ scope: L }) : q)
        );
      }
      function le(a, y) {
        const q = t["column-header-before"];
        if (q)
          return i(
            "div",
            { class: "q-calendar-scheduler__column-header--before" },
            [q({ scope: { timestamp: a, columnIndex: y } })]
          );
      }
      function ie(a, y) {
        const q = t["column-header-after"];
        if (q)
          return i(
            "div",
            { class: "q-calendar-scheduler__column-header--after" },
            [q({ scope: { timestamp: a, columnIndex: y } })]
          );
      }
      function fe() {
        return i("div", { class: "q-calendar-scheduler__body" }, [me()]);
      }
      function me() {
        return j.value === !0
          ? i(
              "div",
              {
                ref: f,
                class: {
                  "q-calendar-scheduler__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [j.value !== !0 && _(), Be()]
            )
          : e.noScroll === !0
          ? ye()
          : i(
              "div",
              {
                ref: f,
                class: {
                  "q-calendar-scheduler__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [ye()]
            );
      }
      function ye() {
        return i("div", { ref: b, class: "q-calendar-scheduler__pane" }, [
          Be(),
        ]);
      }
      function Be() {
        return i("div", { class: "q-calendar-scheduler__day--container" }, [
          j.value === !0 && e.noHeader !== !0 && ft(),
          c(),
        ]);
      }
      function c(a = void 0, y = 0, q = !0) {
        return (
          a === void 0 && (a = e.modelResources),
          a.map((S, R) => C(S, R, y, S.children !== void 0 ? S.expanded : q))
        );
      }
      function C(a, y, q = 0, S = !0) {
        const R = {};
        (R.height =
          a.height !== void 0
            ? J(parseInt(a.height, 10))
            : $e.value
            ? J($e.value)
            : "auto"),
          Re.value > 0 && (R.minHeight = J(Re.value));
        const L = i(
          "div",
          {
            key: a[e.resourceKey] + "-" + y,
            class: { "q-calendar-scheduler__resource--row": !0 },
            style: R,
          },
          [l(a, y, q, S), _(a, y, q, S)]
        );
        return a.children !== void 0
          ? [
              L,
              i(
                "div",
                {
                  class: {
                    "q-calendar__child": !0,
                    "q-calendar__child--expanded": S === !0,
                    "q-calendar__child--collapsed": S !== !0,
                  },
                },
                [c(a.children, q + 1, S === !1 ? S : a.expanded)]
              ),
            ]
          : [L];
      }
      function l(a, y, q = 0, S = !0) {
        const R = t["resource-label"],
          L = {};
        (L.height =
          a.height !== void 0
            ? J(parseInt(a.height, 10))
            : $e.value
            ? J($e.value)
            : "auto"),
          parseInt(e.resourceMinHeight, 10) > 0 &&
            (L.minHeight = J(parseInt(e.resourceMinHeight, 10)));
        const ve = e.resourceStyle || X,
          Y = a[e.resourceLabel],
          lt =
            e.focusable === !0 && e.focusType.includes("resource") && S === !0,
          o = {
            resource: a,
            timestamps: G.value,
            days: G.value,
            resourceIndex: y,
            indentLevel: q,
            label: Y,
          },
          I = a[e.resourceKey];
        o.droppable = $.value === I;
        const P =
          typeof e.resourceClass == "function"
            ? e.resourceClass({ scope: o })
            : {};
        return i(
          "div",
          {
            key: a[e.resourceKey] + "-" + y,
            ref: (U) => {
              W.value[a[e.resourceKey]] = U;
            },
            tabindex: lt === !0 ? 0 : -1,
            class: {
              "q-calendar-scheduler__resource": q === 0,
              "q-calendar-scheduler__resource--section": q !== 0,
              ...P,
              "q-calendar__sticky": j.value === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": lt === !0,
            },
            style: { ...L, ...ve({ scope: o }) },
            onDragenter: (U) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(U, "resource", o) === !0
                  ? ($.value = I)
                  : ($.value = ""));
            },
            onDragover: (U) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(U, "resource", o) === !0
                  ? ($.value = I)
                  : ($.value = ""));
            },
            onDragleave: (U) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(U, "resource", o) === !0
                  ? ($.value = I)
                  : ($.value = ""));
            },
            onDrop: (U) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(U, "resource", o) === !0
                  ? ($.value = I)
                  : ($.value = ""));
            },
            onKeydown: (U) => {
              se(U, [13, 32]) && (U.stopPropagation(), U.preventDefault());
            },
            onKeyup: (U) => {
              se(U, [13, 32]) &&
                N.value.onClickResource !== void 0 &&
                n("click-resource", { scope: o, event: U });
            },
            ...ee("-resource", (U) => ({ scope: o, event: U })),
          },
          [
            [
              i("div", {
                class: {
                  "q-calendar__parent": a.children !== void 0,
                  "q-calendar__parent--expanded":
                    a.children !== void 0 && a.expanded === !0,
                  "q-calendar__parent--collapsed":
                    a.children !== void 0 && a.expanded !== !0,
                },
                onClick: (U) => {
                  U.stopPropagation(),
                    (a.expanded = !a.expanded),
                    n("resource-expanded", { expanded: a.expanded, scope: o });
                },
              }),
              i(
                "div",
                {
                  class: {
                    "q-calendar-scheduler__resource--text": !0,
                    "q-calendar__ellipsis": !0,
                  },
                  style: { paddingLeft: 10 * q + 2 + "px" },
                },
                [R ? R({ scope: o }) : Y]
              ),
              Ze(),
            ],
          ]
        );
      }
      function _(a, y, q = 0, S = !0) {
        const R = t["resource-days"],
          L = j.value === !0 ? J(h.value) : Te.value,
          ve = {
            resource: a,
            resourceIndex: y,
            indentLevel: q,
            expanded: S,
            cellWidth: L,
            timestamps: G.value,
            days: G.value,
          },
          Y = {};
        return (
          (Y.height =
            parseInt(e.resourceHeight, 10) > 0
              ? J(parseInt(e.resourceHeight, 10))
              : "auto"),
          parseInt(e.resourceMinHeight, 10) > 0 &&
            (Y.minHeight = J(parseInt(e.resourceMinHeight, 10))),
          i(
            "div",
            { class: "q-calendar-scheduler__resource--days", style: Y },
            [...u(a, y, q, S), R && R({ scope: ve })]
          )
        );
      }
      function u(a, y, q = 0, S = !0) {
        return G.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((R, L) => L + parseInt(e.columnIndexStart, 10))
              .map((R) => d(G.value[0], R, a, y, q, S))
          : G.value.map((R) => d(R, void 0, a, y, q, S));
      }
      function d(a, y, q, S, R = 0, L = !0) {
        const ve = t.day,
          Y = e.dayStyle || De,
          lt = e.noActiveDate !== !0 && Oe.value.date === a.date,
          o = a.date + ":" + q[e.resourceKey] + (y !== void 0 ? ":" + y : ""),
          I = $.value === o,
          P = {
            timestamp: a,
            columnIndex: y,
            resource: q,
            resourceIndex: S,
            indentLevel: R,
            activeDate: lt,
            droppable: I,
          },
          U = j.value === !0 ? J(h.value) : Te.value,
          te = { width: U, maxWidth: U, ...Y({ scope: P }) };
        (te.height =
          parseInt(e.resourceHeight, 10) > 0
            ? J(parseInt(e.resourceHeight, 10))
            : "auto"),
          parseInt(e.resourceMinHeight, 10) > 0 &&
            (te.minHeight = J(parseInt(e.resourceMinHeight, 10)));
        const de =
            typeof e.dayClass == "function" ? e.dayClass({ scope: P }) : {},
          Pe = e.focusable === !0 && e.focusType.includes("day") && L === !0;
        return i(
          "div",
          {
            key: a.date + (y !== void 0 ? ":" + y : ""),
            tabindex: Pe === !0 ? 0 : -1,
            class: {
              "q-calendar-scheduler__day": R === 0,
              "q-calendar-scheduler__day--section": R !== 0,
              ...de,
              ...He(a),
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Pe === !0,
            },
            style: te,
            onDragenter: (we) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(we, "day", P) === !0
                  ? ($.value = o)
                  : ($.value = ""));
            },
            onDragover: (we) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(we, "day", P) === !0
                  ? ($.value = o)
                  : ($.value = ""));
            },
            onDragleave: (we) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(we, "day", P) === !0
                  ? ($.value = o)
                  : ($.value = ""));
            },
            onDrop: (we) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(we, "day", P) === !0
                  ? ($.value = o)
                  : ($.value = ""));
            },
            onKeydown: (we) => {
              se(we, [13, 32]) && (we.stopPropagation(), we.preventDefault());
            },
            onKeyup: (we) => {
              se(we, [13, 32]) &&
                ((B.value = P.timestamp.date),
                N.value.onClickResource !== void 0 &&
                  n("click-resource", { scope: P, event: we }));
            },
            ...ee("-day-resource", (we) => ({ scope: P, event: we })),
          },
          [ve && ve({ scope: P }), Ze()]
        );
      }
      function v() {
        return i("div", {}, "No resources have been defined");
      }
      function w() {
        const { start: a, end: y, maxDays: q } = Le.value;
        (Z.value !== a.date || V.value !== y.date || F.value !== q) &&
          ((Z.value = a.date), (V.value = y.date), (F.value = q));
        const S = T.width > 0,
          R = e.modelResources && e.modelResources.length > 0,
          L = Wt(
            i("div", { key: Z.value, class: "q-calendar-scheduler" }, [
              S === !0 &&
                R === !0 &&
                j.value !== !0 &&
                e.noHeader !== !0 &&
                ft(),
              S === !0 && R === !0 && fe(),
              R === !1 && v(),
            ]),
            [[_t, gt]]
          );
        if (e.animated === !0) {
          const ve =
            "q-calendar--" +
            (z.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i($t, { name: ve, appear: !0 }, () => L);
        }
        return L;
      }
      return (
        r({ prev: Ae, next: ze, move: K, moveToToday: at, updateCurrent: We }),
        () => ce()
      );
    },
  });
const dn = {
  modelValue: {
    type: String,
    default: et(),
    validator: (e) => e === "" || Ha(e),
  },
  modelTasks: { type: Array, default: [] },
  modelTitle: { type: Array, default: [] },
  modelFooter: { type: Array, default: [] },
  taskKey: { type: [String, Number], default: "id" },
  weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
  dateType: {
    type: String,
    default: "round",
    validator: (e) => ["round", "rounded", "square"].includes(e),
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (e) => ["stacked", "inline", "inverted"].includes(e),
  },
  weekdayAlign: {
    type: String,
    default: "center",
    validator: (e) => ["left", "center", "right"].includes(e),
  },
  dateAlign: {
    type: String,
    default: "center",
    validator: (e) => ["left", "center", "right"].includes(e),
  },
  view: {
    type: String,
    validator: (e) => ["day", "week", "month"].includes(e),
  },
  viewCount: { type: Number, default: 1, validator: (e) => Qe(e) && e > 0 },
  bordered: Boolean,
  dark: Boolean,
  noAria: Boolean,
  noActiveDate: Boolean,
  shortWeekdayLabel: Boolean,
  noHeader: Boolean,
  noDefaultHeaderText: Boolean,
  noDefaultHeaderBtn: Boolean,
  cellWidth: [Number, String],
  minWeekdayLabel: { type: [Number, String], default: 2 },
  weekdayBreakpoints: {
    type: Array,
    default: () => [75, 35],
    validator: (e) => e.length === 2,
  },
  locale: { type: String, default: "en-US" },
  animated: Boolean,
  transitionPrev: { type: String, default: "slide-right" },
  transitionNext: { type: String, default: "slide-left" },
  disabledDays: Array,
  disabledBefore: String,
  disabledAfter: String,
  disabledWeekdays: { type: Array, default: () => [] },
  weekdayClass: Function,
  dayClass: Function,
  footerDayClass: Function,
  dragEnterFunc: { type: Function },
  dragOverFunc: { type: Function },
  dragLeaveFunc: { type: Function },
  dropFunc: { type: Function },
  hoverable: Boolean,
  focusable: Boolean,
  focusType: {
    type: Array,
    default: ["date"],
    validator: (e) => {
      let t = !0;
      return (
        e.forEach((n) => {
          ["day", "date", "weekday", "interval", "resource", "task"].includes(
            n
          ) !== !0 && (t = !1);
        }),
        t
      );
    },
  },
  taskWidth: { type: Number, default: 200, validator: (e) => Qe(e) && e > 0 },
};
function jn(e, t, { weekdaySkips: n, times: r }) {
  const f = E(() => {
      if (e.view === "day") return Ee(e.modelValue);
      if (e.view === "week") return Ut(Ee(e.modelValue), e.weekdays, r.today);
      if (e.view === "month") return ia(Ee(e.modelValue), e.weekdays, r.today);
      throw new Error(`QCalendarTask: unknown 'view' type (${e.view})`);
    }),
    b = E(() => {
      if (e.view === "day") {
        if (e.viewCount === 1) return f.value;
        let D = Se(f.value);
        return (D = Me(D, { day: e.viewCount - 1 })), D;
      } else if (e.view === "week") {
        if (e.viewCount === 1) return xt(Ee(e.modelValue), e.weekdays, r.today);
        {
          let D = Se(f.value);
          return (
            (D = Me(D, { day: (e.viewCount - 1) * Bt })),
            xt(D, e.weekdays, r.today)
          );
        }
      } else if (e.view === "month") {
        if (e.viewCount === 1) return zt(Ee(e.modelValue), e.weekdays, r.today);
        {
          let D = Se(f.value);
          return (
            (D = Me(D, { month: e.viewCount })), zt(D, e.weekdays, r.today)
          );
        }
      } else throw new Error(`QCalendarTask: unknown 'view' type (${e.view})`);
    });
  return {
    days: E(() =>
      ha(
        f.value,
        b.value,
        r.today,
        n.value,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        Number.MAX_SAFE_INTEGER
      )
    ),
    parsedStartDate: f,
    parsedEndDate: b,
  };
}
var Zn = Et({
  name: "QCalendarTask",
  directives: [_t],
  props: { ...Lt, ...It, ...dn },
  emits: [
    "update:model-value",
    "update:model-tasks",
    "update:model-title",
    "update:model-footer",
    "task-expanded",
    ...ta,
    ...Jt,
    ...Ce("-date"),
    ...Ce("-day"),
    ...Ce("-head-day"),
  ],
  setup(e, { slots: t, emit: n, expose: r }) {
    const f = g(null),
      b = g(null),
      s = g("next"),
      D = g(e.modelValue || et()),
      m = g("0000-00-00"),
      H = g(0),
      W = g(e.modelValue),
      O = g(null),
      M = g(null),
      z = g({}),
      Z = St({ width: 0, height: 0 }),
      V = g(!1),
      F = g(null),
      B = g(null);
    ae(
      () => e.view,
      () => {
        H.value = 0;
      }
    );
    const T = E(() => (e.view === "month" ? "month-interval" : e.view)),
      x = At();
    if (x === null) throw new Error("current instance is null");
    const { emitListeners: $ } = ea(x),
      { times: he, setCurrent: be, updateCurrent: _e } = jt(e);
    _e(), be();
    const {
        weekdaySkips: p,
        parsedStart: N,
        dayFormatter: j,
        weekdayFormatter: Q,
        ariaDateFormatter: k,
        dayStyleDefault: We,
        getRelativeClasses: xe,
      } = Xt(e, { startDate: D, endDate: m, times: he }),
      Ne = E(() => Ee(e.modelValue, he.now) || N.value || he.today);
    (M.value = Ne.value), (O.value = Ne.value.date);
    const { renderValues: it } = Zt(e, {
        parsedView: T,
        times: he,
        parsedValue: Ne,
      }),
      {
        rootRef: tt,
        __initCalendar: Xe,
        __renderCalendar: Ge,
      } = Yt(e, _, { scrollArea: f, pane: b }),
      {
        days: De,
        parsedStartDate: He,
        parsedEndDate: Oe,
      } = jn(e, n, { weekdaySkips: p, times: he }),
      { move: Le } = pt(e, {
        parsedView: T,
        parsedValue: Ne,
        weekdaySkips: p,
        direction: s,
        maxDays: H,
        times: he,
        emittedValue: W,
        emit: n,
      }),
      { getDefaultMouseEventHandlers: qe } = Gt(n, $),
      { checkChange: nt } = aa(n, { days: De, lastStart: F, lastEnd: B }),
      { isKeyCode: ge } = Rt(),
      { tryFocus: ce } = na(e, {
        rootRef: tt,
        focusRef: O,
        focusValue: M,
        datesRef: z,
        days: De,
        parsedView: T,
        parsedValue: Ne,
        emittedValue: W,
        weekdaySkips: p,
        direction: s,
        times: he,
      }),
      G = g(!0),
      h = E(() => (e.cellWidth !== void 0 ? parseInt(e.cellWidth, 10) : 150)),
      X = E(
        () =>
          e.focusable === !0 &&
          e.focusType.includes("day") &&
          isMiniMode.value !== !0
      ),
      K = E(
        () =>
          e.focusable === !0 && e.focusType.includes("date") && X.value !== !0
      ),
      ee = E(() => e.focusable === !0 && e.focusType.includes("weekday")),
      oe = E(() => parseInt(e.dayHeight, 10)),
      se = E(() => parseInt(e.dayMinHeight, 10));
    ae([De], nt, { deep: !0, immediate: !0 }),
      ae(
        () => e.modelValue,
        (u, d) => {
          if (W.value !== u) {
            if (e.animated === !0) {
              const v = ne(ke(u)),
                w = ne(ke(d));
              s.value = v >= w ? "next" : "prev";
            }
            W.value = u;
          }
          O.value = u;
        }
      ),
      ae(W, (u, d) => {
        if (W.value !== e.modelValue) {
          if (e.animated === !0) {
            const v = ne(ke(u)),
              w = ne(ke(d));
            s.value = v >= w ? "next" : "prev";
          }
          n("update:model-value", u);
        }
      }),
      ae(O, (u) => {
        u && (M.value = Ee(u));
      }),
      ae(M, (u) => {
        z.value[O.value] ? z.value[O.value].focus() : ce();
      }),
      Vt(() => {
        z.value = {};
      }),
      Ot(() => {
        Xe();
      });
    function ue() {
      W.value = et();
    }
    function Fe(u = 1) {
      Le(u);
    }
    function re(u = 1) {
      Le(-u);
    }
    function $e({ width: u, height: d }) {
      (Z.width = u), (Z.height = d);
    }
    function Re(u) {
      return u.date === W.value;
    }
    function Te(u, d, v) {
      const w = t.day,
        a = e.dayStyle || We,
        y = e.noActiveDate !== !0 && Ne.value.date === u.date,
        q = { timestamp: u, task: d, taskIndex: v, activeDate: y },
        S = J(h.value),
        R = { width: S, minWidth: S, maxWidth: S, ...a({ scope: q }) },
        L = typeof e.dayClass == "function" ? e.dayClass({ scope: q }) : {};
      return i(
        "div",
        {
          tabindex: X.value === !0 ? 0 : -1,
          class: {
            "q-calendar-task__task--day": !0,
            ...L,
            ...xe(u),
            "q-active-date": y === !0,
            "q-calendar__hoverable": e.hoverable === !0,
            "q-calendar__focusable": X.value === !0,
          },
          style: R,
          onFocus: (ve) => {
            X.value;
          },
          ...qe("-day", (ve) => ({ scope: q, event: ve })),
          onDragenter: (ve) => {
            e.dragEnterFunc !== void 0 &&
              typeof e.dragEnterFunc == "function" &&
              (e.dragEnterFunc(ve, "day", q) === !0
                ? (dragOverResource.value = dragValue)
                : (dragOverResource.value = ""));
          },
          onDragover: (ve) => {
            e.dragOverFunc !== void 0 &&
              typeof e.dragOverFunc == "function" &&
              (e.dragOverFunc(ve, "day", q) === !0
                ? (dragOverResource.value = dragValue)
                : (dragOverResource.value = ""));
          },
          onDragleave: (ve) => {
            e.dragLeaveFunc !== void 0 &&
              typeof e.dragLeaveFunc == "function" &&
              (e.dragLeaveFunc(ve, "day", q) === !0
                ? (dragOverResource.value = dragValue)
                : (dragOverResource.value = ""));
          },
          onDrop: (ve) => {
            e.dropFunc !== void 0 &&
              typeof e.dropFunc == "function" &&
              (e.dropFunc(ve, "day", q) === !0
                ? (dragOverResource.value = dragValue)
                : (dragOverResource.value = ""));
          },
        },
        [w && w({ scope: q }), Ze()]
      );
    }
    function at(u, d) {
      return De.value.map((v) => Te(v, u, d));
    }
    function ze(u, d) {
      const v = t.days,
        w = {
          timestamps: De.value,
          days: De.value,
          task: u,
          taskIndex: d,
          cellWidth: h.value,
        };
      return i("div", { class: "q-calendar-task__task--days-row" }, [
        at(u, d),
        v && v({ scope: w }),
      ]);
    }
    function Ae(u, d, v = 0, w = !0) {
      const a = t.task,
        y = {
          start: He.value,
          end: Oe.value,
          task: u,
          taskIndex: d,
          expanded: w,
        },
        q = J(e.taskWidth),
        S = { width: q, minWidth: q, maxWidth: q },
        R = e.focusable === !0 && e.focusType.includes("task");
      return i(
        "div",
        {
          class: {
            "q-calendar-task__task--item": !0,
            "q-calendar__sticky": G.value === !0,
            "q-calendar__hoverable": e.hoverable === !0,
            "q-calendar__focusable": R === !0,
          },
          style: S,
        },
        [
          i(
            "div",
            {
              style: {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 10 + 10 * v + "px",
              },
            },
            [
              i("div", {
                class: {
                  "q-calendar__parent": u.children !== void 0,
                  "q-calendar__parent--expanded":
                    u.children !== void 0 && u.expanded === !0,
                  "q-calendar__parent--collapsed":
                    u.children !== void 0 && u.expanded !== !0,
                },
                onClick: (L) => {
                  L.stopPropagation(),
                    (u.expanded = !u.expanded),
                    n("task-expanded", { expanded: u.expanded, scope: y });
                },
              }),
            ]
          ),
          a && a({ scope: y }),
          Ze(),
        ]
      );
    }
    function gt(u, d, v = 0, w = !0) {
      const a =
          u.height !== void 0
            ? J(parseInt(u.height, 10))
            : oe.value > 0
            ? J(oe.value)
            : "auto",
        y = se.value > 0 ? J(se.value) : void 0,
        q = { height: a };
      y !== void 0 && (q.minHeight = y);
      const S = i(
        "div",
        {
          key: u[e.taskKey] + "-" + d,
          class: {
            "q-calendar-task__task": v === 0,
            "q-calendar-task__task--section": v !== 0,
          },
          style: q,
        },
        [Ae(u, d, v, w), ze(u, d)]
      );
      return u.children !== void 0
        ? [
            S,
            i(
              "div",
              {
                class: {
                  "q-calendar__child": !0,
                  "q-calendar__child--expanded": w === !0,
                  "q-calendar__child--collapsed": w !== !0,
                },
              },
              [Ve(u.children, v + 1, w === !1 ? w : u.expanded)]
            ),
          ]
        : [S];
    }
    function Ve(u = void 0, d = 0, v = !0) {
      return (
        u === void 0 && (u = e.modelTasks),
        u.map((w, a) => gt(w, a, d, w.children !== void 0 ? w.expanded : v))
      );
    }
    function ft() {
      return i(
        "div",
        {
          class: {
            "q-calendar-task__task--container": !0,
            "q-calendar__sticky": G.value === !0,
          },
        },
        [Ve()]
      );
    }
    function ct(u, d) {
      const v = t["footer-task"],
        w = { start: He.value, end: Oe.value, footer: u, index: d },
        a = J(e.taskWidth),
        y = { width: a, minWidth: a, maxWidth: a };
      return i(
        "div",
        {
          class: {
            "q-calendar-task__footer--task": !0,
            "q-calendar__sticky": G.value === !0,
          },
          style: y,
        },
        [v && v({ scope: w })]
      );
    }
    function ut(u, d, v) {
      const w = t["footer-day"],
        a = { timestamp: u, footer: d, index: v },
        y = J(h.value),
        q = { width: y, minWidth: y, maxWidth: y },
        S =
          typeof e.footerDayClass == "function"
            ? e.footerDayClass({ scope: a })
            : {};
      return i(
        "div",
        {
          class: {
            "q-calendar-task__footer--day": !0,
            ...S,
            ...xe(u),
            "q-calendar__hoverable": e.hoverable === !0,
            "q-calendar__focusable": X.value === !0,
          },
          style: q,
        },
        [w && w({ scope: a })]
      );
    }
    function ot(u, d) {
      return i("div", { class: "q-calendar-task__footer--day-wrapper" }, [
        De.value.map((v) => ut(v, u, d)),
      ]);
    }
    function vt() {
      const u = e.focusable === !0 && e.focusType.includes("task");
      return e.modelFooter.map((d, v) =>
        i(
          "div",
          {
            class: {
              "q-calendar-task__footer--wrapper": !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": u === !0,
            },
          },
          { default: () => [ct(d, v), ot(d, v)] }
        )
      );
    }
    function yt() {
      return i(
        "div",
        {
          class: {
            "q-calendar-task__footer": !0,
            "q-calendar__sticky": G.value === !0,
          },
        },
        vt()
      );
    }
    function mt() {
      return i("div", { class: { "q-calendar-task__container": !0 } }, [
        e.noHeader !== !0 && c(),
        ft(),
        yt(),
      ]);
    }
    function rt() {
      const u = t["head-tasks"],
        d = { start: He.value, end: Oe.value },
        v = J(parseInt(e.taskWidth, 10)),
        w = { width: v, minWidth: v, maxWidth: v };
      return i(
        "div",
        {
          class: {
            "q-calendar-task__head--tasks": !0,
            "q-calendar__sticky": G.value === !0,
          },
          style: w,
        },
        [u && u({ scope: d })]
      );
    }
    function Ue(u, d) {
      const v = t["title-task"],
        w = J(parseInt(e.taskWidth, 10)),
        a = { width: w, minWidth: w, maxWidth: w },
        y = {
          start: He.value,
          end: Oe.value,
          cellWidth: w,
          title: u,
          index: d,
        };
      return i(
        "div",
        {
          class: {
            "q-calendar-task__title--task": !0,
            "q-calendar__sticky": G.value === !0,
          },
          style: a,
        },
        [v && v({ scope: y })]
      );
    }
    function Ye(u) {
      const d = t["head-weekday-label"],
        w = {
          activeDate: e.noActiveDate !== !0 && Re(u),
          timestamp: u,
          disabled: e.disabledWeekdays
            ? e.disabledWeekdays.includes(u.weekday)
            : !1,
        },
        a = {
          class: {
            "q-calendar-task__head--weekday": !0,
            ["q-calendar__" + e.weekdayAlign]: !0,
            "q-calendar__ellipsis": !0,
          },
        };
      return i("div", a, (d && d({ scope: w })) || Ie(u, e.shortWeekdayLabel));
    }
    function Ie(u, d) {
      const v = Q.value(
        u,
        d || (e.weekdayBreakpoints[0] > 0 && h.value <= e.weekdayBreakpoints[0])
      );
      return i(
        "span",
        { class: "q-calendar__ellipsis" },
        e.weekdayBreakpoints[1] > 0 && h.value <= e.weekdayBreakpoints[1]
          ? ca(v, e.minWeekdayLabel)
          : v
      );
    }
    function Je(u) {
      const d = {
        class: {
          "q-calendar-task__head--date": !0,
          ["q-calendar__" + e.dateAlign]: !0,
        },
      };
      return i("div", d, pe(u));
    }
    function pe(u) {
      const d = e.noActiveDate !== !0 && Re(u),
        v = j.value(u, !1),
        w = t["head-day-label"],
        a = t["head-day-button"],
        y = { dayLabel: v, timestamp: u, activeDate: d },
        S = {
          key: u.date,
          tabindex: K.value === !0 ? 0 : -1,
          class: {
            "q-calendar-task__head--day__label": !0,
            "q-calendar__button": !0,
            "q-calendar__button--round": e.dateType === "round",
            "q-calendar__button--rounded": e.dateType === "rounded",
            "q-calendar__button--bordered": u.current === !0,
            "q-calendar__hoverable": e.hoverable === !0,
            "q-calendar__focusable": K.value === !0,
          },
          disabled: u.disabled,
          onKeydown: (R) => {
            u.disabled !== !0 &&
              ge(R, [13, 32]) &&
              (R.stopPropagation(), R.preventDefault());
          },
          onKeyup: (R) => {
            u.disabled !== !0 &&
              ge(R, [13, 32]) &&
              ((W.value = u.date),
              $.value.onClickDate !== void 0 && n("click-date", { scope: y }));
          },
          ...qe(
            "-date",
            (R, L) => (
              (L === "click-date" || L === "contextmenu-date") &&
                ((W.value = u.date), L === "click-date" && R.preventDefault()),
              { scope: y, event: R }
            )
          ),
        };
      return (
        e.noAria !== !0 && (S.ariaLabel = k.value(u)),
        a ? a({ scope: y }) : sa(e, S, w ? w({ scope: y }) : v)
      );
    }
    function A(u) {
      if (e.dateHeader === "stacked")
        return [
          e.noDefaultHeaderText !== !0 && Ye(u),
          e.noDefaultHeaderBtn !== !0 && Je(u),
        ];
      if (e.dateHeader === "inline")
        return e.weekdayAlign === "left" && e.dateAlign === "right"
          ? i("div", { class: "q-calendar__header--inline" }, [
              e.noDefaultHeaderText !== !0 && Ye(u),
              e.noDefaultHeaderBtn !== !0 && Je(u),
            ])
          : e.weekdayAlign === "right" && e.dateAlign === "left"
          ? i("div", { class: "q-calendar__header--inline" }, [
              e.noDefaultHeaderText !== !0 && Ye(u),
              e.noDefaultHeaderBtn !== !0 && Je(u),
            ])
          : i("div", { class: "q-calendar__header--inline" }, [
              e.noDefaultHeaderText !== !0 && Ye(u),
              e.noDefaultHeaderBtn !== !0 && Je(u),
            ]);
      if (e.dateHeader === "inverted")
        return e.weekdayAlign === "left" && e.dateAlign === "right"
          ? i("div", { class: "q-calendar__header--inline" }, [
              e.noDefaultHeaderBtn !== !0 && Je(u),
              e.noDefaultHeaderText !== !0 && Ye(u),
            ])
          : e.weekdayAlign === "right" && e.dateAlign === "left"
          ? i("div", { class: "q-calendar__header--inline" }, [
              e.noDefaultHeaderBtn !== !0 && Je(u),
              e.noDefaultHeaderText !== !0 && Ye(u),
            ])
          : i("div", { class: "q-calendar__header--inline" }, [
              e.noDefaultHeaderBtn !== !0 && Je(u),
              e.noDefaultHeaderText !== !0 && Ye(u),
            ]);
    }
    function le(u, d, v) {
      const w = t["title-day"],
        a = J(h.value),
        y = { width: a, minWidth: a, maxWidth: a },
        q = { timestamp: u, title: d, index: v, cellWidth: h.value },
        S = typeof e.dayClass == "function" ? e.dayClass({ scope: q }) : {},
        R = e.focusable === !0 && e.focusType.includes("day");
      return i(
        "div",
        {
          class: {
            "q-calendar-task__title--day": !0,
            ...S,
            ...xe(u),
            "q-calendar__hoverable": e.hoverable === !0,
            "q-calendar__focusable": R === !0,
          },
          style: y,
        },
        [w && w({ scope: q }), Ze()]
      );
    }
    function ie(u) {
      const d = t["head-day"],
        v = t["head-date"],
        w = e.noActiveDate !== !0 && Re(u),
        a = {
          timestamp: u,
          activeDate: w,
          droppable: (V.value = u.date),
          disabled: e.disabledWeekdays
            ? e.disabledWeekdays.includes(u.weekday)
            : !1,
        },
        y = e.weekdayStyle || We,
        q =
          typeof e.weekdayClass == "function"
            ? e.weekdayClass({ scope: a })
            : {},
        S = J(h.value),
        R = { width: S, minWidth: S, maxWidth: S, ...y({ scope: a }) },
        L = u.date,
        ve = {
          key: L,
          ref: (Y) => {
            z.value[L] = Y;
          },
          tabindex: ee.value === !0 ? 0 : -1,
          class: {
            "q-calendar-task__head--day": !0,
            ...q,
            ...xe(u),
            "q-active-date": w,
            "q-calendar__hoverable": e.hoverable === !0,
            "q-calendar__focusable": ee.value === !0,
          },
          style: R,
          onFocus: (Y) => {
            ee.value === !0 && (O.value = L);
          },
          onKeydown: (Y) => {
            u.disabled !== !0 &&
              ge(Y, [13, 32]) &&
              (Y.stopPropagation(), Y.preventDefault());
          },
          onKeyup: (Y) => {
            u.disabled !== !0 && ge(Y, [13, 32]) && (W.value = u.date);
          },
          ...qe("-head-day", (Y) => ({ scope: a, event: Y })),
          onDragenter: (Y) => {
            e.dragEnterFunc !== void 0 &&
              typeof e.dragEnterFunc == "function" &&
              (e.dragEnterFunc(Y, "head-day", a) === !0
                ? (V.value = u.date)
                : (V.value = ""));
          },
          onDragover: (Y) => {
            e.dragOverFunc !== void 0 &&
              typeof e.dragOverFunc == "function" &&
              (e.dragOverFunc(Y, "head-day", a) === !0
                ? (V.value = u.date)
                : (V.value = ""));
          },
          onDragleave: (Y) => {
            e.dragLeaveFunc !== void 0 &&
              typeof e.dragLeaveFunc == "function" &&
              (e.dragLeaveFunc(Y, "head-day", a) === !0
                ? (V.value = u.date)
                : (V.value = ""));
          },
          onDrop: (Y) => {
            e.dropFunc !== void 0 &&
              typeof e.dropFunc == "function" &&
              (e.dropFunc(Y, "head-day", a) === !0
                ? (V.value = u.date)
                : (V.value = ""));
          },
        };
      return i("div", ve, [
        d !== void 0 && d({ scope: a }),
        d === void 0 && A(u),
        d === void 0 && v && v({ scope: a }),
        Ze(),
      ]);
    }
    function fe() {
      return De.value.map((u) => ie(u));
    }
    function me(u, d) {
      return De.value.map((v) => le(v, u, d));
    }
    function ye() {
      return i("div", { class: { "q-calendar-task__head--days": !0 } }, [
        ...fe(),
      ]);
    }
    function Be(u, d) {
      return i("div", { class: { "q-calendar-task__title--days": !0 } }, [
        ...me(u, d),
      ]);
    }
    function c() {
      return i(
        "div",
        {
          roll: "presentation",
          class: {
            "q-calendar-task__head": !0,
            "q-calendar__sticky": G.value === !0,
          },
          style: {},
        },
        [
          i("div", { style: { position: "relative", display: "flex" } }, [
            rt(),
            ye(),
          ]),
          e.modelTitle.map((u, d) =>
            i(
              "div",
              {
                class: "q-calendar-task__title",
                style: { position: "relative", display: "flex" },
              },
              [Ue(u, d), Be(u, d)]
            )
          ),
        ]
      );
    }
    function C() {
      return i("div", { class: "q-calendar-task__body" }, [l()]);
    }
    function l() {
      return i(
        "div",
        {
          ref: f,
          class: {
            "q-calendar-task__scroll-area": !0,
            "q-calendar__scroll": !0,
          },
        },
        [mt()]
      );
    }
    function _() {
      const { start: u, end: d } = it.value;
      (D.value = u.date), (m.value = d.date);
      const v = Z.width > 0,
        w = Wt(
          i("div", { key: D.value, class: "q-calendar-task" }, [
            v === !0 && C(),
          ]),
          [[_t, $e]]
        );
      if (e.animated === !0) {
        const a =
          "q-calendar--" +
          (s.value === "prev" ? e.transitionPrev : e.transitionNext);
        return i($t, { name: a, appear: !0 }, () => w);
      }
      return w;
    }
    return (
      r({ prev: re, next: Fe, move: Le, moveToToday: ue, updateCurrent: _e }),
      () => Ge()
    );
  },
});
Et({
  name: "QCalendar",
  props: {
    mode: {
      type: String,
      validator: (e) =>
        ["day", "month", "agenda", "resource", "scheduler", "task"].includes(e),
      default: "day",
    },
    ...Qt,
    ...rn,
    ...Lt,
    ...fa,
    ...It,
    ...xa,
    ...tn,
    ...an,
    ...oa,
    ...dn,
  },
  setup(e, { attrs: t, slots: n, expose: r }) {
    const f = g(null),
      b = E(() => {
        switch (e.mode) {
          case "agenda":
            return Un;
          case "resource":
            return Qn;
          case "scheduler":
            return Xn;
          case "month":
            return ln;
          case "day":
            return Ka;
          case "task":
            return Zn;
          case "day":
          default:
            return Ka;
        }
      });
    function s() {
      f.value.moveToToday();
    }
    function D(x = -1) {
      f.value.move(x);
    }
    function m(x = 1) {
      f.value.next(x);
    }
    function H(x = 1) {
      f.value.prev(x);
    }
    function W() {
      f.value.updateCurrent();
    }
    function O(x, $ = !0) {
      return f.value.timeStartPos(x, $);
    }
    function M(x, $ = !0) {
      return f.value.timeStartPosX(x, $);
    }
    function z(x) {
      return f.value.timeDurationWidth(x);
    }
    function Z(x) {
      return f.value.timeDurationHeight(x);
    }
    function V(x) {
      return f.value.heightToMinutes(x);
    }
    function F(x) {
      return f.value.widthToMinutes(minutes);
    }
    function B(x) {
      return f.value.scrollToTime(x);
    }
    function T(x) {
      return f.value.scrollToTimeX(x);
    }
    return (
      r({
        prev: H,
        next: m,
        move: D,
        moveToToday: s,
        updateCurrent: W,
        timeStartPos: O,
        timeStartPosX: M,
        timeDurationWidth: z,
        timeDurationHeight: Z,
        heightToMinutes: V,
        widthToMinutes: F,
        scrollToTime: B,
        scrollToTimeX: T,
      }),
      () => i(b.value, { ref: f, ...e, ...t }, n)
    );
  },
});
const Gn = { class: "text-h3 text-center" },
  Jn = Dt("span", { class: "text-positive" }, "Date Started", -1),
  pn = Dt(
    "div",
    null,
    [Dt("span", { class: "text-positive" }, "Lifts"), Va(":")],
    -1
  ),
  eu = {
    __name: "WorkoutDetail",
    props: { workout: Object },
    setup(e) {
      const t = e;
      function n() {
        console.log(t.workout);
      }
      function r() {
        console.log(t.workout);
      }
      return (f, b) => (
        Ct(),
        Fa(
          sn,
          { class: "glassy", style: { width: "600px" } },
          {
            default: Ht(() => [
              st(Ea, null, {
                default: Ht(() => [
                  Dt("div", Gn, ya(e.workout.workoutGroup.name), 1),
                ]),
                _: 1,
              }),
              st(Oa, { dark: "", inset: "", color: "positive" }),
              st(Ea, null, {
                default: Ht(() => [
                  Dt("div", null, [
                    Jn,
                    Va(": " + ya(e.workout.workoutDate), 1),
                  ]),
                  pn,
                  Dt("ul", null, [
                    (Ct(!0),
                    la(
                      $a,
                      null,
                      Ua(
                        e.workout.lifts,
                        (s) => (
                          Ct(), la("li", { key: s.id }, ya(s.exercise.name), 1)
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }),
              st(Oa, {
                dark: "",
                inset: "",
                color: "positive",
                class: "q-mb-md",
              }),
              st(
                on,
                { align: "right" },
                {
                  default: Ht(() => [
                    Wt(
                      st(
                        ba,
                        { label: "Close", outline: "", color: "white" },
                        null,
                        512
                      ),
                      [[_n]]
                    ),
                    st(ba, {
                      label: "Delete Workout",
                      color: "negative",
                      onClick: n,
                    }),
                    st(ba, {
                      label: "Resume Workout",
                      color: "positive",
                      onClick: r,
                    }),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  };
const tu = { key: 0, class: "subcontent" },
  au = { class: "row justify-center" },
  nu = { style: { display: "flex", width: "100%" } },
  uu = ["onClick"],
  ru = { class: "title q-calendar__ellipsis" },
  lu = {
    __name: "WorkoutCalendar",
    setup(e) {
      const t = g([]),
        n = g(!0),
        r = g(!1),
        f = g({});
      Ot(async () => {
        const m = await vn.get(
          "/api/workout/past-workouts?start_date=2022-11-01&end_date=2022-12-01"
        );
        (t.value = m.data), (n.value = !1);
      });
      function b(m) {
        let H;
        switch (m.workoutGroup.id) {
          case 27:
            H = "bg-positive";
            break;
          case 28:
            H = "bg-negative";
            break;
          case 29:
            H = "bg-accent";
            break;
          case 30:
            H = "bg-primary";
            break;
          default:
            H = "bg-grey";
            break;
        }
        return { [`text-white ${H}`]: !0, "rounded-border": !0 };
      }
      function s(m) {
        console.log(m), (f.value = m), (r.value = !0);
      }
      const D = E(() => {
        const m = {};
        return (
          t.value.length > 0 &&
            t.value.forEach((H) => {
              (m[H.workoutDate] = m[H.workoutDate] || []).push(H);
            }),
          m
        );
      });
      return (m, H) =>
        n.value
          ? (Ct(),
            Fa(
              za,
              {
                key: 1,
                class:
                  "window-height window-width row justify-center items-center",
              },
              {
                default: Ht(() => [
                  st(gn, { color: "positive", size: "6em", thickness: 10 }),
                ]),
                _: 1,
              }
            ))
          : (Ct(),
            la("div", tu, [
              Dt("div", au, [
                Dt("div", nu, [
                  st(
                    La(ln),
                    {
                      ref: "calendar",
                      animated: "",
                      bordered: "",
                      focusable: "",
                      hoverable: "",
                      "no-active-date": "",
                      class: "calendar glowing-border",
                      "day-min-height": 60,
                      "day-height": 0,
                    },
                    {
                      day: Ht(({ scope: { timestamp: W } }) => [
                        (Ct(!0),
                        la(
                          $a,
                          null,
                          Ua(
                            La(D)[W.date],
                            (O) => (
                              Ct(),
                              la(
                                "div",
                                {
                                  key: O.id,
                                  class: yn([b(O), "my-event"]),
                                  onClick: (M) => s(O),
                                },
                                [Dt("div", ru, ya(O.workoutGroup.name), 1)],
                                10,
                                uu
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    },
                    512
                  ),
                ]),
              ]),
              st(
                hn,
                {
                  modelValue: r.value,
                  "onUpdate:modelValue": H[0] || (H[0] = (W) => (r.value = W)),
                  persistent: "",
                },
                {
                  default: Ht(() => [
                    st(eu, { workout: f.value }, null, 8, ["workout"]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
            ]));
    },
  };
var du = fn(lu, [["__scopeId", "data-v-3d1508e4"]]);
const su = {
  __name: "CalendarPage",
  setup(e) {
    return (t, n) => (
      Ct(), Fa(za, { class: "q-ma-md" }, { default: Ht(() => [st(du)]), _: 1 })
    );
  },
};
export { su as default };
