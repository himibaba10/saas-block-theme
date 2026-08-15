import { useBlockProps } from '@wordpress/block-editor';
import { store } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useCallback, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import useEmblaCarousel from 'embla-carousel-react';

import { CaseStudiesNav, CaseStudyCard } from './components';

export default function Edit() {
  const clients = useSelect(
    (select) =>
      select(store).getEntityRecords('postType', 'client', {
        per_page: 20,
        status: 'publish',
      }),
    [],
  );

  const studies = (clients || [])
    .map((post) => post.case_study)
    .filter((study) => study?.company);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const blockProps = useBlockProps({
    className: 'saas-case-studies relative overflow-hidden',
  });

  if (clients === null) {
    return (
      <section {...blockProps}>
        <p className='px-section py-12 text-muted'>
          {__('Loading case studies…', 'saas-block-theme')}
        </p>
      </section>
    );
  }

  if (!studies.length) {
    return (
      <section {...blockProps}>
        <p className='px-section py-12 text-muted'>
          {__(
            'No published clients yet. Add some under Clients.',
            'saas-block-theme',
          )}
        </p>
      </section>
    );
  }

  return (
    <section {...blockProps}>
      <div className='relative mx-auto max-w-content'>
        {studies.length > 1 ? (
          <CaseStudiesNav onPrev={scrollPrev} onNext={scrollNext} />
        ) : null}

        <div
          className={`overflow-hidden ${studies.length > 1 ? 'mt-12' : ''}`}
          ref={emblaRef}
        >
          <div className='flex gap-6'>
            {studies.map((study) => (
              <CaseStudyCard key={study.company} study={study} />
            ))}
          </div>
        </div>

        {studies.length > 1 ? (
          <div className='mt-8 flex gap-2'>
            {studies.map((study, index) => (
              <button
                key={study.company}
                type='button'
                aria-label={`${__('Go to', 'saas-block-theme')} ${
                  study.company
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={
                  index === selected
                    ? 'h-1.5 w-10 cursor-pointer rounded-full border-0 bg-primary p-0 transition-all'
                    : 'h-1.5 w-5 cursor-pointer rounded-full border-0 bg-border p-0 transition-all'
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
