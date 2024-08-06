import { photos } from './data';
import { isEscKeyDown } from './until';

const AvatarDescription = {
  HEIGHT: 35,
  WIDTH: 35
};

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-shown-count'); // template = socialComment
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

const picturesContainer = document.querySelector('.pictures');

const createComment = function (comment, template) {
  const newComment = template.cloneNode(true); // template = socialComment
  const avatar = newComment.querySelector('.social__picture');

  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.HEIGHT = AvatarDescription.HEIGHT;
  avatar.WIDTH = AvatarDescription.WIDTH;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closeButton.removeEventListener('click', closeBigPhoto);
};

closeButton.addEventListener('click', () => {
  closeBigPhoto();
});

const onEscKeyDown = (evt) => {
  if (isEscKeyDown(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const openBigPicture = (id) => {
  const picture = photos.find((photo) => photo.id === Number(id));
  if (!picture) {
    return;
  }
  bigPictureImg.querySelector('img').src = picture.url;
  bigPictureImg.querySelector('img').alt = picture.alt;
  bigPictureLikes.textContent = picture.likes;
  socialCommentTotalCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;
  socialComments.innerHTML = '';

  picture.comments.forEach((comment) => {
    socialComments.appendChild(createComment(comment, socialComment));
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
  document.addEventListener('keydown', onEscKeyDown);
};

const clickPicture = function (evt) {
  evt.preventDefault();
  const targetPicture = evt.target.closest('.picture');
  const pictureId = targetPicture.dataset.id;
  if (pictureId) {
    bigPicture.classList.remove('hidden');
    openBigPicture(pictureId);
  }
};

picturesContainer.addEventListener('click', clickPicture);

