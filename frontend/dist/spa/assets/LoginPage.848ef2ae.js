import {
  _ as h,
  y as c,
  f as w,
  n as y,
  c as b,
  w as a,
  J as Q,
  K as x,
  o as L,
  G as r,
  a as e,
  L as u,
  M as p,
  N as _,
  Q as S,
  O as V,
  P as I,
  H as C,
  I as P,
} from "./index.099d1cbc.js";
import { Q as q } from "./QPage.a405a503.js";
import { u as B } from "./auth-store.52914b43.js";
const k = (s) => (C("data-v-3b29af85"), (s = s()), P(), s),
  N = { class: "row" },
  M = { class: "col-4 offset-4" },
  U = k(() => r("div", { class: "text-h3" }, "Login", -1)),
  A = {
    __name: "LoginPage",
    setup(s) {
      const m = Q(),
        o = c(""),
        l = c(""),
        d = x(),
        i = B(),
        g = w(() => o.value === "" || l.value === "");
      function f() {
        i.login(o.value, l.value)
          ? d.push({ name: "home" })
          : m.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Something went wrong",
            });
      }
      return (
        y(() => {
          i.isLoggedIn && d.push({ name: "home" });
        }),
        (v, t) => (
          L(),
          b(
            q,
            { class: "q-pa-xl gradient-bg" },
            {
              default: a(() => [
                r("div", N, [
                  r("div", M, [
                    e(
                      I,
                      { class: "glassy" },
                      {
                        default: a(() => [
                          e(u, null, { default: a(() => [U]), _: 1 }),
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
var J = h(A, [["__scopeId", "data-v-3b29af85"]]);
export { J as default };
