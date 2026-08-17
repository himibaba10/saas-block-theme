import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function FaqToggleIcon() {
  return (
    <span
      className="saas-faq__icon flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-2xl text-ink transition-transform duration-300 ease-out group-[.is-open]:rotate-45"
      aria-hidden="true"
    >
      +
    </span>
  );
}

export default function Edit({ attributes, setAttributes }) {
  const { question, answer } = attributes;

  const blockProps = useBlockProps({
    className:
      'saas-faq__item relative rounded-2xl border border-border-soft bg-surface px-6 py-5',
  });

  return (
    <div {...blockProps}>
      <div className="flex items-start justify-between gap-4">
        <RichText
          tagName="h3"
          className="m-0 text-large font-semibold text-ink"
          value={question}
          onChange={(value) => setAttributes({ question: value })}
          placeholder={__('Question…', 'saas-block-theme')}
          allowedFormats={[]}
        />
        <FaqToggleIcon />
      </div>
      <RichText
        tagName="p"
        className="mt-3 mb-0 max-w-3xl text-[1.125rem] leading-6.5 text-muted"
        value={answer}
        onChange={(value) => setAttributes({ answer: value })}
        placeholder={__('Answer…', 'saas-block-theme')}
        allowedFormats={[]}
      />
    </div>
  );
}
