const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];



const gallaryList = document.querySelector('ul.gallery.js-gallery');
const modalCard = document.querySelector('.js-lightbox'); 
const modalImg = document.querySelector('.lightbox__image');
const modalButton = document.querySelector('[data-action="close-lightbox"]');
// console.log(modalButton);
const modalOverlay = document.querySelector('.lightbox__overlay');
let url = '';


const gallaryListMarckup = createGallaryListMarckup(galleryItems);
gallaryList.insertAdjacentHTML('afterbegin', gallaryListMarckup);

function createGallaryListMarckup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;})
    .join('');
  
} 
// console.log(gallaryList);

gallaryList.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  // console.log(e);
  // console.dir('image:', e.target);
  // console.dir('eventListener:', e.currentTarget);
  e.preventDefault();

  const target = e.target;
  url = target.dataset.source
  modalImg.setAttribute('src', url);
  modalCard.classList.add('is-open');

  window.addEventListener('keydown', onEscClose);  
}

modalButton.addEventListener('click', onCloseModal);

function onCloseModal() {
    
  modalImg.setAttribute('src', '');

  if (modalCard.classList.contains('is-open')) {
    modalCard.classList.remove('is-open');
}
  
  window.removeEventListener('keydown', onEscClose);
};

function onEscClose(e) {
  console.log(e);
  
  if (e.keyCode === 27) {
    onCloseModal();
  }
}

modalOverlay.addEventListener('click', onOverlayClose);

function onOverlayClose(e) {
  if (e.currentTarget === e.target) {
  onCloseModal();  
  }
  console.log(e)
}
   
const keyPressed = function (e) {
  const key = e.code;
  switch (key) {
    case 'ArrowLeft':
      images.forEach((elem, index, arr) => {
        if (elem.original === url) {
          if (index === 0) {
            index = arr.length;
          }
          url = arr[index - 1].original;
          return
        }
      });
      modalImg.setAttribute('src', url);
      break;
    case 'ArrowRight':
      let currentIndex;
      images.forEach((elem, index, arr) => {
        if (elem.original === url) {
          currentIndex = index;
          return
        }
      })
      currentIndex = currentIndex === images.length - 1 ? currentIndex = -1 : currentIndex;
      url = images[currentIndex + 1].original;
      modalImg.setAttribute('src', url);
      break;
     
  }
}


    // Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

