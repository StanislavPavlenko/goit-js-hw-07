import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');



const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
       </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onClick);

const instance = basicLightbox.create(`
    <img src="">
`)
console.log(instance);
const imgEl = instance.element().querySelector('img');


function onClick(e) {
    if (!e.target.nodeName) {
      return;
  }
    e.preventDefault();
    const imgBig = e.target.dataset.source;
    imgEl.src = imgBig;
    instance.show()
  window.addEventListener('keydown', onEscKey);

}
// window.removeEventListener('keydown', onEscKey);


function onEscKey(e) {
  console.log(e);
  if (e.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscKey);

  }
}