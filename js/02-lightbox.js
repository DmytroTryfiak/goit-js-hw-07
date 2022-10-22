import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryContent = galleryItems.reduce( (galleryContent,item) => {
    return galleryContent += 
        `<a class="gallery__item" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
            />
        </a>`    
}, '');

gallery.insertAdjacentHTML('afterbegin', galleryContent);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

console.log(galleryItems);
