import {
  d as q,
  y as v,
  S as E,
  T as O,
  n as k,
  h as A,
  g as D,
  j as U,
  U as T,
  V as F,
  E as j,
  W as L,
  p as M,
  X as $,
  _ as K,
  f as G,
  c as H,
  w as p,
  J,
  K as W,
  o as I,
  G as d,
  Y as X,
  Z as Y,
  $ as Z,
  a as l,
  L as Q,
  N as g,
  M as z,
  Q as B,
  P as ee,
  a0 as N,
  H as te,
  I as oe,
} from "./index.099d1cbc.js";
import { Q as ae } from "./QPage.a405a503.js";
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
  setup(n, { slots: b, emit: c }) {
    const f = U(),
      u = v(null);
    let a = 0;
    const s = [];
    function y(e) {
      const t = typeof e == "boolean" ? e : n.noErrorFocus !== !0,
        V = ++a,
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
        if (o === void 0 || o.length === 0) return V === a && S(!0), !0;
        if (V === a) {
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
      y().then((V) => {
        t === a &&
          V === !0 &&
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
          _(), n.autofocus === !0 && n.noResetFocus !== !0 && m();
        });
    }
    function m() {
      L(() => {
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
    M($, {
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
      E(() => {
        P = !0;
      }),
      O(() => {
        P === !0 && n.autofocus === !0 && m();
      }),
      k(() => {
        n.autofocus === !0 && m();
      }),
      Object.assign(f.proxy, {
        validate: y,
        resetValidation: _,
        submit: h,
        reset: x,
        focus: m,
        getValidationComponents: () => s,
      }),
      () =>
        A(
          "form",
          { class: "q-form", ref: u, onSubmit: h, onReset: x },
          D(b.default)
        )
    );
  },
});
const ne = (n) => (te("data-v-d54edf20"), (n = n()), oe(), n),
  le = { class: "row q-mt-xl items-stretch" },
  re = { class: "col-4 offset-1" },
  ue = { class: "page-break" },
  ie = { class: "text-h6 text-bold" },
  de = { class: "col-4 offset-2" },
  ce = ne(() => d("div", { class: "text-h3" }, "Register", -1)),
  fe = {
    __name: "RegisterPage",
    setup(n) {
      const b = J(),
        c = v(""),
        f = v(""),
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
          (f.value = ""),
          (u.value = ""),
          (a.value = ""),
          (s.value = "");
      }
      const x = G(() => a.value != s.value);
      function m() {
        x.value
          ? (b.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Passwords do not match",
            }),
            (a.value = ""),
            (s.value = ""))
          : (c.value, f.value, u.value, a.value, y.push({ name: "landing" }));
      }
      return (P, e) => (
        I(),
        H(
          ae,
          { class: "q-py-xl gradient-bg" },
          {
            default: p(() => [
              d("div", le, [
                d("div", re, [
                  d("div", ue, [
                    (I(),
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
                        l(Q, null, { default: p(() => [ce]), _: 1 }),
                        l(Q, null, {
                          default: p(() => [
                            l(
                              se,
                              { onSubmit: m, onReset: h },
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
                                      modelValue: f.value,
                                      "onUpdate:modelValue":
                                        e[2] || (e[2] = (t) => (f.value = t)),
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
var ge = K(fe, [["__scopeId", "data-v-d54edf20"]]);
export { ge as default };
