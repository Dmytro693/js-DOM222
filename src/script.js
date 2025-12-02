// Отримуємо елементи
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const clearGalleryBtn = document.getElementById("clearGalleryBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const reverseGalleryBtn = document.getElementById("reverseGalleryBtn");

let page = 1;

// Функція завантаження 4 нових картинок
async function loadImages() {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`);
        const data = await response.json();

        data.forEach(img => {
            const imageElement = document.createElement("img");
            imageElement.src = `https://picsum.photos/id/${img.id}/400/300`;
            imageElement.alt = `Фото автора ${img.author}`;
            gallery.appendChild(imageElement);
        });

        page++;
    } catch (error) {
        console.error("Помилка завантаження зображень:", error);
    }
}

// 1) Завантажити ще 4 картинки
loadMoreBtn.addEventListener("click", () => {
    loadImages();
});

// 2) Очистити галерею
clearGalleryBtn.addEventListener("click", () => {
    gallery.innerHTML = "";
});

// 3) Видалити останню картинку
removeLastBtn.addEventListener("click", () => {
    if (gallery.lastElementChild) {
        gallery.removeChild(gallery.lastElementChild);
    }
});

// 4) Перевернути галерею
reverseGalleryBtn.addEventListener("click", () => {
    const items = Array.from(gallery.children); // копія елементів
    gallery.innerHTML = "";
    items.reverse().forEach(item => gallery.appendChild(item));
});

// Початкове завантаження 4 картинок при відкритті сторінки
loadImages();
