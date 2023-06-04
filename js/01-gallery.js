
import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryElements = document.querySelector('.gallery');


const createGalleryItem = (item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    image.setAttribute('data-source', item.original);

    link.appendChild(image);
    listItem.appendChild(link);

    return listItem;
};

function renderGellery() {
    const renderGalleryHTML = galleryItems.map(item => createGalleryItem(item));
    galleryElements.append(...renderGalleryHTML);
};
renderGellery();

galleryElements.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const sourse = event.target.dataset.source;
const createModal = basicLightbox.create(`<img src='${sourse}' alt=''>`);
  createModal.show();
  

  window.addEventListener('keydown', hadleKeyDown);

  function hadleKeyDown(event) {
    if (event.code === 'Escape') {
      createModal.close();
    }
  }

}