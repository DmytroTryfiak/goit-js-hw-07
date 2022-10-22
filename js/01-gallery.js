import { galleryItems } from './gallery-items.js';

let basicLightboxInstance;
const gallery = document.querySelector('.gallery');
const galleryContent = galleryItems.reduce( (galleryContent,item) => 
    galleryContent + 
            `<div class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </div>`    
    , '');

gallery.insertAdjacentHTML('afterbegin', galleryContent);
gallery.addEventListener('click', showModalWithImage);

function showModalWithImage (event) { 
    if (event.target.nodeName === "IMG") {
        event.preventDefault(); 
        const imgSrc = event.target.dataset.source;
        basicLightboxInstance = basicLightbox.create(`
                <img src=${imgSrc} width="800" height="600">
        `, {
            onShow: () => {window.addEventListener('keydown', closeModalWithImage);},
            onClose: () => {window.removeEventListener('keydown', closeModalWithImage);},
        });
        basicLightboxInstance.show();
    }  
}

function closeModalWithImage (event) {   
    if (event.key === 'Escape' && basicLightboxInstance && basicLightboxInstance.visible()) {
        basicLightboxInstance.close();
    }
}