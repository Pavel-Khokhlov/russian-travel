const { scrollingElt } = require("../utils/config");
const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;

export function getScrollPosition() {
  const position = ((window.scrollY) / maxScrollableHeight) * 100;
  scrollingElt.style.width = `${position}%`;
}
