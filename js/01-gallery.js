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
function onImgClick(evnt) {
  evnt.preventDefault();
  if (evnt.target.nodeName !== "IMG") return;

  const isItemImage = evnt.target.classList.contains(
    "gallery__image"
  );
  if (!isItemImage) return;

  const currentImgUrl = evnt.target.dataset.source;

  const instance = basicLightbox.create(
    `
 		<img src="${currentImgUrl}" width="1280" height="auto"/>
         `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener(
          "keydown",
          onEscKeyPress
        );
      },
    }
  );
  instance.show();

  function onEscKeyPress(evnt) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = evnt.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
  }
}
console.log(galleryItems);

//варіант 2 (не годиться)
/*const list = document.querySelector(".gallery");
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
list.innerHTML = createMarkup;*/

//варіант 3 (не годиться)
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

//варіант 4 (не годиться)
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
