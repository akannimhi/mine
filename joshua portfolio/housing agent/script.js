const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.proj-card,.svc-card,.why-item,.blog-card,.job-card,.team-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.classList.add('cur-grow');});
  el.addEventListener('mouseleave',()=>{ring.classList.remove('cur-grow');});
});
