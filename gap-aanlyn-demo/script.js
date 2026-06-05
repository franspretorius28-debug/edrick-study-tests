
let currentLanguage = localStorage.getItem("gap_lang") || "en";

function applyLanguage(lang){
  currentLanguage = lang;
  localStorage.setItem("gap_lang", lang);
  document.documentElement.lang = lang === "en" ? "en" : "af";

  document.querySelectorAll("[data-en][data-af]").forEach(el => {
    const val = el.getAttribute(lang === "en" ? "data-en" : "data-af");
    if(val !== null) el.textContent = val;
  });

  document.querySelectorAll("input[data-en-placeholder][data-af-placeholder], textarea[data-en-placeholder][data-af-placeholder]").forEach(el => {
    el.placeholder = el.getAttribute(lang === "en" ? "data-en-placeholder" : "data-af-placeholder");
  });

  document.querySelectorAll("option[data-en][data-af]").forEach(el => {
    el.textContent = el.getAttribute(lang === "en" ? "data-en" : "data-af");
  });

  const label = document.getElementById("langLabel");
  if(label){
    label.textContent = lang === "en" ? "Afrikaans | English" : "Afrikaans | English";
  }
}

function toggleLanguage(){
  applyLanguage(currentLanguage === "en" ? "af" : "en");
}

function toggleMenu(){
  const nav = document.getElementById("mainNav");
  if(nav) nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", ()=>applyLanguage(currentLanguage));
