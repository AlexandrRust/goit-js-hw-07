import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryImg = makeGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('afterbegin', galleryImg);


galleryContainer.addEventListener('click', fullImg);

    var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

function makeGalleryItems(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return  `<a class="gallery__item" href="${original}">
                        <img class="gallery__image"
                        src="${preview}" alt="${description}" />
                        </a>
                    `;
        })
        .join(''); 
}

function fullImg(event) {
        event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
}

