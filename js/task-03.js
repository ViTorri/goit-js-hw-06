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

// const imgGalleryRef = document.querySelector('.gallery');
// console.log(imgGalleryRef);

// images.forEach(image => {
//   const itemImg = document.createElement('img');
//   itemImg.src = image.url;
//   itemImg.alt = image.alt;
  
//   const item = document.createElement('li');
//   item.classList.add('gallery-item');
//   item.append(itemImg);
//   imgGalleryRef.append(item);
// });

// ======================шаблонные строки + insertAdjacentHTML=====================

const imgGalleryRef = document.querySelector('.gallery');

images.forEach(image => {
  const item = `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}">
    </li>`;
  imgGalleryRef.insertAdjacentHTML('beforeend', item);
});

