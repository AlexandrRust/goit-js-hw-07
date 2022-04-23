import { galleryItems } from './gallery-items.js';



const galleryContainer = document.querySelector('.gallery');
const galleryImg = makeGalleryItems(galleryItems);



galleryContainer.insertAdjacentHTML('afterbegin', galleryImg);


galleryContainer.addEventListener('click', fullImg);

function makeGalleryItems(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return  `<div class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                            />
                        </a>
                    </div>`;
        })
        .join(''); 
}


function fullImg(event) {
        event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const elementData = event.target.dataset.source;
    return createLightbox(elementData);
}

function createLightbox(elementData) {
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${elementData}">
	`, {
        onShow: (instance) => {
            
            document.addEventListener("keydown", event => {
                if (event.key === "Escape") {

                    instance.close()

                }

            })
        }
    })
        instance.show()
};
