import EmblaCarousel from 'embla-carousel';

const instances = new WeakMap();

export function initCaseStudiesCarousel(root = document) {
  root.querySelectorAll('.saas-case-studies').forEach((section) => {
    const viewport = section.querySelector('.saas-case-studies__viewport');

    if (!viewport) {
      return;
    }

    const existing = instances.get(section);

    if (existing) {
      existing.destroy();
      instances.delete(section);
    }

    const slides = viewport.querySelectorAll('article');

    if (slides.length < 2) {
      return;
    }

    const embla = EmblaCarousel(viewport, { align: 'start', loop: false });
    const prev = section.querySelector('[data-case-studies-prev]');
    const next = section.querySelector('[data-case-studies-next]');
    const dots = section.querySelectorAll('[data-case-studies-dot]');

    const onSelect = () => {
      const selected = embla.selectedScrollSnap();

      dots.forEach((dot, index) => {
        const isActive = index === selected;
        dot.classList.toggle('w-10', isActive);
        dot.classList.toggle('bg-primary', isActive);
        dot.classList.toggle('w-5', !isActive);
        dot.classList.toggle('bg-border', !isActive);
      });
    };

    prev?.addEventListener('click', () => embla.scrollPrev());
    next?.addEventListener('click', () => embla.scrollNext());

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => embla.scrollTo(index));
    });

    embla.on('select', onSelect);
    onSelect();
    instances.set(section, embla);
  });
}
