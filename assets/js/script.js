const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');

let menuOpen = false;

burgerBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileNav.style.maxHeight = '200px'; // подберите нужное значение под кол-во пунктов
  } else {
    mobileNav.style.maxHeight = '0';
  }
});
