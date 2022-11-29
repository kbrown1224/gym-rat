import {
  r as d,
  L as f,
  c as v,
  b as h,
  j as w,
  k as a,
  M as b,
  N as y,
  m as Q,
  I as u,
  p as e,
  O as n,
  P as c,
  R as m,
  Q as V,
  S as x,
  U as L,
} from "./index.929cc5a7.js";
import { Q as C } from "./QPage.2fadebee.js";
const S = { class: "row" },
  q = { class: "col-4 offset-4" },
  P = u("div", { class: "text-h3" }, "Login", -1),
  U = {
    __name: "LoginPage",
    setup(k) {
      const g = b(),
        l = d(""),
        s = d(""),
        r = y(),
        i = f(),
        p = v(() => l.value === "" || s.value === "");
      function _() {
        i.login(l.value, s.value)
          .then(() => {
            r.push({ name: "home" });
          })
          .catch(() => {
            g.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Something went wrong",
            });
          });
      }
      return (
        h(() => {
          i.isLoggedIn && r.push({ name: "home" });
        }),
        (B, o) => (
          Q(),
          w(
            C,
            { class: "q-pa-xl gradient-bg" },
            {
              default: a(() => [
                u("div", S, [
                  u("div", q, [
                    e(
                      L,
                      { class: "glassy glowing-border" },
                      {
                        default: a(() => [
                          e(n, null, { default: a(() => [P]), _: 1 }),
                          e(c, { class: "q-my-lg" }),
                          e(n, null, {
                            default: a(() => [
                              e(
                                m,
                                {
                                  modelValue: l.value,
                                  "onUpdate:modelValue":
                                    o[0] || (o[0] = (t) => (l.value = t)),
                                  label: "Email",
                                  type: "email",
                                },
                                null,
                                8,
                                ["modelValue"]
                              ),
                              e(
                                m,
                                {
                                  modelValue: s.value,
                                  "onUpdate:modelValue":
                                    o[1] || (o[1] = (t) => (s.value = t)),
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
                          e(c, { class: "q-my-lg" }),
                          e(n, null, {
                            default: a(() => [
                              e(
                                V,
                                {
                                  class: "full-width q-mb-sm",
                                  color: "positive",
                                  label: "Login",
                                  onClick: _,
                                  disable: x(p),
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
export { U as default };
