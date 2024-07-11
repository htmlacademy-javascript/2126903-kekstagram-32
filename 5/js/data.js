import { getRandomInteger, getRandomArrayElement } from './until.js';

const PHOTO_COUNT = 25;

const DESCRIPTION = [
  'Очень красивое фото!',
  'Посмотрите какой вид',
  'Это фото обязательно захватит мир!',
  'Посмотрите какой закат',
  'Случайная фотография, а получилось так классно!',
  'Я прирожденный фотограф'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = ['Андрей', 'Максим', 'Дмитрий', 'Ольга', 'Мария', 'Елена', 'Иван', 'Анна',];

const urlCount = {
  MIN: 1,
  MAX: 25
};

const likesCount = {
  MIN: 15,
  MAX: 200
};

const commentsCount = {
  MIN: 0,
  MAX: 30
};

const avatarCount = {
  MIN: 1,
  MAX: 6
};

function createId() {
  let currentCount = 1;

  return function () {
    return currentCount++;
  };
}

const createIdPhoto = createId();
const createIdComment = createId();

const createComment = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomArrayElement(avatarCount)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAME[getRandomInteger(0, NAME.length - 1)],
});

const createArrayComments = () => Array.from({ length: getRandomArrayElement(commentsCount) }, createComment);

const createPhoto = () => ({
  id: createIdPhoto(),
  url: `photos${getRandomArrayElement(urlCount)}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomArrayElement(likesCount),
  comments: createArrayComments()
});

const photos = Array.from({ length: PHOTO_COUNT }, createPhoto);

export { photos };
