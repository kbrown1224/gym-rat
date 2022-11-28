import {
  b as q,
  x as v,
  R as O,
  S as D,
  m as E,
  h as k,
  f as A,
  g as U,
  T,
  U as F,
  D as L,
  V as M,
  p as $,
  W as j,
  _ as K,
  d as G,
  c as H,
  w as p,
  J,
  K as W,
  o as Q,
  F as d,
  X,
  Y,
  Z,
  a as l,
  L as I,
  N as g,
  M as z,
  Q as B,
  P as ee,
  $ as N,
  G as te,
  H as oe,
} from "./index.b5dc3681.js";
import { Q as ae } from "./QPage.3f5a5cd4.js";
var se = q({
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
    let a = 0;
    const s = [];
    function y(e) {
      const t = typeof e == "boolean" ? e : n.noErrorFocus !== !0,
        b = ++a,
        S = (o, r) => {
          c("validation-" + (o === !0 ? "success" : "error"), r);
        },
        w = (o) => {
          const r = o.validate();
          return typeof r.then == "function"
            ? r.then(
                (i) => ({ valid: i, comp: o }),
                (i) => ({ valid: !1, comp: o, err: i })
              )
            : Promise.resolve({ valid: r, comp: o });
        };
      return (
        n.greedy === !0
          ? Promise.all(s.map(w)).then((o) => o.filter((r) => r.valid !== !0))
          : s
              .reduce(
                (o, r) =>
                  o.then(() =>
                    w(r).then((i) => {
                      if (i.valid === !1) return Promise.reject(i);
                    })
                  ),
                Promise.resolve()
              )
              .catch((o) => [o])
      ).then((o) => {
        if (o === void 0 || o.length === 0) return b === a && S(!0), !0;
        if (b === a) {
          const { comp: r, err: i } = o[0];
          if ((i !== void 0 && console.error(i), S(!1, r), t === !0)) {
            const R = o.find(
              ({ comp: C }) => typeof C.focus == "function" && T(C.$) === !1
            );
            R !== void 0 && R.comp.focus();
          }
        }
        return !1;
      });
    }
    function _() {
      a++,
        s.forEach((e) => {
          typeof e.resetValidation == "function" && e.resetValidation();
        });
    }
    function h(e) {
      e !== void 0 && F(e);
      const t = a + 1;
      y().then((b) => {
        t === a &&
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
        L(() => {
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
    $(j, {
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
      D(() => {
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
        k(
          "form",
          { class: "q-form", ref: u, onSubmit: h, onReset: x },
          A(V.default)
        )
    );
  },
});
const ne = (n) => (te("data-v-3181710e"), (n = n()), oe(), n),
  le = { class: "row q-mt-xl items-stretch" },
  re = { class: "col-4 offset-1" },
  ue = { class: "page-break" },
  ie = { class: "text-h6 text-bold" },
  de = { class: "col-4 offset-2" },
  ce = ne(() => d("div", { class: "text-h3" }, "Register", -1)),
  me = {
    __name: "RegisterPage",
    setup(n) {
      const V = J(),
        c = v(""),
        m = v(""),
        u = v(""),
        a = v(""),
        s = v(""),
        y = W(),
        _ = [
          { title: "Progression", text: "TODO" },
          { title: "Analysis", text: "TODO" },
          { title: "Its Cool", text: "TODO" },
        ];
      function h() {
        (c.value = ""),
          (m.value = ""),
          (u.value = ""),
          (a.value = ""),
          (s.value = "");
      }
      const x = G(() => a.value != s.value);
      function f() {
        x.value
          ? (V.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Passwords do not match",
            }),
            (a.value = ""),
            (s.value = ""))
          : (c.value, m.value, u.value, a.value, y.push({ name: "landing" }));
      }
      return (P, e) => (
        Q(),
        H(
          ae,
          { class: "q-py-xl gradient-bg" },
          {
            default: p(() => [
              d("div", le, [
                d("div", re, [
                  d("div", ue, [
                    (Q(),
                    X(
                      Z,
                      null,
                      Y(_, (t) =>
                        d("div", { key: t.title }, [
                          d("div", ie, N(t.title), 1),
                          d("p", null, N(t.text), 1),
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
                        l(I, null, { default: p(() => [ce]), _: 1 }),
                        l(I, null, {
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
                                      modelValue: a.value,
                                      "onUpdate:modelValue":
                                        e[3] || (e[3] = (t) => (a.value = t)),
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
                                  l(z, { class: "q-my-md" }),
                                  d("div", null, [
                                    l(B, {
                                      label: "Submit",
                                      type: "submit",
                                      color: "primary",
                                    }),
                                    l(B, {
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
var ge = K(me, [["__scopeId", "data-v-3181710e"]]);
export { ge as default };
