const form = document.querySelector('.login-form');
const inputs = Array.from(form.elements).filter(element => element.tagName === 'INPUT');

form.addEventListener('submit', e => {
  e.preventDefault();
  let shownAlert = false;
  const obj = {};

  inputs.forEach(element => {
    if (!shownAlert && !element.value.length) {
      alert('All form fields must be filled in');
      shownAlert = true;
    }

    if (shownAlert) {
      return;
    }

    obj[element.name] = element.value.trim();
  });

  if (!shownAlert) {
    console.log(obj);
    form.reset();
  }
});
