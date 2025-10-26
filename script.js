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
