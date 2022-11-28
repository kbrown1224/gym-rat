import {
  d as Lt,
  r as w,
  a as Wt,
  w as ne,
  c as O,
  g as Rt,
  o as Xt,
  b as Zt,
  n as Wa,
  e as Kn,
  f as Bt,
  h as i,
  T as Qt,
  i as zn,
} from "./index.3262b3e1.js";
/*!
 * @quasar/quasar-ui-qcalendar v4.0.0-beta.15
 * (c) 2022 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */ const Aa =
    /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?(.(\d{1,3}))?$/,
  sn = /^(\d{4})-(\d{1,2})(-(\d{1,2}))/,
  Ba = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,
  Na = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Pa = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Ka = 28,
  za = 31,
  Dt = 12,
  ma = 1,
  jt = 1,
  Ft = 7,
  It = 60,
  sa = 24,
  fn = 0,
  vn = 6e4,
  yn = 36e5,
  Ua = 864e5,
  Ya = 6048e5,
  hn = {
    date: "",
    time: "",
    year: 0,
    month: 0,
    day: 0,
    weekday: 0,
    hour: 0,
    minute: 0,
    doy: 0,
    workweek: 0,
    hasDay: !1,
    hasTime: !1,
    past: !1,
    current: !1,
    future: !1,
    disabled: !1,
    currentWeekday: !1,
  },
  _n = { hour: 0, minute: 0 };
function Ge() {
  const e = new Date(),
    t = "" + (e.getMonth() + 1),
    a = "" + e.getDate();
  return [e.getFullYear(), tt(t, 2), tt(a, 2)].join("-");
}
function At(e, t, a) {
  let r = De(e);
  if (r.day === 1 || r.weekday === 0)
    for (; !t.includes(r.weekday); ) r = vt(r);
  return (r = Vt(r, t[0], ka)), (r = it(r)), a && (r = bt(r, a, r.hasTime)), r;
}
function qt(e, t, a) {
  let r = De(e);
  if (ft(r.year, r.month) === r.day || r.weekday === 6)
    for (; !t.includes(r.weekday); ) r = ka(r);
  return (
    (r = Vt(r, t[t.length - 1], vt)),
    (r = it(r)),
    a && (r = bt(r, a, r.hasTime)),
    r
  );
}
function Et(e) {
  const t = De(e);
  return (t.day = jt), it(t), t;
}
function St(e) {
  const t = De(e);
  return (t.day = ft(t.year, t.month)), it(t), t;
}
function Ta(e) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Number]":
      return e;
    case "[object String]": {
      const a = Ba.exec(e);
      return a ? parseInt(a[1], 10) * 60 + parseInt(a[3] || 0, 10) : !1;
    }
    case "[object Object]":
      return typeof e.hour != "number" || typeof e.minute != "number"
        ? !1
        : e.hour * 60 + e.minute;
  }
  return !1;
}
function ga(e) {
  return !!Aa.exec(e);
}
function mn(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function gn(e, t) {
  return Yt(e) === Yt(t);
}
function kn(e, t) {
  return xt(e) === xt(t);
}
function wn(e, t) {
  return Mt(e) === Mt(t);
}
function ye(e) {
  const t = Aa.exec(e);
  return t
    ? {
        date: e,
        time:
          tt(parseInt(t[6], 10) || 0, 2) + ":" + tt(parseInt(t[8], 10) || 0, 2),
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
function Se(e, t) {
  let a = ye(e);
  return a === null ? null : ((a = it(a)), t && bt(a, t, a.hasTime), a);
}
function Va(e, t = !1) {
  const a = t ? "UTC" : "";
  return it({
    date:
      tt(e[`get${a}FullYear`](), 4) +
      "-" +
      tt(e[`get${a}Month`]() + 1, 2) +
      "-" +
      tt(e[`get${a}Date`](), 2),
    time:
      tt(e[`get${a}Hours`]() || 0, 2) + ":" + tt(e[`get${a}Minutes`]() || 0, 2),
    year: e[`get${a}FullYear`](),
    month: e[`get${a}Month`]() + 1,
    day: e[`get${a}Date`](),
    hour: e[`get${a}Hours`](),
    minute: e[`get${a}Minutes`](),
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
function Q(e) {
  return e.year * 1e8 + e.month * 1e6 + e.day * 1e4;
}
function Ct(e) {
  return e.hour * 100 + e.minute;
}
function mt(e) {
  return Q(e) + Ct(e);
}
function $a(e, t, a) {
  const r = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute),
    s = Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute);
  return a === !0 && s < r ? 0 : s - r;
}
function bt(e, t, a = !1) {
  let r = Q(t),
    s = Q(e),
    g = r === s;
  return (
    e.hasTime && a && g && ((r = Ct(t)), (s = Ct(e)), (g = r === s)),
    (e.past = s < r),
    (e.current = g),
    (e.future = s > r),
    (e.currentWeekday = e.weekday === t.weekday),
    e
  );
}
function Xa(e, t, a) {
  return (
    (e.hasTime = !0),
    (e.hour = Math.floor(t / It)),
    (e.minute = t % It),
    (e.time = xt(e)),
    a && bt(e, a, !0),
    e
  );
}
function Ha(e) {
  return (e.weekday = Ea(e)), e;
}
function Za(e) {
  return (e.doy = Oa(e)), e;
}
function Dn(e) {
  return (e.workweek = Ia(e)), e;
}
function Qa(e, t, a, r, s) {
  const g = Q(e);
  if (t !== void 0) {
    const f = Q(ye(t));
    g <= f && (e.disabled = !0);
  }
  if (e.disabled !== !0 && a !== void 0) {
    const f = Q(ye(a));
    g >= f && (e.disabled = !0);
  }
  if (e.disabled !== !0 && Array.isArray(r) && r.length > 0) {
    for (const f in r)
      if (r[f] === e.weekday) {
        e.disabled = !0;
        break;
      }
  }
  if (e.disabled !== !0 && Array.isArray(s) && s.length > 0) {
    for (const f in s)
      if (Array.isArray(s[f]) && s[f].length === 2) {
        const m = ye(s[f][0]),
          C = ye(s[f][1]);
        if (tn(e, m, C)) {
          e.disabled = !0;
          break;
        }
      } else if (Q(Se(s[f] + " 00:00")) === g) {
        e.disabled = !0;
        break;
      }
  }
  return e;
}
function it(e) {
  return (
    (e.hasTime = !0),
    (e.time = xt(e)),
    (e.date = Yt(e)),
    (e.weekday = Ea(e)),
    (e.doy = Oa(e)),
    (e.workweek = Ia(e)),
    e
  );
}
function Oa(e) {
  if (e.year !== 0)
    return (
      (Date.UTC(e.year, e.month - 1, e.day) - Date.UTC(e.year, 0, 0)) /
      24 /
      60 /
      60 /
      1e3
    );
}
function Ia(e) {
  e.year === 0 && (e = Se(Ge()));
  const t = pa(e);
  if (isNaN(t)) return 0;
  const a = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  a.setDate(a.getDate() - ((a.getDay() + 6) % 7) + 3);
  const r = new Date(a.getFullYear(), 0, 4);
  r.setDate(r.getDate() - ((r.getDay() + 6) % 7) + 3);
  const s = a.getTimezoneOffset() - r.getTimezoneOffset();
  a.setHours(a.getHours() - s);
  const g = (a - r) / Ya;
  return 1 + Math.floor(g);
}
function Ea(e) {
  let t = e.weekday;
  if (e.hasDay) {
    const a = Math.floor,
      r = e.day,
      s = ((e.month + 9) % Dt) + 1,
      g = a(e.year / 100),
      f = (e.year % 100) - (e.month <= 2 ? 1 : 0);
    t =
      (((r + a(2.6 * s - 0.2) - 2 * g + f + a(f / 4) + a(g / 4)) % 7) + 7) % 7;
  }
  return t;
}
function ja(e) {
  return ((e % 4 === 0) ^ (e % 100 === 0) ^ (e % 400 === 0)) === 1;
}
function ft(e, t) {
  return ja(e) ? Pa[t] : Na[t];
}
function De(e) {
  return { ...e };
}
function tt(e, t) {
  let a = String(e);
  for (; a.length < t; ) a = "0" + a;
  return a;
}
function Yt(e) {
  let t = `${tt(e.year, 4)}-${tt(e.month, 2)}`;
  return e.hasDay && (t += `-${tt(e.day, 2)}`), t;
}
function xt(e) {
  return e.hasTime ? `${tt(e.hour, 2)}:${tt(e.minute, 2)}` : "";
}
function Mt(e) {
  return Yt(e) + " " + (e.hasTime ? xt(e) : "00:00");
}
function vt(e) {
  return (
    ++e.day,
    (e.weekday = (e.weekday + 1) % Ft),
    e.day > Ka &&
      e.day > ft(e.year, e.month) &&
      ((e.day = jt), ++e.month, e.month > Dt && ((e.month = ma), ++e.year)),
    e
  );
}
function ka(e) {
  return (
    e.day--,
    (e.weekday = (e.weekday + 6) % Ft),
    e.day < jt &&
      (e.month--,
      e.month < ma && (e.year--, (e.month = Dt)),
      (e.day = ft(e.year, e.month))),
    e
  );
}
function Sa(e, t = vt, a = 1, r = [0, 1, 2, 3, 4, 5, 6]) {
  return Tt(e, t, a, r);
}
function Tt(e, t = vt, a = 1, r = [0, 1, 2, 3, 4, 5, 6]) {
  for (!r.includes(e.weekday) && e.weekday === 0 && t === vt && ++a; --a >= 0; )
    (e = t(e)), r.length < 7 && !r.includes(e.weekday) && ++a;
  return e;
}
function Vt(e, t, a = vt, r = 6) {
  for (; e.weekday !== t && --r >= 0; ) e = a(e);
  return e;
}
function Ga(e) {
  const t = [1, 1, 1, 1, 1, 1, 1],
    a = [0, 0, 0, 0, 0, 0, 0];
  for (let r = 0; r < e.length; ++r) a[e[r]] = 1;
  for (let r = 0; r < Ft; ++r) {
    let s = 1;
    for (let g = 1; g < Ft; ++g) {
      const f = (r + g) % Ft;
      if (a[f]) break;
      ++s;
    }
    t[r] = a[r] * s;
  }
  return t;
}
function $t(e, t, a, r, s, g, f = [], m = [], C = 42, E = 0) {
  const A = Q(t),
    M = [];
  let R = De(e),
    z = 0,
    J = z === A;
  if (A < Q(e)) return M;
  for (
    ;
    (!J || M.length < E) &&
    M.length < C &&
    ((z = Q(R)), (J = J || (z > A && M.length >= E)), !J);

  ) {
    if (r[R.weekday] === 0) {
      R = Tt(R, vt);
      continue;
    }
    const U = De(R);
    it(U), bt(U, a), Qa(U, s, g, f, m), M.push(U), (R = Tt(R, vt));
  }
  return M;
}
function Ja(e, t, a, r, s) {
  const g = [];
  for (let f = 0; f < r; ++f) {
    const m = (t + f) * a,
      C = De(e);
    g.push(Xa(C, m, s));
  }
  return g;
}
function Ht(e, t) {
  const a = (r, s) => "";
  return typeof Intl == "undefined" || typeof Intl.DateTimeFormat == "undefined"
    ? a
    : (r, s) => {
        try {
          return new Intl.DateTimeFormat(e || void 0, t(r, s)).format(en(r));
        } catch (g) {
          return (
            console.error(`Intl.DateTimeFormat: ${g.message} -> ${Mt(r)}`), a
          );
        }
      };
}
function pa(e, t = !0) {
  return t
    ? new Date(Date.UTC(e.year, e.month - 1, e.day, 0, 0))
    : new Date(e.year, e.month - 1, e.day, 0, 0);
}
function en(e, t = !0) {
  return t
    ? new Date(Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute))
    : new Date(e.year, e.month - 1, e.day, e.hour, e.minute);
}
function ze(e) {
  return isFinite(parseInt(e, 10));
}
function bn(e, t = !1) {
  const a = t === !0 ? mt : Q;
  return e.reduce((r, s) => (Math.max(a(r), a(s)) === a(r) ? r : s));
}
function Fn(e, t = !1) {
  const a = t === !0 ? mt : Q;
  return e.reduce((r, s) => (Math.min(a(r), a(s)) === a(r) ? r : s));
}
function tn(e, t, a, r) {
  const s = Q(e) + (r === !0 ? Ct(e) : 0),
    g = Q(t) + (r === !0 ? Ct(t) : 0),
    f = Q(a) + (r === !0 ? Ct(a) : 0);
  return s >= g && s <= f;
}
function qn(e, t, a, r) {
  const s = Q(e),
    g = Q(t),
    f = Q(a),
    m = Q(r);
  return (s >= f && s <= m) || (g >= f && g <= m) || (f >= s && g >= m);
}
function Oe(e, t) {
  const a = De(e);
  let r;
  return (
    Un(t, (s, g) => {
      if (a[g] !== void 0) {
        a[g] += parseInt(s, 10);
        const f = dn.indexOf(g);
        f !== -1 && (r === void 0 ? (r = f) : (r = Math.min(f, r)));
      }
    }),
    r !== void 0 && Vn(a, dn[r]),
    it(a),
    a
  );
}
const dn = ["minute", "hour", "day", "month"];
function Un(e, t) {
  Object.keys(e).forEach((a) => t(e[a], a));
}
function Yn(e) {
  if (e.minute >= It || e.minute < 0) {
    const t = Math.floor(e.minute / It);
    (e.minute -= t * It), (e.hour += t), Cn(e);
  }
  return e;
}
function Cn(e) {
  if (e.hour >= sa || e.hour < 0) {
    const t = Math.floor(e.hour / sa);
    (e.hour -= t * sa), (e.day += t), Tn(e);
  }
  return e;
}
function Tn(e) {
  zt(e);
  let t = ft(e.year, e.month);
  if (e.day > t) {
    ++e.month, e.month > Dt && zt(e);
    let a = e.day - t;
    t = ft(e.year, e.month);
    do
      a > t &&
        (++e.month, e.month > Dt && zt(e), (a -= t), (t = ft(e.year, e.month)));
    while (a > t);
    e.day = a;
  } else if (e.day <= 0) {
    let a = -1 * e.day;
    --e.month, e.month <= 0 && zt(e), (t = ft(e.year, e.month));
    do
      a > t &&
        ((a -= t), --e.month, e.month <= 0 && zt(e), (t = ft(e.year, e.month)));
    while (a > t);
    e.day = t - a;
  }
  return e;
}
function zt(e) {
  if (e.month > Dt) {
    const t = Math.floor(e.month / Dt);
    (e.month = e.month % Dt), (e.year += t);
  } else e.month < ma && ((e.month += Dt), --e.year);
  return e;
}
function Vn(e, t) {
  switch (t) {
    case "minute":
      return Yn(e);
    case "hour":
      return Cn(e);
    case "day":
      return Tn(e);
    case "month":
      return zt(e);
  }
}
function an(e, t) {
  const a = $a(e, t, !0);
  return Math.floor(a / Ua);
}
function Hn(e, t) {
  let a = De(e),
    r = De(t);
  return (a = Vt(a, 0)), (r = Vt(r, 6)), Math.ceil(an(a, r) / Ft);
}
const Sn = {
  Sun: new Date("2020-01-05T00:00:00.000Z"),
  Mon: new Date("2020-01-06T00:00:00.000Z"),
  Tue: new Date("2020-01-07T00:00:00.000Z"),
  Wed: new Date("2020-01-08T00:00:00.000Z"),
  Thu: new Date("2020-01-09T00:00:00.000Z"),
  Fri: new Date("2020-01-10T00:00:00.000Z"),
  Sat: new Date("2020-01-11T00:00:00.000Z"),
};
function nn() {
  const e = (r, s) => "",
    t = {
      long: { timeZone: "UTC", weekday: "long" },
      short: { timeZone: "UTC", weekday: "short" },
      narrow: { timeZone: "UTC", weekday: "narrow" },
    };
  if (typeof Intl == "undefined" || typeof Intl.DateTimeFormat == "undefined")
    return e;
  function a(r, s, g) {
    try {
      return new Intl.DateTimeFormat(g || void 0, t[s] || t.long).format(Sn[r]);
    } catch (f) {
      return (
        console.error(`Intl.DateTimeFormat: ${f.message} -> day of week: ${r}`),
        e
      );
    }
  }
  return a;
}
function Wn(e, t) {
  const a = Object.keys(Sn),
    r = nn();
  return a.map((s) => r(s, e, t));
}
function un() {
  const e = (r, s) => "",
    t = {
      long: { timeZone: "UTC", month: "long" },
      short: { timeZone: "UTC", month: "short" },
      narrow: { timeZone: "UTC", month: "narrow" },
    };
  if (typeof Intl == "undefined" || typeof Intl.DateTimeFormat == "undefined")
    return e;
  function a(r, s, g) {
    try {
      const f = new Intl.DateTimeFormat(g || void 0, t[s] || t.long),
        m = new Date();
      return m.setDate(1), m.setMonth(r), f.format(m);
    } catch (f) {
      return (
        console.error(`Intl.DateTimeFormat: ${f.message} -> month: ${r}`), e
      );
    }
  }
  return a;
}
function An(e, t) {
  const a = un();
  return [...Array(12).keys()].map((r) => a(r, e, t));
}
function G(e, t = "px") {
  if (!(e == null || e === ""))
    return isNaN(e) ? String(e) : e === "auto" ? e : `${Number(e)}${t}`;
}
function On(e, t) {
  for (let a = 0; a < e.length; a++) if (t(e[a], a) === !0) return a;
  return -1;
}
function wa(e, t) {
  return t === 0 ? e : e.slice(0, t);
}
var gt = {
  name: "ResizeObserver",
  mounted(e, { modifiers: t, value: a }) {
    if (!a) return;
    const r = {};
    (r.callback = a),
      (r.size = { width: 0, height: 0 }),
      (r.observer = new ResizeObserver((s) => {
        const g = s[0].contentRect;
        (g.width !== r.size.width || g.height !== r.size.height) &&
          ((r.size.width = g.width),
          (r.size.height = g.height),
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
function Gt(e, t, { scrollArea: a, pane: r }) {
  if (!t) {
    const A =
      "[error: renderCalendar] no renderFunc has been supplied to useCalendar";
    throw (console.error(A), new Error(A));
  }
  const s = Wt({ width: 0, height: 0 }),
    g = w(null);
  function f({ width: A, height: M }) {
    (s.width = A), (s.height = M);
  }
  const m = O(() =>
    e.noScroll !== !0 && a.value && r.value && s.height
      ? a.value.offsetWidth - r.value.offsetWidth
      : 0
  );
  function C() {}
  function E() {
    const A = {
      ref: g,
      role: "complementary",
      lang: e.locale,
      class: {
        "q-calendar--dark": e.dark === !0,
        "q-calendar": !0,
        "q-calendar__bordered": e.bordered === !0,
        "q-calendar__vertical-stretch": e.verticalStretch === !0,
      },
    };
    return Bt(i("div", A, [t()]), [[gt, f]]);
  }
  return { rootRef: g, scrollWidth: m, __initCalendar: C, __renderCalendar: E };
}
const Jt = {
  modelValue: {
    type: String,
    default: Ge(),
    validator: (e) => e === "" || ga(e),
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
        e.forEach((a) => {
          [
            "day",
            "date",
            "weekday",
            "interval",
            "time",
            "resource",
            "task",
          ].includes(a) !== !0 && (t = !1);
        }),
        t
      );
    },
  },
};
function pt(e, { startDate: t, endDate: a, times: r }) {
  const s = O(() => Ga(e.weekdays)),
    g = O(() => Se(t.value)),
    f = O(() => (a.value === "0000-00-00" ? J(g.value) : Se(a.value))),
    m = O(() => {
      const F = { timeZone: "UTC", day: "numeric" };
      return Ht(e.locale, (B, H) => F);
    }),
    C = O(() => {
      const F = { timeZone: "UTC", weekday: "long" },
        B = { timeZone: "UTC", weekday: "short" };
      return Ht(e.locale, (H, S) => (S ? B : F));
    }),
    E = O(() => {
      const F = { timeZone: "UTC", dateStyle: "full" };
      return Ht(e.locale, (B) => F);
    });
  function A(F, B) {
    return F && F.length > 0 && F.includes(B.date);
  }
  function M(F, B) {
    const H = { firstDay: !1, betweenDays: !1, lastDay: !1 };
    if (F && F.length === 2) {
      const S = Q(B),
        Y = Q(ye(F[0])),
        _e = Q(ye(F[1]));
      (H.firstDay = Y === S),
        (H.lastDay = _e === S),
        (H.betweenDays = Y < S && _e > S);
    }
    return H;
  }
  function R(F, B = !1, H = [], S = [], Y = !1) {
    const _e = A(H, F),
      { firstDay: be, lastDay: me, betweenDays: ee } = M(S, F);
    return {
      "q-past-day":
        be !== !0 && ee !== !0 && me !== !0 && _e !== !0 && B !== !0 && F.past,
      "q-future-day":
        be !== !0 &&
        ee !== !0 &&
        me !== !0 &&
        _e !== !0 &&
        B !== !0 &&
        F.future,
      "q-outside": B,
      "q-current-day": F.current,
      "q-selected": _e,
      "q-range-first": be === !0,
      "q-range": ee === !0,
      "q-range-last": me === !0,
      "q-range-hover": Y === !0 && (be === !0 || me === !0 || ee === !0),
      "q-disabled-day disabled": F.disabled === !0,
    };
  }
  function z(F) {
    return At(F, e.weekdays, r.today);
  }
  function J(F) {
    return qt(F, e.weekdays, r.today);
  }
  function U(F) {}
  return {
    weekdaySkips: s,
    parsedStart: g,
    parsedEnd: f,
    dayFormatter: m,
    weekdayFormatter: C,
    ariaDateFormatter: E,
    arrayHasDate: A,
    checkDays: M,
    getRelativeClasses: R,
    startOfWeek: z,
    endOfWeek: J,
    dayStyleDefault: U,
  };
}
function cn(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function $n(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function Xn(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Zn(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function In(e, t, a = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = Xn(e);
  if (a <= 0) {
    s !== t && cn(e, t);
    return;
  }
  requestAnimationFrame((g) => {
    const f = g - r,
      m = s + ((t - s) / Math.max(f, a)) * f;
    cn(e, m), m !== t && In(e, t, a - f, g);
  });
}
function En(e, t, a = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = Zn(e);
  if (a <= 0) {
    s !== t && $n(e, t);
    return;
  }
  requestAnimationFrame((g) => {
    const f = g - r,
      m = s + ((t - s) / Math.max(f, a)) * f;
    setHorizontalScroll(e, m), m !== t && En(e, t, a - f, g);
  });
}
const rn = {
    view: {
      type: String,
      validator: (e) => ["day", "week", "month", "month-interval"].includes(e),
      default: "day",
    },
    shortIntervalLabel: Boolean,
    intervalHeight: { type: [Number, String], default: 40, validator: ze },
    intervalMinutes: { type: [Number, String], default: 60, validator: ze },
    intervalStart: { type: [Number, String], default: 0, validator: ze },
    intervalCount: { type: [Number, String], default: 24, validator: ze },
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
  xn = {
    view: {
      type: String,
      validator: (e) => ["day", "week", "month", "month-interval"].includes(e),
      default: "day",
    },
    modelResources: { type: Array },
    resourceKey: { type: [String, Number], default: "id" },
    resourceLabel: { type: [String, Number], default: "label" },
    resourceHeight: { type: [Number, String], default: 0, validator: ze },
    resourceMinHeight: { type: [Number, String], default: 70, validator: ze },
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
  Qn = {
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
    dayHeight: { type: [Number, String], default: 0, validator: ze },
    dayMinHeight: { type: [Number, String], default: 40, validator: ze },
  },
  Mn = {
    modelResources: { type: Array },
    resourceKey: { type: [String, Number], default: "id" },
    resourceLabel: { type: [String, Number], default: "label" },
    resourceHeight: { type: [Number, String], default: 0, validator: ze },
    resourceMinHeight: { type: [Number, String], default: 70, validator: ze },
    resourceStyle: { type: Function, default: null },
    resourceClass: { type: Function, default: null },
    cellWidth: { type: [Number, String], default: 100 },
    intervalHeaderHeight: {
      type: [Number, String],
      default: 20,
      validator: ze,
    },
    noSticky: Boolean,
  };
function xa(
  e,
  {
    weekdaySkips: t,
    times: a,
    scrollArea: r,
    parsedStart: s,
    parsedEnd: g,
    maxDays: f,
    size: m,
    headerColumnRef: C,
  }
) {
  const E = O(() => parseInt(e.intervalStart, 10)),
    A = O(() => parseInt(e.intervalMinutes, 10)),
    M = O(() => parseInt(e.intervalCount, 10)),
    R = O(() => parseFloat(e.intervalHeight)),
    z = O(() => {
      let h = 0;
      return (
        e.cellWidth
          ? (h = e.cellWidth)
          : m.width > 0 &&
            C.value &&
            (h =
              C.value.offsetWidth /
              (e.columnCount > 1 ? e.columnCount : f.value)),
        h
      );
    }),
    J = O(() => E.value * A.value),
    U = O(() => M.value * R.value),
    F = O(() => M.value * z.value),
    B = O(() => _e(s.value)),
    H = O(() => be(g.value)),
    S = O(() =>
      $t(
        s.value,
        g.value,
        a.today,
        t.value,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        f.value
      )
    ),
    Y = O(() => S.value.map((h) => Ja(h, E.value, A.value, M.value, a.now)));
  function _e(h) {
    return At(h, e.weekdays, a.today);
  }
  function be(h) {
    return qt(h, e.weekdays, a.today);
  }
  function me(h, Z) {
    return h && h.length > 0 && h.includes(Mt(Z));
  }
  function ee(h, Z) {
    const K = { firstDay: !1, betweenDays: !1, lastDay: !1 };
    if (h && h.length === 2) {
      const te = mt(Z),
        oe = mt(ye(h[0])),
        se = mt(ye(h[1]));
      (K.firstDay = oe === te),
        (K.lastDay = se === te),
        (K.betweenDays = oe < te && se > te);
    }
    return K;
  }
  function N(h, Z = [], K = []) {
    const te = me(Z, h),
      { firstDay: oe, lastDay: se, betweenDays: ue } = ee(K, h);
    return {
      "q-selected": te,
      "q-range-first": oe === !0,
      "q-range": ue === !0,
      "q-range-last": se === !0,
      "q-disabled-interval disabled": h.disabled === !0,
    };
  }
  function j(h, Z = [], K = []) {
    return [];
  }
  const X = O(() => {
      const h = {
          timeZone: "UTC",
          hour12: !e.hour24Format,
          hour: "2-digit",
          minute: "2-digit",
        },
        Z = {
          timeZone: "UTC",
          hour12: !e.hour24Format,
          hour: "numeric",
          minute: "2-digit",
        },
        K = { timeZone: "UTC", hour12: !e.hour24Format, hour: "numeric" };
      return Ht(e.locale, (te, oe) => (oe ? (te.minute === 0 ? K : Z) : h));
    }),
    k = O(() => {
      const h = { timeZone: "UTC", dateStyle: "full", timeStyle: "short" };
      return Ht(e.locale, (Z) => h);
    });
  function We(h) {
    const Z = Y.value[0][0];
    return !(Z.hour === h.hour && Z.minute === h.minute) && h.minute === 0;
  }
  function Ie(h) {}
  function Ne(h) {}
  function ct(h, Z, K = !1, te = void 0) {
    let oe = De(Z);
    const se = h.currentTarget.getBoundingClientRect(),
      ue = h,
      Ce = h,
      re = ue.changedTouches || ue.touches,
      Le = ((re && re[0] ? re[0].clientY : Ce.clientY) - se.top) / R.value,
      Ae = Math.floor((K ? Math.floor(Le) : Le) * A.value);
    return Ae !== 0 && (oe = Oe(oe, { minute: Ae })), te && bt(oe, te, !0), oe;
  }
  function at(h, Z, K = !1, te = void 0) {
    let oe = De(Z);
    const se = h.currentTarget.getBoundingClientRect(),
      ue = h,
      Ce = h,
      re = ue.changedTouches || ue.touches,
      Le = ((re && re[0] ? re[0].clientY : Ce.clientY) - se.top) / R.value,
      Ae = Math.floor((K ? Math.floor(Le) : Le) * A.value);
    return Ae !== 0 && (oe = Oe(oe, { minute: Ae })), te && bt(oe, te, !0), oe;
  }
  function Ze(h, Z, K = !1, te = void 0) {
    let oe = De(Z);
    const se = h.currentTarget.getBoundingClientRect(),
      ue = h,
      Ce = h,
      re = ue.changedTouches || ue.touches,
      Le = ((re && re[0] ? re[0].clientX : Ce.clientX) - se.left) / z.value,
      Ae = Math.floor((K ? Math.floor(Le) : Le) * A.value);
    return Ae !== 0 && (oe = Oe(oe, { minute: Ae })), te && bt(oe, te, !0), oe;
  }
  function Je(h, Z) {
    const K = { timestamp: h };
    return (
      (K.timeStartPos = ce),
      (K.timeDurationHeight = Me),
      Z !== void 0 && (K.columnIndex = Z),
      K
    );
  }
  function Fe(h, Z) {
    const K = { timestamp: De(h) };
    return (
      (K.timeStartPosX = p),
      (K.timeDurationWidth = qe),
      Z !== void 0 && (K.index = Z),
      K
    );
  }
  function He(h, Z = 0) {
    const K = ce(h);
    return K === !1 || !r.value ? !1 : (In(r.value, K, Z), !0);
  }
  function xe(h, Z = 0) {
    const K = p(h);
    return K === !1 || !r.value ? !1 : (En(r.value, K, Z), !0);
  }
  function Me(h) {
    return (h / A.value) * R.value;
  }
  function qe(h) {
    return (h / A.value) * z.value;
  }
  function ut(h) {
    return (parseInt(h, 10) * A.value) / R.value;
  }
  function ge(h) {
    return (parseInt(h, 10) * A.value) / z.value;
  }
  function ce(h, Z = !0) {
    const K = Ta(h);
    if (K === !1) return !1;
    const te = J.value,
      oe = M.value * A.value;
    let ue = ((K - te) / oe) * U.value;
    return Z && (ue < 0 && (ue = 0), ue > U.value && (ue = U.value)), ue;
  }
  function p(h, Z = !0) {
    const K = Ta(h);
    if (K === !1) return !1;
    const te = J.value,
      oe = M.value * A.value;
    let ue = ((K - te) / oe) * F.value;
    return Z && (ue < 0 && (ue = 0), ue > F.value && (ue = F.value)), ue;
  }
  return {
    parsedIntervalStart: E,
    parsedIntervalMinutes: A,
    parsedIntervalCount: M,
    parsedIntervalHeight: R,
    parsedCellWidth: z,
    parsedStartMinute: J,
    bodyHeight: U,
    bodyWidth: F,
    parsedWeekStart: B,
    parsedWeekEnd: H,
    days: S,
    intervals: Y,
    intervalFormatter: X,
    ariaDateTimeFormatter: k,
    arrayHasDateTime: me,
    checkIntervals: ee,
    getIntervalClasses: N,
    getResourceClasses: j,
    showIntervalLabelDefault: We,
    showResourceLabelDefault: Ie,
    styleDefault: Ne,
    getTimestampAtEventInterval: ct,
    getTimestampAtEvent: at,
    getTimestampAtEventX: Ze,
    getScopeForSlot: Je,
    getScopeForSlotX: Fe,
    scrollToTime: He,
    scrollToTimeX: xe,
    timeDurationHeight: Me,
    timeDurationWidth: qe,
    heightToMinutes: ut,
    widthToMinutes: ge,
    timeStartPos: ce,
    timeStartPosX: p,
  };
}
const Ma = {
    columnCount: { type: [Number, String], default: 0, validator: ze },
    columnIndexStart: { type: [Number, String], default: 0, validator: ze },
  },
  Da = { maxDays: { type: Number, default: 1 } },
  Nt = {
    now: { type: String, validator: (e) => e === "" || ga(e), default: "" },
  };
function ea(e) {
  const t = Wt({ now: Se("0000-00-00 00:00"), today: Se("0000-00-00") }),
    a = O(() => (e.now ? Se(e.now) : g()));
  ne(
    () => a,
    (C) => s()
  );
  function r() {
    (t.now.current = t.today.current = !0),
      (t.now.past = t.today.past = !1),
      (t.now.future = t.today.future = !1);
  }
  function s() {
    const C = a.value || g();
    f(C, t.now), m(C, t.now), f(C, t.today);
  }
  function g() {
    return Va(new Date());
  }
  function f(C, E) {
    C.date !== E.date &&
      ((E.year = C.year),
      (E.month = C.month),
      (E.day = C.day),
      (E.weekday = C.weekday),
      (E.date = C.date));
  }
  function m(C, E) {
    C.time !== E.time &&
      ((E.hour = C.hour), (E.minute = C.minute), (E.time = C.time));
  }
  return {
    times: t,
    parsedNow: a,
    setCurrent: r,
    updateCurrent: s,
    getNow: g,
    updateDay: f,
    updateTime: m,
  };
}
function ta(e, { parsedView: t, parsedValue: a, times: r }) {
  return {
    renderValues: O(() => {
      const g = a.value;
      let f = e.maxDays,
        m = g,
        C = g;
      switch (t.value) {
        case "month":
          (m = Et(g)), (C = St(g)), (f = ft(m.year, m.month));
          break;
        case "week":
        case "week-agenda":
        case "week-scheduler":
          (m = At(g, e.weekdays, r.today)),
            (C = qt(m, e.weekdays, r.today)),
            (f = e.weekdays.length);
          break;
        case "day":
        case "scheduler":
        case "agenda":
          (C = Sa(De(C), vt, f > 1 ? f - 1 : f, e.weekdays)), it(C);
          break;
        case "month-interval":
        case "month-scheduler":
        case "month-agenda":
          (m = Et(g)), (C = St(g)), it(C), (f = ft(m.year, m.month));
          break;
        case "resource":
          (f = 1), (C = Sa(De(C), vt, f, e.weekdays)), it(C);
          break;
      }
      return { start: m, end: C, maxDays: f };
    }),
  };
}
const jn = (e) => e.replace(/(-\w)/g, (t) => t[1].toUpperCase());
let Ra, Ln;
function Rn(e, t) {
  const a = {};
  for (const r in e) {
    const s = e[r],
      g = jn("on-" + r);
    if (Ra === void 0) {
      console.warn("$listeners has not been set up");
      return;
    }
    if (Ra.value[g] === void 0) continue;
    const f = "on" + s.event.charAt(0).toUpperCase() + s.event.slice(1),
      m = (C) => {
        const E = C;
        return (
          (s.button === void 0 || (E.buttons > 0 && E.button === s.button)) &&
            (s.prevent && E.preventDefault(),
            s.stop && E.stopPropagation(),
            Ln(r, t(E, r))),
          s.result
        );
      };
    f in a
      ? Array.isArray(a[f])
        ? a[f].push(m)
        : (a[f] = [a[f], m])
      : (a[f] = m);
  }
  return a;
}
function Gn(e, t) {
  return Rn(ln(e), t);
}
function ln(e) {
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
function Te(e) {
  return Object.keys(ln(e));
}
function aa(e, t) {
  return (
    (Ln = e),
    (Ra = t),
    {
      getMouseEventHandlers: Rn,
      getDefaultMouseEventHandlers: Gn,
      getMouseEventName: ln,
      getRawMouseEvents: Te,
    }
  );
}
const na = ["moved"];
function ua(
  e,
  {
    parsedView: t,
    parsedValue: a,
    weekdaySkips: r,
    direction: s,
    maxDays: g,
    times: f,
    emittedValue: m,
    emit: C,
  }
) {
  function E(A = 1) {
    if (A === 0) {
      m.value = Ge();
      return;
    }
    let M = De(a.value);
    const R = A > 0,
      z = R ? vt : ka,
      J = R ? za : jt;
    let U = R ? A : -A;
    s.value = R ? "next" : "prev";
    const F = r.value.filter((B) => B !== 0).length;
    for (; --U >= 0; )
      switch (t.value) {
        case "month":
          for (M.day = J, z(M), Ha(M); r.value[M.weekday] === 0; )
            M = Oe(M, { day: R === !0 ? 1 : -1 });
          break;
        case "week":
        case "week-agenda":
        case "week-scheduler":
          Tt(M, z, F, e.weekdays);
          break;
        case "day":
        case "scheduler":
        case "agenda":
          Tt(M, z, g.value, e.weekdays);
          break;
        case "month-interval":
        case "month-agenda":
        case "month-scheduler":
          (M.day = J), z(M);
          break;
        case "resource":
          Tt(M, z, g.value, e.weekdays);
          break;
      }
    Ha(M), it(M), Za(M), bt(M, f.now), (m.value = M.date), C("moved", M);
  }
  return { move: E };
}
const Jn = /^on[A-Z]/;
function ra(e = Rt()) {
  return {
    emitListeners: O(() => {
      const t = {};
      return (
        e.vnode !== void 0 &&
          e.vnode !== null &&
          e.vnode.props !== null &&
          Object.keys(e.vnode.props).forEach((a) => {
            Jn.test(a) === !0 && (t[a] = !0);
          }),
        t
      );
    }),
  };
}
function je() {
  return [i("span", { ariaHidden: "true", class: "q-calendar__focus-helper" })];
}
function ba(e, t, a) {
  const r = e.focusable === !0 && e.focusType.includes("date") === !0;
  return (
    (t.tabindex = r === !0 ? 0 : -1), i("button", t, [a, r === !0 && je()])
  );
}
const Fa = { cellWidth: [Number, String] };
function La(e) {
  return { isSticky: O(() => e.cellWidth !== void 0) };
}
const la = ["change"];
function da(e, { days: t, lastStart: a, lastEnd: r }) {
  function s() {
    if (t.value && t.value.length > 0) {
      const g = t.value[0].date,
        f = t.value[t.value.length - 1].date;
      if (
        a.value === null ||
        r.value === null ||
        g !== a.value ||
        f !== r.value
      )
        return (
          (a.value = g),
          (r.value = f),
          e("change", { start: g, end: f, days: t.value }),
          !0
        );
    }
    return !1;
  }
  return { checkChange: s };
}
function Pt() {
  function e(a, { bubbles: r = !1, cancelable: s = !1 } = {}) {
    try {
      return new CustomEvent(a, { bubbles: r, cancelable: s });
    } catch {
      const f = document.createEvent("Event");
      return f.initEvent(a, r, s), f;
    }
  }
  function t(a, r) {
    return [].concat(r).includes(a.keyCode);
  }
  return { createEvent: e, isKeyCode: t };
}
const { isKeyCode: on } = Pt(),
  Kt = { useNavigation: Boolean };
function ia(
  e,
  {
    rootRef: t,
    focusRef: a,
    focusValue: r,
    datesRef: s,
    days: g,
    parsedView: f,
    parsedValue: m,
    emittedValue: C,
    weekdaySkips: E,
    direction: A,
    times: M,
  }
) {
  let R = !1;
  Kn(() => {
    J();
  }),
    ne(
      () => e.useNavigation,
      (X) => {
        X === !0 ? z() : J();
      }
    ),
    e.useNavigation === !0 && z();
  function z() {
    R !== !0 &&
      document &&
      ((R = !0),
      document.addEventListener("keyup", H),
      document.addEventListener("keydown", B));
  }
  function J() {
    document &&
      (document.removeEventListener("keyup", H),
      document.removeEventListener("keydown", B),
      (R = !1));
  }
  function U(X) {
    if (X === void 0) return !1;
    if (document) {
      const k = document.activeElement;
      if (k !== document.body && t.value.contains(k) === !0) return !0;
    }
    return !1;
  }
  function F() {
    let X = 0;
    const k = setInterval(() => {
      s.value[a.value]
        ? (s.value[a.value].focus(),
          (++X === 50 || document.activeElement === s.value[a.value]) &&
            clearInterval(k))
        : clearInterval(k);
    }, 250);
  }
  function B(X) {
    U(X) &&
      on(X, [33, 34, 35, 36, 37, 38, 39, 40]) &&
      (X.stopPropagation(), X.preventDefault());
  }
  function H(X) {
    if (U(X) && on(X, [33, 34, 35, 36, 37, 38, 39, 40]))
      switch (X.keyCode) {
        case 33:
          me();
          break;
        case 34:
          ee();
          break;
        case 35:
          j();
          break;
        case 36:
          N();
          break;
        case 37:
          _e();
          break;
        case 38:
          S();
          break;
        case 39:
          be();
          break;
        case 40:
          Y();
          break;
      }
  }
  function S(X) {
    let k = De(r.value);
    if (f.value === "month") {
      if (((k = Oe(k, { day: -7 })), r.value.month !== k.month)) {
        (A.value = "prev"), (C.value = k.date);
        return;
      }
    } else
      (f.value === "day" ||
        f.value === "week" ||
        f.value === "month-interval") &&
        (k = Oe(k, { minute: parseInt(e.intervalMinutes) }));
    (A.value = "prev"), (a.value = k.date);
  }
  function Y(X) {
    let k = De(r.value);
    if (f.value === "month") {
      if (((k = Oe(k, { day: 7 })), r.value.month !== k.month)) {
        (A.value = "next"), (C.value = k.date);
        return;
      }
    } else
      (f.value === "day" ||
        f.value === "week" ||
        f.value === "month-interval") &&
        (k = Oe(k, { minute: parseInt(e.intervalMinutes) }));
    (A.value = "next"), (a.value = k.date);
  }
  function _e(X) {
    let k = De(r.value);
    A.value = "prev";
    do k = Oe(k, { day: -1 });
    while (E.value[k.weekday] === 0);
    if (f.value === "month" || f.value === "month-interval") {
      if (r.value.month !== k.month) {
        C.value = k.date;
        return;
      }
    } else if (f.value === "week") {
      if (k.weekday > r.value.weekday) {
        C.value = k.date;
        return;
      }
    } else if (f.value === "day") {
      C.value = k.date;
      return;
    }
    a.value = k.date;
  }
  function be(X) {
    let k = De(r.value);
    A.value = "next";
    do k = Oe(k, { day: 1 });
    while (E.value[k.weekday] === 0);
    if (f.value === "month" || f.value === "month-interval") {
      if (r.value.month !== k.month) {
        C.value = k.date;
        return;
      }
    } else if (f.value === "week") {
      if (k.weekday < r.value.weekday) {
        C.value = k.date;
        return;
      }
    } else if (f.value === "day") {
      C.value = k.date;
      return;
    }
    a.value = k.date;
  }
  function me(X) {
    let k = De(r.value);
    if (f.value === "month" || f.value === "month-interval") {
      k = Oe(k, { month: -1 });
      const We = k.day <= 15 ? 1 : -1;
      for (; E.value[k.weekday] === 0; ) k = Oe(k, { day: We });
    } else
      f.value === "day"
        ? (k = Oe(k, { day: -1 }))
        : f.value === "week" && (k = Oe(k, { day: -7 }));
    (A.value = "prev"), (a.value = k.date);
  }
  function ee(X) {
    let k = De(r.value);
    if (f.value === "month" || f.value === "month-interval") {
      k = Oe(k, { month: 1 });
      const We = k.day <= 15 ? 1 : -1;
      for (; E.value[k.weekday] === 0; ) k = Oe(k, { day: We });
    } else
      f.value === "day"
        ? (k = Oe(k, { day: 1 }))
        : f.value === "week" && (k = Oe(k, { day: 7 }));
    (A.value = "next"), (a.value = k.date);
  }
  function N(X) {
    let k = De(r.value);
    for (
      f.value === "month" || f.value === "month-interval"
        ? (k = Et(k))
        : f.value === "week" && (k = At(k, e.weekdays, M.today));
      E.value[k.weekday] === 0;

    )
      k = Oe(k, { day: -1 });
    a.value = k.date;
  }
  function j(X) {
    let k = De(r.value);
    for (
      f.value === "month" || f.value === "month-interval"
        ? (k = St(k))
        : f.value === "week" && (k = qt(k, e.weekdays, M.today));
      E.value[k.weekday] === 0;

    )
      k = Oe(k, { day: -1 });
    a.value = k.date;
  }
  return { startNavigation: z, endNavigation: J, tryFocus: F };
}
var fa = Lt({
    name: "QCalendarAgenda",
    directives: [gt],
    props: { ...Jt, ...Qn, ...Ma, ...Da, ...Nt, ...Fa, ...Kt },
    emits: [
      "update:model-value",
      ...la,
      ...na,
      ...Te("-date"),
      ...Te("-head-day"),
      ...Te("-time"),
    ],
    setup(e, { slots: t, emit: a, expose: r }) {
      const s = w(null),
        g = w(null),
        f = w(null),
        m = w(null),
        C = w(null),
        E = w({}),
        A = w({}),
        M = w({}),
        R = w("next"),
        z = w(Ge()),
        J = w("0000-00-00"),
        U = w(0),
        F = w(e.modelValue),
        B = Wt({ width: 0, height: 0 }),
        H = w(!1),
        S = w(null),
        Y = w(null);
      ne(
        () => e.view,
        () => {
          U.value = 0;
        }
      );
      const _e = O(() => (e.view === "month" ? "month-interval" : e.view)),
        be = Rt();
      if (be === null) throw new Error("current instance is null");
      const { emitListeners: me } = ra(be),
        { isSticky: ee } = La(e);
      ne(ee, (c) => {});
      const { times: N, setCurrent: j, updateCurrent: X } = ea(e);
      X(), j();
      const {
          weekdaySkips: k,
          parsedStart: We,
          parsedEnd: Ie,
          dayFormatter: Ne,
          weekdayFormatter: ct,
          ariaDateFormatter: at,
          dayStyleDefault: Ze,
          getRelativeClasses: Je,
        } = pt(e, { startDate: z, endDate: J, times: N }),
        Fe = O(() => Se(e.modelValue, N.now) || We.value || N.today);
      (C.value = Fe.value), (m.value = Fe.value.date);
      const { renderValues: He } = ta(e, {
          parsedView: _e,
          parsedValue: Fe,
          times: N,
        }),
        {
          rootRef: xe,
          scrollWidth: Me,
          __initCalendar: qe,
          __renderCalendar: ut,
        } = Gt(e, Be, { scrollArea: s, pane: g }),
        {
          days: ge,
          parsedCellWidth: ce,
          getScopeForSlot: p,
        } = xa(e, {
          weekdaySkips: k,
          times: N,
          scrollArea: s,
          parsedStart: We,
          parsedEnd: Ie,
          maxDays: U,
          size: B,
          headerColumnRef: f,
        }),
        { move: h } = ua(e, {
          parsedView: _e,
          parsedValue: Fe,
          weekdaySkips: k,
          direction: R,
          maxDays: U,
          times: N,
          emittedValue: F,
          emit: a,
        }),
        { getDefaultMouseEventHandlers: Z } = aa(a, me),
        { checkChange: K } = da(a, { days: ge, lastStart: S, lastEnd: Y }),
        { isKeyCode: te } = Pt(),
        { tryFocus: oe } = ia(e, {
          rootRef: xe,
          focusRef: m,
          focusValue: C,
          datesRef: E,
          days: ge,
          parsedView: _e,
          parsedValue: Fe,
          emittedValue: F,
          weekdaySkips: k,
          direction: R,
          times: N,
        }),
        se = O(() =>
          ge.value.length +
            (ue.value === !0 ? e.leftColumnOptions.length : 0) +
            (Ce.value === !0 ? e.rightColumnOptions.length : 0) +
            ge.value.length ===
            1 && parseInt(e.columnCount, 10) > 0
            ? parseInt(e.columnCount, 10)
            : 0
        ),
        ue = O(
          () =>
            e.leftColumnOptions !== void 0 && Array.isArray(e.leftColumnOptions)
        ),
        Ce = O(
          () =>
            e.rightColumnOptions !== void 0 &&
            Array.isArray(e.rightColumnOptions)
        ),
        re = O(() => {
          if (xe.value) {
            const c = B.width || xe.value.getBoundingClientRect().width;
            if (c && se.value) return (c - Me.value) / se.value + "px";
          }
          return 100 / se.value + "%";
        });
      ne([ge], K, { deep: !0, immediate: !0 }),
        ne(
          () => e.modelValue,
          (c, q) => {
            if (F.value !== c) {
              if (e.animated === !0) {
                const l = Q(ye(c)),
                  _ = Q(ye(q));
                R.value = l >= _ ? "next" : "prev";
              }
              F.value = c;
            }
            m.value = c;
          }
        ),
        ne(F, (c, q) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const l = Q(ye(c)),
                _ = Q(ye(q));
              R.value = l >= _ ? "next" : "prev";
            }
            a("update:model-value", c);
          }
        }),
        ne(m, (c) => {
          c && (C.value = Se(c));
        }),
        ne(C, (c) => {
          E.value[m.value] ? E.value[m.value].focus() : oe();
        }),
        ne(
          () => e.maxDays,
          (c) => {
            U.value = c;
          }
        ),
        Xt(() => {
          E.value = {};
        }),
        Zt(() => {
          qe();
        });
      function Ve() {
        F.value = Ge();
      }
      function Le(c = 1) {
        h(c);
      }
      function Ae(c = 1) {
        h(-c);
      }
      function nt({ width: c, height: q }) {
        (B.width = c), (B.height = q);
      }
      function Ue(c) {
        return c.date === F.value;
      }
      function Ee(c, q) {
        const l = t["head-column"],
          _ = { column: c, index: q, days: ge.value },
          u = ee.value === !0 ? e.cellWidth : re.value,
          d = e.focusable === !0 && e.focusType.includes("weekday"),
          v = e.columnOptionsId !== void 0 ? c[e.columnOptionsId] : void 0,
          D = { maxWidth: u, width: u };
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
            style: D,
            onDragenter: (n) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(n, "head-column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            onDragover: (n) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(n, "head-column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            onDragleave: (n) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(n, "head-column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            onDrop: (n) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(n, "head-column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            ...Z("-head-column", (n, y) => ({
              scope: { column: c, index: q },
              event: n,
            })),
          },
          [e.noDefaultHeaderText !== !0 && kt(c), l && l(_), je()]
        );
      }
      function kt(c) {
        const q = t["head-column-label"],
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
            [q && q({ scope: l }), !q && i("span", { class: "ellipsis" }, _)]
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
      function Ye() {
        return i(
          "div",
          {
            roll: "presentation",
            class: {
              "q-calendar-agenda__head": !0,
              "q-calendar__sticky": ee.value === !0,
            },
            style: { marginRight: Me.value + "px" },
          },
          [yt()]
        );
      }
      function yt() {
        return i(
          "div",
          { ref: f, class: { "q-calendar-agenda__head--days__column": !0 } },
          [ot(), rt()]
        );
      }
      function ot() {
        return i(
          "div",
          { class: { "q-calendar-agenda__head--days__weekdays": !0 } },
          [...st()]
        );
      }
      function rt() {
        const c = t["head-days-events"];
        return (
          Wa(() => {
            if (M.value && e.columnCount === 0 && window)
              try {
                const q = window.getComputedStyle(M.value);
                (A.value.parentElement.style.height = q.height),
                  (A.value.style.height = q.height);
              } catch {}
          }),
          i("div", { class: { "q-calendar-agenda__head--days__event": !0 } }, [
            c &&
              i(
                "div",
                {
                  ref: A,
                  style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    overflow: "hidden",
                    zIndex: 1,
                  },
                },
                [c({ scope: { days: ge.value, ref: M } })]
              ),
            ...ht(),
          ])
        );
      }
      function st() {
        return ge.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? [
              ue.value === !0 && e.leftColumnOptions.map((c, q) => Ee(c, q)),
              Array.apply(null, new Array(parseInt(e.columnCount, 10)))
                .map((c, q) => q + parseInt(e.columnIndexStart, 10))
                .map((c) => _t(ge.value[0], c)),
              Ce.value === !0 && e.rightColumnOptions.map((c, q) => Ee(c, q)),
            ]
          : [
              ue.value === !0 && e.leftColumnOptions.map((c, q) => Ee(c, q)),
              ge.value.map((c) => _t(c)),
              Ce.value === !0 && e.rightColumnOptions.map((c, q) => Ee(c, q)),
            ];
      }
      function ht() {
        return ge.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? [
              Array.apply(null, new Array(parseInt(e.columnCount, 10)))
                .map((c, q) => q + parseInt(e.columnIndexStart, 10))
                .map((c) => lt(ge.value[0], c)),
            ]
          : ge.value.map((c) => lt(c));
      }
      function _t(c, q) {
        const l = t["head-day"],
          _ = t["head-date"],
          u = e.noActiveDate !== !0 && Ue(c),
          d = p(c, q);
        (d.activeDate = u),
          (d.droppable = H.value === c.date),
          (d.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(c.weekday)
            : !1);
        const v = ee.value === !0 ? e.cellWidth : re.value,
          D = e.weekdayStyle || Ze,
          n = { width: v, maxWidth: v, ...D({ scope: d }) };
        ee.value === !0 && (n.minWidth = v);
        const y =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: d })
              : {},
          b = e.focusable === !0 && e.focusType.includes("weekday"),
          T = {
            key: c.date + (q !== void 0 ? "-" + q : ""),
            ref: (x) => {
              E.value[c.date] = x;
            },
            tabindex: b === !0 ? 0 : -1,
            class: {
              "q-calendar-agenda__head--day": !0,
              ...y,
              ...Je(c),
              "q-active-date": u,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": b === !0,
            },
            style: n,
            onDragenter: (x) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(x, "head-day", d) === !0
                  ? (H.value = c.date)
                  : (H.value = ""));
            },
            onDragover: (x) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(x, "head-day", d) === !0
                  ? (H.value = c.date)
                  : (H.value = ""));
            },
            onDragleave: (x) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(x, "head-day", d) === !0
                  ? (H.value = c.date)
                  : (H.value = ""));
            },
            onDrop: (x) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(x, "head-day", d) === !0
                  ? (H.value = c.date)
                  : (H.value = ""));
            },
            onFocus: (x) => {
              b === !0 && (m.value = c.date);
            },
            ...Z("-head-day", (x) => ({ scope: d, event: x })),
          };
        return i("div", T, [
          l !== void 0 && l({ scope: d }),
          l === void 0 && wt(c),
          l === void 0 && _ && _({ scope: d }),
          je(),
        ]);
      }
      function wt(c) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && $e(c),
            e.noDefaultHeaderBtn !== !0 && Re(c),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && $e(c),
                e.noDefaultHeaderBtn !== !0 && Re(c),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && $e(c),
                e.noDefaultHeaderBtn !== !0 && Re(c),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && $e(c),
                e.noDefaultHeaderBtn !== !0 && Re(c),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && Re(c),
                e.noDefaultHeaderText !== !0 && $e(c),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && Re(c),
                e.noDefaultHeaderText !== !0 && $e(c),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && Re(c),
                e.noDefaultHeaderText !== !0 && $e(c),
              ]);
      }
      function lt(c, q) {
        const l = t["head-day-event"],
          _ = e.noActiveDate !== !0 && Ue(c),
          u = p(c, q);
        (u.activeDate = _),
          (u.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(c.weekday)
            : !1);
        const d = ee.value === !0 ? e.cellWidth : re.value,
          v = { width: d, maxWidth: d };
        return (
          ee.value === !0 && (v.minWidth = d),
          i(
            "div",
            {
              key: "event-" + c.date + (q !== void 0 ? "-" + q : ""),
              class: {
                "q-calendar-agenda__head--day__event": !0,
                ...Je(c),
                "q-active-date": _,
              },
              style: v,
            },
            [l && l({ scope: u })]
          )
        );
      }
      function $e(c) {
        const q = t["head-weekday-label"],
          l = p(c);
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
          (q && q({ scope: l })) || Xe(c, e.shortWeekdayLabel)
        );
      }
      function Xe(c, q) {
        const l = ct.value(
          c,
          q ||
            (e.weekdayBreakpoints[0] > 0 && ce.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar__ellipsis" },
          e.weekdayBreakpoints[1] > 0 && ce.value <= e.weekdayBreakpoints[1]
            ? wa(l, e.minWeekdayLabel)
            : l
        );
      }
      function Re(c) {
        const q = {
          class: {
            "q-calendar-agenda__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", q, pe(c));
      }
      function pe(c) {
        const q = e.noActiveDate !== !0 && Ue(c),
          l = Ne.value(c, !1),
          _ = t["head-day-label"],
          u = t["head-day-button"],
          d = {
            dayLabel: l,
            timestamp: c,
            activeDate: q,
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
            onKeydown: (D) => {
              c.disabled !== !0 &&
                te(D, [13, 32]) &&
                (D.stopPropagation(), D.preventDefault());
            },
            onKeyup: (D) => {
              c.disabled !== !0 &&
                te(D, [13, 32]) &&
                ((F.value = c.date),
                me.value.onClickDate !== void 0 &&
                  a("click-date", { scope: d }));
            },
            ...Z(
              "-date",
              (D, n) => (
                (n === "click-date" || n === "contextmenu-date") &&
                  ((F.value = c.date),
                  n === "click-date" && D.preventDefault()),
                { scope: d, event: D }
              )
            ),
          };
        return (
          e.noAria !== !0 && (v.ariaLabel = at.value(c)),
          u ? u({ scope: d }) : ba(e, v, _ ? _({ scope: d }) : l)
        );
      }
      function et() {
        return i("div", { class: "q-calendar-agenda__body" }, [W()]);
      }
      function W() {
        return ee.value === !0
          ? i(
              "div",
              {
                ref: s,
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
                ref: s,
                class: {
                  "q-calendar-agenda__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [le()]
            );
      }
      function le() {
        return i("div", { ref: g, class: "q-calendar-agenda__pane" }, [ie()]);
      }
      function ie() {
        const c = t["day-container"];
        return i("div", { class: "q-calendar-agenda__day-container" }, [
          ee.value === !0 && e.noHeader !== !0 && Ye(),
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
              ue.value === !0 && e.leftColumnOptions.map((c, q) => ke(c, q)),
              Array.apply(null, new Array(parseInt(e.columnCount, 10)))
                .map((c, q) => q + parseInt(e.columnIndexStart, 10))
                .map((c) => he(ge.value[0], 0, c)),
              Ce.value === !0 && e.rightColumnOptions.map((c, q) => ke(c, q)),
            ]
          : [
              ue.value === !0 && e.leftColumnOptions.map((c, q) => ke(c, q)),
              ge.value.map((c, q) => he(c)),
              Ce.value === !0 && e.rightColumnOptions.map((c, q) => ke(c, q)),
            ];
      }
      function ke(c, q) {
        const l = t.column,
          _ = { column: c, days: ge.value, index: q },
          u = ee.value === !0 ? e.cellWidth : re.value,
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
            onDragenter: (D) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(D, "column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            onDragover: (D) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(D, "column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            onDragleave: (D) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(D, "column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            onDrop: (D) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(D, "column", _) === !0
                  ? (H.value = v)
                  : (H.value = ""));
            },
            ...Z("-column", (D, n) => ({ scope: _, event: D })),
          },
          [l && l({ scope: _ })]
        );
      }
      function he(c, q, l) {
        const _ = t.day,
          u = p(c, l),
          d = ee.value === !0 ? e.cellWidth : re.value,
          v = { width: d, maxWidth: d };
        return (
          ee.value === !0 && (v.minWidth = d),
          (v.height =
            parseInt(e.dayHeight, 10) > 0
              ? G(parseInt(e.dayHeight, 10))
              : "auto"),
          parseInt(e.dayMinHeight, 10) > 0 &&
            (v.minHeight = G(parseInt(e.dayMinHeight, 10))),
          i(
            "div",
            {
              key: c.date + (l !== void 0 ? ":" + l : ""),
              class: { "q-calendar-agenda__day": !0, ...Je(c) },
              style: v,
            },
            [_ && _({ scope: u })]
          )
        );
      }
      function Be() {
        const { start: c, end: q, maxDays: l } = He.value;
        (z.value !== c.date || J.value !== q.date || U.value !== l) &&
          ((z.value = c.date), (J.value = q.date), (U.value = l));
        const _ = B.width > 0,
          u = Bt(
            i("div", { class: "q-calendar-agenda", key: z.value }, [
              _ === !0 && ee.value !== !0 && e.noHeader !== !0 && Ye(),
              _ === !0 && et(),
            ]),
            [[gt, nt]]
          );
        if (e.animated === !0) {
          const d =
            "q-calendar--" +
            (R.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i(Qt, { name: d, appear: !0 }, () => u);
        }
        return u;
      }
      return (
        r({ prev: Ae, next: Le, move: h, moveToToday: Ve, updateCurrent: X }),
        () => ut()
      );
    },
  }),
  Ut = Lt({
    name: "QCalendarDay",
    directives: [gt],
    props: { ...Jt, ...rn, ...Ma, ...Da, ...Nt, ...Fa, ...Kt },
    emits: [
      "update:model-value",
      ...la,
      ...na,
      ...Te("-date"),
      ...Te("-interval"),
      ...Te("-head-intervals"),
      ...Te("-head-day"),
      ...Te("-time"),
    ],
    setup(e, { slots: t, emit: a, expose: r }) {
      const s = w(null),
        g = w(null),
        f = w(null),
        m = w(null),
        C = w(null),
        E = w({}),
        A = w({}),
        M = w({}),
        R = w("next"),
        z = w(e.modelValue || Ge()),
        J = w("0000-00-00"),
        U = w(0),
        F = w(e.modelValue),
        B = Wt({ width: 0, height: 0 }),
        H = w(!1),
        S = w(!1),
        Y = w(null),
        _e = w(null);
      ne(
        () => e.view,
        () => {
          U.value = 0;
        }
      );
      const be = O(() => (e.view === "month" ? "month-interval" : e.view)),
        me = Rt();
      if (me === null) throw new Error("current instance is null");
      const { emitListeners: ee } = ra(me),
        { isSticky: N } = La(e),
        { times: j, setCurrent: X, updateCurrent: k } = ea(e);
      k(), X();
      const {
          weekdaySkips: We,
          parsedStart: Ie,
          parsedEnd: Ne,
          dayFormatter: ct,
          weekdayFormatter: at,
          ariaDateFormatter: Ze,
          dayStyleDefault: Je,
          getRelativeClasses: Fe,
        } = pt(e, { startDate: z, endDate: J, times: j }),
        He = O(() => Se(e.modelValue, j.now) || Ie.value || j.today);
      (C.value = He.value), (m.value = He.value.date);
      const { renderValues: xe } = ta(e, {
          parsedView: be,
          parsedValue: He,
          times: j,
        }),
        {
          rootRef: Me,
          scrollWidth: qe,
          __initCalendar: ut,
          __renderCalendar: ge,
        } = Gt(e, dt, { scrollArea: s, pane: g }),
        {
          days: ce,
          intervals: p,
          intervalFormatter: h,
          ariaDateTimeFormatter: Z,
          parsedCellWidth: K,
          getIntervalClasses: te,
          showIntervalLabelDefault: oe,
          styleDefault: se,
          getTimestampAtEventInterval: ue,
          getTimestampAtEvent: Ce,
          getScopeForSlot: re,
          scrollToTime: Ve,
          heightToMinutes: Le,
          timeDurationHeight: Ae,
          timeStartPos: nt,
        } = xa(e, {
          weekdaySkips: We,
          times: j,
          scrollArea: s,
          parsedStart: Ie,
          parsedEnd: Ne,
          maxDays: U,
          size: B,
          headerColumnRef: f,
        }),
        { move: Ue } = ua(e, {
          parsedView: be,
          parsedValue: He,
          weekdaySkips: We,
          direction: R,
          maxDays: U,
          times: j,
          emittedValue: F,
          emit: a,
        }),
        { getDefaultMouseEventHandlers: Ee } = aa(a, ee),
        { checkChange: kt } = da(a, { days: ce, lastStart: Y, lastEnd: _e }),
        { isKeyCode: Ye } = Pt(),
        { tryFocus: yt } = ia(e, {
          rootRef: Me,
          focusRef: m,
          focusValue: C,
          datesRef: E,
          days: ce,
          parsedView: be,
          parsedValue: He,
          emittedValue: F,
          weekdaySkips: We,
          direction: R,
          times: j,
        }),
        ot = O(() =>
          be.value === "day" && parseInt(e.columnCount, 10) > 1
            ? parseInt(e.columnCount, 10)
            : be.value === "day" && e.maxDays && e.maxDays > 1
            ? e.maxDays
            : ce.value.length
        ),
        rt = O(() =>
          Me.value
            ? parseInt(
                getComputedStyle(Me.value).getPropertyValue(
                  "--calendar-intervals-width"
                ),
                10
              )
            : 0
        ),
        st = O(() => {
          if (Me.value) {
            const o = B.width || Me.value.getBoundingClientRect().width;
            if (o && rt.value && ot.value)
              return (o - qe.value - rt.value) / ot.value + "px";
          }
          return 100 / ot.value + "%";
        });
      ne([ce], kt, { deep: !0, immediate: !0 }),
        ne(
          () => e.modelValue,
          (o, L) => {
            if (F.value !== e.modelValue) {
              if (e.animated === !0) {
                const P = Q(ye(o)),
                  V = Q(ye(L));
                R.value = P >= V ? "next" : "prev";
              }
              F.value = o;
            }
            m.value = o;
          }
        ),
        ne(F, (o, L) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const P = Q(ye(o)),
                V = Q(ye(L));
              R.value = P >= V ? "next" : "prev";
            }
            a("update:model-value", o);
          }
        }),
        ne(m, (o) => {
          o && (C.value = Se(o));
        }),
        ne(C, (o) => {
          E.value[m.value] ? E.value[m.value].focus() : yt();
        }),
        ne(
          () => e.maxDays,
          (o) => {
            U.value = o;
          }
        ),
        Xt(() => {
          (E.value = {}), (A.value = {}), (M.value = {});
        }),
        Zt(() => {
          ut();
        });
      function ht() {
        F.value = Ge();
      }
      function _t(o = 1) {
        Ue(o);
      }
      function wt(o = 1) {
        Ue(-o);
      }
      function lt({ width: o, height: L }) {
        (B.width = o), (B.height = L);
      }
      function $e(o) {
        return o.date === F.value;
      }
      function Xe() {
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
          [Re(), pe()]
        );
      }
      function Re() {
        const o = t["head-intervals"],
          L = { timestamps: ce.value, days: ce.value, date: e.modelValue };
        return i(
          "div",
          {
            class: {
              "q-calendar-day__head--intervals": !0,
              "q-calendar__sticky": N.value === !0,
            },
            ...Ee("-head-intervals", (P) => ({ scope: L, event: P })),
          },
          [o && o({ scope: L })]
        );
      }
      function pe() {
        return i(
          "div",
          { ref: f, class: { "q-calendar-day__head--days__column": !0 } },
          [et(), W()]
        );
      }
      function et() {
        return i(
          "div",
          { class: { "q-calendar-day__head--days__weekdays": !0 } },
          [...le()]
        );
      }
      function W() {
        const o = t["head-days-events"];
        return (
          Wa(() => {
            if (M.value && parseInt(e.columnCount, 10) === 0 && window)
              try {
                const L = window.getComputedStyle(M.value);
                (A.value.parentElement.style.height = L.height),
                  (A.value.style.height = L.height);
              } catch {}
          }),
          i("div", { class: { "q-calendar-day__head--days__event": !0 } }, [
            o &&
              i(
                "div",
                {
                  ref: A,
                  style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    overflow: "hidden",
                    zIndex: 1,
                  },
                },
                [o({ scope: { days: ce.value, ref: M } })]
              ),
            ...ie(),
          ])
        );
      }
      function le() {
        return ce.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((o, L) => L + parseInt(e.columnIndexStart, 10))
              .map((o) => fe(ce.value[0], o))
          : ce.value.map((o) => fe(o));
      }
      function ie() {
        return ce.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((o, L) => L + parseInt(e.columnIndexStart, 10))
              .map((o) => he(ce.value[0], o))
          : ce.value.map((o) => he(o));
      }
      function fe(o, L) {
        const P = t["head-day"],
          V = t["head-date"],
          ae = e.noActiveDate !== !0 && $e(o),
          de = re(o, L);
        (de.activeDate = ae),
          (de.droppable = H.value === o.date),
          (de.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(o.weekday)
            : !1);
        const Pe = N.value === !0 ? e.cellWidth : st.value,
          we = e.weekdayStyle || Je,
          Ot = { width: Pe, maxWidth: Pe, minWidth: Pe, ...we({ scope: de }) };
        N.value === !0 && (Ot.minWidth = Pe);
        const qa =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: de })
              : {},
          ca = e.focusable === !0 && e.focusType.includes("weekday"),
          Ke = o.date + (L !== void 0 ? "-" + L : ""),
          oa = {
            key: Ke,
            ref: (Qe) => {
              E.value[Ke] = Qe;
            },
            tabindex: ca === !0 ? 0 : -1,
            class: {
              "q-calendar-day__head--day": !0,
              ...qa,
              ...Fe(o),
              "q-active-date": ae,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": ca === !0,
            },
            style: Ot,
            onFocus: (Qe) => {
              ca === !0 && (m.value = Ke);
            },
            onKeydown: (Qe) => {
              o.disabled !== !0 &&
                Ye(Qe, [13, 32]) &&
                (Qe.stopPropagation(), Qe.preventDefault());
            },
            onKeyup: (Qe) => {
              o.disabled !== !0 && Ye(Qe, [13, 32]) && (F.value = o.date);
            },
            ...Ee("-head-day", (Qe) => ({ scope: de, event: Qe })),
            onDragenter: (Qe) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(Qe, "head-day", de) === !0
                  ? (H.value = o.date)
                  : (H.value = ""));
            },
            onDragover: (Qe) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(Qe, "head-day", de) === !0
                  ? (H.value = o.date)
                  : (H.value = ""));
            },
            onDragleave: (Qe) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(Qe, "head-day", de) === !0
                  ? (H.value = o.date)
                  : (H.value = ""));
            },
            onDrop: (Qe) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(Qe, "head-day", de) === !0
                  ? (H.value = o.date)
                  : (H.value = ""));
            },
          };
        return i("div", oa, [
          P !== void 0 && P({ scope: de }),
          P === void 0 && _(o, L),
          P === void 0 && ke(o),
          P === void 0 && V && V({ scope: de }),
          P === void 0 && u(o, L),
          je(),
        ]);
      }
      function ke(o) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && Be(o),
            e.noDefaultHeaderBtn !== !0 && q(o),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Be(o),
                e.noDefaultHeaderBtn !== !0 && q(o),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Be(o),
                e.noDefaultHeaderBtn !== !0 && q(o),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Be(o),
                e.noDefaultHeaderBtn !== !0 && q(o),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && q(o),
                e.noDefaultHeaderText !== !0 && Be(o),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && q(o),
                e.noDefaultHeaderText !== !0 && Be(o),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && q(o),
                e.noDefaultHeaderText !== !0 && Be(o),
              ]);
      }
      function he(o, L) {
        const P = t["head-day-event"],
          V = e.noActiveDate !== !0 && $e(o),
          ae = re(o, L);
        (ae.activeDate = V),
          (ae.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(o.weekday)
            : !1);
        const de = N.value === !0 ? G(K.value) : st.value,
          Pe = { width: de, maxWidth: de, minWidth: de };
        return (
          N.value === !0 && (Pe.minWidth = de),
          i(
            "div",
            {
              key: "event-" + o.date + (L !== void 0 ? "-" + L : ""),
              class: {
                "q-calendar-day__head--day__event": !0,
                ...Fe(o),
                "q-active-date": V,
              },
              style: Pe,
            },
            [P && P({ scope: ae })]
          )
        );
      }
      function Be(o) {
        const L = t["head-weekday-label"],
          P = e.shortWeekdayLabel === !0,
          V = re(o);
        (V.shortWeekdayLabel = e.shortWeekdayLabel),
          (V.disabled = e.disabledWeekdays
            ? e.disabledWeekdays.includes(o.weekday)
            : !1);
        const ae = {
          class: {
            "q-calendar-day__head--weekday": !0,
            ["q-calendar__" + e.weekdayAlign]: !0,
            "q-calendar__ellipsis": !0,
          },
        };
        return i("div", ae, (L && L({ scope: V })) || c(o, P));
      }
      function c(o, L) {
        const P = at.value(
          o,
          L ||
            (e.weekdayBreakpoints[0] > 0 && K.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar-day__head--weekday-label q-calendar__ellipsis" },
          e.weekdayBreakpoints[1] > 0 && K.value <= e.weekdayBreakpoints[1]
            ? wa(P, e.minWeekdayLabel)
            : P
        );
      }
      function q(o) {
        const L = {
          class: {
            "q-calendar-day__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", L, l(o));
      }
      function l(o) {
        const L = e.noActiveDate !== !0 && $e(o),
          P = ct.value(o, !1),
          V = t["head-day-label"],
          ae = t["head-day-button"],
          de = {
            dayLabel: P,
            timestamp: o,
            activeDate: L,
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
                Ye(we, [13, 32]) &&
                (we.stopPropagation(), we.preventDefault());
            },
            onKeyup: (we) => {
              o.disabled !== !0 &&
                Ye(we, [13, 32]) &&
                ((F.value = o.date),
                ee.value.onClickDate !== void 0 &&
                  a("click-date", { scope: de }));
            },
            ...Ee(
              "-date",
              (we, Ot) => (
                (Ot === "click-date" || Ot === "contextmenu-date") &&
                  ((F.value = o.date),
                  Ot === "click-date" && we.preventDefault()),
                { scope: de, event: we }
              )
            ),
          };
        return (
          e.noAria !== !0 && (Pe.ariaLabel = Ze.value(o)),
          ae ? ae({ scope: de }) : ba(e, Pe, V ? V({ scope: de }) : P)
        );
      }
      function _(o, L) {
        const P = t["column-header-before"];
        if (P)
          return i("div", { class: "q-calendar-day__column-header--before" }, [
            P({ scope: { timestamp: o, columnIndex: L } }),
          ]);
      }
      function u(o, L) {
        const P = t["column-header-after"];
        if (P)
          return i("div", { class: "q-calendar-day__column-header--after" }, [
            P({ scope: { timestamp: o, columnIndex: L } }),
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
                ref: s,
                class: {
                  "q-calendar-day__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [N.value !== !0 && I(), n()]
            )
          : e.noScroll === !0
          ? D()
          : i(
              "div",
              {
                ref: s,
                class: {
                  "q-calendar-day__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [D()]
            );
      }
      function D() {
        return i("div", { ref: g, class: "q-calendar-day__pane" }, [I(), n()]);
      }
      function n() {
        const o = t["day-container"];
        return i("div", { class: "q-calendar-day__day-container" }, [
          N.value === !0 && e.noHeader !== !0 && Xe(),
          i("div", { style: { display: "flex", flexDirection: "row" } }, [
            N.value === !0 && I(),
            ...y(),
          ]),
          o && o({ scope: { days: ce.value } }),
        ]);
      }
      function y() {
        return ce.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((o, L) => L + parseInt(e.columnIndexStart, 10))
              .map((o) => b(ce.value[0], 0, o))
          : ce.value.map((o, L) => b(o, L));
      }
      function b(o, L, P) {
        const V = t["day-body"],
          ae = re(o, P),
          de = N.value === !0 ? e.cellWidth : st.value,
          Pe = { width: de, maxWidth: de, minWidth: de };
        return (
          N.value === !0 && (Pe.minWidth = de),
          i(
            "div",
            {
              key: o.date + (P !== void 0 ? ":" + P : ""),
              class: { "q-calendar-day__day": !0, ...Fe(o) },
              style: Pe,
            },
            [...T(L, P), V && V({ scope: ae })]
          )
        );
      }
      function T(o, L) {
        return p.value[o].map((P) => x(P, L));
      }
      function x(o, L) {
        const P = G(e.intervalHeight),
          V = e.intervalStyle || se,
          ae = t["day-interval"],
          de = re(o, L);
        de.droppable = S.value === mt(o);
        const Pe =
            typeof e.intervalClass == "function"
              ? e.intervalClass({ scope: de })
              : {},
          we = e.focusable === !0 && e.focusType.includes("interval"),
          qa = {
            key: Mt(o),
            tabindex: we === !0 ? 0 : -1,
            class: {
              "q-calendar-day__day-interval": o.minute === 0,
              "q-calendar-day__day-interval--section": o.minute !== 0,
              ...Pe,
              ...te(o, e.selectedDates, e.selectedStartEndDates),
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": we === !0,
            },
            style: { height: P, ...V({ scope: de }) },
            onDragenter: (Ke) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(Ke, "interval", de) === !0
                  ? (S.value = mt(o))
                  : (S.value = ""));
            },
            onDragover: (Ke) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(Ke, "interval", de) === !0
                  ? (S.value = mt(o))
                  : (S.value = ""));
            },
            onDragleave: (Ke) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(Ke, "interval", de) === !0
                  ? (S.value = mt(o))
                  : (S.value = ""));
            },
            onDrop: (Ke) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(Ke, "interval", de) === !0
                  ? (S.value = mt(o))
                  : (S.value = ""));
            },
            onKeydown: (Ke) => {
              Ye(Ke, [13, 32]) && (Ke.stopPropagation(), Ke.preventDefault());
            },
            onKeyup: (Ke) => {
              if (Ye(Ke, [13, 32])) {
                const oa = re(o, L);
                (F.value = oa.timestamp.date),
                  ee.value.onClickTime !== void 0 &&
                    a("click-time", { scope: oa, event: Ke });
              }
            },
            ...Ee("-time", (Ke) => ({
              scope: re(ue(Ke, o, e.timeClicksClamped, j.now), L),
              event: Ke,
            })),
          };
        e.noAria !== !0 && (qa.ariaLabel = Z.value(o));
        const ca = ae ? ae({ scope: de }) : void 0;
        return i("div", qa, [ca, je()]);
      }
      function I() {
        const o = {
          ariaHidden: "true",
          class: {
            "q-calendar-day__intervals-column": !0,
            "q-calendar__ellipsis": !0,
            "q-calendar__sticky": N.value === !0,
          },
          ...Ee("-interval", (L) => ({
            scope: { timestamp: Ce(L, Ie.value, e.timeClicksClamped, j.now) },
            event: L,
          })),
        };
        return i("div", o, ve());
      }
      function ve() {
        return p.value[0].map((o) => $(o));
      }
      function $(o) {
        const L = t["interval-label"],
          P = G(e.intervalHeight),
          V = e.shortIntervalLabel,
          Pe = (e.showIntervalLabel || oe)(o) ? h.value(o, V) : void 0;
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
              [L ? L({ scope: { timestamp: o, label: Pe } }) : Pe]
            ),
          ]
        );
      }
      function dt() {
        const { start: o, end: L, maxDays: P } = xe.value;
        (z.value !== o.date || J.value !== L.date || U.value !== P) &&
          ((z.value = o.date), (J.value = L.date), (U.value = P));
        const V = B.width > 0,
          ae = Bt(
            i("div", { key: z.value, class: "q-calendar-day" }, [
              V === !0 && N.value !== !0 && e.noHeader !== !0 && Xe(),
              V && d(),
            ]),
            [[gt, lt]]
          );
        if (e.animated === !0) {
          const de =
            "q-calendar--" +
            (R.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i(Qt, { name: de, appear: !0 }, () => ae);
        }
        return ae;
      }
      return (
        r({
          prev: wt,
          next: _t,
          move: Ue,
          moveToToday: ht,
          updateCurrent: k,
          timeStartPos: nt,
          timeDurationHeight: Ae,
          heightToMinutes: Le,
          scrollToTime: Ve,
        }),
        () => ge()
      );
    },
  });
const Bn = {
  dayHeight: { type: [Number, String], default: 0, validator: ze },
  dayMinHeight: { type: [Number, String], default: 0, validator: ze },
  dayStyle: { type: Function, default: null },
  dayClass: { type: Function, default: null },
  weekdayStyle: { type: Function, default: null },
  weekdayClass: { type: Function, default: null },
  dayPadding: String,
  minWeeks: { type: [Number, String], validator: ze, default: 1 },
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
    validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e) || ze(e),
  },
  monthLabelSize: {
    type: String,
    default: "sm",
    validator: (e) =>
      ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) ||
      (!!e && e.length > 0),
  },
  verticalStretch: Boolean,
};
function pn(
  e,
  t,
  {
    weekdaySkips: a,
    times: r,
    parsedStart: s,
    parsedEnd: g,
    size: f,
    headerColumnRef: m,
  }
) {
  const C = O(() => parseInt(e.minWeeks, 10)),
    E = O(() => C.value * e.weekdays.length),
    A = O(() => Y(be(s.value))),
    M = O(() => _e(me(g.value))),
    R = O(() => {
      let N = 0;
      return (
        e.cellWidth
          ? (N = e.cellWidth)
          : f.width > 0 &&
            m.value &&
            (N = m.value.offsetWidth / e.weekdays.length),
        N
      );
    }),
    z = O(() =>
      $t(
        A.value,
        M.value,
        r.today,
        a.value,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        Number.MAX_SAFE_INTEGER,
        E.value
      )
    ),
    J = O(() => {
      const N = r.today,
        j = Y(N),
        X = _e(N);
      return $t(
        j,
        X,
        N,
        a,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        e.weekdays.length,
        e.weekdays.length
      );
    }),
    U = O(() => {
      const N = { timeZone: "UTC", month: "long" },
        j = { timeZone: "UTC", month: "short" };
      return Ht(e.locale, (X, k) => (k ? j : N));
    }),
    F = O(() => {
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
    B = O(() => {
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
  let H = !0;
  const S = O(() => {
    const N =
      e.miniMode === !0 ||
      (e.miniMode === "auto" && e.breakpoint !== void 0 && f.width < F.value);
    return H === !0 && ((H = !1), t("mini-mode", N)), N;
  });
  ne(S, (N) => {
    t("mini-mode", N);
  });
  function Y(N) {
    return At(N, e.weekdays, r.today);
  }
  function _e(N) {
    return qt(N, e.weekdays, r.today);
  }
  function be(N) {
    return Et(N);
  }
  function me(N) {
    return St(N);
  }
  function ee(N) {
    const j = Q(N);
    return j < Q(s.value) || j > Q(g.value);
  }
  return {
    parsedCellWidth: R,
    parsedMinWeeks: C,
    parsedMinDays: E,
    parsedMonthStart: A,
    parsedMonthEnd: M,
    parsedBreakpoint: F,
    parsedMonthLabelSize: B,
    days: z,
    todayWeek: J,
    isMiniMode: S,
    monthFormatter: U,
    isOutside: ee,
  };
}
var va = Lt({
    name: "QCalendarMonth",
    directives: [gt],
    props: { ...Jt, ...Bn, ...Nt, ...Fa, ...Kt },
    emits: [
      "update:model-value",
      ...la,
      ...na,
      "mini-mode",
      ...Te("-date"),
      ...Te("-day"),
      ...Te("-head-workweek"),
      ...Te("-head-day"),
      ...Te("-workweek"),
    ],
    setup(e, { slots: t, emit: a, expose: r }) {
      const s = w(null),
        g = w(null),
        f = w(null),
        m = w(null),
        C = w(null),
        E = w({}),
        A = w([]),
        M = w([]),
        R = w("next"),
        z = w(e.modelValue || Ge()),
        J = w("0000-00-00"),
        U = w(0),
        F = w(e.modelValue),
        B = Wt({ width: 0, height: 0 }),
        H = w(!1),
        S = w(!1),
        Y = w(null),
        _e = w(null),
        be = O(() => "month"),
        me = Rt();
      if (me === null) throw new Error("current instance is null");
      const { emitListeners: ee } = ra(me),
        { isSticky: N } = La(e);
      ne(N, (l) => {});
      const { times: j, setCurrent: X, updateCurrent: k } = ea(e);
      k(), X();
      const {
          weekdaySkips: We,
          parsedStart: Ie,
          parsedEnd: Ne,
          dayFormatter: ct,
          weekdayFormatter: at,
          ariaDateFormatter: Ze,
          dayStyleDefault: Je,
          getRelativeClasses: Fe,
        } = pt(e, { startDate: z, endDate: J, times: j }),
        He = O(() => Se(e.modelValue, j.now) || Ie.value || j.today);
      (C.value = He.value), (m.value = He.value.date);
      const xe = O(() => {
          const l = {};
          return (
            e.dayPadding !== void 0 && (l.padding = e.dayPadding),
            (l.minWidth = nt.value),
            (l.maxWidth = nt.value),
            (l.width = nt.value),
            l
          );
        }),
        { renderValues: Me } = ta(e, {
          parsedView: be,
          times: j,
          parsedValue: He,
        }),
        {
          rootRef: qe,
          __initCalendar: ut,
          __renderCalendar: ge,
        } = Gt(e, q, { scrollArea: s, pane: g }),
        {
          days: ce,
          todayWeek: p,
          isMiniMode: h,
          parsedCellWidth: Z,
          parsedMonthLabelSize: K,
          isOutside: te,
          monthFormatter: oe,
        } = pn(e, a, {
          weekdaySkips: We,
          times: j,
          parsedStart: Ie,
          parsedEnd: Ne,
          size: B,
          headerColumnRef: f,
        }),
        { move: se } = ua(e, {
          parsedView: be,
          parsedValue: He,
          weekdaySkips: We,
          direction: R,
          maxDays: U,
          times: j,
          emittedValue: F,
          emit: a,
        }),
        { getDefaultMouseEventHandlers: ue } = aa(a, ee),
        { checkChange: Ce } = da(a, { days: ce, lastStart: Y, lastEnd: _e }),
        { isKeyCode: re } = Pt(),
        { tryFocus: Ve } = ia(e, {
          rootRef: qe,
          focusRef: m,
          focusValue: C,
          datesRef: E,
          days: ce,
          parsedView: be,
          parsedValue: He,
          emittedValue: F,
          weekdaySkips: We,
          direction: R,
          times: j,
        }),
        Le = O(() =>
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
        Ae = O(() => e.weekdays.length),
        nt = O(() => {
          if (qe.value) {
            const l = B.width || qe.value.getBoundingClientRect().width;
            if (l && Ae.value) return (l - Le.value) / Ae.value + "px";
          }
          return 100 / Ae.value + "%";
        }),
        Ue = O(
          () =>
            e.focusable === !0 && e.focusType.includes("day") && h.value !== !0
        ),
        Ee = O(
          () =>
            e.focusable === !0 &&
            e.focusType.includes("date") &&
            Ue.value !== !0
        );
      ne([ce], Ce, { deep: !0, immediate: !0 }),
        ne(
          () => e.modelValue,
          (l, _) => {
            if (F.value !== l) {
              if (e.animated === !0) {
                const u = Q(ye(l)),
                  d = Q(ye(_));
                R.value = u >= d ? "next" : "prev";
              }
              F.value = l;
            }
            m.value = l;
          }
        ),
        ne(F, (l, _) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const u = Q(ye(l)),
                d = Q(ye(_));
              R.value = u >= d ? "next" : "prev";
            }
            a("update:model-value", l);
          }
        }),
        ne(m, (l) => {
          l && ((C.value = Se(l)), F.value !== l && (F.value = l));
        }),
        ne(C, (l) => {
          E.value[m.value] ? E.value[m.value].focus() : Ve();
        }),
        Xt(() => {
          (E.value = {}),
            (A.value = []),
            (M.value = []),
            Wa(() => {
              ht();
            });
        }),
        Zt(() => {
          ut(), ht();
        });
      function kt() {
        F.value = Ge();
      }
      function Ye(l = 1) {
        se(l);
      }
      function yt(l = 1) {
        se(-l);
      }
      function ot({ width: l, height: _ }) {
        (B.width = l), (B.height = _);
      }
      function rt(l) {
        return l.date === F.value;
      }
      function st(l) {
        for (let _ = 0; _ < l.length; ++_)
          if (l[_].current === !0) return { timestamp: l[_] };
        return { timestamp: !1 };
      }
      function ht() {
        if (
          !(h.value === !0 || e.dayHeight !== 0 || t.week === void 0) &&
          window
        )
          for (const _ in A.value) {
            const u = A.value[_];
            if (u === void 0) continue;
            const d = M.value[_];
            if (d === void 0) continue;
            const v = window.getComputedStyle(u),
              D = parseFloat(v.marginTop, 10) + parseFloat(v.marginBottom, 10);
            u.clientHeight + D > d.clientHeight &&
              (d.style.height = u.clientHeight + D + "px");
          }
      }
      function _t() {
        return i("div", { class: "q-calendar-month__body" }, [...W()]);
      }
      function wt() {
        return i(
          "div",
          { role: "presentation", class: "q-calendar-month__head" },
          [
            e.showWorkWeeks === !0 && $e(),
            i("div", { class: "q-calendar-month__head--wrapper" }, [lt()]),
          ]
        );
      }
      function lt() {
        return i(
          "div",
          { ref: f, class: { "q-calendar-month__head--weekdays": !0 } },
          [...Xe()]
        );
      }
      function $e() {
        const l = t["head-workweek"],
          _ = { start: Ie.value, end: Ne.value, miniMode: h.value };
        return i(
          "div",
          {
            class: "q-calendar-month__head--workweek",
            ...ue("-head-workweek", (u) => ({ scope: _, event: u })),
          },
          l ? l({ scope: _ }) : "#"
        );
      }
      function Xe() {
        return p.value.map((l, _) => Re(l, _));
      }
      function Re(l, _) {
        const u = t["head-day"],
          d = ce.value.filter(($) => $.weekday === l.weekday),
          v = d[0].weekday,
          n = {
            activeDate: e.noActiveDate !== !0 && rt(l),
            weekday: v,
            timestamp: l,
            days: d,
            index: _,
            miniMode: h.value,
            droppable: H.value === l.weekday,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          y =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: n })
              : {},
          b = e.focusable === !0 && e.focusType.includes("weekday"),
          T = nt.value,
          x = e.weekdayStyle || Je,
          I = { width: T, maxWidth: T, minWidth: T, ...x({ scope: n }) },
          ve = {
            key: l.date + (_ !== void 0 ? "-" + _ : ""),
            tabindex: b === !0 ? 0 : -1,
            class: {
              "q-calendar-month__head--weekday": !0,
              ...y,
              "q-disabled-day disabled": n.disabled === !0,
              ["q-calendar__" + e.weekdayAlign]: !0,
              "q-calendar__ellipsis": !0,
              "q-calendar__focusable": b === !0,
            },
            style: I,
            onDragenter: ($) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc($, "head-day", n) === !0
                  ? (H.value = l.weekday)
                  : (H.value = ""));
            },
            onDragover: ($) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc($, "head-day", n) === !0
                  ? (H.value = l.weekday)
                  : (H.value = ""));
            },
            onDragleave: ($) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc($, "head-day", n) === !0
                  ? (H.value = l.weekday)
                  : (H.value = ""));
            },
            onDrop: ($) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc($, "head-day", n) === !0
                  ? (H.value = l.weekday)
                  : (H.value = ""));
            },
            onFocus: ($) => {
              b === !0 && (m.value = l.date);
            },
            ...ue("-head-day", ($) => ({ scope: n, event: $ })),
          };
        return (
          e.noAria !== !0 && (ve.ariaLabel = at.value(l, !1)),
          i("div", ve, [
            u === void 0 && et(l, e.shortWeekdayLabel || h.value),
            u !== void 0 && u({ scope: n }),
            pe(l, _),
            b === !0 && je(),
          ])
        );
      }
      function pe(l, _) {
        const u = t["head-day-event"],
          d = e.noActiveDate !== !0 && rt(l),
          v = ce.value.filter((x) => x.weekday === l.weekday),
          n = {
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
          y = nt.value,
          b = e.weekdayStyle || Je,
          T = { width: y, maxWidth: y, minWidth: y, ...b({ scope: n }) };
        return i(
          "div",
          {
            key: "event-" + l.date + (_ !== void 0 ? "-" + _ : ""),
            class: { "q-calendar-month__head--event": !0 },
            style: T,
          },
          [u !== void 0 && u({ scope: n })]
        );
      }
      function et(l, _) {
        const u = at.value(
          l,
          _ ||
            (e.weekdayBreakpoints[0] > 0 && Z.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar__ellipsis" },
          (h.value === !0 && e.shortWeekdayLabel === !0) ||
            (e.weekdayBreakpoints[1] > 0 && Z.value <= e.weekdayBreakpoints[1])
            ? wa(u, e.minWeekdayLabel)
            : u
        );
      }
      function W() {
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
          D = {};
        (D.height =
          e.dayHeight > 0 && h.value !== !0
            ? G(parseInt(e.dayHeight, 10))
            : "auto"),
          e.dayMinHeight > 0 &&
            h.value !== !0 &&
            (D.minHeight = G(parseInt(e.dayMinHeight, 10)));
        const n =
          parseInt(e.dayHeight, 10) === 0 && parseInt(e.dayMinHeight, 10) === 0;
        return i(
          "div",
          {
            key: l[0].date,
            ref: (y) => {
              M.value[_] = y;
            },
            class: {
              "q-calendar-month__week--wrapper": !0,
              "q-calendar-month__week--auto-height": n,
            },
            style: D,
          },
          [
            e.showWorkWeeks === !0 ? ie(l) : void 0,
            i("div", { class: "q-calendar-month__week" }, [
              i(
                "div",
                { class: "q-calendar-month__week--days" },
                l.map((y, b) => fe(y))
              ),
              h.value !== !0 && u !== void 0
                ? i(
                    "div",
                    {
                      ref: (y) => {
                        A.value[_] = y;
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
          { timestamp: d } = st(l),
          v = Number(u.workweek).toLocaleString(e.locale),
          D = { workweekLabel: v, week: l, miniMode: h.value };
        return i(
          "div",
          {
            key: u.workweek,
            class: {
              "q-calendar-month__workweek": !0,
              ...Fe(d !== !1 ? d : u, !1),
            },
            ...ue("-workweek", (n) => ({ scope: D, event: n })),
          },
          _ ? _({ scope: D }) : v
        );
      }
      function fe(l) {
        const _ = t.day,
          u = e.dayStyle || Je,
          d = te(l),
          v = e.noActiveDate !== !0 && He.value.date === l.date,
          D =
            d === !1 &&
            e.showMonthLabel === !0 &&
            ce.value.find((I) => I.month === l.month).day === l.day,
          n = {
            outside: d,
            timestamp: l,
            miniMode: h.value,
            activeDate: v,
            hasMonth: D,
            droppable: S.value === l.date,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          y = Object.assign({ ...xe.value }, u({ scope: n })),
          b = typeof e.dayClass == "function" ? e.dayClass({ scope: n }) : {},
          T = {
            key: l.date,
            ref: (I) => {
              Ue.value === !0 && (E.value[l.date] = I);
            },
            tabindex: Ue.value === !0 ? 0 : -1,
            class: {
              "q-calendar-month__day": !0,
              ...b,
              ...Fe(l, d, e.selectedDates, e.selectedStartEndDates, e.hover),
              "q-active-date": v === !0,
              disabled: e.enableOutsideDays !== !0 && d === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Ue.value === !0,
            },
            style: y,
            onFocus: (I) => {
              Ue.value === !0 && (m.value = l.date);
            },
            onKeydown: (I) => {
              d !== !0 &&
                l.disabled !== !0 &&
                re(I, [13, 32]) &&
                (I.stopPropagation(), I.preventDefault());
            },
            onKeyup: (I) => {
              d !== !0 &&
                l.disabled !== !0 &&
                re(I, [13, 32]) &&
                (I.stopPropagation(),
                I.preventDefault(),
                ee.value.onClickDay !== void 0 &&
                  h.value !== !0 &&
                  a("click-day", { scope: n, event: I }));
            },
            ...ue("-day", (I) => ({ scope: n, event: I })),
          };
        return (
          d !== !0 &&
            Object.assign(T, {
              onDragenter: (I) => {
                e.dragEnterFunc !== void 0 &&
                  typeof e.dragEnterFunc == "function" &&
                  (e.dragEnterFunc(I, "day", n) === !0
                    ? (S.value = l.date)
                    : (S.value = ""));
              },
              onDragover: (I) => {
                e.dragOverFunc !== void 0 &&
                  typeof e.dragOverFunc == "function" &&
                  (e.dragOverFunc(I, "day", n) === !0
                    ? (S.value = l.date)
                    : (S.value = ""));
              },
              onDragleave: (I) => {
                e.dragLeaveFunc !== void 0 &&
                  typeof e.dragLeaveFunc == "function" &&
                  (e.dragLeaveFunc(I, "day", n) === !0
                    ? (S.value = l.date)
                    : (S.value = ""));
              },
              onDrop: (I) => {
                e.dropFunc !== void 0 &&
                  typeof e.dropFunc == "function" &&
                  (e.dropFunc(I, "day", n) === !0
                    ? (S.value = l.date)
                    : (S.value = ""));
              },
            }),
          e.noAria !== !0 && (T.ariaLabel = Ze.value(l)),
          i("div", T, [
            ke(l, d, D),
            i(
              "div",
              { class: { "q-calendar-month__day--content": !0 } },
              _ ? _({ scope: n }) : void 0
            ),
            Ue.value === !0 && je(),
          ])
        );
      }
      function ke(l, _, u) {
        let d, v;
        const D = [he(l, _)];
        h.value !== !0 && u === !0 && B.width > 340 && (v = c(l, _)),
          h.value !== !0 &&
            e.showDayOfYearLabel === !0 &&
            v === void 0 &&
            B.width > 300 &&
            (d = Be(l, _)),
          e.dateAlign === "left"
            ? (d !== void 0 && D.push(d), v !== void 0 && D.push(v))
            : e.dateAlign === "right"
            ? (d !== void 0 && D.unshift(d), v !== void 0 && D.unshift(v))
            : ((d = void 0), (v = void 0));
        const n = {
          class: {
            "q-calendar-month__day--label__wrapper": !0,
            "q-calendar__ellipsis": !0,
            ["q-calendar__" + e.dateAlign]: d === void 0 && v === void 0,
            "q-calendar__justify": d !== void 0 || v !== void 0,
          },
        };
        return i("div", n, D);
      }
      function he(l, _) {
        if (_ === !0 && e.noOutsideDays === !0) return;
        const u = ct.value(l, !1),
          d = t["head-day-label"],
          v = t["head-day-button"],
          D =
            e.selectedDates &&
            e.selectedDates.length > 0 &&
            e.selectedDates.includes(l.date),
          n = e.noActiveDate !== !0 && rt(l),
          y = {
            dayLabel: u,
            timestamp: l,
            outside: _,
            activeDate: n,
            selectedDate: D,
            miniMode: h.value,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(l.weekday)
              : !1,
          },
          b = {
            key: l.date,
            ref: (T) => {
              Ee.value === !0 && (E.value[l.date] = T);
            },
            tabindex: Ee.value === !0 ? 0 : -1,
            class: {
              "q-calendar-month__day--label": !0,
              "q-calendar__button": !0,
              "q-calendar__button--round": e.dateType === "round",
              "q-calendar__button--rounded": e.dateType === "rounded",
              "q-calendar__button--bordered": l.current === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Ee.value === !0,
            },
            disabled:
              l.disabled === !0 || (e.enableOutsideDays !== !0 && _ === !0),
            onFocus: (T) => {
              Ee.value === !0 && (m.value = l.date);
            },
            onKeydown: (T) => {
              _ !== !0 &&
                l.disabled !== !0 &&
                re(T, [13, 32]) &&
                (T.stopPropagation(), T.preventDefault());
            },
            onKeyup: (T) => {
              Ee.value === !0 &&
                _ !== !0 &&
                l.disabled !== !0 &&
                re(T, [13, 32]) &&
                (T.stopPropagation(),
                T.preventDefault(),
                (F.value = l.date),
                ee.value.onClickDate !== void 0 &&
                  a("click-date", { scope: y, event: T }));
            },
            ...ue(
              "-date",
              (T, x) => (
                T.stopPropagation(),
                (x === "click-date" || x === "contextmenu-date") &&
                  (F.value = l.date),
                { scope: y, event: T }
              )
            ),
          };
        return (
          e.noAria !== !0 && (b.ariaLabel = Ze.value(l)),
          [
            v ? v({ scope: y }) : ba(e, b, d ? d({ scope: y }) : u),
            Ee.value === !0 && je(),
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
          D = {};
        return (
          h.value !== !0 && K.value !== void 0 && (D.fontSize = K.value),
          i(
            "span",
            {
              class: "q-calendar-month__day--month q-calendar__ellipsis",
              style: D,
            },
            [u ? u({ scope: v }) : h.value !== !0 ? d : void 0]
          )
        );
      }
      function q() {
        const { start: l, end: _ } = Me.value;
        (z.value = l.date), (J.value = _.date);
        const u = B.width > 0,
          d = Bt(
            i(
              "div",
              {
                class: {
                  "q-calendar-mini": h.value === !0,
                  "q-calendar-month": !0,
                },
                key: z.value,
              },
              [u === !0 && e.noHeader !== !0 && wt(), u === !0 && _t()]
            ),
            [[gt, ot]]
          );
        if (e.animated === !0) {
          const v =
            "q-calendar--" +
            (R.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i(Qt, { name: v, appear: !0 }, () => d);
        }
        return d;
      }
      return (
        r({ prev: yt, next: Ye, move: se, moveToToday: kt, updateCurrent: k }),
        () => ge()
      );
    },
  }),
  ya = Lt({
    name: "QCalendarResource",
    props: { ...Jt, ...Mn, ...rn, ...Ma, ...Da, ...Nt, ...Kt },
    emits: [
      "update:model-value",
      "update:model-resources",
      "resource-expanded",
      ...la,
      ...na,
      ...Te("-date"),
      ...Te("-interval"),
      ...Te("-head-day"),
      ...Te("-time"),
      ...Te("-head-resources"),
      ...Te("-resource"),
    ],
    setup(e, { slots: t, emit: a, expose: r }) {
      const s = w(null),
        g = w(null),
        f = w(null),
        m = w(null),
        C = w(null),
        E = w(null),
        A = w({}),
        M = w({}),
        R = w("next"),
        z = w(Ge()),
        J = w("0000-00-00"),
        U = w(0),
        F = w(e.modelValue),
        B = Wt({ width: 0, height: 0 }),
        H = w(!1),
        S = w(!1),
        Y = w(!1),
        _e = w(null),
        be = w(null);
      ne(
        () => e.view,
        () => {
          U.value = 0;
        }
      );
      const me = O(() => (e.view === "month" ? "month-interval" : e.view)),
        ee = O(() => parseInt(e.cellWidth, 10)),
        N = Rt();
      if (N === null) throw new Error("current instance is null");
      const { emitListeners: j } = ra(N),
        { times: X, setCurrent: k, updateCurrent: We } = ea(e);
      We(), k();
      const {
          weekdaySkips: Ie,
          parsedStart: Ne,
          parsedEnd: ct,
          dayStyleDefault: at,
        } = pt(e, { startDate: z, endDate: J, times: X }),
        Ze = O(() => Se(e.modelValue, X.now) || Ne.value || X.today);
      (E.value = Ze.value), (C.value = Ze.value.date);
      const { renderValues: Je } = ta(e, {
          parsedView: me,
          times: X,
          parsedValue: Ze,
        }),
        {
          rootRef: Fe,
          __initCalendar: He,
          __renderCalendar: xe,
        } = Gt(e, et, { scrollArea: s, pane: g }),
        {
          days: Me,
          intervals: qe,
          intervalFormatter: ut,
          styleDefault: ge,
          scrollToTimeX: ce,
          timeDurationWidth: p,
          timeStartPosX: h,
          widthToMinutes: Z,
        } = xa(e, {
          weekdaySkips: Ie,
          times: X,
          scrollArea: s,
          parsedStart: Ne,
          parsedEnd: ct,
          maxDays: U,
          size: B,
          headerColumnRef: m,
        }),
        { move: K } = ua(e, {
          parsedView: me,
          parsedValue: Ze,
          weekdaySkips: Ie,
          direction: R,
          maxDays: U,
          times: X,
          emittedValue: F,
          emit: a,
        }),
        { getDefaultMouseEventHandlers: te } = aa(a, j),
        { checkChange: oe } = da(a, { days: Me, lastStart: _e, lastEnd: be }),
        { isKeyCode: se } = Pt(),
        { tryFocus: ue } = ia(e, {
          rootRef: Fe,
          focusRef: C,
          focusValue: E,
          datesRef: A,
          days: Me,
          parsedView: me,
          parsedValue: Ze,
          emittedValue: F,
          weekdaySkips: Ie,
          direction: R,
          times: X,
        }),
        Ce = O(() => {
          const W = parseInt(e.resourceHeight, 10);
          return W === 0 ? "auto" : W;
        }),
        re = O(() => parseInt(e.resourceMinHeight, 10)),
        Ve = O(() => parseInt(e.intervalHeaderHeight, 10));
      ne([Me], oe, { deep: !0, immediate: !0 }),
        ne(
          () => e.modelValue,
          (W, le) => {
            if (F.value !== W) {
              if (e.animated === !0) {
                const ie = Q(ye(W)),
                  fe = Q(ye(le));
                R.value = ie >= fe ? "next" : "prev";
              }
              F.value = W;
            }
            C.value = W;
          }
        ),
        ne(F, (W, le) => {
          if (F.value !== e.modelValue) {
            if (e.animated === !0) {
              const ie = Q(ye(W)),
                fe = Q(ye(le));
              R.value = ie >= fe ? "next" : "prev";
            }
            a("update:model-value", W);
          }
        }),
        ne(C, (W) => {
          W && (E.value = Se(W));
        }),
        ne(E, (W) => {
          A.value[C.value] ? A.value[C.value].focus() : ue();
        }),
        Xt(() => {
          (A.value = {}), (M.value = {});
        }),
        Zt(() => {
          He();
        });
      function Le() {
        F.value = Ge();
      }
      function Ae(W = 1) {
        K(W);
      }
      function nt(W = 1) {
        K(-W);
      }
      function Ue({ width: W, height: le }) {
        (B.width = W), (B.height = le);
      }
      function Ee(W) {
        return W.date === F.value;
      }
      function kt() {
        const W = { height: G(Ve.value) };
        return i(
          "div",
          {
            ref: f,
            roll: "presentation",
            class: {
              "q-calendar-resource__head": !0,
              "q-calendar__sticky": e.noSticky !== !0,
            },
            style: W,
          },
          [Ye(), yt()]
        );
      }
      function Ye() {
        const W = t["head-resources"],
          le = G(Ve.value),
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
            ...te("-head-resources", (fe) => ({ scope: ie, event: fe })),
          },
          [W && W({ scope: ie })]
        );
      }
      function yt() {
        return i(
          "div",
          { ref: m, class: { "q-calendar-resource__head--intervals": !0 } },
          [qe.value.map((W) => W.map((le, ie) => ot(le, ie)))]
        );
      }
      function ot(W, le) {
        const ie = t["interval-label"],
          fe = e.noActiveDate !== !0 && Ee(W),
          ke = G(ee.value),
          he = G(Ve.value),
          Be = e.shortIntervalLabel,
          c = ut.value(W, Be),
          q = { timestamp: W, index: le, label: c };
        q.droppable = H.value === c;
        const l = e.intervalStyle || at,
          _ = {
            width: ke,
            maxWidth: ke,
            minWidth: ke,
            height: he,
            ...l({ scope: q }),
          },
          u =
            typeof e.intervalClass == "function"
              ? e.intervalClass({ scope: q })
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
                (e.dragEnterFunc(v, "interval", q) === !0
                  ? (H.value = c)
                  : (H.value = ""));
            },
            onDragover: (v) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(v, "interval", q) === !0
                  ? (H.value = c)
                  : (H.value = ""));
            },
            onDragleave: (v) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(v, "interval", q) === !0
                  ? (H.value = c)
                  : (H.value = ""));
            },
            onDrop: (v) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(v, "interval", q) === !0
                  ? (H.value = c)
                  : (H.value = ""));
            },
            onFocus: (v) => {
              d === !0 && (C.value = c);
            },
            ...te("-interval", (v) => ({ scope: q, event: v })),
          },
          [ie ? ie({ scope: q }) : c, je()]
        );
      }
      function rt() {
        return i("div", { class: "q-calendar-resource__body" }, [st()]);
      }
      function st() {
        return i(
          "div",
          {
            ref: s,
            class: {
              "q-calendar-resource__scroll-area": !0,
              "q-calendar__scroll": !0,
            },
          },
          [_t()]
        );
      }
      function ht() {
        return i("div", {}, "No resources have been defined");
      }
      function _t() {
        return i("div", { class: "q-calendar-resource__day--container" }, [
          kt(),
          e.modelResources === void 0 && ht(),
          e.modelResources !== void 0 && wt(),
        ]);
      }
      function wt() {
        return i(
          "div",
          { class: "q-calendar-resource__resources--body" },
          lt()
        );
      }
      function lt(W = void 0, le = 0, ie = !0) {
        return (
          W === void 0 && (W = e.modelResources),
          W.map((fe, ke) =>
            $e(fe, ke, le, fe.children !== void 0 ? fe.expanded : ie)
          )
        );
      }
      function $e(W, le, ie = 0, fe = !0) {
        const ke = {};
        (ke.height = Ce.value === "auto" ? Ce.value : G(Ce.value)),
          re.value > 0 && (ke.minHeight = G(re.value));
        const he = i(
          "div",
          {
            key: W[e.resourceKey] + "-" + le,
            class: { "q-calendar-resource__resource--row": !0 },
            style: ke,
          },
          [Xe(W, le, ie, fe), Re(W, le)]
        );
        return W.children !== void 0
          ? [
              he,
              i(
                "div",
                {
                  class: {
                    "q-calendar__child": !0,
                    "q-calendar__child--expanded": fe === !0,
                    "q-calendar__child--collapsed": fe !== !0,
                  },
                },
                [lt(W.children, ie + 1, fe === !1 ? fe : W.expanded)]
              ),
            ]
          : [he];
      }
      function Xe(W, le, ie = 0, fe = !0) {
        const ke = t["resource-label"],
          he = {};
        (he.height =
          W.height !== void 0
            ? G(parseInt(W.height, 10))
            : Ce.value
            ? G(Ce.value)
            : "auto"),
          re.value > 0 && (he.minHeight = G(re.value));
        const Be = e.resourceStyle || ge,
          c = W[e.resourceLabel],
          q =
            e.focusable === !0 && e.focusType.includes("resource") && fe === !0,
          l = {
            resource: W,
            timestamps: qe,
            resourceIndex: le,
            indentLevel: ie,
            label: c,
          },
          _ = W[e.resourceKey];
        l.droppable = S.value === _;
        const u =
          typeof e.resourceClass == "function"
            ? e.resourceClass({ scope: l })
            : {};
        return i(
          "div",
          {
            key: W[e.resourceKey] + "-" + le,
            ref: (d) => {
              M.value[W[e.resourceKey]] = d;
            },
            tabindex: q === !0 ? 0 : -1,
            class: {
              "q-calendar-resource__resource": ie === 0,
              "q-calendar-resource__resource--section": ie !== 0,
              ...u,
              "q-calendar__sticky": e.noSticky !== !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": q === !0,
            },
            style: { ...he, ...Be({ scope: l }) },
            onDragenter: (d) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(d, "resource", l) === !0
                  ? (S.value = _)
                  : (S.value = ""));
            },
            onDragover: (d) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(d, "resource", l) === !0
                  ? (S.value = _)
                  : (S.value = ""));
            },
            onDragleave: (d) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(d, "resource", l) === !0
                  ? (S.value = _)
                  : (S.value = ""));
            },
            onDrop: (d) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(d, "resource", l) === !0
                  ? (S.value = _)
                  : (S.value = ""));
            },
            onKeydown: (d) => {
              se(d, [13, 32]) && (d.stopPropagation(), d.preventDefault());
            },
            onKeyup: (d) => {
              se(d, [13, 32]) &&
                j.value.onClickResource !== void 0 &&
                a("click-resource", { scope: l, event: d });
            },
            ...te("-resource", (d) => ({ scope: l, event: d })),
          },
          [
            [
              i("div", {
                class: {
                  "q-calendar__parent": W.children !== void 0,
                  "q-calendar__parent--expanded":
                    W.children !== void 0 && W.expanded === !0,
                  "q-calendar__parent--collapsed":
                    W.children !== void 0 && W.expanded !== !0,
                },
                onClick: (d) => {
                  d.stopPropagation(),
                    (W.expanded = !W.expanded),
                    a("resource-expanded", { expanded: W.expanded, scope: l });
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
                [ke ? ke({ scope: l }) : c]
              ),
              je(),
            ],
          ]
        );
      }
      function Re(W, le) {
        const ie = t["resource-intervals"],
          fe = {
            resource: W,
            timestamps: qe,
            resourceIndex: le,
            timeStartPosX: h,
            timeDurationWidth: p,
          };
        return i("div", { class: "q-calendar-resource__resource--intervals" }, [
          qe.value.map((ke) => ke.map((he) => pe(W, he, le))),
          ie && ie({ scope: fe }),
        ]);
      }
      function pe(W, le, ie) {
        const fe = t["resource-interval"],
          ke = e.noActiveDate !== !0 && Ee(le),
          he = {
            activeDate: ke,
            resource: W,
            timestamp: le,
            resourceIndex: ie,
          },
          Be = W[e.resourceKey],
          c = le.time + "-" + Be;
        he.droppable = Y.value === c;
        const q = e.focusable === !0 && e.focusType.includes("time"),
          l = e.intervalStyle || at,
          _ = G(ee.value),
          u = { width: _, maxWidth: _, minWidth: _, ...l({ scope: he }) };
        return (
          (u.height =
            W.height !== void 0
              ? G(parseInt(W.height, 10))
              : Ce.value > 0
              ? G(Ce.value)
              : "auto"),
          re.value > 0 && (u.minHeight = G(re.value)),
          i(
            "div",
            {
              key: c,
              ref: (d) => {
                A.value[W[e.resourceKey]] = d;
              },
              tabindex: q === !0 ? 0 : -1,
              class: {
                "q-calendar-resource__resource--interval": !0,
                "q-active-date": ke,
                "q-calendar__hoverable": e.hoverable === !0,
                "q-calendar__focusable": q === !0,
              },
              style: u,
              onDragenter: (d) => {
                e.dragEnterFunc !== void 0 &&
                  typeof e.dragEnterFunc == "function" &&
                  (e.dragEnterFunc(d, "time", he) === !0
                    ? (Y.value = c)
                    : (Y.value = ""));
              },
              onDragover: (d) => {
                e.dragOverFunc !== void 0 &&
                  typeof e.dragOverFunc == "function" &&
                  (e.dragOverFunc(d, "time", he) === !0
                    ? (Y.value = c)
                    : (Y.value = ""));
              },
              onDragleave: (d) => {
                e.dragLeaveFunc !== void 0 &&
                  typeof e.dragLeaveFunc == "function" &&
                  (e.dragLeaveFunc(d, "time", he) === !0
                    ? (Y.value = c)
                    : (Y.value = ""));
              },
              onDrop: (d) => {
                e.dropFunc !== void 0 &&
                  typeof e.dropFunc == "function" &&
                  (e.dropFunc(d, "time", he) === !0
                    ? (Y.value = c)
                    : (Y.value = ""));
              },
              onFocus: (d) => {
                q === !0 && (C.value = c);
              },
              ...te("-time", (d) => ({ scope: he, event: d })),
            },
            [fe && fe({ scope: he }), je()]
          )
        );
      }
      function et() {
        const { start: W, end: le, maxDays: ie } = Je.value;
        (z.value !== W.date || J.value !== le.date || U.value !== ie) &&
          ((z.value = W.date), (J.value = le.date), (U.value = ie));
        const fe = B.width > 0,
          ke = Bt(
            i("div", { class: "q-calendar-resource", key: z.value }, [
              fe === !0 && rt(),
            ]),
            [[gt, Ue]]
          );
        if (e.animated === !0) {
          const he =
            "q-calendar--" +
            (R.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i(Qt, { name: he, appear: !0 }, () => ke);
        }
        return ke;
      }
      return (
        r({
          prev: nt,
          next: Ae,
          move: K,
          moveToToday: Le,
          updateCurrent: We,
          timeStartPosX: h,
          timeDurationWidth: p,
          widthToMinutes: Z,
          scrollToTimeX: ce,
        }),
        () => xe()
      );
    },
  }),
  ha = Lt({
    name: "QCalendarScheduler",
    directives: [gt],
    props: { ...Jt, ...xn, ...Ma, ...Da, ...Nt, ...Fa, ...Kt },
    emits: [
      "update:model-value",
      "update:model-resources",
      "resource-expanded",
      ...la,
      ...na,
      ...Te("-date"),
      ...Te("-day-resource"),
      ...Te("-head-resources"),
      ...Te("-head-day"),
      ...Te("-resource"),
    ],
    setup(e, { slots: t, emit: a, expose: r }) {
      const s = w(null),
        g = w(null),
        f = w(null),
        m = w(null),
        C = w(null),
        E = w({}),
        A = w({}),
        M = w({}),
        R = w({}),
        z = w("next"),
        J = w(e.modelValue || Ge()),
        U = w("0000-00-00"),
        F = w(0),
        B = w(e.modelValue),
        H = Wt({ width: 0, height: 0 }),
        S = w(!1),
        Y = w(!1),
        _e = w(null),
        be = w(null);
      ne(
        () => e.view,
        () => {
          F.value = 0;
        }
      );
      const me = O(() => (e.view === "month" ? "month-interval" : e.view)),
        ee = Rt();
      if (ee === null) throw new Error("current instance is null");
      const { emitListeners: N } = ra(ee),
        { isSticky: j } = La(e),
        { times: X, setCurrent: k, updateCurrent: We } = ea(e);
      We(), k();
      const {
          weekdaySkips: Ie,
          parsedStart: Ne,
          parsedEnd: ct,
          dayFormatter: at,
          weekdayFormatter: Ze,
          ariaDateFormatter: Je,
          dayStyleDefault: Fe,
          getRelativeClasses: He,
        } = pt(e, { startDate: J, endDate: U, times: X }),
        xe = O(() => Se(e.modelValue, X.now) || Ne.value || X.today);
      (C.value = xe.value), (m.value = xe.value.date);
      const { renderValues: Me } = ta(e, {
          parsedView: me,
          parsedValue: xe,
          times: X,
        }),
        {
          rootRef: qe,
          scrollWidth: ut,
          __initCalendar: ge,
          __renderCalendar: ce,
        } = Gt(e, D, { scrollArea: s, pane: g }),
        {
          days: p,
          parsedCellWidth: h,
          styleDefault: Z,
        } = xa(e, {
          weekdaySkips: Ie,
          times: X,
          scrollArea: s,
          parsedStart: Ne,
          parsedEnd: ct,
          maxDays: F,
          size: H,
          headerColumnRef: f,
        }),
        { move: K } = ua(e, {
          parsedView: me,
          parsedValue: xe,
          weekdaySkips: Ie,
          direction: z,
          maxDays: F,
          times: X,
          emittedValue: B,
          emit: a,
        }),
        { getDefaultMouseEventHandlers: te } = aa(a, N),
        { checkChange: oe } = da(a, { days: p, lastStart: _e, lastEnd: be }),
        { isKeyCode: se } = Pt(),
        { tryFocus: ue } = ia(e, {
          rootRef: qe,
          focusRef: m,
          focusValue: C,
          datesRef: E,
          days: p,
          parsedView: me,
          parsedValue: xe,
          emittedValue: B,
          weekdaySkips: Ie,
          direction: z,
          times: X,
        }),
        Ce = O(() =>
          me.value === "day" && parseInt(e.columnCount, 10) > 1
            ? parseInt(e.columnCount, 10)
            : me.value === "day" && e.maxDays && e.maxDays > 1
            ? e.maxDays
            : p.value.length
        ),
        re = O(() =>
          qe.value
            ? parseInt(
                getComputedStyle(qe.value).getPropertyValue(
                  "--calendar-resources-width"
                ),
                10
              )
            : 0
        ),
        Ve = O(() => {
          const n = parseInt(e.resourceHeight, 10);
          return n === 0 ? "auto" : n;
        }),
        Le = O(() => parseInt(e.resourceMinHeight, 10)),
        Ae = O(() => {
          if (qe.value) {
            const n = H.width || qe.value.getBoundingClientRect().width;
            if (n && re.value && Ce.value)
              return (n - ut.value - re.value) / Ce.value + "px";
          }
          return 100 / Ce.value + "%";
        });
      ne([p], oe, { deep: !0, immediate: !0 }),
        ne(
          () => e.modelValue,
          (n, y) => {
            if (B.value !== e.modelValue) {
              if (e.animated === !0) {
                const b = Q(ye(n)),
                  T = Q(ye(y));
                z.value = b >= T ? "next" : "prev";
              }
              B.value = n;
            }
            m.value = n;
          }
        ),
        ne(B, (n, y) => {
          if (B.value !== e.modelValue) {
            if (e.animated === !0) {
              const b = Q(ye(n)),
                T = Q(ye(y));
              z.value = b >= T ? "next" : "prev";
            }
            a("update:model-value", n);
          }
        }),
        ne(m, (n) => {
          n && (C.value = Se(n));
        }),
        ne(C, (n) => {
          E.value[m.value] ? E.value[m.value].focus() : ue();
        }),
        ne(
          () => e.maxDays,
          (n) => {
            F.value = n;
          }
        ),
        Xt(() => {
          (E.value = {}), (M.value = {}), (R.value = {}), (A.value = {});
        }),
        Zt(() => {
          ge();
        });
      function nt() {
        B.value = Ge();
      }
      function Ue(n = 1) {
        K(n);
      }
      function Ee(n = 1) {
        K(-n);
      }
      function kt({ width: n, height: y }) {
        (H.width = n), (H.height = y);
      }
      function Ye(n) {
        return n.date === B.value;
      }
      function yt() {
        return i(
          "div",
          {
            roll: "presentation",
            class: {
              "q-calendar-scheduler__head": !0,
              "q-calendar__sticky": j.value === !0,
            },
            style: { marginRight: ut.value + "px" },
          },
          [ot(), rt()]
        );
      }
      function ot() {
        const n = t["head-resources"],
          y = {
            days: p.value,
            timestamps: p.value,
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
            ...te("-head-resources", (b) => ({ scope: y, event: b })),
          },
          [n && n({ scope: y })]
        );
      }
      function rt() {
        return i(
          "div",
          { ref: f, class: { "q-calendar-scheduler__head--days__column": !0 } },
          [st(), ht()]
        );
      }
      function st() {
        return i(
          "div",
          { class: { "q-calendar-scheduler__head--days__weekdays": !0 } },
          [..._t()]
        );
      }
      function ht() {
        const n = t["head-days-events"];
        return (
          Wa(() => {
            if (R.value && parseInt(e.columnCount, 10) === 0 && window)
              try {
                const y = window.getComputedStyle(R.value);
                (M.value.parentElement.style.height = y.height),
                  (M.value.style.height = y.height);
              } catch {}
          }),
          i(
            "div",
            { class: { "q-calendar-scheduler__head--days__event": !0 } },
            [
              n &&
                i(
                  "div",
                  {
                    ref: M,
                    style: {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      right: 0,
                      overflow: "hidden",
                      zIndex: 1,
                    },
                  },
                  [n({ scope: { timestamps: p.value, days: p.value, ref: R } })]
                ),
              ...wt(),
            ]
          )
        );
      }
      function _t() {
        return p.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((n, y) => y + parseInt(e.columnIndexStart, 10))
              .map((n) => lt(p.value[0], n))
          : p.value.map((n) => lt(n));
      }
      function wt() {
        return p.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((n, y) => y + parseInt(e.columnIndexStart, 10))
              .map((n) => Xe(p.value[0], n))
          : p.value.map((n) => Xe(n));
      }
      function lt(n, y) {
        const b = t["head-day"],
          T = t["head-date"],
          x = e.noActiveDate !== !0 && Ye(n),
          I = {
            timestamp: n,
            activeDate: x,
            droppable: S.value === n.date,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(n.weekday)
              : !1,
          };
        y !== void 0 && (I.columnIndex = y);
        const ve = j.value === !0 ? G(h.value) : Ae.value,
          $ = e.weekdayStyle || Fe,
          dt = { width: ve, maxWidth: ve, minWidth: ve, ...$({ scope: I }) };
        j.value === !0 && (dt.minWidth = ve);
        const o =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: I })
              : {},
          L = e.focusable === !0 && e.focusType.includes("weekday"),
          P = n.date + (y !== void 0 ? "-" + y : ""),
          V = {
            key: P,
            ref: (ae) => {
              E.value[P] = ae;
            },
            tabindex: L === !0 ? 0 : -1,
            class: {
              "q-calendar-scheduler__head--day": !0,
              ...o,
              ...He(n),
              "q-active-date": x,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": L === !0,
            },
            style: dt,
            onFocus: (ae) => {
              L === !0 && (m.value = P);
            },
            onKeydown: (ae) => {
              n.disabled !== !0 &&
                se(ae, [13, 32]) &&
                (ae.stopPropagation(), ae.preventDefault());
            },
            onKeyup: (ae) => {
              n.disabled !== !0 && se(ae, [13, 32]) && (B.value = n.date);
            },
            ...te("-head-day", (ae) => ({ scope: I, event: ae })),
            onDragenter: (ae) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(ae, "head-day", I) === !0
                  ? (S.value = n.date)
                  : (S.value = ""));
            },
            onDragover: (ae) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(ae, "head-day", I) === !0
                  ? (S.value = n.date)
                  : (S.value = ""));
            },
            onDragleave: (ae) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(ae, "head-day", I) === !0
                  ? (S.value = n.date)
                  : (S.value = ""));
            },
            onDrop: (ae) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(ae, "head-day", I) === !0
                  ? (S.value = n.date)
                  : (S.value = ""));
            },
          };
        return i("div", V, [
          b !== void 0 && b({ scope: I }),
          b === void 0 && le(n, y),
          b === void 0 && $e(n),
          b === void 0 && T && T({ scope: I }),
          b === void 0 && ie(n, y),
          je(),
        ]);
      }
      function $e(n) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && Re(n),
            e.noDefaultHeaderBtn !== !0 && et(n),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Re(n),
                e.noDefaultHeaderBtn !== !0 && et(n),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Re(n),
                e.noDefaultHeaderBtn !== !0 && et(n),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Re(n),
                e.noDefaultHeaderBtn !== !0 && et(n),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && et(n),
                e.noDefaultHeaderText !== !0 && Re(n),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && et(n),
                e.noDefaultHeaderText !== !0 && Re(n),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && et(n),
                e.noDefaultHeaderText !== !0 && Re(n),
              ]);
      }
      function Xe(n, y) {
        const b = t["head-day-event"],
          T = e.noActiveDate !== !0 && Ye(n),
          x = {
            timestamp: n,
            activeDate: T,
            droppable: S.value === n.date,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(n.weekday)
              : !1,
          };
        y !== void 0 && (x.columnIndex = y);
        const I = j.value === !0 ? G(h.value) : Ae.value,
          ve = { width: I, maxWidth: I, minWidth: I };
        return (
          j.value === !0 && (ve.minWidth = I),
          i(
            "div",
            {
              key: "event-" + n.date + (y !== void 0 ? "-" + y : ""),
              class: {
                "q-calendar-scheduler__head--day__event": !0,
                ...He(n),
                "q-active-date": T,
              },
              style: ve,
            },
            [b && b({ scope: x })]
          )
        );
      }
      function Re(n) {
        const y = t["head-weekday-label"],
          b = e.shortWeekdayLabel === !0,
          T = { timestamp: n, shortWeekdayLabel: b },
          x = {
            class: {
              "q-calendar-scheduler__head--weekday": !0,
              ["q-calendar__" + e.weekdayAlign]: !0,
              "q-calendar__ellipsis": !0,
            },
          };
        return i("div", x, (y && y({ scope: T })) || pe(n, b));
      }
      function pe(n, y) {
        const b = Ze.value(
          n,
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
            ? wa(b, e.minWeekdayLabel)
            : b
        );
      }
      function et(n) {
        const y = {
          class: {
            "q-calendar-scheduler__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", y, W(n));
      }
      function W(n) {
        const y = e.noActiveDate !== !0 && Ye(n),
          b = at.value(n, !1),
          T = t["head-day-label"],
          x = t["head-day-button"],
          I = { dayLabel: b, timestamp: n, activeDate: y },
          ve = {
            class: {
              "q-calendar-scheduler__head--day__label": !0,
              "q-calendar__button": !0,
              "q-calendar__button--round": e.dateType === "round",
              "q-calendar__button--rounded": e.dateType === "rounded",
              "q-calendar__button--bordered": n.current === !0,
              "q-calendar__focusable": !0,
            },
            disabled: n.disabled,
            onKeydown: ($) => {
              n.disabled !== !0 &&
                se($, [13, 32]) &&
                ($.stopPropagation(), $.preventDefault());
            },
            onKeyup: ($) => {
              n.disabled !== !0 &&
                se($, [13, 32]) &&
                ((B.value = n.date),
                N.value.onClickDate !== void 0 &&
                  a("click-date", { scope: I }));
            },
            ...te(
              "-date",
              ($, dt) => (
                (dt === "click-date" || dt === "contextmenu-date") &&
                  ((B.value = n.date),
                  dt === "click-date" && $.preventDefault()),
                { scope: I, event: $ }
              )
            ),
          };
        return (
          e.noAria !== !0 && (ve.ariaLabel = Je.value(n)),
          x ? x({ scope: I }) : ba(e, ve, T ? T({ scope: I }) : b)
        );
      }
      function le(n, y) {
        const b = t["column-header-before"];
        if (b)
          return i(
            "div",
            { class: "q-calendar-scheduler__column-header--before" },
            [b({ scope: { timestamp: n, columnIndex: y } })]
          );
      }
      function ie(n, y) {
        const b = t["column-header-after"];
        if (b)
          return i(
            "div",
            { class: "q-calendar-scheduler__column-header--after" },
            [b({ scope: { timestamp: n, columnIndex: y } })]
          );
      }
      function fe() {
        return i("div", { class: "q-calendar-scheduler__body" }, [ke()]);
      }
      function ke() {
        return j.value === !0
          ? i(
              "div",
              {
                ref: s,
                class: {
                  "q-calendar-scheduler__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [j.value !== !0 && _(), Be()]
            )
          : e.noScroll === !0
          ? he()
          : i(
              "div",
              {
                ref: s,
                class: {
                  "q-calendar-scheduler__scroll-area": !0,
                  "q-calendar__scroll": !0,
                },
              },
              [he()]
            );
      }
      function he() {
        return i("div", { ref: g, class: "q-calendar-scheduler__pane" }, [
          Be(),
        ]);
      }
      function Be() {
        return i("div", { class: "q-calendar-scheduler__day--container" }, [
          j.value === !0 && e.noHeader !== !0 && yt(),
          c(),
        ]);
      }
      function c(n = void 0, y = 0, b = !0) {
        return (
          n === void 0 && (n = e.modelResources),
          n.map((T, x) => q(T, x, y, T.children !== void 0 ? T.expanded : b))
        );
      }
      function q(n, y, b = 0, T = !0) {
        const x = {};
        (x.height =
          n.height !== void 0
            ? G(parseInt(n.height, 10))
            : Ve.value
            ? G(Ve.value)
            : "auto"),
          Le.value > 0 && (x.minHeight = G(Le.value));
        const I = i(
          "div",
          {
            key: n[e.resourceKey] + "-" + y,
            class: { "q-calendar-scheduler__resource--row": !0 },
            style: x,
          },
          [l(n, y, b, T), _(n, y, b, T)]
        );
        return n.children !== void 0
          ? [
              I,
              i(
                "div",
                {
                  class: {
                    "q-calendar__child": !0,
                    "q-calendar__child--expanded": T === !0,
                    "q-calendar__child--collapsed": T !== !0,
                  },
                },
                [c(n.children, b + 1, T === !1 ? T : n.expanded)]
              ),
            ]
          : [I];
      }
      function l(n, y, b = 0, T = !0) {
        const x = t["resource-label"],
          I = {};
        (I.height =
          n.height !== void 0
            ? G(parseInt(n.height, 10))
            : Ve.value
            ? G(Ve.value)
            : "auto"),
          parseInt(e.resourceMinHeight, 10) > 0 &&
            (I.minHeight = G(parseInt(e.resourceMinHeight, 10)));
        const ve = e.resourceStyle || Z,
          $ = n[e.resourceLabel],
          dt =
            e.focusable === !0 && e.focusType.includes("resource") && T === !0,
          o = {
            resource: n,
            timestamps: p.value,
            days: p.value,
            resourceIndex: y,
            indentLevel: b,
            label: $,
          },
          L = n[e.resourceKey];
        o.droppable = Y.value === L;
        const P =
          typeof e.resourceClass == "function"
            ? e.resourceClass({ scope: o })
            : {};
        return i(
          "div",
          {
            key: n[e.resourceKey] + "-" + y,
            ref: (V) => {
              A.value[n[e.resourceKey]] = V;
            },
            tabindex: dt === !0 ? 0 : -1,
            class: {
              "q-calendar-scheduler__resource": b === 0,
              "q-calendar-scheduler__resource--section": b !== 0,
              ...P,
              "q-calendar__sticky": j.value === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": dt === !0,
            },
            style: { ...I, ...ve({ scope: o }) },
            onDragenter: (V) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(V, "resource", o) === !0
                  ? (Y.value = L)
                  : (Y.value = ""));
            },
            onDragover: (V) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(V, "resource", o) === !0
                  ? (Y.value = L)
                  : (Y.value = ""));
            },
            onDragleave: (V) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(V, "resource", o) === !0
                  ? (Y.value = L)
                  : (Y.value = ""));
            },
            onDrop: (V) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(V, "resource", o) === !0
                  ? (Y.value = L)
                  : (Y.value = ""));
            },
            onKeydown: (V) => {
              se(V, [13, 32]) && (V.stopPropagation(), V.preventDefault());
            },
            onKeyup: (V) => {
              se(V, [13, 32]) &&
                N.value.onClickResource !== void 0 &&
                a("click-resource", { scope: o, event: V });
            },
            ...te("-resource", (V) => ({ scope: o, event: V })),
          },
          [
            [
              i("div", {
                class: {
                  "q-calendar__parent": n.children !== void 0,
                  "q-calendar__parent--expanded":
                    n.children !== void 0 && n.expanded === !0,
                  "q-calendar__parent--collapsed":
                    n.children !== void 0 && n.expanded !== !0,
                },
                onClick: (V) => {
                  V.stopPropagation(),
                    (n.expanded = !n.expanded),
                    a("resource-expanded", { expanded: n.expanded, scope: o });
                },
              }),
              i(
                "div",
                {
                  class: {
                    "q-calendar-scheduler__resource--text": !0,
                    "q-calendar__ellipsis": !0,
                  },
                  style: { paddingLeft: 10 * b + 2 + "px" },
                },
                [x ? x({ scope: o }) : $]
              ),
              je(),
            ],
          ]
        );
      }
      function _(n, y, b = 0, T = !0) {
        const x = t["resource-days"],
          I = j.value === !0 ? G(h.value) : Ae.value,
          ve = {
            resource: n,
            resourceIndex: y,
            indentLevel: b,
            expanded: T,
            cellWidth: I,
            timestamps: p.value,
            days: p.value,
          },
          $ = {};
        return (
          ($.height =
            parseInt(e.resourceHeight, 10) > 0
              ? G(parseInt(e.resourceHeight, 10))
              : "auto"),
          parseInt(e.resourceMinHeight, 10) > 0 &&
            ($.minHeight = G(parseInt(e.resourceMinHeight, 10))),
          i(
            "div",
            { class: "q-calendar-scheduler__resource--days", style: $ },
            [...u(n, y, b, T), x && x({ scope: ve })]
          )
        );
      }
      function u(n, y, b = 0, T = !0) {
        return p.value.length === 1 && parseInt(e.columnCount, 10) > 0
          ? Array.apply(null, new Array(parseInt(e.columnCount, 10)))
              .map((x, I) => I + parseInt(e.columnIndexStart, 10))
              .map((x) => d(p.value[0], x, n, y, b, T))
          : p.value.map((x) => d(x, void 0, n, y, b, T));
      }
      function d(n, y, b, T, x = 0, I = !0) {
        const ve = t.day,
          $ = e.dayStyle || Fe,
          dt = e.noActiveDate !== !0 && xe.value.date === n.date,
          o = n.date + ":" + b[e.resourceKey] + (y !== void 0 ? ":" + y : ""),
          L = Y.value === o,
          P = {
            timestamp: n,
            columnIndex: y,
            resource: b,
            resourceIndex: T,
            indentLevel: x,
            activeDate: dt,
            droppable: L,
          },
          V = j.value === !0 ? G(h.value) : Ae.value,
          ae = { width: V, maxWidth: V, ...$({ scope: P }) };
        (ae.height =
          parseInt(e.resourceHeight, 10) > 0
            ? G(parseInt(e.resourceHeight, 10))
            : "auto"),
          parseInt(e.resourceMinHeight, 10) > 0 &&
            (ae.minHeight = G(parseInt(e.resourceMinHeight, 10)));
        const de =
            typeof e.dayClass == "function" ? e.dayClass({ scope: P }) : {},
          Pe = e.focusable === !0 && e.focusType.includes("day") && I === !0;
        return i(
          "div",
          {
            key: n.date + (y !== void 0 ? ":" + y : ""),
            tabindex: Pe === !0 ? 0 : -1,
            class: {
              "q-calendar-scheduler__day": x === 0,
              "q-calendar-scheduler__day--section": x !== 0,
              ...de,
              ...He(n),
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Pe === !0,
            },
            style: ae,
            onDragenter: (we) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(we, "day", P) === !0
                  ? (Y.value = o)
                  : (Y.value = ""));
            },
            onDragover: (we) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(we, "day", P) === !0
                  ? (Y.value = o)
                  : (Y.value = ""));
            },
            onDragleave: (we) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(we, "day", P) === !0
                  ? (Y.value = o)
                  : (Y.value = ""));
            },
            onDrop: (we) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(we, "day", P) === !0
                  ? (Y.value = o)
                  : (Y.value = ""));
            },
            onKeydown: (we) => {
              se(we, [13, 32]) && (we.stopPropagation(), we.preventDefault());
            },
            onKeyup: (we) => {
              se(we, [13, 32]) &&
                ((B.value = P.timestamp.date),
                N.value.onClickResource !== void 0 &&
                  a("click-resource", { scope: P, event: we }));
            },
            ...te("-day-resource", (we) => ({ scope: P, event: we })),
          },
          [ve && ve({ scope: P }), je()]
        );
      }
      function v() {
        return i("div", {}, "No resources have been defined");
      }
      function D() {
        const { start: n, end: y, maxDays: b } = Me.value;
        (J.value !== n.date || U.value !== y.date || F.value !== b) &&
          ((J.value = n.date), (U.value = y.date), (F.value = b));
        const T = H.width > 0,
          x = e.modelResources && e.modelResources.length > 0,
          I = Bt(
            i("div", { key: J.value, class: "q-calendar-scheduler" }, [
              T === !0 &&
                x === !0 &&
                j.value !== !0 &&
                e.noHeader !== !0 &&
                yt(),
              T === !0 && x === !0 && fe(),
              x === !1 && v(),
            ]),
            [[gt, kt]]
          );
        if (e.animated === !0) {
          const ve =
            "q-calendar--" +
            (z.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i(Qt, { name: ve, appear: !0 }, () => I);
        }
        return I;
      }
      return (
        r({ prev: Ee, next: Ue, move: K, moveToToday: nt, updateCurrent: We }),
        () => ce()
      );
    },
  });
const Nn = {
  modelValue: {
    type: String,
    default: Ge(),
    validator: (e) => e === "" || ga(e),
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
  viewCount: { type: Number, default: 1, validator: (e) => ze(e) && e > 0 },
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
        e.forEach((a) => {
          ["day", "date", "weekday", "interval", "resource", "task"].includes(
            a
          ) !== !0 && (t = !1);
        }),
        t
      );
    },
  },
  taskWidth: { type: Number, default: 200, validator: (e) => ze(e) && e > 0 },
};
function eu(e, t, { weekdaySkips: a, times: r }) {
  const s = O(() => {
      if (e.view === "day") return Se(e.modelValue);
      if (e.view === "week") return At(Se(e.modelValue), e.weekdays, r.today);
      if (e.view === "month") return Et(Se(e.modelValue), e.weekdays, r.today);
      throw new Error(`QCalendarTask: unknown 'view' type (${e.view})`);
    }),
    g = O(() => {
      if (e.view === "day") {
        if (e.viewCount === 1) return s.value;
        let m = De(s.value);
        return (m = Oe(m, { day: e.viewCount - 1 })), m;
      } else if (e.view === "week") {
        if (e.viewCount === 1) return qt(Se(e.modelValue), e.weekdays, r.today);
        {
          let m = De(s.value);
          return (
            (m = Oe(m, { day: (e.viewCount - 1) * Ft })),
            qt(m, e.weekdays, r.today)
          );
        }
      } else if (e.view === "month") {
        if (e.viewCount === 1) return St(Se(e.modelValue), e.weekdays, r.today);
        {
          let m = De(s.value);
          return (
            (m = Oe(m, { month: e.viewCount })), St(m, e.weekdays, r.today)
          );
        }
      } else throw new Error(`QCalendarTask: unknown 'view' type (${e.view})`);
    });
  return {
    days: O(() =>
      $t(
        s.value,
        g.value,
        r.today,
        a.value,
        e.disabledBefore,
        e.disabledAfter,
        e.disabledWeekdays,
        e.disabledDays,
        Number.MAX_SAFE_INTEGER
      )
    ),
    parsedStartDate: s,
    parsedEndDate: g,
  };
}
var _a = Lt({
    name: "QCalendarTask",
    directives: [gt],
    props: { ...Nt, ...Kt, ...Nn },
    emits: [
      "update:model-value",
      "update:model-tasks",
      "update:model-title",
      "update:model-footer",
      "task-expanded",
      ...la,
      ...na,
      ...Te("-date"),
      ...Te("-day"),
      ...Te("-head-day"),
    ],
    setup(e, { slots: t, emit: a, expose: r }) {
      const s = w(null),
        g = w(null),
        f = w("next"),
        m = w(e.modelValue || Ge()),
        C = w("0000-00-00"),
        E = w(0),
        A = w(e.modelValue),
        M = w(null),
        R = w(null),
        z = w({}),
        J = Wt({ width: 0, height: 0 }),
        U = w(!1),
        F = w(null),
        B = w(null);
      ne(
        () => e.view,
        () => {
          E.value = 0;
        }
      );
      const H = O(() => (e.view === "month" ? "month-interval" : e.view)),
        S = Rt();
      if (S === null) throw new Error("current instance is null");
      const { emitListeners: Y } = ra(S),
        { times: _e, setCurrent: be, updateCurrent: me } = ea(e);
      me(), be();
      const {
          weekdaySkips: ee,
          parsedStart: N,
          dayFormatter: j,
          weekdayFormatter: X,
          ariaDateFormatter: k,
          dayStyleDefault: We,
          getRelativeClasses: Ie,
        } = pt(e, { startDate: m, endDate: C, times: _e }),
        Ne = O(() => Se(e.modelValue, _e.now) || N.value || _e.today);
      (R.value = Ne.value), (M.value = Ne.value.date);
      const { renderValues: ct } = ta(e, {
          parsedView: H,
          times: _e,
          parsedValue: Ne,
        }),
        {
          rootRef: at,
          __initCalendar: Ze,
          __renderCalendar: Je,
        } = Gt(e, _, { scrollArea: s, pane: g }),
        {
          days: Fe,
          parsedStartDate: He,
          parsedEndDate: xe,
        } = eu(e, a, { weekdaySkips: ee, times: _e }),
        { move: Me } = ua(e, {
          parsedView: H,
          parsedValue: Ne,
          weekdaySkips: ee,
          direction: f,
          maxDays: E,
          times: _e,
          emittedValue: A,
          emit: a,
        }),
        { getDefaultMouseEventHandlers: qe } = aa(a, Y),
        { checkChange: ut } = da(a, { days: Fe, lastStart: F, lastEnd: B }),
        { isKeyCode: ge } = Pt(),
        { tryFocus: ce } = ia(e, {
          rootRef: at,
          focusRef: M,
          focusValue: R,
          datesRef: z,
          days: Fe,
          parsedView: H,
          parsedValue: Ne,
          emittedValue: A,
          weekdaySkips: ee,
          direction: f,
          times: _e,
        }),
        p = w(!0),
        h = O(() => (e.cellWidth !== void 0 ? parseInt(e.cellWidth, 10) : 150)),
        Z = O(
          () =>
            e.focusable === !0 &&
            e.focusType.includes("day") &&
            isMiniMode.value !== !0
        ),
        K = O(
          () =>
            e.focusable === !0 && e.focusType.includes("date") && Z.value !== !0
        ),
        te = O(() => e.focusable === !0 && e.focusType.includes("weekday")),
        oe = O(() => parseInt(e.dayHeight, 10)),
        se = O(() => parseInt(e.dayMinHeight, 10));
      ne([Fe], ut, { deep: !0, immediate: !0 }),
        ne(
          () => e.modelValue,
          (u, d) => {
            if (A.value !== u) {
              if (e.animated === !0) {
                const v = Q(ye(u)),
                  D = Q(ye(d));
                f.value = v >= D ? "next" : "prev";
              }
              A.value = u;
            }
            M.value = u;
          }
        ),
        ne(A, (u, d) => {
          if (A.value !== e.modelValue) {
            if (e.animated === !0) {
              const v = Q(ye(u)),
                D = Q(ye(d));
              f.value = v >= D ? "next" : "prev";
            }
            a("update:model-value", u);
          }
        }),
        ne(M, (u) => {
          u && (R.value = Se(u));
        }),
        ne(R, (u) => {
          z.value[M.value] ? z.value[M.value].focus() : ce();
        }),
        Xt(() => {
          z.value = {};
        }),
        Zt(() => {
          Ze();
        });
      function ue() {
        A.value = Ge();
      }
      function Ce(u = 1) {
        Me(u);
      }
      function re(u = 1) {
        Me(-u);
      }
      function Ve({ width: u, height: d }) {
        (J.width = u), (J.height = d);
      }
      function Le(u) {
        return u.date === A.value;
      }
      function Ae(u, d, v) {
        const D = t.day,
          n = e.dayStyle || We,
          y = e.noActiveDate !== !0 && Ne.value.date === u.date,
          b = { timestamp: u, task: d, taskIndex: v, activeDate: y },
          T = G(h.value),
          x = { width: T, minWidth: T, maxWidth: T, ...n({ scope: b }) },
          I = typeof e.dayClass == "function" ? e.dayClass({ scope: b }) : {};
        return i(
          "div",
          {
            tabindex: Z.value === !0 ? 0 : -1,
            class: {
              "q-calendar-task__task--day": !0,
              ...I,
              ...Ie(u),
              "q-active-date": y === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Z.value === !0,
            },
            style: x,
            onFocus: (ve) => {
              Z.value;
            },
            ...qe("-day", (ve) => ({ scope: b, event: ve })),
            onDragenter: (ve) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc(ve, "day", b) === !0
                  ? (dragOverResource.value = dragValue)
                  : (dragOverResource.value = ""));
            },
            onDragover: (ve) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc(ve, "day", b) === !0
                  ? (dragOverResource.value = dragValue)
                  : (dragOverResource.value = ""));
            },
            onDragleave: (ve) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc(ve, "day", b) === !0
                  ? (dragOverResource.value = dragValue)
                  : (dragOverResource.value = ""));
            },
            onDrop: (ve) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc(ve, "day", b) === !0
                  ? (dragOverResource.value = dragValue)
                  : (dragOverResource.value = ""));
            },
          },
          [D && D({ scope: b }), je()]
        );
      }
      function nt(u, d) {
        return Fe.value.map((v) => Ae(v, u, d));
      }
      function Ue(u, d) {
        const v = t.days,
          D = {
            timestamps: Fe.value,
            days: Fe.value,
            task: u,
            taskIndex: d,
            cellWidth: h.value,
          };
        return i("div", { class: "q-calendar-task__task--days-row" }, [
          nt(u, d),
          v && v({ scope: D }),
        ]);
      }
      function Ee(u, d, v = 0, D = !0) {
        const n = t.task,
          y = {
            start: He.value,
            end: xe.value,
            task: u,
            taskIndex: d,
            expanded: D,
          },
          b = G(e.taskWidth),
          T = { width: b, minWidth: b, maxWidth: b },
          x = e.focusable === !0 && e.focusType.includes("task");
        return i(
          "div",
          {
            class: {
              "q-calendar-task__task--item": !0,
              "q-calendar__sticky": p.value === !0,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": x === !0,
            },
            style: T,
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
                  onClick: (I) => {
                    I.stopPropagation(),
                      (u.expanded = !u.expanded),
                      a("task-expanded", { expanded: u.expanded, scope: y });
                  },
                }),
              ]
            ),
            n && n({ scope: y }),
            je(),
          ]
        );
      }
      function kt(u, d, v = 0, D = !0) {
        const n =
            u.height !== void 0
              ? G(parseInt(u.height, 10))
              : oe.value > 0
              ? G(oe.value)
              : "auto",
          y = se.value > 0 ? G(se.value) : void 0,
          b = { height: n };
        y !== void 0 && (b.minHeight = y);
        const T = i(
          "div",
          {
            key: u[e.taskKey] + "-" + d,
            class: {
              "q-calendar-task__task": v === 0,
              "q-calendar-task__task--section": v !== 0,
            },
            style: b,
          },
          [Ee(u, d, v, D), Ue(u, d)]
        );
        return u.children !== void 0
          ? [
              T,
              i(
                "div",
                {
                  class: {
                    "q-calendar__child": !0,
                    "q-calendar__child--expanded": D === !0,
                    "q-calendar__child--collapsed": D !== !0,
                  },
                },
                [Ye(u.children, v + 1, D === !1 ? D : u.expanded)]
              ),
            ]
          : [T];
      }
      function Ye(u = void 0, d = 0, v = !0) {
        return (
          u === void 0 && (u = e.modelTasks),
          u.map((D, n) => kt(D, n, d, D.children !== void 0 ? D.expanded : v))
        );
      }
      function yt() {
        return i(
          "div",
          {
            class: {
              "q-calendar-task__task--container": !0,
              "q-calendar__sticky": p.value === !0,
            },
          },
          [Ye()]
        );
      }
      function ot(u, d) {
        const v = t["footer-task"],
          D = { start: He.value, end: xe.value, footer: u, index: d },
          n = G(e.taskWidth),
          y = { width: n, minWidth: n, maxWidth: n };
        return i(
          "div",
          {
            class: {
              "q-calendar-task__footer--task": !0,
              "q-calendar__sticky": p.value === !0,
            },
            style: y,
          },
          [v && v({ scope: D })]
        );
      }
      function rt(u, d, v) {
        const D = t["footer-day"],
          n = { timestamp: u, footer: d, index: v },
          y = G(h.value),
          b = { width: y, minWidth: y, maxWidth: y },
          T =
            typeof e.footerDayClass == "function"
              ? e.footerDayClass({ scope: n })
              : {};
        return i(
          "div",
          {
            class: {
              "q-calendar-task__footer--day": !0,
              ...T,
              ...Ie(u),
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": Z.value === !0,
            },
            style: b,
          },
          [D && D({ scope: n })]
        );
      }
      function st(u, d) {
        return i("div", { class: "q-calendar-task__footer--day-wrapper" }, [
          Fe.value.map((v) => rt(v, u, d)),
        ]);
      }
      function ht() {
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
            { default: () => [ot(d, v), st(d, v)] }
          )
        );
      }
      function _t() {
        return i(
          "div",
          {
            class: {
              "q-calendar-task__footer": !0,
              "q-calendar__sticky": p.value === !0,
            },
          },
          ht()
        );
      }
      function wt() {
        return i("div", { class: { "q-calendar-task__container": !0 } }, [
          e.noHeader !== !0 && c(),
          yt(),
          _t(),
        ]);
      }
      function lt() {
        const u = t["head-tasks"],
          d = { start: He.value, end: xe.value },
          v = G(parseInt(e.taskWidth, 10)),
          D = { width: v, minWidth: v, maxWidth: v };
        return i(
          "div",
          {
            class: {
              "q-calendar-task__head--tasks": !0,
              "q-calendar__sticky": p.value === !0,
            },
            style: D,
          },
          [u && u({ scope: d })]
        );
      }
      function $e(u, d) {
        const v = t["title-task"],
          D = G(parseInt(e.taskWidth, 10)),
          n = { width: D, minWidth: D, maxWidth: D },
          y = {
            start: He.value,
            end: xe.value,
            cellWidth: D,
            title: u,
            index: d,
          };
        return i(
          "div",
          {
            class: {
              "q-calendar-task__title--task": !0,
              "q-calendar__sticky": p.value === !0,
            },
            style: n,
          },
          [v && v({ scope: y })]
        );
      }
      function Xe(u) {
        const d = t["head-weekday-label"],
          D = {
            activeDate: e.noActiveDate !== !0 && Le(u),
            timestamp: u,
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(u.weekday)
              : !1,
          },
          n = {
            class: {
              "q-calendar-task__head--weekday": !0,
              ["q-calendar__" + e.weekdayAlign]: !0,
              "q-calendar__ellipsis": !0,
            },
          };
        return i(
          "div",
          n,
          (d && d({ scope: D })) || Re(u, e.shortWeekdayLabel)
        );
      }
      function Re(u, d) {
        const v = X.value(
          u,
          d ||
            (e.weekdayBreakpoints[0] > 0 && h.value <= e.weekdayBreakpoints[0])
        );
        return i(
          "span",
          { class: "q-calendar__ellipsis" },
          e.weekdayBreakpoints[1] > 0 && h.value <= e.weekdayBreakpoints[1]
            ? wa(v, e.minWeekdayLabel)
            : v
        );
      }
      function pe(u) {
        const d = {
          class: {
            "q-calendar-task__head--date": !0,
            ["q-calendar__" + e.dateAlign]: !0,
          },
        };
        return i("div", d, et(u));
      }
      function et(u) {
        const d = e.noActiveDate !== !0 && Le(u),
          v = j.value(u, !1),
          D = t["head-day-label"],
          n = t["head-day-button"],
          y = { dayLabel: v, timestamp: u, activeDate: d },
          T = {
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
            onKeydown: (x) => {
              u.disabled !== !0 &&
                ge(x, [13, 32]) &&
                (x.stopPropagation(), x.preventDefault());
            },
            onKeyup: (x) => {
              u.disabled !== !0 &&
                ge(x, [13, 32]) &&
                ((A.value = u.date),
                Y.value.onClickDate !== void 0 &&
                  a("click-date", { scope: y }));
            },
            ...qe(
              "-date",
              (x, I) => (
                (I === "click-date" || I === "contextmenu-date") &&
                  ((A.value = u.date),
                  I === "click-date" && x.preventDefault()),
                { scope: y, event: x }
              )
            ),
          };
        return (
          e.noAria !== !0 && (T.ariaLabel = k.value(u)),
          n ? n({ scope: y }) : ba(e, T, D ? D({ scope: y }) : v)
        );
      }
      function W(u) {
        if (e.dateHeader === "stacked")
          return [
            e.noDefaultHeaderText !== !0 && Xe(u),
            e.noDefaultHeaderBtn !== !0 && pe(u),
          ];
        if (e.dateHeader === "inline")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Xe(u),
                e.noDefaultHeaderBtn !== !0 && pe(u),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Xe(u),
                e.noDefaultHeaderBtn !== !0 && pe(u),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderText !== !0 && Xe(u),
                e.noDefaultHeaderBtn !== !0 && pe(u),
              ]);
        if (e.dateHeader === "inverted")
          return e.weekdayAlign === "left" && e.dateAlign === "right"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && pe(u),
                e.noDefaultHeaderText !== !0 && Xe(u),
              ])
            : e.weekdayAlign === "right" && e.dateAlign === "left"
            ? i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && pe(u),
                e.noDefaultHeaderText !== !0 && Xe(u),
              ])
            : i("div", { class: "q-calendar__header--inline" }, [
                e.noDefaultHeaderBtn !== !0 && pe(u),
                e.noDefaultHeaderText !== !0 && Xe(u),
              ]);
      }
      function le(u, d, v) {
        const D = t["title-day"],
          n = G(h.value),
          y = { width: n, minWidth: n, maxWidth: n },
          b = { timestamp: u, title: d, index: v, cellWidth: h.value },
          T = typeof e.dayClass == "function" ? e.dayClass({ scope: b }) : {},
          x = e.focusable === !0 && e.focusType.includes("day");
        return i(
          "div",
          {
            class: {
              "q-calendar-task__title--day": !0,
              ...T,
              ...Ie(u),
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": x === !0,
            },
            style: y,
          },
          [D && D({ scope: b }), je()]
        );
      }
      function ie(u) {
        const d = t["head-day"],
          v = t["head-date"],
          D = e.noActiveDate !== !0 && Le(u),
          n = {
            timestamp: u,
            activeDate: D,
            droppable: (U.value = u.date),
            disabled: e.disabledWeekdays
              ? e.disabledWeekdays.includes(u.weekday)
              : !1,
          },
          y = e.weekdayStyle || We,
          b =
            typeof e.weekdayClass == "function"
              ? e.weekdayClass({ scope: n })
              : {},
          T = G(h.value),
          x = { width: T, minWidth: T, maxWidth: T, ...y({ scope: n }) },
          I = u.date,
          ve = {
            key: I,
            ref: ($) => {
              z.value[I] = $;
            },
            tabindex: te.value === !0 ? 0 : -1,
            class: {
              "q-calendar-task__head--day": !0,
              ...b,
              ...Ie(u),
              "q-active-date": D,
              "q-calendar__hoverable": e.hoverable === !0,
              "q-calendar__focusable": te.value === !0,
            },
            style: x,
            onFocus: ($) => {
              te.value === !0 && (M.value = I);
            },
            onKeydown: ($) => {
              u.disabled !== !0 &&
                ge($, [13, 32]) &&
                ($.stopPropagation(), $.preventDefault());
            },
            onKeyup: ($) => {
              u.disabled !== !0 && ge($, [13, 32]) && (A.value = u.date);
            },
            ...qe("-head-day", ($) => ({ scope: n, event: $ })),
            onDragenter: ($) => {
              e.dragEnterFunc !== void 0 &&
                typeof e.dragEnterFunc == "function" &&
                (e.dragEnterFunc($, "head-day", n) === !0
                  ? (U.value = u.date)
                  : (U.value = ""));
            },
            onDragover: ($) => {
              e.dragOverFunc !== void 0 &&
                typeof e.dragOverFunc == "function" &&
                (e.dragOverFunc($, "head-day", n) === !0
                  ? (U.value = u.date)
                  : (U.value = ""));
            },
            onDragleave: ($) => {
              e.dragLeaveFunc !== void 0 &&
                typeof e.dragLeaveFunc == "function" &&
                (e.dragLeaveFunc($, "head-day", n) === !0
                  ? (U.value = u.date)
                  : (U.value = ""));
            },
            onDrop: ($) => {
              e.dropFunc !== void 0 &&
                typeof e.dropFunc == "function" &&
                (e.dropFunc($, "head-day", n) === !0
                  ? (U.value = u.date)
                  : (U.value = ""));
            },
          };
        return i("div", ve, [
          d !== void 0 && d({ scope: n }),
          d === void 0 && W(u),
          d === void 0 && v && v({ scope: n }),
          je(),
        ]);
      }
      function fe() {
        return Fe.value.map((u) => ie(u));
      }
      function ke(u, d) {
        return Fe.value.map((v) => le(v, u, d));
      }
      function he() {
        return i("div", { class: { "q-calendar-task__head--days": !0 } }, [
          ...fe(),
        ]);
      }
      function Be(u, d) {
        return i("div", { class: { "q-calendar-task__title--days": !0 } }, [
          ...ke(u, d),
        ]);
      }
      function c() {
        return i(
          "div",
          {
            roll: "presentation",
            class: {
              "q-calendar-task__head": !0,
              "q-calendar__sticky": p.value === !0,
            },
            style: {},
          },
          [
            i("div", { style: { position: "relative", display: "flex" } }, [
              lt(),
              he(),
            ]),
            e.modelTitle.map((u, d) =>
              i(
                "div",
                {
                  class: "q-calendar-task__title",
                  style: { position: "relative", display: "flex" },
                },
                [$e(u, d), Be(u, d)]
              )
            ),
          ]
        );
      }
      function q() {
        return i("div", { class: "q-calendar-task__body" }, [l()]);
      }
      function l() {
        return i(
          "div",
          {
            ref: s,
            class: {
              "q-calendar-task__scroll-area": !0,
              "q-calendar__scroll": !0,
            },
          },
          [wt()]
        );
      }
      function _() {
        const { start: u, end: d } = ct.value;
        (m.value = u.date), (C.value = d.date);
        const v = J.width > 0,
          D = Bt(
            i("div", { key: m.value, class: "q-calendar-task" }, [
              v === !0 && q(),
            ]),
            [[gt, Ve]]
          );
        if (e.animated === !0) {
          const n =
            "q-calendar--" +
            (f.value === "prev" ? e.transitionPrev : e.transitionNext);
          return i(Qt, { name: n, appear: !0 }, () => D);
        }
        return D;
      }
      return (
        r({ prev: re, next: Ce, move: Me, moveToToday: ue, updateCurrent: me }),
        () => Je()
      );
    },
  }),
  Ca = Lt({
    name: "QCalendar",
    props: {
      mode: {
        type: String,
        validator: (e) =>
          ["day", "month", "agenda", "resource", "scheduler", "task"].includes(
            e
          ),
        default: "day",
      },
      ...Jt,
      ...Bn,
      ...Nt,
      ...Fa,
      ...Kt,
      ...rn,
      ...xn,
      ...Mn,
      ...Da,
      ...Nn,
    },
    setup(e, { attrs: t, slots: a, expose: r }) {
      const s = w(null),
        g = O(() => {
          switch (e.mode) {
            case "agenda":
              return fa;
            case "resource":
              return ya;
            case "scheduler":
              return ha;
            case "month":
              return va;
            case "day":
              return Ut;
            case "task":
              return _a;
            case "day":
            default:
              return Ut;
          }
        });
      function f() {
        s.value.moveToToday();
      }
      function m(S = -1) {
        s.value.move(S);
      }
      function C(S = 1) {
        s.value.next(S);
      }
      function E(S = 1) {
        s.value.prev(S);
      }
      function A() {
        s.value.updateCurrent();
      }
      function M(S, Y = !0) {
        return s.value.timeStartPos(S, Y);
      }
      function R(S, Y = !0) {
        return s.value.timeStartPosX(S, Y);
      }
      function z(S) {
        return s.value.timeDurationWidth(S);
      }
      function J(S) {
        return s.value.timeDurationHeight(S);
      }
      function U(S) {
        return s.value.heightToMinutes(S);
      }
      function F(S) {
        return s.value.widthToMinutes(minutes);
      }
      function B(S) {
        return s.value.scrollToTime(S);
      }
      function H(S) {
        return s.value.scrollToTimeX(S);
      }
      return (
        r({
          prev: E,
          next: C,
          move: m,
          moveToToday: f,
          updateCurrent: A,
          timeStartPos: M,
          timeStartPosX: R,
          timeDurationWidth: z,
          timeDurationHeight: J,
          heightToMinutes: U,
          widthToMinutes: F,
          scrollToTime: B,
          scrollToTimeX: H,
        }),
        () => i(g.value, { ref: s, ...e, ...t }, a)
      );
    },
  });
const Pn = "4.0.0-beta.15";
var tu = {
    version: Pn,
    QCalendar: Ca,
    QCalendarAgenda: fa,
    QCalendarDay: Ut,
    QCalendarMonth: va,
    QCalendarResource: ya,
    QCalendarScheduler: ha,
    QCalendarTask: _a,
    PARSE_REGEX: Aa,
    PARSE_DATE: sn,
    PARSE_TIME: Ba,
    DAYS_IN_MONTH: Na,
    DAYS_IN_MONTH_LEAP: Pa,
    DAYS_IN_MONTH_MIN: Ka,
    DAYS_IN_MONTH_MAX: za,
    MONTH_MAX: Dt,
    MONTH_MIN: ma,
    DAY_MIN: jt,
    DAYS_IN_WEEK: Ft,
    MINUTES_IN_HOUR: It,
    HOURS_IN_DAY: sa,
    FIRST_HOUR: fn,
    MILLISECONDS_IN_MINUTE: vn,
    MILLISECONDS_IN_HOUR: yn,
    MILLISECONDS_IN_DAY: Ua,
    MILLISECONDS_IN_WEEK: Ya,
    Timestamp: hn,
    TimeObject: _n,
    today: Ge,
    getStartOfWeek: At,
    getEndOfWeek: qt,
    getStartOfMonth: Et,
    getEndOfMonth: St,
    parseTime: Ta,
    validateTimestamp: ga,
    parsed: ye,
    parseTimestamp: Se,
    parseDate: Va,
    getDayIdentifier: Q,
    getTimeIdentifier: Ct,
    getDayTimeIdentifier: mt,
    diffTimestamp: $a,
    updateRelative: bt,
    updateMinutes: Xa,
    updateWeekday: Ha,
    updateDayOfYear: Za,
    updateWorkWeek: Dn,
    updateDisabled: Qa,
    updateFormatted: it,
    getDayOfYear: Oa,
    getWorkWeek: Ia,
    getWeekday: Ea,
    isLeapYear: ja,
    daysInMonth: ft,
    copyTimestamp: De,
    padNumber: tt,
    getDate: Yt,
    getTime: xt,
    getDateTime: Mt,
    nextDay: vt,
    prevDay: ka,
    moveRelativeDays: Sa,
    relativeDays: Tt,
    findWeekday: Vt,
    getWeekdaySkips: Ga,
    createDayList: $t,
    createIntervalList: Ja,
    createNativeLocaleFormatter: Ht,
    makeDate: pa,
    makeDateTime: en,
    validateNumber: ze,
    maxTimestamp: bn,
    minTimestamp: Fn,
    isBetweenDates: tn,
    isOverlappingDates: qn,
    daysBetween: an,
    weeksBetween: Hn,
    addToDate: Oe,
    compareTimestamps: mn,
    compareDate: gn,
    compareTime: kn,
    compareDateTime: wn,
    getWeekdayFormatter: nn,
    getWeekdayNames: Wn,
    getMonthFormatter: un,
    getMonthNames: An,
    convertToUnit: G,
    indexOf: On,
    install(e, t) {
      e.component(Ca.name, Ca),
        e.component(fa.name, fa),
        e.component(Ut.name, Ut),
        e.component(va.name, va),
        e.component(ya.name, ya),
        e.component(ha.name, ha),
        e.component(_a.name, _a);
    },
  },
  au = Object.freeze({
    __proto__: null,
    version: Pn,
    QCalendar: Ca,
    QCalendarAgenda: fa,
    QCalendarDay: Ut,
    QCalendarMonth: va,
    QCalendarResource: ya,
    QCalendarScheduler: ha,
    QCalendarTask: _a,
    PARSE_REGEX: Aa,
    PARSE_DATE: sn,
    PARSE_TIME: Ba,
    DAYS_IN_MONTH: Na,
    DAYS_IN_MONTH_LEAP: Pa,
    DAYS_IN_MONTH_MIN: Ka,
    DAYS_IN_MONTH_MAX: za,
    MONTH_MAX: Dt,
    MONTH_MIN: ma,
    DAY_MIN: jt,
    DAYS_IN_WEEK: Ft,
    MINUTES_IN_HOUR: It,
    HOURS_IN_DAY: sa,
    FIRST_HOUR: fn,
    MILLISECONDS_IN_MINUTE: vn,
    MILLISECONDS_IN_HOUR: yn,
    MILLISECONDS_IN_DAY: Ua,
    MILLISECONDS_IN_WEEK: Ya,
    Timestamp: hn,
    TimeObject: _n,
    today: Ge,
    getStartOfWeek: At,
    getEndOfWeek: qt,
    getStartOfMonth: Et,
    getEndOfMonth: St,
    parseTime: Ta,
    validateTimestamp: ga,
    parsed: ye,
    parseTimestamp: Se,
    parseDate: Va,
    getDayIdentifier: Q,
    getTimeIdentifier: Ct,
    getDayTimeIdentifier: mt,
    diffTimestamp: $a,
    updateRelative: bt,
    updateMinutes: Xa,
    updateWeekday: Ha,
    updateDayOfYear: Za,
    updateWorkWeek: Dn,
    updateDisabled: Qa,
    updateFormatted: it,
    getDayOfYear: Oa,
    getWorkWeek: Ia,
    getWeekday: Ea,
    isLeapYear: ja,
    daysInMonth: ft,
    copyTimestamp: De,
    padNumber: tt,
    getDate: Yt,
    getTime: xt,
    getDateTime: Mt,
    nextDay: vt,
    prevDay: ka,
    moveRelativeDays: Sa,
    relativeDays: Tt,
    findWeekday: Vt,
    getWeekdaySkips: Ga,
    createDayList: $t,
    createIntervalList: Ja,
    createNativeLocaleFormatter: Ht,
    makeDate: pa,
    makeDateTime: en,
    validateNumber: ze,
    maxTimestamp: bn,
    minTimestamp: Fn,
    isBetweenDates: tn,
    isOverlappingDates: qn,
    daysBetween: an,
    weeksBetween: Hn,
    addToDate: Oe,
    compareTimestamps: mn,
    compareDate: gn,
    compareTime: kn,
    compareDateTime: wn,
    getWeekdayFormatter: nn,
    getWeekdayNames: Wn,
    getMonthFormatter: un,
    getMonthNames: An,
    convertToUnit: G,
    indexOf: On,
    default: tu,
  }),
  uu = zn(({ app: e }) => {
    e.use(au);
  });
export { uu as default };
