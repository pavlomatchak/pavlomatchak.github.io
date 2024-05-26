import throttle from 'lodash.throttle';

const fields = Array.from(document.querySelectorAll('.feedback-form .field'));
const storageKey = 'feedback-form-state';
const onloadValue = localStorage.getItem(storageKey);

const updateValue = throttle((key, value) => {
  const obj = JSON.parse(localStorage.getItem(storageKey)) || { email: '', message: '' };
  obj[key] = value;
  localStorage.setItem(storageKey, JSON.stringify(obj));
}, 1000);

fields.forEach(field => {
  field.addEventListener('input', event => updateValue(event.target.name, event.target.value));

  if (onloadValue && JSON.parse(onloadValue)[field.name]) {
    field.value = JSON.parse(onloadValue)[field.name];
  }
});

document.querySelector('.feedback-form')?.addEventListener('submit', e => {
  e.preventDefault();
  fields.forEach(field => {
    field.value = '';
  });
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  localStorage.removeItem(storageKey);
});
