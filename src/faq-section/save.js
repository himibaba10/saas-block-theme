import {
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function save() {
  const blockProps = useBlockProps.save({
    className: 'saas-faq',
  });

  const innerBlockProps = useInnerBlocksProps.save({
    className:
      'saas-faq__inner relative mx-auto max-w-content px-section py-20',
  });

  return (
    <section {...blockProps}>
      <div {...innerBlockProps}>
        <InnerBlocks.Content />
      </div>
    </section>
  );
}
