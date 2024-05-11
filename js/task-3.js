const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input?.addEventListener('input', e => {
  const trimmed = e.target.value.trim();
  output.innerText = trimmed.length ? trimmed : 'Anonymous';
});
