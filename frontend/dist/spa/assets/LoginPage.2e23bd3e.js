import {
  _ as v,
  x as c,
  I as h,
  d as w,
  m as b,
  c as x,
  w as a,
  J as y,
  K as Q,
  o as L,
  F as d,
  a as e,
  L as u,
  M as p,
  N as _,
  Q as S,
  O as V,
  P as I,
  G as C,
  H as P,
} from "./index.b5dc3681.js";
import { Q as q } from "./QPage.3f5a5cd4.js";
const B = (s) => (C("data-v-b9fef00c"), (s = s()), P(), s),
  k = { class: "row" },
  N = { class: "col-4 offset-4" },
  M = B(() => d("div", { class: "text-h3" }, "Login", -1)),
  U = {
    __name: "LoginPage",
    setup(s) {
      const m = y(),
        o = c(""),
        l = c(""),
        r = Q(),
        i = h(),
        g = w(() => o.value === "" || l.value === "");
      function f() {
        i.login(o.value, l.value)
          .then(() => {
            r.push({ name: "home" });
          })
          .catch(() => {
            m.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Something went wrong",
            });
          });
      }
      return (
        b(() => {
          i.isLoggedIn && r.push({ name: "home" });
        }),
        (A, t) => (
          L(),
          x(
            q,
            { class: "q-pa-xl gradient-bg" },
            {
              default: a(() => [
                d("div", k, [
                  d("div", N, [
                    e(
                      I,
                      { class: "glassy" },
                      {
                        default: a(() => [
                          e(u, null, { default: a(() => [M]), _: 1 }),
                          e(p, { class: "q-my-lg" }),
                          e(u, null, {
                            default: a(() => [
                              e(
                                _,
                                {
                                  modelValue: o.value,
                                  "onUpdate:modelValue":
                                    t[0] || (t[0] = (n) => (o.value = n)),
                                  label: "Email",
                                  type: "email",
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              e(
                                _,
                                {
                                  modelValue: l.value,
                                  "onUpdate:modelValue":
                                    t[1] || (t[1] = (n) => (l.value = n)),
                                  label: "Password",
                                  type: "password",
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                            ]),
                            _: 1,
                          }),
                          e(p, { class: "q-my-lg" }),
                          e(u, null, {
                            default: a(() => [
                              e(
                                S,
                                {
                                  class: "full-width q-mb-sm",
                                  color: "positive",
                                  label: "Login",
                                  onClick: f,
                                  disable: V(g),
                                },
                                null,
                                8,
                                ["disable"]
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
        )
      );
    },
  };
var G = v(U, [["__scopeId", "data-v-b9fef00c"]]);
export { G as default };
