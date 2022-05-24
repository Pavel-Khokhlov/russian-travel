import { language } from "../utils/data";
import { brandLogo, copyRight, coverTitle, footerLinks, html, introLists, introTitle, leadCapture, leadSubtitle, leadTitle, title } from "../utils/config";

// Fn to define real current path to obj data
function getByPath(obj, path) {
  let parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    current = current[parts[i]];
    if (!current)
      break;
  }
  return current;
}

export function renderPage() {
  const lang = html.lang;
  const currentPath = getByPath(language, lang);
  brandLogo.src = currentPath.logo.link;
  brandLogo.alt = currentPath.logo.alt;
  title.innerHTML = currentPath.title;
  leadTitle.innerHTML = currentPath.title;
  leadSubtitle.innerHTML = currentPath.leadSubtitle;
  leadCapture.innerHTML = currentPath.leadCapture;
  introTitle.innerHTML = currentPath.introTitle;
  introLists.forEach((list, i) => {
    list.innerHTML = currentPath.introLists[i]
  });
  coverTitle.innerHTML = currentPath.coverTitle;
  footerLinks.forEach((link, i) => {
    link.innerHTML = currentPath.links[i]
  });
  copyRight.innerHTML = currentPath.copyRight;
}
