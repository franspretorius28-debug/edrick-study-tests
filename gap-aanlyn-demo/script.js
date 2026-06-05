
function showToast(message){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__gapToastTimer);
  window.__gapToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function toggleLangToast(){
  showToast('Afrikaans | English switch can be connected fully in the live build. This demo keeps the exact visual layout as requested.');
}

function scrollToContact(){
  showToast('In the final live build this button can scroll to the contact form or open a quotation / enquiry workflow.');
}

function openVideo(type){
  const modal = document.getElementById('videoModal');
  const content = document.getElementById('modalContent');
  if(!modal || !content) return;

  if(type === 'youtube'){
    content.innerHTML = `
      <div class="modal-frame">
        <iframe src="https://www.youtube.com/embed/lecARX06NkM?autoplay=1"
          title="GAP Aanlyn Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    `;
  } else {
    const map = {
      portal: {
        title: 'Portal Walkthrough',
        step: 'PORTAL TOUR',
        heading: 'See how the learner portal works step-by-step.',
        text: 'This polished demo video concept shows the type of guided walkthrough that can explain subjects, tasks, tests, reports and progress to parents and learners.'
      },
      parents: {
        title: 'How Parents Track Progress',
        step: 'PARENT VIEW',
        heading: 'Real-time insight for parents.',
        text: 'Parents can see marks, reports, subject progress and important updates in a clean and trustworthy dashboard experience.'
      },
      tasks: {
        title: 'How Assignments & Tests Work',
        step: 'TASKS & TESTS',
        heading: 'Everything your child needs to succeed.',
        text: 'Assignments, tests and feedback can be presented in one easy learner workflow that feels professional and clear.'
      }
    };
    const d = map[type];
    content.innerHTML = `
      <div class="demo-video">
        <div class="demo-head">
          <h2>${d.title}</h2>
          <p>Professional built-in explainer video concept for the website demo.</p>
        </div>
        <div class="demo-inner">
          <div class="demo-copy">
            <div class="eyebrow">${d.step}</div>
            <h3>${d.heading}</h3>
            <p>${d.text}</p>
          </div>
          <div class="demo-ui">
            <div class="demo-ui-layout">
              <div class="demo-side">
                <strong>GAP</strong>
                <span>Dashboard</span>
                <span>My Subjects</span>
                <span>Tasks</span>
                <span>Tests</span>
                <span>Progress</span>
                <span>Reports</span>
                <span>Messages</span>
              </div>
              <div class="demo-main">
                <div class="demo-top">
                  <strong>Hello, Liam! 👋</strong>
                  <span class="pill">EN | AF</span>
                </div>
                <div class="demo-kpis">
                  <div><b>6</b><small>Subjects</small></div>
                  <div><b>14</b><small>Tasks</small></div>
                  <div><b>3</b><small>Tests</small></div>
                  <div><b>78%</b><small>Average</small></div>
                </div>
                <div class="demo-bars">
                  <div><i style="width:90%"></i></div>
                  <div><i style="width:78%"></i></div>
                  <div><i style="width:85%"></i></div>
                  <div><i style="width:73%"></i></div>
                  <div><i style="width:88%"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="demo-controls">
          <div class="demo-play">▶ Playing Demo</div>
          <div class="demo-timeline"><i></i></div>
          <strong>EN | AF</strong>
        </div>
      </div>
    `;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal(){
  const modal = document.getElementById('videoModal');
  const content = document.getElementById('modalContent');
  if(!modal || !content) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  content.innerHTML = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeVideoModal();
});
