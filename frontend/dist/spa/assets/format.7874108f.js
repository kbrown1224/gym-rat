import { b1 as l } from "./index.3262b3e1.js";
function r() {
  if (window.getSelection !== void 0) {
    const t = window.getSelection();
    t.empty !== void 0
      ? t.empty()
      : t.removeAllRanges !== void 0 &&
        (t.removeAllRanges(),
        l.is.mobile !== !0 && t.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
function a(t, e, o) {
  return o <= e ? e : Math.min(o, Math.max(e, t));
}
function s(t, e, o) {
  if (o <= e) return e;
  const i = o - e + 1;
  let n = e + ((t - e) % i);
  return n < e && (n = i + n), n === 0 ? 0 : n;
}
export { a as b, r as c, s as n };
