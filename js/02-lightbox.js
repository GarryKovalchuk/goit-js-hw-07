import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
list.insertAdjacentHTML("beforeend", itemsMarkup);
list.addEventListener("click", onImgClick);

function createGalleryItemsMarkup(items) {
  return items

    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
    .join("");
}

console.log(galleryItems);
