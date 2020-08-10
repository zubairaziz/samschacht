import jump from 'jump.js';

const getStuckHeaderHeight = () => {
  const header = document.querySelector('nav');
  if (header) {
    return header.offsetHeight;
  }
};

const scrollTo = (target, additionalOffset = 0, callback) => {
  const headerHeight = getStuckHeaderHeight();
  const headerOffset = getStuckHeaderHeight() * -1;
  const offset = headerOffset - additionalOffset;

  jump(target, { duration: 500, offset, callback });
};

export default scrollTo;
