/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/faq-section/view.js ***!
  \*********************************/
(() => {
  const initFaqAccordion = (root = document) => {
    root.querySelectorAll('.saas-faq').forEach(faq => {
      if (faq.dataset.faqReady === 'true') {
        return;
      }
      faq.dataset.faqReady = 'true';
      faq.addEventListener('click', event => {
        const trigger = event.target.closest('.saas-faq__trigger');
        if (!trigger || !faq.contains(trigger)) {
          return;
        }
        const item = trigger.closest('.saas-faq__item');
        if (!item) {
          return;
        }
        const willOpen = !item.classList.contains('is-open');
        faq.querySelectorAll('.saas-faq__item.is-open').forEach(openItem => {
          if (openItem === item) {
            return;
          }
          openItem.classList.remove('is-open');
          const openTrigger = openItem.querySelector('.saas-faq__trigger');
          const openPanel = openItem.querySelector('.saas-faq__panel');
          openTrigger?.setAttribute('aria-expanded', 'false');
          openPanel?.setAttribute('aria-hidden', 'true');
        });
        item.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', String(willOpen));
        item.querySelector('.saas-faq__panel')?.setAttribute('aria-hidden', String(!willOpen));
      });
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFaqAccordion());
  } else {
    initFaqAccordion();
  }
})();
/******/ })()
;
//# sourceMappingURL=view.js.map