const eu = (function () {
    const t = document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  wi = {},
  tu = "/",
  ze = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((o) => {
            if (((o = `${tu}${o}`), o in wi)) return;
            wi[o] = !0;
            const r = o.endsWith(".css"),
              i = r ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${o}"]${i}`)) return;
            const s = document.createElement("link");
            if (
              ((s.rel = r ? "stylesheet" : eu),
              r || ((s.as = "script"), (s.crossOrigin = "")),
              (s.href = o),
              document.head.appendChild(s),
              r)
            )
              return new Promise((l, a) => {
                s.addEventListener("load", l),
                  s.addEventListener("error", () =>
                    a(new Error(`Unable to preload CSS for ${o}`))
                  );
              });
          })
        ).then(() => t());
  };
function zr(e, t) {
  const n = Object.create(null),
    o = e.split(",");
  for (let r = 0; r < o.length; r++) n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const nu =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ou = zr(nu);
function Xs(e) {
  return !!e || e === "";
}
function Hr(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = Ee(o) ? su(o) : Hr(o);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else {
    if (Ee(e)) return e;
    if (_e(e)) return e;
  }
}
const ru = /;(?![^(]*\))/g,
  iu = /:(.+)/;
function su(e) {
  const t = {};
  return (
    e.split(ru).forEach((n) => {
      if (n) {
        const o = n.split(iu);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }),
    t
  );
}
function Kr(e) {
  let t = "";
  if (Ee(e)) t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const o = Kr(e[n]);
      o && (t += o + " ");
    }
  else if (_e(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const cg = (e) =>
    Ee(e)
      ? e
      : e == null
      ? ""
      : ee(e) || (_e(e) && (e.toString === nl || !se(e.toString)))
      ? JSON.stringify(e, Gs, 2)
      : String(e),
  Gs = (e, t) =>
    t && t.__v_isRef
      ? Gs(e, t.value)
      : un(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, r]) => ((n[`${o} =>`] = r), n),
            {}
          ),
        }
      : el(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : _e(t) && !ee(t) && !ol(t)
      ? String(t)
      : t,
  be = {},
  an = [],
  tt = () => {},
  lu = () => !1,
  au = /^on[^a-z]/,
  To = (e) => au.test(e),
  Ur = (e) => e.startsWith("onUpdate:"),
  Pe = Object.assign,
  Wr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  uu = Object.prototype.hasOwnProperty,
  ae = (e, t) => uu.call(e, t),
  ee = Array.isArray,
  un = (e) => qo(e) === "[object Map]",
  el = (e) => qo(e) === "[object Set]",
  se = (e) => typeof e == "function",
  Ee = (e) => typeof e == "string",
  Qr = (e) => typeof e == "symbol",
  _e = (e) => e !== null && typeof e == "object",
  tl = (e) => _e(e) && se(e.then) && se(e.catch),
  nl = Object.prototype.toString,
  qo = (e) => nl.call(e),
  cu = (e) => qo(e).slice(8, -1),
  ol = (e) => qo(e) === "[object Object]",
  Yr = (e) =>
    Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  co = zr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ao = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  fu = /-(\w)/g,
  ct = Ao((e) => e.replace(fu, (t, n) => (n ? n.toUpperCase() : ""))),
  du = /\B([A-Z])/g,
  bn = Ao((e) => e.replace(du, "-$1").toLowerCase()),
  Oo = Ao((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Yo = Ao((e) => (e ? `on${Oo(e)}` : "")),
  Bn = (e, t) => !Object.is(e, t),
  qn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  bo = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  rl = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let xi;
const hu = () =>
  xi ||
  (xi =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let st;
class il {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = st),
      !t && st && (this.index = (st.scopes || (st.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = st;
      try {
        return (st = this), t();
      } finally {
        st = n;
      }
    }
  }
  on() {
    st = this;
  }
  off() {
    st = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function sl(e) {
  return new il(e);
}
function mu(e, t = st) {
  t && t.active && t.effects.push(e);
}
const Zr = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  ll = (e) => (e.w & At) > 0,
  al = (e) => (e.n & At) > 0,
  gu = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= At;
  },
  pu = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let o = 0; o < t.length; o++) {
        const r = t[o];
        ll(r) && !al(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~At),
          (r.n &= ~At);
      }
      t.length = n;
    }
  },
  br = new WeakMap();
let Rn = 0,
  At = 1;
const yr = 30;
let Xe;
const Ht = Symbol(""),
  _r = Symbol("");
class Jr {
  constructor(t, n = null, o) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      mu(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Xe,
      n = Pt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Xe),
        (Xe = this),
        (Pt = !0),
        (At = 1 << ++Rn),
        Rn <= yr ? gu(this) : Ci(this),
        this.fn()
      );
    } finally {
      Rn <= yr && pu(this),
        (At = 1 << --Rn),
        (Xe = this.parent),
        (Pt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Xe === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ci(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ci(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Pt = !0;
const ul = [];
function yn() {
  ul.push(Pt), (Pt = !1);
}
function _n() {
  const e = ul.pop();
  Pt = e === void 0 ? !0 : e;
}
function Ve(e, t, n) {
  if (Pt && Xe) {
    let o = br.get(e);
    o || br.set(e, (o = new Map()));
    let r = o.get(n);
    r || o.set(n, (r = Zr())), cl(r);
  }
}
function cl(e, t) {
  let n = !1;
  Rn <= yr ? al(e) || ((e.n |= At), (n = !ll(e))) : (n = !e.has(Xe)),
    n && (e.add(Xe), Xe.deps.push(e));
}
function gt(e, t, n, o, r, i) {
  const s = br.get(e);
  if (!s) return;
  let l = [];
  if (t === "clear") l = [...s.values()];
  else if (n === "length" && ee(e))
    s.forEach((a, c) => {
      (c === "length" || c >= o) && l.push(a);
    });
  else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case "add":
        ee(e)
          ? Yr(n) && l.push(s.get("length"))
          : (l.push(s.get(Ht)), un(e) && l.push(s.get(_r)));
        break;
      case "delete":
        ee(e) || (l.push(s.get(Ht)), un(e) && l.push(s.get(_r)));
        break;
      case "set":
        un(e) && l.push(s.get(Ht));
        break;
    }
  if (l.length === 1) l[0] && wr(l[0]);
  else {
    const a = [];
    for (const c of l) c && a.push(...c);
    wr(Zr(a));
  }
}
function wr(e, t) {
  const n = ee(e) ? e : [...e];
  for (const o of n) o.computed && ki(o);
  for (const o of n) o.computed || ki(o);
}
function ki(e, t) {
  (e !== Xe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const vu = zr("__proto__,__v_isRef,__isVue"),
  fl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Qr)
  ),
  bu = Xr(),
  yu = Xr(!1, !0),
  _u = Xr(!0),
  Ei = wu();
function wu() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const o = oe(this);
        for (let i = 0, s = this.length; i < s; i++) Ve(o, "get", i + "");
        const r = o[t](...n);
        return r === -1 || r === !1 ? o[t](...n.map(oe)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        yn();
        const o = oe(this)[t].apply(this, n);
        return _n(), o;
      };
    }),
    e
  );
}
function Xr(e = !1, t = !1) {
  return function (o, r, i) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && i === (e ? (t ? Bu : pl) : t ? gl : ml).get(o))
      return o;
    const s = ee(o);
    if (!e && s && ae(Ei, r)) return Reflect.get(Ei, r, i);
    const l = Reflect.get(o, r, i);
    return (Qr(r) ? fl.has(r) : vu(r)) || (e || Ve(o, "get", r), t)
      ? l
      : xe(l)
      ? s && Yr(r)
        ? l
        : l.value
      : _e(l)
      ? e
        ? vl(l)
        : Mt(l)
      : l;
  };
}
const xu = dl(),
  Cu = dl(!0);
function dl(e = !1) {
  return function (n, o, r, i) {
    let s = n[o];
    if (fn(s) && xe(s) && !xe(r)) return !1;
    if (
      !e &&
      (!yo(r) && !fn(r) && ((s = oe(s)), (r = oe(r))),
      !ee(n) && xe(s) && !xe(r))
    )
      return (s.value = r), !0;
    const l = ee(n) && Yr(o) ? Number(o) < n.length : ae(n, o),
      a = Reflect.set(n, o, r, i);
    return (
      n === oe(i) && (l ? Bn(r, s) && gt(n, "set", o, r) : gt(n, "add", o, r)),
      a
    );
  };
}
function ku(e, t) {
  const n = ae(e, t);
  e[t];
  const o = Reflect.deleteProperty(e, t);
  return o && n && gt(e, "delete", t, void 0), o;
}
function Eu(e, t) {
  const n = Reflect.has(e, t);
  return (!Qr(t) || !fl.has(t)) && Ve(e, "has", t), n;
}
function Su(e) {
  return Ve(e, "iterate", ee(e) ? "length" : Ht), Reflect.ownKeys(e);
}
const hl = { get: bu, set: xu, deleteProperty: ku, has: Eu, ownKeys: Su },
  Ru = {
    get: _u,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Pu = Pe({}, hl, { get: yu, set: Cu }),
  Gr = (e) => e,
  Mo = (e) => Reflect.getPrototypeOf(e);
function Xn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = oe(e),
    i = oe(t);
  n || (t !== i && Ve(r, "get", t), Ve(r, "get", i));
  const { has: s } = Mo(r),
    l = o ? Gr : n ? ni : Fn;
  if (s.call(r, t)) return l(e.get(t));
  if (s.call(r, i)) return l(e.get(i));
  e !== r && e.get(t);
}
function Gn(e, t = !1) {
  const n = this.__v_raw,
    o = oe(n),
    r = oe(e);
  return (
    t || (e !== r && Ve(o, "has", e), Ve(o, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function eo(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ve(oe(e), "iterate", Ht), Reflect.get(e, "size", e)
  );
}
function Si(e) {
  e = oe(e);
  const t = oe(this);
  return Mo(t).has.call(t, e) || (t.add(e), gt(t, "add", e, e)), this;
}
function Ri(e, t) {
  t = oe(t);
  const n = oe(this),
    { has: o, get: r } = Mo(n);
  let i = o.call(n, e);
  i || ((e = oe(e)), (i = o.call(n, e)));
  const s = r.call(n, e);
  return (
    n.set(e, t), i ? Bn(t, s) && gt(n, "set", e, t) : gt(n, "add", e, t), this
  );
}
function Pi(e) {
  const t = oe(this),
    { has: n, get: o } = Mo(t);
  let r = n.call(t, e);
  r || ((e = oe(e)), (r = n.call(t, e))), o && o.call(t, e);
  const i = t.delete(e);
  return r && gt(t, "delete", e, void 0), i;
}
function Ti() {
  const e = oe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && gt(e, "clear", void 0, void 0), n;
}
function to(e, t) {
  return function (o, r) {
    const i = this,
      s = i.__v_raw,
      l = oe(s),
      a = t ? Gr : e ? ni : Fn;
    return (
      !e && Ve(l, "iterate", Ht), s.forEach((c, u) => o.call(r, a(c), a(u), i))
    );
  };
}
function no(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = oe(r),
      s = un(i),
      l = e === "entries" || (e === Symbol.iterator && s),
      a = e === "keys" && s,
      c = r[e](...o),
      u = n ? Gr : t ? ni : Fn;
    return (
      !t && Ve(i, "iterate", a ? _r : Ht),
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
function yt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Tu() {
  const e = {
      get(i) {
        return Xn(this, i);
      },
      get size() {
        return eo(this);
      },
      has: Gn,
      add: Si,
      set: Ri,
      delete: Pi,
      clear: Ti,
      forEach: to(!1, !1),
    },
    t = {
      get(i) {
        return Xn(this, i, !1, !0);
      },
      get size() {
        return eo(this);
      },
      has: Gn,
      add: Si,
      set: Ri,
      delete: Pi,
      clear: Ti,
      forEach: to(!1, !0),
    },
    n = {
      get(i) {
        return Xn(this, i, !0);
      },
      get size() {
        return eo(this, !0);
      },
      has(i) {
        return Gn.call(this, i, !0);
      },
      add: yt("add"),
      set: yt("set"),
      delete: yt("delete"),
      clear: yt("clear"),
      forEach: to(!0, !1),
    },
    o = {
      get(i) {
        return Xn(this, i, !0, !0);
      },
      get size() {
        return eo(this, !0);
      },
      has(i) {
        return Gn.call(this, i, !0);
      },
      add: yt("add"),
      set: yt("set"),
      delete: yt("delete"),
      clear: yt("clear"),
      forEach: to(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = no(i, !1, !1)),
        (n[i] = no(i, !0, !1)),
        (t[i] = no(i, !1, !0)),
        (o[i] = no(i, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [qu, Au, Ou, Mu] = Tu();
function ei(e, t) {
  const n = t ? (e ? Mu : Ou) : e ? Au : qu;
  return (o, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? o
      : Reflect.get(ae(n, r) && r in o ? n : o, r, i);
}
const $u = { get: ei(!1, !1) },
  Lu = { get: ei(!1, !0) },
  Iu = { get: ei(!0, !1) },
  ml = new WeakMap(),
  gl = new WeakMap(),
  pl = new WeakMap(),
  Bu = new WeakMap();
function Fu(e) {
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
function ju(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fu(cu(e));
}
function Mt(e) {
  return fn(e) ? e : ti(e, !1, hl, $u, ml);
}
function Vu(e) {
  return ti(e, !1, Pu, Lu, gl);
}
function vl(e) {
  return ti(e, !0, Ru, Iu, pl);
}
function ti(e, t, n, o, r) {
  if (!_e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const s = ju(e);
  if (s === 0) return e;
  const l = new Proxy(e, s === 2 ? o : n);
  return r.set(e, l), l;
}
function Tt(e) {
  return fn(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function fn(e) {
  return !!(e && e.__v_isReadonly);
}
function yo(e) {
  return !!(e && e.__v_isShallow);
}
function bl(e) {
  return Tt(e) || fn(e);
}
function oe(e) {
  const t = e && e.__v_raw;
  return t ? oe(t) : e;
}
function ft(e) {
  return bo(e, "__v_skip", !0), e;
}
const Fn = (e) => (_e(e) ? Mt(e) : e),
  ni = (e) => (_e(e) ? vl(e) : e);
function yl(e) {
  Pt && Xe && ((e = oe(e)), cl(e.dep || (e.dep = Zr())));
}
function _l(e, t) {
  (e = oe(e)), e.dep && wr(e.dep);
}
function xe(e) {
  return !!(e && e.__v_isRef === !0);
}
function ce(e) {
  return wl(e, !1);
}
function Nu(e) {
  return wl(e, !0);
}
function wl(e, t) {
  return xe(e) ? e : new Du(e, t);
}
class Du {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : oe(t)),
      (this._value = n ? t : Fn(t));
  }
  get value() {
    return yl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || yo(t) || fn(t);
    (t = n ? t : oe(t)),
      Bn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Fn(t)), _l(this));
  }
}
function Kt(e) {
  return xe(e) ? e.value : e;
}
const zu = {
  get: (e, t, n) => Kt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return xe(r) && !xe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function xl(e) {
  return Tt(e) ? e : new Proxy(e, zu);
}
function Hu(e) {
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Uu(e, n);
  return t;
}
class Ku {
  constructor(t, n, o) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = o),
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
function Uu(e, t, n) {
  const o = e[t];
  return xe(o) ? o : new Ku(e, t, n);
}
var Cl;
class Wu {
  constructor(t, n, o, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Cl] = !1),
      (this._dirty = !0),
      (this.effect = new Jr(t, () => {
        this._dirty || ((this._dirty = !0), _l(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = oe(this);
    return (
      yl(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Cl = "__v_isReadonly";
function Qu(e, t, n = !1) {
  let o, r;
  const i = se(e);
  return (
    i ? ((o = e), (r = tt)) : ((o = e.get), (r = e.set)),
    new Wu(o, r, i || !r, n)
  );
}
function qt(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    $o(i, t, n);
  }
  return r;
}
function We(e, t, n, o) {
  if (se(e)) {
    const i = qt(e, t, n, o);
    return (
      i &&
        tl(i) &&
        i.catch((s) => {
          $o(s, t, n);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(We(e[i], t, n, o));
  return r;
}
function $o(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
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
      qt(a, null, 10, [e, s, l]);
      return;
    }
  }
  Yu(e, n, r, o);
}
function Yu(e, t, n, o = !0) {
  console.error(e);
}
let jn = !1,
  xr = !1;
const Oe = [];
let at = 0;
const cn = [];
let mt = null,
  Ft = 0;
const kl = Promise.resolve();
let oi = null;
function Me(e) {
  const t = oi || kl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zu(e) {
  let t = at + 1,
    n = Oe.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1;
    Vn(Oe[o]) < e ? (t = o + 1) : (n = o);
  }
  return t;
}
function ri(e) {
  (!Oe.length || !Oe.includes(e, jn && e.allowRecurse ? at + 1 : at)) &&
    (e.id == null ? Oe.push(e) : Oe.splice(Zu(e.id), 0, e), El());
}
function El() {
  !jn && !xr && ((xr = !0), (oi = kl.then(Rl)));
}
function Ju(e) {
  const t = Oe.indexOf(e);
  t > at && Oe.splice(t, 1);
}
function Xu(e) {
  ee(e)
    ? cn.push(...e)
    : (!mt || !mt.includes(e, e.allowRecurse ? Ft + 1 : Ft)) && cn.push(e),
    El();
}
function qi(e, t = jn ? at + 1 : 0) {
  for (; t < Oe.length; t++) {
    const n = Oe[t];
    n && n.pre && (Oe.splice(t, 1), t--, n());
  }
}
function Sl(e) {
  if (cn.length) {
    const t = [...new Set(cn)];
    if (((cn.length = 0), mt)) {
      mt.push(...t);
      return;
    }
    for (mt = t, mt.sort((n, o) => Vn(n) - Vn(o)), Ft = 0; Ft < mt.length; Ft++)
      mt[Ft]();
    (mt = null), (Ft = 0);
  }
}
const Vn = (e) => (e.id == null ? 1 / 0 : e.id),
  Gu = (e, t) => {
    const n = Vn(e) - Vn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Rl(e) {
  (xr = !1), (jn = !0), Oe.sort(Gu);
  const t = tt;
  try {
    for (at = 0; at < Oe.length; at++) {
      const n = Oe[at];
      n && n.active !== !1 && qt(n, null, 14);
    }
  } finally {
    (at = 0),
      (Oe.length = 0),
      Sl(),
      (jn = !1),
      (oi = null),
      (Oe.length || cn.length) && Rl();
  }
}
function ec(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || be;
  let r = n;
  const i = t.startsWith("update:"),
    s = i && t.slice(7);
  if (s && s in o) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`,
      { number: d, trim: f } = o[u] || be;
    f && (r = n.map((g) => g.trim())), d && (r = n.map(rl));
  }
  let l,
    a = o[(l = Yo(t))] || o[(l = Yo(ct(t)))];
  !a && i && (a = o[(l = Yo(bn(t)))]), a && We(a, e, 6, r);
  const c = o[l + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), We(c, e, 6, r);
  }
}
function Pl(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let s = {},
    l = !1;
  if (!se(e)) {
    const a = (c) => {
      const u = Pl(c, t, !0);
      u && ((l = !0), Pe(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (_e(e) && o.set(e, null), null)
    : (ee(i) ? i.forEach((a) => (s[a] = null)) : Pe(s, i),
      _e(e) && o.set(e, s),
      s);
}
function Lo(e, t) {
  return !e || !To(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, bn(t)) || ae(e, t));
}
let Ue = null,
  Io = null;
function _o(e) {
  const t = Ue;
  return (Ue = e), (Io = (e && e.type.__scopeId) || null), t;
}
function fg(e) {
  Io = e;
}
function dg() {
  Io = null;
}
function tc(e, t = Ue, n) {
  if (!t || e._n) return e;
  const o = (...r) => {
    o._d && Di(-1);
    const i = _o(t);
    let s;
    try {
      s = e(...r);
    } finally {
      _o(i), o._d && Di(1);
    }
    return s;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Zo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: d,
    data: f,
    setupState: g,
    ctx: v,
    inheritAttrs: T,
  } = e;
  let k, S;
  const p = _o(e);
  try {
    if (n.shapeFlag & 4) {
      const q = r || o;
      (k = lt(u.call(q, q, d, i, g, f, v))), (S = a);
    } else {
      const q = t;
      (k = lt(
        q.length > 1 ? q(i, { attrs: a, slots: l, emit: c }) : q(i, null)
      )),
        (S = t.props ? a : nc(a));
    }
  } catch (q) {
    (Mn.length = 0), $o(q, e, 1), (k = Be(nt));
  }
  let _ = k;
  if (S && T !== !1) {
    const q = Object.keys(S),
      { shapeFlag: I } = _;
    q.length && I & 7 && (s && q.some(Ur) && (S = oc(S, s)), (_ = pt(_, S)));
  }
  return (
    n.dirs && ((_ = pt(_)), (_.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (_.transition = n.transition),
    (k = _),
    _o(p),
    k
  );
}
const nc = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || To(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  oc = (e, t) => {
    const n = {};
    for (const o in e) (!Ur(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
function rc(e, t, n) {
  const { props: o, children: r, component: i } = e,
    { props: s, children: l, patchFlag: a } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return o ? Ai(o, s, c) : !!s;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (s[f] !== o[f] && !Lo(c, f)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : o === s
      ? !1
      : o
      ? s
        ? Ai(o, s, c)
        : !0
      : !!s;
  return !1;
}
function Ai(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Lo(n, i)) return !0;
  }
  return !1;
}
function ic({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Tl = (e) => e.__isSuspense;
function sc(e, t) {
  t && t.pendingBranch
    ? ee(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Xu(e);
}
function fo(e, t) {
  if (Re) {
    let n = Re.provides;
    const o = Re.parent && Re.parent.provides;
    o === n && (n = Re.provides = Object.create(o)), (n[e] = t);
  }
}
function je(e, t, n = !1) {
  const o = Re || Ue;
  if (o) {
    const r =
      o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && se(t) ? t.call(o.proxy) : t;
  }
}
const Oi = {};
function ge(e, t, n) {
  return ql(e, t, n);
}
function ql(
  e,
  t,
  { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = be
) {
  const l = Re;
  let a,
    c = !1,
    u = !1;
  if (
    (xe(e)
      ? ((a = () => e.value), (c = yo(e)))
      : Tt(e)
      ? ((a = () => e), (o = !0))
      : ee(e)
      ? ((u = !0),
        (c = e.some((S) => Tt(S) || yo(S))),
        (a = () =>
          e.map((S) => {
            if (xe(S)) return S.value;
            if (Tt(S)) return Nt(S);
            if (se(S)) return qt(S, l, 2);
          })))
      : se(e)
      ? t
        ? (a = () => qt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return d && d(), We(e, l, 3, [f]);
          })
      : (a = tt),
    t && o)
  ) {
    const S = a;
    a = () => Nt(S());
  }
  let d,
    f = (S) => {
      d = k.onStop = () => {
        qt(S, l, 4);
      };
    };
  if (zn)
    return (f = tt), t ? n && We(t, l, 3, [a(), u ? [] : void 0, f]) : a(), tt;
  let g = u ? [] : Oi;
  const v = () => {
    if (!!k.active)
      if (t) {
        const S = k.run();
        (o || c || (u ? S.some((p, _) => Bn(p, g[_])) : Bn(S, g))) &&
          (d && d(), We(t, l, 3, [S, g === Oi ? void 0 : g, f]), (g = S));
      } else k.run();
  };
  v.allowRecurse = !!t;
  let T;
  r === "sync"
    ? (T = v)
    : r === "post"
    ? (T = () => qe(v, l && l.suspense))
    : ((v.pre = !0), l && (v.id = l.uid), (T = () => ri(v)));
  const k = new Jr(a, T);
  return (
    t
      ? n
        ? v()
        : (g = k.run())
      : r === "post"
      ? qe(k.run.bind(k), l && l.suspense)
      : k.run(),
    () => {
      k.stop(), l && l.scope && Wr(l.scope.effects, k);
    }
  );
}
function lc(e, t, n) {
  const o = this.proxy,
    r = Ee(e) ? (e.includes(".") ? Al(o, e) : () => o[e]) : e.bind(o, o);
  let i;
  se(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = Re;
  hn(this);
  const l = ql(r, i.bind(o), n);
  return s ? hn(s) : Ut(), l;
}
function Al(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++) o = o[n[r]];
    return o;
  };
}
function Nt(e, t) {
  if (!_e(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), xe(e))) Nt(e.value, t);
  else if (ee(e)) for (let n = 0; n < e.length; n++) Nt(e[n], t);
  else if (el(e) || un(e))
    e.forEach((n) => {
      Nt(n, t);
    });
  else if (ol(e)) for (const n in e) Nt(e[n], t);
  return e;
}
function Ol() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Yt(() => {
      e.isMounted = !0;
    }),
    Qe(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ne = [Function, Array],
  ac = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ne,
      onEnter: Ne,
      onAfterEnter: Ne,
      onEnterCancelled: Ne,
      onBeforeLeave: Ne,
      onLeave: Ne,
      onAfterLeave: Ne,
      onLeaveCancelled: Ne,
      onBeforeAppear: Ne,
      onAppear: Ne,
      onAfterAppear: Ne,
      onAppearCancelled: Ne,
    },
    setup(e, { slots: t }) {
      const n = we(),
        o = Ol();
      let r;
      return () => {
        const i = t.default && ii(t.default(), !0);
        if (!i || !i.length) return;
        let s = i[0];
        if (i.length > 1) {
          for (const T of i)
            if (T.type !== nt) {
              s = T;
              break;
            }
        }
        const l = oe(e),
          { mode: a } = l;
        if (o.isLeaving) return Jo(s);
        const c = Mi(s);
        if (!c) return Jo(s);
        const u = Nn(c, l, o, n);
        dn(c, u);
        const d = n.subTree,
          f = d && Mi(d);
        let g = !1;
        const { getTransitionKey: v } = c.type;
        if (v) {
          const T = v();
          r === void 0 ? (r = T) : T !== r && ((r = T), (g = !0));
        }
        if (f && f.type !== nt && (!jt(c, f) || g)) {
          const T = Nn(f, l, o, n);
          if ((dn(f, T), a === "out-in"))
            return (
              (o.isLeaving = !0),
              (T.afterLeave = () => {
                (o.isLeaving = !1), n.update();
              }),
              Jo(s)
            );
          a === "in-out" &&
            c.type !== nt &&
            (T.delayLeave = (k, S, p) => {
              const _ = $l(o, f);
              (_[String(f.key)] = f),
                (k._leaveCb = () => {
                  S(), (k._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = p);
            });
        }
        return s;
      };
    },
  },
  Ml = ac;
function $l(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function Nn(e, t, n, o) {
  const {
      appear: r,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: g,
      onLeaveCancelled: v,
      onBeforeAppear: T,
      onAppear: k,
      onAfterAppear: S,
      onAppearCancelled: p,
    } = t,
    _ = String(e.key),
    q = $l(n, e),
    I = (b, M) => {
      b && We(b, o, 9, M);
    },
    y = (b, M) => {
      const $ = M[1];
      I(b, M),
        ee(b) ? b.every((B) => B.length <= 1) && $() : b.length <= 1 && $();
    },
    w = {
      mode: i,
      persisted: s,
      beforeEnter(b) {
        let M = l;
        if (!n.isMounted)
          if (r) M = T || l;
          else return;
        b._leaveCb && b._leaveCb(!0);
        const $ = q[_];
        $ && jt(e, $) && $.el._leaveCb && $.el._leaveCb(), I(M, [b]);
      },
      enter(b) {
        let M = a,
          $ = c,
          B = u;
        if (!n.isMounted)
          if (r) (M = k || a), ($ = S || c), (B = p || u);
          else return;
        let E = !1;
        const N = (b._enterCb = (R) => {
          E ||
            ((E = !0),
            R ? I(B, [b]) : I($, [b]),
            w.delayedLeave && w.delayedLeave(),
            (b._enterCb = void 0));
        });
        M ? y(M, [b, N]) : N();
      },
      leave(b, M) {
        const $ = String(e.key);
        if ((b._enterCb && b._enterCb(!0), n.isUnmounting)) return M();
        I(d, [b]);
        let B = !1;
        const E = (b._leaveCb = (N) => {
          B ||
            ((B = !0),
            M(),
            N ? I(v, [b]) : I(g, [b]),
            (b._leaveCb = void 0),
            q[$] === e && delete q[$]);
        });
        (q[$] = e), f ? y(f, [b, E]) : E();
      },
      clone(b) {
        return Nn(b, t, n, o);
      },
    };
  return w;
}
function Jo(e) {
  if (Fo(e)) return (e = pt(e)), (e.children = null), e;
}
function Mi(e) {
  return Fo(e) ? (e.children ? e.children[0] : void 0) : e;
}
function dn(e, t) {
  e.shapeFlag & 6 && e.component
    ? dn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function ii(e, t = !1, n) {
  let o = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === Je
      ? (s.patchFlag & 128 && r++, (o = o.concat(ii(s.children, t, l))))
      : (t || s.type !== nt) && o.push(l != null ? pt(s, { key: l }) : s);
  }
  if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
  return o;
}
function Bo(e) {
  return se(e) ? { setup: e, name: e.name } : e;
}
const An = (e) => !!e.type.__asyncLoader,
  Fo = (e) => e.type.__isKeepAlive,
  uc = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = we(),
        o = n.ctx;
      if (!o.renderer)
        return () => {
          const p = t.default && t.default();
          return p && p.length === 1 ? p[0] : p;
        };
      const r = new Map(),
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
        } = o,
        f = d("div");
      (o.activate = (p, _, q, I, y) => {
        const w = p.component;
        c(p, _, q, 0, l),
          a(w.vnode, p, _, q, w, l, I, p.slotScopeIds, y),
          qe(() => {
            (w.isDeactivated = !1), w.a && qn(w.a);
            const b = p.props && p.props.onVnodeMounted;
            b && He(b, w.parent, p);
          }, l);
      }),
        (o.deactivate = (p) => {
          const _ = p.component;
          c(p, f, null, 1, l),
            qe(() => {
              _.da && qn(_.da);
              const q = p.props && p.props.onVnodeUnmounted;
              q && He(q, _.parent, p), (_.isDeactivated = !0);
            }, l);
        });
      function g(p) {
        Xo(p), u(p, n, l, !0);
      }
      function v(p) {
        r.forEach((_, q) => {
          const I = Tr(_.type);
          I && (!p || !p(I)) && T(q);
        });
      }
      function T(p) {
        const _ = r.get(p);
        !s || _.type !== s.type ? g(_) : s && Xo(s), r.delete(p), i.delete(p);
      }
      ge(
        () => [e.include, e.exclude],
        ([p, _]) => {
          p && v((q) => Pn(p, q)), _ && v((q) => !Pn(_, q));
        },
        { flush: "post", deep: !0 }
      );
      let k = null;
      const S = () => {
        k != null && r.set(k, Go(n.subTree));
      };
      return (
        Yt(S),
        si(S),
        Qe(() => {
          r.forEach((p) => {
            const { subTree: _, suspense: q } = n,
              I = Go(_);
            if (p.type === I.type) {
              Xo(I);
              const y = I.component.da;
              y && qe(y, q);
              return;
            }
            g(p);
          });
        }),
        () => {
          if (((k = null), !t.default)) return null;
          const p = t.default(),
            _ = p[0];
          if (p.length > 1) return (s = null), p;
          if (!Co(_) || (!(_.shapeFlag & 4) && !(_.shapeFlag & 128)))
            return (s = null), _;
          let q = Go(_);
          const I = q.type,
            y = Tr(An(q) ? q.type.__asyncResolved || {} : I),
            { include: w, exclude: b, max: M } = e;
          if ((w && (!y || !Pn(w, y))) || (b && y && Pn(b, y)))
            return (s = q), _;
          const $ = q.key == null ? I : q.key,
            B = r.get($);
          return (
            q.el && ((q = pt(q)), _.shapeFlag & 128 && (_.ssContent = q)),
            (k = $),
            B
              ? ((q.el = B.el),
                (q.component = B.component),
                q.transition && dn(q, q.transition),
                (q.shapeFlag |= 512),
                i.delete($),
                i.add($))
              : (i.add($),
                M && i.size > parseInt(M, 10) && T(i.values().next().value)),
            (q.shapeFlag |= 256),
            (s = q),
            Tl(_.type) ? _ : q
          );
        }
      );
    },
  },
  hg = uc;
function Pn(e, t) {
  return ee(e)
    ? e.some((n) => Pn(n, t))
    : Ee(e)
    ? e.split(",").includes(t)
    : e.test
    ? e.test(t)
    : !1;
}
function Ll(e, t) {
  Il(e, "a", t);
}
function jo(e, t) {
  Il(e, "da", t);
}
function Il(e, t, n = Re) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Vo(t, o, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Fo(r.parent.vnode) && cc(o, t, n, r), (r = r.parent);
  }
}
function cc(e, t, n, o) {
  const r = Vo(t, e, o, !0);
  No(() => {
    Wr(o[t], r);
  }, n);
}
function Xo(e) {
  let t = e.shapeFlag;
  t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t);
}
function Go(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Vo(e, t, n = Re, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return;
          yn(), hn(n);
          const l = We(t, n, e, s);
          return Ut(), _n(), l;
        });
    return o ? r.unshift(i) : r.push(i), i;
  }
}
const bt =
    (e) =>
    (t, n = Re) =>
      (!zn || e === "sp") && Vo(e, (...o) => t(...o), n),
  fc = bt("bm"),
  Yt = bt("m"),
  Bl = bt("bu"),
  si = bt("u"),
  Qe = bt("bum"),
  No = bt("um"),
  dc = bt("sp"),
  hc = bt("rtg"),
  mc = bt("rtc");
function gc(e, t = Re) {
  Vo("ec", e, t);
}
function Fl(e, t) {
  const n = Ue;
  if (n === null) return e;
  const o = zo(n) || n.proxy,
    r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, l, a, c = be] = t[i];
    se(s) && (s = { mounted: s, updated: s }),
      s.deep && Nt(l),
      r.push({
        dir: s,
        instance: o,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      });
  }
  return e;
}
function $t(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[o];
    a && (yn(), We(a, n, 8, [e.el, l, e, t]), _n());
  }
}
const jl = "components";
function pc(e, t) {
  return bc(jl, e, !0, t) || e;
}
const vc = Symbol();
function bc(e, t, n = !0, o = !1) {
  const r = Ue || Re;
  if (r) {
    const i = r.type;
    if (e === jl) {
      const l = Tr(i, !1);
      if (l && (l === t || l === ct(t) || l === Oo(ct(t)))) return i;
    }
    const s = $i(r[e] || i[e], t) || $i(r.appContext[e], t);
    return !s && o ? i : s;
  }
}
function $i(e, t) {
  return e && (e[t] || e[ct(t)] || e[Oo(ct(t))]);
}
function mg(e, t, n, o) {
  let r;
  const i = n && n[o];
  if (ee(e) || Ee(e)) {
    r = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      r[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let s = 0; s < e; s++) r[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (_e(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (s, l) => t(s, l, void 0, i && i[l]));
    else {
      const s = Object.keys(e);
      r = new Array(s.length);
      for (let l = 0, a = s.length; l < a; l++) {
        const c = s[l];
        r[l] = t(e[c], c, l, i && i[l]);
      }
    }
  else r = [];
  return n && (n[o] = r), r;
}
const Cr = (e) => (e ? (Xl(e) ? zo(e) || e.proxy : Cr(e.parent)) : null),
  wo = Pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cr(e.parent),
    $root: (e) => Cr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => li(e),
    $forceUpdate: (e) => e.f || (e.f = () => ri(e.update)),
    $nextTick: (e) => e.n || (e.n = Me.bind(e.proxy)),
    $watch: (e) => lc.bind(e),
  }),
  yc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: r,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== "$") {
        const g = s[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return o[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (o !== be && ae(o, t)) return (s[t] = 1), o[t];
          if (r !== be && ae(r, t)) return (s[t] = 2), r[t];
          if ((c = e.propsOptions[0]) && ae(c, t)) return (s[t] = 3), i[t];
          if (n !== be && ae(n, t)) return (s[t] = 4), n[t];
          kr && (s[t] = 0);
        }
      }
      const u = wo[t];
      let d, f;
      if (u) return t === "$attrs" && Ve(e, "get", t), u(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== be && ae(n, t)) return (s[t] = 4), n[t];
      if (((f = a.config.globalProperties), ae(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e;
      return r !== be && ae(r, t)
        ? ((r[t] = n), !0)
        : o !== be && ae(o, t)
        ? ((o[t] = n), !0)
        : ae(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: r,
          propsOptions: i,
        },
      },
      s
    ) {
      let l;
      return (
        !!n[s] ||
        (e !== be && ae(e, s)) ||
        (t !== be && ae(t, s)) ||
        ((l = i[0]) && ae(l, s)) ||
        ae(o, s) ||
        ae(wo, s) ||
        ae(r.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ae(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let kr = !0;
function _c(e) {
  const t = li(e),
    n = e.proxy,
    o = e.ctx;
  (kr = !1), t.beforeCreate && Li(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: g,
    updated: v,
    activated: T,
    deactivated: k,
    beforeDestroy: S,
    beforeUnmount: p,
    destroyed: _,
    unmounted: q,
    render: I,
    renderTracked: y,
    renderTriggered: w,
    errorCaptured: b,
    serverPrefetch: M,
    expose: $,
    inheritAttrs: B,
    components: E,
    directives: N,
    filters: R,
  } = t;
  if ((c && wc(c, o, null, e.appContext.config.unwrapInjectedRef), s))
    for (const O in s) {
      const W = s[O];
      se(W) && (o[O] = W.bind(n));
    }
  if (r) {
    const O = r.call(n, n);
    _e(O) && (e.data = Mt(O));
  }
  if (((kr = !0), i))
    for (const O in i) {
      const W = i[O],
        fe = se(W) ? W.bind(n, n) : se(W.get) ? W.get.bind(n, n) : tt,
        D = !se(W) && se(W.set) ? W.set.bind(n) : tt,
        ue = x({ get: fe, set: D });
      Object.defineProperty(o, O, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (he) => (ue.value = he),
      });
    }
  if (l) for (const O in l) Vl(l[O], o, n, O);
  if (a) {
    const O = se(a) ? a.call(n) : a;
    Reflect.ownKeys(O).forEach((W) => {
      fo(W, O[W]);
    });
  }
  u && Li(u, e, "c");
  function re(O, W) {
    ee(W) ? W.forEach((fe) => O(fe.bind(n))) : W && O(W.bind(n));
  }
  if (
    (re(fc, d),
    re(Yt, f),
    re(Bl, g),
    re(si, v),
    re(Ll, T),
    re(jo, k),
    re(gc, b),
    re(mc, y),
    re(hc, w),
    re(Qe, p),
    re(No, q),
    re(dc, M),
    ee($))
  )
    if ($.length) {
      const O = e.exposed || (e.exposed = {});
      $.forEach((W) => {
        Object.defineProperty(O, W, {
          get: () => n[W],
          set: (fe) => (n[W] = fe),
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === tt && (e.render = I),
    B != null && (e.inheritAttrs = B),
    E && (e.components = E),
    N && (e.directives = N);
}
function wc(e, t, n = tt, o = !1) {
  ee(e) && (e = Er(e));
  for (const r in e) {
    const i = e[r];
    let s;
    _e(i)
      ? "default" in i
        ? (s = je(i.from || r, i.default, !0))
        : (s = je(i.from || r))
      : (s = je(i)),
      xe(s) && o
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (l) => (s.value = l),
          })
        : (t[r] = s);
  }
}
function Li(e, t, n) {
  We(ee(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vl(e, t, n, o) {
  const r = o.includes(".") ? Al(n, o) : () => n[o];
  if (Ee(e)) {
    const i = t[e];
    se(i) && ge(r, i);
  } else if (se(e)) ge(r, e.bind(n));
  else if (_e(e))
    if (ee(e)) e.forEach((i) => Vl(i, t, n, o));
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(i) && ge(r, i, e);
    }
}
function li(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !n && !o
      ? (a = t)
      : ((a = {}), r.length && r.forEach((c) => xo(a, c, s, !0)), xo(a, t, s)),
    _e(t) && i.set(t, a),
    a
  );
}
function xo(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && xo(e, i, n, !0), r && r.forEach((s) => xo(e, s, n, !0));
  for (const s in t)
    if (!(o && s === "expose")) {
      const l = xc[s] || (n && n[s]);
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const xc = {
  data: Ii,
  props: Bt,
  emits: Bt,
  methods: Bt,
  computed: Bt,
  beforeCreate: Le,
  created: Le,
  beforeMount: Le,
  mounted: Le,
  beforeUpdate: Le,
  updated: Le,
  beforeDestroy: Le,
  beforeUnmount: Le,
  destroyed: Le,
  unmounted: Le,
  activated: Le,
  deactivated: Le,
  errorCaptured: Le,
  serverPrefetch: Le,
  components: Bt,
  directives: Bt,
  watch: kc,
  provide: Ii,
  inject: Cc,
};
function Ii(e, t) {
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
function Cc(e, t) {
  return Bt(Er(e), Er(t));
}
function Er(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bt(e, t) {
  return e ? Pe(Pe(Object.create(null), e), t) : t;
}
function kc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(Object.create(null), e);
  for (const o in t) n[o] = Le(e[o], t[o]);
  return n;
}
function Ec(e, t, n, o = !1) {
  const r = {},
    i = {};
  bo(i, Do, 1), (e.propsDefaults = Object.create(null)), Nl(e, t, r, i);
  for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
  n ? (e.props = o ? r : Vu(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function Sc(e, t, n, o) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    l = oe(r),
    [a] = e.propsOptions;
  let c = !1;
  if ((o || s > 0) && !(s & 16)) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Lo(e.emitsOptions, f)) continue;
        const g = t[f];
        if (a)
          if (ae(i, f)) g !== i[f] && ((i[f] = g), (c = !0));
          else {
            const v = ct(f);
            r[v] = Sr(a, l, v, g, e, !1);
          }
        else g !== i[f] && ((i[f] = g), (c = !0));
      }
    }
  } else {
    Nl(e, t, r, i) && (c = !0);
    let u;
    for (const d in l)
      (!t || (!ae(t, d) && ((u = bn(d)) === d || !ae(t, u)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (r[d] = Sr(a, l, d, void 0, e, !0))
          : delete r[d]);
    if (i !== l)
      for (const d in i) (!t || (!ae(t, d) && !0)) && (delete i[d], (c = !0));
  }
  c && gt(e, "set", "$attrs");
}
function Nl(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1,
    l;
  if (t)
    for (let a in t) {
      if (co(a)) continue;
      const c = t[a];
      let u;
      r && ae(r, (u = ct(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : Lo(e.emitsOptions, a) ||
          ((!(a in o) || c !== o[a]) && ((o[a] = c), (s = !0)));
    }
  if (i) {
    const a = oe(n),
      c = l || be;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Sr(r, a, d, c[d], e, !ae(c, d));
    }
  }
  return s;
}
function Sr(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = ae(s, "default");
    if (l && o === void 0) {
      const a = s.default;
      if (s.type !== Function && se(a)) {
        const { propsDefaults: c } = r;
        n in c ? (o = c[n]) : (hn(r), (o = c[n] = a.call(null, t)), Ut());
      } else o = a;
    }
    s[0] &&
      (i && !l ? (o = !1) : s[1] && (o === "" || o === bn(n)) && (o = !0));
  }
  return o;
}
function Dl(e, t, n = !1) {
  const o = t.propsCache,
    r = o.get(e);
  if (r) return r;
  const i = e.props,
    s = {},
    l = [];
  let a = !1;
  if (!se(e)) {
    const u = (d) => {
      a = !0;
      const [f, g] = Dl(d, t, !0);
      Pe(s, f), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a) return _e(e) && o.set(e, an), an;
  if (ee(i))
    for (let u = 0; u < i.length; u++) {
      const d = ct(i[u]);
      Bi(d) && (s[d] = be);
    }
  else if (i)
    for (const u in i) {
      const d = ct(u);
      if (Bi(d)) {
        const f = i[u],
          g = (s[d] = ee(f) || se(f) ? { type: f } : f);
        if (g) {
          const v = Vi(Boolean, g.type),
            T = Vi(String, g.type);
          (g[0] = v > -1),
            (g[1] = T < 0 || v < T),
            (v > -1 || ae(g, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return _e(e) && o.set(e, c), c;
}
function Bi(e) {
  return e[0] !== "$";
}
function Fi(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function ji(e, t) {
  return Fi(e) === Fi(t);
}
function Vi(e, t) {
  return ee(t) ? t.findIndex((n) => ji(n, e)) : se(t) && ji(t, e) ? 0 : -1;
}
const zl = (e) => e[0] === "_" || e === "$stable",
  ai = (e) => (ee(e) ? e.map(lt) : [lt(e)]),
  Rc = (e, t, n) => {
    if (t._n) return t;
    const o = tc((...r) => ai(t(...r)), n);
    return (o._c = !1), o;
  },
  Hl = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (zl(r)) continue;
      const i = e[r];
      if (se(i)) t[r] = Rc(r, i, o);
      else if (i != null) {
        const s = ai(i);
        t[r] = () => s;
      }
    }
  },
  Kl = (e, t) => {
    const n = ai(t);
    e.slots.default = () => n;
  },
  Pc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = oe(t)), bo(t, "_", n)) : Hl(t, (e.slots = {}));
    } else (e.slots = {}), t && Kl(e, t);
    bo(e.slots, Do, 1);
  },
  Tc = (e, t, n) => {
    const { vnode: o, slots: r } = e;
    let i = !0,
      s = be;
    if (o.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (Pe(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Hl(t, r)),
        (s = t);
    } else t && (Kl(e, t), (s = { default: 1 }));
    if (i) for (const l in r) !zl(l) && !(l in s) && delete r[l];
  };
function Ul() {
  return {
    app: null,
    config: {
      isNativeTag: lu,
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
let qc = 0;
function Ac(e, t) {
  return function (o, r = null) {
    se(o) || (o = Object.assign({}, o)), r != null && !_e(r) && (r = null);
    const i = Ul(),
      s = new Set();
    let l = !1;
    const a = (i.app = {
      _uid: qc++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Xc,
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
          const f = Be(o, r);
          return (
            (f.appContext = i),
            u && t ? t(f, c) : e(f, c, d),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            zo(f.component) || f.component.proxy
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
function Rr(e, t, n, o, r = !1) {
  if (ee(e)) {
    e.forEach((f, g) => Rr(f, t && (ee(t) ? t[g] : t), n, o, r));
    return;
  }
  if (An(o) && !r) return;
  const i = o.shapeFlag & 4 ? zo(o.component) || o.component.proxy : o.el,
    s = r ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === be ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (c != null &&
      c !== a &&
      (Ee(c)
        ? ((u[c] = null), ae(d, c) && (d[c] = null))
        : xe(c) && (c.value = null)),
    se(a))
  )
    qt(a, l, 12, [s, u]);
  else {
    const f = Ee(a),
      g = xe(a);
    if (f || g) {
      const v = () => {
        if (e.f) {
          const T = f ? (ae(d, a) ? d[a] : u[a]) : a.value;
          r
            ? ee(T) && Wr(T, i)
            : ee(T)
            ? T.includes(i) || T.push(i)
            : f
            ? ((u[a] = [i]), ae(d, a) && (d[a] = u[a]))
            : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          f
            ? ((u[a] = s), ae(d, a) && (d[a] = s))
            : g && ((a.value = s), e.k && (u[e.k] = s));
      };
      s ? ((v.id = -1), qe(v, n)) : v();
    }
  }
}
const qe = sc;
function Oc(e) {
  return Mc(e);
}
function Mc(e, t) {
  const n = hu();
  n.__VUE__ = !0;
  const {
      insert: o,
      remove: r,
      patchProp: i,
      createElement: s,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: g = tt,
      insertStaticContent: v,
    } = e,
    T = (
      h,
      m,
      C,
      A = null,
      F = null,
      H = null,
      Y = !1,
      z = null,
      K = !!m.dynamicChildren
    ) => {
      if (h === m) return;
      h && !jt(h, m) && ((A = U(h)), he(h, F, H, !0), (h = null)),
        m.patchFlag === -2 && ((K = !1), (m.dynamicChildren = null));
      const { type: j, ref: X, shapeFlag: J } = m;
      switch (j) {
        case ci:
          k(h, m, C, A);
          break;
        case nt:
          S(h, m, C, A);
          break;
        case er:
          h == null && p(m, C, A, Y);
          break;
        case Je:
          E(h, m, C, A, F, H, Y, z, K);
          break;
        default:
          J & 1
            ? I(h, m, C, A, F, H, Y, z, K)
            : J & 6
            ? N(h, m, C, A, F, H, Y, z, K)
            : (J & 64 || J & 128) && j.process(h, m, C, A, F, H, Y, z, K, ne);
      }
      X != null && F && Rr(X, h && h.ref, H, m || h, !m);
    },
    k = (h, m, C, A) => {
      if (h == null) o((m.el = l(m.children)), C, A);
      else {
        const F = (m.el = h.el);
        m.children !== h.children && c(F, m.children);
      }
    },
    S = (h, m, C, A) => {
      h == null ? o((m.el = a(m.children || "")), C, A) : (m.el = h.el);
    },
    p = (h, m, C, A) => {
      [h.el, h.anchor] = v(h.children, m, C, A, h.el, h.anchor);
    },
    _ = ({ el: h, anchor: m }, C, A) => {
      let F;
      for (; h && h !== m; ) (F = f(h)), o(h, C, A), (h = F);
      o(m, C, A);
    },
    q = ({ el: h, anchor: m }) => {
      let C;
      for (; h && h !== m; ) (C = f(h)), r(h), (h = C);
      r(m);
    },
    I = (h, m, C, A, F, H, Y, z, K) => {
      (Y = Y || m.type === "svg"),
        h == null ? y(m, C, A, F, H, Y, z, K) : M(h, m, F, H, Y, z, K);
    },
    y = (h, m, C, A, F, H, Y, z) => {
      let K, j;
      const { type: X, props: J, shapeFlag: G, transition: te, dirs: le } = h;
      if (
        ((K = h.el = s(h.type, H, J && J.is, J)),
        G & 8
          ? u(K, h.children)
          : G & 16 &&
            b(h.children, K, null, A, F, H && X !== "foreignObject", Y, z),
        le && $t(h, null, A, "created"),
        J)
      ) {
        for (const me in J)
          me !== "value" &&
            !co(me) &&
            i(K, me, null, J[me], H, h.children, A, F, Q);
        "value" in J && i(K, "value", null, J.value),
          (j = J.onVnodeBeforeMount) && He(j, A, h);
      }
      w(K, h, h.scopeId, Y, A), le && $t(h, null, A, "beforeMount");
      const ye = (!F || (F && !F.pendingBranch)) && te && !te.persisted;
      ye && te.beforeEnter(K),
        o(K, m, C),
        ((j = J && J.onVnodeMounted) || ye || le) &&
          qe(() => {
            j && He(j, A, h),
              ye && te.enter(K),
              le && $t(h, null, A, "mounted");
          }, F);
    },
    w = (h, m, C, A, F) => {
      if ((C && g(h, C), A)) for (let H = 0; H < A.length; H++) g(h, A[H]);
      if (F) {
        let H = F.subTree;
        if (m === H) {
          const Y = F.vnode;
          w(h, Y, Y.scopeId, Y.slotScopeIds, F.parent);
        }
      }
    },
    b = (h, m, C, A, F, H, Y, z, K = 0) => {
      for (let j = K; j < h.length; j++) {
        const X = (h[j] = z ? Ct(h[j]) : lt(h[j]));
        T(null, X, m, C, A, F, H, Y, z);
      }
    },
    M = (h, m, C, A, F, H, Y) => {
      const z = (m.el = h.el);
      let { patchFlag: K, dynamicChildren: j, dirs: X } = m;
      K |= h.patchFlag & 16;
      const J = h.props || be,
        G = m.props || be;
      let te;
      C && Lt(C, !1),
        (te = G.onVnodeBeforeUpdate) && He(te, C, m, h),
        X && $t(m, h, C, "beforeUpdate"),
        C && Lt(C, !0);
      const le = F && m.type !== "foreignObject";
      if (
        (j
          ? $(h.dynamicChildren, j, z, C, A, le, H)
          : Y || W(h, m, z, null, C, A, le, H, !1),
        K > 0)
      ) {
        if (K & 16) B(z, m, J, G, C, A, F);
        else if (
          (K & 2 && J.class !== G.class && i(z, "class", null, G.class, F),
          K & 4 && i(z, "style", J.style, G.style, F),
          K & 8)
        ) {
          const ye = m.dynamicProps;
          for (let me = 0; me < ye.length; me++) {
            const Ce = ye[me],
              Ye = J[Ce],
              Xt = G[Ce];
            (Xt !== Ye || Ce === "value") &&
              i(z, Ce, Ye, Xt, F, h.children, C, A, Q);
          }
        }
        K & 1 && h.children !== m.children && u(z, m.children);
      } else !Y && j == null && B(z, m, J, G, C, A, F);
      ((te = G.onVnodeUpdated) || X) &&
        qe(() => {
          te && He(te, C, m, h), X && $t(m, h, C, "updated");
        }, A);
    },
    $ = (h, m, C, A, F, H, Y) => {
      for (let z = 0; z < m.length; z++) {
        const K = h[z],
          j = m[z],
          X =
            K.el && (K.type === Je || !jt(K, j) || K.shapeFlag & 70)
              ? d(K.el)
              : C;
        T(K, j, X, null, A, F, H, Y, !0);
      }
    },
    B = (h, m, C, A, F, H, Y) => {
      if (C !== A) {
        if (C !== be)
          for (const z in C)
            !co(z) && !(z in A) && i(h, z, C[z], null, Y, m.children, F, H, Q);
        for (const z in A) {
          if (co(z)) continue;
          const K = A[z],
            j = C[z];
          K !== j && z !== "value" && i(h, z, j, K, Y, m.children, F, H, Q);
        }
        "value" in A && i(h, "value", C.value, A.value);
      }
    },
    E = (h, m, C, A, F, H, Y, z, K) => {
      const j = (m.el = h ? h.el : l("")),
        X = (m.anchor = h ? h.anchor : l(""));
      let { patchFlag: J, dynamicChildren: G, slotScopeIds: te } = m;
      te && (z = z ? z.concat(te) : te),
        h == null
          ? (o(j, C, A), o(X, C, A), b(m.children, C, X, F, H, Y, z, K))
          : J > 0 && J & 64 && G && h.dynamicChildren
          ? ($(h.dynamicChildren, G, C, F, H, Y, z),
            (m.key != null || (F && m === F.subTree)) && ui(h, m, !0))
          : W(h, m, C, X, F, H, Y, z, K);
    },
    N = (h, m, C, A, F, H, Y, z, K) => {
      (m.slotScopeIds = z),
        h == null
          ? m.shapeFlag & 512
            ? F.ctx.activate(m, C, A, Y, K)
            : R(m, C, A, F, H, Y, K)
          : Z(h, m, K);
    },
    R = (h, m, C, A, F, H, Y) => {
      const z = (h.component = Uc(h, A, F));
      if ((Fo(h) && (z.ctx.renderer = ne), Wc(z), z.asyncDep)) {
        if ((F && F.registerDep(z, re), !h.el)) {
          const K = (z.subTree = Be(nt));
          S(null, K, m, C);
        }
        return;
      }
      re(z, h, m, C, F, H, Y);
    },
    Z = (h, m, C) => {
      const A = (m.component = h.component);
      if (rc(h, m, C))
        if (A.asyncDep && !A.asyncResolved) {
          O(A, m, C);
          return;
        } else (A.next = m), Ju(A.update), A.update();
      else (m.el = h.el), (A.vnode = m);
    },
    re = (h, m, C, A, F, H, Y) => {
      const z = () => {
          if (h.isMounted) {
            let { next: X, bu: J, u: G, parent: te, vnode: le } = h,
              ye = X,
              me;
            Lt(h, !1),
              X ? ((X.el = le.el), O(h, X, Y)) : (X = le),
              J && qn(J),
              (me = X.props && X.props.onVnodeBeforeUpdate) &&
                He(me, te, X, le),
              Lt(h, !0);
            const Ce = Zo(h),
              Ye = h.subTree;
            (h.subTree = Ce),
              T(Ye, Ce, d(Ye.el), U(Ye), h, F, H),
              (X.el = Ce.el),
              ye === null && ic(h, Ce.el),
              G && qe(G, F),
              (me = X.props && X.props.onVnodeUpdated) &&
                qe(() => He(me, te, X, le), F);
          } else {
            let X;
            const { el: J, props: G } = m,
              { bm: te, m: le, parent: ye } = h,
              me = An(m);
            if (
              (Lt(h, !1),
              te && qn(te),
              !me && (X = G && G.onVnodeBeforeMount) && He(X, ye, m),
              Lt(h, !0),
              J && ie)
            ) {
              const Ce = () => {
                (h.subTree = Zo(h)), ie(J, h.subTree, h, F, null);
              };
              me
                ? m.type.__asyncLoader().then(() => !h.isUnmounted && Ce())
                : Ce();
            } else {
              const Ce = (h.subTree = Zo(h));
              T(null, Ce, C, A, h, F, H), (m.el = Ce.el);
            }
            if ((le && qe(le, F), !me && (X = G && G.onVnodeMounted))) {
              const Ce = m;
              qe(() => He(X, ye, Ce), F);
            }
            (m.shapeFlag & 256 ||
              (ye && An(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              h.a &&
              qe(h.a, F),
              (h.isMounted = !0),
              (m = C = A = null);
          }
        },
        K = (h.effect = new Jr(z, () => ri(j), h.scope)),
        j = (h.update = () => K.run());
      (j.id = h.uid), Lt(h, !0), j();
    },
    O = (h, m, C) => {
      m.component = h;
      const A = h.vnode.props;
      (h.vnode = m),
        (h.next = null),
        Sc(h, m.props, A, C),
        Tc(h, m.children, C),
        yn(),
        qi(),
        _n();
    },
    W = (h, m, C, A, F, H, Y, z, K = !1) => {
      const j = h && h.children,
        X = h ? h.shapeFlag : 0,
        J = m.children,
        { patchFlag: G, shapeFlag: te } = m;
      if (G > 0) {
        if (G & 128) {
          D(j, J, C, A, F, H, Y, z, K);
          return;
        } else if (G & 256) {
          fe(j, J, C, A, F, H, Y, z, K);
          return;
        }
      }
      te & 8
        ? (X & 16 && Q(j, F, H), J !== j && u(C, J))
        : X & 16
        ? te & 16
          ? D(j, J, C, A, F, H, Y, z, K)
          : Q(j, F, H, !0)
        : (X & 8 && u(C, ""), te & 16 && b(J, C, A, F, H, Y, z, K));
    },
    fe = (h, m, C, A, F, H, Y, z, K) => {
      (h = h || an), (m = m || an);
      const j = h.length,
        X = m.length,
        J = Math.min(j, X);
      let G;
      for (G = 0; G < J; G++) {
        const te = (m[G] = K ? Ct(m[G]) : lt(m[G]));
        T(h[G], te, C, null, F, H, Y, z, K);
      }
      j > X ? Q(h, F, H, !0, !1, J) : b(m, C, A, F, H, Y, z, K, J);
    },
    D = (h, m, C, A, F, H, Y, z, K) => {
      let j = 0;
      const X = m.length;
      let J = h.length - 1,
        G = X - 1;
      for (; j <= J && j <= G; ) {
        const te = h[j],
          le = (m[j] = K ? Ct(m[j]) : lt(m[j]));
        if (jt(te, le)) T(te, le, C, null, F, H, Y, z, K);
        else break;
        j++;
      }
      for (; j <= J && j <= G; ) {
        const te = h[J],
          le = (m[G] = K ? Ct(m[G]) : lt(m[G]));
        if (jt(te, le)) T(te, le, C, null, F, H, Y, z, K);
        else break;
        J--, G--;
      }
      if (j > J) {
        if (j <= G) {
          const te = G + 1,
            le = te < X ? m[te].el : A;
          for (; j <= G; )
            T(null, (m[j] = K ? Ct(m[j]) : lt(m[j])), C, le, F, H, Y, z, K),
              j++;
        }
      } else if (j > G) for (; j <= J; ) he(h[j], F, H, !0), j++;
      else {
        const te = j,
          le = j,
          ye = new Map();
        for (j = le; j <= G; j++) {
          const Fe = (m[j] = K ? Ct(m[j]) : lt(m[j]));
          Fe.key != null && ye.set(Fe.key, j);
        }
        let me,
          Ce = 0;
        const Ye = G - le + 1;
        let Xt = !1,
          bi = 0;
        const wn = new Array(Ye);
        for (j = 0; j < Ye; j++) wn[j] = 0;
        for (j = te; j <= J; j++) {
          const Fe = h[j];
          if (Ce >= Ye) {
            he(Fe, F, H, !0);
            continue;
          }
          let it;
          if (Fe.key != null) it = ye.get(Fe.key);
          else
            for (me = le; me <= G; me++)
              if (wn[me - le] === 0 && jt(Fe, m[me])) {
                it = me;
                break;
              }
          it === void 0
            ? he(Fe, F, H, !0)
            : ((wn[it - le] = j + 1),
              it >= bi ? (bi = it) : (Xt = !0),
              T(Fe, m[it], C, null, F, H, Y, z, K),
              Ce++);
        }
        const yi = Xt ? $c(wn) : an;
        for (me = yi.length - 1, j = Ye - 1; j >= 0; j--) {
          const Fe = le + j,
            it = m[Fe],
            _i = Fe + 1 < X ? m[Fe + 1].el : A;
          wn[j] === 0
            ? T(null, it, C, _i, F, H, Y, z, K)
            : Xt && (me < 0 || j !== yi[me] ? ue(it, C, _i, 2) : me--);
        }
      }
    },
    ue = (h, m, C, A, F = null) => {
      const { el: H, type: Y, transition: z, children: K, shapeFlag: j } = h;
      if (j & 6) {
        ue(h.component.subTree, m, C, A);
        return;
      }
      if (j & 128) {
        h.suspense.move(m, C, A);
        return;
      }
      if (j & 64) {
        Y.move(h, m, C, ne);
        return;
      }
      if (Y === Je) {
        o(H, m, C);
        for (let J = 0; J < K.length; J++) ue(K[J], m, C, A);
        o(h.anchor, m, C);
        return;
      }
      if (Y === er) {
        _(h, m, C);
        return;
      }
      if (A !== 2 && j & 1 && z)
        if (A === 0) z.beforeEnter(H), o(H, m, C), qe(() => z.enter(H), F);
        else {
          const { leave: J, delayLeave: G, afterLeave: te } = z,
            le = () => o(H, m, C),
            ye = () => {
              J(H, () => {
                le(), te && te();
              });
            };
          G ? G(H, le, ye) : ye();
        }
      else o(H, m, C);
    },
    he = (h, m, C, A = !1, F = !1) => {
      const {
        type: H,
        props: Y,
        ref: z,
        children: K,
        dynamicChildren: j,
        shapeFlag: X,
        patchFlag: J,
        dirs: G,
      } = h;
      if ((z != null && Rr(z, null, C, h, !0), X & 256)) {
        m.ctx.deactivate(h);
        return;
      }
      const te = X & 1 && G,
        le = !An(h);
      let ye;
      if ((le && (ye = Y && Y.onVnodeBeforeUnmount) && He(ye, m, h), X & 6))
        L(h.component, C, A);
      else {
        if (X & 128) {
          h.suspense.unmount(C, A);
          return;
        }
        te && $t(h, null, m, "beforeUnmount"),
          X & 64
            ? h.type.remove(h, m, C, F, ne, A)
            : j && (H !== Je || (J > 0 && J & 64))
            ? Q(j, m, C, !1, !0)
            : ((H === Je && J & 384) || (!F && X & 16)) && Q(K, m, C),
          A && pe(h);
      }
      ((le && (ye = Y && Y.onVnodeUnmounted)) || te) &&
        qe(() => {
          ye && He(ye, m, h), te && $t(h, null, m, "unmounted");
        }, C);
    },
    pe = (h) => {
      const { type: m, el: C, anchor: A, transition: F } = h;
      if (m === Je) {
        rt(C, A);
        return;
      }
      if (m === er) {
        q(h);
        return;
      }
      const H = () => {
        r(C), F && !F.persisted && F.afterLeave && F.afterLeave();
      };
      if (h.shapeFlag & 1 && F && !F.persisted) {
        const { leave: Y, delayLeave: z } = F,
          K = () => Y(C, H);
        z ? z(h.el, H, K) : K();
      } else H();
    },
    rt = (h, m) => {
      let C;
      for (; h !== m; ) (C = f(h)), r(h), (h = C);
      r(m);
    },
    L = (h, m, C) => {
      const { bum: A, scope: F, update: H, subTree: Y, um: z } = h;
      A && qn(A),
        F.stop(),
        H && ((H.active = !1), he(Y, h, m, C)),
        z && qe(z, m),
        qe(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    Q = (h, m, C, A = !1, F = !1, H = 0) => {
      for (let Y = H; Y < h.length; Y++) he(h[Y], m, C, A, F);
    },
    U = (h) =>
      h.shapeFlag & 6
        ? U(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : f(h.anchor || h.el),
    V = (h, m, C) => {
      h == null
        ? m._vnode && he(m._vnode, null, null, !0)
        : T(m._vnode || null, h, m, null, null, null, C),
        qi(),
        Sl(),
        (m._vnode = h);
    },
    ne = {
      p: T,
      um: he,
      m: ue,
      r: pe,
      mt: R,
      mc: b,
      pc: W,
      pbc: $,
      n: U,
      o: e,
    };
  let ve, ie;
  return (
    t && ([ve, ie] = t(ne)), { render: V, hydrate: ve, createApp: Ac(V, ve) }
  );
}
function Lt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ui(e, t, n = !1) {
  const o = e.children,
    r = t.children;
  if (ee(o) && ee(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Ct(r[i])), (l.el = s.el)),
        n || ui(s, l));
    }
}
function $c(e) {
  const t = e.slice(),
    n = [0];
  let o, r, i, s, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const c = e[o];
    if (c !== 0) {
      if (((r = n[n.length - 1]), e[r] < c)) {
        (t[o] = r), n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        (l = (i + s) >> 1), e[n[l]] < c ? (i = l + 1) : (s = l);
      c < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
  return n;
}
const Lc = (e) => e.__isTeleport,
  On = (e) => e && (e.disabled || e.disabled === ""),
  Ni = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  Pr = (e, t) => {
    const n = e && e.to;
    return Ee(n) ? (t ? t(n) : null) : n;
  },
  Ic = {
    __isTeleport: !0,
    process(e, t, n, o, r, i, s, l, a, c) {
      const {
          mc: u,
          pc: d,
          pbc: f,
          o: { insert: g, querySelector: v, createText: T, createComment: k },
        } = c,
        S = On(t.props);
      let { shapeFlag: p, children: _, dynamicChildren: q } = t;
      if (e == null) {
        const I = (t.el = T("")),
          y = (t.anchor = T(""));
        g(I, n, o), g(y, n, o);
        const w = (t.target = Pr(t.props, v)),
          b = (t.targetAnchor = T(""));
        w && (g(b, w), (s = s || Ni(w)));
        const M = ($, B) => {
          p & 16 && u(_, $, B, r, i, s, l, a);
        };
        S ? M(n, y) : w && M(w, b);
      } else {
        t.el = e.el;
        const I = (t.anchor = e.anchor),
          y = (t.target = e.target),
          w = (t.targetAnchor = e.targetAnchor),
          b = On(e.props),
          M = b ? n : y,
          $ = b ? I : w;
        if (
          ((s = s || Ni(y)),
          q
            ? (f(e.dynamicChildren, q, M, r, i, s, l), ui(e, t, !0))
            : a || d(e, t, M, $, r, i, s, l, !1),
          S)
        )
          b || oo(t, n, I, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const B = (t.target = Pr(t.props, v));
          B && oo(t, B, null, c, 0);
        } else b && oo(t, y, w, c, 1);
      }
    },
    remove(e, t, n, o, { um: r, o: { remove: i } }, s) {
      const {
        shapeFlag: l,
        children: a,
        anchor: c,
        targetAnchor: u,
        target: d,
        props: f,
      } = e;
      if ((d && i(u), (s || !On(f)) && (i(c), l & 16)))
        for (let g = 0; g < a.length; g++) {
          const v = a[g];
          r(v, t, n, !0, !!v.dynamicChildren);
        }
    },
    move: oo,
    hydrate: Bc,
  };
function oo(e, t, n, { o: { insert: o }, m: r }, i = 2) {
  i === 0 && o(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: a, children: c, props: u } = e,
    d = i === 2;
  if ((d && o(s, t, n), (!d || On(u)) && a & 16))
    for (let f = 0; f < c.length; f++) r(c[f], t, n, 2);
  d && o(l, t, n);
}
function Bc(
  e,
  t,
  n,
  o,
  r,
  i,
  { o: { nextSibling: s, parentNode: l, querySelector: a } },
  c
) {
  const u = (t.target = Pr(t.props, a));
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (On(t.props))
        (t.anchor = c(s(e), t, l(e), n, o, r, i)), (t.targetAnchor = d);
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
        c(d, t, u, n, o, r, i);
      }
  }
  return t.anchor && s(t.anchor);
}
const Fc = Ic,
  Je = Symbol(void 0),
  ci = Symbol(void 0),
  nt = Symbol(void 0),
  er = Symbol(void 0),
  Mn = [];
let Ge = null;
function Wl(e = !1) {
  Mn.push((Ge = e ? null : []));
}
function jc() {
  Mn.pop(), (Ge = Mn[Mn.length - 1] || null);
}
let Dn = 1;
function Di(e) {
  Dn += e;
}
function Ql(e) {
  return (
    (e.dynamicChildren = Dn > 0 ? Ge || an : null),
    jc(),
    Dn > 0 && Ge && Ge.push(e),
    e
  );
}
function gg(e, t, n, o, r, i) {
  return Ql(Jl(e, t, n, o, r, i, !0));
}
function Yl(e, t, n, o, r) {
  return Ql(Be(e, t, n, o, r, !0));
}
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Do = "__vInternal",
  Zl = ({ key: e }) => (e != null ? e : null),
  ho = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Ee(e) || xe(e) || se(e)
        ? { i: Ue, r: e, k: t, f: !!n }
        : e
      : null;
function Jl(
  e,
  t = null,
  n = null,
  o = 0,
  r = null,
  i = e === Je ? 0 : 1,
  s = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zl(t),
    ref: t && ho(t),
    scopeId: Io,
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
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l
      ? (fi(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Ee(n) ? 8 : 16),
    Dn > 0 &&
      !s &&
      Ge &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      Ge.push(a),
    a
  );
}
const Be = Vc;
function Vc(e, t = null, n = null, o = 0, r = null, i = !1) {
  if (((!e || e === vc) && (e = nt), Co(e))) {
    const l = pt(e, t, !0);
    return (
      n && fi(l, n),
      Dn > 0 &&
        !i &&
        Ge &&
        (l.shapeFlag & 6 ? (Ge[Ge.indexOf(e)] = l) : Ge.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Jc(e) && (e = e.__vccOpts), t)) {
    t = Nc(t);
    let { class: l, style: a } = t;
    l && !Ee(l) && (t.class = Kr(l)),
      _e(a) && (bl(a) && !ee(a) && (a = Pe({}, a)), (t.style = Hr(a)));
  }
  const s = Ee(e) ? 1 : Tl(e) ? 128 : Lc(e) ? 64 : _e(e) ? 4 : se(e) ? 2 : 0;
  return Jl(e, t, n, o, r, s, i, !0);
}
function Nc(e) {
  return e ? (bl(e) || Do in e ? Pe({}, e) : e) : null;
}
function pt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e,
    l = t ? zc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Zl(l),
    ref:
      t && t.ref
        ? n && r
          ? ee(r)
            ? r.concat(ho(t))
            : [r, ho(t)]
          : ho(t)
        : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Je ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && pt(e.ssContent),
    ssFallback: e.ssFallback && pt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Dc(e = " ", t = 0) {
  return Be(ci, null, e, t);
}
function pg(e = "", t = !1) {
  return t ? (Wl(), Yl(nt, null, e)) : Be(nt, null, e);
}
function lt(e) {
  return e == null || typeof e == "boolean"
    ? Be(nt)
    : ee(e)
    ? Be(Je, null, e.slice())
    : typeof e == "object"
    ? Ct(e)
    : Be(ci, null, String(e));
}
function Ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : pt(e);
}
function fi(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (ee(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), fi(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Do in t)
        ? (t._ctx = Ue)
        : r === 3 &&
          Ue &&
          (Ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    se(t)
      ? ((t = { default: t, _ctx: Ue }), (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [Dc(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function zc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Kr([t.class, o.class]));
      else if (r === "style") t.style = Hr([t.style, o.style]);
      else if (To(r)) {
        const i = t[r],
          s = o[r];
        s &&
          i !== s &&
          !(ee(i) && i.includes(s)) &&
          (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function He(e, t, n, o = null) {
  We(e, t, 7, [n, o]);
}
const Hc = Ul();
let Kc = 0;
function Uc(e, t, n) {
  const o = e.type,
    r = (t ? t.appContext : e.appContext) || Hc,
    i = {
      uid: Kc++,
      vnode: e,
      type: o,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new il(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Dl(o, r),
      emitsOptions: Pl(o, r),
      emit: null,
      emitted: null,
      propsDefaults: be,
      inheritAttrs: o.inheritAttrs,
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
    (i.emit = ec.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Re = null;
const we = () => Re || Ue,
  hn = (e) => {
    (Re = e), e.scope.on();
  },
  Ut = () => {
    Re && Re.scope.off(), (Re = null);
  };
function Xl(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Wc(e, t = !1) {
  zn = t;
  const { props: n, children: o } = e.vnode,
    r = Xl(e);
  Ec(e, n, r, t), Pc(e, o);
  const i = r ? Qc(e, t) : void 0;
  return (zn = !1), i;
}
function Qc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ft(new Proxy(e.ctx, yc)));
  const { setup: o } = n;
  if (o) {
    const r = (e.setupContext = o.length > 1 ? Zc(e) : null);
    hn(e), yn();
    const i = qt(o, e, 0, [e.props, r]);
    if ((_n(), Ut(), tl(i))) {
      if ((i.then(Ut, Ut), t))
        return i
          .then((s) => {
            zi(e, s, t);
          })
          .catch((s) => {
            $o(s, e, 0);
          });
      e.asyncDep = i;
    } else zi(e, i, t);
  } else Gl(e, t);
}
function zi(e, t, n) {
  se(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _e(t) && (e.setupState = xl(t)),
    Gl(e, n);
}
let Hi;
function Gl(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Hi && !o.render) {
      const r = o.template || li(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = o,
          c = Pe(Pe({ isCustomElement: i, delimiters: l }, s), a);
        o.render = Hi(r, c);
      }
    }
    e.render = o.render || tt;
  }
  hn(e), yn(), _c(e), _n(), Ut();
}
function Yc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ve(e, "get", "$attrs"), t[n];
    },
  });
}
function Zc(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Yc(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function zo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(xl(ft(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in wo) return wo[n](e);
        },
      }))
    );
}
function Tr(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Jc(e) {
  return se(e) && "__vccOpts" in e;
}
const x = (e, t) => Qu(e, t, zn);
function P(e, t, n) {
  const o = arguments.length;
  return o === 2
    ? _e(t) && !ee(t)
      ? Co(t)
        ? Be(e, null, [t])
        : Be(e, t)
      : Be(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : o === 3 && Co(n) && (n = [n]),
      Be(e, t, n));
}
const Xc = "3.2.41",
  Gc = "http://www.w3.org/2000/svg",
  Vt = typeof document != "undefined" ? document : null,
  Ki = Vt && Vt.createElement("template"),
  ef = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r = t
        ? Vt.createElementNS(Gc, e)
        : Vt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          o &&
          o.multiple != null &&
          r.setAttribute("multiple", o.multiple),
        r
      );
    },
    createText: (e) => Vt.createTextNode(e),
    createComment: (e) => Vt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Vt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Ki.innerHTML = o ? `<svg>${e}</svg>` : e;
        const l = Ki.content;
        if (o) {
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
function tf(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function nf(e, t, n) {
  const o = e.style,
    r = Ee(n);
  if (n && !r) {
    for (const i in n) qr(o, i, n[i]);
    if (t && !Ee(t)) for (const i in t) n[i] == null && qr(o, i, "");
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (o.display = i);
  }
}
const Ui = /\s*!important$/;
function qr(e, t, n) {
  if (ee(n)) n.forEach((o) => qr(e, t, o));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = of(e, t);
    Ui.test(n)
      ? e.setProperty(bn(o), n.replace(Ui, ""), "important")
      : (e[o] = n);
  }
}
const Wi = ["Webkit", "Moz", "ms"],
  tr = {};
function of(e, t) {
  const n = tr[t];
  if (n) return n;
  let o = ct(t);
  if (o !== "filter" && o in e) return (tr[t] = o);
  o = Oo(o);
  for (let r = 0; r < Wi.length; r++) {
    const i = Wi[r] + o;
    if (i in e) return (tr[t] = i);
  }
  return t;
}
const Qi = "http://www.w3.org/1999/xlink";
function rf(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Qi, t.slice(6, t.length))
      : e.setAttributeNS(Qi, t, n);
  else {
    const i = ou(t);
    n == null || (i && !Xs(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function sf(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), (e[t] = n == null ? "" : n);
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
      ? (n = Xs(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function lf(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function af(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function uf(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t];
  if (o && s) s.value = o;
  else {
    const [l, a] = cf(t);
    if (o) {
      const c = (i[t] = hf(o, r));
      lf(e, l, c, a);
    } else s && (af(e, l, s, a), (i[t] = void 0));
  }
}
const Yi = /(?:Once|Passive|Capture)$/;
function cf(e) {
  let t;
  if (Yi.test(e)) {
    t = {};
    let o;
    for (; (o = e.match(Yi)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : bn(e.slice(2)), t];
}
let nr = 0;
const ff = Promise.resolve(),
  df = () => nr || (ff.then(() => (nr = 0)), (nr = Date.now()));
function hf(e, t) {
  const n = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    We(mf(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = df()), n;
}
function mf(e, t) {
  if (ee(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (r) => !r._stopped && o && o(r))
    );
  } else return t;
}
const Zi = /^on[a-z]/,
  gf = (e, t, n, o, r = !1, i, s, l, a) => {
    t === "class"
      ? tf(e, o, r)
      : t === "style"
      ? nf(e, n, o)
      : To(t)
      ? Ur(t) || uf(e, t, n, o, s)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : pf(e, t, o, r)
        )
      ? sf(e, t, o, i, s, l, a)
      : (t === "true-value"
          ? (e._trueValue = o)
          : t === "false-value" && (e._falseValue = o),
        rf(e, t, o, r));
  };
function pf(e, t, n, o) {
  return o
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Zi.test(t) && se(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Zi.test(t) && Ee(n))
    ? !1
    : t in e;
}
const _t = "transition",
  xn = "animation",
  mn = (e, { slots: t }) => P(Ml, ta(e), t);
mn.displayName = "Transition";
const ea = {
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
  vf = (mn.props = Pe({}, Ml.props, ea)),
  It = (e, t = []) => {
    ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ji = (e) => (e ? (ee(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ta(e) {
  const t = {};
  for (const E in e) E in ea || (t[E] = e[E]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: o,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: c = s,
      appearToClass: u = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    v = bf(r),
    T = v && v[0],
    k = v && v[1],
    {
      onBeforeEnter: S,
      onEnter: p,
      onEnterCancelled: _,
      onLeave: q,
      onLeaveCancelled: I,
      onBeforeAppear: y = S,
      onAppear: w = p,
      onAppearCancelled: b = _,
    } = t,
    M = (E, N, R) => {
      xt(E, N ? u : l), xt(E, N ? c : s), R && R();
    },
    $ = (E, N) => {
      (E._isLeaving = !1), xt(E, d), xt(E, g), xt(E, f), N && N();
    },
    B = (E) => (N, R) => {
      const Z = E ? w : p,
        re = () => M(N, E, R);
      It(Z, [N, re]),
        Xi(() => {
          xt(N, E ? a : i), ht(N, E ? u : l), Ji(Z) || Gi(N, o, T, re);
        });
    };
  return Pe(t, {
    onBeforeEnter(E) {
      It(S, [E]), ht(E, i), ht(E, s);
    },
    onBeforeAppear(E) {
      It(y, [E]), ht(E, a), ht(E, c);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(E, N) {
      E._isLeaving = !0;
      const R = () => $(E, N);
      ht(E, d),
        oa(),
        ht(E, f),
        Xi(() => {
          !E._isLeaving || (xt(E, d), ht(E, g), Ji(q) || Gi(E, o, k, R));
        }),
        It(q, [E, R]);
    },
    onEnterCancelled(E) {
      M(E, !1), It(_, [E]);
    },
    onAppearCancelled(E) {
      M(E, !0), It(b, [E]);
    },
    onLeaveCancelled(E) {
      $(E), It(I, [E]);
    },
  });
}
function bf(e) {
  if (e == null) return null;
  if (_e(e)) return [or(e.enter), or(e.leave)];
  {
    const t = or(e);
    return [t, t];
  }
}
function or(e) {
  return rl(e);
}
function ht(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function xt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Xi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let yf = 0;
function Gi(e, t, n, o) {
  const r = (e._endId = ++yf),
    i = () => {
      r === e._endId && o();
    };
  if (n) return setTimeout(i, n);
  const { type: s, timeout: l, propCount: a } = na(e, t);
  if (!s) return o();
  const c = s + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), i();
    },
    f = (g) => {
      g.target === e && ++u >= a && d();
    };
  setTimeout(() => {
    u < a && d();
  }, l + 1),
    e.addEventListener(c, f);
}
function na(e, t) {
  const n = window.getComputedStyle(e),
    o = (v) => (n[v] || "").split(", "),
    r = o(_t + "Delay"),
    i = o(_t + "Duration"),
    s = es(r, i),
    l = o(xn + "Delay"),
    a = o(xn + "Duration"),
    c = es(l, a);
  let u = null,
    d = 0,
    f = 0;
  t === _t
    ? s > 0 && ((u = _t), (d = s), (f = i.length))
    : t === xn
    ? c > 0 && ((u = xn), (d = c), (f = a.length))
    : ((d = Math.max(s, c)),
      (u = d > 0 ? (s > c ? _t : xn) : null),
      (f = u ? (u === _t ? i.length : a.length) : 0));
  const g = u === _t && /\b(transform|all)(,|$)/.test(n[_t + "Property"]);
  return { type: u, timeout: d, propCount: f, hasTransform: g };
}
function es(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, o) => ts(n) + ts(e[o])));
}
function ts(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function oa() {
  return document.body.offsetHeight;
}
const ra = new WeakMap(),
  ia = new WeakMap(),
  _f = {
    name: "TransitionGroup",
    props: Pe({}, vf, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = we(),
        o = Ol();
      let r, i;
      return (
        si(() => {
          if (!r.length) return;
          const s = e.moveClass || `${e.name || "v"}-move`;
          if (!Ef(r[0].el, n.vnode.el, s)) return;
          r.forEach(xf), r.forEach(Cf);
          const l = r.filter(kf);
          oa(),
            l.forEach((a) => {
              const c = a.el,
                u = c.style;
              ht(c, s),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const d = (c._moveCb = (f) => {
                (f && f.target !== c) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c._moveCb = null),
                    xt(c, s)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const s = oe(e),
            l = ta(s);
          let a = s.tag || Je;
          (r = i), (i = t.default ? ii(t.default()) : []);
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && dn(u, Nn(u, l, o, n));
          }
          if (r)
            for (let c = 0; c < r.length; c++) {
              const u = r[c];
              dn(u, Nn(u, l, o, n)), ra.set(u, u.el.getBoundingClientRect());
            }
          return Be(a, null, i);
        }
      );
    },
  },
  wf = _f;
function xf(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Cf(e) {
  ia.set(e, e.el.getBoundingClientRect());
}
function kf(e) {
  const t = ra.get(e),
    n = ia.get(e),
    o = t.left - n.left,
    r = t.top - n.top;
  if (o || r) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${o}px,${r}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function Ef(e, t, n) {
  const o = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((s) => {
      s.split(/\s+/).forEach((l) => l && o.classList.remove(l));
    }),
    n.split(/\s+/).forEach((s) => s && o.classList.add(s)),
    (o.style.display = "none");
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(o);
  const { hasTransform: i } = na(o);
  return r.removeChild(o), i;
}
const Sf = Pe({ patchProp: gf }, ef);
let ns;
function Rf() {
  return ns || (ns = Oc(Sf));
}
const sa = (...e) => {
  const t = Rf().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (o) => {
      const r = Pf(o);
      if (!r) return;
      const i = t._component;
      !se(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = "");
      const s = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        s
      );
    }),
    t
  );
};
function Pf(e) {
  return Ee(e) ? document.querySelector(e) : e;
}
function Yn(e, t, n, o) {
  return Object.defineProperty(e, t, { get: n, set: o, enumerable: !0 }), e;
}
function vg(e, t) {
  for (const n in t) Yn(e, n, t[n]);
  return e;
}
const Ot = ce(!1);
let Ho;
function Tf(e, t) {
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
function qf(e) {
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
const la = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Af(e) {
  (Ho = { is: { ...e } }), delete e.mac, delete e.desktop;
  const t =
    Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, { mobile: !0, ios: !0, platform: t, [t]: !0 });
}
function Of(e) {
  const t = e.toLowerCase(),
    n = qf(t),
    o = Tf(t, n),
    r = {};
  o.browser &&
    ((r[o.browser] = !0),
    (r.version = o.version),
    (r.versionNumber = parseInt(o.versionNumber, 10))),
    o.platform && (r[o.platform] = !0);
  const i =
    r.android ||
    r.ios ||
    r.bb ||
    r.blackberry ||
    r.ipad ||
    r.iphone ||
    r.ipod ||
    r.kindle ||
    r.playbook ||
    r.silk ||
    r["windows phone"];
  return (
    i === !0 || t.indexOf("mobile") > -1
      ? ((r.mobile = !0),
        r.edga || r.edgios
          ? ((r.edge = !0), (o.browser = "edge"))
          : r.crios
          ? ((r.chrome = !0), (o.browser = "chrome"))
          : r.fxios && ((r.firefox = !0), (o.browser = "firefox")))
      : (r.desktop = !0),
    (r.ipod || r.ipad || r.iphone) && (r.ios = !0),
    r["windows phone"] && ((r.winphone = !0), delete r["windows phone"]),
    (r.chrome ||
      r.opr ||
      r.safari ||
      r.vivaldi ||
      (r.mobile === !0 && r.ios !== !0 && i !== !0)) &&
      (r.webkit = !0),
    r.edg && ((o.browser = "edgechromium"), (r.edgeChromium = !0)),
    ((r.safari && r.blackberry) || r.bb) &&
      ((o.browser = "blackberry"), (r.blackberry = !0)),
    r.safari && r.playbook && ((o.browser = "playbook"), (r.playbook = !0)),
    r.opr && ((o.browser = "opera"), (r.opera = !0)),
    r.safari && r.android && ((o.browser = "android"), (r.android = !0)),
    r.safari && r.kindle && ((o.browser = "kindle"), (r.kindle = !0)),
    r.safari && r.silk && ((o.browser = "silk"), (r.silk = !0)),
    r.vivaldi && ((o.browser = "vivaldi"), (r.vivaldi = !0)),
    (r.name = o.browser),
    (r.platform = o.platform),
    t.indexOf("electron") > -1
      ? (r.electron = !0)
      : document.location.href.indexOf("-extension://") > -1
      ? (r.bex = !0)
      : (window.Capacitor !== void 0
          ? ((r.capacitor = !0),
            (r.nativeMobile = !0),
            (r.nativeMobileWrapper = "capacitor"))
          : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
            ((r.cordova = !0),
            (r.nativeMobile = !0),
            (r.nativeMobileWrapper = "cordova")),
        la === !0 &&
          r.mac === !0 &&
          ((r.desktop === !0 && r.safari === !0) ||
            (r.nativeMobile === !0 &&
              r.android !== !0 &&
              r.ios !== !0 &&
              r.ipad !== !0)) &&
          Af(r)),
    r
  );
}
const os = navigator.userAgent || navigator.vendor || window.opera,
  Mf = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  ke = {
    userAgent: os,
    is: Of(os),
    has: { touch: la },
    within: { iframe: window.self !== window.top },
  },
  Ar = {
    install(e) {
      const { $q: t } = e;
      Ot.value === !0
        ? (e.onSSRHydrated.push(() => {
            (Ot.value = !1), Object.assign(t.platform, ke), (Ho = void 0);
          }),
          (t.platform = Mt(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  Yn(ke.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    ke.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"),
    Ot.value === !0 ? Object.assign(Ar, ke, Ho, Mf) : Object.assign(Ar, ke);
}
var Ko = (e, t) => {
  const n = Mt(e);
  for (const o in e)
    Yn(
      t,
      o,
      () => n[o],
      (r) => {
        n[o] = r;
      }
    );
  return t;
};
const Ie = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(Ie, {
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
function Hn() {}
function bg(e) {
  return e.button === 0;
}
function $f(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function Lf(e) {
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
function ko(e) {
  e.stopPropagation();
}
function Rt(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Ke(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function yg(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (o) => {
          (o.__dragPrevented = !0),
            o.addEventListener("dragstart", Rt, Ie.notPassiveCapture);
        }
      : (o) => {
          delete o.__dragPrevented,
            o.removeEventListener("dragstart", Rt, Ie.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function If(e, t, n) {
  const o = `__q_${t}_evt`;
  (e[o] = e[o] !== void 0 ? e[o].concat(n) : n),
    n.forEach((r) => {
      r[0].addEventListener(r[1], e[r[2]], Ie[r[3]]);
    });
}
function Bf(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((o) => {
      o[0].removeEventListener(o[1], e[o[2]], Ie[o[3]]);
    }),
    (e[n] = void 0));
}
function aa(e, t = 250, n) {
  let o;
  function r() {
    const i = arguments,
      s = () => {
        (o = void 0), n !== !0 && e.apply(this, i);
      };
    clearTimeout(o),
      n === !0 && o === void 0 && e.apply(this, i),
      (o = setTimeout(s, t));
  }
  return (
    (r.cancel = () => {
      clearTimeout(o);
    }),
    r
  );
}
const rr = ["sm", "md", "lg", "xl"],
  { passive: rs } = Ie;
var Ff = Ko(
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
    setSizes: Hn,
    setDebounce: Hn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0));
        return;
      }
      const { visualViewport: n } = window,
        o = n || window,
        r = document.scrollingElement || document.documentElement,
        i =
          n === void 0 || ke.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, r.clientWidth),
                Math.max(window.innerHeight, r.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - r.clientWidth,
                n.height * n.scale + window.innerHeight - r.clientHeight,
              ],
        s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
      this.__update = (d) => {
        const [f, g] = i();
        if ((g !== this.height && (this.height = g), f !== this.width))
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
        rr.forEach((f) => {
          d[f] !== void 0 && (a[f] = d[f]);
        });
      }),
        (this.setDebounce = (d) => {
          c = d;
        });
      const u = () => {
        const d = getComputedStyle(document.body);
        d.getPropertyValue("--q-size-sm") &&
          rr.forEach((f) => {
            this.sizes[f] = parseInt(d.getPropertyValue(`--q-size-${f}`), 10);
          }),
          (this.setSizes = (f) => {
            rr.forEach((g) => {
              f[g] && (this.sizes[g] = f[g]);
            }),
              this.__update(!0);
          }),
          (this.setDebounce = (f) => {
            l !== void 0 && o.removeEventListener("resize", l, rs),
              (l = f > 0 ? aa(this.__update, f) : this.__update),
              o.addEventListener("resize", l, rs);
          }),
          this.setDebounce(c),
          Object.keys(a).length > 0
            ? (this.setSizes(a), (a = void 0))
            : this.__update(),
          s === !0 &&
            this.name === "xs" &&
            document.body.classList.add("screen--xs");
      };
      Ot.value === !0 ? t.push(u) : u();
    },
  }
);
const Ae = Ko(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Ae.mode = e),
          e === "auto"
            ? (Ae.__media === void 0 &&
                ((Ae.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                )),
                (Ae.__updateMedia = () => {
                  Ae.set("auto");
                }),
                Ae.__media.addListener(Ae.__updateMedia)),
              (e = Ae.__media.matches))
            : Ae.__media !== void 0 &&
              (Ae.__media.removeListener(Ae.__updateMedia),
              (Ae.__media = void 0)),
          (Ae.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? "light" : "dark"}`
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
      },
      toggle() {
        Ae.set(Ae.isActive === !1);
      },
      install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
        const { dark: o } = e.config;
        if (((e.dark = this), this.__installed === !0 && o === void 0)) return;
        this.isActive = o === !0;
        const r = o !== void 0 ? o : !1;
        if (Ot.value === !0) {
          const i = (l) => {
              this.__fromSSR = l;
            },
            s = this.set;
          (this.set = i),
            i(r),
            t.push(() => {
              (this.set = s), this.set(this.__fromSSR);
            });
        } else this.set(r);
      },
    }
  ),
  ua = () => !0;
function jf(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Vf(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function Nf(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return ua;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(jf).map(Vf)),
    () => t.includes(window.location.hash)
  );
}
var Or = {
    __history: [],
    add: Hn,
    remove: Hn,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = ke.is;
      if (t !== !0 && n !== !0) return;
      const o = e.config[t === !0 ? "cordova" : "capacitor"];
      if (
        (o !== void 0 && o.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (s) => {
        s.condition === void 0 && (s.condition = ua), this.__history.push(s);
      }),
        (this.remove = (s) => {
          const l = this.__history.indexOf(s);
          l >= 0 && this.__history.splice(l, 1);
        });
      const r = Nf(Object.assign({ backButtonExit: !0 }, o)),
        i = () => {
          if (this.__history.length) {
            const s = this.__history[this.__history.length - 1];
            s.condition() === !0 && (this.__history.pop(), s.handler());
          } else r() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1);
          })
        : window.Capacitor.Plugins.App.addListener("backButton", i);
    },
  },
  is = {
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
function ss() {
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
const kt = Ko(
  { __langPack: {} },
  {
    getLocale: ss,
    set(e = is, t) {
      const n = { ...e, rtl: e.rtl === !0, getLocale: ss };
      {
        const o = document.documentElement;
        o.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
          o.setAttribute("lang", n.isoName),
          (n.set = kt.set),
          Object.assign(kt.__langPack, n),
          (kt.props = n),
          (kt.isoName = n.isoName),
          (kt.nativeName = n.nativeName);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      (e.lang = kt.__langPack),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || is);
    },
  }
);
function Df(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let ca = !1;
function zf(e) {
  ca = e.isComposing === !0;
}
function fa(e) {
  return (
    ca === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function Kn(e, t) {
  return fa(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Hf(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function Kf({ is: e, has: t, within: n }, o) {
  const r = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const i = Hf(e);
    i !== void 0 && r.push("platform-" + i);
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper;
    r.push(i),
      r.push("native-mobile"),
      e.ios === !0 &&
        (o[i] === void 0 || o[i].iosStatusBarPadding !== !1) &&
        r.push("q-ios-padding");
  } else e.electron === !0 ? r.push("electron") : e.bex === !0 && r.push("bex");
  return n.iframe === !0 && r.push("within-iframe"), r;
}
function Uf() {
  const e = document.body.className;
  let t = e;
  Ho !== void 0 && (t = t.replace("desktop", "platform-ios mobile")),
    ke.has.touch === !0 && (t = t.replace("no-touch", "touch")),
    ke.within.iframe === !0 && (t += " within-iframe"),
    e !== t && (document.body.className = t);
}
function Wf(e) {
  for (const t in e) Df(t, e[t]);
}
var Qf = {
    install(e) {
      if (this.__installed !== !0) {
        if (Ot.value === !0) Uf();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && Wf(t.config.brand);
          const n = Kf(ke, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        ke.is.ios === !0 && document.body.addEventListener("touchstart", Hn),
          window.addEventListener("keydown", zf, !0);
      }
    },
  },
  Yf = {
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
const Eo = Ko(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = { ...e, rtl: e.rtl === !0 };
        (n.set = Eo.set), Object.assign(Eo.__icons, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          Yn(
            e,
            "iconMapFn",
            () => this.iconMapFn,
            (o) => {
              this.iconMapFn = o;
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || Yf);
      },
    }
  ),
  da = "_q_",
  _g = "_q_l_",
  wg = "_q_pc_",
  Zf = "_q_fo_",
  xg = "_q_tabs_",
  Cg = () => {},
  So = {};
let ha = !1;
function Jf() {
  ha = !0;
}
function ir(e, t) {
  if (e === t) return !0;
  if (
    e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object"
  ) {
    if (e.constructor !== t.constructor) return !1;
    let n, o;
    if (e.constructor === Array) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (ir(e[o], t[o]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries().next(); o.done !== !0; ) {
        if (t.has(o.value[0]) !== !0) return !1;
        o = o.next();
      }
      for (o = e.entries().next(); o.done !== !0; ) {
        if (ir(o.value[1], t.get(o.value[0])) !== !0) return !1;
        o = o.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries().next(); o.done !== !0; ) {
        if (t.has(o.value[0]) !== !0) return !1;
        o = o.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (e[o] !== t[o]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const r = Object.keys(e).filter((i) => e[i] !== void 0);
    if (
      ((n = r.length),
      n !== Object.keys(t).filter((i) => t[i] !== void 0).length)
    )
      return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (ir(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ut(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function kg(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Eg(e) {
  return typeof e == "number" && isFinite(e);
}
const ls = [Ar, Qf, Ae, Ff, Or, kt, Eo];
function ma(e, t) {
  const n = sa(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: o, ...r } = t._context;
  return Object.assign(n._context, r), n;
}
function as(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function Xf(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(da, n.$q),
    as(n, ls),
    t.components !== void 0 &&
      Object.values(t.components).forEach((o) => {
        ut(o) === !0 && o.name !== void 0 && e.component(o.name, o);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((o) => {
        ut(o) === !0 && o.name !== void 0 && e.directive(o.name, o);
      }),
    t.plugins !== void 0 &&
      as(
        n,
        Object.values(t.plugins).filter(
          (o) => typeof o.install == "function" && ls.includes(o) === !1
        )
      ),
    Ot.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((o) => {
          o();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
var Gf = function (e, t = {}) {
    const n = { version: "2.10.0" };
    ha === !1
      ? (t.config !== void 0 && Object.assign(So, t.config),
        (n.config = { ...So }),
        Jf())
      : (n.config = t.config || {}),
      Xf(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  ed = { version: "2.10.0", install: Gf, lang: kt, iconSet: Eo };
function td() {
  return je(da);
}
var nd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t) n[o] = r;
  return n;
};
const od = Bo({
  name: "App",
  setup() {
    td().dark.set(!0);
  },
});
function rd(e, t, n, o, r, i) {
  const s = pc("router-view");
  return Wl(), Yl(s);
}
var id = nd(od, [["render", rd]]);
function Sg(e) {
  return e;
}
var sd = !1;
/*!
 * pinia v2.0.23
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ let ga;
const Uo = (e) => (ga = e),
  pa = Symbol();
function Mr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var $n;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})($n || ($n = {}));
function ld() {
  const e = sl(!0),
    t = e.run(() => ce({}));
  let n = [],
    o = [];
  const r = ft({
    install(i) {
      Uo(r),
        (r._a = i),
        i.provide(pa, r),
        (i.config.globalProperties.$pinia = r),
        o.forEach((s) => n.push(s)),
        (o = []);
    },
    use(i) {
      return !this._a && !sd ? o.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const va = () => {};
function us(e, t, n, o = va) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), o());
  };
  return !n && we() && No(r), r;
}
function Gt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function $r(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const o = t[n],
      r = e[n];
    Mr(r) && Mr(o) && e.hasOwnProperty(n) && !xe(o) && !Tt(o)
      ? (e[n] = $r(r, o))
      : (e[n] = o);
  }
  return e;
}
const ad = Symbol();
function ud(e) {
  return !Mr(e) || !e.hasOwnProperty(ad);
}
const { assign: Et } = Object;
function cd(e) {
  return !!(xe(e) && e.effect);
}
function fd(e, t, n, o) {
  const { state: r, actions: i, getters: s } = t,
    l = n.state.value[e];
  let a;
  function c() {
    l || (n.state.value[e] = r ? r() : {});
    const u = Hu(n.state.value[e]);
    return Et(
      u,
      i,
      Object.keys(s || {}).reduce(
        (d, f) => (
          (d[f] = ft(
            x(() => {
              Uo(n);
              const g = n._s.get(e);
              return s[f].call(g, g);
            })
          )),
          d
        ),
        {}
      )
    );
  }
  return (
    (a = ba(e, c, t, n, o, !0)),
    (a.$reset = function () {
      const d = r ? r() : {};
      this.$patch((f) => {
        Et(f, d);
      });
    }),
    a
  );
}
function ba(e, t, n = {}, o, r, i) {
  let s;
  const l = Et({ actions: {} }, n),
    a = { deep: !0 };
  let c,
    u,
    d = ft([]),
    f = ft([]),
    g;
  const v = o.state.value[e];
  !i && !v && (o.state.value[e] = {}), ce({});
  let T;
  function k(w) {
    let b;
    (c = u = !1),
      typeof w == "function"
        ? (w(o.state.value[e]),
          (b = { type: $n.patchFunction, storeId: e, events: g }))
        : ($r(o.state.value[e], w),
          (b = { type: $n.patchObject, payload: w, storeId: e, events: g }));
    const M = (T = Symbol());
    Me().then(() => {
      T === M && (c = !0);
    }),
      (u = !0),
      Gt(d, b, o.state.value[e]);
  }
  const S = va;
  function p() {
    s.stop(), (d = []), (f = []), o._s.delete(e);
  }
  function _(w, b) {
    return function () {
      Uo(o);
      const M = Array.from(arguments),
        $ = [],
        B = [];
      function E(Z) {
        $.push(Z);
      }
      function N(Z) {
        B.push(Z);
      }
      Gt(f, { args: M, name: w, store: I, after: E, onError: N });
      let R;
      try {
        R = b.apply(this && this.$id === e ? this : I, M);
      } catch (Z) {
        throw (Gt(B, Z), Z);
      }
      return R instanceof Promise
        ? R.then((Z) => (Gt($, Z), Z)).catch(
            (Z) => (Gt(B, Z), Promise.reject(Z))
          )
        : (Gt($, R), R);
    };
  }
  const q = {
      _p: o,
      $id: e,
      $onAction: us.bind(null, f),
      $patch: k,
      $reset: S,
      $subscribe(w, b = {}) {
        const M = us(d, w, b.detached, () => $()),
          $ = s.run(() =>
            ge(
              () => o.state.value[e],
              (B) => {
                (b.flush === "sync" ? u : c) &&
                  w({ storeId: e, type: $n.direct, events: g }, B);
              },
              Et({}, a, b)
            )
          );
        return M;
      },
      $dispose: p,
    },
    I = Mt(q);
  o._s.set(e, I);
  const y = o._e.run(() => ((s = sl()), s.run(() => t())));
  for (const w in y) {
    const b = y[w];
    if ((xe(b) && !cd(b)) || Tt(b))
      i ||
        (v && ud(b) && (xe(b) ? (b.value = v[w]) : $r(b, v[w])),
        (o.state.value[e][w] = b));
    else if (typeof b == "function") {
      const M = _(w, b);
      (y[w] = M), (l.actions[w] = b);
    }
  }
  return (
    Et(I, y),
    Et(oe(I), y),
    Object.defineProperty(I, "$state", {
      get: () => o.state.value[e],
      set: (w) => {
        k((b) => {
          Et(b, w);
        });
      },
    }),
    o._p.forEach((w) => {
      Et(
        I,
        s.run(() => w({ store: I, app: o._a, pinia: o, options: l }))
      );
    }),
    v && i && n.hydrate && n.hydrate(I.$state, v),
    (c = !0),
    (u = !0),
    I
  );
}
function Rg(e, t, n) {
  let o, r;
  const i = typeof t == "function";
  typeof e == "string" ? ((o = e), (r = i ? n : t)) : ((r = e), (o = e.id));
  function s(l, a) {
    const c = we();
    return (
      (l = l || (c && je(pa))),
      l && Uo(l),
      (l = ga),
      l._s.has(o) || (i ? ba(o, t, r, l) : fd(o, r, l)),
      l._s.get(o)
    );
  }
  return (s.$id = o), s;
}
var sr = () => ld();
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const sn = typeof window != "undefined";
function dd(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function lr(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = ot(r) ? r.map(e) : e(r);
  }
  return n;
}
const Ln = () => {},
  ot = Array.isArray,
  hd = /\/$/,
  md = (e) => e.replace(hd, "");
function ar(e, t, n = "/") {
  let o,
    r = {},
    i = "",
    s = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((o = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (r = e(i))),
    l > -1 && ((o = o || t.slice(0, l)), (s = t.slice(l, t.length))),
    (o = bd(o != null ? o : t, n)),
    { fullPath: o + (i && "?") + i + s, path: o, query: r, hash: s }
  );
}
function gd(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function cs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function pd(e, t, n) {
  const o = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    o > -1 &&
    o === r &&
    gn(t.matched[o], n.matched[r]) &&
    ya(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function gn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ya(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!vd(e[n], t[n])) return !1;
  return !0;
}
function vd(e, t) {
  return ot(e) ? fs(e, t) : ot(t) ? fs(t, e) : e === t;
}
function fs(e, t) {
  return ot(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function bd(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/");
  let r = n.length - 1,
    i,
    s;
  for (i = 0; i < o.length; i++)
    if (((s = o[i]), s !== "."))
      if (s === "..") r > 1 && r--;
      else break;
  return (
    n.slice(0, r).join("/") +
    "/" +
    o.slice(i - (i === o.length ? 1 : 0)).join("/")
  );
}
var Un;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Un || (Un = {}));
var In;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(In || (In = {}));
function yd(e) {
  if (!e)
    if (sn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), md(e);
}
const _d = /^[^#]+#/;
function wd(e, t) {
  return e.replace(_d, "#") + t;
}
function xd(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  };
}
const Wo = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Cd(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = xd(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function ds(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Lr = new Map();
function kd(e, t) {
  Lr.set(e, t);
}
function Ed(e) {
  const t = Lr.get(e);
  return Lr.delete(e), t;
}
let Sd = () => location.protocol + "//" + location.host;
function _a(e, t) {
  const { pathname: n, search: o, hash: r } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), cs(a, "");
  }
  return cs(n, e) + o + r;
}
function Rd(e, t, n, o) {
  let r = [],
    i = [],
    s = null;
  const l = ({ state: f }) => {
    const g = _a(e, location),
      v = n.value,
      T = t.value;
    let k = 0;
    if (f) {
      if (((n.value = g), (t.value = f), s && s === v)) {
        s = null;
        return;
      }
      k = T ? f.position - T.position : 0;
    } else o(g);
    r.forEach((S) => {
      S(n.value, v, {
        delta: k,
        type: Un.pop,
        direction: k ? (k > 0 ? In.forward : In.back) : In.unknown,
      });
    });
  };
  function a() {
    s = n.value;
  }
  function c(f) {
    r.push(f);
    const g = () => {
      const v = r.indexOf(f);
      v > -1 && r.splice(v, 1);
    };
    return i.push(g), g;
  }
  function u() {
    const { history: f } = window;
    !f.state || f.replaceState(de({}, f.state, { scroll: Wo() }), "");
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
function hs(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Wo() : null,
  };
}
function Pd(e) {
  const { history: t, location: n } = window,
    o = { value: _a(e, n) },
    r = { value: t.state };
  r.value ||
    i(
      o.value,
      {
        back: null,
        current: o.value,
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
          : Sd() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (r.value = c);
    } catch (g) {
      console.error(g), n[u ? "replace" : "assign"](f);
    }
  }
  function s(a, c) {
    const u = de({}, t.state, hs(r.value.back, a, r.value.forward, !0), c, {
      position: r.value.position,
    });
    i(a, u, !0), (o.value = a);
  }
  function l(a, c) {
    const u = de({}, r.value, t.state, { forward: a, scroll: Wo() });
    i(u.current, u, !0);
    const d = de({}, hs(o.value, a, null), { position: u.position + 1 }, c);
    i(a, d, !1), (o.value = a);
  }
  return { location: o, state: r, push: l, replace: s };
}
function Td(e) {
  e = yd(e);
  const t = Pd(e),
    n = Rd(e, t.state, t.location, t.replace);
  function o(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const r = de(
    { location: "", base: e, go: o, createHref: wd.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function qd(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function wa(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const wt = {
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
  xa = Symbol("");
var ms;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(ms || (ms = {}));
function pn(e, t) {
  return de(new Error(), { type: e, [xa]: !0 }, t);
}
function dt(e, t) {
  return e instanceof Error && xa in e && (t == null || !!(e.type & t));
}
const gs = "[^/]+?",
  Ad = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Od = /[.+*?^${}()[\]/\\]/g;
function Md(e, t) {
  const n = de({}, Ad, t),
    o = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (r += "/"), (r += f.value.replace(Od, "\\$&")), (g += 40);
      else if (f.type === 1) {
        const { value: v, repeatable: T, optional: k, regexp: S } = f;
        i.push({ name: v, repeatable: T, optional: k });
        const p = S || gs;
        if (p !== gs) {
          g += 10;
          try {
            new RegExp(`(${p})`);
          } catch (q) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${p}): ` + q.message
            );
          }
        }
        let _ = T ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        d || (_ = k && c.length < 2 ? `(?:/${_})` : "/" + _),
          k && (_ += "?"),
          (r += _),
          (g += 20),
          k && (g += -8),
          T && (g += -20),
          p === ".*" && (g += -50);
      }
      u.push(g);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const c = o.length - 1;
    o[c][o[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const s = new RegExp(r, n.sensitive ? "" : "i");
  function l(c) {
    const u = c.match(s),
      d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const g = u[f] || "",
        v = i[f - 1];
      d[v.name] = g && v.repeatable ? g.split("/") : g;
    }
    return d;
  }
  function a(c) {
    let u = "",
      d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const g of f)
        if (g.type === 0) u += g.value;
        else if (g.type === 1) {
          const { value: v, repeatable: T, optional: k } = g,
            S = v in c ? c[v] : "";
          if (ot(S) && !T)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            );
          const p = ot(S) ? S.join("/") : S;
          if (!p)
            if (k)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${v}"`);
          u += p;
        }
    }
    return u || "/";
  }
  return { re: s, score: o, keys: i, parse: l, stringify: a };
}
function $d(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
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
function Ld(e, t) {
  let n = 0;
  const o = e.score,
    r = t.score;
  for (; n < o.length && n < r.length; ) {
    const i = $d(o[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (ps(o)) return 1;
    if (ps(r)) return -1;
  }
  return r.length - o.length;
}
function ps(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Id = { type: 0, value: "" },
  Bd = /[a-zA-Z0-9_]/;
function Fd(e) {
  if (!e) return [[]];
  if (e === "/") return [[Id]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${c}": ${g}`);
  }
  let n = 0,
    o = n;
  const r = [];
  let i;
  function s() {
    i && r.push(i), (i = []);
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
      (o = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && d(), s()) : a === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = o);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : Bd.test(a)
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
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), s(), r;
}
function jd(e, t, n) {
  const o = Md(Fd(e.path), n),
    r = de(o, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Vd(e, t) {
  const n = [],
    o = new Map();
  t = ys({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function i(u, d, f) {
    const g = !f,
      v = Nd(u);
    v.aliasOf = f && f.record;
    const T = ys(t, u),
      k = [v];
    if ("alias" in u) {
      const _ = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const q of _)
        k.push(
          de({}, v, {
            components: f ? f.record.components : v.components,
            path: q,
            aliasOf: f ? f.record : v,
          })
        );
    }
    let S, p;
    for (const _ of k) {
      const { path: q } = _;
      if (d && q[0] !== "/") {
        const I = d.record.path,
          y = I[I.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (q && y + q);
      }
      if (
        ((S = jd(_, d, T)),
        f
          ? f.alias.push(S)
          : ((p = p || S),
            p !== S && p.alias.push(S),
            g && u.name && !bs(S) && s(u.name)),
        v.children)
      ) {
        const I = v.children;
        for (let y = 0; y < I.length; y++) i(I[y], S, f && f.children[y]);
      }
      (f = f || S),
        ((S.record.components && Object.keys(S.record.components).length) ||
          S.record.name ||
          S.record.redirect) &&
          a(S);
    }
    return p
      ? () => {
          s(p);
        }
      : Ln;
  }
  function s(u) {
    if (wa(u)) {
      const d = o.get(u);
      d &&
        (o.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(s),
        d.alias.forEach(s));
    } else {
      const d = n.indexOf(u);
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && o.delete(u.record.name),
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
      Ld(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !Ca(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !bs(u) && o.set(u.record.name, u);
  }
  function c(u, d) {
    let f,
      g = {},
      v,
      T;
    if ("name" in u && u.name) {
      if (((f = o.get(u.name)), !f)) throw pn(1, { location: u });
      (T = f.record.name),
        (g = de(
          vs(
            d.params,
            f.keys.filter((p) => !p.optional).map((p) => p.name)
          ),
          u.params &&
            vs(
              u.params,
              f.keys.map((p) => p.name)
            )
        )),
        (v = f.stringify(g));
    } else if ("path" in u)
      (v = u.path),
        (f = n.find((p) => p.re.test(v))),
        f && ((g = f.parse(v)), (T = f.record.name));
    else {
      if (((f = d.name ? o.get(d.name) : n.find((p) => p.re.test(d.path))), !f))
        throw pn(1, { location: u, currentLocation: d });
      (T = f.record.name),
        (g = de({}, d.params, u.params)),
        (v = f.stringify(g));
    }
    const k = [];
    let S = f;
    for (; S; ) k.unshift(S.record), (S = S.parent);
    return { name: T, path: v, params: g, matched: k, meta: zd(k) };
  }
  return (
    e.forEach((u) => i(u)),
    {
      addRoute: i,
      resolve: c,
      removeRoute: s,
      getRoutes: l,
      getRecordMatcher: r,
    }
  );
}
function vs(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function Nd(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Dd(e),
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
function Dd(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function bs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function zd(e) {
  return e.reduce((t, n) => de(t, n.meta), {});
}
function ys(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ca(e, t) {
  return t.children.some((n) => n === e || Ca(e, n));
}
const ka = /#/g,
  Hd = /&/g,
  Kd = /\//g,
  Ud = /=/g,
  Wd = /\?/g,
  Ea = /\+/g,
  Qd = /%5B/g,
  Yd = /%5D/g,
  Sa = /%5E/g,
  Zd = /%60/g,
  Ra = /%7B/g,
  Jd = /%7C/g,
  Pa = /%7D/g,
  Xd = /%20/g;
function di(e) {
  return encodeURI("" + e)
    .replace(Jd, "|")
    .replace(Qd, "[")
    .replace(Yd, "]");
}
function Gd(e) {
  return di(e).replace(Ra, "{").replace(Pa, "}").replace(Sa, "^");
}
function Ir(e) {
  return di(e)
    .replace(Ea, "%2B")
    .replace(Xd, "+")
    .replace(ka, "%23")
    .replace(Hd, "%26")
    .replace(Zd, "`")
    .replace(Ra, "{")
    .replace(Pa, "}")
    .replace(Sa, "^");
}
function eh(e) {
  return Ir(e).replace(Ud, "%3D");
}
function th(e) {
  return di(e).replace(ka, "%23").replace(Wd, "%3F");
}
function nh(e) {
  return e == null ? "" : th(e).replace(Kd, "%2F");
}
function Ro(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function oh(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(Ea, " "),
      s = i.indexOf("="),
      l = Ro(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : Ro(i.slice(s + 1));
    if (l in t) {
      let c = t[l];
      ot(c) || (c = t[l] = [c]), c.push(a);
    } else t[l] = a;
  }
  return t;
}
function _s(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = eh(n)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ot(o) ? o.map((i) => i && Ir(i)) : [o && Ir(o)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function rh(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 &&
      (t[n] = ot(o)
        ? o.map((r) => (r == null ? null : "" + r))
        : o == null
        ? o
        : "" + o);
  }
  return t;
}
const ih = Symbol(""),
  ws = Symbol(""),
  Qo = Symbol(""),
  hi = Symbol(""),
  Br = Symbol("");
function Cn() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const r = e.indexOf(o);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function St(e, t, n, o, r) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () =>
    new Promise((s, l) => {
      const a = (d) => {
          d === !1
            ? l(pn(4, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : qd(d)
            ? l(pn(2, { from: t, to: d }))
            : (i &&
                o.enterCallbacks[r] === i &&
                typeof d == "function" &&
                i.push(d),
              s());
        },
        c = e.call(o && o.instances[r], t, n, a);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(a)), u.catch((d) => l(d));
    });
}
function ur(e, t, n, o) {
  const r = [];
  for (const i of e)
    for (const s in i.components) {
      let l = i.components[s];
      if (!(t !== "beforeRouteEnter" && !i.instances[s]))
        if (sh(l)) {
          const c = (l.__vccOpts || l)[t];
          c && r.push(St(c, n, o, i, s));
        } else {
          let a = l();
          r.push(() =>
            a.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${s}" at "${i.path}"`)
                );
              const u = dd(c) ? c.default : c;
              i.components[s] = u;
              const f = (u.__vccOpts || u)[t];
              return f && St(f, n, o, i, s)();
            })
          );
        }
    }
  return r;
}
function sh(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function xs(e) {
  const t = je(Qo),
    n = je(hi),
    o = x(() => t.resolve(Kt(e.to))),
    r = x(() => {
      const { matched: a } = o.value,
        { length: c } = a,
        u = a[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const f = d.findIndex(gn.bind(null, u));
      if (f > -1) return f;
      const g = Cs(a[c - 2]);
      return c > 1 && Cs(u) === g && d[d.length - 1].path !== g
        ? d.findIndex(gn.bind(null, a[c - 2]))
        : f;
    }),
    i = x(() => r.value > -1 && ch(n.params, o.value.params)),
    s = x(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        ya(n.params, o.value.params)
    );
  function l(a = {}) {
    return uh(a)
      ? t[Kt(e.replace) ? "replace" : "push"](Kt(e.to)).catch(Ln)
      : Promise.resolve();
  }
  return {
    route: o,
    href: x(() => o.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l,
  };
}
const lh = Bo({
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
    useLink: xs,
    setup(e, { slots: t }) {
      const n = Mt(xs(e)),
        { options: o } = je(Qo),
        r = x(() => ({
          [ks(e.activeClass, o.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ks(
            e.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : P(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            );
      };
    },
  }),
  ah = lh;
function uh(e) {
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
function ch(e, t) {
  for (const n in t) {
    const o = t[n],
      r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (!ot(r) || r.length !== o.length || o.some((i, s) => i !== r[s]))
      return !1;
  }
  return !0;
}
function Cs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ks = (e, t, n) => (e != null ? e : t != null ? t : n),
  fh = Bo({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const o = je(Br),
        r = x(() => e.route || o.value),
        i = je(ws, 0),
        s = x(() => {
          let c = Kt(i);
          const { matched: u } = r.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        l = x(() => r.value.matched[s.value]);
      fo(
        ws,
        x(() => s.value + 1)
      ),
        fo(ih, l),
        fo(Br, r);
      const a = ce();
      return (
        ge(
          () => [a.value, l.value, e.name],
          ([c, u, d], [f, g, v]) => {
            u &&
              ((u.instances[d] = c),
              g &&
                g !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
                u.updateGuards.size || (u.updateGuards = g.updateGuards))),
              c &&
                u &&
                (!g || !gn(u, g) || !f) &&
                (u.enterCallbacks[d] || []).forEach((T) => T(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = r.value,
            u = e.name,
            d = l.value,
            f = d && d.components[u];
          if (!f) return Es(n.default, { Component: f, route: c });
          const g = d.props[u],
            v = g
              ? g === !0
                ? c.params
                : typeof g == "function"
                ? g(c)
                : g
              : null,
            k = P(
              f,
              de({}, v, t, {
                onVnodeUnmounted: (S) => {
                  S.component.isUnmounted && (d.instances[u] = null);
                },
                ref: a,
              })
            );
          return Es(n.default, { Component: k, route: c }) || k;
        }
      );
    },
  });
function Es(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const dh = fh;
function hh(e) {
  const t = Vd(e.routes, e),
    n = e.parseQuery || oh,
    o = e.stringifyQuery || _s,
    r = e.history,
    i = Cn(),
    s = Cn(),
    l = Cn(),
    a = Nu(wt);
  let c = wt;
  sn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = lr.bind(null, (L) => "" + L),
    d = lr.bind(null, nh),
    f = lr.bind(null, Ro);
  function g(L, Q) {
    let U, V;
    return (
      wa(L) ? ((U = t.getRecordMatcher(L)), (V = Q)) : (V = L), t.addRoute(V, U)
    );
  }
  function v(L) {
    const Q = t.getRecordMatcher(L);
    Q && t.removeRoute(Q);
  }
  function T() {
    return t.getRoutes().map((L) => L.record);
  }
  function k(L) {
    return !!t.getRecordMatcher(L);
  }
  function S(L, Q) {
    if (((Q = de({}, Q || a.value)), typeof L == "string")) {
      const h = ar(n, L, Q.path),
        m = t.resolve({ path: h.path }, Q),
        C = r.createHref(h.fullPath);
      return de(h, m, {
        params: f(m.params),
        hash: Ro(h.hash),
        redirectedFrom: void 0,
        href: C,
      });
    }
    let U;
    if ("path" in L) U = de({}, L, { path: ar(n, L.path, Q.path).path });
    else {
      const h = de({}, L.params);
      for (const m in h) h[m] == null && delete h[m];
      (U = de({}, L, { params: d(L.params) })), (Q.params = d(Q.params));
    }
    const V = t.resolve(U, Q),
      ne = L.hash || "";
    V.params = u(f(V.params));
    const ve = gd(o, de({}, L, { hash: Gd(ne), path: V.path })),
      ie = r.createHref(ve);
    return de(
      { fullPath: ve, hash: ne, query: o === _s ? rh(L.query) : L.query || {} },
      V,
      { redirectedFrom: void 0, href: ie }
    );
  }
  function p(L) {
    return typeof L == "string" ? ar(n, L, a.value.path) : de({}, L);
  }
  function _(L, Q) {
    if (c !== L) return pn(8, { from: Q, to: L });
  }
  function q(L) {
    return w(L);
  }
  function I(L) {
    return q(de(p(L), { replace: !0 }));
  }
  function y(L) {
    const Q = L.matched[L.matched.length - 1];
    if (Q && Q.redirect) {
      const { redirect: U } = Q;
      let V = typeof U == "function" ? U(L) : U;
      return (
        typeof V == "string" &&
          ((V = V.includes("?") || V.includes("#") ? (V = p(V)) : { path: V }),
          (V.params = {})),
        de(
          { query: L.query, hash: L.hash, params: "path" in V ? {} : L.params },
          V
        )
      );
    }
  }
  function w(L, Q) {
    const U = (c = S(L)),
      V = a.value,
      ne = L.state,
      ve = L.force,
      ie = L.replace === !0,
      h = y(U);
    if (h)
      return w(
        de(p(h), {
          state: typeof h == "object" ? de({}, ne, h.state) : ne,
          force: ve,
          replace: ie,
        }),
        Q || U
      );
    const m = U;
    m.redirectedFrom = Q;
    let C;
    return (
      !ve && pd(o, V, U) && ((C = pn(16, { to: m, from: V })), D(V, V, !0, !1)),
      (C ? Promise.resolve(C) : M(m, V))
        .catch((A) => (dt(A) ? (dt(A, 2) ? A : fe(A)) : O(A, m, V)))
        .then((A) => {
          if (A) {
            if (dt(A, 2))
              return w(
                de({ replace: ie }, p(A.to), {
                  state: typeof A.to == "object" ? de({}, ne, A.to.state) : ne,
                  force: ve,
                }),
                Q || m
              );
          } else A = B(m, V, !0, ie, ne);
          return $(m, V, A), A;
        })
    );
  }
  function b(L, Q) {
    const U = _(L, Q);
    return U ? Promise.reject(U) : Promise.resolve();
  }
  function M(L, Q) {
    let U;
    const [V, ne, ve] = mh(L, Q);
    U = ur(V.reverse(), "beforeRouteLeave", L, Q);
    for (const h of V)
      h.leaveGuards.forEach((m) => {
        U.push(St(m, L, Q));
      });
    const ie = b.bind(null, L, Q);
    return (
      U.push(ie),
      en(U)
        .then(() => {
          U = [];
          for (const h of i.list()) U.push(St(h, L, Q));
          return U.push(ie), en(U);
        })
        .then(() => {
          U = ur(ne, "beforeRouteUpdate", L, Q);
          for (const h of ne)
            h.updateGuards.forEach((m) => {
              U.push(St(m, L, Q));
            });
          return U.push(ie), en(U);
        })
        .then(() => {
          U = [];
          for (const h of L.matched)
            if (h.beforeEnter && !Q.matched.includes(h))
              if (ot(h.beforeEnter))
                for (const m of h.beforeEnter) U.push(St(m, L, Q));
              else U.push(St(h.beforeEnter, L, Q));
          return U.push(ie), en(U);
        })
        .then(
          () => (
            L.matched.forEach((h) => (h.enterCallbacks = {})),
            (U = ur(ve, "beforeRouteEnter", L, Q)),
            U.push(ie),
            en(U)
          )
        )
        .then(() => {
          U = [];
          for (const h of s.list()) U.push(St(h, L, Q));
          return U.push(ie), en(U);
        })
        .catch((h) => (dt(h, 8) ? h : Promise.reject(h)))
    );
  }
  function $(L, Q, U) {
    for (const V of l.list()) V(L, Q, U);
  }
  function B(L, Q, U, V, ne) {
    const ve = _(L, Q);
    if (ve) return ve;
    const ie = Q === wt,
      h = sn ? history.state : {};
    U &&
      (V || ie
        ? r.replace(L.fullPath, de({ scroll: ie && h && h.scroll }, ne))
        : r.push(L.fullPath, ne)),
      (a.value = L),
      D(L, Q, U, ie),
      fe();
  }
  let E;
  function N() {
    E ||
      (E = r.listen((L, Q, U) => {
        if (!rt.listening) return;
        const V = S(L),
          ne = y(V);
        if (ne) {
          w(de(ne, { replace: !0 }), V).catch(Ln);
          return;
        }
        c = V;
        const ve = a.value;
        sn && kd(ds(ve.fullPath, U.delta), Wo()),
          M(V, ve)
            .catch((ie) =>
              dt(ie, 12)
                ? ie
                : dt(ie, 2)
                ? (w(ie.to, V)
                    .then((h) => {
                      dt(h, 20) &&
                        !U.delta &&
                        U.type === Un.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Ln),
                  Promise.reject())
                : (U.delta && r.go(-U.delta, !1), O(ie, V, ve))
            )
            .then((ie) => {
              (ie = ie || B(V, ve, !1)),
                ie &&
                  (U.delta && !dt(ie, 8)
                    ? r.go(-U.delta, !1)
                    : U.type === Un.pop && dt(ie, 20) && r.go(-1, !1)),
                $(V, ve, ie);
            })
            .catch(Ln);
      }));
  }
  let R = Cn(),
    Z = Cn(),
    re;
  function O(L, Q, U) {
    fe(L);
    const V = Z.list();
    return (
      V.length ? V.forEach((ne) => ne(L, Q, U)) : console.error(L),
      Promise.reject(L)
    );
  }
  function W() {
    return re && a.value !== wt
      ? Promise.resolve()
      : new Promise((L, Q) => {
          R.add([L, Q]);
        });
  }
  function fe(L) {
    return (
      re ||
        ((re = !L),
        N(),
        R.list().forEach(([Q, U]) => (L ? U(L) : Q())),
        R.reset()),
      L
    );
  }
  function D(L, Q, U, V) {
    const { scrollBehavior: ne } = e;
    if (!sn || !ne) return Promise.resolve();
    const ve =
      (!U && Ed(ds(L.fullPath, 0))) ||
      ((V || !U) && history.state && history.state.scroll) ||
      null;
    return Me()
      .then(() => ne(L, Q, ve))
      .then((ie) => ie && Cd(ie))
      .catch((ie) => O(ie, L, Q));
  }
  const ue = (L) => r.go(L);
  let he;
  const pe = new Set(),
    rt = {
      currentRoute: a,
      listening: !0,
      addRoute: g,
      removeRoute: v,
      hasRoute: k,
      getRoutes: T,
      resolve: S,
      options: e,
      push: q,
      replace: I,
      go: ue,
      back: () => ue(-1),
      forward: () => ue(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: Z.add,
      isReady: W,
      install(L) {
        const Q = this;
        L.component("RouterLink", ah),
          L.component("RouterView", dh),
          (L.config.globalProperties.$router = Q),
          Object.defineProperty(L.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Kt(a),
          }),
          sn &&
            !he &&
            a.value === wt &&
            ((he = !0), q(r.location).catch((ne) => {}));
        const U = {};
        for (const ne in wt) U[ne] = x(() => a.value[ne]);
        L.provide(Qo, Q), L.provide(hi, Mt(U)), L.provide(Br, a);
        const V = L.unmount;
        pe.add(L),
          (L.unmount = function () {
            pe.delete(L),
              pe.size < 1 &&
                ((c = wt),
                E && E(),
                (E = null),
                (a.value = wt),
                (he = !1),
                (re = !1)),
              V();
          });
      },
    };
  return rt;
}
function en(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function mh(e, t) {
  const n = [],
    o = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((c) => gn(c, l)) ? o.push(l) : n.push(l));
    const a = e.matched[s];
    a && (t.matched.find((c) => gn(c, a)) || r.push(a));
  }
  return [n, o, r];
}
function Pg() {
  return je(Qo);
}
function Tg() {
  return je(hi);
}
const gh = [
    {
      path: "/",
      component: () =>
        ze(
          () => import("./BareLayout.a5de6585.js"),
          [
            "assets/BareLayout.a5de6585.js",
            "assets/QLayout.c8972892.js",
            "assets/QResizeObserver.c1066bbb.js",
          ]
        ),
      children: [
        {
          name: "landing",
          path: "",
          component: () =>
            ze(
              () => import("./LandingPage.ac5cea75.js"),
              [
                "assets/LandingPage.ac5cea75.js",
                "assets/LandingPage.59def00b.css",
                "assets/QPage.a405a503.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/login",
      component: () =>
        ze(
          () => import("./BareLayout.a5de6585.js"),
          [
            "assets/BareLayout.a5de6585.js",
            "assets/QLayout.c8972892.js",
            "assets/QResizeObserver.c1066bbb.js",
          ]
        ),
      children: [
        {
          name: "login",
          path: "",
          component: () =>
            ze(
              () => import("./LoginPage.848ef2ae.js"),
              [
                "assets/LoginPage.848ef2ae.js",
                "assets/LoginPage.ee61596f.css",
                "assets/QPage.a405a503.js",
                "assets/auth-store.52914b43.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/register",
      component: () =>
        ze(
          () => import("./BareLayout.a5de6585.js"),
          [
            "assets/BareLayout.a5de6585.js",
            "assets/QLayout.c8972892.js",
            "assets/QResizeObserver.c1066bbb.js",
          ]
        ),
      children: [
        {
          name: "register",
          path: "",
          component: () =>
            ze(
              () => import("./RegisterPage.086bc1c1.js"),
              [
                "assets/RegisterPage.086bc1c1.js",
                "assets/RegisterPage.1d865e99.css",
                "assets/QPage.a405a503.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/home",
      component: () =>
        ze(
          () => import("./NavTabLayout.7fff55ef.js"),
          [
            "assets/NavTabLayout.7fff55ef.js",
            "assets/QHeader.1ea5aca1.js",
            "assets/QResizeObserver.c1066bbb.js",
            "assets/QSpace.700ea27b.js",
            "assets/QTabs.af02ed7a.js",
            "assets/rtl.b51694b1.js",
            "assets/QLayout.c8972892.js",
            "assets/auth-store.52914b43.js",
          ]
        ),
      children: [
        {
          name: "home",
          path: "",
          component: () =>
            ze(
              () => import("./HomePage.14778dd1.js"),
              [
                "assets/HomePage.14778dd1.js",
                "assets/HomePage.f56f4f32.css",
                "assets/rtl.b51694b1.js",
                "assets/index.28dc5740.js",
                "assets/QPage.a405a503.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/workout/:muscleGroupId",
      component: () =>
        ze(
          () => import("./NavLayout.be2b00cd.js"),
          [
            "assets/NavLayout.be2b00cd.js",
            "assets/QHeader.1ea5aca1.js",
            "assets/QResizeObserver.c1066bbb.js",
            "assets/QSpace.700ea27b.js",
            "assets/QLayout.c8972892.js",
            "assets/auth-store.52914b43.js",
          ]
        ),
      children: [
        {
          name: "workout",
          path: "",
          component: () =>
            ze(
              () => import("./WorkoutPage.ab0578e9.js"),
              [
                "assets/WorkoutPage.ab0578e9.js",
                "assets/QTabs.af02ed7a.js",
                "assets/QResizeObserver.c1066bbb.js",
                "assets/rtl.b51694b1.js",
                "assets/index.28dc5740.js",
                "assets/QSpace.700ea27b.js",
                "assets/QPage.a405a503.js",
              ]
            ),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => ze(() => import("./ErrorNotFound.deb0cadf.js"), []),
    },
  ],
  cr = hh({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: gh,
    history: Td("/"),
  });
async function ph(e, t) {
  const n = e(id);
  n.use(ed, t);
  const o = typeof sr == "function" ? await sr({}) : sr;
  n.use(o);
  const r = ft(typeof cr == "function" ? await cr({ store: o }) : cr);
  return (
    o.use(({ store: i }) => {
      i.router = r;
    }),
    { app: n, store: o, router: r }
  );
}
const Fr = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  Zn = { size: String };
function Jn(e, t = Fr) {
  return x(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  );
}
const $e = (e) => ft(Bo(e)),
  vh = (e) => ft(e);
function et(e, t) {
  return (e !== void 0 && e()) || t;
}
function qg(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Dt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function bh(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Ag(e, t, n, o, r, i) {
  t.key = o + r;
  const s = P(e, t, n);
  return r === !0 ? Fl(s, i()) : s;
}
const Ss = "0 0 24 24",
  Rs = (e) => e,
  fr = (e) => `ionicons ${e}`,
  Ta = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": Rs,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": fr,
    "ion-ios": fr,
    "ion-logo": fr,
    "iconfont ": Rs,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
  },
  qa = { o_: "-outlined", r_: "-round", s_: "-sharp" },
  Aa = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" },
  yh = new RegExp("^(" + Object.keys(Ta).join("|") + ")"),
  _h = new RegExp("^(" + Object.keys(qa).join("|") + ")"),
  Ps = new RegExp("^(" + Object.keys(Aa).join("|") + ")"),
  wh = /^[Mm]\s?[-+]?\.?\d/,
  xh = /^img:/,
  Ch = /^svguse:/,
  kh = /^ion-/,
  Eh = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var vt = $e({
    name: "QIcon",
    props: {
      ...Zn,
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
        o = Jn(e),
        r = x(
          () =>
            "q-icon" +
            (e.left === !0 ? " on-left" : "") +
            (e.right === !0 ? " on-right" : "") +
            (e.color !== void 0 ? ` text-${e.color}` : "")
        ),
        i = x(() => {
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
          if (wh.test(l) === !0) {
            const [u, d = Ss] = l.split("|");
            return {
              svg: !0,
              viewBox: d,
              nodes: u.split("&&").map((f) => {
                const [g, v, T] = f.split("@@");
                return P("path", { style: v, d: g, transform: T });
              }),
            };
          }
          if (xh.test(l) === !0) return { img: !0, src: l.substring(4) };
          if (Ch.test(l) === !0) {
            const [u, d = Ss] = l.split("|");
            return { svguse: !0, src: u.substring(7), viewBox: d };
          }
          let a = " ";
          const c = l.match(yh);
          if (c !== null) s = Ta[c[1]](l);
          else if (Eh.test(l) === !0) s = l;
          else if (kh.test(l) === !0)
            s = `ionicons ion-${
              n.platform.is.ios === !0 ? "ios" : "md"
            }${l.substring(3)}`;
          else if (Ps.test(l) === !0) {
            s = "notranslate material-symbols";
            const u = l.match(Ps);
            u !== null && ((l = l.substring(6)), (s += Aa[u[1]])), (a = l);
          } else {
            s = "notranslate material-icons";
            const u = l.match(_h);
            u !== null && ((l = l.substring(2)), (s += qa[u[1]])), (a = l);
          }
          return { cls: s, content: a };
        });
      return () => {
        const s = {
          class: r.value,
          style: o.value,
          "aria-hidden": "true",
          role: "presentation",
        };
        return i.value.none === !0
          ? P(e.tag, s, et(t.default))
          : i.value.img === !0
          ? P("span", s, Dt(t.default, [P("img", { src: i.value.src })]))
          : i.value.svg === !0
          ? P(
              "span",
              s,
              Dt(t.default, [
                P(
                  "svg",
                  { viewBox: i.value.viewBox || "0 0 24 24" },
                  i.value.nodes
                ),
              ])
            )
          : i.value.svguse === !0
          ? P(
              "span",
              s,
              Dt(t.default, [
                P("svg", { viewBox: i.value.viewBox }, [
                  P("use", { "xlink:href": i.value.src }),
                ]),
              ])
            )
          : (i.value.cls !== void 0 && (s.class += " " + i.value.cls),
            P(e.tag, s, Dt(t.default, [i.value.content])));
      };
    },
  }),
  Sh = $e({
    name: "QAvatar",
    props: {
      ...Zn,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Jn(e),
        o = x(
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
        r = x(() => (e.fontSize ? { fontSize: e.fontSize } : null));
      return () => {
        const i = e.icon !== void 0 ? [P(vt, { name: e.icon })] : void 0;
        return P("div", { class: o.value, style: n.value }, [
          P(
            "div",
            {
              class: "q-avatar__content row flex-center overflow-hidden",
              style: r.value,
            },
            bh(t.default, i)
          ),
        ]);
      };
    },
  });
const Rh = { size: { type: [Number, String], default: "1em" }, color: String };
function Ph(e) {
  return {
    cSize: x(() => (e.size in Fr ? `${Fr[e.size]}px` : e.size)),
    classes: x(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
var Wn = $e({
  name: "QSpinner",
  props: { ...Rh, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: n } = Ph(e);
    return () =>
      P(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          P("circle", {
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
function jr(e, t) {
  const n = e.style;
  for (const o in t) n[o] = t[o];
}
function Th(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = Kt(e);
  if (t) return t.$el || t;
}
function qh(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
function Ah(e, t = 250) {
  let n = !1,
    o;
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1;
        }, t),
        (o = e.apply(this, arguments))),
      o
    );
  };
}
function Ts(e, t, n, o) {
  n.modifiers.stop === !0 && ko(e);
  const r = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || o === !0;
  const s = document.createElement("span"),
    l = document.createElement("span"),
    a = $f(e),
    { left: c, top: u, width: d, height: f } = t.getBoundingClientRect(),
    g = Math.sqrt(d * d + f * f),
    v = g / 2,
    T = `${(d - g) / 2}px`,
    k = i ? T : `${a.left - c - v}px`,
    S = `${(f - g) / 2}px`,
    p = i ? S : `${a.top - u - v}px`;
  (l.className = "q-ripple__inner"),
    jr(l, {
      height: `${g}px`,
      width: `${g}px`,
      transform: `translate3d(${k},${p},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (s.className = `q-ripple${r ? " text-" + r : ""}`),
    s.setAttribute("dir", "ltr"),
    s.appendChild(l),
    t.appendChild(s);
  const _ = () => {
    s.remove(), clearTimeout(q);
  };
  n.abort.push(_);
  let q = setTimeout(() => {
    l.classList.add("q-ripple__inner--enter"),
      (l.style.transform = `translate3d(${T},${S},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (q = setTimeout(() => {
        l.classList.remove("q-ripple__inner--enter"),
          l.classList.add("q-ripple__inner--leave"),
          (l.style.opacity = 0),
          (q = setTimeout(() => {
            s.remove(), n.abort.splice(n.abort.indexOf(_), 1);
          }, 275));
      }, 250));
  }, 50);
}
function qs(e, { modifiers: t, value: n, arg: o }) {
  const r = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: r.early === !0,
    stop: r.stop === !0,
    center: r.center === !0,
    color: r.color || o,
    keyCodes: [].concat(r.keyCodes || 13),
  };
}
var Oh = vh({
  name: "ripple",
  beforeMount(e, t) {
    const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (n.ripple === !1) return;
    const o = {
      cfg: n,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(r) {
        o.enabled === !0 &&
          r.qSkipRipple !== !0 &&
          r.type === (o.modifiers.early === !0 ? "pointerdown" : "click") &&
          Ts(r, e, o, r.qKeyEvent === !0);
      },
      keystart: Ah((r) => {
        o.enabled === !0 &&
          r.qSkipRipple !== !0 &&
          Kn(r, o.modifiers.keyCodes) === !0 &&
          r.type === `key${o.modifiers.early === !0 ? "down" : "up"}` &&
          Ts(r, e, o, !0);
      }, 300),
    };
    qs(o, t),
      (e.__qripple = o),
      If(o, "main", [
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
        n.enabled === !0 && Object(t.value) === t.value && qs(n, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((n) => {
        n();
      }),
      Bf(t, "main"),
      delete e._qripple);
  },
});
const Oa = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  Mh = Object.keys(Oa),
  Ma = { align: { type: String, validator: (e) => Mh.includes(e) } };
function $a(e) {
  return x(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Oa[t]}`;
  });
}
function mo(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function La(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        La(e, n);
      })
    : e.add(t);
}
function Og(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      La(t, n);
    }),
    Array.from(t)
  );
}
function Ia(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Ba(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function As(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function Os(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function $h(e, t) {
  for (const n in t) {
    const o = t[n],
      r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (
      Array.isArray(r) === !1 ||
      r.length !== o.length ||
      o.some((i, s) => i !== r[s])
    )
      return !1;
  }
  return !0;
}
function Ms(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function Lh(e, t) {
  return Array.isArray(e) === !0
    ? Ms(e, t)
    : Array.isArray(t) === !0
    ? Ms(t, e)
    : e === t;
}
function Ih(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (Lh(e[n], t[n]) === !1) return !1;
  return !0;
}
const Bh = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: "q-router-link--active" },
  exactActiveClass: { type: String, default: "q-router-link--exact-active" },
  href: String,
  target: String,
  disable: Boolean,
};
function Fh({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = we(),
    { props: o, proxy: r, emit: i } = n,
    s = Ia(n),
    l = x(() => o.disable !== !0 && o.href !== void 0),
    a = x(
      t === !0
        ? () =>
            s === !0 &&
            o.disable !== !0 &&
            l.value !== !0 &&
            o.to !== void 0 &&
            o.to !== null &&
            o.to !== ""
        : () =>
            s === !0 &&
            l.value !== !0 &&
            o.to !== void 0 &&
            o.to !== null &&
            o.to !== ""
    ),
    c = x(() => (a.value === !0 ? p(o.to) : null)),
    u = x(() => c.value !== null),
    d = x(() => l.value === !0 || u.value === !0),
    f = x(() => (o.type === "a" || d.value === !0 ? "a" : o.tag || e || "div")),
    g = x(() =>
      l.value === !0
        ? { href: o.href, target: o.target }
        : u.value === !0
        ? { href: c.value.href, target: o.target }
        : {}
    ),
    v = x(() => {
      if (u.value === !1) return -1;
      const { matched: I } = c.value,
        { length: y } = I,
        w = I[y - 1];
      if (w === void 0) return -1;
      const b = r.$route.matched;
      if (b.length === 0) return -1;
      const M = b.findIndex(Os.bind(null, w));
      if (M > -1) return M;
      const $ = As(I[y - 2]);
      return y > 1 && As(w) === $ && b[b.length - 1].path !== $
        ? b.findIndex(Os.bind(null, I[y - 2]))
        : M;
    }),
    T = x(
      () =>
        u.value === !0 && v.value !== -1 && $h(r.$route.params, c.value.params)
    ),
    k = x(
      () =>
        T.value === !0 &&
        v.value === r.$route.matched.length - 1 &&
        Ih(r.$route.params, c.value.params)
    ),
    S = x(() =>
      u.value === !0
        ? k.value === !0
          ? ` ${o.exactActiveClass} ${o.activeClass}`
          : o.exact === !0
          ? ""
          : T.value === !0
          ? ` ${o.activeClass}`
          : ""
        : ""
    );
  function p(I) {
    try {
      return r.$router.resolve(I);
    } catch {}
    return null;
  }
  function _(
    I,
    { returnRouterError: y, to: w = o.to, replace: b = o.replace } = {}
  ) {
    if (o.disable === !0) return I.preventDefault(), Promise.resolve(!1);
    if (
      I.metaKey ||
      I.altKey ||
      I.ctrlKey ||
      I.shiftKey ||
      (I.button !== void 0 && I.button !== 0) ||
      o.target === "_blank"
    )
      return Promise.resolve(!1);
    I.preventDefault();
    const M = r.$router[b === !0 ? "replace" : "push"](w);
    return y === !0 ? M : M.then(() => {}).catch(() => {});
  }
  function q(I) {
    if (u.value === !0) {
      const y = (w) => _(I, w);
      i("click", I, y), I.defaultPrevented !== !0 && y();
    } else i("click", I);
  }
  return {
    hasRouterLink: u,
    hasHrefLink: l,
    hasLink: d,
    linkTag: f,
    resolvedLink: c,
    linkIsActive: T,
    linkIsExactActive: k,
    linkClass: S,
    linkAttrs: g,
    getLink: p,
    navigateToRouterLink: _,
    navigateOnClick: q,
  };
}
const $s = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  jh = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Vh = ["button", "submit", "reset"],
  Nh = /[^\s]\/[^\s]/,
  Dh = ["flat", "outline", "push", "unelevated"],
  zh = (e, t) =>
    e.flat === !0
      ? "flat"
      : e.outline === !0
      ? "outline"
      : e.push === !0
      ? "push"
      : e.unelevated === !0
      ? "unelevated"
      : t,
  Hh = {
    ...Zn,
    ...Bh,
    type: { type: String, default: "button" },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...Dh.reduce((e, t) => (e[t] = Boolean) && e, {}),
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
    align: { ...Ma.align, default: "center" },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function Kh(e) {
  const t = Jn(e, jh),
    n = $a(e),
    {
      hasRouterLink: o,
      hasLink: r,
      linkTag: i,
      linkAttrs: s,
      navigateOnClick: l,
    } = Fh({ fallbackTag: "button" }),
    a = x(() => {
      const k = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, k, {
            padding: e.padding
              .split(/\s+/)
              .map((S) => (S in $s ? $s[S] + "px" : S))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : k;
    }),
    c = x(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    u = x(() => e.disable !== !0 && e.loading !== !0),
    d = x(() => (u.value === !0 ? e.tabindex || 0 : -1)),
    f = x(() => zh(e, "standard")),
    g = x(() => {
      const k = { tabindex: d.value };
      return (
        r.value === !0
          ? Object.assign(k, s.value)
          : Vh.includes(e.type) === !0 && (k.type = e.type),
        i.value === "a"
          ? (e.disable === !0
              ? (k["aria-disabled"] = "true")
              : k.href === void 0 && (k.role = "button"),
            o.value !== !0 && Nh.test(e.type) === !0 && (k.type = e.type))
          : e.disable === !0 &&
            ((k.disabled = ""), (k["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(k, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        k
      );
    }),
    v = x(() => {
      let k;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (k = `text-${e.textColor || e.color}`)
          : (k = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (k = `text-${e.textColor}`);
      const S =
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
        `q-btn--${f.value} q-btn--${S}` +
        (k !== void 0 ? " " + k : "") +
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
    T = x(
      () =>
        n.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : "")
    );
  return {
    classes: v,
    style: a,
    innerClasses: T,
    attributes: g,
    hasLink: r,
    linkTag: i,
    navigateOnClick: l,
    isActionable: u,
  };
}
const { passiveCapture: De } = Ie;
let tn = null,
  nn = null,
  on = null;
var Vr = $e({
  name: "QBtn",
  props: {
    ...Hh,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: o } = we(),
      {
        classes: r,
        style: i,
        innerClasses: s,
        attributes: l,
        hasLink: a,
        linkTag: c,
        navigateOnClick: u,
        isActionable: d,
      } = Kh(e),
      f = ce(null),
      g = ce(null);
    let v = null,
      T,
      k;
    const S = x(() => e.label !== void 0 && e.label !== null && e.label !== ""),
      p = x(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: a.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      _ = x(() => ({ center: e.round })),
      q = x(() => {
        const R = Math.max(0, Math.min(100, e.percentage));
        return R > 0
          ? {
              transition: "transform 0.6s",
              transform: `translateX(${R - 100}%)`,
            }
          : {};
      }),
      I = x(() => {
        if (e.loading === !0)
          return {
            onMousedown: N,
            onTouchstart: N,
            onClick: N,
            onKeydown: N,
            onKeyup: N,
          };
        if (d.value === !0) {
          const R = { onClick: w, onKeydown: b, onMousedown: $ };
          if (o.$q.platform.has.touch === !0) {
            const Z = e.onTouchstart !== void 0 ? "" : "Passive";
            R[`onTouchstart${Z}`] = M;
          }
          return R;
        }
        return { onClick: Ke };
      }),
      y = x(() => ({
        ref: f,
        class: "q-btn q-btn-item non-selectable no-outline " + r.value,
        style: i.value,
        ...l.value,
        ...I.value,
      }));
    function w(R) {
      if (f.value !== null) {
        if (R !== void 0) {
          if (R.defaultPrevented === !0) return;
          const Z = document.activeElement;
          if (
            e.type === "submit" &&
            Z !== document.body &&
            f.value.contains(Z) === !1 &&
            Z.contains(f.value) === !1
          ) {
            f.value.focus();
            const re = () => {
              document.removeEventListener("keydown", Ke, !0),
                document.removeEventListener("keyup", re, De),
                f.value !== null && f.value.removeEventListener("blur", re, De);
            };
            document.addEventListener("keydown", Ke, !0),
              document.addEventListener("keyup", re, De),
              f.value.addEventListener("blur", re, De);
          }
        }
        u(R);
      }
    }
    function b(R) {
      f.value !== null &&
        (n("keydown", R),
        Kn(R, [13, 32]) === !0 &&
          nn !== f.value &&
          (nn !== null && E(),
          R.defaultPrevented !== !0 &&
            (f.value.focus(),
            (nn = f.value),
            f.value.classList.add("q-btn--active"),
            document.addEventListener("keyup", B, !0),
            f.value.addEventListener("blur", B, De)),
          Ke(R)));
    }
    function M(R) {
      f.value !== null &&
        (n("touchstart", R),
        R.defaultPrevented !== !0 &&
          (tn !== f.value &&
            (tn !== null && E(),
            (tn = f.value),
            (v = R.target),
            v.addEventListener("touchcancel", B, De),
            v.addEventListener("touchend", B, De)),
          (T = !0),
          clearTimeout(k),
          (k = setTimeout(() => {
            T = !1;
          }, 200))));
    }
    function $(R) {
      f.value !== null &&
        ((R.qSkipRipple = T === !0),
        n("mousedown", R),
        R.defaultPrevented !== !0 &&
          on !== f.value &&
          (on !== null && E(),
          (on = f.value),
          f.value.classList.add("q-btn--active"),
          document.addEventListener("mouseup", B, De)));
    }
    function B(R) {
      if (
        f.value !== null &&
        !(
          R !== void 0 &&
          R.type === "blur" &&
          document.activeElement === f.value
        )
      ) {
        if (R !== void 0 && R.type === "keyup") {
          if (nn === f.value && Kn(R, [13, 32]) === !0) {
            const Z = new MouseEvent("click", R);
            (Z.qKeyEvent = !0),
              R.defaultPrevented === !0 && Rt(Z),
              R.cancelBubble === !0 && ko(Z),
              f.value.dispatchEvent(Z),
              Ke(R),
              (R.qKeyEvent = !0);
          }
          n("keyup", R);
        }
        E();
      }
    }
    function E(R) {
      const Z = g.value;
      R !== !0 &&
        (tn === f.value || on === f.value) &&
        Z !== null &&
        Z !== document.activeElement &&
        (Z.setAttribute("tabindex", -1), Z.focus()),
        tn === f.value &&
          (v !== null &&
            (v.removeEventListener("touchcancel", B, De),
            v.removeEventListener("touchend", B, De)),
          (tn = v = null)),
        on === f.value &&
          (document.removeEventListener("mouseup", B, De), (on = null)),
        nn === f.value &&
          (document.removeEventListener("keyup", B, !0),
          f.value !== null && f.value.removeEventListener("blur", B, De),
          (nn = null)),
        f.value !== null && f.value.classList.remove("q-btn--active");
    }
    function N(R) {
      Ke(R), (R.qSkipRipple = !0);
    }
    return (
      Qe(() => {
        E(!0);
      }),
      Object.assign(o, { click: w }),
      () => {
        let R = [];
        e.icon !== void 0 &&
          R.push(
            P(vt, {
              name: e.icon,
              left: e.stack === !1 && S.value === !0,
              role: "img",
              "aria-hidden": "true",
            })
          ),
          S.value === !0 && R.push(P("span", { class: "block" }, [e.label])),
          (R = Dt(t.default, R)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            R.push(
              P(vt, {
                name: e.iconRight,
                right: e.stack === !1 && S.value === !0,
                role: "img",
                "aria-hidden": "true",
              })
            );
        const Z = [P("span", { class: "q-focus-helper", ref: g })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            Z.push(
              P(
                "span",
                {
                  class:
                    "q-btn__progress absolute-full overflow-hidden" +
                    (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                },
                [
                  P("span", {
                    class: "q-btn__progress-indicator fit block",
                    style: q.value,
                  }),
                ]
              )
            ),
          Z.push(
            P(
              "span",
              {
                class:
                  "q-btn__content text-center col items-center q-anchor--skip " +
                  s.value,
              },
              R
            )
          ),
          e.loading !== null &&
            Z.push(
              P(mn, { name: "q-transition--fade" }, () =>
                e.loading === !0
                  ? [
                      P(
                        "span",
                        {
                          key: "loading",
                          class: "absolute-full flex flex-center",
                        },
                        t.loading !== void 0 ? t.loading() : [P(Wn)]
                      ),
                    ]
                  : null
              )
            ),
          Fl(P(c.value, y.value, Z), [[Oh, p.value, void 0, _.value]])
        );
      }
    );
  },
});
let Uh = document.body;
function mi(e) {
  const t = document.createElement("div");
  if ((e !== void 0 && (t.id = e), So.globalNodes !== void 0)) {
    const n = So.globalNodes.class;
    n !== void 0 && (t.className = n);
  }
  return Uh.appendChild(t), t;
}
function Fa(e) {
  e.remove();
}
let Wh = 0;
const go = {},
  po = {},
  Ze = {},
  ja = {},
  Qh = /^\s*$/,
  Va = [],
  gi = [
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
  Yh = ["top-left", "top-right", "bottom-left", "bottom-right"],
  ln = {
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
function Na(e, t, n) {
  if (!e) return kn("parameter required");
  let o;
  const r = { textColor: "white" };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(r, go),
    ut(e) === !1 &&
      (r.type && Object.assign(r, ln[r.type]), (e = { message: e })),
    Object.assign(r, ln[e.type || r.type], e),
    typeof r.icon == "function" && (r.icon = r.icon(t)),
    r.spinner
      ? (r.spinner === !0 && (r.spinner = Wn), (r.spinner = ft(r.spinner)))
      : (r.spinner = !1),
    (r.meta = {
      hasMedia: Boolean(r.spinner !== !1 || r.icon || r.avatar),
      hasText: Ls(r.message) || Ls(r.caption),
    }),
    r.position)
  ) {
    if (gi.includes(r.position) === !1) return kn("wrong position", e);
  } else r.position = "bottom";
  if (r.timeout === void 0) r.timeout = 5e3;
  else {
    const a = parseInt(r.timeout, 10);
    if (isNaN(a) || a < 0) return kn("wrong timeout", e);
    r.timeout = a;
  }
  r.timeout === 0
    ? (r.progress = !1)
    : r.progress === !0 &&
      ((r.meta.progressClass =
        "q-notification__progress" +
        (r.progressClass ? ` ${r.progressClass}` : "")),
      (r.meta.progressStyle = { animationDuration: `${r.timeout + 1e3}ms` }));
  const i = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(go.actions) === !0
          ? go.actions
          : []
      )
      .concat(
        ln[e.type] !== void 0 && Array.isArray(ln[e.type].actions) === !0
          ? ln[e.type].actions
          : []
      ),
    { closeBtn: s } = r;
  if (
    (s && i.push({ label: typeof s == "string" ? s : t.lang.label.close }),
    (r.actions = i.map(({ handler: a, noDismiss: c, ...u }) => ({
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
    r.multiLine === void 0 && (r.multiLine = r.actions.length > 1),
    Object.assign(r.meta, {
      class:
        `q-notification row items-stretch q-notification--${
          r.multiLine === !0 ? "multi-line" : "standard"
        }` +
        (r.color !== void 0 ? ` bg-${r.color}` : "") +
        (r.textColor !== void 0 ? ` text-${r.textColor}` : "") +
        (r.classes !== void 0 ? ` ${r.classes}` : ""),
      wrapperClass:
        "q-notification__wrapper col relative-position border-radius-inherit " +
        (r.multiLine === !0
          ? "column no-wrap justify-center"
          : "row items-center"),
      contentClass:
        "q-notification__content row items-center" +
        (r.multiLine === !0 ? "" : " col"),
      leftClass: r.meta.hasText === !0 ? "additional" : "single",
      attrs: { role: "alert", ...r.attrs },
    }),
    r.group === !1
      ? ((r.group = void 0), (r.meta.group = void 0))
      : ((r.group === void 0 || r.group === !0) &&
          (r.group = [r.message, r.caption, r.multiline]
            .concat(r.actions.map((a) => `${a.label}*${a.icon}`))
            .join("|")),
        (r.meta.group = r.group + "|" + r.position)),
    r.actions.length === 0
      ? (r.actions = void 0)
      : (r.meta.actionsClass =
          "q-notification__actions row items-center " +
          (r.multiLine === !0 ? "justify-end" : "col-auto") +
          (r.meta.hasMedia === !0
            ? " q-notification__actions--with-media"
            : "")),
    n !== void 0)
  ) {
    clearTimeout(n.notif.meta.timer), (r.meta.uid = n.notif.meta.uid);
    const a = Ze[r.position].value.indexOf(n.notif);
    Ze[r.position].value[a] = r;
  } else {
    const a = po[r.meta.group];
    if (a === void 0) {
      if (
        ((r.meta.uid = Wh++),
        (r.meta.badge = 1),
        ["left", "right", "center"].indexOf(r.position) !== -1)
      )
        Ze[r.position].value.splice(
          Math.floor(Ze[r.position].value.length / 2),
          0,
          r
        );
      else {
        const c = r.position.indexOf("top") > -1 ? "unshift" : "push";
        Ze[r.position].value[c](r);
      }
      r.group !== void 0 && (po[r.meta.group] = r);
    } else {
      if ((clearTimeout(a.meta.timer), r.badgePosition !== void 0)) {
        if (Yh.includes(r.badgePosition) === !1)
          return kn("wrong badgePosition", e);
      } else
        r.badgePosition = `top-${
          r.position.indexOf("left") > -1 ? "right" : "left"
        }`;
      (r.meta.uid = a.meta.uid),
        (r.meta.badge = a.meta.badge + 1),
        (r.meta.badgeClass =
          `q-notification__badge q-notification__badge--${r.badgePosition}` +
          (r.badgeColor !== void 0 ? ` bg-${r.badgeColor}` : "") +
          (r.badgeTextColor !== void 0 ? ` text-${r.badgeTextColor}` : "") +
          (r.badgeClass ? ` ${r.badgeClass}` : ""));
      const c = Ze[r.position].value.indexOf(a);
      Ze[r.position].value[c] = po[r.meta.group] = r;
    }
  }
  const l = () => {
    Zh(r), (o = void 0);
  };
  if (
    (r.timeout > 0 &&
      (r.meta.timer = setTimeout(() => {
        l();
      }, r.timeout + 1e3)),
    r.group !== void 0)
  )
    return (a) => {
      a !== void 0
        ? kn("trying to update a grouped one which is forbidden", e)
        : l();
    };
  if (((o = { dismiss: l, config: e, notif: r }), n !== void 0)) {
    Object.assign(n, o);
    return;
  }
  return (a) => {
    if (o !== void 0)
      if (a === void 0) o.dismiss();
      else {
        const c = Object.assign({}, o.config, a, {
          group: !1,
          position: r.position,
        });
        Na(c, t, o);
      }
  };
}
function Zh(e) {
  clearTimeout(e.meta.timer);
  const t = Ze[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete po[e.meta.group];
    const n = Va["" + e.meta.uid];
    if (n) {
      const { width: o, height: r } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = o),
        (n.style.height = r);
    }
    Ze[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function Ls(e) {
  return e != null && Qh.test(e) !== !0;
}
function kn(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function Jh() {
  return $e({
    name: "QNotifications",
    devtools: { hide: !0 },
    setup() {
      return () =>
        P(
          "div",
          { class: "q-notifications" },
          gi.map((e) =>
            P(
              wf,
              {
                key: e,
                class: ja[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                Ze[e].value.map((t) => {
                  const n = t.meta,
                    o = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? o.push(
                            P(t.spinner, {
                              class:
                                "q-notification__spinner q-notification__spinner--" +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? o.push(
                            P(vt, {
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
                          o.push(
                            P(
                              Sh,
                              {
                                class:
                                  "q-notification__avatar q-notification__avatar--" +
                                  n.leftClass,
                              },
                              () =>
                                P("img", {
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
                            P("div", l),
                            P("div", { class: "q-notification__caption" }, [
                              t.caption,
                            ]),
                          ]
                        : l;
                    }
                    o.push(P("div", s, i));
                  }
                  const r = [P("div", { class: n.contentClass }, o)];
                  return (
                    t.progress === !0 &&
                      r.push(
                        P("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      r.push(
                        P(
                          "div",
                          { class: n.actionsClass },
                          t.actions.map((i) => P(Vr, i))
                        )
                      ),
                    n.badge > 1 &&
                      r.push(
                        P(
                          "div",
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    P(
                      "div",
                      {
                        ref: (i) => {
                          Va["" + n.uid] = i;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [P("div", { class: n.wrapperClass }, r)]
                    )
                  );
                })
            )
          )
        );
    },
  });
}
var Xh = {
  setDefaults(e) {
    ut(e) === !0 && Object.assign(go, e);
  },
  registerType(e, t) {
    ut(t) === !0 && (ln[e] = t);
  },
  install({ $q: e, parentApp: t }) {
    if (
      ((e.notify = this.create = (n) => Na(n, e)),
      (e.notify.setDefaults = this.setDefaults),
      (e.notify.registerType = this.registerType),
      e.config.notify !== void 0 && this.setDefaults(e.config.notify),
      this.__installed !== !0)
    ) {
      gi.forEach((o) => {
        Ze[o] = ce([]);
        const r =
            ["left", "center", "right"].includes(o) === !0
              ? "center"
              : o.indexOf("top") > -1
              ? "top"
              : "bottom",
          i =
            o.indexOf("left") > -1
              ? "start"
              : o.indexOf("right") > -1
              ? "end"
              : "center",
          s = ["left", "right"].includes(o)
            ? `items-${o === "left" ? "start" : "end"} justify-center`
            : o === "center"
            ? "flex-center"
            : `items-${i}`;
        ja[
          o
        ] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${s}`;
      });
      const n = mi("q-notify");
      ma(Jh(), t).mount(n);
    }
  },
};
function Gh(e, t, n) {
  let o;
  function r() {
    o !== void 0 && (Or.remove(o), (o = void 0));
  }
  return (
    Qe(() => {
      e.value === !0 && r();
    }),
    {
      removeFromHistory: r,
      addToHistory() {
        (o = { condition: () => n.value === !0, handler: t }), Or.add(o);
      },
    }
  );
}
function em() {
  let e;
  const t = we();
  function n() {
    clearTimeout(e);
  }
  return (
    jo(n),
    Qe(n),
    {
      removeTimeout: n,
      registerTimeout(o, r) {
        clearTimeout(e), Ba(t) === !1 && (e = setTimeout(o, r));
      },
    }
  );
}
function tm() {
  let e;
  const t = we();
  function n() {
    e = void 0;
  }
  return (
    jo(n),
    Qe(n),
    {
      removeTick: n,
      registerTick(o) {
        (e = o),
          Me(() => {
            e === o && (Ba(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const nm = {
    modelValue: { type: Boolean, default: null },
    "onUpdate:modelValue": [Function, Array],
  },
  om = ["before-show", "show", "before-hide", "hide"];
function rm({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: o,
  handleHide: r,
  processOnMount: i,
}) {
  const s = we(),
    { props: l, emit: a, proxy: c } = s;
  let u;
  function d(p) {
    e.value === !0 ? v(p) : f(p);
  }
  function f(p) {
    if (
      l.disable === !0 ||
      (p !== void 0 && p.qAnchorHandled === !0) ||
      (t !== void 0 && t(p) !== !0)
    )
      return;
    const _ = l["onUpdate:modelValue"] !== void 0;
    _ === !0 &&
      (a("update:modelValue", !0),
      (u = p),
      Me(() => {
        u === p && (u = void 0);
      })),
      (l.modelValue === null || _ === !1) && g(p);
  }
  function g(p) {
    e.value !== !0 &&
      ((e.value = !0), a("before-show", p), o !== void 0 ? o(p) : a("show", p));
  }
  function v(p) {
    if (l.disable === !0) return;
    const _ = l["onUpdate:modelValue"] !== void 0;
    _ === !0 &&
      (a("update:modelValue", !1),
      (u = p),
      Me(() => {
        u === p && (u = void 0);
      })),
      (l.modelValue === null || _ === !1) && T(p);
  }
  function T(p) {
    e.value !== !1 &&
      ((e.value = !1), a("before-hide", p), r !== void 0 ? r(p) : a("hide", p));
  }
  function k(p) {
    l.disable === !0 && p === !0
      ? l["onUpdate:modelValue"] !== void 0 && a("update:modelValue", !1)
      : (p === !0) !== e.value && (p === !0 ? g : T)(u);
  }
  ge(() => l.modelValue, k),
    n !== void 0 &&
      Ia(s) === !0 &&
      ge(
        () => c.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && v();
        }
      ),
    i === !0 &&
      Yt(() => {
        k(l.modelValue);
      });
  const S = { show: f, hide: v, toggle: d };
  return Object.assign(c, S), S;
}
const im = {
  transitionShow: { type: String, default: "fade" },
  transitionHide: { type: String, default: "fade" },
  transitionDuration: { type: [String, Number], default: 300 },
};
function Mg(e, t) {
  const n = ce(t.value);
  return (
    ge(t, (o) => {
      Me(() => {
        n.value = o;
      });
    }),
    {
      transition: x(
        () =>
          "q-transition--" +
          (n.value === !0 ? e.transitionHide : e.transitionShow)
      ),
      transitionStyle: x(
        () => `--q-transition-duration: ${e.transitionDuration}ms`
      ),
    }
  );
}
let zt = [],
  Qn = [];
function Da(e) {
  Qn = Qn.filter((t) => t !== e);
}
function sm(e) {
  Da(e), Qn.push(e);
}
function Is(e) {
  Da(e), Qn.length === 0 && zt.length > 0 && (zt[zt.length - 1](), (zt = []));
}
function pi(e) {
  Qn.length === 0 ? e() : zt.push(e);
}
function lm(e) {
  zt = zt.filter((t) => t !== e);
}
const vo = [];
function $g(e) {
  return vo.find(
    (t) =>
      t.__qPortalInnerRef.value !== null &&
      t.__qPortalInnerRef.value.contains(e)
  );
}
function am(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return mo(e);
    } else if (e.__qPortalInnerRef !== void 0) {
      const n = mo(e);
      return n !== void 0 && n.$options.name === "QPopupProxy"
        ? (e.hide(t), n)
        : e;
    }
    e = mo(e);
  } while (e != null);
}
function Lg(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortalInnerRef !== void 0) {
      if ((n--, e.$options.name === "QMenu")) {
        e = am(e, t);
        continue;
      }
      e.hide(t);
    }
    e = mo(e);
  }
}
function um(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function cm(e, t, n, o) {
  const r = ce(!1),
    i = ce(!1);
  let s = null;
  const l = {},
    a = o === !0 && um(e);
  function c(d) {
    if (d === !0) {
      Is(l), (i.value = !0);
      return;
    }
    (i.value = !1),
      r.value === !1 &&
        (a === !1 && s === null && (s = mi()),
        (r.value = !0),
        vo.push(e.proxy),
        sm(l));
  }
  function u(d) {
    if (((i.value = !1), d !== !0)) return;
    Is(l), (r.value = !1);
    const f = vo.indexOf(e.proxy);
    f !== -1 && vo.splice(f, 1), s !== null && (Fa(s), (s = null));
  }
  return (
    No(() => {
      u(!0);
    }),
    (e.proxy.__qPortalInnerRef = t),
    {
      showPortal: c,
      hidePortal: u,
      portalIsActive: r,
      portalIsAccessible: i,
      renderPortal: () =>
        a === !0 ? n() : r.value === !0 ? [P(Fc, { to: s }, n())] : void 0,
    }
  );
}
const fm = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function Ig(e, t) {
  let n = Th(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return fm.includes(n) ? window : n;
}
function dm(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function hm(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let ro;
function Bg() {
  if (ro !== void 0) return ro;
  const e = document.createElement("p"),
    t = document.createElement("div");
  jr(e, { width: "100%", height: "200px" }),
    jr(t, {
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
  let o = e.offsetWidth;
  return n === o && (o = t.clientWidth), t.remove(), (ro = n - o), ro;
}
function mm(e, t = !0) {
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
let En = 0,
  dr,
  hr,
  Tn,
  mr = !1,
  Bs,
  Fs,
  rn;
function gm(e) {
  pm(e) && Ke(e);
}
function pm(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = Lf(e),
    n = e.shiftKey && !e.deltaX,
    o = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    r = n || o ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (mm(s, o))
      return o
        ? r < 0 && s.scrollTop === 0
          ? !0
          : r > 0 && s.scrollTop + s.clientHeight === s.scrollHeight
        : r < 0 && s.scrollLeft === 0
        ? !0
        : r > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth;
  }
  return !0;
}
function js(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function io(e) {
  mr !== !0 &&
    ((mr = !0),
    requestAnimationFrame(() => {
      mr = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: o } = document.scrollingElement;
      (Tn === void 0 || t !== window.innerHeight) &&
        ((Tn = n - t), (document.scrollingElement.scrollTop = o)),
        o > Tn &&
          (document.scrollingElement.scrollTop -= Math.ceil((o - Tn) / 8));
    }));
}
function Vs(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: o, overflowX: r } = window.getComputedStyle(t);
    (dr = hm(window)),
      (hr = dm(window)),
      (Bs = t.style.left),
      (Fs = t.style.top),
      (t.style.left = `-${dr}px`),
      (t.style.top = `-${hr}px`),
      r !== "hidden" &&
        (r === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      o !== "hidden" &&
        (o === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      ke.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              io,
              Ie.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              io,
              Ie.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", js, Ie.passiveCapture));
  }
  ke.is.desktop === !0 &&
    ke.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", gm, Ie.notPassive),
    e === "remove" &&
      (ke.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              io,
              Ie.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              io,
              Ie.passiveCapture
            ))
          : window.removeEventListener("scroll", js, Ie.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = Bs),
      (t.style.top = Fs),
      window.scrollTo(dr, hr),
      (Tn = void 0));
}
function vm(e) {
  let t = "add";
  if (e === !0) {
    if ((En++, rn !== void 0)) {
      clearTimeout(rn), (rn = void 0);
      return;
    }
    if (En > 1) return;
  } else {
    if (En === 0 || (En--, En > 0)) return;
    if (((t = "remove"), ke.is.ios === !0 && ke.is.nativeMobile === !0)) {
      clearTimeout(rn),
        (rn = setTimeout(() => {
          Vs(t), (rn = void 0);
        }, 100));
      return;
    }
  }
  Vs(t);
}
function bm() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), vm(t));
    },
  };
}
const Wt = [];
let vn;
function ym(e) {
  vn = e.keyCode === 27;
}
function _m() {
  vn === !0 && (vn = !1);
}
function wm(e) {
  vn === !0 && ((vn = !1), Kn(e, 27) === !0 && Wt[Wt.length - 1](e));
}
function za(e) {
  window[e]("keydown", ym),
    window[e]("blur", _m),
    window[e]("keyup", wm),
    (vn = !1);
}
function xm(e) {
  ke.is.desktop === !0 &&
    (Wt.push(e), Wt.length === 1 && za("addEventListener"));
}
function Ns(e) {
  const t = Wt.indexOf(e);
  t > -1 && (Wt.splice(t, 1), Wt.length === 0 && za("removeEventListener"));
}
const Qt = [];
function Ha(e) {
  Qt[Qt.length - 1](e);
}
function Cm(e) {
  ke.is.desktop === !0 &&
    (Qt.push(e),
    Qt.length === 1 && document.body.addEventListener("focusin", Ha));
}
function Ds(e) {
  const t = Qt.indexOf(e);
  t > -1 &&
    (Qt.splice(t, 1),
    Qt.length === 0 && document.body.removeEventListener("focusin", Ha));
}
let so = 0;
const km = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  zs = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  };
var Em = $e({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...nm,
    ...im,
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
  emits: [...om, "shake", "click", "escape-key"],
  setup(e, { slots: t, emit: n, attrs: o }) {
    const r = we(),
      i = ce(null),
      s = ce(!1),
      l = ce(!1),
      a = ce(!1);
    let c,
      u = null,
      d,
      f;
    const g = x(
        () =>
          e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
      ),
      { preventBodyScroll: v } = bm(),
      { registerTimeout: T } = em(),
      { registerTick: k, removeTick: S } = tm(),
      {
        showPortal: p,
        hidePortal: _,
        portalIsAccessible: q,
        renderPortal: I,
      } = cm(r, i, U, !0),
      { hide: y } = rm({
        showing: s,
        hideOnRouteChange: g,
        handleShow: O,
        handleHide: W,
        processOnMount: !0,
      }),
      { addToHistory: w, removeFromHistory: b } = Gh(s, y, g),
      M = x(
        () =>
          `q-dialog__inner flex no-pointer-events q-dialog__inner--${
            e.maximized === !0 ? "maximized" : "minimized"
          } q-dialog__inner--${e.position} ${km[e.position]}` +
          (a.value === !0 ? " q-dialog__inner--animating" : "") +
          (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
          (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
          (e.square === !0 ? " q-dialog__inner--square" : "")
      ),
      $ = x(
        () =>
          "q-transition--" +
          (e.transitionShow === void 0 ? zs[e.position][0] : e.transitionShow)
      ),
      B = x(
        () =>
          "q-transition--" +
          (e.transitionHide === void 0 ? zs[e.position][1] : e.transitionHide)
      ),
      E = x(() => (l.value === !0 ? B.value : $.value)),
      N = x(() => `--q-transition-duration: ${e.transitionDuration}ms`),
      R = x(() => s.value === !0 && e.seamless !== !0),
      Z = x(() => (e.autoClose === !0 ? { onClick: rt } : {})),
      re = x(() => [
        `q-dialog fullscreen no-pointer-events q-dialog--${
          R.value === !0 ? "modal" : "seamless"
        }`,
        o.class,
      ]);
    ge(s, (V) => {
      Me(() => {
        l.value = V;
      });
    }),
      ge(
        () => e.maximized,
        (V) => {
          s.value === !0 && pe(V);
        }
      ),
      ge(R, (V) => {
        v(V), V === !0 ? (Cm(Q), xm(ue)) : (Ds(Q), Ns(ue));
      });
    function O(V) {
      w(),
        (u =
          e.noRefocus === !1 && document.activeElement !== null
            ? document.activeElement
            : null),
        pe(e.maximized),
        p(),
        (a.value = !0),
        e.noFocus !== !0
          ? (document.activeElement !== null && document.activeElement.blur(),
            k(fe))
          : S(),
        T(() => {
          if (r.proxy.$q.platform.is.ios === !0) {
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
          p(!0), (a.value = !1), n("show", V);
        }, e.transitionDuration);
    }
    function W(V) {
      S(),
        b(),
        he(!0),
        (a.value = !0),
        _(),
        u !== null && (u.focus(), (u = null)),
        T(() => {
          _(!0), (a.value = !1), n("hide", V);
        }, e.transitionDuration);
    }
    function fe(V) {
      pi(() => {
        let ne = i.value;
        ne === null ||
          ne.contains(document.activeElement) === !0 ||
          ((ne = ne.querySelector(V || "[autofocus], [data-autofocus]") || ne),
          ne.focus({ preventScroll: !0 }));
      });
    }
    function D() {
      fe(), n("shake");
      const V = i.value;
      V !== null &&
        (V.classList.remove("q-animate--scale"),
        V.classList.add("q-animate--scale"),
        clearTimeout(c),
        (c = setTimeout(() => {
          i.value !== null && (V.classList.remove("q-animate--scale"), fe());
        }, 170)));
    }
    function ue() {
      e.seamless !== !0 &&
        (e.persistent === !0 || e.noEscDismiss === !0
          ? e.maximized !== !0 && e.noShake !== !0 && D()
          : (n("escape-key"), y()));
    }
    function he(V) {
      clearTimeout(c),
        (V === !0 || s.value === !0) &&
          (pe(!1), e.seamless !== !0 && (v(!1), Ds(Q), Ns(ue))),
        V !== !0 && (u = null);
    }
    function pe(V) {
      V === !0
        ? d !== !0 &&
          (so < 1 && document.body.classList.add("q-body--dialog"),
          so++,
          (d = !0))
        : d === !0 &&
          (so < 2 && document.body.classList.remove("q-body--dialog"),
          so--,
          (d = !1));
    }
    function rt(V) {
      f !== !0 && (y(V), n("click", V));
    }
    function L(V) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0
        ? y(V)
        : e.noShake !== !0 && D();
    }
    function Q(V) {
      e.allowFocusOutside !== !0 &&
        q.value === !0 &&
        qh(i.value, V.target) !== !0 &&
        fe('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(r.proxy, {
      focus: fe,
      shake: D,
      __updateRefocusTarget(V) {
        u = V || null;
      },
    }),
      Qe(he);
    function U() {
      return P(
        "div",
        {
          role: "dialog",
          "aria-modal": R.value === !0 ? "true" : "false",
          ...o,
          class: re.value,
        },
        [
          P(mn, { name: "q-transition--fade", appear: !0 }, () =>
            R.value === !0
              ? P("div", {
                  class: "q-dialog__backdrop fixed-full",
                  style: N.value,
                  "aria-hidden": "true",
                  onMousedown: L,
                })
              : null
          ),
          P(mn, { name: E.value, appear: !0 }, () =>
            s.value === !0
              ? P(
                  "div",
                  {
                    ref: i,
                    class: M.value,
                    style: N.value,
                    tabindex: -1,
                    ...Z.value,
                  },
                  et(t.default)
                )
              : null
          ),
        ]
      );
    }
    return I;
  },
});
const Zt = { dark: { type: Boolean, default: null } };
function Jt(e, t) {
  return x(() => (e.dark === null ? t.dark.isActive : e.dark));
}
var Sm = $e({
    name: "QCard",
    props: {
      ...Zt,
      tag: { type: String, default: "div" },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = we(),
        o = Jt(e, n),
        r = x(
          () =>
            "q-card" +
            (o.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : "")
        );
      return () => P(e.tag, { class: r.value }, et(t.default));
    },
  }),
  Sn = $e({
    name: "QCardSection",
    props: { tag: { type: String, default: "div" }, horizontal: Boolean },
    setup(e, { slots: t }) {
      const n = x(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? "horiz row no-wrap" : "vert"
          }`
      );
      return () => P(e.tag, { class: n.value }, et(t.default));
    },
  }),
  Rm = $e({
    name: "QCardActions",
    props: { ...Ma, vertical: Boolean },
    setup(e, { slots: t }) {
      const n = $a(e),
        o = x(
          () =>
            `q-card__actions ${n.value} q-card__actions--${
              e.vertical === !0 ? "vert column" : "horiz row"
            }`
        );
      return () => P("div", { class: o.value }, et(t.default));
    },
  });
const Pm = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  gr = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var Hs = $e({
  name: "QSeparator",
  props: {
    ...Zt,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String,
  },
  setup(e) {
    const t = we(),
      n = Jt(e, t.proxy.$q),
      o = x(() => (e.vertical === !0 ? "vertical" : "horizontal")),
      r = x(() => ` q-separator--${o.value}`),
      i = x(() => (e.inset !== !1 ? `${r.value}-${Pm[e.inset]}` : "")),
      s = x(
        () =>
          `q-separator${r.value}${i.value}` +
          (e.color !== void 0 ? ` bg-${e.color}` : "") +
          (n.value === !0 ? " q-separator--dark" : "")
      ),
      l = x(() => {
        const a = {};
        if (
          (e.size !== void 0 &&
            (a[e.vertical === !0 ? "width" : "height"] = e.size),
          e.spaced !== !1)
        ) {
          const c =
              e.spaced === !0
                ? `${gr.md}px`
                : e.spaced in gr
                ? `${gr[e.spaced]}px`
                : e.spaced,
            u = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
          a[`margin${u[0]}`] = a[`margin${u[1]}`] = c;
        }
        return a;
      });
    return () =>
      P("hr", { class: s.value, style: l.value, "aria-orientation": o.value });
  },
});
function Tm({ validate: e, resetValidation: t, requiresQForm: n }) {
  const o = je(Zf, !1);
  if (o !== !1) {
    const { props: r, proxy: i } = we();
    Object.assign(i, { validate: e, resetValidation: t }),
      ge(
        () => r.disable,
        (s) => {
          s === !0
            ? (typeof t == "function" && t(), o.unbindComponent(i))
            : o.bindComponent(i);
        }
      ),
      Yt(() => {
        r.disable !== !0 && o.bindComponent(i);
      }),
      Qe(() => {
        r.disable !== !0 && o.unbindComponent(i);
      });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const Ks = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  Us = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  Ws = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  lo =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  ao =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  pr = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => Ks.test(e),
    hexaColor: (e) => Us.test(e),
    hexOrHexaColor: (e) => Ws.test(e),
    rgbColor: (e) => lo.test(e),
    rgbaColor: (e) => ao.test(e),
    rgbOrRgbaColor: (e) => lo.test(e) || ao.test(e),
    hexOrRgbColor: (e) => Ks.test(e) || lo.test(e),
    hexaOrRgbaColor: (e) => Us.test(e) || ao.test(e),
    anyColor: (e) => Ws.test(e) || lo.test(e) || ao.test(e),
  },
  qm = [!0, !1, "ondemand"],
  Am = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], validator: (e) => qm.includes(e) },
  };
function Om(e, t) {
  const { props: n, proxy: o } = we(),
    r = ce(!1),
    i = ce(null),
    s = ce(null);
  Tm({ validate: v, resetValidation: g });
  let l = 0,
    a;
  const c = x(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length > 0
    ),
    u = x(() => n.disable !== !0 && c.value === !0),
    d = x(() => n.error === !0 || r.value === !0),
    f = x(() =>
      typeof n.errorMessage == "string" && n.errorMessage.length > 0
        ? n.errorMessage
        : i.value
    );
  ge(
    () => n.modelValue,
    () => {
      T();
    }
  ),
    ge(
      () => n.reactiveRules,
      (S) => {
        S === !0
          ? a === void 0 &&
            (a = ge(
              () => n.rules,
              () => {
                T(!0);
              }
            ))
          : a !== void 0 && (a(), (a = void 0));
      },
      { immediate: !0 }
    ),
    ge(e, (S) => {
      S === !0
        ? s.value === null && (s.value = !1)
        : s.value === !1 &&
          ((s.value = !0),
          u.value === !0 &&
            n.lazyRules !== "ondemand" &&
            t.value === !1 &&
            k());
    });
  function g() {
    l++,
      (t.value = !1),
      (s.value = null),
      (r.value = !1),
      (i.value = null),
      k.cancel();
  }
  function v(S = n.modelValue) {
    if (u.value !== !0) return !0;
    const p = ++l,
      _ =
        t.value !== !0
          ? () => {
              s.value = !0;
            }
          : () => {},
      q = (y, w) => {
        y === !0 && _(), (r.value = y), (i.value = w || null), (t.value = !1);
      },
      I = [];
    for (let y = 0; y < n.rules.length; y++) {
      const w = n.rules[y];
      let b;
      if (
        (typeof w == "function"
          ? (b = w(S, pr))
          : typeof w == "string" && pr[w] !== void 0 && (b = pr[w](S)),
        b === !1 || typeof b == "string")
      )
        return q(!0, b), !1;
      b !== !0 && b !== void 0 && I.push(b);
    }
    return I.length === 0
      ? (q(!1), !0)
      : ((t.value = !0),
        Promise.all(I).then(
          (y) => {
            if (y === void 0 || Array.isArray(y) === !1 || y.length === 0)
              return p === l && q(!1), !0;
            const w = y.find((b) => b === !1 || typeof b == "string");
            return p === l && q(w !== void 0, w), w === void 0;
          },
          (y) => (p === l && (console.error(y), q(!0)), !1)
        ));
  }
  function T(S) {
    u.value === !0 &&
      n.lazyRules !== "ondemand" &&
      (s.value === !0 || (n.lazyRules !== !0 && S !== !0)) &&
      k();
  }
  const k = aa(v, 0);
  return (
    Qe(() => {
      a !== void 0 && a(), k.cancel();
    }),
    Object.assign(o, { resetValidation: g, validate: v }),
    Yn(o, "hasError", () => d.value),
    {
      isDirtyModel: s,
      hasRules: c,
      hasError: d,
      errorMessage: f,
      validate: v,
      resetValidation: g,
    }
  );
}
const Qs = /^on[A-Z]/;
function Mm(e, t) {
  const n = { listeners: ce({}), attributes: ce({}) };
  function o() {
    const r = {},
      i = {};
    for (const s in e)
      s !== "class" && s !== "style" && Qs.test(s) === !1 && (r[s] = e[s]);
    for (const s in t.props) Qs.test(s) === !0 && (i[s] = t.props[s]);
    (n.attributes.value = r), (n.listeners.value = i);
  }
  return Bl(o), o(), n;
}
let vr,
  uo = 0;
const Te = new Array(256);
for (let e = 0; e < 256; e++) Te[e] = (e + 256).toString(16).substring(1);
const $m = (() => {
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
      for (let o = t; o > 0; o--) n.push(Math.floor(Math.random() * 256));
      return n;
    };
  })(),
  Ys = 4096;
function Lm() {
  (vr === void 0 || uo + 16 > Ys) && ((uo = 0), (vr = $m(Ys)));
  const e = Array.prototype.slice.call(vr, uo, (uo += 16));
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
function Nr(e) {
  return e === void 0 ? `f_${Lm()}` : e;
}
function Dr(e) {
  return e != null && ("" + e).length > 0;
}
const Im = {
    ...Zt,
    ...Am,
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
  Bm = [
    "update:modelValue",
    "clear",
    "focus",
    "blur",
    "popup-show",
    "popup-hide",
  ];
function Fm() {
  const { props: e, attrs: t, proxy: n, vnode: o } = we();
  return {
    isDark: Jt(e, n.$q),
    editable: x(() => e.disable !== !0 && e.readonly !== !0),
    innerLoading: ce(!1),
    focused: ce(!1),
    hasPopupOpen: !1,
    splitAttrs: Mm(t, o),
    targetUid: ce(Nr(e.for)),
    rootRef: ce(null),
    targetRef: ce(null),
    controlRef: ce(null),
  };
}
function jm(e) {
  const { props: t, emit: n, slots: o, attrs: r, proxy: i } = we(),
    { $q: s } = i;
  let l;
  e.hasValue === void 0 && (e.hasValue = x(() => Dr(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (O) => {
        n("update:modelValue", O);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: M, onFocusout: $ }),
    Object.assign(e, {
      clearValue: B,
      onControlFocusin: M,
      onControlFocusout: $,
      focus: w,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = x(() => {
        if (t.counter !== !1) {
          const O =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            W = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return O + (W !== void 0 ? " / " + W : "");
        }
      }));
  const {
      isDirtyModel: a,
      hasRules: c,
      hasError: u,
      errorMessage: d,
      resetValidation: f,
    } = Om(e.focused, e.innerLoading),
    g =
      e.floatingLabel !== void 0
        ? x(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : x(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    v = x(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        c.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    T = x(() =>
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
    k = x(
      () =>
        `q-field row no-wrap items-start q-field--${T.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (g.value === !0 ? " q-field--float" : "") +
        (p.value === !0 ? " q-field--labeled" : "") +
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
    S = x(
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
    p = x(() => t.labelSlot === !0 || t.label !== void 0),
    _ = x(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && u.value !== !0
          ? ` text-${t.labelColor}`
          : "")
    ),
    q = x(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: g.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    I = x(() => {
      const O = { for: e.targetUid.value };
      return (
        t.disable === !0
          ? (O["aria-disabled"] = "true")
          : t.readonly === !0 && (O["aria-readonly"] = "true"),
        O
      );
    });
  ge(
    () => t.for,
    (O) => {
      e.targetUid.value = Nr(O);
    }
  );
  function y() {
    const O = document.activeElement;
    let W = e.targetRef !== void 0 && e.targetRef.value;
    W &&
      (O === null || O.id !== e.targetUid.value) &&
      (W.hasAttribute("tabindex") === !0 || (W = W.querySelector("[tabindex]")),
      W && W !== O && W.focus({ preventScroll: !0 }));
  }
  function w() {
    pi(y);
  }
  function b() {
    lm(y);
    const O = document.activeElement;
    O !== null && e.rootRef.value.contains(O) && O.blur();
  }
  function M(O) {
    clearTimeout(l),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n("focus", O));
  }
  function $(O, W) {
    clearTimeout(l),
      (l = setTimeout(() => {
        (document.hasFocus() === !0 &&
          (e.hasPopupOpen === !0 ||
            e.controlRef === void 0 ||
            e.controlRef.value === null ||
            e.controlRef.value.contains(document.activeElement) !== !1)) ||
          (e.focused.value === !0 && ((e.focused.value = !1), n("blur", O)),
          W !== void 0 && W());
      }));
  }
  function B(O) {
    Ke(O),
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
      Me(() => {
        f(), s.platform.is.mobile !== !0 && (a.value = !1);
      });
  }
  function E() {
    const O = [];
    return (
      o.prepend !== void 0 &&
        O.push(
          P(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: Rt,
            },
            o.prepend()
          )
        ),
      O.push(
        P(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          N()
        )
      ),
      u.value === !0 &&
        t.noErrorIcon === !1 &&
        O.push(
          Z("error", [
            P(vt, { name: s.iconSet.field.error, color: "negative" }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? O.push(
            Z(
              "inner-loading-append",
              o.loading !== void 0 ? o.loading() : [P(Wn, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          O.push(
            Z("inner-clearable-append", [
              P(vt, {
                class: "q-field__focusable-action",
                tag: "button",
                name: t.clearIcon || s.iconSet.field.clear,
                tabindex: 0,
                type: "button",
                "aria-hidden": null,
                role: null,
                onClick: B,
              }),
            ])
          ),
      o.append !== void 0 &&
        O.push(
          P(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: Rt,
            },
            o.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        O.push(Z("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && O.push(e.getControlChild()),
      O
    );
  }
  function N() {
    const O = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        O.push(
          P(
            "div",
            { class: "q-field__prefix no-pointer-events row items-center" },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        O.push(e.getShadowControl()),
      e.getControl !== void 0
        ? O.push(e.getControl())
        : o.rawControl !== void 0
        ? O.push(o.rawControl())
        : o.control !== void 0 &&
          O.push(
            P(
              "div",
              {
                ref: e.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                "data-autofocus": t.autofocus === !0 || void 0,
              },
              o.control(q.value)
            )
          ),
      p.value === !0 &&
        O.push(P("div", { class: _.value }, et(o.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        O.push(
          P(
            "div",
            { class: "q-field__suffix no-pointer-events row items-center" },
            t.suffix
          )
        ),
      O.concat(et(o.default))
    );
  }
  function R() {
    let O, W;
    u.value === !0
      ? d.value !== null
        ? ((O = [P("div", { role: "alert" }, d.value)]),
          (W = `q--slot-error-${d.value}`))
        : ((O = et(o.error)), (W = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((O = [P("div", t.hint)]), (W = `q--slot-hint-${t.hint}`))
          : ((O = et(o.hint)), (W = "q--slot-hint")));
    const fe = t.counter === !0 || o.counter !== void 0;
    if (t.hideBottomSpace === !0 && fe === !1 && O === void 0) return;
    const D = P("div", { key: W, class: "q-field__messages col" }, O);
    return P(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: Rt,
      },
      [
        t.hideBottomSpace === !0
          ? D
          : P(mn, { name: "q-transition--field-message" }, () => D),
        fe === !0
          ? P(
              "div",
              { class: "q-field__counter" },
              o.counter !== void 0 ? o.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function Z(O, W) {
    return W === null
      ? null
      : P(
          "div",
          {
            key: O,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          W
        );
  }
  let re = !1;
  return (
    jo(() => {
      re = !0;
    }),
    Ll(() => {
      re === !0 && t.autofocus === !0 && i.focus();
    }),
    Yt(() => {
      Ot.value === !0 && t.for === void 0 && (e.targetUid.value = Nr()),
        t.autofocus === !0 && i.focus();
    }),
    Qe(() => {
      clearTimeout(l);
    }),
    Object.assign(i, { focus: w, blur: b }),
    function () {
      const W =
        e.getControl === void 0 && o.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...I.value,
            }
          : I.value;
      return P(
        "label",
        { ref: e.rootRef, class: [k.value, r.class], style: r.style, ...W },
        [
          o.before !== void 0
            ? P(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: Rt,
                },
                o.before()
              )
            : null,
          P(
            "div",
            { class: "q-field__inner relative-position col self-stretch" },
            [
              P(
                "div",
                {
                  ref: e.controlRef,
                  class: S.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                E()
              ),
              v.value === !0 ? R() : null,
            ]
          ),
          o.after !== void 0
            ? P(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: Rt,
                },
                o.after()
              )
            : null,
        ]
      );
    }
  );
}
const Zs = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  Po = {
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
  Ka = Object.keys(Po);
Ka.forEach((e) => {
  Po[e].regex = new RegExp(Po[e].pattern);
});
const Vm = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Ka.join("") + "])|(.)",
    "g"
  ),
  Js = /[.*+?^${}()|[\]\\]/g,
  Se = String.fromCharCode(1),
  Nm = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function Dm(e, t, n, o) {
  let r, i, s, l;
  const a = ce(null),
    c = ce(d());
  function u() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  ge(() => e.type + e.autogrow, g),
    ge(
      () => e.mask,
      (y) => {
        if (y !== void 0) v(c.value, !0);
        else {
          const w = q(c.value);
          g(), e.modelValue !== w && t("update:modelValue", w);
        }
      }
    ),
    ge(
      () => e.fillMask + e.reverseFillMask,
      () => {
        a.value === !0 && v(c.value, !0);
      }
    ),
    ge(
      () => e.unmaskedValue,
      () => {
        a.value === !0 && v(c.value);
      }
    );
  function d() {
    if ((g(), a.value === !0)) {
      const y = p(q(e.modelValue));
      return e.fillMask !== !1 ? I(y) : y;
    }
    return e.modelValue;
  }
  function f(y) {
    if (y < r.length) return r.slice(-y);
    let w = "",
      b = r;
    const M = b.indexOf(Se);
    if (M > -1) {
      for (let $ = y - b.length; $ > 0; $--) w += Se;
      b = b.slice(0, M) + w + b.slice(M);
    }
    return b;
  }
  function g() {
    if (
      ((a.value = e.mask !== void 0 && e.mask.length > 0 && u()),
      a.value === !1)
    ) {
      (l = void 0), (r = ""), (i = "");
      return;
    }
    const y = Zs[e.mask] === void 0 ? e.mask : Zs[e.mask],
      w =
        typeof e.fillMask == "string" && e.fillMask.length > 0
          ? e.fillMask.slice(0, 1)
          : "_",
      b = w.replace(Js, "\\$&"),
      M = [],
      $ = [],
      B = [];
    let E = e.reverseFillMask === !0,
      N = "",
      R = "";
    y.replace(Vm, (W, fe, D, ue, he) => {
      if (ue !== void 0) {
        const pe = Po[ue];
        B.push(pe),
          (R = pe.negate),
          E === !0 &&
            ($.push(
              "(?:" +
                R +
                "+)?(" +
                pe.pattern +
                "+)?(?:" +
                R +
                "+)?(" +
                pe.pattern +
                "+)?"
            ),
            (E = !1)),
          $.push("(?:" + R + "+)?(" + pe.pattern + ")?");
      } else if (D !== void 0)
        (N = "\\" + (D === "\\" ? "" : D)),
          B.push(D),
          M.push("([^" + N + "]+)?" + N + "?");
      else {
        const pe = fe !== void 0 ? fe : he;
        (N = pe === "\\" ? "\\\\\\\\" : pe.replace(Js, "\\\\$&")),
          B.push(pe),
          M.push("([^" + N + "]+)?" + N + "?");
      }
    });
    const Z = new RegExp(
        "^" +
          M.join("") +
          "(" +
          (N === "" ? "." : "[^" + N + "]") +
          "+)?" +
          (N === "" ? "" : "[" + N + "]*") +
          "$"
      ),
      re = $.length - 1,
      O = $.map((W, fe) =>
        fe === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + b + "*" + W)
          : fe === re
          ? new RegExp(
              "^" +
                W +
                "(" +
                (R === "" ? "." : R) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : b + "*")
            )
          : new RegExp("^" + W)
      );
    (s = B),
      (l = (W) => {
        const fe = Z.exec(W);
        fe !== null && (W = fe.slice(1).join(""));
        const D = [],
          ue = O.length;
        for (let he = 0, pe = W; he < ue; he++) {
          const rt = O[he].exec(pe);
          if (rt === null) break;
          (pe = pe.slice(rt.shift().length)), D.push(...rt);
        }
        return D.length > 0 ? D.join("") : W;
      }),
      (r = B.map((W) => (typeof W == "string" ? W : Se)).join("")),
      (i = r.split(Se).join(w));
  }
  function v(y, w, b) {
    const M = o.value,
      $ = M.selectionEnd,
      B = M.value.length - $,
      E = q(y);
    w === !0 && g();
    const N = p(E),
      R = e.fillMask !== !1 ? I(N) : N,
      Z = c.value !== R;
    M.value !== R && (M.value = R),
      Z === !0 && (c.value = R),
      document.activeElement === M &&
        Me(() => {
          if (R === i) {
            const O = e.reverseFillMask === !0 ? i.length : 0;
            M.setSelectionRange(O, O, "forward");
            return;
          }
          if (b === "insertFromPaste" && e.reverseFillMask !== !0) {
            const O = $ - 1;
            k.right(M, O, O);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(b) > -1
          ) {
            const O =
              e.reverseFillMask === !0
                ? $ === 0
                  ? R.length > N.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      R.length - (R === i ? 0 : Math.min(N.length, B) + 1)
                    ) + 1
                : $;
            M.setSelectionRange(O, O, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (Z === !0) {
              const O = Math.max(
                0,
                R.length - (R === i ? 0 : Math.min(N.length, B + 1))
              );
              O === 1 && $ === 1
                ? M.setSelectionRange(O, O, "forward")
                : k.rightReverse(M, O, O);
            } else {
              const O = R.length - B;
              M.setSelectionRange(O, O, "backward");
            }
          else if (Z === !0) {
            const O = Math.max(0, r.indexOf(Se), Math.min(N.length, $) - 1);
            k.right(M, O, O);
          } else {
            const O = $ - 1;
            k.right(M, O, O);
          }
        });
    const re = e.unmaskedValue === !0 ? q(R) : R;
    String(e.modelValue) !== re && n(re, !0);
  }
  function T(y, w, b) {
    const M = p(q(y.value));
    (w = Math.max(0, r.indexOf(Se), Math.min(M.length, w))),
      y.setSelectionRange(w, b, "forward");
  }
  const k = {
    left(y, w, b, M) {
      const $ = r.slice(w - 1).indexOf(Se) === -1;
      let B = Math.max(0, w - 1);
      for (; B >= 0; B--)
        if (r[B] === Se) {
          (w = B), $ === !0 && w++;
          break;
        }
      if (B < 0 && r[w] !== void 0 && r[w] !== Se) return k.right(y, 0, 0);
      w >= 0 && y.setSelectionRange(w, M === !0 ? b : w, "backward");
    },
    right(y, w, b, M) {
      const $ = y.value.length;
      let B = Math.min($, b + 1);
      for (; B <= $; B++)
        if (r[B] === Se) {
          b = B;
          break;
        } else r[B - 1] === Se && (b = B);
      if (B > $ && r[b - 1] !== void 0 && r[b - 1] !== Se)
        return k.left(y, $, $);
      y.setSelectionRange(M ? w : b, b, "forward");
    },
    leftReverse(y, w, b, M) {
      const $ = f(y.value.length);
      let B = Math.max(0, w - 1);
      for (; B >= 0; B--)
        if ($[B - 1] === Se) {
          w = B;
          break;
        } else if ($[B] === Se && ((w = B), B === 0)) break;
      if (B < 0 && $[w] !== void 0 && $[w] !== Se)
        return k.rightReverse(y, 0, 0);
      w >= 0 && y.setSelectionRange(w, M === !0 ? b : w, "backward");
    },
    rightReverse(y, w, b, M) {
      const $ = y.value.length,
        B = f($),
        E = B.slice(0, b + 1).indexOf(Se) === -1;
      let N = Math.min($, b + 1);
      for (; N <= $; N++)
        if (B[N - 1] === Se) {
          (b = N), b > 0 && E === !0 && b--;
          break;
        }
      if (N > $ && B[b - 1] !== void 0 && B[b - 1] !== Se)
        return k.leftReverse(y, $, $);
      y.setSelectionRange(M === !0 ? w : b, b, "forward");
    },
  };
  function S(y) {
    if (fa(y) === !0) return;
    const w = o.value,
      b = w.selectionStart,
      M = w.selectionEnd;
    if (y.keyCode === 37 || y.keyCode === 39) {
      const $ =
        k[
          (y.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      y.preventDefault(), $(w, b, M, y.shiftKey);
    } else
      y.keyCode === 8 && e.reverseFillMask !== !0 && b === M
        ? k.left(w, b, M, !0)
        : y.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          b === M &&
          k.rightReverse(w, b, M, !0);
  }
  function p(y) {
    if (y == null || y === "") return "";
    if (e.reverseFillMask === !0) return _(y);
    const w = s;
    let b = 0,
      M = "";
    for (let $ = 0; $ < w.length; $++) {
      const B = y[b],
        E = w[$];
      if (typeof E == "string") (M += E), B === E && b++;
      else if (B !== void 0 && E.regex.test(B))
        (M += E.transform !== void 0 ? E.transform(B) : B), b++;
      else return M;
    }
    return M;
  }
  function _(y) {
    const w = s,
      b = r.indexOf(Se);
    let M = y.length - 1,
      $ = "";
    for (let B = w.length - 1; B >= 0 && M > -1; B--) {
      const E = w[B];
      let N = y[M];
      if (typeof E == "string") ($ = E + $), N === E && M--;
      else if (N !== void 0 && E.regex.test(N))
        do
          ($ = (E.transform !== void 0 ? E.transform(N) : N) + $),
            M--,
            (N = y[M]);
        while (b === B && N !== void 0 && E.regex.test(N));
      else return $;
    }
    return $;
  }
  function q(y) {
    return typeof y != "string" || l === void 0
      ? typeof y == "number"
        ? l("" + y)
        : y
      : l(y);
  }
  function I(y) {
    return i.length - y.length <= 0
      ? y
      : e.reverseFillMask === !0 && y.length > 0
      ? i.slice(0, -y.length) + y
      : y + i.slice(y.length);
  }
  return {
    innerValue: c,
    hasMask: a,
    moveCursorForPaste: T,
    updateMaskValue: v,
    onMaskedKeydown: S,
  };
}
const vi = { name: String };
function Fg(e) {
  return x(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Ua(e = {}) {
  return (t, n, o) => {
    t[n](P("input", { class: "hidden" + (o || ""), ...e.value }));
  };
}
function zm(e) {
  return x(() => e.name || e.for);
}
function Hm(e, t) {
  function n() {
    const o = e.modelValue;
    try {
      const r =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : void 0;
      return (
        Object(o) === o &&
          ("length" in o ? Array.from(o) : [o]).forEach((i) => {
            r.items.add(i);
          }),
        { files: r.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return x(
    t === !0
      ? () => {
          if (e.type === "file") return n();
        }
      : n
  );
}
const Km =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  Um =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  Wm = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  Qm = /[a-z0-9_ -]$/i;
function Ym(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      (n.target.qComposing = !1), e(n);
    } else
      n.type === "compositionupdate" &&
        n.target.qComposing !== !0 &&
        typeof n.data == "string" &&
        (ke.is.firefox === !0
          ? Qm.test(n.data) === !1
          : Km.test(n.data) === !0 ||
            Um.test(n.data) === !0 ||
            Wm.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
var Zm = $e({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...Im,
    ...Nm,
    ...vi,
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: "text" },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...Bm, "paste", "change"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: o } = we(),
      { $q: r } = o,
      i = {};
    let s = NaN,
      l,
      a,
      c,
      u;
    const d = ce(null),
      f = zm(e),
      {
        innerValue: g,
        hasMask: v,
        moveCursorForPaste: T,
        updateMaskValue: k,
        onMaskedKeydown: S,
      } = Dm(e, t, R, d),
      p = Hm(e, !0),
      _ = x(() => Dr(g.value)),
      q = Ym(N),
      I = Fm(),
      y = x(() => e.type === "textarea" || e.autogrow === !0),
      w = x(
        () =>
          y.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type)
      ),
      b = x(() => {
        const D = {
          ...I.splitAttrs.listeners.value,
          onInput: N,
          onPaste: E,
          onChange: re,
          onBlur: O,
          onFocus: ko,
        };
        return (
          (D.onCompositionstart =
            D.onCompositionupdate =
            D.onCompositionend =
              q),
          v.value === !0 && (D.onKeydown = S),
          e.autogrow === !0 && (D.onAnimationend = Z),
          D
        );
      }),
      M = x(() => {
        const D = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: f.value,
          ...I.splitAttrs.attributes.value,
          id: I.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          y.value === !1 && (D.type = e.type),
          e.autogrow === !0 && (D.rows = 1),
          D
        );
      });
    ge(
      () => e.type,
      () => {
        d.value && (d.value.value = e.modelValue);
      }
    ),
      ge(
        () => e.modelValue,
        (D) => {
          if (v.value === !0) {
            if (a === !0 && ((a = !1), String(D) === s)) return;
            k(D);
          } else
            g.value !== D &&
              ((g.value = D),
              e.type === "number" &&
                i.hasOwnProperty("value") === !0 &&
                (l === !0 ? (l = !1) : delete i.value));
          e.autogrow === !0 && Me(Z);
        }
      ),
      ge(
        () => e.autogrow,
        (D) => {
          D === !0
            ? Me(Z)
            : d.value !== null && n.rows > 0 && (d.value.style.height = "auto");
        }
      ),
      ge(
        () => e.dense,
        () => {
          e.autogrow === !0 && Me(Z);
        }
      );
    function $() {
      pi(() => {
        const D = document.activeElement;
        d.value !== null &&
          d.value !== D &&
          (D === null || D.id !== I.targetUid.value) &&
          d.value.focus({ preventScroll: !0 });
      });
    }
    function B() {
      d.value !== null && d.value.select();
    }
    function E(D) {
      if (v.value === !0 && e.reverseFillMask !== !0) {
        const ue = D.target;
        T(ue, ue.selectionStart, ue.selectionEnd);
      }
      t("paste", D);
    }
    function N(D) {
      if (!D || !D.target) return;
      if (e.type === "file") {
        t("update:modelValue", D.target.files);
        return;
      }
      const ue = D.target.value;
      if (D.target.qComposing === !0) {
        i.value = ue;
        return;
      }
      if (v.value === !0) k(ue, !1, D.inputType);
      else if ((R(ue), w.value === !0 && D.target === document.activeElement)) {
        const { selectionStart: he, selectionEnd: pe } = D.target;
        he !== void 0 &&
          pe !== void 0 &&
          Me(() => {
            D.target === document.activeElement &&
              ue.indexOf(D.target.value) === 0 &&
              D.target.setSelectionRange(he, pe);
          });
      }
      e.autogrow === !0 && Z();
    }
    function R(D, ue) {
      (u = () => {
        e.type !== "number" &&
          i.hasOwnProperty("value") === !0 &&
          delete i.value,
          e.modelValue !== D &&
            s !== D &&
            ((s = D),
            ue === !0 && (a = !0),
            t("update:modelValue", D),
            Me(() => {
              s === D && (s = NaN);
            })),
          (u = void 0);
      }),
        e.type === "number" && ((l = !0), (i.value = D)),
        e.debounce !== void 0
          ? (clearTimeout(c), (i.value = D), (c = setTimeout(u, e.debounce)))
          : u();
    }
    function Z() {
      requestAnimationFrame(() => {
        const D = d.value;
        if (D !== null) {
          const ue = D.parentNode.style,
            { overflow: he } = D.style;
          r.platform.is.firefox !== !0 && (D.style.overflow = "hidden"),
            (D.style.height = "1px"),
            (ue.marginBottom = D.scrollHeight - 1 + "px"),
            (D.style.height = D.scrollHeight + "px"),
            (D.style.overflow = he),
            (ue.marginBottom = "");
        }
      });
    }
    function re(D) {
      q(D), clearTimeout(c), u !== void 0 && u(), t("change", D.target.value);
    }
    function O(D) {
      D !== void 0 && ko(D),
        clearTimeout(c),
        u !== void 0 && u(),
        (l = !1),
        (a = !1),
        delete i.value,
        e.type !== "file" &&
          setTimeout(() => {
            d.value !== null &&
              (d.value.value = g.value !== void 0 ? g.value : "");
          });
    }
    function W() {
      return i.hasOwnProperty("value") === !0
        ? i.value
        : g.value !== void 0
        ? g.value
        : "";
    }
    Qe(() => {
      O();
    }),
      Yt(() => {
        e.autogrow === !0 && Z();
      }),
      Object.assign(I, {
        innerValue: g,
        fieldClass: x(
          () =>
            `q-${y.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : "")
        ),
        hasShadow: x(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length > 0
        ),
        inputRef: d,
        emitValue: R,
        hasValue: _,
        floatingLabel: x(() => _.value === !0 || Dr(e.displayValue)),
        getControl: () =>
          P(y.value === !0 ? "textarea" : "input", {
            ref: d,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...M.value,
            ...b.value,
            ...(e.type !== "file" ? { value: W() } : p.value),
          }),
        getShadowControl: () =>
          P(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (y.value === !0 ? "" : " text-no-wrap"),
            },
            [P("span", { class: "invisible" }, W()), P("span", e.shadowText)]
          ),
      });
    const fe = jm(I);
    return (
      Object.assign(o, {
        focus: $,
        select: B,
        getNativeElement: () => d.value,
      }),
      fe
    );
  },
});
function Wa(e, t) {
  const n = ce(null),
    o = x(() =>
      e.disable === !0
        ? null
        : P("span", { ref: n, class: "no-outline", tabindex: -1 })
    );
  function r(i) {
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
  return { refocusTargetEl: o, refocusTarget: r };
}
var Qa = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
const Jm = P(
  "svg",
  {
    key: "svg",
    class: "q-radio__bg absolute non-selectable",
    viewBox: "0 0 24 24",
  },
  [
    P("path", {
      d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
    }),
    P("path", {
      class: "q-radio__check",
      d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
    }),
  ]
);
var Xm = $e({
  name: "QRadio",
  props: {
    ...Zt,
    ...Zn,
    ...vi,
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
    const { proxy: o } = we(),
      r = Jt(e, o.$q),
      i = Jn(e, Qa),
      s = ce(null),
      { refocusTargetEl: l, refocusTarget: a } = Wa(e, s),
      c = x(() => oe(e.modelValue) === oe(e.val)),
      u = x(
        () =>
          "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
          (e.disable === !0 ? " disabled" : "") +
          (r.value === !0 ? " q-radio--dark" : "") +
          (e.dense === !0 ? " q-radio--dense" : "") +
          (e.leftLabel === !0 ? " reverse" : "")
      ),
      d = x(() => {
        const _ =
          e.color !== void 0 && (e.keepColor === !0 || c.value === !0)
            ? ` text-${e.color}`
            : "";
        return `q-radio__inner relative-position q-radio__inner--${
          c.value === !0 ? "truthy" : "falsy"
        }${_}`;
      }),
      f = x(() => (c.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
      g = x(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
      v = x(() => {
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
      T = Ua(v);
    function k(_) {
      _ !== void 0 && (Ke(_), a(_)),
        e.disable !== !0 && c.value !== !0 && n("update:modelValue", e.val, _);
    }
    function S(_) {
      (_.keyCode === 13 || _.keyCode === 32) && Ke(_);
    }
    function p(_) {
      (_.keyCode === 13 || _.keyCode === 32) && k(_);
    }
    return (
      Object.assign(o, { set: k }),
      () => {
        const _ =
          f.value !== null
            ? [
                P(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-radio__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [P(vt, { class: "q-radio__icon", name: f.value })]
                ),
              ]
            : [Jm];
        e.disable !== !0 &&
          T(_, "unshift", " q-radio__native q-ma-none q-pa-none");
        const q = [
          P(
            "div",
            { class: d.value, style: i.value, "aria-hidden": "true" },
            _
          ),
        ];
        l.value !== null && q.push(l.value);
        const I = e.label !== void 0 ? Dt(t.default, [e.label]) : et(t.default);
        return (
          I !== void 0 &&
            q.push(P("div", { class: "q-radio__label q-anchor--skip" }, I)),
          P(
            "div",
            {
              ref: s,
              class: u.value,
              tabindex: g.value,
              role: "radio",
              "aria-label": e.label,
              "aria-checked": c.value === !0 ? "true" : "false",
              "aria-disabled": e.disable === !0 ? "true" : void 0,
              onClick: k,
              onKeydown: S,
              onKeyup: p,
            },
            q
          )
        );
      }
    );
  },
});
const Ya = {
    ...Zt,
    ...Zn,
    ...vi,
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
  Za = ["update:modelValue"];
function Ja(e, t) {
  const { props: n, slots: o, emit: r, proxy: i } = we(),
    { $q: s } = i,
    l = Jt(n, s),
    a = ce(null),
    { refocusTargetEl: c, refocusTarget: u } = Wa(n, a),
    d = Jn(n, Qa),
    f = x(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    g = x(() => {
      const E = oe(n.val);
      return f.value === !0 ? n.modelValue.findIndex((N) => oe(N) === E) : -1;
    }),
    v = x(() =>
      f.value === !0 ? g.value > -1 : oe(n.modelValue) === oe(n.trueValue)
    ),
    T = x(() =>
      f.value === !0 ? g.value === -1 : oe(n.modelValue) === oe(n.falseValue)
    ),
    k = x(() => v.value === !1 && T.value === !1),
    S = x(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    p = x(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? " disabled" : "") +
        (l.value === !0 ? ` q-${e}--dark` : "") +
        (n.dense === !0 ? ` q-${e}--dense` : "") +
        (n.leftLabel === !0 ? " reverse" : "")
    ),
    _ = x(() => {
      const E = v.value === !0 ? "truthy" : T.value === !0 ? "falsy" : "indet",
        N =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === "toggle" ? v.value === !0 : T.value !== !0))
            ? ` text-${n.color}`
            : "";
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${E}${N}`;
    }),
    q = x(() => {
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
    I = Ua(q),
    y = x(() => {
      const E = {
        tabindex: S.value,
        role: e === "toggle" ? "switch" : "checkbox",
        "aria-label": n.label,
        "aria-checked":
          k.value === !0 ? "mixed" : v.value === !0 ? "true" : "false",
      };
      return n.disable === !0 && (E["aria-disabled"] = "true"), E;
    });
  function w(E) {
    E !== void 0 && (Ke(E), u(E)),
      n.disable !== !0 && r("update:modelValue", b(), E);
  }
  function b() {
    if (f.value === !0) {
      if (v.value === !0) {
        const E = n.modelValue.slice();
        return E.splice(g.value, 1), E;
      }
      return n.modelValue.concat([n.val]);
    }
    if (v.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (T.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function M(E) {
    (E.keyCode === 13 || E.keyCode === 32) && Ke(E);
  }
  function $(E) {
    (E.keyCode === 13 || E.keyCode === 32) && w(E);
  }
  const B = t(v, k);
  return (
    Object.assign(i, { toggle: w }),
    () => {
      const E = B();
      n.disable !== !0 &&
        I(E, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
      const N = [
        P("div", { class: _.value, style: d.value, "aria-hidden": "true" }, E),
      ];
      c.value !== null && N.push(c.value);
      const R = n.label !== void 0 ? Dt(o.default, [n.label]) : et(o.default);
      return (
        R !== void 0 &&
          N.push(P("div", { class: `q-${e}__label q-anchor--skip` }, R)),
        P(
          "div",
          {
            ref: a,
            class: p.value,
            ...y.value,
            onClick: w,
            onKeydown: M,
            onKeyup: $,
          },
          N
        )
      );
    }
  );
}
const Gm = P("div", { key: "svg", class: "q-checkbox__bg absolute" }, [
  P(
    "svg",
    { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" },
    [
      P("path", {
        class: "q-checkbox__truthy",
        fill: "none",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59",
      }),
      P("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" }),
    ]
  ),
]);
var eg = $e({
    name: "QCheckbox",
    props: Ya,
    emits: Za,
    setup(e) {
      function t(n, o) {
        const r = x(
          () =>
            (n.value === !0
              ? e.checkedIcon
              : o.value === !0
              ? e.indeterminateIcon
              : e.uncheckedIcon) || null
        );
        return () =>
          r.value !== null
            ? [
                P(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [P(vt, { class: "q-checkbox__icon", name: r.value })]
                ),
              ]
            : [Gm];
      }
      return Ja("checkbox", t);
    },
  }),
  tg = $e({
    name: "QToggle",
    props: { ...Ya, icon: String, iconColor: String },
    emits: Za,
    setup(e) {
      function t(n, o) {
        const r = x(
            () =>
              (n.value === !0
                ? e.checkedIcon
                : o.value === !0
                ? e.indeterminateIcon
                : e.uncheckedIcon) || e.icon
          ),
          i = x(() => (n.value === !0 ? e.iconColor : null));
        return () => [
          P("div", { class: "q-toggle__track" }),
          P(
            "div",
            { class: "q-toggle__thumb absolute flex flex-center no-wrap" },
            r.value !== void 0
              ? [P(vt, { name: r.value, color: i.value })]
              : void 0
          ),
        ];
      }
      return Ja("toggle", t);
    },
  });
const Xa = { radio: Xm, checkbox: eg, toggle: tg },
  ng = Object.keys(Xa);
var og = $e({
    name: "QOptionGroup",
    props: {
      ...Zt,
      modelValue: { required: !0 },
      options: {
        type: Array,
        validator: (e) => e.every((t) => "value" in t && "label" in t),
      },
      name: String,
      type: { default: "radio", validator: (e) => ng.includes(e) },
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
          proxy: { $q: o },
        } = we(),
        r = Array.isArray(e.modelValue);
      e.type === "radio"
        ? r === !0 && console.error("q-option-group: model should not be array")
        : r === !1 &&
          console.error("q-option-group: model should be array in your case");
      const i = Jt(e, o),
        s = x(() => Xa[e.type]),
        l = x(
          () =>
            "q-option-group q-gutter-x-sm" +
            (e.inline === !0 ? " q-option-group--inline" : "")
        ),
        a = x(() => {
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
        P(
          "div",
          { class: l.value, ...a.value },
          e.options.map((u, d) => {
            const f =
              n["label-" + d] !== void 0
                ? () => n["label-" + d](u)
                : n.label !== void 0
                ? () => n.label(u)
                : void 0;
            return P("div", [
              P(
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
  rg = $e({
    name: "DialogPlugin",
    props: {
      ...Zt,
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
        { $q: o } = n,
        r = Jt(e, o),
        i = ce(null),
        s = ce(
          e.prompt !== void 0
            ? e.prompt.model
            : e.options !== void 0
            ? e.options.model
            : void 0
        ),
        l = x(
          () =>
            "q-dialog-plugin" +
            (r.value === !0 ? " q-dialog-plugin--dark q-dark" : "") +
            (e.progress !== !1 ? " q-dialog-plugin--progress" : "")
        ),
        a = x(() => e.color || (r.value === !0 ? "amber" : "primary")),
        c = x(() =>
          e.progress === !1
            ? null
            : ut(e.progress) === !0
            ? {
                component: e.progress.spinner || Wn,
                props: { color: e.progress.color || a.value },
              }
            : { component: Wn, props: { color: a.value } }
        ),
        u = x(() => e.prompt !== void 0 || e.options !== void 0),
        d = x(() => {
          if (u.value !== !0) return {};
          const {
            model: R,
            isValid: Z,
            items: re,
            ...O
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return O;
        }),
        f = x(() => (ut(e.ok) === !0 || e.ok === !0 ? o.lang.label.ok : e.ok)),
        g = x(() =>
          ut(e.cancel) === !0 || e.cancel === !0
            ? o.lang.label.cancel
            : e.cancel
        ),
        v = x(() =>
          e.prompt !== void 0
            ? e.prompt.isValid !== void 0 && e.prompt.isValid(s.value) !== !0
            : e.options !== void 0
            ? e.options.isValid !== void 0 && e.options.isValid(s.value) !== !0
            : !1
        ),
        T = x(() => ({
          color: a.value,
          label: f.value,
          ripple: !1,
          disable: v.value,
          ...(ut(e.ok) === !0 ? e.ok : { flat: !0 }),
          "data-autofocus": (e.focus === "ok" && u.value !== !0) || void 0,
          onClick: _,
        })),
        k = x(() => ({
          color: a.value,
          label: g.value,
          ripple: !1,
          ...(ut(e.cancel) === !0 ? e.cancel : { flat: !0 }),
          "data-autofocus": (e.focus === "cancel" && u.value !== !0) || void 0,
          onClick: q,
        }));
      ge(() => e.prompt && e.prompt.model, y),
        ge(() => e.options && e.options.model, y);
      function S() {
        i.value.show();
      }
      function p() {
        i.value.hide();
      }
      function _() {
        t("ok", oe(s.value)), p();
      }
      function q() {
        p();
      }
      function I() {
        t("hide");
      }
      function y(R) {
        s.value = R;
      }
      function w(R) {
        v.value !== !0 &&
          e.prompt.type !== "textarea" &&
          Kn(R, 13) === !0 &&
          _();
      }
      function b(R, Z) {
        return e.html === !0
          ? P(Sn, { class: R, innerHTML: Z })
          : P(Sn, { class: R }, () => Z);
      }
      function M() {
        return [
          P(Zm, {
            modelValue: s.value,
            ...d.value,
            color: a.value,
            dense: !0,
            autofocus: !0,
            dark: r.value,
            "onUpdate:modelValue": y,
            onKeyup: w,
          }),
        ];
      }
      function $() {
        return [
          P(og, {
            modelValue: s.value,
            ...d.value,
            color: a.value,
            options: e.options.items,
            dark: r.value,
            "onUpdate:modelValue": y,
          }),
        ];
      }
      function B() {
        const R = [];
        return (
          e.cancel && R.push(P(Vr, k.value)),
          e.ok && R.push(P(Vr, T.value)),
          P(
            Rm,
            {
              class: e.stackButtons === !0 ? "items-end" : "",
              vertical: e.stackButtons,
              align: "right",
            },
            () => R
          )
        );
      }
      function E() {
        const R = [];
        return (
          e.title && R.push(b("q-dialog__title", e.title)),
          e.progress !== !1 &&
            R.push(
              P(Sn, { class: "q-dialog__progress" }, () =>
                P(c.value.component, c.value.props)
              )
            ),
          e.message && R.push(b("q-dialog__message", e.message)),
          e.prompt !== void 0
            ? R.push(P(Sn, { class: "scroll q-dialog-plugin__form" }, M))
            : e.options !== void 0 &&
              R.push(
                P(Hs, { dark: r.value }),
                P(Sn, { class: "scroll q-dialog-plugin__form" }, $),
                P(Hs, { dark: r.value })
              ),
          (e.ok || e.cancel) && R.push(B()),
          R
        );
      }
      function N() {
        return [
          P(
            Sm,
            {
              class: [l.value, e.cardClass],
              style: e.cardStyle,
              dark: r.value,
            },
            E
          ),
        ];
      }
      return (
        Object.assign(n, { show: S, hide: p }),
        () => P(Em, { ref: i, onHide: I }, N)
      );
    },
  });
function Ga(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n]
      ? ((e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }), Ga(e[n], t[n]))
      : (e[n] = t[n]);
}
function ig(e, t, n) {
  return (o) => {
    let r, i;
    const s = t === !0 && o.component !== void 0;
    if (s === !0) {
      const { component: p, componentProps: _ } = o;
      (r = typeof p == "string" ? n.component(p) : p), (i = _ || {});
    } else {
      const { class: p, style: _, ...q } = o;
      (r = e),
        (i = q),
        p !== void 0 && (q.cardClass = p),
        _ !== void 0 && (q.cardStyle = _);
    }
    let l,
      a = !1;
    const c = ce(null),
      u = mi(),
      d = (p) => {
        if (c.value !== null && c.value[p] !== void 0) {
          c.value[p]();
          return;
        }
        const _ = l.$.subTree;
        if (_ && _.component) {
          if (_.component.proxy && _.component.proxy[p]) {
            _.component.proxy[p]();
            return;
          }
          if (
            _.component.subTree &&
            _.component.subTree.component &&
            _.component.subTree.component.proxy &&
            _.component.subTree.component.proxy[p]
          ) {
            _.component.subTree.component.proxy[p]();
            return;
          }
        }
        console.error("[Quasar] Incorrectly defined Dialog component");
      },
      f = [],
      g = [],
      v = {
        onOk(p) {
          return f.push(p), v;
        },
        onCancel(p) {
          return g.push(p), v;
        },
        onDismiss(p) {
          return f.push(p), g.push(p), v;
        },
        hide() {
          return d("hide"), v;
        },
        update(p) {
          if (l !== null) {
            if (s === !0) Object.assign(i, p);
            else {
              const { class: _, style: q, ...I } = p;
              _ !== void 0 && (I.cardClass = _),
                q !== void 0 && (I.cardStyle = q),
                Ga(i, I);
            }
            l.$forceUpdate();
          }
          return v;
        },
      },
      T = (p) => {
        (a = !0),
          f.forEach((_) => {
            _(p);
          });
      },
      k = () => {
        S.unmount(u),
          Fa(u),
          (S = null),
          (l = null),
          a !== !0 &&
            g.forEach((p) => {
              p();
            });
      };
    let S = ma(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          P(r, {
            ...i,
            ref: c,
            onOk: T,
            onHide: k,
            onVnodeMounted(...p) {
              typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...p),
                Me(() => d("show"));
            },
          }),
      },
      n
    );
    return (l = S.mount(u)), v;
  };
}
var sg = {
    install({ $q: e, parentApp: t }) {
      (e.dialog = ig(rg, !0, t)),
        this.__installed !== !0 && (this.create = e.dialog);
    },
  },
  lg = { config: {}, plugins: { Notify: Xh, Dialog: sg } };
const ag = "/";
async function ug({ app: e, router: t, store: n }, o) {
  let r = !1;
  const i = (a) => {
      try {
        return t.resolve(a).href;
      } catch {}
      return Object(a) === a ? null : a;
    },
    s = (a) => {
      if (((r = !0), typeof a == "string" && /^https?:\/\//.test(a))) {
        window.location.href = a;
        return;
      }
      const c = i(a);
      c !== null && ((window.location.href = c), window.location.reload());
    },
    l = window.location.href.replace(window.location.origin, "");
  for (let a = 0; r === !1 && a < o.length; a++)
    try {
      await o[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: s,
        urlPath: l,
        publicPath: ag,
      });
    } catch (c) {
      if (c && c.url) {
        s(c.url);
        return;
      }
      console.error("[Quasar] boot error:", c);
      return;
    }
  r !== !0 && (e.use(t), e.mount("#q-app"));
}
ph(sa, lg).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          "allSettled",
          (o) =>
            o.map((r) => {
              if (r.status === "rejected") {
                console.error("[Quasar] boot error:", r.reason);
                return;
              }
              return r.value.default;
            }),
        ]
      : ["all", (o) => o.map((r) => r.default)];
  return Promise[t]([ze(() => import("./axios.f34b2dab.js"), [])]).then((o) => {
    const r = n(o).filter((i) => typeof i == "function");
    ug(e, r);
  });
});
export {
  Je as $,
  Bg as A,
  Mt as B,
  No as C,
  Dt as D,
  Me as E,
  Bo as F,
  Jl as G,
  fg as H,
  dg as I,
  td as J,
  Pg as K,
  Sn as L,
  Hs as M,
  Zm as N,
  Kt as O,
  Sm as P,
  Vr as Q,
  Rg as R,
  jo as S,
  Ll as T,
  Ba as U,
  Ke as V,
  pi as W,
  Zf as X,
  gg as Y,
  mg as Z,
  nd as _,
  Be as a,
  Ar as a$,
  cg as a0,
  Bh as a1,
  Fh as a2,
  Sh as a3,
  Dc as a4,
  qg as a5,
  Fl as a6,
  Oh as a7,
  xg as a8,
  Kn as a9,
  Mg as aA,
  rm as aB,
  cm as aC,
  Cm as aD,
  $f as aE,
  Ds as aF,
  Ns as aG,
  mn as aH,
  am as aI,
  xm as aJ,
  qh as aK,
  vi as aL,
  zm as aM,
  Bl as aN,
  si as aO,
  Dr as aP,
  ko as aQ,
  Em as aR,
  Ym as aS,
  Ia as aT,
  Or as aU,
  Eg as aV,
  kg as aW,
  ut as aX,
  vg as aY,
  eg as aZ,
  Yn as a_,
  fa as aa,
  vt as ab,
  ir as ac,
  Lm as ad,
  tm as ae,
  em as af,
  Zt as ag,
  Jt as ah,
  aa as ai,
  fc as aj,
  Im as ak,
  Bm as al,
  jm as am,
  Fm as an,
  Zn as ao,
  Jn as ap,
  Ag as aq,
  bh as ar,
  Rt as as,
  If as at,
  Bf as au,
  vo as av,
  ke as aw,
  nm as ax,
  im as ay,
  om as az,
  Sg as b,
  Nu as b0,
  oe as b1,
  bl as b2,
  vh as b3,
  bg as b4,
  yg as b5,
  Ua as b6,
  Fg as b7,
  Og as b8,
  hg as b9,
  $g as ba,
  Lg as bb,
  pg as bc,
  Tg as bd,
  Rm as be,
  Yl as c,
  $e as d,
  Cg as e,
  x as f,
  et as g,
  P as h,
  je as i,
  we as j,
  wg as k,
  _g as l,
  ge as m,
  Yt as n,
  Wl as o,
  fo as p,
  Qe as q,
  pc as r,
  Hn as s,
  Ig as t,
  Ie as u,
  dm as v,
  tc as w,
  hm as x,
  ce as y,
  Ot as z,
};
