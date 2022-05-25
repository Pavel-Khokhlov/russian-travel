import "./pages/index.css";
import { renderPage } from "./components/page"
import { btnEng, btnRus, html } from "./utils/config";
import { getScrollPosition } from "./components/scrolling";

function handleChangeRus() {
  btnRus.classList.add("_active");
  btnEng.classList.remove("_active");
  html.lang = "ru";
  renderPage();
}

function handleChangeEng() {
  btnEng.classList.add("_active");
  btnRus.classList.remove("_active");
  html.lang = "en";
  renderPage();
}

renderPage();

btnRus.addEventListener("click", handleChangeRus);
btnEng.addEventListener("click", handleChangeEng);
window.addEventListener('scroll', getScrollPosition);
