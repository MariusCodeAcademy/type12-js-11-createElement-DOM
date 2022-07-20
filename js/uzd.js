// uzd 1

function createSection() {
  // kuriam elementus
  const sectionEl = document.createElement('section');
  sectionEl.className = 'card';
  const h2El = document.createElement('h2');
  // h2El.setAttribute('id', 'yes');
  h2El.id = 'yes';
  h2El.textContent = 'Section title';
  console.log('h2El ===', h2El);
  const pEl = document.createElement('p');
  pEl.className = 'text';
  pEl.textContent = 'Hello i am section text';

  // dedam vidinius section elementus
  sectionEl.append(h2El, pEl);
  // ideti i body
  document.body.append(sectionEl);
}
createSection();
createSection();
