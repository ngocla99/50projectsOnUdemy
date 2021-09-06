'use strict';
const contents = document.querySelectorAll('.content');
const icons = document.querySelectorAll('nav ul li');

icons.forEach((icon, idx) => {
  icon.addEventListener('click', (e) => {
    hideAllContent();
    hideAllItems();

    icon.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContent() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  icons.forEach((icon) => icon.classList.remove('active'));
}
