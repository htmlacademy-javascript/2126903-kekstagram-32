
// const pictureTemplate = document.querySelector('#picture').content;
// const pictureThumbnail = pictureTemplate.querySelector('.picture');
// const picturesContainer = document.querySelector('.pictures');
// const pictureFragment = document.createDocumentFragment();

// const photos = createPhotos();

// photos.forEach((photo) => {
//   const pictureElement = pictureThumbnail.cloneNode(true);
//   pictureElement.querySelector('.picture__img').src = photo.url;
//   pictureElement.querySelector('.picture__img').alt = photo.description;
//   pictureElement.querySelector('.picture__likes').textContent = photo.likes;
//   pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

//   pictureFragment.appendChild(pictureElement);
// });

// picturesContainer.appendChild(pictureFragment);

// export { picturesContainer };

const sumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');


const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = sumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const generateThumbnail = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    pictureFragment.appendChild(thumbnail);
  });

  picturesContainer.appendChild(pictureFragment);
};

export { generateThumbnail };
