import { fetchImages } from './api.js';
import {
    renderImages,
    clearGallery,
    removeLastImage,
    reverseGallery,
} from './gallery.js';

const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const clearGalleryBtn = document.getElementById('clearGalleryBtn');
const removeLastBtn = document.getElementById('removeLastBtn');
const reverseGalleryBtn = document.getElementById('reverseGalleryBtn');

let page = 1;

async function loadImages() {
    try {
        const images = await fetchImages(page, 4);
        renderImages(gallery, images);
        page += 1;
    } catch (error) {
        console.error('Помилка завантаження зображень:', error);
    }
}

loadMoreBtn.addEventListener('click', loadImages);
clearGalleryBtn.addEventListener('click', () => clearGallery(gallery));
removeLastBtn.addEventListener('click', () => removeLastImage(gallery));
reverseGalleryBtn.addEventListener('click', () => reverseGallery(gallery));

loadImages();
