
let currentLang = localStorage.getItem("edugap_lang") || "af";

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem("edugap_lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-af][data-en]").forEach(el => {
    el.textContent = el.getAttribute(lang === "af" ? "data-af" : "data-en");
  });
  const label = document.getElementById("langLabel");
  if(label) label.textContent = "Afrikaans | English";
}

function toggleLanguage(){
  applyLanguage(currentLang === "af" ? "en" : "af");
  showToast(currentLang === "af" ? "Taal verander na Afrikaans" : "Language changed to English");
}

function toggleMenu(){
  const menu = document.getElementById("mainMenu");
  if(menu) menu.classList.toggle("open");
}

function showToast(message){
  const toast = document.getElementById("toast");
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.edugapToast);
  window.edugapToast = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openDemoVideo(){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="video-frame">
      <iframe src="https://www.youtube.com/embed/lecARX06NkM?autoplay=1"
        title="EduGap SA Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openPortal(){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="portal-modal">
      <h2>EduGap SA Learner Portal</h2>
      <p>Hierdie is ’n demo van hoe die leerder/ouer dashboard kan werk.</p>
      <div class="portal-preview" style="margin-top:18px">
        <aside>
          <strong>EduGap SA</strong>
          <span>Dashboard</span><span>Subjects</span><span>Tasks</span><span>Tests</span><span>Reports</span>
        </aside>
        <main>
          <div class="welcome"><strong>Hello, Learner 👋</strong><span>Grade 1 Numeracy</span></div>
          <div class="kpis">
            <div><b>20</b><small>Lessons</small></div>
            <div><b>12</b><small>Tasks</small></div>
            <div><b>4</b><small>Tests</small></div>
            <div><b>82%</b><small>Progress</small></div>
          </div>
          <div class="bars">
            <div><i style="width:90%"></i></div>
            <div><i style="width:72%"></i></div>
            <div><i style="width:82%"></i></div>
          </div>
        </main>
      </div>
    </div>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  modal.classList.remove("open");
  content.innerHTML = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

document.addEventListener("DOMContentLoaded", () => applyLanguage(currentLang));
