
let currentLanguage = localStorage.getItem("gap_demo_lang") || "en";

function applyLanguage(lang){
  currentLanguage = lang;
  localStorage.setItem("gap_demo_lang", lang);

  document.querySelectorAll("[data-en][data-af]").forEach(el => {
    const text = el.getAttribute(lang === "en" ? "data-en" : "data-af");
    if(text !== null) el.textContent = text;
  });

  document.querySelectorAll("input[data-en-placeholder][data-af-placeholder], textarea[data-en-placeholder][data-af-placeholder]").forEach(el => {
    el.placeholder = el.getAttribute(lang === "en" ? "data-en-placeholder" : "data-af-placeholder");
  });

  document.querySelectorAll("option[data-en][data-af]").forEach(el => {
    el.textContent = el.getAttribute(lang === "en" ? "data-en" : "data-af");
  });

  const label = document.getElementById("langLabel");
  if(label){ label.textContent = lang === "en" ? "EN | AF" : "AF | EN"; }

  document.documentElement.lang = lang === "en" ? "en" : "af";
}

function toggleLanguage(){
  applyLanguage(currentLanguage === "en" ? "af" : "en");
}

function toggleMenu(){
  const nav = document.getElementById("mainNav");
  if(nav){ nav.classList.toggle("open"); }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLanguage);
});
