import { initCaseStudiesCarousel } from './embla';

const init = (root = document) => {
  initCaseStudiesCarousel(root);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => init());
} else {
  init();
}
