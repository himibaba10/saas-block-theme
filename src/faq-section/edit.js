import {
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [
  'core/heading',
  'core/paragraph',
  'saas-block-theme/faq-item',
];

const HEADING_CLASS =
  'mt-0 mb-10 text-[clamp(2rem,1.5rem+2vw,3rem)] font-semibold tracking-[-0.03em] text-ink';

const TEMPLATE = [
  [
    'core/heading',
    {
      level: 2,
      content: 'Frequently Asked Questions',
      className: HEADING_CLASS,
    },
  ],
  [
    'saas-block-theme/faq-item',
    {
      question: 'What is Nebulark?',
      answer:
        'Nebulark is a platform that helps you manage your business operations.',
    },
  ],
];

export default function Edit() {
  const blockProps = useBlockProps({
    className: 'saas-faq',
  });

  const innerBlockProps = useInnerBlocksProps({
    className:
      'saas-faq__inner relative mx-auto max-w-content px-section py-20',
  });

  return (
    <section {...blockProps}>
      <div {...innerBlockProps}>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
          templateLock={false}
        />
      </div>
    </section>
  );
}
