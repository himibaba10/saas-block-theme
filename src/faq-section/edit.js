import { useBlockProps } from '@wordpress/block-editor';

import { FaqHeadingEdit } from './components/faq-heading';
import { FaqListEdit } from './components/faq-list';

export default function Edit({ attributes, setAttributes }) {
  const { heading, faqs = [] } = attributes;

  const blockProps = useBlockProps({
    className: 'saas-faq',
  });

  return (
    <section {...blockProps}>
      <div className='relative mx-auto max-w-content px-section py-20'>
        <FaqHeadingEdit heading={heading} setAttributes={setAttributes} />
        <FaqListEdit faqs={faqs} setAttributes={setAttributes} />
      </div>
    </section>
  );
}
