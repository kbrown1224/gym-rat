import {
  r as ir,
  b as Ka,
  a$ as Xa,
  c as Za,
  m as ea,
  j as ta,
  S as or,
  b0 as Qa,
  k as Ke,
  I as At,
  p as _e,
  O as nr,
  P as Ua,
  U as Ya,
} from "./index.3262b3e1.js";
import { Q as _o } from "./QPage.67806e81.js";
import {
  C as Ja,
  p as en,
  a as tn,
  b as rn,
  L as an,
  c as nn,
  d as on,
  P as ln,
  e as wo,
  B as ko,
  f as So,
} from "./index.301b40db.js";
var sn =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function lr(we, te = document.body) {
  if (typeof we != "string")
    throw new TypeError("Expected a string as propName");
  if (!(te instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(te).getPropertyValue(`--q-${we}`).trim() || null;
}
var Mo = { exports: {} },
  un = { exports: {} };
/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */ (function (we, te) {
  (function (P, he) {
    we.exports = he(
      (function () {
        try {
          return require("moment");
        } catch {}
      })()
    );
  })(sn, function (P) {
    P = P && P.hasOwnProperty("default") ? P.default : P;
    function he(e, t) {
      return (t = { exports: {} }), e(t, t.exports), t.exports;
    }
    function ke(e) {
      return (e && e.default) || e;
    }
    var re = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      },
      N = he(function (e) {
        var t = {};
        for (var r in re) re.hasOwnProperty(r) && (t[re[r]] = r);
        var a = (e.exports = {
          rgb: { channels: 3, labels: "rgb" },
          hsl: { channels: 3, labels: "hsl" },
          hsv: { channels: 3, labels: "hsv" },
          hwb: { channels: 3, labels: "hwb" },
          cmyk: { channels: 4, labels: "cmyk" },
          xyz: { channels: 3, labels: "xyz" },
          lab: { channels: 3, labels: "lab" },
          lch: { channels: 3, labels: "lch" },
          hex: { channels: 1, labels: ["hex"] },
          keyword: { channels: 1, labels: ["keyword"] },
          ansi16: { channels: 1, labels: ["ansi16"] },
          ansi256: { channels: 1, labels: ["ansi256"] },
          hcg: { channels: 3, labels: ["h", "c", "g"] },
          apple: { channels: 3, labels: ["r16", "g16", "b16"] },
          gray: { channels: 1, labels: ["gray"] },
        });
        for (var n in a)
          if (a.hasOwnProperty(n)) {
            if (!("channels" in a[n]))
              throw new Error("missing channels property: " + n);
            if (!("labels" in a[n]))
              throw new Error("missing channel labels property: " + n);
            if (a[n].labels.length !== a[n].channels)
              throw new Error("channel and label counts mismatch: " + n);
            var i = a[n].channels,
              o = a[n].labels;
            delete a[n].channels,
              delete a[n].labels,
              Object.defineProperty(a[n], "channels", { value: i }),
              Object.defineProperty(a[n], "labels", { value: o });
          }
        (a.rgb.hsl = function (l) {
          var u = l[0] / 255,
            d = l[1] / 255,
            f = l[2] / 255,
            c = Math.min(u, d, f),
            g = Math.max(u, d, f),
            p = g - c,
            m,
            y,
            k;
          return (
            g === c
              ? (m = 0)
              : u === g
              ? (m = (d - f) / p)
              : d === g
              ? (m = 2 + (f - u) / p)
              : f === g && (m = 4 + (u - d) / p),
            (m = Math.min(m * 60, 360)),
            m < 0 && (m += 360),
            (k = (c + g) / 2),
            g === c
              ? (y = 0)
              : k <= 0.5
              ? (y = p / (g + c))
              : (y = p / (2 - g - c)),
            [m, y * 100, k * 100]
          );
        }),
          (a.rgb.hsv = function (l) {
            var u,
              d,
              f,
              c,
              g,
              p = l[0] / 255,
              m = l[1] / 255,
              y = l[2] / 255,
              k = Math.max(p, m, y),
              C = k - Math.min(p, m, y),
              O = function (B) {
                return (k - B) / 6 / C + 1 / 2;
              };
            return (
              C === 0
                ? (c = g = 0)
                : ((g = C / k),
                  (u = O(p)),
                  (d = O(m)),
                  (f = O(y)),
                  p === k
                    ? (c = f - d)
                    : m === k
                    ? (c = 1 / 3 + u - f)
                    : y === k && (c = 2 / 3 + d - u),
                  c < 0 ? (c += 1) : c > 1 && (c -= 1)),
              [c * 360, g * 100, k * 100]
            );
          }),
          (a.rgb.hwb = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2],
              c = a.rgb.hsl(l)[0],
              g = (1 / 255) * Math.min(u, Math.min(d, f));
            return (
              (f = 1 - (1 / 255) * Math.max(u, Math.max(d, f))),
              [c, g * 100, f * 100]
            );
          }),
          (a.rgb.cmyk = function (l) {
            var u = l[0] / 255,
              d = l[1] / 255,
              f = l[2] / 255,
              c,
              g,
              p,
              m;
            return (
              (m = Math.min(1 - u, 1 - d, 1 - f)),
              (c = (1 - u - m) / (1 - m) || 0),
              (g = (1 - d - m) / (1 - m) || 0),
              (p = (1 - f - m) / (1 - m) || 0),
              [c * 100, g * 100, p * 100, m * 100]
            );
          });
        function s(l, u) {
          return (
            Math.pow(l[0] - u[0], 2) +
            Math.pow(l[1] - u[1], 2) +
            Math.pow(l[2] - u[2], 2)
          );
        }
        (a.rgb.keyword = function (l) {
          var u = t[l];
          if (u) return u;
          var d = 1 / 0,
            f;
          for (var c in re)
            if (re.hasOwnProperty(c)) {
              var g = re[c],
                p = s(l, g);
              p < d && ((d = p), (f = c));
            }
          return f;
        }),
          (a.keyword.rgb = function (l) {
            return re[l];
          }),
          (a.rgb.xyz = function (l) {
            var u = l[0] / 255,
              d = l[1] / 255,
              f = l[2] / 255;
            (u = u > 0.04045 ? Math.pow((u + 0.055) / 1.055, 2.4) : u / 12.92),
              (d =
                d > 0.04045 ? Math.pow((d + 0.055) / 1.055, 2.4) : d / 12.92),
              (f =
                f > 0.04045 ? Math.pow((f + 0.055) / 1.055, 2.4) : f / 12.92);
            var c = u * 0.4124 + d * 0.3576 + f * 0.1805,
              g = u * 0.2126 + d * 0.7152 + f * 0.0722,
              p = u * 0.0193 + d * 0.1192 + f * 0.9505;
            return [c * 100, g * 100, p * 100];
          }),
          (a.rgb.lab = function (l) {
            var u = a.rgb.xyz(l),
              d = u[0],
              f = u[1],
              c = u[2],
              g,
              p,
              m;
            return (
              (d /= 95.047),
              (f /= 100),
              (c /= 108.883),
              (d = d > 0.008856 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116),
              (f = f > 0.008856 ? Math.pow(f, 1 / 3) : 7.787 * f + 16 / 116),
              (c = c > 0.008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116),
              (g = 116 * f - 16),
              (p = 500 * (d - f)),
              (m = 200 * (f - c)),
              [g, p, m]
            );
          }),
          (a.hsl.rgb = function (l) {
            var u = l[0] / 360,
              d = l[1] / 100,
              f = l[2] / 100,
              c,
              g,
              p,
              m,
              y;
            if (d === 0) return (y = f * 255), [y, y, y];
            f < 0.5 ? (g = f * (1 + d)) : (g = f + d - f * d),
              (c = 2 * f - g),
              (m = [0, 0, 0]);
            for (var k = 0; k < 3; k++)
              (p = u + (1 / 3) * -(k - 1)),
                p < 0 && p++,
                p > 1 && p--,
                6 * p < 1
                  ? (y = c + (g - c) * 6 * p)
                  : 2 * p < 1
                  ? (y = g)
                  : 3 * p < 2
                  ? (y = c + (g - c) * (2 / 3 - p) * 6)
                  : (y = c),
                (m[k] = y * 255);
            return m;
          }),
          (a.hsl.hsv = function (l) {
            var u = l[0],
              d = l[1] / 100,
              f = l[2] / 100,
              c = d,
              g = Math.max(f, 0.01),
              p,
              m;
            return (
              (f *= 2),
              (d *= f <= 1 ? f : 2 - f),
              (c *= g <= 1 ? g : 2 - g),
              (m = (f + d) / 2),
              (p = f === 0 ? (2 * c) / (g + c) : (2 * d) / (f + d)),
              [u, p * 100, m * 100]
            );
          }),
          (a.hsv.rgb = function (l) {
            var u = l[0] / 60,
              d = l[1] / 100,
              f = l[2] / 100,
              c = Math.floor(u) % 6,
              g = u - Math.floor(u),
              p = 255 * f * (1 - d),
              m = 255 * f * (1 - d * g),
              y = 255 * f * (1 - d * (1 - g));
            switch (((f *= 255), c)) {
              case 0:
                return [f, y, p];
              case 1:
                return [m, f, p];
              case 2:
                return [p, f, y];
              case 3:
                return [p, m, f];
              case 4:
                return [y, p, f];
              case 5:
                return [f, p, m];
            }
          }),
          (a.hsv.hsl = function (l) {
            var u = l[0],
              d = l[1] / 100,
              f = l[2] / 100,
              c = Math.max(f, 0.01),
              g,
              p,
              m;
            return (
              (m = (2 - d) * f),
              (g = (2 - d) * c),
              (p = d * c),
              (p /= g <= 1 ? g : 2 - g),
              (p = p || 0),
              (m /= 2),
              [u, p * 100, m * 100]
            );
          }),
          (a.hwb.rgb = function (l) {
            var u = l[0] / 360,
              d = l[1] / 100,
              f = l[2] / 100,
              c = d + f,
              g,
              p,
              m,
              y;
            c > 1 && ((d /= c), (f /= c)),
              (g = Math.floor(6 * u)),
              (p = 1 - f),
              (m = 6 * u - g),
              (g & 1) !== 0 && (m = 1 - m),
              (y = d + m * (p - d));
            var k, C, O;
            switch (g) {
              default:
              case 6:
              case 0:
                (k = p), (C = y), (O = d);
                break;
              case 1:
                (k = y), (C = p), (O = d);
                break;
              case 2:
                (k = d), (C = p), (O = y);
                break;
              case 3:
                (k = d), (C = y), (O = p);
                break;
              case 4:
                (k = y), (C = d), (O = p);
                break;
              case 5:
                (k = p), (C = d), (O = y);
                break;
            }
            return [k * 255, C * 255, O * 255];
          }),
          (a.cmyk.rgb = function (l) {
            var u = l[0] / 100,
              d = l[1] / 100,
              f = l[2] / 100,
              c = l[3] / 100,
              g,
              p,
              m;
            return (
              (g = 1 - Math.min(1, u * (1 - c) + c)),
              (p = 1 - Math.min(1, d * (1 - c) + c)),
              (m = 1 - Math.min(1, f * (1 - c) + c)),
              [g * 255, p * 255, m * 255]
            );
          }),
          (a.xyz.rgb = function (l) {
            var u = l[0] / 100,
              d = l[1] / 100,
              f = l[2] / 100,
              c,
              g,
              p;
            return (
              (c = u * 3.2406 + d * -1.5372 + f * -0.4986),
              (g = u * -0.9689 + d * 1.8758 + f * 0.0415),
              (p = u * 0.0557 + d * -0.204 + f * 1.057),
              (c =
                c > 0.0031308
                  ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055
                  : c * 12.92),
              (g =
                g > 0.0031308
                  ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055
                  : g * 12.92),
              (p =
                p > 0.0031308
                  ? 1.055 * Math.pow(p, 1 / 2.4) - 0.055
                  : p * 12.92),
              (c = Math.min(Math.max(0, c), 1)),
              (g = Math.min(Math.max(0, g), 1)),
              (p = Math.min(Math.max(0, p), 1)),
              [c * 255, g * 255, p * 255]
            );
          }),
          (a.xyz.lab = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2],
              c,
              g,
              p;
            return (
              (u /= 95.047),
              (d /= 100),
              (f /= 108.883),
              (u = u > 0.008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116),
              (d = d > 0.008856 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116),
              (f = f > 0.008856 ? Math.pow(f, 1 / 3) : 7.787 * f + 16 / 116),
              (c = 116 * d - 16),
              (g = 500 * (u - d)),
              (p = 200 * (d - f)),
              [c, g, p]
            );
          }),
          (a.lab.xyz = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2],
              c,
              g,
              p;
            (g = (u + 16) / 116), (c = d / 500 + g), (p = g - f / 200);
            var m = Math.pow(g, 3),
              y = Math.pow(c, 3),
              k = Math.pow(p, 3);
            return (
              (g = m > 0.008856 ? m : (g - 16 / 116) / 7.787),
              (c = y > 0.008856 ? y : (c - 16 / 116) / 7.787),
              (p = k > 0.008856 ? k : (p - 16 / 116) / 7.787),
              (c *= 95.047),
              (g *= 100),
              (p *= 108.883),
              [c, g, p]
            );
          }),
          (a.lab.lch = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2],
              c,
              g,
              p;
            return (
              (c = Math.atan2(f, d)),
              (g = (c * 360) / 2 / Math.PI),
              g < 0 && (g += 360),
              (p = Math.sqrt(d * d + f * f)),
              [u, p, g]
            );
          }),
          (a.lch.lab = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2],
              c,
              g,
              p;
            return (
              (p = (f / 360) * 2 * Math.PI),
              (c = d * Math.cos(p)),
              (g = d * Math.sin(p)),
              [u, c, g]
            );
          }),
          (a.rgb.ansi16 = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2],
              c = 1 in arguments ? arguments[1] : a.rgb.hsv(l)[2];
            if (((c = Math.round(c / 50)), c === 0)) return 30;
            var g =
              30 +
              ((Math.round(f / 255) << 2) |
                (Math.round(d / 255) << 1) |
                Math.round(u / 255));
            return c === 2 && (g += 60), g;
          }),
          (a.hsv.ansi16 = function (l) {
            return a.rgb.ansi16(a.hsv.rgb(l), l[2]);
          }),
          (a.rgb.ansi256 = function (l) {
            var u = l[0],
              d = l[1],
              f = l[2];
            if (u === d && d === f)
              return u < 8
                ? 16
                : u > 248
                ? 231
                : Math.round(((u - 8) / 247) * 24) + 232;
            var c =
              16 +
              36 * Math.round((u / 255) * 5) +
              6 * Math.round((d / 255) * 5) +
              Math.round((f / 255) * 5);
            return c;
          }),
          (a.ansi16.rgb = function (l) {
            var u = l % 10;
            if (u === 0 || u === 7)
              return l > 50 && (u += 3.5), (u = (u / 10.5) * 255), [u, u, u];
            var d = (~~(l > 50) + 1) * 0.5,
              f = (u & 1) * d * 255,
              c = ((u >> 1) & 1) * d * 255,
              g = ((u >> 2) & 1) * d * 255;
            return [f, c, g];
          }),
          (a.ansi256.rgb = function (l) {
            if (l >= 232) {
              var u = (l - 232) * 10 + 8;
              return [u, u, u];
            }
            l -= 16;
            var d,
              f = (Math.floor(l / 36) / 5) * 255,
              c = (Math.floor((d = l % 36) / 6) / 5) * 255,
              g = ((d % 6) / 5) * 255;
            return [f, c, g];
          }),
          (a.rgb.hex = function (l) {
            var u =
                ((Math.round(l[0]) & 255) << 16) +
                ((Math.round(l[1]) & 255) << 8) +
                (Math.round(l[2]) & 255),
              d = u.toString(16).toUpperCase();
            return "000000".substring(d.length) + d;
          }),
          (a.hex.rgb = function (l) {
            var u = l.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!u) return [0, 0, 0];
            var d = u[0];
            u[0].length === 3 &&
              (d = d
                .split("")
                .map(function (m) {
                  return m + m;
                })
                .join(""));
            var f = parseInt(d, 16),
              c = (f >> 16) & 255,
              g = (f >> 8) & 255,
              p = f & 255;
            return [c, g, p];
          }),
          (a.rgb.hcg = function (l) {
            var u = l[0] / 255,
              d = l[1] / 255,
              f = l[2] / 255,
              c = Math.max(Math.max(u, d), f),
              g = Math.min(Math.min(u, d), f),
              p = c - g,
              m,
              y;
            return (
              p < 1 ? (m = g / (1 - p)) : (m = 0),
              p <= 0
                ? (y = 0)
                : c === u
                ? (y = ((d - f) / p) % 6)
                : c === d
                ? (y = 2 + (f - u) / p)
                : (y = 4 + (u - d) / p + 4),
              (y /= 6),
              (y %= 1),
              [y * 360, p * 100, m * 100]
            );
          }),
          (a.hsl.hcg = function (l) {
            var u = l[1] / 100,
              d = l[2] / 100,
              f = 1,
              c = 0;
            return (
              d < 0.5 ? (f = 2 * u * d) : (f = 2 * u * (1 - d)),
              f < 1 && (c = (d - 0.5 * f) / (1 - f)),
              [l[0], f * 100, c * 100]
            );
          }),
          (a.hsv.hcg = function (l) {
            var u = l[1] / 100,
              d = l[2] / 100,
              f = u * d,
              c = 0;
            return f < 1 && (c = (d - f) / (1 - f)), [l[0], f * 100, c * 100];
          }),
          (a.hcg.rgb = function (l) {
            var u = l[0] / 360,
              d = l[1] / 100,
              f = l[2] / 100;
            if (d === 0) return [f * 255, f * 255, f * 255];
            var c = [0, 0, 0],
              g = (u % 1) * 6,
              p = g % 1,
              m = 1 - p,
              y = 0;
            switch (Math.floor(g)) {
              case 0:
                (c[0] = 1), (c[1] = p), (c[2] = 0);
                break;
              case 1:
                (c[0] = m), (c[1] = 1), (c[2] = 0);
                break;
              case 2:
                (c[0] = 0), (c[1] = 1), (c[2] = p);
                break;
              case 3:
                (c[0] = 0), (c[1] = m), (c[2] = 1);
                break;
              case 4:
                (c[0] = p), (c[1] = 0), (c[2] = 1);
                break;
              default:
                (c[0] = 1), (c[1] = 0), (c[2] = m);
            }
            return (
              (y = (1 - d) * f),
              [(d * c[0] + y) * 255, (d * c[1] + y) * 255, (d * c[2] + y) * 255]
            );
          }),
          (a.hcg.hsv = function (l) {
            var u = l[1] / 100,
              d = l[2] / 100,
              f = u + d * (1 - u),
              c = 0;
            return f > 0 && (c = u / f), [l[0], c * 100, f * 100];
          }),
          (a.hcg.hsl = function (l) {
            var u = l[1] / 100,
              d = l[2] / 100,
              f = d * (1 - u) + 0.5 * u,
              c = 0;
            return (
              f > 0 && f < 0.5
                ? (c = u / (2 * f))
                : f >= 0.5 && f < 1 && (c = u / (2 * (1 - f))),
              [l[0], c * 100, f * 100]
            );
          }),
          (a.hcg.hwb = function (l) {
            var u = l[1] / 100,
              d = l[2] / 100,
              f = u + d * (1 - u);
            return [l[0], (f - u) * 100, (1 - f) * 100];
          }),
          (a.hwb.hcg = function (l) {
            var u = l[1] / 100,
              d = l[2] / 100,
              f = 1 - d,
              c = f - u,
              g = 0;
            return c < 1 && (g = (f - c) / (1 - c)), [l[0], c * 100, g * 100];
          }),
          (a.apple.rgb = function (l) {
            return [
              (l[0] / 65535) * 255,
              (l[1] / 65535) * 255,
              (l[2] / 65535) * 255,
            ];
          }),
          (a.rgb.apple = function (l) {
            return [
              (l[0] / 255) * 65535,
              (l[1] / 255) * 65535,
              (l[2] / 255) * 65535,
            ];
          }),
          (a.gray.rgb = function (l) {
            return [(l[0] / 100) * 255, (l[0] / 100) * 255, (l[0] / 100) * 255];
          }),
          (a.gray.hsl = a.gray.hsv =
            function (l) {
              return [0, 0, l[0]];
            }),
          (a.gray.hwb = function (l) {
            return [0, 100, l[0]];
          }),
          (a.gray.cmyk = function (l) {
            return [0, 0, 0, l[0]];
          }),
          (a.gray.lab = function (l) {
            return [l[0], 0, 0];
          }),
          (a.gray.hex = function (l) {
            var u = Math.round((l[0] / 100) * 255) & 255,
              d = (u << 16) + (u << 8) + u,
              f = d.toString(16).toUpperCase();
            return "000000".substring(f.length) + f;
          }),
          (a.rgb.gray = function (l) {
            var u = (l[0] + l[1] + l[2]) / 3;
            return [(u / 255) * 100];
          });
      });
    N.rgb,
      N.hsl,
      N.hsv,
      N.hwb,
      N.cmyk,
      N.xyz,
      N.lab,
      N.lch,
      N.hex,
      N.keyword,
      N.ansi16,
      N.ansi256,
      N.hcg,
      N.apple,
      N.gray;
    function V() {
      for (var e = {}, t = Object.keys(N), r = t.length, a = 0; a < r; a++)
        e[t[a]] = { distance: -1, parent: null };
      return e;
    }
    function ce(e) {
      var t = V(),
        r = [e];
      for (t[e].distance = 0; r.length; )
        for (
          var a = r.pop(), n = Object.keys(N[a]), i = n.length, o = 0;
          o < i;
          o++
        ) {
          var s = n[o],
            l = t[s];
          l.distance === -1 &&
            ((l.distance = t[a].distance + 1), (l.parent = a), r.unshift(s));
        }
      return t;
    }
    function Tt(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function M(e, t) {
      for (
        var r = [t[e].parent, e], a = N[t[e].parent][e], n = t[e].parent;
        t[n].parent;

      )
        r.unshift(t[n].parent),
          (a = Tt(N[t[n].parent][n], a)),
          (n = t[n].parent);
      return (a.conversion = r), a;
    }
    var Ft = function (e) {
        for (
          var t = ce(e), r = {}, a = Object.keys(t), n = a.length, i = 0;
          i < n;
          i++
        ) {
          var o = a[i],
            s = t[o];
          s.parent !== null && (r[o] = M(o, t));
        }
        return r;
      },
      me = {},
      Xe = Object.keys(N);
    function sr(e) {
      var t = function (r) {
        return r == null
          ? r
          : (arguments.length > 1 &&
              (r = Array.prototype.slice.call(arguments)),
            e(r));
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    function It(e) {
      var t = function (r) {
        if (r == null) return r;
        arguments.length > 1 && (r = Array.prototype.slice.call(arguments));
        var a = e(r);
        if (typeof a == "object")
          for (var n = a.length, i = 0; i < n; i++) a[i] = Math.round(a[i]);
        return a;
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    Xe.forEach(function (e) {
      (me[e] = {}),
        Object.defineProperty(me[e], "channels", { value: N[e].channels }),
        Object.defineProperty(me[e], "labels", { value: N[e].labels });
      var t = Ft(e),
        r = Object.keys(t);
      r.forEach(function (a) {
        var n = t[a];
        (me[e][a] = It(n)), (me[e][a].raw = sr(n));
      });
    });
    var ur = me,
      ft = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      },
      oe = {
        getRgba: Ze,
        getHsla: ht,
        getRgb: Qe,
        getHsl: Bt,
        getHwb: Lt,
        getAlpha: dr,
        hexString: fr,
        rgbString: Rt,
        rgbaString: Je,
        percentString: hr,
        percentaString: Nt,
        hslString: et,
        hslaString: Et,
        hwbString: cr,
        keyword: zt,
      };
    function Ze(e) {
      if (!!e) {
        var t = /^#([a-fA-F0-9]{3,4})$/i,
          r = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
          a =
            /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
          n =
            /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
          i = /(\w+)/,
          o = [0, 0, 0],
          s = 1,
          l = e.match(t),
          u = "";
        if (l) {
          (l = l[1]), (u = l[3]);
          for (var d = 0; d < o.length; d++) o[d] = parseInt(l[d] + l[d], 16);
          u && (s = Math.round((parseInt(u + u, 16) / 255) * 100) / 100);
        } else if ((l = e.match(r))) {
          (u = l[2]), (l = l[1]);
          for (var d = 0; d < o.length; d++)
            o[d] = parseInt(l.slice(d * 2, d * 2 + 2), 16);
          u && (s = Math.round((parseInt(u, 16) / 255) * 100) / 100);
        } else if ((l = e.match(a))) {
          for (var d = 0; d < o.length; d++) o[d] = parseInt(l[d + 1]);
          s = parseFloat(l[4]);
        } else if ((l = e.match(n))) {
          for (var d = 0; d < o.length; d++)
            o[d] = Math.round(parseFloat(l[d + 1]) * 2.55);
          s = parseFloat(l[4]);
        } else if ((l = e.match(i))) {
          if (l[1] == "transparent") return [0, 0, 0, 0];
          if (((o = ft[l[1]]), !o)) return;
        }
        for (var d = 0; d < o.length; d++) o[d] = ve(o[d], 0, 255);
        return !s && s != 0 ? (s = 1) : (s = ve(s, 0, 1)), (o[3] = s), o;
      }
    }
    function ht(e) {
      if (!!e) {
        var t =
            /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
          r = e.match(t);
        if (r) {
          var a = parseFloat(r[4]),
            n = ve(parseInt(r[1]), 0, 360),
            i = ve(parseFloat(r[2]), 0, 100),
            o = ve(parseFloat(r[3]), 0, 100),
            s = ve(isNaN(a) ? 1 : a, 0, 1);
          return [n, i, o, s];
        }
      }
    }
    function Lt(e) {
      if (!!e) {
        var t =
            /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
          r = e.match(t);
        if (r) {
          var a = parseFloat(r[4]),
            n = ve(parseInt(r[1]), 0, 360),
            i = ve(parseFloat(r[2]), 0, 100),
            o = ve(parseFloat(r[3]), 0, 100),
            s = ve(isNaN(a) ? 1 : a, 0, 1);
          return [n, i, o, s];
        }
      }
    }
    function Qe(e) {
      var t = Ze(e);
      return t && t.slice(0, 3);
    }
    function Bt(e) {
      var t = ht(e);
      return t && t.slice(0, 3);
    }
    function dr(e) {
      var t = Ze(e);
      if (t) return t[3];
      if ((t = ht(e))) return t[3];
      if ((t = Lt(e))) return t[3];
    }
    function fr(e, r) {
      var r = r !== void 0 && e.length === 3 ? r : e[3];
      return (
        "#" +
        Ee(e[0]) +
        Ee(e[1]) +
        Ee(e[2]) +
        (r >= 0 && r < 1 ? Ee(Math.round(r * 255)) : "")
      );
    }
    function Rt(e, t) {
      return t < 1 || (e[3] && e[3] < 1)
        ? Je(e, t)
        : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
    }
    function Je(e, t) {
      return (
        t === void 0 && (t = e[3] !== void 0 ? e[3] : 1),
        "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
      );
    }
    function hr(e, t) {
      if (t < 1 || (e[3] && e[3] < 1)) return Nt(e, t);
      var r = Math.round((e[0] / 255) * 100),
        a = Math.round((e[1] / 255) * 100),
        n = Math.round((e[2] / 255) * 100);
      return "rgb(" + r + "%, " + a + "%, " + n + "%)";
    }
    function Nt(e, t) {
      var r = Math.round((e[0] / 255) * 100),
        a = Math.round((e[1] / 255) * 100),
        n = Math.round((e[2] / 255) * 100);
      return (
        "rgba(" + r + "%, " + a + "%, " + n + "%, " + (t || e[3] || 1) + ")"
      );
    }
    function et(e, t) {
      return t < 1 || (e[3] && e[3] < 1)
        ? Et(e, t)
        : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
    }
    function Et(e, t) {
      return (
        t === void 0 && (t = e[3] !== void 0 ? e[3] : 1),
        "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
      );
    }
    function cr(e, t) {
      return (
        t === void 0 && (t = e[3] !== void 0 ? e[3] : 1),
        "hwb(" +
          e[0] +
          ", " +
          e[1] +
          "%, " +
          e[2] +
          "%" +
          (t !== void 0 && t !== 1 ? ", " + t : "") +
          ")"
      );
    }
    function zt(e) {
      return Wt[e.slice(0, 3)];
    }
    function ve(e, t, r) {
      return Math.min(Math.max(t, e), r);
    }
    function Ee(e) {
      var t = e.toString(16).toUpperCase();
      return t.length < 2 ? "0" + t : t;
    }
    var Wt = {};
    for (var ct in ft) Wt[ft[ct]] = ct;
    var Z = function (e) {
      if (e instanceof Z) return e;
      if (!(this instanceof Z)) return new Z(e);
      (this.valid = !1),
        (this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1,
        });
      var t;
      typeof e == "string"
        ? ((t = oe.getRgba(e)),
          t
            ? this.setValues("rgb", t)
            : (t = oe.getHsla(e))
            ? this.setValues("hsl", t)
            : (t = oe.getHwb(e)) && this.setValues("hwb", t))
        : typeof e == "object" &&
          ((t = e),
          t.r !== void 0 || t.red !== void 0
            ? this.setValues("rgb", t)
            : t.l !== void 0 || t.lightness !== void 0
            ? this.setValues("hsl", t)
            : t.v !== void 0 || t.value !== void 0
            ? this.setValues("hsv", t)
            : t.w !== void 0 || t.whiteness !== void 0
            ? this.setValues("hwb", t)
            : (t.c !== void 0 || t.cyan !== void 0) &&
              this.setValues("cmyk", t));
    };
    (Z.prototype = {
      isValid: function () {
        return this.valid;
      },
      rgb: function () {
        return this.setSpace("rgb", arguments);
      },
      hsl: function () {
        return this.setSpace("hsl", arguments);
      },
      hsv: function () {
        return this.setSpace("hsv", arguments);
      },
      hwb: function () {
        return this.setSpace("hwb", arguments);
      },
      cmyk: function () {
        return this.setSpace("cmyk", arguments);
      },
      rgbArray: function () {
        return this.values.rgb;
      },
      hslArray: function () {
        return this.values.hsl;
      },
      hsvArray: function () {
        return this.values.hsv;
      },
      hwbArray: function () {
        var e = this.values;
        return e.alpha !== 1 ? e.hwb.concat([e.alpha]) : e.hwb;
      },
      cmykArray: function () {
        return this.values.cmyk;
      },
      rgbaArray: function () {
        var e = this.values;
        return e.rgb.concat([e.alpha]);
      },
      hslaArray: function () {
        var e = this.values;
        return e.hsl.concat([e.alpha]);
      },
      alpha: function (e) {
        return e === void 0
          ? this.values.alpha
          : (this.setValues("alpha", e), this);
      },
      red: function (e) {
        return this.setChannel("rgb", 0, e);
      },
      green: function (e) {
        return this.setChannel("rgb", 1, e);
      },
      blue: function (e) {
        return this.setChannel("rgb", 2, e);
      },
      hue: function (e) {
        return (
          e && ((e %= 360), (e = e < 0 ? 360 + e : e)),
          this.setChannel("hsl", 0, e)
        );
      },
      saturation: function (e) {
        return this.setChannel("hsl", 1, e);
      },
      lightness: function (e) {
        return this.setChannel("hsl", 2, e);
      },
      saturationv: function (e) {
        return this.setChannel("hsv", 1, e);
      },
      whiteness: function (e) {
        return this.setChannel("hwb", 1, e);
      },
      blackness: function (e) {
        return this.setChannel("hwb", 2, e);
      },
      value: function (e) {
        return this.setChannel("hsv", 2, e);
      },
      cyan: function (e) {
        return this.setChannel("cmyk", 0, e);
      },
      magenta: function (e) {
        return this.setChannel("cmyk", 1, e);
      },
      yellow: function (e) {
        return this.setChannel("cmyk", 2, e);
      },
      black: function (e) {
        return this.setChannel("cmyk", 3, e);
      },
      hexString: function () {
        return oe.hexString(this.values.rgb);
      },
      rgbString: function () {
        return oe.rgbString(this.values.rgb, this.values.alpha);
      },
      rgbaString: function () {
        return oe.rgbaString(this.values.rgb, this.values.alpha);
      },
      percentString: function () {
        return oe.percentString(this.values.rgb, this.values.alpha);
      },
      hslString: function () {
        return oe.hslString(this.values.hsl, this.values.alpha);
      },
      hslaString: function () {
        return oe.hslaString(this.values.hsl, this.values.alpha);
      },
      hwbString: function () {
        return oe.hwbString(this.values.hwb, this.values.alpha);
      },
      keyword: function () {
        return oe.keyword(this.values.rgb, this.values.alpha);
      },
      rgbNumber: function () {
        var e = this.values.rgb;
        return (e[0] << 16) | (e[1] << 8) | e[2];
      },
      luminosity: function () {
        for (var e = this.values.rgb, t = [], r = 0; r < e.length; r++) {
          var a = e[r] / 255;
          t[r] = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
      },
      contrast: function (e) {
        var t = this.luminosity(),
          r = e.luminosity();
        return t > r ? (t + 0.05) / (r + 0.05) : (r + 0.05) / (t + 0.05);
      },
      level: function (e) {
        var t = this.contrast(e);
        return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
      },
      dark: function () {
        var e = this.values.rgb,
          t = (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3;
        return t < 128;
      },
      light: function () {
        return !this.dark();
      },
      negate: function () {
        for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
        return this.setValues("rgb", e), this;
      },
      lighten: function (e) {
        var t = this.values.hsl;
        return (t[2] += t[2] * e), this.setValues("hsl", t), this;
      },
      darken: function (e) {
        var t = this.values.hsl;
        return (t[2] -= t[2] * e), this.setValues("hsl", t), this;
      },
      saturate: function (e) {
        var t = this.values.hsl;
        return (t[1] += t[1] * e), this.setValues("hsl", t), this;
      },
      desaturate: function (e) {
        var t = this.values.hsl;
        return (t[1] -= t[1] * e), this.setValues("hsl", t), this;
      },
      whiten: function (e) {
        var t = this.values.hwb;
        return (t[1] += t[1] * e), this.setValues("hwb", t), this;
      },
      blacken: function (e) {
        var t = this.values.hwb;
        return (t[2] += t[2] * e), this.setValues("hwb", t), this;
      },
      greyscale: function () {
        var e = this.values.rgb,
          t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
        return this.setValues("rgb", [t, t, t]), this;
      },
      clearer: function (e) {
        var t = this.values.alpha;
        return this.setValues("alpha", t - t * e), this;
      },
      opaquer: function (e) {
        var t = this.values.alpha;
        return this.setValues("alpha", t + t * e), this;
      },
      rotate: function (e) {
        var t = this.values.hsl,
          r = (t[0] + e) % 360;
        return (t[0] = r < 0 ? 360 + r : r), this.setValues("hsl", t), this;
      },
      mix: function (e, t) {
        var r = this,
          a = e,
          n = t === void 0 ? 0.5 : t,
          i = 2 * n - 1,
          o = r.alpha() - a.alpha(),
          s = ((i * o === -1 ? i : (i + o) / (1 + i * o)) + 1) / 2,
          l = 1 - s;
        return this.rgb(
          s * r.red() + l * a.red(),
          s * r.green() + l * a.green(),
          s * r.blue() + l * a.blue()
        ).alpha(r.alpha() * n + a.alpha() * (1 - n));
      },
      toJSON: function () {
        return this.rgb();
      },
      clone: function () {
        var e = new Z(),
          t = this.values,
          r = e.values,
          a,
          n;
        for (var i in t)
          t.hasOwnProperty(i) &&
            ((a = t[i]),
            (n = {}.toString.call(a)),
            n === "[object Array]"
              ? (r[i] = a.slice(0))
              : n === "[object Number]"
              ? (r[i] = a)
              : console.error("unexpected color value:", a));
        return e;
      },
    }),
      (Z.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"],
      }),
      (Z.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100],
      }),
      (Z.prototype.getValues = function (e) {
        for (var t = this.values, r = {}, a = 0; a < e.length; a++)
          r[e.charAt(a)] = t[e][a];
        return t.alpha !== 1 && (r.a = t.alpha), r;
      }),
      (Z.prototype.setValues = function (e, t) {
        var r = this.values,
          a = this.spaces,
          n = this.maxes,
          i = 1,
          o;
        if (((this.valid = !0), e === "alpha")) i = t;
        else if (t.length) (r[e] = t.slice(0, e.length)), (i = t[e.length]);
        else if (t[e.charAt(0)] !== void 0) {
          for (o = 0; o < e.length; o++) r[e][o] = t[e.charAt(o)];
          i = t.a;
        } else if (t[a[e][0]] !== void 0) {
          var s = a[e];
          for (o = 0; o < e.length; o++) r[e][o] = t[s[o]];
          i = t.alpha;
        }
        if (
          ((r.alpha = Math.max(0, Math.min(1, i === void 0 ? r.alpha : i))),
          e === "alpha")
        )
          return !1;
        var l;
        for (o = 0; o < e.length; o++)
          (l = Math.max(0, Math.min(n[e][o], r[e][o]))),
            (r[e][o] = Math.round(l));
        for (var u in a) u !== e && (r[u] = ur[e][u](r[e]));
        return !0;
      }),
      (Z.prototype.setSpace = function (e, t) {
        var r = t[0];
        return r === void 0
          ? this.getValues(e)
          : (typeof r == "number" && (r = Array.prototype.slice.call(t)),
            this.setValues(e, r),
            this);
      }),
      (Z.prototype.setChannel = function (e, t, r) {
        var a = this.values[e];
        return r === void 0
          ? a[t]
          : r === a[t]
          ? this
          : ((a[t] = r), this.setValues(e, a), this);
      }),
      typeof window != "undefined" && (window.Color = Z);
    var Se = Z;
    function vt(e) {
      return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
    }
    var E = {
        noop: function () {},
        uid: (function () {
          var e = 0;
          return function () {
            return e++;
          };
        })(),
        isNullOrUndef: function (e) {
          return e === null || typeof e == "undefined";
        },
        isArray: function (e) {
          if (Array.isArray && Array.isArray(e)) return !0;
          var t = Object.prototype.toString.call(e);
          return t.substr(0, 7) === "[object" && t.substr(-6) === "Array]";
        },
        isObject: function (e) {
          return (
            e !== null &&
            Object.prototype.toString.call(e) === "[object Object]"
          );
        },
        isFinite: function (e) {
          return (typeof e == "number" || e instanceof Number) && isFinite(e);
        },
        valueOrDefault: function (e, t) {
          return typeof e == "undefined" ? t : e;
        },
        valueAtIndexOrDefault: function (e, t, r) {
          return E.valueOrDefault(E.isArray(e) ? e[t] : e, r);
        },
        callback: function (e, t, r) {
          if (e && typeof e.call == "function") return e.apply(r, t);
        },
        each: function (e, t, r, a) {
          var n, i, o;
          if (E.isArray(e))
            if (((i = e.length), a))
              for (n = i - 1; n >= 0; n--) t.call(r, e[n], n);
            else for (n = 0; n < i; n++) t.call(r, e[n], n);
          else if (E.isObject(e))
            for (o = Object.keys(e), i = o.length, n = 0; n < i; n++)
              t.call(r, e[o[n]], o[n]);
        },
        arrayEquals: function (e, t) {
          var r, a, n, i;
          if (!e || !t || e.length !== t.length) return !1;
          for (r = 0, a = e.length; r < a; ++r)
            if (
              ((n = e[r]), (i = t[r]), n instanceof Array && i instanceof Array)
            ) {
              if (!E.arrayEquals(n, i)) return !1;
            } else if (n !== i) return !1;
          return !0;
        },
        clone: function (e) {
          if (E.isArray(e)) return e.map(E.clone);
          if (E.isObject(e)) {
            for (
              var t = Object.create(e), r = Object.keys(e), a = r.length, n = 0;
              n < a;
              ++n
            )
              t[r[n]] = E.clone(e[r[n]]);
            return t;
          }
          return e;
        },
        _merger: function (e, t, r, a) {
          if (!!vt(e)) {
            var n = t[e],
              i = r[e];
            E.isObject(n) && E.isObject(i)
              ? E.merge(n, i, a)
              : (t[e] = E.clone(i));
          }
        },
        _mergerIf: function (e, t, r) {
          if (!!vt(e)) {
            var a = t[e],
              n = r[e];
            E.isObject(a) && E.isObject(n)
              ? E.mergeIf(a, n)
              : t.hasOwnProperty(e) || (t[e] = E.clone(n));
          }
        },
        merge: function (e, t, r) {
          var a = E.isArray(t) ? t : [t],
            n = a.length,
            i,
            o,
            s,
            l,
            u;
          if (!E.isObject(e)) return e;
          for (r = r || {}, i = r.merger || E._merger, o = 0; o < n; ++o)
            if (((t = a[o]), !!E.isObject(t)))
              for (s = Object.keys(t), u = 0, l = s.length; u < l; ++u)
                i(s[u], e, t, r);
          return e;
        },
        mergeIf: function (e, t) {
          return E.merge(e, t, { merger: E._mergerIf });
        },
        extend:
          Object.assign ||
          function (e) {
            return E.merge(e, [].slice.call(arguments, 1), {
              merger: function (t, r, a) {
                r[t] = a[t];
              },
            });
          },
        inherits: function (e) {
          var t = this,
            r =
              e && e.hasOwnProperty("constructor")
                ? e.constructor
                : function () {
                    return t.apply(this, arguments);
                  },
            a = function () {
              this.constructor = r;
            };
          return (
            (a.prototype = t.prototype),
            (r.prototype = new a()),
            (r.extend = E.inherits),
            e && E.extend(r.prototype, e),
            (r.__super__ = t.prototype),
            r
          );
        },
        _deprecated: function (e, t, r, a) {
          t !== void 0 &&
            console.warn(
              e + ': "' + r + '" is deprecated. Please use "' + a + '" instead'
            );
        },
      },
      ae = E;
    (E.callCallback = E.callback),
      (E.indexOf = function (e, t, r) {
        return Array.prototype.indexOf.call(e, t, r);
      }),
      (E.getValueOrDefault = E.valueOrDefault),
      (E.getValueAtIndexOrDefault = E.valueAtIndexOrDefault);
    var Fe = {
        linear: function (e) {
          return e;
        },
        easeInQuad: function (e) {
          return e * e;
        },
        easeOutQuad: function (e) {
          return -e * (e - 2);
        },
        easeInOutQuad: function (e) {
          return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
        },
        easeInCubic: function (e) {
          return e * e * e;
        },
        easeOutCubic: function (e) {
          return (e = e - 1) * e * e + 1;
        },
        easeInOutCubic: function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * e * e * e
            : 0.5 * ((e -= 2) * e * e + 2);
        },
        easeInQuart: function (e) {
          return e * e * e * e;
        },
        easeOutQuart: function (e) {
          return -((e = e - 1) * e * e * e - 1);
        },
        easeInOutQuart: function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * e * e * e * e
            : -0.5 * ((e -= 2) * e * e * e - 2);
        },
        easeInQuint: function (e) {
          return e * e * e * e * e;
        },
        easeOutQuint: function (e) {
          return (e = e - 1) * e * e * e * e + 1;
        },
        easeInOutQuint: function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * e * e * e * e * e
            : 0.5 * ((e -= 2) * e * e * e * e + 2);
        },
        easeInSine: function (e) {
          return -Math.cos(e * (Math.PI / 2)) + 1;
        },
        easeOutSine: function (e) {
          return Math.sin(e * (Math.PI / 2));
        },
        easeInOutSine: function (e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        },
        easeInExpo: function (e) {
          return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
        },
        easeOutExpo: function (e) {
          return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
        },
        easeInOutExpo: function (e) {
          return e === 0
            ? 0
            : e === 1
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        },
        easeInCirc: function (e) {
          return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
        },
        easeOutCirc: function (e) {
          return Math.sqrt(1 - (e = e - 1) * e);
        },
        easeInOutCirc: function (e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
        easeInElastic: function (e) {
          var t = 1.70158,
            r = 0,
            a = 1;
          return e === 0
            ? 0
            : e === 1
            ? 1
            : (r || (r = 0.3),
              (t = (r / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r)
              ));
        },
        easeOutElastic: function (e) {
          var t = 1.70158,
            r = 0,
            a = 1;
          return e === 0
            ? 0
            : e === 1
            ? 1
            : (r || (r = 0.3),
              (t = (r / (2 * Math.PI)) * Math.asin(1 / a)),
              a *
                Math.pow(2, -10 * e) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) +
                1);
        },
        easeInOutElastic: function (e) {
          var t = 1.70158,
            r = 0,
            a = 1;
          return e === 0
            ? 0
            : (e /= 0.5) === 2
            ? 1
            : (r || (r = 0.45),
              (t = (r / (2 * Math.PI)) * Math.asin(1 / a)),
              e < 1
                ? -0.5 *
                  (a *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e - t) * (2 * Math.PI)) / r))
                : a *
                    Math.pow(2, -10 * (e -= 1)) *
                    Math.sin(((e - t) * (2 * Math.PI)) / r) *
                    0.5 +
                  1);
        },
        easeInBack: function (e) {
          var t = 1.70158;
          return e * e * ((t + 1) * e - t);
        },
        easeOutBack: function (e) {
          var t = 1.70158;
          return (e = e - 1) * e * ((t + 1) * e + t) + 1;
        },
        easeInOutBack: function (e) {
          var t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        },
        easeInBounce: function (e) {
          return 1 - Fe.easeOutBounce(1 - e);
        },
        easeOutBounce: function (e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        },
        easeInOutBounce: function (e) {
          return e < 0.5
            ? Fe.easeInBounce(e * 2) * 0.5
            : Fe.easeOutBounce(e * 2 - 1) * 0.5 + 0.5;
        },
      },
      vr = { effects: Fe };
    ae.easingEffects = Fe;
    var Q = Math.PI,
      ze = Q / 180,
      Ht = Q * 2,
      le = Q / 2,
      Ie = Q / 4,
      tt = (Q * 2) / 3,
      Me = {
        clear: function (e) {
          e.ctx.clearRect(0, 0, e.width, e.height);
        },
        roundedRect: function (e, t, r, a, n, i) {
          if (i) {
            var o = Math.min(i, n / 2, a / 2),
              s = t + o,
              l = r + o,
              u = t + a - o,
              d = r + n - o;
            e.moveTo(t, l),
              s < u && l < d
                ? (e.arc(s, l, o, -Q, -le),
                  e.arc(u, l, o, -le, 0),
                  e.arc(u, d, o, 0, le),
                  e.arc(s, d, o, le, Q))
                : s < u
                ? (e.moveTo(s, r),
                  e.arc(u, l, o, -le, le),
                  e.arc(s, l, o, le, Q + le))
                : l < d
                ? (e.arc(s, l, o, -Q, 0), e.arc(s, d, o, 0, Q))
                : e.arc(s, l, o, -Q, Q),
              e.closePath(),
              e.moveTo(t, r);
          } else e.rect(t, r, a, n);
        },
        drawPoint: function (e, t, r, a, n, i) {
          var o,
            s,
            l,
            u,
            d,
            f = (i || 0) * ze;
          if (
            t &&
            typeof t == "object" &&
            ((o = t.toString()),
            o === "[object HTMLImageElement]" ||
              o === "[object HTMLCanvasElement]")
          ) {
            e.save(),
              e.translate(a, n),
              e.rotate(f),
              e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height),
              e.restore();
            return;
          }
          if (!(isNaN(r) || r <= 0)) {
            switch ((e.beginPath(), t)) {
              default:
                e.arc(a, n, r, 0, Ht), e.closePath();
                break;
              case "triangle":
                e.moveTo(a + Math.sin(f) * r, n - Math.cos(f) * r),
                  (f += tt),
                  e.lineTo(a + Math.sin(f) * r, n - Math.cos(f) * r),
                  (f += tt),
                  e.lineTo(a + Math.sin(f) * r, n - Math.cos(f) * r),
                  e.closePath();
                break;
              case "rectRounded":
                (d = r * 0.516),
                  (u = r - d),
                  (s = Math.cos(f + Ie) * u),
                  (l = Math.sin(f + Ie) * u),
                  e.arc(a - s, n - l, d, f - Q, f - le),
                  e.arc(a + l, n - s, d, f - le, f),
                  e.arc(a + s, n + l, d, f, f + le),
                  e.arc(a - l, n + s, d, f + le, f + Q),
                  e.closePath();
                break;
              case "rect":
                if (!i) {
                  (u = Math.SQRT1_2 * r), e.rect(a - u, n - u, 2 * u, 2 * u);
                  break;
                }
                f += Ie;
              case "rectRot":
                (s = Math.cos(f) * r),
                  (l = Math.sin(f) * r),
                  e.moveTo(a - s, n - l),
                  e.lineTo(a + l, n - s),
                  e.lineTo(a + s, n + l),
                  e.lineTo(a - l, n + s),
                  e.closePath();
                break;
              case "crossRot":
                f += Ie;
              case "cross":
                (s = Math.cos(f) * r),
                  (l = Math.sin(f) * r),
                  e.moveTo(a - s, n - l),
                  e.lineTo(a + s, n + l),
                  e.moveTo(a + l, n - s),
                  e.lineTo(a - l, n + s);
                break;
              case "star":
                (s = Math.cos(f) * r),
                  (l = Math.sin(f) * r),
                  e.moveTo(a - s, n - l),
                  e.lineTo(a + s, n + l),
                  e.moveTo(a + l, n - s),
                  e.lineTo(a - l, n + s),
                  (f += Ie),
                  (s = Math.cos(f) * r),
                  (l = Math.sin(f) * r),
                  e.moveTo(a - s, n - l),
                  e.lineTo(a + s, n + l),
                  e.moveTo(a + l, n - s),
                  e.lineTo(a - l, n + s);
                break;
              case "line":
                (s = Math.cos(f) * r),
                  (l = Math.sin(f) * r),
                  e.moveTo(a - s, n - l),
                  e.lineTo(a + s, n + l);
                break;
              case "dash":
                e.moveTo(a, n),
                  e.lineTo(a + Math.cos(f) * r, n + Math.sin(f) * r);
                break;
            }
            e.fill(), e.stroke();
          }
        },
        _isPointInArea: function (e, t) {
          var r = 1e-6;
          return (
            e.x > t.left - r &&
            e.x < t.right + r &&
            e.y > t.top - r &&
            e.y < t.bottom + r
          );
        },
        clipArea: function (e, t) {
          e.save(),
            e.beginPath(),
            e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
            e.clip();
        },
        unclipArea: function (e) {
          e.restore();
        },
        lineTo: function (e, t, r, a) {
          var n = r.steppedLine;
          if (n) {
            if (n === "middle") {
              var i = (t.x + r.x) / 2;
              e.lineTo(i, a ? r.y : t.y), e.lineTo(i, a ? t.y : r.y);
            } else
              (n === "after" && !a) || (n !== "after" && a)
                ? e.lineTo(t.x, r.y)
                : e.lineTo(r.x, t.y);
            e.lineTo(r.x, r.y);
            return;
          }
          if (!r.tension) {
            e.lineTo(r.x, r.y);
            return;
          }
          e.bezierCurveTo(
            a ? t.controlPointPreviousX : t.controlPointNextX,
            a ? t.controlPointPreviousY : t.controlPointNextY,
            a ? r.controlPointNextX : r.controlPointPreviousX,
            a ? r.controlPointNextY : r.controlPointPreviousY,
            r.x,
            r.y
          );
        },
      },
      gr = Me;
    (ae.clear = Me.clear),
      (ae.drawRoundedRectangle = function (e) {
        e.beginPath(), Me.roundedRect.apply(Me, arguments);
      });
    var Vt = {
      _set: function (e, t) {
        return ae.merge(this[e] || (this[e] = {}), t);
      },
    };
    Vt._set("global", {
      defaultColor: "rgba(0,0,0,0.1)",
      defaultFontColor: "#666",
      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      defaultFontSize: 12,
      defaultFontStyle: "normal",
      defaultLineHeight: 1.2,
      showLines: !0,
    });
    var A = Vt,
      ye = ae.valueOrDefault;
    function pr(e) {
      return !e || ae.isNullOrUndef(e.size) || ae.isNullOrUndef(e.family)
        ? null
        : (e.style ? e.style + " " : "") +
            (e.weight ? e.weight + " " : "") +
            e.size +
            "px " +
            e.family;
    }
    var gt = {
        toLineHeight: function (e, t) {
          var r = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!r || r[1] === "normal") return t * 1.2;
          switch (((e = +r[2]), r[3])) {
            case "px":
              return e;
            case "%":
              e /= 100;
              break;
          }
          return t * e;
        },
        toPadding: function (e) {
          var t, r, a, n;
          return (
            ae.isObject(e)
              ? ((t = +e.top || 0),
                (r = +e.right || 0),
                (a = +e.bottom || 0),
                (n = +e.left || 0))
              : (t = r = a = n = +e || 0),
            {
              top: t,
              right: r,
              bottom: a,
              left: n,
              height: t + a,
              width: n + r,
            }
          );
        },
        _parseFont: function (e) {
          var t = A.global,
            r = ye(e.fontSize, t.defaultFontSize),
            a = {
              family: ye(e.fontFamily, t.defaultFontFamily),
              lineHeight: ae.options.toLineHeight(
                ye(e.lineHeight, t.defaultLineHeight),
                r
              ),
              size: r,
              style: ye(e.fontStyle, t.defaultFontStyle),
              weight: null,
              string: "",
            };
          return (a.string = pr(a)), a;
        },
        resolve: function (e, t, r, a) {
          var n = !0,
            i,
            o,
            s;
          for (i = 0, o = e.length; i < o; ++i)
            if (
              ((s = e[i]),
              s !== void 0 &&
                (t !== void 0 &&
                  typeof s == "function" &&
                  ((s = s(t)), (n = !1)),
                r !== void 0 && ae.isArray(s) && ((s = s[r]), (n = !1)),
                s !== void 0))
            )
              return a && !n && (a.cacheable = !1), s;
        },
      },
      J = {
        _factorize: function (e) {
          var t = [],
            r = Math.sqrt(e),
            a;
          for (a = 1; a < r; a++) e % a === 0 && (t.push(a), t.push(e / a));
          return (
            r === (r | 0) && t.push(r),
            t
              .sort(function (n, i) {
                return n - i;
              })
              .pop(),
            t
          );
        },
        log10:
          Math.log10 ||
          function (e) {
            var t = Math.log(e) * Math.LOG10E,
              r = Math.round(t),
              a = e === Math.pow(10, r);
            return a ? r : t;
          },
      },
      rt = J;
    ae.log10 = J.log10;
    var jt = function (e, t) {
        return {
          x: function (r) {
            return e + e + t - r;
          },
          setWidth: function (r) {
            t = r;
          },
          textAlign: function (r) {
            return r === "center" ? r : r === "right" ? "left" : "right";
          },
          xPlus: function (r, a) {
            return r - a;
          },
          leftForLtr: function (r, a) {
            return r - a;
          },
        };
      },
      mr = function () {
        return {
          x: function (e) {
            return e;
          },
          setWidth: function (e) {},
          textAlign: function (e) {
            return e;
          },
          xPlus: function (e, t) {
            return e + t;
          },
          leftForLtr: function (e, t) {
            return e;
          },
        };
      },
      br = function (e, t, r) {
        return e ? jt(t, r) : mr();
      },
      yr = function (e, t) {
        var r, a;
        (t === "ltr" || t === "rtl") &&
          ((r = e.canvas.style),
          (a = [
            r.getPropertyValue("direction"),
            r.getPropertyPriority("direction"),
          ]),
          r.setProperty("direction", t, "important"),
          (e.prevTextDirection = a));
      },
      $t = function (e) {
        var t = e.prevTextDirection;
        t !== void 0 &&
          (delete e.prevTextDirection,
          e.canvas.style.setProperty("direction", t[0], t[1]));
      },
      qt = {
        getRtlAdapter: br,
        overrideTextDirection: yr,
        restoreTextDirection: $t,
      },
      h = ae,
      xr = vr,
      _r = gr,
      wr = gt,
      pt = rt,
      kr = qt;
    (h.easing = xr),
      (h.canvas = _r),
      (h.options = wr),
      (h.math = pt),
      (h.rtl = kr);
    function Sr(e, t, r, a) {
      var n = Object.keys(r),
        i,
        o,
        s,
        l,
        u,
        d,
        f,
        c,
        g;
      for (i = 0, o = n.length; i < o; ++i)
        if (
          ((s = n[i]),
          (d = r[s]),
          t.hasOwnProperty(s) || (t[s] = d),
          (l = t[s]),
          !(l === d || s[0] === "_"))
        ) {
          if (
            (e.hasOwnProperty(s) || (e[s] = l),
            (u = e[s]),
            (f = typeof d),
            f === typeof u)
          ) {
            if (f === "string") {
              if (((c = Se(u)), c.valid && ((g = Se(d)), g.valid))) {
                t[s] = g.mix(c, a).rgbString();
                continue;
              }
            } else if (h.isFinite(u) && h.isFinite(d)) {
              t[s] = u + (d - u) * a;
              continue;
            }
          }
          t[s] = d;
        }
    }
    var mt = function (e) {
      h.extend(this, e), this.initialize.apply(this, arguments);
    };
    h.extend(mt.prototype, {
      _type: void 0,
      initialize: function () {
        this.hidden = !1;
      },
      pivot: function () {
        var e = this;
        return (
          e._view || (e._view = h.extend({}, e._model)), (e._start = {}), e
        );
      },
      transition: function (e) {
        var t = this,
          r = t._model,
          a = t._start,
          n = t._view;
        return !r || e === 1
          ? ((t._view = h.extend({}, r)), (t._start = null), t)
          : (n || (n = t._view = {}),
            a || (a = t._start = {}),
            Sr(a, n, r, e),
            t);
      },
      tooltipPosition: function () {
        return { x: this._model.x, y: this._model.y };
      },
      hasValue: function () {
        return h.isNumber(this._model.x) && h.isNumber(this._model.y);
      },
    }),
      (mt.extend = h.inherits);
    var ge = mt,
      at = ge.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null,
      }),
      v = at;
    Object.defineProperty(at.prototype, "animationObject", {
      get: function () {
        return this;
      },
    }),
      Object.defineProperty(at.prototype, "chartInstance", {
        get: function () {
          return this.chart;
        },
        set: function (e) {
          this.chart = e;
        },
      }),
      A._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: h.noop,
          onComplete: h.noop,
        },
      });
    var b = {
        animations: [],
        request: null,
        addAnimation: function (e, t, r, a) {
          var n = this.animations,
            i,
            o;
          for (
            t.chart = e,
              t.startTime = Date.now(),
              t.duration = r,
              a || (e.animating = !0),
              i = 0,
              o = n.length;
            i < o;
            ++i
          )
            if (n[i].chart === e) {
              n[i] = t;
              return;
            }
          n.push(t), n.length === 1 && this.requestAnimationFrame();
        },
        cancelAnimation: function (e) {
          var t = h.findIndex(this.animations, function (r) {
            return r.chart === e;
          });
          t !== -1 && (this.animations.splice(t, 1), (e.animating = !1));
        },
        requestAnimationFrame: function () {
          var e = this;
          e.request === null &&
            (e.request = h.requestAnimFrame.call(window, function () {
              (e.request = null), e.startDigest();
            }));
        },
        startDigest: function () {
          var e = this;
          e.advance(), e.animations.length > 0 && e.requestAnimationFrame();
        },
        advance: function () {
          for (var e = this.animations, t, r, a, n, i = 0; i < e.length; )
            (t = e[i]),
              (r = t.chart),
              (a = t.numSteps),
              (n =
                Math.floor(((Date.now() - t.startTime) / t.duration) * a) + 1),
              (t.currentStep = Math.min(n, a)),
              h.callback(t.render, [r, t], r),
              h.callback(t.onAnimationProgress, [t], r),
              t.currentStep >= a
                ? (h.callback(t.onAnimationComplete, [t], r),
                  (r.animating = !1),
                  e.splice(i, 1))
                : ++i;
        },
      },
      x = h.options.resolve,
      w = ["push", "pop", "shift", "splice", "unshift"];
    function _(e, t) {
      if (e._chartjs) {
        e._chartjs.listeners.push(t);
        return;
      }
      Object.defineProperty(e, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [t] },
      }),
        w.forEach(function (r) {
          var a = "onData" + r.charAt(0).toUpperCase() + r.slice(1),
            n = e[r];
          Object.defineProperty(e, r, {
            configurable: !0,
            enumerable: !1,
            value: function () {
              var i = Array.prototype.slice.call(arguments),
                o = n.apply(this, i);
              return (
                h.each(e._chartjs.listeners, function (s) {
                  typeof s[a] == "function" && s[a].apply(s, i);
                }),
                o
              );
            },
          });
        });
    }
    function S(e, t) {
      var r = e._chartjs;
      if (!!r) {
        var a = r.listeners,
          n = a.indexOf(t);
        n !== -1 && a.splice(n, 1),
          !(a.length > 0) &&
            (w.forEach(function (i) {
              delete e[i];
            }),
            delete e._chartjs);
      }
    }
    var D = function (e, t) {
      this.initialize(e, t);
    };
    h.extend(D.prototype, {
      datasetElementType: null,
      dataElementType: null,
      _datasetElementOptions: [
        "backgroundColor",
        "borderCapStyle",
        "borderColor",
        "borderDash",
        "borderDashOffset",
        "borderJoinStyle",
        "borderWidth",
      ],
      _dataElementOptions: [
        "backgroundColor",
        "borderColor",
        "borderWidth",
        "pointStyle",
      ],
      initialize: function (e, t) {
        var r = this;
        (r.chart = e),
          (r.index = t),
          r.linkScales(),
          r.addElements(),
          (r._type = r.getMeta().type);
      },
      updateIndex: function (e) {
        this.index = e;
      },
      linkScales: function () {
        var e = this,
          t = e.getMeta(),
          r = e.chart,
          a = r.scales,
          n = e.getDataset(),
          i = r.options.scales;
        (t.xAxisID === null || !(t.xAxisID in a) || n.xAxisID) &&
          (t.xAxisID = n.xAxisID || i.xAxes[0].id),
          (t.yAxisID === null || !(t.yAxisID in a) || n.yAxisID) &&
            (t.yAxisID = n.yAxisID || i.yAxes[0].id);
      },
      getDataset: function () {
        return this.chart.data.datasets[this.index];
      },
      getMeta: function () {
        return this.chart.getDatasetMeta(this.index);
      },
      getScaleForId: function (e) {
        return this.chart.scales[e];
      },
      _getValueScaleId: function () {
        return this.getMeta().yAxisID;
      },
      _getIndexScaleId: function () {
        return this.getMeta().xAxisID;
      },
      _getValueScale: function () {
        return this.getScaleForId(this._getValueScaleId());
      },
      _getIndexScale: function () {
        return this.getScaleForId(this._getIndexScaleId());
      },
      reset: function () {
        this._update(!0);
      },
      destroy: function () {
        this._data && S(this._data, this);
      },
      createMetaDataset: function () {
        var e = this,
          t = e.datasetElementType;
        return t && new t({ _chart: e.chart, _datasetIndex: e.index });
      },
      createMetaData: function (e) {
        var t = this,
          r = t.dataElementType;
        return (
          r && new r({ _chart: t.chart, _datasetIndex: t.index, _index: e })
        );
      },
      addElements: function () {
        var e = this,
          t = e.getMeta(),
          r = e.getDataset().data || [],
          a = t.data,
          n,
          i;
        for (n = 0, i = r.length; n < i; ++n)
          a[n] = a[n] || e.createMetaData(n);
        t.dataset = t.dataset || e.createMetaDataset();
      },
      addElementAndReset: function (e) {
        var t = this.createMetaData(e);
        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
      },
      buildOrUpdateElements: function () {
        var e = this,
          t = e.getDataset(),
          r = t.data || (t.data = []);
        e._data !== r &&
          (e._data && S(e._data, e),
          r && Object.isExtensible(r) && _(r, e),
          (e._data = r)),
          e.resyncElements();
      },
      _configure: function () {
        var e = this;
        e._config = h.merge(
          Object.create(null),
          [e.chart.options.datasets[e._type], e.getDataset()],
          {
            merger: function (t, r, a) {
              t !== "_meta" && t !== "data" && h._merger(t, r, a);
            },
          }
        );
      },
      _update: function (e) {
        var t = this;
        t._configure(), (t._cachedDataOpts = null), t.update(e);
      },
      update: h.noop,
      transition: function (e) {
        for (
          var t = this.getMeta(), r = t.data || [], a = r.length, n = 0;
          n < a;
          ++n
        )
          r[n].transition(e);
        t.dataset && t.dataset.transition(e);
      },
      draw: function () {
        var e = this.getMeta(),
          t = e.data || [],
          r = t.length,
          a = 0;
        for (e.dataset && e.dataset.draw(); a < r; ++a) t[a].draw();
      },
      getStyle: function (e) {
        var t = this,
          r = t.getMeta(),
          a = r.dataset,
          n;
        return (
          t._configure(),
          a && e === void 0
            ? (n = t._resolveDatasetElementOptions(a || {}))
            : ((e = e || 0),
              (n = t._resolveDataElementOptions(r.data[e] || {}, e))),
          (n.fill === !1 || n.fill === null) &&
            (n.backgroundColor = n.borderColor),
          n
        );
      },
      _resolveDatasetElementOptions: function (e, t) {
        var r = this,
          a = r.chart,
          n = r._config,
          i = e.custom || {},
          o = a.options.elements[r.datasetElementType.prototype._type] || {},
          s = r._datasetElementOptions,
          l = {},
          u,
          d,
          f,
          c,
          g = {
            chart: a,
            dataset: r.getDataset(),
            datasetIndex: r.index,
            hover: t,
          };
        for (u = 0, d = s.length; u < d; ++u)
          (f = s[u]),
            (c = t ? "hover" + f.charAt(0).toUpperCase() + f.slice(1) : f),
            (l[f] = x([i[c], n[c], o[c]], g));
        return l;
      },
      _resolveDataElementOptions: function (e, t) {
        var r = this,
          a = e && e.custom,
          n = r._cachedDataOpts;
        if (n && !a) return n;
        var i = r.chart,
          o = r._config,
          s = i.options.elements[r.dataElementType.prototype._type] || {},
          l = r._dataElementOptions,
          u = {},
          d = {
            chart: i,
            dataIndex: t,
            dataset: r.getDataset(),
            datasetIndex: r.index,
          },
          f = { cacheable: !a },
          c,
          g,
          p,
          m;
        if (((a = a || {}), h.isArray(l)))
          for (g = 0, p = l.length; g < p; ++g)
            (m = l[g]), (u[m] = x([a[m], o[m], s[m]], d, t, f));
        else
          for (c = Object.keys(l), g = 0, p = c.length; g < p; ++g)
            (m = c[g]), (u[m] = x([a[m], o[l[m]], o[m], s[m]], d, t, f));
        return f.cacheable && (r._cachedDataOpts = Object.freeze(u)), u;
      },
      removeHoverStyle: function (e) {
        h.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle;
      },
      setHoverStyle: function (e) {
        var t = this.chart.data.datasets[e._datasetIndex],
          r = e._index,
          a = e.custom || {},
          n = e._model,
          i = h.getHoverColor;
        (e.$previousStyle = {
          backgroundColor: n.backgroundColor,
          borderColor: n.borderColor,
          borderWidth: n.borderWidth,
        }),
          (n.backgroundColor = x(
            [
              a.hoverBackgroundColor,
              t.hoverBackgroundColor,
              i(n.backgroundColor),
            ],
            void 0,
            r
          )),
          (n.borderColor = x(
            [a.hoverBorderColor, t.hoverBorderColor, i(n.borderColor)],
            void 0,
            r
          )),
          (n.borderWidth = x(
            [a.hoverBorderWidth, t.hoverBorderWidth, n.borderWidth],
            void 0,
            r
          ));
      },
      _removeDatasetHoverStyle: function () {
        var e = this.getMeta().dataset;
        e && this.removeHoverStyle(e);
      },
      _setDatasetHoverStyle: function () {
        var e = this.getMeta().dataset,
          t = {},
          r,
          a,
          n,
          i,
          o,
          s;
        if (!!e) {
          for (
            s = e._model,
              o = this._resolveDatasetElementOptions(e, !0),
              i = Object.keys(o),
              r = 0,
              a = i.length;
            r < a;
            ++r
          )
            (n = i[r]), (t[n] = s[n]), (s[n] = o[n]);
          e.$previousStyle = t;
        }
      },
      resyncElements: function () {
        var e = this,
          t = e.getMeta(),
          r = e.getDataset().data,
          a = t.data.length,
          n = r.length;
        n < a ? t.data.splice(n, a - n) : n > a && e.insertElements(a, n - a);
      },
      insertElements: function (e, t) {
        for (var r = 0; r < t; ++r) this.addElementAndReset(e + r);
      },
      onDataPush: function () {
        var e = arguments.length;
        this.insertElements(this.getDataset().data.length - e, e);
      },
      onDataPop: function () {
        this.getMeta().data.pop();
      },
      onDataShift: function () {
        this.getMeta().data.shift();
      },
      onDataSplice: function (e, t) {
        this.getMeta().data.splice(e, t),
          this.insertElements(e, arguments.length - 2);
      },
      onDataUnshift: function () {
        this.insertElements(0, arguments.length);
      },
    }),
      (D.extend = h.inherits);
    var F = D,
      T = Math.PI * 2;
    A._set("global", {
      elements: {
        arc: {
          backgroundColor: A.global.defaultColor,
          borderColor: "#fff",
          borderWidth: 2,
          borderAlign: "center",
        },
      },
    });
    function L(e, t) {
      var r = t.startAngle,
        a = t.endAngle,
        n = t.pixelMargin,
        i = n / t.outerRadius,
        o = t.x,
        s = t.y;
      e.beginPath(),
        e.arc(o, s, t.outerRadius, r - i, a + i),
        t.innerRadius > n
          ? ((i = n / t.innerRadius),
            e.arc(o, s, t.innerRadius - n, a + i, r - i, !0))
          : e.arc(o, s, n, a + Math.PI / 2, r - Math.PI / 2),
        e.closePath(),
        e.clip();
    }
    function z(e, t, r, a) {
      var n = r.endAngle,
        i;
      for (
        a &&
          ((r.endAngle = r.startAngle + T),
          L(e, r),
          (r.endAngle = n),
          r.endAngle === r.startAngle &&
            r.fullCircles &&
            ((r.endAngle += T), r.fullCircles--)),
          e.beginPath(),
          e.arc(r.x, r.y, r.innerRadius, r.startAngle + T, r.startAngle, !0),
          i = 0;
        i < r.fullCircles;
        ++i
      )
        e.stroke();
      for (
        e.beginPath(),
          e.arc(r.x, r.y, t.outerRadius, r.startAngle, r.startAngle + T),
          i = 0;
        i < r.fullCircles;
        ++i
      )
        e.stroke();
    }
    function G(e, t, r) {
      var a = t.borderAlign === "inner";
      a
        ? ((e.lineWidth = t.borderWidth * 2), (e.lineJoin = "round"))
        : ((e.lineWidth = t.borderWidth), (e.lineJoin = "bevel")),
        r.fullCircles && z(e, t, r, a),
        a && L(e, r),
        e.beginPath(),
        e.arc(r.x, r.y, t.outerRadius, r.startAngle, r.endAngle),
        e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0),
        e.closePath(),
        e.stroke();
    }
    var be = ge.extend({
        _type: "arc",
        inLabelRange: function (e) {
          var t = this._view;
          return t
            ? Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
            : !1;
        },
        inRange: function (e, t) {
          var r = this._view;
          if (r) {
            for (
              var a = h.getAngleFromPoint(r, { x: e, y: t }),
                n = a.angle,
                i = a.distance,
                o = r.startAngle,
                s = r.endAngle;
              s < o;

            )
              s += T;
            for (; n > s; ) n -= T;
            for (; n < o; ) n += T;
            var l = n >= o && n <= s,
              u = i >= r.innerRadius && i <= r.outerRadius;
            return l && u;
          }
          return !1;
        },
        getCenterPoint: function () {
          var e = this._view,
            t = (e.startAngle + e.endAngle) / 2,
            r = (e.innerRadius + e.outerRadius) / 2;
          return { x: e.x + Math.cos(t) * r, y: e.y + Math.sin(t) * r };
        },
        getArea: function () {
          var e = this._view;
          return (
            Math.PI *
            ((e.endAngle - e.startAngle) / (2 * Math.PI)) *
            (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
          );
        },
        tooltipPosition: function () {
          var e = this._view,
            t = e.startAngle + (e.endAngle - e.startAngle) / 2,
            r = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
          return { x: e.x + Math.cos(t) * r, y: e.y + Math.sin(t) * r };
        },
        draw: function () {
          var e = this._chart.ctx,
            t = this._view,
            r = t.borderAlign === "inner" ? 0.33 : 0,
            a = {
              x: t.x,
              y: t.y,
              innerRadius: t.innerRadius,
              outerRadius: Math.max(t.outerRadius - r, 0),
              pixelMargin: r,
              startAngle: t.startAngle,
              endAngle: t.endAngle,
              fullCircles: Math.floor(t.circumference / T),
            },
            n;
          if (
            (e.save(),
            (e.fillStyle = t.backgroundColor),
            (e.strokeStyle = t.borderColor),
            a.fullCircles)
          ) {
            for (
              a.endAngle = a.startAngle + T,
                e.beginPath(),
                e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
                e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
                e.closePath(),
                n = 0;
              n < a.fullCircles;
              ++n
            )
              e.fill();
            a.endAngle = a.startAngle + (t.circumference % T);
          }
          e.beginPath(),
            e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
            e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
            e.closePath(),
            e.fill(),
            t.borderWidth && G(e, t, a),
            e.restore();
        },
      }),
      U = h.valueOrDefault,
      Ce = A.global.defaultColor;
    A._set("global", {
      elements: {
        line: {
          tension: 0.4,
          backgroundColor: Ce,
          borderWidth: 3,
          borderColor: Ce,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0,
        },
      },
    });
    var ne = ge.extend({
        _type: "line",
        draw: function () {
          var e = this,
            t = e._view,
            r = e._chart.ctx,
            a = t.spanGaps,
            n = e._children.slice(),
            i = A.global,
            o = i.elements.line,
            s = -1,
            l = e._loop,
            u,
            d,
            f;
          if (!!n.length) {
            if (e._loop) {
              for (u = 0; u < n.length; ++u)
                if (
                  ((d = h.previousItem(n, u)), !n[u]._view.skip && d._view.skip)
                ) {
                  (n = n.slice(u).concat(n.slice(0, u))), (l = a);
                  break;
                }
              l && n.push(n[0]);
            }
            for (
              r.save(),
                r.lineCap = t.borderCapStyle || o.borderCapStyle,
                r.setLineDash && r.setLineDash(t.borderDash || o.borderDash),
                r.lineDashOffset = U(t.borderDashOffset, o.borderDashOffset),
                r.lineJoin = t.borderJoinStyle || o.borderJoinStyle,
                r.lineWidth = U(t.borderWidth, o.borderWidth),
                r.strokeStyle = t.borderColor || i.defaultColor,
                r.beginPath(),
                f = n[0]._view,
                f.skip || (r.moveTo(f.x, f.y), (s = 0)),
                u = 1;
              u < n.length;
              ++u
            )
              (f = n[u]._view),
                (d = s === -1 ? h.previousItem(n, u) : n[s]),
                f.skip ||
                  ((s !== u - 1 && !a) || s === -1
                    ? r.moveTo(f.x, f.y)
                    : h.canvas.lineTo(r, d._view, f),
                  (s = u));
            l && r.closePath(), r.stroke(), r.restore();
          }
        },
      }),
      bt = h.valueOrDefault,
      yt = A.global.defaultColor;
    A._set("global", {
      elements: {
        point: {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: yt,
          borderColor: yt,
          borderWidth: 1,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1,
        },
      },
    });
    function ra(e) {
      var t = this._view;
      return t ? Math.abs(e - t.x) < t.radius + t.hitRadius : !1;
    }
    function dn(e) {
      var t = this._view;
      return t ? Math.abs(e - t.y) < t.radius + t.hitRadius : !1;
    }
    var fn = ge.extend({
        _type: "point",
        inRange: function (e, t) {
          var r = this._view;
          return r
            ? Math.pow(e - r.x, 2) + Math.pow(t - r.y, 2) <
                Math.pow(r.hitRadius + r.radius, 2)
            : !1;
        },
        inLabelRange: ra,
        inXRange: ra,
        inYRange: dn,
        getCenterPoint: function () {
          var e = this._view;
          return { x: e.x, y: e.y };
        },
        getArea: function () {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function () {
          var e = this._view;
          return { x: e.x, y: e.y, padding: e.radius + e.borderWidth };
        },
        draw: function (e) {
          var t = this._view,
            r = this._chart.ctx,
            a = t.pointStyle,
            n = t.rotation,
            i = t.radius,
            o = t.x,
            s = t.y,
            l = A.global,
            u = l.defaultColor;
          t.skip ||
            ((e === void 0 || h.canvas._isPointInArea(t, e)) &&
              ((r.strokeStyle = t.borderColor || u),
              (r.lineWidth = bt(t.borderWidth, l.elements.point.borderWidth)),
              (r.fillStyle = t.backgroundColor || u),
              h.canvas.drawPoint(r, a, i, o, s, n)));
        },
      }),
      aa = A.global.defaultColor;
    A._set("global", {
      elements: {
        rectangle: {
          backgroundColor: aa,
          borderColor: aa,
          borderSkipped: "bottom",
          borderWidth: 0,
        },
      },
    });
    function Gt(e) {
      return e && e.width !== void 0;
    }
    function na(e) {
      var t, r, a, n, i;
      return (
        Gt(e)
          ? ((i = e.width / 2),
            (t = e.x - i),
            (r = e.x + i),
            (a = Math.min(e.y, e.base)),
            (n = Math.max(e.y, e.base)))
          : ((i = e.height / 2),
            (t = Math.min(e.x, e.base)),
            (r = Math.max(e.x, e.base)),
            (a = e.y - i),
            (n = e.y + i)),
        { left: t, top: a, right: r, bottom: n }
      );
    }
    function ia(e, t, r) {
      return e === t ? r : e === r ? t : e;
    }
    function hn(e) {
      var t = e.borderSkipped,
        r = {};
      return (
        t &&
          (e.horizontal
            ? e.base > e.x && (t = ia(t, "left", "right"))
            : e.base < e.y && (t = ia(t, "bottom", "top")),
          (r[t] = !0)),
        r
      );
    }
    function cn(e, t, r) {
      var a = e.borderWidth,
        n = hn(e),
        i,
        o,
        s,
        l;
      return (
        h.isObject(a)
          ? ((i = +a.top || 0),
            (o = +a.right || 0),
            (s = +a.bottom || 0),
            (l = +a.left || 0))
          : (i = o = s = l = +a || 0),
        {
          t: n.top || i < 0 ? 0 : i > r ? r : i,
          r: n.right || o < 0 ? 0 : o > t ? t : o,
          b: n.bottom || s < 0 ? 0 : s > r ? r : s,
          l: n.left || l < 0 ? 0 : l > t ? t : l,
        }
      );
    }
    function vn(e) {
      var t = na(e),
        r = t.right - t.left,
        a = t.bottom - t.top,
        n = cn(e, r / 2, a / 2);
      return {
        outer: { x: t.left, y: t.top, w: r, h: a },
        inner: {
          x: t.left + n.l,
          y: t.top + n.t,
          w: r - n.l - n.r,
          h: a - n.t - n.b,
        },
      };
    }
    function xt(e, t, r) {
      var a = t === null,
        n = r === null,
        i = !e || (a && n) ? !1 : na(e);
      return (
        i &&
        (a || (t >= i.left && t <= i.right)) &&
        (n || (r >= i.top && r <= i.bottom))
      );
    }
    var gn = ge.extend({
        _type: "rectangle",
        draw: function () {
          var e = this._chart.ctx,
            t = this._view,
            r = vn(t),
            a = r.outer,
            n = r.inner;
          (e.fillStyle = t.backgroundColor),
            e.fillRect(a.x, a.y, a.w, a.h),
            !(a.w === n.w && a.h === n.h) &&
              (e.save(),
              e.beginPath(),
              e.rect(a.x, a.y, a.w, a.h),
              e.clip(),
              (e.fillStyle = t.borderColor),
              e.rect(n.x, n.y, n.w, n.h),
              e.fill("evenodd"),
              e.restore());
        },
        height: function () {
          var e = this._view;
          return e.base - e.y;
        },
        inRange: function (e, t) {
          return xt(this._view, e, t);
        },
        inLabelRange: function (e, t) {
          var r = this._view;
          return Gt(r) ? xt(r, e, null) : xt(r, null, t);
        },
        inXRange: function (e) {
          return xt(this._view, e, null);
        },
        inYRange: function (e) {
          return xt(this._view, null, e);
        },
        getCenterPoint: function () {
          var e = this._view,
            t,
            r;
          return (
            Gt(e)
              ? ((t = e.x), (r = (e.y + e.base) / 2))
              : ((t = (e.x + e.base) / 2), (r = e.y)),
            { x: t, y: r }
          );
        },
        getArea: function () {
          var e = this._view;
          return Gt(e)
            ? e.width * Math.abs(e.y - e.base)
            : e.height * Math.abs(e.x - e.base);
        },
        tooltipPosition: function () {
          var e = this._view;
          return { x: e.x, y: e.y };
        },
      }),
      se = {},
      pn = be,
      mn = ne,
      bn = fn,
      yn = gn;
    (se.Arc = pn), (se.Line = mn), (se.Point = bn), (se.Rectangle = yn);
    var _t = h._deprecated,
      nt = h.valueOrDefault;
    A._set("bar", {
      hover: { mode: "label" },
      scales: {
        xAxes: [
          { type: "category", offset: !0, gridLines: { offsetGridLines: !0 } },
        ],
        yAxes: [{ type: "linear" }],
      },
    }),
      A._set("global", {
        datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
      });
    function xn(e, t) {
      var r = e._length,
        a,
        n,
        i,
        o;
      for (i = 1, o = t.length; i < o; ++i)
        r = Math.min(r, Math.abs(t[i] - t[i - 1]));
      for (i = 0, o = e.getTicks().length; i < o; ++i)
        (n = e.getPixelForTick(i)),
          (r = i > 0 ? Math.min(r, Math.abs(n - a)) : r),
          (a = n);
      return r;
    }
    function _n(e, t, r) {
      var a = r.barThickness,
        n = t.stackCount,
        i = t.pixels[e],
        o = h.isNullOrUndef(a) ? xn(t.scale, t.pixels) : -1,
        s,
        l;
      return (
        h.isNullOrUndef(a)
          ? ((s = o * r.categoryPercentage), (l = r.barPercentage))
          : ((s = a * n), (l = 1)),
        { chunk: s / n, ratio: l, start: i - s / 2 }
      );
    }
    function wn(e, t, r) {
      var a = t.pixels,
        n = a[e],
        i = e > 0 ? a[e - 1] : null,
        o = e < a.length - 1 ? a[e + 1] : null,
        s = r.categoryPercentage,
        l,
        u;
      return (
        i === null && (i = n - (o === null ? t.end - t.start : o - n)),
        o === null && (o = n + n - i),
        (l = n - ((n - Math.min(i, o)) / 2) * s),
        (u = (Math.abs(o - i) / 2) * s),
        { chunk: u / t.stackCount, ratio: r.barPercentage, start: l }
      );
    }
    var oa = F.extend({
        dataElementType: se.Rectangle,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderSkipped",
          "borderWidth",
          "barPercentage",
          "barThickness",
          "categoryPercentage",
          "maxBarThickness",
          "minBarLength",
        ],
        initialize: function () {
          var e = this,
            t,
            r;
          F.prototype.initialize.apply(e, arguments),
            (t = e.getMeta()),
            (t.stack = e.getDataset().stack),
            (t.bar = !0),
            (r = e._getIndexScale().options),
            _t(
              "bar chart",
              r.barPercentage,
              "scales.[x/y]Axes.barPercentage",
              "dataset.barPercentage"
            ),
            _t(
              "bar chart",
              r.barThickness,
              "scales.[x/y]Axes.barThickness",
              "dataset.barThickness"
            ),
            _t(
              "bar chart",
              r.categoryPercentage,
              "scales.[x/y]Axes.categoryPercentage",
              "dataset.categoryPercentage"
            ),
            _t(
              "bar chart",
              e._getValueScale().options.minBarLength,
              "scales.[x/y]Axes.minBarLength",
              "dataset.minBarLength"
            ),
            _t(
              "bar chart",
              r.maxBarThickness,
              "scales.[x/y]Axes.maxBarThickness",
              "dataset.maxBarThickness"
            );
        },
        update: function (e) {
          var t = this,
            r = t.getMeta().data,
            a,
            n;
          for (t._ruler = t.getRuler(), a = 0, n = r.length; a < n; ++a)
            t.updateElement(r[a], a, e);
        },
        updateElement: function (e, t, r) {
          var a = this,
            n = a.getMeta(),
            i = a.getDataset(),
            o = a._resolveDataElementOptions(e, t);
          (e._xScale = a.getScaleForId(n.xAxisID)),
            (e._yScale = a.getScaleForId(n.yAxisID)),
            (e._datasetIndex = a.index),
            (e._index = t),
            (e._model = {
              backgroundColor: o.backgroundColor,
              borderColor: o.borderColor,
              borderSkipped: o.borderSkipped,
              borderWidth: o.borderWidth,
              datasetLabel: i.label,
              label: a.chart.data.labels[t],
            }),
            h.isArray(i.data[t]) && (e._model.borderSkipped = null),
            a._updateElementGeometry(e, t, r, o),
            e.pivot();
        },
        _updateElementGeometry: function (e, t, r, a) {
          var n = this,
            i = e._model,
            o = n._getValueScale(),
            s = o.getBasePixel(),
            l = o.isHorizontal(),
            u = n._ruler || n.getRuler(),
            d = n.calculateBarValuePixels(n.index, t, a),
            f = n.calculateBarIndexPixels(n.index, t, u, a);
          (i.horizontal = l),
            (i.base = r ? s : d.base),
            (i.x = l ? (r ? s : d.head) : f.center),
            (i.y = l ? f.center : r ? s : d.head),
            (i.height = l ? f.size : void 0),
            (i.width = l ? void 0 : f.size);
        },
        _getStacks: function (e) {
          var t = this,
            r = t._getIndexScale(),
            a = r._getMatchingVisibleMetas(t._type),
            n = r.options.stacked,
            i = a.length,
            o = [],
            s,
            l;
          for (
            s = 0;
            s < i &&
            ((l = a[s]),
            (n === !1 ||
              o.indexOf(l.stack) === -1 ||
              (n === void 0 && l.stack === void 0)) &&
              o.push(l.stack),
            l.index !== e);
            ++s
          );
          return o;
        },
        getStackCount: function () {
          return this._getStacks().length;
        },
        getStackIndex: function (e, t) {
          var r = this._getStacks(e),
            a = t !== void 0 ? r.indexOf(t) : -1;
          return a === -1 ? r.length - 1 : a;
        },
        getRuler: function () {
          var e = this,
            t = e._getIndexScale(),
            r = [],
            a,
            n;
          for (a = 0, n = e.getMeta().data.length; a < n; ++a)
            r.push(t.getPixelForValue(null, a, e.index));
          return {
            pixels: r,
            start: t._startPixel,
            end: t._endPixel,
            stackCount: e.getStackCount(),
            scale: t,
          };
        },
        calculateBarValuePixels: function (e, t, r) {
          var a = this,
            n = a.chart,
            i = a._getValueScale(),
            o = i.isHorizontal(),
            s = n.data.datasets,
            l = i._getMatchingVisibleMetas(a._type),
            u = i._parseValue(s[e].data[t]),
            d = r.minBarLength,
            f = i.options.stacked,
            c = a.getMeta().stack,
            g =
              u.start === void 0 ? 0 : u.max >= 0 && u.min >= 0 ? u.min : u.max,
            p =
              u.start === void 0
                ? u.end
                : u.max >= 0 && u.min >= 0
                ? u.max - u.min
                : u.min - u.max,
            m = l.length,
            y,
            k,
            C,
            O,
            B,
            I,
            H;
          if (f || (f === void 0 && c !== void 0))
            for (y = 0; y < m && ((k = l[y]), k.index !== e); ++y)
              k.stack === c &&
                ((H = i._parseValue(s[k.index].data[t])),
                (C =
                  H.start === void 0
                    ? H.end
                    : H.min >= 0 && H.max >= 0
                    ? H.max
                    : H.min),
                ((u.min < 0 && C < 0) || (u.max >= 0 && C > 0)) && (g += C));
          return (
            (O = i.getPixelForValue(g)),
            (B = i.getPixelForValue(g + p)),
            (I = B - O),
            d !== void 0 &&
              Math.abs(I) < d &&
              ((I = d),
              (p >= 0 && !o) || (p < 0 && o) ? (B = O - d) : (B = O + d)),
            { size: I, base: O, head: B, center: B + I / 2 }
          );
        },
        calculateBarIndexPixels: function (e, t, r, a) {
          var n = this,
            i = a.barThickness === "flex" ? wn(t, r, a) : _n(t, r, a),
            o = n.getStackIndex(e, n.getMeta().stack),
            s = i.start + i.chunk * o + i.chunk / 2,
            l = Math.min(nt(a.maxBarThickness, 1 / 0), i.chunk * i.ratio);
          return { base: s - l / 2, head: s + l / 2, center: s, size: l };
        },
        draw: function () {
          var e = this,
            t = e.chart,
            r = e._getValueScale(),
            a = e.getMeta().data,
            n = e.getDataset(),
            i = a.length,
            o = 0;
          for (h.canvas.clipArea(t.ctx, t.chartArea); o < i; ++o) {
            var s = r._parseValue(n.data[o]);
            !isNaN(s.min) && !isNaN(s.max) && a[o].draw();
          }
          h.canvas.unclipArea(t.ctx);
        },
        _resolveDataElementOptions: function () {
          var e = this,
            t = h.extend(
              {},
              F.prototype._resolveDataElementOptions.apply(e, arguments)
            ),
            r = e._getIndexScale().options,
            a = e._getValueScale().options;
          return (
            (t.barPercentage = nt(r.barPercentage, t.barPercentage)),
            (t.barThickness = nt(r.barThickness, t.barThickness)),
            (t.categoryPercentage = nt(
              r.categoryPercentage,
              t.categoryPercentage
            )),
            (t.maxBarThickness = nt(r.maxBarThickness, t.maxBarThickness)),
            (t.minBarLength = nt(a.minBarLength, t.minBarLength)),
            t
          );
        },
      }),
      Mr = h.valueOrDefault,
      kn = h.options.resolve;
    A._set("bubble", {
      hover: { mode: "single" },
      scales: {
        xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
        yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
      },
      tooltips: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (e, t) {
            var r = t.datasets[e.datasetIndex].label || "",
              a = t.datasets[e.datasetIndex].data[e.index];
            return r + ": (" + e.xLabel + ", " + e.yLabel + ", " + a.r + ")";
          },
        },
      },
    });
    var Sn = F.extend({
        dataElementType: se.Point,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
          "hoverRadius",
          "hitRadius",
          "pointStyle",
          "rotation",
        ],
        update: function (e) {
          var t = this,
            r = t.getMeta(),
            a = r.data;
          h.each(a, function (n, i) {
            t.updateElement(n, i, e);
          });
        },
        updateElement: function (e, t, r) {
          var a = this,
            n = a.getMeta(),
            i = e.custom || {},
            o = a.getScaleForId(n.xAxisID),
            s = a.getScaleForId(n.yAxisID),
            l = a._resolveDataElementOptions(e, t),
            u = a.getDataset().data[t],
            d = a.index,
            f = r
              ? o.getPixelForDecimal(0.5)
              : o.getPixelForValue(typeof u == "object" ? u : NaN, t, d),
            c = r ? s.getBasePixel() : s.getPixelForValue(u, t, d);
          (e._xScale = o),
            (e._yScale = s),
            (e._options = l),
            (e._datasetIndex = d),
            (e._index = t),
            (e._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              rotation: l.rotation,
              radius: r ? 0 : l.radius,
              skip: i.skip || isNaN(f) || isNaN(c),
              x: f,
              y: c,
            }),
            e.pivot();
        },
        setHoverStyle: function (e) {
          var t = e._model,
            r = e._options,
            a = h.getHoverColor;
          (e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
            radius: t.radius,
          }),
            (t.backgroundColor = Mr(
              r.hoverBackgroundColor,
              a(r.backgroundColor)
            )),
            (t.borderColor = Mr(r.hoverBorderColor, a(r.borderColor))),
            (t.borderWidth = Mr(r.hoverBorderWidth, r.borderWidth)),
            (t.radius = r.radius + r.hoverRadius);
        },
        _resolveDataElementOptions: function (e, t) {
          var r = this,
            a = r.chart,
            n = r.getDataset(),
            i = e.custom || {},
            o = n.data[t] || {},
            s = F.prototype._resolveDataElementOptions.apply(r, arguments),
            l = { chart: a, dataIndex: t, dataset: n, datasetIndex: r.index };
          return (
            r._cachedDataOpts === s && (s = h.extend({}, s)),
            (s.radius = kn(
              [
                i.radius,
                o.r,
                r._config.radius,
                a.options.elements.point.radius,
              ],
              l,
              t
            )),
            s
          );
        },
      }),
      Ut = h.valueOrDefault,
      We = Math.PI,
      Pe = We * 2,
      He = We / 2;
    A._set("doughnut", {
      animation: { animateRotate: !0, animateScale: !1 },
      hover: { mode: "single" },
      legendCallback: function (e) {
        var t = document.createElement("ul"),
          r = e.data,
          a = r.datasets,
          n = r.labels,
          i,
          o,
          s,
          l;
        if ((t.setAttribute("class", e.id + "-legend"), a.length))
          for (i = 0, o = a[0].data.length; i < o; ++i)
            (s = t.appendChild(document.createElement("li"))),
              (l = s.appendChild(document.createElement("span"))),
              (l.style.backgroundColor = a[0].backgroundColor[i]),
              n[i] && s.appendChild(document.createTextNode(n[i]));
        return t.outerHTML;
      },
      legend: {
        labels: {
          generateLabels: function (e) {
            var t = e.data;
            return t.labels.length && t.datasets.length
              ? t.labels.map(function (r, a) {
                  var n = e.getDatasetMeta(0),
                    i = n.controller.getStyle(a);
                  return {
                    text: r,
                    fillStyle: i.backgroundColor,
                    strokeStyle: i.borderColor,
                    lineWidth: i.borderWidth,
                    hidden: isNaN(t.datasets[0].data[a]) || n.data[a].hidden,
                    index: a,
                  };
                })
              : [];
          },
        },
        onClick: function (e, t) {
          var r = t.index,
            a = this.chart,
            n,
            i,
            o;
          for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)
            (o = a.getDatasetMeta(n)),
              o.data[r] && (o.data[r].hidden = !o.data[r].hidden);
          a.update();
        },
      },
      cutoutPercentage: 50,
      rotation: -He,
      circumference: Pe,
      tooltips: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (e, t) {
            var r = t.labels[e.index],
              a = ": " + t.datasets[e.datasetIndex].data[e.index];
            return h.isArray(r) ? ((r = r.slice()), (r[0] += a)) : (r += a), r;
          },
        },
      },
    });
    var la = F.extend({
      dataElementType: se.Arc,
      linkScales: h.noop,
      _dataElementOptions: [
        "backgroundColor",
        "borderColor",
        "borderWidth",
        "borderAlign",
        "hoverBackgroundColor",
        "hoverBorderColor",
        "hoverBorderWidth",
      ],
      getRingIndex: function (e) {
        for (var t = 0, r = 0; r < e; ++r)
          this.chart.isDatasetVisible(r) && ++t;
        return t;
      },
      update: function (e) {
        var t = this,
          r = t.chart,
          a = r.chartArea,
          n = r.options,
          i = 1,
          o = 1,
          s = 0,
          l = 0,
          u = t.getMeta(),
          d = u.data,
          f = n.cutoutPercentage / 100 || 0,
          c = n.circumference,
          g = t._getRingWeight(t.index),
          p,
          m,
          y,
          k;
        if (c < Pe) {
          var C = n.rotation % Pe;
          C += C >= We ? -Pe : C < -We ? Pe : 0;
          var O = C + c,
            B = Math.cos(C),
            I = Math.sin(C),
            H = Math.cos(O),
            W = Math.sin(O),
            j = (C <= 0 && O >= 0) || O >= Pe,
            q = (C <= He && O >= He) || O >= Pe + He,
            X = C === -We || O >= We,
            K = (C <= -He && O >= -He) || O >= We + He,
            Y = X ? -1 : Math.min(B, B * f, H, H * f),
            ee = K ? -1 : Math.min(I, I * f, W, W * f),
            ut = j ? 1 : Math.max(B, B * f, H, H * f),
            dt = q ? 1 : Math.max(I, I * f, W, W * f);
          (i = (ut - Y) / 2),
            (o = (dt - ee) / 2),
            (s = -(ut + Y) / 2),
            (l = -(dt + ee) / 2);
        }
        for (y = 0, k = d.length; y < k; ++y)
          d[y]._options = t._resolveDataElementOptions(d[y], y);
        for (
          r.borderWidth = t.getMaxBorderWidth(),
            p = (a.right - a.left - r.borderWidth) / i,
            m = (a.bottom - a.top - r.borderWidth) / o,
            r.outerRadius = Math.max(Math.min(p, m) / 2, 0),
            r.innerRadius = Math.max(r.outerRadius * f, 0),
            r.radiusLength =
              (r.outerRadius - r.innerRadius) /
              (t._getVisibleDatasetWeightTotal() || 1),
            r.offsetX = s * r.outerRadius,
            r.offsetY = l * r.outerRadius,
            u.total = t.calculateTotal(),
            t.outerRadius =
              r.outerRadius - r.radiusLength * t._getRingWeightOffset(t.index),
            t.innerRadius = Math.max(t.outerRadius - r.radiusLength * g, 0),
            y = 0,
            k = d.length;
          y < k;
          ++y
        )
          t.updateElement(d[y], y, e);
      },
      updateElement: function (e, t, r) {
        var a = this,
          n = a.chart,
          i = n.chartArea,
          o = n.options,
          s = o.animation,
          l = (i.left + i.right) / 2,
          u = (i.top + i.bottom) / 2,
          d = o.rotation,
          f = o.rotation,
          c = a.getDataset(),
          g =
            (r && s.animateRotate) || e.hidden
              ? 0
              : a.calculateCircumference(c.data[t]) * (o.circumference / Pe),
          p = r && s.animateScale ? 0 : a.innerRadius,
          m = r && s.animateScale ? 0 : a.outerRadius,
          y = e._options || {};
        h.extend(e, {
          _datasetIndex: a.index,
          _index: t,
          _model: {
            backgroundColor: y.backgroundColor,
            borderColor: y.borderColor,
            borderWidth: y.borderWidth,
            borderAlign: y.borderAlign,
            x: l + n.offsetX,
            y: u + n.offsetY,
            startAngle: d,
            endAngle: f,
            circumference: g,
            outerRadius: m,
            innerRadius: p,
            label: h.valueAtIndexOrDefault(c.label, t, n.data.labels[t]),
          },
        });
        var k = e._model;
        (!r || !s.animateRotate) &&
          (t === 0
            ? (k.startAngle = o.rotation)
            : (k.startAngle = a.getMeta().data[t - 1]._model.endAngle),
          (k.endAngle = k.startAngle + k.circumference)),
          e.pivot();
      },
      calculateTotal: function () {
        var e = this.getDataset(),
          t = this.getMeta(),
          r = 0,
          a;
        return (
          h.each(t.data, function (n, i) {
            (a = e.data[i]), !isNaN(a) && !n.hidden && (r += Math.abs(a));
          }),
          r
        );
      },
      calculateCircumference: function (e) {
        var t = this.getMeta().total;
        return t > 0 && !isNaN(e) ? Pe * (Math.abs(e) / t) : 0;
      },
      getMaxBorderWidth: function (e) {
        var t = this,
          r = 0,
          a = t.chart,
          n,
          i,
          o,
          s,
          l,
          u,
          d,
          f;
        if (!e) {
          for (n = 0, i = a.data.datasets.length; n < i; ++n)
            if (a.isDatasetVisible(n)) {
              (o = a.getDatasetMeta(n)),
                (e = o.data),
                n !== t.index && (l = o.controller);
              break;
            }
        }
        if (!e) return 0;
        for (n = 0, i = e.length; n < i; ++n)
          (s = e[n]),
            l
              ? (l._configure(), (u = l._resolveDataElementOptions(s, n)))
              : (u = s._options),
            u.borderAlign !== "inner" &&
              ((d = u.borderWidth),
              (f = u.hoverBorderWidth),
              (r = d > r ? d : r),
              (r = f > r ? f : r));
        return r;
      },
      setHoverStyle: function (e) {
        var t = e._model,
          r = e._options,
          a = h.getHoverColor;
        (e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
        }),
          (t.backgroundColor = Ut(
            r.hoverBackgroundColor,
            a(r.backgroundColor)
          )),
          (t.borderColor = Ut(r.hoverBorderColor, a(r.borderColor))),
          (t.borderWidth = Ut(r.hoverBorderWidth, r.borderWidth));
      },
      _getRingWeightOffset: function (e) {
        for (var t = 0, r = 0; r < e; ++r)
          this.chart.isDatasetVisible(r) && (t += this._getRingWeight(r));
        return t;
      },
      _getRingWeight: function (e) {
        return Math.max(Ut(this.chart.data.datasets[e].weight, 1), 0);
      },
      _getVisibleDatasetWeightTotal: function () {
        return this._getRingWeightOffset(this.chart.data.datasets.length);
      },
    });
    A._set("horizontalBar", {
      hover: { mode: "index", axis: "y" },
      scales: {
        xAxes: [{ type: "linear", position: "bottom" }],
        yAxes: [
          {
            type: "category",
            position: "left",
            offset: !0,
            gridLines: { offsetGridLines: !0 },
          },
        ],
      },
      elements: { rectangle: { borderSkipped: "left" } },
      tooltips: { mode: "index", axis: "y" },
    }),
      A._set("global", {
        datasets: {
          horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
        },
      });
    var Mn = oa.extend({
        _getValueScaleId: function () {
          return this.getMeta().xAxisID;
        },
        _getIndexScaleId: function () {
          return this.getMeta().yAxisID;
        },
      }),
      De = h.valueOrDefault,
      Cn = h.options.resolve,
      Cr = h.canvas._isPointInArea;
    A._set("line", {
      showLines: !0,
      spanGaps: !1,
      hover: { mode: "label" },
      scales: {
        xAxes: [{ type: "category", id: "x-axis-0" }],
        yAxes: [{ type: "linear", id: "y-axis-0" }],
      },
    });
    function sa(e, t) {
      var r = (e && e.options.ticks) || {},
        a = r.reverse,
        n = r.min === void 0 ? t : 0,
        i = r.max === void 0 ? t : 0;
      return { start: a ? i : n, end: a ? n : i };
    }
    function Pn(e, t, r) {
      var a = r / 2,
        n = sa(e, a),
        i = sa(t, a);
      return { top: i.end, right: n.end, bottom: i.start, left: n.start };
    }
    function Dn(e) {
      var t, r, a, n;
      return (
        h.isObject(e)
          ? ((t = e.top), (r = e.right), (a = e.bottom), (n = e.left))
          : (t = r = a = n = e),
        { top: t, right: r, bottom: a, left: n }
      );
    }
    var ua = F.extend({
        datasetElementType: se.Line,
        dataElementType: se.Point,
        _datasetElementOptions: [
          "backgroundColor",
          "borderCapStyle",
          "borderColor",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "borderWidth",
          "cubicInterpolationMode",
          "fill",
        ],
        _dataElementOptions: {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation",
        },
        update: function (e) {
          var t = this,
            r = t.getMeta(),
            a = r.dataset,
            n = r.data || [],
            i = t.chart.options,
            o = t._config,
            s = (t._showLine = De(o.showLine, i.showLines)),
            l,
            u;
          for (
            t._xScale = t.getScaleForId(r.xAxisID),
              t._yScale = t.getScaleForId(r.yAxisID),
              s &&
                (o.tension !== void 0 &&
                  o.lineTension === void 0 &&
                  (o.lineTension = o.tension),
                (a._scale = t._yScale),
                (a._datasetIndex = t.index),
                (a._children = n),
                (a._model = t._resolveDatasetElementOptions(a)),
                a.pivot()),
              l = 0,
              u = n.length;
            l < u;
            ++l
          )
            t.updateElement(n[l], l, e);
          for (
            s && a._model.tension !== 0 && t.updateBezierControlPoints(),
              l = 0,
              u = n.length;
            l < u;
            ++l
          )
            n[l].pivot();
        },
        updateElement: function (e, t, r) {
          var a = this,
            n = a.getMeta(),
            i = e.custom || {},
            o = a.getDataset(),
            s = a.index,
            l = o.data[t],
            u = a._xScale,
            d = a._yScale,
            f = n.dataset._model,
            c,
            g,
            p = a._resolveDataElementOptions(e, t);
          (c = u.getPixelForValue(typeof l == "object" ? l : NaN, t, s)),
            (g = r ? d.getBasePixel() : a.calculatePointY(l, t, s)),
            (e._xScale = u),
            (e._yScale = d),
            (e._options = p),
            (e._datasetIndex = s),
            (e._index = t),
            (e._model = {
              x: c,
              y: g,
              skip: i.skip || isNaN(c) || isNaN(g),
              radius: p.radius,
              pointStyle: p.pointStyle,
              rotation: p.rotation,
              backgroundColor: p.backgroundColor,
              borderColor: p.borderColor,
              borderWidth: p.borderWidth,
              tension: De(i.tension, f ? f.tension : 0),
              steppedLine: f ? f.steppedLine : !1,
              hitRadius: p.hitRadius,
            });
        },
        _resolveDatasetElementOptions: function (e) {
          var t = this,
            r = t._config,
            a = e.custom || {},
            n = t.chart.options,
            i = n.elements.line,
            o = F.prototype._resolveDatasetElementOptions.apply(t, arguments);
          return (
            (o.spanGaps = De(r.spanGaps, n.spanGaps)),
            (o.tension = De(r.lineTension, i.tension)),
            (o.steppedLine = Cn([a.steppedLine, r.steppedLine, i.stepped])),
            (o.clip = Dn(De(r.clip, Pn(t._xScale, t._yScale, o.borderWidth)))),
            o
          );
        },
        calculatePointY: function (e, t, r) {
          var a = this,
            n = a.chart,
            i = a._yScale,
            o = 0,
            s = 0,
            l,
            u,
            d,
            f,
            c,
            g,
            p;
          if (i.options.stacked) {
            for (
              c = +i.getRightValue(e),
                g = n._getSortedVisibleDatasetMetas(),
                p = g.length,
                l = 0;
              l < p && ((d = g[l]), d.index !== r);
              ++l
            )
              (u = n.data.datasets[d.index]),
                d.type === "line" &&
                  d.yAxisID === i.id &&
                  ((f = +i.getRightValue(u.data[t])),
                  f < 0 ? (s += f || 0) : (o += f || 0));
            return c < 0
              ? i.getPixelForValue(s + c)
              : i.getPixelForValue(o + c);
          }
          return i.getPixelForValue(e);
        },
        updateBezierControlPoints: function () {
          var e = this,
            t = e.chart,
            r = e.getMeta(),
            a = r.dataset._model,
            n = t.chartArea,
            i = r.data || [],
            o,
            s,
            l,
            u;
          a.spanGaps &&
            (i = i.filter(function (f) {
              return !f._model.skip;
            }));
          function d(f, c, g) {
            return Math.max(Math.min(f, g), c);
          }
          if (a.cubicInterpolationMode === "monotone") h.splineCurveMonotone(i);
          else
            for (o = 0, s = i.length; o < s; ++o)
              (l = i[o]._model),
                (u = h.splineCurve(
                  h.previousItem(i, o)._model,
                  l,
                  h.nextItem(i, o)._model,
                  a.tension
                )),
                (l.controlPointPreviousX = u.previous.x),
                (l.controlPointPreviousY = u.previous.y),
                (l.controlPointNextX = u.next.x),
                (l.controlPointNextY = u.next.y);
          if (t.options.elements.line.capBezierPoints)
            for (o = 0, s = i.length; o < s; ++o)
              (l = i[o]._model),
                Cr(l, n) &&
                  (o > 0 &&
                    Cr(i[o - 1]._model, n) &&
                    ((l.controlPointPreviousX = d(
                      l.controlPointPreviousX,
                      n.left,
                      n.right
                    )),
                    (l.controlPointPreviousY = d(
                      l.controlPointPreviousY,
                      n.top,
                      n.bottom
                    ))),
                  o < i.length - 1 &&
                    Cr(i[o + 1]._model, n) &&
                    ((l.controlPointNextX = d(
                      l.controlPointNextX,
                      n.left,
                      n.right
                    )),
                    (l.controlPointNextY = d(
                      l.controlPointNextY,
                      n.top,
                      n.bottom
                    ))));
        },
        draw: function () {
          var e = this,
            t = e.chart,
            r = e.getMeta(),
            a = r.data || [],
            n = t.chartArea,
            i = t.canvas,
            o = 0,
            s = a.length,
            l;
          for (
            e._showLine &&
            ((l = r.dataset._model.clip),
            h.canvas.clipArea(t.ctx, {
              left: l.left === !1 ? 0 : n.left - l.left,
              right: l.right === !1 ? i.width : n.right + l.right,
              top: l.top === !1 ? 0 : n.top - l.top,
              bottom: l.bottom === !1 ? i.height : n.bottom + l.bottom,
            }),
            r.dataset.draw(),
            h.canvas.unclipArea(t.ctx));
            o < s;
            ++o
          )
            a[o].draw(n);
        },
        setHoverStyle: function (e) {
          var t = e._model,
            r = e._options,
            a = h.getHoverColor;
          (e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
            radius: t.radius,
          }),
            (t.backgroundColor = De(
              r.hoverBackgroundColor,
              a(r.backgroundColor)
            )),
            (t.borderColor = De(r.hoverBorderColor, a(r.borderColor))),
            (t.borderWidth = De(r.hoverBorderWidth, r.borderWidth)),
            (t.radius = De(r.hoverRadius, r.radius));
        },
      }),
      On = h.options.resolve;
    A._set("polarArea", {
      scale: {
        type: "radialLinear",
        angleLines: { display: !1 },
        gridLines: { circular: !0 },
        pointLabels: { display: !1 },
        ticks: { beginAtZero: !0 },
      },
      animation: { animateRotate: !0, animateScale: !0 },
      startAngle: -0.5 * Math.PI,
      legendCallback: function (e) {
        var t = document.createElement("ul"),
          r = e.data,
          a = r.datasets,
          n = r.labels,
          i,
          o,
          s,
          l;
        if ((t.setAttribute("class", e.id + "-legend"), a.length))
          for (i = 0, o = a[0].data.length; i < o; ++i)
            (s = t.appendChild(document.createElement("li"))),
              (l = s.appendChild(document.createElement("span"))),
              (l.style.backgroundColor = a[0].backgroundColor[i]),
              n[i] && s.appendChild(document.createTextNode(n[i]));
        return t.outerHTML;
      },
      legend: {
        labels: {
          generateLabels: function (e) {
            var t = e.data;
            return t.labels.length && t.datasets.length
              ? t.labels.map(function (r, a) {
                  var n = e.getDatasetMeta(0),
                    i = n.controller.getStyle(a);
                  return {
                    text: r,
                    fillStyle: i.backgroundColor,
                    strokeStyle: i.borderColor,
                    lineWidth: i.borderWidth,
                    hidden: isNaN(t.datasets[0].data[a]) || n.data[a].hidden,
                    index: a,
                  };
                })
              : [];
          },
        },
        onClick: function (e, t) {
          var r = t.index,
            a = this.chart,
            n,
            i,
            o;
          for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)
            (o = a.getDatasetMeta(n)), (o.data[r].hidden = !o.data[r].hidden);
          a.update();
        },
      },
      tooltips: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (e, t) {
            return t.labels[e.index] + ": " + e.yLabel;
          },
        },
      },
    });
    var An = F.extend({
      dataElementType: se.Arc,
      linkScales: h.noop,
      _dataElementOptions: [
        "backgroundColor",
        "borderColor",
        "borderWidth",
        "borderAlign",
        "hoverBackgroundColor",
        "hoverBorderColor",
        "hoverBorderWidth",
      ],
      _getIndexScaleId: function () {
        return this.chart.scale.id;
      },
      _getValueScaleId: function () {
        return this.chart.scale.id;
      },
      update: function (e) {
        var t = this,
          r = t.getDataset(),
          a = t.getMeta(),
          n = t.chart.options.startAngle || 0,
          i = (t._starts = []),
          o = (t._angles = []),
          s = a.data,
          l,
          u,
          d;
        for (
          t._updateRadius(),
            a.count = t.countVisibleElements(),
            l = 0,
            u = r.data.length;
          l < u;
          l++
        )
          (i[l] = n), (d = t._computeAngle(l)), (o[l] = d), (n += d);
        for (l = 0, u = s.length; l < u; ++l)
          (s[l]._options = t._resolveDataElementOptions(s[l], l)),
            t.updateElement(s[l], l, e);
      },
      _updateRadius: function () {
        var e = this,
          t = e.chart,
          r = t.chartArea,
          a = t.options,
          n = Math.min(r.right - r.left, r.bottom - r.top);
        (t.outerRadius = Math.max(n / 2, 0)),
          (t.innerRadius = Math.max(
            a.cutoutPercentage ? (t.outerRadius / 100) * a.cutoutPercentage : 1,
            0
          )),
          (t.radiusLength =
            (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount()),
          (e.outerRadius = t.outerRadius - t.radiusLength * e.index),
          (e.innerRadius = e.outerRadius - t.radiusLength);
      },
      updateElement: function (e, t, r) {
        var a = this,
          n = a.chart,
          i = a.getDataset(),
          o = n.options,
          s = o.animation,
          l = n.scale,
          u = n.data.labels,
          d = l.xCenter,
          f = l.yCenter,
          c = o.startAngle,
          g = e.hidden ? 0 : l.getDistanceFromCenterForValue(i.data[t]),
          p = a._starts[t],
          m = p + (e.hidden ? 0 : a._angles[t]),
          y = s.animateScale ? 0 : l.getDistanceFromCenterForValue(i.data[t]),
          k = e._options || {};
        h.extend(e, {
          _datasetIndex: a.index,
          _index: t,
          _scale: l,
          _model: {
            backgroundColor: k.backgroundColor,
            borderColor: k.borderColor,
            borderWidth: k.borderWidth,
            borderAlign: k.borderAlign,
            x: d,
            y: f,
            innerRadius: 0,
            outerRadius: r ? y : g,
            startAngle: r && s.animateRotate ? c : p,
            endAngle: r && s.animateRotate ? c : m,
            label: h.valueAtIndexOrDefault(u, t, u[t]),
          },
        }),
          e.pivot();
      },
      countVisibleElements: function () {
        var e = this.getDataset(),
          t = this.getMeta(),
          r = 0;
        return (
          h.each(t.data, function (a, n) {
            !isNaN(e.data[n]) && !a.hidden && r++;
          }),
          r
        );
      },
      setHoverStyle: function (e) {
        var t = e._model,
          r = e._options,
          a = h.getHoverColor,
          n = h.valueOrDefault;
        (e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
        }),
          (t.backgroundColor = n(r.hoverBackgroundColor, a(r.backgroundColor))),
          (t.borderColor = n(r.hoverBorderColor, a(r.borderColor))),
          (t.borderWidth = n(r.hoverBorderWidth, r.borderWidth));
      },
      _computeAngle: function (e) {
        var t = this,
          r = this.getMeta().count,
          a = t.getDataset(),
          n = t.getMeta();
        if (isNaN(a.data[e]) || n.data[e].hidden) return 0;
        var i = {
          chart: t.chart,
          dataIndex: e,
          dataset: a,
          datasetIndex: t.index,
        };
        return On(
          [t.chart.options.elements.arc.angle, (2 * Math.PI) / r],
          i,
          e
        );
      },
    });
    A._set("pie", h.clone(A.doughnut)), A._set("pie", { cutoutPercentage: 0 });
    var Tn = la,
      Ve = h.valueOrDefault;
    A._set("radar", {
      spanGaps: !1,
      scale: { type: "radialLinear" },
      elements: { line: { fill: "start", tension: 0 } },
    });
    var Fn = F.extend({
      datasetElementType: se.Line,
      dataElementType: se.Point,
      linkScales: h.noop,
      _datasetElementOptions: [
        "backgroundColor",
        "borderWidth",
        "borderColor",
        "borderCapStyle",
        "borderDash",
        "borderDashOffset",
        "borderJoinStyle",
        "fill",
      ],
      _dataElementOptions: {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation",
      },
      _getIndexScaleId: function () {
        return this.chart.scale.id;
      },
      _getValueScaleId: function () {
        return this.chart.scale.id;
      },
      update: function (e) {
        var t = this,
          r = t.getMeta(),
          a = r.dataset,
          n = r.data || [],
          i = t.chart.scale,
          o = t._config,
          s,
          l;
        for (
          o.tension !== void 0 &&
            o.lineTension === void 0 &&
            (o.lineTension = o.tension),
            a._scale = i,
            a._datasetIndex = t.index,
            a._children = n,
            a._loop = !0,
            a._model = t._resolveDatasetElementOptions(a),
            a.pivot(),
            s = 0,
            l = n.length;
          s < l;
          ++s
        )
          t.updateElement(n[s], s, e);
        for (t.updateBezierControlPoints(), s = 0, l = n.length; s < l; ++s)
          n[s].pivot();
      },
      updateElement: function (e, t, r) {
        var a = this,
          n = e.custom || {},
          i = a.getDataset(),
          o = a.chart.scale,
          s = o.getPointPositionForValue(t, i.data[t]),
          l = a._resolveDataElementOptions(e, t),
          u = a.getMeta().dataset._model,
          d = r ? o.xCenter : s.x,
          f = r ? o.yCenter : s.y;
        (e._scale = o),
          (e._options = l),
          (e._datasetIndex = a.index),
          (e._index = t),
          (e._model = {
            x: d,
            y: f,
            skip: n.skip || isNaN(d) || isNaN(f),
            radius: l.radius,
            pointStyle: l.pointStyle,
            rotation: l.rotation,
            backgroundColor: l.backgroundColor,
            borderColor: l.borderColor,
            borderWidth: l.borderWidth,
            tension: Ve(n.tension, u ? u.tension : 0),
            hitRadius: l.hitRadius,
          });
      },
      _resolveDatasetElementOptions: function () {
        var e = this,
          t = e._config,
          r = e.chart.options,
          a = F.prototype._resolveDatasetElementOptions.apply(e, arguments);
        return (
          (a.spanGaps = Ve(t.spanGaps, r.spanGaps)),
          (a.tension = Ve(t.lineTension, r.elements.line.tension)),
          a
        );
      },
      updateBezierControlPoints: function () {
        var e = this,
          t = e.getMeta(),
          r = e.chart.chartArea,
          a = t.data || [],
          n,
          i,
          o,
          s;
        t.dataset._model.spanGaps &&
          (a = a.filter(function (u) {
            return !u._model.skip;
          }));
        function l(u, d, f) {
          return Math.max(Math.min(u, f), d);
        }
        for (n = 0, i = a.length; n < i; ++n)
          (o = a[n]._model),
            (s = h.splineCurve(
              h.previousItem(a, n, !0)._model,
              o,
              h.nextItem(a, n, !0)._model,
              o.tension
            )),
            (o.controlPointPreviousX = l(s.previous.x, r.left, r.right)),
            (o.controlPointPreviousY = l(s.previous.y, r.top, r.bottom)),
            (o.controlPointNextX = l(s.next.x, r.left, r.right)),
            (o.controlPointNextY = l(s.next.y, r.top, r.bottom));
      },
      setHoverStyle: function (e) {
        var t = e._model,
          r = e._options,
          a = h.getHoverColor;
        (e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
          radius: t.radius,
        }),
          (t.backgroundColor = Ve(
            r.hoverBackgroundColor,
            a(r.backgroundColor)
          )),
          (t.borderColor = Ve(r.hoverBorderColor, a(r.borderColor))),
          (t.borderWidth = Ve(r.hoverBorderWidth, r.borderWidth)),
          (t.radius = Ve(r.hoverRadius, r.radius));
      },
    });
    A._set("scatter", {
      hover: { mode: "single" },
      scales: {
        xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
        yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
      },
      tooltips: {
        callbacks: {
          title: function () {
            return "";
          },
          label: function (e) {
            return "(" + e.xLabel + ", " + e.yLabel + ")";
          },
        },
      },
    }),
      A._set("global", { datasets: { scatter: { showLine: !1 } } });
    var In = ua,
      da = {
        bar: oa,
        bubble: Sn,
        doughnut: la,
        horizontalBar: Mn,
        line: ua,
        polarArea: An,
        pie: Tn,
        radar: Fn,
        scatter: In,
      };
    function je(e, t) {
      return e.native ? { x: e.x, y: e.y } : h.getRelativePosition(e, t);
    }
    function wt(e, t) {
      var r = e._getSortedVisibleDatasetMetas(),
        a,
        n,
        i,
        o,
        s,
        l;
      for (n = 0, o = r.length; n < o; ++n)
        for (a = r[n].data, i = 0, s = a.length; i < s; ++i)
          (l = a[i]), l._view.skip || t(l);
    }
    function Pr(e, t) {
      var r = [];
      return (
        wt(e, function (a) {
          a.inRange(t.x, t.y) && r.push(a);
        }),
        r
      );
    }
    function Dr(e, t, r, a) {
      var n = Number.POSITIVE_INFINITY,
        i = [];
      return (
        wt(e, function (o) {
          if (!(r && !o.inRange(t.x, t.y))) {
            var s = o.getCenterPoint(),
              l = a(t, s);
            l < n ? ((i = [o]), (n = l)) : l === n && i.push(o);
          }
        }),
        i
      );
    }
    function Or(e) {
      var t = e.indexOf("x") !== -1,
        r = e.indexOf("y") !== -1;
      return function (a, n) {
        var i = t ? Math.abs(a.x - n.x) : 0,
          o = r ? Math.abs(a.y - n.y) : 0;
        return Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
      };
    }
    function Ar(e, t, r) {
      var a = je(t, e);
      r.axis = r.axis || "x";
      var n = Or(r.axis),
        i = r.intersect ? Pr(e, a) : Dr(e, a, !1, n),
        o = [];
      return i.length
        ? (e._getSortedVisibleDatasetMetas().forEach(function (s) {
            var l = s.data[i[0]._index];
            l && !l._view.skip && o.push(l);
          }),
          o)
        : [];
    }
    var it = {
        modes: {
          single: function (e, t) {
            var r = je(t, e),
              a = [];
            return (
              wt(e, function (n) {
                if (n.inRange(r.x, r.y)) return a.push(n), a;
              }),
              a.slice(0, 1)
            );
          },
          label: Ar,
          index: Ar,
          dataset: function (e, t, r) {
            var a = je(t, e);
            r.axis = r.axis || "xy";
            var n = Or(r.axis),
              i = r.intersect ? Pr(e, a) : Dr(e, a, !1, n);
            return (
              i.length > 0 && (i = e.getDatasetMeta(i[0]._datasetIndex).data), i
            );
          },
          "x-axis": function (e, t) {
            return Ar(e, t, { intersect: !1 });
          },
          point: function (e, t) {
            var r = je(t, e);
            return Pr(e, r);
          },
          nearest: function (e, t, r) {
            var a = je(t, e);
            r.axis = r.axis || "xy";
            var n = Or(r.axis);
            return Dr(e, a, r.intersect, n);
          },
          x: function (e, t, r) {
            var a = je(t, e),
              n = [],
              i = !1;
            return (
              wt(e, function (o) {
                o.inXRange(a.x) && n.push(o), o.inRange(a.x, a.y) && (i = !0);
              }),
              r.intersect && !i && (n = []),
              n
            );
          },
          y: function (e, t, r) {
            var a = je(t, e),
              n = [],
              i = !1;
            return (
              wt(e, function (o) {
                o.inYRange(a.y) && n.push(o), o.inRange(a.x, a.y) && (i = !0);
              }),
              r.intersect && !i && (n = []),
              n
            );
          },
        },
      },
      Tr = h.extend;
    function kt(e, t) {
      return h.where(e, function (r) {
        return r.pos === t;
      });
    }
    function Yt(e, t) {
      return e.sort(function (r, a) {
        var n = t ? a : r,
          i = t ? r : a;
        return n.weight === i.weight ? n.index - i.index : n.weight - i.weight;
      });
    }
    function Ln(e) {
      var t = [],
        r,
        a,
        n;
      for (r = 0, a = (e || []).length; r < a; ++r)
        (n = e[r]),
          t.push({
            index: r,
            box: n,
            pos: n.position,
            horizontal: n.isHorizontal(),
            weight: n.weight,
          });
      return t;
    }
    function Bn(e, t) {
      var r, a, n;
      for (r = 0, a = e.length; r < a; ++r)
        (n = e[r]),
          (n.width = n.horizontal
            ? n.box.fullWidth && t.availableWidth
            : t.vBoxMaxWidth),
          (n.height = n.horizontal && t.hBoxMaxHeight);
    }
    function Rn(e) {
      var t = Ln(e),
        r = Yt(kt(t, "left"), !0),
        a = Yt(kt(t, "right")),
        n = Yt(kt(t, "top"), !0),
        i = Yt(kt(t, "bottom"));
      return {
        leftAndTop: r.concat(n),
        rightAndBottom: a.concat(i),
        chartArea: kt(t, "chartArea"),
        vertical: r.concat(a),
        horizontal: n.concat(i),
      };
    }
    function fa(e, t, r, a) {
      return Math.max(e[r], t[r]) + Math.max(e[a], t[a]);
    }
    function Nn(e, t, r) {
      var a = r.box,
        n = e.maxPadding,
        i,
        o;
      if (
        (r.size && (e[r.pos] -= r.size),
        (r.size = r.horizontal ? a.height : a.width),
        (e[r.pos] += r.size),
        a.getPadding)
      ) {
        var s = a.getPadding();
        (n.top = Math.max(n.top, s.top)),
          (n.left = Math.max(n.left, s.left)),
          (n.bottom = Math.max(n.bottom, s.bottom)),
          (n.right = Math.max(n.right, s.right));
      }
      if (
        ((i = t.outerWidth - fa(n, e, "left", "right")),
        (o = t.outerHeight - fa(n, e, "top", "bottom")),
        i !== e.w || o !== e.h)
      ) {
        (e.w = i), (e.h = o);
        var l = r.horizontal ? [i, e.w] : [o, e.h];
        return l[0] !== l[1] && (!isNaN(l[0]) || !isNaN(l[1]));
      }
    }
    function En(e) {
      var t = e.maxPadding;
      function r(a) {
        var n = Math.max(t[a] - e[a], 0);
        return (e[a] += n), n;
      }
      (e.y += r("top")), (e.x += r("left")), r("right"), r("bottom");
    }
    function zn(e, t) {
      var r = t.maxPadding;
      function a(n) {
        var i = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
          n.forEach(function (o) {
            i[o] = Math.max(t[o], r[o]);
          }),
          i
        );
      }
      return a(e ? ["left", "right"] : ["top", "bottom"]);
    }
    function Kt(e, t, r) {
      var a = [],
        n,
        i,
        o,
        s,
        l,
        u;
      for (n = 0, i = e.length; n < i; ++n)
        (o = e[n]),
          (s = o.box),
          s.update(o.width || t.w, o.height || t.h, zn(o.horizontal, t)),
          Nn(t, r, o) && ((u = !0), a.length && (l = !0)),
          s.fullWidth || a.push(o);
      return (l && Kt(a, t, r)) || u;
    }
    function ha(e, t, r) {
      var a = r.padding,
        n = t.x,
        i = t.y,
        o,
        s,
        l,
        u;
      for (o = 0, s = e.length; o < s; ++o)
        (l = e[o]),
          (u = l.box),
          l.horizontal
            ? ((u.left = u.fullWidth ? a.left : t.left),
              (u.right = u.fullWidth ? r.outerWidth - a.right : t.left + t.w),
              (u.top = i),
              (u.bottom = i + u.height),
              (u.width = u.right - u.left),
              (i = u.bottom))
            : ((u.left = n),
              (u.right = n + u.width),
              (u.top = t.top),
              (u.bottom = t.top + t.h),
              (u.height = u.bottom - u.top),
              (n = u.right));
      (t.x = n), (t.y = i);
    }
    A._set("global", {
      layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
    });
    var pe = {
        defaults: {},
        addBox: function (e, t) {
          e.boxes || (e.boxes = []),
            (t.fullWidth = t.fullWidth || !1),
            (t.position = t.position || "top"),
            (t.weight = t.weight || 0),
            (t._layers =
              t._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw: function () {
                      t.draw.apply(t, arguments);
                    },
                  },
                ];
              }),
            e.boxes.push(t);
        },
        removeBox: function (e, t) {
          var r = e.boxes ? e.boxes.indexOf(t) : -1;
          r !== -1 && e.boxes.splice(r, 1);
        },
        configure: function (e, t, r) {
          for (
            var a = ["fullWidth", "position", "weight"], n = a.length, i = 0, o;
            i < n;
            ++i
          )
            (o = a[i]), r.hasOwnProperty(o) && (t[o] = r[o]);
        },
        update: function (e, t, r) {
          if (!!e) {
            var a = e.options.layout || {},
              n = h.options.toPadding(a.padding),
              i = t - n.width,
              o = r - n.height,
              s = Rn(e.boxes),
              l = s.vertical,
              u = s.horizontal,
              d = Object.freeze({
                outerWidth: t,
                outerHeight: r,
                padding: n,
                availableWidth: i,
                vBoxMaxWidth: i / 2 / l.length,
                hBoxMaxHeight: o / 2,
              }),
              f = Tr(
                { maxPadding: Tr({}, n), w: i, h: o, x: n.left, y: n.top },
                n
              );
            Bn(l.concat(u), d),
              Kt(l, f, d),
              Kt(u, f, d) && Kt(l, f, d),
              En(f),
              ha(s.leftAndTop, f, d),
              (f.x += f.w),
              (f.y += f.h),
              ha(s.rightAndBottom, f, d),
              (e.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
              }),
              h.each(s.chartArea, function (c) {
                var g = c.box;
                Tr(g, e.chartArea), g.update(f.w, f.h);
              });
          }
        },
      },
      Wn = {
        acquireContext: function (e) {
          return (
            e && e.canvas && (e = e.canvas), (e && e.getContext("2d")) || null
          );
        },
      },
      Hn = `/*\r
 * DOM element rendering detection\r
 * https://davidwalsh.name/detect-node-insertion\r
 */\r
@keyframes chartjs-render-animation {\r
	from { opacity: 0.99; }\r
	to { opacity: 1; }\r
}\r
\r
.chartjs-render-monitor {\r
	animation: chartjs-render-animation 0.001s;\r
}\r
\r
/*\r
 * DOM element resizing detection\r
 * https://github.com/marcj/css-element-queries\r
 */\r
.chartjs-size-monitor,\r
.chartjs-size-monitor-expand,\r
.chartjs-size-monitor-shrink {\r
	position: absolute;\r
	direction: ltr;\r
	left: 0;\r
	top: 0;\r
	right: 0;\r
	bottom: 0;\r
	overflow: hidden;\r
	pointer-events: none;\r
	visibility: hidden;\r
	z-index: -1;\r
}\r
\r
.chartjs-size-monitor-expand > div {\r
	position: absolute;\r
	width: 1000000px;\r
	height: 1000000px;\r
	left: 0;\r
	top: 0;\r
}\r
\r
.chartjs-size-monitor-shrink > div {\r
	position: absolute;\r
	width: 200%;\r
	height: 200%;\r
	left: 0;\r
	top: 0;\r
}\r
`,
      Vn = Object.freeze({ __proto__: null, default: Hn }),
      jn = ke(Vn),
      ie = "$chartjs",
      Fr = "chartjs-",
      Ir = Fr + "size-monitor",
      ca = Fr + "render-monitor",
      $n = Fr + "render-animation",
      va = ["animationstart", "webkitAnimationStart"],
      qn = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
      };
    function ga(e, t) {
      var r = h.getStyle(e, t),
        a = r && r.match(/^(\d+)(\.\d+)?px$/);
      return a ? Number(a[1]) : void 0;
    }
    function Gn(e, t) {
      var r = e.style,
        a = e.getAttribute("height"),
        n = e.getAttribute("width");
      if (
        ((e[ie] = {
          initial: {
            height: a,
            width: n,
            style: { display: r.display, height: r.height, width: r.width },
          },
        }),
        (r.display = r.display || "block"),
        n === null || n === "")
      ) {
        var i = ga(e, "width");
        i !== void 0 && (e.width = i);
      }
      if (a === null || a === "")
        if (e.style.height === "")
          e.height = e.width / (t.options.aspectRatio || 2);
        else {
          var o = ga(e, "height");
          i !== void 0 && (e.height = o);
        }
      return e;
    }
    var Un = (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          window.addEventListener("e", null, t);
        } catch {}
        return e;
      })(),
      pa = Un ? { passive: !0 } : !1;
    function St(e, t, r) {
      e.addEventListener(t, r, pa);
    }
    function Lr(e, t, r) {
      e.removeEventListener(t, r, pa);
    }
    function Br(e, t, r, a, n) {
      return {
        type: e,
        chart: t,
        native: n || null,
        x: r !== void 0 ? r : null,
        y: a !== void 0 ? a : null,
      };
    }
    function Yn(e, t) {
      var r = qn[e.type] || e.type,
        a = h.getRelativePosition(e, t);
      return Br(r, t, a.x, a.y, e);
    }
    function Kn(e, t) {
      var r = !1,
        a = [];
      return function () {
        (a = Array.prototype.slice.call(arguments)),
          (t = t || this),
          r ||
            ((r = !0),
            h.requestAnimFrame.call(window, function () {
              (r = !1), e.apply(t, a);
            }));
      };
    }
    function Mt(e) {
      var t = document.createElement("div");
      return (t.className = e || ""), t;
    }
    function Xn(e) {
      var t = 1e6,
        r = Mt(Ir),
        a = Mt(Ir + "-expand"),
        n = Mt(Ir + "-shrink");
      a.appendChild(Mt()),
        n.appendChild(Mt()),
        r.appendChild(a),
        r.appendChild(n),
        (r._reset = function () {
          (a.scrollLeft = t),
            (a.scrollTop = t),
            (n.scrollLeft = t),
            (n.scrollTop = t);
        });
      var i = function () {
        r._reset(), e();
      };
      return (
        St(a, "scroll", i.bind(a, "expand")),
        St(n, "scroll", i.bind(n, "shrink")),
        r
      );
    }
    function Zn(e, t) {
      var r = e[ie] || (e[ie] = {}),
        a = (r.renderProxy = function (n) {
          n.animationName === $n && t();
        });
      h.each(va, function (n) {
        St(e, n, a);
      }),
        (r.reflow = !!e.offsetParent),
        e.classList.add(ca);
    }
    function Qn(e) {
      var t = e[ie] || {},
        r = t.renderProxy;
      r &&
        (h.each(va, function (a) {
          Lr(e, a, r);
        }),
        delete t.renderProxy),
        e.classList.remove(ca);
    }
    function Jn(e, t, r) {
      var a = e[ie] || (e[ie] = {}),
        n = (a.resizer = Xn(
          Kn(function () {
            if (a.resizer) {
              var i = r.options.maintainAspectRatio && e.parentNode,
                o = i ? i.clientWidth : 0;
              t(Br("resize", r)),
                i && i.clientWidth < o && r.canvas && t(Br("resize", r));
            }
          })
        ));
      Zn(e, function () {
        if (a.resizer) {
          var i = e.parentNode;
          i && i !== n.parentNode && i.insertBefore(n, i.firstChild),
            n._reset();
        }
      });
    }
    function ei(e) {
      var t = e[ie] || {},
        r = t.resizer;
      delete t.resizer, Qn(e), r && r.parentNode && r.parentNode.removeChild(r);
    }
    function ti(e, t) {
      var r = e[ie] || (e[ie] = {});
      if (!r.containsStyles) {
        (r.containsStyles = !0),
          (t =
            `/* Chart.js */
` + t);
        var a = document.createElement("style");
        a.setAttribute("type", "text/css"),
          a.appendChild(document.createTextNode(t)),
          e.appendChild(a);
      }
    }
    var ma = {
      disableCSSInjection: !1,
      _enabled: typeof window != "undefined" && typeof document != "undefined",
      _ensureLoaded: function (e) {
        if (!this.disableCSSInjection) {
          var t = e.getRootNode ? e.getRootNode() : document,
            r = t.host ? t : document.head;
          ti(r, jn);
        }
      },
      acquireContext: function (e, t) {
        typeof e == "string"
          ? (e = document.getElementById(e))
          : e.length && (e = e[0]),
          e && e.canvas && (e = e.canvas);
        var r = e && e.getContext && e.getContext("2d");
        return r && r.canvas === e
          ? (this._ensureLoaded(e), Gn(e, t), r)
          : null;
      },
      releaseContext: function (e) {
        var t = e.canvas;
        if (!!t[ie]) {
          var r = t[ie].initial;
          ["height", "width"].forEach(function (a) {
            var n = r[a];
            h.isNullOrUndef(n) ? t.removeAttribute(a) : t.setAttribute(a, n);
          }),
            h.each(r.style || {}, function (a, n) {
              t.style[n] = a;
            }),
            (t.width = t.width),
            delete t[ie];
        }
      },
      addEventListener: function (e, t, r) {
        var a = e.canvas;
        if (t === "resize") {
          Jn(a, r, e);
          return;
        }
        var n = r[ie] || (r[ie] = {}),
          i = n.proxies || (n.proxies = {}),
          o = (i[e.id + "_" + t] = function (s) {
            r(Yn(s, e));
          });
        St(a, t, o);
      },
      removeEventListener: function (e, t, r) {
        var a = e.canvas;
        if (t === "resize") {
          ei(a);
          return;
        }
        var n = r[ie] || {},
          i = n.proxies || {},
          o = i[e.id + "_" + t];
        !o || Lr(a, t, o);
      },
    };
    (h.addEvent = St), (h.removeEvent = Lr);
    var ri = ma._enabled ? ma : Wn,
      ot = h.extend(
        {
          initialize: function () {},
          acquireContext: function () {},
          releaseContext: function () {},
          addEventListener: function () {},
          removeEventListener: function () {},
        },
        ri
      );
    A._set("global", { plugins: {} });
    var $ = {
        _plugins: [],
        _cacheId: 0,
        register: function (e) {
          var t = this._plugins;
          [].concat(e).forEach(function (r) {
            t.indexOf(r) === -1 && t.push(r);
          }),
            this._cacheId++;
        },
        unregister: function (e) {
          var t = this._plugins;
          [].concat(e).forEach(function (r) {
            var a = t.indexOf(r);
            a !== -1 && t.splice(a, 1);
          }),
            this._cacheId++;
        },
        clear: function () {
          (this._plugins = []), this._cacheId++;
        },
        count: function () {
          return this._plugins.length;
        },
        getAll: function () {
          return this._plugins;
        },
        notify: function (e, t, r) {
          var a = this.descriptors(e),
            n = a.length,
            i,
            o,
            s,
            l,
            u;
          for (i = 0; i < n; ++i)
            if (
              ((o = a[i]),
              (s = o.plugin),
              (u = s[t]),
              typeof u == "function" &&
                ((l = [e].concat(r || [])),
                l.push(o.options),
                u.apply(s, l) === !1))
            )
              return !1;
          return !0;
        },
        descriptors: function (e) {
          var t = e.$plugins || (e.$plugins = {});
          if (t.id === this._cacheId) return t.descriptors;
          var r = [],
            a = [],
            n = (e && e.config) || {},
            i = (n.options && n.options.plugins) || {};
          return (
            this._plugins.concat(n.plugins || []).forEach(function (o) {
              var s = r.indexOf(o);
              if (s === -1) {
                var l = o.id,
                  u = i[l];
                u !== !1 &&
                  (u === !0 && (u = h.clone(A.global.plugins[l])),
                  r.push(o),
                  a.push({ plugin: o, options: u || {} }));
              }
            }),
            (t.descriptors = a),
            (t.id = this._cacheId),
            a
          );
        },
        _invalidate: function (e) {
          delete e.$plugins;
        },
      },
      Ct = {
        constructors: {},
        defaults: {},
        registerScaleType: function (e, t, r) {
          (this.constructors[e] = t), (this.defaults[e] = h.clone(r));
        },
        getScaleConstructor: function (e) {
          return this.constructors.hasOwnProperty(e)
            ? this.constructors[e]
            : void 0;
        },
        getScaleDefaults: function (e) {
          return this.defaults.hasOwnProperty(e)
            ? h.merge(Object.create(null), [A.scale, this.defaults[e]])
            : {};
        },
        updateScaleDefaults: function (e, t) {
          var r = this;
          r.defaults.hasOwnProperty(e) &&
            (r.defaults[e] = h.extend(r.defaults[e], t));
        },
        addScalesToLayout: function (e) {
          h.each(e.scales, function (t) {
            (t.fullWidth = t.options.fullWidth),
              (t.position = t.options.position),
              (t.weight = t.options.weight),
              pe.addBox(e, t);
          });
        },
      },
      Oe = h.valueOrDefault,
      Rr = h.rtl.getRtlAdapter;
    A._set("global", {
      tooltips: {
        enabled: !0,
        custom: null,
        mode: "nearest",
        position: "average",
        intersect: !0,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFontStyle: "bold",
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleFontColor: "#fff",
        titleAlign: "left",
        bodySpacing: 2,
        bodyFontColor: "#fff",
        bodyAlign: "left",
        footerFontStyle: "bold",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFontColor: "#fff",
        footerAlign: "left",
        yPadding: 6,
        xPadding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        multiKeyBackground: "#fff",
        displayColors: !0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        callbacks: {
          beforeTitle: h.noop,
          title: function (e, t) {
            var r = "",
              a = t.labels,
              n = a ? a.length : 0;
            if (e.length > 0) {
              var i = e[0];
              i.label
                ? (r = i.label)
                : i.xLabel
                ? (r = i.xLabel)
                : n > 0 && i.index < n && (r = a[i.index]);
            }
            return r;
          },
          afterTitle: h.noop,
          beforeBody: h.noop,
          beforeLabel: h.noop,
          label: function (e, t) {
            var r = t.datasets[e.datasetIndex].label || "";
            return (
              r && (r += ": "),
              h.isNullOrUndef(e.value) ? (r += e.yLabel) : (r += e.value),
              r
            );
          },
          labelColor: function (e, t) {
            var r = t.getDatasetMeta(e.datasetIndex),
              a = r.data[e.index],
              n = a._view;
            return {
              borderColor: n.borderColor,
              backgroundColor: n.backgroundColor,
            };
          },
          labelTextColor: function () {
            return this._options.bodyFontColor;
          },
          afterLabel: h.noop,
          afterBody: h.noop,
          beforeFooter: h.noop,
          footer: h.noop,
          afterFooter: h.noop,
        },
      },
    });
    var ba = {
      average: function (e) {
        if (!e.length) return !1;
        var t,
          r,
          a = 0,
          n = 0,
          i = 0;
        for (t = 0, r = e.length; t < r; ++t) {
          var o = e[t];
          if (o && o.hasValue()) {
            var s = o.tooltipPosition();
            (a += s.x), (n += s.y), ++i;
          }
        }
        return { x: a / i, y: n / i };
      },
      nearest: function (e, t) {
        var r = t.x,
          a = t.y,
          n = Number.POSITIVE_INFINITY,
          i,
          o,
          s;
        for (i = 0, o = e.length; i < o; ++i) {
          var l = e[i];
          if (l && l.hasValue()) {
            var u = l.getCenterPoint(),
              d = h.distanceBetweenPoints(t, u);
            d < n && ((n = d), (s = l));
          }
        }
        if (s) {
          var f = s.tooltipPosition();
          (r = f.x), (a = f.y);
        }
        return { x: r, y: a };
      },
    };
    function xe(e, t) {
      return (
        t && (h.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
      );
    }
    function Ae(e) {
      return (typeof e == "string" || e instanceof String) &&
        e.indexOf(`
`) > -1
        ? e.split(`
`)
        : e;
    }
    function ai(e) {
      var t = e._xScale,
        r = e._yScale || e._scale,
        a = e._index,
        n = e._datasetIndex,
        i = e._chart.getDatasetMeta(n).controller,
        o = i._getIndexScale(),
        s = i._getValueScale();
      return {
        xLabel: t ? t.getLabelForIndex(a, n) : "",
        yLabel: r ? r.getLabelForIndex(a, n) : "",
        label: o ? "" + o.getLabelForIndex(a, n) : "",
        value: s ? "" + s.getLabelForIndex(a, n) : "",
        index: a,
        datasetIndex: n,
        x: e._model.x,
        y: e._model.y,
      };
    }
    function ya(e) {
      var t = A.global;
      return {
        xPadding: e.xPadding,
        yPadding: e.yPadding,
        xAlign: e.xAlign,
        yAlign: e.yAlign,
        rtl: e.rtl,
        textDirection: e.textDirection,
        bodyFontColor: e.bodyFontColor,
        _bodyFontFamily: Oe(e.bodyFontFamily, t.defaultFontFamily),
        _bodyFontStyle: Oe(e.bodyFontStyle, t.defaultFontStyle),
        _bodyAlign: e.bodyAlign,
        bodyFontSize: Oe(e.bodyFontSize, t.defaultFontSize),
        bodySpacing: e.bodySpacing,
        titleFontColor: e.titleFontColor,
        _titleFontFamily: Oe(e.titleFontFamily, t.defaultFontFamily),
        _titleFontStyle: Oe(e.titleFontStyle, t.defaultFontStyle),
        titleFontSize: Oe(e.titleFontSize, t.defaultFontSize),
        _titleAlign: e.titleAlign,
        titleSpacing: e.titleSpacing,
        titleMarginBottom: e.titleMarginBottom,
        footerFontColor: e.footerFontColor,
        _footerFontFamily: Oe(e.footerFontFamily, t.defaultFontFamily),
        _footerFontStyle: Oe(e.footerFontStyle, t.defaultFontStyle),
        footerFontSize: Oe(e.footerFontSize, t.defaultFontSize),
        _footerAlign: e.footerAlign,
        footerSpacing: e.footerSpacing,
        footerMarginTop: e.footerMarginTop,
        caretSize: e.caretSize,
        cornerRadius: e.cornerRadius,
        backgroundColor: e.backgroundColor,
        opacity: 0,
        legendColorBackground: e.multiKeyBackground,
        displayColors: e.displayColors,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
      };
    }
    function ni(e, t) {
      var r = e._chart.ctx,
        a = t.yPadding * 2,
        n = 0,
        i = t.body,
        o = i.reduce(function (p, m) {
          return p + m.before.length + m.lines.length + m.after.length;
        }, 0);
      o += t.beforeBody.length + t.afterBody.length;
      var s = t.title.length,
        l = t.footer.length,
        u = t.titleFontSize,
        d = t.bodyFontSize,
        f = t.footerFontSize;
      (a += s * u),
        (a += s ? (s - 1) * t.titleSpacing : 0),
        (a += s ? t.titleMarginBottom : 0),
        (a += o * d),
        (a += o ? (o - 1) * t.bodySpacing : 0),
        (a += l ? t.footerMarginTop : 0),
        (a += l * f),
        (a += l ? (l - 1) * t.footerSpacing : 0);
      var c = 0,
        g = function (p) {
          n = Math.max(n, r.measureText(p).width + c);
        };
      return (
        (r.font = h.fontString(u, t._titleFontStyle, t._titleFontFamily)),
        h.each(t.title, g),
        (r.font = h.fontString(d, t._bodyFontStyle, t._bodyFontFamily)),
        h.each(t.beforeBody.concat(t.afterBody), g),
        (c = t.displayColors ? d + 2 : 0),
        h.each(i, function (p) {
          h.each(p.before, g), h.each(p.lines, g), h.each(p.after, g);
        }),
        (c = 0),
        (r.font = h.fontString(f, t._footerFontStyle, t._footerFontFamily)),
        h.each(t.footer, g),
        (n += 2 * t.xPadding),
        { width: n, height: a }
      );
    }
    function ii(e, t) {
      var r = e._model,
        a = e._chart,
        n = e._chart.chartArea,
        i = "center",
        o = "center";
      r.y < t.height
        ? (o = "top")
        : r.y > a.height - t.height && (o = "bottom");
      var s,
        l,
        u,
        d,
        f,
        c = (n.left + n.right) / 2,
        g = (n.top + n.bottom) / 2;
      o === "center"
        ? ((s = function (m) {
            return m <= c;
          }),
          (l = function (m) {
            return m > c;
          }))
        : ((s = function (m) {
            return m <= t.width / 2;
          }),
          (l = function (m) {
            return m >= a.width - t.width / 2;
          })),
        (u = function (m) {
          return m + t.width + r.caretSize + r.caretPadding > a.width;
        }),
        (d = function (m) {
          return m - t.width - r.caretSize - r.caretPadding < 0;
        }),
        (f = function (m) {
          return m <= g ? "top" : "bottom";
        }),
        s(r.x)
          ? ((i = "left"), u(r.x) && ((i = "center"), (o = f(r.y))))
          : l(r.x) && ((i = "right"), d(r.x) && ((i = "center"), (o = f(r.y))));
      var p = e._options;
      return {
        xAlign: p.xAlign ? p.xAlign : i,
        yAlign: p.yAlign ? p.yAlign : o,
      };
    }
    function oi(e, t, r, a) {
      var n = e.x,
        i = e.y,
        o = e.caretSize,
        s = e.caretPadding,
        l = e.cornerRadius,
        u = r.xAlign,
        d = r.yAlign,
        f = o + s,
        c = l + s;
      return (
        u === "right"
          ? (n -= t.width)
          : u === "center" &&
            ((n -= t.width / 2),
            n + t.width > a.width && (n = a.width - t.width),
            n < 0 && (n = 0)),
        d === "top"
          ? (i += f)
          : d === "bottom"
          ? (i -= t.height + f)
          : (i -= t.height / 2),
        d === "center"
          ? u === "left"
            ? (n += f)
            : u === "right" && (n -= f)
          : u === "left"
          ? (n -= c)
          : u === "right" && (n += c),
        { x: n, y: i }
      );
    }
    function Xt(e, t) {
      return t === "center"
        ? e.x + e.width / 2
        : t === "right"
        ? e.x + e.width - e.xPadding
        : e.x + e.xPadding;
    }
    function xa(e) {
      return xe([], Ae(e));
    }
    var li = ge.extend({
        initialize: function () {
          (this._model = ya(this._options)), (this._lastActive = []);
        },
        getTitle: function () {
          var e = this,
            t = e._options,
            r = t.callbacks,
            a = r.beforeTitle.apply(e, arguments),
            n = r.title.apply(e, arguments),
            i = r.afterTitle.apply(e, arguments),
            o = [];
          return (o = xe(o, Ae(a))), (o = xe(o, Ae(n))), (o = xe(o, Ae(i))), o;
        },
        getBeforeBody: function () {
          return xa(this._options.callbacks.beforeBody.apply(this, arguments));
        },
        getBody: function (e, t) {
          var r = this,
            a = r._options.callbacks,
            n = [];
          return (
            h.each(e, function (i) {
              var o = { before: [], lines: [], after: [] };
              xe(o.before, Ae(a.beforeLabel.call(r, i, t))),
                xe(o.lines, a.label.call(r, i, t)),
                xe(o.after, Ae(a.afterLabel.call(r, i, t))),
                n.push(o);
            }),
            n
          );
        },
        getAfterBody: function () {
          return xa(this._options.callbacks.afterBody.apply(this, arguments));
        },
        getFooter: function () {
          var e = this,
            t = e._options.callbacks,
            r = t.beforeFooter.apply(e, arguments),
            a = t.footer.apply(e, arguments),
            n = t.afterFooter.apply(e, arguments),
            i = [];
          return (i = xe(i, Ae(r))), (i = xe(i, Ae(a))), (i = xe(i, Ae(n))), i;
        },
        update: function (e) {
          var t = this,
            r = t._options,
            a = t._model,
            n = (t._model = ya(r)),
            i = t._active,
            o = t._data,
            s = { xAlign: a.xAlign, yAlign: a.yAlign },
            l = { x: a.x, y: a.y },
            u = { width: a.width, height: a.height },
            d = { x: a.caretX, y: a.caretY },
            f,
            c;
          if (i.length) {
            n.opacity = 1;
            var g = [],
              p = [];
            d = ba[r.position].call(t, i, t._eventPosition);
            var m = [];
            for (f = 0, c = i.length; f < c; ++f) m.push(ai(i[f]));
            r.filter &&
              (m = m.filter(function (y) {
                return r.filter(y, o);
              })),
              r.itemSort &&
                (m = m.sort(function (y, k) {
                  return r.itemSort(y, k, o);
                })),
              h.each(m, function (y) {
                g.push(r.callbacks.labelColor.call(t, y, t._chart)),
                  p.push(r.callbacks.labelTextColor.call(t, y, t._chart));
              }),
              (n.title = t.getTitle(m, o)),
              (n.beforeBody = t.getBeforeBody(m, o)),
              (n.body = t.getBody(m, o)),
              (n.afterBody = t.getAfterBody(m, o)),
              (n.footer = t.getFooter(m, o)),
              (n.x = d.x),
              (n.y = d.y),
              (n.caretPadding = r.caretPadding),
              (n.labelColors = g),
              (n.labelTextColors = p),
              (n.dataPoints = m),
              (u = ni(this, n)),
              (s = ii(this, u)),
              (l = oi(n, u, s, t._chart));
          } else n.opacity = 0;
          return (
            (n.xAlign = s.xAlign),
            (n.yAlign = s.yAlign),
            (n.x = l.x),
            (n.y = l.y),
            (n.width = u.width),
            (n.height = u.height),
            (n.caretX = d.x),
            (n.caretY = d.y),
            (t._model = n),
            e && r.custom && r.custom.call(t, n),
            t
          );
        },
        drawCaret: function (e, t) {
          var r = this._chart.ctx,
            a = this._view,
            n = this.getCaretPosition(e, t, a);
          r.lineTo(n.x1, n.y1), r.lineTo(n.x2, n.y2), r.lineTo(n.x3, n.y3);
        },
        getCaretPosition: function (e, t, r) {
          var a,
            n,
            i,
            o,
            s,
            l,
            u = r.caretSize,
            d = r.cornerRadius,
            f = r.xAlign,
            c = r.yAlign,
            g = e.x,
            p = e.y,
            m = t.width,
            y = t.height;
          if (c === "center")
            (s = p + y / 2),
              f === "left"
                ? ((a = g), (n = a - u), (i = a), (o = s + u), (l = s - u))
                : ((a = g + m), (n = a + u), (i = a), (o = s - u), (l = s + u));
          else if (
            (f === "left"
              ? ((n = g + d + u), (a = n - u), (i = n + u))
              : f === "right"
              ? ((n = g + m - d - u), (a = n - u), (i = n + u))
              : ((n = r.caretX), (a = n - u), (i = n + u)),
            c === "top")
          )
            (o = p), (s = o - u), (l = o);
          else {
            (o = p + y), (s = o + u), (l = o);
            var k = i;
            (i = a), (a = k);
          }
          return { x1: a, x2: n, x3: i, y1: o, y2: s, y3: l };
        },
        drawTitle: function (e, t, r) {
          var a = t.title,
            n = a.length,
            i,
            o,
            s;
          if (n) {
            var l = Rr(t.rtl, t.x, t.width);
            for (
              e.x = Xt(t, t._titleAlign),
                r.textAlign = l.textAlign(t._titleAlign),
                r.textBaseline = "middle",
                i = t.titleFontSize,
                o = t.titleSpacing,
                r.fillStyle = t.titleFontColor,
                r.font = h.fontString(i, t._titleFontStyle, t._titleFontFamily),
                s = 0;
              s < n;
              ++s
            )
              r.fillText(a[s], l.x(e.x), e.y + i / 2),
                (e.y += i + o),
                s + 1 === n && (e.y += t.titleMarginBottom - o);
          }
        },
        drawBody: function (e, t, r) {
          var a = t.bodyFontSize,
            n = t.bodySpacing,
            i = t._bodyAlign,
            o = t.body,
            s = t.displayColors,
            l = 0,
            u = s ? Xt(t, "left") : 0,
            d = Rr(t.rtl, t.x, t.width),
            f = function (H) {
              r.fillText(H, d.x(e.x + l), e.y + a / 2), (e.y += a + n);
            },
            c,
            g,
            p,
            m,
            y,
            k,
            C,
            O,
            B = d.textAlign(i);
          for (
            r.textAlign = i,
              r.textBaseline = "middle",
              r.font = h.fontString(a, t._bodyFontStyle, t._bodyFontFamily),
              e.x = Xt(t, B),
              r.fillStyle = t.bodyFontColor,
              h.each(t.beforeBody, f),
              l = s && B !== "right" ? (i === "center" ? a / 2 + 1 : a + 2) : 0,
              y = 0,
              C = o.length;
            y < C;
            ++y
          ) {
            for (
              c = o[y],
                g = t.labelTextColors[y],
                p = t.labelColors[y],
                r.fillStyle = g,
                h.each(c.before, f),
                m = c.lines,
                k = 0,
                O = m.length;
              k < O;
              ++k
            ) {
              if (s) {
                var I = d.x(u);
                (r.fillStyle = t.legendColorBackground),
                  r.fillRect(d.leftForLtr(I, a), e.y, a, a),
                  (r.lineWidth = 1),
                  (r.strokeStyle = p.borderColor),
                  r.strokeRect(d.leftForLtr(I, a), e.y, a, a),
                  (r.fillStyle = p.backgroundColor),
                  r.fillRect(
                    d.leftForLtr(d.xPlus(I, 1), a - 2),
                    e.y + 1,
                    a - 2,
                    a - 2
                  ),
                  (r.fillStyle = g);
              }
              f(m[k]);
            }
            h.each(c.after, f);
          }
          (l = 0), h.each(t.afterBody, f), (e.y -= n);
        },
        drawFooter: function (e, t, r) {
          var a = t.footer,
            n = a.length,
            i,
            o;
          if (n) {
            var s = Rr(t.rtl, t.x, t.width);
            for (
              e.x = Xt(t, t._footerAlign),
                e.y += t.footerMarginTop,
                r.textAlign = s.textAlign(t._footerAlign),
                r.textBaseline = "middle",
                i = t.footerFontSize,
                r.fillStyle = t.footerFontColor,
                r.font = h.fontString(
                  i,
                  t._footerFontStyle,
                  t._footerFontFamily
                ),
                o = 0;
              o < n;
              ++o
            )
              r.fillText(a[o], s.x(e.x), e.y + i / 2),
                (e.y += i + t.footerSpacing);
          }
        },
        drawBackground: function (e, t, r, a) {
          (r.fillStyle = t.backgroundColor),
            (r.strokeStyle = t.borderColor),
            (r.lineWidth = t.borderWidth);
          var n = t.xAlign,
            i = t.yAlign,
            o = e.x,
            s = e.y,
            l = a.width,
            u = a.height,
            d = t.cornerRadius;
          r.beginPath(),
            r.moveTo(o + d, s),
            i === "top" && this.drawCaret(e, a),
            r.lineTo(o + l - d, s),
            r.quadraticCurveTo(o + l, s, o + l, s + d),
            i === "center" && n === "right" && this.drawCaret(e, a),
            r.lineTo(o + l, s + u - d),
            r.quadraticCurveTo(o + l, s + u, o + l - d, s + u),
            i === "bottom" && this.drawCaret(e, a),
            r.lineTo(o + d, s + u),
            r.quadraticCurveTo(o, s + u, o, s + u - d),
            i === "center" && n === "left" && this.drawCaret(e, a),
            r.lineTo(o, s + d),
            r.quadraticCurveTo(o, s, o + d, s),
            r.closePath(),
            r.fill(),
            t.borderWidth > 0 && r.stroke();
        },
        draw: function () {
          var e = this._chart.ctx,
            t = this._view;
          if (t.opacity !== 0) {
            var r = { width: t.width, height: t.height },
              a = { x: t.x, y: t.y },
              n = Math.abs(t.opacity < 0.001) ? 0 : t.opacity,
              i =
                t.title.length ||
                t.beforeBody.length ||
                t.body.length ||
                t.afterBody.length ||
                t.footer.length;
            this._options.enabled &&
              i &&
              (e.save(),
              (e.globalAlpha = n),
              this.drawBackground(a, t, e, r),
              (a.y += t.yPadding),
              h.rtl.overrideTextDirection(e, t.textDirection),
              this.drawTitle(a, t, e),
              this.drawBody(a, t, e),
              this.drawFooter(a, t, e),
              h.rtl.restoreTextDirection(e, t.textDirection),
              e.restore());
          }
        },
        handleEvent: function (e) {
          var t = this,
            r = t._options,
            a = !1;
          return (
            (t._lastActive = t._lastActive || []),
            e.type === "mouseout"
              ? (t._active = [])
              : ((t._active = t._chart.getElementsAtEventForMode(e, r.mode, r)),
                r.reverse && t._active.reverse()),
            (a = !h.arrayEquals(t._active, t._lastActive)),
            a &&
              ((t._lastActive = t._active),
              (r.enabled || r.custom) &&
                ((t._eventPosition = { x: e.x, y: e.y }),
                t.update(!0),
                t.pivot())),
            a
          );
        },
      }),
      si = ba,
      Nr = li;
    Nr.positioners = si;
    var Er = h.valueOrDefault;
    A._set("global", {
      elements: {},
      events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
      hover: {
        onHover: null,
        mode: "nearest",
        intersect: !0,
        animationDuration: 400,
      },
      onClick: null,
      maintainAspectRatio: !0,
      responsive: !0,
      responsiveAnimationDuration: 0,
    });
    function _a() {
      return h.merge(Object.create(null), [].slice.call(arguments), {
        merger: function (e, t, r, a) {
          if (e === "xAxes" || e === "yAxes") {
            var n = r[e].length,
              i,
              o,
              s;
            for (t[e] || (t[e] = []), i = 0; i < n; ++i)
              (s = r[e][i]),
                (o = Er(s.type, e === "xAxes" ? "category" : "linear")),
                i >= t[e].length && t[e].push({}),
                !t[e][i].type || (s.type && s.type !== t[e][i].type)
                  ? h.merge(t[e][i], [Ct.getScaleDefaults(o), s])
                  : h.merge(t[e][i], s);
          } else h._merger(e, t, r, a);
        },
      });
    }
    function zr() {
      return h.merge(Object.create(null), [].slice.call(arguments), {
        merger: function (e, t, r, a) {
          var n = t[e] || Object.create(null),
            i = r[e];
          e === "scales"
            ? (t[e] = _a(n, i))
            : e === "scale"
            ? (t[e] = h.merge(n, [Ct.getScaleDefaults(i.type), i]))
            : h._merger(e, t, r, a);
        },
      });
    }
    function ui(e) {
      e = e || Object.create(null);
      var t = (e.data = e.data || {});
      return (
        (t.datasets = t.datasets || []),
        (t.labels = t.labels || []),
        (e.options = zr(A.global, A[e.type], e.options || {})),
        e
      );
    }
    function di(e) {
      var t = e.options;
      h.each(e.scales, function (r) {
        pe.removeBox(e, r);
      }),
        (t = zr(A.global, A[e.config.type], t)),
        (e.options = e.config.options = t),
        e.ensureScalesHaveIDs(),
        e.buildOrUpdateScales(),
        (e.tooltip._options = t.tooltips),
        e.tooltip.initialize();
    }
    function wa(e, t, r) {
      var a,
        n = function (i) {
          return i.id === a;
        };
      do a = t + r++;
      while (h.findIndex(e, n) >= 0);
      return a;
    }
    function ka(e) {
      return e === "top" || e === "bottom";
    }
    function Sa(e, t) {
      return function (r, a) {
        return r[e] === a[e] ? r[t] - a[t] : r[e] - a[e];
      };
    }
    var Le = function (e, t) {
      return this.construct(e, t), this;
    };
    h.extend(Le.prototype, {
      construct: function (e, t) {
        var r = this;
        t = ui(t);
        var a = ot.acquireContext(e, t),
          n = a && a.canvas,
          i = n && n.height,
          o = n && n.width;
        if (
          ((r.id = h.uid()),
          (r.ctx = a),
          (r.canvas = n),
          (r.config = t),
          (r.width = o),
          (r.height = i),
          (r.aspectRatio = i ? o / i : null),
          (r.options = t.options),
          (r._bufferedRender = !1),
          (r._layers = []),
          (r.chart = r),
          (r.controller = r),
          (Le.instances[r.id] = r),
          Object.defineProperty(r, "data", {
            get: function () {
              return r.config.data;
            },
            set: function (s) {
              r.config.data = s;
            },
          }),
          !a || !n)
        ) {
          console.error(
            "Failed to create chart: can't acquire context from the given item"
          );
          return;
        }
        r.initialize(), r.update();
      },
      initialize: function () {
        var e = this;
        return (
          $.notify(e, "beforeInit"),
          h.retinaScale(e, e.options.devicePixelRatio),
          e.bindEvents(),
          e.options.responsive && e.resize(!0),
          e.initToolTip(),
          $.notify(e, "afterInit"),
          e
        );
      },
      clear: function () {
        return h.canvas.clear(this), this;
      },
      stop: function () {
        return b.cancelAnimation(this), this;
      },
      resize: function (e) {
        var t = this,
          r = t.options,
          a = t.canvas,
          n = (r.maintainAspectRatio && t.aspectRatio) || null,
          i = Math.max(0, Math.floor(h.getMaximumWidth(a))),
          o = Math.max(0, Math.floor(n ? i / n : h.getMaximumHeight(a)));
        if (
          !(t.width === i && t.height === o) &&
          ((a.width = t.width = i),
          (a.height = t.height = o),
          (a.style.width = i + "px"),
          (a.style.height = o + "px"),
          h.retinaScale(t, r.devicePixelRatio),
          !e)
        ) {
          var s = { width: i, height: o };
          $.notify(t, "resize", [s]),
            r.onResize && r.onResize(t, s),
            t.stop(),
            t.update({ duration: r.responsiveAnimationDuration });
        }
      },
      ensureScalesHaveIDs: function () {
        var e = this.options,
          t = e.scales || {},
          r = e.scale;
        h.each(t.xAxes, function (a, n) {
          a.id || (a.id = wa(t.xAxes, "x-axis-", n));
        }),
          h.each(t.yAxes, function (a, n) {
            a.id || (a.id = wa(t.yAxes, "y-axis-", n));
          }),
          r && (r.id = r.id || "scale");
      },
      buildOrUpdateScales: function () {
        var e = this,
          t = e.options,
          r = e.scales || {},
          a = [],
          n = Object.keys(r).reduce(function (i, o) {
            return (i[o] = !1), i;
          }, {});
        t.scales &&
          (a = a.concat(
            (t.scales.xAxes || []).map(function (i) {
              return { options: i, dtype: "category", dposition: "bottom" };
            }),
            (t.scales.yAxes || []).map(function (i) {
              return { options: i, dtype: "linear", dposition: "left" };
            })
          )),
          t.scale &&
            a.push({
              options: t.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea",
            }),
          h.each(a, function (i) {
            var o = i.options,
              s = o.id,
              l = Er(o.type, i.dtype);
            ka(o.position) !== ka(i.dposition) && (o.position = i.dposition),
              (n[s] = !0);
            var u = null;
            if (s in r && r[s].type === l)
              (u = r[s]), (u.options = o), (u.ctx = e.ctx), (u.chart = e);
            else {
              var d = Ct.getScaleConstructor(l);
              if (!d) return;
              (u = new d({ id: s, type: l, options: o, ctx: e.ctx, chart: e })),
                (r[u.id] = u);
            }
            u.mergeTicksOptions(), i.isDefault && (e.scale = u);
          }),
          h.each(n, function (i, o) {
            i || delete r[o];
          }),
          (e.scales = r),
          Ct.addScalesToLayout(this);
      },
      buildOrUpdateControllers: function () {
        var e = this,
          t = [],
          r = e.data.datasets,
          a,
          n;
        for (a = 0, n = r.length; a < n; a++) {
          var i = r[a],
            o = e.getDatasetMeta(a),
            s = i.type || e.config.type;
          if (
            (o.type &&
              o.type !== s &&
              (e.destroyDatasetMeta(a), (o = e.getDatasetMeta(a))),
            (o.type = s),
            (o.order = i.order || 0),
            (o.index = a),
            o.controller)
          )
            o.controller.updateIndex(a), o.controller.linkScales();
          else {
            var l = da[o.type];
            if (l === void 0)
              throw new Error('"' + o.type + '" is not a chart type.');
            (o.controller = new l(e, a)), t.push(o.controller);
          }
        }
        return t;
      },
      resetElements: function () {
        var e = this;
        h.each(
          e.data.datasets,
          function (t, r) {
            e.getDatasetMeta(r).controller.reset();
          },
          e
        );
      },
      reset: function () {
        this.resetElements(), this.tooltip.initialize();
      },
      update: function (e) {
        var t = this,
          r,
          a;
        if (
          ((!e || typeof e != "object") &&
            (e = { duration: e, lazy: arguments[1] }),
          di(t),
          $._invalidate(t),
          $.notify(t, "beforeUpdate") !== !1)
        ) {
          t.tooltip._data = t.data;
          var n = t.buildOrUpdateControllers();
          for (r = 0, a = t.data.datasets.length; r < a; r++)
            t.getDatasetMeta(r).controller.buildOrUpdateElements();
          t.updateLayout(),
            t.options.animation &&
              t.options.animation.duration &&
              h.each(n, function (i) {
                i.reset();
              }),
            t.updateDatasets(),
            t.tooltip.initialize(),
            (t.lastActive = []),
            $.notify(t, "afterUpdate"),
            t._layers.sort(Sa("z", "_idx")),
            t._bufferedRender
              ? (t._bufferedRequest = {
                  duration: e.duration,
                  easing: e.easing,
                  lazy: e.lazy,
                })
              : t.render(e);
        }
      },
      updateLayout: function () {
        var e = this;
        $.notify(e, "beforeLayout") !== !1 &&
          (pe.update(this, this.width, this.height),
          (e._layers = []),
          h.each(
            e.boxes,
            function (t) {
              t._configure && t._configure(),
                e._layers.push.apply(e._layers, t._layers());
            },
            e
          ),
          e._layers.forEach(function (t, r) {
            t._idx = r;
          }),
          $.notify(e, "afterScaleUpdate"),
          $.notify(e, "afterLayout"));
      },
      updateDatasets: function () {
        var e = this;
        if ($.notify(e, "beforeDatasetsUpdate") !== !1) {
          for (var t = 0, r = e.data.datasets.length; t < r; ++t)
            e.updateDataset(t);
          $.notify(e, "afterDatasetsUpdate");
        }
      },
      updateDataset: function (e) {
        var t = this,
          r = t.getDatasetMeta(e),
          a = { meta: r, index: e };
        $.notify(t, "beforeDatasetUpdate", [a]) !== !1 &&
          (r.controller._update(), $.notify(t, "afterDatasetUpdate", [a]));
      },
      render: function (e) {
        var t = this;
        (!e || typeof e != "object") &&
          (e = { duration: e, lazy: arguments[1] });
        var r = t.options.animation,
          a = Er(e.duration, r && r.duration),
          n = e.lazy;
        if ($.notify(t, "beforeRender") !== !1) {
          var i = function (s) {
            $.notify(t, "afterRender"), h.callback(r && r.onComplete, [s], t);
          };
          if (r && a) {
            var o = new v({
              numSteps: a / 16.66,
              easing: e.easing || r.easing,
              render: function (s, l) {
                var u = h.easing.effects[l.easing],
                  d = l.currentStep,
                  f = d / l.numSteps;
                s.draw(u(f), f, d);
              },
              onAnimationProgress: r.onProgress,
              onAnimationComplete: i,
            });
            b.addAnimation(t, o, a, n);
          } else t.draw(), i(new v({ numSteps: 0, chart: t }));
          return t;
        }
      },
      draw: function (e) {
        var t = this,
          r,
          a;
        if (
          (t.clear(),
          h.isNullOrUndef(e) && (e = 1),
          t.transition(e),
          !(t.width <= 0 || t.height <= 0) &&
            $.notify(t, "beforeDraw", [e]) !== !1)
        ) {
          for (a = t._layers, r = 0; r < a.length && a[r].z <= 0; ++r)
            a[r].draw(t.chartArea);
          for (t.drawDatasets(e); r < a.length; ++r) a[r].draw(t.chartArea);
          t._drawTooltip(e), $.notify(t, "afterDraw", [e]);
        }
      },
      transition: function (e) {
        for (
          var t = this, r = 0, a = (t.data.datasets || []).length;
          r < a;
          ++r
        )
          t.isDatasetVisible(r) && t.getDatasetMeta(r).controller.transition(e);
        t.tooltip.transition(e);
      },
      _getSortedDatasetMetas: function (e) {
        var t = this,
          r = t.data.datasets || [],
          a = [],
          n,
          i;
        for (n = 0, i = r.length; n < i; ++n)
          (!e || t.isDatasetVisible(n)) && a.push(t.getDatasetMeta(n));
        return a.sort(Sa("order", "index")), a;
      },
      _getSortedVisibleDatasetMetas: function () {
        return this._getSortedDatasetMetas(!0);
      },
      drawDatasets: function (e) {
        var t = this,
          r,
          a;
        if ($.notify(t, "beforeDatasetsDraw", [e]) !== !1) {
          for (
            r = t._getSortedVisibleDatasetMetas(), a = r.length - 1;
            a >= 0;
            --a
          )
            t.drawDataset(r[a], e);
          $.notify(t, "afterDatasetsDraw", [e]);
        }
      },
      drawDataset: function (e, t) {
        var r = this,
          a = { meta: e, index: e.index, easingValue: t };
        $.notify(r, "beforeDatasetDraw", [a]) !== !1 &&
          (e.controller.draw(t), $.notify(r, "afterDatasetDraw", [a]));
      },
      _drawTooltip: function (e) {
        var t = this,
          r = t.tooltip,
          a = { tooltip: r, easingValue: e };
        $.notify(t, "beforeTooltipDraw", [a]) !== !1 &&
          (r.draw(), $.notify(t, "afterTooltipDraw", [a]));
      },
      getElementAtEvent: function (e) {
        return it.modes.single(this, e);
      },
      getElementsAtEvent: function (e) {
        return it.modes.label(this, e, { intersect: !0 });
      },
      getElementsAtXAxis: function (e) {
        return it.modes["x-axis"](this, e, { intersect: !0 });
      },
      getElementsAtEventForMode: function (e, t, r) {
        var a = it.modes[t];
        return typeof a == "function" ? a(this, e, r) : [];
      },
      getDatasetAtEvent: function (e) {
        return it.modes.dataset(this, e, { intersect: !0 });
      },
      getDatasetMeta: function (e) {
        var t = this,
          r = t.data.datasets[e];
        r._meta || (r._meta = {});
        var a = r._meta[t.id];
        return (
          a ||
            (a = r._meta[t.id] =
              {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: r.order || 0,
                index: e,
              }),
          a
        );
      },
      getVisibleDatasetCount: function () {
        for (var e = 0, t = 0, r = this.data.datasets.length; t < r; ++t)
          this.isDatasetVisible(t) && e++;
        return e;
      },
      isDatasetVisible: function (e) {
        var t = this.getDatasetMeta(e);
        return typeof t.hidden == "boolean"
          ? !t.hidden
          : !this.data.datasets[e].hidden;
      },
      generateLegend: function () {
        return this.options.legendCallback(this);
      },
      destroyDatasetMeta: function (e) {
        var t = this.id,
          r = this.data.datasets[e],
          a = r._meta && r._meta[t];
        a && (a.controller.destroy(), delete r._meta[t]);
      },
      destroy: function () {
        var e = this,
          t = e.canvas,
          r,
          a;
        for (e.stop(), r = 0, a = e.data.datasets.length; r < a; ++r)
          e.destroyDatasetMeta(r);
        t &&
          (e.unbindEvents(),
          h.canvas.clear(e),
          ot.releaseContext(e.ctx),
          (e.canvas = null),
          (e.ctx = null)),
          $.notify(e, "destroy"),
          delete Le.instances[e.id];
      },
      toBase64Image: function () {
        return this.canvas.toDataURL.apply(this.canvas, arguments);
      },
      initToolTip: function () {
        var e = this;
        e.tooltip = new Nr(
          {
            _chart: e,
            _chartInstance: e,
            _data: e.data,
            _options: e.options.tooltips,
          },
          e
        );
      },
      bindEvents: function () {
        var e = this,
          t = (e._listeners = {}),
          r = function () {
            e.eventHandler.apply(e, arguments);
          };
        h.each(e.options.events, function (a) {
          ot.addEventListener(e, a, r), (t[a] = r);
        }),
          e.options.responsive &&
            ((r = function () {
              e.resize();
            }),
            ot.addEventListener(e, "resize", r),
            (t.resize = r));
      },
      unbindEvents: function () {
        var e = this,
          t = e._listeners;
        !t ||
          (delete e._listeners,
          h.each(t, function (r, a) {
            ot.removeEventListener(e, a, r);
          }));
      },
      updateHoverStyle: function (e, t, r) {
        var a = r ? "set" : "remove",
          n,
          i,
          o;
        for (i = 0, o = e.length; i < o; ++i)
          (n = e[i]),
            n &&
              this.getDatasetMeta(n._datasetIndex).controller[a + "HoverStyle"](
                n
              );
        t === "dataset" &&
          this.getDatasetMeta(e[0]._datasetIndex).controller[
            "_" + a + "DatasetHoverStyle"
          ]();
      },
      eventHandler: function (e) {
        var t = this,
          r = t.tooltip;
        if ($.notify(t, "beforeEvent", [e]) !== !1) {
          (t._bufferedRender = !0), (t._bufferedRequest = null);
          var a = t.handleEvent(e);
          r && (a = r._start ? r.handleEvent(e) : a | r.handleEvent(e)),
            $.notify(t, "afterEvent", [e]);
          var n = t._bufferedRequest;
          return (
            n
              ? t.render(n)
              : a &&
                !t.animating &&
                (t.stop(),
                t.render({
                  duration: t.options.hover.animationDuration,
                  lazy: !0,
                })),
            (t._bufferedRender = !1),
            (t._bufferedRequest = null),
            t
          );
        }
      },
      handleEvent: function (e) {
        var t = this,
          r = t.options || {},
          a = r.hover,
          n = !1;
        return (
          (t.lastActive = t.lastActive || []),
          e.type === "mouseout"
            ? (t.active = [])
            : (t.active = t.getElementsAtEventForMode(e, a.mode, a)),
          h.callback(r.onHover || r.hover.onHover, [e.native, t.active], t),
          (e.type === "mouseup" || e.type === "click") &&
            r.onClick &&
            r.onClick.call(t, e.native, t.active),
          t.lastActive.length && t.updateHoverStyle(t.lastActive, a.mode, !1),
          t.active.length && a.mode && t.updateHoverStyle(t.active, a.mode, !0),
          (n = !h.arrayEquals(t.active, t.lastActive)),
          (t.lastActive = t.active),
          n
        );
      },
    }),
      (Le.instances = {});
    var R = Le;
    (Le.Controller = Le),
      (Le.types = {}),
      (h.configMerge = zr),
      (h.scaleMerge = _a);
    var fi = function () {
      (h.where = function (a, n) {
        if (h.isArray(a) && Array.prototype.filter) return a.filter(n);
        var i = [];
        return (
          h.each(a, function (o) {
            n(o) && i.push(o);
          }),
          i
        );
      }),
        (h.findIndex = Array.prototype.findIndex
          ? function (a, n, i) {
              return a.findIndex(n, i);
            }
          : function (a, n, i) {
              i = i === void 0 ? a : i;
              for (var o = 0, s = a.length; o < s; ++o)
                if (n.call(i, a[o], o, a)) return o;
              return -1;
            }),
        (h.findNextWhere = function (a, n, i) {
          h.isNullOrUndef(i) && (i = -1);
          for (var o = i + 1; o < a.length; o++) {
            var s = a[o];
            if (n(s)) return s;
          }
        }),
        (h.findPreviousWhere = function (a, n, i) {
          h.isNullOrUndef(i) && (i = a.length);
          for (var o = i - 1; o >= 0; o--) {
            var s = a[o];
            if (n(s)) return s;
          }
        }),
        (h.isNumber = function (a) {
          return !isNaN(parseFloat(a)) && isFinite(a);
        }),
        (h.almostEquals = function (a, n, i) {
          return Math.abs(a - n) < i;
        }),
        (h.almostWhole = function (a, n) {
          var i = Math.round(a);
          return i - n <= a && i + n >= a;
        }),
        (h.max = function (a) {
          return a.reduce(function (n, i) {
            return isNaN(i) ? n : Math.max(n, i);
          }, Number.NEGATIVE_INFINITY);
        }),
        (h.min = function (a) {
          return a.reduce(function (n, i) {
            return isNaN(i) ? n : Math.min(n, i);
          }, Number.POSITIVE_INFINITY);
        }),
        (h.sign = Math.sign
          ? function (a) {
              return Math.sign(a);
            }
          : function (a) {
              return (a = +a), a === 0 || isNaN(a) ? a : a > 0 ? 1 : -1;
            }),
        (h.toRadians = function (a) {
          return a * (Math.PI / 180);
        }),
        (h.toDegrees = function (a) {
          return a * (180 / Math.PI);
        }),
        (h._decimalPlaces = function (a) {
          if (!!h.isFinite(a)) {
            for (var n = 1, i = 0; Math.round(a * n) / n !== a; )
              (n *= 10), i++;
            return i;
          }
        }),
        (h.getAngleFromPoint = function (a, n) {
          var i = n.x - a.x,
            o = n.y - a.y,
            s = Math.sqrt(i * i + o * o),
            l = Math.atan2(o, i);
          return (
            l < -0.5 * Math.PI && (l += 2 * Math.PI), { angle: l, distance: s }
          );
        }),
        (h.distanceBetweenPoints = function (a, n) {
          return Math.sqrt(Math.pow(n.x - a.x, 2) + Math.pow(n.y - a.y, 2));
        }),
        (h.aliasPixel = function (a) {
          return a % 2 === 0 ? 0 : 0.5;
        }),
        (h._alignPixel = function (a, n, i) {
          var o = a.currentDevicePixelRatio,
            s = i / 2;
          return Math.round((n - s) * o) / o + s;
        }),
        (h.splineCurve = function (a, n, i, o) {
          var s = a.skip ? n : a,
            l = n,
            u = i.skip ? n : i,
            d = Math.sqrt(Math.pow(l.x - s.x, 2) + Math.pow(l.y - s.y, 2)),
            f = Math.sqrt(Math.pow(u.x - l.x, 2) + Math.pow(u.y - l.y, 2)),
            c = d / (d + f),
            g = f / (d + f);
          (c = isNaN(c) ? 0 : c), (g = isNaN(g) ? 0 : g);
          var p = o * c,
            m = o * g;
          return {
            previous: { x: l.x - p * (u.x - s.x), y: l.y - p * (u.y - s.y) },
            next: { x: l.x + m * (u.x - s.x), y: l.y + m * (u.y - s.y) },
          };
        }),
        (h.EPSILON = Number.EPSILON || 1e-14),
        (h.splineCurveMonotone = function (a) {
          var n = (a || []).map(function (y) {
              return { model: y._model, deltaK: 0, mK: 0 };
            }),
            i = n.length,
            o,
            s,
            l,
            u;
          for (o = 0; o < i; ++o)
            if (((l = n[o]), !l.model.skip)) {
              if (
                ((s = o > 0 ? n[o - 1] : null),
                (u = o < i - 1 ? n[o + 1] : null),
                u && !u.model.skip)
              ) {
                var d = u.model.x - l.model.x;
                l.deltaK = d !== 0 ? (u.model.y - l.model.y) / d : 0;
              }
              !s || s.model.skip
                ? (l.mK = l.deltaK)
                : !u || u.model.skip
                ? (l.mK = s.deltaK)
                : this.sign(s.deltaK) !== this.sign(l.deltaK)
                ? (l.mK = 0)
                : (l.mK = (s.deltaK + l.deltaK) / 2);
            }
          var f, c, g, p;
          for (o = 0; o < i - 1; ++o)
            if (((l = n[o]), (u = n[o + 1]), !(l.model.skip || u.model.skip))) {
              if (h.almostEquals(l.deltaK, 0, this.EPSILON)) {
                l.mK = u.mK = 0;
                continue;
              }
              (f = l.mK / l.deltaK),
                (c = u.mK / l.deltaK),
                (p = Math.pow(f, 2) + Math.pow(c, 2)),
                !(p <= 9) &&
                  ((g = 3 / Math.sqrt(p)),
                  (l.mK = f * g * l.deltaK),
                  (u.mK = c * g * l.deltaK));
            }
          var m;
          for (o = 0; o < i; ++o)
            (l = n[o]),
              !l.model.skip &&
                ((s = o > 0 ? n[o - 1] : null),
                (u = o < i - 1 ? n[o + 1] : null),
                s &&
                  !s.model.skip &&
                  ((m = (l.model.x - s.model.x) / 3),
                  (l.model.controlPointPreviousX = l.model.x - m),
                  (l.model.controlPointPreviousY = l.model.y - m * l.mK)),
                u &&
                  !u.model.skip &&
                  ((m = (u.model.x - l.model.x) / 3),
                  (l.model.controlPointNextX = l.model.x + m),
                  (l.model.controlPointNextY = l.model.y + m * l.mK)));
        }),
        (h.nextItem = function (a, n, i) {
          return i
            ? n >= a.length - 1
              ? a[0]
              : a[n + 1]
            : n >= a.length - 1
            ? a[a.length - 1]
            : a[n + 1];
        }),
        (h.previousItem = function (a, n, i) {
          return i
            ? n <= 0
              ? a[a.length - 1]
              : a[n - 1]
            : n <= 0
            ? a[0]
            : a[n - 1];
        }),
        (h.niceNum = function (a, n) {
          var i = Math.floor(h.log10(a)),
            o = a / Math.pow(10, i),
            s;
          return (
            n
              ? o < 1.5
                ? (s = 1)
                : o < 3
                ? (s = 2)
                : o < 7
                ? (s = 5)
                : (s = 10)
              : o <= 1
              ? (s = 1)
              : o <= 2
              ? (s = 2)
              : o <= 5
              ? (s = 5)
              : (s = 10),
            s * Math.pow(10, i)
          );
        }),
        (h.requestAnimFrame = (function () {
          return typeof window == "undefined"
            ? function (a) {
                a();
              }
            : window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (a) {
                  return window.setTimeout(a, 1e3 / 60);
                };
        })()),
        (h.getRelativePosition = function (a, n) {
          var i,
            o,
            s = a.originalEvent || a,
            l = a.target || a.srcElement,
            u = l.getBoundingClientRect(),
            d = s.touches;
          d && d.length > 0
            ? ((i = d[0].clientX), (o = d[0].clientY))
            : ((i = s.clientX), (o = s.clientY));
          var f = parseFloat(h.getStyle(l, "padding-left")),
            c = parseFloat(h.getStyle(l, "padding-top")),
            g = parseFloat(h.getStyle(l, "padding-right")),
            p = parseFloat(h.getStyle(l, "padding-bottom")),
            m = u.right - u.left - f - g,
            y = u.bottom - u.top - c - p;
          return (
            (i = Math.round(
              (((i - u.left - f) / m) * l.width) / n.currentDevicePixelRatio
            )),
            (o = Math.round(
              (((o - u.top - c) / y) * l.height) / n.currentDevicePixelRatio
            )),
            { x: i, y: o }
          );
        });
      function e(a, n, i) {
        var o;
        return (
          typeof a == "string"
            ? ((o = parseInt(a, 10)),
              a.indexOf("%") !== -1 && (o = (o / 100) * n.parentNode[i]))
            : (o = a),
          o
        );
      }
      function t(a) {
        return a != null && a !== "none";
      }
      function r(a, n, i) {
        var o = document.defaultView,
          s = h._getParentNode(a),
          l = o.getComputedStyle(a)[n],
          u = o.getComputedStyle(s)[n],
          d = t(l),
          f = t(u),
          c = Number.POSITIVE_INFINITY;
        return d || f
          ? Math.min(d ? e(l, a, i) : c, f ? e(u, s, i) : c)
          : "none";
      }
      (h.getConstraintWidth = function (a) {
        return r(a, "max-width", "clientWidth");
      }),
        (h.getConstraintHeight = function (a) {
          return r(a, "max-height", "clientHeight");
        }),
        (h._calculatePadding = function (a, n, i) {
          return (
            (n = h.getStyle(a, n)),
            n.indexOf("%") > -1 ? (i * parseInt(n, 10)) / 100 : parseInt(n, 10)
          );
        }),
        (h._getParentNode = function (a) {
          var n = a.parentNode;
          return n && n.toString() === "[object ShadowRoot]" && (n = n.host), n;
        }),
        (h.getMaximumWidth = function (a) {
          var n = h._getParentNode(a);
          if (!n) return a.clientWidth;
          var i = n.clientWidth,
            o = h._calculatePadding(n, "padding-left", i),
            s = h._calculatePadding(n, "padding-right", i),
            l = i - o - s,
            u = h.getConstraintWidth(a);
          return isNaN(u) ? l : Math.min(l, u);
        }),
        (h.getMaximumHeight = function (a) {
          var n = h._getParentNode(a);
          if (!n) return a.clientHeight;
          var i = n.clientHeight,
            o = h._calculatePadding(n, "padding-top", i),
            s = h._calculatePadding(n, "padding-bottom", i),
            l = i - o - s,
            u = h.getConstraintHeight(a);
          return isNaN(u) ? l : Math.min(l, u);
        }),
        (h.getStyle = function (a, n) {
          return a.currentStyle
            ? a.currentStyle[n]
            : document.defaultView
                .getComputedStyle(a, null)
                .getPropertyValue(n);
        }),
        (h.retinaScale = function (a, n) {
          var i = (a.currentDevicePixelRatio =
            n ||
            (typeof window != "undefined" && window.devicePixelRatio) ||
            1);
          if (i !== 1) {
            var o = a.canvas,
              s = a.height,
              l = a.width;
            (o.height = s * i),
              (o.width = l * i),
              a.ctx.scale(i, i),
              !o.style.height &&
                !o.style.width &&
                ((o.style.height = s + "px"), (o.style.width = l + "px"));
          }
        }),
        (h.fontString = function (a, n, i) {
          return n + " " + a + "px " + i;
        }),
        (h.longestText = function (a, n, i, o) {
          o = o || {};
          var s = (o.data = o.data || {}),
            l = (o.garbageCollect = o.garbageCollect || []);
          o.font !== n &&
            ((s = o.data = {}), (l = o.garbageCollect = []), (o.font = n)),
            (a.font = n);
          var u = 0,
            d = i.length,
            f,
            c,
            g,
            p,
            m;
          for (f = 0; f < d; f++)
            if (((p = i[f]), p != null && h.isArray(p) !== !0))
              u = h.measureText(a, s, l, u, p);
            else if (h.isArray(p))
              for (c = 0, g = p.length; c < g; c++)
                (m = p[c]),
                  m != null &&
                    !h.isArray(m) &&
                    (u = h.measureText(a, s, l, u, m));
          var y = l.length / 2;
          if (y > i.length) {
            for (f = 0; f < y; f++) delete s[l[f]];
            l.splice(0, y);
          }
          return u;
        }),
        (h.measureText = function (a, n, i, o, s) {
          var l = n[s];
          return (
            l || ((l = n[s] = a.measureText(s).width), i.push(s)),
            l > o && (o = l),
            o
          );
        }),
        (h.numberOfLabelLines = function (a) {
          var n = 1;
          return (
            h.each(a, function (i) {
              h.isArray(i) && i.length > n && (n = i.length);
            }),
            n
          );
        }),
        (h.color = Se
          ? function (a) {
              return (
                a instanceof CanvasGradient && (a = A.global.defaultColor),
                Se(a)
              );
            }
          : function (a) {
              return console.error("Color.js not found!"), a;
            }),
        (h.getHoverColor = function (a) {
          return a instanceof CanvasPattern || a instanceof CanvasGradient
            ? a
            : h.color(a).saturate(0.5).darken(0.1).rgbString();
        });
    };
    function $e() {
      throw new Error(
        "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
      );
    }
    function Zt(e) {
      this.options = e || {};
    }
    h.extend(Zt.prototype, {
      formats: $e,
      parse: $e,
      format: $e,
      add: $e,
      diff: $e,
      startOf: $e,
      endOf: $e,
      _create: function (e) {
        return e;
      },
    }),
      (Zt.override = function (e) {
        h.extend(Zt.prototype, e);
      });
    var hi = Zt,
      Wr = { _date: hi },
      Pt = {
        formatters: {
          values: function (e) {
            return h.isArray(e) ? e : "" + e;
          },
          linear: function (e, t, r) {
            var a = r.length > 3 ? r[2] - r[1] : r[1] - r[0];
            Math.abs(a) > 1 && e !== Math.floor(e) && (a = e - Math.floor(e));
            var n = h.log10(Math.abs(a)),
              i = "";
            if (e !== 0) {
              var o = Math.max(Math.abs(r[0]), Math.abs(r[r.length - 1]));
              if (o < 1e-4) {
                var s = h.log10(Math.abs(e)),
                  l = Math.floor(s) - Math.floor(n);
                (l = Math.max(Math.min(l, 20), 0)), (i = e.toExponential(l));
              } else {
                var u = -1 * Math.floor(n);
                (u = Math.max(Math.min(u, 20), 0)), (i = e.toFixed(u));
              }
            } else i = "0";
            return i;
          },
          logarithmic: function (e, t, r) {
            var a = e / Math.pow(10, Math.floor(h.log10(e)));
            return e === 0
              ? "0"
              : a === 1 || a === 2 || a === 5 || t === 0 || t === r.length - 1
              ? e.toExponential()
              : "";
          },
        },
      },
      qe = h.isArray,
      Dt = h.isNullOrUndef,
      Ge = h.valueOrDefault,
      lt = h.valueAtIndexOrDefault;
    A._set("scale", {
      display: !0,
      position: "left",
      offset: !1,
      gridLines: {
        display: !0,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickMarkLength: 10,
        zeroLineWidth: 1,
        zeroLineColor: "rgba(0,0,0,0.25)",
        zeroLineBorderDash: [],
        zeroLineBorderDashOffset: 0,
        offsetGridLines: !1,
        borderDash: [],
        borderDashOffset: 0,
      },
      scaleLabel: {
        display: !1,
        labelString: "",
        padding: { top: 4, bottom: 4 },
      },
      ticks: {
        beginAtZero: !1,
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        padding: 0,
        reverse: !1,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 0,
        labelOffset: 0,
        callback: Pt.formatters.values,
        minor: {},
        major: {},
      },
    });
    function ci(e, t) {
      for (var r = [], a = e.length / t, n = 0, i = e.length; n < i; n += a)
        r.push(e[Math.floor(n)]);
      return r;
    }
    function vi(e, t, r) {
      var a = e.getTicks().length,
        n = Math.min(t, a - 1),
        i = e.getPixelForTick(n),
        o = e._startPixel,
        s = e._endPixel,
        l = 1e-6,
        u;
      if (
        !(
          r &&
          (a === 1
            ? (u = Math.max(i - o, s - i))
            : t === 0
            ? (u = (e.getPixelForTick(1) - i) / 2)
            : (u = (i - e.getPixelForTick(n - 1)) / 2),
          (i += n < t ? u : -u),
          i < o - l || i > s + l)
        )
      )
        return i;
    }
    function gi(e, t) {
      h.each(e, function (r) {
        var a = r.gc,
          n = a.length / 2,
          i;
        if (n > t) {
          for (i = 0; i < n; ++i) delete r.data[a[i]];
          a.splice(0, n);
        }
      });
    }
    function pi(e, t, r, a) {
      var n = r.length,
        i = [],
        o = [],
        s = [],
        l = 0,
        u = 0,
        d,
        f,
        c,
        g,
        p,
        m,
        y,
        k,
        C,
        O,
        B,
        I,
        H;
      for (d = 0; d < n; ++d) {
        if (
          ((g = r[d].label),
          (p = r[d].major ? t.major : t.minor),
          (e.font = m = p.string),
          (y = a[m] = a[m] || { data: {}, gc: [] }),
          (k = p.lineHeight),
          (C = O = 0),
          !Dt(g) && !qe(g))
        )
          (C = h.measureText(e, y.data, y.gc, C, g)), (O = k);
        else if (qe(g))
          for (f = 0, c = g.length; f < c; ++f)
            (B = g[f]),
              !Dt(B) &&
                !qe(B) &&
                ((C = h.measureText(e, y.data, y.gc, C, B)), (O += k));
        i.push(C),
          o.push(O),
          s.push(k / 2),
          (l = Math.max(C, l)),
          (u = Math.max(O, u));
      }
      gi(a, n), (I = i.indexOf(l)), (H = o.indexOf(u));
      function W(j) {
        return { width: i[j] || 0, height: o[j] || 0, offset: s[j] || 0 };
      }
      return { first: W(0), last: W(n - 1), widest: W(I), highest: W(H) };
    }
    function Ot(e) {
      return e.drawTicks ? e.tickMarkLength : 0;
    }
    function Hr(e) {
      var t, r;
      return e.display
        ? ((t = h.options._parseFont(e)),
          (r = h.options.toPadding(e.padding)),
          t.lineHeight + r.height)
        : 0;
    }
    function Ma(e, t) {
      return h.extend(
        h.options._parseFont({
          fontFamily: Ge(t.fontFamily, e.fontFamily),
          fontSize: Ge(t.fontSize, e.fontSize),
          fontStyle: Ge(t.fontStyle, e.fontStyle),
          lineHeight: Ge(t.lineHeight, e.lineHeight),
        }),
        {
          color: h.options.resolve([
            t.fontColor,
            e.fontColor,
            A.global.defaultFontColor,
          ]),
        }
      );
    }
    function Vr(e) {
      var t = Ma(e, e.minor),
        r = e.major.enabled ? Ma(e, e.major) : t;
      return { minor: t, major: r };
    }
    function jr(e) {
      var t = [],
        r,
        a,
        n;
      for (a = 0, n = e.length; a < n; ++a)
        (r = e[a]), typeof r._index != "undefined" && t.push(r);
      return t;
    }
    function mi(e) {
      var t = e.length,
        r,
        a;
      if (t < 2) return !1;
      for (a = e[0], r = 1; r < t; ++r) if (e[r] - e[r - 1] !== a) return !1;
      return a;
    }
    function bi(e, t, r, a) {
      var n = mi(e),
        i = (t.length - 1) / a,
        o,
        s,
        l,
        u;
      if (!n) return Math.max(i, 1);
      for (o = h.math._factorize(n), l = 0, u = o.length - 1; l < u; l++)
        if (((s = o[l]), s > i)) return s;
      return Math.max(i, 1);
    }
    function yi(e) {
      var t = [],
        r,
        a;
      for (r = 0, a = e.length; r < a; r++) e[r].major && t.push(r);
      return t;
    }
    function xi(e, t, r) {
      var a = 0,
        n = t[0],
        i,
        o;
      for (r = Math.ceil(r), i = 0; i < e.length; i++)
        (o = e[i]),
          i === n ? ((o._index = i), a++, (n = t[a * r])) : delete o.label;
    }
    function Qt(e, t, r, a) {
      var n = Ge(r, 0),
        i = Math.min(Ge(a, e.length), e.length),
        o = 0,
        s,
        l,
        u,
        d;
      for (
        t = Math.ceil(t),
          a && ((s = a - r), (t = s / Math.floor(s / t))),
          d = n;
        d < 0;

      )
        o++, (d = Math.round(n + o * t));
      for (l = Math.max(n, 0); l < i; l++)
        (u = e[l]),
          l === d
            ? ((u._index = l), o++, (d = Math.round(n + o * t)))
            : delete u.label;
    }
    var $r = ge.extend({
      zeroLineIndex: 0,
      getPadding: function () {
        var e = this;
        return {
          left: e.paddingLeft || 0,
          top: e.paddingTop || 0,
          right: e.paddingRight || 0,
          bottom: e.paddingBottom || 0,
        };
      },
      getTicks: function () {
        return this._ticks;
      },
      _getLabels: function () {
        var e = this.chart.data;
        return (
          this.options.labels ||
          (this.isHorizontal() ? e.xLabels : e.yLabels) ||
          e.labels ||
          []
        );
      },
      mergeTicksOptions: function () {},
      beforeUpdate: function () {
        h.callback(this.options.beforeUpdate, [this]);
      },
      update: function (e, t, r) {
        var a = this,
          n = a.options.ticks,
          i = n.sampleSize,
          o,
          s,
          l,
          u,
          d;
        if (
          (a.beforeUpdate(),
          (a.maxWidth = e),
          (a.maxHeight = t),
          (a.margins = h.extend({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
          (a._ticks = null),
          (a.ticks = null),
          (a._labelSizes = null),
          (a._maxLabelLines = 0),
          (a.longestLabelWidth = 0),
          (a.longestTextCache = a.longestTextCache || {}),
          (a._gridLineItems = null),
          (a._labelItems = null),
          a.beforeSetDimensions(),
          a.setDimensions(),
          a.afterSetDimensions(),
          a.beforeDataLimits(),
          a.determineDataLimits(),
          a.afterDataLimits(),
          a.beforeBuildTicks(),
          (u = a.buildTicks() || []),
          (u = a.afterBuildTicks(u) || u),
          (!u || !u.length) && a.ticks)
        )
          for (u = [], o = 0, s = a.ticks.length; o < s; ++o)
            u.push({ value: a.ticks[o], major: !1 });
        return (
          (a._ticks = u),
          (d = i < u.length),
          (l = a._convertTicksToLabels(d ? ci(u, i) : u)),
          a._configure(),
          a.beforeCalculateTickRotation(),
          a.calculateTickRotation(),
          a.afterCalculateTickRotation(),
          a.beforeFit(),
          a.fit(),
          a.afterFit(),
          (a._ticksToDraw =
            n.display && (n.autoSkip || n.source === "auto")
              ? a._autoSkip(u)
              : u),
          d && (l = a._convertTicksToLabels(a._ticksToDraw)),
          (a.ticks = l),
          a.afterUpdate(),
          a.minSize
        );
      },
      _configure: function () {
        var e = this,
          t = e.options.ticks.reverse,
          r,
          a;
        e.isHorizontal()
          ? ((r = e.left), (a = e.right))
          : ((r = e.top), (a = e.bottom), (t = !t)),
          (e._startPixel = r),
          (e._endPixel = a),
          (e._reversePixels = t),
          (e._length = a - r);
      },
      afterUpdate: function () {
        h.callback(this.options.afterUpdate, [this]);
      },
      beforeSetDimensions: function () {
        h.callback(this.options.beforeSetDimensions, [this]);
      },
      setDimensions: function () {
        var e = this;
        e.isHorizontal()
          ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
          : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
          (e.paddingLeft = 0),
          (e.paddingTop = 0),
          (e.paddingRight = 0),
          (e.paddingBottom = 0);
      },
      afterSetDimensions: function () {
        h.callback(this.options.afterSetDimensions, [this]);
      },
      beforeDataLimits: function () {
        h.callback(this.options.beforeDataLimits, [this]);
      },
      determineDataLimits: h.noop,
      afterDataLimits: function () {
        h.callback(this.options.afterDataLimits, [this]);
      },
      beforeBuildTicks: function () {
        h.callback(this.options.beforeBuildTicks, [this]);
      },
      buildTicks: h.noop,
      afterBuildTicks: function (e) {
        var t = this;
        return qe(e) && e.length
          ? h.callback(t.options.afterBuildTicks, [t, e])
          : ((t.ticks =
              h.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks),
            e);
      },
      beforeTickToLabelConversion: function () {
        h.callback(this.options.beforeTickToLabelConversion, [this]);
      },
      convertTicksToLabels: function () {
        var e = this,
          t = e.options.ticks;
        e.ticks = e.ticks.map(t.userCallback || t.callback, this);
      },
      afterTickToLabelConversion: function () {
        h.callback(this.options.afterTickToLabelConversion, [this]);
      },
      beforeCalculateTickRotation: function () {
        h.callback(this.options.beforeCalculateTickRotation, [this]);
      },
      calculateTickRotation: function () {
        var e = this,
          t = e.options,
          r = t.ticks,
          a = e.getTicks().length,
          n = r.minRotation || 0,
          i = r.maxRotation,
          o = n,
          s,
          l,
          u,
          d,
          f,
          c,
          g;
        if (
          !e._isVisible() ||
          !r.display ||
          n >= i ||
          a <= 1 ||
          !e.isHorizontal()
        ) {
          e.labelRotation = n;
          return;
        }
        (s = e._getLabelSizes()),
          (l = s.widest.width),
          (u = s.highest.height - s.highest.offset),
          (d = Math.min(e.maxWidth, e.chart.width - l)),
          (f = t.offset ? e.maxWidth / a : d / (a - 1)),
          l + 6 > f &&
            ((f = d / (a - (t.offset ? 0.5 : 1))),
            (c = e.maxHeight - Ot(t.gridLines) - r.padding - Hr(t.scaleLabel)),
            (g = Math.sqrt(l * l + u * u)),
            (o = h.toDegrees(
              Math.min(
                Math.asin(Math.min((s.highest.height + 6) / f, 1)),
                Math.asin(Math.min(c / g, 1)) - Math.asin(u / g)
              )
            )),
            (o = Math.max(n, Math.min(i, o)))),
          (e.labelRotation = o);
      },
      afterCalculateTickRotation: function () {
        h.callback(this.options.afterCalculateTickRotation, [this]);
      },
      beforeFit: function () {
        h.callback(this.options.beforeFit, [this]);
      },
      fit: function () {
        var e = this,
          t = (e.minSize = { width: 0, height: 0 }),
          r = e.chart,
          a = e.options,
          n = a.ticks,
          i = a.scaleLabel,
          o = a.gridLines,
          s = e._isVisible(),
          l = a.position === "bottom",
          u = e.isHorizontal();
        if (
          (u ? (t.width = e.maxWidth) : s && (t.width = Ot(o) + Hr(i)),
          u ? s && (t.height = Ot(o) + Hr(i)) : (t.height = e.maxHeight),
          n.display && s)
        ) {
          var d = Vr(n),
            f = e._getLabelSizes(),
            c = f.first,
            g = f.last,
            p = f.widest,
            m = f.highest,
            y = d.minor.lineHeight * 0.4,
            k = n.padding;
          if (u) {
            var C = e.labelRotation !== 0,
              O = h.toRadians(e.labelRotation),
              B = Math.cos(O),
              I = Math.sin(O),
              H =
                I * p.width + B * (m.height - (C ? m.offset : 0)) + (C ? 0 : y);
            t.height = Math.min(e.maxHeight, t.height + H + k);
            var W = e.getPixelForTick(0) - e.left,
              j = e.right - e.getPixelForTick(e.getTicks().length - 1),
              q,
              X;
            C
              ? ((q = l
                  ? B * c.width + I * c.offset
                  : I * (c.height - c.offset)),
                (X = l
                  ? I * (g.height - g.offset)
                  : B * g.width + I * g.offset))
              : ((q = c.width / 2), (X = g.width / 2)),
              (e.paddingLeft =
                Math.max(((q - W) * e.width) / (e.width - W), 0) + 3),
              (e.paddingRight =
                Math.max(((X - j) * e.width) / (e.width - j), 0) + 3);
          } else {
            var K = n.mirror ? 0 : p.width + k + y;
            (t.width = Math.min(e.maxWidth, t.width + K)),
              (e.paddingTop = c.height / 2),
              (e.paddingBottom = g.height / 2);
          }
        }
        e.handleMargins(),
          u
            ? ((e.width = e._length =
                r.width - e.margins.left - e.margins.right),
              (e.height = t.height))
            : ((e.width = t.width),
              (e.height = e._length =
                r.height - e.margins.top - e.margins.bottom));
      },
      handleMargins: function () {
        var e = this;
        e.margins &&
          ((e.margins.left = Math.max(e.paddingLeft, e.margins.left)),
          (e.margins.top = Math.max(e.paddingTop, e.margins.top)),
          (e.margins.right = Math.max(e.paddingRight, e.margins.right)),
          (e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom)));
      },
      afterFit: function () {
        h.callback(this.options.afterFit, [this]);
      },
      isHorizontal: function () {
        var e = this.options.position;
        return e === "top" || e === "bottom";
      },
      isFullWidth: function () {
        return this.options.fullWidth;
      },
      getRightValue: function (e) {
        if (Dt(e)) return NaN;
        if ((typeof e == "number" || e instanceof Number) && !isFinite(e))
          return NaN;
        if (e) {
          if (this.isHorizontal()) {
            if (e.x !== void 0) return this.getRightValue(e.x);
          } else if (e.y !== void 0) return this.getRightValue(e.y);
        }
        return e;
      },
      _convertTicksToLabels: function (e) {
        var t = this,
          r,
          a,
          n;
        for (
          t.ticks = e.map(function (i) {
            return i.value;
          }),
            t.beforeTickToLabelConversion(),
            r = t.convertTicksToLabels(e) || t.ticks,
            t.afterTickToLabelConversion(),
            a = 0,
            n = e.length;
          a < n;
          ++a
        )
          e[a].label = r[a];
        return r;
      },
      _getLabelSizes: function () {
        var e = this,
          t = e._labelSizes;
        return (
          t ||
            ((e._labelSizes = t =
              pi(e.ctx, Vr(e.options.ticks), e.getTicks(), e.longestTextCache)),
            (e.longestLabelWidth = t.widest.width)),
          t
        );
      },
      _parseValue: function (e) {
        var t, r, a, n;
        return (
          qe(e)
            ? ((t = +this.getRightValue(e[0])),
              (r = +this.getRightValue(e[1])),
              (a = Math.min(t, r)),
              (n = Math.max(t, r)))
            : ((e = +this.getRightValue(e)),
              (t = void 0),
              (r = e),
              (a = e),
              (n = e)),
          { min: a, max: n, start: t, end: r }
        );
      },
      _getScaleLabel: function (e) {
        var t = this._parseValue(e);
        return t.start !== void 0
          ? "[" + t.start + ", " + t.end + "]"
          : +this.getRightValue(e);
      },
      getLabelForIndex: h.noop,
      getPixelForValue: h.noop,
      getValueForPixel: h.noop,
      getPixelForTick: function (e) {
        var t = this,
          r = t.options.offset,
          a = t._ticks.length,
          n = 1 / Math.max(a - (r ? 0 : 1), 1);
        return e < 0 || e > a - 1
          ? null
          : t.getPixelForDecimal(e * n + (r ? n / 2 : 0));
      },
      getPixelForDecimal: function (e) {
        var t = this;
        return t._reversePixels && (e = 1 - e), t._startPixel + e * t._length;
      },
      getDecimalForPixel: function (e) {
        var t = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - t : t;
      },
      getBasePixel: function () {
        return this.getPixelForValue(this.getBaseValue());
      },
      getBaseValue: function () {
        var e = this,
          t = e.min,
          r = e.max;
        return e.beginAtZero ? 0 : t < 0 && r < 0 ? r : t > 0 && r > 0 ? t : 0;
      },
      _autoSkip: function (e) {
        var t = this,
          r = t.options.ticks,
          a = t._length,
          n = r.maxTicksLimit || a / t._tickSize() + 1,
          i = r.major.enabled ? yi(e) : [],
          o = i.length,
          s = i[0],
          l = i[o - 1],
          u,
          d,
          f,
          c;
        if (o > n) return xi(e, i, o / n), jr(e);
        if (((f = bi(i, e, a, n)), o > 0)) {
          for (u = 0, d = o - 1; u < d; u++) Qt(e, f, i[u], i[u + 1]);
          return (
            (c = o > 1 ? (l - s) / (o - 1) : null),
            Qt(e, f, h.isNullOrUndef(c) ? 0 : s - c, s),
            Qt(e, f, l, h.isNullOrUndef(c) ? e.length : l + c),
            jr(e)
          );
        }
        return Qt(e, f), jr(e);
      },
      _tickSize: function () {
        var e = this,
          t = e.options.ticks,
          r = h.toRadians(e.labelRotation),
          a = Math.abs(Math.cos(r)),
          n = Math.abs(Math.sin(r)),
          i = e._getLabelSizes(),
          o = t.autoSkipPadding || 0,
          s = i ? i.widest.width + o : 0,
          l = i ? i.highest.height + o : 0;
        return e.isHorizontal()
          ? l * a > s * n
            ? s / a
            : l / n
          : l * n < s * a
          ? l / a
          : s / n;
      },
      _isVisible: function () {
        var e = this,
          t = e.chart,
          r = e.options.display,
          a,
          n,
          i;
        if (r !== "auto") return !!r;
        for (a = 0, n = t.data.datasets.length; a < n; ++a)
          if (
            t.isDatasetVisible(a) &&
            ((i = t.getDatasetMeta(a)),
            i.xAxisID === e.id || i.yAxisID === e.id)
          )
            return !0;
        return !1;
      },
      _computeGridLineItems: function (e) {
        var t = this,
          r = t.chart,
          a = t.options,
          n = a.gridLines,
          i = a.position,
          o = n.offsetGridLines,
          s = t.isHorizontal(),
          l = t._ticksToDraw,
          u = l.length + (o ? 1 : 0),
          d = Ot(n),
          f = [],
          c = n.drawBorder ? lt(n.lineWidth, 0, 0) : 0,
          g = c / 2,
          p = h._alignPixel,
          m = function (xo) {
            return p(r, xo, c);
          },
          y,
          k,
          C,
          O,
          B,
          I,
          H,
          W,
          j,
          q,
          X,
          K,
          Y,
          ee,
          ut,
          dt,
          Jr;
        for (
          i === "top"
            ? ((y = m(t.bottom)),
              (H = t.bottom - d),
              (j = y - g),
              (X = m(e.top) + g),
              (Y = e.bottom))
            : i === "bottom"
            ? ((y = m(t.top)),
              (X = e.top),
              (Y = m(e.bottom) - g),
              (H = y + g),
              (j = t.top + d))
            : i === "left"
            ? ((y = m(t.right)),
              (I = t.right - d),
              (W = y - g),
              (q = m(e.left) + g),
              (K = e.right))
            : ((y = m(t.left)),
              (q = e.left),
              (K = m(e.right) - g),
              (I = y + g),
              (W = t.left + d)),
            k = 0;
          k < u;
          ++k
        )
          (C = l[k] || {}),
            !(Dt(C.label) && k < l.length) &&
              (k === t.zeroLineIndex && a.offset === o
                ? ((ee = n.zeroLineWidth),
                  (ut = n.zeroLineColor),
                  (dt = n.zeroLineBorderDash || []),
                  (Jr = n.zeroLineBorderDashOffset || 0))
                : ((ee = lt(n.lineWidth, k, 1)),
                  (ut = lt(n.color, k, "rgba(0,0,0,0.1)")),
                  (dt = n.borderDash || []),
                  (Jr = n.borderDashOffset || 0)),
              (O = vi(t, C._index || k, o)),
              O !== void 0 &&
                ((B = p(r, O, ee)),
                s ? (I = W = q = K = B) : (H = j = X = Y = B),
                f.push({
                  tx1: I,
                  ty1: H,
                  tx2: W,
                  ty2: j,
                  x1: q,
                  y1: X,
                  x2: K,
                  y2: Y,
                  width: ee,
                  color: ut,
                  borderDash: dt,
                  borderDashOffset: Jr,
                })));
        return (f.ticksLength = u), (f.borderValue = y), f;
      },
      _computeLabelItems: function () {
        var e = this,
          t = e.options,
          r = t.ticks,
          a = t.position,
          n = r.mirror,
          i = e.isHorizontal(),
          o = e._ticksToDraw,
          s = Vr(r),
          l = r.padding,
          u = Ot(t.gridLines),
          d = -h.toRadians(e.labelRotation),
          f = [],
          c,
          g,
          p,
          m,
          y,
          k,
          C,
          O,
          B,
          I,
          H,
          W;
        for (
          a === "top"
            ? ((k = e.bottom - u - l), (C = d ? "left" : "center"))
            : a === "bottom"
            ? ((k = e.top + u + l), (C = d ? "right" : "center"))
            : a === "left"
            ? ((y = e.right - (n ? 0 : u) - l), (C = n ? "left" : "right"))
            : ((y = e.left + (n ? 0 : u) + l), (C = n ? "right" : "left")),
            c = 0,
            g = o.length;
          c < g;
          ++c
        )
          (p = o[c]),
            (m = p.label),
            !Dt(m) &&
              ((O = e.getPixelForTick(p._index || c) + r.labelOffset),
              (B = p.major ? s.major : s.minor),
              (I = B.lineHeight),
              (H = qe(m) ? m.length : 1),
              i
                ? ((y = O),
                  (W =
                    a === "top" ? ((d ? 1 : 0.5) - H) * I : (d ? 0 : 0.5) * I))
                : ((k = O), (W = ((1 - H) * I) / 2)),
              f.push({
                x: y,
                y: k,
                rotation: d,
                label: m,
                font: B,
                textOffset: W,
                textAlign: C,
              }));
        return f;
      },
      _drawGrid: function (e) {
        var t = this,
          r = t.options.gridLines;
        if (!!r.display) {
          var a = t.ctx,
            n = t.chart,
            i = h._alignPixel,
            o = r.drawBorder ? lt(r.lineWidth, 0, 0) : 0,
            s =
              t._gridLineItems ||
              (t._gridLineItems = t._computeGridLineItems(e)),
            l,
            u,
            d,
            f,
            c;
          for (d = 0, f = s.length; d < f; ++d)
            (c = s[d]),
              (l = c.width),
              (u = c.color),
              l &&
                u &&
                (a.save(),
                (a.lineWidth = l),
                (a.strokeStyle = u),
                a.setLineDash &&
                  (a.setLineDash(c.borderDash),
                  (a.lineDashOffset = c.borderDashOffset)),
                a.beginPath(),
                r.drawTicks && (a.moveTo(c.tx1, c.ty1), a.lineTo(c.tx2, c.ty2)),
                r.drawOnChartArea &&
                  (a.moveTo(c.x1, c.y1), a.lineTo(c.x2, c.y2)),
                a.stroke(),
                a.restore());
          if (o) {
            var g = o,
              p = lt(r.lineWidth, s.ticksLength - 1, 1),
              m = s.borderValue,
              y,
              k,
              C,
              O;
            t.isHorizontal()
              ? ((y = i(n, t.left, g) - g / 2),
                (k = i(n, t.right, p) + p / 2),
                (C = O = m))
              : ((C = i(n, t.top, g) - g / 2),
                (O = i(n, t.bottom, p) + p / 2),
                (y = k = m)),
              (a.lineWidth = o),
              (a.strokeStyle = lt(r.color, 0)),
              a.beginPath(),
              a.moveTo(y, C),
              a.lineTo(k, O),
              a.stroke();
          }
        }
      },
      _drawLabels: function () {
        var e = this,
          t = e.options.ticks;
        if (!!t.display) {
          var r = e.ctx,
            a = e._labelItems || (e._labelItems = e._computeLabelItems()),
            n,
            i,
            o,
            s,
            l,
            u,
            d,
            f;
          for (n = 0, o = a.length; n < o; ++n) {
            if (
              ((l = a[n]),
              (u = l.font),
              r.save(),
              r.translate(l.x, l.y),
              r.rotate(l.rotation),
              (r.font = u.string),
              (r.fillStyle = u.color),
              (r.textBaseline = "middle"),
              (r.textAlign = l.textAlign),
              (d = l.label),
              (f = l.textOffset),
              qe(d))
            )
              for (i = 0, s = d.length; i < s; ++i)
                r.fillText("" + d[i], 0, f), (f += u.lineHeight);
            else r.fillText(d, 0, f);
            r.restore();
          }
        }
      },
      _drawTitle: function () {
        var e = this,
          t = e.ctx,
          r = e.options,
          a = r.scaleLabel;
        if (!!a.display) {
          var n = Ge(a.fontColor, A.global.defaultFontColor),
            i = h.options._parseFont(a),
            o = h.options.toPadding(a.padding),
            s = i.lineHeight / 2,
            l = r.position,
            u = 0,
            d,
            f;
          if (e.isHorizontal())
            (d = e.left + e.width / 2),
              (f =
                l === "bottom" ? e.bottom - s - o.bottom : e.top + s + o.top);
          else {
            var c = l === "left";
            (d = c ? e.left + s + o.top : e.right - s - o.top),
              (f = e.top + e.height / 2),
              (u = c ? -0.5 * Math.PI : 0.5 * Math.PI);
          }
          t.save(),
            t.translate(d, f),
            t.rotate(u),
            (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            (t.fillStyle = n),
            (t.font = i.string),
            t.fillText(a.labelString, 0, 0),
            t.restore();
        }
      },
      draw: function (e) {
        var t = this;
        !t._isVisible() || (t._drawGrid(e), t._drawTitle(), t._drawLabels());
      },
      _layers: function () {
        var e = this,
          t = e.options,
          r = (t.ticks && t.ticks.z) || 0,
          a = (t.gridLines && t.gridLines.z) || 0;
        return !e._isVisible() || r === a || e.draw !== e._draw
          ? [
              {
                z: r,
                draw: function () {
                  e.draw.apply(e, arguments);
                },
              },
            ]
          : [
              {
                z: a,
                draw: function () {
                  e._drawGrid.apply(e, arguments),
                    e._drawTitle.apply(e, arguments);
                },
              },
              {
                z: r,
                draw: function () {
                  e._drawLabels.apply(e, arguments);
                },
              },
            ];
      },
      _getMatchingVisibleMetas: function (e) {
        var t = this,
          r = t.isHorizontal();
        return t.chart._getSortedVisibleDatasetMetas().filter(function (a) {
          return (
            (!e || a.type === e) &&
            (r ? a.xAxisID === t.id : a.yAxisID === t.id)
          );
        });
      },
    });
    $r.prototype._draw = $r.prototype.draw;
    var ue = $r,
      qr = h.isNullOrUndef,
      _i = { position: "bottom" },
      Ca = ue.extend({
        determineDataLimits: function () {
          var e = this,
            t = e._getLabels(),
            r = e.options.ticks,
            a = r.min,
            n = r.max,
            i = 0,
            o = t.length - 1,
            s;
          a !== void 0 && ((s = t.indexOf(a)), s >= 0 && (i = s)),
            n !== void 0 && ((s = t.indexOf(n)), s >= 0 && (o = s)),
            (e.minIndex = i),
            (e.maxIndex = o),
            (e.min = t[i]),
            (e.max = t[o]);
        },
        buildTicks: function () {
          var e = this,
            t = e._getLabels(),
            r = e.minIndex,
            a = e.maxIndex;
          e.ticks = r === 0 && a === t.length - 1 ? t : t.slice(r, a + 1);
        },
        getLabelForIndex: function (e, t) {
          var r = this,
            a = r.chart;
          return a.getDatasetMeta(t).controller._getValueScaleId() === r.id
            ? r.getRightValue(a.data.datasets[t].data[e])
            : r._getLabels()[e];
        },
        _configure: function () {
          var e = this,
            t = e.options.offset,
            r = e.ticks;
          ue.prototype._configure.call(e),
            e.isHorizontal() || (e._reversePixels = !e._reversePixels),
            r &&
              ((e._startValue = e.minIndex - (t ? 0.5 : 0)),
              (e._valueRange = Math.max(r.length - (t ? 0 : 1), 1)));
        },
        getPixelForValue: function (e, t, r) {
          var a = this,
            n,
            i,
            o;
          return (
            !qr(t) && !qr(r) && (e = a.chart.data.datasets[r].data[t]),
            qr(e) || (n = a.isHorizontal() ? e.x : e.y),
            (n !== void 0 || (e !== void 0 && isNaN(t))) &&
              ((i = a._getLabels()),
              (e = h.valueOrDefault(n, e)),
              (o = i.indexOf(e)),
              (t = o !== -1 ? o : t),
              isNaN(t) && (t = e)),
            a.getPixelForDecimal((t - a._startValue) / a._valueRange)
          );
        },
        getPixelForTick: function (e) {
          var t = this.ticks;
          return e < 0 || e > t.length - 1
            ? null
            : this.getPixelForValue(t[e], e + this.minIndex);
        },
        getValueForPixel: function (e) {
          var t = this,
            r = Math.round(
              t._startValue + t.getDecimalForPixel(e) * t._valueRange
            );
          return Math.min(Math.max(r, 0), t.ticks.length - 1);
        },
        getBasePixel: function () {
          return this.bottom;
        },
      }),
      wi = _i;
    Ca._defaults = wi;
    var ki = h.noop,
      Ue = h.isNullOrUndef;
    function Si(e, t) {
      var r = [],
        a = 1e-14,
        n = e.stepSize,
        i = n || 1,
        o = e.maxTicks - 1,
        s = e.min,
        l = e.max,
        u = e.precision,
        d = t.min,
        f = t.max,
        c = h.niceNum((f - d) / o / i) * i,
        g,
        p,
        m,
        y;
      if (c < a && Ue(s) && Ue(l)) return [d, f];
      (y = Math.ceil(f / c) - Math.floor(d / c)),
        y > o && (c = h.niceNum((y * c) / o / i) * i),
        n || Ue(u)
          ? (g = Math.pow(10, h._decimalPlaces(c)))
          : ((g = Math.pow(10, u)), (c = Math.ceil(c * g) / g)),
        (p = Math.floor(d / c) * c),
        (m = Math.ceil(f / c) * c),
        n &&
          (!Ue(s) && h.almostWhole(s / c, c / 1e3) && (p = s),
          !Ue(l) && h.almostWhole(l / c, c / 1e3) && (m = l)),
        (y = (m - p) / c),
        h.almostEquals(y, Math.round(y), c / 1e3)
          ? (y = Math.round(y))
          : (y = Math.ceil(y)),
        (p = Math.round(p * g) / g),
        (m = Math.round(m * g) / g),
        r.push(Ue(s) ? p : s);
      for (var k = 1; k < y; ++k) r.push(Math.round((p + k * c) * g) / g);
      return r.push(Ue(l) ? m : l), r;
    }
    var Jt = ue.extend({
        getRightValue: function (e) {
          return typeof e == "string"
            ? +e
            : ue.prototype.getRightValue.call(this, e);
        },
        handleTickRangeOptions: function () {
          var e = this,
            t = e.options,
            r = t.ticks;
          if (r.beginAtZero) {
            var a = h.sign(e.min),
              n = h.sign(e.max);
            a < 0 && n < 0 ? (e.max = 0) : a > 0 && n > 0 && (e.min = 0);
          }
          var i = r.min !== void 0 || r.suggestedMin !== void 0,
            o = r.max !== void 0 || r.suggestedMax !== void 0;
          r.min !== void 0
            ? (e.min = r.min)
            : r.suggestedMin !== void 0 &&
              (e.min === null
                ? (e.min = r.suggestedMin)
                : (e.min = Math.min(e.min, r.suggestedMin))),
            r.max !== void 0
              ? (e.max = r.max)
              : r.suggestedMax !== void 0 &&
                (e.max === null
                  ? (e.max = r.suggestedMax)
                  : (e.max = Math.max(e.max, r.suggestedMax))),
            i !== o &&
              e.min >= e.max &&
              (i ? (e.max = e.min + 1) : (e.min = e.max - 1)),
            e.min === e.max && (e.max++, r.beginAtZero || e.min--);
        },
        getTickLimit: function () {
          var e = this,
            t = e.options.ticks,
            r = t.stepSize,
            a = t.maxTicksLimit,
            n;
          return (
            r
              ? (n = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1)
              : ((n = e._computeTickLimit()), (a = a || 11)),
            a && (n = Math.min(a, n)),
            n
          );
        },
        _computeTickLimit: function () {
          return Number.POSITIVE_INFINITY;
        },
        handleDirectionalChanges: ki,
        buildTicks: function () {
          var e = this,
            t = e.options,
            r = t.ticks,
            a = e.getTickLimit();
          a = Math.max(2, a);
          var n = {
              maxTicks: a,
              min: r.min,
              max: r.max,
              precision: r.precision,
              stepSize: h.valueOrDefault(r.fixedStepSize, r.stepSize),
            },
            i = (e.ticks = Si(n, e));
          e.handleDirectionalChanges(),
            (e.max = h.max(i)),
            (e.min = h.min(i)),
            r.reverse
              ? (i.reverse(), (e.start = e.max), (e.end = e.min))
              : ((e.start = e.min), (e.end = e.max));
        },
        convertTicksToLabels: function () {
          var e = this;
          (e.ticksAsNumbers = e.ticks.slice()),
            (e.zeroLineIndex = e.ticks.indexOf(0)),
            ue.prototype.convertTicksToLabels.call(e);
        },
        _configure: function () {
          var e = this,
            t = e.getTicks(),
            r = e.min,
            a = e.max,
            n;
          ue.prototype._configure.call(e),
            e.options.offset &&
              t.length &&
              ((n = (a - r) / Math.max(t.length - 1, 1) / 2),
              (r -= n),
              (a += n)),
            (e._startValue = r),
            (e._endValue = a),
            (e._valueRange = a - r);
        },
      }),
      Mi = { position: "left", ticks: { callback: Pt.formatters.linear } },
      Ci = 0,
      Pi = 1;
    function Di(e, t, r) {
      var a = [
        r.type,
        t === void 0 && r.stack === void 0 ? r.index : "",
        r.stack,
      ].join(".");
      return e[a] === void 0 && (e[a] = { pos: [], neg: [] }), e[a];
    }
    function Oi(e, t, r, a) {
      var n = e.options,
        i = n.stacked,
        o = Di(t, i, r),
        s = o.pos,
        l = o.neg,
        u = a.length,
        d,
        f;
      for (d = 0; d < u; ++d)
        (f = e._parseValue(a[d])),
          !(isNaN(f.min) || isNaN(f.max) || r.data[d].hidden) &&
            ((s[d] = s[d] || 0),
            (l[d] = l[d] || 0),
            n.relativePoints
              ? (s[d] = 100)
              : f.min < 0 || f.max < 0
              ? (l[d] += f.min)
              : (s[d] += f.max));
    }
    function Ai(e, t, r) {
      var a = r.length,
        n,
        i;
      for (n = 0; n < a; ++n)
        (i = e._parseValue(r[n])),
          !(isNaN(i.min) || isNaN(i.max) || t.data[n].hidden) &&
            ((e.min = Math.min(e.min, i.min)),
            (e.max = Math.max(e.max, i.max)));
    }
    var Pa = Jt.extend({
        determineDataLimits: function () {
          var e = this,
            t = e.options,
            r = e.chart,
            a = r.data.datasets,
            n = e._getMatchingVisibleMetas(),
            i = t.stacked,
            o = {},
            s = n.length,
            l,
            u,
            d,
            f;
          if (
            ((e.min = Number.POSITIVE_INFINITY),
            (e.max = Number.NEGATIVE_INFINITY),
            i === void 0)
          )
            for (l = 0; !i && l < s; ++l) (u = n[l]), (i = u.stack !== void 0);
          for (l = 0; l < s; ++l)
            (u = n[l]), (d = a[u.index].data), i ? Oi(e, o, u, d) : Ai(e, u, d);
          h.each(o, function (c) {
            (f = c.pos.concat(c.neg)),
              (e.min = Math.min(e.min, h.min(f))),
              (e.max = Math.max(e.max, h.max(f)));
          }),
            (e.min = h.isFinite(e.min) && !isNaN(e.min) ? e.min : Ci),
            (e.max = h.isFinite(e.max) && !isNaN(e.max) ? e.max : Pi),
            e.handleTickRangeOptions();
        },
        _computeTickLimit: function () {
          var e = this,
            t;
          return e.isHorizontal()
            ? Math.ceil(e.width / 40)
            : ((t = h.options._parseFont(e.options.ticks)),
              Math.ceil(e.height / t.lineHeight));
        },
        handleDirectionalChanges: function () {
          this.isHorizontal() || this.ticks.reverse();
        },
        getLabelForIndex: function (e, t) {
          return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
        },
        getPixelForValue: function (e) {
          var t = this;
          return t.getPixelForDecimal(
            (+t.getRightValue(e) - t._startValue) / t._valueRange
          );
        },
        getValueForPixel: function (e) {
          return (
            this._startValue + this.getDecimalForPixel(e) * this._valueRange
          );
        },
        getPixelForTick: function (e) {
          var t = this.ticksAsNumbers;
          return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]);
        },
      }),
      Ti = Mi;
    Pa._defaults = Ti;
    var Gr = h.valueOrDefault,
      de = h.math.log10;
    function Fi(e, t) {
      var r = [],
        a = Gr(e.min, Math.pow(10, Math.floor(de(t.min)))),
        n = Math.floor(de(t.max)),
        i = Math.ceil(t.max / Math.pow(10, n)),
        o,
        s;
      a === 0
        ? ((o = Math.floor(de(t.minNotZero))),
          (s = Math.floor(t.minNotZero / Math.pow(10, o))),
          r.push(a),
          (a = s * Math.pow(10, o)))
        : ((o = Math.floor(de(a))), (s = Math.floor(a / Math.pow(10, o))));
      var l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
      do
        r.push(a),
          ++s,
          s === 10 && ((s = 1), ++o, (l = o >= 0 ? 1 : l)),
          (a = Math.round(s * Math.pow(10, o) * l) / l);
      while (o < n || (o === n && s < i));
      var u = Gr(e.max, a);
      return r.push(u), r;
    }
    var Ii = {
      position: "left",
      ticks: { callback: Pt.formatters.logarithmic },
    };
    function er(e, t) {
      return h.isFinite(e) && e >= 0 ? e : t;
    }
    var Da = ue.extend({
        determineDataLimits: function () {
          var e = this,
            t = e.options,
            r = e.chart,
            a = r.data.datasets,
            n = e.isHorizontal();
          function i(y) {
            return n ? y.xAxisID === e.id : y.yAxisID === e.id;
          }
          var o, s, l, u, d, f;
          (e.min = Number.POSITIVE_INFINITY),
            (e.max = Number.NEGATIVE_INFINITY),
            (e.minNotZero = Number.POSITIVE_INFINITY);
          var c = t.stacked;
          if (c === void 0) {
            for (o = 0; o < a.length; o++)
              if (
                ((s = r.getDatasetMeta(o)),
                r.isDatasetVisible(o) && i(s) && s.stack !== void 0)
              ) {
                c = !0;
                break;
              }
          }
          if (t.stacked || c) {
            var g = {};
            for (o = 0; o < a.length; o++) {
              s = r.getDatasetMeta(o);
              var p = [
                s.type,
                t.stacked === void 0 && s.stack === void 0 ? o : "",
                s.stack,
              ].join(".");
              if (r.isDatasetVisible(o) && i(s))
                for (
                  g[p] === void 0 && (g[p] = []),
                    u = a[o].data,
                    d = 0,
                    f = u.length;
                  d < f;
                  d++
                ) {
                  var m = g[p];
                  (l = e._parseValue(u[d])),
                    !(
                      isNaN(l.min) ||
                      isNaN(l.max) ||
                      s.data[d].hidden ||
                      l.min < 0 ||
                      l.max < 0
                    ) && ((m[d] = m[d] || 0), (m[d] += l.max));
                }
            }
            h.each(g, function (y) {
              if (y.length > 0) {
                var k = h.min(y),
                  C = h.max(y);
                (e.min = Math.min(e.min, k)), (e.max = Math.max(e.max, C));
              }
            });
          } else
            for (o = 0; o < a.length; o++)
              if (((s = r.getDatasetMeta(o)), r.isDatasetVisible(o) && i(s)))
                for (u = a[o].data, d = 0, f = u.length; d < f; d++)
                  (l = e._parseValue(u[d])),
                    !(
                      isNaN(l.min) ||
                      isNaN(l.max) ||
                      s.data[d].hidden ||
                      l.min < 0 ||
                      l.max < 0
                    ) &&
                      ((e.min = Math.min(l.min, e.min)),
                      (e.max = Math.max(l.max, e.max)),
                      l.min !== 0 &&
                        (e.minNotZero = Math.min(l.min, e.minNotZero)));
          (e.min = h.isFinite(e.min) ? e.min : null),
            (e.max = h.isFinite(e.max) ? e.max : null),
            (e.minNotZero = h.isFinite(e.minNotZero) ? e.minNotZero : null),
            this.handleTickRangeOptions();
        },
        handleTickRangeOptions: function () {
          var e = this,
            t = e.options.ticks,
            r = 1,
            a = 10;
          (e.min = er(t.min, e.min)),
            (e.max = er(t.max, e.max)),
            e.min === e.max &&
              (e.min !== 0 && e.min !== null
                ? ((e.min = Math.pow(10, Math.floor(de(e.min)) - 1)),
                  (e.max = Math.pow(10, Math.floor(de(e.max)) + 1)))
                : ((e.min = r), (e.max = a))),
            e.min === null && (e.min = Math.pow(10, Math.floor(de(e.max)) - 1)),
            e.max === null &&
              (e.max =
                e.min !== 0 ? Math.pow(10, Math.floor(de(e.min)) + 1) : a),
            e.minNotZero === null &&
              (e.min > 0
                ? (e.minNotZero = e.min)
                : e.max < 1
                ? (e.minNotZero = Math.pow(10, Math.floor(de(e.max))))
                : (e.minNotZero = r));
        },
        buildTicks: function () {
          var e = this,
            t = e.options.ticks,
            r = !e.isHorizontal(),
            a = { min: er(t.min), max: er(t.max) },
            n = (e.ticks = Fi(a, e));
          (e.max = h.max(n)),
            (e.min = h.min(n)),
            t.reverse
              ? ((r = !r), (e.start = e.max), (e.end = e.min))
              : ((e.start = e.min), (e.end = e.max)),
            r && n.reverse();
        },
        convertTicksToLabels: function () {
          (this.tickValues = this.ticks.slice()),
            ue.prototype.convertTicksToLabels.call(this);
        },
        getLabelForIndex: function (e, t) {
          return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
        },
        getPixelForTick: function (e) {
          var t = this.tickValues;
          return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]);
        },
        _getFirstTickValue: function (e) {
          var t = Math.floor(de(e)),
            r = Math.floor(e / Math.pow(10, t));
          return r * Math.pow(10, t);
        },
        _configure: function () {
          var e = this,
            t = e.min,
            r = 0;
          ue.prototype._configure.call(e),
            t === 0 &&
              ((t = e._getFirstTickValue(e.minNotZero)),
              (r =
                Gr(e.options.ticks.fontSize, A.global.defaultFontSize) /
                e._length)),
            (e._startValue = de(t)),
            (e._valueOffset = r),
            (e._valueRange = (de(e.max) - de(t)) / (1 - r));
        },
        getPixelForValue: function (e) {
          var t = this,
            r = 0;
          return (
            (e = +t.getRightValue(e)),
            e > t.min &&
              e > 0 &&
              (r = (de(e) - t._startValue) / t._valueRange + t._valueOffset),
            t.getPixelForDecimal(r)
          );
        },
        getValueForPixel: function (e) {
          var t = this,
            r = t.getDecimalForPixel(e);
          return r === 0 && t.min === 0
            ? 0
            : Math.pow(
                10,
                t._startValue + (r - t._valueOffset) * t._valueRange
              );
        },
      }),
      Li = Ii;
    Da._defaults = Li;
    var tr = h.valueOrDefault,
      Ur = h.valueAtIndexOrDefault,
      Oa = h.options.resolve,
      Bi = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
          display: !0,
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        gridLines: { circular: !1 },
        ticks: {
          showLabelBackdrop: !0,
          backdropColor: "rgba(255,255,255,0.75)",
          backdropPaddingY: 2,
          backdropPaddingX: 2,
          callback: Pt.formatters.linear,
        },
        pointLabels: {
          display: !0,
          fontSize: 10,
          callback: function (e) {
            return e;
          },
        },
      };
    function Yr(e) {
      var t = e.ticks;
      return t.display && e.display
        ? tr(t.fontSize, A.global.defaultFontSize) + t.backdropPaddingY * 2
        : 0;
    }
    function Ri(e, t, r) {
      return h.isArray(r)
        ? { w: h.longestText(e, e.font, r), h: r.length * t }
        : { w: e.measureText(r).width, h: t };
    }
    function Aa(e, t, r, a, n) {
      return e === a || e === n
        ? { start: t - r / 2, end: t + r / 2 }
        : e < a || e > n
        ? { start: t - r, end: t }
        : { start: t, end: t + r };
    }
    function Ni(e) {
      var t = h.options._parseFont(e.options.pointLabels),
        r = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
        a = {},
        n,
        i,
        o;
      (e.ctx.font = t.string), (e._pointLabelSizes = []);
      var s = e.chart.data.labels.length;
      for (n = 0; n < s; n++) {
        (o = e.getPointPosition(n, e.drawingArea + 5)),
          (i = Ri(e.ctx, t.lineHeight, e.pointLabels[n])),
          (e._pointLabelSizes[n] = i);
        var l = e.getIndexAngle(n),
          u = h.toDegrees(l) % 360,
          d = Aa(u, o.x, i.w, 0, 180),
          f = Aa(u, o.y, i.h, 90, 270);
        d.start < r.l && ((r.l = d.start), (a.l = l)),
          d.end > r.r && ((r.r = d.end), (a.r = l)),
          f.start < r.t && ((r.t = f.start), (a.t = l)),
          f.end > r.b && ((r.b = f.end), (a.b = l));
      }
      e.setReductions(e.drawingArea, r, a);
    }
    function Ei(e) {
      return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
    }
    function zi(e, t, r, a) {
      var n = r.y + a / 2,
        i,
        o;
      if (h.isArray(t))
        for (i = 0, o = t.length; i < o; ++i)
          e.fillText(t[i], r.x, n), (n += a);
      else e.fillText(t, r.x, n);
    }
    function Wi(e, t, r) {
      e === 90 || e === 270
        ? (r.y -= t.h / 2)
        : (e > 270 || e < 90) && (r.y -= t.h);
    }
    function Hi(e) {
      var t = e.ctx,
        r = e.options,
        a = r.pointLabels,
        n = Yr(r),
        i = e.getDistanceFromCenterForValue(r.ticks.reverse ? e.min : e.max),
        o = h.options._parseFont(a);
      t.save(), (t.font = o.string), (t.textBaseline = "middle");
      for (var s = e.chart.data.labels.length - 1; s >= 0; s--) {
        var l = s === 0 ? n / 2 : 0,
          u = e.getPointPosition(s, i + l + 5),
          d = Ur(a.fontColor, s, A.global.defaultFontColor);
        t.fillStyle = d;
        var f = e.getIndexAngle(s),
          c = h.toDegrees(f);
        (t.textAlign = Ei(c)),
          Wi(c, e._pointLabelSizes[s], u),
          zi(t, e.pointLabels[s], u, o.lineHeight);
      }
      t.restore();
    }
    function Vi(e, t, r, a) {
      var n = e.ctx,
        i = t.circular,
        o = e.chart.data.labels.length,
        s = Ur(t.color, a - 1),
        l = Ur(t.lineWidth, a - 1),
        u;
      if (!((!i && !o) || !s || !l)) {
        if (
          (n.save(),
          (n.strokeStyle = s),
          (n.lineWidth = l),
          n.setLineDash &&
            (n.setLineDash(t.borderDash || []),
            (n.lineDashOffset = t.borderDashOffset || 0)),
          n.beginPath(),
          i)
        )
          n.arc(e.xCenter, e.yCenter, r, 0, Math.PI * 2);
        else {
          (u = e.getPointPosition(0, r)), n.moveTo(u.x, u.y);
          for (var d = 1; d < o; d++)
            (u = e.getPointPosition(d, r)), n.lineTo(u.x, u.y);
        }
        n.closePath(), n.stroke(), n.restore();
      }
    }
    function rr(e) {
      return h.isNumber(e) ? e : 0;
    }
    var Ta = Jt.extend({
        setDimensions: function () {
          var e = this;
          (e.width = e.maxWidth),
            (e.height = e.maxHeight),
            (e.paddingTop = Yr(e.options) / 2),
            (e.xCenter = Math.floor(e.width / 2)),
            (e.yCenter = Math.floor((e.height - e.paddingTop) / 2)),
            (e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2);
        },
        determineDataLimits: function () {
          var e = this,
            t = e.chart,
            r = Number.POSITIVE_INFINITY,
            a = Number.NEGATIVE_INFINITY;
          h.each(t.data.datasets, function (n, i) {
            if (t.isDatasetVisible(i)) {
              var o = t.getDatasetMeta(i);
              h.each(n.data, function (s, l) {
                var u = +e.getRightValue(s);
                isNaN(u) ||
                  o.data[l].hidden ||
                  ((r = Math.min(u, r)), (a = Math.max(u, a)));
              });
            }
          }),
            (e.min = r === Number.POSITIVE_INFINITY ? 0 : r),
            (e.max = a === Number.NEGATIVE_INFINITY ? 0 : a),
            e.handleTickRangeOptions();
        },
        _computeTickLimit: function () {
          return Math.ceil(this.drawingArea / Yr(this.options));
        },
        convertTicksToLabels: function () {
          var e = this;
          Jt.prototype.convertTicksToLabels.call(e),
            (e.pointLabels = e.chart.data.labels.map(function () {
              var t = h.callback(e.options.pointLabels.callback, arguments, e);
              return t || t === 0 ? t : "";
            }));
        },
        getLabelForIndex: function (e, t) {
          return +this.getRightValue(this.chart.data.datasets[t].data[e]);
        },
        fit: function () {
          var e = this,
            t = e.options;
          t.display && t.pointLabels.display
            ? Ni(e)
            : e.setCenterPoint(0, 0, 0, 0);
        },
        setReductions: function (e, t, r) {
          var a = this,
            n = t.l / Math.sin(r.l),
            i = Math.max(t.r - a.width, 0) / Math.sin(r.r),
            o = -t.t / Math.cos(r.t),
            s = -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(r.b);
          (n = rr(n)),
            (i = rr(i)),
            (o = rr(o)),
            (s = rr(s)),
            (a.drawingArea = Math.min(
              Math.floor(e - (n + i) / 2),
              Math.floor(e - (o + s) / 2)
            )),
            a.setCenterPoint(n, i, o, s);
        },
        setCenterPoint: function (e, t, r, a) {
          var n = this,
            i = n.width - t - n.drawingArea,
            o = e + n.drawingArea,
            s = r + n.drawingArea,
            l = n.height - n.paddingTop - a - n.drawingArea;
          (n.xCenter = Math.floor((o + i) / 2 + n.left)),
            (n.yCenter = Math.floor((s + l) / 2 + n.top + n.paddingTop));
        },
        getIndexAngle: function (e) {
          var t = this.chart,
            r = 360 / t.data.labels.length,
            a = t.options || {},
            n = a.startAngle || 0,
            i = (e * r + n) % 360;
          return ((i < 0 ? i + 360 : i) * Math.PI * 2) / 360;
        },
        getDistanceFromCenterForValue: function (e) {
          var t = this;
          if (h.isNullOrUndef(e)) return NaN;
          var r = t.drawingArea / (t.max - t.min);
          return t.options.ticks.reverse ? (t.max - e) * r : (e - t.min) * r;
        },
        getPointPosition: function (e, t) {
          var r = this,
            a = r.getIndexAngle(e) - Math.PI / 2;
          return {
            x: Math.cos(a) * t + r.xCenter,
            y: Math.sin(a) * t + r.yCenter,
          };
        },
        getPointPositionForValue: function (e, t) {
          return this.getPointPosition(
            e,
            this.getDistanceFromCenterForValue(t)
          );
        },
        getBasePosition: function (e) {
          var t = this,
            r = t.min,
            a = t.max;
          return t.getPointPositionForValue(
            e || 0,
            t.beginAtZero ? 0 : r < 0 && a < 0 ? a : r > 0 && a > 0 ? r : 0
          );
        },
        _drawGrid: function () {
          var e = this,
            t = e.ctx,
            r = e.options,
            a = r.gridLines,
            n = r.angleLines,
            i = tr(n.lineWidth, a.lineWidth),
            o = tr(n.color, a.color),
            s,
            l,
            u;
          if (
            (r.pointLabels.display && Hi(e),
            a.display &&
              h.each(e.ticks, function (d, f) {
                f !== 0 &&
                  ((l = e.getDistanceFromCenterForValue(e.ticksAsNumbers[f])),
                  Vi(e, a, l, f));
              }),
            n.display && i && o)
          ) {
            for (
              t.save(),
                t.lineWidth = i,
                t.strokeStyle = o,
                t.setLineDash &&
                  (t.setLineDash(Oa([n.borderDash, a.borderDash, []])),
                  (t.lineDashOffset = Oa([
                    n.borderDashOffset,
                    a.borderDashOffset,
                    0,
                  ]))),
                s = e.chart.data.labels.length - 1;
              s >= 0;
              s--
            )
              (l = e.getDistanceFromCenterForValue(
                r.ticks.reverse ? e.min : e.max
              )),
                (u = e.getPointPosition(s, l)),
                t.beginPath(),
                t.moveTo(e.xCenter, e.yCenter),
                t.lineTo(u.x, u.y),
                t.stroke();
            t.restore();
          }
        },
        _drawLabels: function () {
          var e = this,
            t = e.ctx,
            r = e.options,
            a = r.ticks;
          if (!!a.display) {
            var n = e.getIndexAngle(0),
              i = h.options._parseFont(a),
              o = tr(a.fontColor, A.global.defaultFontColor),
              s,
              l;
            t.save(),
              (t.font = i.string),
              t.translate(e.xCenter, e.yCenter),
              t.rotate(n),
              (t.textAlign = "center"),
              (t.textBaseline = "middle"),
              h.each(e.ticks, function (u, d) {
                (d === 0 && !a.reverse) ||
                  ((s = e.getDistanceFromCenterForValue(e.ticksAsNumbers[d])),
                  a.showLabelBackdrop &&
                    ((l = t.measureText(u).width),
                    (t.fillStyle = a.backdropColor),
                    t.fillRect(
                      -l / 2 - a.backdropPaddingX,
                      -s - i.size / 2 - a.backdropPaddingY,
                      l + a.backdropPaddingX * 2,
                      i.size + a.backdropPaddingY * 2
                    )),
                  (t.fillStyle = o),
                  t.fillText(u, 0, -s));
              }),
              t.restore();
          }
        },
        _drawTitle: h.noop,
      }),
      ji = Bi;
    Ta._defaults = ji;
    var Kr = h._deprecated,
      Fa = h.options.resolve,
      $i = h.valueOrDefault,
      Ia = Number.MIN_SAFE_INTEGER || -9007199254740991,
      Xr = Number.MAX_SAFE_INTEGER || 9007199254740991,
      ar = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
      },
      fe = Object.keys(ar);
    function La(e, t) {
      return e - t;
    }
    function qi(e) {
      var t = {},
        r = [],
        a,
        n,
        i;
      for (a = 0, n = e.length; a < n; ++a)
        (i = e[a]), t[i] || ((t[i] = !0), r.push(i));
      return r;
    }
    function Ba(e) {
      return h.valueOrDefault(e.time.min, e.ticks.min);
    }
    function Ra(e) {
      return h.valueOrDefault(e.time.max, e.ticks.max);
    }
    function Gi(e, t, r, a) {
      if (a === "linear" || !e.length)
        return [
          { time: t, pos: 0 },
          { time: r, pos: 1 },
        ];
      var n = [],
        i = [t],
        o,
        s,
        l,
        u,
        d;
      for (o = 0, s = e.length; o < s; ++o)
        (u = e[o]), u > t && u < r && i.push(u);
      for (i.push(r), o = 0, s = i.length; o < s; ++o)
        (d = i[o + 1]),
          (l = i[o - 1]),
          (u = i[o]),
          (l === void 0 || d === void 0 || Math.round((d + l) / 2) !== u) &&
            n.push({ time: u, pos: o / (s - 1) });
      return n;
    }
    function Ui(e, t, r) {
      for (var a = 0, n = e.length - 1, i, o, s; a >= 0 && a <= n; )
        if (((i = (a + n) >> 1), (o = e[i - 1] || null), (s = e[i]), o))
          if (s[t] < r) a = i + 1;
          else if (o[t] > r) n = i - 1;
          else return { lo: o, hi: s };
        else return { lo: null, hi: s };
      return { lo: s, hi: null };
    }
    function st(e, t, r, a) {
      var n = Ui(e, t, r),
        i = n.lo ? (n.hi ? n.lo : e[e.length - 2]) : e[0],
        o = n.lo ? (n.hi ? n.hi : e[e.length - 1]) : e[1],
        s = o[t] - i[t],
        l = s ? (r - i[t]) / s : 0,
        u = (o[a] - i[a]) * l;
      return i[a] + u;
    }
    function Zr(e, t) {
      var r = e._adapter,
        a = e.options.time,
        n = a.parser,
        i = n || a.format,
        o = t;
      return (
        typeof n == "function" && (o = n(o)),
        h.isFinite(o) ||
          (o = typeof i == "string" ? r.parse(o, i) : r.parse(o)),
        o !== null
          ? +o
          : (!n &&
              typeof i == "function" &&
              ((o = i(t)), h.isFinite(o) || (o = r.parse(o))),
            o)
      );
    }
    function Ye(e, t) {
      if (h.isNullOrUndef(t)) return null;
      var r = e.options.time,
        a = Zr(e, e.getRightValue(t));
      return (
        a === null || (r.round && (a = +e._adapter.startOf(a, r.round))), a
      );
    }
    function Na(e, t, r, a) {
      var n = fe.length,
        i,
        o,
        s;
      for (i = fe.indexOf(e); i < n - 1; ++i)
        if (
          ((o = ar[fe[i]]),
          (s = o.steps ? o.steps : Xr),
          o.common && Math.ceil((r - t) / (s * o.size)) <= a)
        )
          return fe[i];
      return fe[n - 1];
    }
    function Yi(e, t, r, a, n) {
      var i, o;
      for (i = fe.length - 1; i >= fe.indexOf(r); i--)
        if (((o = fe[i]), ar[o].common && e._adapter.diff(n, a, o) >= t - 1))
          return o;
      return fe[r ? fe.indexOf(r) : 0];
    }
    function Ki(e) {
      for (var t = fe.indexOf(e) + 1, r = fe.length; t < r; ++t)
        if (ar[fe[t]].common) return fe[t];
    }
    function Xi(e, t, r, a) {
      var n = e._adapter,
        i = e.options,
        o = i.time,
        s = o.unit || Na(o.minUnit, t, r, a),
        l = Fa([o.stepSize, o.unitStepSize, 1]),
        u = s === "week" ? o.isoWeekday : !1,
        d = t,
        f = [],
        c;
      if (
        (u && (d = +n.startOf(d, "isoWeek", u)),
        (d = +n.startOf(d, u ? "day" : s)),
        n.diff(r, t, s) > 1e5 * l)
      )
        throw (
          t + " and " + r + " are too far apart with stepSize of " + l + " " + s
        );
      for (c = d; c < r; c = +n.add(c, l, s)) f.push(c);
      return (c === r || i.bounds === "ticks") && f.push(c), f;
    }
    function Zi(e, t, r, a, n) {
      var i = 0,
        o = 0,
        s,
        l;
      return (
        n.offset &&
          t.length &&
          ((s = st(e, "time", t[0], "pos")),
          t.length === 1
            ? (i = 1 - s)
            : (i = (st(e, "time", t[1], "pos") - s) / 2),
          (l = st(e, "time", t[t.length - 1], "pos")),
          t.length === 1
            ? (o = l)
            : (o = (l - st(e, "time", t[t.length - 2], "pos")) / 2)),
        { start: i, end: o, factor: 1 / (i + 1 + o) }
      );
    }
    function Qi(e, t, r, a) {
      var n = e._adapter,
        i = +n.startOf(t[0].value, a),
        o = t[t.length - 1].value,
        s,
        l;
      for (s = i; s <= o; s = +n.add(s, 1, a))
        (l = r[s]), l >= 0 && (t[l].major = !0);
      return t;
    }
    function Ea(e, t, r) {
      var a = [],
        n = {},
        i = t.length,
        o,
        s;
      for (o = 0; o < i; ++o)
        (s = t[o]), (n[s] = o), a.push({ value: s, major: !1 });
      return i === 0 || !r ? a : Qi(e, a, n, r);
    }
    var Ji = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          displayFormat: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {},
        },
        ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
      },
      za = ue.extend({
        initialize: function () {
          this.mergeTicksOptions(), ue.prototype.initialize.call(this);
        },
        update: function () {
          var e = this,
            t = e.options,
            r = t.time || (t.time = {}),
            a = (e._adapter = new Wr._date(t.adapters.date));
          return (
            Kr("time scale", r.format, "time.format", "time.parser"),
            Kr("time scale", r.min, "time.min", "ticks.min"),
            Kr("time scale", r.max, "time.max", "ticks.max"),
            h.mergeIf(r.displayFormats, a.formats()),
            ue.prototype.update.apply(e, arguments)
          );
        },
        getRightValue: function (e) {
          return (
            e && e.t !== void 0 && (e = e.t),
            ue.prototype.getRightValue.call(this, e)
          );
        },
        determineDataLimits: function () {
          var e = this,
            t = e.chart,
            r = e._adapter,
            a = e.options,
            n = a.time.unit || "day",
            i = Xr,
            o = Ia,
            s = [],
            l = [],
            u = [],
            d,
            f,
            c,
            g,
            p,
            m,
            y,
            k = e._getLabels();
          for (d = 0, c = k.length; d < c; ++d) u.push(Ye(e, k[d]));
          for (d = 0, c = (t.data.datasets || []).length; d < c; ++d)
            if (t.isDatasetVisible(d))
              if (((p = t.data.datasets[d].data), h.isObject(p[0])))
                for (l[d] = [], f = 0, g = p.length; f < g; ++f)
                  (m = Ye(e, p[f])), s.push(m), (l[d][f] = m);
              else (l[d] = u.slice(0)), y || ((s = s.concat(u)), (y = !0));
            else l[d] = [];
          u.length &&
            ((i = Math.min(i, u[0])), (o = Math.max(o, u[u.length - 1]))),
            s.length &&
              ((s = c > 1 ? qi(s).sort(La) : s.sort(La)),
              (i = Math.min(i, s[0])),
              (o = Math.max(o, s[s.length - 1]))),
            (i = Ye(e, Ba(a)) || i),
            (o = Ye(e, Ra(a)) || o),
            (i = i === Xr ? +r.startOf(Date.now(), n) : i),
            (o = o === Ia ? +r.endOf(Date.now(), n) + 1 : o),
            (e.min = Math.min(i, o)),
            (e.max = Math.max(i + 1, o)),
            (e._table = []),
            (e._timestamps = { data: s, datasets: l, labels: u });
        },
        buildTicks: function () {
          var e = this,
            t = e.min,
            r = e.max,
            a = e.options,
            n = a.ticks,
            i = a.time,
            o = e._timestamps,
            s = [],
            l = e.getLabelCapacity(t),
            u = n.source,
            d = a.distribution,
            f,
            c,
            g;
          for (
            u === "data" || (u === "auto" && d === "series")
              ? (o = o.data)
              : u === "labels"
              ? (o = o.labels)
              : (o = Xi(e, t, r, l)),
              a.bounds === "ticks" &&
                o.length &&
                ((t = o[0]), (r = o[o.length - 1])),
              t = Ye(e, Ba(a)) || t,
              r = Ye(e, Ra(a)) || r,
              f = 0,
              c = o.length;
            f < c;
            ++f
          )
            (g = o[f]), g >= t && g <= r && s.push(g);
          return (
            (e.min = t),
            (e.max = r),
            (e._unit =
              i.unit ||
              (n.autoSkip
                ? Na(i.minUnit, e.min, e.max, l)
                : Yi(e, s.length, i.minUnit, e.min, e.max))),
            (e._majorUnit =
              !n.major.enabled || e._unit === "year" ? void 0 : Ki(e._unit)),
            (e._table = Gi(e._timestamps.data, t, r, d)),
            (e._offsets = Zi(e._table, s, t, r, a)),
            n.reverse && s.reverse(),
            Ea(e, s, e._majorUnit)
          );
        },
        getLabelForIndex: function (e, t) {
          var r = this,
            a = r._adapter,
            n = r.chart.data,
            i = r.options.time,
            o = n.labels && e < n.labels.length ? n.labels[e] : "",
            s = n.datasets[t].data[e];
          return (
            h.isObject(s) && (o = r.getRightValue(s)),
            i.tooltipFormat
              ? a.format(Zr(r, o), i.tooltipFormat)
              : typeof o == "string"
              ? o
              : a.format(Zr(r, o), i.displayFormats.datetime)
          );
        },
        tickFormatFunction: function (e, t, r, a) {
          var n = this,
            i = n._adapter,
            o = n.options,
            s = o.time.displayFormats,
            l = s[n._unit],
            u = n._majorUnit,
            d = s[u],
            f = r[t],
            c = o.ticks,
            g = u && d && f && f.major,
            p = i.format(e, a || (g ? d : l)),
            m = g ? c.major : c.minor,
            y = Fa([m.callback, m.userCallback, c.callback, c.userCallback]);
          return y ? y(p, t, r) : p;
        },
        convertTicksToLabels: function (e) {
          var t = [],
            r,
            a;
          for (r = 0, a = e.length; r < a; ++r)
            t.push(this.tickFormatFunction(e[r].value, r, e));
          return t;
        },
        getPixelForOffset: function (e) {
          var t = this,
            r = t._offsets,
            a = st(t._table, "time", e, "pos");
          return t.getPixelForDecimal((r.start + a) * r.factor);
        },
        getPixelForValue: function (e, t, r) {
          var a = this,
            n = null;
          if (
            (t !== void 0 && r !== void 0 && (n = a._timestamps.datasets[r][t]),
            n === null && (n = Ye(a, e)),
            n !== null)
          )
            return a.getPixelForOffset(n);
        },
        getPixelForTick: function (e) {
          var t = this.getTicks();
          return e >= 0 && e < t.length
            ? this.getPixelForOffset(t[e].value)
            : null;
        },
        getValueForPixel: function (e) {
          var t = this,
            r = t._offsets,
            a = t.getDecimalForPixel(e) / r.factor - r.end,
            n = st(t._table, "pos", a, "time");
          return t._adapter._create(n);
        },
        _getLabelSize: function (e) {
          var t = this,
            r = t.options.ticks,
            a = t.ctx.measureText(e).width,
            n = h.toRadians(t.isHorizontal() ? r.maxRotation : r.minRotation),
            i = Math.cos(n),
            o = Math.sin(n),
            s = $i(r.fontSize, A.global.defaultFontSize);
          return { w: a * i + s * o, h: a * o + s * i };
        },
        getLabelWidth: function (e) {
          return this._getLabelSize(e).w;
        },
        getLabelCapacity: function (e) {
          var t = this,
            r = t.options.time,
            a = r.displayFormats,
            n = a[r.unit] || a.millisecond,
            i = t.tickFormatFunction(e, 0, Ea(t, [e], t._majorUnit), n),
            o = t._getLabelSize(i),
            s = Math.floor(t.isHorizontal() ? t.width / o.w : t.height / o.h);
          return t.options.offset && s--, s > 0 ? s : 1;
        },
      }),
      eo = Ji;
    za._defaults = eo;
    var to = {
        category: Ca,
        linear: Pa,
        logarithmic: Da,
        radialLinear: Ta,
        time: za,
      },
      ro = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY",
      };
    Wr._date.override(
      typeof P == "function"
        ? {
            _id: "moment",
            formats: function () {
              return ro;
            },
            parse: function (e, t) {
              return (
                typeof e == "string" && typeof t == "string"
                  ? (e = P(e, t))
                  : e instanceof P || (e = P(e)),
                e.isValid() ? e.valueOf() : null
              );
            },
            format: function (e, t) {
              return P(e).format(t);
            },
            add: function (e, t, r) {
              return P(e).add(t, r).valueOf();
            },
            diff: function (e, t, r) {
              return P(e).diff(P(t), r);
            },
            startOf: function (e, t, r) {
              return (
                (e = P(e)),
                t === "isoWeek"
                  ? e.isoWeekday(r).valueOf()
                  : e.startOf(t).valueOf()
              );
            },
            endOf: function (e, t) {
              return P(e).endOf(t).valueOf();
            },
            _create: function (e) {
              return P(e);
            },
          }
        : {}
    ),
      A._set("global", { plugins: { filler: { propagate: !0 } } });
    var ao = {
      dataset: function (e) {
        var t = e.fill,
          r = e.chart,
          a = r.getDatasetMeta(t),
          n = a && r.isDatasetVisible(t),
          i = (n && a.dataset._children) || [],
          o = i.length || 0;
        return o
          ? function (s, l) {
              return (l < o && i[l]._view) || null;
            }
          : null;
      },
      boundary: function (e) {
        var t = e.boundary,
          r = t ? t.x : null,
          a = t ? t.y : null;
        return h.isArray(t)
          ? function (n, i) {
              return t[i];
            }
          : function (n) {
              return { x: r === null ? n.x : r, y: a === null ? n.y : a };
            };
      },
    };
    function no(e, t, r) {
      var a = e._model || {},
        n = a.fill,
        i;
      if ((n === void 0 && (n = !!a.backgroundColor), n === !1 || n === null))
        return !1;
      if (n === !0) return "origin";
      if (((i = parseFloat(n, 10)), isFinite(i) && Math.floor(i) === i))
        return (
          (n[0] === "-" || n[0] === "+") && (i = t + i),
          i === t || i < 0 || i >= r ? !1 : i
        );
      switch (n) {
        case "bottom":
          return "start";
        case "top":
          return "end";
        case "zero":
          return "origin";
        case "origin":
        case "start":
        case "end":
          return n;
        default:
          return !1;
      }
    }
    function io(e) {
      var t = e.el._model || {},
        r = e.el._scale || {},
        a = e.fill,
        n = null,
        i;
      if (isFinite(a)) return null;
      if (
        (a === "start"
          ? (n = t.scaleBottom === void 0 ? r.bottom : t.scaleBottom)
          : a === "end"
          ? (n = t.scaleTop === void 0 ? r.top : t.scaleTop)
          : t.scaleZero !== void 0
          ? (n = t.scaleZero)
          : r.getBasePixel && (n = r.getBasePixel()),
        n != null)
      ) {
        if (n.x !== void 0 && n.y !== void 0) return n;
        if (h.isFinite(n))
          return (i = r.isHorizontal()), { x: i ? n : null, y: i ? null : n };
      }
      return null;
    }
    function oo(e) {
      var t = e.el._scale,
        r = t.options,
        a = t.chart.data.labels.length,
        n = e.fill,
        i = [],
        o,
        s,
        l,
        u,
        d;
      if (!a) return null;
      for (
        o = r.ticks.reverse ? t.max : t.min,
          s = r.ticks.reverse ? t.min : t.max,
          l = t.getPointPositionForValue(0, o),
          u = 0;
        u < a;
        ++u
      )
        (d =
          n === "start" || n === "end"
            ? t.getPointPositionForValue(u, n === "start" ? o : s)
            : t.getBasePosition(u)),
          r.gridLines.circular &&
            ((d.cx = l.x),
            (d.cy = l.y),
            (d.angle = t.getIndexAngle(u) - Math.PI / 2)),
          i.push(d);
      return i;
    }
    function lo(e) {
      var t = e.el._scale || {};
      return t.getPointPositionForValue ? oo(e) : io(e);
    }
    function so(e, t, r) {
      var a = e[t],
        n = a.fill,
        i = [t],
        o;
      if (!r) return n;
      for (; n !== !1 && i.indexOf(n) === -1; ) {
        if (!isFinite(n)) return n;
        if (((o = e[n]), !o)) return !1;
        if (o.visible) return n;
        i.push(n), (n = o.fill);
      }
      return !1;
    }
    function uo(e) {
      var t = e.fill,
        r = "dataset";
      return t === !1 ? null : (isFinite(t) || (r = "boundary"), ao[r](e));
    }
    function Wa(e) {
      return e && !e.skip;
    }
    function Ha(e, t, r, a, n) {
      var i, o, s, l;
      if (!(!a || !n)) {
        for (e.moveTo(t[0].x, t[0].y), i = 1; i < a; ++i)
          h.canvas.lineTo(e, t[i - 1], t[i]);
        if (r[0].angle !== void 0) {
          for (
            o = r[0].cx,
              s = r[0].cy,
              l = Math.sqrt(Math.pow(r[0].x - o, 2) + Math.pow(r[0].y - s, 2)),
              i = n - 1;
            i > 0;
            --i
          )
            e.arc(o, s, l, r[i].angle, r[i - 1].angle, !0);
          return;
        }
        for (e.lineTo(r[n - 1].x, r[n - 1].y), i = n - 1; i > 0; --i)
          h.canvas.lineTo(e, r[i], r[i - 1], !0);
      }
    }
    function fo(e, t, r, a, n, i) {
      var o = t.length,
        s = a.spanGaps,
        l = [],
        u = [],
        d = 0,
        f = 0,
        c,
        g,
        p,
        m,
        y,
        k,
        C,
        O;
      for (e.beginPath(), c = 0, g = o; c < g; ++c)
        (p = c % o),
          (m = t[p]._view),
          (y = r(m, p, a)),
          (k = Wa(m)),
          (C = Wa(y)),
          i && O === void 0 && k && ((O = c + 1), (g = o + O)),
          k && C
            ? ((d = l.push(m)), (f = u.push(y)))
            : d &&
              f &&
              (s
                ? (k && l.push(m), C && u.push(y))
                : (Ha(e, l, u, d, f), (d = f = 0), (l = []), (u = [])));
      Ha(e, l, u, d, f), e.closePath(), (e.fillStyle = n), e.fill();
    }
    var ho = {
        id: "filler",
        afterDatasetsUpdate: function (e, t) {
          var r = (e.data.datasets || []).length,
            a = t.propagate,
            n = [],
            i,
            o,
            s,
            l;
          for (o = 0; o < r; ++o)
            (i = e.getDatasetMeta(o)),
              (s = i.dataset),
              (l = null),
              s &&
                s._model &&
                s instanceof se.Line &&
                (l = {
                  visible: e.isDatasetVisible(o),
                  fill: no(s, o, r),
                  chart: e,
                  el: s,
                }),
              (i.$filler = l),
              n.push(l);
          for (o = 0; o < r; ++o)
            (l = n[o]),
              l &&
                ((l.fill = so(n, o, a)),
                (l.boundary = lo(l)),
                (l.mapper = uo(l)));
        },
        beforeDatasetsDraw: function (e) {
          var t = e._getSortedVisibleDatasetMetas(),
            r = e.ctx,
            a,
            n,
            i,
            o,
            s,
            l,
            u;
          for (n = t.length - 1; n >= 0; --n)
            (a = t[n].$filler),
              !(!a || !a.visible) &&
                ((i = a.el),
                (o = i._view),
                (s = i._children || []),
                (l = a.mapper),
                (u = o.backgroundColor || A.global.defaultColor),
                l &&
                  u &&
                  s.length &&
                  (h.canvas.clipArea(r, e.chartArea),
                  fo(r, s, l, o, u, i._loop),
                  h.canvas.unclipArea(r)));
        },
      },
      co = h.rtl.getRtlAdapter,
      Be = h.noop,
      Re = h.valueOrDefault;
    A._set("global", {
      legend: {
        display: !0,
        position: "top",
        align: "center",
        fullWidth: !0,
        reverse: !1,
        weight: 1e3,
        onClick: function (e, t) {
          var r = t.datasetIndex,
            a = this.chart,
            n = a.getDatasetMeta(r);
          (n.hidden = n.hidden === null ? !a.data.datasets[r].hidden : null),
            a.update();
        },
        onHover: null,
        onLeave: null,
        labels: {
          boxWidth: 40,
          padding: 10,
          generateLabels: function (e) {
            var t = e.data.datasets,
              r = e.options.legend || {},
              a = r.labels && r.labels.usePointStyle;
            return e._getSortedDatasetMetas().map(function (n) {
              var i = n.controller.getStyle(a ? 0 : void 0);
              return {
                text: t[n.index].label,
                fillStyle: i.backgroundColor,
                hidden: !e.isDatasetVisible(n.index),
                lineCap: i.borderCapStyle,
                lineDash: i.borderDash,
                lineDashOffset: i.borderDashOffset,
                lineJoin: i.borderJoinStyle,
                lineWidth: i.borderWidth,
                strokeStyle: i.borderColor,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                datasetIndex: n.index,
              };
            }, this);
          },
        },
      },
      legendCallback: function (e) {
        var t = document.createElement("ul"),
          r = e.data.datasets,
          a,
          n,
          i,
          o;
        for (
          t.setAttribute("class", e.id + "-legend"), a = 0, n = r.length;
          a < n;
          a++
        )
          (i = t.appendChild(document.createElement("li"))),
            (o = i.appendChild(document.createElement("span"))),
            (o.style.backgroundColor = r[a].backgroundColor),
            r[a].label && i.appendChild(document.createTextNode(r[a].label));
        return t.outerHTML;
      },
    });
    function Qr(e, t) {
      return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth;
    }
    var Va = ge.extend({
      initialize: function (e) {
        var t = this;
        h.extend(t, e),
          (t.legendHitBoxes = []),
          (t._hoveredItem = null),
          (t.doughnutMode = !1);
      },
      beforeUpdate: Be,
      update: function (e, t, r) {
        var a = this;
        return (
          a.beforeUpdate(),
          (a.maxWidth = e),
          (a.maxHeight = t),
          (a.margins = r),
          a.beforeSetDimensions(),
          a.setDimensions(),
          a.afterSetDimensions(),
          a.beforeBuildLabels(),
          a.buildLabels(),
          a.afterBuildLabels(),
          a.beforeFit(),
          a.fit(),
          a.afterFit(),
          a.afterUpdate(),
          a.minSize
        );
      },
      afterUpdate: Be,
      beforeSetDimensions: Be,
      setDimensions: function () {
        var e = this;
        e.isHorizontal()
          ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
          : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
          (e.paddingLeft = 0),
          (e.paddingTop = 0),
          (e.paddingRight = 0),
          (e.paddingBottom = 0),
          (e.minSize = { width: 0, height: 0 });
      },
      afterSetDimensions: Be,
      beforeBuildLabels: Be,
      buildLabels: function () {
        var e = this,
          t = e.options.labels || {},
          r = h.callback(t.generateLabels, [e.chart], e) || [];
        t.filter &&
          (r = r.filter(function (a) {
            return t.filter(a, e.chart.data);
          })),
          e.options.reverse && r.reverse(),
          (e.legendItems = r);
      },
      afterBuildLabels: Be,
      beforeFit: Be,
      fit: function () {
        var e = this,
          t = e.options,
          r = t.labels,
          a = t.display,
          n = e.ctx,
          i = h.options._parseFont(r),
          o = i.size,
          s = (e.legendHitBoxes = []),
          l = e.minSize,
          u = e.isHorizontal();
        if (
          (u
            ? ((l.width = e.maxWidth), (l.height = a ? 10 : 0))
            : ((l.width = a ? 10 : 0), (l.height = e.maxHeight)),
          !a)
        ) {
          e.width = l.width = e.height = l.height = 0;
          return;
        }
        if (((n.font = i.string), u)) {
          var d = (e.lineWidths = [0]),
            f = 0;
          (n.textAlign = "left"),
            (n.textBaseline = "middle"),
            h.each(e.legendItems, function (C, O) {
              var B = Qr(r, o),
                I = B + o / 2 + n.measureText(C.text).width;
              (O === 0 || d[d.length - 1] + I + 2 * r.padding > l.width) &&
                ((f += o + r.padding), (d[d.length - (O > 0 ? 0 : 1)] = 0)),
                (s[O] = { left: 0, top: 0, width: I, height: o }),
                (d[d.length - 1] += I + r.padding);
            }),
            (l.height += f);
        } else {
          var c = r.padding,
            g = (e.columnWidths = []),
            p = (e.columnHeights = []),
            m = r.padding,
            y = 0,
            k = 0;
          h.each(e.legendItems, function (C, O) {
            var B = Qr(r, o),
              I = B + o / 2 + n.measureText(C.text).width;
            O > 0 &&
              k + o + 2 * c > l.height &&
              ((m += y + r.padding), g.push(y), p.push(k), (y = 0), (k = 0)),
              (y = Math.max(y, I)),
              (k += o + c),
              (s[O] = { left: 0, top: 0, width: I, height: o });
          }),
            (m += y),
            g.push(y),
            p.push(k),
            (l.width += m);
        }
        (e.width = l.width), (e.height = l.height);
      },
      afterFit: Be,
      isHorizontal: function () {
        return (
          this.options.position === "top" || this.options.position === "bottom"
        );
      },
      draw: function () {
        var e = this,
          t = e.options,
          r = t.labels,
          a = A.global,
          n = a.defaultColor,
          i = a.elements.line,
          o = e.height,
          s = e.columnHeights,
          l = e.width,
          u = e.lineWidths;
        if (!!t.display) {
          var d = co(t.rtl, e.left, e.minSize.width),
            f = e.ctx,
            c = Re(r.fontColor, a.defaultFontColor),
            g = h.options._parseFont(r),
            p = g.size,
            m;
          (f.textAlign = d.textAlign("left")),
            (f.textBaseline = "middle"),
            (f.lineWidth = 0.5),
            (f.strokeStyle = c),
            (f.fillStyle = c),
            (f.font = g.string);
          var y = Qr(r, p),
            k = e.legendHitBoxes,
            C = function (W, j, q) {
              if (!(isNaN(y) || y <= 0)) {
                f.save();
                var X = Re(q.lineWidth, i.borderWidth);
                if (
                  ((f.fillStyle = Re(q.fillStyle, n)),
                  (f.lineCap = Re(q.lineCap, i.borderCapStyle)),
                  (f.lineDashOffset = Re(q.lineDashOffset, i.borderDashOffset)),
                  (f.lineJoin = Re(q.lineJoin, i.borderJoinStyle)),
                  (f.lineWidth = X),
                  (f.strokeStyle = Re(q.strokeStyle, n)),
                  f.setLineDash && f.setLineDash(Re(q.lineDash, i.borderDash)),
                  r && r.usePointStyle)
                ) {
                  var K = (y * Math.SQRT2) / 2,
                    Y = d.xPlus(W, y / 2),
                    ee = j + p / 2;
                  h.canvas.drawPoint(f, q.pointStyle, K, Y, ee, q.rotation);
                } else
                  f.fillRect(d.leftForLtr(W, y), j, y, p),
                    X !== 0 && f.strokeRect(d.leftForLtr(W, y), j, y, p);
                f.restore();
              }
            },
            O = function (W, j, q, X) {
              var K = p / 2,
                Y = d.xPlus(W, y + K),
                ee = j + K;
              f.fillText(q.text, Y, ee),
                q.hidden &&
                  (f.beginPath(),
                  (f.lineWidth = 2),
                  f.moveTo(Y, ee),
                  f.lineTo(d.xPlus(Y, X), ee),
                  f.stroke());
            },
            B = function (W, j) {
              switch (t.align) {
                case "start":
                  return r.padding;
                case "end":
                  return W - j;
                default:
                  return (W - j + r.padding) / 2;
              }
            },
            I = e.isHorizontal();
          I
            ? (m = { x: e.left + B(l, u[0]), y: e.top + r.padding, line: 0 })
            : (m = { x: e.left + r.padding, y: e.top + B(o, s[0]), line: 0 }),
            h.rtl.overrideTextDirection(e.ctx, t.textDirection);
          var H = p + r.padding;
          h.each(e.legendItems, function (W, j) {
            var q = f.measureText(W.text).width,
              X = y + p / 2 + q,
              K = m.x,
              Y = m.y;
            d.setWidth(e.minSize.width),
              I
                ? j > 0 &&
                  K + X + r.padding > e.left + e.minSize.width &&
                  ((Y = m.y += H),
                  m.line++,
                  (K = m.x = e.left + B(l, u[m.line])))
                : j > 0 &&
                  Y + H > e.top + e.minSize.height &&
                  ((K = m.x = K + e.columnWidths[m.line] + r.padding),
                  m.line++,
                  (Y = m.y = e.top + B(o, s[m.line])));
            var ee = d.x(K);
            C(ee, Y, W),
              (k[j].left = d.leftForLtr(ee, k[j].width)),
              (k[j].top = Y),
              O(ee, Y, W, q),
              I ? (m.x += X + r.padding) : (m.y += H);
          }),
            h.rtl.restoreTextDirection(e.ctx, t.textDirection);
        }
      },
      _getLegendItemAt: function (e, t) {
        var r = this,
          a,
          n,
          i;
        if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom) {
          for (i = r.legendHitBoxes, a = 0; a < i.length; ++a)
            if (
              ((n = i[a]),
              e >= n.left &&
                e <= n.left + n.width &&
                t >= n.top &&
                t <= n.top + n.height)
            )
              return r.legendItems[a];
        }
        return null;
      },
      handleEvent: function (e) {
        var t = this,
          r = t.options,
          a = e.type === "mouseup" ? "click" : e.type,
          n;
        if (a === "mousemove") {
          if (!r.onHover && !r.onLeave) return;
        } else if (a === "click") {
          if (!r.onClick) return;
        } else return;
        (n = t._getLegendItemAt(e.x, e.y)),
          a === "click"
            ? n && r.onClick && r.onClick.call(t, e.native, n)
            : (r.onLeave &&
                n !== t._hoveredItem &&
                (t._hoveredItem && r.onLeave.call(t, e.native, t._hoveredItem),
                (t._hoveredItem = n)),
              r.onHover && n && r.onHover.call(t, e.native, n));
      },
    });
    function ja(e, t) {
      var r = new Va({ ctx: e.ctx, options: t, chart: e });
      pe.configure(e, r, t), pe.addBox(e, r), (e.legend = r);
    }
    var vo = {
        id: "legend",
        _element: Va,
        beforeInit: function (e) {
          var t = e.options.legend;
          t && ja(e, t);
        },
        beforeUpdate: function (e) {
          var t = e.options.legend,
            r = e.legend;
          t
            ? (h.mergeIf(t, A.global.legend),
              r ? (pe.configure(e, r, t), (r.options = t)) : ja(e, t))
            : r && (pe.removeBox(e, r), delete e.legend);
        },
        afterEvent: function (e, t) {
          var r = e.legend;
          r && r.handleEvent(t);
        },
      },
      Te = h.noop;
    A._set("global", {
      title: {
        display: !1,
        fontStyle: "bold",
        fullWidth: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3,
      },
    });
    var $a = ge.extend({
      initialize: function (e) {
        var t = this;
        h.extend(t, e), (t.legendHitBoxes = []);
      },
      beforeUpdate: Te,
      update: function (e, t, r) {
        var a = this;
        return (
          a.beforeUpdate(),
          (a.maxWidth = e),
          (a.maxHeight = t),
          (a.margins = r),
          a.beforeSetDimensions(),
          a.setDimensions(),
          a.afterSetDimensions(),
          a.beforeBuildLabels(),
          a.buildLabels(),
          a.afterBuildLabels(),
          a.beforeFit(),
          a.fit(),
          a.afterFit(),
          a.afterUpdate(),
          a.minSize
        );
      },
      afterUpdate: Te,
      beforeSetDimensions: Te,
      setDimensions: function () {
        var e = this;
        e.isHorizontal()
          ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
          : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
          (e.paddingLeft = 0),
          (e.paddingTop = 0),
          (e.paddingRight = 0),
          (e.paddingBottom = 0),
          (e.minSize = { width: 0, height: 0 });
      },
      afterSetDimensions: Te,
      beforeBuildLabels: Te,
      buildLabels: Te,
      afterBuildLabels: Te,
      beforeFit: Te,
      fit: function () {
        var e = this,
          t = e.options,
          r = (e.minSize = {}),
          a = e.isHorizontal(),
          n,
          i;
        if (!t.display) {
          e.width = r.width = e.height = r.height = 0;
          return;
        }
        (n = h.isArray(t.text) ? t.text.length : 1),
          (i = n * h.options._parseFont(t).lineHeight + t.padding * 2),
          (e.width = r.width = a ? e.maxWidth : i),
          (e.height = r.height = a ? i : e.maxHeight);
      },
      afterFit: Te,
      isHorizontal: function () {
        var e = this.options.position;
        return e === "top" || e === "bottom";
      },
      draw: function () {
        var e = this,
          t = e.ctx,
          r = e.options;
        if (!!r.display) {
          var a = h.options._parseFont(r),
            n = a.lineHeight,
            i = n / 2 + r.padding,
            o = 0,
            s = e.top,
            l = e.left,
            u = e.bottom,
            d = e.right,
            f,
            c,
            g;
          (t.fillStyle = h.valueOrDefault(
            r.fontColor,
            A.global.defaultFontColor
          )),
            (t.font = a.string),
            e.isHorizontal()
              ? ((c = l + (d - l) / 2), (g = s + i), (f = d - l))
              : ((c = r.position === "left" ? l + i : d - i),
                (g = s + (u - s) / 2),
                (f = u - s),
                (o = Math.PI * (r.position === "left" ? -0.5 : 0.5))),
            t.save(),
            t.translate(c, g),
            t.rotate(o),
            (t.textAlign = "center"),
            (t.textBaseline = "middle");
          var p = r.text;
          if (h.isArray(p))
            for (var m = 0, y = 0; y < p.length; ++y)
              t.fillText(p[y], 0, m, f), (m += n);
          else t.fillText(p, 0, 0, f);
          t.restore();
        }
      },
    });
    function qa(e, t) {
      var r = new $a({ ctx: e.ctx, options: t, chart: e });
      pe.configure(e, r, t), pe.addBox(e, r), (e.titleBlock = r);
    }
    var go = {
        id: "title",
        _element: $a,
        beforeInit: function (e) {
          var t = e.options.title;
          t && qa(e, t);
        },
        beforeUpdate: function (e) {
          var t = e.options.title,
            r = e.titleBlock;
          t
            ? (h.mergeIf(t, A.global.title),
              r ? (pe.configure(e, r, t), (r.options = t)) : qa(e, t))
            : r && (pe.removeBox(e, r), delete e.titleBlock);
        },
      },
      Ne = {},
      po = ho,
      mo = vo,
      bo = go;
    (Ne.filler = po),
      (Ne.legend = mo),
      (Ne.title = bo),
      (R.helpers = h),
      fi(),
      (R._adapters = Wr),
      (R.Animation = v),
      (R.animationService = b),
      (R.controllers = da),
      (R.DatasetController = F),
      (R.defaults = A),
      (R.Element = ge),
      (R.elements = se),
      (R.Interaction = it),
      (R.layouts = pe),
      (R.platform = ot),
      (R.plugins = $),
      (R.Scale = ue),
      (R.scaleService = Ct),
      (R.Ticks = Pt),
      (R.Tooltip = Nr),
      R.helpers.each(to, function (e, t) {
        R.scaleService.registerScaleType(t, e, e._defaults);
      });
    for (var Ga in Ne) Ne.hasOwnProperty(Ga) && R.plugins.register(Ne[Ga]);
    R.platform.initialize();
    var yo = R;
    return (
      typeof window != "undefined" && (window.Chart = R),
      (R.Chart = R),
      (R.Legend = Ne.legend._element),
      (R.Title = Ne.title._element),
      (R.pluginService = R.plugins),
      (R.PluginBase = R.Element.extend({})),
      (R.canvasHelpers = R.helpers.canvas),
      (R.layoutService = R.layouts),
      (R.LinearScaleBase = Jt),
      R.helpers.each(
        ["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"],
        function (e) {
          R[e] = function (t, r) {
            return new R(
              t,
              R.helpers.merge(r || {}, {
                type: e.charAt(0).toLowerCase() + e.slice(1),
              })
            );
          };
        }
      ),
      yo
    );
  });
})(un);
/*!
 * chartjs-plugin-style v0.5.0
 * https://nagix.github.io/chartjs-plugin-style
 * (c) 2019 Akihiko Kusanagi
 * Released under the MIT license
 */ (function (we, te) {
  (function (P, he) {
    we.exports = he(un.exports);
  })(sn, function (P) {
    P = P && P.hasOwnProperty("default") ? P.default : P;
    var he = P.helpers,
      ke = he.options || {},
      re = he.extend(ke, {
        resolve:
          ke.resolve ||
          function (v, b, x) {
            var w, _, S;
            for (w = 0, _ = v.length; w < _; ++w)
              if (
                ((S = v[w]),
                S !== void 0 &&
                  (b !== void 0 && typeof S == "function" && (S = S(b)),
                  x !== void 0 && he.isArray(S) && (S = S[x]),
                  S !== void 0))
              )
                return S;
          },
      }),
      N = P.helpers,
      V = re.resolve,
      ce = 1e6;
    function Tt(v) {
      return v.indexOf("Color") !== -1;
    }
    var M = {
        styleKeys: [
          "shadowOffsetX",
          "shadowOffsetY",
          "shadowBlur",
          "shadowColor",
          "bevelWidth",
          "bevelHighlightColor",
          "bevelShadowColor",
          "innerGlowWidth",
          "innerGlowColor",
          "outerGlowWidth",
          "outerGlowColor",
          "backgroundOverlayColor",
          "backgroundOverlayMode",
        ],
        lineStyleKeys: [
          "shadowOffsetX",
          "shadowOffsetY",
          "shadowBlur",
          "shadowColor",
          "outerGlowWidth",
          "outerGlowColor",
        ],
        pointStyleKeys: [
          "pointShadowOffsetX",
          "pointShadowOffsetY",
          "pointShadowBlur",
          "pointShadowColor",
          "pointBevelWidth",
          "pointBevelHighlightColor",
          "pointBevelShadowColor",
          "pointInnerGlowWidth",
          "pointInnerGlowColor",
          "pointOuterGlowWidth",
          "pointOuterGlowColor",
          "pointBackgroundOverlayColor",
          "pointBackgroundOverlayMode",
        ],
        hoverStyleKeys: [
          "hoverShadowOffsetX",
          "hoverShadowOffsetY",
          "hoverShadowBlur",
          "hoverShadowColor",
          "hoverBevelWidth",
          "hoverBevelHighlightColor",
          "hoverBevelShadowColor",
          "hoverInnerGlowWidth",
          "hoverInnerGlowColor",
          "hoverOuterGlowWidth",
          "hoverOuterGlowColor",
          "hoverBackgroundOverlayColor",
          "hoverBackgroundOverlayMode",
        ],
        pointHoverStyleKeys: [
          "pointHoverShadowOffsetX",
          "pointHoverShadowOffsetY",
          "pointHoverShadowBlur",
          "pointHoverShadowColor",
          "pointHoverBevelWidth",
          "pointHoverBevelHighlightColor",
          "pointHoverBevelShadowColor",
          "pointHoverInnerGlowWidth",
          "pointHoverInnerGlowColor",
          "pointHoverOuterGlowWidth",
          "pointHoverOuterGlowColor",
          "pointHoverBackgroundOverlayColor",
          "pointHoverBackgroundOverlayMode",
        ],
        drawBackground: function (v, b) {
          var x = v.borderWidth;
          (v.borderWidth = 0), b(), (v.borderWidth = x);
        },
        drawBorder: function (v, b) {
          var x = v.backgroundColor;
          v.borderWidth &&
            ((v.backgroundColor = "rgba(0, 0, 0, 0)"),
            b(),
            (v.backgroundColor = x));
        },
        drawShadow: function (v, b, x, w) {
          var _ = v.ctx,
            S = v.currentDevicePixelRatio;
          _.save(),
            (_.shadowOffsetX = (b.shadowOffsetX + ce) * S),
            (_.shadowOffsetY = b.shadowOffsetY * S),
            (_.shadowBlur = b.shadowBlur * S),
            (_.shadowColor = b.shadowColor),
            w && (_.globalCompositeOperation = "destination-over"),
            _.translate(-ce, 0),
            x(),
            _.restore();
        },
        setPath: function (v, b) {
          v.save(), v.beginPath(), v.clip(), b(), v.restore();
        },
        drawBevel: function (v, b, x) {
          var w = v.ctx,
            _ = v.currentDevicePixelRatio,
            S = (_ * 5) / 6,
            D = b.bevelWidth * S,
            F = b.borderWidth,
            T = b.parsedBorderWidth,
            L,
            z;
          !D ||
            (this.opaque(b.borderColor)
              ? T
                ? (L = {
                    top: D + T.top * _,
                    left: D + T.left * _,
                    bottom: D + T.bottom * _,
                    right: D + T.right * _,
                  })
                : ((z = D + ((F > 0 ? F : 0) * _) / 2),
                  (L = { top: z, left: z, bottom: z, right: z }))
              : (L = { top: D, left: D, bottom: D, right: D }),
            w.save(),
            this.setPath(w, x),
            w.clip(),
            w.translate(-ce, 0),
            this.setPath(w, x),
            w.rect(0, 0, v.width, v.height),
            (w.fillStyle = "black"),
            (w.shadowOffsetX = ce * _ - L.right),
            (w.shadowOffsetY = -L.bottom),
            (w.shadowBlur = D),
            (w.shadowColor = b.bevelShadowColor),
            (navigator && navigator.userAgent.match("Windows.+Firefox")) ||
              (w.globalCompositeOperation = "source-atop"),
            w.fill("evenodd"),
            (w.shadowOffsetX = ce * _ + L.left),
            (w.shadowOffsetY = L.top),
            (w.shadowColor = b.bevelHighlightColor),
            w.fill("evenodd"),
            w.restore());
        },
        drawGlow: function (v, b, x, w) {
          var _ = v.ctx,
            S = w ? b.outerGlowWidth : b.innerGlowWidth,
            D = b.borderWidth,
            F = v.currentDevicePixelRatio;
          !S ||
            (_.save(),
            this.setPath(_, x),
            w && _.rect(0, 0, v.width, v.height),
            _.clip("evenodd"),
            _.translate(-ce, 0),
            this.setPath(_, x),
            w || _.rect(0, 0, v.width, v.height),
            (_.lineWidth = D),
            (_.strokeStyle = "black"),
            (_.fillStyle = "black"),
            (_.shadowOffsetX = ce * F),
            (_.shadowBlur = S * F),
            (_.shadowColor = w ? b.outerGlowColor : b.innerGlowColor),
            _.fill("evenodd"),
            D && _.stroke(),
            _.restore());
        },
        drawInnerGlow: function (v, b, x) {
          this.drawGlow(v, b, x);
        },
        drawOuterGlow: function (v, b, x) {
          this.drawGlow(v, b, x, !0);
        },
        drawBackgroundOverlay: function (v, b, x) {
          var w = v.ctx,
            _ = b.backgroundOverlayColor;
          !_ ||
            (w.save(),
            this.setPath(w, x),
            (w.fillStyle = _),
            (w.globalCompositeOperation = b.backgroundOverlayMode),
            w.fill(),
            w.restore());
        },
        opaque: function (v) {
          return N.color(v).alpha() > 0;
        },
        getHoverColor: function (v) {
          return v !== void 0 ? N.getHoverColor(v) : v;
        },
        mergeStyle: function (v, b) {
          if (!(v === void 0 || b === void 0))
            return (
              this.styleKeys.forEach(function (x) {
                v[x] = b[x];
              }),
              v
            );
        },
        setHoverStyle: function (v, b) {
          var x = this.styleKeys,
            w = this.hoverStyleKeys,
            _,
            S;
          if (!(v === void 0 || b === void 0)) {
            for (_ = 0, S = x.length; _ < S; ++_) v[x[_]] = b[w[_]];
            return v;
          }
        },
        saveStyle: function (v) {
          var b = v._model,
            x = v.$previousStyle;
          x && this.mergeStyle(x, b);
        },
        resolveStyle: function (v, b, x, w) {
          var _ = this,
            S = v.chart,
            D = S.data.datasets[v.index],
            F = b.custom || {},
            T = _.styleKeys,
            L = _.hoverStyleKeys,
            z = {},
            G,
            be,
            U,
            Ce,
            ne = {
              chart: S,
              dataIndex: x,
              dataset: D,
              datasetIndex: b._datasetIndex,
            };
          for (G = 0, be = T.length; G < be; ++G)
            (U = T[G]),
              (z[U] = Ce = V([F[U], D[U], w[U]], ne, x)),
              (U = L[G]),
              (z[U] = V(
                [F[U], D[U], w[U], Tt(U) ? _.getHoverColor(Ce) : Ce],
                ne,
                x
              ));
          return z;
        },
        resolveLineStyle: function (v, b, x) {
          var w = v.chart,
            _ = w.data.datasets[v.index],
            S = b.custom || {},
            D = this.lineStyleKeys,
            F = {},
            T,
            L,
            z,
            G = { chart: w, dataset: _, datasetIndex: b._datasetIndex };
          for (T = 0, L = D.length; T < L; ++T)
            (z = D[T]), (F[z] = V([S[z], _[z], x[z]], G));
          return F;
        },
        resolvePointStyle: function (v, b, x, w) {
          var _ = this,
            S = v.chart,
            D = S.data.datasets[v.index],
            F = b.custom || {},
            T = _.styleKeys,
            L = _.hoverStyleKeys,
            z = _.pointStyleKeys,
            G = _.pointHoverStyleKeys,
            be = {},
            U,
            Ce,
            ne,
            bt,
            yt = {
              chart: S,
              dataIndex: x,
              dataset: D,
              datasetIndex: b._datasetIndex,
            };
          for (U = 0, Ce = T.length; U < Ce; ++U)
            (ne = T[U]),
              (be[ne] = bt = V([F[ne], D[z[U]], D[ne], w[ne]], yt, x)),
              (ne = L[U]),
              (be[ne] = V(
                [F[ne], D[G[U]], w[ne], Tt(ne) ? _.getHoverColor(bt) : bt],
                yt,
                x
              ));
          return be;
        },
      },
      Ft = P.helpers;
    function me(v, b) {
      if (b === void 0) return v;
      var x = Ft.color(v);
      return x.alpha(b * x.alpha()).rgbaString();
    }
    var Xe = P.Tooltip,
      sr = Xe.extend({
        initialize: function () {
          var v = this;
          Xe.prototype.initialize.apply(v, arguments),
            M.mergeStyle(v._model, v._options);
        },
        update: function () {
          var v = this;
          return (
            Xe.prototype.update.apply(v, arguments),
            M.mergeStyle(v._model, v._options),
            v
          );
        },
        drawBackground: function (v, b, x, w, _) {
          var S = this,
            D = arguments,
            F = S._chart,
            T = Ft.extend({}, b, {
              bevelHighlightColor: me(b.bevelHighlightColor, _),
              bevelShadowColor: me(b.bevelShadowColor, _),
              innerGlowColor: me(b.innerGlowColor, _),
              outerGlowColor: me(b.outerGlowColor, _),
            }),
            L = function () {
              Xe.prototype.drawBackground.apply(S, D);
            };
          M.drawShadow(F, b, L),
            M.opaque(b.backgroundColor) &&
              (M.drawBackground(b, L), M.drawBevel(F, T, L)),
            M.drawInnerGlow(F, T, L),
            M.drawOuterGlow(F, T, L),
            M.drawBorder(b, L);
        },
      }),
      It = P.elements.Rectangle,
      ur = It.extend({
        draw: function () {
          var v = this,
            b = arguments,
            x = v._chart,
            w = v._view,
            _ = function () {
              It.prototype.draw.apply(v, b);
            },
            S = function () {
              v.setPath();
            };
          M.drawShadow(x, w, _, !0),
            M.opaque(w.backgroundColor) &&
              (M.drawBackground(w, _),
              M.drawBackgroundOverlay(x, w, S),
              M.drawBevel(x, w, S)),
            M.drawInnerGlow(x, w, S),
            M.drawOuterGlow(x, w, S),
            M.drawBorder(w, _);
        },
        setPath: function () {
          var v = this,
            b = v._chart.ctx,
            x = v._view,
            w,
            _,
            S,
            D;
          x.width !== void 0
            ? ((w = x.x - x.width / 2),
              (S = x.width),
              (_ = Math.min(x.y, x.base)),
              (D = Math.abs(x.y - x.base)))
            : ((w = Math.min(x.x, x.base)),
              (S = Math.abs(x.x - x.base)),
              (_ = x.y - x.height / 2),
              (D = x.height)),
            b.rect(w, _, S, D);
        },
      }),
      ft = P.helpers,
      oe = ft.extend;
    function Ze(v, b, x) {
      return v === b ? x : v === x ? b : v;
    }
    function ht(v) {
      var b = v.borderSkipped,
        x = {};
      return (
        b &&
          (v.horizontal
            ? v.base > v.x && (b = Ze(b, "left", "right"))
            : v.base < v.y && (b = Ze(b, "bottom", "top")),
          (x[b] = !0)),
        x
      );
    }
    function Lt(v) {
      var b = v.borderWidth,
        x = ht(v),
        w,
        _,
        S,
        D,
        F,
        T;
      return (
        v.width !== void 0
          ? ((w = v.width / 2), (_ = Math.abs(v.y - v.base) / 2))
          : ((w = Math.abs(v.x - v.base) / 2), (_ = v.height / 2)),
        b !== null && Object.prototype.toString.call(b) === "[object Object]"
          ? ((S = +b.top || 0),
            (D = +b.right || 0),
            (F = +b.bottom || 0),
            (T = +b.left || 0))
          : (S = D = F = T = +b || 0),
        {
          top: x.top || S < 0 ? 0 : S > _ ? _ : S,
          right: x.right || D < 0 ? 0 : D > w ? w : D,
          bottom: x.bottom || F < 0 ? 0 : F > _ ? _ : F,
          left: x.left || T < 0 ? 0 : T > w ? w : T,
        }
      );
    }
    var Qe = P.controllers.bar,
      Bt = Qe.extend({
        dataElementType: ur,
        updateElement: function (v, b) {
          var x = this,
            w = M.resolveStyle(x, v, b, x.chart.options.elements.rectangle),
            _ = {};
          Object.defineProperty(v, "_model", {
            configurable: !0,
            get: function () {
              return _;
            },
            set: function (S) {
              oe(_, S, w);
            },
          }),
            Qe.prototype.updateElement.apply(x, arguments),
            delete v._model,
            (v._model = oe(_, { parsedBorderWidth: Lt(_) })),
            (v._styleOptions = w);
        },
        setHoverStyle: function (v) {
          var b = this;
          Qe.prototype.setHoverStyle.apply(b, arguments),
            M.saveStyle(v),
            M.setHoverStyle(v._model, v._styleOptions);
        },
        removeHoverStyle: function (v) {
          var b = this;
          v.$previousStyle || M.mergeStyle(v._model, v._styleOptions),
            Qe.prototype.removeHoverStyle.apply(b, arguments);
        },
      }),
      dr = P.helpers,
      fr =
        dr.canvas._isPointInArea ||
        function (v, b) {
          var x = 1e-6;
          return (
            v.x > b.left - x &&
            v.x < b.right + x &&
            v.y > b.top - x &&
            v.y < b.bottom + x
          );
        },
      Rt = P.elements.Point,
      Je = Rt.extend({
        draw: function (v) {
          var b = this,
            x = arguments,
            w = b._chart,
            _ = b._view,
            S = function () {
              Rt.prototype.draw.apply(b, x);
            };
          _.skip ||
            (v !== void 0 && !fr(_, v)) ||
            (M.drawShadow(w, _, S, !0),
            M.opaque(_.backgroundColor) &&
              (M.drawBackground(_, S),
              M.drawBackgroundOverlay(w, _, S),
              M.drawBevel(w, _, S)),
            M.drawInnerGlow(w, _, S),
            M.drawOuterGlow(w, _, S),
            M.drawBorder(_, S));
        },
      }),
      hr = P.helpers,
      Nt = hr.extend,
      et = P.controllers.bubble,
      Et = et.extend({
        dataElementType: Je,
        updateElement: function (v, b) {
          var x = this,
            w = M.resolveStyle(x, v, b, x.chart.options.elements.point),
            _ = {};
          Object.defineProperty(v, "_model", {
            configurable: !0,
            get: function () {
              return _;
            },
            set: function (S) {
              Nt(_, S, w);
            },
          }),
            et.prototype.updateElement.apply(x, arguments),
            delete v._model,
            (v._model = _),
            (v._styleOptions = w);
        },
        setHoverStyle: function (v) {
          var b = this;
          et.prototype.setHoverStyle.apply(b, arguments),
            M.saveStyle(v),
            M.setHoverStyle(v._model, v._styleOptions);
        },
        removeHoverStyle: function (v) {
          var b = this;
          v.$previousStyle || M.mergeStyle(v._model, v._styleOptions),
            et.prototype.removeHoverStyle.apply(b, arguments);
        },
      }),
      cr = P.helpers,
      zt = P.elements.Arc,
      ve = zt.extend({
        draw: function () {
          var v = this,
            b = arguments,
            x = v._chart,
            w = v._view,
            _ = function () {
              zt.prototype.draw.apply(v, b);
            };
          M.drawShadow(x, w, _, !0),
            M.opaque(w.backgroundColor) &&
              (M.drawBackground(w, _),
              M.drawBackgroundOverlay(x, w, _),
              M.drawBevel(
                x,
                w.borderAlign === "inner"
                  ? cr.extend({}, w, { borderWidth: w.borderWidth * 2 })
                  : w,
                _
              )),
            M.drawInnerGlow(x, w, _),
            M.drawOuterGlow(x, w, _),
            M.drawBorder(w, _);
        },
      }),
      Ee = P.defaults,
      Wt = P.helpers,
      ct = Wt.extend,
      Z = re.resolve;
    Ee.doughnut.legend.labels.generateLabels =
      Ee.pie.legend.labels.generateLabels = function (v) {
        var b = v.data;
        return b.labels.length && b.datasets.length
          ? b.labels.map(function (x, w) {
              var _ = v.getDatasetMeta(0),
                S = b.datasets[0],
                D = _.data[w] || {},
                F = D.custom || {},
                T = v.options.elements.arc,
                L = Z(
                  [F.backgroundColor, S.backgroundColor, T.backgroundColor],
                  void 0,
                  w
                ),
                z = Z([F.borderColor, S.borderColor, T.borderColor], void 0, w),
                G = Z([F.borderWidth, S.borderWidth, T.borderWidth], void 0, w);
              return ct(
                {
                  text: x,
                  fillStyle: L,
                  strokeStyle: z,
                  lineWidth: G,
                  hidden: isNaN(S.data[w]) || _.data[w].hidden,
                  index: w,
                },
                M.resolveStyle(_.controller, D, w, T)
              );
            })
          : [];
      };
    var Se = P.controllers.doughnut,
      vt = Se.extend({
        dataElementType: ve,
        updateElement: function (v, b) {
          var x = this,
            w = M.resolveStyle(x, v, b, x.chart.options.elements.arc),
            _ = {};
          Object.defineProperty(v, "_model", {
            configurable: !0,
            get: function () {
              return _;
            },
            set: function (S) {
              ct(_, S, w);
            },
          }),
            Se.prototype.updateElement.apply(x, arguments),
            delete v._model,
            (v._model = _),
            (v._styleOptions = w);
        },
        setHoverStyle: function (v) {
          var b = this;
          Se.prototype.setHoverStyle.apply(b, arguments),
            M.saveStyle(v),
            M.setHoverStyle(v._model, v._styleOptions);
        },
        removeHoverStyle: function (v) {
          var b = this;
          v.$previousStyle || M.mergeStyle(v._model, v._styleOptions),
            Se.prototype.removeHoverStyle.apply(b, arguments);
        },
      }),
      E = Bt.extend({
        _getValueScaleId: function () {
          return this.getMeta().xAxisID;
        },
        _getIndexScaleId: function () {
          return this.getMeta().yAxisID;
        },
        getValueScaleId: function () {
          return this.getMeta().xAxisID;
        },
        getIndexScaleId: function () {
          return this.getMeta().yAxisID;
        },
      }),
      ae = P.elements.Line,
      Fe = ae.extend({
        draw: function () {
          var v = this,
            b = arguments,
            x = v._chart,
            w = v._view,
            _ = function () {
              ae.prototype.draw.apply(v, b);
            };
          M.drawShadow(x, w, _),
            M.drawShadow(
              x,
              {
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: w.outerGlowWidth,
                shadowColor: w.outerGlowColor,
              },
              _
            ),
            M.drawBorder(w, _);
        },
      }),
      vr = P.helpers,
      Q = vr.extend,
      ze = P.controllers.line,
      Ht = ze.extend({
        datasetElementType: Fe,
        dataElementType: Je,
        update: function () {
          var v = this,
            b = v.getMeta().dataset,
            x = M.resolveLineStyle(v, b, v.chart.options.elements.line),
            w = {};
          Object.defineProperty(b, "_model", {
            configurable: !0,
            get: function () {
              return w;
            },
            set: function (_) {
              Q(w, _, x);
            },
          }),
            ze.prototype.update.apply(v, arguments),
            delete b._model,
            (b._model = w),
            (b._styleOptions = x);
        },
        updateElement: function (v, b) {
          var x = this,
            w = M.resolvePointStyle(x, v, b, x.chart.options.elements.point);
          ze.prototype.updateElement.apply(x, arguments),
            Q(v._model, w),
            (v._styleOptions = w);
        },
        setHoverStyle: function (v) {
          var b = this;
          ze.prototype.setHoverStyle.apply(b, arguments),
            M.saveStyle(v),
            M.setHoverStyle(v._model, v._styleOptions);
        },
        removeHoverStyle: function (v) {
          var b = this;
          v.$previousStyle || M.mergeStyle(v._model, v._styleOptions),
            ze.prototype.removeHoverStyle.apply(b, arguments);
        },
      }),
      le = P.helpers,
      Ie = le.extend,
      tt = re.resolve;
    P.defaults.polarArea.legend.labels.generateLabels = function (v) {
      var b = v.data;
      return b.labels.length && b.datasets.length
        ? b.labels.map(function (x, w) {
            var _ = v.getDatasetMeta(0),
              S = b.datasets[0],
              D = _.data[w] || {},
              F = D.custom || {},
              T = v.options.elements.arc,
              L = tt(
                [F.backgroundColor, S.backgroundColor, T.backgroundColor],
                void 0,
                w
              ),
              z = tt([F.borderColor, S.borderColor, T.borderColor], void 0, w),
              G = tt([F.borderWidth, S.borderWidth, T.borderWidth], void 0, w);
            return Ie(
              {
                text: x,
                fillStyle: L,
                strokeStyle: z,
                lineWidth: G,
                hidden: isNaN(S.data[w]) || _.data[w].hidden,
                index: w,
              },
              M.resolveStyle(_.controller, D, w, T)
            );
          })
        : [];
    };
    var Me = P.controllers.polarArea,
      gr = Me.extend({
        dataElementType: ve,
        updateElement: function (v, b) {
          var x = this,
            w = M.resolveStyle(x, v, b, x.chart.options.elements.arc),
            _ = {};
          Object.defineProperty(v, "_model", {
            configurable: !0,
            get: function () {
              return _;
            },
            set: function (S) {
              Ie(_, S, w);
            },
          }),
            Me.prototype.updateElement.apply(x, arguments),
            delete v._model,
            (v._model = _),
            (v._styleOptions = w);
        },
        setHoverStyle: function (v) {
          var b = this;
          Me.prototype.setHoverStyle.apply(b, arguments),
            M.saveStyle(v),
            M.setHoverStyle(v._model, v._styleOptions);
        },
        removeHoverStyle: function (v) {
          var b = this;
          v.$previousStyle || M.mergeStyle(v._model, v._styleOptions),
            Me.prototype.removeHoverStyle.apply(b, arguments);
        },
      }),
      Vt = P.helpers,
      A = Vt.extend,
      ye = P.controllers.radar,
      pr = ye.extend({
        datasetElementType: Fe,
        dataElementType: Je,
        update: function () {
          var v = this,
            b = v.getMeta().dataset,
            x = M.resolveLineStyle(v, b, v.chart.options.elements.line),
            w = {};
          Object.defineProperty(b, "_model", {
            configurable: !0,
            get: function () {
              return w;
            },
            set: function (_) {
              A(w, _, x);
            },
          }),
            ye.prototype.update.apply(v, arguments),
            delete b._model,
            (b._model = w),
            (b._styleOptions = x);
        },
        updateElement: function (v, b) {
          var x = this,
            w = M.resolvePointStyle(x, v, b, x.chart.options.elements.point);
          ye.prototype.updateElement.apply(x, arguments),
            A(v._model, w),
            (v._styleOptions = w);
        },
        setHoverStyle: function (v) {
          var b = this;
          ye.prototype.setHoverStyle.apply(b, arguments),
            M.saveStyle(v),
            M.setHoverStyle(v._model, v._styleOptions);
        },
        removeHoverStyle: function (v) {
          var b = this;
          v.$previousStyle || M.mergeStyle(v._model, v._styleOptions),
            ye.prototype.removeHoverStyle.apply(b, arguments);
        },
      }),
      gt = P.defaults,
      J = P.helpers,
      rt = P.layouts || P.layoutService,
      jt = J.valueOrDefault || J.getValueOrDefault,
      mr = J.valueAtIndexOrDefault || J.getValueAtIndexOrDefault,
      br =
        J.mergeIf ||
        function (v, b) {
          return J.configMerge.call(this, b, v);
        },
      yr = J.extend;
    gt.global.legend.labels.generateLabels = function (v) {
      var b = v.data,
        x = v.options.legend || {},
        w = x.labels && x.labels.usePointStyle;
      return J.isArray(b.datasets)
        ? b.datasets.map(function (_, S) {
            var D = v.getDatasetMeta(S),
              F = D.controller,
              T = v.options.elements,
              L,
              z;
            return (
              w
                ? ((L = D.data[0] || {}),
                  (z = M.resolvePointStyle(F, L, S, T.point)))
                : D.dataset
                ? ((L = D.dataset), (z = M.resolveLineStyle(F, L, T.line)))
                : ((L = D.data[0] || {}),
                  (z = M.resolveStyle(F, L, S, D.bar ? T.rectangle : T.point))),
              yr(
                {
                  text: _.label,
                  fillStyle: mr(_.backgroundColor, 0),
                  hidden: !v.isDatasetVisible(S),
                  lineCap: _.borderCapStyle,
                  lineDash: _.borderDash,
                  lineDashOffset: _.borderDashOffset,
                  lineJoin: _.borderJoinStyle,
                  lineWidth: _.borderWidth,
                  strokeStyle: _.borderColor,
                  pointStyle: _.pointStyle,
                  datasetIndex: S,
                },
                z
              )
            );
          }, this)
        : [];
    };
    function $t(v, b, x) {
      var w = v.ctx;
      M.drawShadow(v, b, x, !0),
        M.opaque(w.fillStyle) &&
          (w.save(),
          (w.strokeStyle = "rgba(0, 0, 0, 0)"),
          x(),
          M.drawBackgroundOverlay(v, b, x),
          M.drawBevel(v, b, x),
          w.restore()),
        M.drawInnerGlow(v, b, x),
        M.drawOuterGlow(v, b, x),
        (w.fillStyle = "rgba(0, 0, 0, 0)"),
        x(),
        w.restore();
    }
    var qt = P.Legend.extend({
      draw: function () {
        var v = this,
          b = v.chart,
          x = gt.global,
          w = J.each,
          _ = J.canvas.drawPoint,
          S = v.ctx,
          D;
        (J.each = function (F, T) {
          w(F, function (L) {
            var z = Object.keys(L),
              G,
              be;
            for (D = {}, G = 0, be = z.length; G < be; G++) D[z[G]] = L[z[G]];
            (D.borderColor = jt(L.strokeStyle, x.defaultColor)),
              (D.borderWidth = jt(L.lineWidth, x.elements.line.borderWidth)),
              T.apply(null, arguments);
          });
        }),
          (J.canvas.drawPoint = function () {
            var F = arguments,
              T = function () {
                _.apply(null, F);
              };
            $t(b, D, T);
          }),
          (S.strokeRect = function () {}),
          (S.fillRect = function (F, T, L, z) {
            var G = function () {
              S.beginPath(),
                S.rect(F, T, L, z),
                S.fill(),
                D.borderWidth !== 0 && S.stroke();
            };
            $t(b, D, G);
          }),
          P.Legend.prototype.draw.apply(v, arguments),
          (J.each = w),
          (J.canvas.drawPoint = _),
          delete S.fillRect,
          delete S.strokeRect;
      },
    });
    function h(v, b) {
      var x = new qt({ ctx: v.ctx, options: b, chart: v });
      rt.configure(v, x, b), rt.addBox(v, x), (v.legend = x);
    }
    var xr = {
        id: "legend",
        _element: qt,
        beforeInit: function (v) {
          var b = v.options.legend;
          b && h(v, b);
        },
        beforeUpdate: function (v) {
          var b = v.options.legend,
            x = v.legend;
          b
            ? (br(b, gt.global.legend),
              x ? (rt.configure(v, x, b), (x.options = b)) : h(v, b))
            : x && (rt.removeBox(v, x), delete v.legend);
        },
        afterEvent: function (v, b) {
          var x = v.legend;
          x && x.handleEvent(b);
        },
      },
      _r = P.helpers,
      wr = P.layouts || P.layoutService,
      pt = P.plugins,
      kr = {
        bar: Bt,
        bubble: Et,
        doughnut: vt,
        horizontalBar: E,
        line: Ht,
        polarArea: gr,
        pie: vt,
        radar: pr,
        scatter: Ht,
      };
    function Sr() {
      var v = this,
        b = [];
      return (
        _r.each(
          v.data.datasets,
          function (x, w) {
            var _ = v.getDatasetMeta(w),
              S = x.type || v.config.type;
            if (
              (_.type &&
                _.type !== S &&
                (v.destroyDatasetMeta(w), (_ = v.getDatasetMeta(w))),
              (_.type = S),
              _.controller)
            )
              _.controller.updateIndex(w), _.controller.linkScales();
            else {
              var D = kr[_.type];
              if (D === void 0)
                throw new Error('"' + _.type + '" is not a chart type.');
              (_.controller = new D(v, w)), b.push(_.controller);
            }
          },
          v
        ),
        b
      );
    }
    function mt() {
      var v = this;
      v.tooltip = new sr(
        {
          _chart: v,
          _chartInstance: v,
          _data: v.data,
          _options: v.options.tooltips,
        },
        v
      );
    }
    var ge = pt.descriptors;
    pt.descriptors = function (v) {
      var b = v._style;
      if (b) {
        var x = v.$plugins || v._plugins || (v.$plugins = v._plugins = {});
        if (x.id === this._cacheId) return x.descriptors;
        var w = this._plugins,
          _;
        this._plugins = w.map(function (S) {
          return S.id === "legend" ? xr : S;
        });
      }
      return (_ = ge.apply(this, arguments)), b && (this._plugins = w), _;
    };
    var at = {
      id: "style",
      beforeInit: function (v) {
        (v._style = {}),
          (v.buildOrUpdateControllers = Sr),
          (v.initToolTip = mt),
          v.legend && (wr.removeBox(v, v.legend), delete v.legend),
          delete v.$plugins,
          delete v._plugins,
          pt.descriptors(v);
      },
    };
    return P.plugins.register(at), at;
  });
})(Mo);
const Co = {
    __name: "TrendChart",
    setup(we) {
      Ja.register(en, tn, rn, an, nn, on, ln);
      const te = ir({}),
        P = ir(!1);
      Ka(async () => {
        const N = await Xa.get("/api/workout/statistics");
        (te.value = N.data), (P.value = !0);
      });
      const he = Za(() =>
          te.value
            ? {
                labels: te.value.trend.dates,
                datasets: [
                  {
                    label: "Data One",
                    backgroundColor: lr("positive"),
                    borderColor: lr("positive"),
                    outerGlowWidth: 5,
                    outerGlowColor: "rgb(255, 255, 0)",
                    data: te.value.trend.counts,
                    tension: 0.4,
                  },
                ],
              }
            : {}
        ),
        ke = {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
          scales: {
            x: { ticks: { color: "white" } },
            y: {
              ticks: {
                color: "white",
                callback: function (N) {
                  if (N % 1 === 0) return N;
                },
              },
              grid: { display: !1 },
            },
          },
        },
        re = {
          id: "line_glow",
          beforeDraw: (N) => {
            const V = N.canvas.getContext("2d");
            let ce = V.stroke;
            V.stroke = function () {
              V.save(),
                (V.shadowColor = V.strokeStyle),
                (V.shadowBlur = 8),
                (V.shadowOffsetX = 0),
                (V.shadowOffsetY = 4),
                ce.apply(this, arguments),
                V.restore();
            };
          },
        };
      return (N, V) =>
        P.value
          ? (ea(),
            ta(
              or(wo),
              {
                key: 0,
                "chart-options": ke,
                "chart-data": or(he),
                "chart-id": "trendChart",
                height: 200,
                plugins: [re],
              },
              null,
              8,
              ["chart-data", "plugins"]
            ))
          : Qa("", !0);
    },
  },
  Po = {
    __name: "DistributionChart",
    setup(we) {
      Ja.register(en, tn, rn, ko, an, nn, on, ln);
      const te = ir({}),
        P = ir(!1);
      Ka(async () => {
        const N = await Xa.get("/api/workout/statistics");
        (te.value = N.data), (P.value = !0);
      });
      const he = Za(() =>
          te.value != {}
            ? {
                labels: te.value.distribution.workouts,
                datasets: [
                  {
                    data: te.value.distribution.counts,
                    backgroundColor: lr("primary"),
                    borderColor: lr("positive"),
                    borderWidth: 3,
                  },
                ],
              }
            : {}
        ),
        ke = {
          responsive: !0,
          indexAxis: "y",
          plugins: { legend: { display: !1 } },
          scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" }, grid: { display: !1 } },
          },
        },
        re = {
          id: "bar_glow",
          beforeDraw: (N) => {
            const V = N.canvas.getContext("2d");
            let ce = V.stroke;
            V.stroke = function () {
              V.save(),
                (V.shadowColor = V.strokeStyle),
                (V.shadowBlur = 8),
                (V.shadowOffsetX = 0),
                (V.shadowOffsetY = 4),
                ce.apply(this, arguments),
                V.restore();
            };
          },
        };
      return (N, V) =>
        P.value
          ? (ea(),
            ta(
              or(So),
              {
                key: 0,
                "chart-options": ke,
                "chart-data": or(he),
                "chart-id": "distChart",
                plugins: [re],
              },
              null,
              8,
              ["chart-data", "plugins"]
            ))
          : Qa("", !0);
    },
  };
const Do = { class: "row" },
  Oo = { class: "col-6 q-pr-md" },
  Ao = At(
    "div",
    { class: "text-h3 text-center text-accent" },
    "Workouts per Week",
    -1
  ),
  To = { class: "col-6 q-pl-md" },
  Fo = At(
    "div",
    { class: "text-h3 text-center text-accent" },
    "Workouts per Week",
    -1
  ),
  Ro = {
    __name: "AnalysisPage",
    setup(we) {
      return (te, P) => (
        ea(),
        ta(
          _o,
          { class: "q-pa-xl" },
          {
            default: Ke(() => [
              At("div", Do, [
                At("div", Oo, [
                  _e(
                    Ya,
                    { class: "glowing-border glassy" },
                    {
                      default: Ke(() => [
                        _e(nr, null, { default: Ke(() => [Ao]), _: 1 }),
                        _e(Ua),
                        _e(nr, null, { default: Ke(() => [_e(Co)]), _: 1 }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                At("div", To, [
                  _e(
                    Ya,
                    { class: "glowing-border glassy" },
                    {
                      default: Ke(() => [
                        _e(nr, null, { default: Ke(() => [Fo]), _: 1 }),
                        _e(Ua),
                        _e(nr, null, { default: Ke(() => [_e(Po)]), _: 1 }),
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
export { Ro as default };
