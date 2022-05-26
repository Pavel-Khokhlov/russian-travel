const { scrollingElt } = require("../utils/config");

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

const maxScrollableHeight = scrollHeight - window.innerHeight;

export function getScrollPosition() {
  const scrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  const position = (scrollY / maxScrollableHeight) * 100;
  scrollingElt.style.width = `${position}vw`;
}
