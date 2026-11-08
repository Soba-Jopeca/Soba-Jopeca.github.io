const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
links?.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false')});
const topButton=document.querySelector('.back-top');
const updateTop=()=>topButton?.classList.toggle('visible',scrollY>650);
addEventListener('scroll',updateTop,{passive:true});updateTop();
topButton?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
