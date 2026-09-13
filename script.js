const toggle = document.querySelector('#languageToggle');
const translatable = document.querySelectorAll('[data-pt][data-en]');
let language = localStorage.getItem('portfolio-language') || 'pt';

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  translatable.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  toggle.textContent = language === 'pt' ? 'EN' : 'PT';
  toggle.setAttribute('aria-label', language === 'pt' ? 'Switch to English' : 'Mudar para português');
  localStorage.setItem('portfolio-language', language);
}

toggle.addEventListener('click', () => setLanguage(language === 'pt' ? 'en' : 'pt'));
setLanguage(language);

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
