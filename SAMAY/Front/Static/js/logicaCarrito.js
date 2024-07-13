document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('menuHamburger');
  const list = document.getElementById('menuList');
  const menuItems = document.querySelectorAll('.menuItem');
  const cerrarButton = document.getElementById('cerrarButton');

  function toggleMenu() {
    list.classList.toggle('show');
    list.classList.toggle('close');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  menuItems.forEach((item) => {
    item.addEventListener('click', function () {
      list.classList.add('close');
      list.classList.remove('show');
    });
  });

  cerrarButton.addEventListener('click', function () {
    list.classList.add('close');
    list.classList.remove('show');
  });
});
