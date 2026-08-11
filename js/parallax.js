// Le da un fondo oscuro al nav cuando el usuario baja de la sección hero
const nav = document.querySelector('.nav');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight - 100) {
    nav.style.background = 'rgba(20, 18, 15, 0.9)';
  } else {
    nav.style.background = 'transparent';
  }
});