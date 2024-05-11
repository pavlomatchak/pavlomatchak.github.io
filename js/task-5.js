function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let color = '';
const span = document.querySelector('.color');

document.querySelector('.change-color')?.addEventListener('click', () => {
  color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.innerHTML = color;
});
