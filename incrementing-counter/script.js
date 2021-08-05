'use strict';
const counters = document.querySelectorAll('.counter');

counters.forEach(function (counter) {
  counter.innerHTML = '0';
  const target = +counter.getAttribute('data-target');
  const increment = target / 200;

  const updateCounter = function () {
    const c = +counter.innerHTML;
    if (c < target) {
      counter.innerHTML = Math.ceil(c + increment);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updateCounter();
});
