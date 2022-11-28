import {
  h as t,
  q as o,
  b4 as p,
  b5 as c,
  b6 as l,
  b7 as d,
  b8 as u,
  ab as m,
} from "./index.3262b3e1.js";
const f = [
  t("rect", { x: "0", y: "0", width: " 100", height: "100", fill: "none" }),
  t("g", { transform: "translate(25 25)" }, [
    t(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.9",
      },
      [
        t("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
  t("g", { transform: "translate(75 25)" }, [
    t(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.8",
      },
      [
        t("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0.1s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
  t("g", { transform: "translate(25 75)" }, [
    t(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.7",
      },
      [
        t("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0.3s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
  t("g", { transform: "translate(75 75)" }, [
    t(
      "rect",
      {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.6",
      },
      [
        t("animateTransform", {
          attributeName: "transform",
          type: "scale",
          from: "1.5",
          to: "1",
          repeatCount: "indefinite",
          begin: "0.2s",
          dur: "1s",
          calcMode: "spline",
          keySplines: "0.2 0.8 0.2 0.8",
          keyTimes: "0;1",
        }),
      ]
    ),
  ]),
];
var y = o({
  name: "QSpinnerCube",
  props: p,
  setup(e) {
    const { cSize: r, classes: n } = c(e);
    return () =>
      t(
        "svg",
        {
          class: n.value,
          width: r.value,
          height: r.value,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
        },
        f
      );
  },
});
function i(e) {
  if (e === !1) return 0;
  if (e === !0 || e === void 0) return 1;
  const r = parseInt(e, 10);
  return isNaN(r) ? 0 : r;
}
var g = l({
  name: "close-popup",
  beforeMount(e, { value: r }) {
    const n = {
      depth: i(r),
      handler(s) {
        n.depth !== 0 &&
          setTimeout(() => {
            const a = d(e);
            a !== void 0 && u(a, s, n.depth);
          });
      },
      handlerKey(s) {
        m(s, 13) === !0 && n.handler(s);
      },
    };
    (e.__qclosepopup = n),
      e.addEventListener("click", n.handler),
      e.addEventListener("keyup", n.handlerKey);
  },
  updated(e, { value: r, oldValue: n }) {
    r !== n && (e.__qclosepopup.depth = i(r));
  },
  beforeUnmount(e) {
    const r = e.__qclosepopup;
    e.removeEventListener("click", r.handler),
      e.removeEventListener("keyup", r.handlerKey),
      delete e.__qclosepopup;
  },
});
export { g as C, y as Q };
