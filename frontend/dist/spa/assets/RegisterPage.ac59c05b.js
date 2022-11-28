import {
  q as N,
  r as v,
  V as O,
  W as k,
  b as E,
  h as A,
  t as D,
  g as U,
  X as T,
  Y as F,
  n as j,
  Z as M,
  v as $,
  $ as K,
  _ as L,
  c as J,
  j as W,
  k as p,
  M as X,
  N as Y,
  m as I,
  I as d,
  a0 as Z,
  a1 as z,
  a2 as G,
  p as l,
  O as Q,
  R as g,
  P as H,
  Q as q,
  U as ee,
  a3 as B,
  J as te,
  K as ae,
} from "./index.195637e2.js";
import { Q as oe } from "./QPage.ae2997fd.js";
var se = N({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function,
  },
  emits: ["reset", "validation-success", "validation-error"],
  setup(n, { slots: V, emit: c }) {
    const m = U(),
      u = v(null);
    let o = 0;
    const s = [];
    function y(e) {
      const t = typeof e == "boolean" ? e : n.noErrorFocus !== !0,
        b = ++o,
        S = (a, r) => {
          c("validation-" + (a === !0 ? "success" : "error"), r);
        },
        w = (a) => {
          const r = a.validate();
          return typeof r.then == "function"
            ? r.then(
                (i) => ({ valid: i, comp: a }),
                (i) => ({ valid: !1, comp: a, err: i })
              )
            : Promise.resolve({ valid: r, comp: a });
        };
      return (
        n.greedy === !0
          ? Promise.all(s.map(w)).then((a) => a.filter((r) => r.valid !== !0))
          : s
              .reduce(
                (a, r) =>
                  a.then(() =>
                    w(r).then((i) => {
                      if (i.valid === !1) return Promise.reject(i);
                    })
                  ),
                Promise.resolve()
              )
              .catch((a) => [a])
      ).then((a) => {
        if (a === void 0 || a.length === 0) return b === o && S(!0), !0;
        if (b === o) {
          const { comp: r, err: i } = a[0];
          if ((i !== void 0 && console.error(i), S(!1, r), t === !0)) {
            const R = a.find(
              ({ comp: C }) => typeof C.focus == "function" && T(C.$) === !1
            );
            R !== void 0 && R.comp.focus();
          }
        }
        return !1;
      });
    }
    function _() {
      o++,
        s.forEach((e) => {
          typeof e.resetValidation == "function" && e.resetValidation();
        });
    }
    function h(e) {
      e !== void 0 && F(e);
      const t = o + 1;
      y().then((b) => {
        t === o &&
          b === !0 &&
          (n.onSubmit !== void 0
            ? c("submit", e)
            : e !== void 0 &&
              e.target !== void 0 &&
              typeof e.target.submit == "function" &&
              e.target.submit());
      });
    }
    function x(e) {
      e !== void 0 && F(e),
        c("reset"),
        j(() => {
          _(), n.autofocus === !0 && n.noResetFocus !== !0 && f();
        });
    }
    function f() {
      M(() => {
        if (u.value === null) return;
        const e =
          u.value.querySelector("[autofocus], [data-autofocus]") ||
          Array.prototype.find.call(
            u.value.querySelectorAll("[tabindex]"),
            (t) => t.tabIndex > -1
          );
        e != null && e.focus({ preventScroll: !0 });
      });
    }
    $(K, {
      bindComponent(e) {
        s.push(e);
      },
      unbindComponent(e) {
        const t = s.indexOf(e);
        t > -1 && s.splice(t, 1);
      },
    });
    let P = !1;
    return (
      O(() => {
        P = !0;
      }),
      k(() => {
        P === !0 && n.autofocus === !0 && f();
      }),
      E(() => {
        n.autofocus === !0 && f();
      }),
      Object.assign(m.proxy, {
        validate: y,
        resetValidation: _,
        submit: h,
        reset: x,
        focus: f,
        getValidationComponents: () => s,
      }),
      () =>
        A(
          "form",
          { class: "q-form", ref: u, onSubmit: h, onReset: x },
          D(V.default)
        )
    );
  },
});
const ne = (n) => (te("data-v-3181710e"), (n = n()), ae(), n),
  le = { class: "row q-mt-xl items-stretch" },
  re = { class: "col-4 offset-1" },
  ue = { class: "page-break" },
  ie = { class: "text-h6 text-bold" },
  de = { class: "col-4 offset-2" },
  ce = ne(() => d("div", { class: "text-h3" }, "Register", -1)),
  me = {
    __name: "RegisterPage",
    setup(n) {
      const V = X(),
        c = v(""),
        m = v(""),
        u = v(""),
        o = v(""),
        s = v(""),
        y = Y(),
        _ = [
          { title: "Progression", text: "TODO" },
          { title: "Analysis", text: "TODO" },
          { title: "Its Cool", text: "TODO" },
        ];
      function h() {
        (c.value = ""),
          (m.value = ""),
          (u.value = ""),
          (o.value = ""),
          (s.value = "");
      }
      const x = J(() => o.value != s.value);
      function f() {
        x.value
          ? (V.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Passwords do not match",
            }),
            (o.value = ""),
            (s.value = ""))
          : (c.value, m.value, u.value, o.value, y.push({ name: "landing" }));
      }
      return (P, e) => (
        I(),
        W(
          oe,
          { class: "q-py-xl gradient-bg" },
          {
            default: p(() => [
              d("div", le, [
                d("div", re, [
                  d("div", ue, [
                    (I(),
                    Z(
                      G,
                      null,
                      z(_, (t) =>
                        d("div", { key: t.title }, [
                          d("div", ie, B(t.title), 1),
                          d("p", null, B(t.text), 1),
                        ])
                      ),
                      64
                    )),
                  ]),
                ]),
                d("div", de, [
                  l(
                    ee,
                    { class: "glassy" },
                    {
                      default: p(() => [
                        l(Q, null, { default: p(() => [ce]), _: 1 }),
                        l(Q, null, {
                          default: p(() => [
                            l(
                              se,
                              { onSubmit: f, onReset: h },
                              {
                                default: p(() => [
                                  l(
                                    g,
                                    {
                                      modelValue: u.value,
                                      "onUpdate:modelValue":
                                        e[0] || (e[0] = (t) => (u.value = t)),
                                      type: "email",
                                      hint: "Email",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  l(
                                    g,
                                    {
                                      modelValue: c.value,
                                      "onUpdate:modelValue":
                                        e[1] || (e[1] = (t) => (c.value = t)),
                                      hint: "First Name",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  l(
                                    g,
                                    {
                                      modelValue: m.value,
                                      "onUpdate:modelValue":
                                        e[2] || (e[2] = (t) => (m.value = t)),
                                      hint: "Last Name",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  l(
                                    g,
                                    {
                                      modelValue: o.value,
                                      "onUpdate:modelValue":
                                        e[3] || (e[3] = (t) => (o.value = t)),
                                      type: "password",
                                      hint: "Password",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  l(
                                    g,
                                    {
                                      modelValue: s.value,
                                      "onUpdate:modelValue":
                                        e[4] || (e[4] = (t) => (s.value = t)),
                                      type: "password",
                                      hint: "Repeat Password",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  l(H, { class: "q-my-md" }),
                                  d("div", null, [
                                    l(q, {
                                      label: "Submit",
                                      type: "submit",
                                      color: "primary",
                                    }),
                                    l(q, {
                                      label: "Reset",
                                      type: "reset",
                                      color: "primary",
                                      flat: "",
                                      class: "q-ml-sm",
                                    }),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
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
        )
      );
    },
  };
var ge = L(me, [["__scopeId", "data-v-3181710e"]]);
export { ge as default };
