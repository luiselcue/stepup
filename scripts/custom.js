const backgroundWrapper = document.getElementById('header-featured-image-wrapper');
backgroundWrapper.style.opacity = 1;
const scrollLimit = 300;
window.onscroll = function() {
  let backgroundOpacit;
  const currentScroll = window.scrollY;
  if (currentScroll <= scrollLimit) {
    backgroundOpacity = parseFloat(1 - currentScroll/scrollLimit).toFixed(2);
  } else {
    backgroundOpacity = 0;
  }
  backgroundWrapper.style.opacity = backgroundOpacity;
}
