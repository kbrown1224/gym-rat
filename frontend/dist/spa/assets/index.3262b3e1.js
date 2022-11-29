const ac = (function () {
    const t = document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  Zi = {},
  lc = "/",
  Oe = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${lc}${r}`), r in Zi)) return;
            Zi[r] = !0;
            const o = r.endsWith(".css"),
              i = o ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${r}"]${i}`)) return;
            const s = document.createElement("link");
            if (
              ((s.rel = o ? "stylesheet" : ac),
              o || ((s.as = "script"), (s.crossOrigin = "")),
              (s.href = r),
              document.head.appendChild(s),
              o)
            )
              return new Promise((l, a) => {
                s.addEventListener("load", l),
                  s.addEventListener("error", () =>
                    a(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
function mi(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const uc =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  cc = mi(uc);
function Fa(e) {
  return !!e || e === "";
}
function pi(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Ee(r) ? hc(r) : pi(r);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else {
    if (Ee(e)) return e;
    if (_e(e)) return e;
  }
}
const fc = /;(?![^(]*\))/g,
  dc = /:(.+)/;
function hc(e) {
  const t = {};
  return (
    e.split(fc).forEach((n) => {
      if (n) {
        const r = n.split(dc);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }),
    t
  );
}
function gi(e) {
  let t = "";
  if (Ee(e)) t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const r = gi(e[n]);
      r && (t += r + " ");
    }
  else if (_e(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Gv = (e) =>
    Ee(e)
      ? e
      : e == null
      ? ""
      : ee(e) || (_e(e) && (e.toString === Ha || !se(e.toString)))
      ? JSON.stringify(e, Na, 2)
      : String(e),
  Na = (e, t) =>
    t && t.__v_isRef
      ? Na(e, t.value)
      : vn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : Da(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : _e(t) && !ee(t) && !za(t)
      ? String(t)
      : t,
  be = {},
  gn = [],
  ot = () => {},
  mc = () => !1,
  pc = /^on[^a-z]/,
  Ur = (e) => pc.test(e),
  vi = (e) => e.startsWith("onUpdate:"),
  Pe = Object.assign,
  bi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  gc = Object.prototype.hasOwnProperty,
  le = (e, t) => gc.call(e, t),
  ee = Array.isArray,
  vn = (e) => Kr(e) === "[object Map]",
  Da = (e) => Kr(e) === "[object Set]",
  se = (e) => typeof e == "function",
  Ee = (e) => typeof e == "string",
  yi = (e) => typeof e == "symbol",
  _e = (e) => e !== null && typeof e == "object",
  Va = (e) => _e(e) && se(e.then) && se(e.catch),
  Ha = Object.prototype.toString,
  Kr = (e) => Ha.call(e),
  vc = (e) => Kr(e).slice(8, -1),
  za = (e) => Kr(e) === "[object Object]",
  _i = (e) =>
    Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  wr = mi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Wr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  bc = /-(\w)/g,
  mt = Wr((e) => e.replace(bc, (t, n) => (n ? n.toUpperCase() : ""))),
  yc = /\B([A-Z])/g,
  Sn = Wr((e) => e.replace(yc, "-$1").toLowerCase()),
  Qr = Wr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  po = Wr((e) => (e ? `on${Qr(e)}` : "")),
  Un = (e, t) => !Object.is(e, t),
  jn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Ar = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ua = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Gi;
const _c = () =>
  Gi ||
  (Gi =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let ct;
class Ka {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ct),
      !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ct;
      try {
        return (ct = this), t();
      } finally {
        ct = n;
      }
    }
  }
  on() {
    ct = this;
  }
  off() {
    ct = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function Wa(e) {
  return new Ka(e);
}
function wc(e, t = ct) {
  t && t.active && t.effects.push(e);
}
const wi = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Qa = (e) => (e.w & Bt) > 0,
  Ja = (e) => (e.n & Bt) > 0,
  xc = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Bt;
  },
  Cc = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        Qa(o) && !Ja(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~Bt),
          (o.n &= ~Bt);
      }
      t.length = n;
    }
  },
  Do = new WeakMap();
let Ln = 0,
  Bt = 1;
const Vo = 30;
let tt;
const Xt = Symbol(""),
  Ho = Symbol("");
class xi {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      wc(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = tt,
      n = qt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = tt),
        (tt = this),
        (qt = !0),
        (Bt = 1 << ++Ln),
        Ln <= Vo ? xc(this) : es(this),
        this.fn()
      );
    } finally {
      Ln <= Vo && Cc(this),
        (Bt = 1 << --Ln),
        (tt = this.parent),
        (qt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    tt === this
      ? (this.deferStop = !0)
      : this.active &&
        (es(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function es(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let qt = !0;
const Xa = [];
function Rn() {
  Xa.push(qt), (qt = !1);
}
function Pn() {
  const e = Xa.pop();
  qt = e === void 0 ? !0 : e;
}
function He(e, t, n) {
  if (qt && tt) {
    let r = Do.get(e);
    r || Do.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = wi())), Ya(o);
  }
}
function Ya(e, t) {
  let n = !1;
  Ln <= Vo ? Ja(e) || ((e.n |= Bt), (n = !Qa(e))) : (n = !e.has(tt)),
    n && (e.add(tt), tt.deps.push(e));
}
function yt(e, t, n, r, o, i) {
  const s = Do.get(e);
  if (!s) return;
  let l = [];
  if (t === "clear") l = [...s.values()];
  else if (n === "length" && ee(e))
    s.forEach((a, c) => {
      (c === "length" || c >= r) && l.push(a);
    });
  else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case "add":
        ee(e)
          ? _i(n) && l.push(s.get("length"))
          : (l.push(s.get(Xt)), vn(e) && l.push(s.get(Ho)));
        break;
      case "delete":
        ee(e) || (l.push(s.get(Xt)), vn(e) && l.push(s.get(Ho)));
        break;
      case "set":
        vn(e) && l.push(s.get(Xt));
        break;
    }
  if (l.length === 1) l[0] && zo(l[0]);
  else {
    const a = [];
    for (const c of l) c && a.push(...c);
    zo(wi(a));
  }
}
function zo(e, t) {
  const n = ee(e) ? e : [...e];
  for (const r of n) r.computed && ts(r);
  for (const r of n) r.computed || ts(r);
}
function ts(e, t) {
  (e !== tt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const kc = mi("__proto__,__v_isRef,__isVue"),
  Za = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(yi)
  ),
  Ec = Ci(),
  Sc = Ci(!1, !0),
  Rc = Ci(!0),
  ns = Pc();
function Pc() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = re(this);
        for (let i = 0, s = this.length; i < s; i++) He(r, "get", i + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(re)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Rn();
        const r = re(this)[t].apply(this, n);
        return Pn(), r;
      };
    }),
    e
  );
}
function Ci(e = !1, t = !1) {
  return function (r, o, i) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && i === (e ? (t ? zc : rl) : t ? nl : tl).get(r))
      return r;
    const s = ee(r);
    if (!e && s && le(ns, o)) return Reflect.get(ns, o, i);
    const l = Reflect.get(r, o, i);
    return (yi(o) ? Za.has(o) : kc(o)) || (e || He(r, "get", o), t)
      ? l
      : xe(l)
      ? s && _i(o)
        ? l
        : l.value
      : _e(l)
      ? e
        ? ol(l)
        : jt(l)
      : l;
  };
}
const Tc = Ga(),
  Oc = Ga(!0);
function Ga(e = !1) {
  return function (n, r, o, i) {
    let s = n[r];
    if (yn(s) && xe(s) && !xe(o)) return !1;
    if (
      !e &&
      (!$r(o) && !yn(o) && ((s = re(s)), (o = re(o))),
      !ee(n) && xe(s) && !xe(o))
    )
      return (s.value = o), !0;
    const l = ee(n) && _i(r) ? Number(r) < n.length : le(n, r),
      a = Reflect.set(n, r, o, i);
    return (
      n === re(i) && (l ? Un(o, s) && yt(n, "set", r, o) : yt(n, "add", r, o)),
      a
    );
  };
}
function Ac(e, t) {
  const n = le(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && yt(e, "delete", t, void 0), r;
}
function $c(e, t) {
  const n = Reflect.has(e, t);
  return (!yi(t) || !Za.has(t)) && He(e, "has", t), n;
}
function qc(e) {
  return He(e, "iterate", ee(e) ? "length" : Xt), Reflect.ownKeys(e);
}
const el = { get: Ec, set: Tc, deleteProperty: Ac, has: $c, ownKeys: qc },
  Mc = {
    get: Rc,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Lc = Pe({}, el, { get: Sc, set: Oc }),
  ki = (e) => e,
  Jr = (e) => Reflect.getPrototypeOf(e);
function ar(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = re(e),
    i = re(t);
  n || (t !== i && He(o, "get", t), He(o, "get", i));
  const { has: s } = Jr(o),
    l = r ? ki : n ? Ri : Kn;
  if (s.call(o, t)) return l(e.get(t));
  if (s.call(o, i)) return l(e.get(i));
  e !== o && e.get(t);
}
function lr(e, t = !1) {
  const n = this.__v_raw,
    r = re(n),
    o = re(e);
  return (
    t || (e !== o && He(r, "has", e), He(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function ur(e, t = !1) {
  return (
    (e = e.__v_raw), !t && He(re(e), "iterate", Xt), Reflect.get(e, "size", e)
  );
}
function rs(e) {
  e = re(e);
  const t = re(this);
  return Jr(t).has.call(t, e) || (t.add(e), yt(t, "add", e, e)), this;
}
function os(e, t) {
  t = re(t);
  const n = re(this),
    { has: r, get: o } = Jr(n);
  let i = r.call(n, e);
  i || ((e = re(e)), (i = r.call(n, e)));
  const s = o.call(n, e);
  return (
    n.set(e, t), i ? Un(t, s) && yt(n, "set", e, t) : yt(n, "add", e, t), this
  );
}
function is(e) {
  const t = re(this),
    { has: n, get: r } = Jr(t);
  let o = n.call(t, e);
  o || ((e = re(e)), (o = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return o && yt(t, "delete", e, void 0), i;
}
function ss() {
  const e = re(this),
    t = e.size !== 0,
    n = e.clear();
  return t && yt(e, "clear", void 0, void 0), n;
}
function cr(e, t) {
  return function (r, o) {
    const i = this,
      s = i.__v_raw,
      l = re(s),
      a = t ? ki : e ? Ri : Kn;
    return (
      !e && He(l, "iterate", Xt), s.forEach((c, u) => r.call(o, a(c), a(u), i))
    );
  };
}
function fr(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      i = re(o),
      s = vn(i),
      l = e === "entries" || (e === Symbol.iterator && s),
      a = e === "keys" && s,
      c = o[e](...r),
      u = n ? ki : t ? Ri : Kn;
    return (
      !t && He(i, "iterate", a ? Ho : Xt),
      {
        next() {
          const { value: d, done: f } = c.next();
          return f
            ? { value: d, done: f }
            : { value: l ? [u(d[0]), u(d[1])] : u(d), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function kt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Bc() {
  const e = {
      get(i) {
        return ar(this, i);
      },
      get size() {
        return ur(this);
      },
      has: lr,
      add: rs,
      set: os,
      delete: is,
      clear: ss,
      forEach: cr(!1, !1),
    },
    t = {
      get(i) {
        return ar(this, i, !1, !0);
      },
      get size() {
        return ur(this);
      },
      has: lr,
      add: rs,
      set: os,
      delete: is,
      clear: ss,
      forEach: cr(!1, !0),
    },
    n = {
      get(i) {
        return ar(this, i, !0);
      },
      get size() {
        return ur(this, !0);
      },
      has(i) {
        return lr.call(this, i, !0);
      },
      add: kt("add"),
      set: kt("set"),
      delete: kt("delete"),
      clear: kt("clear"),
      forEach: cr(!0, !1),
    },
    r = {
      get(i) {
        return ar(this, i, !0, !0);
      },
      get size() {
        return ur(this, !0);
      },
      has(i) {
        return lr.call(this, i, !0);
      },
      add: kt("add"),
      set: kt("set"),
      delete: kt("delete"),
      clear: kt("clear"),
      forEach: cr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = fr(i, !1, !1)),
        (n[i] = fr(i, !0, !1)),
        (t[i] = fr(i, !1, !0)),
        (r[i] = fr(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Ic, jc, Fc, Nc] = Bc();
function Ei(e, t) {
  const n = t ? (e ? Nc : Fc) : e ? jc : Ic;
  return (r, o, i) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(le(n, o) && o in r ? n : r, o, i);
}
const Dc = { get: Ei(!1, !1) },
  Vc = { get: Ei(!1, !0) },
  Hc = { get: Ei(!0, !1) },
  tl = new WeakMap(),
  nl = new WeakMap(),
  rl = new WeakMap(),
  zc = new WeakMap();
function Uc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Kc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Uc(vc(e));
}
function jt(e) {
  return yn(e) ? e : Si(e, !1, el, Dc, tl);
}
function Wc(e) {
  return Si(e, !1, Lc, Vc, nl);
}
function ol(e) {
  return Si(e, !0, Mc, Hc, rl);
}
function Si(e, t, n, r, o) {
  if (!_e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = o.get(e);
  if (i) return i;
  const s = Kc(e);
  if (s === 0) return e;
  const l = new Proxy(e, s === 2 ? r : n);
  return o.set(e, l), l;
}
function Mt(e) {
  return yn(e) ? Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yn(e) {
  return !!(e && e.__v_isReadonly);
}
function $r(e) {
  return !!(e && e.__v_isShallow);
}
function il(e) {
  return Mt(e) || yn(e);
}
function re(e) {
  const t = e && e.__v_raw;
  return t ? re(t) : e;
}
function pt(e) {
  return Ar(e, "__v_skip", !0), e;
}
const Kn = (e) => (_e(e) ? jt(e) : e),
  Ri = (e) => (_e(e) ? ol(e) : e);
function sl(e) {
  qt && tt && ((e = re(e)), Ya(e.dep || (e.dep = wi())));
}
function al(e, t) {
  (e = re(e)), e.dep && zo(e.dep);
}
function xe(e) {
  return !!(e && e.__v_isRef === !0);
}
function ce(e) {
  return ll(e, !1);
}
function Qc(e) {
  return ll(e, !0);
}
function ll(e, t) {
  return xe(e) ? e : new Jc(e, t);
}
class Jc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : re(t)),
      (this._value = n ? t : Kn(t));
  }
  get value() {
    return sl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || $r(t) || yn(t);
    (t = n ? t : re(t)),
      Un(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Kn(t)), al(this));
  }
}
function Yt(e) {
  return xe(e) ? e.value : e;
}
const Xc = {
  get: (e, t, n) => Yt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return xe(o) && !xe(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function ul(e) {
  return Mt(e) ? e : new Proxy(e, Xc);
}
function Yc(e) {
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Gc(e, n);
  return t;
}
class Zc {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Gc(e, t, n) {
  const r = e[t];
  return xe(r) ? r : new Zc(e, t, n);
}
var cl;
class ef {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[cl] = !1),
      (this._dirty = !0),
      (this.effect = new xi(t, () => {
        this._dirty || ((this._dirty = !0), al(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = re(this);
    return (
      sl(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
cl = "__v_isReadonly";
function tf(e, t, n = !1) {
  let r, o;
  const i = se(e);
  return (
    i ? ((r = e), (o = ot)) : ((r = e.get), (o = e.set)),
    new ef(r, o, i || !o, n)
  );
}
function Lt(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    Xr(i, t, n);
  }
  return o;
}
function Xe(e, t, n, r) {
  if (se(e)) {
    const i = Lt(e, t, n, r);
    return (
      i &&
        Va(i) &&
        i.catch((s) => {
          Xr(s, t, n);
        }),
      i
    );
  }
  const o = [];
  for (let i = 0; i < e.length; i++) o.push(Xe(e[i], t, n, r));
  return o;
}
function Xr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy,
      l = n;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, s, l) === !1) return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Lt(a, null, 10, [e, s, l]);
      return;
    }
  }
  nf(e, n, o, r);
}
function nf(e, t, n, r = !0) {
  console.error(e);
}
let Wn = !1,
  Uo = !1;
const Le = [];
let dt = 0;
const bn = [];
let bt = null,
  zt = 0;
const fl = Promise.resolve();
let Pi = null;
function Be(e) {
  const t = Pi || fl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rf(e) {
  let t = dt + 1,
    n = Le.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Qn(Le[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ti(e) {
  (!Le.length || !Le.includes(e, Wn && e.allowRecurse ? dt + 1 : dt)) &&
    (e.id == null ? Le.push(e) : Le.splice(rf(e.id), 0, e), dl());
}
function dl() {
  !Wn && !Uo && ((Uo = !0), (Pi = fl.then(ml)));
}
function of(e) {
  const t = Le.indexOf(e);
  t > dt && Le.splice(t, 1);
}
function sf(e) {
  ee(e)
    ? bn.push(...e)
    : (!bt || !bt.includes(e, e.allowRecurse ? zt + 1 : zt)) && bn.push(e),
    dl();
}
function as(e, t = Wn ? dt + 1 : 0) {
  for (; t < Le.length; t++) {
    const n = Le[t];
    n && n.pre && (Le.splice(t, 1), t--, n());
  }
}
function hl(e) {
  if (bn.length) {
    const t = [...new Set(bn)];
    if (((bn.length = 0), bt)) {
      bt.push(...t);
      return;
    }
    for (bt = t, bt.sort((n, r) => Qn(n) - Qn(r)), zt = 0; zt < bt.length; zt++)
      bt[zt]();
    (bt = null), (zt = 0);
  }
}
const Qn = (e) => (e.id == null ? 1 / 0 : e.id),
  af = (e, t) => {
    const n = Qn(e) - Qn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ml(e) {
  (Uo = !1), (Wn = !0), Le.sort(af);
  const t = ot;
  try {
    for (dt = 0; dt < Le.length; dt++) {
      const n = Le[dt];
      n && n.active !== !1 && Lt(n, null, 14);
    }
  } finally {
    (dt = 0),
      (Le.length = 0),
      hl(),
      (Wn = !1),
      (Pi = null),
      (Le.length || bn.length) && ml();
  }
}
function lf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || be;
  let o = n;
  const i = t.startsWith("update:"),
    s = i && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`,
      { number: d, trim: f } = r[u] || be;
    f && (o = n.map((m) => m.trim())), d && (o = n.map(Ua));
  }
  let l,
    a = r[(l = po(t))] || r[(l = po(mt(t)))];
  !a && i && (a = r[(l = po(Sn(t)))]), a && Xe(a, e, 6, o);
  const c = r[l + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Xe(c, e, 6, o);
  }
}
function pl(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let s = {},
    l = !1;
  if (!se(e)) {
    const a = (c) => {
      const u = pl(c, t, !0);
      u && ((l = !0), Pe(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (_e(e) && r.set(e, null), null)
    : (ee(i) ? i.forEach((a) => (s[a] = null)) : Pe(s, i),
      _e(e) && r.set(e, s),
      s);
}
function Yr(e, t) {
  return !e || !Ur(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Sn(t)) || le(e, t));
}
let Je = null,
  Zr = null;
function qr(e) {
  const t = Je;
  return (Je = e), (Zr = (e && e.type.__scopeId) || null), t;
}
function eb(e) {
  Zr = e;
}
function tb() {
  Zr = null;
}
function uf(e, t = Je, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && ys(-1);
    const i = qr(t);
    let s;
    try {
      s = e(...o);
    } finally {
      qr(i), r._d && ys(1);
    }
    return s;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function go(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: d,
    data: f,
    setupState: m,
    ctx: v,
    inheritAttrs: S,
  } = e;
  let x, R;
  const g = qr(e);
  try {
    if (n.shapeFlag & 4) {
      const O = o || r;
      (x = ft(u.call(O, O, d, i, m, f, v))), (R = a);
    } else {
      const O = t;
      (x = ft(
        O.length > 1 ? O(i, { attrs: a, slots: l, emit: c }) : O(i, null)
      )),
        (R = t.props ? a : cf(a));
    }
  } catch (O) {
    (Dn.length = 0), Xr(O, e, 1), (x = Ne(it));
  }
  let _ = x;
  if (R && S !== !1) {
    const O = Object.keys(R),
      { shapeFlag: B } = _;
    O.length && B & 7 && (s && O.some(vi) && (R = ff(R, s)), (_ = _t(_, R)));
  }
  return (
    n.dirs && ((_ = _t(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (x = _),
    qr(g),
    x
  );
}
const cf = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ur(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  ff = (e, t) => {
    const n = {};
    for (const r in e) (!vi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function df(e, t, n) {
  const { props: r, children: o, component: i } = e,
    { props: s, children: l, patchFlag: a } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? ls(r, s, c) : !!s;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (s[f] !== r[f] && !Yr(c, f)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === s
      ? !1
      : r
      ? s
        ? ls(r, s, c)
        : !0
      : !!s;
  return !1;
}
function ls(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Yr(n, i)) return !0;
  }
  return !1;
}
function hf({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const gl = (e) => e.__isSuspense;
function mf(e, t) {
  t && t.pendingBranch
    ? ee(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : sf(e);
}
function xr(e, t) {
  if (Re) {
    let n = Re.provides;
    const r = Re.parent && Re.parent.provides;
    r === n && (n = Re.provides = Object.create(r)), (n[e] = t);
  }
}
function Ve(e, t, n = !1) {
  const r = Re || Je;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && se(t) ? t.call(r.proxy) : t;
  }
}
const us = {};
function pe(e, t, n) {
  return vl(e, t, n);
}
function vl(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = be
) {
  const l = Re;
  let a,
    c = !1,
    u = !1;
  if (
    (xe(e)
      ? ((a = () => e.value), (c = $r(e)))
      : Mt(e)
      ? ((a = () => e), (r = !0))
      : ee(e)
      ? ((u = !0),
        (c = e.some((R) => Mt(R) || $r(R))),
        (a = () =>
          e.map((R) => {
            if (xe(R)) return R.value;
            if (Mt(R)) return Wt(R);
            if (se(R)) return Lt(R, l, 2);
          })))
      : se(e)
      ? t
        ? (a = () => Lt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return d && d(), Xe(e, l, 3, [f]);
          })
      : (a = ot),
    t && r)
  ) {
    const R = a;
    a = () => Wt(R());
  }
  let d,
    f = (R) => {
      d = x.onStop = () => {
        Lt(R, l, 4);
      };
    };
  if (Yn)
    return (f = ot), t ? n && Xe(t, l, 3, [a(), u ? [] : void 0, f]) : a(), ot;
  let m = u ? [] : us;
  const v = () => {
    if (!!x.active)
      if (t) {
        const R = x.run();
        (r || c || (u ? R.some((g, _) => Un(g, m[_])) : Un(R, m))) &&
          (d && d(), Xe(t, l, 3, [R, m === us ? void 0 : m, f]), (m = R));
      } else x.run();
  };
  v.allowRecurse = !!t;
  let S;
  o === "sync"
    ? (S = v)
    : o === "post"
    ? (S = () => Ae(v, l && l.suspense))
    : ((v.pre = !0), l && (v.id = l.uid), (S = () => Ti(v)));
  const x = new xi(a, S);
  return (
    t
      ? n
        ? v()
        : (m = x.run())
      : o === "post"
      ? Ae(x.run.bind(x), l && l.suspense)
      : x.run(),
    () => {
      x.stop(), l && l.scope && bi(l.scope.effects, x);
    }
  );
}
function pf(e, t, n) {
  const r = this.proxy,
    o = Ee(e) ? (e.includes(".") ? bl(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  se(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = Re;
  wn(this);
  const l = vl(o, i.bind(r), n);
  return s ? wn(s) : Zt(), l;
}
function bl(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function Wt(e, t) {
  if (!_e(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), xe(e))) Wt(e.value, t);
  else if (ee(e)) for (let n = 0; n < e.length; n++) Wt(e[n], t);
  else if (Da(e) || vn(e))
    e.forEach((n) => {
      Wt(n, t);
    });
  else if (za(e)) for (const n in e) Wt(e[n], t);
  return e;
}
function yl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ft(() => {
      e.isMounted = !0;
    }),
    Ye(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ue = [Function, Array],
  gf = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ue,
      onEnter: Ue,
      onAfterEnter: Ue,
      onEnterCancelled: Ue,
      onBeforeLeave: Ue,
      onLeave: Ue,
      onAfterLeave: Ue,
      onLeaveCancelled: Ue,
      onBeforeAppear: Ue,
      onAppear: Ue,
      onAfterAppear: Ue,
      onAppearCancelled: Ue,
    },
    setup(e, { slots: t }) {
      const n = we(),
        r = yl();
      let o;
      return () => {
        const i = t.default && Oi(t.default(), !0);
        if (!i || !i.length) return;
        let s = i[0];
        if (i.length > 1) {
          for (const S of i)
            if (S.type !== it) {
              s = S;
              break;
            }
        }
        const l = re(e),
          { mode: a } = l;
        if (r.isLeaving) return vo(s);
        const c = cs(s);
        if (!c) return vo(s);
        const u = Jn(c, l, r, n);
        _n(c, u);
        const d = n.subTree,
          f = d && cs(d);
        let m = !1;
        const { getTransitionKey: v } = c.type;
        if (v) {
          const S = v();
          o === void 0 ? (o = S) : S !== o && ((o = S), (m = !0));
        }
        if (f && f.type !== it && (!Ut(c, f) || m)) {
          const S = Jn(f, l, r, n);
          if ((_n(f, S), a === "out-in"))
            return (
              (r.isLeaving = !0),
              (S.afterLeave = () => {
                (r.isLeaving = !1), n.update();
              }),
              vo(s)
            );
          a === "in-out" &&
            c.type !== it &&
            (S.delayLeave = (x, R, g) => {
              const _ = wl(r, f);
              (_[String(f.key)] = f),
                (x._leaveCb = () => {
                  R(), (x._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = g);
            });
        }
        return s;
      };
    },
  },
  _l = gf;
function wl(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Jn(e, t, n, r) {
  const {
      appear: o,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: m,
      onLeaveCancelled: v,
      onBeforeAppear: S,
      onAppear: x,
      onAfterAppear: R,
      onAppearCancelled: g,
    } = t,
    _ = String(e.key),
    O = wl(n, e),
    B = (b, q) => {
      b && Xe(b, r, 9, q);
    },
    y = (b, q) => {
      const M = q[1];
      B(b, q),
        ee(b) ? b.every((I) => I.length <= 1) && M() : b.length <= 1 && M();
    },
    w = {
      mode: i,
      persisted: s,
      beforeEnter(b) {
        let q = l;
        if (!n.isMounted)
          if (o) q = S || l;
          else return;
        b._leaveCb && b._leaveCb(!0);
        const M = O[_];
        M && Ut(e, M) && M.el._leaveCb && M.el._leaveCb(), B(q, [b]);
      },
      enter(b) {
        let q = a,
          M = c,
          I = u;
        if (!n.isMounted)
          if (o) (q = x || a), (M = R || c), (I = g || u);
          else return;
        let E = !1;
        const D = (b._enterCb = (P) => {
          E ||
            ((E = !0),
            P ? B(I, [b]) : B(M, [b]),
            w.delayedLeave && w.delayedLeave(),
            (b._enterCb = void 0));
        });
        q ? y(q, [b, D]) : D();
      },
      leave(b, q) {
        const M = String(e.key);
        if ((b._enterCb && b._enterCb(!0), n.isUnmounting)) return q();
        B(d, [b]);
        let I = !1;
        const E = (b._leaveCb = (D) => {
          I ||
            ((I = !0),
            q(),
            D ? B(v, [b]) : B(m, [b]),
            (b._leaveCb = void 0),
            O[M] === e && delete O[M]);
        });
        (O[M] = e), f ? y(f, [b, E]) : E();
      },
      clone(b) {
        return Jn(b, t, n, r);
      },
    };
  return w;
}
function vo(e) {
  if (eo(e)) return (e = _t(e)), (e.children = null), e;
}
function cs(e) {
  return eo(e) ? (e.children ? e.children[0] : void 0) : e;
}
function _n(e, t) {
  e.shapeFlag & 6 && e.component
    ? _n(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Oi(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === et
      ? (s.patchFlag & 128 && o++, (r = r.concat(Oi(s.children, t, l))))
      : (t || s.type !== it) && r.push(l != null ? _t(s, { key: l }) : s);
  }
  if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function Gr(e) {
  return se(e) ? { setup: e, name: e.name } : e;
}
const Fn = (e) => !!e.type.__asyncLoader,
  eo = (e) => e.type.__isKeepAlive,
  vf = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = we(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const g = t.default && t.default();
          return g && g.length === 1 ? g[0] : g;
        };
      const o = new Map(),
        i = new Set();
      let s = null;
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: c,
            um: u,
            o: { createElement: d },
          },
        } = r,
        f = d("div");
      (r.activate = (g, _, O, B, y) => {
        const w = g.component;
        c(g, _, O, 0, l),
          a(w.vnode, g, _, O, w, l, B, g.slotScopeIds, y),
          Ae(() => {
            (w.isDeactivated = !1), w.a && jn(w.a);
            const b = g.props && g.props.onVnodeMounted;
            b && We(b, w.parent, g);
          }, l);
      }),
        (r.deactivate = (g) => {
          const _ = g.component;
          c(g, f, null, 1, l),
            Ae(() => {
              _.da && jn(_.da);
              const O = g.props && g.props.onVnodeUnmounted;
              O && We(O, _.parent, g), (_.isDeactivated = !0);
            }, l);
        });
      function m(g) {
        bo(g), u(g, n, l, !0);
      }
      function v(g) {
        o.forEach((_, O) => {
          const B = Zo(_.type);
          B && (!g || !g(B)) && S(O);
        });
      }
      function S(g) {
        const _ = o.get(g);
        !s || _.type !== s.type ? m(_) : s && bo(s), o.delete(g), i.delete(g);
      }
      pe(
        () => [e.include, e.exclude],
        ([g, _]) => {
          g && v((O) => Bn(g, O)), _ && v((O) => !Bn(_, O));
        },
        { flush: "post", deep: !0 }
      );
      let x = null;
      const R = () => {
        x != null && o.set(x, yo(n.subTree));
      };
      return (
        Ft(R),
        Ai(R),
        Ye(() => {
          o.forEach((g) => {
            const { subTree: _, suspense: O } = n,
              B = yo(_);
            if (g.type === B.type) {
              bo(B);
              const y = B.component.da;
              y && Ae(y, O);
              return;
            }
            m(g);
          });
        }),
        () => {
          if (((x = null), !t.default)) return null;
          const g = t.default(),
            _ = g[0];
          if (g.length > 1) return (s = null), g;
          if (!Br(_) || (!(_.shapeFlag & 4) && !(_.shapeFlag & 128)))
            return (s = null), _;
          let O = yo(_);
          const B = O.type,
            y = Zo(Fn(O) ? O.type.__asyncResolved || {} : B),
            { include: w, exclude: b, max: q } = e;
          if ((w && (!y || !Bn(w, y))) || (b && y && Bn(b, y)))
            return (s = O), _;
          const M = O.key == null ? B : O.key,
            I = o.get(M);
          return (
            O.el && ((O = _t(O)), _.shapeFlag & 128 && (_.ssContent = O)),
            (x = M),
            I
              ? ((O.el = I.el),
                (O.component = I.component),
                O.transition && _n(O, O.transition),
                (O.shapeFlag |= 512),
                i.delete(M),
                i.add(M))
              : (i.add(M),
                q && i.size > parseInt(q, 10) && S(i.values().next().value)),
            (O.shapeFlag |= 256),
            (s = O),
            gl(_.type) ? _ : O
          );
        }
      );
    },
  },
  nb = vf;
function Bn(e, t) {
  return ee(e)
    ? e.some((n) => Bn(n, t))
    : Ee(e)
    ? e.split(",").includes(t)
    : e.test
    ? e.test(t)
    : !1;
}
function xl(e, t) {
  Cl(e, "a", t);
}
function to(e, t) {
  Cl(e, "da", t);
}
function Cl(e, t, n = Re) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((no(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      eo(o.parent.vnode) && bf(r, t, n, o), (o = o.parent);
  }
}
function bf(e, t, n, r) {
  const o = no(t, e, r, !0);
  ro(() => {
    bi(r[t], o);
  }, n);
}
function bo(e) {
  let t = e.shapeFlag;
  t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t);
}
function yo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function no(e, t, n = Re, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return;
          Rn(), wn(n);
          const l = Xe(t, n, e, s);
          return Zt(), Pn(), l;
        });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Ct =
    (e) =>
    (t, n = Re) =>
      (!Yn || e === "sp") && no(e, (...r) => t(...r), n),
  yf = Ct("bm"),
  Ft = Ct("m"),
  kl = Ct("bu"),
  Ai = Ct("u"),
  Ye = Ct("bum"),
  ro = Ct("um"),
  _f = Ct("sp"),
  wf = Ct("rtg"),
  xf = Ct("rtc");
function Cf(e, t = Re) {
  no("ec", e, t);
}
function El(e, t) {
  const n = Je;
  if (n === null) return e;
  const r = io(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, l, a, c = be] = t[i];
    se(s) && (s = { mounted: s, updated: s }),
      s.deep && Wt(l),
      o.push({
        dir: s,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      });
  }
  return e;
}
function Nt(e, t, n, r) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[r];
    a && (Rn(), Xe(a, n, 8, [e.el, l, e, t]), Pn());
  }
}
const Sl = "components";
function kf(e, t) {
  return Sf(Sl, e, !0, t) || e;
}
const Ef = Symbol();
function Sf(e, t, n = !0, r = !1) {
  const o = Je || Re;
  if (o) {
    const i = o.type;
    if (e === Sl) {
      const l = Zo(i, !1);
      if (l && (l === t || l === mt(t) || l === Qr(mt(t)))) return i;
    }
    const s = fs(o[e] || i[e], t) || fs(o.appContext[e], t);
    return !s && r ? i : s;
  }
}
function fs(e, t) {
  return e && (e[t] || e[mt(t)] || e[Qr(mt(t))]);
}
function rb(e, t, n, r) {
  let o;
  const i = n && n[r];
  if (ee(e) || Ee(e)) {
    o = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      o[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let s = 0; s < e; s++) o[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (_e(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (s, l) => t(s, l, void 0, i && i[l]));
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let l = 0, a = s.length; l < a; l++) {
        const c = s[l];
        o[l] = t(e[c], c, l, i && i[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
const Ko = (e) => (e ? (Fl(e) ? io(e) || e.proxy : Ko(e.parent)) : null),
  Mr = Pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ko(e.parent),
    $root: (e) => Ko(e.root),
    $emit: (e) => e.emit,
    $options: (e) => $i(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ti(e.update)),
    $nextTick: (e) => e.n || (e.n = Be.bind(e.proxy)),
    $watch: (e) => pf.bind(e),
  }),
  Rf = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== "$") {
        const m = s[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (r !== be && le(r, t)) return (s[t] = 1), r[t];
          if (o !== be && le(o, t)) return (s[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && le(c, t)) return (s[t] = 3), i[t];
          if (n !== be && le(n, t)) return (s[t] = 4), n[t];
          Wo && (s[t] = 0);
        }
      }
      const u = Mr[t];
      let d, f;
      if (u) return t === "$attrs" && He(e, "get", t), u(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== be && le(n, t)) return (s[t] = 4), n[t];
      if (((f = a.config.globalProperties), le(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      return o !== be && le(o, t)
        ? ((o[t] = n), !0)
        : r !== be && le(r, t)
        ? ((r[t] = n), !0)
        : le(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: i,
        },
      },
      s
    ) {
      let l;
      return (
        !!n[s] ||
        (e !== be && le(e, s)) ||
        (t !== be && le(t, s)) ||
        ((l = i[0]) && le(l, s)) ||
        le(r, s) ||
        le(Mr, s) ||
        le(o.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : le(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Wo = !0;
function Pf(e) {
  const t = $i(e),
    n = e.proxy,
    r = e.ctx;
  (Wo = !1), t.beforeCreate && ds(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: m,
    updated: v,
    activated: S,
    deactivated: x,
    beforeDestroy: R,
    beforeUnmount: g,
    destroyed: _,
    unmounted: O,
    render: B,
    renderTracked: y,
    renderTriggered: w,
    errorCaptured: b,
    serverPrefetch: q,
    expose: M,
    inheritAttrs: I,
    components: E,
    directives: D,
    filters: P,
  } = t;
  if ((c && Tf(c, r, null, e.appContext.config.unwrapInjectedRef), s))
    for (const $ in s) {
      const W = s[$];
      se(W) && (r[$] = W.bind(n));
    }
  if (o) {
    const $ = o.call(n, n);
    _e($) && (e.data = jt($));
  }
  if (((Wo = !0), i))
    for (const $ in i) {
      const W = i[$],
        fe = se(W) ? W.bind(n, n) : se(W.get) ? W.get.bind(n, n) : ot,
        V = !se(W) && se(W.set) ? W.set.bind(n) : ot,
        ue = C({ get: fe, set: V });
      Object.defineProperty(r, $, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (he) => (ue.value = he),
      });
    }
  if (l) for (const $ in l) Rl(l[$], r, n, $);
  if (a) {
    const $ = se(a) ? a.call(n) : a;
    Reflect.ownKeys($).forEach((W) => {
      xr(W, $[W]);
    });
  }
  u && ds(u, e, "c");
  function oe($, W) {
    ee(W) ? W.forEach((fe) => $(fe.bind(n))) : W && $(W.bind(n));
  }
  if (
    (oe(yf, d),
    oe(Ft, f),
    oe(kl, m),
    oe(Ai, v),
    oe(xl, S),
    oe(to, x),
    oe(Cf, b),
    oe(xf, y),
    oe(wf, w),
    oe(Ye, g),
    oe(ro, O),
    oe(_f, q),
    ee(M))
  )
    if (M.length) {
      const $ = e.exposed || (e.exposed = {});
      M.forEach((W) => {
        Object.defineProperty($, W, {
          get: () => n[W],
          set: (fe) => (n[W] = fe),
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === ot && (e.render = B),
    I != null && (e.inheritAttrs = I),
    E && (e.components = E),
    D && (e.directives = D);
}
function Tf(e, t, n = ot, r = !1) {
  ee(e) && (e = Qo(e));
  for (const o in e) {
    const i = e[o];
    let s;
    _e(i)
      ? "default" in i
        ? (s = Ve(i.from || o, i.default, !0))
        : (s = Ve(i.from || o))
      : (s = Ve(i)),
      xe(s) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (l) => (s.value = l),
          })
        : (t[o] = s);
  }
}
function ds(e, t, n) {
  Xe(ee(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Rl(e, t, n, r) {
  const o = r.includes(".") ? bl(n, r) : () => n[r];
  if (Ee(e)) {
    const i = t[e];
    se(i) && pe(o, i);
  } else if (se(e)) pe(o, e.bind(n));
  else if (_e(e))
    if (ee(e)) e.forEach((i) => Rl(i, t, n, r));
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(i) && pe(o, i, e);
    }
}
function $i(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !n && !r
      ? (a = t)
      : ((a = {}), o.length && o.forEach((c) => Lr(a, c, s, !0)), Lr(a, t, s)),
    _e(t) && i.set(t, a),
    a
  );
}
function Lr(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Lr(e, i, n, !0), o && o.forEach((s) => Lr(e, s, n, !0));
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = Of[s] || (n && n[s]);
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Of = {
  data: hs,
  props: Ht,
  emits: Ht,
  methods: Ht,
  computed: Ht,
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  components: Ht,
  directives: Ht,
  watch: $f,
  provide: hs,
  inject: Af,
};
function hs(e, t) {
  return t
    ? e
      ? function () {
          return Pe(
            se(e) ? e.call(this, this) : e,
            se(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Af(e, t) {
  return Ht(Qo(e), Qo(t));
}
function Qo(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? Pe(Pe(Object.create(null), e), t) : t;
}
function $f(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(Object.create(null), e);
  for (const r in t) n[r] = je(e[r], t[r]);
  return n;
}
function qf(e, t, n, r = !1) {
  const o = {},
    i = {};
  Ar(i, oo, 1), (e.propsDefaults = Object.create(null)), Pl(e, t, o, i);
  for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
  n ? (e.props = r ? o : Wc(o)) : e.type.props ? (e.props = o) : (e.props = i),
    (e.attrs = i);
}
function Mf(e, t, n, r) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    l = re(o),
    [a] = e.propsOptions;
  let c = !1;
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Yr(e.emitsOptions, f)) continue;
        const m = t[f];
        if (a)
          if (le(i, f)) m !== i[f] && ((i[f] = m), (c = !0));
          else {
            const v = mt(f);
            o[v] = Jo(a, l, v, m, e, !1);
          }
        else m !== i[f] && ((i[f] = m), (c = !0));
      }
    }
  } else {
    Pl(e, t, o, i) && (c = !0);
    let u;
    for (const d in l)
      (!t || (!le(t, d) && ((u = Sn(d)) === d || !le(t, u)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (o[d] = Jo(a, l, d, void 0, e, !0))
          : delete o[d]);
    if (i !== l)
      for (const d in i) (!t || (!le(t, d) && !0)) && (delete i[d], (c = !0));
  }
  c && yt(e, "set", "$attrs");
}
function Pl(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let s = !1,
    l;
  if (t)
    for (let a in t) {
      if (wr(a)) continue;
      const c = t[a];
      let u;
      o && le(o, (u = mt(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : Yr(e.emitsOptions, a) ||
          ((!(a in r) || c !== r[a]) && ((r[a] = c), (s = !0)));
    }
  if (i) {
    const a = re(n),
      c = l || be;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Jo(o, a, d, c[d], e, !le(c, d));
    }
  }
  return s;
}
function Jo(e, t, n, r, o, i) {
  const s = e[n];
  if (s != null) {
    const l = le(s, "default");
    if (l && r === void 0) {
      const a = s.default;
      if (s.type !== Function && se(a)) {
        const { propsDefaults: c } = o;
        n in c ? (r = c[n]) : (wn(o), (r = c[n] = a.call(null, t)), Zt());
      } else r = a;
    }
    s[0] &&
      (i && !l ? (r = !1) : s[1] && (r === "" || r === Sn(n)) && (r = !0));
  }
  return r;
}
function Tl(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const i = e.props,
    s = {},
    l = [];
  let a = !1;
  if (!se(e)) {
    const u = (d) => {
      a = !0;
      const [f, m] = Tl(d, t, !0);
      Pe(s, f), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a) return _e(e) && r.set(e, gn), gn;
  if (ee(i))
    for (let u = 0; u < i.length; u++) {
      const d = mt(i[u]);
      ms(d) && (s[d] = be);
    }
  else if (i)
    for (const u in i) {
      const d = mt(u);
      if (ms(d)) {
        const f = i[u],
          m = (s[d] = ee(f) || se(f) ? { type: f } : f);
        if (m) {
          const v = vs(Boolean, m.type),
            S = vs(String, m.type);
          (m[0] = v > -1),
            (m[1] = S < 0 || v < S),
            (v > -1 || le(m, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return _e(e) && r.set(e, c), c;
}
function ms(e) {
  return e[0] !== "$";
}
function ps(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function gs(e, t) {
  return ps(e) === ps(t);
}
function vs(e, t) {
  return ee(t) ? t.findIndex((n) => gs(n, e)) : se(t) && gs(t, e) ? 0 : -1;
}
const Ol = (e) => e[0] === "_" || e === "$stable",
  qi = (e) => (ee(e) ? e.map(ft) : [ft(e)]),
  Lf = (e, t, n) => {
    if (t._n) return t;
    const r = uf((...o) => qi(t(...o)), n);
    return (r._c = !1), r;
  },
  Al = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Ol(o)) continue;
      const i = e[o];
      if (se(i)) t[o] = Lf(o, i, r);
      else if (i != null) {
        const s = qi(i);
        t[o] = () => s;
      }
    }
  },
  $l = (e, t) => {
    const n = qi(t);
    e.slots.default = () => n;
  },
  Bf = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = re(t)), Ar(t, "_", n)) : Al(t, (e.slots = {}));
    } else (e.slots = {}), t && $l(e, t);
    Ar(e.slots, oo, 1);
  },
  If = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let i = !0,
      s = be;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (Pe(o, t), !n && l === 1 && delete o._)
        : ((i = !t.$stable), Al(t, o)),
        (s = t);
    } else t && ($l(e, t), (s = { default: 1 }));
    if (i) for (const l in o) !Ol(l) && !(l in s) && delete o[l];
  };
function ql() {
  return {
    app: null,
    config: {
      isNativeTag: mc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let jf = 0;
function Ff(e, t) {
  return function (r, o = null) {
    se(r) || (r = Object.assign({}, r)), o != null && !_e(o) && (o = null);
    const i = ql(),
      s = new Set();
    let l = !1;
    const a = (i.app = {
      _uid: jf++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: sd,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          s.has(c) ||
            (c && se(c.install)
              ? (s.add(c), c.install(a, ...u))
              : se(c) && (s.add(c), c(a, ...u))),
          a
        );
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), a;
      },
      component(c, u) {
        return u ? ((i.components[c] = u), a) : i.components[c];
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), a) : i.directives[c];
      },
      mount(c, u, d) {
        if (!l) {
          const f = Ne(r, o);
          return (
            (f.appContext = i),
            u && t ? t(f, c) : e(f, c, d),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            io(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, u) {
        return (i.provides[c] = u), a;
      },
    });
    return a;
  };
}
function Xo(e, t, n, r, o = !1) {
  if (ee(e)) {
    e.forEach((f, m) => Xo(f, t && (ee(t) ? t[m] : t), n, r, o));
    return;
  }
  if (Fn(r) && !o) return;
  const i = r.shapeFlag & 4 ? io(r.component) || r.component.proxy : r.el,
    s = o ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === be ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (c != null &&
      c !== a &&
      (Ee(c)
        ? ((u[c] = null), le(d, c) && (d[c] = null))
        : xe(c) && (c.value = null)),
    se(a))
  )
    Lt(a, l, 12, [s, u]);
  else {
    const f = Ee(a),
      m = xe(a);
    if (f || m) {
      const v = () => {
        if (e.f) {
          const S = f ? (le(d, a) ? d[a] : u[a]) : a.value;
          o
            ? ee(S) && bi(S, i)
            : ee(S)
            ? S.includes(i) || S.push(i)
            : f
            ? ((u[a] = [i]), le(d, a) && (d[a] = u[a]))
            : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          f
            ? ((u[a] = s), le(d, a) && (d[a] = s))
            : m && ((a.value = s), e.k && (u[e.k] = s));
      };
      s ? ((v.id = -1), Ae(v, n)) : v();
    }
  }
}
const Ae = mf;
function Nf(e) {
  return Df(e);
}
function Df(e, t) {
  const n = _c();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: i,
      createElement: s,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: m = ot,
      insertStaticContent: v,
    } = e,
    S = (
      h,
      p,
      k,
      A = null,
      j = null,
      z = null,
      J = !1,
      H = null,
      U = !!p.dynamicChildren
    ) => {
      if (h === p) return;
      h && !Ut(h, p) && ((A = K(h)), he(h, j, z, !0), (h = null)),
        p.patchFlag === -2 && ((U = !1), (p.dynamicChildren = null));
      const { type: F, ref: Z, shapeFlag: Y } = p;
      switch (F) {
        case Li:
          x(h, p, k, A);
          break;
        case it:
          R(h, p, k, A);
          break;
        case _o:
          h == null && g(p, k, A, J);
          break;
        case et:
          E(h, p, k, A, j, z, J, H, U);
          break;
        default:
          Y & 1
            ? B(h, p, k, A, j, z, J, H, U)
            : Y & 6
            ? D(h, p, k, A, j, z, J, H, U)
            : (Y & 64 || Y & 128) && F.process(h, p, k, A, j, z, J, H, U, ne);
      }
      Z != null && j && Xo(Z, h && h.ref, z, p || h, !p);
    },
    x = (h, p, k, A) => {
      if (h == null) r((p.el = l(p.children)), k, A);
      else {
        const j = (p.el = h.el);
        p.children !== h.children && c(j, p.children);
      }
    },
    R = (h, p, k, A) => {
      h == null ? r((p.el = a(p.children || "")), k, A) : (p.el = h.el);
    },
    g = (h, p, k, A) => {
      [h.el, h.anchor] = v(h.children, p, k, A, h.el, h.anchor);
    },
    _ = ({ el: h, anchor: p }, k, A) => {
      let j;
      for (; h && h !== p; ) (j = f(h)), r(h, k, A), (h = j);
      r(p, k, A);
    },
    O = ({ el: h, anchor: p }) => {
      let k;
      for (; h && h !== p; ) (k = f(h)), o(h), (h = k);
      o(p);
    },
    B = (h, p, k, A, j, z, J, H, U) => {
      (J = J || p.type === "svg"),
        h == null ? y(p, k, A, j, z, J, H, U) : q(h, p, j, z, J, H, U);
    },
    y = (h, p, k, A, j, z, J, H) => {
      let U, F;
      const { type: Z, props: Y, shapeFlag: G, transition: te, dirs: ae } = h;
      if (
        ((U = h.el = s(h.type, z, Y && Y.is, Y)),
        G & 8
          ? u(U, h.children)
          : G & 16 &&
            b(h.children, U, null, A, j, z && Z !== "foreignObject", J, H),
        ae && Nt(h, null, A, "created"),
        Y)
      ) {
        for (const me in Y)
          me !== "value" &&
            !wr(me) &&
            i(U, me, null, Y[me], z, h.children, A, j, Q);
        "value" in Y && i(U, "value", null, Y.value),
          (F = Y.onVnodeBeforeMount) && We(F, A, h);
      }
      w(U, h, h.scopeId, J, A), ae && Nt(h, null, A, "beforeMount");
      const ye = (!j || (j && !j.pendingBranch)) && te && !te.persisted;
      ye && te.beforeEnter(U),
        r(U, p, k),
        ((F = Y && Y.onVnodeMounted) || ye || ae) &&
          Ae(() => {
            F && We(F, A, h),
              ye && te.enter(U),
              ae && Nt(h, null, A, "mounted");
          }, j);
    },
    w = (h, p, k, A, j) => {
      if ((k && m(h, k), A)) for (let z = 0; z < A.length; z++) m(h, A[z]);
      if (j) {
        let z = j.subTree;
        if (p === z) {
          const J = j.vnode;
          w(h, J, J.scopeId, J.slotScopeIds, j.parent);
        }
      }
    },
    b = (h, p, k, A, j, z, J, H, U = 0) => {
      for (let F = U; F < h.length; F++) {
        const Z = (h[F] = H ? Pt(h[F]) : ft(h[F]));
        S(null, Z, p, k, A, j, z, J, H);
      }
    },
    q = (h, p, k, A, j, z, J) => {
      const H = (p.el = h.el);
      let { patchFlag: U, dynamicChildren: F, dirs: Z } = p;
      U |= h.patchFlag & 16;
      const Y = h.props || be,
        G = p.props || be;
      let te;
      k && Dt(k, !1),
        (te = G.onVnodeBeforeUpdate) && We(te, k, p, h),
        Z && Nt(p, h, k, "beforeUpdate"),
        k && Dt(k, !0);
      const ae = j && p.type !== "foreignObject";
      if (
        (F
          ? M(h.dynamicChildren, F, H, k, A, ae, z)
          : J || W(h, p, H, null, k, A, ae, z, !1),
        U > 0)
      ) {
        if (U & 16) I(H, p, Y, G, k, A, j);
        else if (
          (U & 2 && Y.class !== G.class && i(H, "class", null, G.class, j),
          U & 4 && i(H, "style", Y.style, G.style, j),
          U & 8)
        ) {
          const ye = p.dynamicProps;
          for (let me = 0; me < ye.length; me++) {
            const Ce = ye[me],
              Ze = Y[Ce],
              on = G[Ce];
            (on !== Ze || Ce === "value") &&
              i(H, Ce, Ze, on, j, h.children, k, A, Q);
          }
        }
        U & 1 && h.children !== p.children && u(H, p.children);
      } else !J && F == null && I(H, p, Y, G, k, A, j);
      ((te = G.onVnodeUpdated) || Z) &&
        Ae(() => {
          te && We(te, k, p, h), Z && Nt(p, h, k, "updated");
        }, A);
    },
    M = (h, p, k, A, j, z, J) => {
      for (let H = 0; H < p.length; H++) {
        const U = h[H],
          F = p[H],
          Z =
            U.el && (U.type === et || !Ut(U, F) || U.shapeFlag & 70)
              ? d(U.el)
              : k;
        S(U, F, Z, null, A, j, z, J, !0);
      }
    },
    I = (h, p, k, A, j, z, J) => {
      if (k !== A) {
        if (k !== be)
          for (const H in k)
            !wr(H) && !(H in A) && i(h, H, k[H], null, J, p.children, j, z, Q);
        for (const H in A) {
          if (wr(H)) continue;
          const U = A[H],
            F = k[H];
          U !== F && H !== "value" && i(h, H, F, U, J, p.children, j, z, Q);
        }
        "value" in A && i(h, "value", k.value, A.value);
      }
    },
    E = (h, p, k, A, j, z, J, H, U) => {
      const F = (p.el = h ? h.el : l("")),
        Z = (p.anchor = h ? h.anchor : l(""));
      let { patchFlag: Y, dynamicChildren: G, slotScopeIds: te } = p;
      te && (H = H ? H.concat(te) : te),
        h == null
          ? (r(F, k, A), r(Z, k, A), b(p.children, k, Z, j, z, J, H, U))
          : Y > 0 && Y & 64 && G && h.dynamicChildren
          ? (M(h.dynamicChildren, G, k, j, z, J, H),
            (p.key != null || (j && p === j.subTree)) && Mi(h, p, !0))
          : W(h, p, k, Z, j, z, J, H, U);
    },
    D = (h, p, k, A, j, z, J, H, U) => {
      (p.slotScopeIds = H),
        h == null
          ? p.shapeFlag & 512
            ? j.ctx.activate(p, k, A, J, U)
            : P(p, k, A, j, z, J, U)
          : X(h, p, U);
    },
    P = (h, p, k, A, j, z, J) => {
      const H = (h.component = ed(h, A, j));
      if ((eo(h) && (H.ctx.renderer = ne), td(H), H.asyncDep)) {
        if ((j && j.registerDep(H, oe), !h.el)) {
          const U = (H.subTree = Ne(it));
          R(null, U, p, k);
        }
        return;
      }
      oe(H, h, p, k, j, z, J);
    },
    X = (h, p, k) => {
      const A = (p.component = h.component);
      if (df(h, p, k))
        if (A.asyncDep && !A.asyncResolved) {
          $(A, p, k);
          return;
        } else (A.next = p), of(A.update), A.update();
      else (p.el = h.el), (A.vnode = p);
    },
    oe = (h, p, k, A, j, z, J) => {
      const H = () => {
          if (h.isMounted) {
            let { next: Z, bu: Y, u: G, parent: te, vnode: ae } = h,
              ye = Z,
              me;
            Dt(h, !1),
              Z ? ((Z.el = ae.el), $(h, Z, J)) : (Z = ae),
              Y && jn(Y),
              (me = Z.props && Z.props.onVnodeBeforeUpdate) &&
                We(me, te, Z, ae),
              Dt(h, !0);
            const Ce = go(h),
              Ze = h.subTree;
            (h.subTree = Ce),
              S(Ze, Ce, d(Ze.el), K(Ze), h, j, z),
              (Z.el = Ce.el),
              ye === null && hf(h, Ce.el),
              G && Ae(G, j),
              (me = Z.props && Z.props.onVnodeUpdated) &&
                Ae(() => We(me, te, Z, ae), j);
          } else {
            let Z;
            const { el: Y, props: G } = p,
              { bm: te, m: ae, parent: ye } = h,
              me = Fn(p);
            if (
              (Dt(h, !1),
              te && jn(te),
              !me && (Z = G && G.onVnodeBeforeMount) && We(Z, ye, p),
              Dt(h, !0),
              Y && ie)
            ) {
              const Ce = () => {
                (h.subTree = go(h)), ie(Y, h.subTree, h, j, null);
              };
              me
                ? p.type.__asyncLoader().then(() => !h.isUnmounted && Ce())
                : Ce();
            } else {
              const Ce = (h.subTree = go(h));
              S(null, Ce, k, A, h, j, z), (p.el = Ce.el);
            }
            if ((ae && Ae(ae, j), !me && (Z = G && G.onVnodeMounted))) {
              const Ce = p;
              Ae(() => We(Z, ye, Ce), j);
            }
            (p.shapeFlag & 256 ||
              (ye && Fn(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              h.a &&
              Ae(h.a, j),
              (h.isMounted = !0),
              (p = k = A = null);
          }
        },
        U = (h.effect = new xi(H, () => Ti(F), h.scope)),
        F = (h.update = () => U.run());
      (F.id = h.uid), Dt(h, !0), F();
    },
    $ = (h, p, k) => {
      p.component = h;
      const A = h.vnode.props;
      (h.vnode = p),
        (h.next = null),
        Mf(h, p.props, A, k),
        If(h, p.children, k),
        Rn(),
        as(),
        Pn();
    },
    W = (h, p, k, A, j, z, J, H, U = !1) => {
      const F = h && h.children,
        Z = h ? h.shapeFlag : 0,
        Y = p.children,
        { patchFlag: G, shapeFlag: te } = p;
      if (G > 0) {
        if (G & 128) {
          V(F, Y, k, A, j, z, J, H, U);
          return;
        } else if (G & 256) {
          fe(F, Y, k, A, j, z, J, H, U);
          return;
        }
      }
      te & 8
        ? (Z & 16 && Q(F, j, z), Y !== F && u(k, Y))
        : Z & 16
        ? te & 16
          ? V(F, Y, k, A, j, z, J, H, U)
          : Q(F, j, z, !0)
        : (Z & 8 && u(k, ""), te & 16 && b(Y, k, A, j, z, J, H, U));
    },
    fe = (h, p, k, A, j, z, J, H, U) => {
      (h = h || gn), (p = p || gn);
      const F = h.length,
        Z = p.length,
        Y = Math.min(F, Z);
      let G;
      for (G = 0; G < Y; G++) {
        const te = (p[G] = U ? Pt(p[G]) : ft(p[G]));
        S(h[G], te, k, null, j, z, J, H, U);
      }
      F > Z ? Q(h, j, z, !0, !1, Y) : b(p, k, A, j, z, J, H, U, Y);
    },
    V = (h, p, k, A, j, z, J, H, U) => {
      let F = 0;
      const Z = p.length;
      let Y = h.length - 1,
        G = Z - 1;
      for (; F <= Y && F <= G; ) {
        const te = h[F],
          ae = (p[F] = U ? Pt(p[F]) : ft(p[F]));
        if (Ut(te, ae)) S(te, ae, k, null, j, z, J, H, U);
        else break;
        F++;
      }
      for (; F <= Y && F <= G; ) {
        const te = h[Y],
          ae = (p[G] = U ? Pt(p[G]) : ft(p[G]));
        if (Ut(te, ae)) S(te, ae, k, null, j, z, J, H, U);
        else break;
        Y--, G--;
      }
      if (F > Y) {
        if (F <= G) {
          const te = G + 1,
            ae = te < Z ? p[te].el : A;
          for (; F <= G; )
            S(null, (p[F] = U ? Pt(p[F]) : ft(p[F])), k, ae, j, z, J, H, U),
              F++;
        }
      } else if (F > G) for (; F <= Y; ) he(h[F], j, z, !0), F++;
      else {
        const te = F,
          ae = F,
          ye = new Map();
        for (F = ae; F <= G; F++) {
          const De = (p[F] = U ? Pt(p[F]) : ft(p[F]));
          De.key != null && ye.set(De.key, F);
        }
        let me,
          Ce = 0;
        const Ze = G - ae + 1;
        let on = !1,
          Ji = 0;
        const Tn = new Array(Ze);
        for (F = 0; F < Ze; F++) Tn[F] = 0;
        for (F = te; F <= Y; F++) {
          const De = h[F];
          if (Ce >= Ze) {
            he(De, j, z, !0);
            continue;
          }
          let ut;
          if (De.key != null) ut = ye.get(De.key);
          else
            for (me = ae; me <= G; me++)
              if (Tn[me - ae] === 0 && Ut(De, p[me])) {
                ut = me;
                break;
              }
          ut === void 0
            ? he(De, j, z, !0)
            : ((Tn[ut - ae] = F + 1),
              ut >= Ji ? (Ji = ut) : (on = !0),
              S(De, p[ut], k, null, j, z, J, H, U),
              Ce++);
        }
        const Xi = on ? Vf(Tn) : gn;
        for (me = Xi.length - 1, F = Ze - 1; F >= 0; F--) {
          const De = ae + F,
            ut = p[De],
            Yi = De + 1 < Z ? p[De + 1].el : A;
          Tn[F] === 0
            ? S(null, ut, k, Yi, j, z, J, H, U)
            : on && (me < 0 || F !== Xi[me] ? ue(ut, k, Yi, 2) : me--);
        }
      }
    },
    ue = (h, p, k, A, j = null) => {
      const { el: z, type: J, transition: H, children: U, shapeFlag: F } = h;
      if (F & 6) {
        ue(h.component.subTree, p, k, A);
        return;
      }
      if (F & 128) {
        h.suspense.move(p, k, A);
        return;
      }
      if (F & 64) {
        J.move(h, p, k, ne);
        return;
      }
      if (J === et) {
        r(z, p, k);
        for (let Y = 0; Y < U.length; Y++) ue(U[Y], p, k, A);
        r(h.anchor, p, k);
        return;
      }
      if (J === _o) {
        _(h, p, k);
        return;
      }
      if (A !== 2 && F & 1 && H)
        if (A === 0) H.beforeEnter(z), r(z, p, k), Ae(() => H.enter(z), j);
        else {
          const { leave: Y, delayLeave: G, afterLeave: te } = H,
            ae = () => r(z, p, k),
            ye = () => {
              Y(z, () => {
                ae(), te && te();
              });
            };
          G ? G(z, ae, ye) : ye();
        }
      else r(z, p, k);
    },
    he = (h, p, k, A = !1, j = !1) => {
      const {
        type: z,
        props: J,
        ref: H,
        children: U,
        dynamicChildren: F,
        shapeFlag: Z,
        patchFlag: Y,
        dirs: G,
      } = h;
      if ((H != null && Xo(H, null, k, h, !0), Z & 256)) {
        p.ctx.deactivate(h);
        return;
      }
      const te = Z & 1 && G,
        ae = !Fn(h);
      let ye;
      if ((ae && (ye = J && J.onVnodeBeforeUnmount) && We(ye, p, h), Z & 6))
        L(h.component, k, A);
      else {
        if (Z & 128) {
          h.suspense.unmount(k, A);
          return;
        }
        te && Nt(h, null, p, "beforeUnmount"),
          Z & 64
            ? h.type.remove(h, p, k, j, ne, A)
            : F && (z !== et || (Y > 0 && Y & 64))
            ? Q(F, p, k, !1, !0)
            : ((z === et && Y & 384) || (!j && Z & 16)) && Q(U, p, k),
          A && ge(h);
      }
      ((ae && (ye = J && J.onVnodeUnmounted)) || te) &&
        Ae(() => {
          ye && We(ye, p, h), te && Nt(h, null, p, "unmounted");
        }, k);
    },
    ge = (h) => {
      const { type: p, el: k, anchor: A, transition: j } = h;
      if (p === et) {
        lt(k, A);
        return;
      }
      if (p === _o) {
        O(h);
        return;
      }
      const z = () => {
        o(k), j && !j.persisted && j.afterLeave && j.afterLeave();
      };
      if (h.shapeFlag & 1 && j && !j.persisted) {
        const { leave: J, delayLeave: H } = j,
          U = () => J(k, z);
        H ? H(h.el, z, U) : U();
      } else z();
    },
    lt = (h, p) => {
      let k;
      for (; h !== p; ) (k = f(h)), o(h), (h = k);
      o(p);
    },
    L = (h, p, k) => {
      const { bum: A, scope: j, update: z, subTree: J, um: H } = h;
      A && jn(A),
        j.stop(),
        z && ((z.active = !1), he(J, h, p, k)),
        H && Ae(H, p),
        Ae(() => {
          h.isUnmounted = !0;
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve());
    },
    Q = (h, p, k, A = !1, j = !1, z = 0) => {
      for (let J = z; J < h.length; J++) he(h[J], p, k, A, j);
    },
    K = (h) =>
      h.shapeFlag & 6
        ? K(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : f(h.anchor || h.el),
    N = (h, p, k) => {
      h == null
        ? p._vnode && he(p._vnode, null, null, !0)
        : S(p._vnode || null, h, p, null, null, null, k),
        as(),
        hl(),
        (p._vnode = h);
    },
    ne = {
      p: S,
      um: he,
      m: ue,
      r: ge,
      mt: P,
      mc: b,
      pc: W,
      pbc: M,
      n: K,
      o: e,
    };
  let ve, ie;
  return (
    t && ([ve, ie] = t(ne)), { render: N, hydrate: ve, createApp: Ff(N, ve) }
  );
}
function Dt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Mi(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (ee(r) && ee(o))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let l = o[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[i] = Pt(o[i])), (l.el = s.el)),
        n || Mi(s, l));
    }
}
function Vf(e) {
  const t = e.slice(),
    n = [0];
  let r, o, i, s, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        (l = (i + s) >> 1), e[n[l]] < c ? (i = l + 1) : (s = l);
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
  return n;
}
const Hf = (e) => e.__isTeleport,
  Nn = (e) => e && (e.disabled || e.disabled === ""),
  bs = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  Yo = (e, t) => {
    const n = e && e.to;
    return Ee(n) ? (t ? t(n) : null) : n;
  },
  zf = {
    __isTeleport: !0,
    process(e, t, n, r, o, i, s, l, a, c) {
      const {
          mc: u,
          pc: d,
          pbc: f,
          o: { insert: m, querySelector: v, createText: S, createComment: x },
        } = c,
        R = Nn(t.props);
      let { shapeFlag: g, children: _, dynamicChildren: O } = t;
      if (e == null) {
        const B = (t.el = S("")),
          y = (t.anchor = S(""));
        m(B, n, r), m(y, n, r);
        const w = (t.target = Yo(t.props, v)),
          b = (t.targetAnchor = S(""));
        w && (m(b, w), (s = s || bs(w)));
        const q = (M, I) => {
          g & 16 && u(_, M, I, o, i, s, l, a);
        };
        R ? q(n, y) : w && q(w, b);
      } else {
        t.el = e.el;
        const B = (t.anchor = e.anchor),
          y = (t.target = e.target),
          w = (t.targetAnchor = e.targetAnchor),
          b = Nn(e.props),
          q = b ? n : y,
          M = b ? B : w;
        if (
          ((s = s || bs(y)),
          O
            ? (f(e.dynamicChildren, O, q, o, i, s, l), Mi(e, t, !0))
            : a || d(e, t, q, M, o, i, s, l, !1),
          R)
        )
          b || dr(t, n, B, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const I = (t.target = Yo(t.props, v));
          I && dr(t, I, null, c, 0);
        } else b && dr(t, y, w, c, 1);
      }
    },
    remove(e, t, n, r, { um: o, o: { remove: i } }, s) {
      const {
        shapeFlag: l,
        children: a,
        anchor: c,
        targetAnchor: u,
        target: d,
        props: f,
      } = e;
      if ((d && i(u), (s || !Nn(f)) && (i(c), l & 16)))
        for (let m = 0; m < a.length; m++) {
          const v = a[m];
          o(v, t, n, !0, !!v.dynamicChildren);
        }
    },
    move: dr,
    hydrate: Uf,
  };
function dr(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: a, children: c, props: u } = e,
    d = i === 2;
  if ((d && r(s, t, n), (!d || Nn(u)) && a & 16))
    for (let f = 0; f < c.length; f++) o(c[f], t, n, 2);
  d && r(l, t, n);
}
function Uf(
  e,
  t,
  n,
  r,
  o,
  i,
  { o: { nextSibling: s, parentNode: l, querySelector: a } },
  c
) {
  const u = (t.target = Yo(t.props, a));
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Nn(t.props))
        (t.anchor = c(s(e), t, l(e), n, r, o, i)), (t.targetAnchor = d);
      else {
        t.anchor = s(e);
        let f = d;
        for (; f; )
          if (
            ((f = s(f)), f && f.nodeType === 8 && f.data === "teleport anchor")
          ) {
            (t.targetAnchor = f),
              (u._lpa = t.targetAnchor && s(t.targetAnchor));
            break;
          }
        c(d, t, u, n, r, o, i);
      }
  }
  return t.anchor && s(t.anchor);
}
const Kf = zf,
  et = Symbol(void 0),
  Li = Symbol(void 0),
  it = Symbol(void 0),
  _o = Symbol(void 0),
  Dn = [];
let nt = null;
function Ml(e = !1) {
  Dn.push((nt = e ? null : []));
}
function Wf() {
  Dn.pop(), (nt = Dn[Dn.length - 1] || null);
}
let Xn = 1;
function ys(e) {
  Xn += e;
}
function Ll(e) {
  return (
    (e.dynamicChildren = Xn > 0 ? nt || gn : null),
    Wf(),
    Xn > 0 && nt && nt.push(e),
    e
  );
}
function ob(e, t, n, r, o, i) {
  return Ll(jl(e, t, n, r, o, i, !0));
}
function Bl(e, t, n, r, o) {
  return Ll(Ne(e, t, n, r, o, !0));
}
function Br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const oo = "__vInternal",
  Il = ({ key: e }) => (e != null ? e : null),
  Cr = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Ee(e) || xe(e) || se(e)
        ? { i: Je, r: e, k: t, f: !!n }
        : e
      : null;
function jl(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  i = e === et ? 0 : 1,
  s = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Il(t),
    ref: t && Cr(t),
    scopeId: Zr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (Bi(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Ee(n) ? 8 : 16),
    Xn > 0 &&
      !s &&
      nt &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      nt.push(a),
    a
  );
}
const Ne = Qf;
function Qf(e, t = null, n = null, r = 0, o = null, i = !1) {
  if (((!e || e === Ef) && (e = it), Br(e))) {
    const l = _t(e, t, !0);
    return (
      n && Bi(l, n),
      Xn > 0 &&
        !i &&
        nt &&
        (l.shapeFlag & 6 ? (nt[nt.indexOf(e)] = l) : nt.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((id(e) && (e = e.__vccOpts), t)) {
    t = Jf(t);
    let { class: l, style: a } = t;
    l && !Ee(l) && (t.class = gi(l)),
      _e(a) && (il(a) && !ee(a) && (a = Pe({}, a)), (t.style = pi(a)));
  }
  const s = Ee(e) ? 1 : gl(e) ? 128 : Hf(e) ? 64 : _e(e) ? 4 : se(e) ? 2 : 0;
  return jl(e, t, n, r, o, s, i, !0);
}
function Jf(e) {
  return e ? (il(e) || oo in e ? Pe({}, e) : e) : null;
}
function _t(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = e,
    l = t ? Yf(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Il(l),
    ref:
      t && t.ref
        ? n && o
          ? ee(o)
            ? o.concat(Cr(t))
            : [o, Cr(t)]
          : Cr(t)
        : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== et ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Xf(e = " ", t = 0) {
  return Ne(Li, null, e, t);
}
function ib(e = "", t = !1) {
  return t ? (Ml(), Bl(it, null, e)) : Ne(it, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean"
    ? Ne(it)
    : ee(e)
    ? Ne(et, null, e.slice())
    : typeof e == "object"
    ? Pt(e)
    : Ne(Li, null, String(e));
}
function Pt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : _t(e);
}
function Bi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ee(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Bi(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(oo in t)
        ? (t._ctx = Je)
        : o === 3 &&
          Je &&
          (Je.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    se(t)
      ? ((t = { default: t, _ctx: Je }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Xf(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Yf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = gi([t.class, r.class]));
      else if (o === "style") t.style = pi([t.style, r.style]);
      else if (Ur(o)) {
        const i = t[o],
          s = r[o];
        s &&
          i !== s &&
          !(ee(i) && i.includes(s)) &&
          (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function We(e, t, n, r = null) {
  Xe(e, t, 7, [n, r]);
}
const Zf = ql();
let Gf = 0;
function ed(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Zf,
    i = {
      uid: Gf++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ka(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Tl(r, o),
      emitsOptions: pl(r, o),
      emit: null,
      emitted: null,
      propsDefaults: be,
      inheritAttrs: r.inheritAttrs,
      ctx: be,
      data: be,
      props: be,
      attrs: be,
      slots: be,
      refs: be,
      setupState: be,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = lf.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Re = null;
const we = () => Re || Je,
  wn = (e) => {
    (Re = e), e.scope.on();
  },
  Zt = () => {
    Re && Re.scope.off(), (Re = null);
  };
function Fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function td(e, t = !1) {
  Yn = t;
  const { props: n, children: r } = e.vnode,
    o = Fl(e);
  qf(e, n, o, t), Bf(e, r);
  const i = o ? nd(e, t) : void 0;
  return (Yn = !1), i;
}
function nd(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = pt(new Proxy(e.ctx, Rf)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? od(e) : null);
    wn(e), Rn();
    const i = Lt(r, e, 0, [e.props, o]);
    if ((Pn(), Zt(), Va(i))) {
      if ((i.then(Zt, Zt), t))
        return i
          .then((s) => {
            _s(e, s, t);
          })
          .catch((s) => {
            Xr(s, e, 0);
          });
      e.asyncDep = i;
    } else _s(e, i, t);
  } else Nl(e, t);
}
function _s(e, t, n) {
  se(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _e(t) && (e.setupState = ul(t)),
    Nl(e, n);
}
let ws;
function Nl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ws && !r.render) {
      const o = r.template || $i(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          c = Pe(Pe({ isCustomElement: i, delimiters: l }, s), a);
        r.render = ws(o, c);
      }
    }
    e.render = r.render || ot;
  }
  wn(e), Rn(), Pf(e), Pn(), Zt();
}
function rd(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return He(e, "get", "$attrs"), t[n];
    },
  });
}
function od(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = rd(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function io(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ul(pt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Mr) return Mr[n](e);
        },
      }))
    );
}
function Zo(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function id(e) {
  return se(e) && "__vccOpts" in e;
}
const C = (e, t) => tf(e, t, Yn);
function T(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? _e(t) && !ee(t)
      ? Br(t)
        ? Ne(e, null, [t])
        : Ne(e, t)
      : Ne(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Br(n) && (n = [n]),
      Ne(e, t, n));
}
const sd = "3.2.41",
  ad = "http://www.w3.org/2000/svg",
  Kt = typeof document != "undefined" ? document : null,
  xs = Kt && Kt.createElement("template"),
  ld = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? Kt.createElementNS(ad, e)
        : Kt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => Kt.createTextNode(e),
    createComment: (e) => Kt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Kt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        xs.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = xs.content;
        if (r) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function ud(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function cd(e, t, n) {
  const r = e.style,
    o = Ee(n);
  if (n && !o) {
    for (const i in n) Go(r, i, n[i]);
    if (t && !Ee(t)) for (const i in t) n[i] == null && Go(r, i, "");
  } else {
    const i = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = i);
  }
}
const Cs = /\s*!important$/;
function Go(e, t, n) {
  if (ee(n)) n.forEach((r) => Go(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = fd(e, t);
    Cs.test(n)
      ? e.setProperty(Sn(r), n.replace(Cs, ""), "important")
      : (e[r] = n);
  }
}
const ks = ["Webkit", "Moz", "ms"],
  wo = {};
function fd(e, t) {
  const n = wo[t];
  if (n) return n;
  let r = mt(t);
  if (r !== "filter" && r in e) return (wo[t] = r);
  r = Qr(r);
  for (let o = 0; o < ks.length; o++) {
    const i = ks[o] + r;
    if (i in e) return (wo[t] = i);
  }
  return t;
}
const Es = "http://www.w3.org/1999/xlink";
function dd(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Es, t.slice(6, t.length))
      : e.setAttributeNS(Es, t, n);
  else {
    const i = cc(t);
    n == null || (i && !Fa(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function hd(e, t, n, r, o, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, o, i), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n == null ? "" : n;
    (e.value !== a || e.tagName === "OPTION") && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Fa(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function md(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function pd(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function gd(e, t, n, r, o = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t];
  if (r && s) s.value = r;
  else {
    const [l, a] = vd(t);
    if (r) {
      const c = (i[t] = _d(r, o));
      md(e, l, c, a);
    } else s && (pd(e, l, s, a), (i[t] = void 0));
  }
}
const Ss = /(?:Once|Passive|Capture)$/;
function vd(e) {
  let t;
  if (Ss.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Ss)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Sn(e.slice(2)), t];
}
let xo = 0;
const bd = Promise.resolve(),
  yd = () => xo || (bd.then(() => (xo = 0)), (xo = Date.now()));
function _d(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Xe(wd(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = yd()), n;
}
function wd(e, t) {
  if (ee(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Rs = /^on[a-z]/,
  xd = (e, t, n, r, o = !1, i, s, l, a) => {
    t === "class"
      ? ud(e, r, o)
      : t === "style"
      ? cd(e, n, r)
      : Ur(t)
      ? vi(t) || gd(e, t, n, r, s)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Cd(e, t, r, o)
        )
      ? hd(e, t, r, i, s, l, a)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        dd(e, t, r, o));
  };
function Cd(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Rs.test(t) && se(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Rs.test(t) && Ee(n))
    ? !1
    : t in e;
}
const Et = "transition",
  On = "animation",
  xn = (e, { slots: t }) => T(_l, Vl(e), t);
xn.displayName = "Transition";
const Dl = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  kd = (xn.props = Pe({}, _l.props, Dl)),
  Vt = (e, t = []) => {
    ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ps = (e) => (e ? (ee(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Vl(e) {
  const t = {};
  for (const E in e) E in Dl || (t[E] = e[E]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: c = s,
      appearToClass: u = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    v = Ed(o),
    S = v && v[0],
    x = v && v[1],
    {
      onBeforeEnter: R,
      onEnter: g,
      onEnterCancelled: _,
      onLeave: O,
      onLeaveCancelled: B,
      onBeforeAppear: y = R,
      onAppear: w = g,
      onAppearCancelled: b = _,
    } = t,
    q = (E, D, P) => {
      Rt(E, D ? u : l), Rt(E, D ? c : s), P && P();
    },
    M = (E, D) => {
      (E._isLeaving = !1), Rt(E, d), Rt(E, m), Rt(E, f), D && D();
    },
    I = (E) => (D, P) => {
      const X = E ? w : g,
        oe = () => q(D, E, P);
      Vt(X, [D, oe]),
        Ts(() => {
          Rt(D, E ? a : i), vt(D, E ? u : l), Ps(X) || Os(D, r, S, oe);
        });
    };
  return Pe(t, {
    onBeforeEnter(E) {
      Vt(R, [E]), vt(E, i), vt(E, s);
    },
    onBeforeAppear(E) {
      Vt(y, [E]), vt(E, a), vt(E, c);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(E, D) {
      E._isLeaving = !0;
      const P = () => M(E, D);
      vt(E, d),
        zl(),
        vt(E, f),
        Ts(() => {
          !E._isLeaving || (Rt(E, d), vt(E, m), Ps(O) || Os(E, r, x, P));
        }),
        Vt(O, [E, P]);
    },
    onEnterCancelled(E) {
      q(E, !1), Vt(_, [E]);
    },
    onAppearCancelled(E) {
      q(E, !0), Vt(b, [E]);
    },
    onLeaveCancelled(E) {
      M(E), Vt(B, [E]);
    },
  });
}
function Ed(e) {
  if (e == null) return null;
  if (_e(e)) return [Co(e.enter), Co(e.leave)];
  {
    const t = Co(e);
    return [t, t];
  }
}
function Co(e) {
  return Ua(e);
}
function vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Ts(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Sd = 0;
function Os(e, t, n, r) {
  const o = (e._endId = ++Sd),
    i = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(i, n);
  const { type: s, timeout: l, propCount: a } = Hl(e, t);
  if (!s) return r();
  const c = s + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), i();
    },
    f = (m) => {
      m.target === e && ++u >= a && d();
    };
  setTimeout(() => {
    u < a && d();
  }, l + 1),
    e.addEventListener(c, f);
}
function Hl(e, t) {
  const n = window.getComputedStyle(e),
    r = (v) => (n[v] || "").split(", "),
    o = r(Et + "Delay"),
    i = r(Et + "Duration"),
    s = As(o, i),
    l = r(On + "Delay"),
    a = r(On + "Duration"),
    c = As(l, a);
  let u = null,
    d = 0,
    f = 0;
  t === Et
    ? s > 0 && ((u = Et), (d = s), (f = i.length))
    : t === On
    ? c > 0 && ((u = On), (d = c), (f = a.length))
    : ((d = Math.max(s, c)),
      (u = d > 0 ? (s > c ? Et : On) : null),
      (f = u ? (u === Et ? i.length : a.length) : 0));
  const m = u === Et && /\b(transform|all)(,|$)/.test(n[Et + "Property"]);
  return { type: u, timeout: d, propCount: f, hasTransform: m };
}
function As(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => $s(n) + $s(e[r])));
}
function $s(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function zl() {
  return document.body.offsetHeight;
}
const Ul = new WeakMap(),
  Kl = new WeakMap(),
  Rd = {
    name: "TransitionGroup",
    props: Pe({}, kd, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = we(),
        r = yl();
      let o, i;
      return (
        Ai(() => {
          if (!o.length) return;
          const s = e.moveClass || `${e.name || "v"}-move`;
          if (!$d(o[0].el, n.vnode.el, s)) return;
          o.forEach(Td), o.forEach(Od);
          const l = o.filter(Ad);
          zl(),
            l.forEach((a) => {
              const c = a.el,
                u = c.style;
              vt(c, s),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const d = (c._moveCb = (f) => {
                (f && f.target !== c) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c._moveCb = null),
                    Rt(c, s)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const s = re(e),
            l = Vl(s);
          let a = s.tag || et;
          (o = i), (i = t.default ? Oi(t.default()) : []);
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && _n(u, Jn(u, l, r, n));
          }
          if (o)
            for (let c = 0; c < o.length; c++) {
              const u = o[c];
              _n(u, Jn(u, l, r, n)), Ul.set(u, u.el.getBoundingClientRect());
            }
          return Ne(a, null, i);
        }
      );
    },
  },
  Pd = Rd;
function Td(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Od(e) {
  Kl.set(e, e.el.getBoundingClientRect());
}
function Ad(e) {
  const t = Ul.get(e),
    n = Kl.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${r}px,${o}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function $d(e, t, n) {
  const r = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((s) => {
      s.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((s) => s && r.classList.add(s)),
    (r.style.display = "none");
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: i } = Hl(r);
  return o.removeChild(r), i;
}
const qd = Pe({ patchProp: xd }, ld);
let qs;
function Md() {
  return qs || (qs = Nf(qd));
}
const Wl = (...e) => {
  const t = Md().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Ld(r);
      if (!o) return;
      const i = t._component;
      !se(i) && !i.render && !i.template && (i.template = o.innerHTML),
        (o.innerHTML = "");
      const s = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        s
      );
    }),
    t
  );
};
function Ld(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
function rr(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
function sb(e, t) {
  for (const n in t) rr(e, n, t[n]);
  return e;
}
const It = ce(!1);
let so;
function Bd(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[2] || n[4] || "0",
    versionNumber: n[4] || n[2] || "0",
    platform: t[0] || "",
  };
}
function Id(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const Ql = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function jd(e) {
  (so = { is: { ...e } }), delete e.mac, delete e.desktop;
  const t =
    Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, { mobile: !0, ios: !0, platform: t, [t]: !0 });
}
function Fd(e) {
  const t = e.toLowerCase(),
    n = Id(t),
    r = Bd(t, n),
    o = {};
  r.browser &&
    ((o[r.browser] = !0),
    (o.version = r.version),
    (o.versionNumber = parseInt(r.versionNumber, 10))),
    r.platform && (o[r.platform] = !0);
  const i =
    o.android ||
    o.ios ||
    o.bb ||
    o.blackberry ||
    o.ipad ||
    o.iphone ||
    o.ipod ||
    o.kindle ||
    o.playbook ||
    o.silk ||
    o["windows phone"];
  return (
    i === !0 || t.indexOf("mobile") > -1
      ? ((o.mobile = !0),
        o.edga || o.edgios
          ? ((o.edge = !0), (r.browser = "edge"))
          : o.crios
          ? ((o.chrome = !0), (r.browser = "chrome"))
          : o.fxios && ((o.firefox = !0), (r.browser = "firefox")))
      : (o.desktop = !0),
    (o.ipod || o.ipad || o.iphone) && (o.ios = !0),
    o["windows phone"] && ((o.winphone = !0), delete o["windows phone"]),
    (o.chrome ||
      o.opr ||
      o.safari ||
      o.vivaldi ||
      (o.mobile === !0 && o.ios !== !0 && i !== !0)) &&
      (o.webkit = !0),
    o.edg && ((r.browser = "edgechromium"), (o.edgeChromium = !0)),
    ((o.safari && o.blackberry) || o.bb) &&
      ((r.browser = "blackberry"), (o.blackberry = !0)),
    o.safari && o.playbook && ((r.browser = "playbook"), (o.playbook = !0)),
    o.opr && ((r.browser = "opera"), (o.opera = !0)),
    o.safari && o.android && ((r.browser = "android"), (o.android = !0)),
    o.safari && o.kindle && ((r.browser = "kindle"), (o.kindle = !0)),
    o.safari && o.silk && ((r.browser = "silk"), (o.silk = !0)),
    o.vivaldi && ((r.browser = "vivaldi"), (o.vivaldi = !0)),
    (o.name = r.browser),
    (o.platform = r.platform),
    t.indexOf("electron") > -1
      ? (o.electron = !0)
      : document.location.href.indexOf("-extension://") > -1
      ? (o.bex = !0)
      : (window.Capacitor !== void 0
          ? ((o.capacitor = !0),
            (o.nativeMobile = !0),
            (o.nativeMobileWrapper = "capacitor"))
          : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
            ((o.cordova = !0),
            (o.nativeMobile = !0),
            (o.nativeMobileWrapper = "cordova")),
        Ql === !0 &&
          o.mac === !0 &&
          ((o.desktop === !0 && o.safari === !0) ||
            (o.nativeMobile === !0 &&
              o.android !== !0 &&
              o.ios !== !0 &&
              o.ipad !== !0)) &&
          jd(o)),
    o
  );
}
const Ms = navigator.userAgent || navigator.vendor || window.opera,
  Nd = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  ke = {
    userAgent: Ms,
    is: Fd(Ms),
    has: { touch: Ql },
    within: { iframe: window.self !== window.top },
  },
  ei = {
    install(e) {
      const { $q: t } = e;
      It.value === !0
        ? (e.onSSRHydrated.push(() => {
            (It.value = !1), Object.assign(t.platform, ke), (so = void 0);
          }),
          (t.platform = jt(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  rr(ke.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    ke.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"),
    It.value === !0 ? Object.assign(ei, ke, so, Nd) : Object.assign(ei, ke);
}
var ao = (e, t) => {
  const n = jt(e);
  for (const r in e)
    rr(
      t,
      r,
      () => n[r],
      (o) => {
        n[r] = o;
      }
    );
  return t;
};
const Fe = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(Fe, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      });
    },
  });
  window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e);
} catch {}
function Zn() {}
function ab(e) {
  return e.button === 0;
}
function Dd(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function Vd(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === "HTML"))
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function Ir(e) {
  e.stopPropagation();
}
function $t(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Qe(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function lb(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0),
            r.addEventListener("dragstart", $t, Fe.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented,
            r.removeEventListener("dragstart", $t, Fe.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function Hd(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((o) => {
      o[0].addEventListener(o[1], e[o[2]], Fe[o[3]]);
    });
}
function zd(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], Fe[r[3]]);
    }),
    (e[n] = void 0));
}
function Jl(e, t = 250, n) {
  let r;
  function o() {
    const i = arguments,
      s = () => {
        (r = void 0), n !== !0 && e.apply(this, i);
      };
    clearTimeout(r),
      n === !0 && r === void 0 && e.apply(this, i),
      (r = setTimeout(s, t));
  }
  return (
    (o.cancel = () => {
      clearTimeout(r);
    }),
    o
  );
}
const ko = ["sm", "md", "lg", "xl"],
  { passive: Ls } = Fe;
var Ud = ao(
  {
    width: 0,
    height: 0,
    name: "xs",
    sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
    lt: { sm: !0, md: !0, lg: !0, xl: !0 },
    gt: { xs: !1, sm: !1, md: !1, lg: !1 },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
  },
  {
    setSizes: Zn,
    setDebounce: Zn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0));
        return;
      }
      const { visualViewport: n } = window,
        r = n || window,
        o = document.scrollingElement || document.documentElement,
        i =
          n === void 0 || ke.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, o.clientWidth),
                Math.max(window.innerHeight, o.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - o.clientWidth,
                n.height * n.scale + window.innerHeight - o.clientHeight,
              ],
        s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
      this.__update = (d) => {
        const [f, m] = i();
        if ((m !== this.height && (this.height = m), f !== this.width))
          this.width = f;
        else if (d !== !0) return;
        let v = this.sizes;
        (this.gt.xs = f >= v.sm),
          (this.gt.sm = f >= v.md),
          (this.gt.md = f >= v.lg),
          (this.gt.lg = f >= v.xl),
          (this.lt.sm = f < v.sm),
          (this.lt.md = f < v.md),
          (this.lt.lg = f < v.lg),
          (this.lt.xl = f < v.xl),
          (this.xs = this.lt.sm),
          (this.sm = this.gt.xs === !0 && this.lt.md === !0),
          (this.md = this.gt.sm === !0 && this.lt.lg === !0),
          (this.lg = this.gt.md === !0 && this.lt.xl === !0),
          (this.xl = this.gt.lg),
          (v =
            (this.xs === !0 && "xs") ||
            (this.sm === !0 && "sm") ||
            (this.md === !0 && "md") ||
            (this.lg === !0 && "lg") ||
            "xl"),
          v !== this.name &&
            (s === !0 &&
              (document.body.classList.remove(`screen--${this.name}`),
              document.body.classList.add(`screen--${v}`)),
            (this.name = v));
      };
      let l,
        a = {},
        c = 16;
      (this.setSizes = (d) => {
        ko.forEach((f) => {
          d[f] !== void 0 && (a[f] = d[f]);
        });
      }),
        (this.setDebounce = (d) => {
          c = d;
        });
      const u = () => {
        const d = getComputedStyle(document.body);
        d.getPropertyValue("--q-size-sm") &&
          ko.forEach((f) => {
            this.sizes[f] = parseInt(d.getPropertyValue(`--q-size-${f}`), 10);
          }),
          (this.setSizes = (f) => {
            ko.forEach((m) => {
              f[m] && (this.sizes[m] = f[m]);
            }),
              this.__update(!0);
          }),
          (this.setDebounce = (f) => {
            l !== void 0 && r.removeEventListener("resize", l, Ls),
              (l = f > 0 ? Jl(this.__update, f) : this.__update),
              r.addEventListener("resize", l, Ls);
          }),
          this.setDebounce(c),
          Object.keys(a).length > 0
            ? (this.setSizes(a), (a = void 0))
            : this.__update(),
          s === !0 &&
            this.name === "xs" &&
            document.body.classList.add("screen--xs");
      };
      It.value === !0 ? t.push(u) : u();
    },
  }
);
const Me = ao(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Me.mode = e),
          e === "auto"
            ? (Me.__media === void 0 &&
                ((Me.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                )),
                (Me.__updateMedia = () => {
                  Me.set("auto");
                }),
                Me.__media.addListener(Me.__updateMedia)),
              (e = Me.__media.matches))
            : Me.__media !== void 0 &&
              (Me.__media.removeListener(Me.__updateMedia),
              (Me.__media = void 0)),
          (Me.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? "light" : "dark"}`
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
      },
      toggle() {
        Me.set(Me.isActive === !1);
      },
      install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
        const { dark: r } = e.config;
        if (((e.dark = this), this.__installed === !0 && r === void 0)) return;
        this.isActive = r === !0;
        const o = r !== void 0 ? r : !1;
        if (It.value === !0) {
          const i = (l) => {
              this.__fromSSR = l;
            },
            s = this.set;
          (this.set = i),
            i(o),
            t.push(() => {
              (this.set = s), this.set(this.__fromSSR);
            });
        } else this.set(o);
      },
    }
  ),
  Xl = () => !0;
function Kd(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Wd(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function Qd(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return Xl;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(Kd).map(Wd)),
    () => t.includes(window.location.hash)
  );
}
var ti = {
    __history: [],
    add: Zn,
    remove: Zn,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = ke.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? "cordova" : "capacitor"];
      if (
        (r !== void 0 && r.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (s) => {
        s.condition === void 0 && (s.condition = Xl), this.__history.push(s);
      }),
        (this.remove = (s) => {
          const l = this.__history.indexOf(s);
          l >= 0 && this.__history.splice(l, 1);
        });
      const o = Qd(Object.assign({ backButtonExit: !0 }, r)),
        i = () => {
          if (this.__history.length) {
            const s = this.__history[this.__history.length - 1];
            s.condition() === !0 && (this.__history.pop(), s.handler());
          } else o() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1);
          })
        : window.Capacitor.Plugins.App.addListener("backButton", i);
    },
  },
  Bs = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
      clear: "Clear",
      ok: "OK",
      cancel: "Cancel",
      close: "Close",
      set: "Set",
      select: "Select",
      reset: "Reset",
      remove: "Remove",
      update: "Update",
      create: "Create",
      search: "Search",
      filter: "Filter",
      refresh: "Refresh",
      expand: (e) => (e ? `Expand "${e}"` : "Expand"),
      collapse: (e) => (e ? `Collapse "${e}"` : "Collapse"),
    },
    date: {
      days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: "days",
    },
    table: {
      noData: "No data available",
      noResults: "No matching records found",
      loading: "Loading...",
      selectedRecords: (e) =>
        e === 1
          ? "1 record selected."
          : (e === 0 ? "No" : e) + " records selected.",
      recordsPerPage: "Records per page:",
      allRows: "All",
      pagination: (e, t, n) => e + "-" + t + " of " + n,
      columns: "Columns",
    },
    editor: {
      url: "URL",
      bold: "Bold",
      italic: "Italic",
      strikethrough: "Strikethrough",
      underline: "Underline",
      unorderedList: "Unordered List",
      orderedList: "Ordered List",
      subscript: "Subscript",
      superscript: "Superscript",
      hyperlink: "Hyperlink",
      toggleFullscreen: "Toggle Fullscreen",
      quote: "Quote",
      left: "Left align",
      center: "Center align",
      right: "Right align",
      justify: "Justify align",
      print: "Print",
      outdent: "Decrease indentation",
      indent: "Increase indentation",
      removeFormat: "Remove formatting",
      formatting: "Formatting",
      fontSize: "Font Size",
      align: "Align",
      hr: "Insert Horizontal Rule",
      undo: "Undo",
      redo: "Redo",
      heading1: "Heading 1",
      heading2: "Heading 2",
      heading3: "Heading 3",
      heading4: "Heading 4",
      heading5: "Heading 5",
      heading6: "Heading 6",
      paragraph: "Paragraph",
      code: "Code",
      size1: "Very small",
      size2: "A bit small",
      size3: "Normal",
      size4: "Medium-large",
      size5: "Big",
      size6: "Very big",
      size7: "Maximum",
      defaultFont: "Default Font",
      viewSource: "View Source",
    },
    tree: {
      noNodes: "No nodes available",
      noResults: "No matching nodes found",
    },
  };
function Is() {
  const e =
    Array.isArray(navigator.languages) === !0 && navigator.languages.length > 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == "string")
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join("-");
}
const Tt = ao(
  { __langPack: {} },
  {
    getLocale: Is,
    set(e = Bs, t) {
      const n = { ...e, rtl: e.rtl === !0, getLocale: Is };
      {
        const r = document.documentElement;
        r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
          r.setAttribute("lang", n.isoName),
          (n.set = Tt.set),
          Object.assign(Tt.__langPack, n),
          (Tt.props = n),
          (Tt.isoName = n.isoName),
          (Tt.nativeName = n.nativeName);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      (e.lang = Tt.__langPack),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || Bs);
    },
  }
);
function Jd(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let Yl = !1;
function Xd(e) {
  Yl = e.isComposing === !0;
}
function Zl(e) {
  return (
    Yl === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function Gn(e, t) {
  return Zl(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Yd(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function Zd({ is: e, has: t, within: n }, r) {
  const o = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const i = Yd(e);
    i !== void 0 && o.push("platform-" + i);
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper;
    o.push(i),
      o.push("native-mobile"),
      e.ios === !0 &&
        (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) &&
        o.push("q-ios-padding");
  } else e.electron === !0 ? o.push("electron") : e.bex === !0 && o.push("bex");
  return n.iframe === !0 && o.push("within-iframe"), o;
}
function Gd() {
  const e = document.body.className;
  let t = e;
  so !== void 0 && (t = t.replace("desktop", "platform-ios mobile")),
    ke.has.touch === !0 && (t = t.replace("no-touch", "touch")),
    ke.within.iframe === !0 && (t += " within-iframe"),
    e !== t && (document.body.className = t);
}
function eh(e) {
  for (const t in e) Jd(t, e[t]);
}
var th = {
    install(e) {
      if (this.__installed !== !0) {
        if (It.value === !0) Gd();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && eh(t.config.brand);
          const n = Zd(ke, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        ke.is.ios === !0 && document.body.addEventListener("touchstart", Zn),
          window.addEventListener("keydown", Xd, !0);
      }
    },
  },
  nh = {
    name: "material-icons",
    type: {
      positive: "check_circle",
      negative: "warning",
      info: "info",
      warning: "priority_high",
    },
    arrow: {
      up: "arrow_upward",
      right: "arrow_forward",
      down: "arrow_downward",
      left: "arrow_back",
      dropdown: "arrow_drop_down",
    },
    chevron: { left: "chevron_left", right: "chevron_right" },
    colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" },
    pullToRefresh: { icon: "refresh" },
    carousel: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
      navigationIcon: "lens",
    },
    chip: { remove: "cancel", selected: "check" },
    datetime: {
      arrowLeft: "chevron_left",
      arrowRight: "chevron_right",
      now: "access_time",
      today: "today",
    },
    editor: {
      bold: "format_bold",
      italic: "format_italic",
      strikethrough: "strikethrough_s",
      underline: "format_underlined",
      unorderedList: "format_list_bulleted",
      orderedList: "format_list_numbered",
      subscript: "vertical_align_bottom",
      superscript: "vertical_align_top",
      hyperlink: "link",
      toggleFullscreen: "fullscreen",
      quote: "format_quote",
      left: "format_align_left",
      center: "format_align_center",
      right: "format_align_right",
      justify: "format_align_justify",
      print: "print",
      outdent: "format_indent_decrease",
      indent: "format_indent_increase",
      removeFormat: "format_clear",
      formatting: "text_format",
      fontSize: "format_size",
      align: "format_align_left",
      hr: "remove",
      undo: "undo",
      redo: "redo",
      heading: "format_size",
      code: "code",
      size: "format_size",
      font: "font_download",
      viewSource: "code",
    },
    expansionItem: {
      icon: "keyboard_arrow_down",
      denseIcon: "arrow_drop_down",
    },
    fab: { icon: "add", activeIcon: "close" },
    field: { clear: "cancel", error: "error" },
    pagination: {
      first: "first_page",
      prev: "keyboard_arrow_left",
      next: "keyboard_arrow_right",
      last: "last_page",
    },
    rating: { icon: "grade" },
    stepper: { done: "check", active: "edit", error: "warning" },
    tabs: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
    },
    table: {
      arrowUp: "arrow_upward",
      warning: "warning",
      firstPage: "first_page",
      prevPage: "chevron_left",
      nextPage: "chevron_right",
      lastPage: "last_page",
    },
    tree: { icon: "play_arrow" },
    uploader: {
      done: "done",
      clear: "clear",
      add: "add_box",
      upload: "cloud_upload",
      removeQueue: "clear_all",
      removeUploaded: "done_all",
    },
  };
const jr = ao(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = { ...e, rtl: e.rtl === !0 };
        (n.set = jr.set), Object.assign(jr.__icons, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          rr(
            e,
            "iconMapFn",
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || nh);
      },
    }
  ),
  Gl = "_q_",
  ub = "_q_l_",
  cb = "_q_pc_",
  rh = "_q_fo_",
  fb = "_q_tabs_",
  db = () => {},
  Fr = {};
let eu = !1;
function oh() {
  eu = !0;
}
function Eo(e, t) {
  if (e === t) return !0;
  if (
    e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object"
  ) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (e.constructor === Array) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (Eo(e[r], t[r]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      for (r = e.entries().next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = r.next();
      }
      for (r = e.entries().next(); r.done !== !0; ) {
        if (Eo(r.value[1], t.get(r.value[0])) !== !0) return !1;
        r = r.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      for (r = e.entries().next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = r.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e).filter((i) => e[i] !== void 0);
    if (
      ((n = o.length),
      n !== Object.keys(t).filter((i) => t[i] !== void 0).length)
    )
      return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (Eo(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ht(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function hb(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function mb(e) {
  return typeof e == "number" && isFinite(e);
}
const js = [ei, th, Me, Ud, ti, Tt, jr];
function tu(e, t) {
  const n = Wl(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...o } = t._context;
  return Object.assign(n._context, o), n;
}
function Fs(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function ih(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(Gl, n.$q),
    Fs(n, js),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        ht(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        ht(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Fs(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == "function" && js.includes(r) === !1
        )
      ),
    It.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
var sh = function (e, t = {}) {
    const n = { version: "2.10.0" };
    eu === !1
      ? (t.config !== void 0 && Object.assign(Fr, t.config),
        (n.config = { ...Fr }),
        oh())
      : (n.config = t.config || {}),
      ih(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  ah = { version: "2.10.0", install: sh, lang: Tt, iconSet: jr };
function lh() {
  return Ve(Gl);
}
var uh = !1;
/*!
 * pinia v2.0.23
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ let nu;
const lo = (e) => (nu = e),
  ru = Symbol();
function ni(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Vn;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Vn || (Vn = {}));
function ch() {
  const e = Wa(!0),
    t = e.run(() => ce({}));
  let n = [],
    r = [];
  const o = pt({
    install(i) {
      lo(o),
        (o._a = i),
        i.provide(ru, o),
        (i.config.globalProperties.$pinia = o),
        r.forEach((s) => n.push(s)),
        (r = []);
    },
    use(i) {
      return !this._a && !uh ? r.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
const ou = () => {};
function Ns(e, t, n, r = ou) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !n && we() && ro(o), o;
}
function sn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function ri(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    ni(o) && ni(r) && e.hasOwnProperty(n) && !xe(r) && !Mt(r)
      ? (e[n] = ri(o, r))
      : (e[n] = r);
  }
  return e;
}
const fh = Symbol();
function dh(e) {
  return !ni(e) || !e.hasOwnProperty(fh);
}
const { assign: Ot } = Object;
function hh(e) {
  return !!(xe(e) && e.effect);
}
function mh(e, t, n, r) {
  const { state: o, actions: i, getters: s } = t,
    l = n.state.value[e];
  let a;
  function c() {
    l || (n.state.value[e] = o ? o() : {});
    const u = Yc(n.state.value[e]);
    return Ot(
      u,
      i,
      Object.keys(s || {}).reduce(
        (d, f) => (
          (d[f] = pt(
            C(() => {
              lo(n);
              const m = n._s.get(e);
              return s[f].call(m, m);
            })
          )),
          d
        ),
        {}
      )
    );
  }
  return (
    (a = iu(e, c, t, n, r, !0)),
    (a.$reset = function () {
      const d = o ? o() : {};
      this.$patch((f) => {
        Ot(f, d);
      });
    }),
    a
  );
}
function iu(e, t, n = {}, r, o, i) {
  let s;
  const l = Ot({ actions: {} }, n),
    a = { deep: !0 };
  let c,
    u,
    d = pt([]),
    f = pt([]),
    m;
  const v = r.state.value[e];
  !i && !v && (r.state.value[e] = {}), ce({});
  let S;
  function x(w) {
    let b;
    (c = u = !1),
      typeof w == "function"
        ? (w(r.state.value[e]),
          (b = { type: Vn.patchFunction, storeId: e, events: m }))
        : (ri(r.state.value[e], w),
          (b = { type: Vn.patchObject, payload: w, storeId: e, events: m }));
    const q = (S = Symbol());
    Be().then(() => {
      S === q && (c = !0);
    }),
      (u = !0),
      sn(d, b, r.state.value[e]);
  }
  const R = ou;
  function g() {
    s.stop(), (d = []), (f = []), r._s.delete(e);
  }
  function _(w, b) {
    return function () {
      lo(r);
      const q = Array.from(arguments),
        M = [],
        I = [];
      function E(X) {
        M.push(X);
      }
      function D(X) {
        I.push(X);
      }
      sn(f, { args: q, name: w, store: B, after: E, onError: D });
      let P;
      try {
        P = b.apply(this && this.$id === e ? this : B, q);
      } catch (X) {
        throw (sn(I, X), X);
      }
      return P instanceof Promise
        ? P.then((X) => (sn(M, X), X)).catch(
            (X) => (sn(I, X), Promise.reject(X))
          )
        : (sn(M, P), P);
    };
  }
  const O = {
      _p: r,
      $id: e,
      $onAction: Ns.bind(null, f),
      $patch: x,
      $reset: R,
      $subscribe(w, b = {}) {
        const q = Ns(d, w, b.detached, () => M()),
          M = s.run(() =>
            pe(
              () => r.state.value[e],
              (I) => {
                (b.flush === "sync" ? u : c) &&
                  w({ storeId: e, type: Vn.direct, events: m }, I);
              },
              Ot({}, a, b)
            )
          );
        return q;
      },
      $dispose: g,
    },
    B = jt(O);
  r._s.set(e, B);
  const y = r._e.run(() => ((s = Wa()), s.run(() => t())));
  for (const w in y) {
    const b = y[w];
    if ((xe(b) && !hh(b)) || Mt(b))
      i ||
        (v && dh(b) && (xe(b) ? (b.value = v[w]) : ri(b, v[w])),
        (r.state.value[e][w] = b));
    else if (typeof b == "function") {
      const q = _(w, b);
      (y[w] = q), (l.actions[w] = b);
    }
  }
  return (
    Ot(B, y),
    Ot(re(B), y),
    Object.defineProperty(B, "$state", {
      get: () => r.state.value[e],
      set: (w) => {
        x((b) => {
          Ot(b, w);
        });
      },
    }),
    r._p.forEach((w) => {
      Ot(
        B,
        s.run(() => w({ store: B, app: r._a, pinia: r, options: l }))
      );
    }),
    v && i && n.hydrate && n.hydrate(B.$state, v),
    (c = !0),
    (u = !0),
    B
  );
}
function ph(e, t, n) {
  let r, o;
  const i = typeof t == "function";
  typeof e == "string" ? ((r = e), (o = i ? n : t)) : ((o = e), (r = e.id));
  function s(l, a) {
    const c = we();
    return (
      (l = l || (c && Ve(ru))),
      l && lo(l),
      (l = nu),
      l._s.has(r) || (i ? iu(r, t, o, l) : mh(r, o, l)),
      l._s.get(r)
    );
  }
  return (s.$id = r), s;
}
function pb(e) {
  return e;
}
var Ii = { exports: {} },
  su = function (t, n) {
    return function () {
      for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
        o[i] = arguments[i];
      return t.apply(n, o);
    };
  },
  gh = su,
  tn = Object.prototype.toString;
function ji(e) {
  return tn.call(e) === "[object Array]";
}
function oi(e) {
  return typeof e == "undefined";
}
function vh(e) {
  return (
    e !== null &&
    !oi(e) &&
    e.constructor !== null &&
    !oi(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function bh(e) {
  return tn.call(e) === "[object ArrayBuffer]";
}
function yh(e) {
  return typeof FormData != "undefined" && e instanceof FormData;
}
function _h(e) {
  var t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
    t
  );
}
function wh(e) {
  return typeof e == "string";
}
function xh(e) {
  return typeof e == "number";
}
function au(e) {
  return e !== null && typeof e == "object";
}
function kr(e) {
  if (tn.call(e) !== "[object Object]") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function Ch(e) {
  return tn.call(e) === "[object Date]";
}
function kh(e) {
  return tn.call(e) === "[object File]";
}
function Eh(e) {
  return tn.call(e) === "[object Blob]";
}
function lu(e) {
  return tn.call(e) === "[object Function]";
}
function Sh(e) {
  return au(e) && lu(e.pipe);
}
function Rh(e) {
  return typeof URLSearchParams != "undefined" && e instanceof URLSearchParams;
}
function Ph(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Th() {
  return typeof navigator != "undefined" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window != "undefined" && typeof document != "undefined";
}
function Fi(e, t) {
  if (!(e === null || typeof e == "undefined"))
    if ((typeof e != "object" && (e = [e]), ji(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}
function ii() {
  var e = {};
  function t(o, i) {
    kr(e[i]) && kr(o)
      ? (e[i] = ii(e[i], o))
      : kr(o)
      ? (e[i] = ii({}, o))
      : ji(o)
      ? (e[i] = o.slice())
      : (e[i] = o);
  }
  for (var n = 0, r = arguments.length; n < r; n++) Fi(arguments[n], t);
  return e;
}
function Oh(e, t, n) {
  return (
    Fi(t, function (o, i) {
      n && typeof o == "function" ? (e[i] = gh(o, n)) : (e[i] = o);
    }),
    e
  );
}
function Ah(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var ze = {
    isArray: ji,
    isArrayBuffer: bh,
    isBuffer: vh,
    isFormData: yh,
    isArrayBufferView: _h,
    isString: wh,
    isNumber: xh,
    isObject: au,
    isPlainObject: kr,
    isUndefined: oi,
    isDate: Ch,
    isFile: kh,
    isBlob: Eh,
    isFunction: lu,
    isStream: Sh,
    isURLSearchParams: Rh,
    isStandardBrowserEnv: Th,
    forEach: Fi,
    merge: ii,
    extend: Oh,
    trim: Ph,
    stripBOM: Ah,
  },
  an = ze;
function Ds(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var uu = function (t, n, r) {
    if (!n) return t;
    var o;
    if (r) o = r(n);
    else if (an.isURLSearchParams(n)) o = n.toString();
    else {
      var i = [];
      an.forEach(n, function (a, c) {
        a === null ||
          typeof a == "undefined" ||
          (an.isArray(a) ? (c = c + "[]") : (a = [a]),
          an.forEach(a, function (d) {
            an.isDate(d)
              ? (d = d.toISOString())
              : an.isObject(d) && (d = JSON.stringify(d)),
              i.push(Ds(c) + "=" + Ds(d));
          }));
      }),
        (o = i.join("&"));
    }
    if (o) {
      var s = t.indexOf("#");
      s !== -1 && (t = t.slice(0, s)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return t;
  },
  $h = ze;
function uo() {
  this.handlers = [];
}
uo.prototype.use = function (t, n, r) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
uo.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
uo.prototype.forEach = function (t) {
  $h.forEach(this.handlers, function (r) {
    r !== null && t(r);
  });
};
var qh = uo,
  Mh = ze,
  Lh = function (t, n) {
    Mh.forEach(t, function (o, i) {
      i !== n &&
        i.toUpperCase() === n.toUpperCase() &&
        ((t[n] = o), delete t[i]);
    });
  },
  cu = function (t, n, r, o, i) {
    return (
      (t.config = n),
      r && (t.code = r),
      (t.request = o),
      (t.response = i),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
        };
      }),
      t
    );
  },
  Bh = cu,
  fu = function (t, n, r, o, i) {
    var s = new Error(t);
    return Bh(s, n, r, o, i);
  },
  Ih = fu,
  jh = function (t, n, r) {
    var o = r.config.validateStatus;
    !r.status || !o || o(r.status)
      ? t(r)
      : n(
          Ih(
            "Request failed with status code " + r.status,
            r.config,
            null,
            r.request,
            r
          )
        );
  },
  hr = ze,
  Fh = hr.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (n, r, o, i, s, l) {
            var a = [];
            a.push(n + "=" + encodeURIComponent(r)),
              hr.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()),
              hr.isString(i) && a.push("path=" + i),
              hr.isString(s) && a.push("domain=" + s),
              l === !0 && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (n) {
            var r = document.cookie.match(
              new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
            );
            return r ? decodeURIComponent(r[3]) : null;
          },
          remove: function (n) {
            this.write(n, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })(),
  Nh = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
  },
  Dh = function (t, n) {
    return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
  },
  Vh = Nh,
  Hh = Dh,
  zh = function (t, n) {
    return t && !Vh(n) ? Hh(t, n) : n;
  },
  So = ze,
  Uh = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ],
  Kh = function (t) {
    var n = {},
      r,
      o,
      i;
    return (
      t &&
        So.forEach(
          t.split(`
`),
          function (l) {
            if (
              ((i = l.indexOf(":")),
              (r = So.trim(l.substr(0, i)).toLowerCase()),
              (o = So.trim(l.substr(i + 1))),
              r)
            ) {
              if (n[r] && Uh.indexOf(r) >= 0) return;
              r === "set-cookie"
                ? (n[r] = (n[r] ? n[r] : []).concat([o]))
                : (n[r] = n[r] ? n[r] + ", " + o : o);
            }
          }
        ),
      n
    );
  },
  Vs = ze,
  Wh = Vs.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a"),
          r;
        function o(i) {
          var s = i;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (s) {
            var l = Vs.isString(s) ? o(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  mr = ze,
  Qh = jh,
  Jh = Fh,
  Xh = uu,
  Yh = zh,
  Zh = Kh,
  Gh = Wh,
  Ro = fu,
  Hs = function (t) {
    return new Promise(function (r, o) {
      var i = t.data,
        s = t.headers,
        l = t.responseType;
      mr.isFormData(i) && delete s["Content-Type"];
      var a = new XMLHttpRequest();
      if (t.auth) {
        var c = t.auth.username || "",
          u = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : "";
        s.Authorization = "Basic " + btoa(c + ":" + u);
      }
      var d = Yh(t.baseURL, t.url);
      a.open(t.method.toUpperCase(), Xh(d, t.params, t.paramsSerializer), !0),
        (a.timeout = t.timeout);
      function f() {
        if (!!a) {
          var v =
              "getAllResponseHeaders" in a
                ? Zh(a.getAllResponseHeaders())
                : null,
            S =
              !l || l === "text" || l === "json" ? a.responseText : a.response,
            x = {
              data: S,
              status: a.status,
              statusText: a.statusText,
              headers: v,
              config: t,
              request: a,
            };
          Qh(r, o, x), (a = null);
        }
      }
      if (
        ("onloadend" in a
          ? (a.onloadend = f)
          : (a.onreadystatechange = function () {
              !a ||
                a.readyState !== 4 ||
                (a.status === 0 &&
                  !(a.responseURL && a.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
        (a.onabort = function () {
          !a || (o(Ro("Request aborted", t, "ECONNABORTED", a)), (a = null));
        }),
        (a.onerror = function () {
          o(Ro("Network Error", t, null, a)), (a = null);
        }),
        (a.ontimeout = function () {
          var S = "timeout of " + t.timeout + "ms exceeded";
          t.timeoutErrorMessage && (S = t.timeoutErrorMessage),
            o(
              Ro(
                S,
                t,
                t.transitional && t.transitional.clarifyTimeoutError
                  ? "ETIMEDOUT"
                  : "ECONNABORTED",
                a
              )
            ),
            (a = null);
        }),
        mr.isStandardBrowserEnv())
      ) {
        var m =
          (t.withCredentials || Gh(d)) && t.xsrfCookieName
            ? Jh.read(t.xsrfCookieName)
            : void 0;
        m && (s[t.xsrfHeaderName] = m);
      }
      "setRequestHeader" in a &&
        mr.forEach(s, function (S, x) {
          typeof i == "undefined" && x.toLowerCase() === "content-type"
            ? delete s[x]
            : a.setRequestHeader(x, S);
        }),
        mr.isUndefined(t.withCredentials) ||
          (a.withCredentials = !!t.withCredentials),
        l && l !== "json" && (a.responseType = t.responseType),
        typeof t.onDownloadProgress == "function" &&
          a.addEventListener("progress", t.onDownloadProgress),
        typeof t.onUploadProgress == "function" &&
          a.upload &&
          a.upload.addEventListener("progress", t.onUploadProgress),
        t.cancelToken &&
          t.cancelToken.promise.then(function (S) {
            !a || (a.abort(), o(S), (a = null));
          }),
        i || (i = null),
        a.send(i);
    });
  },
  $e = ze,
  zs = Lh,
  em = cu,
  tm = { "Content-Type": "application/x-www-form-urlencoded" };
function Us(e, t) {
  !$e.isUndefined(e) &&
    $e.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function nm() {
  var e;
  return (
    (typeof XMLHttpRequest != "undefined" ||
      (typeof process != "undefined" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = Hs),
    e
  );
}
function rm(e, t, n) {
  if ($e.isString(e))
    try {
      return (t || JSON.parse)(e), $e.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
var co = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  adapter: nm(),
  transformRequest: [
    function (t, n) {
      return (
        zs(n, "Accept"),
        zs(n, "Content-Type"),
        $e.isFormData(t) ||
        $e.isArrayBuffer(t) ||
        $e.isBuffer(t) ||
        $e.isStream(t) ||
        $e.isFile(t) ||
        $e.isBlob(t)
          ? t
          : $e.isArrayBufferView(t)
          ? t.buffer
          : $e.isURLSearchParams(t)
          ? (Us(n, "application/x-www-form-urlencoded;charset=utf-8"),
            t.toString())
          : $e.isObject(t) || (n && n["Content-Type"] === "application/json")
          ? (Us(n, "application/json"), rm(t))
          : t
      );
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional,
        r = n && n.silentJSONParsing,
        o = n && n.forcedJSONParsing,
        i = !r && this.responseType === "json";
      if (i || (o && $e.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError" ? em(s, this, "E_JSON_PARSE") : s;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
};
co.headers = { common: { Accept: "application/json, text/plain, */*" } };
$e.forEach(["delete", "get", "head"], function (t) {
  co.headers[t] = {};
});
$e.forEach(["post", "put", "patch"], function (t) {
  co.headers[t] = $e.merge(tm);
});
var Ni = co,
  om = ze,
  im = Ni,
  sm = function (t, n, r) {
    var o = this || im;
    return (
      om.forEach(r, function (s) {
        t = s.call(o, t, n);
      }),
      t
    );
  },
  du = function (t) {
    return !!(t && t.__CANCEL__);
  },
  Ks = ze,
  Po = sm,
  am = du,
  lm = Ni;
function To(e) {
  e.cancelToken && e.cancelToken.throwIfRequested();
}
var um = function (t) {
    To(t),
      (t.headers = t.headers || {}),
      (t.data = Po.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Ks.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      Ks.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (o) {
          delete t.headers[o];
        }
      );
    var n = t.adapter || lm.adapter;
    return n(t).then(
      function (o) {
        return (
          To(t),
          (o.data = Po.call(t, o.data, o.headers, t.transformResponse)),
          o
        );
      },
      function (o) {
        return (
          am(o) ||
            (To(t),
            o &&
              o.response &&
              (o.response.data = Po.call(
                t,
                o.response.data,
                o.response.headers,
                t.transformResponse
              ))),
          Promise.reject(o)
        );
      }
    );
  },
  qe = ze,
  hu = function (t, n) {
    n = n || {};
    var r = {},
      o = ["url", "method", "data"],
      i = ["headers", "auth", "proxy", "params"],
      s = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding",
      ],
      l = ["validateStatus"];
    function a(f, m) {
      return qe.isPlainObject(f) && qe.isPlainObject(m)
        ? qe.merge(f, m)
        : qe.isPlainObject(m)
        ? qe.merge({}, m)
        : qe.isArray(m)
        ? m.slice()
        : m;
    }
    function c(f) {
      qe.isUndefined(n[f])
        ? qe.isUndefined(t[f]) || (r[f] = a(void 0, t[f]))
        : (r[f] = a(t[f], n[f]));
    }
    qe.forEach(o, function (m) {
      qe.isUndefined(n[m]) || (r[m] = a(void 0, n[m]));
    }),
      qe.forEach(i, c),
      qe.forEach(s, function (m) {
        qe.isUndefined(n[m])
          ? qe.isUndefined(t[m]) || (r[m] = a(void 0, t[m]))
          : (r[m] = a(void 0, n[m]));
      }),
      qe.forEach(l, function (m) {
        m in n ? (r[m] = a(t[m], n[m])) : m in t && (r[m] = a(void 0, t[m]));
      });
    var u = o.concat(i).concat(s).concat(l),
      d = Object.keys(t)
        .concat(Object.keys(n))
        .filter(function (m) {
          return u.indexOf(m) === -1;
        });
    return qe.forEach(d, c), r;
  };
const cm = "axios",
  fm = "0.21.4",
  dm = "Promise based HTTP client for the browser and node.js",
  hm = "index.js",
  mm = {
    test: "grunt test",
    start: "node ./sandbox/server.js",
    build: "NODE_ENV=production grunt build",
    preversion: "npm test",
    version:
      "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
    postversion: "git push && git push --tags",
    examples: "node ./examples/server.js",
    coveralls:
      "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    fix: "eslint --fix lib/**/*.js",
  },
  pm = { type: "git", url: "https://github.com/axios/axios.git" },
  gm = ["xhr", "http", "ajax", "promise", "node"],
  vm = "Matt Zabriskie",
  bm = "MIT",
  ym = { url: "https://github.com/axios/axios/issues" },
  _m = "https://axios-http.com",
  wm = {
    coveralls: "^3.0.0",
    "es6-promise": "^4.2.4",
    grunt: "^1.3.0",
    "grunt-banner": "^0.6.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-clean": "^1.1.0",
    "grunt-contrib-watch": "^1.0.0",
    "grunt-eslint": "^23.0.0",
    "grunt-karma": "^4.0.0",
    "grunt-mocha-test": "^0.13.3",
    "grunt-ts": "^6.0.0-beta.19",
    "grunt-webpack": "^4.0.2",
    "istanbul-instrumenter-loader": "^1.0.0",
    "jasmine-core": "^2.4.1",
    karma: "^6.3.2",
    "karma-chrome-launcher": "^3.1.0",
    "karma-firefox-launcher": "^2.1.0",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^4.3.6",
    "karma-sinon": "^1.0.5",
    "karma-sourcemap-loader": "^0.3.8",
    "karma-webpack": "^4.0.2",
    "load-grunt-tasks": "^3.5.2",
    minimist: "^1.2.0",
    mocha: "^8.2.1",
    sinon: "^4.5.0",
    "terser-webpack-plugin": "^4.2.3",
    typescript: "^4.0.5",
    "url-search-params": "^0.10.0",
    webpack: "^4.44.2",
    "webpack-dev-server": "^3.11.0",
  },
  xm = { "./lib/adapters/http.js": "./lib/adapters/xhr.js" },
  Cm = "dist/axios.min.js",
  km = "dist/axios.min.js",
  Em = "./index.d.ts",
  Sm = { "follow-redirects": "^1.14.0" },
  Rm = [{ path: "./dist/axios.min.js", threshold: "5kB" }];
var Pm = {
    name: cm,
    version: fm,
    description: dm,
    main: hm,
    scripts: mm,
    repository: pm,
    keywords: gm,
    author: vm,
    license: bm,
    bugs: ym,
    homepage: _m,
    devDependencies: wm,
    browser: xm,
    jsdelivr: Cm,
    unpkg: km,
    typings: Em,
    dependencies: Sm,
    bundlesize: Rm,
  },
  mu = Pm,
  Di = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    Di[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var Ws = {},
  Tm = mu.version.split(".");
function pu(e, t) {
  for (var n = t ? t.split(".") : Tm, r = e.split("."), o = 0; o < 3; o++) {
    if (n[o] > r[o]) return !0;
    if (n[o] < r[o]) return !1;
  }
  return !1;
}
Di.transitional = function (t, n, r) {
  var o = n && pu(n);
  function i(s, l) {
    return (
      "[Axios v" +
      mu.version +
      "] Transitional option '" +
      s +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return function (s, l, a) {
    if (t === !1) throw new Error(i(l, " has been removed in " + n));
    return (
      o &&
        !Ws[l] &&
        ((Ws[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, l, a) : !0
    );
  };
};
function Om(e, t, n) {
  if (typeof e != "object") throw new TypeError("options must be an object");
  for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
    var i = r[o],
      s = t[i];
    if (s) {
      var l = e[i],
        a = l === void 0 || s(l, i, e);
      if (a !== !0) throw new TypeError("option " + i + " must be " + a);
      continue;
    }
    if (n !== !0) throw Error("Unknown option " + i);
  }
}
var Am = { isOlderVersion: pu, assertOptions: Om, validators: Di },
  gu = ze,
  $m = uu,
  Qs = qh,
  Js = um,
  fo = hu,
  vu = Am,
  ln = vu.validators;
function or(e) {
  (this.defaults = e),
    (this.interceptors = { request: new Qs(), response: new Qs() });
}
or.prototype.request = function (t) {
  typeof t == "string"
    ? ((t = arguments[1] || {}), (t.url = arguments[0]))
    : (t = t || {}),
    (t = fo(this.defaults, t)),
    t.method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = "get");
  var n = t.transitional;
  n !== void 0 &&
    vu.assertOptions(
      n,
      {
        silentJSONParsing: ln.transitional(ln.boolean, "1.0.0"),
        forcedJSONParsing: ln.transitional(ln.boolean, "1.0.0"),
        clarifyTimeoutError: ln.transitional(ln.boolean, "1.0.0"),
      },
      !1
    );
  var r = [],
    o = !0;
  this.interceptors.request.forEach(function (f) {
    (typeof f.runWhen == "function" && f.runWhen(t) === !1) ||
      ((o = o && f.synchronous), r.unshift(f.fulfilled, f.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function (f) {
    i.push(f.fulfilled, f.rejected);
  });
  var s;
  if (!o) {
    var l = [Js, void 0];
    for (
      Array.prototype.unshift.apply(l, r),
        l = l.concat(i),
        s = Promise.resolve(t);
      l.length;

    )
      s = s.then(l.shift(), l.shift());
    return s;
  }
  for (var a = t; r.length; ) {
    var c = r.shift(),
      u = r.shift();
    try {
      a = c(a);
    } catch (d) {
      u(d);
      break;
    }
  }
  try {
    s = Js(a);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; i.length; ) s = s.then(i.shift(), i.shift());
  return s;
};
or.prototype.getUri = function (t) {
  return (
    (t = fo(this.defaults, t)),
    $m(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
  );
};
gu.forEach(["delete", "get", "head", "options"], function (t) {
  or.prototype[t] = function (n, r) {
    return this.request(
      fo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
gu.forEach(["post", "put", "patch"], function (t) {
  or.prototype[t] = function (n, r, o) {
    return this.request(fo(o || {}, { method: t, url: n, data: r }));
  };
});
var qm = or;
function Vi(e) {
  this.message = e;
}
Vi.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Vi.prototype.__CANCEL__ = !0;
var bu = Vi,
  Mm = bu;
function Nr(e) {
  if (typeof e != "function")
    throw new TypeError("executor must be a function.");
  var t;
  this.promise = new Promise(function (o) {
    t = o;
  });
  var n = this;
  e(function (o) {
    n.reason || ((n.reason = new Mm(o)), t(n.reason));
  });
}
Nr.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};
Nr.source = function () {
  var t,
    n = new Nr(function (o) {
      t = o;
    });
  return { token: n, cancel: t };
};
var Lm = Nr,
  Bm = function (t) {
    return function (r) {
      return t.apply(null, r);
    };
  },
  Im = function (t) {
    return typeof t == "object" && t.isAxiosError === !0;
  },
  Xs = ze,
  jm = su,
  Er = qm,
  Fm = hu,
  Nm = Ni;
function yu(e) {
  var t = new Er(e),
    n = jm(Er.prototype.request, t);
  return Xs.extend(n, Er.prototype, t), Xs.extend(n, t), n;
}
var st = yu(Nm);
st.Axios = Er;
st.create = function (t) {
  return yu(Fm(st.defaults, t));
};
st.Cancel = bu;
st.CancelToken = Lm;
st.isCancel = du;
st.all = function (t) {
  return Promise.all(t);
};
st.spread = Bm;
st.isAxiosError = Im;
Ii.exports = st;
Ii.exports.default = st;
var _u = Ii.exports;
const wt = _u.create({ baseURL: "http://192.168.4.104:8000" });
wt.defaults.headers.common.Accept = "application/json";
var Dm = ({ app: e }) => {
    (e.config.globalProperties.$axios = _u),
      (e.config.globalProperties.$api = wt);
  },
  Vm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Dm, api: wt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
async function Hm(e, t) {
  return await wt.post(
    "/api/auth/token",
    new URLSearchParams({ username: e, password: t })
  );
}
async function zm() {
  return (await wt.get("/api/auth/me")).data;
}
async function gb(e) {
  return (await wt.get(`/api/workout/next/${e}`)).data;
}
async function vb(e) {
  return wt.put("/api/workout/", JSON.stringify(e), {
    headers: { "Content-Type": "application/json" },
  });
}
function wu(e) {
  return encodeURIComponent(e);
}
function xu(e) {
  return decodeURIComponent(e);
}
function Um(e) {
  return wu(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Km(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 &&
    (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
    (e = xu(e.replace(/\+/g, " ")));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === !0) && (e = t);
  } catch {}
  return e;
}
function Cu(e) {
  const t = new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Wm(e) {
  let t = 0;
  const n = e.match(/(\d+)d/),
    r = e.match(/(\d+)h/),
    o = e.match(/(\d+)m/),
    i = e.match(/(\d+)s/);
  return (
    n && (t += n[1] * 864e5),
    r && (t += r[1] * 36e5),
    o && (t += o[1] * 6e4),
    i && (t += i[1] * 1e3),
    t === 0 ? e : Cu(t)
  );
}
function ku(e, t, n = {}, r) {
  let o, i;
  n.expires !== void 0 &&
    (Object.prototype.toString.call(n.expires) === "[object Date]"
      ? (o = n.expires.toUTCString())
      : typeof n.expires == "string"
      ? (o = Wm(n.expires))
      : ((i = parseFloat(n.expires)),
        (o = isNaN(i) === !1 ? Cu(i * 864e5) : n.expires)));
  const s = `${wu(e)}=${Um(t)}`,
    l = [
      s,
      o !== void 0 ? "; Expires=" + o : "",
      n.path ? "; Path=" + n.path : "",
      n.domain ? "; Domain=" + n.domain : "",
      n.sameSite ? "; SameSite=" + n.sameSite : "",
      n.httpOnly ? "; HttpOnly" : "",
      n.secure ? "; Secure" : "",
      n.other ? "; " + n.other : "",
    ].join("");
  if (r) {
    r.req.qCookies ? r.req.qCookies.push(l) : (r.req.qCookies = [l]),
      r.res.setHeader("Set-Cookie", r.req.qCookies);
    let a = r.req.headers.cookie || "";
    if (o !== void 0 && i < 0) {
      const c = Dr(e, r);
      c !== void 0 &&
        (a = a
          .replace(`${e}=${c}; `, "")
          .replace(`; ${e}=${c}`, "")
          .replace(`${e}=${c}`, ""));
    } else a = a ? `${s}; ${a}` : l;
    r.req.headers.cookie = a;
  } else document.cookie = l;
}
function Dr(e, t) {
  const n = t ? t.req.headers : document,
    r = n.cookie ? n.cookie.split("; ") : [],
    o = r.length;
  let i = e ? null : {},
    s = 0,
    l,
    a,
    c;
  for (; s < o; s++)
    if (((l = r[s].split("=")), (a = xu(l.shift())), (c = l.join("=")), !e))
      i[a] = c;
    else if (e === a) {
      i = Km(c);
      break;
    }
  return i;
}
function Qm(e, t, n) {
  ku(e, "", { expires: -1, ...t }, n);
}
function Jm(e, t) {
  return Dr(e, t) !== null;
}
function Xm(e) {
  return {
    get: (t) => Dr(t, e),
    set: (t, n, r) => ku(t, n, r, e),
    has: (t) => Jm(t, e),
    remove: (t, n) => Qm(t, n, e),
    getAll: () => Dr(null, e),
  };
}
const Vr = {
  install({ $q: e, ssrContext: t }) {
    e.cookies = this;
  },
};
Object.assign(Vr, Xm());
const Eu = ph("auth", {
  state: () => ({ user: null }),
  getters: { isLoggedIn: (e) => e.user != null },
  actions: {
    async loadUser(e) {
      wt.defaults.headers.common.Authorization = `Bearer ${e}`;
      const t = await zm();
      this.user = t;
    },
    async login(e, t) {
      await Hm(e, t).then(async (n) => {
        if (n.status === 200) {
          console.log("successful login");
          const r = n.data;
          Vr.set("gym-rat", r.access_token),
            await this.loadUser(r.access_token);
        } else return new Promise.reject(new Error("fail"));
      });
    },
    logout() {
      (this.user = null),
        delete wt.defaults.headers.common.Authorization,
        Vr.remove("gym-rat");
    },
  },
});
var Ym = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const Zm = Gr({
  name: "App",
  setup() {
    const e = lh();
    e.dark.set(!0),
      Ft(async () => {
        if (e.cookies.has("gym-rat")) {
          const t = Eu(),
            n = e.cookies.get("gym-rat");
          t.loadUser(n);
        }
      });
  },
});
function Gm(e, t, n, r, o, i) {
  const s = kf("router-view");
  return Ml(), Bl(s);
}
var ep = Ym(Zm, [["render", Gm]]),
  Oo = () => ch();
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const mn = typeof window != "undefined";
function tp(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function Ao(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = at(o) ? o.map(e) : e(o);
  }
  return n;
}
const Hn = () => {},
  at = Array.isArray,
  np = /\/$/,
  rp = (e) => e.replace(np, "");
function $o(e, t, n = "/") {
  let r,
    o = {},
    i = "",
    s = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (o = e(i))),
    l > -1 && ((r = r || t.slice(0, l)), (s = t.slice(l, t.length))),
    (r = ap(r != null ? r : t, n)),
    { fullPath: r + (i && "?") + i + s, path: r, query: o, hash: s }
  );
}
function op(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ys(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function ip(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Cn(t.matched[r], n.matched[o]) &&
    Su(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Cn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Su(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!sp(e[n], t[n])) return !1;
  return !0;
}
function sp(e, t) {
  return at(e) ? Zs(e, t) : at(t) ? Zs(t, e) : e === t;
}
function Zs(e, t) {
  return at(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function ap(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let o = n.length - 1,
    i,
    s;
  for (i = 0; i < r.length; i++)
    if (((s = r[i]), s !== "."))
      if (s === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  );
}
var er;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(er || (er = {}));
var zn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(zn || (zn = {}));
function lp(e) {
  if (!e)
    if (mn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), rp(e);
}
const up = /^[^#]+#/;
function cp(e, t) {
  return e.replace(up, "#") + t;
}
function fp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const ho = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function dp(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = fp(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Gs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const si = new Map();
function hp(e, t) {
  si.set(e, t);
}
function mp(e) {
  const t = si.get(e);
  return si.delete(e), t;
}
let pp = () => location.protocol + "//" + location.host;
function Ru(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = o.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = o.slice(l);
    return a[0] !== "/" && (a = "/" + a), Ys(a, "");
  }
  return Ys(n, e) + r + o;
}
function gp(e, t, n, r) {
  let o = [],
    i = [],
    s = null;
  const l = ({ state: f }) => {
    const m = Ru(e, location),
      v = n.value,
      S = t.value;
    let x = 0;
    if (f) {
      if (((n.value = m), (t.value = f), s && s === v)) {
        s = null;
        return;
      }
      x = S ? f.position - S.position : 0;
    } else r(m);
    o.forEach((R) => {
      R(n.value, v, {
        delta: x,
        type: er.pop,
        direction: x ? (x > 0 ? zn.forward : zn.back) : zn.unknown,
      });
    });
  };
  function a() {
    s = n.value;
  }
  function c(f) {
    o.push(f);
    const m = () => {
      const v = o.indexOf(f);
      v > -1 && o.splice(v, 1);
    };
    return i.push(m), m;
  }
  function u() {
    const { history: f } = window;
    !f.state || f.replaceState(de({}, f.state, { scroll: ho() }), "");
  }
  function d() {
    for (const f of i) f();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", u),
    { pauseListeners: a, listen: c, destroy: d }
  );
}
function ea(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? ho() : null,
  };
}
function vp(e) {
  const { history: t, location: n } = window,
    r = { value: Ru(e, n) },
    o = { value: t.state };
  o.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(a, c, u) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a
          : pp() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (o.value = c);
    } catch (m) {
      console.error(m), n[u ? "replace" : "assign"](f);
    }
  }
  function s(a, c) {
    const u = de({}, t.state, ea(o.value.back, a, o.value.forward, !0), c, {
      position: o.value.position,
    });
    i(a, u, !0), (r.value = a);
  }
  function l(a, c) {
    const u = de({}, o.value, t.state, { forward: a, scroll: ho() });
    i(u.current, u, !0);
    const d = de({}, ea(r.value, a, null), { position: u.position + 1 }, c);
    i(a, d, !1), (r.value = a);
  }
  return { location: r, state: o, push: l, replace: s };
}
function bp(e) {
  e = lp(e);
  const t = vp(e),
    n = gp(e, t.state, t.location, t.replace);
  function r(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const o = de(
    { location: "", base: e, go: r, createHref: cp.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function yp(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Pu(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const St = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Tu = Symbol("");
var ta;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(ta || (ta = {}));
function kn(e, t) {
  return de(new Error(), { type: e, [Tu]: !0 }, t);
}
function gt(e, t) {
  return e instanceof Error && Tu in e && (t == null || !!(e.type & t));
}
const na = "[^/]+?",
  _p = { sensitive: !1, strict: !1, start: !0, end: !0 },
  wp = /[.+*?^${}()[\]/\\]/g;
function xp(e, t) {
  const n = de({}, _p, t),
    r = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (o += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (o += "/"), (o += f.value.replace(wp, "\\$&")), (m += 40);
      else if (f.type === 1) {
        const { value: v, repeatable: S, optional: x, regexp: R } = f;
        i.push({ name: v, repeatable: S, optional: x });
        const g = R || na;
        if (g !== na) {
          m += 10;
          try {
            new RegExp(`(${g})`);
          } catch (O) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${g}): ` + O.message
            );
          }
        }
        let _ = S ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        d || (_ = x && c.length < 2 ? `(?:/${_})` : "/" + _),
          x && (_ += "?"),
          (o += _),
          (m += 20),
          x && (m += -8),
          S && (m += -20),
          g === ".*" && (m += -50);
      }
      u.push(m);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const s = new RegExp(o, n.sensitive ? "" : "i");
  function l(c) {
    const u = c.match(s),
      d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const m = u[f] || "",
        v = i[f - 1];
      d[v.name] = m && v.repeatable ? m.split("/") : m;
    }
    return d;
  }
  function a(c) {
    let u = "",
      d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const m of f)
        if (m.type === 0) u += m.value;
        else if (m.type === 1) {
          const { value: v, repeatable: S, optional: x } = m,
            R = v in c ? c[v] : "";
          if (at(R) && !S)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            );
          const g = at(R) ? R.join("/") : R;
          if (!g)
            if (x)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${v}"`);
          u += g;
        }
    }
    return u || "/";
  }
  return { re: s, score: r, keys: i, parse: l, stringify: a };
}
function Cp(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function kp(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const i = Cp(r[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (ra(r)) return 1;
    if (ra(o)) return -1;
  }
  return o.length - r.length;
}
function ra(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ep = { type: 0, value: "" },
  Sp = /[a-zA-Z0-9_]/;
function Rp(e) {
  if (!e) return [[]];
  if (e === "/") return [[Ep]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let i;
  function s() {
    i && o.push(i), (i = []);
  }
  let l = 0,
    a,
    c = "",
    u = "";
  function d() {
    !c ||
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function f() {
    c += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && d(), s()) : a === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = r);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : Sp.test(a)
          ? f()
          : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a);
        break;
      case 3:
        d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), s(), o;
}
function Pp(e, t, n) {
  const r = xp(Rp(e.path), n),
    o = de(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Tp(e, t) {
  const n = [],
    r = new Map();
  t = sa({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return r.get(u);
  }
  function i(u, d, f) {
    const m = !f,
      v = Op(u);
    v.aliasOf = f && f.record;
    const S = sa(t, u),
      x = [v];
    if ("alias" in u) {
      const _ = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const O of _)
        x.push(
          de({}, v, {
            components: f ? f.record.components : v.components,
            path: O,
            aliasOf: f ? f.record : v,
          })
        );
    }
    let R, g;
    for (const _ of x) {
      const { path: O } = _;
      if (d && O[0] !== "/") {
        const B = d.record.path,
          y = B[B.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (O && y + O);
      }
      if (
        ((R = Pp(_, d, S)),
        f
          ? f.alias.push(R)
          : ((g = g || R),
            g !== R && g.alias.push(R),
            m && u.name && !ia(R) && s(u.name)),
        v.children)
      ) {
        const B = v.children;
        for (let y = 0; y < B.length; y++) i(B[y], R, f && f.children[y]);
      }
      (f = f || R),
        ((R.record.components && Object.keys(R.record.components).length) ||
          R.record.name ||
          R.record.redirect) &&
          a(R);
    }
    return g
      ? () => {
          s(g);
        }
      : Hn;
  }
  function s(u) {
    if (Pu(u)) {
      const d = r.get(u);
      d &&
        (r.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(s),
        d.alias.forEach(s));
    } else {
      const d = n.indexOf(u);
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(s),
        u.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function a(u) {
    let d = 0;
    for (
      ;
      d < n.length &&
      kp(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !Ou(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !ia(u) && r.set(u.record.name, u);
  }
  function c(u, d) {
    let f,
      m = {},
      v,
      S;
    if ("name" in u && u.name) {
      if (((f = r.get(u.name)), !f)) throw kn(1, { location: u });
      (S = f.record.name),
        (m = de(
          oa(
            d.params,
            f.keys.filter((g) => !g.optional).map((g) => g.name)
          ),
          u.params &&
            oa(
              u.params,
              f.keys.map((g) => g.name)
            )
        )),
        (v = f.stringify(m));
    } else if ("path" in u)
      (v = u.path),
        (f = n.find((g) => g.re.test(v))),
        f && ((m = f.parse(v)), (S = f.record.name));
    else {
      if (((f = d.name ? r.get(d.name) : n.find((g) => g.re.test(d.path))), !f))
        throw kn(1, { location: u, currentLocation: d });
      (S = f.record.name),
        (m = de({}, d.params, u.params)),
        (v = f.stringify(m));
    }
    const x = [];
    let R = f;
    for (; R; ) x.unshift(R.record), (R = R.parent);
    return { name: S, path: v, params: m, matched: x, meta: $p(x) };
  }
  return (
    e.forEach((u) => i(u)),
    {
      addRoute: i,
      resolve: c,
      removeRoute: s,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function oa(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Op(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ap(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Ap(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function ia(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function $p(e) {
  return e.reduce((t, n) => de(t, n.meta), {});
}
function sa(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ou(e, t) {
  return t.children.some((n) => n === e || Ou(e, n));
}
const Au = /#/g,
  qp = /&/g,
  Mp = /\//g,
  Lp = /=/g,
  Bp = /\?/g,
  $u = /\+/g,
  Ip = /%5B/g,
  jp = /%5D/g,
  qu = /%5E/g,
  Fp = /%60/g,
  Mu = /%7B/g,
  Np = /%7C/g,
  Lu = /%7D/g,
  Dp = /%20/g;
function Hi(e) {
  return encodeURI("" + e)
    .replace(Np, "|")
    .replace(Ip, "[")
    .replace(jp, "]");
}
function Vp(e) {
  return Hi(e).replace(Mu, "{").replace(Lu, "}").replace(qu, "^");
}
function ai(e) {
  return Hi(e)
    .replace($u, "%2B")
    .replace(Dp, "+")
    .replace(Au, "%23")
    .replace(qp, "%26")
    .replace(Fp, "`")
    .replace(Mu, "{")
    .replace(Lu, "}")
    .replace(qu, "^");
}
function Hp(e) {
  return ai(e).replace(Lp, "%3D");
}
function zp(e) {
  return Hi(e).replace(Au, "%23").replace(Bp, "%3F");
}
function Up(e) {
  return e == null ? "" : zp(e).replace(Mp, "%2F");
}
function Hr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Kp(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const i = r[o].replace($u, " "),
      s = i.indexOf("="),
      l = Hr(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : Hr(i.slice(s + 1));
    if (l in t) {
      let c = t[l];
      at(c) || (c = t[l] = [c]), c.push(a);
    } else t[l] = a;
  }
  return t;
}
function aa(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = Hp(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (at(r) ? r.map((i) => i && ai(i)) : [r && ai(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function Wp(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = at(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Qp = Symbol(""),
  la = Symbol(""),
  mo = Symbol(""),
  zi = Symbol(""),
  li = Symbol("");
function An() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function At(e, t, n, r, o) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((s, l) => {
      const a = (d) => {
          d === !1
            ? l(kn(4, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : yp(d)
            ? l(kn(2, { from: t, to: d }))
            : (i &&
                r.enterCallbacks[o] === i &&
                typeof d == "function" &&
                i.push(d),
              s());
        },
        c = e.call(r && r.instances[o], t, n, a);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(a)), u.catch((d) => l(d));
    });
}
function qo(e, t, n, r) {
  const o = [];
  for (const i of e)
    for (const s in i.components) {
      let l = i.components[s];
      if (!(t !== "beforeRouteEnter" && !i.instances[s]))
        if (Jp(l)) {
          const c = (l.__vccOpts || l)[t];
          c && o.push(At(c, n, r, i, s));
        } else {
          let a = l();
          o.push(() =>
            a.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${s}" at "${i.path}"`)
                );
              const u = tp(c) ? c.default : c;
              i.components[s] = u;
              const f = (u.__vccOpts || u)[t];
              return f && At(f, n, r, i, s)();
            })
          );
        }
    }
  return o;
}
function Jp(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ua(e) {
  const t = Ve(mo),
    n = Ve(zi),
    r = C(() => t.resolve(Yt(e.to))),
    o = C(() => {
      const { matched: a } = r.value,
        { length: c } = a,
        u = a[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const f = d.findIndex(Cn.bind(null, u));
      if (f > -1) return f;
      const m = ca(a[c - 2]);
      return c > 1 && ca(u) === m && d[d.length - 1].path !== m
        ? d.findIndex(Cn.bind(null, a[c - 2]))
        : f;
    }),
    i = C(() => o.value > -1 && Gp(n.params, r.value.params)),
    s = C(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Su(n.params, r.value.params)
    );
  function l(a = {}) {
    return Zp(a)
      ? t[Yt(e.replace) ? "replace" : "push"](Yt(e.to)).catch(Hn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: C(() => r.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l,
  };
}
const Xp = Gr({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ua,
    setup(e, { slots: t }) {
      const n = jt(ua(e)),
        { options: r } = Ve(mo),
        o = C(() => ({
          [fa(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [fa(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : T(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              i
            );
      };
    },
  }),
  Yp = Xp;
function Zp(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Gp(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!at(o) || o.length !== r.length || r.some((i, s) => i !== o[s]))
      return !1;
  }
  return !0;
}
function ca(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const fa = (e, t, n) => (e != null ? e : t != null ? t : n),
  eg = Gr({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Ve(li),
        o = C(() => e.route || r.value),
        i = Ve(la, 0),
        s = C(() => {
          let c = Yt(i);
          const { matched: u } = o.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        l = C(() => o.value.matched[s.value]);
      xr(
        la,
        C(() => s.value + 1)
      ),
        xr(Qp, l),
        xr(li, o);
      const a = ce();
      return (
        pe(
          () => [a.value, l.value, e.name],
          ([c, u, d], [f, m, v]) => {
            u &&
              ((u.instances[d] = c),
              m &&
                m !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              c &&
                u &&
                (!m || !Cn(u, m) || !f) &&
                (u.enterCallbacks[d] || []).forEach((S) => S(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = o.value,
            u = e.name,
            d = l.value,
            f = d && d.components[u];
          if (!f) return da(n.default, { Component: f, route: c });
          const m = d.props[u],
            v = m
              ? m === !0
                ? c.params
                : typeof m == "function"
                ? m(c)
                : m
              : null,
            x = T(
              f,
              de({}, v, t, {
                onVnodeUnmounted: (R) => {
                  R.component.isUnmounted && (d.instances[u] = null);
                },
                ref: a,
              })
            );
          return da(n.default, { Component: x, route: c }) || x;
        }
      );
    },
  });
function da(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const tg = eg;
function ng(e) {
  const t = Tp(e.routes, e),
    n = e.parseQuery || Kp,
    r = e.stringifyQuery || aa,
    o = e.history,
    i = An(),
    s = An(),
    l = An(),
    a = Qc(St);
  let c = St;
  mn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Ao.bind(null, (L) => "" + L),
    d = Ao.bind(null, Up),
    f = Ao.bind(null, Hr);
  function m(L, Q) {
    let K, N;
    return (
      Pu(L) ? ((K = t.getRecordMatcher(L)), (N = Q)) : (N = L), t.addRoute(N, K)
    );
  }
  function v(L) {
    const Q = t.getRecordMatcher(L);
    Q && t.removeRoute(Q);
  }
  function S() {
    return t.getRoutes().map((L) => L.record);
  }
  function x(L) {
    return !!t.getRecordMatcher(L);
  }
  function R(L, Q) {
    if (((Q = de({}, Q || a.value)), typeof L == "string")) {
      const h = $o(n, L, Q.path),
        p = t.resolve({ path: h.path }, Q),
        k = o.createHref(h.fullPath);
      return de(h, p, {
        params: f(p.params),
        hash: Hr(h.hash),
        redirectedFrom: void 0,
        href: k,
      });
    }
    let K;
    if ("path" in L) K = de({}, L, { path: $o(n, L.path, Q.path).path });
    else {
      const h = de({}, L.params);
      for (const p in h) h[p] == null && delete h[p];
      (K = de({}, L, { params: d(L.params) })), (Q.params = d(Q.params));
    }
    const N = t.resolve(K, Q),
      ne = L.hash || "";
    N.params = u(f(N.params));
    const ve = op(r, de({}, L, { hash: Vp(ne), path: N.path })),
      ie = o.createHref(ve);
    return de(
      { fullPath: ve, hash: ne, query: r === aa ? Wp(L.query) : L.query || {} },
      N,
      { redirectedFrom: void 0, href: ie }
    );
  }
  function g(L) {
    return typeof L == "string" ? $o(n, L, a.value.path) : de({}, L);
  }
  function _(L, Q) {
    if (c !== L) return kn(8, { from: Q, to: L });
  }
  function O(L) {
    return w(L);
  }
  function B(L) {
    return O(de(g(L), { replace: !0 }));
  }
  function y(L) {
    const Q = L.matched[L.matched.length - 1];
    if (Q && Q.redirect) {
      const { redirect: K } = Q;
      let N = typeof K == "function" ? K(L) : K;
      return (
        typeof N == "string" &&
          ((N = N.includes("?") || N.includes("#") ? (N = g(N)) : { path: N }),
          (N.params = {})),
        de(
          { query: L.query, hash: L.hash, params: "path" in N ? {} : L.params },
          N
        )
      );
    }
  }
  function w(L, Q) {
    const K = (c = R(L)),
      N = a.value,
      ne = L.state,
      ve = L.force,
      ie = L.replace === !0,
      h = y(K);
    if (h)
      return w(
        de(g(h), {
          state: typeof h == "object" ? de({}, ne, h.state) : ne,
          force: ve,
          replace: ie,
        }),
        Q || K
      );
    const p = K;
    p.redirectedFrom = Q;
    let k;
    return (
      !ve && ip(r, N, K) && ((k = kn(16, { to: p, from: N })), V(N, N, !0, !1)),
      (k ? Promise.resolve(k) : q(p, N))
        .catch((A) => (gt(A) ? (gt(A, 2) ? A : fe(A)) : $(A, p, N)))
        .then((A) => {
          if (A) {
            if (gt(A, 2))
              return w(
                de({ replace: ie }, g(A.to), {
                  state: typeof A.to == "object" ? de({}, ne, A.to.state) : ne,
                  force: ve,
                }),
                Q || p
              );
          } else A = I(p, N, !0, ie, ne);
          return M(p, N, A), A;
        })
    );
  }
  function b(L, Q) {
    const K = _(L, Q);
    return K ? Promise.reject(K) : Promise.resolve();
  }
  function q(L, Q) {
    let K;
    const [N, ne, ve] = rg(L, Q);
    K = qo(N.reverse(), "beforeRouteLeave", L, Q);
    for (const h of N)
      h.leaveGuards.forEach((p) => {
        K.push(At(p, L, Q));
      });
    const ie = b.bind(null, L, Q);
    return (
      K.push(ie),
      un(K)
        .then(() => {
          K = [];
          for (const h of i.list()) K.push(At(h, L, Q));
          return K.push(ie), un(K);
        })
        .then(() => {
          K = qo(ne, "beforeRouteUpdate", L, Q);
          for (const h of ne)
            h.updateGuards.forEach((p) => {
              K.push(At(p, L, Q));
            });
          return K.push(ie), un(K);
        })
        .then(() => {
          K = [];
          for (const h of L.matched)
            if (h.beforeEnter && !Q.matched.includes(h))
              if (at(h.beforeEnter))
                for (const p of h.beforeEnter) K.push(At(p, L, Q));
              else K.push(At(h.beforeEnter, L, Q));
          return K.push(ie), un(K);
        })
        .then(
          () => (
            L.matched.forEach((h) => (h.enterCallbacks = {})),
            (K = qo(ve, "beforeRouteEnter", L, Q)),
            K.push(ie),
            un(K)
          )
        )
        .then(() => {
          K = [];
          for (const h of s.list()) K.push(At(h, L, Q));
          return K.push(ie), un(K);
        })
        .catch((h) => (gt(h, 8) ? h : Promise.reject(h)))
    );
  }
  function M(L, Q, K) {
    for (const N of l.list()) N(L, Q, K);
  }
  function I(L, Q, K, N, ne) {
    const ve = _(L, Q);
    if (ve) return ve;
    const ie = Q === St,
      h = mn ? history.state : {};
    K &&
      (N || ie
        ? o.replace(L.fullPath, de({ scroll: ie && h && h.scroll }, ne))
        : o.push(L.fullPath, ne)),
      (a.value = L),
      V(L, Q, K, ie),
      fe();
  }
  let E;
  function D() {
    E ||
      (E = o.listen((L, Q, K) => {
        if (!lt.listening) return;
        const N = R(L),
          ne = y(N);
        if (ne) {
          w(de(ne, { replace: !0 }), N).catch(Hn);
          return;
        }
        c = N;
        const ve = a.value;
        mn && hp(Gs(ve.fullPath, K.delta), ho()),
          q(N, ve)
            .catch((ie) =>
              gt(ie, 12)
                ? ie
                : gt(ie, 2)
                ? (w(ie.to, N)
                    .then((h) => {
                      gt(h, 20) &&
                        !K.delta &&
                        K.type === er.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Hn),
                  Promise.reject())
                : (K.delta && o.go(-K.delta, !1), $(ie, N, ve))
            )
            .then((ie) => {
              (ie = ie || I(N, ve, !1)),
                ie &&
                  (K.delta && !gt(ie, 8)
                    ? o.go(-K.delta, !1)
                    : K.type === er.pop && gt(ie, 20) && o.go(-1, !1)),
                M(N, ve, ie);
            })
            .catch(Hn);
      }));
  }
  let P = An(),
    X = An(),
    oe;
  function $(L, Q, K) {
    fe(L);
    const N = X.list();
    return (
      N.length ? N.forEach((ne) => ne(L, Q, K)) : console.error(L),
      Promise.reject(L)
    );
  }
  function W() {
    return oe && a.value !== St
      ? Promise.resolve()
      : new Promise((L, Q) => {
          P.add([L, Q]);
        });
  }
  function fe(L) {
    return (
      oe ||
        ((oe = !L),
        D(),
        P.list().forEach(([Q, K]) => (L ? K(L) : Q())),
        P.reset()),
      L
    );
  }
  function V(L, Q, K, N) {
    const { scrollBehavior: ne } = e;
    if (!mn || !ne) return Promise.resolve();
    const ve =
      (!K && mp(Gs(L.fullPath, 0))) ||
      ((N || !K) && history.state && history.state.scroll) ||
      null;
    return Be()
      .then(() => ne(L, Q, ve))
      .then((ie) => ie && dp(ie))
      .catch((ie) => $(ie, L, Q));
  }
  const ue = (L) => o.go(L);
  let he;
  const ge = new Set(),
    lt = {
      currentRoute: a,
      listening: !0,
      addRoute: m,
      removeRoute: v,
      hasRoute: x,
      getRoutes: S,
      resolve: R,
      options: e,
      push: O,
      replace: B,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: X.add,
      isReady: W,
      install(L) {
        const Q = this;
        L.component("RouterLink", Yp),
          L.component("RouterView", tg),
          (L.config.globalProperties.$router = Q),
          Object.defineProperty(L.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Yt(a),
          }),
          mn &&
            !he &&
            a.value === St &&
            ((he = !0), O(o.location).catch((ne) => {}));
        const K = {};
        for (const ne in St) K[ne] = C(() => a.value[ne]);
        L.provide(mo, Q), L.provide(zi, jt(K)), L.provide(li, a);
        const N = L.unmount;
        ge.add(L),
          (L.unmount = function () {
            ge.delete(L),
              ge.size < 1 &&
                ((c = St),
                E && E(),
                (E = null),
                (a.value = St),
                (he = !1),
                (oe = !1)),
              N();
          });
      },
    };
  return lt;
}
function un(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function rg(e, t) {
  const n = [],
    r = [],
    o = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((c) => Cn(c, l)) ? r.push(l) : n.push(l));
    const a = e.matched[s];
    a && (t.matched.find((c) => Cn(c, a)) || o.push(a));
  }
  return [n, r, o];
}
function bb() {
  return Ve(mo);
}
function yb() {
  return Ve(zi);
}
const og = [
    {
      path: "/",
      component: () =>
        Oe(
          () => import("./BareLayout.a659be04.js"),
          [
            "assets/BareLayout.a659be04.js",
            "assets/QLayout.5a2d3252.js",
            "assets/QResizeObserver.73d9f52c.js",
          ]
        ),
      children: [
        {
          name: "landing",
          path: "",
          component: () =>
            Oe(
              () => import("./LandingPage.59b77f2c.js"),
              [
                "assets/LandingPage.59b77f2c.js",
                "assets/LandingPage.4a295138.css",
                "assets/QPage.67806e81.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/login",
      component: () =>
        Oe(
          () => import("./BareLayout.a659be04.js"),
          [
            "assets/BareLayout.a659be04.js",
            "assets/QLayout.5a2d3252.js",
            "assets/QResizeObserver.73d9f52c.js",
          ]
        ),
      children: [
        {
          name: "login",
          path: "",
          component: () =>
            Oe(
              () => import("./LoginPage.b365b3bb.js"),
              [
                "assets/LoginPage.b365b3bb.js",
                "assets/HomePage.c35f995c.css",
                "assets/QPage.67806e81.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/register",
      component: () =>
        Oe(
          () => import("./BareLayout.a659be04.js"),
          [
            "assets/BareLayout.a659be04.js",
            "assets/QLayout.5a2d3252.js",
            "assets/QResizeObserver.73d9f52c.js",
          ]
        ),
      children: [
        {
          name: "register",
          path: "",
          component: () =>
            Oe(
              () => import("./RegisterPage.782d94a5.js"),
              [
                "assets/RegisterPage.782d94a5.js",
                "assets/RegisterPage.016ca936.css",
                "assets/QPage.67806e81.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/home",
      component: () =>
        Oe(
          () => import("./NavTabLayout.e5528638.js"),
          [
            "assets/NavTabLayout.e5528638.js",
            "assets/logo.9c1d7646.js",
            "assets/QResizeObserver.73d9f52c.js",
            "assets/QSpace.4b59fa38.js",
            "assets/QTabs.136abc1a.js",
            "assets/rtl.b51694b1.js",
            "assets/QLayout.5a2d3252.js",
          ]
        ),
      children: [
        {
          name: "home",
          path: "",
          component: () =>
            Oe(
              () => import("./HomePage.89236b72.js"),
              [
                "assets/HomePage.89236b72.js",
                "assets/HomePage.c35f995c.css",
                "assets/QPage.67806e81.js",
                "assets/rtl.b51694b1.js",
                "assets/format.7874108f.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/calendar",
      component: () =>
        Oe(
          () => import("./NavTabLayout.e5528638.js"),
          [
            "assets/NavTabLayout.e5528638.js",
            "assets/logo.9c1d7646.js",
            "assets/QResizeObserver.73d9f52c.js",
            "assets/QSpace.4b59fa38.js",
            "assets/QTabs.136abc1a.js",
            "assets/rtl.b51694b1.js",
            "assets/QLayout.5a2d3252.js",
          ]
        ),
      children: [
        {
          name: "calendar",
          path: "",
          component: () =>
            Oe(
              () => import("./CalendarPage.5a083653.js"),
              [
                "assets/CalendarPage.5a083653.js",
                "assets/CalendarPage.ed6da044.css",
                "assets/QPage.67806e81.js",
                "assets/ClosePopup.b9fb2219.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/analysis",
      component: () =>
        Oe(
          () => import("./NavTabLayout.e5528638.js"),
          [
            "assets/NavTabLayout.e5528638.js",
            "assets/logo.9c1d7646.js",
            "assets/QResizeObserver.73d9f52c.js",
            "assets/QSpace.4b59fa38.js",
            "assets/QTabs.136abc1a.js",
            "assets/rtl.b51694b1.js",
            "assets/QLayout.5a2d3252.js",
          ]
        ),
      children: [
        {
          name: "analysis",
          path: "",
          component: () =>
            Oe(
              () => import("./AnalysisPage.a3e79fdf.js"),
              [
                "assets/AnalysisPage.a3e79fdf.js",
                "assets/HomePage.c35f995c.css",
                "assets/QPage.67806e81.js",
                "assets/index.301b40db.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/workout/:muscleGroupId",
      component: () =>
        Oe(
          () => import("./NavLayout.6c3a9350.js"),
          [
            "assets/NavLayout.6c3a9350.js",
            "assets/logo.9c1d7646.js",
            "assets/QResizeObserver.73d9f52c.js",
            "assets/QSpace.4b59fa38.js",
            "assets/QLayout.5a2d3252.js",
          ]
        ),
      children: [
        {
          name: "workout",
          path: "",
          component: () =>
            Oe(
              () => import("./WorkoutPage.7081cca2.js"),
              [
                "assets/WorkoutPage.7081cca2.js",
                "assets/WorkoutPage.5988ae5c.css",
                "assets/QTabs.136abc1a.js",
                "assets/QResizeObserver.73d9f52c.js",
                "assets/rtl.b51694b1.js",
                "assets/format.7874108f.js",
                "assets/QSpace.4b59fa38.js",
                "assets/QPage.67806e81.js",
                "assets/ClosePopup.b9fb2219.js",
                "assets/index.301b40db.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => Oe(() => import("./ErrorNotFound.8c83ff6d.js"), []),
    },
  ],
  Sr = ng({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: og,
    history: bp("/"),
  });
Sr.beforeEach(async (e) => {
  const n = !["/", "/login", "/register"].includes(e.path),
    r = Eu();
  if (n && !r.isLoggedIn) return "/login";
});
async function ig(e, t) {
  const n = e(ep);
  n.use(ah, t);
  const r = typeof Oo == "function" ? await Oo({}) : Oo;
  n.use(r);
  const o = pt(typeof Sr == "function" ? await Sr({ store: r }) : Sr);
  return (
    r.use(({ store: i }) => {
      i.router = o;
    }),
    { app: n, store: r, router: o }
  );
}
const ui = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  ir = { size: String };
function sr(e, t = ui) {
  return C(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  );
}
const Ie = (e) => pt(Gr(e)),
  sg = (e) => pt(e);
function rt(e, t) {
  return (e !== void 0 && e()) || t;
}
function _b(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Qt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function ag(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function wb(e, t, n, r, o, i) {
  t.key = r + o;
  const s = T(e, t, n);
  return o === !0 ? El(s, i()) : s;
}
const ha = "0 0 24 24",
  ma = (e) => e,
  Mo = (e) => `ionicons ${e}`,
  Bu = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": ma,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": Mo,
    "ion-ios": Mo,
    "ion-logo": Mo,
    "iconfont ": ma,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
  },
  Iu = { o_: "-outlined", r_: "-round", s_: "-sharp" },
  ju = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" },
  lg = new RegExp("^(" + Object.keys(Bu).join("|") + ")"),
  ug = new RegExp("^(" + Object.keys(Iu).join("|") + ")"),
  pa = new RegExp("^(" + Object.keys(ju).join("|") + ")"),
  cg = /^[Mm]\s?[-+]?\.?\d/,
  fg = /^img:/,
  dg = /^svguse:/,
  hg = /^ion-/,
  mg = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var xt = Ie({
    name: "QIcon",
    props: {
      ...ir,
      tag: { type: String, default: "i" },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = we(),
        r = sr(e),
        o = C(
          () =>
            "q-icon" +
            (e.left === !0 ? " on-left" : "") +
            (e.right === !0 ? " on-right" : "") +
            (e.color !== void 0 ? ` text-${e.color}` : "")
        ),
        i = C(() => {
          let s,
            l = e.name;
          if (l === "none" || !l) return { none: !0 };
          if (n.iconMapFn !== null) {
            const u = n.iconMapFn(l);
            if (u !== void 0)
              if (u.icon !== void 0) {
                if (((l = u.icon), l === "none" || !l)) return { none: !0 };
              } else
                return {
                  cls: u.cls,
                  content: u.content !== void 0 ? u.content : " ",
                };
          }
          if (cg.test(l) === !0) {
            const [u, d = ha] = l.split("|");
            return {
              svg: !0,
              viewBox: d,
              nodes: u.split("&&").map((f) => {
                const [m, v, S] = f.split("@@");
                return T("path", { style: v, d: m, transform: S });
              }),
            };
          }
          if (fg.test(l) === !0) return { img: !0, src: l.substring(4) };
          if (dg.test(l) === !0) {
            const [u, d = ha] = l.split("|");
            return { svguse: !0, src: u.substring(7), viewBox: d };
          }
          let a = " ";
          const c = l.match(lg);
          if (c !== null) s = Bu[c[1]](l);
          else if (mg.test(l) === !0) s = l;
          else if (hg.test(l) === !0)
            s = `ionicons ion-${
              n.platform.is.ios === !0 ? "ios" : "md"
            }${l.substring(3)}`;
          else if (pa.test(l) === !0) {
            s = "notranslate material-symbols";
            const u = l.match(pa);
            u !== null && ((l = l.substring(6)), (s += ju[u[1]])), (a = l);
          } else {
            s = "notranslate material-icons";
            const u = l.match(ug);
            u !== null && ((l = l.substring(2)), (s += Iu[u[1]])), (a = l);
          }
          return { cls: s, content: a };
        });
      return () => {
        const s = {
          class: o.value,
          style: r.value,
          "aria-hidden": "true",
          role: "presentation",
        };
        return i.value.none === !0
          ? T(e.tag, s, rt(t.default))
          : i.value.img === !0
          ? T("span", s, Qt(t.default, [T("img", { src: i.value.src })]))
          : i.value.svg === !0
          ? T(
              "span",
              s,
              Qt(t.default, [
                T(
                  "svg",
                  { viewBox: i.value.viewBox || "0 0 24 24" },
                  i.value.nodes
                ),
              ])
            )
          : i.value.svguse === !0
          ? T(
              "span",
              s,
              Qt(t.default, [
                T("svg", { viewBox: i.value.viewBox }, [
                  T("use", { "xlink:href": i.value.src }),
                ]),
              ])
            )
          : (i.value.cls !== void 0 && (s.class += " " + i.value.cls),
            T(e.tag, s, Qt(t.default, [i.value.content])));
      };
    },
  }),
  pg = Ie({
    name: "QAvatar",
    props: {
      ...ir,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = sr(e),
        r = C(
          () =>
            "q-avatar" +
            (e.color ? ` bg-${e.color}` : "") +
            (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") +
            (e.square === !0
              ? " q-avatar--square"
              : e.rounded === !0
              ? " rounded-borders"
              : "")
        ),
        o = C(() => (e.fontSize ? { fontSize: e.fontSize } : null));
      return () => {
        const i = e.icon !== void 0 ? [T(xt, { name: e.icon })] : void 0;
        return T("div", { class: r.value, style: n.value }, [
          T(
            "div",
            {
              class: "q-avatar__content row flex-center overflow-hidden",
              style: o.value,
            },
            ag(t.default, i)
          ),
        ]);
      };
    },
  });
const gg = { size: { type: [Number, String], default: "1em" }, color: String };
function vg(e) {
  return {
    cSize: C(() => (e.size in ui ? `${ui[e.size]}px` : e.size)),
    classes: C(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
var tr = Ie({
  name: "QSpinner",
  props: { ...gg, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: n } = vg(e);
    return () =>
      T(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          T("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10",
          }),
        ]
      );
  },
});
function ci(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function bg(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = Yt(e);
  if (t) return t.$el || t;
}
function yg(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
function _g(e, t = 250) {
  let n = !1,
    r;
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1;
        }, t),
        (r = e.apply(this, arguments))),
      r
    );
  };
}
function ga(e, t, n, r) {
  n.modifiers.stop === !0 && Ir(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || r === !0;
  const s = document.createElement("span"),
    l = document.createElement("span"),
    a = Dd(e),
    { left: c, top: u, width: d, height: f } = t.getBoundingClientRect(),
    m = Math.sqrt(d * d + f * f),
    v = m / 2,
    S = `${(d - m) / 2}px`,
    x = i ? S : `${a.left - c - v}px`,
    R = `${(f - m) / 2}px`,
    g = i ? R : `${a.top - u - v}px`;
  (l.className = "q-ripple__inner"),
    ci(l, {
      height: `${m}px`,
      width: `${m}px`,
      transform: `translate3d(${x},${g},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (s.className = `q-ripple${o ? " text-" + o : ""}`),
    s.setAttribute("dir", "ltr"),
    s.appendChild(l),
    t.appendChild(s);
  const _ = () => {
    s.remove(), clearTimeout(O);
  };
  n.abort.push(_);
  let O = setTimeout(() => {
    l.classList.add("q-ripple__inner--enter"),
      (l.style.transform = `translate3d(${S},${R},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (O = setTimeout(() => {
        l.classList.remove("q-ripple__inner--enter"),
          l.classList.add("q-ripple__inner--leave"),
          (l.style.opacity = 0),
          (O = setTimeout(() => {
            s.remove(), n.abort.splice(n.abort.indexOf(_), 1);
          }, 275));
      }, 250));
  }, 50);
}
function va(e, { modifiers: t, value: n, arg: r }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || r,
    keyCodes: [].concat(o.keyCodes || 13),
  };
}
var wg = sg({
  name: "ripple",
  beforeMount(e, t) {
    const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (n.ripple === !1) return;
    const r = {
      cfg: n,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(o) {
        r.enabled === !0 &&
          o.qSkipRipple !== !0 &&
          o.type === (r.modifiers.early === !0 ? "pointerdown" : "click") &&
          ga(o, e, r, o.qKeyEvent === !0);
      },
      keystart: _g((o) => {
        r.enabled === !0 &&
          o.qSkipRipple !== !0 &&
          Gn(o, r.modifiers.keyCodes) === !0 &&
          o.type === `key${r.modifiers.early === !0 ? "down" : "up"}` &&
          ga(o, e, r, !0);
      }, 300),
    };
    va(r, t),
      (e.__qripple = r),
      Hd(r, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"],
      ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const n = e.__qripple;
      n !== void 0 &&
        ((n.enabled = t.value !== !1),
        n.enabled === !0 && Object(t.value) === t.value && va(n, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((n) => {
        n();
      }),
      zd(t, "main"),
      delete e._qripple);
  },
});
const Fu = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  xg = Object.keys(Fu),
  Nu = { align: { type: String, validator: (e) => xg.includes(e) } };
function Du(e) {
  return C(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Fu[t]}`;
  });
}
function Rr(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function Vu(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        Vu(e, n);
      })
    : e.add(t);
}
function xb(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      Vu(t, n);
    }),
    Array.from(t)
  );
}
function Hu(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function zu(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function ba(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function ya(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cg(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (
      Array.isArray(o) === !1 ||
      o.length !== r.length ||
      r.some((i, s) => i !== o[s])
    )
      return !1;
  }
  return !0;
}
function _a(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function kg(e, t) {
  return Array.isArray(e) === !0
    ? _a(e, t)
    : Array.isArray(t) === !0
    ? _a(t, e)
    : e === t;
}
function Eg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (kg(e[n], t[n]) === !1) return !1;
  return !0;
}
const Sg = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: "q-router-link--active" },
  exactActiveClass: { type: String, default: "q-router-link--exact-active" },
  href: String,
  target: String,
  disable: Boolean,
};
function Rg({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = we(),
    { props: r, proxy: o, emit: i } = n,
    s = Hu(n),
    l = C(() => r.disable !== !0 && r.href !== void 0),
    a = C(
      t === !0
        ? () =>
            s === !0 &&
            r.disable !== !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
        : () =>
            s === !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
    ),
    c = C(() => (a.value === !0 ? g(r.to) : null)),
    u = C(() => c.value !== null),
    d = C(() => l.value === !0 || u.value === !0),
    f = C(() => (r.type === "a" || d.value === !0 ? "a" : r.tag || e || "div")),
    m = C(() =>
      l.value === !0
        ? { href: r.href, target: r.target }
        : u.value === !0
        ? { href: c.value.href, target: r.target }
        : {}
    ),
    v = C(() => {
      if (u.value === !1) return -1;
      const { matched: B } = c.value,
        { length: y } = B,
        w = B[y - 1];
      if (w === void 0) return -1;
      const b = o.$route.matched;
      if (b.length === 0) return -1;
      const q = b.findIndex(ya.bind(null, w));
      if (q > -1) return q;
      const M = ba(B[y - 2]);
      return y > 1 && ba(w) === M && b[b.length - 1].path !== M
        ? b.findIndex(ya.bind(null, B[y - 2]))
        : q;
    }),
    S = C(
      () =>
        u.value === !0 && v.value !== -1 && Cg(o.$route.params, c.value.params)
    ),
    x = C(
      () =>
        S.value === !0 &&
        v.value === o.$route.matched.length - 1 &&
        Eg(o.$route.params, c.value.params)
    ),
    R = C(() =>
      u.value === !0
        ? x.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
          ? ""
          : S.value === !0
          ? ` ${r.activeClass}`
          : ""
        : ""
    );
  function g(B) {
    try {
      return o.$router.resolve(B);
    } catch {}
    return null;
  }
  function _(
    B,
    { returnRouterError: y, to: w = r.to, replace: b = r.replace } = {}
  ) {
    if (r.disable === !0) return B.preventDefault(), Promise.resolve(!1);
    if (
      B.metaKey ||
      B.altKey ||
      B.ctrlKey ||
      B.shiftKey ||
      (B.button !== void 0 && B.button !== 0) ||
      r.target === "_blank"
    )
      return Promise.resolve(!1);
    B.preventDefault();
    const q = o.$router[b === !0 ? "replace" : "push"](w);
    return y === !0 ? q : q.then(() => {}).catch(() => {});
  }
  function O(B) {
    if (u.value === !0) {
      const y = (w) => _(B, w);
      i("click", B, y), B.defaultPrevented !== !0 && y();
    } else i("click", B);
  }
  return {
    hasRouterLink: u,
    hasHrefLink: l,
    hasLink: d,
    linkTag: f,
    resolvedLink: c,
    linkIsActive: S,
    linkIsExactActive: x,
    linkClass: R,
    linkAttrs: m,
    getLink: g,
    navigateToRouterLink: _,
    navigateOnClick: O,
  };
}
const wa = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  Pg = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Tg = ["button", "submit", "reset"],
  Og = /[^\s]\/[^\s]/,
  Ag = ["flat", "outline", "push", "unelevated"],
  $g = (e, t) =>
    e.flat === !0
      ? "flat"
      : e.outline === !0
      ? "outline"
      : e.push === !0
      ? "push"
      : e.unelevated === !0
      ? "unelevated"
      : t,
  qg = {
    ...ir,
    ...Sg,
    type: { type: String, default: "button" },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...Ag.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...Nu.align, default: "center" },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function Mg(e) {
  const t = sr(e, Pg),
    n = Du(e),
    {
      hasRouterLink: r,
      hasLink: o,
      linkTag: i,
      linkAttrs: s,
      navigateOnClick: l,
    } = Rg({ fallbackTag: "button" }),
    a = C(() => {
      const x = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, x, {
            padding: e.padding
              .split(/\s+/)
              .map((R) => (R in wa ? wa[R] + "px" : R))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : x;
    }),
    c = C(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    u = C(() => e.disable !== !0 && e.loading !== !0),
    d = C(() => (u.value === !0 ? e.tabindex || 0 : -1)),
    f = C(() => $g(e, "standard")),
    m = C(() => {
      const x = { tabindex: d.value };
      return (
        o.value === !0
          ? Object.assign(x, s.value)
          : Tg.includes(e.type) === !0 && (x.type = e.type),
        i.value === "a"
          ? (e.disable === !0
              ? (x["aria-disabled"] = "true")
              : x.href === void 0 && (x.role = "button"),
            r.value !== !0 && Og.test(e.type) === !0 && (x.type = e.type))
          : e.disable === !0 &&
            ((x.disabled = ""), (x["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(x, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        x
      );
    }),
    v = C(() => {
      let x;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (x = `text-${e.textColor || e.color}`)
          : (x = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (x = `text-${e.textColor}`);
      const R =
        e.round === !0
          ? "round"
          : `rectangle${
              c.value === !0
                ? " q-btn--rounded"
                : e.square === !0
                ? " q-btn--square"
                : ""
            }`;
      return (
        `q-btn--${f.value} q-btn--${R}` +
        (x !== void 0 ? " " + x : "") +
        (u.value === !0
          ? " q-btn--actionable q-focusable q-hoverable"
          : e.disable === !0
          ? " disabled"
          : "") +
        (e.fab === !0
          ? " q-btn--fab"
          : e.fabMini === !0
          ? " q-btn--fab-mini"
          : "") +
        (e.noCaps === !0 ? " q-btn--no-uppercase" : "") +
        (e.dense === !0 ? " q-btn--dense" : "") +
        (e.stretch === !0 ? " no-border-radius self-stretch" : "") +
        (e.glossy === !0 ? " glossy" : "") +
        (e.square ? " q-btn--square" : "")
      );
    }),
    S = C(
      () =>
        n.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : "")
    );
  return {
    classes: v,
    style: a,
    innerClasses: S,
    attributes: m,
    hasLink: o,
    linkTag: i,
    navigateOnClick: l,
    isActionable: u,
  };
}
const { passiveCapture: Ke } = Fe;
let cn = null,
  fn = null,
  dn = null;
var fi = Ie({
  name: "QBtn",
  props: {
    ...qg,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = we(),
      {
        classes: o,
        style: i,
        innerClasses: s,
        attributes: l,
        hasLink: a,
        linkTag: c,
        navigateOnClick: u,
        isActionable: d,
      } = Mg(e),
      f = ce(null),
      m = ce(null);
    let v = null,
      S,
      x;
    const R = C(() => e.label !== void 0 && e.label !== null && e.label !== ""),
      g = C(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: a.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      _ = C(() => ({ center: e.round })),
      O = C(() => {
        const P = Math.max(0, Math.min(100, e.percentage));
        return P > 0
          ? {
              transition: "transform 0.6s",
              transform: `translateX(${P - 100}%)`,
            }
          : {};
      }),
      B = C(() => {
        if (e.loading === !0)
          return {
            onMousedown: D,
            onTouchstart: D,
            onClick: D,
            onKeydown: D,
            onKeyup: D,
          };
        if (d.value === !0) {
          const P = { onClick: w, onKeydown: b, onMousedown: M };
          if (r.$q.platform.has.touch === !0) {
            const X = e.onTouchstart !== void 0 ? "" : "Passive";
            P[`onTouchstart${X}`] = q;
          }
          return P;
        }
        return { onClick: Qe };
      }),
      y = C(() => ({
        ref: f,
        class: "q-btn q-btn-item non-selectable no-outline " + o.value,
        style: i.value,
        ...l.value,
        ...B.value,
      }));
    function w(P) {
      if (f.value !== null) {
        if (P !== void 0) {
          if (P.defaultPrevented === !0) return;
          const X = document.activeElement;
          if (
            e.type === "submit" &&
            X !== document.body &&
            f.value.contains(X) === !1 &&
            X.contains(f.value) === !1
          ) {
            f.value.focus();
            const oe = () => {
              document.removeEventListener("keydown", Qe, !0),
                document.removeEventListener("keyup", oe, Ke),
                f.value !== null && f.value.removeEventListener("blur", oe, Ke);
            };
            document.addEventListener("keydown", Qe, !0),
              document.addEventListener("keyup", oe, Ke),
              f.value.addEventListener("blur", oe, Ke);
          }
        }
        u(P);
      }
    }
    function b(P) {
      f.value !== null &&
        (n("keydown", P),
        Gn(P, [13, 32]) === !0 &&
          fn !== f.value &&
          (fn !== null && E(),
          P.defaultPrevented !== !0 &&
            (f.value.focus(),
            (fn = f.value),
            f.value.classList.add("q-btn--active"),
            document.addEventListener("keyup", I, !0),
            f.value.addEventListener("blur", I, Ke)),
          Qe(P)));
    }
    function q(P) {
      f.value !== null &&
        (n("touchstart", P),
        P.defaultPrevented !== !0 &&
          (cn !== f.value &&
            (cn !== null && E(),
            (cn = f.value),
            (v = P.target),
            v.addEventListener("touchcancel", I, Ke),
            v.addEventListener("touchend", I, Ke)),
          (S = !0),
          clearTimeout(x),
          (x = setTimeout(() => {
            S = !1;
          }, 200))));
    }
    function M(P) {
      f.value !== null &&
        ((P.qSkipRipple = S === !0),
        n("mousedown", P),
        P.defaultPrevented !== !0 &&
          dn !== f.value &&
          (dn !== null && E(),
          (dn = f.value),
          f.value.classList.add("q-btn--active"),
          document.addEventListener("mouseup", I, Ke)));
    }
    function I(P) {
      if (
        f.value !== null &&
        !(
          P !== void 0 &&
          P.type === "blur" &&
          document.activeElement === f.value
        )
      ) {
        if (P !== void 0 && P.type === "keyup") {
          if (fn === f.value && Gn(P, [13, 32]) === !0) {
            const X = new MouseEvent("click", P);
            (X.qKeyEvent = !0),
              P.defaultPrevented === !0 && $t(X),
              P.cancelBubble === !0 && Ir(X),
              f.value.dispatchEvent(X),
              Qe(P),
              (P.qKeyEvent = !0);
          }
          n("keyup", P);
        }
        E();
      }
    }
    function E(P) {
      const X = m.value;
      P !== !0 &&
        (cn === f.value || dn === f.value) &&
        X !== null &&
        X !== document.activeElement &&
        (X.setAttribute("tabindex", -1), X.focus()),
        cn === f.value &&
          (v !== null &&
            (v.removeEventListener("touchcancel", I, Ke),
            v.removeEventListener("touchend", I, Ke)),
          (cn = v = null)),
        dn === f.value &&
          (document.removeEventListener("mouseup", I, Ke), (dn = null)),
        fn === f.value &&
          (document.removeEventListener("keyup", I, !0),
          f.value !== null && f.value.removeEventListener("blur", I, Ke),
          (fn = null)),
        f.value !== null && f.value.classList.remove("q-btn--active");
    }
    function D(P) {
      Qe(P), (P.qSkipRipple = !0);
    }
    return (
      Ye(() => {
        E(!0);
      }),
      Object.assign(r, { click: w }),
      () => {
        let P = [];
        e.icon !== void 0 &&
          P.push(
            T(xt, {
              name: e.icon,
              left: e.stack === !1 && R.value === !0,
              role: "img",
              "aria-hidden": "true",
            })
          ),
          R.value === !0 && P.push(T("span", { class: "block" }, [e.label])),
          (P = Qt(t.default, P)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            P.push(
              T(xt, {
                name: e.iconRight,
                right: e.stack === !1 && R.value === !0,
                role: "img",
                "aria-hidden": "true",
              })
            );
        const X = [T("span", { class: "q-focus-helper", ref: m })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            X.push(
              T(
                "span",
                {
                  class:
                    "q-btn__progress absolute-full overflow-hidden" +
                    (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                },
                [
                  T("span", {
                    class: "q-btn__progress-indicator fit block",
                    style: O.value,
                  }),
                ]
              )
            ),
          X.push(
            T(
              "span",
              {
                class:
                  "q-btn__content text-center col items-center q-anchor--skip " +
                  s.value,
              },
              P
            )
          ),
          e.loading !== null &&
            X.push(
              T(xn, { name: "q-transition--fade" }, () =>
                e.loading === !0
                  ? [
                      T(
                        "span",
                        {
                          key: "loading",
                          class: "absolute-full flex flex-center",
                        },
                        t.loading !== void 0 ? t.loading() : [T(tr)]
                      ),
                    ]
                  : null
              )
            ),
          El(T(c.value, y.value, X), [[wg, g.value, void 0, _.value]])
        );
      }
    );
  },
});
let Lg = document.body;
function Ui(e) {
  const t = document.createElement("div");
  if ((e !== void 0 && (t.id = e), Fr.globalNodes !== void 0)) {
    const n = Fr.globalNodes.class;
    n !== void 0 && (t.className = n);
  }
  return Lg.appendChild(t), t;
}
function Uu(e) {
  e.remove();
}
let Bg = 0;
const Pr = {},
  Tr = {},
  Ge = {},
  Ku = {},
  Ig = /^\s*$/,
  Wu = [],
  Ki = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "top",
    "bottom",
    "left",
    "right",
    "center",
  ],
  jg = ["top-left", "top-right", "bottom-left", "bottom-right"],
  pn = {
    positive: { icon: (e) => e.iconSet.type.positive, color: "positive" },
    negative: { icon: (e) => e.iconSet.type.negative, color: "negative" },
    warning: {
      icon: (e) => e.iconSet.type.warning,
      color: "warning",
      textColor: "dark",
    },
    info: { icon: (e) => e.iconSet.type.info, color: "info" },
    ongoing: { group: !1, timeout: 0, spinner: !0, color: "grey-8" },
  };
function Qu(e, t, n) {
  if (!e) return $n("parameter required");
  let r;
  const o = { textColor: "white" };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(o, Pr),
    ht(e) === !1 &&
      (o.type && Object.assign(o, pn[o.type]), (e = { message: e })),
    Object.assign(o, pn[e.type || o.type], e),
    typeof o.icon == "function" && (o.icon = o.icon(t)),
    o.spinner
      ? (o.spinner === !0 && (o.spinner = tr), (o.spinner = pt(o.spinner)))
      : (o.spinner = !1),
    (o.meta = {
      hasMedia: Boolean(o.spinner !== !1 || o.icon || o.avatar),
      hasText: xa(o.message) || xa(o.caption),
    }),
    o.position)
  ) {
    if (Ki.includes(o.position) === !1) return $n("wrong position", e);
  } else o.position = "bottom";
  if (o.timeout === void 0) o.timeout = 5e3;
  else {
    const a = parseInt(o.timeout, 10);
    if (isNaN(a) || a < 0) return $n("wrong timeout", e);
    o.timeout = a;
  }
  o.timeout === 0
    ? (o.progress = !1)
    : o.progress === !0 &&
      ((o.meta.progressClass =
        "q-notification__progress" +
        (o.progressClass ? ` ${o.progressClass}` : "")),
      (o.meta.progressStyle = { animationDuration: `${o.timeout + 1e3}ms` }));
  const i = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(Pr.actions) === !0
          ? Pr.actions
          : []
      )
      .concat(
        pn[e.type] !== void 0 && Array.isArray(pn[e.type].actions) === !0
          ? pn[e.type].actions
          : []
      ),
    { closeBtn: s } = o;
  if (
    (s && i.push({ label: typeof s == "string" ? s : t.lang.label.close }),
    (o.actions = i.map(({ handler: a, noDismiss: c, ...u }) => ({
      flat: !0,
      ...u,
      onClick:
        typeof a == "function"
          ? () => {
              a(), c !== !0 && l();
            }
          : () => {
              l();
            },
    }))),
    o.multiLine === void 0 && (o.multiLine = o.actions.length > 1),
    Object.assign(o.meta, {
      class:
        `q-notification row items-stretch q-notification--${
          o.multiLine === !0 ? "multi-line" : "standard"
        }` +
        (o.color !== void 0 ? ` bg-${o.color}` : "") +
        (o.textColor !== void 0 ? ` text-${o.textColor}` : "") +
        (o.classes !== void 0 ? ` ${o.classes}` : ""),
      wrapperClass:
        "q-notification__wrapper col relative-position border-radius-inherit " +
        (o.multiLine === !0
          ? "column no-wrap justify-center"
          : "row items-center"),
      contentClass:
        "q-notification__content row items-center" +
        (o.multiLine === !0 ? "" : " col"),
      leftClass: o.meta.hasText === !0 ? "additional" : "single",
      attrs: { role: "alert", ...o.attrs },
    }),
    o.group === !1
      ? ((o.group = void 0), (o.meta.group = void 0))
      : ((o.group === void 0 || o.group === !0) &&
          (o.group = [o.message, o.caption, o.multiline]
            .concat(o.actions.map((a) => `${a.label}*${a.icon}`))
            .join("|")),
        (o.meta.group = o.group + "|" + o.position)),
    o.actions.length === 0
      ? (o.actions = void 0)
      : (o.meta.actionsClass =
          "q-notification__actions row items-center " +
          (o.multiLine === !0 ? "justify-end" : "col-auto") +
          (o.meta.hasMedia === !0
            ? " q-notification__actions--with-media"
            : "")),
    n !== void 0)
  ) {
    clearTimeout(n.notif.meta.timer), (o.meta.uid = n.notif.meta.uid);
    const a = Ge[o.position].value.indexOf(n.notif);
    Ge[o.position].value[a] = o;
  } else {
    const a = Tr[o.meta.group];
    if (a === void 0) {
      if (
        ((o.meta.uid = Bg++),
        (o.meta.badge = 1),
        ["left", "right", "center"].indexOf(o.position) !== -1)
      )
        Ge[o.position].value.splice(
          Math.floor(Ge[o.position].value.length / 2),
          0,
          o
        );
      else {
        const c = o.position.indexOf("top") > -1 ? "unshift" : "push";
        Ge[o.position].value[c](o);
      }
      o.group !== void 0 && (Tr[o.meta.group] = o);
    } else {
      if ((clearTimeout(a.meta.timer), o.badgePosition !== void 0)) {
        if (jg.includes(o.badgePosition) === !1)
          return $n("wrong badgePosition", e);
      } else
        o.badgePosition = `top-${
          o.position.indexOf("left") > -1 ? "right" : "left"
        }`;
      (o.meta.uid = a.meta.uid),
        (o.meta.badge = a.meta.badge + 1),
        (o.meta.badgeClass =
          `q-notification__badge q-notification__badge--${o.badgePosition}` +
          (o.badgeColor !== void 0 ? ` bg-${o.badgeColor}` : "") +
          (o.badgeTextColor !== void 0 ? ` text-${o.badgeTextColor}` : "") +
          (o.badgeClass ? ` ${o.badgeClass}` : ""));
      const c = Ge[o.position].value.indexOf(a);
      Ge[o.position].value[c] = Tr[o.meta.group] = o;
    }
  }
  const l = () => {
    Fg(o), (r = void 0);
  };
  if (
    (o.timeout > 0 &&
      (o.meta.timer = setTimeout(() => {
        l();
      }, o.timeout + 1e3)),
    o.group !== void 0)
  )
    return (a) => {
      a !== void 0
        ? $n("trying to update a grouped one which is forbidden", e)
        : l();
    };
  if (((r = { dismiss: l, config: e, notif: o }), n !== void 0)) {
    Object.assign(n, r);
    return;
  }
  return (a) => {
    if (r !== void 0)
      if (a === void 0) r.dismiss();
      else {
        const c = Object.assign({}, r.config, a, {
          group: !1,
          position: o.position,
        });
        Qu(c, t, r);
      }
  };
}
function Fg(e) {
  clearTimeout(e.meta.timer);
  const t = Ge[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Tr[e.meta.group];
    const n = Wu["" + e.meta.uid];
    if (n) {
      const { width: r, height: o } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = o);
    }
    Ge[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function xa(e) {
  return e != null && Ig.test(e) !== !0;
}
function $n(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function Ng() {
  return Ie({
    name: "QNotifications",
    devtools: { hide: !0 },
    setup() {
      return () =>
        T(
          "div",
          { class: "q-notifications" },
          Ki.map((e) =>
            T(
              Pd,
              {
                key: e,
                class: Ku[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                Ge[e].value.map((t) => {
                  const n = t.meta,
                    r = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? r.push(
                            T(t.spinner, {
                              class:
                                "q-notification__spinner q-notification__spinner--" +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? r.push(
                            T(xt, {
                              class:
                                "q-notification__icon q-notification__icon--" +
                                n.leftClass,
                              name: t.icon,
                              color: t.iconColor,
                              size: t.iconSize,
                              role: "img",
                            })
                          )
                        : t.avatar &&
                          r.push(
                            T(
                              pg,
                              {
                                class:
                                  "q-notification__avatar q-notification__avatar--" +
                                  n.leftClass,
                              },
                              () =>
                                T("img", {
                                  src: t.avatar,
                                  "aria-hidden": "true",
                                })
                            )
                          )),
                    n.hasText === !0)
                  ) {
                    let i;
                    const s = { class: "q-notification__message col" };
                    if (t.html === !0)
                      s.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    else {
                      const l = [t.message];
                      i = t.caption
                        ? [
                            T("div", l),
                            T("div", { class: "q-notification__caption" }, [
                              t.caption,
                            ]),
                          ]
                        : l;
                    }
                    r.push(T("div", s, i));
                  }
                  const o = [T("div", { class: n.contentClass }, r)];
                  return (
                    t.progress === !0 &&
                      o.push(
                        T("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      o.push(
                        T(
                          "div",
                          { class: n.actionsClass },
                          t.actions.map((i) => T(fi, i))
                        )
                      ),
                    n.badge > 1 &&
                      o.push(
                        T(
                          "div",
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    T(
                      "div",
                      {
                        ref: (i) => {
                          Wu["" + n.uid] = i;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [T("div", { class: n.wrapperClass }, o)]
                    )
                  );
                })
            )
          )
        );
    },
  });
}
var Dg = {
  setDefaults(e) {
    ht(e) === !0 && Object.assign(Pr, e);
  },
  registerType(e, t) {
    ht(t) === !0 && (pn[e] = t);
  },
  install({ $q: e, parentApp: t }) {
    if (
      ((e.notify = this.create = (n) => Qu(n, e)),
      (e.notify.setDefaults = this.setDefaults),
      (e.notify.registerType = this.registerType),
      e.config.notify !== void 0 && this.setDefaults(e.config.notify),
      this.__installed !== !0)
    ) {
      Ki.forEach((r) => {
        Ge[r] = ce([]);
        const o =
            ["left", "center", "right"].includes(r) === !0
              ? "center"
              : r.indexOf("top") > -1
              ? "top"
              : "bottom",
          i =
            r.indexOf("left") > -1
              ? "start"
              : r.indexOf("right") > -1
              ? "end"
              : "center",
          s = ["left", "right"].includes(r)
            ? `items-${r === "left" ? "start" : "end"} justify-center`
            : r === "center"
            ? "flex-center"
            : `items-${i}`;
        Ku[
          r
        ] = `q-notifications__list q-notifications__list--${o} fixed column no-wrap ${s}`;
      });
      const n = Ui("q-notify");
      tu(Ng(), t).mount(n);
    }
  },
};
function Vg(e, t, n) {
  let r;
  function o() {
    r !== void 0 && (ti.remove(r), (r = void 0));
  }
  return (
    Ye(() => {
      e.value === !0 && o();
    }),
    {
      removeFromHistory: o,
      addToHistory() {
        (r = { condition: () => n.value === !0, handler: t }), ti.add(r);
      },
    }
  );
}
function Hg() {
  let e;
  const t = we();
  function n() {
    clearTimeout(e);
  }
  return (
    to(n),
    Ye(n),
    {
      removeTimeout: n,
      registerTimeout(r, o) {
        clearTimeout(e), zu(t) === !1 && (e = setTimeout(r, o));
      },
    }
  );
}
function zg() {
  let e;
  const t = we();
  function n() {
    e = void 0;
  }
  return (
    to(n),
    Ye(n),
    {
      removeTick: n,
      registerTick(r) {
        (e = r),
          Be(() => {
            e === r && (zu(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const Ug = {
    modelValue: { type: Boolean, default: null },
    "onUpdate:modelValue": [Function, Array],
  },
  Kg = ["before-show", "show", "before-hide", "hide"];
function Wg({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: o,
  processOnMount: i,
}) {
  const s = we(),
    { props: l, emit: a, proxy: c } = s;
  let u;
  function d(g) {
    e.value === !0 ? v(g) : f(g);
  }
  function f(g) {
    if (
      l.disable === !0 ||
      (g !== void 0 && g.qAnchorHandled === !0) ||
      (t !== void 0 && t(g) !== !0)
    )
      return;
    const _ = l["onUpdate:modelValue"] !== void 0;
    _ === !0 &&
      (a("update:modelValue", !0),
      (u = g),
      Be(() => {
        u === g && (u = void 0);
      })),
      (l.modelValue === null || _ === !1) && m(g);
  }
  function m(g) {
    e.value !== !0 &&
      ((e.value = !0), a("before-show", g), r !== void 0 ? r(g) : a("show", g));
  }
  function v(g) {
    if (l.disable === !0) return;
    const _ = l["onUpdate:modelValue"] !== void 0;
    _ === !0 &&
      (a("update:modelValue", !1),
      (u = g),
      Be(() => {
        u === g && (u = void 0);
      })),
      (l.modelValue === null || _ === !1) && S(g);
  }
  function S(g) {
    e.value !== !1 &&
      ((e.value = !1), a("before-hide", g), o !== void 0 ? o(g) : a("hide", g));
  }
  function x(g) {
    l.disable === !0 && g === !0
      ? l["onUpdate:modelValue"] !== void 0 && a("update:modelValue", !1)
      : (g === !0) !== e.value && (g === !0 ? m : S)(u);
  }
  pe(() => l.modelValue, x),
    n !== void 0 &&
      Hu(s) === !0 &&
      pe(
        () => c.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && v();
        }
      ),
    i === !0 &&
      Ft(() => {
        x(l.modelValue);
      });
  const R = { show: f, hide: v, toggle: d };
  return Object.assign(c, R), R;
}
const Qg = {
  transitionShow: { type: String, default: "fade" },
  transitionHide: { type: String, default: "fade" },
  transitionDuration: { type: [String, Number], default: 300 },
};
function Cb(e, t) {
  const n = ce(t.value);
  return (
    pe(t, (r) => {
      Be(() => {
        n.value = r;
      });
    }),
    {
      transition: C(
        () =>
          "q-transition--" +
          (n.value === !0 ? e.transitionHide : e.transitionShow)
      ),
      transitionStyle: C(
        () => `--q-transition-duration: ${e.transitionDuration}ms`
      ),
    }
  );
}
let Jt = [],
  nr = [];
function Ju(e) {
  nr = nr.filter((t) => t !== e);
}
function Jg(e) {
  Ju(e), nr.push(e);
}
function Ca(e) {
  Ju(e), nr.length === 0 && Jt.length > 0 && (Jt[Jt.length - 1](), (Jt = []));
}
function Wi(e) {
  nr.length === 0 ? e() : Jt.push(e);
}
function Xg(e) {
  Jt = Jt.filter((t) => t !== e);
}
const Or = [];
function kb(e) {
  return Or.find(
    (t) =>
      t.__qPortalInnerRef.value !== null &&
      t.__qPortalInnerRef.value.contains(e)
  );
}
function Yg(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return Rr(e);
    } else if (e.__qPortalInnerRef !== void 0) {
      const n = Rr(e);
      return n !== void 0 && n.$options.name === "QPopupProxy"
        ? (e.hide(t), n)
        : e;
    }
    e = Rr(e);
  } while (e != null);
}
function Eb(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortalInnerRef !== void 0) {
      if ((n--, e.$options.name === "QMenu")) {
        e = Yg(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Rr(e);
  }
}
function Zg(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function Gg(e, t, n, r) {
  const o = ce(!1),
    i = ce(!1);
  let s = null;
  const l = {},
    a = r === !0 && Zg(e);
  function c(d) {
    if (d === !0) {
      Ca(l), (i.value = !0);
      return;
    }
    (i.value = !1),
      o.value === !1 &&
        (a === !1 && s === null && (s = Ui()),
        (o.value = !0),
        Or.push(e.proxy),
        Jg(l));
  }
  function u(d) {
    if (((i.value = !1), d !== !0)) return;
    Ca(l), (o.value = !1);
    const f = Or.indexOf(e.proxy);
    f !== -1 && Or.splice(f, 1), s !== null && (Uu(s), (s = null));
  }
  return (
    ro(() => {
      u(!0);
    }),
    (e.proxy.__qPortalInnerRef = t),
    {
      showPortal: c,
      hidePortal: u,
      portalIsActive: o,
      portalIsAccessible: i,
      renderPortal: () =>
        a === !0 ? n() : o.value === !0 ? [T(Kf, { to: s }, n())] : void 0,
    }
  );
}
const ev = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function Sb(e, t) {
  let n = bg(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return ev.includes(n) ? window : n;
}
function tv(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function nv(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let pr;
function Rb() {
  if (pr !== void 0) return pr;
  const e = document.createElement("p"),
    t = document.createElement("div");
  ci(e, { width: "100%", height: "200px" }),
    ci(t, {
      position: "absolute",
      top: "0px",
      left: "0px",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden",
    }),
    t.appendChild(e),
    document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), (pr = n - r), pr;
}
function rv(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
    ? e.scrollHeight > e.clientHeight &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"]))
    : e.scrollWidth > e.clientWidth &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
let qn = 0,
  Lo,
  Bo,
  In,
  Io = !1,
  ka,
  Ea,
  hn;
function ov(e) {
  iv(e) && Qe(e);
}
function iv(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = Vd(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    o = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (rv(s, r))
      return r
        ? o < 0 && s.scrollTop === 0
          ? !0
          : o > 0 && s.scrollTop + s.clientHeight === s.scrollHeight
        : o < 0 && s.scrollLeft === 0
        ? !0
        : o > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth;
  }
  return !0;
}
function Sa(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function gr(e) {
  Io !== !0 &&
    ((Io = !0),
    requestAnimationFrame(() => {
      Io = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      (In === void 0 || t !== window.innerHeight) &&
        ((In = n - t), (document.scrollingElement.scrollTop = r)),
        r > In &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - In) / 8));
    }));
}
function Ra(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: o } = window.getComputedStyle(t);
    (Lo = nv(window)),
      (Bo = tv(window)),
      (ka = t.style.left),
      (Ea = t.style.top),
      (t.style.left = `-${Lo}px`),
      (t.style.top = `-${Bo}px`),
      o !== "hidden" &&
        (o === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      r !== "hidden" &&
        (r === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      ke.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              gr,
              Fe.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              gr,
              Fe.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", Sa, Fe.passiveCapture));
  }
  ke.is.desktop === !0 &&
    ke.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", ov, Fe.notPassive),
    e === "remove" &&
      (ke.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              gr,
              Fe.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              gr,
              Fe.passiveCapture
            ))
          : window.removeEventListener("scroll", Sa, Fe.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = ka),
      (t.style.top = Ea),
      window.scrollTo(Lo, Bo),
      (In = void 0));
}
function sv(e) {
  let t = "add";
  if (e === !0) {
    if ((qn++, hn !== void 0)) {
      clearTimeout(hn), (hn = void 0);
      return;
    }
    if (qn > 1) return;
  } else {
    if (qn === 0 || (qn--, qn > 0)) return;
    if (((t = "remove"), ke.is.ios === !0 && ke.is.nativeMobile === !0)) {
      clearTimeout(hn),
        (hn = setTimeout(() => {
          Ra(t), (hn = void 0);
        }, 100));
      return;
    }
  }
  Ra(t);
}
function av() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), sv(t));
    },
  };
}
const Gt = [];
let En;
function lv(e) {
  En = e.keyCode === 27;
}
function uv() {
  En === !0 && (En = !1);
}
function cv(e) {
  En === !0 && ((En = !1), Gn(e, 27) === !0 && Gt[Gt.length - 1](e));
}
function Xu(e) {
  window[e]("keydown", lv),
    window[e]("blur", uv),
    window[e]("keyup", cv),
    (En = !1);
}
function fv(e) {
  ke.is.desktop === !0 &&
    (Gt.push(e), Gt.length === 1 && Xu("addEventListener"));
}
function Pa(e) {
  const t = Gt.indexOf(e);
  t > -1 && (Gt.splice(t, 1), Gt.length === 0 && Xu("removeEventListener"));
}
const en = [];
function Yu(e) {
  en[en.length - 1](e);
}
function dv(e) {
  ke.is.desktop === !0 &&
    (en.push(e),
    en.length === 1 && document.body.addEventListener("focusin", Yu));
}
function Ta(e) {
  const t = en.indexOf(e);
  t > -1 &&
    (en.splice(t, 1),
    en.length === 0 && document.body.removeEventListener("focusin", Yu));
}
let vr = 0;
const hv = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  Oa = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  };
var mv = Ie({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...Ug,
    ...Qg,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (e) =>
        e === "standard" || ["top", "bottom", "left", "right"].includes(e),
    },
  },
  emits: [...Kg, "shake", "click", "escape-key"],
  setup(e, { slots: t, emit: n, attrs: r }) {
    const o = we(),
      i = ce(null),
      s = ce(!1),
      l = ce(!1),
      a = ce(!1);
    let c,
      u = null,
      d,
      f;
    const m = C(
        () =>
          e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
      ),
      { preventBodyScroll: v } = av(),
      { registerTimeout: S } = Hg(),
      { registerTick: x, removeTick: R } = zg(),
      {
        showPortal: g,
        hidePortal: _,
        portalIsAccessible: O,
        renderPortal: B,
      } = Gg(o, i, K, !0),
      { hide: y } = Wg({
        showing: s,
        hideOnRouteChange: m,
        handleShow: $,
        handleHide: W,
        processOnMount: !0,
      }),
      { addToHistory: w, removeFromHistory: b } = Vg(s, y, m),
      q = C(
        () =>
          `q-dialog__inner flex no-pointer-events q-dialog__inner--${
            e.maximized === !0 ? "maximized" : "minimized"
          } q-dialog__inner--${e.position} ${hv[e.position]}` +
          (a.value === !0 ? " q-dialog__inner--animating" : "") +
          (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
          (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
          (e.square === !0 ? " q-dialog__inner--square" : "")
      ),
      M = C(
        () =>
          "q-transition--" +
          (e.transitionShow === void 0 ? Oa[e.position][0] : e.transitionShow)
      ),
      I = C(
        () =>
          "q-transition--" +
          (e.transitionHide === void 0 ? Oa[e.position][1] : e.transitionHide)
      ),
      E = C(() => (l.value === !0 ? I.value : M.value)),
      D = C(() => `--q-transition-duration: ${e.transitionDuration}ms`),
      P = C(() => s.value === !0 && e.seamless !== !0),
      X = C(() => (e.autoClose === !0 ? { onClick: lt } : {})),
      oe = C(() => [
        `q-dialog fullscreen no-pointer-events q-dialog--${
          P.value === !0 ? "modal" : "seamless"
        }`,
        r.class,
      ]);
    pe(s, (N) => {
      Be(() => {
        l.value = N;
      });
    }),
      pe(
        () => e.maximized,
        (N) => {
          s.value === !0 && ge(N);
        }
      ),
      pe(P, (N) => {
        v(N), N === !0 ? (dv(Q), fv(ue)) : (Ta(Q), Pa(ue));
      });
    function $(N) {
      w(),
        (u =
          e.noRefocus === !1 && document.activeElement !== null
            ? document.activeElement
            : null),
        ge(e.maximized),
        g(),
        (a.value = !0),
        e.noFocus !== !0
          ? (document.activeElement !== null && document.activeElement.blur(),
            x(fe))
          : R(),
        S(() => {
          if (o.proxy.$q.platform.is.ios === !0) {
            if (e.seamless !== !0 && document.activeElement) {
              const { top: ne, bottom: ve } =
                  document.activeElement.getBoundingClientRect(),
                { innerHeight: ie } = window,
                h =
                  window.visualViewport !== void 0
                    ? window.visualViewport.height
                    : ie;
              ne > 0 &&
                ve > h / 2 &&
                (document.scrollingElement.scrollTop = Math.min(
                  document.scrollingElement.scrollHeight - h,
                  ve >= ie
                    ? 1 / 0
                    : Math.ceil(
                        document.scrollingElement.scrollTop + ve - h / 2
                      )
                )),
                document.activeElement.scrollIntoView();
            }
            (f = !0), i.value.click(), (f = !1);
          }
          g(!0), (a.value = !1), n("show", N);
        }, e.transitionDuration);
    }
    function W(N) {
      R(),
        b(),
        he(!0),
        (a.value = !0),
        _(),
        u !== null && (u.focus(), (u = null)),
        S(() => {
          _(!0), (a.value = !1), n("hide", N);
        }, e.transitionDuration);
    }
    function fe(N) {
      Wi(() => {
        let ne = i.value;
        ne === null ||
          ne.contains(document.activeElement) === !0 ||
          ((ne = ne.querySelector(N || "[autofocus], [data-autofocus]") || ne),
          ne.focus({ preventScroll: !0 }));
      });
    }
    function V() {
      fe(), n("shake");
      const N = i.value;
      N !== null &&
        (N.classList.remove("q-animate--scale"),
        N.classList.add("q-animate--scale"),
        clearTimeout(c),
        (c = setTimeout(() => {
          i.value !== null && (N.classList.remove("q-animate--scale"), fe());
        }, 170)));
    }
    function ue() {
      e.seamless !== !0 &&
        (e.persistent === !0 || e.noEscDismiss === !0
          ? e.maximized !== !0 && e.noShake !== !0 && V()
          : (n("escape-key"), y()));
    }
    function he(N) {
      clearTimeout(c),
        (N === !0 || s.value === !0) &&
          (ge(!1), e.seamless !== !0 && (v(!1), Ta(Q), Pa(ue))),
        N !== !0 && (u = null);
    }
    function ge(N) {
      N === !0
        ? d !== !0 &&
          (vr < 1 && document.body.classList.add("q-body--dialog"),
          vr++,
          (d = !0))
        : d === !0 &&
          (vr < 2 && document.body.classList.remove("q-body--dialog"),
          vr--,
          (d = !1));
    }
    function lt(N) {
      f !== !0 && (y(N), n("click", N));
    }
    function L(N) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0
        ? y(N)
        : e.noShake !== !0 && V();
    }
    function Q(N) {
      e.allowFocusOutside !== !0 &&
        O.value === !0 &&
        yg(i.value, N.target) !== !0 &&
        fe('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      focus: fe,
      shake: V,
      __updateRefocusTarget(N) {
        u = N || null;
      },
    }),
      Ye(he);
    function K() {
      return T(
        "div",
        {
          role: "dialog",
          "aria-modal": P.value === !0 ? "true" : "false",
          ...r,
          class: oe.value,
        },
        [
          T(xn, { name: "q-transition--fade", appear: !0 }, () =>
            P.value === !0
              ? T("div", {
                  class: "q-dialog__backdrop fixed-full",
                  style: D.value,
                  "aria-hidden": "true",
                  onMousedown: L,
                })
              : null
          ),
          T(xn, { name: E.value, appear: !0 }, () =>
            s.value === !0
              ? T(
                  "div",
                  {
                    ref: i,
                    class: q.value,
                    style: D.value,
                    tabindex: -1,
                    ...X.value,
                  },
                  rt(t.default)
                )
              : null
          ),
        ]
      );
    }
    return B;
  },
});
const nn = { dark: { type: Boolean, default: null } };
function rn(e, t) {
  return C(() => (e.dark === null ? t.dark.isActive : e.dark));
}
var pv = Ie({
    name: "QCard",
    props: {
      ...nn,
      tag: { type: String, default: "div" },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = we(),
        r = rn(e, n),
        o = C(
          () =>
            "q-card" +
            (r.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : "")
        );
      return () => T(e.tag, { class: o.value }, rt(t.default));
    },
  }),
  Mn = Ie({
    name: "QCardSection",
    props: { tag: { type: String, default: "div" }, horizontal: Boolean },
    setup(e, { slots: t }) {
      const n = C(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? "horiz row no-wrap" : "vert"
          }`
      );
      return () => T(e.tag, { class: n.value }, rt(t.default));
    },
  }),
  gv = Ie({
    name: "QCardActions",
    props: { ...Nu, vertical: Boolean },
    setup(e, { slots: t }) {
      const n = Du(e),
        r = C(
          () =>
            `q-card__actions ${n.value} q-card__actions--${
              e.vertical === !0 ? "vert column" : "horiz row"
            }`
        );
      return () => T("div", { class: r.value }, rt(t.default));
    },
  });
const vv = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  jo = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var Aa = Ie({
  name: "QSeparator",
  props: {
    ...nn,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String,
  },
  setup(e) {
    const t = we(),
      n = rn(e, t.proxy.$q),
      r = C(() => (e.vertical === !0 ? "vertical" : "horizontal")),
      o = C(() => ` q-separator--${r.value}`),
      i = C(() => (e.inset !== !1 ? `${o.value}-${vv[e.inset]}` : "")),
      s = C(
        () =>
          `q-separator${o.value}${i.value}` +
          (e.color !== void 0 ? ` bg-${e.color}` : "") +
          (n.value === !0 ? " q-separator--dark" : "")
      ),
      l = C(() => {
        const a = {};
        if (
          (e.size !== void 0 &&
            (a[e.vertical === !0 ? "width" : "height"] = e.size),
          e.spaced !== !1)
        ) {
          const c =
              e.spaced === !0
                ? `${jo.md}px`
                : e.spaced in jo
                ? `${jo[e.spaced]}px`
                : e.spaced,
            u = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
          a[`margin${u[0]}`] = a[`margin${u[1]}`] = c;
        }
        return a;
      });
    return () =>
      T("hr", { class: s.value, style: l.value, "aria-orientation": r.value });
  },
});
function bv({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = Ve(rh, !1);
  if (r !== !1) {
    const { props: o, proxy: i } = we();
    Object.assign(i, { validate: e, resetValidation: t }),
      pe(
        () => o.disable,
        (s) => {
          s === !0
            ? (typeof t == "function" && t(), r.unbindComponent(i))
            : r.bindComponent(i);
        }
      ),
      Ft(() => {
        o.disable !== !0 && r.bindComponent(i);
      }),
      Ye(() => {
        o.disable !== !0 && r.unbindComponent(i);
      });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const $a = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  qa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  Ma = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  br =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  yr =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  Fo = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => $a.test(e),
    hexaColor: (e) => qa.test(e),
    hexOrHexaColor: (e) => Ma.test(e),
    rgbColor: (e) => br.test(e),
    rgbaColor: (e) => yr.test(e),
    rgbOrRgbaColor: (e) => br.test(e) || yr.test(e),
    hexOrRgbColor: (e) => $a.test(e) || br.test(e),
    hexaOrRgbaColor: (e) => qa.test(e) || yr.test(e),
    anyColor: (e) => Ma.test(e) || br.test(e) || yr.test(e),
  },
  yv = [!0, !1, "ondemand"],
  _v = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], validator: (e) => yv.includes(e) },
  };
function wv(e, t) {
  const { props: n, proxy: r } = we(),
    o = ce(!1),
    i = ce(null),
    s = ce(null);
  bv({ validate: v, resetValidation: m });
  let l = 0,
    a;
  const c = C(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length > 0
    ),
    u = C(() => n.disable !== !0 && c.value === !0),
    d = C(() => n.error === !0 || o.value === !0),
    f = C(() =>
      typeof n.errorMessage == "string" && n.errorMessage.length > 0
        ? n.errorMessage
        : i.value
    );
  pe(
    () => n.modelValue,
    () => {
      S();
    }
  ),
    pe(
      () => n.reactiveRules,
      (R) => {
        R === !0
          ? a === void 0 &&
            (a = pe(
              () => n.rules,
              () => {
                S(!0);
              }
            ))
          : a !== void 0 && (a(), (a = void 0));
      },
      { immediate: !0 }
    ),
    pe(e, (R) => {
      R === !0
        ? s.value === null && (s.value = !1)
        : s.value === !1 &&
          ((s.value = !0),
          u.value === !0 &&
            n.lazyRules !== "ondemand" &&
            t.value === !1 &&
            x());
    });
  function m() {
    l++,
      (t.value = !1),
      (s.value = null),
      (o.value = !1),
      (i.value = null),
      x.cancel();
  }
  function v(R = n.modelValue) {
    if (u.value !== !0) return !0;
    const g = ++l,
      _ =
        t.value !== !0
          ? () => {
              s.value = !0;
            }
          : () => {},
      O = (y, w) => {
        y === !0 && _(), (o.value = y), (i.value = w || null), (t.value = !1);
      },
      B = [];
    for (let y = 0; y < n.rules.length; y++) {
      const w = n.rules[y];
      let b;
      if (
        (typeof w == "function"
          ? (b = w(R, Fo))
          : typeof w == "string" && Fo[w] !== void 0 && (b = Fo[w](R)),
        b === !1 || typeof b == "string")
      )
        return O(!0, b), !1;
      b !== !0 && b !== void 0 && B.push(b);
    }
    return B.length === 0
      ? (O(!1), !0)
      : ((t.value = !0),
        Promise.all(B).then(
          (y) => {
            if (y === void 0 || Array.isArray(y) === !1 || y.length === 0)
              return g === l && O(!1), !0;
            const w = y.find((b) => b === !1 || typeof b == "string");
            return g === l && O(w !== void 0, w), w === void 0;
          },
          (y) => (g === l && (console.error(y), O(!0)), !1)
        ));
  }
  function S(R) {
    u.value === !0 &&
      n.lazyRules !== "ondemand" &&
      (s.value === !0 || (n.lazyRules !== !0 && R !== !0)) &&
      x();
  }
  const x = Jl(v, 0);
  return (
    Ye(() => {
      a !== void 0 && a(), x.cancel();
    }),
    Object.assign(r, { resetValidation: m, validate: v }),
    rr(r, "hasError", () => d.value),
    {
      isDirtyModel: s,
      hasRules: c,
      hasError: d,
      errorMessage: f,
      validate: v,
      resetValidation: m,
    }
  );
}
const La = /^on[A-Z]/;
function xv(e, t) {
  const n = { listeners: ce({}), attributes: ce({}) };
  function r() {
    const o = {},
      i = {};
    for (const s in e)
      s !== "class" && s !== "style" && La.test(s) === !1 && (o[s] = e[s]);
    for (const s in t.props) La.test(s) === !0 && (i[s] = t.props[s]);
    (n.attributes.value = o), (n.listeners.value = i);
  }
  return kl(r), r(), n;
}
let No,
  _r = 0;
const Te = new Array(256);
for (let e = 0; e < 256; e++) Te[e] = (e + 256).toString(16).substring(1);
const Cv = (() => {
    const e =
      typeof crypto != "undefined"
        ? crypto
        : typeof window != "undefined"
        ? window.crypto || window.msCrypto
        : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (t) => {
          const n = new Uint8Array(t);
          return e.getRandomValues(n), n;
        };
    }
    return (t) => {
      const n = [];
      for (let r = t; r > 0; r--) n.push(Math.floor(Math.random() * 256));
      return n;
    };
  })(),
  Ba = 4096;
function kv() {
  (No === void 0 || _r + 16 > Ba) && ((_r = 0), (No = Cv(Ba)));
  const e = Array.prototype.slice.call(No, _r, (_r += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    Te[e[0]] +
      Te[e[1]] +
      Te[e[2]] +
      Te[e[3]] +
      "-" +
      Te[e[4]] +
      Te[e[5]] +
      "-" +
      Te[e[6]] +
      Te[e[7]] +
      "-" +
      Te[e[8]] +
      Te[e[9]] +
      "-" +
      Te[e[10]] +
      Te[e[11]] +
      Te[e[12]] +
      Te[e[13]] +
      Te[e[14]] +
      Te[e[15]]
  );
}
function di(e) {
  return e === void 0 ? `f_${kv()}` : e;
}
function hi(e) {
  return e != null && ("" + e).length > 0;
}
const Ev = {
    ...nn,
    ..._v,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  },
  Sv = [
    "update:modelValue",
    "clear",
    "focus",
    "blur",
    "popup-show",
    "popup-hide",
  ];
function Rv() {
  const { props: e, attrs: t, proxy: n, vnode: r } = we();
  return {
    isDark: rn(e, n.$q),
    editable: C(() => e.disable !== !0 && e.readonly !== !0),
    innerLoading: ce(!1),
    focused: ce(!1),
    hasPopupOpen: !1,
    splitAttrs: xv(t, r),
    targetUid: ce(di(e.for)),
    rootRef: ce(null),
    targetRef: ce(null),
    controlRef: ce(null),
  };
}
function Pv(e) {
  const { props: t, emit: n, slots: r, attrs: o, proxy: i } = we(),
    { $q: s } = i;
  let l;
  e.hasValue === void 0 && (e.hasValue = C(() => hi(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = ($) => {
        n("update:modelValue", $);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: q, onFocusout: M }),
    Object.assign(e, {
      clearValue: I,
      onControlFocusin: q,
      onControlFocusout: M,
      focus: w,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = C(() => {
        if (t.counter !== !1) {
          const $ =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            W = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return $ + (W !== void 0 ? " / " + W : "");
        }
      }));
  const {
      isDirtyModel: a,
      hasRules: c,
      hasError: u,
      errorMessage: d,
      resetValidation: f,
    } = wv(e.focused, e.innerLoading),
    m =
      e.floatingLabel !== void 0
        ? C(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : C(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    v = C(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        c.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    S = C(() =>
      t.filled === !0
        ? "filled"
        : t.outlined === !0
        ? "outlined"
        : t.borderless === !0
        ? "borderless"
        : t.standout
        ? "standout"
        : "standard"
    ),
    x = C(
      () =>
        `q-field row no-wrap items-start q-field--${S.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (m.value === !0 ? " q-field--float" : "") +
        (g.value === !0 ? " q-field--labeled" : "") +
        (t.dense === !0 ? " q-field--dense" : "") +
        (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") +
        (e.isDark.value === !0 ? " q-field--dark" : "") +
        (e.getControl === void 0 ? " q-field--auto-height" : "") +
        (e.focused.value === !0 ? " q-field--focused" : "") +
        (u.value === !0 ? " q-field--error" : "") +
        (u.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && v.value === !0
          ? " q-field--with-bottom"
          : "") +
        (t.disable === !0
          ? " q-field--disabled"
          : t.readonly === !0
          ? " q-field--readonly"
          : "")
    ),
    R = C(
      () =>
        "q-field__control relative-position row no-wrap" +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") +
        (u.value === !0
          ? " text-negative"
          : typeof t.standout == "string" &&
            t.standout.length > 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : "")
    ),
    g = C(() => t.labelSlot === !0 || t.label !== void 0),
    _ = C(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && u.value !== !0
          ? ` text-${t.labelColor}`
          : "")
    ),
    O = C(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: m.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    B = C(() => {
      const $ = { for: e.targetUid.value };
      return (
        t.disable === !0
          ? ($["aria-disabled"] = "true")
          : t.readonly === !0 && ($["aria-readonly"] = "true"),
        $
      );
    });
  pe(
    () => t.for,
    ($) => {
      e.targetUid.value = di($);
    }
  );
  function y() {
    const $ = document.activeElement;
    let W = e.targetRef !== void 0 && e.targetRef.value;
    W &&
      ($ === null || $.id !== e.targetUid.value) &&
      (W.hasAttribute("tabindex") === !0 || (W = W.querySelector("[tabindex]")),
      W && W !== $ && W.focus({ preventScroll: !0 }));
  }
  function w() {
    Wi(y);
  }
  function b() {
    Xg(y);
    const $ = document.activeElement;
    $ !== null && e.rootRef.value.contains($) && $.blur();
  }
  function q($) {
    clearTimeout(l),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n("focus", $));
  }
  function M($, W) {
    clearTimeout(l),
      (l = setTimeout(() => {
        (document.hasFocus() === !0 &&
          (e.hasPopupOpen === !0 ||
            e.controlRef === void 0 ||
            e.controlRef.value === null ||
            e.controlRef.value.contains(document.activeElement) !== !1)) ||
          (e.focused.value === !0 && ((e.focused.value = !1), n("blur", $)),
          W !== void 0 && W());
      }));
  }
  function I($) {
    Qe($),
      s.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      n("update:modelValue", null),
      n("clear", t.modelValue),
      Be(() => {
        f(), s.platform.is.mobile !== !0 && (a.value = !1);
      });
  }
  function E() {
    const $ = [];
    return (
      r.prepend !== void 0 &&
        $.push(
          T(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: $t,
            },
            r.prepend()
          )
        ),
      $.push(
        T(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          D()
        )
      ),
      u.value === !0 &&
        t.noErrorIcon === !1 &&
        $.push(
          X("error", [
            T(xt, { name: s.iconSet.field.error, color: "negative" }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? $.push(
            X(
              "inner-loading-append",
              r.loading !== void 0 ? r.loading() : [T(tr, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          $.push(
            X("inner-clearable-append", [
              T(xt, {
                class: "q-field__focusable-action",
                tag: "button",
                name: t.clearIcon || s.iconSet.field.clear,
                tabindex: 0,
                type: "button",
                "aria-hidden": null,
                role: null,
                onClick: I,
              }),
            ])
          ),
      r.append !== void 0 &&
        $.push(
          T(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: $t,
            },
            r.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        $.push(X("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && $.push(e.getControlChild()),
      $
    );
  }
  function D() {
    const $ = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        $.push(
          T(
            "div",
            { class: "q-field__prefix no-pointer-events row items-center" },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        $.push(e.getShadowControl()),
      e.getControl !== void 0
        ? $.push(e.getControl())
        : r.rawControl !== void 0
        ? $.push(r.rawControl())
        : r.control !== void 0 &&
          $.push(
            T(
              "div",
              {
                ref: e.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                "data-autofocus": t.autofocus === !0 || void 0,
              },
              r.control(O.value)
            )
          ),
      g.value === !0 &&
        $.push(T("div", { class: _.value }, rt(r.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        $.push(
          T(
            "div",
            { class: "q-field__suffix no-pointer-events row items-center" },
            t.suffix
          )
        ),
      $.concat(rt(r.default))
    );
  }
  function P() {
    let $, W;
    u.value === !0
      ? d.value !== null
        ? (($ = [T("div", { role: "alert" }, d.value)]),
          (W = `q--slot-error-${d.value}`))
        : (($ = rt(r.error)), (W = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? (($ = [T("div", t.hint)]), (W = `q--slot-hint-${t.hint}`))
          : (($ = rt(r.hint)), (W = "q--slot-hint")));
    const fe = t.counter === !0 || r.counter !== void 0;
    if (t.hideBottomSpace === !0 && fe === !1 && $ === void 0) return;
    const V = T("div", { key: W, class: "q-field__messages col" }, $);
    return T(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: $t,
      },
      [
        t.hideBottomSpace === !0
          ? V
          : T(xn, { name: "q-transition--field-message" }, () => V),
        fe === !0
          ? T(
              "div",
              { class: "q-field__counter" },
              r.counter !== void 0 ? r.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function X($, W) {
    return W === null
      ? null
      : T(
          "div",
          {
            key: $,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          W
        );
  }
  let oe = !1;
  return (
    to(() => {
      oe = !0;
    }),
    xl(() => {
      oe === !0 && t.autofocus === !0 && i.focus();
    }),
    Ft(() => {
      It.value === !0 && t.for === void 0 && (e.targetUid.value = di()),
        t.autofocus === !0 && i.focus();
    }),
    Ye(() => {
      clearTimeout(l);
    }),
    Object.assign(i, { focus: w, blur: b }),
    function () {
      const W =
        e.getControl === void 0 && r.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...B.value,
            }
          : B.value;
      return T(
        "label",
        { ref: e.rootRef, class: [x.value, o.class], style: o.style, ...W },
        [
          r.before !== void 0
            ? T(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: $t,
                },
                r.before()
              )
            : null,
          T(
            "div",
            { class: "q-field__inner relative-position col self-stretch" },
            [
              T(
                "div",
                {
                  ref: e.controlRef,
                  class: R.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                E()
              ),
              v.value === !0 ? P() : null,
            ]
          ),
          r.after !== void 0
            ? T(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: $t,
                },
                r.after()
              )
            : null,
        ]
      );
    }
  );
}
const Ia = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  zr = {
    "#": { pattern: "[\\d]", negate: "[^\\d]" },
    S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
    N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
    A: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  Zu = Object.keys(zr);
Zu.forEach((e) => {
  zr[e].regex = new RegExp(zr[e].pattern);
});
const Tv = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Zu.join("") + "])|(.)",
    "g"
  ),
  ja = /[.*+?^${}()|[\]\\]/g,
  Se = String.fromCharCode(1),
  Ov = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function Av(e, t, n, r) {
  let o, i, s, l;
  const a = ce(null),
    c = ce(d());
  function u() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  pe(() => e.type + e.autogrow, m),
    pe(
      () => e.mask,
      (y) => {
        if (y !== void 0) v(c.value, !0);
        else {
          const w = O(c.value);
          m(), e.modelValue !== w && t("update:modelValue", w);
        }
      }
    ),
    pe(
      () => e.fillMask + e.reverseFillMask,
      () => {
        a.value === !0 && v(c.value, !0);
      }
    ),
    pe(
      () => e.unmaskedValue,
      () => {
        a.value === !0 && v(c.value);
      }
    );
  function d() {
    if ((m(), a.value === !0)) {
      const y = g(O(e.modelValue));
      return e.fillMask !== !1 ? B(y) : y;
    }
    return e.modelValue;
  }
  function f(y) {
    if (y < o.length) return o.slice(-y);
    let w = "",
      b = o;
    const q = b.indexOf(Se);
    if (q > -1) {
      for (let M = y - b.length; M > 0; M--) w += Se;
      b = b.slice(0, q) + w + b.slice(q);
    }
    return b;
  }
  function m() {
    if (
      ((a.value = e.mask !== void 0 && e.mask.length > 0 && u()),
      a.value === !1)
    ) {
      (l = void 0), (o = ""), (i = "");
      return;
    }
    const y = Ia[e.mask] === void 0 ? e.mask : Ia[e.mask],
      w =
        typeof e.fillMask == "string" && e.fillMask.length > 0
          ? e.fillMask.slice(0, 1)
          : "_",
      b = w.replace(ja, "\\$&"),
      q = [],
      M = [],
      I = [];
    let E = e.reverseFillMask === !0,
      D = "",
      P = "";
    y.replace(Tv, (W, fe, V, ue, he) => {
      if (ue !== void 0) {
        const ge = zr[ue];
        I.push(ge),
          (P = ge.negate),
          E === !0 &&
            (M.push(
              "(?:" +
                P +
                "+)?(" +
                ge.pattern +
                "+)?(?:" +
                P +
                "+)?(" +
                ge.pattern +
                "+)?"
            ),
            (E = !1)),
          M.push("(?:" + P + "+)?(" + ge.pattern + ")?");
      } else if (V !== void 0)
        (D = "\\" + (V === "\\" ? "" : V)),
          I.push(V),
          q.push("([^" + D + "]+)?" + D + "?");
      else {
        const ge = fe !== void 0 ? fe : he;
        (D = ge === "\\" ? "\\\\\\\\" : ge.replace(ja, "\\\\$&")),
          I.push(ge),
          q.push("([^" + D + "]+)?" + D + "?");
      }
    });
    const X = new RegExp(
        "^" +
          q.join("") +
          "(" +
          (D === "" ? "." : "[^" + D + "]") +
          "+)?" +
          (D === "" ? "" : "[" + D + "]*") +
          "$"
      ),
      oe = M.length - 1,
      $ = M.map((W, fe) =>
        fe === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + b + "*" + W)
          : fe === oe
          ? new RegExp(
              "^" +
                W +
                "(" +
                (P === "" ? "." : P) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : b + "*")
            )
          : new RegExp("^" + W)
      );
    (s = I),
      (l = (W) => {
        const fe = X.exec(W);
        fe !== null && (W = fe.slice(1).join(""));
        const V = [],
          ue = $.length;
        for (let he = 0, ge = W; he < ue; he++) {
          const lt = $[he].exec(ge);
          if (lt === null) break;
          (ge = ge.slice(lt.shift().length)), V.push(...lt);
        }
        return V.length > 0 ? V.join("") : W;
      }),
      (o = I.map((W) => (typeof W == "string" ? W : Se)).join("")),
      (i = o.split(Se).join(w));
  }
  function v(y, w, b) {
    const q = r.value,
      M = q.selectionEnd,
      I = q.value.length - M,
      E = O(y);
    w === !0 && m();
    const D = g(E),
      P = e.fillMask !== !1 ? B(D) : D,
      X = c.value !== P;
    q.value !== P && (q.value = P),
      X === !0 && (c.value = P),
      document.activeElement === q &&
        Be(() => {
          if (P === i) {
            const $ = e.reverseFillMask === !0 ? i.length : 0;
            q.setSelectionRange($, $, "forward");
            return;
          }
          if (b === "insertFromPaste" && e.reverseFillMask !== !0) {
            const $ = M - 1;
            x.right(q, $, $);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(b) > -1
          ) {
            const $ =
              e.reverseFillMask === !0
                ? M === 0
                  ? P.length > D.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      P.length - (P === i ? 0 : Math.min(D.length, I) + 1)
                    ) + 1
                : M;
            q.setSelectionRange($, $, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (X === !0) {
              const $ = Math.max(
                0,
                P.length - (P === i ? 0 : Math.min(D.length, I + 1))
              );
              $ === 1 && M === 1
                ? q.setSelectionRange($, $, "forward")
                : x.rightReverse(q, $, $);
            } else {
              const $ = P.length - I;
              q.setSelectionRange($, $, "backward");
            }
          else if (X === !0) {
            const $ = Math.max(0, o.indexOf(Se), Math.min(D.length, M) - 1);
            x.right(q, $, $);
          } else {
            const $ = M - 1;
            x.right(q, $, $);
          }
        });
    const oe = e.unmaskedValue === !0 ? O(P) : P;
    String(e.modelValue) !== oe && n(oe, !0);
  }
  function S(y, w, b) {
    const q = g(O(y.value));
    (w = Math.max(0, o.indexOf(Se), Math.min(q.length, w))),
      y.setSelectionRange(w, b, "forward");
  }
  const x = {
    left(y, w, b, q) {
      const M = o.slice(w - 1).indexOf(Se) === -1;
      let I = Math.max(0, w - 1);
      for (; I >= 0; I--)
        if (o[I] === Se) {
          (w = I), M === !0 && w++;
          break;
        }
      if (I < 0 && o[w] !== void 0 && o[w] !== Se) return x.right(y, 0, 0);
      w >= 0 && y.setSelectionRange(w, q === !0 ? b : w, "backward");
    },
    right(y, w, b, q) {
      const M = y.value.length;
      let I = Math.min(M, b + 1);
      for (; I <= M; I++)
        if (o[I] === Se) {
          b = I;
          break;
        } else o[I - 1] === Se && (b = I);
      if (I > M && o[b - 1] !== void 0 && o[b - 1] !== Se)
        return x.left(y, M, M);
      y.setSelectionRange(q ? w : b, b, "forward");
    },
    leftReverse(y, w, b, q) {
      const M = f(y.value.length);
      let I = Math.max(0, w - 1);
      for (; I >= 0; I--)
        if (M[I - 1] === Se) {
          w = I;
          break;
        } else if (M[I] === Se && ((w = I), I === 0)) break;
      if (I < 0 && M[w] !== void 0 && M[w] !== Se)
        return x.rightReverse(y, 0, 0);
      w >= 0 && y.setSelectionRange(w, q === !0 ? b : w, "backward");
    },
    rightReverse(y, w, b, q) {
      const M = y.value.length,
        I = f(M),
        E = I.slice(0, b + 1).indexOf(Se) === -1;
      let D = Math.min(M, b + 1);
      for (; D <= M; D++)
        if (I[D - 1] === Se) {
          (b = D), b > 0 && E === !0 && b--;
          break;
        }
      if (D > M && I[b - 1] !== void 0 && I[b - 1] !== Se)
        return x.leftReverse(y, M, M);
      y.setSelectionRange(q === !0 ? w : b, b, "forward");
    },
  };
  function R(y) {
    if (Zl(y) === !0) return;
    const w = r.value,
      b = w.selectionStart,
      q = w.selectionEnd;
    if (y.keyCode === 37 || y.keyCode === 39) {
      const M =
        x[
          (y.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      y.preventDefault(), M(w, b, q, y.shiftKey);
    } else
      y.keyCode === 8 && e.reverseFillMask !== !0 && b === q
        ? x.left(w, b, q, !0)
        : y.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          b === q &&
          x.rightReverse(w, b, q, !0);
  }
  function g(y) {
    if (y == null || y === "") return "";
    if (e.reverseFillMask === !0) return _(y);
    const w = s;
    let b = 0,
      q = "";
    for (let M = 0; M < w.length; M++) {
      const I = y[b],
        E = w[M];
      if (typeof E == "string") (q += E), I === E && b++;
      else if (I !== void 0 && E.regex.test(I))
        (q += E.transform !== void 0 ? E.transform(I) : I), b++;
      else return q;
    }
    return q;
  }
  function _(y) {
    const w = s,
      b = o.indexOf(Se);
    let q = y.length - 1,
      M = "";
    for (let I = w.length - 1; I >= 0 && q > -1; I--) {
      const E = w[I];
      let D = y[q];
      if (typeof E == "string") (M = E + M), D === E && q--;
      else if (D !== void 0 && E.regex.test(D))
        do
          (M = (E.transform !== void 0 ? E.transform(D) : D) + M),
            q--,
            (D = y[q]);
        while (b === I && D !== void 0 && E.regex.test(D));
      else return M;
    }
    return M;
  }
  function O(y) {
    return typeof y != "string" || l === void 0
      ? typeof y == "number"
        ? l("" + y)
        : y
      : l(y);
  }
  function B(y) {
    return i.length - y.length <= 0
      ? y
      : e.reverseFillMask === !0 && y.length > 0
      ? i.slice(0, -y.length) + y
      : y + i.slice(y.length);
  }
  return {
    innerValue: c,
    hasMask: a,
    moveCursorForPaste: S,
    updateMaskValue: v,
    onMaskedKeydown: R,
  };
}
const Qi = { name: String };
function Pb(e) {
  return C(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Gu(e = {}) {
  return (t, n, r) => {
    t[n](T("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function $v(e) {
  return C(() => e.name || e.for);
}
function qv(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const o =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : void 0;
      return (
        Object(r) === r &&
          ("length" in r ? Array.from(r) : [r]).forEach((i) => {
            o.items.add(i);
          }),
        { files: o.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return C(
    t === !0
      ? () => {
          if (e.type === "file") return n();
        }
      : n
  );
}
const Mv =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  Lv =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  Bv = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  Iv = /[a-z0-9_ -]$/i;
function jv(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      (n.target.qComposing = !1), e(n);
    } else
      n.type === "compositionupdate" &&
        n.target.qComposing !== !0 &&
        typeof n.data == "string" &&
        (ke.is.firefox === !0
          ? Iv.test(n.data) === !1
          : Mv.test(n.data) === !0 ||
            Lv.test(n.data) === !0 ||
            Bv.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
var Fv = Ie({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...Ev,
    ...Ov,
    ...Qi,
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: "text" },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...Sv, "paste", "change"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = we(),
      { $q: o } = r,
      i = {};
    let s = NaN,
      l,
      a,
      c,
      u;
    const d = ce(null),
      f = $v(e),
      {
        innerValue: m,
        hasMask: v,
        moveCursorForPaste: S,
        updateMaskValue: x,
        onMaskedKeydown: R,
      } = Av(e, t, P, d),
      g = qv(e, !0),
      _ = C(() => hi(m.value)),
      O = jv(D),
      B = Rv(),
      y = C(() => e.type === "textarea" || e.autogrow === !0),
      w = C(
        () =>
          y.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type)
      ),
      b = C(() => {
        const V = {
          ...B.splitAttrs.listeners.value,
          onInput: D,
          onPaste: E,
          onChange: oe,
          onBlur: $,
          onFocus: Ir,
        };
        return (
          (V.onCompositionstart =
            V.onCompositionupdate =
            V.onCompositionend =
              O),
          v.value === !0 && (V.onKeydown = R),
          e.autogrow === !0 && (V.onAnimationend = X),
          V
        );
      }),
      q = C(() => {
        const V = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: f.value,
          ...B.splitAttrs.attributes.value,
          id: B.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          y.value === !1 && (V.type = e.type),
          e.autogrow === !0 && (V.rows = 1),
          V
        );
      });
    pe(
      () => e.type,
      () => {
        d.value && (d.value.value = e.modelValue);
      }
    ),
      pe(
        () => e.modelValue,
        (V) => {
          if (v.value === !0) {
            if (a === !0 && ((a = !1), String(V) === s)) return;
            x(V);
          } else
            m.value !== V &&
              ((m.value = V),
              e.type === "number" &&
                i.hasOwnProperty("value") === !0 &&
                (l === !0 ? (l = !1) : delete i.value));
          e.autogrow === !0 && Be(X);
        }
      ),
      pe(
        () => e.autogrow,
        (V) => {
          V === !0
            ? Be(X)
            : d.value !== null && n.rows > 0 && (d.value.style.height = "auto");
        }
      ),
      pe(
        () => e.dense,
        () => {
          e.autogrow === !0 && Be(X);
        }
      );
    function M() {
      Wi(() => {
        const V = document.activeElement;
        d.value !== null &&
          d.value !== V &&
          (V === null || V.id !== B.targetUid.value) &&
          d.value.focus({ preventScroll: !0 });
      });
    }
    function I() {
      d.value !== null && d.value.select();
    }
    function E(V) {
      if (v.value === !0 && e.reverseFillMask !== !0) {
        const ue = V.target;
        S(ue, ue.selectionStart, ue.selectionEnd);
      }
      t("paste", V);
    }
    function D(V) {
      if (!V || !V.target) return;
      if (e.type === "file") {
        t("update:modelValue", V.target.files);
        return;
      }
      const ue = V.target.value;
      if (V.target.qComposing === !0) {
        i.value = ue;
        return;
      }
      if (v.value === !0) x(ue, !1, V.inputType);
      else if ((P(ue), w.value === !0 && V.target === document.activeElement)) {
        const { selectionStart: he, selectionEnd: ge } = V.target;
        he !== void 0 &&
          ge !== void 0 &&
          Be(() => {
            V.target === document.activeElement &&
              ue.indexOf(V.target.value) === 0 &&
              V.target.setSelectionRange(he, ge);
          });
      }
      e.autogrow === !0 && X();
    }
    function P(V, ue) {
      (u = () => {
        e.type !== "number" &&
          i.hasOwnProperty("value") === !0 &&
          delete i.value,
          e.modelValue !== V &&
            s !== V &&
            ((s = V),
            ue === !0 && (a = !0),
            t("update:modelValue", V),
            Be(() => {
              s === V && (s = NaN);
            })),
          (u = void 0);
      }),
        e.type === "number" && ((l = !0), (i.value = V)),
        e.debounce !== void 0
          ? (clearTimeout(c), (i.value = V), (c = setTimeout(u, e.debounce)))
          : u();
    }
    function X() {
      requestAnimationFrame(() => {
        const V = d.value;
        if (V !== null) {
          const ue = V.parentNode.style,
            { overflow: he } = V.style;
          o.platform.is.firefox !== !0 && (V.style.overflow = "hidden"),
            (V.style.height = "1px"),
            (ue.marginBottom = V.scrollHeight - 1 + "px"),
            (V.style.height = V.scrollHeight + "px"),
            (V.style.overflow = he),
            (ue.marginBottom = "");
        }
      });
    }
    function oe(V) {
      O(V), clearTimeout(c), u !== void 0 && u(), t("change", V.target.value);
    }
    function $(V) {
      V !== void 0 && Ir(V),
        clearTimeout(c),
        u !== void 0 && u(),
        (l = !1),
        (a = !1),
        delete i.value,
        e.type !== "file" &&
          setTimeout(() => {
            d.value !== null &&
              (d.value.value = m.value !== void 0 ? m.value : "");
          });
    }
    function W() {
      return i.hasOwnProperty("value") === !0
        ? i.value
        : m.value !== void 0
        ? m.value
        : "";
    }
    Ye(() => {
      $();
    }),
      Ft(() => {
        e.autogrow === !0 && X();
      }),
      Object.assign(B, {
        innerValue: m,
        fieldClass: C(
          () =>
            `q-${y.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : "")
        ),
        hasShadow: C(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length > 0
        ),
        inputRef: d,
        emitValue: P,
        hasValue: _,
        floatingLabel: C(() => _.value === !0 || hi(e.displayValue)),
        getControl: () =>
          T(y.value === !0 ? "textarea" : "input", {
            ref: d,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...q.value,
            ...b.value,
            ...(e.type !== "file" ? { value: W() } : g.value),
          }),
        getShadowControl: () =>
          T(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (y.value === !0 ? "" : " text-no-wrap"),
            },
            [T("span", { class: "invisible" }, W()), T("span", e.shadowText)]
          ),
      });
    const fe = Pv(B);
    return (
      Object.assign(r, {
        focus: M,
        select: I,
        getNativeElement: () => d.value,
      }),
      fe
    );
  },
});
function ec(e, t) {
  const n = ce(null),
    r = C(() =>
      e.disable === !0
        ? null
        : T("span", { ref: n, class: "no-outline", tabindex: -1 })
    );
  function o(i) {
    const s = t.value;
    i !== void 0 && i.type.indexOf("key") === 0
      ? s !== null &&
        document.activeElement !== s &&
        s.contains(document.activeElement) === !0 &&
        s.focus()
      : n.value !== null &&
        (i === void 0 || (s !== null && s.contains(i.target) === !0)) &&
        n.value.focus();
  }
  return { refocusTargetEl: r, refocusTarget: o };
}
var tc = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
const Nv = T(
  "svg",
  {
    key: "svg",
    class: "q-radio__bg absolute non-selectable",
    viewBox: "0 0 24 24",
  },
  [
    T("path", {
      d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
    }),
    T("path", {
      class: "q-radio__check",
      d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
    }),
  ]
);
var Dv = Ie({
  name: "QRadio",
  props: {
    ...nn,
    ...ir,
    ...Qi,
    modelValue: { required: !0 },
    val: { required: !0 },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = we(),
      o = rn(e, r.$q),
      i = sr(e, tc),
      s = ce(null),
      { refocusTargetEl: l, refocusTarget: a } = ec(e, s),
      c = C(() => re(e.modelValue) === re(e.val)),
      u = C(
        () =>
          "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
          (e.disable === !0 ? " disabled" : "") +
          (o.value === !0 ? " q-radio--dark" : "") +
          (e.dense === !0 ? " q-radio--dense" : "") +
          (e.leftLabel === !0 ? " reverse" : "")
      ),
      d = C(() => {
        const _ =
          e.color !== void 0 && (e.keepColor === !0 || c.value === !0)
            ? ` text-${e.color}`
            : "";
        return `q-radio__inner relative-position q-radio__inner--${
          c.value === !0 ? "truthy" : "falsy"
        }${_}`;
      }),
      f = C(() => (c.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
      m = C(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
      v = C(() => {
        const _ = { type: "radio" };
        return (
          e.name !== void 0 &&
            Object.assign(_, {
              "^checked": c.value === !0 ? "checked" : void 0,
              name: e.name,
              value: e.val,
            }),
          _
        );
      }),
      S = Gu(v);
    function x(_) {
      _ !== void 0 && (Qe(_), a(_)),
        e.disable !== !0 && c.value !== !0 && n("update:modelValue", e.val, _);
    }
    function R(_) {
      (_.keyCode === 13 || _.keyCode === 32) && Qe(_);
    }
    function g(_) {
      (_.keyCode === 13 || _.keyCode === 32) && x(_);
    }
    return (
      Object.assign(r, { set: x }),
      () => {
        const _ =
          f.value !== null
            ? [
                T(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-radio__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [T(xt, { class: "q-radio__icon", name: f.value })]
                ),
              ]
            : [Nv];
        e.disable !== !0 &&
          S(_, "unshift", " q-radio__native q-ma-none q-pa-none");
        const O = [
          T(
            "div",
            { class: d.value, style: i.value, "aria-hidden": "true" },
            _
          ),
        ];
        l.value !== null && O.push(l.value);
        const B = e.label !== void 0 ? Qt(t.default, [e.label]) : rt(t.default);
        return (
          B !== void 0 &&
            O.push(T("div", { class: "q-radio__label q-anchor--skip" }, B)),
          T(
            "div",
            {
              ref: s,
              class: u.value,
              tabindex: m.value,
              role: "radio",
              "aria-label": e.label,
              "aria-checked": c.value === !0 ? "true" : "false",
              "aria-disabled": e.disable === !0 ? "true" : void 0,
              onClick: x,
              onKeydown: R,
              onKeyup: g,
            },
            O
          )
        );
      }
    );
  },
});
const nc = {
    ...nn,
    ...ir,
    ...Qi,
    modelValue: { required: !0, default: null },
    val: {},
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    indeterminateValue: { default: null },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  rc = ["update:modelValue"];
function oc(e, t) {
  const { props: n, slots: r, emit: o, proxy: i } = we(),
    { $q: s } = i,
    l = rn(n, s),
    a = ce(null),
    { refocusTargetEl: c, refocusTarget: u } = ec(n, a),
    d = sr(n, tc),
    f = C(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    m = C(() => {
      const E = re(n.val);
      return f.value === !0 ? n.modelValue.findIndex((D) => re(D) === E) : -1;
    }),
    v = C(() =>
      f.value === !0 ? m.value > -1 : re(n.modelValue) === re(n.trueValue)
    ),
    S = C(() =>
      f.value === !0 ? m.value === -1 : re(n.modelValue) === re(n.falseValue)
    ),
    x = C(() => v.value === !1 && S.value === !1),
    R = C(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    g = C(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? " disabled" : "") +
        (l.value === !0 ? ` q-${e}--dark` : "") +
        (n.dense === !0 ? ` q-${e}--dense` : "") +
        (n.leftLabel === !0 ? " reverse" : "")
    ),
    _ = C(() => {
      const E = v.value === !0 ? "truthy" : S.value === !0 ? "falsy" : "indet",
        D =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === "toggle" ? v.value === !0 : S.value !== !0))
            ? ` text-${n.color}`
            : "";
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${E}${D}`;
    }),
    O = C(() => {
      const E = { type: "checkbox" };
      return (
        n.name !== void 0 &&
          Object.assign(E, {
            "^checked": v.value === !0 ? "checked" : void 0,
            name: n.name,
            value: f.value === !0 ? n.val : n.trueValue,
          }),
        E
      );
    }),
    B = Gu(O),
    y = C(() => {
      const E = {
        tabindex: R.value,
        role: e === "toggle" ? "switch" : "checkbox",
        "aria-label": n.label,
        "aria-checked":
          x.value === !0 ? "mixed" : v.value === !0 ? "true" : "false",
      };
      return n.disable === !0 && (E["aria-disabled"] = "true"), E;
    });
  function w(E) {
    E !== void 0 && (Qe(E), u(E)),
      n.disable !== !0 && o("update:modelValue", b(), E);
  }
  function b() {
    if (f.value === !0) {
      if (v.value === !0) {
        const E = n.modelValue.slice();
        return E.splice(m.value, 1), E;
      }
      return n.modelValue.concat([n.val]);
    }
    if (v.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (S.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function q(E) {
    (E.keyCode === 13 || E.keyCode === 32) && Qe(E);
  }
  function M(E) {
    (E.keyCode === 13 || E.keyCode === 32) && w(E);
  }
  const I = t(v, x);
  return (
    Object.assign(i, { toggle: w }),
    () => {
      const E = I();
      n.disable !== !0 &&
        B(E, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
      const D = [
        T("div", { class: _.value, style: d.value, "aria-hidden": "true" }, E),
      ];
      c.value !== null && D.push(c.value);
      const P = n.label !== void 0 ? Qt(r.default, [n.label]) : rt(r.default);
      return (
        P !== void 0 &&
          D.push(T("div", { class: `q-${e}__label q-anchor--skip` }, P)),
        T(
          "div",
          {
            ref: a,
            class: g.value,
            ...y.value,
            onClick: w,
            onKeydown: q,
            onKeyup: M,
          },
          D
        )
      );
    }
  );
}
const Vv = T("div", { key: "svg", class: "q-checkbox__bg absolute" }, [
  T(
    "svg",
    { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" },
    [
      T("path", {
        class: "q-checkbox__truthy",
        fill: "none",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59",
      }),
      T("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" }),
    ]
  ),
]);
var Hv = Ie({
    name: "QCheckbox",
    props: nc,
    emits: rc,
    setup(e) {
      function t(n, r) {
        const o = C(
          () =>
            (n.value === !0
              ? e.checkedIcon
              : r.value === !0
              ? e.indeterminateIcon
              : e.uncheckedIcon) || null
        );
        return () =>
          o.value !== null
            ? [
                T(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [T(xt, { class: "q-checkbox__icon", name: o.value })]
                ),
              ]
            : [Vv];
      }
      return oc("checkbox", t);
    },
  }),
  zv = Ie({
    name: "QToggle",
    props: { ...nc, icon: String, iconColor: String },
    emits: rc,
    setup(e) {
      function t(n, r) {
        const o = C(
            () =>
              (n.value === !0
                ? e.checkedIcon
                : r.value === !0
                ? e.indeterminateIcon
                : e.uncheckedIcon) || e.icon
          ),
          i = C(() => (n.value === !0 ? e.iconColor : null));
        return () => [
          T("div", { class: "q-toggle__track" }),
          T(
            "div",
            { class: "q-toggle__thumb absolute flex flex-center no-wrap" },
            o.value !== void 0
              ? [T(xt, { name: o.value, color: i.value })]
              : void 0
          ),
        ];
      }
      return oc("toggle", t);
    },
  });
const ic = { radio: Dv, checkbox: Hv, toggle: zv },
  Uv = Object.keys(ic);
var Kv = Ie({
    name: "QOptionGroup",
    props: {
      ...nn,
      modelValue: { required: !0 },
      options: {
        type: Array,
        validator: (e) => e.every((t) => "value" in t && "label" in t),
      },
      name: String,
      type: { default: "radio", validator: (e) => Uv.includes(e) },
      color: String,
      keepColor: Boolean,
      dense: Boolean,
      size: String,
      leftLabel: Boolean,
      inline: Boolean,
      disable: Boolean,
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t, slots: n }) {
      const {
          proxy: { $q: r },
        } = we(),
        o = Array.isArray(e.modelValue);
      e.type === "radio"
        ? o === !0 && console.error("q-option-group: model should not be array")
        : o === !1 &&
          console.error("q-option-group: model should be array in your case");
      const i = rn(e, r),
        s = C(() => ic[e.type]),
        l = C(
          () =>
            "q-option-group q-gutter-x-sm" +
            (e.inline === !0 ? " q-option-group--inline" : "")
        ),
        a = C(() => {
          const u = { role: "group" };
          return (
            e.type === "radio" &&
              ((u.role = "radiogroup"),
              e.disable === !0 && (u["aria-disabled"] = "true")),
            u
          );
        });
      function c(u) {
        t("update:modelValue", u);
      }
      return () =>
        T(
          "div",
          { class: l.value, ...a.value },
          e.options.map((u, d) => {
            const f =
              n["label-" + d] !== void 0
                ? () => n["label-" + d](u)
                : n.label !== void 0
                ? () => n.label(u)
                : void 0;
            return T("div", [
              T(
                s.value,
                {
                  modelValue: e.modelValue,
                  val: u.value,
                  name: u.name === void 0 ? e.name : u.name,
                  disable: e.disable || u.disable,
                  label: f === void 0 ? u.label : null,
                  leftLabel: u.leftLabel === void 0 ? e.leftLabel : u.leftLabel,
                  color: u.color === void 0 ? e.color : u.color,
                  checkedIcon: u.checkedIcon,
                  uncheckedIcon: u.uncheckedIcon,
                  dark: u.dark || i.value,
                  size: u.size === void 0 ? e.size : u.size,
                  dense: e.dense,
                  keepColor: u.keepColor === void 0 ? e.keepColor : u.keepColor,
                  "onUpdate:modelValue": c,
                },
                f
              ),
            ]);
          })
        );
    },
  }),
  Wv = Ie({
    name: "DialogPlugin",
    props: {
      ...nn,
      title: String,
      message: String,
      prompt: Object,
      options: Object,
      progress: [Boolean, Object],
      html: Boolean,
      ok: { type: [String, Object, Boolean], default: !0 },
      cancel: [String, Object, Boolean],
      focus: {
        type: String,
        default: "ok",
        validator: (e) => ["ok", "cancel", "none"].includes(e),
      },
      stackButtons: Boolean,
      color: String,
      cardClass: [String, Array, Object],
      cardStyle: [String, Array, Object],
    },
    emits: ["ok", "hide"],
    setup(e, { emit: t }) {
      const { proxy: n } = we(),
        { $q: r } = n,
        o = rn(e, r),
        i = ce(null),
        s = ce(
          e.prompt !== void 0
            ? e.prompt.model
            : e.options !== void 0
            ? e.options.model
            : void 0
        ),
        l = C(
          () =>
            "q-dialog-plugin" +
            (o.value === !0 ? " q-dialog-plugin--dark q-dark" : "") +
            (e.progress !== !1 ? " q-dialog-plugin--progress" : "")
        ),
        a = C(() => e.color || (o.value === !0 ? "amber" : "primary")),
        c = C(() =>
          e.progress === !1
            ? null
            : ht(e.progress) === !0
            ? {
                component: e.progress.spinner || tr,
                props: { color: e.progress.color || a.value },
              }
            : { component: tr, props: { color: a.value } }
        ),
        u = C(() => e.prompt !== void 0 || e.options !== void 0),
        d = C(() => {
          if (u.value !== !0) return {};
          const {
            model: P,
            isValid: X,
            items: oe,
            ...$
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return $;
        }),
        f = C(() => (ht(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)),
        m = C(() =>
          ht(e.cancel) === !0 || e.cancel === !0
            ? r.lang.label.cancel
            : e.cancel
        ),
        v = C(() =>
          e.prompt !== void 0
            ? e.prompt.isValid !== void 0 && e.prompt.isValid(s.value) !== !0
            : e.options !== void 0
            ? e.options.isValid !== void 0 && e.options.isValid(s.value) !== !0
            : !1
        ),
        S = C(() => ({
          color: a.value,
          label: f.value,
          ripple: !1,
          disable: v.value,
          ...(ht(e.ok) === !0 ? e.ok : { flat: !0 }),
          "data-autofocus": (e.focus === "ok" && u.value !== !0) || void 0,
          onClick: _,
        })),
        x = C(() => ({
          color: a.value,
          label: m.value,
          ripple: !1,
          ...(ht(e.cancel) === !0 ? e.cancel : { flat: !0 }),
          "data-autofocus": (e.focus === "cancel" && u.value !== !0) || void 0,
          onClick: O,
        }));
      pe(() => e.prompt && e.prompt.model, y),
        pe(() => e.options && e.options.model, y);
      function R() {
        i.value.show();
      }
      function g() {
        i.value.hide();
      }
      function _() {
        t("ok", re(s.value)), g();
      }
      function O() {
        g();
      }
      function B() {
        t("hide");
      }
      function y(P) {
        s.value = P;
      }
      function w(P) {
        v.value !== !0 &&
          e.prompt.type !== "textarea" &&
          Gn(P, 13) === !0 &&
          _();
      }
      function b(P, X) {
        return e.html === !0
          ? T(Mn, { class: P, innerHTML: X })
          : T(Mn, { class: P }, () => X);
      }
      function q() {
        return [
          T(Fv, {
            modelValue: s.value,
            ...d.value,
            color: a.value,
            dense: !0,
            autofocus: !0,
            dark: o.value,
            "onUpdate:modelValue": y,
            onKeyup: w,
          }),
        ];
      }
      function M() {
        return [
          T(Kv, {
            modelValue: s.value,
            ...d.value,
            color: a.value,
            options: e.options.items,
            dark: o.value,
            "onUpdate:modelValue": y,
          }),
        ];
      }
      function I() {
        const P = [];
        return (
          e.cancel && P.push(T(fi, x.value)),
          e.ok && P.push(T(fi, S.value)),
          T(
            gv,
            {
              class: e.stackButtons === !0 ? "items-end" : "",
              vertical: e.stackButtons,
              align: "right",
            },
            () => P
          )
        );
      }
      function E() {
        const P = [];
        return (
          e.title && P.push(b("q-dialog__title", e.title)),
          e.progress !== !1 &&
            P.push(
              T(Mn, { class: "q-dialog__progress" }, () =>
                T(c.value.component, c.value.props)
              )
            ),
          e.message && P.push(b("q-dialog__message", e.message)),
          e.prompt !== void 0
            ? P.push(T(Mn, { class: "scroll q-dialog-plugin__form" }, q))
            : e.options !== void 0 &&
              P.push(
                T(Aa, { dark: o.value }),
                T(Mn, { class: "scroll q-dialog-plugin__form" }, M),
                T(Aa, { dark: o.value })
              ),
          (e.ok || e.cancel) && P.push(I()),
          P
        );
      }
      function D() {
        return [
          T(
            pv,
            {
              class: [l.value, e.cardClass],
              style: e.cardStyle,
              dark: o.value,
            },
            E
          ),
        ];
      }
      return (
        Object.assign(n, { show: R, hide: g }),
        () => T(mv, { ref: i, onHide: B }, D)
      );
    },
  });
function sc(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n]
      ? ((e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }), sc(e[n], t[n]))
      : (e[n] = t[n]);
}
function Qv(e, t, n) {
  return (r) => {
    let o, i;
    const s = t === !0 && r.component !== void 0;
    if (s === !0) {
      const { component: g, componentProps: _ } = r;
      (o = typeof g == "string" ? n.component(g) : g), (i = _ || {});
    } else {
      const { class: g, style: _, ...O } = r;
      (o = e),
        (i = O),
        g !== void 0 && (O.cardClass = g),
        _ !== void 0 && (O.cardStyle = _);
    }
    let l,
      a = !1;
    const c = ce(null),
      u = Ui(),
      d = (g) => {
        if (c.value !== null && c.value[g] !== void 0) {
          c.value[g]();
          return;
        }
        const _ = l.$.subTree;
        if (_ && _.component) {
          if (_.component.proxy && _.component.proxy[g]) {
            _.component.proxy[g]();
            return;
          }
          if (
            _.component.subTree &&
            _.component.subTree.component &&
            _.component.subTree.component.proxy &&
            _.component.subTree.component.proxy[g]
          ) {
            _.component.subTree.component.proxy[g]();
            return;
          }
        }
        console.error("[Quasar] Incorrectly defined Dialog component");
      },
      f = [],
      m = [],
      v = {
        onOk(g) {
          return f.push(g), v;
        },
        onCancel(g) {
          return m.push(g), v;
        },
        onDismiss(g) {
          return f.push(g), m.push(g), v;
        },
        hide() {
          return d("hide"), v;
        },
        update(g) {
          if (l !== null) {
            if (s === !0) Object.assign(i, g);
            else {
              const { class: _, style: O, ...B } = g;
              _ !== void 0 && (B.cardClass = _),
                O !== void 0 && (B.cardStyle = O),
                sc(i, B);
            }
            l.$forceUpdate();
          }
          return v;
        },
      },
      S = (g) => {
        (a = !0),
          f.forEach((_) => {
            _(g);
          });
      },
      x = () => {
        R.unmount(u),
          Uu(u),
          (R = null),
          (l = null),
          a !== !0 &&
            m.forEach((g) => {
              g();
            });
      };
    let R = tu(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          T(o, {
            ...i,
            ref: c,
            onOk: S,
            onHide: x,
            onVnodeMounted(...g) {
              typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...g),
                Be(() => d("show"));
            },
          }),
      },
      n
    );
    return (l = R.mount(u)), v;
  };
}
var Jv = {
    install({ $q: e, parentApp: t }) {
      (e.dialog = Qv(Wv, !0, t)),
        this.__installed !== !0 && (this.create = e.dialog);
    },
  },
  Xv = { config: {}, plugins: { Notify: Dg, Dialog: Jv, Cookies: Vr } };
const Yv = "/";
async function Zv({ app: e, router: t, store: n }, r) {
  let o = !1;
  const i = (a) => {
      try {
        return t.resolve(a).href;
      } catch {}
      return Object(a) === a ? null : a;
    },
    s = (a) => {
      if (((o = !0), typeof a == "string" && /^https?:\/\//.test(a))) {
        window.location.href = a;
        return;
      }
      const c = i(a);
      c !== null && ((window.location.href = c), window.location.reload());
    },
    l = window.location.href.replace(window.location.origin, "");
  for (let a = 0; o === !1 && a < r.length; a++)
    try {
      await r[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: s,
        urlPath: l,
        publicPath: Yv,
      });
    } catch (c) {
      if (c && c.url) {
        s(c.url);
        return;
      }
      console.error("[Quasar] boot error:", c);
      return;
    }
  o !== !0 && (e.use(t), e.mount("#q-app"));
}
ig(Wl, Xv).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          "allSettled",
          (r) =>
            r.map((o) => {
              if (o.status === "rejected") {
                console.error("[Quasar] boot error:", o.reason);
                return;
              }
              return o.value.default;
            }),
        ]
      : ["all", (r) => r.map((o) => o.default)];
  return Promise[t]([
    Oe(
      () =>
        Promise.resolve().then(function () {
          return Vm;
        }),
      void 0
    ),
    Oe(() => import("./register.30c73d6e.js"), []),
  ]).then((r) => {
    const o = n(r).filter((i) => typeof i == "function");
    Zv(e, o);
  });
});
export {
  rh as $,
  Sb as A,
  Fe as B,
  tv as C,
  nv as D,
  It as E,
  Rb as F,
  ro as G,
  Qt as H,
  jl as I,
  eb as J,
  tb as K,
  Eu as L,
  lh as M,
  bb as N,
  Mn as O,
  Aa as P,
  fi as Q,
  Fv as R,
  Yt as S,
  xn as T,
  pv as U,
  to as V,
  xl as W,
  zu as X,
  Qe as Y,
  Wi as Z,
  Ym as _,
  jt as a,
  wt as a$,
  ob as a0,
  rb as a1,
  et as a2,
  Gv as a3,
  Sg as a4,
  Rg as a5,
  pg as a6,
  Xf as a7,
  _b as a8,
  wg as a9,
  Qg as aA,
  Kg as aB,
  Cb as aC,
  Wg as aD,
  Gg as aE,
  dv as aF,
  Dd as aG,
  Ta as aH,
  Pa as aI,
  fv as aJ,
  Yg as aK,
  yg as aL,
  Qi as aM,
  $v as aN,
  Ai as aO,
  hi as aP,
  Ir as aQ,
  mv as aR,
  jv as aS,
  Hu as aT,
  ti as aU,
  mb as aV,
  hb as aW,
  ht as aX,
  sb as aY,
  Hv as aZ,
  rr as a_,
  fb as aa,
  Gn as ab,
  Zl as ac,
  xt as ad,
  Eo as ae,
  kv as af,
  zg as ag,
  Hg as ah,
  nn as ai,
  rn as aj,
  Jl as ak,
  yf as al,
  Ev as am,
  Sv as an,
  Pv as ao,
  Rv as ap,
  ir as aq,
  sr as ar,
  wb as as,
  ag as at,
  $t as au,
  Hd as av,
  zd as aw,
  Or as ax,
  ke as ay,
  Ug as az,
  Ft as b,
  ib as b0,
  ei as b1,
  gv as b2,
  gi as b3,
  gg as b4,
  vg as b5,
  sg as b6,
  kb as b7,
  Eb as b8,
  Qc as b9,
  re as ba,
  il as bb,
  ab as bc,
  lb as bd,
  Gu as be,
  Pb as bf,
  xb as bg,
  nb as bh,
  ph as bi,
  vb as bj,
  gb as bk,
  yb as bl,
  C as c,
  Gr as d,
  Ye as e,
  El as f,
  we as g,
  T as h,
  pb as i,
  Bl as j,
  uf as k,
  kf as l,
  Ml as m,
  Be as n,
  kl as o,
  Ne as p,
  Ie as q,
  ce as r,
  db as s,
  rt as t,
  Ve as u,
  xr as v,
  pe as w,
  ub as x,
  cb as y,
  Zn as z,
};
