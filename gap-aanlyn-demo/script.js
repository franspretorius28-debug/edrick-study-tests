
function toast(message){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = message;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}

function openVideo(type){
  const modal = document.getElementById('videoModal');
  const content = document.getElementById('modalContent');
  if(!modal || !content) return;

  if(type === 'youtube'){
    content.innerHTML = `<div class="video-frame"><iframe src="https://www.youtube.com/embed/lecARX06NkM?autoplay=1" title="GAP Aanlyn Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  } else {
    const data = {
      portal:['PORTAL WALKTHROUGH','See how the learner portal works step-by-step.','Learners can open subjects, view tasks, write tests and track progress in one clean dashboard.'],
      parents:['PARENT PROGRESS','Stay informed and support your child.','Parents can see marks, reports, messages and upcoming tasks without waiting for feedback.'],
      tasks:['TASKS & TESTS','Everything your child needs to succeed.','Assignments, tests and feedback can be presented in one easy learner workflow.']
    }[type];

    content.innerHTML = `<div class="demo-video"><div class="demo-head"><h2>${data[0]}</h2><p>Professional built-in explainer video concept for the website demo.</p></div><div class="demo-content"><div class="demo-copy"><span>DEMO VIDEO</span><h3>${data[1]}</h3><p>${data[2]}</p></div><div class="demo-ui"><div class="demo-ui-layout"><div class="demo-side"><strong>GAP</strong><span>Dashboard</span><span>My Subjects</span><span>Tasks</span><span>Tests</span><span>Progress</span><span>Reports</span></div><div class="demo-main"><div class="demo-top"><strong>Hello, Liam! 👋</strong><b>EN | AF</b></div><div class="demo-kpis"><div><strong>6</strong><small>Subjects</small></div><div><strong>14</strong><small>Tasks</small></div><div><strong>3</strong><small>Tests</small></div><div><strong>78%</strong><small>Average</small></div></div><div class="demo-bars"><div><i style="width:90%"></i></div><div><i style="width:78%"></i></div><div><i style="width:85%"></i></div><div><i style="width:73%"></i></div><div><i style="width:88%"></i></div></div></div></div></div></div></div>`;
  }

  modal.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeVideo(){
  const modal = document.getElementById('videoModal');
  const content = document.getElementById('modalContent');
  if(!modal || !content) return;
  modal.classList.remove('open');
  content.innerHTML='';
  document.body.style.overflow='';
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeVideo();
});


function openPortalPreview(){
  const modal = document.getElementById('portalModal');
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function closePortalPreview(){
  const modal = document.getElementById('portalModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

function toggleMenu(){
  const menu = document.getElementById('menu');
  if(menu) menu.classList.toggle('open');
}
