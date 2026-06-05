
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
    content.innerHTML = `
      <div class="video-frame">
        <iframe src="https://www.youtube.com/embed/lecARX06NkM?autoplay=1"
          title="GAP Aanlyn Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>`;
  } else {
    const data = {
      portal:['PORTAL WALKTHROUGH','See how the learner portal works step-by-step.','Learners can open subjects, view tasks, write tests and track progress in one clean dashboard.'],
      parents:['PARENT PROGRESS','Stay informed and support your child.','Parents can see marks, progress, reports and messages without needing to phone or wait for feedback.'],
      tasks:['TASKS & TESTS','From tasks to tests — everything in one place.','The platform can guide learners through assignments, tests, feedback and progress clearly.']
    }[type];

    content.innerHTML = `
      <div class="demo-video">
        <div class="demo-head">
          <h2>${data[0]}</h2>
          <p>This is a polished video-style walkthrough popup for the client demo.</p>
        </div>
        <div class="demo-content">
          <div class="demo-copy">
            <span>DEMO VIDEO</span>
            <h3>${data[1]}</h3>
            <p>${data[2]}</p>
          </div>
          <div class="demo-ui">
            <div class="demo-ui-layout">
              <div class="demo-side">
                <strong>GAP</strong><span>Dashboard</span><span>Subjects</span><span>Tasks</span><span>Tests</span><span>Progress</span><span>Reports</span>
              </div>
              <div class="demo-main">
                <div class="demo-top"><strong>Hello, Liam! 👋</strong><b>EN | AF</b></div>
                <div class="demo-kpis">
                  <div><strong>6</strong><small>Subjects</small></div>
                  <div><strong>14</strong><small>Tasks</small></div>
                  <div><strong>3</strong><small>Tests</small></div>
                  <div><strong>78%</strong><small>Average</small></div>
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
        <div class="demo-controls"><div class="demo-play">▶ Playing Demo</div><div class="demo-line"><i></i></div><strong>EN | AF</strong></div>
      </div>`;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function closeVideo(){
  const modal = document.getElementById('videoModal');
  const content = document.getElementById('modalContent');
  if(!modal || !content) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  content.innerHTML='';
  document.body.style.overflow='';
}

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeVideo();
});
