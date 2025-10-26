// Year stamp
const yearEl=document.getElementById('year');
if(yearEl){yearEl.textContent=new Date().getFullYear();}

// Bootstrap validation
(()=>{
  const form=document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit',e=>{
    if(!form.checkValidity()){e.preventDefault();e.stopPropagation();}
    form.classList.add('was-validated');
  });
})();

// WhatsApp deep link (replace number below)
const WA_NUMBER='12025550199'; // >>> Replace with your real number (no +, just digits)
const waBase=`https://wa.me/${WA_NUMBER}?text=`;
const waLink=document.getElementById('wa');
if(waLink){waLink.href=waBase+encodeURIComponent('Hello Domicicare, I would like more information.');}

const formEl=document.getElementById('contactForm');
if(formEl){
  formEl.addEventListener('submit',(e)=>{
    if(!e.target.checkValidity()) return; // keep validation
    e.preventDefault();
    const n=document.getElementById('name').value.trim()||'Client';
    const p=document.getElementById('phone').value.trim();
    const m=document.getElementById('msg').value.trim();
    const msg=`Hello Domicicare, I am ${n}. Phone: ${p}. I need: ${m}`;
    window.open(waBase+encodeURIComponent(msg),'_blank');
  });
}

/* --- Auto-close navbar on mobile --- */
(() => {
  const collapseEl = document.getElementById('nav');          // .navbar-collapse
  const toggler    = document.querySelector('.navbar-toggler');
  if (!collapseEl || !toggler) return;

  // Utilidad: ¿estamos en modo móvil (toggler visible)?
  const isMobile = () => getComputedStyle(toggler).display !== 'none';

  // Cerrar al tocar un link/botón del menú
  collapseEl.querySelectorAll('.nav-link, .btn').forEach(el => {
    el.addEventListener('click', () => {
      if (isMobile() && collapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
    });
  });

  // Cerrar si se toca fuera del menú cuando está abierto
  document.addEventListener('click', (e) => {
    const open = collapseEl.classList.contains('show');
    const clickedInside = collapseEl.contains(e.target) || toggler.contains(e.target);
    if (open && isMobile() && !clickedInside) {
      bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
    }
  });

  // Cerrar en cambios de hash (anclas)
  window.addEventListener('hashchange', () => {
    if (isMobile() && collapseEl.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
    }
  });
})();
