(()=>{"use strict";var e={490:(e,t,r)=>{r.r(t),r.d(t,{brandLogo:()=>c,btnEng:()=>n,btnRus:()=>l,copyRight:()=>h,coverLink:()=>f,coverSubtitle:()=>m,coverTitle:()=>b,footerLinks:()=>y,html:()=>o,introLists:()=>v,introTitle:()=>p,leadCapture:()=>g,leadSubtitle:()=>d,leadTitle:()=>u,pageEng:()=>a,pageRus:()=>i,scrollingElt:()=>_,title:()=>s});var o=document.querySelector("html"),l=document.querySelector(".button_rus"),n=document.querySelector(".button_eng"),i=document.querySelectorAll(".page_rus"),a=document.querySelectorAll(".page_eng"),c=document.querySelector(".logo"),s=document.querySelector("title"),u=document.querySelector(".lead__title"),d=document.querySelector(".lead__subtitle"),g=document.querySelector(".lead__capture"),p=document.querySelector(".intro__title"),v=document.querySelectorAll(".intro__list"),b=document.querySelector(".cover__title"),m=document.querySelector(".cover__subtitle"),f=document.querySelector(".cover__link"),y=document.querySelectorAll(".footer__link"),h=document.querySelector(".footer__copyright"),_=document.querySelector(".scrolling")},139:(e,t,r)=>{e.exports=r.p+"./images/cover_five.0b71f22d4350948fd8b0.jpg"},699:(e,t,r)=>{e.exports=r.p+"./images/cover_four.aa0fd36f8e85bd20de3b.jpg"},370:(e,t,r)=>{e.exports=r.p+"./images/cover_one.b8caa322b5e2fb24ecb5.jpg"},819:(e,t,r)=>{e.exports=r.p+"./images/cover_three.925853d564d82d38192d.jpg"},596:(e,t,r)=>{e.exports=r.p+"./images/cover_two.455fa660784140dd020f.jpg"},475:(e,t,r)=>{e.exports=r.p+"./images/logo_eng.2c762416d457fd427404.png"},461:(e,t,r)=>{e.exports=r.p+"./images/logo_rus.ca7025fb09ca8271ff48.png"}},t={};function r(o){var l=t[o];if(void 0!==l)return l.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",(()=>{var e=r(461),t=r(475),o=r(370),l=r(596),n=r(819),i=r(699),a=r(139),c={ru:{logo:{link:e,alt:"логотип россия"},title:"Путешествия по России",leadTitle:"Путешествия по России",leadSubtitle:"Настоящая страна не в выпусках новостей, а здесь.",leadCapture:"ваша полка - верхняя",introTitle:"Чего мы там не видели?",introLists:["Часовых поясов","Объектов природного наследия ЮНЕСКО","Объектов культурного наследия ЮНЕСКО","Природных заповедников","Аэропортов"],coverTitle:"До Байкала «на собаках»",coverSubtitle:"По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до Байкала на электричках.",links:["Карты","Погода","Расписание","Календарь","Путешествия"],copyRight:"© 2020 Павел Хохлов"},en:{logo:{link:t,alt:"logo russia"},title:"Travel in Russia",leadTitle:"Travel in</br>Russia",leadSubtitle:"The real country is not in the news releases, but here.",leadCapture:"your shelf - the upper one",introTitle:"What didn't we see there?",introLists:["Time zones","UNESCO natural heritage sites","UNESCO heritage sites","Nature reserves","Airports"],coverTitle:'To Baikal "by dogs"',coverSubtitle:"Transib and iframes — voyage",links:["Maps","Weather","Schedule","Calendar","Trips"],copyRight:"© 2020 Pavel Khokhlov"}},s=[o,l,n,i,a],u=r(490);function d(){var e,t,r=u.html.lang,o=function(e,t){for(var r=t.split("."),o=e,l=0;l<r.length&&(o=o[r[l]]);l++);return o}(c,r);u.brandLogo.src=o.logo.link,u.brandLogo.alt=o.logo.alt,u.title.innerHTML=o.title,u.leadTitle.innerHTML=o.title,u.leadSubtitle.innerHTML=o.leadSubtitle,u.leadCapture.innerHTML=o.leadCapture,u.introTitle.innerHTML=o.introTitle,u.introLists.forEach((function(e,t){e.innerHTML=o.introLists[t]})),u.coverTitle.innerHTML=o.coverTitle,u.coverSubtitle.innerHTML=o.coverSubtitle,u.coverLink.style.backgroundImage="url(".concat(s[(e=0,t=s.length,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e))],")"),u.footerLinks.forEach((function(e,t){e.innerHTML=o.links[t]})),u.copyRight.innerHTML=o.copyRight}var g=r(490).scrollingElt,p=document.body.scrollHeight-window.innerHeight;d(),u.btnRus.addEventListener("click",(function(){u.btnRus.classList.add("_active"),u.btnEng.classList.remove("_active"),u.html.lang="ru",d()})),u.btnEng.addEventListener("click",(function(){u.btnEng.classList.add("_active"),u.btnRus.classList.remove("_active"),u.html.lang="en",d()})),window.addEventListener("scroll",(function(){var e=window.scrollY/p*100;g.style.width="".concat(e,"%")}))})()})();