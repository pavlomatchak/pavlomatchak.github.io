const container = document.getElementById('boxes');
const create = document.querySelector('[data-create');
const destroy = document.querySelector('[data-destroy');
const input = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(ammount) {
  let size = 30;
  let content = '';

  for (let i = 1; i <= ammount; i++) {
    content = content + `<div style="background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px"></div>`;
    size += 10;
  }

  container.insertAdjacentHTML('afterbegin', content);
}

function destroyBoxes() {
  container.innerHTML = '';
}

create?.addEventListener('click', () => {
  if (input.value >= 1 && input.value <= 100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = '';
  }
});

destroy?.addEventListener('click', () => {
  destroyBoxes();
});
