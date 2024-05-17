import { images } from './images.js';

const gallery = document.querySelector('.gallery');
let content = '';

images.forEach(image => {
  content += `<li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
      <img
        class="gallery-image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}" />
    </a>
  </li>`;
});

gallery.insertAdjacentHTML('afterbegin', content);

gallery.addEventListener('click', e => {
  if (e.target.nodeName === "LI") {
    const instance = basicLightbox.create(`
      <div class="modal">
          <img src=${e.target.querySelector('img')?.dataset.source} alt="${e.target.querySelector('img')?.getAttribute('alt')}" />
      </div>
    `);

    instance.show();
  }
});
