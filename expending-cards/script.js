'use strict';
const panels = document.querySelectorAll('.panel');

// for (const panel of panels) {
//   panel.addEventListener('click', function () {
//     removeActiveAll();
//     panel.classList.add('active');
//   });
// }
// const removeActiveAll = function () {
//   for (const panel of panels) {
//     panel.classList.remove('active');
//   }
// };

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeAllActive();
    panel.classList.add('active');
  });
});
function removeAllActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
