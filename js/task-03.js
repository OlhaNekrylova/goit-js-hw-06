const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const makeGalleryMarkup = images
.map(images => {
  const {url, alt} = images;
  return `
  <li><img src="${images.url}" alt="${images.alt}"></img></li>
  `;
})
.join('');

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryMarkup);
console.log(galleryEl);


// const itemEl = document.querySelector('.gallery > li');
// galleryEl.style.display = flex;
// // galleryEl.style.gap = ${30}px;
// itemEl.style.display = block;
// // itemEl.style.max-width = ${100%};
// itemEl.style.height = auto;

// function addClass () {
//   [...itemEl].forEach((itemEl) => {
//     itemEl.classList.add('card');
// })}
// galleryEl.classList.add('card-list');
// itemEl.classList.add('card');
