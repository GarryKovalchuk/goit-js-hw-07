import { galleryItems } from "./gallery-items.js";
// Change code below this line

//варіант 1
const list = document.querySelector(".gallery");
const createMarkup = galleryItems
  .map((link) => (
    <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="small-image.jpg"
          data-source="large-image.jpg"
          alt="Image description"
        />
      </a>
    </li>
  ))
  .join("");
list.innerHTML = createMarkup;

//варіант 2
/*const list = document.querySelector(".gallery");
list.innerHTML("beforeend", createMarkup(galleryItems));

function createMarkup(galleryItems) {
  return galleryItems
    .map((link) => (
      <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"
          />
        </a>
      </li>
    ))
    .join("");
}*/

//варіант 3
/*function createGalleryItem(item) {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"
          />
        </a>
      </li>
  `;
}

// Створення розмітки для всіх елементів галереї
let galleryMarkup = galleryItems
  .map(createGalleryItem)
  .join("");

// Додавання розмітки до DOM
document.querySelector(".gallery").innerHTML =
  galleryMarkup;*/

//не дає перекинутись на нову сторінку
/*const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
});*/
console.log(galleryItems);
