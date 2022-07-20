console.log('create');

// taikomes =======
const colorsListEl = document.getElementById('ul-colors');

const newLiEl = document.createElement('li');

newLiEl.textContent = 'TOTALY NEW COLOR';

// dedam kaip paskutini elemnta
colorsListEl.append(newLiEl);

// prideti kaip pirma elementa
colorsListEl.prepend(newLiEl);

// ikelti po elementu
colorsListEl.after(newLiEl);

// ikelti pries elementa
colorsListEl.before(newLiEl);

// ikelti po treciu li elementu (blue)
colorsListEl.children[2].after(newLiEl);
