let btn = document.querySelector("footer .bttn a");
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
let pop = document.querySelector(".landing .text a");
let landing = document.querySelector(".landing");
pop.onclick = function () {
  let overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  document.body.appendChild(overlay);
  let popup = document.createElement("div");
  popup.className = "popup";
  landing.appendChild(popup);
  let text = document.createElement("div");
  text.className = "text";
  popup.appendChild(text);
  let head = document.createElement("div");
  head.className = "head";
  text.appendChild(head);
  let p = document.createElement("p");
  let sub = document.createTextNode("Subscribe");
  let pp = document.createElement("p");
  pp.className = "paragraph";
  let x = document.createTextNode("X");
  let ppp = document.createElement("p");
  let cont = document.createTextNode(
    "Join my mailing list to receive updates on the latest blog posts and other things."
  );
  let inn = document.createElement("input");
  inn.className = "inn";
  let subs = document.createElement("a");
  subs.className = "aa";
  let suuub = document.createTextNode("Subscribe");
  subs.appendChild(suuub);
  ppp.appendChild(cont);
  text.appendChild(ppp);
  text.appendChild(inn);
  text.appendChild(subs);
  p.appendChild(sub);
  pp.appendChild(x);
  head.appendChild(p);
  head.appendChild(pp);
  p.appendChild(sub);
  pp.onclick = () => {
    document.body.removeChild(overlay);
    popup.removeChild(text);
  };
};
