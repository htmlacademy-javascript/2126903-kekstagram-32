const sumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const createThumbnail = ({ id, url, description, likes, comments }) => {

  const thumbnail = sumbnailTemplate.cloneNode(true);

  thumbnail.setAttribute('data-id', id);
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

