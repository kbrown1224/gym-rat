let l = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"),
    Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }),
    document.body.appendChild(e),
    e.appendChild(t),
    (e.scrollLeft = -1e3),
    (l = e.scrollLeft >= 0),
    e.remove();
}
export { l as r };
