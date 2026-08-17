import { RichText, useBlockProps } from '@wordpress/block-editor';

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

export default function save({ attributes }) {
  const { question, answer } = attributes;

  const blockProps = useBlockProps.save({
    className:
      'saas-faq__item group rounded-2xl border border-border-soft bg-surface px-6 py-5',
  });

  return (
    <div {...blockProps}>
      <h3 className="m-0">
        <button
          type="button"
          className="saas-faq__trigger flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent p-0 text-left"
          aria-expanded="false"
        >
          <RichText.Content
            tagName="span"
            className="text-large font-semibold text-ink"
            value={question}
          />
          <FaqToggleIcon />
        </button>
      </h3>
      <div
        className="saas-faq__panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-[.is-open]:grid-rows-[1fr]"
        aria-hidden="true"
      >
        <div className="saas-faq__panel-inner min-h-0 overflow-hidden">
          <RichText.Content
            tagName="p"
            className="mt-3 mb-0 max-w-3xl text-[1.125rem] leading-6.5 text-muted"
            value={answer}
          />
        </div>
      </div>
    </div>
  );
}
