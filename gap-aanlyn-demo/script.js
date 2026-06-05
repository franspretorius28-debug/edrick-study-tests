
let currentLang = localStorage.getItem("gapLang") || "af";

function setText(lang){
  currentLang = lang;
  localStorage.setItem("gapLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-af][data-en]").forEach(el => {
    const value = el.getAttribute(lang === "af" ? "data-af" : "data-en");
    if(value !== null){
      if(el.classList.contains("btn") || el.tagName === "BUTTON" || el.tagName === "A"){
        if(value.includes("Demo") || value.includes("Intro") || value.includes("Portal") || value.includes("Navraag") || value.includes("Enquire")){
          el.childNodes.forEach(n => { if(n.nodeType === Node.TEXT_NODE) n.textContent = value; });
          if(!Array.from(el.childNodes).some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim())) el.textContent = value;
        } else {
          el.textContent = value;
        }
      } else {
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll("[data-af-placeholder][data-en-placeholder]").forEach(el => {
    el.placeholder = el.getAttribute(lang === "af" ? "data-af-placeholder" : "data-en-placeholder");
  });

  const langText = document.getElementById("langText");
  if(langText) langText.textContent = "Afrikaans | English";
}

function toggleLanguage(){
  setText(currentLang === "af" ? "en" : "af");
  showToast(currentLang === "af" ? "Taal verander na Afrikaans" : "Language changed to English");
}

function toggleMenu(){
  const nav = document.getElementById("mainNav");
  if(nav) nav.classList.toggle("open");
}

function showToast(message){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(()=>t.classList.remove("show"), 2600);
}

function openVideo(type){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  if(!modal || !content) return;

  if(type === "youtube"){
    content.innerHTML = `<div class="video-frame"><iframe src="https://www.youtube.com/embed/lecARX06NkM?autoplay=1" title="GAP Aanlyn Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  } else {
    const data = {
      portal:["Portal Walkthrough","See how the learner portal works step-by-step.","Learners can open subjects, tasks, tests, reports and progress from one clear dashboard."],
      parents:["How Parents Track Progress","Stay informed and support your child.","Parents can view marks, reports, messages and updates without waiting for feedback."],
      tasks:["How Assignments & Tests Work","Everything your child needs to succeed.","Assignments, tests and feedback can be presented in one simple learner workflow."]
    }[type];

    content.innerHTML = `<div class="demo-video"><h2>${data[0]}</h2><p>${data[1]}</p><div class="demo-preview"><aside><strong>GAP</strong><span>Dashboard</span><span>Subjects</span><span>Tasks</span><span>Tests</span><span>Progress</span><span>Reports</span></aside><main><strong>Hello, Liam! 👋</strong><p>${data[2]}</p><div class="kpis"><div><b>6</b><small>Subjects</small></div><div><b>14</b><small>Tasks</small></div><div><b>3</b><small>Tests</small></div><div><b>78%</b><small>Average</small></div></div><div class="bars"><div><i style="width:90%"></i></div><div><i style="width:78%"></i></div><div><i style="width:85%"></i></div><div><i style="width:73%"></i></div></div></main></div></div>`;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeVideo(){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  if(!modal || !content) return;
  modal.classList.remove("open");
  content.innerHTML = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeVideo();
});

document.addEventListener("DOMContentLoaded", () => setText(currentLang));
