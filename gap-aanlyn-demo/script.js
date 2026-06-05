
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

function openVideoModal(type){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  if(!modal || !content) return;

  if(type === "youtube"){
    content.innerHTML = `
      <div class="modal-video-frame">
        <iframe src="https://www.youtube.com/embed/lecARX06NkM?autoplay=1"
          title="GAP Aanlyn Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    `;
  } else {
    const data = {
      portal: {
        title: "Portal Walkthrough",
        step: "Step 1",
        heading: "Everything in one learner dashboard.",
        text: "Learners can open subjects, see tasks, write tests, view marks and follow progress in Afrikaans or English."
      },
      parents: {
        title: "How Parents Track Progress",
        step: "Step 2",
        heading: "Parents stay informed in real time.",
        text: "Parents can see marks, reports, messages and upcoming tasks without phoning the school or waiting for feedback."
      },
      tasks: {
        title: "How Assignments & Tests Work",
        step: "Step 3",
        heading: "Tasks, tests and feedback in one place.",
        text: "Learners receive clear instructions, complete work online, and get structured results and feedback through the portal."
      }
    }[type];

    content.innerHTML = `
      <div class="fake-video">
        <div class="fake-video-head">
          <h2>${data.title}</h2>
          <p>This is a polished built-in demo explainer. It gives the client a clear idea of what a real portal video can show.</p>
        </div>
        <div class="fake-video-screen">
          <div class="fake-narration">
            <div class="step-pill">${data.step}</div>
            <h3>${data.heading}</h3>
            <p>${data.text}</p>
          </div>
          <div class="fake-dashboard">
            <div class="fake-sidebar">
              <b>GAP</b>
              <span>Dashboard</span>
              <span>Subjects</span>
              <span>Tasks</span>
              <span>Tests</span>
              <span>Progress</span>
              <span>Reports</span>
              <span>Messages</span>
            </div>
            <div class="fake-main">
              <div class="fake-main-top"><strong>Hello, Liam! 👋</strong><span class="fake-lang">EN | AF</span></div>
              <div class="fake-kpis">
                <div><b>6</b><span>Subjects</span></div>
                <div><b>14</b><span>Tasks</span></div>
                <div><b>3</b><span>Tests</span></div>
                <div><b>78%</b><span>Average</span></div>
              </div>
              <div class="fake-bars">
                <div><i style="width:90%"></i></div>
                <div><i style="width:78%"></i></div>
                <div><i style="width:85%"></i></div>
                <div><i style="width:73%"></i></div>
                <div><i style="width:88%"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="fake-video-controls">
          <button>▶ Playing Demo</button>
          <div class="fake-timeline"><i></i></div>
          <strong>EN | AF</strong>
        </div>
      </div>
    `;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeVideoModal(){
  const modal = document.getElementById("videoModal");
  const content = document.getElementById("modalContent");
  if(!modal || !content) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  content.innerHTML = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") closeVideoModal();
});
