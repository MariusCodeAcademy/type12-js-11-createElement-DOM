'use strict';
console.log('main.js');

const divEl = document.createElement('div');

divEl.className = 'alert';

/// siukuriam <strong></strong>
const strongEl = document.createElement('strong');
strongEl.textContent = 'Hi there';

// divEl.appendChild(strongEl, ' This is and alert'); // prideda tik viena el
divEl.append(strongEl, ' This is and alert');

// divEl.textContent = ' This is and alert';

// document.body.appendChild(divEl);

//  sarasas

const colorsListEl = document.getElementById('ul-colors');
console.log('colorsListEl ===', colorsListEl);
