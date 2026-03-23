export function renderImages(galleryElement, images) {
    images.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = `https://picsum.photos/id/${img.id}/400/300`;
        imageElement.alt = `Фото автора ${img.author}`;
        galleryElement.appendChild(imageElement);
    });
}

export function clearGallery(galleryElement) {
    galleryElement.innerHTML = '';
}

export function removeLastImage(galleryElement) {
    if (galleryElement.lastElementChild) {
        galleryElement.removeChild(galleryElement.lastElementChild);
    }
}

export function reverseGallery(galleryElement) {
    const items = Array.from(galleryElement.children);
    galleryElement.innerHTML = '';
    items.reverse().forEach(item => galleryElement.appendChild(item));
}
