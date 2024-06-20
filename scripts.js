const hamb = document.querySelector("#sendvich");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  sendvich.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  sendvich.classList.remove("active");
  body.classList.remove("noscroll");
}













// const body = document.body;
// const slider = document.getElementById("slider");

// function themeSwitch(){
//   body.classList.toggle("dark");
// }

// slider.addEventListener("click", themeSwitch);



// // Selecting the necessary elements
// const icon = document.querySelector('.icon');
// const menu = document.querySelector('.menu');
// const menuList = document.querySelector('.menu-list');

// // Event listener for toggling the menu
// icon.addEventListener('click', () => {
//     menu.classList.toggle('show-menu');
// });

// // Close the menu when a menu item is clicked
// menuList.addEventListener('click', () => {
//     menu.classList.remove('show-menu');
// });


// // Selecting the necessary elements
// const icon = document.querySelector('.icon');
// const menu = document.querySelector('.menu-list');

// // Event listener for toggling the menu
// icon.addEventListener('click', () => {
//     menu.classList.toggle('show-menu');
// });



